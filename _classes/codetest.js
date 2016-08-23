#1
Write a key value pair json object for an object called "data" with a person that has a name and age.


#2
Log that persons name and age to display like this ex.: "Steven is 34"


#3
Consider the following code:

(function() {
   var a = b = 5;
})();

console.log(b);

What will be printed on the console?


#4
Write a method or function that would print UNC Wins! UNC Wins! UNC Wins when the line below runs.

console.log('UNC Wins! '.repeatify(3));

#5
What’s the result (what would the log show) of executing this code and why.

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();


#6
Write a function that prints to an html ID that displays the headline in an html link for as many items are are in this object.

data[{
  headline: "The quick brown fox",
  byline: "John Doe"
},
{
  headline: "The red wagon",
  byline: "Jackie Spinner"
},
{
  headline: "The pink rose",
  byline: "Ada Lovelace"
}
]

#7
Write a CSS style for a 100 px high blue box and a 100 px high red box. Both should fill the width of their parent container and both have a black 1 pixel border. They should have a white space between the two but not on either side.

#8
Rewrite this code to be more efficent. Also, fix any errors that might be in the code.

h2{
  font-family: Times;
  color: black
}

h3{
  font-family: Times;
  color: black;
  border-bottom: black;
}

h4{
  font-family: Times;
  color: blue;
  fontsize: +2em;
}

#9
There are two reasons this code found the body of an html page would not work. Rewrite the code to make it place the name Steven in the div.
<script>
document.getElementById("text1").innerHTML("Steven");
</script>

  <div class="text1"></div>

#10
You have a project to create an interface/dashboard that uses dynamic data from an API. This one-page app should load the latest data on refresh or when the user clicks a "refresh" button. Explain in english the programatic/logic steps you would go through to make this project. For example, "I would first load the data and then if successful I would then...".

Part 2 is the write the names of the functions or methods you would use to acomplish this goal.
ex.
init()
doSomethingElse()
thenAnotherSomething()
