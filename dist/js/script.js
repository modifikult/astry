const progressBar = document.querySelectorAll('.progress-bar');

if (progressBar.length) {
    progressBar.forEach(item => {
        const circleProgress = item.querySelector('.circle-progress');
        const circleFull = item.querySelector('.circle-full');
        const listItem = item.closest('li');
        const color = item.dataset.color;
        const radius = circleProgress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
        circleProgress.style.strokeDashoffset = circumference;
        circleProgress.style.stroke = color;
        circleFull.style.stroke = color;
        listItem.style.backgroundColor = color + '26';

        const percentProgress = item.dataset.progress;
        item.querySelector('span').innerText = percentProgress + '%';

        setProgress(percentProgress, circumference, circleProgress)
    })

    function setProgress(percent, circumference, circleP) {
        const offset = circumference - percent / 100 * circumference;
        circleP.style.strokeDashoffset = offset;
    }
}

const accordion = document.querySelectorAll('.accordion');

if (accordion.length) {
    accordion.forEach(acc => {
        acc.querySelector('.acc-title').onclick = function () {
            acc.classList.toggle('acc-active');

            if (acc.classList.contains('acc-active')) {
                acc.querySelector('.acc-content').style.height =  acc.querySelector('.acc-content').scrollHeight + 20 + 'px';
            } else {
                acc.querySelector('.acc-content').style.height =  null;
            }
        }
    })
}

const levelState = document.querySelectorAll('.level-state');

if (levelState.length) {
    levelState.forEach(item => {
        const progress = item.dataset.progress;

        item.querySelector('.level-arrow img').style.left = progress + '%';
    })
}

const linearProgress = document.querySelectorAll('.linear-progress');

if (linearProgress.length) {
    linearProgress.forEach(item => {
        const progress = item.dataset.progress;
        const color = item.dataset.color;
        const progressLine = item.querySelector('.line-progress');

        progressLine.style.background = color;
        progressLine.style.width = progress + '%';
        item.querySelector('span').innerText = progress + '%';
    })
}