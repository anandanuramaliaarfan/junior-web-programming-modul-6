# Bug Tracking - Ruang Daftar

| No | Deskripsi Bug | Status | Solusi |
|---|---|---|---|
| 1 | Validasi hanya mendeteksi jika semua kolom kosong secara bersamaan. | Fixed | Mengganti operator && menjadi ||. |
| 2 | Fungsi submitForm berjalan ketika area form diklik, termasuk input. | Fixed | Mengganti event click menjadi submit. |

## Langkah Reproduksi Bug

### Bug 1 - Validasi Form
1. Isi hanya satu atau dua kolom.
2. Klik tombol Daftar Sekarang.
3. Sistem menampilkan Pendaftaran berhasil meskipun masih ada kolom kosong.

### Bug 2 - Event Listener
1. Refresh halaman.
2. Biarkan semua kolom kosong.
3. Klik area input Nama Lengkap.
4. Sistem langsung menampilkan pesan validasi tanpa menekan tombol.

## Hasil Investigasi
Kedua bug ditemukan melalui pengujian langsung pada browser menggunakan Chrome DevTools Console dan Sources.

Tidak ditemukan error runtime berwarna merah pada Console karena kedua bug merupakan kesalahan logika dan penggunaan event listener, bukan kesalahan sintaks.