function kirimData(event) {
  event.preventDefault(); // biar tidak reload

  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var angkatan = document.getElementById("angkatan").value;
  var bidang = document.querySelector("input[name=bidang]:checked"); 
  var tanggal = document.getElementById("tanggal").value; 
  var alamat = document.getElementById("alamat").value;

  // validasi semua kolom terisi
  if (!nama || !nim || !angkatan || !alamat || !bidang || !tanggal) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  // Pastikan bidang sudah dipilih
  if (!bidang) {
    alert("Mohon pilih bidang.");
    return;
  }

  