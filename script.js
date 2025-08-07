const backBtn = document.getElementById('back-btn');
const btnGroup = document.getElementById('btn-group');
const sections = document.querySelectorAll('.section');
const buttons = btnGroup.querySelectorAll('.btn');

function showSection(id, clickedBtn) {
  const isAlreadyActive = clickedBtn.classList.contains('active');

  // Reset all buttons and sections
  buttons.forEach(btn => btn.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));

  // Toggle logic
  if (isAlreadyActive) {
    // If already active, revert back
    backBtn.classList.remove('show');
    btnGroup.classList.remove('shrinking');
  } else {
    // Otherwise, show section and update UI
    backBtn.classList.add('show');
    btnGroup.classList.add('shrinking');
    clickedBtn.classList.add('active');

    // Show the selected section
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.add('active');
      }
    });
  }
}

function goBack() {
  backBtn.classList.remove('show');
  btnGroup.classList.remove('shrinking');
  buttons.forEach(btn => btn.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));
}
