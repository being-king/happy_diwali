function handleDiyaClick(){
    
    var audio = document.getElementById("audio");
    audio.play();
    let diya=document.getElementsByClassName("diya")[0];
    diya.style.display="none";
    console.log(diya.style.display);
    let main=document.getElementsByClassName("main")[0];
    main.style.display="flex";
}
// function handleSubmit(){
//     let diya=document.getElementsByClassName("diya")[0];
//     diya.style.display="none";
//     let card=document.getElementsByClassName("main")[0];
//     card.style.display="flex";
// }