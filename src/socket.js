import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  paymentStatus: "",
  //   fooEvents: [],
  //   barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
const URL = "https://api.ghcompare.com/payment-status";
export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
  console.log("connected to the socket ======>" + socket.id);
  //   socket.emit("get_status", {
  //     transaction_id: "0D40i09Wg8J000",
  //     institution_slug: "phoenix",
  //   });
});

// socket.on("response", (data) => {
//   console.log("response received:", data);
// });

socket.on("disconnect", () => {
  state.connected = false;
  console.log("disconnected xxxxxxxx Disconnected");
});

// socket.on("foo", (...args) => {
//   state.fooEvents.push(args);
// });

// socket.on("bar", (...args) => {
//   state.barEvents.push(args);
// });
