// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// <<<<<<< HEAD
//   server: {
//     allowedHosts: ['roundish-unspoiled-stack.ngrok-free.dev']
// =======

//   server:{
//     allowedHosts:['unhitched-removable-await.ngrok-free.dev']
// >>>>>>> 11512f7176b0a66395f088da35b1d8356c7731b5
//   }
// })



import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'roundish-unspoiled-stack.ngrok-free.dev',
      'unhitched-removable-await.ngrok-free.dev'
    ]
  }
})