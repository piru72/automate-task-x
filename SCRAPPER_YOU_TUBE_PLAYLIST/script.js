var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var thumbnails = document.getElementsByClassName('yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded');
var id="";
var title="";
var thumbnail = "";
for(i = 0;i<els.length;i++){
    var el = els[i];
    var t = thumbnails[i];
    
	id += (el.href.split('?v=')[1].split('&list')[0] + "\n");
    title += (el.title + "\n");
    thumbnail += (t.src + "\n");

}
console.log(id);
console.log(title);
console.log(thumbnail);