<?php
    //Include the PHP functions to be used on the page 
    include('main.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - settings");
    outputBannerNavigation("settings");
?>

<!-- Contents of the page -->
<h1>
        Please select the color you want for your game background:<br><br>
        <input type="radio" name="color" id="" value="java">Black
        <input type="radio" name="color" id="" value="jave">Blue
        <input type="radio" name="color" id="" value="java">Orange
        <input type="radio" name="color" id="" value="java">Green

    </h1>
    
    <h2>
        Please select the ball speed: <br><br>
        <input type="radio" name="color" id="" value="java">5
        <input type="radio" name="color" id="" value="jave">10<br><br>
        Turn On or Off Sound:
        <input type="radio" name="color" id="" value="java">On
        <input type="radio" name="color" id="" value="jave">Off
    </h2>

<?php
    //Output the footer
    outputFooter();
