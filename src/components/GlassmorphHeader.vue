<template>
  <div style="display: flex; justify-content: center;">
    <div id='header'>
      <div class='headerData' style="text-align: left;">{{ weekday}}</div>
      <div class='headerData' style="text-align: center;">{{ date }}</div>
      <div class='headerData' style="text-align: right;">{{ timer }}</div>
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
        7:"Воскресенье"
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
        this.weekday = this.weekdays[date.getDay()]
        this.date = `${this.monthes[date.getMonth()]}, ${date.getDate()}`
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
    width: 100%;
    padding: 22px 44px;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
    color:white;
    font-size: 24px;
    font-weight: bold;
  }
  .headerData {
    display: flex;
    width: 11.875rem;
    height: 2.875rem;
    flex-direction: column;
    justify-content: center;
  }
</style>
   