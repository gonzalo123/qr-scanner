import { ref } from 'vue'
import { defineStore } from 'pinia'


const qrStore = defineStore('qr', () => {
  const value  = ref('')

  return { value }
});



export default qrStore
