document.getElementById('formSiswa').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai dari form
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const jurusan = document.getElementById('jurusan').value;
    const nilai = parseFloat(document.getElementById('nilai').value);

    // Menentukan predikat
    let predikat;
    if (nilai >= 75) {
        predikat = "Lulus";
    } else {
        predikat = "Tidak Lulus";
    }

    // Menampilkan hasil
    document.getElementById('outputNama').innerText = `Nama: ${nama}`;
    document.getElementById('outputKelas').innerText = `Kelas: ${kelas}`;
    document.getElementById('outputJurusan').innerText = `Jurusan: ${jurusan}`;
    document.getElementById('outputNilai').innerText = `Nilai: ${nilai}`;
    document.getElementById('outputPredikat').innerText = `Predikat: ${predikat}`;

    // Menampilkan div hasil
    document.getElementById('hasil').style.display = 'block';
});
