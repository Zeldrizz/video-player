var pause = document.querySelector('.pause'),
    restart = document.querySelector('.restart'),
    speedUp = document.querySelector('.speed-up'),
    speedDown = document.querySelector('.speed-down'),
    speedNorm = document.querySelector('.speed-norm'),
    video = document.querySelector('.video__video-play'),
    progress = document.querySelector('.video__bar-progress'),
    btnSizeUp = document.querySelector('.video__panel-btn'),
    videoParent = document.querySelector('.video'),
    file = document.querySelector('.file'),
    playBtn = document.querySelector('.video__player-grid_icon'),
    playBack = document.querySelector('#left'),
    playNext = document.querySelector('#right'),
    videoPanel = document.querySelector('.video__player-panel');
document.querySelector('.volume').oninput = videoVol;

video.ontimeupdate = progressTime;



pause.addEventListener('click', function () {
    if (pause.innerHTML == '<i class="fas fa-play icon icon-play"></i>') {
        pause.innerHTML = '<i class="fas fa-pause icon icon-pause"></i>'
        video.play();
    } else if (pause.innerHTML == '<i class="fas fa-pause icon icon-pause"></i>') {
        pause.innerHTML = '<i class="fas fa-play icon icon-play"></i>'
        video.pause()
    }
})

restart.addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    video.play();
})

speedUp.addEventListener('click', function () {
    video.currentTime = video.currentTime + 10;
    video.play();
})

speedDown.addEventListener('click', function () {
    video.currentTime = video.currentTime - 10;
    video.play();
})

progress.addEventListener('click', function () {
    let width = this.offsetWidth;
    let position = event.offsetX;
    this.value = (position * 100) / width;
    video.pause();
    video.currentTime = video.duration * (position / width);
    video.play();
})

function videoVol() {
    var vol = this.value;
    video.volume = vol / 100;
}

function progressTime() {
    var h = document.querySelector('.h'),
        m = document.querySelector('.m'),
        s = document.querySelector('.s');
    let duration = video.duration,
        current = video.currentTime;
    progress.value = (100 * current) / duration;
    s.innerHTML = Math.floor(video.currentTime);
    if (s.innerHTML < 10) {
        s.innerHTML = '0' + Math.floor(video.currentTime);
    }
}

document.querySelector('.file').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            video.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}

        btnSizeUp.addEventListener('click', function(){
            video.style.height = '100vh';
            video.style.width = '100%';
            videoParent.style.overflow = 'hidden';
            document.querySelector('.video__bar-progress').style.width = '1280px';
            document.querySelector('.video__panel-box').style.width = '1280px';
            document.querySelector('.video__btns').style.width = '1280px';
            document.querySelector('.video__btns').style.height = '80px';
            document.querySelector('.video__player').style.transform = 'translateY(-60px)';
        })
        btnSizeUp.addEventListener('dblclick', function () {
            video.style.height = '500px';
            video.style.width = '700px';
            videoParent.style.overflow = 'visible';
            document.querySelector('.video__bar-progress').style.width = '700px';
            document.querySelector('.video__panel-box').style.width = '700px';
            document.querySelector('.video__btns').style.width = '700px';
            document.querySelector('.video__btns').style.height = '50px';
            document.querySelector('.video__player').style.transform = 'translateY(0px)';
        })


playBtn.addEventListener('click', function () {
    document.querySelector('.video__player-grid').style.display = 'none';
    videoPanel.style.display = 'block';
    document.querySelector('.video__outro').style.display = 'none';
    video.play();
})

window.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight') {
        video.currentTime = video.currentTime + 10;
        video.play();
    } else if (e.code == 'ArrowLeft') {
        video.currentTime = video.currentTime - 10;
        video.play();
    }
})
