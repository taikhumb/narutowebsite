
function change(){
    var pic = document.getElementById('image');
    if (pic.src.match("download.jpg"))
    {
        pic.src="download (2).jpg";
        pic.style.height = "20%";
    }
    else
    {
        pic.src =  "download.jpg";
        pic.style.height = "30%";
    };
    var mq = window.matchMedia( "(max-width: 999px)" );
    if (mq.matches){    
        
    }
    else
    {
      pic.style.height = "70%";
    }
    

        

    
}