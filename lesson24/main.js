function summVars() {
    let f = parseInt(document.getElementById('firstNum').value),
        s = parseInt(document.getElementById('secondNum').value),
        sum = 0;
    for (let i = f; i <= s; i++) {
        sum += i;
    }
    console.log(sum);
}
function delitels() {
    let f = parseInt(document.getElementById('firstNum2').value),
        s = parseInt(document.getElementById('secondNum2').value),
        sum = parseInt(0);
    if (f > s) {
        for (let i = 0; i < s; i++) {
            if (parseInt(f / i) != 0 && parseInt(s / i) != 0) {
                sum += 1;
            }
        }
        document.getElementById('text2').innerHTML = sum;
    } else {
        for (let i = 0; i < f; i++) {
            if (parseInt(f / i) != 0 && parseInt(s / i) != 0) {
                sum += 1;
            }
        }
        document.getElementById('text2').innerHTML = sum;
    }
}
function allDelitels() {
    let num = parseInt(document.getElementById('someNumber').value);
    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {
            console.log(i);
        }

    }
}
function machNamber() {
    let m = parseInt(document.getElementById('numbersi').value),
        col = 1,
        num = 1;

    for (let i = 0; i < m; i++) {
        if (i > num * 10) {
            num *= 10;
            col++;
        }
        else {
            document.getElementById('text4').innerHTML = col + " chislo";
        }
    }
    document.getElementById('text4').innerHTML = col + " chisla";
    if (col > 4) {
        document.getElementById('text4').innerHTML = col + " chisel";
    }
}
function allNamber() {
    let o = 0,
        p = 0,
        ch = 0,
        nch = 0;
    let col = true;

    do {
        let chislo = parseInt(prompt('Ennter chislo:'));
        if (chislo > 0) {
            p++;
            if (chislo % 2 === 0) {
                ch++;
            } else if (chislo % 2 != 0) {
                nch++;
            }
            col = confirm('complet?');
        } else if (chislo < 0) {
            o++;
            if (chislo % 2 === 0) {
                ch++;
            } else if (chislo % 2 != 0) {
                nch++;
            }
            col = confirm('complet?');
        }
    } while (col);
    document.getElementById('text5').innerHTML = 'Otricatilni: ' + o + '/' + 'polojitelni: ' + p + '/' +
        'chetnie: ' + ch + '/' + 'ne chetnie: ' + nch;
}
function calculator() {
    let f = '';
    let s = '';
    let z = '';
    let b = true;
    let rez = 0;
    do {
        f = parseInt(prompt('enter first chislo'));
        s = parseInt(prompt('enter second chislo'));
        z = prompt('enter */+-:');

        if (z === '*') {
            rez = f * s;
        } else if (z === '/') {
            rez = f / s;
        } else if (z === '+') {
            rez = f + s;
        } else if (z === '-') {
            rez = f - s;
        } else {
            alert('ne to')
        }
        alert(rez);
        b = confirm("again?");
    } while (b === true);
}
function sdvig() {
    let chis = document.getElementById('chislo').value,
        sd = document.getElementById('sdvig').value;
    let r = chis.slice(0, sd),
        rv = chis.slice(sd, chis.langth);

    console.log(rv + r);
}
function nextDay() {
    let day = parseInt(document.getElementById('day').value),
        b = true;
    do {
        switch (day) {
            case 1:
                alert('Monday');
                break;
            case 2:
                alert('Tuesday');
                break;
            case 3:
                alert('Wednesday');
                break;
            case 4:
                alert('Thursday');
                break;
            case 5:
                alert('Friday');
                break;
            case 6:
                alert('Saturday');
                break;
            case 7:
                alert('Sunday');
                break;
            default:
                alert('net takogo dnay');
                break;

        }

        b = confirm('Naxt day?');
        if (b === true) {
            day++;
            if (day > 6) {
                day = 1;
            }
        }
    } while (b);
}
function tableMnojenya() {
    let tables = ''
    tables += "<table border= \" 1 \" cellspacing= \" 0 \" cellpadding= \"2 \"align= \"center \" >";
    for (var i = 1; i <= 10; i++) {
        tables += "<tr>";
        for (var j = 2; j < 10; j++) {
            tables += "<td>" + j + "&times;" + i + "=" + (i * j) + "</td>";
        }
        tables += "</tr>";
    }
    document.getElementById("text9").innerHTML = tables;
}
document.getElementById('task10').innerHTML = 'Ваше число >50,<50 или = 50 ';
function game() {
    let conf = true;
    let from = 0;
    let to = 100;
    let N = 50;
    do {
        if (confirm("Is your number > " + N + "?")) {
            from = N;
            N = Math.floor(((to - from) / 2) + from);
            conf = confirm("Your number is: " + N + "?");
        } else if (confirm("Is your number < " + N + "?")) {
            to = N;
            N = Math.floor(((to - from) / 2) + from);
            conf = confirm("Your number is: " + N + "?");
        } else {
            confirm("Is your number = " + N + "?");
            conf = confirm("Your number is: " + N + "?");
        }
    } while (conf === false);
    alert('Congrats! Your number is ' + N);
}