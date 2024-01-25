<template>
    <div id="data-container" v-if="this.scheduleOnWeekday.length > 0">
        <ScheduleCard
            v-for="element in this.scheduleOnWeekday"
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
import ScheduleCard from '../Cards/ScheduleCard.vue'
import { API } from '@/api'

export default {
    name: 'DataContainer',
    data(){
        return {
            data: [],
            scheduleFull: [],
            scheduleOnWeekday: []
        }
    },
    props: {
        weekday:String,
        communityID:String,
        cardID:String
    },
    created() {
        this.getCommunityList(this.cardID, '')
    },
    watch: {
        weekday: {
            handler(value) {
                if (value) {
                    this.getScheduleOnWeekday(value)
                } else {
                    this.scheduleOnWeekday = []
                }
            },
            deep: true,
            immediate: true
        },
        communityID: {
            handler(value) {
                if (value) {
                    this.getCommunitySchedule(this.cardID, '', value)
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

        getCommunitySchedule(community, path, id) {
            const communityAPI = new API('/' + community + path);
            communityAPI.getSchedule(id).then(
                (data) => {
                    this.scheduleFull = data.data
                    this.data = []
                    this.getWeekdaysListFromSchedule(data.data)
                }
            ).catch(
                console.log('SOMETHING WRONG')
            )
        },

        getWeekdaysListFromSchedule(schedule) {
            let data = []
            let index = -1
            for (let element of schedule) {
                if (!(data.includes(element.weekday))) {
                    data.push(element.weekday)
                }
            }
            for (let weekday of data) {this.data.push({"id":++index, "value":weekday})}
        }, 

        getScheduleOnWeekday(weekday) {
            let scheduleOnWeekday = []
            for (let element of this.scheduleFull) {
                if (element.weekday == weekday) {
                    scheduleOnWeekday.push(element)
                }
            }
            this.scheduleOnWeekday = scheduleOnWeekday
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