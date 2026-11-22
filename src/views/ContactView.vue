<script setup>
import { computed } from 'vue'
import { siteConfig } from '../config/site.js'
import { buatUrlWhatsApp, formatNomorWhatsApp } from '../utils/helpers.js'

const nomorTampil = computed(() => formatNomorWhatsApp())
const waUrl = computed(() => buatUrlWhatsApp(siteConfig.pesanWhatsAppDefault))
</script>

<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="eyebrow">Kontak</span>
        <h1>Mari berbicara tentang desainmu</h1>
        <p>
          Punya pertanyaan tentang produk, harga, atau ingin memesan desain custom?
          Hubungi kami langsung melalui WhatsApp.
        </p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container contact-layout">
        <div class="contact-card">
          <h2>Informasi kontak</h2>
          <ul class="contact-list">
            <li class="contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12.04 2C6.5 2 2.1 6.4 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22c5.54 0 10.04-4.4 10.04-9.93C22.09 6.4 17.58 2 12.04 2Zm5.87 14.03c-.25.69-1.45 1.35-2 1.4-.54.05-1.05.25-3.55-.74a12.7 12.7 0 0 1-4.6-3.67c-.34-.4-1.58-1.85-1.58-4.35 0-2.5 1.31-3.72 1.78-4.23.46-.51 1.01-.64 1.35-.64.33 0 .67 0 .96.02.31.01.72-.12 1.12.96.4.92 1.36 3.17 1.48 3.4.12.23.2.5.04.81-.16.31-.7 1.01-.97 1.31-.24.26-.48.58-.69.87-.23.31-.48.65-.2 1.15.27.5 1.22 2.01 2.63 3.25 1.81 1.61 3.34 2.11 3.82 2.35.48.24.76.2 1.04-.13.28-.32 1.18-1.38 1.5-1.85.31-.47.62-.39 1.04-.23.42.16 2.66 1.25 3.12 1.48.46.23.76.34.87.54.1.19.1 1.1-.15 1.79Z" />
                </svg>
              </span>
              <div>
                <span class="contact-label">WhatsApp</span>
                <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="contact-value">{{ nomorTampil }}</a>
              </div>
            </li>
            <li class="contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>
              <div>
                <span class="contact-label">Email</span>
                <a :href="`mailto:${siteConfig.email}`" class="contact-value">{{ siteConfig.email }}</a>
              </div>
            </li>
            <li class="contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span class="contact-label">Alamat</span>
                <span class="contact-value">{{ siteConfig.alamat }}</span>
              </div>
            </li>
            <li class="contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <span class="contact-label">Jam operasional</span>
                <span class="contact-value">{{ siteConfig.jamOperasional }}</span>
              </div>
            </li>
          </ul>

          <div class="contact-socials">
            <span>Ikuti kami:</span>
            <a v-if="siteConfig.mediaSosial.instagram" :href="siteConfig.mediaSosial.instagram" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a v-if="siteConfig.mediaSosial.facebook" :href="siteConfig.mediaSosial.facebook" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
            <a v-if="siteConfig.mediaSosial.tiktok" :href="siteConfig.mediaSosial.tiktok" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
          </div>
        </div>

        <div class="contact-cta">
          <div class="contact-cta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
              <path d="M12.04 2C6.5 2 2.1 6.4 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22c5.54 0 10.04-4.4 10.04-9.93C22.09 6.4 17.58 2 12.04 2Zm5.87 14.03c-.25.69-1.45 1.35-2 1.4-.54.05-1.05.25-3.55-.74a12.7 12.7 0 0 1-4.6-3.67c-.34-.4-1.58-1.85-1.58-4.35 0-2.5 1.31-3.72 1.78-4.23.46-.51 1.01-.64 1.35-.64.33 0 .67 0 .96.02.31.01.72-.12 1.12.96.4.92 1.36 3.17 1.48 3.4.12.23.2.5.04.81-.16.31-.7 1.01-.97 1.31-.24.26-.48.58-.69.87-.23.31-.48.65-.2 1.15.27.5 1.22 2.01 2.63 3.25 1.81 1.61 3.34 2.11 3.82 2.35.48.24.76.2 1.04-.13.28-.32 1.18-1.38 1.5-1.85.31-.47.62-.39 1.04-.23.42.16 2.66 1.25 3.12 1.48.46.23.76.34.87.54.1.19.1 1.1-.15 1.79Z" />
            </svg>
          </div>
          <h2>Chat langsung dengan kami</h2>
          <p>
            Ceritakan ide desain, jumlah pesanan, atau tanyakan harga. Kami akan merespons
            pesanmu secepatnya.
          </p>
          <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
            Hubungi via WhatsApp
          </a>
          <RouterLink to="/katalog" class="contact-cta-link">Atau lihat katalog produk dulu →</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
