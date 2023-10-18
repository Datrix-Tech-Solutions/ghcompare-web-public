<script setup>
import dayjs from 'dayjs'
import { ref } from 'vue';
import { useFormDataStore } from '../../store/formData';

const store = useFormDataStore()

const edit = ref(false);
const formData = ref(store.homeInsuranceData.homeRisks[0])

function saveChanges() {
    edit.value = false
    formData.value.startDate = dayjs(formData.value.startDate).toISOString()
    formData.value.endDate = dayjs(formData.value.endDate).toISOString()
    store.homeInsuranceData.homeRisks[0] = formData.value
    console.log(store.homeInsuranceData)
}
</script>

<template>
    <div class="glass py-4 p-14 w-[600px]">
        <div class="flex justify-betweens items-center py-4">
            <div class="w-1/2">
                <img src="../../assets/partners/star_assurancee.png" alt="star assurance" class="w-[90%] mx-auto">
            </div>
            <div class="w-1/2 text-center">
                <p class="text-xl mb-2">Total premium payable</p>
                <p class="text-3xl text-primary font-bold">Gh&#8373;200</p>
            </div>
        </div>

        <hr>

        <form>
            <div class="pt-6">
                <div class="flex justify-between mb-5 items-center">
                    <p class="">Start date:</p>
                    <div class="">
                        <p v-if="!edit">{{ dayjs(formData.startDate).format(`DD, MMMM YYYY`) }}</p>
                        <input type="date" name="startdate" id="startdate" class="p-1" v-model="formData.startDate" v-else>
                    </div>
                </div>
                <div class="flex justify-between mb-5 items-center">
                    <p class="">End date:</p>
                    <div class="">
                        <p v-if="!edit">{{ dayjs(formData.endDate).format(`DD, MMMM YYYY`) }}</p>
                        <input type="date" name="enddate" id="enddate" class="p-1" v-model="formData.endDate" v-else>
                    </div>
                </div>
                <div class="flex justify-between mb-5 items-center">
                    <p class="">Sum Insured:</p>
                    <div class="">
                        <p v-if="!edit">Gh&#8373;{{ formData.sumInsured }}</p>
                        <div class="" v-else>
                            <span>Gh&#8373; </span>
                            <input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" name="suminsured"
                                v-model="formData.sumInsured" id="suminsured" class="p-1 w-36">
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-end my-7 ">
                <button class="button-transparent" v-if="edit" @click="saveChanges">Save changes</button>

                <button @click="() => { edit = true }" class="button-transparent" v-else>Change details</button>
            </div>
        </form>
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