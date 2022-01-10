function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

const imageOut = document.querySelector('.img_out');
document.getElementById('start').onclick = function(){
    document.getElementById("start").innerText = "СЛЕДУЮЩИЙ ВОПРОС";
    flag = 0;
    img1.style.border="";
    img2.style.border="";
    img3.style.border="";
    img4.style.border="";
    if (count == 10){
        alert("Из "+count+" вопросов вы набрали "+score+" баллов!");
        let raw = localStorage.getItem(localStorage.getItem('actP'));
        let pers = JSON.parse(raw);
        if (pers.lvl1 == 0) {
            pers.lvl1 = score; 
            localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
        }
        else {
            if (score > pers.lvl1) {
                pers.lvl1 = score;
                localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
            }
        }
        top3();
        count=0;
        score=0;
        document.getElementById("start").innerText = "НАЧАТЬ ИГРУ";
        location.reload()
    }
    count++;
    if (count == 10){
        document.getElementById("start").innerText = "ПОЛУЧИТЬ РЕЗУЛЬТАТ";
    }
    document.getElementById("number_c").innerText = "ВОПРОС: "+count+"/10";
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;

    //Цикл, чтобы в случае отсутствия буквы во всех картинках начать новый поиск с новой буквой//
    let f = 1;
    while (f){
        //Рандомим букву//
        let = (String.fromCharCode(Math.floor(Math.random()*(1040-1071))+1071)).toLowerCase();
        // alert(let);
        //Выбираем картинку 1//
        for (let key in images) {
            let x = getRandomInt(1, 4);
            if (x < 3) continue;
            // alert(key);
            pos = key.search(let);
            if (pos!=-1) {
                // alert(pos+1);
                if (img1.dataset['key'] == key) continue;
                else {
                    img1.setAttribute('data-key',key);
                    img1.src = 'img/'+key+'.png';
                    // alert(key);
                    f--;
                    break;
                }
            }
        }
    }
    //Подбираем 2,3,4 картинки//
    f = 2;
    check:for (let key in images) {
        let x = getRandomInt(1, 4);
        if (x < 3) continue;
        if (key.substr(pos,1) != let) {
            if (f == 2) {
                if ((img2.dataset['key'] == key) || (img3.dataset['key'] == key) || (img4.dataset['key'] == key))
                    continue check;
                else {
                    img2.setAttribute('data-key',key);
                    img2.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 3) {
                if ((img2.dataset['key'] == key) || (img3.dataset['key'] == key) || (img4.dataset['key'] == key)) 
                    continue check;
                else {
                    img3.setAttribute('data-key',key);
                    img3.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 4) {
                if ((img2.dataset['key'] == key) || (img3.dataset['key'] == key) || (img4.dataset['key'] == key))
                    continue check;
                else {
                    img4.setAttribute('data-key',key);
                    img4.src = 'img/'+key+'.png';
                    break;
                }
            }
        }
    }

    let x = getRandomInt(1, 5);
    if (x == 1) {
        imageOut.append(img1);
        imageOut.append(img2);
        imageOut.append(img3);
        imageOut.append(img4);
    }
    if (x == 2) {
        imageOut.append(img2);
        imageOut.append(img1);
        imageOut.append(img3);
        imageOut.append(img4);       
    }
    if (x == 3) {
        imageOut.append(img2);
        imageOut.append(img3);
        imageOut.append(img1);
        imageOut.append(img4);       
    }
    if (x == 4) {
        imageOut.append(img2);
        imageOut.append(img3);
        imageOut.append(img4);  
        imageOut.append(img1);     
    }

    //Вывод вопроса//
    const q_text = document.getElementById("question");
    let add_q = 'В названии какой картинки буква «'+let+'» стоит на '+(pos+1)+' месте?';
    q_text.innerText = add_q;
};

img1.addEventListener('click',()=>{
    event.target.style.border="3px solid var(--green)";
    if (flag == 0) score++;
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
    img2.src = '';
    img3.src = '';
    img4.src = '';
    flag = 1;
})

img2.addEventListener('click',()=>{
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
    img1.src = '';
    img3.src = '';
    img4.src = '';
    flag = 1;
})
img3.addEventListener('click',()=>{
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
    img2.src = '';
    img1.src = '';
    img4.src = '';
    flag = 1;
})
img4.addEventListener('click',()=>{
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
    img2.src = '';
    img3.src = '';
    img1.src = '';
    flag = 1;
})


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

document.getElementById('reload').onclick = function(){
    location.reload()
}
document.getElementById('change').onclick = function(){
    alert("Из "+count+" вопросов вы набрали "+score+" баллов!");
        let raw = localStorage.getItem(localStorage.getItem('actP'));
        let pers = JSON.parse(raw);
        if (pers.lvl3 == 0) {
            pers.lvl3 = score; 
            localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
        }
        else {
            if (score > pers.lvl3) {
                pers.lvl3 = score;
                localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
            }
        }
        top3();
        count=0;
        score=0;
        document.getElementById("start").innerText = "НАЧАТЬ ИГРУ";
    document.location.href = "index.html"
}
document.getElementById('back').onclick = function(){
    alert("Из "+count+" вопросов вы набрали "+score+" баллов!");
        let raw = localStorage.getItem(localStorage.getItem('actP'));
        let pers = JSON.parse(raw);
        if (pers.lvl1 == 0) {
            pers.lvl1 = score; 
            localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
        }
        else {
            if (score > pers.lvl1) {
                pers.lvl1 = score;
                localStorage.setItem(localStorage.getItem('actP') , JSON.stringify(pers));
            }
        }
        top3();
        count=0;
        score=0;
        document.getElementById("start").innerText = "НАЧАТЬ ИГРУ";
    document.location.href = "levels.html"
}