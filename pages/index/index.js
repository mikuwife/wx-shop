//index.js
//获取应用实例
//Page Object
import {request} from "../../request/index"
Page({
  data: {
    indexData:[],
    // 轮播图数据
    swiperList: [],
    // 导航数组
    catesList: [],
    // 品牌制造商直供数据
    brandList: [],
    // 新品数据
    newGoods:[],
    // 人气推荐
    hotGoods:[],
    // 专题推荐
    topicList:[],
    // 好物
    newCategoryList:[]
  },
  //options(Object)
  onLoad: function(options){
    this.getIndexData();
  },
  getIndexData(){
    request({url:"/index/index"})
    .then(result => {
      this.setData({
        indexData: result,
        swiperList: result.banner,
        catesList: result.channel,
        brandList: result.brandList,
        newGoods:result.newGoods,
        hotGoods:result.hotGoods,
        topicList:result.topicList,
        newCategoryList:result.newCategoryList
      })
    })
  }
});
