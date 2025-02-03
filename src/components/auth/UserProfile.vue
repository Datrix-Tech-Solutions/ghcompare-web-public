<template>
    <!-- Login and sign up -->
    <div class="flex gap-1">
        <router-link :to="{ name: 'Login' }">
            <Button>Login</Button>
        </router-link>
    </div>
</template>

<script setup>
import Button from '../ui/Button.vue'
</script>

<style lang="scss" scoped></style>