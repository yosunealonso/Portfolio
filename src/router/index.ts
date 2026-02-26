import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";
import Works from "@/pages/works/Works.vue";
import About from "@/pages/about/About.vue";
import Contact from "@/pages/contact/Contact.vue";
import WorkDetail from '@/pages/works/WorkDetail.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/works/:id',
      name: 'work-detail',
      component: WorkDetail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})