Persiapan
Pastikan Anda sudah menginstall Node.js, lalu jalankan perintah ini di terminal folder proyek Anda:

Bash
npm init -y
npm install express

Penjelasan Logika
daftarKata: Berisi array string yang semuanya memiliki panjang 5 huruf. Anda bisa menambahkannya sesuai keinginan.
Algoritma Fisher-Yates: Fungsi acakHuruf menggunakan logika pengacakan modern untuk memastikan setiap posisi huruf diacak secara adil.
Express Server: Kita menggunakan Express untuk mengirimkan tampilan HTML sederhana ke browser pengguna.\
Pengembangan Selanjutnya

Jika Anda ingin membuat ini menjadi aplikasi produksi yang lebih serius, Anda bisa:
Menggunakan Database: Simpan ribuan kata di MongoDB atau MySQL.
API Integration: Menggunakan API kamus bahasa Indonesia untuk mendapatkan kata-kata secara dinamis.
Frontend Framework: Menggunakan React atau Vue untuk tampilan yang lebih interaktif.
