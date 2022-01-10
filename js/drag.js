var theme = 1;
localStorage.setItem('theme', JSON.stringify(theme));
const zone1 = document.querySelector('.zone_1');
const zone2 = document.querySelector('.zone_2');
const pt = document.querySelector('#pt');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

pt.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
    theme++;
    localStorage.setItem('theme', JSON.stringify(theme));
    if (theme % 2 == 0) {
        document.documentElement.style.setProperty('--dark-blue', '#2b2b2b');
        document.documentElement.style.setProperty('--blue', '#353535');
        document.documentElement.style.setProperty('--border', '#fff');
    }
    else {
        document.documentElement.style.setProperty('--dark-blue', '#1f63b1');
        document.documentElement.style.setProperty('--blue', '#277bdb');
        document.documentElement.style.setProperty('--border', '#2b2b2b');
    }
}