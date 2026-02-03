var tom1 = new Audio("/sounds/tom-1.mp3");
var tom2 = new Audio("/sounds/tom-2.mp3");
var tom3 = new Audio("/sounds/tom-3.mp3");
var tom4 = new Audio("/sounds/tom-4.mp3");
var snare = new Audio("/sounds/snare.mp3");
var crash = new Audio("/sounds/crash.mp3");
var kickBass = new Audio("/sounds/kick-bass.mp3");

document.querySelectorAll(".drum").forEach(btn =>
    btn.addEventListener("click", function() {
        let btnText = this.textContent;
        playSound(btnText);
        btnAnimation(btnText);
    })
);

document.addEventListener("keydown", function(e) {
    playSound(e.key);
    btnAnimation(e.key);
});

function playSound(key) {
    switch (key) {
            case "w":
                tom1.play();
                break;
            case "a":
                tom2.play();
                break;
            case "s":
                tom3.play();
                break;
            case "d":
                tom4.play();
                break;
            case "j":
                snare.play();
                break;
            case "k":
                crash.play();
                break;
            case "l":
                kickBass.play();
                break;
        
            default:
                break;
        }
}

function btnAnimation(key) {
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100);
}
