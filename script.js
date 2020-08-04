const tileArray = document.getElementsByClassName('tile');

for (i = 0; i < tileArray.length; i++) {
    let idNo = tileArray[i].classList[2];
    tileArray[i].addEventListener('click', () => {
        play(idNo)
    });
}

function play(x) {

    let audio = new Audio(`Resources/Beats/0_${x}.flac`)
    audio.play();

    document.getElementsByClassName(x)[0].classList.add('active');
    const interval = setInterval(() => {
        //console.log(audio.currentTime + ' of' + ' ' + audio.duration);
        if (audio.currentTime === audio.duration) {
            document.getElementsByClassName(x)[0].classList.remove('active');
            audio.pause;
            audio.currentTime = 0;
            removeInterval();
        }
    }, 1000)

    function removeInterval() {
        clearInterval(interval);
    }
}