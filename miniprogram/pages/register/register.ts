// {{page}}.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderIndex:0,
    // licImgURL:undefined as string | undefined,
    licImgURL:'',
    genders:["未知","男","女","其他"],
    birthDate:"1990.01.01" as string |undefined,
    state:"UNSUBMITTED" as 'UNSUBMITTED'|'PENDING'|'VERIFIED',
    licNo:'',
    name:''
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
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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

  },
  onUpLoadLic(){
    wx.chooseImage({
      success:res=>{
        if(res.tempFilePaths.length>0){
          this.setData({
            licImgURL : res.tempFilePaths[0]
          });
          setTimeout(() => {
            this.setData({
              licNo:'1231313',
              name:"rose",
              genderIndex:1,
              birthDate:"1997.02.03"
            })
          }, 1000);
        }
      }
    })
  },
  onGenderChange(e:any){
    this.setData({
      genderIndex:e.detail.value,
    })
  },
  onDateChange(e:any){
    this.setData({
      birthDate:e.detail.value,
    })
  },
  onSubmit(){
    //TODO: submit the form to server
    this.setData({
      state:"PENDING",
    })
    setTimeout(() => {
      this.onVerified()
    }, 1000);
  },
  onReSubmit(){
    //TODO: submit the form to server
    this.setData({
      state:"UNSUBMITTED",
      licImgURL:''
    })
  },
  onVerified(){
    //TODO: submit the form to server
    this.setData({
      state:"VERIFIED"
    }),
    setTimeout(() => {
      wx.redirectTo({
        url:'/pages/lock/lock',
      })
    }, 1000);
  }
})