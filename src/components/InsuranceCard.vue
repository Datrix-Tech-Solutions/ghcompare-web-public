<script setup>
defineProps(['image', 'text'])
</script>

<template>
    <div class="border rounded p-5 w-80 hover:outline-1 hover:outline hover:outline-primary">
        <img :src="image" alt="" class="w-28 mx-auto grayscale-[70%]">
        <h2 class="text-2xl font-bold my-5">{{ text }}</h2>
        <a href="#" class="button-primary text-center w-full ">Get Started</a>
    </div>
</template>