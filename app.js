const express = require('express');
const app = express();
const port = 3000;

// Daftar kata bahasa Indonesia (5 huruf)
const daftarKata = [
    'GAJAH', 'LAMPU', 'PINTU', 'BUKUN', 'MAKAN', 
    'SURAT', 'POHON', 'GELAS', 'KAPAL', 'JARUM',
    'RUMAH', 'MOBIL', 'AWWAN', 'PASIR', 'DUNIA'
];

// Fungsi untuk mengacak urutan huruf dalam kata
function acakHuruf(kata) {
    let huruf = kata.split('');
    for (let i = huruf.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [huruf[i], huruf[j]] = [huruf[j], huruf[i]];
    }
    return huruf.join('');
}

app.get('/', (req, res) => {
    // Pilih kata acak dari daftar
    const kataAsli = daftarKata[Math.floor(Math.random() * daftarKata.length)];
    const kataAcak = acakHuruf(kataAsli);

    res.send(`
        <div style="text-align: center; font-family: sans-serif; margin-top: 50px;">
            <h1>Permainan Acak Kata</h1>
            <p>Susunlah kata 5 huruf di bawah ini:</p>
            <h2 style="letter-spacing: 10px; color: blue;">${kataAcak}</h2>
            <button onclick="location.reload()">Acak Lagi</button>
            <br><br>
            <details>
                <summary>Klik untuk lihat jawaban</summary>
                <p>Jawabannya adalah: <strong>${kataAsli}</strong></p>
            </details>
        </div>
    `);
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
