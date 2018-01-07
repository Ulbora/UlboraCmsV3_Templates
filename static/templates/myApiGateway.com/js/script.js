

var setM1 = function(){
    document.getElementById("m1").classList.add('active');
    document.getElementById("m2").classList.remove('active');
    document.getElementById("m3").classList.remove('active');
    document.getElementById("m4").classList.remove('active');
}
var setM2 = function(){    
    document.getElementById("m2").classList.add('active');
    document.getElementById("m1").classList.remove('active');
    document.getElementById("m3").classList.remove('active');
    document.getElementById("m4").classList.remove('active');
}
var setM3 = function(){
    document.getElementById("m3").classList.add('active');
    document.getElementById("m1").classList.remove('active');
    document.getElementById("m2").classList.remove('active');
    document.getElementById("m4").classList.remove('active');
}

var setM4 = function(){
    document.getElementById("m4").classList.add('active');
    document.getElementById("m1").classList.remove('active');
    document.getElementById("m2").classList.remove('active');
    document.getElementById("m3").classList.remove('active');
}