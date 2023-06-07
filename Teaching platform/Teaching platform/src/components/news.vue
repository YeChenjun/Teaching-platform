<template>
    <div class="new">
        <div class="button">
        <el-button type="primary" plain style="width: 47%" @click="toChoice1()"> 校园公告 </el-button>
        <el-button type="success" plain style="width: 47%" @click="toChoice2()">新闻资讯</el-button>
        </div>
        <div class="display">
            <component :is="tabView"></component>
        </div>
    </div>

</template>

<script>
    import forNews from "@/components/forNews";
    import tt from "@/components/tt";

    export default {
        name: "news",
        data() {
            return {
                tabView: forNews,
            };
        },
        methods: {
            toChoice1(){
                this.tabView = forNews;
            },
            toChoice2(){
                this.tabView = tt;
            }
        }
    }
</script>

<style scoped>
    .new{
        height: 30%;width: 100%;
    }
   .display{
       height: 80%;width: 100%;
   }
    .button{
        width: 100%;height: 20%;
    }
</style>