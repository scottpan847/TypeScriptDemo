
// {{page}}.ts
Page({

  isPageShowing:false,
  /**
   * 页面的初始数据
   */
  data: {
    setting : {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location:{
      latitude:31,
      longitude:120
    },
    scale:10,
    is3D :true,
    isOverLooking:true,
    markers:[
      {
        iconPath:"../../resources/car.jpg",
        id:1,
        latitude:24.619600,
        longitude:118.247890,
        width:50,
        height: 50
      },
    ]
  },
  onMyLocationTap(){
    wx.getLocation({
      type:'gcj02',
      success:res=>{
        this.setData(
          {
            location:{
              latitude:res.latitude,
              longitude:res.longitude,
            },
          }
        )
      },
      fail:()=>{
        wx.showToast({
          iconL:'none',
          title:'请前往设置页授权'
        })
      }
    })
  },
  onShow(){
    this.isPageShowing = true;
  },
  onHide(){
    this.isPageShowing = false;
  },
  moveCars(){
    const map =  wx.createMapContext("map")
    const dest ={
      latitude:24.619600,
      longitude:118.247890,
    }
    const moveCar = ()=>{
      dest.latitude+=0.1
      dest.longitude+=0.1
      map.translateMarker({
        destination:{
          latitude:dest.latitude+1,
          longitude:dest.longitude+1,
        },
        markerId:1,
        autoRotate:false,
        rotate:0,
        duration:5000,
        animationEnd:()=>{
          if(this.isPageShowing){
            moveCar()
          }
        }
      })
    }
    moveCar()
  },
  onScanCliked(){
    wx.scanCode({
      success:()=>{
        wx.navigateTo({
          url:'/pages/register/register'
        })
      },
      fail:console.log
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow1() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide1() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})