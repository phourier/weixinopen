"use strict";function init(){function r(r,o){return r?{errMsg:"startRecord:ok"}:{errMsg:"startRecord:"+n.failWroding}}function o(r,o){return r?{errMsg:"stopRecord:ok",localId:"wxLocalResource://voiceLocalId1234567890123"}:{errMsg:"stopRecord:"+n.failWroding}}function e(r,o){return r?{errMsg:"playVoice:ok"}:{errMsg:"playVoice:"+n.failWroding}}function s(r,o){return r?o.localId?{errMsg:"pauseVoice:ok"}:{errMsg:"pauseVoice::fail,missing localId"}:{errMsg:"pauseVoice:"+n.failWroding}}function i(r,o){return r?o.localId?{errMsg:"stopVoice:ok"}:{errMsg:"stopVoice::fail,missing localId"}:{errMsg:"stopVoice:"+n.failWroding}}function a(r,o){return r?o.localId?{errMsg:"uploadVoice:ok",serverId:"1237378768e7q8e7r8qwesafdasdfasdfaxss111"}:{errMsg:"uploadVoice::fail,missing localId"}:{errMsg:"uploadVoice:"+n.failWroding}}function c(r,o){return r?o.serverId?{errMsg:"downloadVoice:ok",localId:"wxLocalResource://voiceLocalId1234567890123"}:{errMsg:"downloadVoice:fail,missing serverId"}:{errMsg:"downloadVoice:"+n.failWroding}}function l(r,o){return r?o.localId?{errMsg:"translateVoice:ok",translateResult:"嗯，只是一个模拟调试的结果"}:{errMsg:"translateVoice:missing localId"}:{errMsg:"translateVoice:"+n.failWroding}}var n=require("./sdkConfig.js"),t=function(n,t,d,g){var u=t.sdkName,f=void 0;"startRecord"===u?f=r(n,t.args):"stopRecord"===u?f=o(n,t.args):"playVoice"===u?f=e(n,t.args):"pauseVoice"===u?f=s(n,t.args):"stopVoice"===u?f=i(n,t.args):"uploadVoice"===u?f=a(n,t.args):"downloadVoice"===u?f=c(n,t.args):"translateVoice"===u&&(f=l(n,t.args)),g(f)};_exports={exec:t}}var _exports;init(),module.exports=_exports;