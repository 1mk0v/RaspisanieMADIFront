<template>
    <div id="select-container">
        <div id="tool-bar">
            <ExitButton
                @exitClickEvent="closeSelect">
            </ExitButton>
            <TextInfoConatiner 
                customText="Свободные аудитории кафедры АСУ"
                :isButton="false"
                :id="this.id"
                :key="this.id">
            </TextInfoConatiner>
        </div>
        <AuditoriumsDataContainer
            :card-i-d="this.id">
        </AuditoriumsDataContainer>
    </div>
</template>

<script>
import ExitButton from '../../Buttons/ExitButton.vue';
import TextInfoConatiner from './../TextInfoConatiner.vue';
import AuditoriumsDataContainer from './AuditoriumsDataContainer.vue';

export default {
    data() {
        return {
            id: this.cardID
        }
    },
    props: {
        cardID:String
    },
    emits: ['closeSelectEvent'],
    components: {
    ExitButton, TextInfoConatiner,
    AuditoriumsDataContainer
},
    methods: {
        closeSelect() {
            this.$emit('closeSelectEvent')
        }
    }
}
</script>

<style scoped>
#select-container {
    display: flex;
    padding: 22px;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 40px;
    background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
    font-weight:400;
    position: relative;
    height: 50%;
    overflow: visible;
}
#tool-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    align-self: stretch;
}
</style>