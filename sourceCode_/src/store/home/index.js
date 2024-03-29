import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
    categoryList: [],//初始值不能随便写，看服务器返回什么就写什么
    bannerList: [],
    floorList: [],
};//数据存储的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};//修改数据的方法
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async bannerList({ commit }) {
        let result = await reqBannerList();
        console.log(result);
        if (result.code == 200) {
            commit("BANNERLIST", result.data);
        }
    },

    async floorList({ commit }) {
        let result = await reqFloorList();
        console.log(result);
        if (result.code == 200) {
            commit("FLOORLIST", result.data);
        }
    },


};//书写逻辑，处理异步
const getters = {};//计算属性，简化仓库数据，

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters,
}