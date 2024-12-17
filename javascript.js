const allSongs = document.getElementById('song_container');
const poster = document.getElementById('PosterImage');
const play = document.getElementById('play')
const backward = document.getElementById('backward')
const forward = document.getElementById('forward')
var click = 1   
var audio = new Audio();
var SelectedSong = 0


// data of the img, name of song and url of song with its timeing
var item = [
    {
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/65/be/e4/65bee4d2-ff3d-b568-d57c-d118a9ccbaed/cover.jpg/1200x1200bb.jpg",
        name: "chandaliyo ugyo re",
        time: "5.67",
        url: "./Chandaliyo-Ugyo-Re.mp3"
    },
    {
            image: "https://c.saavncdn.com/225/Naadi-Dosh-Gujarati-2022-20220623125847-500x500.jpg",
            name: "Lavva Lavvi",
            time: "8.45",
            url: "./Lavva Lavvi (From Naadi Dosh).mp3"
        },
        {
            image: "https://c.saavncdn.com/559/Chaal-Jeevie-Laiye-Gujarati-2021-20210108011052-500x500.jpg",
            name: "Chand Ne Kaho",
            time: "8.45",
            url: "./Chand-Ne-Kaho.mp3"
        },
        {
            image: "https://i1.sndcdn.com/artworks-J0AxfEM2aJFk-0-t500x500.jpg",
            name: "Pankhi Re Pankhi Re",
            time: "5.67",
            url: "./pagalworld.com.mx-Pankhi Re.mp3"
        }
];



// function to display the img
function SongsDisplay() {
    var cultter = "";

    item.forEach(function(elem,index) {
        // console.log("hey");
        
        cultter += ` 
        <div class="song" id="${index}">
            <div class="sng"> 
                <img src="${elem.image}" id="img" alt="Song Image">
                <h3>${elem.name}</h3>
            </div>
        <h6>${elem.time}</h6>
        </div>  
        `
    })
    // console.log(cultter);
    allSongs.innerHTML = cultter
    
    audio.src = item[SelectedSong].url
    poster.style.backgroundImage = `url(${item[SelectedSong].image})`
}



// function to play and pause the song while buttion and direct from navigation 
function SongPlay(){
    
    allSongs.addEventListener("click",function(elem){
        SelectedSong = elem.target.id
        play.innerHTML =  `<i class="ri-pause-large-fill"></i>`
        click = 2
        SongsDisplay()
        audio.play()
    });

    play.addEventListener("click", function(){
        
            if(click == 1){
                play.innerHTML =  `<i class="ri-pause-large-fill"></i>`
                SongsDisplay();
                audio.play();
                click = 2
            }
            else{
                play.innerHTML =  `<i  class="ri-play-large-fill"></i>`
                SongsDisplay();
                audio.pause();
                click = 1
            }
            
        })
        
}



//function to foreward and backward the song 
function ForBackWard(){
    forward.addEventListener('click',function(){
        if(SelectedSong < item.length - 1){
            SelectedSong++
            SongsDisplay();
            play.innerHTML =  `<i class="ri-pause-large-fill"></i>`;
            click = 2
            audio.play();
            backward.style.opacity = 1
        }
        else{
            forward.style.opacity = 0.4
        }
    })
    
    backward.addEventListener('click',function(){
        if(SelectedSong > 0 ){
            SelectedSong--
            SongsDisplay();
            play.innerHTML =  `<i class="ri-pause-large-fill"></i>`
            click = 2
            audio.play();
            forward.style.opacity = 1
        }
        else{
            backward.style.opacity = 0.4
        }
    })
}



ForBackWard();
SongPlay();
SongsDisplay();








