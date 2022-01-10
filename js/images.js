var flag = 0;
var score = 0;
var count = 0;
var pos;
var let;
var w = 1;
var img1 = document.createElement('img');
var img2 = document.createElement('img');
var img3 = document.createElement('img');
var img4 = document.createElement('img');
var img5 = document.createElement('img');
var img6 = document.createElement('img');
var img7 = document.createElement('img');
var img8 = document.createElement('img');

const images = {
    "бабочка":{
        bool: 0,
        int:0
    },
    "барабан":{
        bool: 0,
        int:0
    },
    "ведро":{
        bool: 0,
        int:0
    },
    "велосипед":{
        bool: 0,
        int:0
    },
    "гантеля":{
        bool: 0,
        int:0
    },
    "карандаши":{
        bool: 0,
        int:0
    },
    "карусель":{
        bool: 0,
        int:0
    },
    "колпак":{
        bool: 0,
        int:0
    },
    "коляска":{
        bool: 0,
        int:0
    },
    "конструктор":{
        bool: 0,
        int:0
    },
    "машина":{
        bool: 0,
        int:0
    },
    "мороженное":{
        bool: 0,
        int:0
    },
    "мяч":{
        bool: 0,
        int:0
    },
    "очки":{
        bool: 0,
        int:0
    },
    "памперс":{
        bool: 0,
        int:0
    },
    "платье":{
        bool: 0,
        int:0
    },
    "погремушка":{
        bool: 0,
        int:0
    },
    "самолёт":{
        bool: 0,
        int:0
    },
    "сапог":{
        bool: 0,
        int:0
    },
    "счёты":{
        bool: 0,
        int:0
    },
    "футболка":{
        bool: 0,
        int:0
    },
    "шапка":{
        bool: 0,
        int:0
    },
    "шарики":{
        bool: 0,
        int:0
    },
    "шоколад":{
        bool: 0,
        int:0
    },
    "шут":{
        bool: 0,
        int:0
    },
    "яблоко":{
        bool: 0,
        int:0
    }
}