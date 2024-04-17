import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const showToast = ref(false);
  const toastInfo = ref({
    type: "success",
    title: "Successful",
    message: "Item is successful",
  });

  function addToastMessage(
    type = "warning",
    title = "Info",
    message = "Notification"
  ) {
    toastInfo.value.title = title;
    toastInfo.value.message = message;
    toastInfo.value.type = type;

    showToast.value = true;
  }

  return {
    toastInfo,
    showToast,
    addToastMessage,
  };
});
