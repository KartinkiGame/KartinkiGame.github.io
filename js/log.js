const player = {
  pPw: '',
  lvl1: 0,
  lvl2: 0,
  lvl3: 0
}

const btn = document.querySelector("[data-btn]");
var pN;
var pP;
var topP = {
  p1:'',
  p2:'',
  p3:''
}

btn.addEventListener("click", () => {
  pN = document.getElementById('pName').value;
  pP = document.getElementById('pPw').value;
  if (pN == '') {
    alert("Вы не ввели имя");
  }
  else {
    if (pP == ''){
      alert("Вы не ввели пароль");
    }
    else {
      let pers = JSON.parse(localStorage.getItem(pN));
      if ((localStorage.getItem(pN) != null) && (pers.pPw != pP)){
        alert("Неверный пароль");
      }
      else {
        btn.classList.add("animating");
        player.pPw = pP;
        localStorage.setItem('actP' , pN);
        if ((localStorage.getItem(pN) == null)) {
          localStorage.setItem(pN , JSON.stringify(player));
        }
        let a_raw = localStorage.getItem(localStorage.getItem('actP'));
        let a_pers = JSON.parse(a_raw);
        let a_persS = a_pers.lvl1+a_pers.lvl2+a_pers.lvl3;
        if (localStorage.getItem('top3') == null){
            topP.p1 = localStorage.getItem('actP');
            topP.p2 = localStorage.getItem('actP');
            topP.p3 = localStorage.getItem('actP');
            localStorage.setItem('top3', JSON.stringify(topP));
        }
        setTimeout(() => document.location.href = "levels.html", 2500);
      }
    }
  }
});