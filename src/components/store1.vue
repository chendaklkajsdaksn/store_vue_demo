<template>
    <div class="container">
        <div>{{ $store.count }}*{{ $store.count }}={{ $store.dCount }}</div>
        <div>
            <button @click="$store.count++">add</button>
        </div>
        <div>
            姓名：
            <input type="text" v-model="$store.person.name" />
        </div>
        <div>年龄：{{ $store.person.age }}</div>
        <div>
            输入年龄:
            <input type="text" v-model="age" />
        </div>
        <div>
            <button @click="$store.changeAge(age)">resetAge</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: this.$store.person.age
        }
    },
    mounted() {
        console.log(this.$store, 'store')
    }
}
</script>

<style scoped lang="scss">
</style>
