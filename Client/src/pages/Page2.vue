<template>
  <div id="page-2">
    This is a page that has Composition API

    <div class="counter">

      <div class="row">
          <button @click="incrementCounter">Increment</button>

        <div class="">
          <button @click="decreaseCounter">Decrease</button>
        </div>

      </div>
      Composition Counter: {{ counter }}
    </div>
    <VueImage :src="godcode" alt="Code Meme" />
    <vue-title />
  </div>
</template>

<script setup>
import useCounter from "../compositions/useCounter";
import VueImage from "../components/VueImage.vue";
import godcode from "../assets/godcode.jpg";

const { counter, incrementCounter, decreaseCounter } = useCounter();
</script>

<style lang="postcss" scoped>
#page-2 {
  .counter {
    margin-bottom: 20px;
  }
}
</style>
