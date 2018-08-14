<template>
    <div class="c-wrapper">
        {{title}}输入的值：{{val}}
        <input type="text" v-model="val"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'C',
            val: ''
        }
    },
    watch: {
        val() {
            this.$emit('getVal', this.val)
        }
    }
}
</script>

<style>
    .c-wrapper {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 200px;
        height: 100px;
        background-color: lime;
        text-align: center;
    }
</style>