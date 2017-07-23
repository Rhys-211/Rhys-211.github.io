window.onload = function(){
    document.getElementById("content").style.height = (window.innerHeight - 60) + 'px';
    var start = document.getElementById("start");
    start.style.left = (window.innerWidth/2 - 69) + 'px';
    main();
}