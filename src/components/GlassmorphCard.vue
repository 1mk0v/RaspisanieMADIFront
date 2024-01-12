<template>
  <ButtonCard
    v-if="buttonVisible"
    @clickCardEvent="clickButton"
    :cardName="cardName"
    :cardID="cardID">
  </ButtonCard>
  <InputCard
    v-if="inputVisible"
    :cardID="cardID">
  </InputCard>
</template>

<script>
import ButtonCard from './ButtonCard.vue'
import InputCard from './InputCard.vue';

export default {
  name: 'GlassmorphCard',
  props: {
    cardName: String,
    cardID: String,
    buttonVisible: Boolean,
    inputVisible: Boolean
  },
  emits:['changeVisibleEvent'],
  components: {
    ButtonCard,
    InputCard
  },
  methods:{
    clickButton(id) {
      this.$emit('changeVisibleEvent', id)
    }
  }
}
</script>


<style scoped>
  #GlassmorphCard {
    z-index: 2;
  }
</style>
