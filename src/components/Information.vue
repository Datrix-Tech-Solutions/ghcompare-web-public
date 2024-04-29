<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const props = defineProps({
    linkName: {
        type: String,
        default: "Policies"
    },
    linkHash: {
        type: String,
        default: ""
    },
})

const showInfo = ref(false)
</script>

<template>
    <!-- Information on Vehicle use -->
    <div class="relative">
        <QuestionMarkCircleIcon class="w-6 h-6 text-primary cursor-pointer" @click="() => { showInfo = !showInfo }" />

        <!-- overlay z-10 for hiding vehicle use info card -->
        <div class="overlay z-10 fixed top-0 bottom-0 left-0 right-0" @click="() => { showInfo = false }"
            v-if="showInfo"></div>

        <!-- vehicle use information card -->
        <div class="absolute sm:w-80 w-[75vw] z-10 top-full right-0" v-if="showInfo">
            <div class=" rounded p-3 w-full glass text-sm">
                <slot></slot>
                <div class="text-right">
                    <router-link :to="{ name: props.linkName, hash: props.linkHash }"
                        class=" text-primary hover:underline">Learn
                        More</router-link>
                </div>
            </div>
        </div>
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