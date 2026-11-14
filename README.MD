# Ruang Daftar - Form Pendaftaran

## Deskripsi
Ruang Daftar adalah aplikasi web sederhana berupa formulir pendaftaran peserta. Aplikasi ini dibuat sebagai proyek Modul 6 Junior Web Programming dengan fokus pada dokumentasi kode program dan debugging.

## Fitur
- Formulir input nama lengkap.
- Formulir input email.
- Formulir input nomor telepon.
- Validasi untuk memastikan seluruh kolom wajib diisi.
- Pesan berhasil atau gagal setelah formulir dikirim.

## Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

## Struktur Folder
```text
junior-web-programming-modul-6/
├── index.html
├── style.css
├── script.js
├── BUG-TRACKING.md
└── README.md
```

## Cara Menjalankan Aplikasi
1. Clone atau download repository ini.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Jalankan file `index.html` menggunakan ekstensi Live Server.
4. Aplikasi akan terbuka di browser.

## Dokumentasi Debugging

Debugging dilakukan menggunakan Chrome DevTools melalui fitur Console dan Sources.

Teknik yang digunakan:
- `console.log()` untuk memeriksa nilai variabel.
- `debugger` untuk menghentikan sementara eksekusi kode.
- Breakpoint pada tab Sources untuk memeriksa alur program.

Dua bug yang ditemukan:
1. Validasi formulir menggunakan operator logika yang tidak tepat.
2. Event listener menggunakan `click` sehingga fungsi berjalan ketika area formulir diklik.

Kedua bug diperbaiki dengan mengganti operator `&&` menjadi `||` dan event `click` menjadi `submit`.

## Dokumentasi Kode
Dokumentasi fungsi ditulis menggunakan format JSDoc, meliputi:
- `validateForm()` untuk memvalidasi data.
- `showMessage()` untuk menampilkan pesan.
- `submitForm()` untuk memproses pengiriman formulir.

## Dependencies
Aplikasi ini tidak menggunakan library eksternal atau dependencies tambahan. Seluruh fungsi dibuat menggunakan HTML, CSS, dan Vanilla JavaScript.