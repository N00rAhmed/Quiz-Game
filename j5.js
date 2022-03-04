//Completed JavaScript 03/03/2022 21:41 pm

let question000 = ["Hello this quiz game has got 5 questions in total which are multiple choice and at the end you will get your marks. This was made in HTML, CSS and JavaScript, I hope you enjoy it :) <br/><br/>Created by Noor Ahmed"];
let choices000 = ["<input onclick=correct000() name=button000 type=radio />Start<br />"];

let question001 = ["What is 1 + 1?"];
let choices001 = ["<input onclick=correct001() name=button001 type=radio />2<br /><input onclick=incorrect001() name=button001 type=radio />4<br /><input onclick=incorrect001() name=button001 type=radio />7<br />"];

let question002 = ["What is 2 + 2?"];
let choices002 = ["<input onclick=incorrect002() name=button002 type=radio />3<br /><input onclick=correct002() name=button002 type=radio />4<br /><input onclick=incorrect002() name=button002 type=radio />5<br />"];

let question003 = ["What is 3 + 3?"];
let choices003 = ["<input onclick=incorrect003() name=button003 type=radio />8<br /><input onclick=incorrect003() name=button003 type=radio />5<br /><input onclick=correct003() name=button003 type=radio />6<br />"];

let question005 = ["What is 5 + 5?"];
let choices005 = ["<input onclick=incorrect005() name=button005 type=radio />8<br /><input onclick=incorrect005() name=button005 type=radio />5<br /><input onclick=correct005() name=button005 type=radio />10<br />"];

let question004 = ["What is 4 + 4?"];
let choices004 = ["<input onclick=incorrect004() name=button004 type=radio />3<br /><input onclick=incorrect004() name=button004 type=radio />5<br /><input onclick=correct004() name=button004 type=radio />8<br />"];

let a;
let b;
let c;
let f;
let d;
let e;
let z;

window.onload = function() {
    // message001.innerHTML = question000;
    // options001.innerHTML = choices000;
    click001.innerHTML = "<button onclick=set000()>Press</button>";
}

function correct000() {
    // a = 1;
    e = 1;
}

function incorrect000() {
    // a = 0;
    e = 0;
}

function set000() {
    e = 0;
    message001.innerHTML = question000;
    options001.innerHTML = choices000;
    click001.innerHTML = "<button onclick=set001()>Next</button>";
}

function correct001() {
    // e = 1;
    e = 1;
}

function incorrect001() {
    // e = 0;
    // a = 1; 
    e = 0;
}

function set001() {
    a = 0;
    message001.innerHTML = question001;
    options001.innerHTML = choices001;
    click001.innerHTML = "<button onclick=set002()>Next</button>";
}

function correct001() {
    // e = 1;
    a = 1;
}

function incorrect001() {
    // e = 0;
    // a = 1; 
    a = 0;
}

function set002() {
    b = 0;
    message001.innerHTML = question002;
    options001.innerHTML = choices002;
    click001.innerHTML = "<button onclick=set003()>Next</button>";
}

function correct002() {
    b = 1;
}

function incorrect002() {
    b = 0;
}

function set003() {
    c = 0;
    message001.innerHTML = question003;
    options001.innerHTML = choices003;
    click001.innerHTML = "<button onclick=set005()>Next</button>";
}

function correct003() {
    c = 1;
}

function incorrect003() {
    c = 0;
}

//LOOK herere!!!
function set005() {
    f = 0;
    message001.innerHTML = question005;
    options001.innerHTML = choices005;
    click001.innerHTML = "<button onclick=set004()>Next</button>";
}

function correct005() {
    f = 1;
}

function incorrect005() {
    f = 0;
}

function set004() {
    d = 0;
    message001.innerHTML = question004;
    options001.innerHTML = choices004;
    click001.innerHTML = "<button onclick=result001()>Score</button>";
}

function correct004() {
    d = 1;
}

function incorrect004() {
    d = 0;
}

function result001() {
    z = a + b + c + f + d + "/5";
    message001.innerHTML = "End of Quiz";
    options001.innerHTML = "";
    comment001.innerHTML = "Your score is: " + z;
    click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
}

function repeat001() {
    location.reload();
}