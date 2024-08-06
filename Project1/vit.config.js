import react from "@vitejs/plugin-react"


export default defineConfig({
    server:{
        Proxy:{
            '/form':'http://localhost:5555'
        }
    },
  plugins: [react()],
  })