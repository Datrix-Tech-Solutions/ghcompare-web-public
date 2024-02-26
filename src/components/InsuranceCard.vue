<script setup>
import { getImageUrl } from '../utils/utils'
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
    soon: {
        type: Boolean
    }
})

</script>

<template>
    <div class="group border rounded p-5 v-width hover:outline-1 hover:outline hover:outline-primary mx-auto sm:mx-0">
        <!-- icon image  -->
        <img :src="getImageUrl(image)" alt=""
            class="w-28 mx-auto grayscale-[70%] group-hover:grayscale-[10%] transition-all">
        <!-- text -->
        <h2 class="text-2xl font-bold my-5">{{ text }}</h2>
        <!-- button link -->
        <router-link :to="{ name: soon ? '' : link, hash: soon ? '#' : '' }" class="button-primary text-center w-full"
            :class="{ 'bg-neutral-400 border-neutral-400 cursor-default hover:bg-neutral-400 hover:border-neutral-400': soon }">{{
                soon ? 'Coming Soon' : 'Get Started' }}</router-link>
    </div>
</template>

<style scoped>
.v-width {
    width: min(100%, 320px);
}
</style>