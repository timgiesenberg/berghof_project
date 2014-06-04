/**
 * Created with JetBrains PhpStorm.
 * User: Janine Derix
 * Date: 23.04.14
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */
function buttonClick(id) {
    var div = document.getElementById(id);
    
    for(var i = 1; i <= 9; i++){
        var current = document.getElementById("desc"+i);
        current.className = "desc"
    }
    
    div.className = "desc active"
}
