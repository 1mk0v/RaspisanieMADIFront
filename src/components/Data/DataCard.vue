<template>
    <div style="width:100%">
        <div id="data-container" v-if="data != ''">
            <span class="option-element" v-for="element in data" :key="element.id">
                {{ element.value }}
            </span>
        </div>
    </div>
    
</template>

<script>
    export default  {
        data() {
            return {

            }
        },
        props: {
            data:Object
        }
    }
</script>

<style scoped>
#data-container {
    display: flex;
    padding: 22px 27px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    align-self: stretch;
    border-radius: 20px;
    background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
}
.option-element {
    display: flex;
    padding: 10px 20px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.10);
}
</style>