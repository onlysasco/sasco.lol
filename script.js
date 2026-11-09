const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // تفعيل وإلغاء كلاس light-mode لتبديل الألوان مثل موقع MoMo
    document.body.classList.toggle('light-mode');
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', event => {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) || 
        (event.ctrlKey && (event.key === 'u' || event.key === 'U'))
    ) {
        event.preventDefault();
    }
});