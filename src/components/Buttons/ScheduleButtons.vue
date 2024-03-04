<template>
  <div id="button-container" v-on:click="clickEvent">
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
#button-container {
  border-radius: 20px;
  padding: 20px 20px;
  border: 1px solid #fff;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.30);
}

#button-content {
  align-self: center;
  font-size: 16px;
  font-weight: normal;
}
</style>
     