document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const newPaperBtn = document.querySelector('.quick-actions .btn-primary');
    const modalOverlay = document.getElementById('paperModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const paperForm = document.getElementById('paperForm');
    
    // Open modal when New Paper button is clicked
    newPaperBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'flex';
    });
    
    // Close modal when X button is clicked
    closeModalBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
    });
    
    // Close modal when Cancel button is clicked
    cancelBtn.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
    
    // Handle form submission
    paperForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(paperForm);
      
      // Here you would typically send the data to your server
      console.log('Form submitted with data:', {
        title: formData.get('paperTitle'),
        authors: formData.get('paperAuthors'),
        abstract: formData.get('paperAbstract'),
        keywords: formData.get('paperKeywords'),
        file: formData.get('paperFile')
      });
      
      // Close modal after submission
      modalOverlay.style.display = 'none';
      
      // Reset form
      paperForm.reset();
      
      // Show success message (you can customize this)
      alert('Paper submitted successfully!');
    });
  });