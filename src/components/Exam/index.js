export const Exam = {
    props:['communityID', 'community'],
    data() {
        return {
            exam: ''
        }
    },
    watch: {
        communityID: {
            handler() {
                this.getCurrentWeekday()
                this.community.getExam(this.communityID)
                .then((data) => {
                       this.getSortedData(data)
                    })
                .catch((error) => {
                    // TMP ERROR
                    this.schedule = this.notFound
                    UIkit.notification({message: "Экзамены не найдены", status: 'primary'})
                    
                })
            },
            deep:true
        }
    },
    template: `
    <div class="uk-margin-top">
        <ul uk-accordion v-if='exam !== ""'>
            <li class="uk-close"
                v-for='(element, key) in exam'>
                <a class="uk-accordion-title">{{key}}</a>
                <div class="uk-accordion-content">
                <table class="uk-table uk-table-divider" >
                    <thead>
                        <tr>
                            <th>Время</th>
                            <th>Дисциплина</th>
                            <th>Тип занятия</th>
                            <th>Периодичность</th>
                            <th>Аудитория</th>
                            <th v-if='this.type != "Преподаватель"'>Преподаватель</th>
                            <th v-else>Группа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for='element in exam[key]'>
                            <td v-if='element["date"]["time"] != null'>
                                {{element["date"]["time"]["start"].slice(0,-3)}}-{{element["date"]["time"]["end"].slice(0,-3)}}</td>
                            <td v-else>-</td>
                            
                            <td v-if='element["discipline"] != null'>{{element["discipline"]}}</td>
                            <td v-else>-</td>

                            <td>{{element["type"]}}</td>

                            <td v-if='element["date"]["friequency"] != null'>{{element["date"]["friequency"]}}</td>
                            <td v-else>-</td>

                            <td v-if='element["auditorium"] != null'>{{element["auditorium"]}}</td>
                            <td v-else>-</td>

                            <th v-if='element["teacher"] != null'>{{element["teacher"]["value"]}}</th>
                            <th v-else='element["group"] != null'>{{element["group"]["value"]}}</th>
                            <th v-else>-</th>
                        </tr>
                    </tbody>
                </table>
                </div>
            </li>
        </ul>
    </div>`,
    methods: {
        getSortedData(data) {
            let schedule = Object()
            for (let element of data.data) {
                let weekday = element.weekday
                if (schedule[`${weekday}`] == undefined) {
                    schedule[`${weekday}`] = Array()
                }
                delete element.weekday
                schedule[`${weekday}`].push(element) 
            }
            this.schedule = schedule
        },
        getCurrentWeekday() {
            let date = new Date()
            console.log(date.getDay())
        }
    }
}