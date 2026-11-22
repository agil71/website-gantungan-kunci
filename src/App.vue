<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Lewati ke konten</a>
    <Navbar />
    <main id="main-content" class="site-main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>
