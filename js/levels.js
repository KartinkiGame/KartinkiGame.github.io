let raw = localStorage.getItem('theme');
let th = JSON.parse(raw);
if (th % 2 == 0) {
    document.documentElement.style.setProperty('--dark-blue', '#2b2b2b');
    document.documentElement.style.setProperty('--blue', '#353535');
    document.documentElement.style.setProperty('--border', '#fff');
}
else {
    document.documentElement.style.setProperty('--dark-blue', '#1f63b1');
    document.documentElement.style.setProperty('--blue', '#277bdb');
    document.documentElement.style.setProperty('--border', '#2b2b2b');
}

document.getElementById('change').onclick = function(){
    document.location.href = "index.html"
}

document.getElementById('scores').onclick = function(){
    document.location.href = "scores.html"
}