console.log("aman");

let songIndex=0;
let audioElement=new Audio('songs/song1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[

    {songName:"Zara Si Dil Mein" ,  filePath:"/songs/song1.mp3" ,  coverPath:"/cover/1st song.jpg" },
    {songName:"Labon Ko" ,  filePath:"/songs/song2.mp3" ,  coverPath:"/cover/2nd song.jpg" },
    {songName:"O Mere Dil K" ,  filePath:"/songs/song3.mp3" ,  coverPath:"/cover/3rd song.jpg" },
    {songName:"Soniyo O Soniyon" ,  filePath:"/songs/song4.mp3" ,  coverPath:"/cover/4th song.jpg" },
    {songName:"Zindigi Do Pal Ki" ,  filePath:"/songs/song5.mp3" ,  coverPath:"/cover/5th song.jpg" },
    {songName:"Ek Din Teri Raahon Mein" ,  filePath:"/songs/song6.mp3" ,  coverPath:"/cover/6th song.jpg" },
    {songName:"Tu Hi Meri Shab" ,  filePath:"/songs/song7.mp3" ,  coverPath:"/cover/7th song.jpg" },
    {songName:"Ajab Si" ,  filePath:"/songs/song8.mp3" ,  coverPath:"/cover/8th song.jpg" },

]

songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})



//Play & Pause:

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


//Time-Update Seek Bar:

audioElement.addEventListener('timeupdate', ()=>
{


    //update seek-bar:

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value=progress;
})


myProgress.addEventListener('change',()=>
{
    audioElement.currentTime=((myProgress.value*audioElement.duration)/100);

})


const makeAllPlays= ()=>{

    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

       // audioElement.src=`/songs/${index+1}.mp3`;
       //audioElement.src='/songs/song2.mp3'

       audioElement.src=`songs/song${songIndex+1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
})


document.getElementById('forward').addEventListener('click',()=>{

    if(songIndex>=7)
    {
        songIndex=0;
    }

    else
    {
        songIndex+=1;
    }

    audioElement.src=`songs/song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   
})


document.getElementById('back').addEventListener('click',()=>{

    if(songIndex<=0)
    {
        songIndex=0;
    }

    else
    {
        songIndex-=1;
    }

    audioElement.src=`songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})



    
window.addEventListener("keyup",checkKeyPress);

function checkKeyPress(key)
{
    if(key.keyCode=="32")
    {
        
        if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

    }
}



  
