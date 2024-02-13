<template>
  <div class="home_container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HomeComp',
    data() {
      return {
        msg: 'Welcome to Hills Hardware Store'
      };
    }
  };
</script>

<style>
  .home_container {
    text-align: center;
  }
</style>