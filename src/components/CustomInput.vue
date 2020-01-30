<template>
    <div>
        <b-form-input type="text" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true" :disabled="disabled" v-on:keyup.enter="focus($event)"/>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',

    props: ["value", "disabled", "alias", "type"],

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
                    interval = 1;
                    break;
                case 'burden_percent': 
                case 'labor_target_percent': 
                    interval = 2;
                    break;
                case 'epic_work_order_hours': 
                    interval = 3;
                    break;
                case 'billable_hours_day': 
                    interval = 4;
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
                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString()
                } else {
                    let format = this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

                    switch(this.type) {
                        case 'dollar':
                            format = "$ " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
                            break;
                        case 'percent': 
                            format = this.value.toFixed(2) + '%';
                            break;
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
                this.$emit('input', newValue)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>