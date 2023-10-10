
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    my.getSystemInfo({
      success: (res) => {
        this.globalData.sysInfo = res;
      }
    })
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {}
});