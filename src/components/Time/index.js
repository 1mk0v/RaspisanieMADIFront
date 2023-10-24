import { SVG_RASPISANIE_2 } from "./svg.js";

export const Time = {
    data() {
        return {
            svg: SVG_RASPISANIE_2,
            weekdayType:'',
            weekdayIntervalId: '',
            timerIntervalId: '',
            timer: ''
        }
    },
    template: `
    <div class="uk-inline">
        <div v-html='this.svg'></div>
        <div class="uk-overlay uk-light uk-position-center uk-text-center">
            <h3>{{weekdayType}}</h3>
            <p>{{timer}}</p>
        </div>
    </div>
    `,
    created() {
        this.timerIntervalId = setInterval(() => {
            let date = new Date()
            this.timer = date.toLocaleTimeString()
        }, 1000);
        this.weekdayIntervalId = setInterval(() => {
            let currentDate = new Date()
            let currentYearDate = new Date(currentDate.getFullYear(), 0, 0)
            let week = Math.floor(
                (currentDate.getTime() - currentYearDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
            if (week%2 == 0) this.weekdayType = "Числитель"
            else this.weekdayType = "Знаменатель"
        }, 1000)
    },
}