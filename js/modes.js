export default function () {
    const body = document.querySelector('body')
    const textTimer = document.querySelector('.clock')
    const btnPlay = document.querySelector('.play')
    const btnPause = document.querySelector('.pause')
    const btnStop = document.querySelector('.stop')
    const btnPlus = document.querySelector('.plus')
    const btnMinus = document.querySelector('.minus')
    const btnForest = document.querySelector('.forest')
    const btnRain = document.querySelector('.rain')
    const btnCafeteria = document.querySelector('.cafeteria')
    const btnFireplace = document.querySelector('.fireplace')
    const forestVol = document.querySelector('.forestVolume')
    const rainVol = document.querySelector('.rainVolume')
    const cafeteriaVol = document.querySelector('.cafeteriaVolume')
    const fireplaceVol = document.querySelector('.fireplaceVolume')

    function changeToDarkBgCards() {
        body.style.background = "var(--bg-dark)"
        btnForest.classList.add('dark')
        btnRain.classList.add('dark')
        btnCafeteria.classList.add('dark')
        btnFireplace.classList.add('dark')
        btnPlay.classList.add('darkplayer')
        btnPause.classList.add('darkplayer')
        btnStop.classList.add('darkplayer')
        btnPlus.classList.add('darkplayer')
        btnMinus.classList.add('darkplayer')
        textTimer.classList.add('dark')
        forestVol.classList.add('darkvol')
        rainVol.classList.add('darkvol')
        cafeteriaVol.classList.add('darkvol')
        fireplaceVol.classList.add('darkvol')
        checkSelected()
    }

    function changeToLightBgCards() {
        body.style.background = "var(--bg-light)"
        btnForest.classList.remove('dark')
        btnRain.classList.remove('dark')
        btnCafeteria.classList.remove('dark')
        btnFireplace.classList.remove('dark')
        btnPlay.classList.remove('darkplayer')
        btnPause.classList.remove('darkplayer')
        btnStop.classList.remove('darkplayer')
        btnPlus.classList.remove('darkplayer')
        btnMinus.classList.remove('darkplayer')
        textTimer.classList.remove('dark')
        forestVol.classList.remove('darkvol')
        rainVol.classList.remove('darkvol')
        cafeteriaVol.classList.remove('darkvol')
        fireplaceVol.classList.remove('darkvol')
        checkDarkSelected()
    }

    function checkSelected() {
        if(btnForest.classList.contains('selected')) {
            btnForest.classList.add('darkselected')
            btnForest.classList.remove('selected')
        } else if(btnCafeteria.classList.contains('selected')) {
            btnCafeteria.classList.add('darkselected')
            btnCafeteria.classList.remove('selected')
        } else if(btnFireplace.classList.contains('selected')) {
            btnFireplace.classList.add('darkselected')
            btnFireplace.classList.remove('selected')
        } else if(btnRain.classList.contains('selected')) {
            btnRain.classList.add('darkselected')
            btnRain.classList.remove('selected')
        }
    }

    function checkDarkSelected() {
        if(btnForest.classList.contains('darkselected')) {
            btnForest.classList.add('selected')
            btnForest.classList.remove('darkselected')
        } else if(btnCafeteria.classList.contains('darkselected')) {
            btnCafeteria.classList.add('selected')
            btnCafeteria.classList.remove('darkselected')
        } else if(btnFireplace.classList.contains('darkselected')) {
            btnFireplace.classList.add('selected')
            btnFireplace.classList.remove('darkselected')
        } else if(btnRain.classList.contains('darkselected')) {
            btnRain.classList.add('selected')
            btnRain.classList.remove('darkselected')
        }
    }

    return {changeToDarkBgCards, changeToLightBgCards}
}