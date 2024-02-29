<template>
  <div id="weather-info">
    <span style="font-family: 'Rubik Medium', sans-serif; font-size: 22px; font-weight:500">
      Москва
    </span>
    <span style="font-family: 'Rubik Medium', sans-serif; font-size: 96px; font-weight:500">
      {{ !this.dataOfWeather.current || this.dataOfWeather.current.temp_c }}°C
    </span>
    <span>{{ !this.dataOfWeather.current || this.dataOfWeather.current.condition.text }}</span>
  </div>
  <div id="other-info">
    <WeatherCard
      title='Ветер'
      unit="м/с"
      :value="!this.dataOfWeather.current || this.dataOfWeather.current.wind_mph">
      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.625 1.125C5.625 1.4707 5.9043 1.75 6.25 1.75H6.875C7.2207 1.75 7.5 2.0293 7.5 2.375C7.5 2.7207 7.2207 3 6.875 3H0.625C0.279297 3 0 3.2793 0 3.625C0 3.9707 0.279297 4.25 0.625 4.25H6.875C7.91016 4.25 8.75 3.41016 8.75 2.375C8.75 1.33984 7.91016 0.5 6.875 0.5H6.25C5.9043 0.5 5.625 0.779297 5.625 1.125ZM6.875 8C6.875 8.3457 7.1543 8.625 7.5 8.625H8.125C9.16016 8.625 10 7.78516 10 6.75C10 5.71484 9.16016 4.875 8.125 4.875H0.625C0.279297 4.875 0 5.1543 0 5.5C0 5.8457 0.279297 6.125 0.625 6.125H8.125C8.4707 6.125 8.75 6.4043 8.75 6.75C8.75 7.0957 8.4707 7.375 8.125 7.375H7.5C7.1543 7.375 6.875 7.6543 6.875 8ZM2.5 10.5H3.125C4.16016 10.5 5 9.66016 5 8.625C5 7.58984 4.16016 6.75 3.125 6.75H0.625C0.279297 6.75 0 7.0293 0 7.375C0 7.7207 0.279297 8 0.625 8H3.125C3.4707 8 3.75 8.2793 3.75 8.625C3.75 8.9707 3.4707 9.25 3.125 9.25H2.5C2.1543 9.25 1.875 9.5293 1.875 9.875C1.875 10.2207 2.1543 10.5 2.5 10.5Z" fill="white"/>
      </svg>
    </WeatherCard>
    <WeatherCard
      title='Влажность'
      unit="%"
      :value="!this.dataOfWeather.current || this.dataOfWeather.current.humidity">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_88_3121)">
          <path d="M4.08301 10.5C2.0127 10.5 0.333008 8.82031 0.333008 6.75C0.333008 4.96875 2.87598 1.62695 3.58691 0.728516C3.7041 0.582031 3.87793 0.5 4.06543 0.5H4.10059C4.28809 0.5 4.46191 0.582031 4.5791 0.728516C5.29004 1.62695 7.83301 4.96875 7.83301 6.75C7.83301 8.82031 6.15332 10.5 4.08301 10.5ZM2.20801 7.0625C2.20801 6.89062 2.06738 6.75 1.89551 6.75C1.72363 6.75 1.58301 6.89062 1.58301 7.0625C1.58301 8.27148 2.56152 9.25 3.77051 9.25C3.94238 9.25 4.08301 9.10938 4.08301 8.9375C4.08301 8.76562 3.94238 8.625 3.77051 8.625C2.90723 8.625 2.20801 7.92578 2.20801 7.0625Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_88_3121">
            <rect width="10" height="10" fill="white" transform="translate(0.333008 0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </WeatherCard>
    <WeatherCard
      title='Осадки'
      unit="мм"
      :value="!this.dataOfWeather.current || this.dataOfWeather.current.precip_mm">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_88_3128)">
          <path d="M2.54199 6.75C1.50684 6.75 0.666992 5.91016 0.666992 4.875C0.666992 4.04492 1.20605 3.33984 1.9541 3.09375C1.93066 2.96289 1.91699 2.82617 1.91699 2.6875C1.91699 1.47852 2.89551 0.5 4.10449 0.5C4.94629 0.5 5.67676 0.974609 6.04199 1.67188C6.3291 1.33789 6.75488 1.125 7.22949 1.125C8.09277 1.125 8.79199 1.82422 8.79199 2.6875C8.79199 2.79492 8.78027 2.89844 8.76074 3C8.77051 3 8.78223 3 8.79199 3C9.82715 3 10.667 3.83984 10.667 4.875C10.667 5.91016 9.82715 6.75 8.79199 6.75H2.54199ZM2.40918 7.76562C2.43457 7.7168 2.48535 7.6875 2.54199 7.6875C2.59863 7.6875 2.64746 7.7168 2.6748 7.76562L3.36035 9.02734C3.44043 9.17383 3.48145 9.33594 3.48145 9.50195V9.56055C3.48145 10.0781 3.06152 10.498 2.54395 10.498C2.02637 10.498 1.60645 10.0781 1.60645 9.56055V9.50195C1.60645 9.33594 1.64746 9.17188 1.72754 9.02734L2.40918 7.76562ZM5.53418 7.76562C5.55957 7.7168 5.61035 7.6875 5.66699 7.6875C5.72363 7.6875 5.77246 7.7168 5.7998 7.76562L6.48535 9.02734C6.56543 9.17383 6.60645 9.33594 6.60645 9.50195V9.56055C6.60645 10.0781 6.18652 10.498 5.66895 10.498C5.15137 10.498 4.73145 10.0781 4.73145 9.56055V9.50195C4.73145 9.33594 4.77246 9.17188 4.85254 9.02734L5.53418 7.76562ZM7.97363 9.02734L8.65918 7.76562C8.68457 7.7168 8.73535 7.6875 8.79199 7.6875C8.84863 7.6875 8.89746 7.7168 8.9248 7.76562L9.61035 9.02734C9.69043 9.17383 9.73145 9.33594 9.73145 9.50195V9.56055C9.73145 10.0781 9.31152 10.498 8.79395 10.498C8.27637 10.498 7.85645 10.0781 7.85645 9.56055V9.50195C7.85645 9.33594 7.89746 9.17188 7.97754 9.02734H7.97363Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_88_3128">
            <rect width="10" height="10" fill="white" transform="translate(0.666992 0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </WeatherCard>
  </div>

</template>
   
<script>

import WeatherCard from './WeatherCard.vue';

export default {
  name: 'WeatherInfo',
  data() {
    return {
      dataOfWeather: {}
    }
  },
  created() {
    this.getWeatherData().then(value => {
      this.dataOfWeather = value;
    })
    this.timerIntervalId = setInterval(() => {
      this.getWeatherData().then(
      value => { this.dataOfWeather = value }
    )
    }, 1000*60*60);
  },
  components: {
    WeatherCard
  },
  methods: {
    getWeatherData: async() => {
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=%2055.748972%2C%2037.5385%20';
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '613a09796amsh932421dd155f093p1f6361jsn57c8dd7418e9',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
      };
      try {
          const response = await fetch(url, options);
          const result = await response.json();
          return result
      } catch (error) {
          console.error(error);
      }
    }
  }
}

</script>


<style scoped>
@font-face {
  font-family: "Rubik Medium";
  src:
    url("./static/Rubik-Medium.ttf")
}
@font-face {
  font-family: "Rubik Regular";
  src:
    url("./static/Rubik-Regular.ttf")
}

#weather-info {
  display:flex;
  flex-direction:column;
  align-items: center;
  font-family: "Rubik Regular", sans-serif;
}
#other-info {
  display: flex;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center; 
  justify-content:space-between;
  font-family: "Rubik Regular", sans-serif;
  background: rgba(0, 0, 0, 0.30);
  border-radius: 25px;
}

</style>