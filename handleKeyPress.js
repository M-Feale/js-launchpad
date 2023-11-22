const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");
const key9 = document.getElementById("key-9");

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
            handleAnimation(key1)
            playSound(chirp)
            break;

        case "Numpad2":
            handleAnimation(key2)
            playSound(clap)
            break;

        case "Numpad3":
            handleAnimation(key3)
            playSound(kick)
            break;

        case "Numpad4":
            handleAnimation(key4)
            playSound(laser)
            break;

        case "Numpad5":
            handleAnimation(key5)
            playSound(fuzz)
            break;

        case "Numpad6":
            handleAnimation(key6)
            playSound(tom)
            break;

        case "Numpad7":
            handleAnimation(key7)
            playSound(hit)
            break;

        case "Numpad8":
            handleAnimation(key8)
            playSound(metronome)
            break;

        case "Numpad9":
            handleAnimation(key9)
            playSound(whistle)
            break;
    }
}

document.addEventListener("keydown", handleKeyPress)