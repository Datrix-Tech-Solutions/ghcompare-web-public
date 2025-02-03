<script setup>
import ToastNotification from './components/ui/ToastNotification.vue';
import { useToastStore } from '../src/store/toast'
import { storeToRefs } from 'pinia';

const toastStore = useToastStore()

// for notification
const { showToast } = storeToRefs(toastStore)

</script>

<template>
  <div class="bg-[#f0f3f5]">

    <Transition name="slide-fade" appear>
      <ToastNotification v-if="showToast" />
    </Transition>

    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --primary-color: #2490dc;
  --primary-darker: #14467b;
}

html {
  background: #f0f3f5;
}

input,
select,
textarea {
  background: transparent;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 12px;
}

select {
  padding-block: 13.5px;
}

label.label {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: block;
}

.label {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: block;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input:focus,
select:focus {
  outline: 2px solid var(--primary-color)
}

.glass {
  /* From https://css.glass */
  background: #f4f7f969;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(100, 92, 92, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #cdd5d791;
}

.scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #ccc;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
