<template>
    <div v-on:click="clickEvent">
     <div id="card">
       <div id="cardText">
         {{ cardName }}
       </div>
     </div>
    </div>
</template>
   
<script>
  export default {
    data() {
      return {
        id: '#'+this.cardID
      }
    },
     name: 'ButtonCard',
     props: {
       cardName: String,
       cardID: String
     },
     emits: ['clickCardEvent'],
     methods: {
       clickEvent() {
         this.$emit('clickCardEvent', this.id);
       }
     }
  }
</script>
   
   
   <style scoped>
     #card {
       display: inline-flex;
       padding: 4.0625rem 1.25rem;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       border-radius: 3.125rem;
       background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
       backdrop-filter: blur(10px);
       display: flex;
       justify-content: space-between;
       align-content: space-around;
       flex-wrap: wrap;
     }
     #cardText {
       display: flex;
       width: 16.875rem;
       height: 8.1875rem;
       flex-direction: column;
       justify-content: center;
       flex-shrink: 0;
       font-size: 32px;
     }
   </style>
   