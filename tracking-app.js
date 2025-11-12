new Vue({
  el: "#trackApp",
  data: {
    tracking: DATA.tracking,
    form: { noDO: "", tanggal: "", penerima: "", status: "" }
  },
  methods: {
    tambahDO() {
      if (!this.form.noDO) return alert("Nomor DO wajib diisi!");
      this.tracking.push({ ...this.form });
      this.form = { noDO: "", tanggal: "", penerima: "", status: "" };
    }
  }
});
