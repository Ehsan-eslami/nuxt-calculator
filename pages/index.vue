<template>
  <section class=" h-screen w-screen overflow-hidden">
    <main class=" bg-slate-500  py-5 px-4 rounded-xl w-5/6 md:w-[400px] xl:w-[600px]">
      <div class="col-span-4" >
        <!-- display section -->
        <div class="flex justify-center">
          
          <Display class="w-4/5 mr-2"/>
          
          <div class="w-1/5  ">
            <Time />
            <Date />
          </div>

        </div>
      </div>
      <div class="grid grid-cols-4 gap-3 mt-3">
        <On-off />
        <On-off />
        <On-off />
        <On-off />
        <Numbers number="7" />
        <Numbers number="8" />
        <Numbers number="9" />
        <Numbers number="." />
        <Numbers number="4" />
        <Numbers number="5" />
        <Numbers number="6" />
        <Numbers number="." />
        <Numbers number="1" />
      <Numbers number="2" />
      <Numbers number="3" />
      <Numbers number="=" />
    </div>
      
      

    </main>
  </section>
</template>

<script setup>

</script>



<style scoped>
 main{
  position: absolute; 
  top: 50%;
  left: 50%;
  transform:  translate(-50%, -50%);
}
</style>