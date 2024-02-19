document.addEventListener('DOMContentLoaded', function () {
    const zombie = document.getElementById('zombie');
    const coinsContainer = document.getElementById('zombiesec');
    let posX = 0;
    let posY = 0;

    function updateZombiePosition() {
        // Ensure the zombie stays within the boundaries
        posX = Math.max(0, Math.min(window.innerWidth - zombie.clientWidth, posX));
        posY = Math.max(0, Math.min(window.innerHeight - zombie.clientHeight, posY));
    
        zombie.style.transform = `translate(${posX}px, ${posY}px)`;
    }
    
    function updateZombieDirection(direction) {
        zombie.style.animationName = `plays-${direction}`;
    }

    function createCoin() {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        const coinX = Math.random() * (window.innerWidth - 30); // Adjust the value based on the coin width
        const coinY = Math.random() * (window.innerHeight - 30); // Adjust the value based on the coin height
        coin.style.left = `${coinX}px`;
        coin.style.top = `${coinY}px`;
        coinsContainer.appendChild(coin);
    
        // Add click event to "eat" the coin
        coin.addEventListener('click', function () {
            coinsContainer.removeChild(coin);
            // You can add any additional logic for scoring or effects here
        });
    }    

    function handleKeyPress(event) {
        const step = 20; // Adjust the step size as needed
    
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
                posY = Math.max(posY - step, 0); // Ensure posY doesn't go below 0
                break;
            case 'ArrowDown':
                posY = Math.min(posY + step, window.innerHeight - zombie.clientHeight); // Ensure posY doesn't exceed the window height
                break;
            case 'ArrowLeft':
                posX = Math.max(posX - step, 0); // Ensure posX doesn't go below 0
                updateZombieDirection('left');
                break;
            case 'ArrowRight':
                posX = Math.min(posX + step, window.innerWidth - zombie.clientWidth); // Ensure posX doesn't exceed the window width
                updateZombieDirection('right');
                break;
        }
        
        updateZombiePosition();
    }
    
    

    document.addEventListener('keydown', handleKeyPress);

    // Initialize zombie position
    updateZombiePosition();

    // Create coins periodically (adjust the interval as needed)
    setInterval(createCoin, 3000);
});