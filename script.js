const tileArray = document.getElementsByClassName("tile");

var beat01 = new Audio(`Resources/Beats/0_01.flac`),
    beat02 = new Audio(`Resources/Beats/0_02.flac`),
    beat04 = new Audio(`Resources/Beats/0_04.flac`),
    beat06 = new Audio(`Resources/Beats/0_06.flac`),
    beat07 = new Audio(`Resources/Beats/0_07.flac`),
    beat08 = new Audio(`Resources/Beats/0_08.flac`),
    beat09 = new Audio(`Resources/Beats/0_09.flac`),
    beat11 = new Audio(`Resources/Beats/0_11.flac`),
    beat12 = new Audio(`Resources/Beats/0_12.flac`),
    beat16 = new Audio(`Resources/Beats/0_16.flac`),
    beat18 = new Audio(`Resources/Beats/0_18.flac`),
    beat21 = new Audio(`Resources/Beats/0_21.flac`),
    beat22 = new Audio(`Resources/Beats/0_22.flac`),
    beat24 = new Audio(`Resources/Beats/0_24.flac`),
    beat25 = new Audio(`Resources/Beats/0_25.flac`),
    beat28 = new Audio(`Resources/Beats/0_28.flac`),
    beat29 = new Audio(`Resources/Beats/0_29.flac`),
    beat31 = new Audio(`Resources/Beats/0_31.flac`),
    beat32 = new Audio(`Resources/Beats/0_32.flac`),
    beat33 = new Audio(`Resources/Beats/0_33.flac`),
    beat35 = new Audio(`Resources/Beats/0_35.flac`),
    beat41 = new Audio(`Resources/Beats/0_41.flac`),
    beat44 = new Audio(`Resources/Beats/0_44.flac`),
    beat47 = new Audio(`Resources/Beats/0_47.flac`);

for (let i = 0; i < tileArray.length; i++) {
    let beatNo = tileArray[i].dataset.beat;
    tileArray[i].addEventListener("mousedown", () => {
        play(beatNo, tileArray[i]);
    });
}

function removeInterval(elm, beat) {
    beat.pause();
    elm.classList.remove("active")
    beat.currentTime = 0;
    clearInterval(play[interval]);
}

function play(x, elm) {
    let beat = window["beat" + x];
    
    if (!elm.classList.contains("active")) {
        beat.play();
        var interval = setInterval(() => {
            if (beat.currentTime === beat.duration && elm.dataset.repeat !== "false") {
                beat.currentTime = 0;
                beat.play()
            }
            if (beat.currentTime === beat.duration && elm.dataset.repeat === "false") {
                removeInterval(elm, beat);
            }
        }, 10)
    } else {
        removeInterval(elm, beat);
    }

    elm.classList.toggle("active")
}

document.getElementById("shareButton").addEventListener("click", async () => {
    try {
        await navigator.share({
            title: "Beatmaker by MMA",
            url: ""
        });
        console.log("Data was shared successfully");
    } catch (err) {
        console.error("Share failed:", err.message);
    }
});

let installPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    document.getElementById("installButton").style.display = "unset";
    installPrompt = e;
});

document.getElementById("installButton").addEventListener("click", () => {
    installPrompt.prompt();
})

window.addEventListener("appinstalled", () => {
    confetti.start();
    setTimeout(() => {
        confetti.stop();
    }, 1000)
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}