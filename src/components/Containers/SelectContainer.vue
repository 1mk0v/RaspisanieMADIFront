<template>
    <div id="select-container">
        <div id="tool-bar">
            <ExitButton
                @exitClickEvent="closeSelect"></ExitButton>
            <TextInfoConatiner v-for="text in this.settings['choosedParams']" :customText="text" :key="text"></TextInfoConatiner>
        </div>
    </div>
</template>

<script>
import ExitButton from '../Buttons/ExitButton.vue';
import TextInfoConatiner from './TextInfoConatiner.vue';
import { watch } from 'vue';

export default {
    props: {
        cardID:String
    },
    data() {
        return {
            weekday: '',
            textToChoose: '',
            settings: {
                'choosedParams': [this.cardID]
            }
        }
    },
    setup(props) {
        watch(() => [props.cardID], (newValues, oldValues) => {
          console.log('Prop values changed:', newValues, oldValues);
        });
    },
    // watch: {
    //     cardID() {
    //         if (this.card == 'group') {
    //             this.textToChoose = 'Выберите группу'
    //         } else if (this.card == 'teacher') {
    //             this.textToChoose = 'Выберите преподавателя'
    //         } else if (this.card == 'exams') {
    //             this.textToChoose = 'Пока не реализовано'
    //         } else if (this.card == 'auditoriums') {
    //             this.textToChoose = 'Пока не реализовано'
    //         }
    //     }
    // },
    emits: ['closeSelectEvent'],
    components: {
        ExitButton, TextInfoConatiner
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
}
#tool-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    align-self: stretch;
}
</style>