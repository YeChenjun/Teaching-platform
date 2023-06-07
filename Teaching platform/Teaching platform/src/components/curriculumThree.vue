<template>
    <div class="down">
        <div class="curriculum"> &nbsp;《高等数学》《大学物理》课程试看 </div>
        <div class="pictureContain">
            <div v-for="(item,index) in imageURL" :key="item" class="picture">
                <img :src="item" alt="" class="xyimg">
                <div class="font">
                    {{index}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import img0 from './HomePicture/xy1.jpg'
    import img1 from './HomePicture/xy2.jpg'
    import img2 from './HomePicture/xy3.jpg'
    import img3 from './HomePicture/xy4.jpg'
    export default {
        name: "curriculumThree",
        data(){
            return{
                imageURL:[img0,img1,img2,img3]
            }
        }
    }
</script>

<style scoped>
    .down{
        width: 100%;height: 30%;
    }
    .curriculum{
        display: flex;justify-content: flex-start;align-items: center; width: 100%;height: 20%;background-color: #F5F7FA;border-radius: 4px
    }
    .pictureContain{width: 100%;height: 100%;display: flex;justify-content: space-between;margin-top: 10px}
    .picture{width: 20%;height: 60%;}
    .xyimg{
        width: 100%;
        height: 100%;
    }
</style>