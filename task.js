function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
  }
 };
 xhr.send(null);
}

loadjson("data2.json",function(text){
 var data2 = JSON.parse(text); // serialised data
 console.log(data2);
 basic(data2.details);
 basic1(data2.details);
})
var child1 = document.querySelector(".child1");
function basic1(det){
 var image = document.createElement("img");
 image.src="pic.jpg";
 child1.appendChild(image);

 var name = document.createElement("h4");
 name.textContent="Name : " + det.name;
 child1.appendChild(name);

 
 var number = document.createElement("h4");
number.textContent="Roll no : " + det.number;
 child1.appendChild(number);
 //document.body.innerHTML = "<button >Today's date is</button>"

}

var child2 = document.querySelector(".child2");
function basic(det){
 var image = document.createElement("img");
 image.src="pic.jpg";
 child2.appendChild(image);

 var name = document.createElement("h4");
 name.textContent="Name : " + det.name;
 child2.appendChild(name);

 

 var number = document.createElement("h4");
 number.textContent="Roll no : " + det.number;
 child2.appendChild(number);//document.body.innerHTML = "<button >Today's date is</button>"
}
