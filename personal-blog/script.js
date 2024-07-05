document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section');
    const leftColumn = document.querySelector('.left-column');
    const leftColumnText = leftColumn.querySelector('p');
    let currentSection = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            const translateY = -100 * index;
            sections.forEach(section => {
                section.style.transform = `translateY(${translateY}%)`;
            });
            currentSection = index;
            updateLeftColumnContent(index);
        }
    }

    function updateLeftColumnContent(index) {
        const colors = ['#777777', '#d5b6fa', '#6efc6c'];
        const texts = [
            'Hello! I am Hitesh. Immature fun guy with serious commitment for research.',
            'Welcome to Section 2. Explore more about my hobbies and interests.',
            'This is Section 3. Discover my latest projects and achievements.'
        ];
        leftColumn.style.backgroundColor = colors[index];
        leftColumnText.textContent = texts[index];
    }

    function handleScroll(event) {
        if (!isScrolling) {
            isScrolling = true;
            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                currentSection++;
            } else if (event.deltaY < 0 && currentSection > 0) {
                currentSection--;
            }
            scrollToSection(currentSection);
            setTimeout(() => {
                isScrolling = false;
            }, 700);
        }
    }

    document.addEventListener('wheel', handleScroll);

    // Cloud Animation
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.style.top = `${Math.random() * 50}%`;
        const baseSpeed = 10; // Base speed in seconds
        const randomFactor = Math.random() * 5; // Random factor to add variability
        cloud.style.animationDuration = `${baseSpeed + randomFactor}s`;
    });
});
