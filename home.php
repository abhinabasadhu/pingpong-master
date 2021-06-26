<?php
    //Include the PHP functions to be used on the page 
    include('main.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - home");
    outputBannerNavigation("home");
?>

<link rel="stylesheet" href="index.css">
<h6>
    <img src="css/image/h.jpg" width="300" height="150">
</h6>

<!-- Contents of the page -->
<p id="rcorners1">

This game is a Single player game. The Rules of these game are as follows:<br> -> You have to login in to your account to play this game<br> -> You will get only one chance to play this game until u miss out <br>-> You score will be marked on
amount of time you stay in the game against the increasing speed of the ball <br>-> All user scores will be highlighted in the top score bar

</p>
<div class = "home-page">
<div id="y">
         User Name:<br>
        <input id="userId" type="text" placeholder="userId"><br><br> 
         Password:
        <br>
        <input id="password" type="password" placeholder="password" maxlenght="10"><br><br>
        <button onclick="signIn()"> SignIn </button>
        <button onclick = "signOut()" > SignOut </button>
</div>
</div>
<script src="signIn.js"></script>
       

