document.addEventListener('DOMContentLoaded', function () {
    const zombie = document.getElementById('zombie');
    const coinsContainer = document.getElementById('coins-container');
    let posX = 0;
    let posY = 0;

    function updateZombiePosition() {
        zombie.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    function createCoin() {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        const coinX = Math.random() * window.innerWidth;
        const coinY = Math.random() * window.innerHeight;
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
                posY = Math.max(posY - step, 0); // Ensure posY doesn't go below 0
                break;
            case 'ArrowDown':
                posY = Math.min(posY + step, window.innerHeight - zombie.clientHeight); // Ensure posY doesn't exceed the window height
                break;
            case 'ArrowLeft':
                posX = Math.max(posX - step, 0); // Ensure posX doesn't go below 0
                break;
            case 'ArrowRight':
                posX = Math.min(posX + step, window.innerWidth - zombie.clientWidth); // Ensure posX doesn't exceed the window width
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
