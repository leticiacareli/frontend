<script setup>
import Humberger from '@/components/Humberger.vue';
import Header from '@/components/Header.vue';
import MenuSearch from '@/components/MenuSearch.vue';
import Footer from '@/components/Footer.vue';
import {RouterView} from 'vue-router';
</script>

<template>

  <!-- <div id="preloder">
    <div class="loader"></div>
  </div> -->

 <Humberger/>

 <Header></Header>

 <MenuSearch></MenuSearch>

 <RouterView></RouterView>

 <Footer></Footer>
  
</template>

<style>
  /* Css Styles */
  @import url('@/assets/css/bootstrap.min.css');
  @import url('@/assets/css/font-awesome.min.css');
  @import url('@/assets/css/elegant-icons.css');
  @import url('@/assets/css/nice-select.css');
  @import url('@/assets/css/jquery-ui.min.css');
  @import url('@/assets/css/owl.carousel.min.css');
  @import url('@/assets/css/slicknav.min.css');
  @import url('@/assets/css/style.css');
</style>
