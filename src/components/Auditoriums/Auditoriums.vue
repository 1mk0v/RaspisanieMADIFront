<template>
  <div id="auditoriums-container" class="glassmorph-container">
    <div class="title">
      <div class="ico">
        <font-awesome-icon icon="fa-solid fa-door-closed" />
      </div>
      <div style="font-size: 20px;">Аудитории</div>
    </div>
    <div id="content">
      <ControlKeys
        nameId="auditorium-arrow-up"
        @clickComponentEvent="arrowUp">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </ControlKeys>
        <div id='overflow-container' class="overflow-y-scroll">
          <div id="auditoriums-content">
            <div 
              v-for="item in listAuditoriums" 
              :key="item.value+item.status"
              id="auditorium-block">
              <span style="font-weight: 500;">{{ item.value }}</span>
              <span :style="{color: (item.status) ? '#80FF7E': '#FF6363'}">{{ (item.status) ? 'Свободна': 'Занята' }}</span>
            </div>
          </div>
        </div>
      <ControlKeys
        nameId="auditorium-arrow-down"
        @clickComponentEvent="arrowDown">
        <font-awesome-icon icon="fa-solid fa-arrow-down" />
      </ControlKeys>
    </div>
  </div>
</template>
   
<script>
import ControlKeys from '../Buttons/ControlKeys.vue';

export default {
  data() {
    return {
      listAuditoriums: [
        {"value": "600Л", "status":1},
        {"value": "601Л", "status":1},
        {"value": "602Л", "status":1},
        {"value": "603Л", "status":1},
        {"value": "604Л", "status":0},
        {"value": "605Л", "status":0},
        {"value": "606Л", "status":0},
        {"value": "607Л", "status":0},
        {"value": "608Л", "status":1},
        {"value": "609Л", "status":1},
        {"value": "610Л", "status":1},
        {"value": "611Л", "status":0},
        {"value": "612Л", "status":0},
        {"value": "613Л", "status":0},
        {"value": "614Л", "status":0},
        {"value": "615Л", "status":1},
        {"value": "616Л", "status":1},
        {"value": "617Л", "status":0},
        {"value": "618Л", "status":0},
        {"value": "619Л", "status":1},
        {"value": "620Л", "status":1},
        {"value": "621Л", "status":1},
        {"value": "622Л", "status":1},
        {"value": "623Л", "status":1},
        {"value": "624Л", "status":0},
        {"value": "625Л", "status":0},
        {"value": "626Л", "status":0},
        {"value": "627Л", "status":0},
        {"value": "628Л", "status":1},
        {"value": "629Л", "status":1},
        {"value": "630Л", "status":1},
      ],
      scrollValue: 200
    }
  },
  name: 'AuditoriumsInfo',
  components: {
    ControlKeys
  },
  methods: {
    arrowDown() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy(0,this.scrollValue)
    },
    arrowUp() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy(0,-this.scrollValue)
    }
  }
}
</script>


<style scoped>
  #auditoriums-container {
    display: flex;
    border-radius: 25px;
    gap: 25px;
    flex-direction: column;
    justify-content: space-between;
  }
  #auditoriums {
    height: max-content; 
  }
  #auditoriums-content {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  #auditorium-block {
    display: flex;
    gap:10px;
    padding: 5px 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.30);
  }
  #content {
    gap: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>