
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <div id="content-container">
        <Auditoriums></Auditoriums>
        <div id="info-container">
          <div id="buttons-container" class="glassmorph-container">
            <ScheduleButtons>
              Расписание группы
            </ScheduleButtons>
            <ScheduleButtons>
              Расписание преподавателей
            </ScheduleButtons>
            <ScheduleButtons>
              Расписание экзаменов
            </ScheduleButtons>
          </div>
          <div class='glassmorph-container' id="weather"
            style="display: flex; justify-content: center; flex-direction: column; 
            height: -webkit-fill-available;">
            <WeatherInfo></WeatherInfo>
          </div>
          <div class='glassmorph-container' id="quotes">
            <QuotesApp></QuotesApp>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue';
import Auditoriums from './components/Auditoriums/Auditoriums.vue';
import ScheduleButtons from './components/Buttons/ScheduleButtons.vue'
import WeatherInfo from './components/Weather/WeatherInfo.vue'
import QuotesApp from './components/Quotes/QuotesApp.vue'


export default {
    data() {
      return {
        menuView: true,
        currentCard: ''
      }
    },
    name: 'App',
    components: {
    GlassmorphHeader,
    Auditoriums,
    ScheduleButtons,
    WeatherInfo,
    QuotesApp
  },
  methods: {
    }
  }
</script>


<style>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  font-size: 16px;
}
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
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap:10px;
}
#info-container {
  width: inherit;
  display: flex;
  flex-direction: column;
  gap:10px;
}
#buttons-container{
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
  align-self:center
}
</style>
