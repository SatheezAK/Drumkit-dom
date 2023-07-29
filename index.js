
for (var i=0; i<document.querySelectorAll(".drum ").length; i++) {


  document.querySelectorAll("button")[i].addEventListener("click",function () {
    var buttonInnerHTML = this.innerHTML;
    if (buttonInnerHTML==="w"){
      var audio = new Audio ("sounds/crash.mp3");
      audio.play();}

      else if(buttonInnerHTML==="a"){
        var audio1 = new Audio ("sounds/kick-bass.mp3");
        audio1.play();}

        else if(buttonInnerHTML==="s"){
          var audio2 = new Audio ("sounds/snare.mp3");
          audio2.play();}

          else if(buttonInnerHTML==="d"){
            var audio3 = new Audio ("sounds/tom-1.mp3");
            audio3.play();}

            else if(buttonInnerHTML==="j"){
              var audio4 = new Audio ("sounds/tom-2.mp3");
              audio4.play();}

              else if(buttonInnerHTML==="k"){
                var audio5 = new Audio ("sounds/tom-3.mp3");
                audio5.play();}
      else {
      var audio6 = new Audio ("sounds/tom-4.mp3");
      audio6.play();
    }





  });
}
