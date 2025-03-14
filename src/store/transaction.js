import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../api/api";
import { useToastStore } from "./toast";

export const useTransactionStore = defineStore("transactions", () => {
  const loading = ref(false);
  const error = ref(null);
  const transactions = ref([]);
  const toast = useToastStore();

  async function getTransactions() {
    try {
      loading.value = true;
      const response = await api.get("/transactions");
      transactions.value = response.data;
      console.log(transactions.value);
      error.value = null;
    } catch (error) {
      toast.addToastMessage("danger", "Failed", error.message);
    } finally {
      loading.value = false;
    }
  }

  async function getTransactionById(id) {
    try {
      loading.value = true;
      const response = await api.get("/transactions/" + id);
      error.value = null;
      return response.data;
    } catch (error) {
      toast.addToastMessage("danger", "Failed", error.message);
    } finally {
      loading.value = false;
    }
  }

  return { getTransactions, getTransactionById };
});
