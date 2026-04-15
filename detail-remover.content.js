// ============================================================
//  detail-remover.content.js
//  Detail Remover — Content Script
//  Removes all div elements whose id starts with "watermark"
// ============================================================

(function detailRemover() {
    const SELECTOR = 'div[id^="watermark"]';

    const targets = document.querySelectorAll(SELECTOR);

    if (targets.length === 0) {
        console.log("[Detail Remover] Tidak ada elemen yang cocok ditemukan.");
        return;
    }

    targets.forEach(el => {
        console.log(`[Detail Remover] Menghapus elemen: #${el.id}`);
        el.remove();
    });

    console.log(`[Detail Remover] Selesai — ${targets.length} elemen dihapus.`);
})();
