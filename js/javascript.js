function buttonClick(id) {
    var div = document.getElementById(id);
    
    if(div.className === "desc"){
        for(var i = 1; i <= 9; i++){
            var current = document.getElementById("desc"+i);
            current.className = "desc"
        }
        div.className = "desc active"
    }
    else {
        div.className = "desc"
    }
}
