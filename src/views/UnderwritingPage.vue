<template>
    <div>
        {{ formDataStore.motorInsurancePremium }}
    </div>
</template>

<script setup>
import { useFormDataStore } from '../store/formData';

const formDataStore = useFormDataStore()
</script>

<style scoped></style>