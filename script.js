document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen tombol dan pesan kejutan
    const button = document.getElementById('surpriseButton');
    const message = document.getElementById('surpriseMessage');

    // Tambahkan event listener untuk mendengarkan klik pada tombol
    button.addEventListener('click', function() {
        // Hapus kelas 'hidden' untuk menampilkan pesan
        // dan tambahkan kelas 'show' untuk efek transisi CSS
        message.classList.remove('hidden');
        
        // Timeout singkat agar transisi CSS berjalan setelah elemen ditampilkan
        setTimeout(() => {
            message.classList.add('show');
        }, 10); 
        
        // Opsional: Sembunyikan tombol setelah pesan muncul
        button.style.display = 'none';

        // Opsional: Ganti warna background body setelah kejutan
        document.body.style.background = 'linear-gradient(to right, #4facfe, #00f2fe)';
    });
});
