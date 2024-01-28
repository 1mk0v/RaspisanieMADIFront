<template>
    <div id="data-container" v-if="this.data.length > 0">
        <ScheduleCard
            v-for="element in this.scheduleOnWeekday"
            :data="element"
            :key="element.discipline+element.time">
        </ScheduleCard>
    </div>
</template>

<script>
import ScheduleCard from '../../Cards/ScheduleCard.vue'
import { API } from '@/api'

export default {
    name: 'AuditoriumsDataContainer',
    data(){
        return {
            data: [],
        }
    },
    props: {
        cardID:String
    },
    created() {
        this.getFreeAuditoriums()
    },
    components: {
        ScheduleCard
    },
    methods:{
        getFreeAuditoriums() {
            const communityAPI = new API('');
            communityAPI.getFreeAuditoriums().then(
                (data) => {
                    this.data = data.data
                }
            ).catch(
                (error) => {
                    console.log(error.error)
                }
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