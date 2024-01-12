
<template>
    <GlassmorphHeader></GlassmorphHeader>
    <div id="cards-container">
      <GlassmorphCard
        cardName="Расписание групп"
        cardID="group"
        :buttonVisible="this.visible['group']['button']"
        :inputVisible="this.visible['group']['input']"
        @changeVisibleEvent="changeVisibleCard"></GlassmorphCard>
      <GlassmorphCard
        cardName="Расписание преподавателей"
        cardID="teacher"
        :buttonVisible="this.visible['teacher']['button']"
        :inputVisible="this.visible['teacher']['input']"
        @changeVisibleEvent="changeVisibleCard"></GlassmorphCard>
      <GlassmorphCard
        cardName="Расписание экзаменов"
        cardID="exams"
        :buttonVisible="this.visible['exams']['button']"
        :inputVisible="this.visible['exams']['input']"
        @changeVisibleEvent="changeVisibleCard"></GlassmorphCard>
      <GlassmorphCard
        cardName="Свободные аудитории"
        cardID="auditotiums"
        :buttonVisible="this.visible['auditotiums']['button']"
        :inputVisible="this.visible['auditotiums']['input']"
        @changeVisibleEvent="changeVisibleCard"></GlassmorphCard>
    </div>
</template>


<script>

import GlassmorphHeader from './components/GlassmorphHeader.vue';
import GlassmorphCard from './components/GlassmorphCard.vue';

export default {
    data() {
      return {
        visible: {
          "group": {
            "button": true, "input": false
          },
          "teacher": {
            "button": true, "input": false
          },
          "exams": {
            "button": true, "input": false
          },
          "auditotiums": {
            "button": true, "input": false
          }
        }
      }
    },
    name: 'App',
    components: {
      GlassmorphHeader,
      GlassmorphCard
  },
  methods: {
    changeVisibleCard(cardID) {
      for (let key in this.visible) {
        this.visible[key]['button'] = false
      } 
      this.visible[cardID]['input'] = true
    }
  }
}
</script>


<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
#cards-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex: 1 0 0;
  align-self: stretch;
  flex-wrap: wrap;
}
</style>
