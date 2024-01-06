<script setup lang="ts">
import { QrcodeStream } from "vue-qrcode-reader";
import qrStore from "@/stores/qr";

const store = qrStore()

function onDetect(data: any | undefined): void {
  store.value = data[0].rawValue;
}

</script>

<template>
<QrcodeStream @detect="onDetect"></QrcodeStream>
  {{store?.value}}
</template>

<style scoped>

</style>
