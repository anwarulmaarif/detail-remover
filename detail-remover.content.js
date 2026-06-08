// ============================================================
//  detail-remover.content.js (Reactive + Layout Fix)
// ============================================================

(function detailRemover() {
    const WATERMARK_SELECTOR = '[id*="watermark"]';
    const MAIN_BODY_SELECTOR = '#mainbodydiv.modal-content.wh-bg.android-device-layout';

    // Fungsi utama untuk memanipulasi DOM
    function applyDOMFixes() {
        // 1. Hapus elemen watermark jika ditemukan
        const targets = document.querySelectorAll(WATERMARK_SELECTOR);
        if (targets.length > 0) {
            targets.forEach(el => {
                console.log(`[Detail Remover] Menghapus elemen: #${el.id}`);
                el.remove();
            });
        }

        // 2. Paksa ukuran spesifik pada mainbodydiv
        const mainBody = document.querySelector(MAIN_BODY_SELECTOR);
        if (mainBody) {
            // Kita cek dulu agar tidak terus-menerus menimpa style jika ukurannya sudah benar
            if (mainBody.style.width !== '363px' || mainBody.style.height !== '708px') {
                console.log("[Detail Remover] Menyesuaikan ukuran #mainbodydiv menjadi 363x708.");
                mainBody.style.width = '363px';
                mainBody.style.height = '708px';
            }
        }
    }

    // Jalankan sekali di awal saat halaman dimuat
    applyDOMFixes();

    // Pantau perubahan DOM menggunakan MutationObserver agar perubahan tetap bertahan
    const observer = new MutationObserver((mutations) => {
        applyDOMFixes();
    });

    // Mulai mengamati seluruh dokumen body dan sub-elemennya
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log("[Detail Remover] Observer aktif memantau watermark dan layout...");
})();