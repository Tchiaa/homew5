
var str = prompt("შეიყვანეთ ასაკი");
var income=50
if (income >31)  {
var message= ("კარგი ასაკი")

alert (message)
}
else if ( income >=49 && income <=61)
{
    var message=("საშუალო ასაკი")

alert(message)
}

else {
    var message= ("დაისვენე ასაკი")
    alert (message)
}



 
 // დავალება 2

 var citys=["Paris", "london", "lisbon"];

 for (var i = 0; i < citys.length; i ++)
  {
    console.log(citys[i])
    document.write(citys[i]  + "</br>")
    
 }


  var numbers1 = [1, 4, 18, 24, 15, 2, 3, 19, 55]; // ეს გავაკეთე ხელით სანამ მეორე ლექციას ვუყურებდი

  console.log(numbers1[1][2][3][5]);

  console.log(numbers[8]);

  console.log(numbers[0]);


 // oop

  var cinema= {
  name : "cavea",
  languages : [ "Georgian", "English", "french"],
  new film: {

    name: "Spiderman",
    IMD : 9
  }

  [
    {name: "film1", imd: 8},
    {name: "film2", imd: 9},
    {name: "fils3", imd: 10},
]
  }

  document.write( "<h3> cavea მიმდინარე ფილმები </h3>")
  for (var  i = 0; i < cinema.films.length; i++)
   {
   document.write(cinema.films[i].name + "</br>")
  }
