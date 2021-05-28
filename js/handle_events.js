// document.addEventListener("click", function () {
//     document.getElementById("demo").innerHTML = "Hello World";
// });

document.addEventListener("click", document_clicked);
function document_clicked() {
    console.log("Clicked inside document");
    document.getElementById("demo").innerHTML = "Hello World";
}

// window.addEventListener("click", function () {
//     document.getElementById("demo").innerHTML = "Hello World";
// });

// older browser support
if (window.attachEvent) {
    window.attachEvent('onresize', function () {
        alert('attachEvent - resize');
    });
}
else if (window.addEventListener) {
    window.addEventListener('resize', function () {
        console.log('addEventListener - resize');
    });
}
else {
    alert("The browser does not support Javascript event binding");
}

