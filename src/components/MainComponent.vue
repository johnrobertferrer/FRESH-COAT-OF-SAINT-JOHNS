<template>
    <b-container>
        <b-jumbotron bg-variant="primary" text-variant="white">
            <b-row>
                <b-col>
                    <h5>{{ title }}</h5>
                </b-col>
                <b-col>
                    <h5>{{ subTitle }}</h5>
                </b-col>
            </b-row>
        </b-jumbotron>

        <!-- FIRST -->
        <b-jumbotron bg-variant="dark" text-variant="white">
            <b-table hover :items="getFirstItem" table-variant="dark" :fields="getFirstField"></b-table>
        </b-jumbotron>

        <b-card border-variant="primary" header="EPIC eBid Sanity Check" header-bg-variant="primary" header-text-variant="white" align="center">
            <b-row class="item">
                <b-col>
                    <label>
                        Avg Hrly Rate
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="division.second.average_hourly_rate" alias="average_hourly_rate"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Burden %
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="percent" v-model="division.second.burden_percent" alias="burden_percent"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Total Avg Rate
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="totalAverageRate" :disabled="true"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        'Labor Traget %
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="division.second.labor_target_percent" alias="labor_target_percent"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Billable Hrly Rate
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="billableHourlyRate" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- SECOND -->
		<b-card border-variant="primary" header="Pricing Estimate" header-bg-variant="primary" header-text-variant="white" align="center">
            <b-row class="item">
                <b-col>
                    <label>
                        EPIC Work Order Hours
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="division.third.epic_work_order_hours" alias="epic_work_order_hours"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Divided by 8 hour per day
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="division.third.divided_by_eight_hour_per_day" :disabled="true"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Labor in days
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="laborInDays" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- THIRD -->
		<b-card border-variant="primary" align="center">
            <b-row class="item">
                <b-col>
                    <label>
                        Rounded Labor Days
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="division.fourth.rounded_labor_days" alias="rounded_labor_days"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Billable Hours/Day
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="division.fourth.billable_hours_day" alias="billable_hours_day"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Billable Hours Total
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput v-model="billableHoursTotal" :disabled="true"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Sanity Check Hrly Rate(from above)
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="sanityCheckHourlyRate" :disabled="true"></CustomInput>
                </b-col>
            </b-row>

			<b-row class="item">
                <b-col>
                    <label>
                        Total Cost
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="totalCost" :disabled="true"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Rounded not to end in zero
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="division.fourth.rounded_not_end_zero" alias="rounded_not_end_zero"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- FOURTH -->
        <b-card border-variant="dark" align="center">
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark rounded-0 border custom-column-140">
                    <label class="font-weight-bold">
                        Labor Costs @ 40% Target
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark custom-column-140">
                    <label>
                        EPIC
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Actual
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Var
                    </label>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2" ref="billable_hours">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Billable Hours
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.fifth.billable_hours_epic" alias="billable_hours_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.fifth.billable_hours_actual" alias="billable_hours_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark bg-gray-300 custom-column-70">
                    <CustomInput type="dollar_parenthesis" v-model="billableHoursVar" alias="billable_hours_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-90">
                    <label>
                        Avg Hourly Cost
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput v-model="division.fifth.average_hourly_cost_epic" alias="average_hourly_cost_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput v-model="division.fifth.average_hourly_cost_actual" alias="average_hourly_cost_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90 bg-gray-300">
                    <CustomInput type="dollar_parenthesis" v-model="averageHourlyCostVar" alias="average_hourly_cost_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Labor Cost
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.fifth.labor_cost_epic" alias="labor_cost_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.fifth.labor_cost_actual" alias="labor_cost_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar_parenthesis" v-model="laborCostVar" alias="labor_cost_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

		<b-button block variant="danger" @click="reset()">
			Clear
			<b-icon-backspace></b-icon-backspace>
		</b-button>
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
                division: {}
            }
        },

		created() {
			this.division = this.getInitialData();
		},

        methods: {
			reset() {
				this.division = this.getInitialData();
			},

			getInitialData() {
				let division = {
					first: {
                        estimated_date: '07/02/2019',
                        project_completion_date: '07/02/2019'
                    },

                    second: {
                        average_hourly_rate: 0,
                        burden_percent: 0,
                        total_average_rate: 0,
                        labor_target_percent: 0,
                        billable_hourly_rate: 0
					},

					third: {
						epic_work_order_hours: 0,
						divided_by_eight_hour_per_day: 8,
						labor_in_days: 0
					},

                    fourth: {
                        rounded_labor_days: 0,
                        billable_hours_day: 0,
                        sanity_check_hourly_rate: 0,
                        total_cost: 0,
                        rounded_not_end_zero: 0,
                        billable_hours_total: 0
                    },

                    fifth: {
                        billable_hours_epic: 0,
                        billable_hours_actual: 0,
                        billable_hours_var: 0,
                        average_hourly_cost_epic: 0,
                        average_hourly_cost_actual: 0,
                        average_hourly_cost_var: 0,
                        labor_cost_epic: 0,
                        labor_cost_actual: 0,
                        labor_cost_var: 0
                    }
				}

				return division;
            }
        },

        computed: {
            totalAverageRate: function() {
                return this.division.second.average_hourly_rate * (1 + parseFloat(this.division.second.burden_percent));
            },

            billableHourlyRate: function() {
                return (parseFloat(this.totalAverageRate) / parseFloat(this.division.second.labor_target_percent));
			},

			laborInDays: function() {
				return (parseFloat(this.division.third.epic_work_order_hours) / parseFloat(this.division.third.divided_by_eight_hour_per_day));
            },
            
            billableHoursTotal: function() {
                return (parseFloat(this.division.fourth.rounded_labor_days) * parseFloat(this.division.fourth.billable_hours_day));
            },

            sanityCheckHourlyRate: function() {
                return this.billableHourlyRate;
            },

            totalCost: function() {
                return parseFloat(this.sanityCheckHourlyRate * this.billableHoursTotal);
            },

            billableHoursVar: function() {
                return (parseFloat(this.division.fifth.billable_hours_actual) - parseFloat(this.division.fifth.billable_hours_epic)); 
            },

            averageHourlyCostVar: function() {
                return (parseFloat(this.division.fifth.average_hourly_cost_actual) - parseFloat(this.division.fifth.average_hourly_cost_epic)); 
            },

            laborCostVar: function() {
                return (parseFloat(this.division.fifth.average_hourly_cost_actual) - parseFloat(this.division.fifth.average_hourly_cost_epic)); 
            },

            getFirstItem() {
                let items = [{
                    jobName: 'Estimate Date',
                    mobleyTraining: '07/02/2019'
                }, {
                    jobName: 'Project Completion Date',
                    mobleyTraining: '07/02/2019'
                }];

                return items;
            },

            getFirstField() {
                let fields = [{
                    key: 'jobName',
                    label: 'Job Name'
                }, {
                    key: 'mobleyTraining',
                    label: 'Mobley #2/Training'
                }];

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

	table {
		margin-bottom: 0;
	}
    
    .item,
    .col {
        /* Internet Explorer 10 */
        display: -ms-flexbox;
        -ms-flex-pack: center;
        -ms-flex-align: center;
        /* Firefox */
        display: -moz-box;
        -moz-box-pack: center;
        -moz-box-align: center;
        /* Safari, Opera, and Chrome */
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        /* W3C */
        display: box;
        box-pack: center;
        box-align: center;
    }

    .jumbotron {
        margin-bottom: 1rem;
        padding: 2rem;
    }

	.full div {
		width: 100%;
	}

	.card {
		margin-bottom: 1rem;
	}

    .bg-gray-300 {
        background: #e9ecef;
    }

    .custom-column-140 {
        min-height: 140px;
    }

    .custom-column-90 {
        min-height: 90px;
    }

    .custom-column-75 {
        min-height: 75px;
    }

    .custom-column-70 {
        min-height: 70px;
    }

    
</style>