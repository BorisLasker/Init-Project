import { ref } from "vue";

export default function useCounter() {
  const counter = ref(0);

  function incrementCounter() {
    counter.value++;
  }
  function decreaseCounter() {
    if (counter.value <=  0){
      alert("cant dec")
      return;
    } 
    counter.value--;
  }

  return {
    counter,
    incrementCounter,
    decreaseCounter
  };
}