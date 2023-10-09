<script setup>
defineProps(['image', 'text', 'link'])
</script>

<template>
    <div class="group border rounded p-5 w-80 hover:outline-1 hover:outline hover:outline-primary">
        <img :src="image" alt="" class="w-28 mx-auto grayscale-[70%] group-hover:grayscale-[10%] transition-all">
        <h2 class="text-2xl font-bold my-5">{{ text }}</h2>
        <router-link :to="{ name: link }" class="button-primary text-center w-full ">Get Started</router-link>
    </div>
</template>