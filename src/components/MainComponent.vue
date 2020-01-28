<template>
  <b-container>
    <b-row>
      <b-col>{{ title }}</b-col>
      <b-col>{{ subTitle }}</b-col>
    </b-row>

    <br><br><br>

    <b-row>
      <b-col> Job Name </b-col>
      <b-col> Mobley #2/Training </b-col>
    </b-row>
    <b-row>
      <b-col> Estimate Date </b-col>
      <b-col> {{ division.first.estimated_date }} </b-col>
    </b-row>
    <b-row>
      <b-col> Project Completion Date </b-col>
      <b-col> {{ division.first.project_completion_date }} </b-col>
    </b-row>

    <br><br><br>

    <b-row>
      <b-col>
        <b-jumbotron>
          EPIC eBid Sanity Check
        </b-jumbotron>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label >
          Avg Hrly Rate
        </label>
      </b-col>
      <b-col> 
        <!-- <b-form-input v-model="division.second.average_hourly_rate" type="text"></b-form-input> -->
        <CustomInput v-model="division.second.average_hourly_rate"></CustomInput>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label >
          Burden %
        </label>
      </b-col>
      <b-col> 
        <!-- <b-form-input v-model="division.second.burden_percent" type="text"></b-form-input> -->
        <CustomInput v-model="division.second.burden_percent"></CustomInput>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label >
          Total Avg Rate
        </label>
      </b-col>
      <b-col> 
        <!-- <b-form-input :value="totalAverageRate" disabled type="text"></b-form-input> -->
        <CustomInput v-model="totalAverageRate" :disabled="true"></CustomInput>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label >
          'Labor Traget %
        </label>
      </b-col>
      <b-col> 
        <!-- <b-form-input v-model="division.second.labor_target_percent" type="text"></b-form-input> -->
        <CustomInput v-model="division.second.labor_target_percent"></CustomInput>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <label >
          Billable Hrly Rate
        </label>
      </b-col>
      <b-col> 
        <!-- <b-form-input :value="billableHourlyRate" disabled type="text"></b-form-input> -->
        <CustomInput v-model="billableHourlyRate" :disabled="true"></CustomInput>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import CustomInput from './CustomInput.vue'

export default {
  name: 'MainComponent',

  components: {
    CustomInput
  },

  props: {
    title: String,
    subTitle: String
  },

  data() {
    return {
      division: {
        first: {
          estimated_date: '07/02/2019',
          project_completion_date: '07/02/2019'
        },

        second: {
          average_hourly_rate: 0,
          burden_percent: 0,
          total_average_rate: 0,
          labor_target_percent: 1,
          billable_hourly_rate: 0
        }
      }
    }
  },

  computed: {
    totalAverageRate: function() {
      return this.division.second.average_hourly_rate * (1 + parseFloat(this.division.second.burden_percent));
    },

    billableHourlyRate: function() {
      return (parseInt(this.totalAverageRate) / parseInt(this.division.second.labor_target_percent));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
