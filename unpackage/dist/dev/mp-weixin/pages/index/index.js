"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      src: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
      list: [{
        id: 1,
        name: "公告1"
      }, {
        id: 2,
        name: "公告2"
      }]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_xzw_notice2 = common_vendor.resolveComponent("xzw-notice");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_xzw_notice2 + _easycom_uni_icons2)();
}
const _easycom_xzw_notice = () => "../../components/xzw-notice/xzw-notice.js";
const _easycom_uni_icons = () => "../../components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_xzw_notice + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: common_vendor.p({
      theme: "primary",
      list: $data.list,
      theKey: "name",
      showIcon: true,
      showMore: false
    }),
    d: common_vendor.p({
      type: "search",
      size: "16",
      color: "#1296db"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
