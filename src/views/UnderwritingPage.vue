<template>
    <div>
        <main class="max-width py-20">
            <!-- image -->
            <div class="" v-if="Object.keys(institutionData).length > 0">
                <img :src="institutionData?.institution[0]?.logo" alt="" class="max-w-[500px]">
                <h2 class="text-3xl font-bold text-center mb-10 text-primary mt-10"> {{
                institutionData?.institution[0]?.name
            }}
                    Underwriting Form</h2>

                <div class="max-w-[800px] mx-auto">
                    <UnderwritingForm @sendData="getData" />
                </div>
            </div>
        </main>
        <!-- {{ institutionData }} -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFormDataStore } from '../store/formData';
import { useRoute } from 'vue-router';
import UnderwritingForm from '../components/UnderwritingForm.vue';

const formDataStore = useFormDataStore()
const route = useRoute()
const institutionData = ref({})

onMounted(() => {
    let values = Object.values(formDataStore.motorInsurancePremium)
    institutionData.value = (values.find(item => { return item.institution[0].slug === route.params.institution }))
})
</script>

<style scoped></style>