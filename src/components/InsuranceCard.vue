<script setup>

// props
defineProps({
    image: {
        type: String,
    },
    text: {
        type: String
    },
    link: {
        type: String
    },
})
</script>

<template>
    <div class="group border rounded p-5 w-80 hover:outline-1 hover:outline hover:outline-primary">
        <!-- icon image  -->
        <img :src="image" alt="" class="w-28 mx-auto grayscale-[70%] group-hover:grayscale-[10%] transition-all">
        <!-- text -->
        <h2 class="text-2xl font-bold my-5">{{ text }}</h2>
        <!-- button link -->
        <router-link :to="{ name: link }" class="button-primary text-center w-full ">Get Started</router-link>
    </div>
</template>