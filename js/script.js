var myAudio = document.getElementById("moonlight");
var mute = document.getElementById("mute");
var play = document.getElementById("play");

play.style.display = "none";
mute.style.display = "none";

if (myAudio.paused) {
  myAudio.play();
  myAudio.pause();
}

if (myAudio.duration > 0 && !myAudio.paused) {
  //Its playing...do your job
  console.log("it's playing");
  mute.style.display = "block";
} else {
  //Not playing...maybe paused, stopped or never played.
  console.log("Ooohhh :(");
  play.style.display = "block";
}

play.onclick = () => {
  myAudio.play();
  play.style.display = "none";
  mute.style.display = "block";
};

mute.onclick = () => {
  myAudio.pause();
  mute.style.display = "none";
  play.style.display = "block";
};
