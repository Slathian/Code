allNames = (className) => {
    var names = [];
    var _try = ''
    var i = 0;
    while (i < 100) {
        _try = document.getElementsByClassName(className)[i].innerText
        names.push(_try)
        i++
    }
    return names; 
}

allNames();//?