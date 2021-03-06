<?php
    function createAccount($email, $fname, $lname, $country, $username, $password){
        $pdo = Database::getInstance()->getConnection();
        
        // Sets up create user query
        $create_user_query = 'INSERT INTO tbl_accounts(accounts_email, accounts_first_name, accounts_last_name, accounts_country, accounts_username, accounts_password)';
        $create_user_query .= ' VALUES(:email, :fname, :lname, :country, :username, :password)';
    
        // Runs query to create a new user with provided data
        $create_user_set = $pdo->prepare($create_user_query);
        $create_user_result = $create_user_set->execute(
            array(
                ':email'=>$email,
                ':fname'=>$fname,
                ':lname'=>$lname,
                ':country'=>$country,
                ':username'=>$username,
                ':password'=>$password
            )
        );
    
        //Redirects to index.php if user is created successfully. Otherwise, returns an error message.
        if($create_user_result){

            // Gets created ID for account
            $account_id = $pdo->lastInsertId();

            // Sets up an array for account information
            $account = array();

            // Sets account information
            $account['id'] = $account_id;
            $account['username'] = $username;

            // Return the account
            return $account;
        }else{
            return false;
        }
    }

    // Gets an account
    function getAccount($id) {
        // Sets up database connection
        $pdo = Database::getInstance()->getConnection();

        // Fetches the product based on $id
        $get_account_query = "SELECT * FROM tbl_accounts WHERE accounts_id = :id";
        $get_account = $pdo->prepare($get_account_query);
        $get_account_result = $get_account->execute(
            array(
                ':id'=>$id
            )
        );

        // Returns the merch data if the above query went through.
        // Otherwise, returns some error message.
        if($get_account_result && $get_account->rowCount()) {
            while($account= $get_account->fetch(PDO::FETCH_ASSOC)){
                $currentaccount = array();

                // Set user information
                $currentaccount['id'] = $account['accounts_id'];
                $currentaccount['email'] = $account['accounts_email'];
                $currentaccount['firstname'] = $account['accounts_first_name'];
                $currentaccount['lastname'] = $account['accounts_last_name'];
                $currentaccount['country'] = $account['accounts_country'];
                $currentaccount['password'] = $account['accounts_password'];
            }

            return $currentaccount;
        } else {
            return false;
        }
    }

    // Edits an account
    function editAccount($id, $email, $fname, $lname, $country, $password) {
        // Sets up database connection
        $pdo = Database::getInstance()->getConnection();

        // Edits the selected account with entered info
        $edit_account_query = "UPDATE tbl_accounts SET accounts_email = :email, accounts_first_name = :fname, accounts_last_name = :lname, ";
        $edit_account_query .= "accounts_country = :country, accounts_password = :password WHERE accounts_id = :id";
        $edit_account = $pdo->prepare($edit_account_query);
        $edit_account_result = $edit_account->execute(
            array(
                ':id'=>$id,
                ':email'=>$email,
                ':fname'=>$fname,
                ':lname'=>$lname,
                ':country'=>$country,
                ':password'=>$password
            )
        );

        // Checks to see if query actually worked
        $affectedRows = $edit_account->rowCount();

        // Returns success or fail result
        if($edit_account_result && $affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }