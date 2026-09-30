function cambiarTexto() {
// ==========================================
// MENÚ RESPONSIVE
// ==========================================

function menu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


// ==========================================
// CERRAR MENÚ AL HACER CLICK
// ==========================================

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        document
            .getElementById("menu")
            .classList.remove("active");

    });

});


// ==========================================
// PARTÍCULAS DEL FONDO
// ==========================================

const particles =
    document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);
}


// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const elementos =
    document.querySelectorAll(".reveal");

function revelarElementos() {

    elementos.forEach(elemento => {

        const posicion =
            elemento.getBoundingClientRect().top;

        const altura =
            window.innerHeight;

        if (posicion < altura - 100) {

            elemento.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revelarElementos
);

revelarElementos();


// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

function enviar(event) {

    event.preventDefault();

    alert(
        "🚀 ¡Mensaje enviado correctamente! Gracias por contactarme."
    );

    event.target.reset();

}


// ==========================================
// EFECTO DE ESCRITURA
// ==========================================

const textos = [
    "Desarrollador Web",
    "Diseñador",
    "Programador",
    "Creador Digital"
];

let indiceTexto = 0;
let indiceLetra = 0;
let borrando = false;

function escribirTexto() {

    const elemento =
        document.getElementById("textoAnimado");

    // Si no existe el elemento, no hacemos nada
    if (!elemento) return;

    const textoActual =
        textos[indiceTexto];

    if (!borrando) {

        elemento.textContent =
            textoActual.substring(
                0,
                indiceLetra + 1
            );

        indiceLetra++;

        if (
            indiceLetra ===
            textoActual.length
        ) {

            borrando = true;

            setTimeout(
                escribirTexto,
                1500
            );

            return;
        }

    } else {

        elemento.textContent =
            textoActual.substring(
                0,
                indiceLetra - 1
            );

        indiceLetra--;

        if (indiceLetra === 0) {

            borrando = false;

            indiceTexto++;

            if (
                indiceTexto ===
                textos.length
            ) {

                indiceTexto = 0;

            }

        }

    }

    setTimeout(
        escribirTexto,
        borrando ? 60 : 100
    );

}

escribirTexto();


// ==========================================
// EFECTO DE TÍTULO DE LA PÁGINA
// ==========================================

const tituloOriginal =
    document.title;

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.title =
                "¡Vuelve a mi portafolio! 🚀";

        } else {

            document.title =
                tituloOriginal;

        }

    }
);
