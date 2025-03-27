document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('.dashboard-main > section');
    const rightSidebar = document.querySelector('.right-sidebar');
    const dashboardGrids = document.querySelectorAll('.dashboard-grid, .dashboard-grid-2, .dashboard-grid-3');
    const dashboardHeader = document.querySelector('.dashboard-header');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => section.classList.add('hidden'));
        dashboardGrids.forEach(grid => grid.classList.add('hidden'));
        dashboardHeader.classList.add('hidden');
    }
    
    // Function to show specific section
    function showSection(sectionId) {
        hideAllSections();
        
        // Special handling for overview section which shows dashboard grids
        if (sectionId === 'overview') {
            rightSidebar.classList.remove('hidden');
            dashboardGrids.forEach(grid => grid.classList.remove('hidden'));
            dashboardHeader.classList.remove('hidden');
            return;
        }
        
        // For all other sections
        const section = document.querySelector(`#${sectionId}-section`);
        if (section) {
            section.classList.remove('hidden');
            // Hide right sidebar for all sections except overview
            if (sectionId !== 'overview') {
                rightSidebar.classList.add('hidden');
            }
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