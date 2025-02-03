<template>
    <div class="bg-[#f0f3f5]">
        <!-- navigation bar -->

        <NavBar :key="route.path" />

        <router-view></router-view>
        <!-- footer -->
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';

const route = useRoute()
</script>

<style lang="scss" scoped></style>