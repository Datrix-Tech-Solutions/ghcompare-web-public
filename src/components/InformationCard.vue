<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    text: {
        type: String,
    }
})
</script>

<template>
    <div class=" rounded p-4 w-72 glass hover:bg-gray-200 transition-all group">
        <img :src="image" :alt="title" class="w w-20 mx-auto group-hover:-translate-y-1 transition">
        <h4 class="text-2xl my-3 text-primary">{{ title }}</h4>
        <p class="text-gray-600">
            {{ text }}
        </p>
    </div>
</template>

<style scoped></style>