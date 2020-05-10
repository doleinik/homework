
const PRODUCTS = [];
function addProducts() {
    let entName = document.getElementById('enterName').value,
        entKol = document.getElementById('enterKols').value,
        entStatus = document.getElementById('statysProducts').value;
    if (entName != "" && entKol != "") {
        let flag = false;
        let kols = PRODUCTS.length,
            sum = 0;
        for (let i = 0; i < kols; i++) {
            if (PRODUCTS[i].name === entName && PRODUCTS[i].status === entStatus) {
                flag = true;
                sum = parseInt(PRODUCTS[i].kol) + parseInt(entKol);
                PRODUCTS[i].kol = sum;
            }
        }
        if (flag === false) {
            PRODUCTS.push({
                name: entName,
                kol: entKol,
                status: entStatus
            });
        }
        document.getElementById('enterName').value = '';
        document.getElementById('enterKols').value = '';
        document.getElementById('statysProducts').value = '0';
        getNameProduct();
        showProducts();
    } else {
        alert('Error, try again!');
    }

}



function showProducts() {
    let option = '';
    let kols = PRODUCTS.length;

    for (let i = 0; i < kols; i++) {
        if (PRODUCTS[i].status == 0) {
            product = PRODUCTS[i];
            option += `Name: ${product.name} <br> Kolichestvo: ${product.kol} <br>Status: ne kyplen<br><hr>`;

        }
    }
    for (let i = 0; i < kols; i++) {
        if (PRODUCTS[i].status == 1) {
            product = PRODUCTS[i];
            option += `Name: ${product.name} <br> Kolichestvo: ${product.kol} <br>Status: ne kyplen<br><hr> `;
        }
    }
    document.getElementById('Task1').innerHTML = option;
}



function getNameProduct() {
    let optList = '<option value="">--Enter kolichestvo--</option>';
    let kols = PRODUCTS.length;

    for (let i = 0; i < kols; i++) {
        optList += '<option value="' + PRODUCTS[i].name + '">' + PRODUCTS[i].name + '</option>';
    }
    document.getElementById('byProducts').innerHTML = optList;

}



function byProducts() {
    let prod = document.getElementById('byProducts').value,
        kolBy = document.getElementById('kolForBy').value;
    let kols = PRODUCTS.length;

    for (let i = 0; i < kols; i++) {
        if (PRODUCTS[i].name === prod && PRODUCTS[i].kol > kolBy || PRODUCTS[i].kol === kolBy) {
            document.getElementById('statysBy').innerHTML = 'Kypleno!';
            let ost = parseInt(PRODUCTS[i].kol) - kolBy;
            console.log(ost);
            if (ost === 0) {
                PRODUCTS[i].kol = 0;
                PRODUCTS[i].status = 1;
            } else {
                PRODUCTS[i].kol = ost;
            }
        } else {
            document.getElementById('statysBy').innerHTML = 'Ne dostatochno tovara!';

        }
    }
    document.getElementById('byProducts').value = 0;
    document.getElementById('kolForBy').value = '';
    showProducts();
}
// ==========================================================
const CHECK = [];
function AddTovar() {
    let getName = document.getElementById('enterTovar').value,
        getKol = document.getElementById('enterKol').value,
        getPrise = document.getElementById('enterPrise').value;
    if (getName != "" && getKol != "" && getPrise != "") {
        CHECK.push({
            name: getName,
            kol: getKol,
            prise: getPrise
        });
    } else {
        alert("Error, try again!");
    }
    document.getElementById('enterTovar').value = '';
    document.getElementById('enterKol').value = '';
    document.getElementById('enterPrise').value = '';
    getCheck();
}
function getCheck() {
    let check = "CHECK",
        itogo = 0,
        serS = 0,
        max = 0,
        kols = CHECK.length;
    for (let i = 0; i < kols; i++) {
        check += `<br>${i + 1}|${CHECK[i].name}: X${CHECK[i].kol} = ${parseInt(CHECK[i].kol) * parseInt(CHECK[i].prise)} UAH`;
        document.getElementById('chesk').innerHTML = check;
    }
    for (let i = 0; i < kols; i++) {
        itogo += parseInt(CHECK[i].kol) * parseInt(CHECK[i].prise);

        document.getElementById('all').innerHTML = "Itogo: " + itogo + " UAH";
    }
    for (let i = 0; i < kols; i++) {
        serS = itogo / kols;

        document.getElementById('seredSum').innerHTML = "Serednay suma: " + serS + " UAH";
    }
    for (let i = 0; i < kols; i++) {
        if (parseInt(CHECK[i].kol) * parseInt(CHECK[i].prise) > max) {
            max = parseInt(CHECK[i].kol) * parseInt(CHECK[i].prise);

            document.getElementById('maxSum').innerHTML = "Max suma: " + max + " UAH";
        }
    }
}
// ====================================================

const STYLE = [{
    property: 'font-size',
    value: '24px'
},
{
    property: 'color',
    value: '#555'
},
{
    property: 'font-family',
    value: 'Arial, sans-serif'
}
];

function styleText() {
    let text = 'Lorem ipsum';
    let str = '<p style="';

    for (let i = 0; i < STYLE.length; i++) {
        str += STYLE[i].property + ':' + STYLE[i].value + ';';
    }
    str += '">' + text + '</p>';
    document.write(str);
}
// =======================================================
const CLASSROOM = [];
const GROOP = [];

function addClassRoom() {
    // добавление обьекта аудитории в масив
    let addName = document.getElementById('addName').value,
        addKol = document.getElementById('addPlase').value,
        addFacult = document.getElementById('addFacult').value;
    if (addName != '' && addKol != '' && addKol >= 10 && addKol <= 20 && addFacult != '') {
        CLASSROOM.push({
            name: addName,
            plase: addKol,
            facult: addFacult
        });
    } else {
        alert('Error, try again!');
    }
    document.getElementById('addName').value = "";
    document.getElementById('addPlase').value = "";
    document.getElementById('addFacult').value = "";
    getNameFacult();
    getClassRoom();
}
function getNameFacult() {
    // вывод в селект факультет
    let optList = '';
    let kols = CLASSROOM.length;

    for (let i = 0; i < kols; i++) {
        optList += '<option value="' + CLASSROOM[i].facult + '">' + CLASSROOM[i].facult + '</option>';
    }
    document.getElementById('sortClassRoom').innerHTML = optList;

}
function getClassRoom() {
    // вивод всех аудиторий
    let classRoom = "",
        kols = CLASSROOM.length;
    for (let i = 0; i < kols; i++) {
        classRoom += `<br>№${i + 1}|Auditoriya: ${CLASSROOM[i].name}| Kol plase: ${CLASSROOM[i].plase} |Facult: ${CLASSROOM[i].facult}`;
        document.getElementById('text4').innerHTML = classRoom;
    }
}
function getForFacult() {
    // вибор факультете и вывод
    let option = '';
    let kols = CLASSROOM.length;
    let getFacult = document.getElementById('sortClassRoom').value;

    for (let i = 0; i < kols; i++) {
        if (CLASSROOM[i].facult == getFacult) {
            option += `<br>№${i + 1}|Auditoriya: ${CLASSROOM[i].name}| Kol plase: ${CLASSROOM[i].plase} |Facult: ${CLASSROOM[i].facult}`;
        }
    }
    document.getElementById('text4Facult').innerHTML = option;
}
function SortName() {
    // сортировка по имени
    CLASSROOM.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    getClassRoom();
}
function SortKol(CLASSROOM) {
    // сортировка по количеству мест
    CLASSROOM.sort((a, b) => { return a.plase - b.plase });
}
function addGroop() {
    // добавление обьекта групи
    let addNameGroop = document.getElementById('addNameGroop').value,
        addKolGroop = document.getElementById('addKolGroop').value,
        addFacultGroop = document.getElementById('addFacultGroop').value;
    if (addNameGroop != '' && addKolGroop != '' && addKolGroop <= 20 && addKolGroop >= 10 && addFacultGroop != '') {
        GROOP.push({
            name: addNameGroop,
            plase: addKolGroop,
            facult: addFacultGroop
        });
    } else {
        alert('Error, try again!');
    }
    document.getElementById('addNameGroop').value = "";
    document.getElementById('addKolGroop').value = "";
    document.getElementById('addFacultGroop').value = "";
    getNameGroop();
}
function getNameGroop() {
    // вывод в селект факультет
    let optList = '';
    let kols = GROOP.length;

    for (let i = 0; i < kols; i++) {
        optList += '<option value="' + GROOP[i].facult + '">' + GROOP[i].name + '</option>';
    }
    document.getElementById('sortClassGroop').innerHTML = optList;

}
function getForGroop() {
    let option = '';
    let kols = GROOP.length;
    let getGroop = document.getElementById('sortClassGroop').value;


    for (let i = 0; i < kols; i++) {
        if (CLASSROOM[i].facult == getGroop) {
            option += `<br>№${i + 1}|Auditoriya: ${CLASSROOM[i].name}| Kol plase: ${CLASSROOM[i].plase} |Facult: ${CLASSROOM[i].facult}`;
        } else {
            alert('Net podhodyashich!')
        }
    }
    document.getElementById('text4Groop').innerHTML = option;
}