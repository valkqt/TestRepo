const redBlueAlpha = function() {
    document.getElementById("purga").style.color = "blue"
    let carioca =document.getElementsByClassName('codiceSamael')
    for(let i = 0; i < carioca.length; i++){
		carioca[i].style.backgroundColor = "red"
    }
    
    

}


redBlueAlpha()