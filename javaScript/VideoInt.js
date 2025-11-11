const video = document.getElementById('video');
const button = document.querySelector('.play-button');
const endImage = document.getElementById('end-image');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    button.innerHTML = ' ll '
  } else {video.pause();
    button.innerHTML = '▶';}})

button.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    button.innerHTML = '||'; 
  } else {video.pause();
    button.innerHTML = '▶';}});
 
video.addEventListener('ended', () => {
  video.currentTime = 0;        
  video.pause();                
  button.innerHTML = '▶';    
   video.load(); 
});





