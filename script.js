<!DOCTYPE html>
<html lang="en">
<head>
<!--bootstrap CSS-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<!--my CSS-->
<link rel="stylesheet" href="mystyle.css">

<!--bootstrap JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<title>Title</title>

<style>
p {
background-color:antiquewhite;
}
</style>

<!--addition -->
<script type="text/javascript">
function addition(){
// static number
// prompt () ;
let a = prompt ("Please enter first number", "");
let b = prompt ("Please enter second number", "");
var c = parseInt (a) + parseInt (b) ;
// The sum of 5 and 6 is 11
console. log("The sum of "+a+" and "+b+" is: "+c);

}
</script>




<script>
function hello()
{
console.log("Hello, Zaid");
}

function color()
{
var userinput = prompt("color")
document.getElementById("chair").style.backgroundColor= userinput;
console.log("Does it work?");
}


</script>



</head>
<body>
<h1 id = "chair" style="background-color:userinput">Heading</h1>
<p> Click <a href="#" onclick="color();";> here</a>"to change color</p>
<p> Click <a href="#" onclick="addition();";> here</a>"Addition or Subtraction</p>
<h1 style="background-color:blue">This is a heading</h1>
<p>This is a paragraph. </p>

<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "The purpose of life is to be happy."'>Don't click me</button>


</body>
</html>






</body>
</html>