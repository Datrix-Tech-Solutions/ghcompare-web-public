<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-[#f0f3f5]">
    <!-- navigation bar -->
    <NavBar />

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
select {
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
</style>
