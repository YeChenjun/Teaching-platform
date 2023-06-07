<template>
    <div style="width: 100%;height: 170px;position: relative">
    <div class="back">
        <div class="fontContain">
            <h1 class="title">智慧教学平台</h1>
            <p class="subtitle">一个集成老师教学、学生学习的网络平台</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "background"
    }
</script>

<style scoped>
    .back{
        width: 100%;height: 100%;
        background-image :url("HomePicture/background.png");
        background-repeat:no-repeat ;
        background-size:100% 20%;
        background-attachment: fixed;
    }

    .fontContain{
        position: absolute;
        top: 20px;
        left: 120px;
        color: #fff;
        font-family: 'pingfang SC','helvetica neue',arial,'hiragino sans gb','microsoft yahei ui','microsoft yahei',simsun,sans-serif;
    }

    .title{
        font-size: 40px;
        line-height: 56px;
        font-weight: 500;
        margin: 3px;
    }

    .subtitle{
        line-height: 26px;
        font-size: 16px;
        margin: 5px;
    }

</style>