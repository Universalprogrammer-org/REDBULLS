let audio = document.getElementById('audio');
audio.addEventListener("click", function() {
    audio.play()
});

function send() {
  let file = document.getElementById('Audio').files[0];
  if (!file) return alert("No seleccionaste ningún archivo.");
  if (!file.type.startsWith("audio/")) return alert("Solo se permiten archivos de audio.");

  let reader = new FileReader();
  reader.onload = function(e) {
    let base64Audio = e.target.result;
    localStorage.setItem("customAudio", base64Audio);
    localStorage.setItem("customAudioName", file.name); // nombre original
    alert("Audio guardado correctamente 🎶");
  };
  reader.readAsDataURL(file);
}


function Notsend(){
    location.href = "Entrada.html";
}
