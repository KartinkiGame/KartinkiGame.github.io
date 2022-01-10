function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

img1.style.width = '150px';
img2.style.width = '150px';
img3.style.width = '150px';
img4.style.width = '150px';
img5.style.width = '150px';
img6.style.width = '150px';
img7.style.width = '150px';
img8.style.width = '150px';

const imageOut = document.querySelector('.img_out');
document.getElementById('start').onclick = function(){
    totalSeconds = 65;
    clearInterval(counter);
    counter=setInterval(timer, 1000);
    document.getElementById("start").innerText = "СЛЕДУЮЩИЙ ВОПРОС";
    flag = 0;
    img1.style.webkitFilter = "blur(6px)";
    img2.style.webkitFilter = "blur(6px)";
    img3.style.webkitFilter = "blur(6px)";
    img4.style.webkitFilter = "blur(6px)";
    img5.style.webkitFilter = "blur(6px)";
    img6.style.webkitFilter = "blur(6px)";
    img7.style.webkitFilter = "blur(6px)";
    img8.style.webkitFilter = "blur(6px)";
    img1.style.border="";
    img2.style.border="";
    img3.style.border="";
    img4.style.border="";
    img5.style.border="";
    img6.style.border="";
    img7.style.border="";
    img8.style.border="";
    if (count == 10) {
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
        w = 1;
        // alert(let);
        //Выбираем картинку 1//
        find:for (let key in images) {
            //alert(key);
            if (w == 1) {
                pos = key.search(let);
                if (pos!=-1) {
                    let x = getRandomInt(1, 4);
                    if (x < 3) continue find;
                    // alert(pos+1);
                    if (img1.dataset['key'] == key) continue find;
                    else {
                        img1.setAttribute('data-key',key);
                        img1.src = 'img/'+key+'.png';
                        // alert(key);
                        w = 2;
                        continue find;
                    }
                }
                else continue find;
            }
            if ((key.substr(pos,1) == let) && (w == 2)) {
                // alert(pos+1);
                if (img2.dataset['key'] == key) continue find;
                else {
                    img2.setAttribute('data-key',key);
                    img2.src = 'img/'+key+'.png';
                    // alert(key);
                    f--;
                    break;
                }
            }
        }
    }
    //Подбираем 3,4,5,6,7,8 картинки//
    f = 3;
    check:for (let key in images) {
        if (key.substr(pos,1) != let) {
            if (f == 3) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img3.setAttribute('data-key',key);
                    img3.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 4) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img4.setAttribute('data-key',key);
                    img4.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 5) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img5.setAttribute('data-key',key);
                    img5.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 6) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img6.setAttribute('data-key',key);
                    img6.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 7) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img7.setAttribute('data-key',key);
                    img7.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            if (f == 8) {
                if ((img2.dataset['key'] == key) || (img1.dataset['key'] == key)) 
                    continue check;
                else{
                    img8.setAttribute('data-key',key);
                    img8.src = 'img/'+key+'.png';
                    f++;
                    continue check;
                }
            }
            
        }
    }

    let x = getRandomInt(1, 11);
    if (x == 1) {
        imageOut.append(img1);
        imageOut.append(img6);
        imageOut.append(img3);
        imageOut.append(img4);
        imageOut.append(img7);
        imageOut.append(img2);
        imageOut.append(img5);
        imageOut.append(img8);
    }
    if (x == 2) {
        imageOut.append(img5);
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img1);
        imageOut.append(img7);
        imageOut.append(img2);
        imageOut.append(img6);
        imageOut.append(img8);       
    }
    if (x == 3) {
        imageOut.append(img5);
        imageOut.append(img3);
        imageOut.append(img1);
        imageOut.append(img4);
        imageOut.append(img7);
        imageOut.append(img8);
        imageOut.append(img6);
        imageOut.append(img2);       
    }
    if (x == 4) {
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img2);  
        imageOut.append(img1);
        imageOut.append(img5);
        imageOut.append(img6);
        imageOut.append(img7);
        imageOut.append(img8);     
    }
    if (x == 5) {
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img8);  
        imageOut.append(img7);
        imageOut.append(img5);
        imageOut.append(img6);
        imageOut.append(img1);
        imageOut.append(img2);     
    }
    if (x == 6) {
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img7);  
        imageOut.append(img1);
        imageOut.append(img5);
        imageOut.append(img6);
        imageOut.append(img2);
        imageOut.append(img8);     
    }
    if (x == 7) {
        imageOut.append(img4);
        imageOut.append(img2);
        imageOut.append(img3);  
        imageOut.append(img5);
        imageOut.append(img1);
        imageOut.append(img6);
        imageOut.append(img7);
        imageOut.append(img8);     
    }
    if (x == 8) {
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img8);  
        imageOut.append(img6);
        imageOut.append(img5);
        imageOut.append(img1);
        imageOut.append(img7);
        imageOut.append(img2);     
    }
    if (x == 9) {
        imageOut.append(img2);
        imageOut.append(img3);
        imageOut.append(img4);  
        imageOut.append(img8);
        imageOut.append(img5);
        imageOut.append(img6);
        imageOut.append(img7);
        imageOut.append(img1);     
    }
    if (x == 10) {
        imageOut.append(img4);
        imageOut.append(img3);
        imageOut.append(img2);  
        imageOut.append(img6);
        imageOut.append(img5);
        imageOut.append(img1);
        imageOut.append(img7);
        imageOut.append(img8);     
    }

    //Вывод вопроса//
    const q_text = document.getElementById("question");
    let add_q = 'В названии каких 2х картинок буква «'+let+'» стоит на '+(pos+1)+' месте?';
    q_text.innerText = add_q;
};

img1.addEventListener('click',()=>{
    img1.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--green)";
    flag++;
    if (flag == 2) {
        score++;
        img3.src = '';
        img4.src = '';
        img5.src = '';
        img6.src = '';
        img7.src = '';
        img8.src = '';
    }
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})

img2.addEventListener('click',()=>{
    img2.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--green)";
    flag++;
    if (flag == 2) {
        score++;
        img3.src = '';
        img4.src = '';
        img5.src = '';
        img6.src = '';
        img7.src = '';
        img8.src = '';
    }
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img3.addEventListener('click',()=>{
    img3.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img4.src = '';
    img5.src = '';
    img6.src = '';
    img7.src = '';
    img8.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img4.addEventListener('click',()=>{
    img4.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img3.src = '';
    img5.src = '';
    img6.src = '';
    img7.src = '';
    img8.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img5.addEventListener('click',()=>{
    img5.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img4.src = '';
    img3.src = '';
    img6.src = '';
    img7.src = '';
    img8.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img6.addEventListener('click',()=>{
    img6.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img4.src = '';
    img5.src = '';
    img3.src = '';
    img7.src = '';
    img8.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img7.addEventListener('click',()=>{
    img7.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img4.src = '';
    img5.src = '';
    img6.src = '';
    img3.src = '';
    img8.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
})
img8.addEventListener('click',()=>{
    img8.style.webkitFilter = "blur(0px)";
    event.target.style.border="3px solid var(--red)";
    if (flag == 0) score--;
    flag++;
    img1.style.border="";
    img2.style.border="";
    img1.src = '';
    img2.src = '';
    img4.src = '';
    img5.src = '';
    img6.src = '';
    img7.src = '';
    img3.src = '';
    document.getElementById("score_c").innerText = "СЧЕТ: "+score;
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
    document.location.href = "levels.html"
}