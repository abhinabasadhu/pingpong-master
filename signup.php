<?php
    //Include the PHP functions to be used on the page 
    include('main.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - signup");
    outputBannerNavigation("signup");
?>

<!-- Contents of the page -->
<h1 style="margin:0px">
        Please enter all the details asked below to Sign Up:
    </h1>
    <div class="signup-page">
    <div class="form">
    <form style="margin:0px" id="y">
        Name:<br>
        <input id="usernameInput" type="text" ><br><br> User Id:<br>
        <input id="userIdInput" type="text" ><br><br> Password:
        <br>
        <input id="passwordInput"type="password"  maxlenght="10"><br><br>
         Email ID:<br>
        <input id="emailInput"type="text"><br>
        <button onclick="signUp()">Sign Up</button>
        
    </form>
<script src="signup.js"></script>

 