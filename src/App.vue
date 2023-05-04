<template>
  <div>
    <app-header></app-header>
    <app-friends></app-friends>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Friends from './components/Friends.vue';

import "babel-polyfill";

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-friends': Friends
  },
  data() {
    return {
      
    }
  }
  
}

</script>

<style scoped></style>
