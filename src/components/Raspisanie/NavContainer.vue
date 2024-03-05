
<template>
    <div>
        <div id="buttons-container">
            <ControlKeys 
                nameId='button-home'
                :flexAuto="false"
                @clickComponentEvent="goToHome">
                <font-awesome-icon icon="fa-solid fa-house" />
            </ControlKeys>
            <ControlKeys
                :flexAuto="true">
                {{ title }}
            </ControlKeys>
            <ControlKeys
                :flexAuto="false">
                <font-awesome-icon icon="fa-solid fa-filter" />
            </ControlKeys>
        </div>
    </div>
</template>
  
  
<script>
import ControlKeys from '../Buttons/ControlKeys.vue';
// import ScheduleButtons from '../Buttons/ScheduleButtons.vue';

export default {
    data() {
        return {
        }
    },
    props: {title:String},
    emits: ['goHomeEvent'],
    name: 'NavContainer',
    components: {
        ControlKeys
        // ScheduleButtons
    },
    methods: {
        goToHome(event) {
            this.$emit('goHomeEvent', event)
        }
    }
}
</script>
  
  
<style></style>
  