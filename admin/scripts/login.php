<?php 

function login($username, $password){
    $pdo = Database::getInstance()->getConnection();
    //Check existance of account
    $check_exist_query = 'SELECT COUNT(*) FROM tbl_accounts WHERE accounts_username= :username';
    $account_set = $pdo->prepare($check_exist_query);
    $account_set->execute(
        array(
            ':username' => $username,
        )
    );

    if($account_set->fetchColumn()>0){
        //Log account in
        $get_account_query = 'SELECT * FROM tbl_accounts WHERE accounts_username = :username';
        $get_account_query .= ' AND accounts_password = :password';
        $account_check = $pdo->prepare($get_account_query);
        $account_check->execute(
            array(
                ':username'=>$username,
                ':password'=>$password
            )
        );

        while($found_account = $account_check->fetch(PDO::FETCH_ASSOC)){
            $id = $found_account['accounts_id'];

            // Sets up an array for account information
            $account = array();

            // Sets account information
            $account['id'] = $found_account['accounts_id'];
            $account['username'] = $found_account['accounts_username'];
        }

        // Determines whether to return account (if login is successful) or display a message (if login is unsuccessful)
        if(isset($id)) {
            // Return the account
            return $account;
        } else {
            return false;
        }
        
    } else {
        // Account does not exist
        return false;
    }
}