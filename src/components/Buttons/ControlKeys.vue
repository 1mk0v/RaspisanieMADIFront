<template>
    <div class="key-container" v-on:click="clickEvent">
        <div class="key-content">
            <slot></slot>
        </div>
    </div>
  </template>
     
  <script>
  export default {
    props:{
      nameId:String
    },
    emits:['clickComponentEvent'],
    name: 'ControleKeys',
    methods: {
      clickEvent() {
        return this.$emit('clickComponentEvent', this.nameId)
      }
    }
  }
  </script>
  
  <style scoped>
    .key-container {
      display: flex;
      border-radius: 10px;
      padding: 5px 10px;
      border: 1px solid #fff;
      gap: 25px;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.30);
    }
    .key-content {
      display: flex;
      justify-content: space-between;
      align-self: center;
      font-size: 16px;
      font-weight: normal;
    }
  </style>
     