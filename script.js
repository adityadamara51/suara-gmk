const form = document.getElementById("aspirasiForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const tombol = form.querySelector("button");
    tombol.innerHTML = "⏳ Mengirim...";
    tombol.disabled = true;

    const data = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        usulan_pengurus: form.usulan_pengurus.value,
        q4: form.q4.value,
        alasan_malas: form.alasan_malas.value,
        alasan_diam_pilihan: form.alasan_diam_pilihan.value,
        alasan_diam: form.alasan_diam.value,
        kategori: form.kategori.value,
        pesan: form.pesan.value
    };

    try {

        await fetch(
        "https://script.google.com/macros/s/AKfycbzz2XCgaHAC_Y65kjfwM-NFTsg0-DD7oqgQXsMd-_wB21AvfWBp_8vf_Fd7QDnIx3p4/exec",
        {
            method: "POST",
            body: JSON.stringify(data)
        });

        document.getElementById("hasil").innerHTML = `
            <div style="
            background:#d4edda;
            color:#155724;
            padding:15px;
            border-radius:10px;
            margin-top:20px;
            font-weight:bold;">
            ✅ Terima kasih, aspirasi Anda berhasil dikirim.
            </div>
        `;

        form.reset();

    } catch(error){

        document.getElementById("hasil").innerHTML = `
            <div style="
            background:#f8d7da;
            color:#721c24;
            padding:15px;
            border-radius:10px;
            margin-top:20px;
            font-weight:bold;">
            ❌ Gagal mengirim data.
            </div>
        `;
    }

    tombol.innerHTML = "🚀 KIRIM ASPIRASI";
    tombol.disabled = false;

});
