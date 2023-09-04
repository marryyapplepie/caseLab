var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//Добавляем элемент к списку
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addArea").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Введите название задачи:)");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("addArea").value = "";
  
}


//Добавляем кнопку закрытия 
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "fa-solid fa-xmark close";
  myNodelist[i].appendChild(span);
}*/

