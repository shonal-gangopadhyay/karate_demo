document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-link');
    const contentArea = document.getElementById('content-area');

    const contentMap = {
        profile: `
        <h2>Update Profile</h2>
        <p>Here you can update your personal information and account settings.</p>
      `,
        contracts: `
        <h2>View Contracts</h2>
        <p>Here you can view and manage your signed school contracts.</p>
      `,
        payment: `
        <h2>Payment Information</h2>
        <p>Manage your billing information, invoices, and payment methods here.</p>
      `,
        calendar: `
        <h2>School Calendar</h2>
        <p>View upcoming events, holidays, and important school dates.</p>
        <iframe src="https://calendar.google.com/calendar/embed?src=1950c5c6d1ce93d8e5c8c7499234c1ed3b96077ba8f5dba99add8eb6c405f7cb%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      `,
        forum: `
        <h2>Parent Forum</h2>
        <p>Participate in discussions with other parents and school staff.</p>
      `
    };

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Load corresponding content
            const selected = link.getAttribute('data-content');
            contentArea.innerHTML = contentMap[selected] || `<h2>Welcome!</h2><p>Select an option from the menu.</p>`;
        });
    });
});
