const tileArray = document.getElementsByClassName('tile');
for (i = 0; i < tileArray.length; i++) {
    let idNo = tileArray[i].classList[2];
    tileArray[i].addEventListener('click', () => { play(idNo) });
}
let a;
function play(x) {
    console.log(x);
    let audio = new Audio(`Resources/Beats/0_${x}.flac`)
    audio.play();
    //console.log(audioNumber);
    //console.log(tileArray[x]);
    //console.log(x);
}