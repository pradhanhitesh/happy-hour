window.addEventListener('scroll', function() {
    const stars = document.querySelector('.stars');
    let scrollPos = window.scrollY;
    stars.style.backgroundPosition = `0 ${-scrollPos * 0.09}px`;
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const target = this.getAttribute('href');
            const content = document.querySelector('.content');

            // Add the desired transition class
            content.classList.add('page-transition', 'zoom-out');

            // Wait for the animation to finish
            setTimeout(() => {
                window.location.href = target;
            }, 500); // Match this duration with the CSS animation-duration
        });
    });
});

