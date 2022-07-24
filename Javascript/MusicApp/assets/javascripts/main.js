window.addEventListener("load", init);

var audioPlayer;
function init() {
    loadSongs();
    audioPlayer = document.querySelector("audio");
}

function loadSongs() {
    let ul = document.querySelector("#songs-list");
    // for(var i = 0; i < songs.length; i++) {

    // }
    songs.forEach(function(obj) {
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let button = document.createElement("button");
        h3.innerHTML = obj.song_name;
        h3.className = "text-center";
        button.innerHTML = "Add to Playlist";
        button.classList = "btn btn-danger";
        img.setAttribute('src',obj.song_thumbnail);
        img.className = "w-100";
        li.appendChild(img);
        li.appendChild(h3);
        li.setAttribute('title',obj.song_id);
        li.appendChild(button);
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    })
}

function playSong() {
    let song_id = this.title;
    for(var i = 0; i < songs.length; i++){
        if(songs[i].song_id == song_id) {
            var song_url = songs[i].song_url;
            break;
        }
    }
    audioPlayer.src = song_url;
    audioPlayer.play();
}