import { Card } from "../Card/index.js"
import { Form } from "../Forms/index.js"
import { Schedule } from "../Schedule/index.js"
import { Exam } from "../Exam/index.js"

export const ModalWindow = {
    props:['title', 'cardSVG', 'windowNumber', 'communityAPI'],
    data() {
        return {
            href: "#modal-full" + this.windowNumber,
            id: "modal-full" + this.windowNumber,
            currentID: ''
        }
    },
    template: `
    <a :href='href' uk-toggle>
        <card
            :name='this.title'
            :svg='this.cardSVG'>
        </card>
    </a>

    <div :id='id' class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog uk-light">
            <button class="uk-modal-close-full uk-close-large" type="button" style='background-color: #374151' uk-close ></button>
            <div style='background-color: #374151' uk-height-viewport>
                <div class="uk-padding-large">
                    <h2>{{this.title}}</h2>
                    <my-form
                        @chooseNewOption='setNewID'
                        :community='this.communityAPI'
                    ></my-form>
                    <schedule v-if='this.title == "Преподаватель" || this.title == "Группа"'
                        :communityID='currentID'
                        :community='this.communityAPI'
                        :type='this.title'></schedule>
                    <exam v-if='this.title == "Экзамены"'
                        :communityID='currentID'
                        :community='this.communityAPI'
                        :type='this.title'></exam>
                </div>
            </div>
        </div>
    </div>`,
    methods: {
        setNewID(id) {
            this.currentID = id
        }
    },
    components:{
        'card': Card,
        'my-form': Form,
        'schedule': Schedule,
        'exam': Exam
    }
}