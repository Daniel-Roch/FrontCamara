const btnScrollTop = document.getElementById("btnScrollTop")

window.onscroll = ()=>{
    if(window.scrollY > 20){
        headerSection.style.background = "rgb(0,49,76)";
        headerSection.style.padding = "5px 100px 5px 100px";
    }else{
        headerSection.style.background = "";
        headerSection.style.padding = "20px 100px 20px 100px";
    }

    if(window.scrollY >= 700){
        btnScrollTop.style.display = "flex"  
    }else{
        btnScrollTop.style.display = "none"
    }
}