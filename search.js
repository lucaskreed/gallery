document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const stickyNotes = document.querySelectorAll('.sticky-note');
  
    stickyNotes.forEach(note => {
      const projectTitle = note.getAttribute('data-project').toLowerCase();
      
      if (projectTitle.includes(searchTerm)) {
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    });
  });
