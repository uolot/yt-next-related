function onYouTubePlayerReady(player) {
    player.addEventListener("onStateChange", function(state){
        if (state === 0) {
            var relatedVideos = document.querySelectorAll('a.related-video');
            var next = Math.ceil(Math.random() * relatedVideos.length);
            var nextVideo = relatedVideos[next];
            nextVideo.click();
        }
    });
}
