
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <KeepAlive>
      <HomePage>
        <ScheduleButtons 
          v-for="card in menuCards" 
          :nameId="card.id" 
          :key="card.id" 
          @clickEvent="clickEventHandler">
          {{ card.value }}
        </ScheduleButtons>
      </HomePage>
    </KeepAlive>
  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue'
import HomePage from './components/Home/HomeComponent.vue'
import ScheduleButtons from './components/Buttons/ScheduleButtons.vue'


export default {
    data() {
      return {
        menuView: true,
        menuCards: [
          {id:"schedule-group-button", value: "Расписание группы"},
          {id:"schedule-teacher-button", value: "Расписание преподавателей"},
          {id:"schedule-exam-button", value: "Расписание экзаменов"}
        ],
        currentCard: ''
      }
    },
    name: 'App',
    components: {
      HomePage,
      ScheduleButtons,
      GlassmorphHeader
  },
  methods: {
    clickEventHandler(text) {
      console.log(text)
    }
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
