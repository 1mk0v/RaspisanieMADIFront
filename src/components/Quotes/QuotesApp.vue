<template>
  <div v-if="this.quote != ''">
    <div class="title" style="justify-content:left; align-items: center">
      <div><font-awesome-icon icon="fa-regular fa-comment" /></div>
      <div style="font-size: 20px; font-weight:500">Цитата дня</div>
    </div>
    <div id="text">{{ this.quote.Quote }}</div>
    <div id="author">{{ this.quote.Author }}</div>
  </div>
</template>
   
<script>

export default {
  name: 'QuotesInfo',
  data() {
    return {
      quote: ''
    }
  },
  async created() {
    this.getQuote().then(
      value => { this.quote = value }
    );
    this.timerIntervalID = setInterval(() => {
      this.getQuote().then(
      value => { this.quote = value }
    );
    }, 1000*60*60*24);
  },
  methods: {
    getQuote: async() => {
      try {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=qU21xgTZWnrJYKpBvMbjsLUJniklFGTsNgUidkpFxGJihHcZPXbbVNRw75yaLDz-0hrXpxZ95jhe_TYvBkQ4JsmcJ8QMMB5em5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNi-DQJQQMjtfZCjnHHJcrI2eU4brhc9L_6kXpPLtHSHHiW1A5ExRWYK8dZ4s2ul_5-Zgf4gDj4DjV1SErrpU6kJ-SZNCvqjz9z9Jw9Md8uu&lib=MD6MuZ7M9Rwp3_Us9ULKM30LPSFlQpyxK'
        const options = { method: 'GET' }
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
#author {
  font-weight: 500;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>