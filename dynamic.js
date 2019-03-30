function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("Get",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.Education);
  skills(data.Skills);
})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.designation;
  left.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.college;
  left.append(h4);
  var h5=document.createElement("h5");
  h5.textContent=p.Group;
  left.append(h5);
  var h6=document.createElement("h6");
  h6.textContent=p.email;
  left.append(h6);
  var h7=document.createElement("h7");
  h7.textContent=p.Mobileno;
  left.append(h7);
}
  var right=document.querySelector(".right");
  function career(ca){
    var h1=document.createElement("h1");
    h1.textContent="Career Objective";
    right.append(h1);
var hr=document.createElement("hr");
right.append(hr);
var h2=document.createElement("h2");
h2.textContent=ca.info;
right.append(h2);
}
//Eduction Details
function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="Education details";
  right.append(h2);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border="2";
  //right.append(table);
  var tr1="<tr><th>sno</th><th>Qualification</th><th>Institute</th><th>percentage</th><th>Yearofpassing</th></tr>"
var tr2=" ";
for(var i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].Qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].Yearofpassing+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}
//Skills
function skills(s){
  var h2=document.createElement("h2");
  h2.textContent="Skills";
  right.append(h2);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in s){
var li=document.createElement("li");
li.innerHTML=s[i].name+","+s[i].info;
ul.append(li);
  }
  right.append(ul);

}
