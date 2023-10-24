export const Schedule = {
    props:['communityID', 'community', 'type'],
    data() {
        return {
            schedule: '',
            currentWeekday: '',
            notFound: 'NotFound',
            // weekdayStyle : 'background-color:#000'
        }
    },
    watch: {
        communityID: {
            handler() {
                this.getCurrentWeekday()
                this.community.getSchedule(this.communityID)
                .then((data) => {
                       this.getSortedData(data)
                    })
                .catch((error) => {
                    // TMP ERROR
                    this.schedule = this.notFound
                    UIkit.notification({message: "Расписание не найдено", status: 'primary'})
                })
            },
            deep:true
        }
    },
    template: `
    <div class="uk-margin-top" v-if='schedule != notFound'>
        <ul uk-accordion>
            <li class="uk-close"
                v-for='(element, key) in schedule'>
                <a class="uk-accordion-title">{{key}}</a>
                <div class="uk-accordion-content">
                    <div class='uk-overflow-auto'>
                    <table class="uk-table uk-table-divider uk-table-middle uk-table-justify" >
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
                                v-for='element in schedule[key]'>
                                <td v-if='element["date"]["time"] != null'>
                                    {{element["date"]["time"]["start"].slice(0,-3)}}-{{element["date"]["time"]["end"].slice(0,-3)}}</td>
                                <td v-else></td>

                                <td v-if='element["discipline"] != null'>{{element["discipline"]}}</td>
                                <td v-else></td>

                                <td v-if='element["type"] != null'>{{element["type"]}}</td>
                                <td v-else></td>

                                <td v-if='element["date"]["friequency"] != null'>{{element["date"]["friequency"]}}</td>
                                <td v-else></td>

                                <td v-if='element["auditorium"] != null'>{{element["auditorium"]}}</td>
                                <td v-else></td>

                                <td v-if='element["teacher"] != null'>{{element["teacher"]["value"]}}</td>
                                <td v-if='element["group"] != null'>{{element["group"]["value"]}}</td>
                                <td v-else></td>
                                
                            </tr>
                        </tbody>
                    </table>
                    </div>
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
            let weekday = {
                1:"Понедельник",
                2:"Вторник",
                3:"Среда",
                4:"Четверг",
                5:"Пятница",
                6:"Суббота",
                7:"Воскресенье",
            }
            this.currentWeekday = weekday[`${date.getDay()}`]
        }
    }
}