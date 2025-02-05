<template>

    <button class="group button-primary flex justify-center items-center"
        :class="[transparent ? 'button-transparent' : 'button-primary']" :disabled="disabled || loading" :type="type">
        <div v-if="loading" class="h-4 flex justify-center items-center">
            <Loader />
        </div>
        <div v-else class="h-4">
            <slot></slot>
        </div>
    </button>
</template>

<script setup>
import Loader from './Loader.vue'
const { loading, disabled, type, transparent } = defineProps({
    loading: Boolean,
    disabled: Boolean,
    type: String,
    transparent: Boolean
})
</script>

<style scoped></style>