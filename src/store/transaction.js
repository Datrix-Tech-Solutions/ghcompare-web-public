import { defineStore } from "pinia";
import { ref, computed } from "vue";
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

  const completedTransactions = computed(() => {
    return transactions.value.filter(
      (item) => item.premium.status === "completed_underwriting"
    );
  });

  const pendingTransactions = computed(() => {
    return transactions.value.filter(
      (item) => item.premium.status === "pending_underwriting"
    );
  });

  const claims = computed(() => {
    return transactions.value.filter(
      (item) => item.premium.status === "claims"
    );
  });

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

  return {
    getTransactions,
    getTransactionById,
    pendingTransactions,
    completedTransactions,
    claims,
    loading,
    transactions,
    error,
  };
});
