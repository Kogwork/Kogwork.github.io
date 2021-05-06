

//skills
const barData = {"fishing-bar": 70, "drifting-bar": 95, "slacking-bar": 45, "penetration-bar": 69}

const barsByClass = document.getElementsByClassName("progress")

for (let i = 0; i<barsByClass.length; i++){
    let element = barsByClass.item(i)
    element.addEventListener("mouseover", complete)
}

function complete() {
    let barPosition = this.children[0].id;
    for (let i = 0; i < barData[barPosition]; i++) {
        this.children[0].style.width = i.toString() + "%";
        setTimeout(null, 7000);
    }
}

//contact me
var maxTextInput = document.getElementById("contactText").maxLength;



// Get the modal
    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("profilePic");
    var modalImg = document.getElementById("img01");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }


