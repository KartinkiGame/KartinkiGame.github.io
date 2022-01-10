let raw = localStorage.getItem(localStorage.getItem('actP'));
let pers = JSON.parse(raw);

let a_raw = localStorage.getItem(localStorage.getItem('actP'));
let a_pers = JSON.parse(a_raw);
let a_persS = a_pers.lvl1+a_pers.lvl2+a_pers.lvl3;

let top_3 = JSON.parse(localStorage.getItem('top3'));    
let raw1 = localStorage.getItem(top_3.p1);
let pers1 = JSON.parse(raw1);
let persS1 = pers1.lvl1+pers1.lvl2+pers1.lvl3;

let raw2 = localStorage.getItem(top_3.p2);
let pers2 = JSON.parse(raw2);
let persS2 = pers2.lvl1+pers2.lvl2+pers2.lvl3;

let raw3 = localStorage.getItem(top_3.p3);
let pers3 = JSON.parse(raw3);
let persS3 = pers3.lvl1+pers3.lvl2+pers3.lvl3;

document.getElementById("first").innerText = "1) " + top_3.p1 + " ("+persS1+")";
document.getElementById("sc1").innerText = "1 уровень: " + pers1.lvl1 + "\n2 уровень: "+ pers1.lvl2+ "\n3 уровень: "+ pers1.lvl3;
document.getElementById("second").innerText = "2) " + top_3.p2 + " ("+persS2+")";
document.getElementById("sc2").innerText = "1 уровень: " + pers2.lvl1 + "\n2 уровень: "+ pers2.lvl2+ "\n3 уровень: "+ pers2.lvl3;
document.getElementById("third").innerText = "3) " + top_3.p3 + " ("+persS3+")";
document.getElementById("sc3").innerText = "1 уровень: " + pers3.lvl1 + "\n2 уровень: "+ pers3.lvl2+ "\n3 уровень: "+ pers3.lvl3;

document.getElementById("act_name").innerText = localStorage.getItem('actP') + " ("+a_persS+")";
document.getElementById("a_sc").innerText = "1 уровень: " + pers.lvl1 + "\n2 уровень: "+ pers.lvl2+ "\n3 уровень: "+ pers.lvl3;


document.getElementById('bk').onclick = function(){
    document.location.href = "levels.html";
}