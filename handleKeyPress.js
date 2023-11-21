const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");
const key9 = document.getElementById("key-9");

// const loop = document.getElementById("loop");
const chirp = document.getElementById("chirp");
const clap = document.getElementById("clap");
const kick = document.getElementById("kick");
const laser = document.getElementById("laser");
const fuzz = document.getElementById("fuzz");
const tom = document.getElementById("tom");
const hit = document.getElementById("hit");
const metronome = document.getElementById("metronome");
const whistle = document.getElementById("whistle");

const handleKeyPress = (event) => {
    switch (event.code) {
        case "Numpad1":
            key1.classList.add("played")
            setTimeout(() => {
                key1.classList.remove("played")
            }, 100)
            playSound(chirp)
            break;

        case "Numpad2":
            key2.classList.add("played")
            setTimeout(() => {
                key2.classList.remove("played")
            }, 100)
            playSound(clap)
            break;

        case "Numpad3":
            key3.classList.add("played")
            setTimeout(() => {
                key3.classList.remove("played")
            }, 100)
            playSound(kick)
            break;

        case "Numpad4":
            key4.classList.add("played")
            setTimeout(() => {
                key4.classList.remove("played")
            }, 100)
            playSound(laser)
            break;

        case "Numpad5":
            key5.classList.add("played")
            setTimeout(() => {
                key5.classList.remove("played")
            }, 100)
            playSound(fuzz)
            break;

        case "Numpad6":
            key6.classList.add("played")
            setTimeout(() => {
                key6.classList.remove("played")
            }, 100)
            playSound(tom)
            break;

        case "Numpad7":
            key7.classList.add("played")
            setTimeout(() => {
                key7.classList.remove("played")
            }, 100)
            playSound(hit)
            break;

        case "Numpad8":
            key8.classList.add("played")
            setTimeout(() => {
                key8.classList.remove("played")
            }, 100)
            playSound(metronome)
            break;

        case "Numpad9":
            key9.classList.add("played")
            setTimeout(() => {
                key9.classList.remove("played")
            }, 100)
            playSound(whistle)
            break;
    }
}

document.addEventListener("keydown", handleKeyPress)