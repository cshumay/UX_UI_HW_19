function playMyAudio(){
  document.getElementById("myAudio").play();
 document.getElementById("audioStatus").innerHTML="Audio is Playing";	 
 
}
function pauseMyAudio(){
  document.getElementById("myAudio").pause();
 document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 4000);