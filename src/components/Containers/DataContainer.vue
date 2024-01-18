<template>
    <div id="data-container">
        <div class="option-data"
            v-for="element in dataList"
            :key="element.id"
            :id="element.id"
            @click="clickOnData">
            {{ element.value }}
        </div>
    </div>
</template>

<script>
// import TextInfoConatiner from './TextInfoConatiner.vue';
export default {
    name: 'DataContainer',
    data(){
        return {
        }
    },
    props: {
        dataList:Array
    },
    emits: ['clickDataEvent'],
    methods:{
        clickOnData(event) {
            console.log(event.target)
            this.$emit('clickDataEvent', event.target)
        }
    }
}
</script>

<style scoped>
#data-container {
    background: linear-gradient(
    112.75deg,
    rgba(221, 221, 221, 0.4) 99.98999834060669%,
    rgba(0, 0, 0, 0) 100%
    );
    border-radius: 25px;
    padding: 11px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;
    flex: 1;
    position: relative;
    overflow-y: auto;
    backdrop-filter: blur(10px);
}
.option-data {
    padding: 11px 22px;
    align-self: stretch;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.30);
    cursor: pointer;
}
</style>