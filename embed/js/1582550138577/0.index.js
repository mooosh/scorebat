(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{498:function(e,t,n){var o,r;n(23),n(149),n(177),n(276),n(169),n(70),n(272),n(277),n(22),n(178),n(278),n(179),n(105),n(148),n(279),o=[t,n(151),n(152),n(147),n(523)],void 0===(r=function(e,t,n,o,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.noSpoilerTitle=e.relevantVideoFeed=e.isHighlights=e.isGoal=e.videoEmbedCode=e.widgetEmbedCode=e.embedCode=e.shouldAutoplay=e.timePast=e.thumbnail=void 0,t=i(t),n=i(n),r=i(r);e.thumbnail=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(e.sv){case"bl":return t?"https://cdn-b-east.streamable.com/image/".concat(e.si,".jpg"):"https://images.streamable.com/east/image/".concat(e.si,".jpg?height=300");case"bt":return"https://img.youtube.com/vi/".concat(e.si,"/").concat(t?"hqdefault":"default",".jpg")}};e.timePast=function(e,t){return t-e.t};e.shouldAutoplay=function(e,t){return e?0:t||"ontouchstart"in window||"onmsgesturechange"in window?0:1};e.embedCode=function(e){return"<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https://www.scorebat.com/embed/".concat(e?"g/"+(0,o.stripSc)(e)+"/":"","' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe></div><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'scorebat-jssdk'));<\/script>")};e.widgetEmbedCode=function(e){return'<iframe src="https://www.scorebat.com/embed/" frameborder="0" width="600" height="760" allowfullscreen allow=\'autoplay; fullscreen\' style="width:600px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \'https://www.scorebat.com/embed/embed.js?v=arrv\';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, \'script\', \'scorebat-jssdk\'));<\/script>'};e.videoEmbedCode=function(e){return'<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://www.scorebat.com/embed/v/'.concat(e,'/" frameborder="0" width="100%" height="100%" allowfullscreen allow=\'autoplay; fullscreen\' style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>')};var l=function(e){return/^(\d{1,2})-(\d{1,2})(?:.*)$/.exec(e.tt)};e.isGoal=l;e.isHighlights=function(e){var t=e.tt.toLowerCase();return-1!==t.indexOf("highlights")||""===t||"alternative"===t||"extra"===t||"mirror"===t||"extended"===t||"official"===t};e.relevantVideoFeed=function(e,n,r,i){var c=e;return i&&(c=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},{v:(0,t.default)(e.v,(function(e){return!l(e)}))})}))),(c=(0,t.default)(c,(function(e){return e.v.length>0&&(0,o.isRelevant)(e,n,r)}))).sort((function(e,t){var r=(0,o.dateToFeed)(e.dateT),i=(0,o.dateToFeed)(t.dateT);if(r!==i)return r<i?1:-1;var a=(0,o.isTop)(e,n),s=(0,o.isTop)(t,n);return a!==s?a>s?-1:1:(e.v.length&&e.v[0].t)<(t.v.length&&t.v[0].t)?1:-1})),c};e.noSpoilerTitle=function(e){var t=e.tt||"Highlights",n=l(e);if(n){var o=parseInt(n[1])+parseInt(n[2]);t="".concat((0,r.default)("numberth",{type:"template",number:o})," Goal")}return t}}.apply(t,o))||(e.exports=r)},504:function(e,t,n){var o;void 0===(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.user=void 0;e.user=function(e){if(e.api&&e.api.user)return e.api.user.data}}.apply(t,[t]))||(e.exports=o)},515:function(e,t,n){var o,r;n(40),o=[t,n(151),n(502),n(152)],void 0===(r=function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.gameIsInFeed=e.gameForTeams=e.gamesForTeam=e.gamesForComp=void 0,t=r(t),n=r(n),o=r(o);var i={};e.gamesForComp=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",a=i[n+"__"+r],s=e.api["games-"+r];return s&&s.data&&(!a||s.gameAdded&&s.gameAdded>(new Date).getTime()?(a=(0,t.default)(s.data.games,{compId:n}),i[n+"__"+r]=a):a&&(0,o.default)(a,(function(e){return e!==s.data.games[e.gameId]}))&&(a=(0,t.default)(s.data.games,{compId:n}),i[n+"__"+r]=a)),a};e.gamesForTeam=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",r={},i=e.api["games-"+o];return i&&i.data&&(r=(0,n.default)(i.data.games,(function(e){return e.side1ScId==t||e.side2ScId==t}))),r};e.gameForTeams=function(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zero",a=e.api["games-"+i];return a&&a.data&&(r=(0,o.default)(a.data.games,(function(e){return e.side1ScId==t&&e.side2ScId==n||e.side2ScId==t&&e.side1ScId==n}))),r};e.gameIsInFeed=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",o=e.api["games-"+n];return!!(o&&o.data&&o.data.games[t])}}.apply(t,o))||(e.exports=r)},516:function(e,t,n){var o,r;n(23),n(27),n(28),n(21),n(37),n(22),n(38),n(39),n(17),n(29),n(30),o=[t,n(1)],void 0===(r=function(e,t){"use strict";var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,a(n).call(this,e))).state={},t}var o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,e),o=n,(l=[{key:"componentDidMount",value:function(){}},{key:"selectEmbed",value:function(){this.embedT.select(),this.embedT.setSelectionRange(0,800)}},{key:"copyEmbed",value:function(){this.selectEmbed(),document.execCommand&&document.execCommand("copy")?this.setState({copied:1}):this.setState({copied:0}),this.props.onCopy&&this.props.onCopy()}},{key:"copyLabel",value:function(){return 0===this.state.copied?"Fail":1===this.state.copied?"Copied!":"Copy"}},{key:"render",value:function(){var e=this;return t.default.createElement("div",{className:"EmbedCode"},t.default.createElement("div",{className:"EmbedCodeIcon"}),t.default.createElement("div",{className:"EmbedCodeTW"},t.default.createElement("textarea",{ref:function(t){return e.embedT=t},rows:1,readOnly:!0,onClick:function(){return e.selectEmbed()},value:this.props.code})),t.default.createElement("div",{className:"EmbedCodeButton"+(1===this.state.copied||0===this.state.copied?" EmbedCodeButton"+this.state.copied:""),onClick:function(){return e.copyEmbed()}},this.copyLabel()))}}])&&r(o.prototype,l),c&&r(o,c),n}((t=(n=t)&&n.__esModule?n:{default:n}).default.Component);e.default=l}.apply(t,o))||(e.exports=r)},519:function(e,t,n){var o,r;n(23),n(27),n(28),n(149),n(21),n(40),n(261),n(37),n(22),n(38),n(39),n(17),n(148),n(29),n(497),n(263),n(30),n(100),o=[t,n(1),n(102),n(47),n(520),n(99),n(147)],void 0===(r=function(e,t,n,o,r,i,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=s(t),r=s(r);var f=function(e){function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=u(this,d(o).call(this,e))).state={},t}var s,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e),s=o,(l=[{key:"componentDidMount",value:function(){this.setUpBlinking(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.setUpBlinking(e)}},{key:"setUpBlinking",value:function(e){var t=this;"1T"===e.match.status||"2T"===e.match.status?this.blinkT||(this.blinkT=setInterval((function(){t.setState({b:(new Date).getTime()})}),500)):this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"componentWillUnmount",value:function(){this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"render",value:function(){var e="",o=(0,a.state)(this.props.match.status);if("1T"===this.props.match.status||"2T"===this.props.match.status){var s=(0,a.time)(this.props.match.whistleT,(new Date).getTime()-this.props.difference,this.props.match.status);this.props.shortCompensated?s.isRunningCompensatedTime?(e=s.minutes,e+=" + ".concat(s.compensatedMinutes+1,"'")):(e=s.minutes+":",e+=(0,i.addLeadingZero)(s.seconds)):(e=s.minutes+":",s.isRunningCompensatedTime&&(e+="00 + ".concat(s.compensatedMinutes,":")),e+=(0,i.addLeadingZero)(s.seconds))}else e=this.props.match.status;var l=(0,a.splitCompName)(this.props.match.comp.name),c="".concat(l.sub?(0,i.capitalizeAllWords)(l.sub.toLowerCase())+" ":"").concat(l.name);return t.default.createElement("div",{className:"AdVSc".concat(this.props.flag?" AdVScHFl":"").concat("scheduled"===o?" AdVSch":"")},this.props.flag&&t.default.createElement("div",{className:"AdVScFl"},this.props.embedded?t.default.createElement("a",{href:"https://www.scorebat.com/".concat((0,a.competitionSlug)(l),"-live-scores/"),title:c,target:"_blank"},t.default.createElement(r.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:c})):t.default.createElement(n.Link,{to:"/".concat((0,a.competitionSlug)(l),"-live-scores/"),title:c},t.default.createElement(r.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:c}))),!this.props.hideScores&&"scheduled"!==o&&t.default.createElement("div",{className:"AdVScr"},this.props.match.score1," : ",this.props.match.score2),"scheduled"!==o&&t.default.createElement("div",{className:"AdVSt AdVSt".concat(o).concat(this.props.hideScores?" AdVStNoScore":"")},e))}}])&&c(s.prototype,l),f&&c(s,f),o}(t.default.Component),h=f=(0,o.connect)((function(e,t){return{difference:e.serverTimeDifference,hideScores:e.__BAT__.hideScores}}))(f);e.default=h}.apply(t,o))||(e.exports=r)},520:function(e,t,n){var o,r;n(23),n(27),n(28),n(21),n(34),n(37),n(22),n(38),n(39),n(17),n(29),n(30),o=[t,n(1),n(47)],void 0===(r=function(e,t,n){"use strict";var o;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=a(this,s(n).call(this,e))).state={src:t.props.isServer?t.props.src:void 0},t}var o,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e),o=n,(r=[{key:"componentDidMount",value:function(){var e=this;this.img=new Image,this.img.onload=function(){return e.setState({src:e.props.src})},this.img.onerror=function(){return e.setState({src:e.props.failSrc})},this.img.src=this.props.src}},{key:"componentWillUnmount",value:function(){this.img.onload=function(){return!1},this.img.onerror=function(){return!1},this.img.src=""}},{key:"render",value:function(){return this.props.isServer?t.default.createElement("img",{src:this.state.src,alt:this.props.alt,className:"FailoverImage FailoverImageReady".concat(this.props.className?" "+this.props.className:"")}):t.default.createElement("div",{className:"FailoverImage"+(this.state.src?" FailoverImageReady":"")+(this.props.className?" "+this.props.className:""),style:Object.assign(this.state.src?{backgroundImage:"url("+this.state.src+")"}:{},this.props.style)})}}])&&i(o.prototype,r),c&&i(o,c),n}((t=(o=t)&&o.__esModule?o:{default:o}).default.Component),u=c=(0,n.connect)((function(e,t){return{isServer:e.__BAT__.server}}))(c);e.default=u}.apply(t,o))||(e.exports=r)},522:function(e,t,n){var o,r;n(23),n(27),n(28),n(149),n(21),n(40),n(37),n(22),n(38),n(39),n(17),n(29),n(30),o=[t,n(1),n(47),n(498),n(260),n(543),n(266)],void 0===(r=function(e,t,n,o,r,i,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=s(t),i=s(i);var f,h=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,d(n).call(this,e))).state={interrupted:0},t.shouldInterrupt=t.props.intrEvery&&(new Date).getTime()-t.props.interruptions.t>t.props.intrEvery,t}var i,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,e),i=n,(a=[{key:"componentDidMount",value:function(){var e=this;this.subscriberId=this.props.playerListener.subscribe(this.iframeRef,(function(t){"played"===t.type&&(0,r.GASendEvent)({category:"VideoPlayer",action:"Play",label:t.autoplay?"AutoPlay":"ManualPlay"}),"intrd"===t.type&&(e.props.adInterruption(),(0,r.GASendEvent)({category:"VideoPlayer",action:"Interruption"}),e.setState({interrupted:1})),"intrskpd"===t.type&&((0,r.GASendEvent)({category:"VideoPlayer",action:"InterruptionSkipped"}),e.setState({interrupted:0}))}))}},{key:"componentWillUnmount",value:function(){this.props.playerListener.unsubscribe(this.subscriberId)}},{key:"ntValue",value:function(){return 33333*(new Date).getUTCDate()+(this.shouldInterrupt?1:2)}},{key:"render",value:function(){var e=this,n=this.props.video.r;return this.props.screenWidth<=480&&this.state.interrupted&&(n=1),t.default.createElement("div",{className:"VideoPlayer v-".concat(this.props.video.id)},("bl"===this.props.video.sv||"bt"===this.props.video.sv)&&t.default.createElement("div",{className:"VideoPlayerBl",style:n?{paddingBottom:"".concat(1/n*100,"%")}:void 0},this.props.ssr?t.default.createElement("div",{className:"VideoPlayerTh",style:{backgroundImage:"url("+(0,o.thumbnail)(this.props.video,1)+")"}}):t.default.createElement("iframe",{src:"".concat(this.props.player,"/").concat(this.props.video.id,"/?nt=").concat(this.ntValue()).concat(this.props.autoplay?"&autoplay=1":"").concat(this.props.noPre||this.props.isEmbed&&"bl"===this.props.video.sv?"&npr=1":""),frameBorder:"0",width:"100%",ref:function(t){return e.iframeRef=t},height:"100%",allowFullScreen:!0,allow:"autoplay; fullscreen",scrolling:"no"})))}}])&&c(i.prototype,a),s&&c(i,s),n}(t.default.Component),m=h=(0,n.connect)((function(e,t){return e.__BAT__.server||f||(f=new i.default(e.__BAT__.player)),{ssr:e.__BAT__.server||e.__BAT__.bot,isEmbed:e.__BAT__.isEmbed,player:e.__BAT__.player,interruptions:e.ad&&e.ad.interruption,intrEvery:e.__BAT__.intrEvery,screenWidth:e.screenSize.width,playerListener:f}}),{adInterruption:a.adInterruption})(h);e.default=m}.apply(t,o))||(e.exports=r)},523:function(e,t,n){var o,r;o=[t,n(542)],void 0===(r=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=(n=t)&&n.__esModule?n:{default:n};var o=function(e,n){switch((n=n||{}).type){case"month":case"day":case"stat":case"playerPosition":case"gameOutcome":return t.default.en[n.type][e]||e;case"status":case"event":return n.full?t.default.en[n.type].full[e]||e:n.shortened?t.default.en[n.type].shortened[e]||e:t.default.en[n.type].short[e]||e;case"template":return t.default.en.template[e](n);default:return t.default.en.term[e.toLowerCase()]||e}};e.default=o}.apply(t,o))||(e.exports=r)},525:function(e,t,n){var o,r;n(23),n(27),n(28),n(21),n(37),n(22),n(38),n(39),n(17),n(148),n(29),n(497),n(30),o=[t,n(1),n(152),n(151),n(47),n(522),n(544),n(546),n(515),n(147),n(498),n(260),n(516)],void 0===(r=function(e,t,n,o,r,i,a,s,l,c,u,d,p){"use strict";function f(e){return e&&e.__esModule?e:{default:e}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=f(t),n=f(n),o=f(o),i=f(i),a=f(a),s=f(s),p=f(p);var g=function(e){function r(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=(t=y(this,v(r).call(this,e))).videosFiltered(e.match.v);return t.state={playing:n.length>0&&n[0].id,embed:!1},t}var l,f,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(r,e),l=r,(f=[{key:"componentWillReceiveProps",value:function(e){var t=this.videosFiltered(e.match.v);this.props.active!==e.active?this.setState({playing:t.length>0&&t[0].id,embed:!1}):0===t.length?this.setState({playing:!1}):this.props.active&&this.state.playing&&(0,n.default)(t,{id:this.state.playing})||this.setState({playing:t[0].id})}},{key:"firstPlayed",value:function(e,t,n){var o=this;this.pause=e,this.play=t,this.played||(this.played=!0,this.props.onFirstPlay&&this.props.onFirstPlay((function(){return o.pause()}),(function(){return o.play()}),n))}},{key:"videosFiltered",value:function(e){return this.props.noSpoilers&&(0,n.default)(e,(function(e){return(0,u.isHighlights)(e)}))?(0,o.default)(e,(function(e){return(0,u.isHighlights)(e)})):e}},{key:"render",value:function(){var e=this,o=this.videosFiltered(this.props.match.v),r=this.state.playing&&(0,n.default)(o,{id:this.state.playing}),l=(0,c.matchAddressNearest)(this.props.match),f="https://www.scorebat.com".concat(l);return t.default.createElement(d.GAConsumer,null,(function(n){return t.default.createElement("div",{className:"VideoPlayerStories VideoPlayerStories"+e.props.layout+(e.props.active?" VideoPlayerStoriesActive":"")+(e.props.match.v.length>1?" VideoPlayerStoriesMulti":" VideoPlayerStoriesSingle")},!e.props.noHeader&&t.default.createElement("div",{className:"VideoPlayerStoriesTW"},t.default.createElement(s.default,{match:e.props.match,playingTitle:e.state.playing?r.tt:"No Videos Yet",total:o.length,onClick:function(){return!e.props.active&&e.props.onPick(e.props.match.gameId)},active:e.props.active,liveMatch:e.props.liveMatch,matchLink:e.props.fullLink?f:l,fullLink:e.props.fullLink,showLink:e.props.active||e.props.isServer})),e.props.active&&t.default.createElement("div",null,t.default.createElement("div",{className:"VideoPlayerStoriesPW"},e.state.playing?t.default.createElement("div",{className:e.props.dontStretch?"":"BatFeedItemStretch"},t.default.createElement(i.default,{video:r,muted:!e.state.picked,autoplay:e.state.picked||e.props.autoplay,key:e.state.playing,onFirstPlay:function(t,o,r){e.firstPlayed(t,o,r),r&&n.sendEvent({category:"VideoPlayerStories",action:"ManualPlay",label:(0,c.stripSc)(e.props.match.gameId)})}},e.props.children)):t.default.createElement("div",{className:"VideoPlayerStoriesSoon"},e.props.match.side1," - ",e.props.match.side2," goals and highlights will appear here"))),t.default.createElement("div",{className:"VideoPlayerStoriesC"},e.props.active&&t.default.createElement("div",{className:"VideoPlayerStoriesPTT"},e.props.noSpoilers?(0,u.noSpoilerTitle)(r):r.tt||"Highlights"),e.props.active&&t.default.createElement("div",null,o.length>1&&t.default.createElement(a.default,{videos:o,active:e.state.playing,onPick:function(t){e.setState({playing:t,picked:1}),n.sendEvent({category:"VideoPlayerStories",action:"VideoPicked",label:(0,c.stripSc)(e.props.match.gameId)})},touch:"touch"===e.props.layout,screenWidth:e.props.screenWidth,noSpoilers:e.props.noSpoilers}),e.props.showEmbedCode&&t.default.createElement("div",{className:"EmbedCodeWrapper"},t.default.createElement(p.default,{code:(0,u.embedCode)(e.props.match.gameId)}),t.default.createElement("div",{className:"EmbedCodeLabel"},"Embed all videos of ",e.props.match.side1," - ",e.props.match.side2)))))}))}}])&&m(l.prototype,f),h&&m(l,h),r}(t.default.Component),w=g=(0,r.connect)((function(e,t){var n,o=e.__BAT__.server||e.__BAT__.bot,r=!o&&("ontouchstart"in window||"onmsgesturechange"in window)?"touch":"desk";return t.getScoreFromFeed&&(0,l.gameIsInFeed)(e,t.match.gameId)&&(n=e.api["games-zero"].data.games[t.match.gameId]),{isServer:o,layout:r,liveMatch:n,screenWidth:e.screenSize.width,noSpoilers:e.__BAT__.noSpoilers}}))(g);e.default=w}.apply(t,o))||(e.exports=r)},542:function(e,t,n){var o,r;n(172),n(154),o=[t,n(524)],void 0===(r=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={en:{month:["January","February","March","April","May","June","July","August","September","October","November","December"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],term:{relevant:"Relevant",now:"Now",all:"All","right now":"Right Now","all leagues":"All Leagues","no games found":"No Games Found",referee:"Referee","points deducted":"points deducted","line-up":"Line-up",bench:"Bench","played today":"Played Today","see full table":"See full table","see all headlines":"See all headlines",connecting:"Connecting",today:"Today","next match":"Next Match","latest match":"Latest Match"},template:{"see all games":(0,(t=(n=t)&&n.__esModule?n:{default:n}).default)("See all <%= count %> games"),"kick-off at":(0,t.default)("Kick-off at <%= at %>"),"time on weekday, date":(0,t.default)("<%= time %> on <%= weekDay %>, <%= month %> <%= date %>"),numberth:function(e){var t=e.number,n=["th","st","nd","rd"],o=t%100;return t+(n[(o-20)%10]||n[o]||n[0])},plural:(0,t.default)("<%= thing %><%= count !== 1 ? suffix :'' %>"),"commas and":function(e){var t=e.list,n=e.andOr,o=void 0===n?"and":n,r="";return t.length>1?(r+=t.slice(0,t.length-1).join(", "),r+=" "+o+" "+t[t.length-1]):1===t.length&&(r+=t[0]),r},times:function(e){var t=e.number;return 1===t?"once":2===t?"twice":"".concat(t," times")}},event:{short:{goal:"goal",pen:"pen",og:"og","m.pen":"m.pen",yc:"yc",rc:"rc","2yc":"2yc",sub:"sub"},full:{goal:"Goal",pen:"Penalty",og:"Own Goal","m.pen":"Missed Penalty",yc:"Yellow Card",rc:"Red Card","2yc":"Second Yellow",sub:"Substitution"}},stat:{possession:"Ball Possession",shot:"Total Attempts",shotOnGoal:"Shots On Target",save:"Saves",foul:"Fouls",corner:"Corners",offside:"Offsides",yc:"Yellow Cards",passes:"Total Passes",completedPasses:"Completed Passes"},playerPosition:{G:"Goalkeeper",D:"Defender",M:"Midfielder",F:"Forward"},gameOutcome:{W:"W",D:"D",L:"L"},status:{full:{"-":"Scheduled","1T":"First Half","2T":"Second Half",HT:"Half Time",FT:"Full Time",Fin:"Ended",Final:"Ended",Res:"Ended",ET:"Extra Time",AET:"After Extra Time",Canc:"Canceled","11M":"Penalties",Pen:"On Penalties",Pst:"Postponed",Ssp:"Suspended",Susp:"Suspended",AW:"Forfeit",NIY:"No Info Yet"},shortened:{"-":"Scheduled","1T":"1st Half","2T":"2nd Half",HT:"Half Time",FT:"Full Time",Fin:"Ended",Final:"Ended",Res:"Ended",ET:"Extra Time",AET:"After Extra Time",Canc:"Canceled","11M":"Penalties",Pen:"On Penalties",Pst:"Postponed",Ssp:"Suspended",Susp:"Suspended",AW:"Forfeit",NIY:"No Info Yet"},short:{"-":"-","1T":"1H","2T":"2H",HT:"HT",FT:"FT",Fin:"Fin",Final:"Fin",Res:"Res",ET:"ET",AET:"AET",Canc:"Canc","11M":"11M",Pen:"Pen",Pst:"Pst",Ssp:"Ssp",Susp:"Ssp",AW:"Frf",NIY:"NIY"}}}};e.default=o}.apply(t,o))||(e.exports=r)},543:function(e,t,n){var o;n(160),n(22),void 0===(o=function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerUrl=t,this.subscribers=[],this.subscriberId=0;var n=window.addEventListener?"addEventListener":"attachEvent",o=window[n],r="attachEvent"==n?"onmessage":"message";this.messageReceived=this.messageReceived.bind(this),o(r,this.messageReceived,!1)}var n,o,r;return n=e,(o=[{key:"messageReceived",value:function(e){if(e.origin===this.playerUrl)try{for(var t=JSON.parse(e.data),n=0;n<this.subscribers.length;n++)this.subscribers[n].ref&&this.subscribers[n].ref.contentWindow===e.source&&this.subscribers[n].callback(t)}catch(e){}}},{key:"subscribe",value:function(e,t){var n={ref:e,callback:t,id:this.subscriberId++};return this.subscribers.push(n),n.id}},{key:"unsubscribe",value:function(e){for(var t=0;t<this.subscribers.length;t++)if(this.subscribers[t].id===e)return this.subscribers[t]={id:e},1}}])&&t(n.prototype,o),r&&t(n,r),e}();e.default=n}.apply(t,[t]))||(e.exports=o)},544:function(e,t,n){var o,r;n(23),n(27),n(28),n(21),n(70),n(37),n(22),n(38),n(39),n(17),n(29),n(30),o=[t,n(1),n(498),n(545)],void 0===(r=function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=r(t),o=r(o);var u=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),s(this,l(r).apply(this,arguments))}var i,u,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,e),i=r,(u=[{key:"render",value:function(){var e=this;return t.default.createElement(o.default,{key:this.props.touch?"touch":"mouse",touch:this.props.touch,screenWidth:this.props.screenWidth},this.props.videos.map((function(o,r){var i=o.tt||"Highlights";return e.props.noSpoilers&&(i=(0,n.noSpoilerTitle)(o)),t.default.createElement("div",{key:o.id},t.default.createElement("div",{className:"VideoFeedHorizontalItem"+(r?"":" VideoFeedHorizontalItemFirst")+(o.id===e.props.active?" VideoFeedHorizontalItemActive":""),onClick:function(){return e.props.onPick&&e.props.onPick(o.id)}},t.default.createElement("div",{className:"VideoFeedHorizontalC"},t.default.createElement("div",{className:"VideoFeedHorizontalThumbW"},t.default.createElement("div",{className:"VideoFeedHorizontalThumb",style:{backgroundImage:"url(".concat((0,n.thumbnail)(o),")")}}))),t.default.createElement("div",{className:"VideoFeedHorizontalC"},t.default.createElement("div",{className:"VideoFeedHorizontalTitle"},t.default.createElement("div",null,i)))))})))}}])&&a(i.prototype,u),d&&a(i,d),r}(t.default.Component);e.default=u}.apply(t,o))||(e.exports=r)},545:function(e,t,n){var o,r;n(23),n(27),n(28),n(21),n(37),n(22),n(38),n(39),n(17),n(29),n(30),o=[t,n(1)],void 0===(r=function(e,t){"use strict";var n;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,a(n).call(this,e))).state={contentHeight:0,contentWidth:0,width:0,pos:0},t}var o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,e),o=n,(l=[{key:"componentDidMount",value:function(){this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth})}},{key:"componentDidUpdate",value:function(e,t){if(this.c.clientHeight!==this.state.contentHeight||this.c.scrollWidth!==this.state.contentWidth||this.w.clientWidth!==this.state.width){var n=this.state.pos;!this.props.touch&&this.c.scrollWidth<=this.w.clientWidth&&(n=0),this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth,pos:n})}else t.pos!==this.state.pos&&this.props.onEndReach&&this.state.pos+this.w.clientWidth>=this.state.contentWidth&&this.props.onEndReach()}},{key:"arrowClicked",value:function(e){var t;"right"===e?(t=this.state.pos+this.state.width/2)+this.state.width>this.state.contentWidth&&(t=this.state.contentWidth-this.state.width):(t=this.state.pos-this.state.width/2)<0&&(t=0),this.setState({pos:t})}},{key:"render",value:function(){var e=this;return t.default.createElement("div",{className:"HorizontalScroll ".concat(this.props.touch?"HorizontalScrollTouch":"HorizontalScrollMouse"),style:{paddingBottom:this.state.contentHeight||this.props.defaultHeight||130}},t.default.createElement("div",{className:"HorizontalScrollW",ref:function(t){return e.w=t}},t.default.createElement("div",{className:"HorizontalScrollC",ref:function(t){return e.c=t},style:this.props.touch?void 0:{transform:"translateX(-".concat(this.state.pos,"px)")},onScroll:this.props.onEndReach&&this.props.touch?function(t){var n=e.c.scrollWidth,o=e.w.clientWidth;t.target.scrollLeft+o>=n&&e.props.onEndReach()}:void 0},this.props.children),!this.props.touch&&this.state.pos+this.state.width<this.state.contentWidth&&t.default.createElement("div",{className:"HorizontalScrollAR",onClick:function(){return e.arrowClicked("right")}}),!this.props.touch&&this.state.pos>0&&t.default.createElement("div",{className:"HorizontalScrollAL",onClick:function(){return e.arrowClicked("left")}})))}}])&&r(o.prototype,l),c&&r(o,c),n}((t=(n=t)&&n.__esModule?n:{default:n}).default.Component);e.default=l}.apply(t,o))||(e.exports=r)},546:function(e,t,n){var o,r;n(23),n(27),n(28),n(149),n(21),n(261),n(37),n(22),n(38),n(39),n(17),n(148),n(29),n(497),n(263),n(30),o=[t,n(1),n(102),n(99),n(147),n(520),n(519)],void 0===(r=function(e,t,n,o,r,i,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=s(t),i=s(i),a=s(a);var f=function(e){function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),u(this,d(s).apply(this,arguments))}var l,f,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e),l=s,(f=[{key:"statusString",value:function(){return t.default.createElement("span",null,this.props.playingTitle||"Highlights"," ",t.default.createElement("span",{className:"VideoInFeedOtherVideos"},this.props.total>1?"and "+(this.props.total-1)+" other video"+(this.props.total>2?"s":""):""))}},{key:"render",value:function(){var e=this.props,s=e.match,l=e.onClick,c=e.active,u=e.showLink,d=e.matchLink,p=e.liveMatch,f=(0,r.splitCompName)(s.comp.name),h="".concat(f.sub?(0,o.capitalizeAllWords)(f.sub.toLowerCase())+" ":"").concat(f.name);return t.default.createElement("div",{onClick:function(){return l&&l()},className:"BatFeedItemHeaderPaddingV"},t.default.createElement("div",{className:"VideoInFeedBody"},t.default.createElement("div",{className:"VideoInFeedCLogo VideoInFeedCLogoL"},u?t.default.createElement("a",{href:"https://www.scorebat.com/".concat((0,r.competitionSlug)(f),"-live-scores/"),title:h,target:"_blank"},t.default.createElement(i.default,{src:s.comp.flag,alt:h})):t.default.createElement(i.default,{src:s.comp.flag,alt:h})),t.default.createElement("div",{className:"VideoInFeedTW"},t.default.createElement("div",{className:"VideoInFeedName"},u?this.props.fullLink?t.default.createElement("a",{href:d,target:"_blank",className:"VideoInFeedTitle VideoInFeedTitleActive"},t.default.createElement("span",{className:"VideoInFeedTitleS"},s.side1),t.default.createElement("span",{className:"VideoInFeedTitleR"}," "),t.default.createElement("span",{className:"VideoInFeedTitleS"},s.side2)):t.default.createElement(n.Link,{to:d,className:"VideoInFeedTitle VideoInFeedTitleActive"},t.default.createElement("span",{className:"VideoInFeedTitleS"},s.side1),t.default.createElement("span",{className:"VideoInFeedTitleR"}," "),t.default.createElement("span",{className:"VideoInFeedTitleS"},s.side2)):t.default.createElement("div",{className:"VideoInFeedTitle"},s.side1,t.default.createElement("span",{className:"VideoInFeedTitleR"}," - "),t.default.createElement("span",{className:"VideoInFeedTitleS"},s.side2))),!c&&t.default.createElement("div",{className:"VideoInFeedSubTitle"},this.statusString())),t.default.createElement(a.default,{match:p||s,shortCompensated:!0})))}}])&&c(l.prototype,f),h&&c(l,h),s}(t.default.Component);e.default=f}.apply(t,o))||(e.exports=r)}}]);