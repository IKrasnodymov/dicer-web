document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DIC3R Web is loaded!');

    // Dice rolling demo functionality
    const diceButtons = document.querySelectorAll('.dice-btn');
    const rollHistory = document.getElementById('roll-history');
    const currentRoll = document.getElementById('current-roll');

    let selectedDice = 'd6'; // Default selected dice
    let rollResults = [];

    diceButtons.forEach(button => {
        button.addEventListener('click', () => {
            diceButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedDice = button.dataset.dice;
            rollDice();
        });
    });

    function rollDice() {
        const diceType = parseInt(selectedDice.slice(1));
        const roll = Math.floor(Math.random() * diceType) + 1;

        rollResults.push(`${selectedDice}: ${roll}`);
        if (rollResults.length > 3) {
            rollResults.shift();
        }

        updateRollDisplay();
    }

    function updateRollDisplay() {
        rollHistory.textContent = rollResults.slice(0, -1).join(', ');
        currentRoll.textContent = rollResults[rollResults.length - 1] || 'Roll a dice to see the result';

        // Add a simple animation to the results
        currentRoll.style.opacity = '0';
        currentRoll.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
            currentRoll.style.opacity = '1';
        }, 50);
    }

    // Add a simple animation to the screenshots
    const screenshots = document.querySelectorAll('.app-screenshots img');
    screenshots.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            img.style.opacity = '1';
        }, 300 * (index + 1));
    });

    // Add hover effect to feature list items
    const featureItems = document.querySelectorAll('.features li');
    featureItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#b5e853';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#b8b8b8';
        });
    });
});