<template>
    <div id="data-container" v-if="this.exams.length > 0">
        <ScheduleCard
            v-for="element in this.exams"
            :data="element"
            :key="element.discipline+element.time">
        </ScheduleCard>
    </div>
    <div id="data-container" v-else-if="this.data.length > 0 ">
        <div class="option-data"
            v-for="element in this.data"
            :key="element"
            :id="element.id"
            @click="clickOnData">
            {{ element.value }}
        </div>
    </div>
</template>

<script>
import ScheduleCard from '../../Cards/ScheduleCard.vue'
import { API } from '@/api'

export default {
    name: 'DataContainer',
    data(){
        return {
            data: [],
            exams: []
        }
    },
    props: {
        communityType:String,
        communityID:String,
        cardID:String
    },
    watch: {
        communityType: {
            handler(value) {
                if (value) {
                    this.getCommunityList(value)
                    this.path = this.path + value
                }
                
            },
            deep: true,
            immediate: true
        },
        communityID: {
            handler(value) {
                if (value) {
                    console.log(value)
                    this.getCommunityExams(this.communityType, '', value)
                }
            },
            deep: true,
            immediate: true
        },
    },
    emits: ['clickDataEvent'],
    components: {
        ScheduleCard
    },
    methods:{
        clickOnData(event) {
            this.$emit('clickDataEvent', event.target)
        },
        async getCommunityList(community, path = '') {
            const communityAPI = new API('/' + community + path);
            await communityAPI.get()
            .then(
                (data) => {
                    this.data = data.data
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        },

        getCommunityExams(community, path, id) {
            const communityAPI = new API('/' + community + path);
            console.log(communityAPI.examHost)
            communityAPI.getExam(id).then(
                (data) => {
                    this.exams = data.data
                    this.data = []
                }
            ).catch(
                console.log('SOMETHING WRONG')
            )
        },
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