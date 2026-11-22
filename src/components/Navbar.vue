<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { siteConfig } from '../config/site.js'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profil' },
  { to: '/katalog', label: 'Katalog' },
  { to: '/kontak', label: 'Kontak' },
]

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <RouterLink to="/" class="brand" aria-label="Beranda Gantungan Kunci Kreative">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="40" height="40">
            <rect x="1" y="1" width="38" height="38" rx="12" fill="currentColor" />
            <circle cx="16" cy="15" r="6" fill="none" stroke="#fff" stroke-width="3" />
            <path
              d="M20.5 19.5 31 30l-4.5 4.5L16 24"
              fill="none"
              stroke="#fff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="brand-text">
          <strong>{{ siteConfig.namaUsaha }}</strong>
          <small>{{ siteConfig.tagline }}</small>
        </span>
      </RouterLink>

      <nav class="navbar-nav" aria-label="Navigasi utama">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="navbar-actions">
        <RouterLink to="/katalog" class="btn btn-primary navbar-cta">
          Lihat Katalog
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </RouterLink>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Buka menu navigasi"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span :class="{ 'is-open': isMenuOpen }"></span>
          <span :class="{ 'is-open': isMenuOpen }"></span>
          <span :class="{ 'is-open': isMenuOpen }"></span>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="isMenuOpen" class="mobile-nav" aria-label="Navigasi seluler">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to">
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/katalog" class="btn btn-primary">Lihat Katalog</RouterLink>
      </nav>
    </Transition>
  </header>
</template>
