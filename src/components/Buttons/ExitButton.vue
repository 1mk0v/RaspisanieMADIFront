<template>
    <div id="button-container" @click="exitClick">
        <div id="exit-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="13" viewBox="0 0 23 13" fill="none">
                <path d="M0 6.5L10 12.2735V0.726497L0 6.5ZM23 5.5L9 5.5V7.5L23 7.5V5.5Z" fill="white"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ExitButton',
        emits:['exitClickEvent'],
        methods:{
            exitClick() {
                this.$emit('exitClickEvent')
            }
        }
    }
</script>

<style scoped>
#button-container {
    display: flex;
    padding: 11px 22px;
    align-items: center;
    gap: 272px;
    align-self: stretch;
    border-radius: 50px;
    background: linear-gradient(113deg, rgba(221, 221, 221, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
}
#exit-button {
    display: flex;
    padding: 11px;
    align-items: center;
    gap: 10px;
}
</style>