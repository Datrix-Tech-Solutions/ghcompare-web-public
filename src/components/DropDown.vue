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
                <router-link :to="{ name: link.soon ? '' : link.to, hash: link.soon ? '#' : '' }"
                    class="my-4 font-semibold text-gray-600 block hover:text-primary transition relative"
                    :class="{ 'hover:!text-gray-600 cursor-not-allowed': link.soon }">{{
                link.text }} <span v-if="link.soon"
                        class="text-white rounded-full bg-red-500 px-1 py-1 text-[8px] relative  -top-3 ">Coming
                        soon</span>
                </router-link>
            </template>
        </div>
    </div>
</template>