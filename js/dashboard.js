document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('.dashboard-main > section');
    const rightSidebar = document.querySelector('.right-sidebar');
    const dashboardGrid = document.querySelectorAll('.dashboard-grid, .dashboard-grid-2, .dashboard-grid-3');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => section.classList.add('hidden'));
        dashboardGrid.forEach(grid => grid.classList.add('hidden'));
    }
    
    // Function to show specific section
    function showSection(sectionId) {
        hideAllSections();
        
        if (sectionId === 'settings') {
            document.querySelector('.settings-section').classList.remove('hidden');
            rightSidebar.classList.add('hidden');
        } else {
            rightSidebar.classList.remove('hidden');
            dashboardGrid.forEach(grid => grid.classList.remove('hidden'));
            const section = document.querySelector(`#${sectionId}`);
            if (section) section.classList.remove('hidden');
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Get section id from href
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Show overview section by default
    showSection('overview');
});