function maxMin() {
    let f = parseInt(document.getElementById('firstNumber').value),
        s = parseInt(document.getElementById('secondNumber').value)
    rez = newMaxMin(f, s);
    document.getElementById("text1").innerHTML = rez;

}
function outputSecond(times) {
    let outp = times.split(':');
    let h = (typeof (outp[0]) != "undefined") ? parseInt(outp[0]) : 0,
        m = (typeof (outp[1]) != "undefined") ? parseInt(outp[1]) : 0,
        s = (typeof (outp[2]) != "undefined") ? parseInt(outp[2]) : 0,
        rez = 0;
    rez = h * 3600 + m * 60 + s;
    return rez;
}
function newMaxMin(fr, sc) {
    if (fr < sc) {
        return -1;
    } else if (fr > sc) {
        return 1;
    } else if (fr = sc) {
        return 0;
    }
}
function factoriali() {
    let factorials = parseInt(document.getElementById('number').value);
    rez = foundFactorial(factorials);
    document.getElementById('text2').innerText = rez;
}
function foundFactorial(n) {
    return (n != 1) ? n * foundFactorial(n - 1) : 1;
}
function oneLine() {
    let f = prompt('Enter chislo');
    let s = prompt('Enter chislo');
    let t = prompt('Enter chislo');
    let rez = inOnLine(f, s, t);
    document.getElementById('text3').innerText = rez;
}
function inOnLine(f2, s2, t2) {
    return f2 + s2 + t2;
}
function Kvadrat() {
    let f = prompt('Enter chislo');
    let s = prompt('Enter chislo');
    console.log(typeof f);
    let rez = sumKvadrat(f, s);
    document.getElementById('text4').innerText = 'Perimetr: ' + rez;
}
function sumKvadrat(f1, s1) {
    if (f1 != '0' && s1 != 0) {
        return f1 * s1;
    } else {
        if (f1 === '0') {
            return s1 * s1;
        } else if (s1 === '0') {
            return f1 * f1;
        }
    }
}
function soverchenoe() {
    let s = parseInt(document.getElementById('someNumber').value),
        rez = orSoverchenoe(s);

    document.getElementById('text5').innerText = rez;
}
function orSoverchenoe(ns) {
    let sum = ns - 1;
    let temp = ns;
    for (let i = 2; ns > 1;) {
        if (!(ns % i)) {
            sum -= i;
            ns = ns / i;
        } else i++;
    }
    if (!sum)
        return "Число: " + temp + " является совершенным";
    else
        return "Число: " + temp + " не является совершенным";
}
function diapazon() {
    let f = document.getElementById('forDiapozon1').value,
        s = document.getElementById('forDiapozon2').value,
        rez = outputDiapazon(f, s);
    document.getElementById('text6').innerText = rez;
}
function outputDiapazon(f6, s6) {
    let rez = '',
        all;
    for (let i = f6; i <= s6; i++) {
        all = orSoverchenoe(i);
        if (all === "Число: " + i + " является совершенным") {
            rez += " " + all + ' ';
        }
    }
    return rez;
}
function timeNow() {
    let time = document.getElementById('time').value,
        rez = outputTimeNow(time);
    document.getElementById('text7').innerText = rez;
}
function outputTimeNow(time2) {
    let outp = time2.split(':');
    let h = outp[0],
        m = outp[1],
        s = outp[2];
    if (h === '') {
        h = '00';
    }
    if (m === undefined) {
        m = '00';
    }
    if (s === undefined) {
        s = '00';
    }
    let rez = h + ':' + m + ':' + s;
    return rez;
}
function gerSecond() {
    let time = document.getElementById('hours').value,
        rez = outputSecond(time);
    document.getElementById('text8').innerText = rez;
}

function getHours() {
    let time = document.getElementById('second').value,
        rez = outputHours(time);
    document.getElementById('text9').innerText = rez;
}
function outputHours(time3) {
    let second = time3,
        h = Math.floor(second / 60 / 60),
        m = Math.floor(second / 60) - (h * 60),
        s = second % 60;
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return h + ':' + m + ':' + s;
}
function Raznica() {
    let d1 = document.getElementById('date1').value,
        d2 = document.getElementById('date2').value,
        d1s = outputSecond(d1),
        d2s = outputSecond(d2),
        r12 = d1s - d2s,
        r = outputHours(r12);

    document.getElementById('text10').innerText = r;
}
function outputSecond(times) {
    let outp = times.split(':');
    let h = parseInt(outp[0]),
        m = parseInt(outp[1]),
        s = parseInt(outp[2]),
        rez = 0;
    rez = h * 3600 + m * 60 + s;
    return rez;
}
