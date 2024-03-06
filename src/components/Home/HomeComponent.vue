
<template>
  <div id="content-container">
    <Auditoriums></Auditoriums>
    <div id="info-container">
      <div id="buttons-container" class="glassmorph-container">
        <slot></slot>
      </div>
      <div class='glassmorph-container' id="weather"
        style="display: flex; flex: auto; justify-content: center; flex-direction: column;">
        <WeatherInfo></WeatherInfo>
      </div>
      <div class='glassmorph-container' id="quotes">
        <QuotesApp></QuotesApp>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import Auditoriums from '../Auditoriums/Auditoriums.vue';
import WeatherInfo from '../Weather/WeatherInfo.vue'
import QuotesApp from '../Quotes/QuotesApp.vue'


export default {
    data() {
        return {
        }
    },
    name: 'HomePage',
    components: {
        Auditoriums,
        WeatherInfo,
        QuotesApp
    },
}
</script>
  
  
<style>
.glassmorph-container {
  border-radius: 25px;
  padding: 25px;
  background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(10px);
}

#main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    box-sizing: border-box;
    position: relative;
}

#content-container {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#info-container {
    width: inherit;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#buttons-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 25px;
    gap: 25px;
}

.title {
    display: flex;
    height: fit-content;
    gap: 10px;
    justify-content: space-around;
}

.ico {
    align-self: center
}</style>
  