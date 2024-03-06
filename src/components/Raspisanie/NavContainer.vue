<template>
  <div>
    <div id="buttons-container">
      <BlockWithData 
        nameId='button-home'
        :isButton="true" 
        @clickComponentEvent="goToHome">
        <font-awesome-icon icon="fa-solid fa-house" />
      </BlockWithData>
      <BlockWithData 
        nameId='community-title'
        :flexAuto="true"
        :isButton="(titleCommunityValue) ? true : false"
        textAlign="center"
        textWeight="500"
        @clickComponentEvent="changeCommunity">
        {{ titleCommunityValue || defaultTitle }}
      </BlockWithData>
      <BlockWithData v-if="weekday"
        :isButton="true"
        nameId="weekday-value"
        textAlign="center"
        textWeight="500">
        {{ weekday }}
      </BlockWithData>
      <BlockWithData
        nameId="button-filter">
        <font-awesome-icon icon="fa-solid fa-filter" />
      </BlockWithData>
    </div>
  </div>
</template>


<script>
import BlockWithData from '../DataComponents/BlockWithData.vue'

export default {
  props: { defaultTitle: String, titleCommunityValue: String, weekday:String },
  emits: ['goHomeEvent', 'changeCommunityEvent'],
  name: 'NavContainer',
  components: {
    BlockWithData
  },
  methods: {
    goToHome(event) {
      this.$emit('goHomeEvent', event)
    },
    changeCommunity() {
      this.$emit('changeCommunityEvent', {})
    }
  }
}
</script>


<style></style>