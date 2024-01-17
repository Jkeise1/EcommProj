document.addEventListener('DOMContentLoaded', function () {
    // Show the popup form when the page is loaded
    openPopupForm();
});

function openPopupForm() {
    var popupForm = document.getElementById('popupForm');
    popupForm.style.display = 'block';
}

function closePopupForm() {
    var popupForm = document.getElementById('popupForm');
    popupForm.style.display = 'none';
}