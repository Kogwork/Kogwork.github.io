//skills
const barData = {"cpp": 95, "git": 80, "Full-Stack": 50, "Java": 80, "DevOps": 75}

const barsByClass = document.getElementsByClassName("progress")

for (let i = 0; i < barsByClass.length; i++) {
    let element = barsByClass.item(i)
    element.addEventListener("mouseover", complete)
}

function complete() {
    let barPosition = this.children[0].id
    for (let i = 0; i < barData[barPosition]; i++) {
        this.children[0].style.width = i.toString() + "%"
    }
}

//contact me

function checkLength() {
    var textArea = document.getElementById("contactText"),
        count = textArea.value.length,
        maxLength = 200,
        remaining = maxLength - count,
        charCount = document.getElementById("charcount_text"),
        submitBtn = document.getElementById("submitBtn")

    if (textArea.value.length > maxLength) {
        textArea.value = textArea.value.substring(0, maxLength)
        charCount.innerHTML = "exceeded " + maxLength + 'chars. Too much words is UN-BASED'
    } else {
        charCount.innerHTML = 'chars ' + remaining + ' left'
    }
}

//Required field
function required() {
    var button = document.getElementById("submitBtn")
    var email = document.forms["contactForm"]["Email"].value
    var firstN = document.forms["contactForm"]["First name"].value
    var lastN = document.forms["contactForm"]["Last name"].value
    if (email == "" || firstN == "" || lastN == "") {
        return false;
    }
}

//Back To Top

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTop").addEventListener("click", topFunction)

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Modal
var modal = document.getElementById("chadModal");

var img = document.getElementById("profilePic");
var modalImg = document.getElementById("jumpImg");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}


