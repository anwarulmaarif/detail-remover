// ============================================================
//  detail-remover.content.js (Reactive Version)
// ============================================================

(function detailRemover() {
    const SELECTOR = '[id*="watermark"]'; // Menggunakan *= agar lebih fleksibel mencari kata "watermark" di ID

    // Fungsi utama untuk menghapus element dengan ID yang mengandung "watermark"
    function removeWatermarks() {
        const targets = document.querySelectorAll(SELECTOR);
        if (targets.length > 0) {
            targets.forEach(el => {
                console.log(`[Detail Remover] Menghapus elemen: #${el.id}`);
                el.remove();
            });
        }
    }

    // 1. Jalankan sekali di awal load halaman web
    removeWatermarks();

    // 2. Pantau perubahan DOM menggunakan MutationObserver
    const observer = new MutationObserver((mutations) => {
        // Jika ada perubahan pada struktur node, jalankan fungsi hapus
        removeWatermarks();
    });

    // Mulai mengamati seluruh dokumen
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log("[Detail Remover] Observer aktif memantau watermark...");
})();