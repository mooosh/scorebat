(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{492:function(e,t,r){var n,o;r(25),r(29),r(30),r(26),r(44),r(24),r(45),r(46),r(20),r(148),r(31),r(494),r(32),n=[t,r(1),r(47),r(261),r(510),r(147),r(512),r(160)],void 0===(o=function(e,t,r,n,o,a,i,u){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=c(t),n=c(n),i=c(i),u=c(u);var y=function(e){function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),s(this,p(r).call(this,e))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e),n=r,(o=[{key:"render",value:function(){return this.props.isFetching?[t.default.createElement(i.default,{interval:4e4,reloadEvery:12e4,key:"zero",safe:this.props.safe}),t.default.createElement(u.default,{dontScroll:!0,key:"scroll"})]:t.default.createElement("div",null,t.default.createElement(i.default,{interval:4e4,reloadEvery:12e4,key:"zero",safe:this.props.safe}))}}])&&f(n.prototype,o),a&&f(n,a),r}(t.default.Component);y=(0,n.default)(y,(function(e){return{item:"competition/3/"+e.selector,saveAs:"competition/"+e.selector,spinWhileFetching:!0,parser:a.competitionParser,data:{sf:1}}}));var v=y=(0,r.connect)((function(e,t){var r,n=t.match.params.selector;if(e.api["competition/"+n]&&e.api["competition/"+n].data){var a=e.api["competition/"+n].data;r=(0,o.gamesForComp)(e,"sc"+a.id)}return{selector:n,todaysGames:r||[]}}))(y);e.default=v}.apply(t,n))||(e.exports=o)},494:function(e,t,r){"use strict";var n=r(153),o=r(10),a=r(27),i=r(33),u=r(154),c=r(155);n("match",1,(function(e,t,r){return[function(t){var r=i(this),n=null==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var i=o(e),l=String(this);if(!i.global)return c(i,l);var f=i.unicode;i.lastIndex=0;for(var s,p=[],d=0;null!==(s=c(i,l));){var y=String(s[0]);p[d]=y,""===y&&(i.lastIndex=u(l,a(i.lastIndex),f)),d++}return 0===d?null:p}]}))},499:function(e,t,r){var n=r(48),o=r(39),a=r(263),i=r(156);e.exports=function(e,t){if(null==e)return{};var r=n(i(e),(function(e){return[e]}));return t=o(t),a(e,r,(function(e,r){return t(e,r[0])}))}},510:function(e,t,r){var n,o;r(37),n=[t,r(150),r(499),r(151)],void 0===(o=function(e,t,r,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.gameIsInFeed=e.gameForTeams=e.gamesForTeam=e.gamesForComp=void 0,t=o(t),r=o(r),n=o(n);var a={};e.gamesForComp=function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",i=a[r+"__"+o],u=e.api["games-"+o];return u&&u.data&&(!i||u.gameAdded&&u.gameAdded>(new Date).getTime()?(i=(0,t.default)(u.data.games,{compId:r}),a[r+"__"+o]=i):i&&(0,n.default)(i,(function(e){return e!==u.data.games[e.gameId]}))&&(i=(0,t.default)(u.data.games,{compId:r}),a[r+"__"+o]=i)),i};e.gamesForTeam=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",o={},a=e.api["games-"+n];return a&&a.data&&(o=(0,r.default)(a.data.games,(function(e){return e.side1ScId==t||e.side2ScId==t}))),o};e.gameForTeams=function(e,t,r){var o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zero",i=e.api["games-"+a];return i&&i.data&&(o=(0,n.default)(i.data.games,(function(e){return e.side1ScId==t&&e.side2ScId==r||e.side2ScId==t&&e.side1ScId==r}))),o};e.gameIsInFeed=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",n=e.api["games-"+r];return!!(n&&n.data&&n.data.games[t])}}.apply(t,n))||(e.exports=o)},512:function(e,t,r){var n,o;r(25),r(29),r(30),r(26),r(44),r(24),r(45),r(46),r(20),r(31),r(32),n=[t,r(1),r(47),r(261),r(147),r(98),r(513)],void 0===(o=function(e,t,r,n,o,a,i){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=u(t),n=u(n);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(){this.props.data&&this.props.data.playerUrl&&this.props.data.playerUrl!==this.props.player&&this.props.playerUrlChange(this.props.data.playerUrl)}},{key:"render",value:function(){return!1}}])&&l(r.prototype,n),o&&l(r,o),t}(t.default.Component);d=(0,r.connect)((function(e){return{player:e.__BAT__.player}}),{playerUrlChange:i.playerUrlChange})(d);var y=d=(0,n.default)(d,(function(e){var t={item:"feed",saveAs:"games-zero",parser:o.matchDayParser,saveOther:function(e,t){return{videoFeed:(0,a.videoFeedUpdater)(t.videoFeed,e.v)}},pollParser:o.matchDayUpdateParser,pollInterval:e.interval||6e3,pollFrom:"feed/updates",updater:o.updateFeed,disconnectAfter:6e4,reloadEvery:e.reloadEvery||6e4};return e.safe&&(t.data={sf:1}),t}));e.default=y}.apply(t,n))||(e.exports=o)},513:function(e,t,r){var n;void 0===(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.playerUrlChange=e.noSpoilersDeactivate=e.noSpoilersActivate=void 0;e.noSpoilersActivate=function(){return{type:"NOSPOILERS_ON"}};e.noSpoilersDeactivate=function(){return{type:"NOSPOILERS_OFF"}};e.playerUrlChange=function(e){return{type:"PLAYER_URL_CHANGE",url:e}}}.apply(t,[t]))||(e.exports=n)}}]);