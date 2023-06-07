<template>
    <div id="app">
        <search></search>
        <div class="lay">
            <div class="leftLay">
                <news></news>
                <Download></Download>
                <lunBo></lunBo>
            </div>
            <div class="rightLay">
                <curriculum-one></curriculum-one>
                <curriculum-two></curriculum-two>
                <curriculum-three></curriculum-three>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .lay{
        display: flex;justify-content:center;width: 100%;height: 800px;background-color: #FFFFFF;
    }
    .leftLay{
        width: 15%;height: 80%;margin: 20px;
    }
    .rightLay{
        width: 40%;height: 80%;margin: 20px;
    }
</style>