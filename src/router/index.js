import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Gantungan Kunci Kreative — Gantungan Kunci Unik & Custom',
      description:
        'Profil dan katalog gantungan kunci kreatif dengan berbagai bahan dan desain custom. Pesan langsung via WhatsApp.',
    },
  },
  {
    path: '/profil',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Profil Usaha — Gantungan Kunci Kreative',
      description:
        'Kenali sejarah, latar belakang, dan keunggulan Gantungan Kunci Kreative.',
    },
  },
  {
    path: '/katalog',
    name: 'catalog',
    component: CatalogView,
    meta: {
      title: 'Katalog Produk — Gantungan Kunci Kreative',
      description:
        'Jelajahi katalog gantungan kunci akrilik, PVC, logam, kayu, kulit, dan desain custom.',
    },
  },
  {
    path: '/katalog/:kategori',
    name: 'catalog-category',
    component: CatalogView,
    meta: {
      title: 'Katalog Produk — Gantungan Kunci Kreative',
      description: 'Filter katalog gantungan kunci berdasarkan kategori pilihan Anda.',
    },
  },
  {
    path: '/produk/:id',
    name: 'product-detail',
    component: ProductDetailView,
    meta: {
      title: 'Detail Produk — Gantungan Kunci Kreative',
      description: 'Lihat detail, variasi, dan harga gantungan kunci pilihan Anda.',
    },
  },
  {
    path: '/kontak',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Kontak — Gantungan Kunci Kreative',
      description:
        'Hubungi Gantungan Kunci Kreative melalui WhatsApp untuk pemesanan dan desain custom.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title || 'Gantungan Kunci Kreative'
  const description = to.meta.description || ''
  document.title = title

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) metaDescription.setAttribute('content', description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', description)
})

export default router
