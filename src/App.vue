
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <!-- <Transition appear mode="in-out"> -->
      <KeepAlive>
        <HomePage v-if="currentComponent == 'home'">
          <ScheduleButtons v-for="card in menuCards" 
            :nameId="card.id" 
            :key="card.id"
            @clickEvent="clickEventHandler">
            {{ card.value }}
          </ScheduleButtons>
        </HomePage>
      </KeepAlive>
    <!-- </Transition> -->
    <!-- <Transition appear mode="out-in"> -->
      <RaspisanieContainer v-if="currentComponent == 'schedule-group-button'"
        nav-title="Выберите группу"
        :scroll-value="scrollValue"
        :getCommunityFunction="getGroupList"
        :get-schedule-function="getGroupScheduleList"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
    <!-- </Transition> -->
    <!-- <Transition appear mode="out-in"> -->
      <RaspisanieContainer v-if="currentComponent == 'schedule-teacher-button'"
        nav-title="Выберите преподавателя"
        :scroll-value="scrollValue"
        :getCommunityFunction="getTeacherList"
        :get-schedule-function="getTeacherScheduleList"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
    <!-- </Transition> -->
    <!-- <Transition appear mode="out-in"> -->
      <RaspisanieContainer v-if="currentComponent == 'schedule-exam-button'"
        nav-title="Выберите экзамен"
        :scroll-value="scrollValue"
        @changeTabEvent="clickEventHandler">
      </RaspisanieContainer>
    <!-- </Transition> -->
  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue'
import HomePage from './components/Home/HomeComponent.vue'
import ScheduleButtons from './components/Buttons/ScheduleButtons.vue'
import RaspisanieContainer from './components/Raspisanie/RaspisanieContainer.vue'
import { API } from './api.js'


export default {
    data() {
      return {
        scrollValue: 200,
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
    getGroupList: async function() {
      let api = new API('/group');
      return await api.get();
    },
    getGroupScheduleList: async function(groupId) {
      let api = new API('/group');
      return await api.getSchedule(groupId);
    },
    getTeacherList: async function() {
      let api = new API('/teacher');
      return await api.get();
    },
    getTeacherScheduleList: async function(teacherId) {
      let api = new API('/teacher');
      return await api.getSchedule(teacherId);
    }
  },
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

.fade-enter-active {
  transition: all 0.3s ease;
  position: relative;
}

.fade-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  filter: blur(10px);
  transform: scale(0.9);
}
</style>
