<template>
    <div class="max-width py-10 h-screen" v-if="transactionStore.loading">Loading...</div>
    <main class="max-width py-10" v-else>
        <h2 class="text-2xl font-bold ">Transaction: {{ transaction?.id }}</h2>
        <p class="">Status:
            <BadgeComponent v-if="transaction?.id" :status="transaction?.premium?.status" />
        </p>

        <!-- Details section -->
        <section class="pt-10">
            <div class=" gap-10 items-center mlg:flex-row flex-col-reverse">

                <!-- Form summary -->

                <div class=" w-full">
                    <FormSummary :form-data="formData" />
                </div>

            </div>
        </section>

        <h2 class="text-2xl font-bold my-10">Underwriting</h2>

        <div class="space-y-4">
            <div class="" v-for="underwriting in transaction?.premium?.underwriting" :key="underwriting.id">
                <UnderwritingInformation :underwriting="underwriting" />
            </div>
            <div v-if="transaction?.premium?.underwriting?.length === 0" class="">
                <p class="text-gray-500 mb-3">No underwriting data to display. Choose an institution and complete
                    underwriting.</p>

                <!-- institutions -->
                <div class="grid gap-5 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4">
                    <template v-for="(value, key) in transaction?.premium?.response" :key="key">
                        <PremiumCard v-if="key !== 'premiumId'" :premium="value" insurance-type="motor-insurance"
                            @paymentUrl="(url) => paymentLink = url" class="fl flex-gro]w flex-shrink" />
                    </template>
                </div>

            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import FormSummary from '../../components/motorinsurance/FormSummary.vue';
import { useTransactionStore } from '../../store/transaction';
import { useRoute } from 'vue-router';
import UnderwritingInformation from '../../components/user-account/UnderwritingInformation.vue';
import BadgeComponent from '../../components/ui/BadgeComponent.vue';
import PremiumCard from '../../components/PremiumCard.vue';

const transactionStore = useTransactionStore()
const transaction = ref({})
const formData = ref({ coverDetails: {}, vehicleDetails: {} })
const route = useRoute()


onMounted(async () => {
    transaction.value = (await transactionStore.getTransactionById(route.params?.id))[0]
    console.log(transaction.value)
    formData.value.coverDetails = { ...transaction.value.premium.request }
    formData.value.vehicleDetails = { ...transaction.value.premium.request }
    console.log(formData.value)

})
</script>

<style scoped></style>