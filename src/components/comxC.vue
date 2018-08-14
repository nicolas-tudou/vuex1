<template>
    <div class="xc-wrapper">
        <h3>{{title}}输入的值:{{val}}</h3>
        <input type="text" v-model="val">
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'CX',
            val: ''
        }
    },
    watch: {
        val() {
            this.$store.commit('changeVal', this.val)
        }
    }
}
</script>

<style>
    .xc-wrapper {
        position: absolute;
        left: 200px;
        top: 100px;
        width: 200px;
        height: 100px;
        background-color: orange;
        text-align: center;
    }
</style>
