<template>
    <div class="xb-wrapper">
        <h3>{{title}}的值{{this.$store.state.val}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'BX',
            val: ''
        }
    },
    methods: {
        getVal(newVal) {
            this.val = newVal;
        }
    }
}
</script>

<style>
    .xb-wrapper {
        position: absolute;
        top: 100px;
        left: -200px;
        width: 200px;
        height: 100px;
        background-color: orange;
        text-align: center;
    }
</style>
