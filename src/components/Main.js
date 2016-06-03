require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 引入图片数据
let imgDagas = require('../data/imgDatas.json');

// 将图片名信息转成图片URL路径
imgDagas = (function getImgURL(imgDataArr) {
  // for (img of imgDataArr) {
  //   img.imgURL = require('../images/'+img.fileName);
  // }
  for(var i=0,j=imgDataArr.length;i<j;i++){
      var singleImgData=imgDataArr[i];
      singleImgData.imgURL=require('../images/'+singleImgData.fileName);
  }
  return imgDataArr;
})(imgDatas);

class GalleryApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

GalleryApp.defaultProps = {
};

export default GalleryApp;
