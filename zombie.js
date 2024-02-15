// script.js
document.addEventListener('DOMContentLoaded', function () {
    const zombie = document.getElementById('zombie');
    let posX = 0;
    let posY = 0;

    function updateZombiePosition() {
        zombie.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    function handleKeyPress(event) {
        const step = 10; // Adjust the step size as needed
    
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                event.preventDefault(); // Prevent default arrow key behavior (e.g., scrolling)
                break;
        }
    
        switch (event.key) {
            case 'ArrowUp':
                posY -= step;
                break;
            case 'ArrowDown':
                posY += step;
                break;
            case 'ArrowLeft':
                posX -= step;
                break;
            case 'ArrowRight':
                posX += step;
                break;
        }
    
        updateZombiePosition();
    }
    

    document.addEventListener('keydown', handleKeyPress);

    // Initialize zombie position
    updateZombiePosition();
});
