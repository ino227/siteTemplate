var date = new Date();
var element = document.getElementById('time');

function getTime(date){
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

element.innerHTML = getTime(date);
