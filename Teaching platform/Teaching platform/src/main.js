import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import store from "@/store/store";



import router from "@/router/router";
import background from "@/components/background";
import DaoHang from "@/components/DaoHang";
import search from "@/components/search";
import news from "@/components/news";
import forNews from "@/components/forNews";
import tt from "@/components/tt"
import Download from "@/components/Download";
import lunBo from "@/components/lunBo";
import curriculumOne from "@/components/curriculumOne";
import Home from "@/components/Home";
import gongGao from "@/components/gongGao";
import privateWeb from "@/components/private/privateWeb";
import curriculumTwo from "@/components/curriculumTwo";
import curriculumThree from "@/components/curriculumThree";
import ForCurriculum from "@/components/ForCurriculum";
import ForSearch from "@/components/ForSearch";


Vue.component(background.name,background);
Vue.component(DaoHang.name,DaoHang);
Vue.component(search.name,search);
Vue.component(news.name,news);
Vue.component(forNews.name,forNews);
Vue.component(tt.name,tt);
Vue.component(Download.name,Download);
Vue.component(lunBo.name,lunBo);
Vue.component(curriculumOne.name,curriculumOne);
Vue.component(Home.name,Home);
Vue.component(gongGao.name,gongGao);
Vue.component(privateWeb.name,privateWeb);
Vue.component(curriculumTwo.name,curriculumTwo);
Vue.component(curriculumThree.name,curriculumThree);
Vue.component(ForCurriculum.name,ForCurriculum);
Vue.component(ForSearch.name,ForSearch);




new Vue({
  el: '#app',router,store,
  method:{

  },
  render: h => h(App)
});