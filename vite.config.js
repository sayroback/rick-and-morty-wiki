import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  // OPCIONAL:
  // si deseamos modificar el directorio donde se hace el
  // build final, agregamos el siguiente objeto **build**
  build: {
    outDir: 'build'
  },
  plugins: [reactRefresh(), svgr()],
  server: {
    hmr: { overlay: false }
  }
})
