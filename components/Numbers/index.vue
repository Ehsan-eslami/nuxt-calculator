<template>
  
  <button  class='w-full text-base md:text-xl xl:text-2xl bg-white py-1 px-2 rounded-lg shadow-[2px_2px_3px_2px_rgba(0,0,0,0.4)] hover:shadow-[1px_1px_1px_1px_rgba(0,0,0,0.4)] active:shadow-none duration-200  '>
    {{ number }}
  </button>  
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    number: String,
  })
</script>
