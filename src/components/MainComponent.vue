<template>
	<b-container>
		<b-jumbotron bg-variant="primary" text-variant="white">
			<b-row>
				<b-col>
					<h4>{{ title }}</h4>
				</b-col>
				<b-col>
					<h4>{{ subTitle }}</h4>
				</b-col>
			</b-row>
		</b-jumbotron>

		<b-jumbotron bg-variant="dark" text-variant="white">
			<b-table hover :items="getFirstItem" table-variant="dark" :fields="getFirstField"></b-table>
		</b-jumbotron>

		<b-card
			border-variant="primary"
			header="EPIC eBid Sanity Check"
			header-bg-variant="primary"
			header-text-variant="white"
			align="center"
		>
			<b-row class="item">
				<b-col>
					<label >
					Avg Hrly Rate
					</label>
				</b-col>
				<b-col>
					<CustomInput v-model="division.second.average_hourly_rate"></CustomInput>
				</b-col>
			</b-row>

			<b-row class="item">
				<b-col>
					<label >
					Burden %
					</label>
				</b-col>
				<b-col>
					<CustomInput v-model="division.second.burden_percent"></CustomInput>
				</b-col>
			</b-row>

			<b-row class="item">
				<b-col>
					<label >
					Total Avg Rate
					</label>
				</b-col>
				<b-col>
					<CustomInput v-model="totalAverageRate" :disabled="true"></CustomInput>
				</b-col>
			</b-row>

			<b-row class="item">
				<b-col>
					<label >
					'Labor Traget %
					</label>
				</b-col>
				<b-col>
					<CustomInput v-model="division.second.labor_target_percent"></CustomInput>
				</b-col>
			</b-row>

			<b-row class="item">
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
		</b-card>

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

	method: {
		
	},

	computed: {
		totalAverageRate: function() {
		return this.division.second.average_hourly_rate * (1 + parseFloat(this.division.second.burden_percent));
		},

		billableHourlyRate: function() {
		return (parseInt(this.totalAverageRate) / parseInt(this.division.second.labor_target_percent));
		},

		getFirstItem() {
			let items = [
				{ jobName: 'Estimate Date', mobleyTraining: '07/02/2019' },
				{ jobName: 'Project Completion Date', mobleyTraining: '07/02/2019' }
			];

			return items;
		},

		getFirstField() {
			let fields = [
				{ key: 'jobName', label: 'Job Name'},
				{ key: 'mobleyTraining', label: 'Mobley #2/Training'}
			];

			return fields
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	label {
		margin-top: 8px;
	}
	.item, .col {
		/* Internet Explorer 10 */
		display:-ms-flexbox;
		-ms-flex-pack:center;
		-ms-flex-align:center;

		/* Firefox */
		display:-moz-box;
		-moz-box-pack:center;
		-moz-box-align:center;

		/* Safari, Opera, and Chrome */
		display:-webkit-box;
		-webkit-box-pack:center;
		-webkit-box-align:center;

		/* W3C */
		display:box;
		box-pack:center;
		box-align:center;
	}
	.jumbotron {
		margin-bottom: 1rem;
		padding: 2rem;
	}
</style>
