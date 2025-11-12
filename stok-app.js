new Vue({
  el: "#app",
  data: {
    stok: DATA.stok, // ambil data dari dataBahanAjar.js
    form: { kode: "", judul: "", kategori: "", qty: 0, safety: 0 }
  },
  methods: {
    tambahData() {
      if (!this.form.kode || !this.form.judul) {
        alert("Kode dan Judul wajib diisi!");
        return;
      }

      // Hilangkan spasi di awal/akhir kode
      this.form.kode = this.form.kode.trim();

      // Cek apakah kode sudah ada
      const existing = this.stok.find(item => item.kode === this.form.kode);

      if (existing) {
        // Jika ada, tambahkan jumlahnya
        existing.qty += Number(this.form.qty);
        alert(`Stok untuk ${existing.judul} (${existing.kode}) diperbarui menjadi ${existing.qty}.`);
      } else {
        // Jika belum ada, buat data baru
        this.stok.push({
          kode: this.form.kode,
          judul: this.form.judul,
          kategori: this.form.kategori,
          qty: Number(this.form.qty),
          safety: Number(this.form.safety)
        });
        alert(`Buku baru "${this.form.judul}" berhasil ditambahkan!`);
      }

      // Reset form
      this.form = { kode: "", judul: "", kategori: "", qty: 0, safety: 0 };
    }
  }
});
