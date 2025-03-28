// Collaboration Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const collabBtn = document.querySelector('.quick-actions .btn-outline');
    const collabModal = document.getElementById('collabModal');
    const closeCollabModal = collabModal.querySelector('.close-modal');
    const cancelCollabBtn = collabModal.querySelector('.cancel-btn');
    
    // Open modal when Collaborate button is clicked
    collabBtn.addEventListener('click', function() {
      collabModal.style.display = 'flex';
    });
    
    // Close modal when X button is clicked
    closeCollabModal.addEventListener('click', function() {
      collabModal.style.display = 'none';
    });
    
    // Close modal when Cancel button is clicked
    cancelCollabBtn.addEventListener('click', function() {
      collabModal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    collabModal.addEventListener('click', function(e) {
      if (e.target === collabModal) {
        collabModal.style.display = 'none';
      }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.collab-search input');
    const searchBtn = document.querySelector('.collab-search .search-btn');
    const searchResults = document.querySelector('.search-results');
    const resultsList = searchResults.querySelector('.collab-list');
    
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query) {
        // Simulate search results (in a real app, this would be an API call)
        simulateSearch(query);
        searchResults.style.display = 'block';
      }
    });
    
    // Simulate search results
    function simulateSearch(query) {
      // Clear previous results
      resultsList.innerHTML = '';
      
      // Mock data - in a real app, this would come from your backend
      const mockResults = [
        { id: 'res1', name: 'Dr. Sarah Johnson', email: 's.johnson@university.edu', type: 'Author' },
        { id: 'res2', name: 'Tech Research Institute', email: 'contact@tri.org', type: 'Institution' },
        { id: 'res3', name: 'Michael Chen', email: 'michael.chen@industry.com', type: 'Industry' },
        { id: 'res4', name: 'Biomedical Research Group', email: 'admin@biomed.org', type: 'Institution' }
      ];
      
      // Filter mock results based on query (simplified for demo)
      const filteredResults = mockResults.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.email.toLowerCase().includes(query.toLowerCase())
      );
      
      // Display results
      if (filteredResults.length === 0) {
        resultsList.innerHTML = '<div class="no-results">No matching results found</div>';
        return;
      }
      
      filteredResults.forEach(result => {
        const initials = result.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        const item = document.createElement('div');
        item.className = 'collab-item';
        item.innerHTML = `
          <div class="collab-info">
            <div class="collab-avatar">${initials.substring(0, 2)}</div>
            <div>
              <div class="collab-name">${result.name}</div>
              <div class="collab-email">${result.email}</div>
              <div class="collab-type">${result.type}</div>
            </div>
          </div>
          <div class="collab-action">
            <button class="btn-outline invite-btn" data-id="${result.id}">
              <i class="bi bi-plus"></i> Invite
            </button>
          </div>
        `;
        
        resultsList.appendChild(item);
      });
      
      // Add event listeners to invite buttons
      document.querySelectorAll('.invite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          // In a real app, you would send an invitation here
          alert(`Invitation sent to ${id}`);
          // Hide search results after invitation
          searchResults.style.display = 'none';
          searchInput.value = '';
        });
      });
    }
    
    // Save changes button
    const saveBtn = document.querySelector('.save-collab');
    saveBtn.addEventListener('click', function() {
      // Here you would save all the permission changes
      alert('Collaboration changes saved successfully!');
      collabModal.style.display = 'none';
    });
    
    // Remove collaborator buttons
    document.querySelectorAll('.remove-collab').forEach(btn => {
      btn.addEventListener('click', function() {
        if (confirm('Are you sure you want to remove this collaborator?')) {
          this.closest('.collab-item').remove();
        }
      });
    });
    
    // Cancel invitation buttons
    document.querySelectorAll('.cancel-invite').forEach(btn => {
      btn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel this invitation?')) {
          this.closest('.collab-item').remove();
        }
      });
    });
  });