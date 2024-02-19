function profile(){
    var names = document.getElementById("name");
    names.setAttribute("disabled","disabled")
    
    var namechange = prompt("enter name");

    document.getElementById("name").value = namechange
}
// function profilePic(){
//     var profile = document.getElementById("profile");
//     var img = new Image();
//     img.src = "./profile.jpeg"
//     var change = document.getElementById("prof-img1");
//     console.log(img);
// }

// function proImg(this){
//     var profile = document.getElementById("profile");

// }
function btn(eleThs){

    var img = eleThs.parentNode.parentNode.childNodes[1].childNodes[1].src;

    
document.getElementById('img2').src=img
    console.log(eleThs.parentNode.parentNode.childNodes[1].childNodes[1].src, imag)
}

function musicplay(val){
    var music = val.parentNode.childNodes[1];
    if(music.paused){
        music.play()
        val.innerHTML = "<i class='fa-solid fa-pause'></i>";
    }
    else{
        music.pause();
        val.innerHTML = "<i class='fa-solid fa-play'></i>"
    }
}

function readMore(){
    // var read = document.getElementById("left-div-btn");
    var cr = document.getElementById("cryptoo");
    
    // console.log(cr.innerHTML)
    // var p = document.createElement("p");
    // p.setAttribute("id","readmorep") ;


    // p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi aliquid deleniti repellendus sint nihil ea dignissimos in quis amet, vero optio consequuntur a. Dolorem cumque eligendi odit a culpa!";
     
    // = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi aliquid deleniti repellendus sint nihil ea dignissimos in quis amet, vero optio consequuntur a. Dolorem cumque eligendi odit a culpa!";
    
    var testPop = cr.open("", "","width=100,height=100");
    if (testPop === null) {
    alert("Please disable your popup blocker.");
    }
}

