 document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      icon.classList.toggle('far'); // outline heart
      icon.classList.toggle('fas'); // solid heart
    });
  });
