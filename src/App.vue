<template>
  <div id="app">
    <PricingPlans />
  </div>
</template>

<script>
import PricingPlans from "./components/PricingPlans";

export default {
  name: "App",
  components: {
    PricingPlans
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1e1f57;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
