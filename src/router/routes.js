
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/how', component: () => import('pages/HowItWorks.vue') },
      { path: '/arduino', component: () => import('pages/Arduino.vue') },
      { path: '/backend', component: () => import('pages/Backend.vue') },
      { path: '/frontend', component: () => import('pages/Frontend.vue') },
      { path: '/buy', component: () => import('pages/ToBuy.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
