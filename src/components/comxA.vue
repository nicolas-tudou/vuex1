<template>
    <div class="xa-wrapper">
        <h3>{{title}}的值{{val}}</h3>
        <comx-b :val="val"></comx-b>
        <comx-c @getVal='getVal'></comx-c>
    </div>
</template>

<script>
import comxB from './comxB'
import comxC from './comxC'
export default {
    components: {
        comxB,
        comxC
    },
    data() {
        return {
            title: 'AX',
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
    .xa-wrapper {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 100px;
        background-color: orange;
        text-align: center;
    }
</style>
