var contentText = document.getElementById('content-text');
var contentImage = document.getElementById('content-image');

var btnText = document.getElementById('btn-menu-text');
var btnImage = document.getElementById('btn-menu-image');

contentImage.style.display = 'none';
btnImage.addEventListener('click', function(){
    contentText.style.display = 'none';
    contentImage.style.display = 'block';
});

btnText.addEventListener('click', function(){
    contentImage.style.display = 'none';
    contentText.style.display = 'block';
});

// function openFunc(evt, FuncName) {
//     var i, x, tablinks;
//     x = document.getElementById("content-text");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.visibility = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//     }
//     document.getElementById(FuncName).style.visibility = "block";
//     evt.currentTarget.className += " w3-red";
// }