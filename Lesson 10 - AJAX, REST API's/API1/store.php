<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
$food = $_GET['food']; // takes what the user typed in and sets it equal to the food variable
$foodArray = array('fish', 'chips', 'pizza', 'cookie', 'peanuts', 'potatoe');
if(in_array($food, $foodArray))

echo 'We do have ' .$food.'!';
elseif($food== '')

echo 'enter a food item';
else

echo 'We dont have ' .$food.'!';
echo '</response>;'






?>