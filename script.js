window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    const dot = document.getElementById('dot');
    const { alpha, beta, gamma } = event;

    // Mapping the device orientation to screen coordinates
    // alpha: 0-360 degrees (rotation around z-axis)
    // beta: -180 to 180 degrees (rotation around x-axis, front to back)
    // gamma: -90 to 90 degrees (rotation around y-axis, left to right)

    // Mapping beta and gamma to screen coordinates
    const x = (window.innerWidth / 2) + (gamma * (window.innerWidth / 2) / 90);
    const y = (window.innerHeight / 2) + (beta * (window.innerHeight / 2) / 180);

    dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
}
