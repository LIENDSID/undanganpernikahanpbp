
// Fungsi membuka undangan
function bukaUndangan() {
    document.getElementById("pembuka").style.display = "none";
    document.getElementById("undangan").style.display = "block";

    window.scrollTo(0, 0);
}

// Tanggal dan waktu acara
const tanggalAcara = new Date(
    "2026-11-21T10:00:00+07:00"
).getTime();

// Fungsi hitung mundur
function hitungMundur() {
    const sekarang = new Date().getTime();
    const selisih = tanggalAcara - sekarang;

    if (selisih <= 0) {
        document.getElementById("hari").innerText = "00";
        document.getElementById("jam").innerText = "00";
        document.getElementById("menit").innerText = "00";
        document.getElementById("detik").innerText = "00";
        return;
    }

    const hari = Math.floor(
        selisih / (1000 * 60 * 60 * 24)
    );

    const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const menit = Math.floor(
        (selisih % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const detik = Math.floor(
        (selisih % (1000 * 60)) / 1000
    );

    document.getElementById("hari").innerText = hari;
    document.getElementById("jam").innerText = jam;
    document.getElementById("menit").innerText = menit;
    document.getElementById("detik").innerText = detik;
}

// Jalankan countdown setiap detik
hitungMundur();
setInterval(hitungMundur, 1000);


