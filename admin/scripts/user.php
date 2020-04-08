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
                $currentuser['admin'] = $user['users_admin'];
                $currentuser['usertype'] = $user['users_child_account'];
                $currentuser['vidrating'] = $user['users_vid_rating'];
                $currentuser['explicitmusic'] = $user['users_explicit_music'];

                $users[] = $currentuser;
            }

            return json_encode($users);
        } else {
            return false;
        }
    }

    function addUser($id, $icon, $displayName, $admin, $userType, $vidAgeRating, $explicitMusic) {
        // Connects to database
        $pdo = Database::getInstance()->getConnection();
        
        // Inserts the information into the database
        $add_user_query = 'INSERT INTO tbl_users(users_accounts_id, users_icon, users_display_name, users_admin, users_child_account, users_vid_rating, users_explicit_music)'; 
        $add_user_query .= ' VALUES (:id, :icon, :displayName, :admin, :userType, :vidAgeRating, :explicitMusic)';
        $add_user = $pdo->prepare($add_user_query);
        $add_user_result = $add_user->execute(
            array(
                ':id'=>$id,
                ':icon'=>$icon,
                ':displayName'=>$displayName,
                ':admin'=>$admin,
                ':userType'=>$userType,
                ':vidAgeRating'=>$vidAgeRating,
                ':explicitMusic'=>$explicitMusic
            )
        );

        // Checks to make sure user was added
        $last_uploaded_id = $pdo->lastInsertId();

        if($add_user_result && !empty($last_uploaded_id)){
            return true;
        } else {
            return false;
        }
    }