'use strict';

class Radius {

    constructor(radius) {
        this.radius = radius;
    }
    set Radius(radius) {
        this.radius = radius;
    }

    get entRadius() {
        return this.radius;
    }
    get diametr() {
        return this.radius * 2;
    }
    plOkryjnosti() {
        let o = Math.floor(((this.radius ** 2) * Math.PI));
        return o;
    }
    dlOkryjnosti() {
        let d = Math.floor(((this.radius * 2) * Math.PI));
        return d;
    }
}


function getRadius() {
    let gR = document.getElementById('getRadius').value;
    let r = new Radius(gR);
    let pO = r.plOkryjnosti();
    let dO = r.dlOkryjnosti();
    let dm = r.diametr;

    document.getElementById('text1').innerHTML = 'Diametr: ' + dm + ' Plochad okryjnosti: ' + pO + ' Dlina okryjnosti: ' + dO;
}
// =================================================================

class Marker {
    constructor(color, qty, text) {
        this.color = color;
        this.qty = qty;
        this.text = text.split(' ').join('');
    }
    get getText() {
        return this.text;
    }

    sendText() {
        let textMas = this.text.split('');
        let kol = textMas.length;
        let ost = this.qty;
        let text = `<span style="color:${this.color};">`;
        let textAfte = `<span style="color:#666;">`;

        for (let i = 0; i < kol; i++) {
            let elem = textMas[i];

            if (i <= this.qty) {
                text += elem;
                ost -= 0.5;
                if (ost <= 0) {
                    let otv = confirm('Zapravit?');
                    if (otv == true) {
                        ost = this.qty;
                    } else {
                        ost = 0;
                        text += `</span>`;
                    }
                }
            } else {
                text += textAfte;
                text += elem;
            }
        }
        text += `</span > `;
        document.getElementById('text2').innerHTML = text;
        document.getElementById('prosent').innerHTML = ost + '%';
    }
    get ostatok() {
        return this.qty;
    }
}

function getTexts() {
    let t = document.getElementById('addText').value;
    let marker = new Marker('#DC143C', 100, t);
    let rez = marker.getText;
    document.getElementById('text2').innerHTML = rez;
    marker.sendText();
}
document.getElementById('prosent').innerHTML = 100 + '%';

// ==================================================================
let WORK = [];

class Employee {
    constructor(name, age, practic) {
        this.name = name;
        this.age = age;
        this.practic = practic;
    }
    get getEmploer() {
        return [this.name, this.age, this.practic];
    }
}
class EmpTable {
    constructor(name, age, practic) {
        this.name = name;
        this.age = age;
        this.practic = practic;
    }
    getHtml() {
        let table = document.getElementById('table');

        let tr = document.createElement('tr');
        table.appendChild(tr);

        let tdName = document.createElement('td');
        tdName.innerHTML = this.name;

        let tdAge = document.createElement('td');
        tdAge.innerHTML = this.age;

        let tdPractic = document.createElement('td');
        tdPractic.innerHTML = this.practic;

        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdPractic);
    }
}

function addEnploee() {
    let n = document.getElementById('addName').value,
        a = document.getElementById('addAge').value,
        p = document.getElementById('addPractic').value;

    let w = new Employee(n, a, p);
    WORK.push({
        name: w.getEmploer[0],
        age: w.getEmploer[1],
        practic: w.getEmploer[2]
    });
    let kol = WORK.length;
    let nam, ag, prac;
    for (let i = 0; i < kol; i++) {
        nam = WORK[i].name;
        ag = WORK[i].age;
        prac = WORK[i].practic;
    }
    let wt = new EmpTable(nam, ag, prac);
    wt.getHtml();
}