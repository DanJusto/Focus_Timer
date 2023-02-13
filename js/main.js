import Sounds from "./sounds.js"
import Timer from "./timer.js"
import TimerCtrls from "./controls.js"
import Mode from "./modes.js"

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')
const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCafeteria = document.querySelector('.cafeteria')
const btnFireplace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const btnDarkMode = document.querySelector('.moon')
const btnLightMode = document.querySelector('.sun')
const forestVol = document.querySelector('.forestVolume')
const rainVol = document.querySelector('.rainVolume')
const cafeteriaVol = document.querySelector('.cafeteriaVolume')
const fireplaceVol = document.querySelector('.fireplaceVolume')
let minutes = Number(minutesDisplay.textContent)


const timerControls = TimerCtrls({
    btnPlay,
    btnPause,
    minutesDisplay,
    minutes
})

const sound = Sounds({
    btnForest,
    btnRain,
    btnCafeteria,
    btnFireplace,
    btnLightMode
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    pauseSound: sound.pauseSound,
    btnPlay,
    btnPause
})

const mode = Mode()

forestVol.addEventListener('change', function() {
    sound.volumerange('forest')
})

rainVol.addEventListener('change', function() {
    sound.volumerange('rain')
})

cafeteriaVol.addEventListener('change', function() {
    sound.volumerange('cafeteria')
})

fireplaceVol.addEventListener('change', function() {
    sound.volumerange('fireplace')
})

btnLightMode.addEventListener('click', function() {
    btnLightMode.classList.add('hide')
    btnDarkMode.classList.remove('hide')
    mode.changeToDarkBgCards()
})

btnDarkMode.addEventListener('click', function() {
    btnDarkMode.classList.add('hide')
    btnLightMode.classList.remove('hide')
    mode.changeToLightBgCards()
})

btnPlay.addEventListener('click', function() {
    timerControls.play()
    sound.continueIfSelected()
    timer.countdown()
})

btnPause.addEventListener('click', function() {
    timerControls.pauseOrStop()
    timer.clearClock()
    sound.pauseSound()
})

btnStop.addEventListener('click', function() {
    timerControls.pauseOrStop()
    timer.clearClock()
    timer.updateDisplay(minutes, 0)
    sound.pauseSound()
})

btnPlus.addEventListener('click', function() {
    minutes = timerControls.plus()
})

btnMinus.addEventListener('click', function() {
    minutes = timerControls.minus()
})

btnForest.addEventListener('click', function() {
    if(btnForest.classList.contains('selected') || btnForest.classList.contains('darkselected')) {
        sound.unselected('forest')
    } else {
        sound.justOneSoundPlaying('forest')
    }
})

btnRain.addEventListener('click', function() {
    if(btnRain.classList.contains('selected') || btnRain.classList.contains('darkselected')) {
        sound.unselected('rain')
    } else {
        sound.justOneSoundPlaying('rain')
    }
})

btnCafeteria.addEventListener('click', function() {
    if(btnCafeteria.classList.contains('selected') || btnCafeteria.classList.contains('darkselected')) {
        sound.unselected('cafeteria')
    } else {
        sound.justOneSoundPlaying('cafeteria')
    }
})

btnFireplace.addEventListener('click', function() {
    if(btnFireplace.classList.contains('selected') || btnFireplace.classList.contains('darkselected')) {
        sound.unselected('fireplace')
    } else {
        sound.justOneSoundPlaying('fireplace')
    }
})