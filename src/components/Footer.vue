<script setup>
import { computed } from 'vue'
import { siteConfig } from '../config/site.js'
import { buatUrlWhatsApp, formatNomorWhatsApp } from '../utils/helpers.js'

const nomorTampil = computed(() => formatNomorWhatsApp())
const waUrl = computed(() => buatUrlWhatsApp(siteConfig.pesanWhatsAppDefault))
const tahun = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <RouterLink to="/" class="footer-logo">
          <span class="footer-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="8" r="4" />
              <path d="m11 11 8 8-2.5 2.5L8.5 13.5" />
            </svg>
          </span>
          {{ siteConfig.namaUsaha }}
        </RouterLink>
        <p>{{ siteConfig.deskripsiSingkat }}</p>
        <div class="footer-socials">
          <a v-if="siteConfig.mediaSosial.instagram" :href="siteConfig.mediaSosial.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a v-if="siteConfig.mediaSosial.facebook" :href="siteConfig.mediaSosial.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a v-if="siteConfig.mediaSosial.tiktok" :href="siteConfig.mediaSosial.tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
        </div>
      </div>

      <div class="footer-col">
        <h3>Navigasi</h3>
        <ul>
          <li><RouterLink to="/">Beranda</RouterLink></li>
          <li><RouterLink to="/profil">Profil Usaha</RouterLink></li>
          <li><RouterLink to="/katalog">Katalog Produk</RouterLink></li>
          <li><RouterLink to="/kontak">Kontak</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Kontak</h3>
        <ul class="footer-contact-list">
          <li>
            <a :href="waUrl" target="_blank" rel="noopener noreferrer">{{ nomorTampil }}</a>
          </li>
          <li>
            <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>
          </li>
          <li>{{ siteConfig.alamat }}</li>
        </ul>
      </div>

      <div class="footer-col footer-cta">
        <h3>Ingin memesan?</h3>
        <p>Chat kami sekarang untuk desain custom dan informasi harga.</p>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.5 2 2.1 6.4 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.54 0 10.04-4.4 10.04-9.93C22.09 6.4 17.58 2 12.04 2Zm5.87 14.03c-.25.69-1.45 1.35-2 1.4-.54.05-1.05.25-3.55-.74a12.7 12.7 0 0 1-4.6-3.67c-.34-.4-1.58-1.85-1.58-4.35 0-2.5 1.31-3.72 1.78-4.23.46-.51 1.01-.64 1.35-.64.33 0 .67 0 .96.02.31.01.72-.12 1.12.96.4.92 1.36 3.17 1.48 3.4.12.23.2.5.04.81-.16.31-.7 1.01-.97 1.31-.24.26-.48.58-.69.87-.23.31-.48.65-.2 1.15.27.5 1.22 2.01 2.63 3.25 1.81 1.61 3.34 2.11 3.82 2.35.48.24.76.2 1.04-.13.28-.32 1.18-1.38 1.5-1.85.31-.47.62-.39 1.04-.23.42.16 2.66 1.25 3.12 1.48.46.23.76.34.87.54.1.19.1 1.1-.15 1.79Z" />
          </svg>
          Hubungi via WhatsApp
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>{{ siteConfig.copyright }}</p>
        <p>Dibuat dengan ketelitian untuk setiap detail.</p>
      </div>
    </div>
  </footer>
</template>
