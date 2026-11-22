# Gantungan Kunci Kreative — Website Profil & Katalog

Website profil usaha dan katalog produk gantungan kunci berbasis **Vue 3 + Vite**.
Bukan toko online: tidak ada keranjang, checkout, database, backend, CRUD, maupun login.
Semua pemesanan diarahkan ke WhatsApp.

## Teknologi

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Vue Router
- JavaScript, HTML5, CSS3
- JSON sebagai sumber data produk statis
- Vercel untuk deployment

## Struktur Folder

```text
src/
├── assets/
│   ├── images/          (cadangan aset lokal)
│   └── styles/
│       └── layout.css   (gaya komponen & halaman)
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── ProductCard.vue
│   ├── ProductGrid.vue
│   └── WhatsAppButton.vue
├── config/
│   └── site.js          (identitas usaha, WhatsApp, sosial media)
├── data/
│   └── products.json    (data katalog)
├── router/
│   └── index.js         (rute + SEO metadata)
├── utils/
│   └── helpers.js       (format Rupiah, URL WhatsApp)
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── CatalogView.vue
│   ├── ProductDetailView.vue
│   └── ContactView.vue
├── App.vue
├── main.js
└── style.css            (desain token & gaya dasar)
public/
├── favicon.svg
└── images/
    ├── hero.svg
    ├── about.svg
    └── products/        (gambar produk)
vercel.json
```

## Menjalankan Project

```bash
npm install
npm run dev        # server pengembangan
npm run build      # build produksi ke folder dist/
npm run preview    # pratinjau hasil build
```

## Halaman

| Rute | Halaman |
| --- | --- |
| `/` | Beranda (hero, produk unggulan, kategori, tentang, CTA) |
| `/profil` | Profil/sejarah usaha dan keunggulan |
| `/katalog` | Katalog semua produk |
| `/katalog/:kategori` | Katalog yang sudah difilter kategori |
| `/produk/:id` | Detail produk + pemesanan WhatsApp |
| `/kontak` | Informasi kontak dan WhatsApp |

## Menambahkan atau Mengubah Produk

Edit `src/data/products.json`:

```json
{
  "id": 7,
  "nama_produk": "Nama Produk",
  "kategori": "Akrilik",
  "harga": 15000,
  "deskripsi": "Deskripsi lengkap produk.",
  "gambar": "nama-file.svg",
  "variasi": ["Standard", "Custom"],
  "unggulan": false
}
```

- `id` harus unik.
- `harga` berupa angka tanpa titik (difomat otomatis menjadi `Rp15.000`).
- `gambar` adalah nama file di `public/images/products/`.
- `kategori` baru otomatis muncul pada filter katalog dan kartu kategori di beranda.
- `unggulan: true` menampilkan produk di bagian Produk Unggulan.
- Simpan file gambar baru ke `public/images/products/`, lalu jalankan build/deploy ulang.

Gambar bawaan berupa placeholder SVG agar mudah diganti dengan foto produk asli.
Cukup timpa file dengan nama yang sama atau ubah nilai `gambar` di JSON.

## Mengganti Nomor WhatsApp dan Identitas Usaha

Semua informasi ada di satu file: `src/config/site.js`.

```js
whatsappNumber: '6280000000000'
```

Gunakan format angka dengan kode negara **62** tanpa tanda `+` atau spasi.
Di file yang sama, ubah juga `namaUsaha`, `namaPanggilan`, `tagline`, `email`,
`alamat`, `jamOperasional`, `mediaSosial`, dan teks pesan default.

Ubah juga judul/deskripsi meta dan `og:url` di `index.html` sesuai domain produksi
(nilai bawaan `https://example.com/` adalah placeholder).

## Pesanan WhatsApp

Tombol "Pesan via WhatsApp" membuka `https://wa.me/<nomor>?text=<pesan>`.
Pesan otomatis berisi nama produk, variasi yang dipilih, dan harga dalam Rupiah.
Tidak ada keranjang belanja maupun pembayaran internal.

## Deployment ke Vercel

1. Inisialisasi/unggah project ke repository GitHub.
2. Di Vercel, pilih **Add New → Project** dan import repository tersebut.
3. Framework preset terdeteksi otomatis sebagai **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`
4. Klik **Deploy**.
5. `vercel.json` sudah berisi rewrite SPA agar rute seperti `/katalog/Akrilik`
   tidak menghasilkan 404 saat di-refresh.

Alternatif lewat CLI:

```bash
npm i -g vercel
vercel --prod
```

## Deployment / Update Produk

Perubahan produk langsung dari file JSON dan aset gambar, lalu:

```bash
git add .
git commit -m "Update katalog produk"
git push
```

Vercel akan melakukan deploy ulang otomatis dari GitHub.

## Pengujian yang Dilakukan

- Build produksi Vite berhasil.
- Seluruh rute dirender tanpa error JavaScript.
- Filter kategori berasal dari data JSON dan mengubah URL.
- Halaman detail menampilkan variasi dan pesan WhatsApp sesuai pilihan.
- Format harga Rupiah benar (`Rp15.000`).
- Semua aset gambar mengembalikan HTTP 200.
- Tidak ada horizontal overflow pada lebar 390px, 768px, dan 1440px.
- Menu navigasi seluler berfungsi (buka, pilih halaman, tutup otomatis).
