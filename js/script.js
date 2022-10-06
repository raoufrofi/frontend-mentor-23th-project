const form = document.getElementById("form");
const input = form.getElementsByTagName("input");
const img = form.getElementsByTagName("img");
const errorPara = form.getElementsByTagName("p");
const btn = form.getElementsByTagName("button");

// Button Click



let errorMsg = () => {
    for (let i = 0; i < input.length; i++) {
        let val = input[i].value;
        if (val.length === 0) {
            img[i].style.display = "block";
            input[i].style.borderColor = "hsl(0, 100%, 74%)";
            errorPara[i].innerHTML = "Input can't be empty";
        } else if (val.length != 0) {
            img[i].style.display = "none";
            input[i].style.borderColor = "hsl(246, 25%, 77%)";
            errorPara[i].innerHTML = "";
        }
    }
}


btn[0].addEventListener("click", () => errorMsg());