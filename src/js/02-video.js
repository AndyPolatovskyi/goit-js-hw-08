
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")));

    player.getVideoTitle().then(function(title) {
        
    });
    player.on("timeupdate", throttle(function (data) {
         console.log(data);
        localStorage.setItem("videoplayer-current-time", data.seconds)
    }, 1000)
    );
    
    