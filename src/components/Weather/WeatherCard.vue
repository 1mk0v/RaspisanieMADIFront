<template>
  <div id="card-container">
    <div>
      <slot></slot>
    </div>
    <div>{{ title }}</div>
    <div style="display:flex; align-items: center; gap: 5px;">
      <div style="font-size:20px; font-family:'Rubik Medium'">{{ value }}</div>
      <div>{{ unit }}</div>
    </div>
  </div>
</template>
     
<script>

export default {
  name: 'WeatherCard',
  props: {
    title: String,
    value: Number,
    unit: String
  }
}

</script>
  
<style scoped>
@font-face {
  font-family: "Rubik Medium";
  src:
    url("./static/Rubik-Medium.ttf")
}
#card-container {
  display: flex;
  flex-direction: column;
  gap:4px;
}
</style>