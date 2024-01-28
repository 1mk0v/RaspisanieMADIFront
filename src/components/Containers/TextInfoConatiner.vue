<template>
    <div v-if="this.isButton"
        :style="this.customStyles"
        id="text-container"
        @click="clickButton">
        <span style="text-align: center;">{{ customText }}</span>
    </div>
    <div v-else
        id="text-container">
        <span style="text-align: center;">{{ customText }}</span>
    </div>
</template>

<script>
export default {
    props: {
        isButton:Boolean,
        id:String,
        customText:String,
        customStyles:String
    },
    emits:['buttonClickEvent'],
    methods:{
        clickButton() {
            this.$emit('buttonClickEvent', this.id)
        }
    }
}
</script>

<style>
#text-container {
    display: flex;
    padding: 11px 27px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 50px;
    background: linear-gradient(113deg, rgba(221, 221, 221, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
}
</style>