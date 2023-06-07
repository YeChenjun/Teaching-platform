<template>
    <div class="lunBo">
        <div class="font">校园风采</div>
        <div class="block">
            <el-carousel height="190px">
                <el-carousel-item v-for="item in imageURL" :key="item">
                    <img :src="item" alt="" class="xyimg">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import img0 from './HomePicture/xy1.jpg'
    import img1 from './HomePicture/xy2.jpg'
    import img2 from './HomePicture/xy3.jpg'
    import img3 from './HomePicture/xy4.jpg'
    export default {
        name: "lunBo",
        data(){
            return{
                imageURL:[img0,img1,img2,img3]
                 }
        }
    }
</script>

<style scoped>
    .lunBo{
     width: 100%;height: 33%;
    }
    .font{
        display: flex;justify-content: flex-start;align-items: center; width: 100%;height: 20%;background-color: #F5F7FA;border-radius: 4px
    }
    .xyimg{
        width: 100%;
        height: 100%;
    }


</style>