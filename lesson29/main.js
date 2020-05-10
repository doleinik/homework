let playList = [{
    autor: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
},
{
    autor: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
},
{
    autor: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
},
{
    autor: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
},
{
    autor: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
},
{
    autor: "AC / DC",
    song: "BACK IN BLACK"
},
{
    autor: "QUEEN",
    song: "WE WILL ROCK YOU"
},
{
    autor: "METALLICA",
    song: "ENTER SANDMAN"
}];
let ol = document.createElement('ol');
function showMusic() {

    let kol = playList.length;
    for (let i = 0; i < kol; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${playList[i].autor} - "${playList[i].song}"`;
        ol.appendChild(li);
    }
    document.body.appendChild(ol);
}
let div = document.createElement('div');
div.setAttribute('style', 'width: 100px; height: 100px;background: #000; display: none;');
div.setAttribute('id', 'div1');

let text = document.createElement('p');
text.innerHTML = `Some text`;
text.setAttribute('style', 'color: #fff;')

let input = document.createElement('input');
input.setAttribute("type", "button");
input.setAttribute("value", "Close");
input.setAttribute("id", "hideWindow");

div.appendChild(text);
div.appendChild(input);
document.body.appendChild(div);

function modalWindow() {

    div.setAttribute('style', 'width: 100px; height: 100px;background: #000;');

    content = document.getElementById('div1');
    show = document.getElementById('showWindow');
    hide = document.getElementById('hideWindow');

    show.addEventListener("click", () => {
        content.style.display = "block"
    })
    hide.addEventListener("click", () => {
        content.style.display = "none"
    })
}
let div3 = document.createElement('div');
div3.setAttribute('style', 'width: 100px; height: 300px; background: #000; border: 3px solid #666;');


let red = document.createElement('div');
red.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #ff0820;border: 3px solid #666;');

let yellow = document.createElement('div');
yellow.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #4d4304;border: 3px solid #666;');

let green = document.createElement('div');
green.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #103b04;border: 3px solid #666;');

document.body.appendChild(div3);
div3.appendChild(red);
div3.appendChild(yellow);
div3.appendChild(green);
let cf = 2;
function svetlofor() {
    if (cf == 5) {
        cf = 1;
    }
    switch (cf) {
        case 1:
            red.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #ff0820;border: 3px solid #666;');
            yellow.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background:#4d4304;border: 3px solid #666;');
            green.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #103b04;border: 3px solid #666;');
            break;
        case 2:
            red.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #730303;border: 3px solid #666;');
            yellow.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background:#fbff08;border: 3px solid #666;');
            green.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #103b04;border: 3px solid #666;');
            break;
        case 3:
            red.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #730303;border: 3px solid #666;');
            yellow.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background:#4d4304;border: 3px solid #666;');
            green.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #08ff20;border: 3px solid #666;');
            break;
        case 4:
            red.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #730303;border: 3px solid #666;');
            yellow.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background:#fbff08;border: 3px solid #666;');
            green.setAttribute('style', 'width: 94px; height: 94px; border-radius: 50%; background: #103b04;border: 3px solid #666;');
            break;
        default:
            break;
    }
    cf++;
}