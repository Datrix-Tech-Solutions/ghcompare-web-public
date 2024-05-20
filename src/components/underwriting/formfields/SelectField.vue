<template>
  <div>
    <label for="email" class="label">{{ labelName }}</label>
    <div class="mt-2">
      <select :required="require" name="" id="" v-model="model" :disabled="disable" class="w-full">
        <option value="" disabled>Select {{ labelName }}</option>
        <template v-for="option in options" :key="option">
          <option :value="option">{{ option }}</option>
        </template>
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineModel } from 'vue';
defineProps({
  labelName: String,
  options: Array,
  disable: Boolean,
  require: {
    default: true,
    type: Boolean,
  }
})

const model = defineModel()
</script>

<style scoped></style>
