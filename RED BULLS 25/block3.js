let audio = document.getElementById('audio');
audio.addEventListener("click", function() {
    audio.play()
});

// Borra la base de datos si ya existe un audio guardado
(function() {
  let request = indexedDB.open("AudioDB", 1);
  request.onsuccess = function(event) {
    let db = event.target.result;
    if (db.objectStoreNames.contains("audios")) {
      let transaction = db.transaction(["audios"], "readonly");
      let store = transaction.objectStore("audios");
      let getAudio = store.get("customAudio");
      getAudio.onsuccess = function() {
        if (getAudio.result) {
          db.close();
          indexedDB.deleteDatabase("AudioDB");
        } else {
          db.close();
        }
      };
      getAudio.onerror = function() {
        db.close();
      };
    } else {
      db.close();
    }
  };
})();

function send() {
  let file = document.getElementById('Audio').files[0];
  if (!file) return alert("No seleccionaste ningún archivo.");
  if (!file.type.startsWith("audio/")) return alert("Solo se permiten archivos de audio.");

  // Primero borra la base de datos, luego guarda el nuevo audio
  let deleteRequest = indexedDB.deleteDatabase("AudioDB");
  deleteRequest.onsuccess = function() {
    saveAudio(file);
  };
  deleteRequest.onerror = function() {
    // Si no existe la base de datos, igual intenta guardar
    saveAudio(file);
  };
}

function saveAudio(file) {
  let request = indexedDB.open("AudioDB", 1);

  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    if (!db.objectStoreNames.contains("audios")) {
      db.createObjectStore("audios");
    }
  };

  request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(["audios"], "readwrite");
    let store = transaction.objectStore("audios");
    store.put(file, "customAudio");
    store.put(file.name, "customAudioName");
    transaction.oncomplete = function() {
      alert("Audio guardado correctamente 🎶");
    };
    transaction.onerror = function() {
      alert("Error al guardar el audio.");
    };
    db.close();
  };

  request.onblocked = function() {
    alert("Cierra otras pestañas de esta página para actualizar la base de datos.");
  };

  request.onerror = function() {
    alert("No se pudo abrir la base de datos.");
  };
}


function Notsend(){
    location.href = "Entrada.html";
}
