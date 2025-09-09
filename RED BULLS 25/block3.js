let audio = document.getElementById('audio');
audio.addEventListener("click", function() {
    audio.play()
});

function send() {
  let file = document.getElementById('Audio').files[0];
  if (!file) return alert("No seleccionaste ningún archivo.");
  if (!file.type.startsWith("audio/")) return alert("Solo se permiten archivos de audio.");

  // Abrir (o crear) la base de datos
  let request = indexedDB.open("AudioDB", 1);

  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    // Solo crea el objectStore si no existe
    if (!db.objectStoreNames.contains("audios")) {
      db.createObjectStore("audios");
    }
  };

  request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(["audios"], "readwrite");
    let store = transaction.objectStore("audios");

    // Guardar el archivo como Blob con clave "customAudio"
    let putRequest = store.put(file, "customAudio");
    store.put(file.name, "customAudioName");

    putRequest.onsuccess = function() {
      alert("Audio guardado correctamente 🎶");
    };
    putRequest.onerror = function() {
      alert("Error al guardar el audio.");
    };
  };

  request.onerror = function() {
    alert("No se pudo abrir la base de datos.");
  };
}


function Notsend(){
    location.href = "Entrada.html";
}
