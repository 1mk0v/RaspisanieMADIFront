<template>
    <div id="menu-container">
        <ButtonCard
            card-name="Расписание групп"
            card-i-d="group"
            @click-card-event="clickCard">
        </ButtonCard>
        <ButtonCard
            card-name="Расписание преподавателей"
            card-i-d="teacher"
            @click-card-event="clickCard">
        </ButtonCard>
        <ButtonCard
            card-name="Расписание экзаменов"
            card-i-d="exam"
            @click-card-event="clickCard">
        </ButtonCard>
        <ButtonCard
            card-name="Свободные аудитории"
            card-i-d="auditorium"
            @click-card-event="clickCard">
        </ButtonCard>
    </div>
</template>

<script>
    import ButtonCard from './../Buttons/ButtonCard.vue';

    export default {
        name: "MenuContainer",
        emits: ['buttonClickEvent'],
        components: {
            ButtonCard
        },
        methods: {
            clickCard(id) {
                this.$emit('buttonClickEvent', id)
            }
        }
    }
</script>

<style scoped>
#menu-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    flex: 1 0 0;
    align-self: stretch;
    flex-wrap: wrap;
}
</style>