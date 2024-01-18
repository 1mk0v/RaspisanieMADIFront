<template>
    <div id="select-container">
        <div id="tool-bar">
            <ExitButton
                @exitClickEvent="closeSelect">
            </ExitButton>
            <TextInfoConatiner 
                v-for="text in this.settings['choosedParams']" 
                :customText="text" 
                :key="text">
            </TextInfoConatiner>
        </div>
        <DataContainer
            :data-list="response"
            @click-data-event="addCommunity">
        </DataContainer>
    </div>
</template>

<script>
import ExitButton from '../Buttons/ExitButton.vue';
import TextInfoConatiner from './TextInfoConatiner.vue';
import DataContainer from './DataContainer.vue';
import { API } from '@/api.js';

export default {
    data() {
        return {
            response: '',
            weekday: '',
            communityValue: '',
            settings: {
                'choosedParams': []
            }
        }
    },
    props: {
        cardID:String
    },
    watch: {
        cardID: {
            handler(value) {
                if (value== 'group') {
                    this.settings['choosedParams'] = ['Выберите группу']
                    this.getCommunityList(value)
                } else if (value == 'teacher') {
                    this.settings['choosedParams'] = ['Выберите преподавателя']
                    this.getCommunityList(value)
                } else if (value == 'exam') {
                    this.settings['choosedParams'] = ['Пока не реализовано']
                } else if (value == 'auditorium') {
                    this.settings['choosedParams'] = ['Пока не реализовано']
                }
            },
            deep: true,
            immediate: true
        },
        communityValue: {
            handler() {
                console.log('communityValue')
            },
            deep: true,
            immediate: true
        }
    },
    emits: ['closeSelectEvent'],
    components: {
        ExitButton, TextInfoConatiner, DataContainer
    },

    methods: {
        closeSelect() {
            this.$emit('closeSelectEvent')
        },
        getCommunityList(community) {
            const communityAPI = new API('/' + community);
            communityAPI.get().then(
                (data) => {
                    this.response = data.data
                }
            ).catch(
                console.log('SOMETHING WRONG')
            )
        },
        getCommunitySchedule(community, id) {
            const communityAPI = new API('/' + community);
            communityAPI.getSchedule(id).then(
                (data) => {
                    console.log(data.data)
                    this.response = data.data
                }
            ).catch(
                console.log('SOMETHING WRONG')
            )
        },
        addCommunity(target) {
            this.getCommunitySchedule(this.cardID, target.id)
            this.settings['choosedParams'] = [target.innerText]
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