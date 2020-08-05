const tileArray = document.getElementsByClassName('tile');

const beat01 = new Audio(`Resources/Beats/0_01.flac`);
const beat02 = new Audio(`Resources/Beats/0_02.flac`);
const beat04 = new Audio(`Resources/Beats/0_04.flac`);
const beat06 = new Audio(`Resources/Beats/0_06.flac`);
const beat07 = new Audio(`Resources/Beats/0_07.flac`);
const beat08 = new Audio(`Resources/Beats/0_08.flac`);
const beat09 = new Audio(`Resources/Beats/0_09.flac`);
const beat11 = new Audio(`Resources/Beats/0_11.flac`);
const beat12 = new Audio(`Resources/Beats/0_12.flac`);
const beat16 = new Audio(`Resources/Beats/0_16.flac`);
const beat18 = new Audio(`Resources/Beats/0_18.flac`);
const beat21 = new Audio(`Resources/Beats/0_21.flac`);
const beat22 = new Audio(`Resources/Beats/0_22.flac`);
const beat24 = new Audio(`Resources/Beats/0_24.flac`);
const beat25 = new Audio(`Resources/Beats/0_25.flac`);
const beat28 = new Audio(`Resources/Beats/0_28.flac`);
const beat29 = new Audio(`Resources/Beats/0_29.flac`);
const beat31 = new Audio(`Resources/Beats/0_31.flac`);
const beat32 = new Audio(`Resources/Beats/0_32.flac`);
const beat33 = new Audio(`Resources/Beats/0_33.flac`);
const beat35 = new Audio(`Resources/Beats/0_35.flac`);
const beat41 = new Audio(`Resources/Beats/0_41.flac`);
const beat44 = new Audio(`Resources/Beats/0_44.flac`);
const beat47 = new Audio(`Resources/Beats/0_47.flac`);

for (i = 0; i < tileArray.length; i++) {
    let idNo = tileArray[i].classList[2];
    tileArray[i].addEventListener('click', () => {
        play(idNo)
    });
}

function play(x) {
    let element = document.getElementsByClassName(x)[0];

    let beat = window[`beat${x}`];
    beat.play();

    if (element.classList[3] === 'active') {

    } else {
        element.classList.add('active');
    }
    /*const interval = setInterval(() => {
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
    }*/
}

/*function play(x) {
    let audio = new Audio(`Resources/Beats/0_${x}.flac`)
    if (document.getElementsByClassName(x)[0].classList[3] === 'active') {
        document.getElementsByClassName(x)[0].classList.remove('active');
        audio.pause;
        audio.currentTime = 0;
        //clearInterval(interval);
    } else {
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
}*/