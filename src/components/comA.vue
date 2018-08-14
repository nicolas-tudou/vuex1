<template>
    <div class="a-wrapper">
        <h3>{{title}}的值{{val}}</h3>
        <com-b :val="val"></com-b>
        <com-c @getVal='getVal'></com-c>
    </div>
</template>

<script>
import comB from './comB'
import comC from './comC'
export default {
    components: {
        comB,
        comC
    },
    data() {
        return {
            title: 'A',
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
    .a-wrapper {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 100px;
        background-color: orange;
        text-align: center;
    }
</style>
