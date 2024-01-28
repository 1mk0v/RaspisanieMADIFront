
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <MenuContainer 
      v-if="menuView"
      @buttonClickEvent="changeCurrentTab"></MenuContainer>
    <SelectContainer 
      v-else-if="['teacher', 'group'].includes(currentCard)"
      :card-i-d="currentCard"
      @closeSelectEvent="closeSelectTab"></SelectContainer>
    <AuditoriumsSelectContainer
      v-else-if="currentCard == 'auditorium'"
      :card-i-d="currentCard"
      @closeSelectEvent="closeSelectTab">
    </AuditoriumsSelectContainer>
    <ExamSelectContainer v-else
      :card-i-d="currentCard"
      @close-select-event="closeSelectTab">
    </ExamSelectContainer>

  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue';
import MenuContainer from './components/Containers/MenuContainer.vue';
import SelectContainer from './components/Containers/SelectContainer.vue';
import ExamSelectContainer from './components/Containers/Exam/ExamSelectContainer.vue';
import AuditoriumsSelectContainer from './components/Containers/Auditoriums/AuditoriumsSelectContainer.vue';

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
    MenuContainer,
    SelectContainer,
    ExamSelectContainer,
    AuditoriumsSelectContainer
},
  methods: {
    closeSelectTab() {
      this.menuView = true
    },
    changeCurrentTab(id) {
      this.menuView = false
      this.currentCard = id
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
  padding: 50px;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  flex: 1 0 0;
  align-self: stretch;
  box-sizing: border-box;
  position: relative;
}
</style>
