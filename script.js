// Dummy login - redirects to home page
function login() {
    window.location.href = "home.html";
}

// Load content dynamically
function loadContent(section) {
    const contentArea = document.getElementById('content-area');
    let content = '';

    switch (section) {
        case 'home':
            content = `
          <h2>Home</h2>
          <p>This is the home section. Welcome back!</p>
        `;
            break;
        case 'profile':
            content = `
          <h2>Profile</h2>
          <p>Your profile information would appear here.</p>
        `;
            break;
        case 'settings':
            content = `
          <h2>Settings</h2>
          <p>Customize your preferences here.</p>
        `;
            break;
        case 'about':
            content = `
          <h2>About</h2>
          <p>This project demonstrates dynamic loading with a sidebar menu.</p>
        `;
            break;
        default:
            content = `
          <h2>Welcome!</h2>
          <p>Select a menu item to see content.</p>
        `;
            break;
    }

    // Smoothly update content
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.innerHTML = content;
        contentArea.style.opacity = 1;
    }, 200);
}
