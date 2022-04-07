console.log("welocme to my musical world");

let songIndex=0;
let audioElement= new Audio('/homeSongs/s1.mp3');
let prev= document.querySelector("#prev");
let next= document.querySelector("#next");
let masterplay = document.querySelector("#master-play");
let myProgressBar= document.querySelector('#myprogressbar');
let greet=document.getElementsByClassName("greet");

let date=new Date();
let time = date.getHours();
console.log(time);
if(time<12 && time >4) greet.textContent="Good Morning!";
else if(time>=12 && time <16) greet.textContent="Good Afternoon!";
else if(time>=16 && time <4) greet.textContent="Good Evening!";

let songs=[
    {songname: "Be Alright ",singer:"Dean Lewis", filePath:"/homeSongs/s1.mp3",coverPath:"/coverPics/be_alright_cover.jpg"},
    {songname: "Dandelions",singer:"Ruth B", filePath:"/homeSongs/s2.mp3",coverPath:"/coverPics/dandelions.jpg"},
    {songname: "Give Me Your Forever", singer:"Zack Tabudlo",filePath:"/homeSongs/s3.mp3",coverPath:"/coverPics/give_me_ur_4ever.jpg"},
    {songname: "If The World Was Ending",singer:"JP Saxe, Julia Michaels", filePath:"/homeSongs/s4.mp3",coverPath:"/coverPics/world_wa_ending.jpg"},
    {songname: "Night Changes", singer:"One Direction",filePath:"/homeSongs/s5.mp3",coverPath:"/coverPics/night_changes.jpg"},
    {songname: "Story Of My Life",singer:"One Direction", filePath:"/homeSongs/s6.mp3",coverPath:"/coverPics/story_of_my_life.jpg"},
    {songname: "Memories",singer:"Maroon 5", filePath:"/homeSongs/s7.mp3",coverPath:"/coverPics/memories.jpg"},
    {songname: "Heat Waves",singer:"Glass Animals", filePath:"/homeSongs/s8.mp3",coverPath:"/coverPics/Heat_Waves.png"},
   
]

for(let i=0;i<songs.length;i++){
    let names= document.querySelector(`.name${i}`);
    let imgs= document.querySelector(`.img${i}`);
    let singers= document.querySelector(`.singer${i}`);
    names.innerHTML= songs[i].songname;
         imgs.src= songs[i].coverPath;
    singers.innerHTML= songs[i].singer;
}


const makeallplay= ()=>{
    let list= Array.from(document.getElementsByClassName("small-play"));
    list.forEach(element => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

const to_play_master=()=>{
    audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
  document.getElementById('gif').style.opacity=1;
//   let index=0;
//  for(let i=0;i<songs.length;i++){
//      let child_song= new Audio(songs[i].filePath);
//      if(child_song.src==audioElement.src){
//          index=i;
//      }
//  }

 let child = document.getElementById(songIndex);
 child.classList.remove("fa-circle-play");
 child.classList.add("fa-circle-pause");
 

}
const to_pause_master=()=>{
    makeallplay();
audioElement.pause();
masterplay.classList.remove('fa-circle-pause');
masterplay.classList.add('fa-circle-play');
document.getElementById('gif').style.opacity=0;
}


const play_child=(element)=>{
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");
         audioElement.currentTime=0;
         to_play_master();
}

const pause_child=(element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  
     to_pause_master();
   
}

const updation=(i)=>{
    let master_name=document.querySelector("#master-name");
    let master_singer=document.querySelector("#master-singer");
    master_name.textContent=songs[i].songname;
    master_singer.textContent=songs[i].singer;
}

Array.from(document.getElementsByClassName("small-play")).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        songIndex=i;
        // console.log(songIndex);
        // let index=e.target.id;
        // console.log(index);
        updation(i);

        if(e.target.classList.contains("fa-circle-play")){
          
            audioElement.src= songs[parseInt(i)].filePath;
        makeallplay();
       play_child(e.target);
        }
        else if(e.target.classList.contains("fa-circle-pause")){
          pause_child(e.target);
        
        }
    });
});



masterplay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
     to_play_master();
    }
    else{
      to_pause_master();
    }
   
});


audioElement.addEventListener('timeupdate',()=>{
    if(audioElement.ended){  
        to_pause_master(); 
    audioElement.currentTime=0;
    songIndex+=1;
    updation(songIndex);
    audioElement.src=songs[songIndex].filePath;
    to_play_master();
       
    }
  let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);

   myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value* audioElement.duration)/100;

});


//back button function
prev.addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex=songs.length-1;
    } 
    else{
        songIndex-=1;
    }
    updation(songIndex);
    audioElement.src=songs[songIndex].filePath;
    audioElement.play();
    makeallplay();
    let child= document.getElementById(songIndex);
    child.classList.remove("fa-circle-play");
    child.classList.add("fa-circle-pause");
to_play_master();

     
});

//next button function
next.addEventListener('click',()=>{
   if(songIndex>=songs.length-1){
       songIndex=0;
   }
   else songIndex+=1;
   updation(songIndex);
   audioElement.src=songs[songIndex].filePath;
   audioElement.play();
   makeallplay();
   let child= document.getElementById(songIndex);
   child.classList.remove("fa-circle-play");
   child.classList.add("fa-circle-pause");
to_play_master();

});

