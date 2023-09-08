import { Button } from "./components/MainButton/index.js";
import { SVG_RASPISANIE_2 } from "./svg/raspisanie.js";
import { SVG_GROUP, ICO_GROUP } from "./svg/group.js";
import { SVG_TEACHER, ICO_TEACHER} from "./svg/teacher.js";
import { SVG_AUDITORIUM, ICO_AUDITORIUM } from "./svg/auditorium.js";
import { SVG_EXAM, ICO_EXAM } from "./svg/examination.js";

const App = {
  data() {
    return {
      raspisanie:{
        SVG:SVG_RASPISANIE_2,
        ICO:`<div>Числитель</div><div>${setInterval(this.nowTime, 1000)}</div>` //NEED FUNC
      },
      group:{
        SVG:SVG_GROUP,
        ICO:ICO_GROUP
      },
      teacher:{
        SVG:SVG_TEACHER,
        ICO:ICO_TEACHER
      },
      auditorium: {
        SVG:SVG_AUDITORIUM,
        ICO:ICO_AUDITORIUM
      },
      examination: {
        SVG:SVG_EXAM,
        ICO:ICO_EXAM
      },
      style: {
        two_button_div:["display:flex", "justify-content:space-around","align-items:center"]
      },
    }
  },
  watch:{

  },
  template:
    `
    <div :style='style.two_button_div'>
      <main-button
        :svg='group.SVG'
        :ico='group.ICO'></main-button>
      <main-button
        :svg='teacher.SVG'
        :ico='teacher.ICO'></main-button>
    </div>
    <div style='display:flex;justify-content:center; align-items:center'>
      <main-button
        :svg='raspisanie.SVG'
        :ico='raspisanie.ICO'></main-button>
    </div>
    <div :style='style.two_button_div'>
      <main-button
        :svg='examination.SVG'
        :ico='examination.ICO'></main-button>
      <main-button
        :svg='auditorium.SVG'
        :ico='auditorium.ICO'></main-button>
    </div>
    `,
  methods: {
    nowTime () {
      return new Date().toString("hh:mm:ss");
  }
  },
  components: {
    'main-button': Button
  }
};

const app = Vue.createApp(App);

app.mount('#vue-app');
