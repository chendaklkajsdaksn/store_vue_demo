import Vue from 'vue'

const store = Vue.extend({
    name: 'store',
    data() {
        return {
            count: 2,
            person: {
                name:'小明',
                age:23
            }
        }
    },
    methods:{
        changeAge(v){
            this.person.age=v
        }
    },
    computed: {
        dCount() {
            return this.count * this.count
        }
    },
    mounted(){
        console.log(131312)
    }
})
export default new store