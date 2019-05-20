<template>
    <div class="input-container">
        <input
                id="age-input"
                v-autowidth="{minWidth: '50px', comfortZone: 0}"
                v-model="age"
                type="text"
                @keyup="checkNumber"
                class="input-body"
        >
        <p class="error-handling">{{ errorValidateAge }}</p>
    </div>
</template>

<script>
    export default {
        name: "InputGroup",

        data() {
            return {
                age: '',
                errorValidateAge: '',
            }
        },
        watch: {
            age: function (newVal) {
                const concatedAge = newVal.replace(/\s/g,'');
                return this.age = concatedAge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            },
        },
        methods: {
            checkNumber(e) {
                this.errorValidateAge = '';
                if (isNaN(this.age.replace(/\s/g,''))) {
                    e.preventDefault();
                    this.errorValidateAge = 'The value should be a number';
                    this.age = '';
                }
            },
        }
    }
</script>

<style>
    .input-container{
        display: inline-block;
    }
    .input-body {
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
    }
    .error-handling {
        color: darkred;
        height: 20px;
        margin: 0;
    }
    input:focus{
        outline: none;
        border-bottom: 1px solid mediumblue;
    }
</style>