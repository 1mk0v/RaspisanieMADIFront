<template>
  <div id="main-container" class="glassmorph-container">
    <NavContainer style="width: 100%" 
      :defaultTitle="navTitle"
      :titleCommunityValue="currentCommunity && currentCommunity.value"
      :weekday="dateValue"
      @goHomeEvent="goHomeEventHandler"
      @changeCommunityEvent="chooseCommunityHandler"
      @changeDateEvent="chooseDateHandler">
    </NavContainer>
    <div id="content" v-if="!(currentCommunity && currentCommunity.value)">
      <BlockWithData nameId="raspisanie-arrow-up" 
        :is-button="true" 
        textAlign="center" 
        @clickComponentEvent="arrowUp">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </BlockWithData>
      <div id='overflow-container' class="overflow-y-scroll" v-if="communityList">
        <div id="block-content">
          <BlockWithData v-for="card in communityList" 
            :nameId="card.id" 
            :key="card.id" 
            :flexAuto="true" 
            :isButton="(card.value) ? true : false"
            textAlign="left"
            @clickComponentEvent="chooseCommunityHandler">
            {{ card.value || 'Мы не знаем что это за группа 🤔' }}
          </BlockWithData>
        </div>
      </div>
      <BlockWithData nameId="raspisanie-arrow-down" 
        :is-button="true" 
        textAlign="center"
        @clickComponentEvent="arrowDown">
        <font-awesome-icon icon="fa-solid fa-arrow-down" />
      </BlockWithData>
    </div>
    <div id="content" v-else-if="errorImg"><img style="height: 100%;" :src="errorImg"></div>
    <div id="content"
      v-else-if="(currentCommunity && currentCommunity.value && scheduleList && !dateValue)">
      <BlockWithData v-for="(value, index) in availableDates"
        :nameId="index" 
        :key="value+index" 
        :isButton="true"
        textAlign="left"
        @clickComponentEvent="chooseDateHandler">
        {{ value }}
      </BlockWithData>
    </div>
    <div id="content" v-else>
      <BlockWithData nameId="raspisanie-arrow-up" 
        :is-button="true" 
        textAlign="center" 
        @clickComponentEvent="arrowUp">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </BlockWithData>
      <div id='overflow-container' class="overflow-y-scroll" v-if="communityList">
        <div id="block-content">
          <ScheduleBlock v-for="(data, index) in choosedSchedule" :key="index"
            :lessonInfo="data">
          </ScheduleBlock>
        </div>
      </div>
      <BlockWithData nameId="raspisanie-arrow-down" 
        :is-button="true" 
        textAlign="center"
        @clickComponentEvent="arrowDown">
        <font-awesome-icon icon="fa-solid fa-arrow-down" />
      </BlockWithData>
    </div>
  </div>
</template>

<script>
import BlockWithData from '../DataComponents/BlockWithData.vue'
import NavContainer from './NavContainer.vue';
import ScheduleBlock from '../DataComponents/ScheduleBlock.vue'

export default {
  name: 'RaspisanieContainer',
  data() {
    return {
      dateValue: '',
      currentCommunity: {},
      communityList: [],
      scheduleList: [],
      errorImg: ''
    }
  },
  emits: ['changeTabEvent'],
  props: {
    navTitle: String,
    scrollValue: Number,
    getCommunityFunction: Function,
    getScheduleFunction: Function
  },
  components: {
    NavContainer,
    BlockWithData,
    ScheduleBlock
  },
  created() {
    this.getCommunityFunction()
      .then((data) => { this.communityList = data.data })
      .catch((status) => { this.errorImg = `https://http.cat/${status}` });
  },
  watch: {
    currentCommunity: {  
      handler(value) {
        if (value.value) {
          this.getScheduleFunction(value.id)
            .then((data) => { this.scheduleList = data.data })
            .catch((status) => { 
              this.errorImg = `https://http.cat/${status}` })
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    arrowDown() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy({ top: this.scrollValue, behavior: 'smooth' })
    },
    arrowUp() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy({ top: -this.scrollValue, behavior: 'smooth' })
    },
    goHomeEventHandler() {
      this.$emit('changeTabEvent', 'home')
    },
    chooseCommunityHandler(object) {
      if (JSON.stringify(object) == JSON.stringify({})) { 
        this.errorImg = ''
        this.dateValue = ''
      }
      this.currentCommunity = object
    },
    chooseDateHandler(object) {
      this.dateValue = object.value
    }
  },
  computed: {
    availableDates() {
      let weekdays = []
      if (this.scheduleList) {
        for (let lesson of this.scheduleList) {
          if (lesson.weekday && !weekdays.includes(lesson.weekday)) { weekdays.push(lesson.weekday) } 
        }
      }
      return weekdays
    },
    choosedSchedule() {
      let schedule = []
      if (this.scheduleList) {
        for (let lesson of this.scheduleList) {
          if (lesson.weekday == this.dateValue) { schedule.push(lesson) }
        }
      }
      return schedule
    }
  }
}
</script>


<style scoped>
#main-container {
  display: flex;
  border-radius: 25px;
  gap: 25px;
  flex-direction: column;
  justify-content: space-between;
}

#block-content {
  gap: 10px;
  display: flex;
  flex-direction: column;
}

#content {
  flex: inherit;
  width: 100%;
  gap: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>