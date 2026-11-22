import { siteConfig } from '../config/site.js'

export function formatRupiah(nilai) {
  const angka = Number(nilai) || 0
  return `Rp${new Intl.NumberFormat('id-ID').format(angka)}`
}

export function formatNomorWhatsApp(nomor = siteConfig.whatsappNumber) {
  const digits = String(nomor).replace(/\D/g, '')
  if (!digits.startsWith('62')) return digits
  const rest = digits.slice(2)
  return `+62 ${rest.replace(/(\d{3})(\d{4})(\d{3,4})/, '$1-$2-$3')}`
}

export function buatUrlWhatsApp(pesan, nomor = siteConfig.whatsappNumber) {
  const teks = pesan || siteConfig.pesanWhatsAppDefault
  return `https://wa.me/${String(nomor).replace(/\D/g, '')}?text=${encodeURIComponent(teks)}`
}

export function pesanPesanProduk(produk, variasi = '') {
  const pilihan = variasi ? ` (${variasi})` : ''
  return `Halo, saya tertarik dengan produk ${produk.nama_produk}${pilihan} dengan harga ${formatRupiah(produk.harga)}. Apakah produk ini masih tersedia?`
}

export function gambarProduk(produk) {
  return `/images/products/${produk.gambar}`
}
