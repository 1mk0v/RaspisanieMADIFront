<template>
  <div id="main-container" class="glassmorph-container">
    <NavContainer style="width: 100%" 
      :defaultTitle="navTitle"
      :titleCommunityValue="currentCommunity && currentCommunity.value" 
      @goHomeEvent="goHomeEventHandler"
      @changeCommunityEvent="chooseCommunityHandler">
    </NavContainer>
    <div id="content" v-if="!(currentCommunity && currentCommunity.value)">
      <BlockWithData nameId="raspisanie-arrow-up" 
        :is-button="true" 
        textAlign="center" 
        @clickComponentEvent="arrowUp">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </BlockWithData>
      <div id='overflow-container' class="overflow-y-scroll">
        <div id="block-content">
          <BlockWithData v-for="card in data" 
            :nameId="card.id" 
            :key="card.id" 
            :flexAuto="true" 
            :isButton="true"
            textAlign="left" 
            @clickComponentEvent="chooseCommunityHandler">
            {{ card.value }}
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
    <div id="content" v-else>

    </div>
  </div>
</template>

<script>
import BlockWithData from '../DataComponents/BlockWithData.vue'
import NavContainer from './NavContainer.vue';

export default {
  data() {
    return {
      scrollValue: 200,
      currentCommunity: {},
      data: [
        {"id": 9101, "value": "2бЛ 3"},
      {"id": 9120, "value": "2бЛМТ"},
      {"id": 9117, "value": "2бМО 1"},
      {"id": 9118, "value": "2бМО 2"},
      {"id": 9285, "value": "2бОД 1"},
      {"id": 9286, "value": "2бОД 2"},
      {"id": 9420, "value": "2бПМ"},
      {"id": 9468, "value": "2бСА"},
      {"id": 9229, "value": "2бСТ"},
      {"id": 9171, "value": "2бСТР1"},
      {"id": 9173, "value": "2бСТР2"},
      {"id": 9176, "value": "2бСТР3"},
      {"id": 9175, "value": "2бСТР4"},
      {"id": 9174, "value": "2бСТР5"},
      {"id": 9172, "value": "2бСТР6"},
      {"id": 9177, "value": "2бСТР7"},
      {"id": 9178, "value": "2бСТР8"},
      {"id": 9227, "value": "2бТВ"},
      {"id": 9418, "value": "2бТТ"},
      {"id": 9287, "value": "2бУП 1"},
      {"id": 9476, "value": "2бУП 2"},
      {"id": 9119, "value": "2бУПР"},
      {"id": 9289, "value": "2бУТП1"},
      {"id": 9290, "value": "2бУТП2"},
      {"id": 9226, "value": "2бЦУС"},
      {"id": 9338, "value": "2бЭМТ"},
      {"id": 9339, "value": "2бЭС 1"},
      {"id": 9340, "value": "2бЭС 2"},
      {"id": 9341, "value": "2бЭТ"},
      {"id": 9426, "value": "2ВА"},
      {"id": 9465, "value": "2ВбИТС"},
      {"id": 9121, "value": "2ВбМО"},
      {"id": 9292, "value": "2ВбОД"},
      {"id": 9293, "value": "2ВбУП"},
      {"id": 9342, "value": "2ВбЭС"},
      {"id": 9345, "value": "2ВмЭКР"},
      {"id": 9126, "value": "2ВТД"},
      {"id": 9231, "value": "2ДМ 1"},
      {"id": 9232, "value": "2ДМ 2"},
      {"id": 9373, "value": "2КМ 1"},
      {"id": 9375, "value": "2КМ 2"},
      ],
    }
  },
  name: 'RaspisanieContainer',
  emits: ['changeTabEvent'],
  props: {
    navTitle: String,
  },
  components: {
    NavContainer,
    BlockWithData
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
      this.currentCommunity = object
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
  justify-content: space-between;
}
</style>