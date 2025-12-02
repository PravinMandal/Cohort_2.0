const pianoMap = {
  "KeyA": "./Assets/keys/01.mp3",
  "KeyS": "./Assets/keys/02.mp3",
  "KeyD": "./Assets/keys/03.mp3",
  "KeyF": "./Assets/keys/04.mp3",
  "KeyG": "./Assets/keys/05.mp3",
  "KeyH": "./Assets/keys/06.mp3",
  "KeyJ": "./Assets/keys/07.mp3",
  "KeyK": "./Assets/keys/08.mp3",
  "KeyL": "./Assets/keys/09.mp3",
  "Semicolon": "./Assets/keys/10.mp3",

  "KeyQ": "./Assets/keys/11.mp3",
  "KeyW": "./Assets/keys/12.mp3",
  "KeyE": "./Assets/keys/13.mp3",
  "KeyR": "./Assets/keys/14.mp3",
  "KeyT": "./Assets/keys/15.mp3",
  "KeyY": "./Assets/keys/16.mp3",
  "KeyU": "./Assets/keys/17.mp3",
  "KeyI": "./Assets/keys/18.mp3",
  "KeyO": "./Assets/keys/19.mp3"
};



function playSound(src) {    
    const audio = new Audio(src)
    audio.play();
}

let body = document.body;

body.addEventListener('keydown', function(val) {
    if(val.repeat) return;
    let sound = val.code
    if(sound) {        
        playSound(pianoMap[sound])

        let keyId = sound.replace("Key", "")

        if(sound === "Semicolon") keyId = "Semicolon";

        const div = document.getElementById(keyId)
        if(div) {
            div.classList.add("active")
            setTimeout(() => {
                div.classList.remove("active")
            }, 100);
        }

    }
})


//when i press using mouse
for(const code in pianoMap) {
    let keyId = code.replace("Key", "");
    let key = document.getElementById(keyId);

    key.addEventListener('click', function() {
        playSound(pianoMap[code]);
    })
}