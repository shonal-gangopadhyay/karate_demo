// Make clicked menu item highlight as "active"
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
