function clock() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.clock');
    const start = document.querySelector('.start');
    const pause = document.querySelector('.pause');
    const restart = document.querySelector('.restart');
    let timer;
    let seconds = 0;

    function startClock() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    start.addEventListener('click', function() {
        clock.classList.remove('stoped');
        start.innerText = 'START'
        clearInterval(timer);
        startClock();
    });

    pause.addEventListener('click', function() {
        clock.classList.add('stoped')
        setTimeout(function(){
            start.innerText = 'CONTINUE'
            clearInterval(timer);
        });
    });

    restart.addEventListener('click', function() {
        clearInterval(timer);
        start.innerText = 'START'
        clock.classList.remove('stoped');
        seconds = 0;
        clock.innerHTML = "00:00:00";
    });
}

clock();