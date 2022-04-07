const containers = document.querySelector(".container");
let prev= document.querySelector("#back");
let next= document.querySelector("#next");
let masterplay = document.querySelector("#master-play");
const bottombar= document.querySelector(".bottom-bar");
let myProgressBar= document.querySelector('#myprogressbar');
let audioitem=new Audio("");
let listindex=0;
let musicindex=0;

const songlist1=[
    {songname: "At My Worst",singer:"Pink Sweat", filePath:"/engfav/at-my-worst.mp3",movie:"Album"},
    {songname: "Perfect",singer:"Ed Sheeran", filePath:"/engfav/Perfect.mp3",movie:"Album"},
    {songname: "Pride", singer:"Noah Kahan and Mxmtoon",filePath:"/engfav/pride.mp3",movie:"Album"},
    {songname: "Circles",singer:"Bangers Only", filePath:"/engfav/circles.mp3",movie:"Album"},
    {songname: "Let Me Down Slowly", singer:"Alec Benjamin",filePath:"/engfav/Let-Me-Down-Slowly.mp3",movie:"Album"},
    
]
const songlist2=[
    {songname: "Tu Hi Hai",singer:"Arijit Singh", filePath:"/bolly/TU-HI-HAI.mp3",movie:"Love You Zindagi"},
    {songname: "Rangi Saari",singer:"Kavita Seth, Kanishk Seth", filePath:"/bolly/Rangi-Saari.mp3",movie:"Album"},
    {songname: "Safarnama", singer:"Lucky Ali",filePath:"/bolly/Safarnama.mp3",movie:"Tamasha"},
    {songname: "Kyon",singer:"Pritam, Papon ,Sunidhi Chauhan", filePath:"/bolly/Kyon.mp3",movie:""},
    {songname: "Ranjha", singer:"Jasleen Royal, B Praak, Romy, Anvita dutt",filePath:"/bolly/Ranjha.mp3",movie:"Shershah"},
    
]
const songlist3=[
    {songname: "Rait Zara Si",singer:"AR Rahman, Arijit Singh", filePath:"/lovesong/Rait-Zara-Si.mp3",movie:"Atrangi Re"},
    {songname: "Bandeya",singer:"Arijit Singh", filePath:"/lovesong/Bandeya.mp3",movie:"Dil Junglee"},
    {songname: "Rataan Lambiyan", singer:"Jubin Nautiyal, Asees Kaur",filePath:"/lovesong/Raataan-Lambiyan.mp3",movie:"Shershah"},
    {songname: "Enna sona",singer:"Arijit Singh", filePath:"/lovesong/ENNA-SONA.mp3",movie:"OK Jaanu"},
    {songname: "Chal Ghar Chalen", singer:"Arijit Singh",filePath:"/lovesong/Chal-Ghar-Chalen.mp3",movie:"Malang"},
    {songname: "Dil Na Jaaneya",singer:"Rochal Ali, Lauv, Akasa", filePath:"/lovesong/Dil-Na-Jaaneya.mp3",movie:"Good Newwz"},
 
]
const songlist4=[
    {songname: "Chaand Baaliyan ",singer:"Aditya A", filePath:"/dailymix/Chaand-Baaliyan.mp3",movie:"Album"},
    {songname: "Brown Munde ",singer:"AP Dhillion", filePath:"/dailymix/Brown-Munde.mp3",movie:"Album"},
    {songname: "One Call Away ", singer:"Charlie puth",filePath:"/dailymix/One-Call-Away.mp3",movie:"Album"},
    {songname: "Something Like This ",singer:"The Chainsmokers and Coldplay", filePath:"/dailymix/Something-Just-Like-This.mp3",movie:"Album"},
    {songname: "Talking To The Moon", singer:"Bruno Mars",filePath:"/dailymix/Talking-To-The-Moon.mp3",movie:"Album"},
    {songname: "Mann Bharrayaa 2.0",singer:"B Praak", filePath:"/dailymix/MANN-BHARRYA.mp3",movie:"Shershah"},
    {songname: "Mere Yaara ",singer:"Arijit Singh", filePath:"/dailymix/Mere-Yaaraa.mp3",movie:"Shooryavanshi"},
    {songname: "Peaches",singer:"Justin Bieber", filePath:"/dailymix/Peaches.mp3",movie:"Album"},
    {songname: "All Figured Out",singer:"44Phantom ", filePath:"/dailymix/all figured out.mp3",movie:"Album"},
    {songname: "Liggi",singer:"Ritviz", filePath:"/dailymix/liggi.mp3",movie:"Album"},
   
]
const songlist5=[
    {songname: "Channa Mereya",singer:"Pritam, Arijit Singh", filePath:"/dj/Channa Mereya.mp3",movie:"Remix by DJ Chetas"},
    {songname: "Party Monster ",singer:"The Weekend", filePath:"/dj/Party Monster.mp3",movie:"Starboy"},
    {songname: "Taki Taki", singer:"DJ Snake ft. Cardi B, Selena Gomez",filePath:"/dj/Taki Taki.mp3",movie:"Album"},
    {songname: "Shape Of You ",singer:"Ed Sheeran", filePath:"/dj/Shape of You.mp3",movie:"Album"},
    {songname: "The Night", singer:"Avicii",filePath:"/dj/Avicii.mp3",movie:"Avicii by Avicii"},
   

]

const details=(songlist,index)=>{
    let master_name=document.querySelector("#master-name");
    let master_singer=document.querySelector("#master-singer");
    master_name.textContent=songlist[index].songname+ " - ";
    master_singer.textContent=songlist[index].singer;
}
const pause_master=()=>{
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    document.getElementById('gif').style.opacity=0;
}
const play_master=()=>{
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    document.getElementById('gif').style.opacity=1;
    audioitem.play();
}

const play_update=(songlist,index)=>{
    audioitem.pause();
    audioitem.src=songlist[index].filePath;
    play_master();
}

const make_white=(i)=>{
    Array.from(document.getElementsByClassName(`song-name${i}`)).forEach((element)=>{
        element.style.color="white";
    })
}


let grids=Array.from(document.getElementsByClassName("grid"));

grids.forEach((element,i)=> {
        element.addEventListener('click',(e)=>{
            listindex=i+1;
      let index= parseInt(element.id);
      console.log(index);
      containers.style.zIndex=0;
      let List=document.querySelector(`.list${index}`);
      List.style.zIndex=1;
     List.style.opacity=1;
     List.classList.add("trans");
     bottombar.classList.add("trans");
     bottombar.style.opacity=1;
        });
    });
    
Array.from(document.getElementsByClassName("fa-xmark")).forEach((element,i)=>{

   element.addEventListener('click',(e)=>{
       element.parentElement.parentElement.parentElement.style.zIndex=0;
       element.parentElement.parentElement.parentElement.style.opacity=0;
       containers.style.zIndex=1;
       bottombar.style.opacity=0;
       audioitem.pause();
       audioitem.currentTime=0;
       audioitem.src="http://127.0.0.1:5500/menu.html";
       let master_name=document.querySelector("#master-name");
       let master_singer=document.querySelector("#master-singer");
       master_name.textContent= "";
       master_singer.textContent="";
        pause_master();
        make_white(i+1);
        nocute(listindex);
   })
})




masterplay.addEventListener('click',()=>{
    
    if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(audioitem.paused || audioitem.currentTime<=0){
        audioitem.play();
        cute(listindex);
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        document.getElementById('gif').style.opacity=1;

    }
    else{
        audioitem.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        nocute(listindex);
        document.getElementById('gif').style.opacity=0;
    }
   
});

const find_list=()=>{
    switch(listindex){
        case 1: return songlist1;
        case 2: return songlist2;
        case 3: return songlist3;
        case 4: return songlist4;
        case 5: return songlist5;
       
    }
}

prev.addEventListener('click',()=>{
if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(musicindex<=0 )
   musicindex= find_list().length-1;
   else musicindex-=1;

   make_white(listindex);
   document.getElementsByClassName(`song-name${listindex}`)[musicindex].style.color="#018901";
   
   play_update(find_list(),musicindex);
    details(find_list(),musicindex);

})

next.addEventListener('click',()=>{
if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(musicindex==find_list().length-1 )
   musicindex= 0;
   else musicindex+=1;

   make_white(listindex);
   document.getElementsByClassName(`song-name${listindex}`)[musicindex].style.color="#018901";
   
   play_update(find_list(),musicindex);
    details(find_list(),musicindex);

})

const cute=(i)=>{
    document.getElementById(`cute${i}`).style.opacity=1;
}
const nocute=(i)=>{
    document.getElementById(`cute${i}`).style.opacity=0;
}

for(let i=1;i<=5;i++){
    Array.from(document.getElementsByClassName(`song-name${i}`)).forEach((element,j)=>{
        element.addEventListener('click',(e)=>{
            make_white(i);
            musicindex=j;
            e.target.style.color="#018901";
           switch(i){
               case 1: play_update(songlist1,j);
               details(songlist1,j);
               cute(i);
               break;
               case 2: play_update(songlist2,j);
               details(songlist2,j);
               cute(i);
               break;
               case 3: play_update(songlist3,j);
               details(songlist3,j);
               cute(i);
               break;
               case 4: play_update(songlist4,j);
               details(songlist4,j);
               cute(i);
               break;
               case 5: play_update(songlist5,j);
               details(songlist5,j);
               cute(i);
               break;
               default: break;
           }
        })
    })
}

audioitem.addEventListener('timeupdate',()=>{
    if(audioitem.ended){  
         audioitem.currentTime=0;
       pause_master();
    }
  let progress= parseInt((audioitem.currentTime/audioitem.duration)*100);

   myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioitem.currentTime=(myProgressBar.value* audioitem.duration)/100;

});
