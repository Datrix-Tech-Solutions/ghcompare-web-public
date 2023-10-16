<script setup></script>

<template>
    <div class=" rounded p-3 w-full glass text-sm">
        <slot></slot>
    </div>
</template>

<style scoped>
.glass {
    /* From https://css.glass */
    background: rgba(244, 247, 249, 0.41);
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(100, 92, 92, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(205, 213, 215, 0.57);
}
</style>