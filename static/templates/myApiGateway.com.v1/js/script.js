

//var msel;
var challengeUrl = "http://localhost:3003/rs/challenge/en_us";


var setM1 = function () {
    localStorage.setItem("msel", "m1");
}
var setM2 = function () {
    localStorage.setItem("msel", "m2");

}
var setM3 = function () {
    localStorage.setItem("msel", "m3");
}

var setM4 = function () {
    localStorage.setItem("msel", "m4");
}

var setM5 = function () {
    localStorage.setItem("msel", "m5");
}

var setMenu = function () {
    var msel = localStorage.getItem("msel");
    if (msel === "m1") {
        document.getElementById("m1").classList.add('active');
        document.getElementById("m2").classList.remove('active');
        document.getElementById("m3").classList.remove('active');
        document.getElementById("m4").classList.remove('active');
        document.getElementById("m5").classList.remove('active');
    } else if (msel === "m2") {
        document.getElementById("m2").classList.add('active');
        document.getElementById("m1").classList.remove('active');
        document.getElementById("m3").classList.remove('active');
        document.getElementById("m4").classList.remove('active');
        document.getElementById("m5").classList.remove('active');
    } else if (msel === "m3") {
        document.getElementById("m3").classList.add('active');
        document.getElementById("m1").classList.remove('active');
        document.getElementById("m2").classList.remove('active');
        document.getElementById("m4").classList.remove('active');
        document.getElementById("m5").classList.remove('active');
    } else if (msel === "m4") {
        document.getElementById("m4").classList.add('active');
        document.getElementById("m1").classList.remove('active');
        document.getElementById("m2").classList.remove('active');
        document.getElementById("m3").classList.remove('active');
        document.getElementById("m5").classList.remove('active');
    }
    else if (msel === "m5") {
        document.getElementById("m5").classList.add('active');
        document.getElementById("m1").classList.remove('active');
        document.getElementById("m2").classList.remove('active');
        document.getElementById("m3").classList.remove('active');
        document.getElementById("m4").classList.remove('active');
    }
}

var loadChallenge = function(){
    var msel = localStorage.getItem("msel");
    if (msel === "m4") {
        $.ajax({ 
            type: "GET",
            dataType: "json",
            url: challengeUrl,
            success: function(data){        
              //alert(data);
              document.getElementById("question").value = data.question;
              document.getElementById("key").value = data.key;
            },
            error: function(err){
                console.log(JSON.stringify(err))
            }
         });
        
    }
}



$(function () {
    $('.ui.checkbox')
        .checkbox()
        ;
});