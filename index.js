
  const modal = document.getElementById('requestDishModal');
  const openBtn = document.querySelector('.request-dish-button');
  const closeBtn = document.querySelector('.close-modal');
  const cancelBtn = document.querySelector('.cancel-button');
  const form = document.getElementById('requestDishForm');

  // Open the modal
  openBtn.addEventListener('click', function () {
    modal.classList.add('show');
  });

  // Close modal on 'X' click
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
  });

  // Close modal on 'Cancel' button
  cancelBtn.addEventListener('click', function () {
    modal.classList.remove('show');
  });

  // Close modal on form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Dish request submitted!');
    modal.classList.remove('show');
    form.reset();
  });

  // Optional: Close if clicking outside modal content
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
