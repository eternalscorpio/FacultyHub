document.addEventListener('DOMContentLoaded', function() {
    const filterSelects = document.querySelectorAll('.filter-group select');
    const selectedFiltersContainer = document.querySelector('.selected-filters');

    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                addFilterTag(this.value, this.closest('.filter-group').querySelector('h3').textContent);
                this.selectedIndex = 0; // Reset select to default option
            }
        });
    });

    function addFilterTag(value, filterType) {
        const filterTag = document.createElement('div');
        filterTag.className = 'filter-tag';
        filterTag.innerHTML = `
            <span>${filterType}: ${value}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        selectedFiltersContainer.appendChild(filterTag);
    }
});