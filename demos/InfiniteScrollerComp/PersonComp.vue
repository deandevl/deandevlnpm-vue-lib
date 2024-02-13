<template>
  <div class="personComp">
    <img
      v-if="imgSourceUrl"
      class="personComp_img"
      :src="imgSourceUrl"
    >
    <div class="personComp_info">
      <div class="personComp_name">
        <span v-if="firstName">{{ firstName }}</span>
        <span v-if="lastName">{{ lastName }}</span>
      </div>

      <div class="personComp_birth">
        <strong>Birth date-age: </strong>
        <span v-if="birthDate">{{ birthDate }}</span>
        <span v-if="age">{{ age }}</span>
      </div>

      <div class="personComp_location">
        <strong>Location City-State: </strong>
        <span v-if="locationCity">{{ locationCity }}</span>
        <span v-if="locationState">{{ locationState }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonComp',
    props: {
      imgSourceUrl: {
        type: String,
        default: null
      },
      firstName: {
        type: String,
        default: null
      },
      lastName: {
        type: String,
        default: null
      },
      birthDate: {
        type: String,
        default: null
      },
      age: {
        type: Number,
        default: null
      },
      locationCity: {
        type: String,
        default: null
      },
      locationState: {
        type: String,
        default: null
      }
    }
  };
</script>

<style>
  .personComp {
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    font-family: Verdana, sans-serif;
  }
  .personComp_img {
    height: auto;
    border-radius: 5px;
  }
  .personComp_info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .personComp_name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 900;
    text-transform: capitalize;
  }
  .personComp_birth {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    overflow: hidden;
  }
  .personComp_location {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    overflow: hidden;
  }
</style>