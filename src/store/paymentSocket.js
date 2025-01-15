import { defineStore } from "pinia";
import { socket } from "../socket";

export const usePaymentSocketStore = defineStore("paymentSocket", {
  state: () => ({
    connected: false,
    paymentStatus: "Unpaid",
  }),

  actions: {
    bindEvents(transaction_id, institution_slug) {
      // sync the list of items upon connection
      socket.on("connect", () => {
        this.connected = true;
        // console.log("connected to the socket ======>" + socket.id);
        socket.emit("get_status", {
          transaction_id,
          institution_slug,
        });
      });

      // update the store when an item was created
      socket.on("response", (data) => {
        // console.log("response received:", data);
      });
    },

    getStatus(transaction_id, institution_slug) {
      socket.emit("get_status", {
        transaction_id,
        institution_slug,
      });

      socket.on("response", (data) => {
        // console.log("response received:", data);
        this.paymentStatus = data.data.status;
      });
    },
  },
});
