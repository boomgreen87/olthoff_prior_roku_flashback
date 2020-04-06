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