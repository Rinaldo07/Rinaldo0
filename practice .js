var English=document.getElementById("english")
var Tamil=document.getElementById("tamil")
var Maths=document.getElementById("maths")
var Science=document.getElementById("science")
var Social=document.getElementById("social")


var calculateinput=document.getElementById("calculate")
var Total=document.getElementById("total")
var Average=document.getElementById("average")
var Result=document.getElementById("result")

var Studentsmarks=document.getElementById("studentsmarks")
var Overlay =document.getElementById("overlay")

function calculate()
{
var Englishinput=Number(English.value)
var Tamilinput=Number(Tamil.value)
var Mathsinput=Number(Maths.value)
var Scienceinput=Number(Science.value)
var Socialinput=Number(Social.value)

var totalinput=Englishinput+Tamilinput+Mathsinput+Scienceinput+Socialinput
Total.textContent="Total:"+totalinput

var average=(totalinput/500)*100
Average.textContent="Percentage:"+Math.trunc(average)+"%"

if(average>=50 && average<=100)
{
    Result.textContent="Result:"+" Very Good"
}

else if(average>=30 && average<=50)
{
    Result.textContent="Result:"+"Need to improve"
}

else if(average>=20 && average<=30)
{
   Result.textContent="Result:"+"Poor in academics"
}

else{
    "no data"
}

Overlay.style.display="block"
Studentsmarks.style.display="block"
Studentsmarks.style.fontFamily="italic"
Studentsmarks.style.display="flex"
Studentsmarks.display.fontFamily="Segoe UI"





}

function closemarks()
{
    Overlay.style.display="none"
    Studentsmarks.style.display="none"
}


