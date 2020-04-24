function yourName() {
    let n = document.getElementById('name1').value;
    alert('Hallo, ' + n);
}

function yourAge() {
    const e = 2020;
    let a = document.getElementById('age').value;
    alert('Your age ' + (e - a));
}
function sideSquare() {
    let s = document.getElementById('side').value;
    alert('Perimetr square:' + (s * 4))
}
function radiusKola() {
    let r = document.getElementById('radius').value;
    alert('Radius kola:' + r)
}
function speed() {
    let d = document.getElementById('distance').value;
    let t = document.getElementById('time').value;
    alert('You should drive at speed: ' + d * t + 'kph')
}
function tranthac() {
    const curs = 1.09;
    let d = document.getElementById('dolor').value;
    alert('You will take: ' + (d * curs).toFixed(3) + ' EUR')
}
function sizeFlash() {
    let size = document.getElementById('size').value * 1024,
        file = 820;
    alert('You will have ' + parseInt(size / file) + ' file');
}
function check() {
    let money = document.getElementById('money').value,
        prise = 20;
    alert('You can by ' + parseInt(money / prise) + ' chocolads')
}
function numbers() {
    let number = document.getElementById('number').value,
        f = parseInt((number / 100) % 10),
        s = parseInt((number / 10) % 10),
        t = parseInt(number % 10);
    alert(t + '' + s + f);
}
function prosent() {
    const prosent = 5 / 12;
    let summ = document.getElementById('summa').value,
        long = document.getElementById('long').value,
        take = ((prosent * summ) * long).toFixed(3);
    alert('You will take: ' + take + 'UAN');

}