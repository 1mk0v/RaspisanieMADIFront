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
        <DataContainer
            :weekday="weekday"
            :communityID="communityID"
            :card-i-d="this.id"
            @click-data-event="addParams">
        </DataContainer>
    </div>
</template>

<script>
import ExitButton from '../Buttons/ExitButton.vue';
import TextInfoConatiner from './TextInfoConatiner.vue';
import DataContainer from './DataContainer.vue';

export default {
    data() {
        return {
            id: this.cardID,
            weekday: '',
            communityValue: '',
            communityID: '',
            inputList: []
        }
    },
    props: {
        cardID:String
    },
    watch: {
        id: {
            handler(value) {
                this.chooseTitle(value)
            },
            deep: true,
            immediate: true
        },
        weekday: {
            handler(value) {
                if (value == '' && this.communityValue != '') {
                    this.inputList = [{"id":"community", "value":this.communityValue, "isButton":false}]
                } else {
                    this.inputList = [{"id":"community", "value": this.communityValue, "isButton":false},
                                      {"id":"weekday", "value": this.weekday, "isButton":true}]
                }
            },
            deep: true,
            immediate: true
        },
        communityValue: {
            handler(value) {
                if (value == '') {
                    this.chooseTitle(this.cardID)
                } else {
                    this.inputList = [{"id":"community", "value":this.communityValue, "isButton":false}]
                }
            },
            deep: true,
            immediate: true
        },
    },
    emits: ['closeSelectEvent'],
    components: {
        ExitButton, TextInfoConatiner, DataContainer
    },

    methods: {
        closeSelect() {
            this.$emit('closeSelectEvent')
        },
        addParams(event) {
            if (['Понедельник','Вторник','Среда','Четверг',
                'Пятница','Суббота','Воскресенье'].includes(event.innerHTML)) {
                this.weekday = event.innerHTML
            } else {
                this.communityValue = event.innerHTML
                this.communityID = event.id
            }
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
            } else if (cardID == 'auditorium') {
                this.inputList = [{"id":"info", "value":'Пока не реализовано', "isButton":false}]
            }
        },
        buttonClick(id) {
            if (id == 'weekday') {
                this.weekday = ''
                this.inputList = [{"id":"community", "value":this.communityValue, "isButton":false}]
            } else if (['group', 'teacher'].includes(id)) {
                this.id = this.cardID+'/'+id
                console.log(this.id)
            }
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