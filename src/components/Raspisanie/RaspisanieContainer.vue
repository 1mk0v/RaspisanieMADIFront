<template>
    <div id="main-container" class="glassmorph-container">
        <NavContainer
            style="width: 100%"
            :title="navTitle"
            @goHomeEvent="goHomeEventHandler">
        </NavContainer>
        <div id="content">
            <ControlKeys nameId="raspisanie-arrow-up" :flexAuto="false" @clickComponentEvent="arrowUp">
                <font-awesome-icon icon="fa-solid fa-arrow-up" />
            </ControlKeys>
            <div id='overflow-container' class="overflow-y-scroll">
                <div id="block-content">
                    <slot>No data</slot>
                </div>
            </div>
            <ControlKeys nameId="raspisanie-arrow-down" :flexAuto="false" @clickComponentEvent="arrowDown">
                <font-awesome-icon icon="fa-solid fa-arrow-down" />
            </ControlKeys>
        </div>
    </div>
</template>
     
<script>
import ControlKeys from '../Buttons/ControlKeys.vue';
import NavContainer from './NavContainer.vue';

export default {
    data() {
        return {
            scrollValue: 200
        }
    },
    name: 'RaspisanieContainer',
    emits: ['changeTabEvent'],
    props: {
        navTitle:String
    },
    components: {
        ControlKeys,
        NavContainer
    },
    methods: {
        arrowDown() {
            let element = document.querySelector('#overflow-container')
            element.scrollBy({ top: this.scrollValue, behavior: 'smooth' })
        },
        arrowUp() {
            let element = document.querySelector('#overflow-container')
            element.scrollBy({ top: -this.scrollValue, behavior: 'smooth' })
        },
        goHomeEventHandler(event) {
            console.log(event)
            this.$emit('changeTabEvent', 'home')
        }
    }
}
</script>
  
  
<style scoped>
#main-container {
    display: flex;
    border-radius: 25px;
    gap: 25px;
    flex-direction: column;
    justify-content: space-between;
}

#block-content {
    gap: 10px;
    display: flex;
    flex-direction: column;
}

#content {
    flex: inherit;
    width: 100%;
    gap: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>