const tileArray = document.getElementsByClassName('tile');
for (i = 0; i < tileArray.length; i++) {
    let idNo = tileArray[i].classList[2];
    tileArray[i].addEventListener('click', () => { play(idNo) });
}
let a;
function play(x) {
    let audio = new Audio(`Resources/Beats/0_${x}.flac`)
    audio.play();
    setInterval(() => {
        let playbackPercent = audio.currentTime * 100 / audio.duration;
        let bgColor = getComputedStyle(document.getElementsByClassName(x)[0]).background;
        document.getElementsByClassName(x)[0].style.background = `linear-gradient(to right, transparent ${playbackPercent - 20}%, #fff ${playbackPercent}%, transparent ${playbackPercent}%), ${bgColor}`;
    } , 50)
}