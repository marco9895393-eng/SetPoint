// Serve pra abrir o menu
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloqueia rolagem
}

// Serve pra fechar o menu lateral
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Libera rolagem
}

// Fecha o menu ao pressionar a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideSidebar();
    }
});
