// === Toggle class active untuk hamburger menu ===
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
});

// === Fungsi bantu untuk menyimpan data ke localStorage ===
function simpanKeKeranjang(data) {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.push(data);
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert(`${data.produk} telah ditambahkan ke keranjang.`);
}

// === Event listener untuk semua tombol checkout (kecuali keranjang) ===
document.querySelectorAll('.produk-card-btn:not(.keranjang-btn)').forEach(button => {
  button.addEventListener('click', function () {
    const produk = this.getAttribute('data-produk');
    const bahan = this.getAttribute('data-bahan');
    const stok = this.getAttribute('data-stok');

    // Simpan ke cookie
    const checkoutData = { produk, bahan, stok };
    document.cookie = `checkout=${JSON.stringify(checkoutData)}; path=/`;

    // Cetak struk (bisa diganti pakai modal)
    alert(`Checkout:\nNama: ${produk}\nBahan: ${bahan}\nStok: ${stok}`);
  });
});

// === Event listener untuk tombol keranjang ===
document.querySelectorAll('.keranjang-btn').forEach(button => {
  button.addEventListener('click', function () {
    const produk = this.getAttribute('data-produk');
    const bahan = this.getAttribute('data-bahan');
    const stok = this.getAttribute('data-stok');
    const item = { produk, bahan, stok };

    simpanKeKeranjang(item);

    // Tambah jumlah keranjang (jika ada elemen untuk menampilkan)
    const keranjangCount = document.querySelector('#keranjang-count'); // Pastikan ID ini ada di HTML
    if (keranjangCount) {
      let jumlahKeranjang = parseInt(keranjangCount.textContent) || 0;
      jumlahKeranjang++;
      keranjangCount.textContent = jumlahKeranjang;
    }
  });
});
const checkoutData = {
  produk: nama,
  bahan: bahan,
  stok: stok
};

// === Event listener untuk semua tombol checkout (kecuali keranjang) ===
document.querySelectorAll('.produk-card-btn:not(.keranjang-btn)').forEach(button => {
  button.addEventListener('click', function () {
    const produk = this.getAttribute('data-produk');
    const bahan = this.getAttribute('data-bahan');
    const stok = this.getAttribute('data-stok');

    // Simpan ke cookie
    const checkoutData = { produk, bahan, stok };
    document.cookie = `checkout=${JSON.stringify(checkoutData)}; path=/`;

    // Cetak struk dengan window popup dan print
    const strukWindow = window.open('', '_blank', 'width=600,height=400');
    strukWindow.document.write(`
      <html>
      <head>
        <title>Struk Checkout</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { color: #e60000; }
          .struk { border: 1px solid #ccc; padding: 15px; border-radius: 10px; }
          .struk p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h2>Struk Checkout - Autopartsid</h2>
        <div class="struk">
          <p><strong>Produk:</strong> ${produk}</p>
          <p><strong>Bahan:</strong> ${bahan}</p>
          <p><strong>Stok:</strong> ${stok}</p>
          <p><strong>Tanggal:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <script>
          window.print();
        </script>
      </body>
      </html>
    `);
    strukWindow.document.close();
  });
});

let jumlahKeranjang = 0;
const keranjangCount = document.getElementById("keranjang-count");

document.querySelectorAll(".keranjang-btn").forEach(button => {
  button.addEventListener("click", function () {
    jumlahKeranjang++;
    keranjangCount.textContent = jumlahKeranjang;
  });
});





  
