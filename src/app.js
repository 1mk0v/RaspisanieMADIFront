import { Time } from "./components/Time/index.js";
import { ModalWindow } from "./components/ModalWindow/index.js";
import { SVG_TEACHER } from "./svg/teacher.js";
import { SVG_GROUP } from "./svg/group.js";
import { SVG_EXAM } from "./svg/examination.js";
import { SVG_AUDITORIUM } from "./svg/auditorium.js";
import { TEACHER_API, GROUP_API } from "./api.js"

const App = {
    data() {
        return {
            teacherSVG: SVG_TEACHER,
            groupSVG: SVG_GROUP,
            examSVG: SVG_EXAM,
            auditoriumSVG: SVG_AUDITORIUM,
            teacherAPI: TEACHER_API,
            groupAPI: GROUP_API
        }
    },
    template: `
    <div class="uk-container uk-width-3xlarge">

            <div class="uk-container">
                <div class="uk-flex uk-flex-center uk-flex-between">
                    <modal-window
                        :cardSVG='this.teacherSVG'
                        :title='"Преподаватель"'
                        :windowNumber='"1"'
                        :communityAPI='this.teacherAPI'></modal-window>
                    <modal-window
                        :cardSVG='this.groupSVG'
                        :title='"Группа"'
                        :windowNumber='"2"'
                        :communityAPI='this.groupAPI'></modal-window>
                </div>
            </div>

            <div class="uk-container uk-margin uk-width-medium">
                <timer></timer>
            </div>

            <div class="uk-container">
                <div class="uk-flex uk-flex-center uk-flex-between">
                    <modal-window
                        :cardSVG='this.examSVG'
                        :title='"Экзамены"'
                        :windowNumber='"3"'
                        :communityAPI='this.groupAPI'></modal-window>
                </div>
            </div>
    </div>
    `,
    components: {
        'timer': Time,
        'modal-window': ModalWindow
    }
}

const app = Vue.createApp(App);
app.mount('#app');