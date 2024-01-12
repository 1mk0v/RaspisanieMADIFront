<template>
    <ButtonCard
      v-if="buttonVisible"
      @clickCardEvent="clickButton"
      :cardName="cardName"
      :cardID="cardID">
    </ButtonCard>
    <InputCard
      @exitClickEvent="exitButton"
      v-if="inputVisible"
      :cardID="cardID">
    </InputCard>
</template>

<script>
import ButtonCard from './ButtonCard.vue'
import InputCard from './Input/InputCard.vue';

export default {
  name: 'GlassmorphCard',
  props: {
    cardName: String,
    cardID: String,
    buttonVisible: Boolean,
    inputVisible: Boolean
  },
  emits:['changeVisibleEvent','closeInputEvent'],
  components: {
    ButtonCard,
    InputCard
  },
  methods:{
    exitButton(id) {
      this.$emit('closeInputEvent', id)
    },
    clickButton(id) {
      this.$emit('changeVisibleEvent', id)
    }
  }
}
</script>


<style scoped>
  /* #GlassmorphCard {
    z-index: 2;
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  } */
</style>
