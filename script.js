
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

/**
 * Memeriksa apakah seluruh kolom formulir sudah diisi.
 *
 * @param {string} nama - Nama lengkap peserta.
 * @param {string} email - Alamat email peserta.
 * @param {string} telepon - Nomor telepon peserta.
 * @returns {boolean} True jika semua kolom terisi, false jika ada yang kosong.
 */
function validateForm(nama, email, telepon) {
  if (nama === "" || email === "" || telepon === "") {
    return false;
  }

  return true;
}

/**
 * Menampilkan pesan hasil pendaftaran pada halaman.
 *
 * @param {string} text - Isi pesan yang akan ditampilkan.
 * @param {string} color - Warna teks pesan.
 * @returns {void} Tidak mengembalikan nilai.
 */
function showMessage(text, color) {
  message.innerHTML = text;
  message.style.color = color;
}

/**
 * Memproses pengiriman formulir pendaftaran.
 *
 * @param {Event} event - Event saat formulir dikirim.
 * @returns {void} Tidak mengembalikan nilai.
 */

 function submitForm(event) {
    event.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
  
    if (validateForm(nama, email, telepon)) {
      showMessage("Pendaftaran berhasil!", "green");
    } else {
      showMessage("Semua data wajib diisi!", "red");
    }
  }

form.addEventListener("submit", submitForm);
