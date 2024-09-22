// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Es una voz", time: 0.7, duration: 1.5 },
  { text: "Oh-oh-oh-oh-oh", time: 0.9, duration: 3},
  { text: "There's a light in my window, a smile on my face", time: 5.5,duration: 4.6 },
  { text: "You've given me a new life, a new day", time: 10, duration: 3.6},
  { text: "Oh, your love is like magic (yeah)", time: 13.5, duration: 3.1 },
  { text: "Yeah, I feel like I can fly", time: 17.5, duration: 2.5},
  { text: "I'm kissing the sky", time: 19.8, duration:2.8},
  { text: "Mi pedazo de sol, la niña de mis ojos", time: 18.3, duration: 7 },
  { text: "Tiene una colección de corazones rotos", time: 23.5, duration:5.5 },
  { text: "You're my piece of the sun, I'm in heaven when I", time: 28.5, duration: 4 },
  { text: "Watch you dance to reggaetón with your red heels high", time: 32.6, duration:3.9 },
  { text: "Baby, you're making me dance, I feel so alive", time: 36 , duration: 5.2},
  { text: "Then you hurt me so good, think I'm 'bout to cry", time: 41.5 , duration:4},
  { text: "Oh, I feel so lucky, lovely", time: 45.5 , duration:3},
  { text: "I never met somebody who could love me", time: 47.5 , duration:3.2},
  { text: "Like you love me in heels so high", time: 49 , duration:4},
  { text: "Pa-ah, ah-ah, pa-ra-ra-ra-ra", time: 53 , duration:4.7},
  { text: "I never met somebody, I never met somebody (ah)", time: 58 , duration:3.9},
  { text: "Pa-ah, ah-ah, pa-ra-ra-ra-ra", time: 61.9 , duration:4.3},
  { text: "I never met somebody (pa-ra-ah)", time: 66 , duration:4},
  { text: "El día que te conocí, lo sentí, me dejé llevar", time: 68.5 , duration:2.5},
  { text: "Me morí, reviví en el mismo bar (yeah)", time: 71.5, duration:2 },
  { text: "You got me so intoxicated", time: 74.5, duration:2 },
  { text: "It's the love I've been waiting for", time: 76 , duration:2},
  { text: "Me and you, we're so meant to be", time: 77.6, duration:2 },
  { text: "It's just the start of our story", time: 79.8 , duration:2},
  { text: "We'll never be sorry", time: 82.5, duration:2 },
  { text: "Like I told you, baby", time: 84 , duration:2},
  { text: "You should leave here with me", time: 86.5, duration:2 },
  { text: "I got something good for you", time: 88 , duration:2.2},
  { text: "Come home, let me show you", time: 90 , duration:2.1},
  { text: "Mi pedazo de sol, la niña de mis ojos", time: 92, duration:4 },
  { text: "Tiene una colección de corazones rotos", time: 95.5 , duration:4 },
  { text: "You're my piece of the sun, I'm in heaven when I", time: 99.5 , duration:4},
  { text: "Watch you dance to reggaetón with your red heels high", time: 103.2 , duration:4},
  { text: "Baby, you're making me dance, I feel so alive", time: 107 , duration:4},
  { text: "Then you hurt me so good, think I'm 'bout to cry", time: 111.4 , duration:4},
  { text: "Oh, I feel so lucky, lovely", time: 115 , duration:3},
  { text: "I never met somebody who could love me", time: 118.5, duration:2 },
  { text: "Like you love me in heels so high", time: 120.8 , duration:2.8},
  { text: "Pa-ah, ah-ah, pa-ra-ra-ra-ra", time: 124.8, duration:2 },
  { text: "I never met somebody, I never met somebody (ah)", time: 128 , duration:3.8},
  { text: "Cuidado si entra en tu ventana", time: 132.5 , duration:2},
  { text: "Cuidado, siente su olor", time: 136.5 , duration:2},
  { text: "Mi pedazo de sol, la niña de mis ojos", time: 139 , duration:3.1},
  { text: "Tiene una colección de corazones rotos", time: 142.5, duration:3.1 },
  { text: "You're my piece of the sun, I'm in heaven when I", time: 146.8 , duration:4},
  { text: "Watch you dance to reggaetón with your red heels high", time: 150.5, duration:3.9 },
  { text: "Baby, you're making me dance, I feel so alive", time: 154, duration:3.9 },
  { text: "Then you hurt me so good, think I'm 'bout to cry", time: 158, duration:3.9 },
  { text: "Oh, I feel so lucky, lovely", time: 162.9 , duration:3},
  { text: "I never met somebody who could love me", time: 165.5 , duration:2},
  { text: "Like you love me in heels so high", time: 167.7, duration:3.1 },
  { text: "Pa-ah, ah-ah, pa-ra-ra-ra-ra", time: 171.5, duration:3.3 },
  { text: "I never met somebody, I never met somebody (ah)", time: 175 , duration:4.1},
  { text: "Pa-ah, ah-ah, pa-ra-ra-ra-ra", time: 179.8 , duration:3.3},
  { text: "I never met somebody (pa-ra-ah)", time: 183, duration:2 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.09; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

audio.onloadedmetadata = function () {
  setTimeout(ocultarTitulo, audio.duration * 1000); // El tiempo se ajusta a la duración del audio en segundos
};

// Llama a la función después de 216 segundos (216,000 milisegundos) setTimeout(ocultarTitulo, 216000);
