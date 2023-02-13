export default function({
    minutesDisplay,
    secondsDisplay,
    pauseSound,
    btnPlay,
    btnPause
}) {
    let timerTimeout

    function updateDisplay (minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function countdown() {
        timerTimeout = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            
            if(minutes <= 0 && seconds <= 0) {
                clearClock()
                btnPlay.classList.remove('hide')
                btnPause.classList.add ('hide')
                pauseSound()
                return
            }
            
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000)
    }

    function clearClock() {
        clearTimeout(timerTimeout)
    }
    return {updateDisplay, countdown, clearClock}
}