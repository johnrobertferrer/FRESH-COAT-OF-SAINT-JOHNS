<template>
    <div>
        <b-form-input type="text" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true" :disabled="disabled" :class="customClass" v-on:keyup.enter="focus($event)"/>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',

    props: ["value", "disabled", "alias", "type", "classes", "precision"],

    data() {
        return {
            isInputActive: false
        }
    },

    methods: {
        focus(event) {
            let interval = 0;

            switch(this.alias) {
                case 'average_hourly_rate': 
                case 'rounded_labor_days': 
                case 'rounded_not_end_zero': 
                case 'billable_hours_epic': 
                case 'average_hourly_cost_epic': 
                case 'number_gallons_my_estimate': 
                case 'price_p_gallon_my_estimate': 
                    interval = 1;
                    break;
                case 'burden_percent': 
                case 'labor_target_percent': 
                case 'billable_hours_actual': 
                case 'number_gallons_epic': 
                case 'revenue_actual': 
                    interval = 2;
                    break;
                case 'epic_work_order_hours': 
                    interval = 3;
                    break;
                case 'billable_hours_day': 
                case 'labor_burden_target_percent': 
                    interval = 4;
                    break;
                case 'average_hourly_cost_actual': 
                    interval = 5;
                    break;
                case 'price_p_gallon_epic': 
                    interval = 6;
                    break;
            }

            let prependKey = '__BVID__';
            let splittedId = event.target.id.split(prependKey);
            let id = prependKey + (parseInt(splittedId[1]) + (interval * 2));

            if(interval !== 0 && id) {
                document.getElementById(id).focus();
            }
        }
    },

    computed: {
        displayValue: {
            get: function() {
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                let value = this.value;

                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return value.toString();
                } else {
                    if(!isFinite(value)) {
                        switch(this.type) {
                            case 'dollar':
                                format = "$ -";
                                break;
                            case 'percent': 
                                format = '0%';
                                break;
                            default:
                                value = '0';
                            break; 
                        }

                        return format;
                    } 

                    let precision = this.precision === undefined ? 2 : this.precision;
                    let format = value.toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

                    switch(this.type) {
                        case 'dollar':
                            if (format < 0) {
                                format = "$ (" + (value*-1).toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ") ";
                            } else if (format == 0) {
                                format = "$    -";
                            } else {
                                format = "$ " + value.toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
                            }
                            break;
                        case 'percent': 
                            format = value.toFixed(precision) + '%';
                            break;
                        // case 'dollar_parenthesis':
                            // format = value < 0
                            //             ? "- $ (" + (value*-1).toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ')'
                            //             : "$ (" + value.toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ')';
                            // format = "$ (" + value.toFixed(precision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + ')';
                            // break;
                    }
                    // User is not modifying now. Format display value for user interface
                    return format;
                }
            },
            set: function(modifiedValue) {
                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, "")) // eslint-disable-line
                // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = 0
                }
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                // $emit the event so that parent component gets it
                this.$emit('input', newValue);
            }
        },

        customClass: function() {
            let custom = this.classes === undefined ? '' : this.classes;

            return custom;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .noBoxShadow {
        border-color: inherit !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }

    .bg-gray-300 {
        background: #e9ecef !important;
    }

    @media screen and (max-width: 750px) {
        .responsive-input {
            font-size: 75%;
        }
    }
</style>