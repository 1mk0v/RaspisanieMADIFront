<template>
  <div id="header-container" class="glassmorph-container" style="padding: 0px; width: 100%;">
    <div style="padding: 10px 0px;">
      <div id='header'>
        <div style="text-align: left;">{{ weekday}}</div>
        <div style="text-align: center;">{{ date }}</div>
        <div style="text-align: right;">{{ timer }}</div>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      weekdays: {
        1:"Понедельник",
        2:"Вторник",
        3:"Среда",
        4:"Четверг",
        5:"Пятница",
        6:"Суббота",
        0:"Воскресенье"
      },
      monthes: {
        0: "Январь",
        1: "Февраль",
        2: "Март",
        3: "Апрель",
        4: "Май",
        5: "Июнь",
        6: "Июль",
        7: "Август",
        8: "Сентябрь",
        9: "Октябрь",
        10: "Ноябрь",
        11: "Декабрь"
      },
      timer: '',
      weekday: '',
      date: '',
    }
  },
  name: 'MyHeader',
  props: {
    cardName: String
  },
  created() {
    this.timerIntervalId = setInterval(() => {
        let date = new Date()
        let startDate = new Date(date.getFullYear(), 0, 1);
        let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        let weekNumber = Math.ceil(days / 7);
        this.weekday = this.weekdays[date.getDay()]
        this.date = (weekNumber%2) ? 'Знаменатель' : 'Числитель'
        let minutes = date.getMinutes()
        if (minutes < 10) {
          minutes = "0"+`${minutes}`
        }
        this.timer = `${date.getHours()}:${minutes}`
    }, 1000);
  }
}
</script>

   
   
<style scoped>
  #header {
    display: flex;
    padding: 10px 25px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
</style>
   