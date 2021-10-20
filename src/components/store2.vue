<template>
    <div class="container">
        <div>{{ $store.count }}*{{ $store.count }}={{ $store.dCount }}</div>
        <div>
            <button @click="$store.count--">reduce</button>
        </div>
        <div>
            名字：{{$store.person.name}}
        </div>
        <div>
            年龄：{{$store.person.age}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
</style>
