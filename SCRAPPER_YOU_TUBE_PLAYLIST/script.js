var els = document.getElementsByClassName(
  "yt-simple-endpoint style-scope ytd-playlist-video-renderer"
);
var thumbnails = document.getElementsByClassName(
  "yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"
);
var videoId = "";
var title = "";
var thumbnail = "";
var playlistData = {};
for (i = 0; i < 5; i++) {
  var el = els[i];
  var t = thumbnails[i];

  videoId = el.href.split("?v=")[1].split("&list")[0] ;

  playlistData[videoId] = {
    videoId: videoId,
    title: el.title,
    thumbnail: t.src,
  };
}
console.log(playlistData);
