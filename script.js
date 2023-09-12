let gameRun = false;
let hepler;
let minValue = parseInt(document.getElementById('minvalue').value);
    if(isNaN(minValue) || minValue == undefined){
    minValue = 0;
    }

let maxValue = parseInt(document.getElementById('maxvalue').value);
    if(isNaN(maxValue) || minValue == undefined){
    maxValue = 100;
    }

    if(minValue > maxValue){
        hepler = minValue;
        minValue = maxValue;
        maxValue = hepler;
    }

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let answerPhrase;
let answerText = '';
let answerNumberinfo = answerNumber;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById('btnRetry').addEventListener('click', function () {
    //location.reload();
    minValue = parseInt(document.getElementById('minvalue').value);
    if(isNaN(minValue) || minValue == undefined){
        //alert('Введёное число совсем не число! Мне придётся присвоить 0');
        minValue = 0;
    }

    //let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    maxValue = parseInt(document.getElementById('maxvalue').value);
    if(isNaN(maxValue) || minValue == undefined){
        //alert('Введёное число совсем не число! Мне придётся присвоить 100');
        maxValue = 100;
    }

    if(minValue > maxValue){
        hepler = minValue;
        minValue = maxValue;
        maxValue = hepler;
    }

    minValue >= 998 ? minValue = 998 : minValue <= -999 ? minValue = -999 : minValue = minValue;
    maxValue >= 999 ? maxValue = 999 : maxValue <= -998 ? maxValue = -998 : maxValue = maxValue;
    
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    gameRun = true;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerNumberinfo = answerNumber;
    answerText = '';

        if(answerNumberinfo < 0){
        answerText = 'Минус ';
        answerNumberinfo = -answerNumberinfo;
                }

        switch(Math.trunc(answerNumberinfo/100)){
        case 1:
            answerText += 'сто';
            answerNumberinfo -= 100;
            break;
        case 2:
            answerText += 'двести';
            answerNumberinfo -= 200;
            break;
        case 3:
            answerText +='триста';
            answerNumberinfo -= 300;
            break;
        case 4:
            answerText += 'четыреста';
            answerNumberinfo -= 400;
            break;
        case 5:
            answerText += 'пятьсот';
            answerNumberinfo -= 500;
            break;
        case 6:
            answerText += 'шестьсот';
            answerNumberinfo -= 600;
            break;
        case 7:
            answerText += 'семьсот';
            answerNumberinfo -= 700;
            break;
        case 8:
            answerText += 'восемьсот';
            answerNumberinfo -= 800;
            break;
        case 9:
            answerText += 'девятьсот';
            answerNumberinfo -= 900;
            break;
                }
        switch(Math.trunc(answerNumberinfo/10)){
                case 1:
                    if(answerNumberinfo <= 19 && answerNumberinfo >= 10){
                        switch(answerNumberinfo % 10){
                            case 1:
                                answerText += ' одинадцать';
                                answerNumberinfo -= 11;
                            break;
                            case 2:
                                answerText += ' двенадцать';
                                answerNumberinfo -= 12;
                            break;
                            case 3:
                                answerText += ' тринадцать';
                                answerNumberinfo -= 13;
                            break;
                            case 4:
                                answerText += ' четырнадцать';
                                answerNumberinfo -= 14;
                            break;
                            case 5:
                                answerText += ' пятнадцать';
                                answerNumberinfo -= 15;
                            break;
                            case 6:
                                answerText += ' шестнадцать';
                                answerNumberinfo -= 16;
                            break;
                            case 7:
                                answerText += ' семнадцать';
                                answerNumberinfo -= 17;
                            break;
                            case 8:
                                answerText += ' восемнадцать';
                                answerNumberinfo -= 18;
                            break;
                            case 9:
                                answerText += ' девятнадцать';
                                answerNumberinfo -= 19;
                            break;
                            default:
                                answerText += ' десять';
                                answerNumberinfo -= 10; 
                            }
                        }else{
                            switch(answerNumberinfo % 10){
                            case 1:
                                answerText += ' один';
                            break;
                            case 2:
                                answerText += ' два';
                            break;
                            case 3:
                                answerText += ' три';
                            break;
                            case 4:
                                answerText += ' четыре';
                            break;
                            case 5:
                                answerText += ' пять';
                            break;
                            case 6:
                                answerText += ' шесть';
                            break;
                            case 7:
                                answerText += ' семь';
                            break;
                            case 8:
                                answerText += ' восемь';
                            break;
                            default:
                                answerText += ' девять';
                        }
                        }
                    break;
                case 2:
                    answerText += ' двадцать';
                    answerNumberinfo -= 20;
                    break;
                case 3:
                    answerText +=' тридцать';
                    answerNumberinfo -= 30;
                    break;
                case 4:
                    answerText += ' сорок';
                    answerNumberinfo -= 40;
                    break;
                case 5:
                    answerText += ' пятьдесят';
                    answerNumberinfo -= 50;
                    break;
                case 6:
                    answerText += ' шестьдесят';
                    answerNumberinfo -= 60;
                    break;
                case 7:
                    answerText += ' семьдесят';
                    answerNumberinfo -= 70;
                    break;
                case 8:
                    answerText += ' восемьдесят';
                    answerNumberinfo -= 80;
                    break;
                case 9:
                    answerText += ' девяносто';
                    answerNumberinfo -= 90;
                    break;
                }
        switch(answerNumberinfo % 10){
                        case 1:
                            answerText += ' один';
                            break;
                        case 2:
                            answerText += ' два';
                            break;
                        case 3:
                            answerText += ' три';
                            break;
                        case 4:
                            answerText += ' четыре';
                            break;
                        case 5:
                            answerText += ' пять';
                            break;
                        case 6:
                            answerText += ' шесть';
                            break;
                        case 7:
                            answerText += ' семь';
                            break;
                        case 8:
                            answerText += ' восемь';
                            break;
                        case 9:
                            answerText += ' девять';
                            break;
                        default:
                            if(answerNumber == 0){
                                answerText = '0';
                            }
                }

    answerText = answerText.trim();
    const splitted = answerText.split("");
    const first = splitted[0].toUpperCase();
    const rest = [...splitted];
    rest.splice(0, 1);
    answerText = [first, ...rest].join("");

        if(answerText.length > 20){
                    answerText = answerNumber;
                } 
const phraseRandom = Math.round( Math.random() * 4);

        switch(phraseRandom) {
                    case 1:
                        answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                    case 2:
                        answerField.innerText = `Может быть это ${answerText }?`;
                    break;
                    case 3:
                        answerField.innerText = `Возможно это ${answerText }?`;
                    break;
                    case 4:
                        answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                    default:
                        answerField.innerText = `Кажется это ${answerText }?`;
                }  
        })

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber == maxValue){
            const phraseRandom = Math.round( Math.random() * 4);
                switch(phraseRandom) {
                    case 1:
                        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                    case 2:
                        answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
                    break;
                    case 3:
                        answerPhrase = `Опять обманут...\n\u{1F624}`;
                    break;
                    case 4:
                        answerPhrase = `Я старался, ты оказался умнее, чем я думал!\n\u{1F635}`;
                    break;
                    default:
                        answerPhrase =`Я опять не справился!\n\u{1F631}`
                }
           answerField.innerText = answerPhrase;
          gameRun = false;
    } else {
        minValue = answerNumber  + 1;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        answerNumberinfo = answerNumber;
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerText = '';
            if(answerNumberinfo < 0){
                answerText = 'Минус ';
                answerNumberinfo = -answerNumberinfo;
                        }

            switch(Math.trunc(answerNumberinfo/100)){
                case 1:
                    answerText += 'сто';
                    answerNumberinfo -= 100;
                    break;
                case 2:
                    answerText += 'двести';
                    answerNumberinfo -= 200;
                    break;
                case 3:
                    answerText +='триста';
                    answerNumberinfo -= 300;
                    break;
                case 4:
                    answerText += 'четыреста';
                    answerNumberinfo -= 400;
                    break;
                case 5:
                    answerText += 'пятьсот';
                    answerNumberinfo -= 500;
                    break;
                case 6:
                    answerText += 'шестьсот';
                    answerNumberinfo -= 600;
                    break;
                case 7:
                    answerText += 'семьсот';
                    answerNumberinfo -= 700;
                    break;
                case 8:
                    answerText += 'восемьсот';
                    answerNumberinfo -= 800;
                    break;
                case 9:
                    answerText += 'девятьсот';
                    answerNumberinfo -= 900;
                    break;
                        }
            switch(Math.trunc(answerNumberinfo/10)){
                        case 1:
                            if(answerNumberinfo <= 19 && answerNumberinfo >= 10){
                                switch(answerNumberinfo % 10){
                                    case 1:
                                        answerText += ' одинадцать';
                                        answerNumberinfo -= 11;
                                    break;
                                    case 2:
                                        answerText += ' двенадцать';
                                        answerNumberinfo -= 12;
                                    break;
                                    case 3:
                                        answerText += ' тринадцать';
                                        answerNumberinfo -= 13;
                                    break;
                                    case 4:
                                        answerText += ' четырнадцать';
                                        answerNumberinfo -= 14;
                                    break;
                                    case 5:
                                        answerText += ' пятнадцать';
                                        answerNumberinfo -= 15;
                                    break;
                                    case 6:
                                        answerText += ' шестнадцать';
                                        answerNumberinfo -= 16;
                                    break;
                                    case 7:
                                        answerText += ' семнадцать';
                                        answerNumberinfo -= 17;
                                    break;
                                    case 8:
                                        answerText += ' восемнадцать';
                                        answerNumberinfo -= 18;
                                    break;
                                    case 9:
                                        answerText += ' девятнадцать';
                                        answerNumberinfo -= 19;
                                    break;
                                    default:
                                        answerText += ' десять';
                                        answerNumberinfo -= 10; 
                                    }
                                }else{
                                    switch(answerNumberinfo % 10){
                                    case 1:
                                        answerText += ' один';
                                    break;
                                    case 2:
                                        answerText += ' два';
                                    break;
                                    case 3:
                                        answerText += ' три';
                                    break;
                                    case 4:
                                        answerText += ' четыре';
                                    break;
                                    case 5:
                                        answerText += ' пять';
                                    break;
                                    case 6:
                                        answerText += ' шесть';
                                    break;
                                    case 7:
                                        answerText += ' семь';
                                    break;
                                    case 8:
                                        answerText += ' восемь';
                                    break;
                                    default:
                                        answerText += ' девять';
                                }
                                }
                            break;
                        case 2:
                            answerText += ' двадцать';
                            answerNumberinfo -= 20;
                            break;
                        case 3:
                            answerText +=' тридцать';
                            answerNumberinfo -= 30;
                            break;
                        case 4:
                            answerText += ' сорок';
                            answerNumberinfo -= 40;
                            break;
                        case 5:
                            answerText += ' пятьдесят';
                            answerNumberinfo -= 50;
                            break;
                        case 6:
                            answerText += ' шестьдесят';
                            answerNumberinfo -= 60;
                            break;
                        case 7:
                            answerText += ' семьдесят';
                            answerNumberinfo -= 70;
                            break;
                        case 8:
                            answerText += ' восемьдесят';
                            answerNumberinfo -= 80;
                            break;
                        case 9:
                            answerText += ' девяносто';
                            answerNumberinfo -= 90;
                            break;
                        }
            switch(answerNumberinfo % 10){
                                case 1:
                                    answerText += ' один';
                                    break;
                                case 2:
                                    answerText += ' два';
                                    break;
                                case 3:
                                    answerText += ' три';
                                    break;
                                case 4:
                                    answerText += ' четыре';
                                    break;
                                case 5:
                                    answerText += ' пять';
                                    break;
                                case 6:
                                    answerText += ' шесть';
                                    break;
                                case 7:
                                    answerText += ' семь';
                                    break;
                                case 8:
                                    answerText += ' восемь';
                                    break;
                                case 9:
                                    answerText += ' девять';
                                    break;
                                default:
                                    if(answerNumber == 0){
                                        answerText = '0';
                                    }
                        }   

    answerText = answerText.trim();
    const splitted = answerText.split("");
    const first = splitted[0].toUpperCase();
    const rest = [...splitted];
        rest.splice(0, 1);
    answerText = [first, ...rest].join("");   

    const phraseRandom = Math.round( Math.random() * 4);
            if(answerText.length > 20){
                answerText = answerNumber;
                        } 
            switch(phraseRandom) {
                            case 1:
                                answerField.innerText = `Вы загадали число ${answerText }?`;
                            break;
                            case 2:
                                answerField.innerText = `Может быть это ${answerText }?`;
                            break;
                            case 3:
                                answerField.innerText = `Возможно это ${answerText }?`;
                            break;
                            case 4:
                                answerField.innerText = `Вы загадали число ${answerText }?`;
                            break;
                            default:
                                answerField.innerText = `Кажется это ${answerText }?`;
                        }          
                    
    }
}
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber === minValue){
            const phraseRandom = Math.round( Math.random() * 4);
            switch(phraseRandom) {
                case 1:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                break;
                case 2:
                    answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
                break;
                case 3:
                    answerPhrase = `Опять обманут...\n\u{1F624}`;
                break;
                case 4:
                    answerPhrase = `Я старался, ты оказался умнее, чем я думал!\n\u{1F635}`;
                break;
                default:
                    answerPhrase =`Я опять не справился!\n\u{1F631}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
        maxValue = answerNumber - 1;

        answerNumber  = Math.floor((maxValue + minValue) / 2);
        answerNumberinfo = answerNumber;
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerText = '';

            if(answerNumberinfo < 0){
                answerText = 'Минус ';
                answerNumberinfo = -answerNumberinfo;
                        }

            switch(Math.trunc(answerNumberinfo/100)){
                case 1:
                    answerText += 'сто';
                    answerNumberinfo -= 100;
                    break;
                case 2:
                    answerText += 'двести';
                    answerNumberinfo -= 200;
                    break;
                case 3:
                    answerText +='триста';
                    answerNumberinfo -= 300;
                    break;
                case 4:
                    answerText += 'четыреста';
                    answerNumberinfo -= 400;
                    break;
                case 5:
                    answerText += 'пятьсот';
                    answerNumberinfo -= 500;
                    break;
                case 6:
                    answerText += 'шестьсот';
                    answerNumberinfo -= 600;
                    break;
                case 7:
                    answerText += 'семьсот';
                    answerNumberinfo -= 700;
                    break;
                case 8:
                    answerText += 'восемьсот';
                    answerNumberinfo -= 800;
                    break;
                case 9:
                    answerText += 'девятьсот';
                    answerNumberinfo -= 900;
                    break;
                        }
            switch(Math.trunc(answerNumberinfo/10)){
                        case 1:
                            if(answerNumberinfo <= 19 && answerNumberinfo >= 10){
                                switch(answerNumberinfo % 10){
                                    case 1:
                                        answerText += ' одинадцать';
                                        answerNumberinfo -= 11;
                                    break;
                                    case 2:
                                        answerText += ' двенадцать';
                                        answerNumberinfo -= 12;
                                    break;
                                    case 3:
                                        answerText += ' тринадцать';
                                        answerNumberinfo -= 13;
                                    break;
                                    case 4:
                                        answerText += ' четырнадцать';
                                        answerNumberinfo -= 14;
                                    break;
                                    case 5:
                                        answerText += ' пятнадцать';
                                        answerNumberinfo -= 15;
                                    break;
                                    case 6:
                                        answerText += ' шестнадцать';
                                        answerNumberinfo -= 16;
                                    break;
                                    case 7:
                                        answerText += ' семнадцать';
                                        answerNumberinfo -= 17;
                                    break;
                                    case 8:
                                        answerText += ' восемнадцать';
                                        answerNumberinfo -= 18;
                                    break;
                                    case 9:
                                        answerText += ' девятнадцать';
                                        answerNumberinfo -= 19;
                                    break;
                                    default:
                                        answerText += ' десять';
                                        answerNumberinfo -= 10; 
                                    }
                                }else{
                                    switch(answerNumberinfo % 10){
                                    case 1:
                                        answerText += ' один';
                                    break;
                                    case 2:
                                        answerText += ' два';
                                    break;
                                    case 3:
                                        answerText += ' три';
                                    break;
                                    case 4:
                                        answerText += ' четыре';
                                    break;
                                    case 5:
                                        answerText += ' пять';
                                    break;
                                    case 6:
                                        answerText += ' шесть';
                                    break;
                                    case 7:
                                        answerText += ' семь';
                                    break;
                                    case 8:
                                        answerText += ' восемь';
                                    break;
                                    default:
                                        answerText += ' девять';
                                }
                                }
                            break;
                        case 2:
                            answerText += ' двадцать';
                            answerNumberinfo -= 20;
                            break;
                        case 3:
                            answerText +=' тридцать';
                            answerNumberinfo -= 30;
                            break;
                        case 4:
                            answerText += ' сорок';
                            answerNumberinfo -= 40;
                            break;
                        case 5:
                            answerText += ' пятьдесят';
                            answerNumberinfo -= 50;
                            break;
                        case 6:
                            answerText += ' шестьдесят';
                            answerNumberinfo -= 60;
                            break;
                        case 7:
                            answerText += ' семьдесят';
                            answerNumberinfo -= 70;
                            break;
                        case 8:
                            answerText += ' восемьдесят';
                            answerNumberinfo -= 80;
                            break;
                        case 9:
                            answerText += ' девяносто';
                            answerNumberinfo -= 90;
                            break;
                        }
            switch(answerNumberinfo % 10){
                                case 1:
                                    answerText += ' один';
                                    break;
                                case 2:
                                    answerText += ' два';
                                    break;
                                case 3:
                                    answerText += ' три';
                                    break;
                                case 4:
                                    answerText += ' четыре';
                                    break;
                                case 5:
                                    answerText += ' пять';
                                    break;
                                case 6:
                                    answerText += ' шесть';
                                    break;
                                case 7:
                                    answerText += ' семь';
                                    break;
                                case 8:
                                    answerText += ' восемь';
                                    break;
                                case 9:
                                    answerText += ' девять';
                                    break;
                                default:
                                    if(answerNumber == 0){
                                        answerText = '0';
                                    }
                        } 

        answerText = answerText.trim();
        const splitted = answerText.split("");
        const first = splitted[0].toUpperCase();
        const rest = [...splitted];
            rest.splice(0, 1);
        answerText = [first, ...rest].join("");

            if(answerText.length > 20){
                answerText = answerNumber;
                        } 
            const phraseRandom = Math.round( Math.random() * 4);
            switch(phraseRandom) {
                            case 1:
                                answerField.innerText = `Вы загадали число ${answerText }?`;
                            break;
                            case 2:
                                answerField.innerText = `Может быть это ${answerText }?`;
                            break;
                            case 3:
                                answerField.innerText = `Возможно это ${answerText }?`;
                            break;
                            case 4:
                                answerField.innerText = `Вы загадали число ${answerText }?`;
                            break;
                            default:
                                answerField.innerText = `Кажется это ${answerText }?`;
                        }     
               }   
            } 
        })

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 4);
        switch(phraseRandom) {
            case 1:
                answerField.innerText = `Так держать!\n\u{1F601}`;
            break;
            case 2:
                answerField.innerText =  `Гений!\n\u{1F631}`;
            break;
            case 3:
                answerField.innerText =  `Это было просто\n\u{1F929}`;
            break;
            case 4:
                answerField.innerText =  `Я старался, и не зря!\n\u{1F911}`;
            break;
            default:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
                            }
        
        gameRun = false;
    }
})


document.getElementById('btnStart').addEventListener('click', function () {

minValue = parseInt(document.getElementById('minvalue').value);
    if(isNaN(minValue) || minValue == undefined){
    minValue = 0;
    }

maxValue = parseInt(document.getElementById('maxvalue').value);
    if(isNaN(maxValue) || minValue == undefined){
    maxValue = 100;
    }

    if(minValue > maxValue){
        hepler = minValue;
        minValue = maxValue;
        maxValue = hepler;
    }

    minValue >= 998 ? minValue = 998 : minValue <= -999 ? minValue = -999 : minValue = minValue;
    maxValue >= 999 ? maxValue = 999 : maxValue <= -998 ? maxValue = -998 : maxValue = maxValue;
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    gameRun = true;

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerNumberinfo = answerNumber;
    answerText = '';

    if(answerNumberinfo < 0){
        answerText = 'Минус ';
        answerNumberinfo = -answerNumberinfo;
      }

        switch(Math.trunc(answerNumberinfo/100)){
        case 1:
            answerText += 'сто';
            answerNumberinfo -= 100;
            break;
        case 2:
            answerText += 'двести';
            answerNumberinfo -= 200;
            break;
        case 3:
            answerText +='триста';
            answerNumberinfo -= 300;
            break;
        case 4:
            answerText += 'четыреста';
            answerNumberinfo -= 400;
            break;
        case 5:
            answerText += 'пятьсот';
            answerNumberinfo -= 500;
            break;
        case 6:
            answerText += 'шестьсот';
            answerNumberinfo -= 600;
            break;
        case 7:
            answerText += 'семьсот';
            answerNumberinfo -= 700;
            break;
        case 8:
            answerText += 'восемьсот';
            answerNumberinfo -= 800;
            break;
        case 9:
            answerText += 'девятьсот';
            answerNumberinfo -= 900;
            break;
                }
        switch(Math.trunc(answerNumberinfo/10)){
                case 1:
                    if(answerNumberinfo <= 19 && answerNumberinfo >= 10){
                        switch(answerNumberinfo % 10){
                            case 1:
                                answerText += ' одинадцать';
                                answerNumberinfo -= 11;
                            break;
                            case 2:
                                answerText += ' двенадцать';
                                answerNumberinfo -= 12;
                            break;
                            case 3:
                                answerText += ' тринадцать';
                                answerNumberinfo -= 13;
                            break;
                            case 4:
                                answerText += ' четырнадцать';
                                answerNumberinfo -= 14;
                            break;
                            case 5:
                                answerText += ' пятнадцать';
                                answerNumberinfo -= 15;
                            break;
                            case 6:
                                answerText += ' шестнадцать';
                                answerNumberinfo -= 16;
                            break;
                            case 7:
                                answerText += ' семнадцать';
                                answerNumberinfo -= 17;
                            break;
                            case 8:
                                answerText += ' восемнадцать';
                                answerNumberinfo -= 18;
                            break;
                            case 9:
                                answerText += ' девятнадцать';
                                answerNumberinfo -= 19;
                            break;
                            default:
                                answerText += ' десять';
                                answerNumberinfo -= 10; 
                            }
                        }else{
                            switch(answerNumberinfo % 10){
                            case 1:
                                answerText += ' один';
                            break;
                            case 2:
                                answerText += ' два';
                            break;
                            case 3:
                                answerText += ' три';
                            break;
                            case 4:
                                answerText += ' четыре';
                            break;
                            case 5:
                                answerText += ' пять';
                            break;
                            case 6:
                                answerText += ' шесть';
                            break;
                            case 7:
                                answerText += ' семь';
                            break;
                            case 8:
                                answerText += ' восемь';
                            break;
                            default:
                                answerText += ' девять';
                        }
                        }
                    break;
                case 2:
                    answerText += ' двадцать';
                    answerNumberinfo -= 20;
                    break;
                case 3:
                    answerText +=' тридцать';
                    answerNumberinfo -= 30;
                    break;
                case 4:
                    answerText += ' сорок';
                    answerNumberinfo -= 40;
                    break;
                case 5:
                    answerText += ' пятьдесят';
                    answerNumberinfo -= 50;
                    break;
                case 6:
                    answerText += ' шестьдесят';
                    answerNumberinfo -= 60;
                    break;
                case 7:
                    answerText += ' семьдесят';
                    answerNumberinfo -= 70;
                    break;
                case 8:
                    answerText += ' восемьдесят';
                    answerNumberinfo -= 80;
                    break;
                case 9:
                    answerText += ' девяносто';
                    answerNumberinfo -= 90;
                    break;
                }
        switch(answerNumberinfo % 10){
                        case 1:
                            answerText += ' один';
                            break;
                        case 2:
                            answerText += ' два';
                            break;
                        case 3:
                            answerText += ' три';
                            break;
                        case 4:
                            answerText += ' четыре';
                            break;
                        case 5:
                            answerText += ' пять';
                            break;
                        case 6:
                            answerText += ' шесть';
                            break;
                        case 7:
                            answerText += ' семь';
                            break;
                        case 8:
                            answerText += ' восемь';
                            break;
                        case 9:
                            answerText += ' девять';
                            break;
                        default:
                            if(answerNumber == 0){
                                answerText = '0';
                            }
                }   

answerText = answerText.trim();
const splitted = answerText.split("");
const first = splitted[0].toUpperCase();
const rest = [...splitted];
    rest.splice(0, 1);
answerText = [first, ...rest].join("");



        if(answerText.length > 20){
                    answerText = answerNumber;
                } 
const phraseRandom = Math.round( Math.random() * 4);
        switch(phraseRandom) {
                    case 1:
                        answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                    case 2:
                        answerField.innerText = `Может быть это ${answerText }?`;
                    break;
                    case 3:
                        answerField.innerText = `Возможно это ${answerText }?`;
                    break;
                    case 4:
                        answerField.innerText = `Вы загадали число ${answerText }?`;
                    break;
                    default:
                        answerField.innerText = `Кажется это ${answerText }?`;
                } 
        })

let coll = document.getElementsByClassName('collapsible');
for(let i = 0; i < coll.length; i++){
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
let content = this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    }else {
      content.style.maxHeight = content.scrollHeight + 'px';
        } 
  })
}

let collTitle = document.getElementsByClassName('collapsible_title');
for(let i = 0; i < collTitle.length; i++){
    collTitle[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    }else {
      content.style.maxHeight = content.scrollHeight + 'px';
        } 
  })
}