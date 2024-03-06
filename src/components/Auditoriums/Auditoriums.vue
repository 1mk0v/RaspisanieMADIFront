<template>
  <div id="auditoriums-container" class="glassmorph-container">
    <div class="title">
      <div class="ico">
        <font-awesome-icon icon="fa-solid fa-door-closed" />
      </div>
      <div style="font-size: 20px;">Аудитории</div>
    </div>
    <div id="content">
      <BlockWithData
        nameId="auditorium-arrow-up"
        :flexAuto="false"
        :isButton="true"
        textAlign="center"
        @clickComponentEvent="arrowUp">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </BlockWithData>
        <div id='overflow-container' class="overflow-y-scroll">
          <div id="auditoriums-content">
            <BlockWithData
              v-for="item in listAuditoriums"
              :key="item.value+item.status">
              <div style="display: flex; gap:10px;">
                <span style="font-weight: 500;">{{ item.value }}</span>
                <span :style="{color: (item.status) ? '#80FF7E': '#FF6363'}">{{ (item.status) ? 'Свободна': 'Занята' }}</span>
              </div>
            </BlockWithData>
          </div>
        </div>
      <BlockWithData
        nameId="auditorium-arrow-down"
        :flexAuto="false"
        :isButton="true"
        textAlign="center"
        @clickComponentEvent="arrowDown">
        <font-awesome-icon icon="fa-solid fa-arrow-down" />
      </BlockWithData>
    </div>
  </div>
</template>
   
<script>
import BlockWithData from '../DataComponents/BlockWithData.vue'
// import ControlKeys from '../Buttons/ControlKeys.vue';

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
    // ControlKeys,
    BlockWithData
  },
  methods: {
    arrowDown() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy({top: this.scrollValue, behavior: 'smooth'})
    },
    arrowUp() {
      let element = document.querySelector('#overflow-container')
      element.scrollBy({top: -this.scrollValue, behavior: 'smooth'})
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
  #content {
    gap: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>