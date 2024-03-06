
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <KeepAlive>
      <HomePage v-if="currentComponent == 'home'">
        <ScheduleButtons v-for="card in menuCards" 
          :nameId="card.id" 
          :key="card.id"
          @clickEvent="clickEventHandler">
          {{ card.value }}
        </ScheduleButtons>
      </HomePage>
      <RaspisanieContainer v-else-if="currentComponent == 'schedule-group-button'"
        nav-title="Выберите группу"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
      <RaspisanieContainer v-else-if="currentComponent == 'schedule-teacher-button'"
        nav-title="Выберите преподавателя"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
      <RaspisanieContainer v-else-if="currentComponent == 'schedule-exam-button'"
        nav-title="Выберите экзамен"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
    </KeepAlive>
  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue'
import HomePage from './components/Home/HomeComponent.vue'
import ScheduleButtons from './components/Buttons/ScheduleButtons.vue'
import RaspisanieContainer from './components/Raspisanie/RaspisanieContainer.vue'


export default {
    data() {
      return {
        menuCards: [
          {id:"schedule-group-button", value: "Расписание группы"},
          {id:"schedule-teacher-button", value: "Расписание преподавателей"},
          {id:"schedule-exam-button", value: "Расписание экзаменов"}
        ],
        currentComponent: 'home',
      }
    },
    name: 'App',
    components: {
      HomePage,
      ScheduleButtons,
      GlassmorphHeader, 
      RaspisanieContainer,
  },
  methods: {
    clickEventHandler(text) {
      this.currentComponent = text
    },
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
  font-size: 18px;
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
</style>
