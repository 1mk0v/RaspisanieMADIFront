<template>
  <div id="input-container">
    <div id="card">

      <ExitButton
        @exitClickEvent="exitClick">
      </ExitButton>

      <div id="select-form" @click="getData">
        <div>
          {{ cardID }}
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M20.5933 6.25L11.5 22L2.40673 6.25L20.5933 6.25Z" stroke="white"/>
          </svg>
        </div>
      </div>

    </div>

    <DataCard
        :data="this.data">
    </DataCard>
  </div>
</template>
   
<script>
import DataCard from './../Data/DataCard.vue';
import ExitButton from './../Buttons/ExitButton.vue'

   export default {
    data() {
        return {
            data: ''
        };
    },
    name: 'inputCard',
    props: {
        cardID: String
    },
    emits: [''],
    methods: {
      exitClick() {
        this.$emit('exitClickEvent', this.cardID)
      },
        getData() {
            this.data = [
                {
                    "id": 9211,
                    "value": ""
                },
                {
                    "id": 9456,
                    "value": ""
                },
                {
                    "id": 9401,
                    "value": "1А1"
                },
                {
                    "id": 9405,
                    "value": "1А2"
                },
                {
                    "id": 9402,
                    "value": "1А3"
                },
                {
                    "id": 9403,
                    "value": "1А4"
                },
                {
                    "id": 9404,
                    "value": "1А5"
                },
                {
                    "id": 9218,
                    "value": "1АМ"
                },
                {
                    "id": 9395,
                    "value": "1бАС1"
                },
                {
                    "id": 9397,
                    "value": "1бАС2"
                },
                {
                    "id": 9396,
                    "value": "1бАС3"
                },
                {
                    "id": 9256,
                    "value": "1бАСУ1"
                },
                {
                    "id": 9257,
                    "value": "1бАСУ2"
                },
                {
                    "id": 9258,
                    "value": "1бАСУ3"
                },
                {
                    "id": 9076,
                    "value": "1бАЭ1"
                },
                {
                    "id": 9073,
                    "value": "1бДВС"
                },
                {
                    "id": 9075,
                    "value": "1бЗС"
                },
                {
                    "id": 9259,
                    "value": "1бИТС1"
                },
                {
                    "id": 9260,
                    "value": "1бИТС2"
                },
                {
                    "id": 9261,
                    "value": "1бИТС3"
                },
                {
                    "id": 9097,
                    "value": "1бЛ 1"
                },
                {
                    "id": 9098,
                    "value": "1бЛ 2"
                },
                {
                    "id": 9105,
                    "value": "1бЛМТ"
                },
                {
                    "id": 9102,
                    "value": "1бМО 1"
                },
                {
                    "id": 9103,
                    "value": "1бМО 2"
                },
                {
                    "id": 9262,
                    "value": "1бОД1"
                },
                {
                    "id": 9263,
                    "value": "1бОД2"
                },
                {
                    "id": 9400,
                    "value": "1бПМ"
                },
                {
                    "id": 9217,
                    "value": "1бСТ"
                },
                {
                    "id": 9155,
                    "value": "1бСТР1"
                },
                {
                    "id": 9160,
                    "value": "1бСТР2"
                },
                {
                    "id": 9159,
                    "value": "1бСТР3"
                },
                {
                    "id": 9158,
                    "value": "1бСТР4"
                },
                {
                    "id": 9157,
                    "value": "1бСТР5"
                },
                {
                    "id": 9156,
                    "value": "1бСТР6"
                },
                {
                    "id": 9161,
                    "value": "1бСТР7"
                },
                {
                    "id": 9162,
                    "value": "1бСТР8"
                },
                {
                    "id": 9215,
                    "value": "1бТВ"
                },
                {
                    "id": 9398,
                    "value": "1бТТ"
                },
                {
                    "id": 9464,
                    "value": "1бУП"
                },
                {
                    "id": 9104,
                    "value": "1бУПР"
                },
                {
                    "id": 9264,
                    "value": "1бУТП1"
                },
                {
                    "id": 9265,
                    "value": "1бУТП2"
                },
                {
                    "id": 9214,
                    "value": "1бЦУС"
                },
                {
                    "id": 9328,
                    "value": "1бЭМТ"
                }
            ];
        }
    },
    components: { DataCard, ExitButton }
}
</script>

<style scoped>
#input-container {
  display: flex;
  padding: 22px 44px;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 50px;
  background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(10px);
  color: #FFF;
  font-weight: normal;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
#card {
  display: flex;
  align-items: center;
  gap: 44px;
  align-self: stretch;
}

#select-form {
  width: 100%;
  display: flex;
  padding: 11px 27px;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background: linear-gradient(113deg, rgba(154, 154, 154, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(10px);
}
</style>