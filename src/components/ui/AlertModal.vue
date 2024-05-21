<template>

    <!-- Main modal -->
    <div id="default-modal" tabindex="-1" aria-hidden="true"
        class="  fixed top-0 right-0 left-0 bottom-0 z-50 flex bg-black/50 justify-center items-center w-full h-full">
        <div class="relative p-4 w-full max-w-xl">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow h-full  text-center py-10 px-20">
                <ExclamationTriangleIcon class="w-32 mx-auto text-red-400" />

                <p class="mb-8  font-semibold"> {{ message }}
                </p>

                <button @click="$emit('close')" class="button-primary px-12 inline-block">OK</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';
import { onMounted, onUnmounted } from 'vue';

defineProps({
    message: String,
})

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>

<style lang="scss" scoped></style>