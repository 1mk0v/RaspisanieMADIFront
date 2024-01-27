<template>
    <div id="select-container">
        <div id="tool-bar">
            <ExitButton
                @exitClickEvent="closeSelect">
            </ExitButton>
            <TextInfoConatiner 
                v-for="element in this.inputList" 
                :customText="element.value"
                :isButton="element.isButton"
                :id="element.id"
                @buttonClickEvent="buttonClick" 
                :key="element">
            </TextInfoConatiner>
        </div>
        <ExamDataContainer
            :community-type="communityType"
            :communityID="communityID"
            :card-i-d="this.id"
            @click-data-event="addParams">
        </ExamDataContainer>
    </div>
</template>

<script>
import ExitButton from '../../Buttons/ExitButton.vue';
import TextInfoConatiner from '../TextInfoConatiner.vue';
import ExamDataContainer from './ExamDataContainer.vue';

export default {
    data() {
        return {
            id: this.cardID,
            communityType: '',
            communityValue: '',
            communityID: '',
            inputList: [
                {"id":"teacher", "value":'Преподаватель', "isButton":true},
                {"id":"group", "value":'Группа', "isButton":true}
            ]
        }
    },
    props: {
        cardID:String
    },
    watch: {
        communityValue: {
            handler(value) {
                if (value) {
                    this.inputList = [{"id":"info", "value":value, "isButton":false}]
                }
            },
            deep: true,
            immediate: true
        },
    },
    emits: ['closeSelectEvent'],
    components: {
        ExitButton, TextInfoConatiner, ExamDataContainer
    },

    methods: {
        closeSelect() {
            this.$emit('closeSelectEvent')
        },
        addParams(event) {
            console.log(event)
            this.communityValue = event.innerHTML
            this.communityID = event.id
        },
        chooseTitle(cardID) {
            if (cardID == 'group') {
                this.inputList = [{"id":"info", "value":'Выберите группу', "isButton":false}]
            } else if (cardID == 'teacher') {
                this.inputList = [{"id":"info", "value":'Выберите преподавателя', "isButton":false}]
            } else if (cardID == 'exam') {
                this.inputList = [
                    {"id":"teacher", "value":'Преподаватель', "isButton":true}, 
                    {"id":"group", "value":'Группа', "isButton":true}
                ]
            }
        },
        buttonClick(id) {
            if (['group', 'teacher'].includes(id)) {
                this.communityType = id
                this.chooseTitle(id)
            } 
            console.log(id)
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