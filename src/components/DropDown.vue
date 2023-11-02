<script setup>
const props = defineProps({
    links: {
        type: Array,
    }
})
</script>

<template>
    <div class=" w-max">
        <div class="w-full h-3"></div>
        <div class="w-full px-4 pr-8 glass">
            <template class="links" v-for="(link, index) in links" :key="index">
                <router-link :to="{ name: link.to }"
                    class="my-4 font-semibold text-gray-600 block hover:text-primary transition">{{
                        link.text }}
                </router-link>
            </template>
        </div>
    </div>
</template>