<template>
    <div class="b-wrapper">
        {{title}}得到的值：{{val}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'B'
        }
    },
    props: {
        val: {
            type: String
        }
    }
}
</script>

<style>
    .b-wrapper {
        position: absolute;
        top: 100px;
        left: -200px;
        width: 200px;
        height: 100px;
        background-color: yellow;
        text-align: center;
    }
</style>
