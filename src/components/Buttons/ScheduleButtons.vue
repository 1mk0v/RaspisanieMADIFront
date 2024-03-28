<template>
  <div id="button-container" @click="clickEvent">
    <div id="button-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameId: String
  },
  emits: ['clickEvent'],
  name: 'ScheduleButton',
  methods: {
    clickEvent() {
      return this.$emit('clickEvent', this.nameId)
    }
  }
}
</script>
  
<style scoped>
@media (hover:none) {
  #button-container:active {
    background: rgba(0, 0, 0, 0.50);
  }
}

@media (hover:hover)  {
  #button-container:hover {
    background: rgba(0, 0, 0, 0.50);
    transition: 300ms;
  }
}

#button-container {
  border-radius: 20px;
  cursor: pointer;
  padding: 20px 20px;
  border: 1px solid #fff;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.30);
}

#button-content {
  align-self: center;
  font-size: 18px;
  font-weight: 500;
}
</style>