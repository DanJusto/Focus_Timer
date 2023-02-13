export default function({
    btnForest,
    btnRain,
    btnCafeteria,
    btnFireplace,
    btnLightMode
}) {
    const forest = new Audio("./assets/floresta.wav")
    const rain = new Audio("./assets/chuva.wav")
    const cafeteria = new Audio("./assets/cafeteria.wav")
    const fireplace = new Audio("./assets/lareira.wav")
    const forestVol = document.querySelector('.forestVolume')
    const rainVol = document.querySelector('.rainVolume')
    const cafeteriaVol = document.querySelector('.cafeteriaVolume')
    const fireplaceVol = document.querySelector('.fireplaceVolume')

    forest.loop = true
    rain.loop = true
    cafeteria.loop = true
    fireplace.loop = true

    function justOneSoundPlaying(typeofsound) {
        if(btnLightMode.classList.contains('hide')) {
            switch(typeofsound) {
                case 'forest':
                    btnForest.classList.add('darkselected')
                    forestVol.classList.add('selectedvol')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    btnForest.classList.remove('selected')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    rainVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    forest.play()
                    rain.pause()
                    cafeteria.pause()
                    fireplace.pause()
                    break
                case 'rain':
                    btnRain.classList.add('darkselected')
                    rainVol.classList.add('selectedvol')
                    btnForest.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    btnForest.classList.remove('selected')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    forestVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    rain.play()
                    forest.pause()
                    cafeteria.pause()
                    fireplace.pause()
                    break
                case 'cafeteria':
                    btnCafeteria.classList.add('darkselected')
                    cafeteriaVol.classList.add('selectedvol')
                    btnRain.classList.remove('darkselected')
                    btnForest.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    btnForest.classList.remove('selected')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    rainVol.classList.remove('selectedvol')
                    forestVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    cafeteria.play()
                    rain.pause()
                    forest.pause()
                    fireplace.pause()
                    break
                case 'fireplace':
                    btnFireplace.classList.add('darkselected')
                    fireplaceVol.classList.add('selectedvol')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnForest.classList.remove('darkselected')
                    btnForest.classList.remove('selected')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    rainVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    forestVol.classList.remove('selectedvol')
                    fireplace.play()
                    rain.pause()
                    cafeteria.pause()
                    forest.pause()
                    break
            }
        } else {
            switch(typeofsound) {
                case 'forest':
                    btnForest.classList.add('selected')
                    forestVol.classList.add('selectedvol')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    btnForest.classList.remove('darkselected')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    rainVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    forest.play()
                    rain.pause()
                    cafeteria.pause()
                    fireplace.pause()
                    break
                case 'rain':
                    btnRain.classList.add('selected')
                    rainVol.classList.add('selectedvol')
                    btnForest.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    btnForest.classList.remove('darkselected')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    forestVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    rain.play()
                    forest.pause()
                    cafeteria.pause()
                    fireplace.pause()
                    break
                case 'cafeteria':
                    btnCafeteria.classList.add('selected')
                    cafeteriaVol.classList.add('selectedvol')
                    btnRain.classList.remove('selected')
                    btnForest.classList.remove('selected')
                    btnFireplace.classList.remove('selected')
                    btnForest.classList.remove('darkselected')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    rainVol.classList.remove('selectedvol')
                    forestVol.classList.remove('selectedvol')
                    fireplaceVol.classList.remove('selectedvol')
                    cafeteria.play()
                    rain.pause()
                    forest.pause()
                    fireplace.pause()
                    break
                case 'fireplace':
                    btnFireplace.classList.add('selected')
                    fireplaceVol.classList.add('selectedvol')
                    btnRain.classList.remove('selected')
                    btnCafeteria.classList.remove('selected')
                    btnForest.classList.remove('selected')
                    btnForest.classList.remove('darkselected')
                    btnRain.classList.remove('darkselected')
                    btnCafeteria.classList.remove('darkselected')
                    btnFireplace.classList.remove('darkselected')
                    rainVol.classList.remove('selectedvol')
                    cafeteriaVol.classList.remove('selectedvol')
                    forestVol.classList.remove('selectedvol')
                    fireplace.play()
                    rain.pause()
                    cafeteria.pause()
                    forest.pause()
                    break
            }
        }
    }

    function continueIfSelected() {
        if(btnForest.classList.contains('selected') || btnForest.classList.contains('darkselected')) {
            forest.play()
        } else if(btnRain.classList.contains('selected') || btnRain.classList.contains('darkselected')) {
            rain.play()
        } else if(btnCafeteria.classList.contains('selected') || btnCafeteria.classList.contains('darkselected')) {
            cafeteria.play()
        } else if(btnFireplace.classList.contains('selected') || btnFireplace.classList.contains('darkselected')) {
            fireplace.play()
        }
    }

    function unselected(typeofsound) {
        switch(typeofsound) {
            case 'forest':
                btnForest.classList.remove('darkselected')
                btnForest.classList.remove('selected')
                forestVol.classList.remove('selectedvol')
                forest.pause()
                break
            case 'rain':
                btnRain.classList.remove('darkselected')
                btnRain.classList.remove('selected')
                rainVol.classList.remove('selectedvol')
                rain.pause()
                break
            case 'cafeteria':
                btnCafeteria.classList.remove('darkselected')
                btnCafeteria.classList.remove('selected')
                cafeteriaVol.classList.remove('selectedvol')
                cafeteria.pause()
                break
            case 'fireplace':
                btnFireplace.classList.remove('darkselected')
                btnFireplace.classList.remove('selected')
                fireplaceVol.classList.remove('selectedvol')
                fireplace.pause()
                break
        }
    }

    function pauseSound() {
        forest.pause()
        rain.pause()
        cafeteria.pause()
        fireplace.pause()
    }

    function volumerange(typeofsound) {
        let forestVolume = forestVol.value
        let rainVolume = rainVol.value
        let cafeteriaVolume = cafeteriaVol.value
        let fireplaceVolume = rainVol.value
        
        switch(typeofsound) {
            case 'forest':
                forest.volume = forestVolume / 100
                break
            case 'rain':
                rain.volume = rainVolume / 100
                break
            case 'cafeteria':
                cafeteria.volume = cafeteriaVolume / 100
                break
            case 'fireplace':
                fireplace.volume = fireplaceVolume / 100
                break
        }
    }

    return {forest, rain, cafeteria, fireplace, volumerange, pauseSound, unselected, continueIfSelected, justOneSoundPlaying}
}