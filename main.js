var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) { 
   links[i].addEventListener('click', linkClicked, true);
} 

function linkClicked(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    var jsonName = this.id + "Data.json";
    xhttp.open("GET", jsonName, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contents").innerHTML = xhttp.responseText;    
        }
    }
}



