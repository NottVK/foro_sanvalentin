// ===== CONTADOR DE TIEMPO =====
const fechaInicio = new Date(2025, 5, 16, 8, 32);

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    const contador = document.getElementById("Contador");
    if(contador){
        contador.innerHTML = `💗 Llevamos ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos siendo felices 💗`;
    }
}

setInterval(actualizarContador, 1000);

// ===== FUNCION DE CONTRASEÑA =====
function verificar() {
    const claveCorrecta = "ouroboros"; // Cambia por la contraseña de la página actual
    const passwordInput = document.getElementById("password");

    if(!passwordInput) return; // evita errores si no hay input

    const password = passwordInput.value;

    const bloqueo = document.getElementById("bloqueo");
    const foro = document.getElementById("foro") || document.getElementById("contenido");

    if (password === claveCorrecta) {
        if(bloqueo) bloqueo.style.display = "none";
        if(foro) foro.style.display = "block";
        document.body.classList.remove("locked");
    } else {
        const error = document.getElementById("error");
        if(error) error.innerText = "Contraseña incorrecta 💔";
    }
}



// Bloquea scroll al cargar
window.addEventListener('load', () => {
    document.body.classList.add("locked");
});

// ===== CANVAS DE ESTRELLAS (SOLO SI EXISTE) =====
const canvas = document.getElementById("cielo");
if(canvas){
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let estrellas = [];
    const numeroEstrellas = 400;

    for (let i = 0; i < numeroEstrellas; i++) {
        estrellas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random(),
            velocidad: Math.random() * 0.02
        });
    }

    function dibujarEstrellas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        estrellas.forEach(estrella => {
            ctx.beginPath();
            ctx.arc(estrella.x, estrella.y, estrella.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255," + estrella.opacity + ")";
            ctx.fill();

            estrella.opacity += estrella.velocidad;

            if (estrella.opacity <= 0 || estrella.opacity >= 1) {
                estrella.velocidad = -estrella.velocidad;
            }
        });

        requestAnimationFrame(dibujarEstrellas);
    }

    dibujarEstrellas();

    // Estrellas fugaces
    function estrellaFugaz() {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height / 2;

        let longitud = 300;
        let gradiente = ctx.createLinearGradient(x, y, x + longitud, y + longitud);
        gradiente.addColorStop(0, "white");
        gradiente.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + longitud, y + longitud);
        ctx.strokeStyle = gradiente;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    setInterval(estrellaFugaz, 4000);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

}

