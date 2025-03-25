<template>
    <span class="px-3 py-0.5 text-sm font-semibold rounded-full" :class="badgeClass">
        {{ formattedStatus }}
    </span>
</template>

<script setup>
import { computed } from "vue";

const { status } = defineProps({
    status: {
        type: String,
        required: true,
    },
});

const statusColors = {
    completed: "bg-green-100 text-green-700 border border-green-400",
    pending: "bg-yellow-100 text-yellow-700 border border-yellow-400",
    failed: "bg-red-100 text-red-700 border border-red-400",
    in_progress: "bg-blue-100 text-blue-700 border border-blue-400",
    cancelled: "bg-gray-100 text-gray-700 border border-gray-400",
};

const badgeClass = computed(() => {
    const matchedKey = Object.keys(statusColors).find((key) =>
        status.toLowerCase().includes(key)
    );
    return statusColors[matchedKey] || "bg-gray-200 text-gray-700 border border-gray-300";
});

const formattedStatus = computed(() => {
    return status?.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
});
</script>