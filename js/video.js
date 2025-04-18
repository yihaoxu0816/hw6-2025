var video;

video = document.querySelector('#player1');
const slider = document.querySelector('#slider');
const vol = document.querySelector('#volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vol.innerText = slider.value + "%";

});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is ", video.playbackRate);
})

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is ", video.playbackRate);
})

document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	console.log("Video current time is ", video.currentTime);
})

document.querySelector('#mute').addEventListener("click", function(e) {
	video.muted = !video.muted;
	if (video.muted) {
		e.target.innerText = "Unmute";
		console.log('Mute');
	}
	else {
		e.target.innerText = "Mute";
		console.log('Unmute');
	}
})

slider.addEventListener("change", function(e) {
	vol.innerText = e.target.value + "%";
	video.volume = e.target.value / 100;
	console.log("Current volume is ", video.volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})