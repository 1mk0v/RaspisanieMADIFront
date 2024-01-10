<template>
  <ButtonCard
    @clickCardEvent="clickButton"
    :cardName="cardName"
    :cardID="cardID">
  </ButtonCard>
  <InputCard
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
    cardID: String
  },
  components: {
    ButtonCard,
    InputCard
}, 
  methods:{
    clickButton(id) {
      console.log(id)
    }
  }
}
</script>


<style scoped>

</style>
