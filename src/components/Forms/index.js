import { Schedule } from "../Schedule/index.js"

export const Form = {
    props:['community'],
    emits:['chooseNewOption'],
    data() {
        return {
            communityData: Array(),
            selected: ''
        }
    },
    created() {
        this.community.get().then((data) => {
            this.communityData = data.data
        }
    )
    },
    template: `
    <div class="uk-margin">
        <select 
            v-model='this.selected'
            @change='takeNewOption'
            class="uk-select" aria-label="Select">
            <option v-for='element of communityData'
                :value="element['id']">
                {{element['value']}}
            </option>
        </select>
    </div>
    `,
    methods: {
        takeNewOption() {
            this.$emit('chooseNewOption', this.selected)
        }
    },
    components: {
        "schedule":Schedule
    }
}