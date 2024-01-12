<template>
    <div id="exit-button" @click="exitClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 23" fill="none">
          <path d="M1 11L11 16.7735V5.2265L1 11ZM24 10L10 10V12L24 12V10Z" fill="white"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name:'ExitButton',
        // props:{
        //     width:Number,
        //     height:Number
        // },
        emits:['exitClickEvent'],
        methods:{
            exitClick() {
                this.$emit('exitClickEvent')
            }
        }
    }
</script>

<style scoped>
#exit-button {
  display: flex;
  padding: 11px;
  align-items: center;
  border-radius: 50px;
  background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(10px);
}
</style>