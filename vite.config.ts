import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TRAVEL',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src/',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename) => {
        filename = filename.split('/').slice(-1)[0].split('.')[0]
        filename = `${filename[0].toLowerCase()}${filename.slice(1)}`

        const lowerFilename = filename.toLowerCase()
        const lowerName = name.toLocaleLowerCase()
        if (lowerName.includes(lowerFilename)) return name
        if (lowerFilename === lowerName) return filename

        return `${filename}__${name}`
      },
    },
  },
})
