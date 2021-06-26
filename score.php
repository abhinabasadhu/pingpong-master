<?php
    //Include the PHP functions to be used on the page 
    include('main.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - score");
    outputBannerNavigation("score");
?>

<!-- Contents of the page -->
<h1>
        TOP SCORES BOARD
</h1>
<style>
table, th, td {
  border: 1px solid white;
}
</style>
<table id="highscore-table" style = "width:100%,color=white">
</table>
<script src="score.js"></script>

