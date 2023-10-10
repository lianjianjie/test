Page({
  data: { 
    src:"https://img0.baidu.com/it/u=2393707969,656798232&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500",
    itemsCustom: [
    {
      title: '跳转表单测试',
      icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      tag:'1',
    }
  ],
},
  onLoad() {},
  handleTapItem(item) {
    // my.alert({ title: '点击了', content: JSON.stringify(item.tag) });
    if(item.tag == 1){
      dd.navigateTo({
        url: '../addEvent/addEvent?id=233',
        success: () => {},
        fail: () => {},
        complete: () => {},
      });
    }
  },
});
