<template>
    <section >
        <button @click="toggleOn" v-if="tab === 'on'" class='w-full text-base md:text-xl xl:text-2xl bg-white py-1 px-2 rounded-lg shadow-[2px_2px_3px_2px_rgba(0,0,0,0.4)] hover:shadow-[1px_1px_1px_1px_rgba(0,0,0,0.4)] active:shadow-none duration-200  '>
          On
        </button>

        <button v-else-if="tab === 'off'" @click="toggleOff"  class=' w-full text-base md:text-xl xl:text-2xl bg-red-600 py-1 px-2 rounded-lg shadow-[2px_2px_3px_2px_rgba(0,0,0,0.4)] hover:shadow-[1px_1px_1px_1px_rgba(0,0,0,0.4)] active:shadow-none duration-200  '>
          Off
        </button>
    </section>

</template>

<script setup> 
import { ref } from "vue";

// data
let tab = ref("on")

// functions 
const toggleOn = () => {
  tab.value = 'off'
}

const toggleOff = () => {
  tab.value = 'on'
}

</script>