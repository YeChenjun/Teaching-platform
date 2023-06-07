import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        searchList: [],
        // count:1
    },
    mutations:{
        // add(state,step){
        //     state.count+=step;
        // }
        initList(state,content){
            console.log(content.data.result.songs);
            state.searchList = content.data.result.songs;
        }
    },
    actions:{
            // addNAsync(context,step){
            //     setTimeout(() =>{
            //         context.commit("add",step)
            //     },1000)
            // }
        getList(context,query){
            axios.get("https://autumnfish.cn/search?keywords=" + query).then(function
                (content){
                context.commit('initList',content)
            });
        }
    }
})

// this.$store.state.any 调用state
//this.$store.commit('any',some) || ...mapMutations(['any','any'])  调用mutation
//this.$store.dispatch('addNAsync',any) 调用actions 内部调用mutation使用context