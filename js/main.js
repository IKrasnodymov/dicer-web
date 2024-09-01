document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DIC3R Web is loaded!');

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