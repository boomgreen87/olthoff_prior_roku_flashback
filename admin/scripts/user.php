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

    // Gets an account
    function getSingleUser($id) {
        // Sets up database connection
        $pdo = Database::getInstance()->getConnection();

        // Fetches the product based on $id
        $get_user_query = "SELECT * FROM tbl_users WHERE users_id = :id";
        $get_user = $pdo->prepare($get_user_query);
        $get_user_result = $get_user->execute(
            array(
                ':id'=>$id
            )
        );

        // Returns the merch data if the above query went through.
        // Otherwise, returns some error message.
        if($get_user_result && $get_user->rowCount()) {
            while($user= $get_user->fetch(PDO::FETCH_ASSOC)){
                $currentuser = array();

                // Set user information
                $currentuser['id'] = $user['users_id'];
                $currentuser['icon'] = $user['users_icon'];
                $currentuser['name'] = $user['users_display_name'];
                $currentuser['admin'] = $user['users_admin'];
                $currentuser['accountType'] = $user['users_child_account'];
                $currentuser['vidRating'] = $user['users_vid_rating'];
                $currentuser['explicitMusic'] = $user['users_explicit_music'];
            }

            return $currentuser;
        } else {
            return false;
        }
    }

    // Edits an user
    function editUser($id, $icon, $displayName) {
        // Sets up database connection
        $pdo = Database::getInstance()->getConnection();

        // Edits the selected user with entered info
        $edit_user_query = "UPDATE tbl_users SET users_icon = :icon, users_display_name = :displayName ";
        $edit_user_query .= "WHERE users_id = :id";
        $edit_user = $pdo->prepare($edit_user_query);
        $edit_user_result = $edit_user->execute(
            array(
                ':id'=>$id,
                ':icon'=>$icon,
                ':displayName'=>$displayName
            )
        );

        // Checks to see if query actually worked
        $affectedRows = $edit_user->rowCount();

        // Returns success or fail result
        if($edit_user_result && $affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    // Edits an user
    function changePermissions($id, $admin, $userType, $vidRating, $explicitMusic) {
        // Sets up database connection
        $pdo = Database::getInstance()->getConnection();

        // Changes the permissions for the selected user to entered info
        $change_permissions_query = "UPDATE tbl_users SET users_admin = :admin, users_child_account = :userType, users_vid_rating = :vidRating, users_explicit_music = :explicitMusic ";
        $change_permissions_query .= "WHERE users_id = :id";
        $change_permissions = $pdo->prepare($change_permissions_query);
        $change_permissions_result = $change_permissions->execute(
            array(
                ':id'=>$id,
                ':admin'=>$admin,
                ':userType'=>$userType,
                ':vidRating'=>$vidRating,
                ':explicitMusic'=>$explicitMusic
            )
        );

        // Checks to see if query actually worked
        $affectedRows = $change_permissions->rowCount();

        // Returns success or fail result
        if($change_permissions_result && $affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }