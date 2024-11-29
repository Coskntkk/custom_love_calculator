let htmlBlock = `
<div id="love-calculator" class="calculator">
    <form id="loveForm" id="loveform" class="" action="/" onsubmit="return loveValidation()" method="post">
    <h1>Aşkölçer</h1>
    <h2 id="lovefinal">Aşk ölç</h2>
    <h2>İsmin</h2>
    <input id="firstname" class="yourname name-box" type="text" name="firstName" placeholder="İsmin"></input>
    <h2>O'nun ismi</h2>
    <input id="lovername" class="lovername name-box" type="text" name="lovername" placeholder="O'nun ismi"></input>
    </form>
    <button id="love-button" onclick="loveCalculator()" class="buttons" type="submit" value="Submit">Ölç</button>
    <button onclick="resetFunction()" class="buttons" type="submit">Sıfırla</button>
</div>
`

let errorBlock = `<h1> Bilinmeyen bir hata oluştu </h1>`

let generateLinkBlock = `
<div id="love-calculator" class="calculator">
    <form id="loveForm" id="loveform" class="" action="/" onsubmit="return generateLink()" method="post">
    <h1>Aşkölçer</h1>
    <h2 id="lovelink">Aşk ölçer oluştur</h2>
    <h2>İsmin</h2>
    <input id="firstname1" class="yourname name-box" type="text" name="firstName1" placeholder="İsmin"></input>
    <h2>O'nun ismi</h2>
    <input id="lovername1" class="lovername name-box" type="text" name="lovername1" placeholder="O'nun ismi"></input>
    </form>
    <button id="gen-button" onclick="generateLink()" class="buttons" type="submit" value="Submit">Ölç</button>
</div>
`

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.q;

let isNotClicked = true;
let name1 = null
let name2 = null

if (value) {
    try {
        let base64ToStringNew = atob(value)
        let arr = base64ToStringNew.split(",")
        name1 = arr[0]
        name2 = arr[1]
        document.getElementById("bod").innerHTML += htmlBlock
    } catch (error) {
        console.log(error);
        console.log(error);
        document.getElementById("bod").innerHTML += errorBlock
    }
} else {
    document.getElementById("bod").innerHTML += generateLinkBlock
}

let loveCalculator = function () {
    let yourName = document.getElementById("firstname").value;
    let loversName = document.getElementById("lovername").value;
    let loveScore = Math.floor(Math.random() * 10);
    if (
        (name1.toLowerCase() === yourName.toLowerCase() && name2.toLowerCase() === loversName.toLowerCase())
        ||
        (name2.toLowerCase() === yourName.toLowerCase() && name1.toLowerCase() === loversName.toLowerCase())
    ) {
        loveScore = 100
    }
    let loveFinal = Math.round(loveScore);
    if (yourName === "") {
        alert("lütfen adını gir");
    } else if (loversName === "") {
        alert("lütfen o'nun adını gir");
    } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " ve " + loversName + " aşk skoru: " + loveFinal + " % ";
        isNotClicked = false;
    }
    else {
        document.getElementById("lovefinal").innerHTML = yourName + " ve " + loversName + " aşk skoru " + loveFinal + " % ";
    }
};

let generateLink = function () {
    let yourName = document.getElementById("firstname1").value;
    let loversName = document.getElementById("lovername1").value;
    let str = yourName.toLowerCase().trim() + "," + loversName.toLowerCase().trim();
    let buff = btoa(str)
    if (yourName === "") {
        alert("lütfen adını gir");
    } else if (loversName === "") {
        alert("lütfen o'nun adını gir");
    } else if (isNotClicked) {
        document.getElementById("lovelink").innerHTML = `Özel Aşkölçerin hazır: <a href="https://coskntkk.github.io/custom_love_calculator?q=${buff}">Ziyaret et.</a>`
        isNotClicked = false;
    }
}

//resetbutton
function resetFunction() {
    location.reload();
}
