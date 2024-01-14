
<template>
  <div id="main-container">
    <GlassmorphHeader></GlassmorphHeader>
    <MenuContainer 
      v-if="menuView"
      @buttonClickEvent="changeCurrentTab"></MenuContainer>
    <SelectContainer v-else
      :cardID="currentCard"
      @closeSelectEvent="closeSelectTab"></SelectContainer> 
  </div>
</template>


<script>
import GlassmorphHeader from './components/Header/GlassmorphHeader.vue';
import MenuContainer from './components/Containers/MenuContainer.vue';
import SelectContainer from './components/Containers/SelectContainer.vue';

export default {
    data() {
      return {
        menuView: true,
        currentCard: ''
      }
    },
    name: 'App',
    components: {
      GlassmorphHeader,
      MenuContainer,
      SelectContainer
  },
  methods: {
    closeSelectTab() {
      this.menuView = true
    },
    changeCurrentTab(id) {
      console.log(id)
      this.menuView = false
      this.currentCard = id
    }
  }
  }
</script>


<style>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
