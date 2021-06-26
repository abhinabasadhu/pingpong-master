<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="index.css">';
    echo '</head>';
    echo '<body class="coverimg">';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation

    echo '<div class="logo"><img src="css/image/l.jpg"width="140"height="50"><div2 id= "m">Welcome to Ping Pong Flash</div2></div>'; 
    echo '<div class="navigation">';
    echo '<ul>';
    echo '<li>';
    echo '<li:last-child>';
    echo '<li a>';
    echo '<li a:hover>';
    //Array to link pages
    $linkNames = array("Home", "GamePlay", "SignUp", "Settings","Score");
    $linkAddresses = array("home.php", "gameplay.php", "signup.php", "settings.php","score.php",);
    
    //Output of navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<li><a ';
        if($linkNames[$x] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a></li>';
    }
    echo' </li a:hover>';
    echo '</li a>';
    echo '</li:last-child>';
    echo '</li>';
    echo '</ul>';
    echo '</div>';
    
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '</body>';
    echo '</html>';
}
