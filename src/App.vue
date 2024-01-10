
<template>
  <GlassmorphHeader></GlassmorphHeader>
  <div style="width: 100%; height:100%; display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-top: 35px;">
    <div>
      <GlassmorphCard
        cardName = "Расписание групп"
        cardID = "groupSchedule">
      </GlassmorphCard>
    </div>
    <div>
      <GlassmorphCard
        cardName = "Расписание преподавателей"
        cardID = "teacherSchedule">
      </GlassmorphCard>
    </div>
    <div>
      <GlassmorphCard
        cardName = "Расписание экзаменов"
        cardID = "examSchedule">
      </GlassmorphCard>
    </div>
    <div>
      <GlassmorphCard 
        cardName = "Свободные аудитории"
        cardID = "freeAuditoriums">
      </GlassmorphCard>
    </div>
  </div>
</template>


<script>

import GlassmorphHeader from './components/GlassmorphHeader.vue';
import GlassmorphCard from './components/GlassmorphCard.vue';

export default {
    data() {
      return {
      }
    },
    name: 'App',
    components: {
      GlassmorphHeader,
      GlassmorphCard,
    }
}
</script>


<style>
#app {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  margin: 50px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
</style>
