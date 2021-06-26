
<?php
    //Include the PHP functions to be used on the page 
    include('main.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Game");
    outputBannerNavigation("Gameplay");
?>
<link rel="stylesheet" href="index.css">

<!-- Contents of the page -->
<div style="width: 100%; height:100%; overflow: hidden;">
    <div style="width: 600px; min-height: 500px; float: left;"> 
    <canvas id="ping" width="600" height="400"></canvas>
 </div>
<div style="margin-left: 620px;"> 
<h3 style="margin: 0px;">Game Play</h3>
<h4 style="color:white;"id="score-game"> You : 0 | Computer : 0</h4> </div>
</div>

<script src="ping.js"></script>

