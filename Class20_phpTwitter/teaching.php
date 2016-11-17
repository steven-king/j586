<?php
$name = "Steven King";
$age = 35;
print "Hello " . $name;
print "You are " . $age
?>


<?php //data types
$a_bool = TRUE;   // a boolean
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string
$an_int = 12;     // an integer

echo gettype($a_bool); // prints out:  boolean
echo gettype($a_str);  // prints out:  string

// If this is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}
echo $an_int;

// If $bool is a string, print it out
// (does not print out anything)
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
?>



<!-- <?php  //function with scope error
$a = "steven";

function Test() {
   print $a;
}
print "My name is ";
Test();
?> -->

<?php  //function with global var
$a = "steven";
function Test() {
   global $a;
   print $a;
}
print "My name is ";
Test();
?>


<?php // array example
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>


<?php  // if example
if ($a > $b) {
   echo "a is bigger than b";
} else {
   echo "a is NOT bigger than b";
}
if ($a > $b) {
   echo "a is bigger than b";
} elseif ($a == $b) {
   echo "a is equal to b";
} else {
   echo "a is smaller than b";
}
?>

<?php  // for loop example
for ($i = 1; $i <= 10; $i++) {
   print $i;
}
?>

<?php  // for each loop example
$arr = array(1, 2, 3, 4);
foreach ($arr as $value) {
   echo $value;
}
?>


<?php  // switch example
switch ($i) {
case 0:
   echo "i equals 0";
   break;
case 1:
   echo "i equals 1";
   break;
case 2:
   echo "i equals 2";
   break;
}
?>
