<template>
    <div class="overflow-x-auto w-full border ">
        <table class="w-full border-collapse border border-gray-300 min-w-[640px]">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="p-3 border border-gray-300">Cover</th>
                    <th class="p-3 border border-gray-300">Vehicle Class</th>
                    <th class="p-3 border border-gray-300">Underwriting Processes</th>
                    <th class="p-3 border border-gray-300">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50 text-gray-900" v-for="transaction in transactions" :key="transaction.id">
                    <td class="p-3 border border-gray-300">{{ transaction?.premium?.request?.prefered_cover }}</td>
                    <td class="p-3 border border-gray-300">{{ transaction?.premium?.request?.vehicle_class }}</td>
                    <td class="p-3 border text-center border-gray-300">{{ transaction?.premium?.underwriting.length }}
                    </td>
                    <td class="p-3 border border-gray-300 text-center">
                        <button class="button-primary py-2">View</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const { transactions } = defineProps(['transactions'])
</script>

<style scoped></style>