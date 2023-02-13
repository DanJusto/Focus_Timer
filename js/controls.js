export default function ({
    btnPlay,
    btnPause,
    minutesDisplay,
    minutes
}) {
    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove ('hide')
    }

    function pauseOrStop() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add ('hide')
    }

    function plus() {
        minutes += 5
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        return minutes
    }

    function minus() {
        if(minutes > 4) {
            minutes -= 5
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
            console.log(minutes)
            return minutes
        } else {
            return 0
        }
    }
    
    return {play, pauseOrStop, plus, minus}
}
