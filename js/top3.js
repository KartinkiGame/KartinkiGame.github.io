var topP = {
    p1:'',
    p2:'',
    p3:''
  }
function top3 () {
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
    topP.p1 = top_3.p1;
    topP.p2 = top_3.p2;
    topP.p3 = top_3.p3;
    if (persS1 <= a_persS){
        if ((localStorage.getItem('actP')!=topP.p1)&&(localStorage.getItem('actP')!=topP.p2)&&(localStorage.getItem('actP')!=topP.p3)){
            topP.p1 = localStorage.getItem('actP');
            topP.p2 = top_3.p1;
            topP.p3 = top_3.p2;
            localStorage.setItem('top3', JSON.stringify(topP));
        }
        else{
            if (localStorage.getItem('actP')==topP.p1) {
                topP.p1 = localStorage.getItem('actP');
                topP.p2 = top_3.p2;
                topP.p3 = top_3.p3;
                localStorage.setItem('top3', JSON.stringify(topP));
            }
            if (localStorage.getItem('actP')==topP.p2) {
                topP.p1 = localStorage.getItem('actP');
                topP.p2 = top_3.p1;
                topP.p3 = top_3.p3;
                localStorage.setItem('top3', JSON.stringify(topP));
            }
            if (localStorage.getItem('actP')==topP.p3) {
                topP.p1 = localStorage.getItem('actP');
                topP.p2 = top_3.p1;
                topP.p3 = top_3.p2;
                localStorage.setItem('top3', JSON.stringify(topP));
            }
        }
    }
    else {
        if (persS2 <= a_persS) {   
            if ((localStorage.getItem('actP')!=topP.p2)&&(localStorage.getItem('actP')!=topP.p3)){
                topP.p1 = top_3.p1;
                topP.p2 = localStorage.getItem('actP');
                topP.p3 = top_3.p2;
                localStorage.setItem('top3', JSON.stringify(topP)); 
            }
            else{
                if (localStorage.getItem('actP')==topP.p2) {
                    topP.p1 = top_3.p1;
                    topP.p2 = localStorage.getItem('actP');
                    topP.p3 = top_3.p3;
                    localStorage.setItem('top3', JSON.stringify(topP)); 
                }
                if (localStorage.getItem('actP')==topP.p3) {
                    topP.p1 = top_3.p1;
                    topP.p2 = localStorage.getItem('actP');
                    topP.p3 = top_3.p2;
                    localStorage.setItem('top3', JSON.stringify(topP));
                }
            }
        }
        else {
            if (persS3 <= a_persS) {
                topP.p1 = top_3.p1;
                topP.p2 = top_3.p2;
                topP.p3 = localStorage.getItem('actP');
                localStorage.setItem('top3', JSON.stringify(topP));
            }
        }
    }
    
}