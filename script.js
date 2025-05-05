document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu-link');
  const contentArea = document.getElementById('content-area');

  const contentMap = {
    profile: `<h2>Update Profile</h2><p>Update your personal info here.</p>`,
    contracts: `<h2>View/Organize Contracts</h2><p>Manage all contracts here.</p>`,
    payment: `<h2>Payment Information</h2><p>Handle billing details.</p>`,
    calendar: `<h2>School Calendar</h2><iframe src="https://calendar.google.com/calendar/embed?src=1950c5c6d1ce93d8e5c8c7499234c1ed3b96077ba8f5dba99add8eb6c405f7cb%40group.calendar.google.com&ctz=America%2FChicago" style="border:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`,
    forum: `<h2>Parent Forum</h2><p>Join the discussion.</p>`,
    students: `<h2>All Students</h2><p>View and manage student roster.</p>`,
    announcement: `<h2>Send Announcement</h2><p>Send a message to all users.</p>`,
    curriculum: `
      <h2>Curriculum Website</h2>
      <p>
        Below is the curriculum site embedded directly. If you have trouble viewing it, 
        <a href="https://woodburynkstudent.com/" target="_blank" style="color: white; text-decoration: underline;">
          click here to open it in a new tab
        </a> (password: nkendurance).
      </p>
      <iframe src="https://woodburynkstudent.com/" width="100%" height="600" style="border:none; border-radius: 0.5rem;"></iframe>
    `
  };

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const selected = link.getAttribute('data-content');
      contentArea.innerHTML = contentMap[selected] || `<h2>Welcome!</h2><p>Select an option from the menu.</p>`;
    });
  });
});
