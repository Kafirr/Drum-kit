window.addEventListener('keydown',function(e){
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    // key.classList.toggle('play');
    key.classList.add('play');
    audio.currentTime=0;
    audio.play();

    this.setTimeout(function(){
        key.classList.remove('play')
    },50)
})
