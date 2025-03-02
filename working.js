function addRecommendation() {
    // ... (rest of your addRecommendation function) ...

    // Show the modal
    document.getElementById('recommendationModal').style.display = "block";
    
}

function closeModal() {
    // Hide the modal
    document.getElementById('recommendationModal').style.display = "none";
}

// ... (rest of your existing JavaScript) ...
  
  // Scroll to top function (leave this as is)
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show/hide button based on scroll position (leave this as is)
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  };


   // Function to scroll to the top
   function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling animation
    });
  }

  // Show/hide button based on scroll position
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  };