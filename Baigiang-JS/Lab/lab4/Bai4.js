var temp 
function moWindow() {
    temp = window.open("https://www.youtube.com/","",
    "menubar = yes", "width = 400", "height = 500")
}

function dongwindow(){
    if(temp){
        temp.close();
    }
}
function check(){
   if(temp){
    if(temp.close){
        alert("Da dong")
    }
    else{
        alert("Chua dong")
    }
   }
}