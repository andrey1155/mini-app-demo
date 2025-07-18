import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from 'fs'
import path from 'path'
import os from 'os'


function getSSLConfig() {
  const homedir = os.homedir()
  const sslDir = path.join(homedir, 'certificates')
  const sslProjectDir = path.join(sslDir, 'mini-app')
  

  const keyPath = path.join(sslProjectDir, 'privkey.pem')
  const certPath = path.join(sslProjectDir, 'cert.pem')


console.log("Looking for certificates");
console.log(keyPath);
console.log(certPath);

  if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    console.warn('SSL certificates not found. HTTPS will be disabled.')
    return false
  }

  return {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  }
}


// https://vite.dev/config/
export default defineConfig({
  server:{
    https: getSSLConfig()
  },
  plugins: [vue()],
})

