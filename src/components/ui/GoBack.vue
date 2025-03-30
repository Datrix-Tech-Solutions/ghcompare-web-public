<template>
    <button
        class="w-fit transition-colors hover:text-gray-800 hover:bg-gray-300 flex gap-1 items-center justify-center text-gray-500 font-semibold text-sm rounded-md bg-gray-200 px-2 py-1 cursor-pointer"
        @click="navigate">
        <ArrowLeftIcon class="w-4 h-4" /> <span>Back</span>
    </button>
</template>

<script setup>

import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

const { link } = defineProps({
    link: Object
})

const router = useRouter()

function navigate() {
    link ? router.push(link) : router.back()
}

</script>

<style lang="scss" scoped></style>