<?php 
    function getAllUsers($id){
        $pdo = Database::getInstance()->getConnection();

        // Selects all users of logged in account
        $get_user_query = "SELECT * FROM tbl_users WHERE users_accounts_id = $id";
        $get_user_set = $pdo->prepare($get_user_query);
        $get_user_result = $get_user_set->execute();

        $users = array();

        if($get_user_result) {
            while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
                $currentuser = array();

                // Set user information
                $currentuser['id'] = $user['users_id'];
                $currentuser['icon'] = $user['users_icon'];
                $currentuser['name'] = $user['users_display_name'];
                $currentuser['bgcolour'] = $user['users_bg_colour'];
                $currentuser['admin'] = $user['users_admin'];

                $users[] = $currentuser;
            }

            return json_encode($users);
        } else {
            return false;
        }
    }