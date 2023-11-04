<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="bg-[#f0f3f5]">
    <!-- navigation bar -->
    <NavBar :key="route.path" />

    <router-view></router-view>

    <!-- footer -->
    <Footer />
  </div>
</template>

<style>
:root {
  --primary-color: #2490dc;
  --primary-darker: #14467b;
}

html {
  background: #f0f3f5;
}

input,
select,
textarea {
  background: transparent;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 12px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input:focus,
select:focus {
  outline: 2px solid var(--primary-color)
}

.glass {
  /* From https://css.glass */
  background: #f4f7f969;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(100, 92, 92, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #cdd5d791;
}

.scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #ccc;
}
</style>
