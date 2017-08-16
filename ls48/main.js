var aTags = document.getElementsByTagName('a');
for (let i=0; i < aTags.length; i++) {
    aTags[i].addEventListener('click', aClick, true);
}

function aClick(event) {
    event.preventDefault();
    page = this.getAttribute('data-whereismydata');
    getPageContent(page);
    console.log(page);
    window.location.hash = page.split('.')[0];
       
}

function getPageContent(dataUri) { 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataUri, true);

    xhr.send();

    xhr.onload = function() {
        //console.log(xhr.statusText);
    }

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            var dataJson = JSON.parse(xhr.responseText);
            document.querySelector('main').innerHTML = dataJson.content;
        }
    }
    
}