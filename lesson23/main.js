function yourStatus() {
    let a = Number(document.getElementById('age').value);

    if (a == 0) {
        alert('error')
    } else {
        if (a <= 2)
            document.getElementById('text1').innerHTML = 'Вы ребёнок';
        else if (a > 2 && a <= 18) {
            document.getElementById('text1').innerHTML = 'Вы подросток ';
        }
        else if (a = 18 && a <= 60) {
            document.getElementById('text1').innerHTML = 'Вы взрослый ';
        }
        else {
            document.getElementById('text1').innerHTML = 'Вы пенсионер ';
        }
    }
}
function someNomber() {
    let arr = [')', '!', '@', '#', '$', '%', '^', '&', '*', '*', '('],
        num = Number(document.getElementById('number2').value);
    if (num == 0) {
        alert('error');
    } else {
        document.getElementById('text2').innerHTML = arr[num];
    }
}
function someChislo() {
    let chislo = document.getElementById('number3').value;

    if (chislo > 99 && chislo < 1000) {
        let s = parseInt((chislo / 100) % 10);
        let d = parseInt((chislo / 10) % 10);
        let ch = parseInt(chislo % 10);
        console.log(ch);
        if (s === d || s === ch || d === ch) {
            document.getElementById('text3').innerHTML = "Est povtor";
        } else {
            document.getElementById('text3').innerHTML = "Net povtora";
        }
    } else {
        alert('error')
    }
}
function someYear() {
    let year = document.getElementById('year4').value;
    if (year == '' || year < 999) {
        alert('error')
    } else {
        if (year % 400 == 0 || year % 4 == 0) {
            document.getElementById('text4').innerHTML = "Year visocosniy";
        } else {
            document.getElementById('text4').innerHTML = "Year ne visocosniy";
        }
    }
}
function someNumber5() {

    let nam5 = document.getElementById('number5').value;

    if (nam5 > 9999 && nam5 < 100000) {
        let dt = parseInt((nam5 / 10000) % 10);
        let t = parseInt((nam5 / 1000) % 10);
        let s = parseInt((nam5 / 100) % 10);
        let d = parseInt((nam5 / 10) % 10);
        let ch = parseInt(nam5 % 10);

        if (dt === ch && t === d) {
            document.getElementById('text5').innerHTML = 'Polindrom';
        } else {
            document.getElementById('text5').innerHTML = 'Ne polindrom';
        }
    } else {
        alert('error')
    }
}
function convertor() {
    let money = document.getElementById('money').value,
        option = document.getElementById('mySelect').selectedIndex;
    const eur = 0.93,
        uan = 7.03,
        azn = 1.7;
    switch (option) {
        case 0:
            document.getElementById('text6').innerHTML = money * eur + ' EUR';
            break;
        case 1:
            document.getElementById('text6').innerHTML = money * uan + ' EUR';
            break;
        case 2:
            document.getElementById('text6').innerHTML = money * azn + ' EUR';
            break;
    }
}
function shop() {
    let summ = document.getElementById('prise').value;
    if (summ < 200) {
        document.getElementById("text7").innerHTML = "prise:" + summ + ' UAN';
    } else if (summ => 200 && summ < 300) {
        document.getElementById("text7").innerHTML = "prise:" + (summ - ((summ / 100) * 2)) + ' UAN';
    } else if (summ => 300 && summ < 500) {
        document.getElementById("text7").innerHTML = "prise:" + (summ - ((summ / 100) * 5)) + ' UAN';
    } else if (summ => 500) {
        document.getElementById("text7").innerHTML = "prise:" + (summ - ((summ / 100) * 7)) + ' UAN';
    }
}
function proverkaKola() {
    let kolo = document.getElementById('kolo').value;
    let perimetr = document.getElementById('kvadrat').value;
    if (kolo != '' && perimetr != '') {
        let kolo1 = kolo * 2;
        let perimetr1 = perimetr / 4;
        if (kolo1 <= perimetr1) {
            document.getElementById('text8').innerHTML = "Vlazit";
        } else {
            document.getElementById('text8').innerHTML = "Ne vlazit";
        }
    }
}
function test9() {
    const ra1_2 = document.getElementById('contactChoice2'),
        ra2_2 = document.getElementById('contactChoice2_2'),
        ra3_1 = document.getElementById('contactChoice3_1');
    let rez = 0;

    if (ra1_2.checked) {
        rez += parseInt(ra1_2.value);
    }
    if (ra2_2.checked) {
        rez += parseInt(ra2_2.value);
    }
    if (ra3_1.checked) {
        rez += parseInt(ra3_1.value);
    }
    document.getElementById('text9').innerText = rez + " b";
}
function nextDate() {
    let nod = document.getElementById('data').value,
        ond;
    ond = nod.split('-');
    let d = parseInt(ond[2]),
        m = parseInt(ond[1]),
        g = parseInt(ond[0]);

    let nd = d + 1;
    let nm = m;
    let ng = g;

    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (nd === 32) {
                nd = 1;
                nm++;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (nd == 31) {
                nd = 1;
                nm++;
            }
            break;
        case 2:
            if (g % 400 === 0) {
                if (nd === 30) {
                    nd = 1;
                    nm++;
                }
            } else {
                if (nd === 29) {
                    nd = 1;
                    nm++;
                }
            }
            break;

    }
    if (nm === 13) {
        nm = 1;
        ng++;
    }

    if (nd < 10) {
        nd = '0' + nd;
    }
    if (nm < 10) {
        nm = '0' + nm;
    }
    document.getElementById('text10').innerHTML = 'Naxt Data:' + nd + '.' + nm + '.' + ng;
}
