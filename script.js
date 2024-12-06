const preview = document.getElementById('preview');
const generateButton = document.getElementById('generateButton');
const downloadButton = document.getElementById('downloadButton');

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    preview.style.background = gradient;

    // Crear un lienzo para la descarga
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    // Dibujar el degradado en el lienzo
    const gradientCanvas = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradientCanvas.addColorStop(0, color1);
    gradientCanvas.addColorStop(1, color2);
    ctx.fillStyle = gradientCanvas;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Actualizar el enlace de descarga
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        downloadButton.href = url;
    });
}

// Generar un fondo al cargar la página
generateGradient();

// Agregar eventos
generateButton.addEventListener('click', generateGradient);