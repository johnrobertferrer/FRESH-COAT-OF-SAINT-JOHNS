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

        <!-- LEGENDS -->
        <b-row class="item">
            <b-col class="text-center bg-dark ml-3 mr-3 text-white p-3 pt-4">
                <h3>
                    LEGENDS
                </h3>
            </b-col>
        </b-row>
        <b-row class="item mb-3 ml-1 mr-1">
            <b-col><label>Fillable Fields</label></b-col>
            <b-col class="bg-gray-300"><label>Disabled Fields</label></b-col>
            <b-col class="bg-secondary text-white"><label>Empty Fields</label></b-col>
        </b-row>

        <!-- FIRST -->
        <b-jumbotron bg-variant="dark" text-variant="white">
            <b-row class="item mb-3">
                <b-col>
                    <label>
                        Job Name
                    </label>
                </b-col>
                <b-col class="full">
                    <b-form-input type="text" v-model="division.first.project_name" v-on:keyup.enter="focusNextField()" class="rounded-0 width-p-108" placeholder="Please, input text here.."/>
                </b-col>
            </b-row>
            <b-row class="item mb-1">
                <b-col>
                    <label>
                        Estimate Date
                    </label>
                </b-col>
                <b-col>
                    <v-date-picker
                        :formats='date.formats'
                        v-model="division.first.estimated_date"
                        :popover="{ placement: 'bottom', visibility: 'click' }">
                        <button class="text-black focus:outline-none">
                            <b-icon-calendar-fill></b-icon-calendar-fill>
                        </button>
                    </v-date-picker>
                    <b-form-input type="text" v-model="getEstimatedDate" disabled class="rounded-0 ml-2"/>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col>
                    <label>
                        Project Completion Date
                    </label>
                </b-col>
                <b-col>
                    <v-date-picker
                        :formats='date.formats'
                        v-model="division.first.project_completion_date"
                        :popover="{ placement: 'bottom', visibility: 'click' }">
                        <button class="text-black focus:outline-none">
                            <b-icon-calendar-fill></b-icon-calendar-fill>
                        </button>
                    </v-date-picker>
                    <b-form-input type="text" v-model="getProjectCompletionDate" disabled class="rounded-0 ml-2"/>
                </b-col>
            </b-row>
        </b-jumbotron>

        <!-- SECOND -->
        <b-card border-variant="primary" header="EPIC eBid Sanity Check" header-bg-variant="primary" header-text-variant="white" align="center">
            <b-row class="item">
                <b-col>
                    <label>
                        Avg Hrly Rate
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="dollar" v-model="division.second.average_hourly_rate" alias="average_hourly_rate" ref="average_hourly_rate"></CustomInput>
                </b-col>
            </b-row>

            <b-row class="item">
                <b-col>
                    <label>
                        Burden %
                    </label>
                </b-col>
                <b-col class="full">
                    <CustomInput type="percent" v-model="division.second.burden_percent" precision="0" alias="burden_percent"></CustomInput>
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

        <!-- THIRD -->
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
                    <CustomInput v-model="laborInDays" :disabled="true" precision="1"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- FOURTH -->
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

        <!-- FIFTH -->
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
            <b-row class="item pl-2 pr-2">
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
                    <CustomInput type="dollar" v-model="billableHoursVar" alias="billable_hours_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-90">
                    <label>
                        Avg Hourly Cost
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput type="dollar" v-model="division.fifth.average_hourly_cost_epic" alias="average_hourly_cost_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput type="dollar" v-model="division.fifth.average_hourly_cost_actual" alias="average_hourly_cost_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90 bg-gray-300">
                    <CustomInput type="dollar" v-model="averageHourlyCostVar" alias="average_hourly_cost_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Labor Cost
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="laborCostEpic" alias="labor_cost_epic" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="laborCostActual" alias="labor_cost_actual" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="laborCostVar" alias="labor_cost_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- SIXTH -->
        <b-card border-variant="dark" align="center">
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark rounded-0 border custom-column-140">
                    <label class="font-weight-bold">
                        Material Costs @ 15% Target
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark custom-column-140">
                    <label>
                        My Estimate
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Epic
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Var
                    </label>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Number Gallons
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.sixth.number_gallons_my_estimate" alias="number_gallons_my_estimate" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput v-model="division.sixth.number_gallons_epic" alias="number_gallons_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark bg-gray-300 custom-column-70">
                    <CustomInput type="dollar" v-model="numberGallonsVar" alias="number_gallons_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-90">
                    <label>
                        Price p/Gallon
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput type="dollar" v-model="division.sixth.price_p_gallon_my_estimate" alias="price_p_gallon_my_estimate" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90">
                    <CustomInput type="dollar" v-model="division.sixth.price_p_gallon_epic" alias="price_p_gallon_epic" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-90 bg-gray-300">
                    <CustomInput type="dollar" v-model="pricePGallonVar" alias="price_p_gallon_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Material Cost
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="materialCostMyEstimate" alias="material_cost_my_estimate" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="materialCostEpic" alias="material_cost_epic" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="materialCostVar" alias="material_cost_var" classes="bg-gray-300 border-0 pl-0 pr-0 responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
        </b-card>

        <!-- SEVENTH -->
        <b-card border-variant="dark" align="center">
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark rounded-0 border custom-column-140">
                    <label class="font-weight-bold">
                        Project Budget vs. Actual
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark custom-column-140">
                    <label>
                        Budget
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Target %
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Actual
                    </label>
                </b-col>
                <b-col class="text-white border border-dark bg-dark rounded-0 custom-column-140">
                    <label>
                        Actual %
                    </label>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Revenue
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="revenueBudget" alias="revenue_budget" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark bg-secondary custom-column-70"></b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput type="dollar" v-model="division.seventh.revenue_actual" alias="revenue_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark bg-secondary custom-column-70"></b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Labor & Burden
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="laborBurdenBudget" alias="labor_burden_budget" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput type="percent" v-model="division.seventh.labor_burden_target_percent" precision="0" alias="labor_burden_target_percent" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="laborBurdenActual" alias="labor_burden_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="laborBurdenActualPercent" alias="labor_burden_actual_percent" precision="1" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Materials
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="materialsBudget" alias="materials_budget" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70">
                    <CustomInput type="percent" v-model="division.seventh.materials_target_percent" precision="0" alias="materials_target_percent" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="materialsActual" alias="materials_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="materialsActualPercent" alias="materials_actual_percent" precision="1" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border border-dark custom-column-70">
                    <label>
                        Gross Profit
                    </label>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="grossProfitBudget" alias="gross_profit_budget" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="grossProfitTargetPercent" precision="0" alias="gross_profit_target_percent" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="dollar" v-model="grossProfitActual" alias="gross_profit_actual" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="grossProfitActualPercent" alias="gross_profit_actual_percent" precision="1" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
            </b-row>
            <b-row class="item pl-2 pr-2">
                <b-col class="border-top border-dark custom-column-70">
                </b-col>
                <b-col class="full border-top border-right border-dark custom-column-70"></b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="totalTargetPercent" alias="total_target_percent" precision="0" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
                </b-col>
                <b-col class="full border-top border-left border-right border-dark custom-column-70"></b-col>
                <b-col class="full border border-dark custom-column-70 bg-gray-300">
                    <CustomInput type="percent" v-model="totalActualPercent" alias="total_actual_percent" precision="1" classes="border-0 pl-0 pr-0 noBoxShadow responsive-input" :disabled="true"></CustomInput>
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
                division: {},
                date: {
                    formats: {
                        title: 'MMMM YYYY',
                        weekdays: 'W',
                        navMonths: 'MMM',
                        input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
                        dayPopover: 'L', // Only for `v-date-picker`
                        data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'] // For attribute dates
                    }
                }
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
                        project_name: '',
                        estimated_date: new Date(),
                        project_completion_date: new Date()
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
                    },

                    sixth: {
                        number_gallons_my_estimate: 0,
                        number_gallons_epic: 0,
                        number_gallons_var: 0,
                        price_p_gallon_my_estimate: 0,
                        price_p_gallon_epic: 0,
                        price_p_gallon_var: 0,
                        material_cost_my_estimate: 0,
                        material_cost_epic: 0,
                        material_cost_var: 0
                    },

                    seventh: {
                        revenue_budget: 0,
                        revenue_actual: 0,
                        labor_burden_budget: 0,
                        labor_burden_target_percent: 0,
                        labor_burden_actual: 0,
                        labor_burden_actual_percent: 0,
                        materials_budget: 0,
                        materials_target_percent: 0,
                        materials_actual: 0,
                        materials_actual_percent: 0,
                        gross_profit_budget: 0,
                        gross_profit_target_percent: 0,
                        gross_profit_actual: 0,
                        gross_profit_actual_percent: 0
                    }
				}

				return division;
            },

            focusNextField() {
                let nextFieldId = this.$refs.average_hourly_rate.$el.firstElementChild.id;

                document.getElementById(nextFieldId).focus();
            }
        },

        computed: {
            totalAverageRate: function() {
                return this.division.second.average_hourly_rate * (1 + (parseFloat(this.division.second.burden_percent)/100));
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

            laborCostEpic: function() {
                return (parseFloat(this.division.fifth.billable_hours_epic) * parseFloat(this.division.fifth.average_hourly_cost_epic)); 
            },

            laborCostActual: function() {
                return (parseFloat(this.division.fifth.billable_hours_actual) * parseFloat(this.division.fifth.average_hourly_cost_actual)); 
            },

            laborCostVar: function() {
                return parseFloat(this.laborCostActual - this.laborCostEpic);
            },

            numberGallonsVar: function() {
                return (parseFloat(this.division.sixth.number_gallons_my_estimate) - parseFloat(this.division.sixth.number_gallons_epic)); 
            },

            pricePGallonVar: function() {
                return (parseFloat(this.division.sixth.price_p_gallon_my_estimate) - parseFloat(this.division.sixth.price_p_gallon_epic)); 
            },

            materialCostMyEstimate: function() {
                return (parseFloat(this.division.sixth.number_gallons_my_estimate) * parseFloat(this.division.sixth.price_p_gallon_my_estimate)); 
            },

            materialCostEpic: function() {
                return (parseFloat(this.division.sixth.number_gallons_epic) * parseFloat(this.division.sixth.price_p_gallon_epic)); 
            },

            materialCostVar: function() {
                return parseFloat(this.materialCostMyEstimate - this.materialCostEpic);
            },

            getEstimatedDate: function() {
                return Moment(this.division.first.estimated_date).format('MM/DD/YYYY');  // eslint-disable-line
            },

            getProjectCompletionDate: function() {
                return Moment(this.division.first.project_completion_date).format('MM/DD/YYYY');  // eslint-disable-line
            },

            revenueBudget: function() {
                return parseFloat(this.division.fourth.rounded_not_end_zero); 
            },
            laborBurdenBudget: function() {
                return (parseFloat(this.revenueBudget) * parseFloat(this.division.seventh.labor_burden_target_percent / 100)); 
            },
            laborBurdenActual: function() {
                return parseFloat(this.laborCostActual); 
            },
            laborBurdenActualPercent: function() {
                return (parseFloat(this.laborBurdenActual) / parseFloat(this.division.seventh.revenue_actual)) * 100; 
            },
            materialsBudget: function() {
                return (parseFloat(this.revenueBudget) * parseFloat(this.division.seventh.materials_target_percent / 100)); 
            },
            materialsActual: function() {
                return parseFloat(this.materialCostMyEstimate); 
            },
            materialsActualPercent: function() {
                return (parseFloat(this.materialsActual) / parseFloat(this.division.seventh.revenue_actual)) * 100; 
            },
            grossProfitBudget: function() {
                return (parseFloat(this.revenueBudget) - parseFloat(this.laborBurdenBudget) - parseFloat(this.materialsBudget)); 
            },
            grossProfitTargetPercent: function() {
                return (parseFloat(this.grossProfitBudget) / parseFloat(this.revenueBudget)) * 100; 
            },
            grossProfitActual: function() {
                return (parseFloat(this.division.seventh.revenue_actual) - parseFloat(this.laborBurdenActual) - parseFloat(this.materialsActual)); 
            },
            grossProfitActualPercent: function() {
                return (parseFloat(this.grossProfitActual) / parseFloat(this.division.seventh.revenue_actual)) * 100; 
            },

            totalTargetPercent: function() {
                return (parseFloat(this.division.seventh.labor_burden_target_percent) + parseFloat(this.division.seventh.materials_target_percent) + parseFloat(this.grossProfitTargetPercent)); 
            },
            totalActualPercent: function() {
                return (parseFloat(this.laborBurdenActualPercent) + parseFloat(this.materialsActualPercent) + parseFloat(this.grossProfitActualPercent));  
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

    .width-p-108 {
        width: 108%;
    }

    @media screen and (max-width: 1220px) {
        .width-p-108 {
            width: 115%;
        }
    }

    @media screen and (max-width: 420px) {
        .width-p-108 {
            width: 128%;
        }
    }

    @media screen and (max-width: 370px) {
        .width-p-108 {
            width: 132%;
        }
    }
</style>