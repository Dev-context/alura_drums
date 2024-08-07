
document.querySelectorAll("audio").forEach(audio=>{
    document.querySelectorAll('.tecla').forEach(e=>{
        const className=e.className.replace(/tecla/,"").trim()
       if(audio.id.endsWith(className)){
        e.addEventListener("click",()=>{
            document.getElementById(audio.id).play()
        })
       }
    })

});



