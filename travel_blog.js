
// document . html . body
// document.firstChild.lastChild.


var places = document.getElementsByClassName("new_place");
alert(places.length);



for (var i = 0; i < places.length; i++) {
    var photos = places[i].getElementsByClassName("photos")[0].getElementsByTagName("img");
    alert(i);
    for (var ii = 0; ii < photos.length; ii++) {
        photos[ii].style.width = "10px";
        alert(ii);
    }
    
}