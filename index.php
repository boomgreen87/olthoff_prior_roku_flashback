<!DOCTYPE html>
<html lang="en">
<!-- ROKU FLASHBACK APP BY MIKE PRIOR AND SCOTT OLTHOFF -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.js Single-File JavaScript Component Demo</title>
  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
      crossorigin="anonymous"></script>
  
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

    <link rel="stylesheet" href="css/main.css">
  
  </head>

<body>

    <!-- Facebook JS SDK -->
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"></script>

    <main id="app">
        <?php include 'templates/header.php'; ?>

        <div class="router-view">
            <!-- first thing in component templates should be a container -->
            <router-view @authenticated="setAuthenticated" @admin="setAdmin"></router-view>
        </div>

        <!-- Footer -->
        <footer>
            <p class="copy">&copy; 2020 Roku Flashback App By Scott Olthoff and Michael Prior</p>
            <div class="fb-share-button" data-href="https://www.youtube.com/watch?v=qtRKdVHc-cE" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqtRKdVHc-cE&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
        </footer>
        <!-- End Footer --> 
    </main>

<!-- Script Tags -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
        integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
        crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
        integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>

<script type="module" src="js/main.js"></script>
    
</body>
</html>