<template>
  <div class="page-container">
    <ScreenOffer />
    <ScreenShowcaseA />
    <ScreenShowcaseC />
    <ScreenShowcaseB />
    <FinalSection />
  </div>
</template>

<script setup>
import ScreenOffer from './screens/ScreenOffer.vue'
import ScreenShowcaseA from './screens/ScreenShowcaseA.vue'
import ScreenShowcaseB from './screens/ScreenShowcaseB.vue'
import ScreenShowcaseC from './screens/ScreenShowcaseC.vue'
import FinalSection from './screens/Final.vue'
</script>


<style scoped>

.page-container{


  margin-left: auto;
  margin-right: auto;

  padding: 0, 1rem;
  max-width: 600px;

  width: 100%;
  overflow-x: hidden;
}

@media (min-width: 768px){
  .page-container{
    max-width: 600px;
  }
}

@media (min-width: 1024px){
  .page-container{
    max-width: 600px;
  }
}

@media (min-width: 1280px){
  .page-container{
    max-width: 600px;
  }
}

</style>