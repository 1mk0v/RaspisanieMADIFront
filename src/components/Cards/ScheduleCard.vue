<template>
    <div id="schedule-card">
        <div id="time-container">
            <div>{{ time.start }}</div>
            <div>-</div>
            <div>{{ time.end }}</div>
        </div>
        <div id="line-container">
        </div>
        <div id="info-container">
            <div id="lesson">
                <div style="font-weight: bold;">{{ data.discipline }}</div>
                <div style="font-weight: lighter;">{{ data.type }}</div>
            </div>
            <div class='param-container' v-if="data.auditorium" id="auditorium">
                <div>
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                </div>
                <div>{{ data.auditorium }}</div>
            </div>
            <div class='param-container' v-if="community" id="community">
                <div>
                    <font-awesome-icon icon="fa-regular fa-user" />
                </div>
                <div>{{ community }}</div>
            </div>
            <div class='param-container' id="weekday-type">
                <div>
                    <font-awesome-icon icon="fa-regular fa-calendar"></font-awesome-icon>
                </div>
                <div>{{ calendar }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'ScheduleCard',
    props: {
        data:Object
    },
    computed: {
        community() {
            return this.data.group && this.data.group.value || this.data.teacher && this.data.teacher.value || '' 
        },
        time() {
            return this.data.date.time && {
                "start":this.data.date.time.start.slice(0, -3), 
                "end": (this.data.date.time.end && this.data.date.time.end.slice(0, -3) || '')
            } || {"start":'Весь', "end":'день'}
        },
        calendar() {
            return this.data.date.friequency || this.data.date.day
        }
    }
}
</script>

<style scoped>
#schedule-card {
    display: flex;
    padding: 11px 22px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(10px);
}
#time-container {
    text-align: center;
}
.param-container {
    display: inherit;
    gap: 10px;
}
#line-container {
    border-left: 2px solid #fff;
    height: 100%;
}
#info-container {
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
}
</style>