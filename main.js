const app = Vue.createApp({
    data() {
        return {
            content:{
                patientName: 'John Doe',
            },
            inputJSON: ''
        }
    },
    computed: {
        outputJSON() {
            return JSON.stringify(this.content)
        }
    },
    methods: {
        loadJSON() {
            this.content = JSON.parse(this.inputJSON)
        }
    }
})

const vm = app.mount('#app')