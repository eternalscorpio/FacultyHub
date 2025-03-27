document.addEventListener('DOMContentLoaded', function() {
    // Load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    document.head.appendChild(script);

    // Track if charts are already initialized
    let isChartInitialized = false;

    function hideAllSections() {
        const sections = document.querySelectorAll('.dashboard-main > section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    function renderCharts() {
        if (isChartInitialized) return;
        isChartInitialized = true;

        // Paper & Citations Chart
        const ctx1 = document.getElementById('papersCitationsChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: 'Papers Published',
                        data: [12, 19, 14, 23, 30, 35],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'
                    },
                    {
                        label: 'Citations',
                        data: [5, 15, 20, 40, 50, 60],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    }
                ]
            }
        });

        // Impact Factor Chart
        const ctx2 = document.getElementById('impactFactorChart').getContext('2d');
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [
                    {
                        label: 'Impact Factor over years',
                        data: [1.2, 1.5, 1.8, 2.1, 2.3, 2.5, 2.3, 2.1],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                        fill: true
                    }
                ]
            }
        });
    }

    function showSection(sectionId) {
        hideAllSections();
        const section = document.getElementById(`${sectionId}-section`);
        if (section) {
            section.classList.remove('hidden');
            if (sectionId === 'analytics') {
                renderCharts();
            }
        }
    }

    // Add event listeners for navigation
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.currentTarget.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Export the function
    window.showSection = showSection;
});
