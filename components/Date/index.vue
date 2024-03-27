<template>
  <section class="flex justify-center">
    <div>
      <h2 class="text-base md:text-xl xl:text-2xl">
        <span>
          {{ currentDate.getMonth() + 1}}\</span>
        <span>
          {{ currentDate.getDate() }}
        </span>  
       </h2>
    </div>
  </section>
</template>


<script setup>
import { useDate } from '~/composable/useDate';

const { currentDate, updateDate } = useDate();


</script>