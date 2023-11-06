<script setup>
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';

defineProps(['text', 'left', 'transparent'])
</script>

<template>
    <button class="group" :class="[transparent ? 'button-transparent' : 'button-primary']">
        <ArrowLeftIcon v-if="left" class="w-5 h-5 inline  group-hover:-translate-x-2 transition" />
        {{ text }}
        <ArrowRightIcon v-if="!left" class="inline w-5 h-5 group-hover:translate-x-2 transition" />
    </button>
</template>


<style lang="scss" scoped></style>