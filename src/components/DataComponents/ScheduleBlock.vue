<template>
  <div class="key-container">
    <div id="time" v-if="time" style="text-align:center">
      <div>{{ time.start && time.start.slice(0, -3) }}</div>
      <div>-</div>
      <div>{{ time.end && time.end.slice(0, -3) || '🤷‍♀️'}}</div>
    </div>
    <div id="line"></div>
    <div id="schedule">
      <div id="title" style="font-weight: 500;">{{ lessonTitle }}</div>
      <div id="type" style="font-weight: 300;">{{ lessonType }}</div>
      <div class="title" id="auditorium" style="justify-content: left;" v-if="auditorium">
        <div class="ico">
          <font-awesome-icon icon="fa-solid fa-door-closed" />
        </div>
        <div>{{ auditorium }}</div>
      </div>
      <div class="title" id="community" style="justify-content: left;" v-if="community">
        <div class="ico">
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
        <div>{{ community }}</div>
      </div>
      <div class="title" id="weekdayType" style="justify-content: left;" v-if="date"> 
        <div class="ico">
          <font-awesome-icon icon="fa-regular fa-calendar" />
        </div>
        <div>{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<script scope>
export default {
  name: 'ScheduleBlock',
  props: {
    lessonInfo: Object
  },
  computed: {
    lessonTitle() {
      return this.lessonInfo.discipline || null
    },
    lessonType() {
      return this.lessonInfo.type || null
    },
    auditorium() {
      return this.lessonInfo.auditorium || null
    },
    community() {
      return (this.lessonInfo.group && this.lessonInfo.group.value) || (this.lessonInfo.teacher && this.lessonInfo.teacher.value) || null
    },
    date() {
      return this.lessonInfo.date.friequency || this.lessonInfo.date.day || null
    },
    time() {
      return this.lessonInfo.date.time || null
    },
  }
}
</script>

<style scoped>
.key-container {
  display: flex;
  border-radius: 20px;
  padding: 11px 22px;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.30);
}
#line {
  border-left: 1px solid #fff;
  height: 100%;
}
</style>