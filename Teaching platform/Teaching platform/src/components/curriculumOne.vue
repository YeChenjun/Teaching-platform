<template>
    <div class="curriculum">
        <div class="button">
        <el-button type="info" plain @click="toChoice1()" v-model="tabView"> 教师教学发展培训 </el-button>
        <el-button type="success" plain @click="toChoice2()" v-model="tabView"> 校级精品课程 </el-button>
        </div>
        <div class="display">
            <component :is="tabView"></component>
        </div>
    </div>
</template>

<script>
    import ForCurriculum from "@/components/ForCurriculum";
    import tt from "@/components/tt";

    export default {
        name: "curriculumOne",
        data(){
            return {
                tabView: ForCurriculum,
        }},
        methods: {
            toChoice1(){
                this.tabView = ForCurriculum;
            },
            toChoice2(){
                this.tabView = tt;
            }
        }
    }
</script>

<style scoped>
    .button{
        display: flex;justify-content: flex-start;
    }
    .curriculum{height: 30%;width: 100%;}
    .display{
        height: 80%;width: 100%;
    }
</style>