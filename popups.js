// 弹出层控制
function togglePopup(id) {
    const popup = document.getElementById(id);
    popup.classList.toggle('active');
    document.body.style.overflow = popup.classList.contains('active') ? 'hidden' : '';
}

// 点击弹出层外部关闭
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', function(e) {
        if (e.target === this) {
            togglePopup(this.id);
        }
    });
});

// ESC键关闭弹出层
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup.active').forEach(popup => {
            togglePopup(popup.id);
        });
    }
}); 