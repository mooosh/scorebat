(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noSpoilerTitle=t.relevantVideoFeed=t.isHighlights=t.isGoal=t.videoEmbedCode=t.widgetEmbedCode=t.embedCode=t.shouldAutoplay=t.timePast=t.thumbnail=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n(156)),a=(s(n(155)),n(154)),i=s(n(645));function s(e){return e&&e.__esModule?e:{default:e}}t.thumbnail=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(e.sv){case"bl":return t?"https://cdn-b-east.streamable.com/image/"+e.si+".jpg":"https://images.streamable.com/east/image/"+e.si+".jpg?height=300";case"bt":return"https://img.youtube.com/vi/"+e.si+"/"+(t?"hqdefault":"default")+".jpg"}},t.timePast=function(e,t){return t-e.t},t.shouldAutoplay=function(e,t){return e?0:t||"ontouchstart"in window||"onmsgesturechange"in window?0:1},t.embedCode=function(e){return"<iframe src='https://www.scorebat.com/embed/"+(e?"g/"+(0,a.stripSc)(e)+"/":"")+"' frameborder='0' width='560' height='590' allowfullscreen allow='autoplay; fullscreen' style='width:560px;height:590px;overflow:hidden;display:block;' class='_scorebatEmbeddedPlayer_'></iframe><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = 'https://www.scorebat.com/embed/embed.js?v=m2to';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'scorebat-jssdk'));<\/script>"},t.widgetEmbedCode=function(e){return'<iframe src="https://www.scorebat.com/embed/" frameborder="0" width="600" height="760" allowfullscreen allow=\'autoplay; fullscreen\' style="width:600px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \'https://www.scorebat.com/embed/embed.js?v=m2to\';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, \'script\', \'scorebat-jssdk\'));<\/script>'},t.videoEmbedCode=function(e){return'<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://www.scorebat.com/embed/v/'+e+'/" frameborder="0" width="100%" height="100%" allowfullscreen allow=\'autoplay; fullscreen\' style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>'};var l=t.isGoal=function(e){return/^(\d{1,2})-(\d{1,2})(?:.*)$/.exec(e.tt)};t.isHighlights=function(e){var t=e.tt.toLowerCase();return-1!==t.indexOf("highlights")||""===t||"alternative"===t||"extra"===t||"mirror"===t||"extended"===t||"official"===t},t.relevantVideoFeed=function(e,t,n,i){var s=e;return i&&(s=e.map(function(e){return r({},e,{v:(0,o.default)(e.v,function(e){return!l(e)})})})),(s=(0,o.default)(s,function(e){return e.v.length>0&&(0,a.isRelevant)(e,t,n)})).sort(function(e,n){var r=(0,a.dateToFeed)(e.dateT),o=(0,a.dateToFeed)(n.dateT);if(r!==o)return r<o?1:-1;var i=(0,a.isTop)(e,t),s=(0,a.isTop)(n,t);return i!==s?i>s?-1:1:(e.v.length&&e.v[0].t)<(n.v.length&&n.v[0].t)?1:-1}),s},t.noSpoilerTitle=function(e){var t=e.tt||"Highlights",n=l(e);if(n){var r=parseInt(n[1])+parseInt(n[2]);t=(0,i.default)("numberth",{type:"template",number:r})+" Goal"}return t}},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(2)),a=n(106),i=n(56),s=u(n(642)),l=n(247),c=n(154);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.setUpBlinking(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.setUpBlinking(e)}},{key:"setUpBlinking",value:function(e){var t=this;"1T"===e.match.status||"2T"===e.match.status?this.blinkT||(this.blinkT=setInterval(function(){t.setState({b:(new Date).getTime()})},500)):this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"componentWillUnmount",value:function(){this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"render",value:function(){var e="",t=(0,c.state)(this.props.match.status);if("1T"===this.props.match.status||"2T"===this.props.match.status){var n=(0,c.time)(this.props.match.whistleT,(new Date).getTime()-this.props.difference,this.props.match.status);this.props.shortCompensated?n.isRunningCompensatedTime?(e=n.minutes,e+=" + "+(n.compensatedMinutes+1)+"'"):(e=n.minutes+":",e+=(0,l.addLeadingZero)(n.seconds)):(e=n.minutes+":",n.isRunningCompensatedTime&&(e+="00 + "+n.compensatedMinutes+":"),e+=(0,l.addLeadingZero)(n.seconds))}else e=this.props.match.status;var r=(0,c.splitCompName)(this.props.match.comp.name),i=(r.sub?(0,l.capitalizeAllWords)(r.sub.toLowerCase())+" ":"")+r.name;return o.default.createElement("div",{className:"AdVSc"+(this.props.flag?" AdVScHFl":"")+("scheduled"===t?" AdVSch":"")},this.props.flag&&o.default.createElement("div",{className:"AdVScFl"},this.props.embedded?o.default.createElement("a",{href:"https://www.scorebat.com/"+(0,c.competitionSlug)(r)+"-live-scores/",title:i,target:"_blank"},o.default.createElement(s.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:i})):o.default.createElement(a.Link,{to:"/"+(0,c.competitionSlug)(r)+"-live-scores/",title:i},o.default.createElement(s.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:i}))),!this.props.hideScores&&"scheduled"!==t&&o.default.createElement("div",{className:"AdVScr"},this.props.match.score1," : ",this.props.match.score2),"scheduled"!==t&&o.default.createElement("div",{className:"AdVSt AdVSt"+t+(this.props.hideScores?" AdVStNoScore":"")},e))}}]),t}();d=(0,i.connect)(function(e,t){return{difference:e.serverTimeDifference,hideScores:e.__BAT__.hideScores}})(d),t.default=d},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),a=n(56);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={src:n.props.isServer?n.props.src:void 0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.img=new Image,this.img.onload=function(){return e.setState({src:e.props.src})},this.img.onerror=function(){return e.setState({src:e.props.failSrc})},this.img.src=this.props.src}},{key:"componentWillUnmount",value:function(){this.img.onload=function(){return!1},this.img.onerror=function(){return!1},this.img.src=""}},{key:"render",value:function(){return this.props.isServer?o.default.createElement("img",{src:this.state.src,alt:this.props.alt,className:"FailoverImage FailoverImageReady"+(this.props.className?" "+this.props.className:"")}):o.default.createElement("div",{className:"FailoverImage"+(this.state.src?" FailoverImageReady":"")+(this.props.className?" "+this.props.className:""),style:Object.assign(this.state.src?{backgroundImage:"url("+this.state.src+")"}:{},this.props.style)})}}]),t}();i=(0,a.connect)(function(e,t){return{isServer:e.__BAT__.server}})(i),t.default=i},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(2)),a=n(56),i=n(627),s=n(246),l=u(n(658)),c=n(249);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={interrupted:0},n.shouldInterrupt=n.props.intrEvery&&(new Date).getTime()-n.props.interruptions.t>n.props.intrEvery,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.subscriberId=this.props.playerListener.subscribe(this.iframeRef,function(t){"played"===t.type&&(0,s.GASendEvent)({category:"VideoPlayer",action:"Play",label:t.autoplay?"AutoPlay":"ManualPlay"}),"intrd"===t.type&&(e.props.adInterruption(),(0,s.GASendEvent)({category:"VideoPlayer",action:"Interruption"}),e.setState({interrupted:1})),"intrskpd"===t.type&&((0,s.GASendEvent)({category:"VideoPlayer",action:"InterruptionSkipped"}),e.setState({interrupted:0}))})}},{key:"componentWillUnmount",value:function(){this.props.playerListener.unsubscribe(this.subscriberId)}},{key:"ntValue",value:function(){return 33333*(new Date).getUTCDate()+(this.shouldInterrupt?1:2)}},{key:"render",value:function(){var e=this,t=this.props.video.r;return this.props.screenWidth<=480&&this.state.interrupted&&(t=1),o.default.createElement("div",{className:"VideoPlayer v-"+this.props.video.id},("bl"===this.props.video.sv||"bt"===this.props.video.sv)&&o.default.createElement("div",{className:"VideoPlayerBl",style:t?{paddingBottom:1/t*100+"%"}:void 0},this.props.ssr?o.default.createElement("div",{className:"VideoPlayerTh",style:{backgroundImage:"url("+(0,i.thumbnail)(this.props.video,1)+")"}}):o.default.createElement("iframe",{src:this.props.player+"/"+this.props.video.id+"/?nt="+this.ntValue()+(this.props.autoplay?"&autoplay=1":"")+(this.props.noPre||this.props.isEmbed&&"bl"===this.props.video.sv?"&npr=1":""),frameBorder:"0",width:"100%",ref:function(t){return e.iframeRef=t},height:"100%",allowFullScreen:!0,allow:"autoplay; fullscreen",scrolling:"no"})))}}]),t}(),p=void 0;d=(0,a.connect)(function(e,t){return e.__BAT__.server||p||(p=new l.default(e.__BAT__.player)),{ssr:e.__BAT__.server||e.__BAT__.bot,isEmbed:e.__BAT__.isEmbed,player:e.__BAT__.player,interruptions:e.ad&&e.ad.interruption,intrEvery:e.__BAT__.intrEvery,screenWidth:e.screenSize.width,playerListener:p}},{adInterruption:c.adInterruption})(d),t.default=d},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(657));t.default=function(e,t){switch((t=t||{}).type){case"month":case"day":case"stat":case"playerPosition":case"gameOutcome":return r.default.en[t.type][e]||e;case"status":case"event":return t.full?r.default.en[t.type].full[e]||e:r.default.en[t.type].short[e]||e;case"template":return r.default.en.template[e](t);default:return r.default.en.term[e.toLowerCase()]||e}}},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=v(n(2)),a=v(n(155)),i=v(n(156)),s=n(56),l=v(n(644)),c=v(n(659)),u=v(n(661)),d=n(662),p=n(154),f=n(627),h=v(n(649)),m=n(246);function v(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.videosFiltered(e.match.v);return n.state={playing:r.length>0&&r[0].id,embed:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.videosFiltered(e.match.v);this.props.active!==e.active?this.setState({playing:t.length>0&&t[0].id,embed:!1}):0===t.length?this.setState({playing:!1}):this.props.active&&this.state.playing&&(0,a.default)(t,{id:this.state.playing})||this.setState({playing:t[0].id})}},{key:"firstPlayed",value:function(e,t,n){var r=this;this.pause=e,this.play=t,this.played||(this.played=!0,this.props.onFirstPlay&&this.props.onFirstPlay(function(){return r.pause()},function(){return r.play()},n))}},{key:"videosFiltered",value:function(e){return this.props.noSpoilers&&(0,a.default)(e,function(e){return(0,f.isHighlights)(e)})?(0,i.default)(e,function(e){return(0,f.isHighlights)(e)}):e}},{key:"render",value:function(){var e=this,t=this.videosFiltered(this.props.match.v),n=this.state.playing&&(0,a.default)(t,{id:this.state.playing}),r=(0,p.matchAddressNearest)(this.props.match),i="https://www.scorebat.com"+r;return o.default.createElement(m.GAConsumer,null,function(a){return o.default.createElement("div",{className:"VideoPlayerStories VideoPlayerStories"+e.props.layout+(e.props.active?" VideoPlayerStoriesActive":"")+(e.props.match.v.length>1?" VideoPlayerStoriesMulti":" VideoPlayerStoriesSingle")},!e.props.noHeader&&o.default.createElement("div",{className:"VideoPlayerStoriesTW"},o.default.createElement(u.default,{match:e.props.match,playingTitle:e.state.playing?n.tt:"No Videos Yet",total:t.length,onClick:function(){return!e.props.active&&e.props.onPick(e.props.match.gameId)},active:e.props.active,liveMatch:e.props.liveMatch,matchLink:e.props.fullLink?i:r,fullLink:e.props.fullLink,showLink:e.props.active||e.props.isServer})),e.props.active&&o.default.createElement("div",null,o.default.createElement("div",{className:"VideoPlayerStoriesPW"},e.state.playing?o.default.createElement("div",{className:e.props.dontStretch?"":"BatFeedItemStretch"},o.default.createElement(l.default,{video:n,muted:!e.state.picked,autoplay:e.state.picked||e.props.autoplay,key:e.state.playing,onFirstPlay:function(t,n,r){e.firstPlayed(t,n,r),r&&a.sendEvent({category:"VideoPlayerStories",action:"ManualPlay",label:(0,p.stripSc)(e.props.match.gameId)})}},e.props.children)):o.default.createElement("div",{className:"VideoPlayerStoriesSoon"},e.props.match.side1," - ",e.props.match.side2," goals and highlights will appear here"))),o.default.createElement("div",{className:"VideoPlayerStoriesC"},e.props.active&&(e.state.embed?o.default.createElement("div",{className:"VideoPlayerStoriesEC"},o.default.createElement(h.default,{code:(0,f.embedCode)(e.props.match.gameId),onCopy:function(){return a.sendEvent({category:"VideoPlayerStories",action:"EmbedCodeCopied",label:(0,p.stripSc)(e.props.match.gameId)})}})):o.default.createElement("div",{className:"VideoPlayerStoriesPTT"},e.props.noSpoilers?(0,f.noSpoilerTitle)(n):n.tt||"Highlights",!e.props.noEmbedButton&&o.default.createElement("div",{className:"VideoPlayerStoriesEB",onClick:function(){e.setState({embed:!0}),a.sendEvent({category:"VideoPlayerStories",action:"EmbedButtonClicked",label:(0,p.stripSc)(e.props.match.gameId)})}},"‹ Embed ›"))),e.props.active&&t.length>1&&!e.state.embed&&o.default.createElement(c.default,{videos:t,active:e.state.playing,onPick:function(t){e.setState({playing:t,picked:1}),a.sendEvent({category:"VideoPlayerStories",action:"VideoPicked",label:(0,p.stripSc)(e.props.match.gameId)})},touch:"touch"===e.props.layout,screenWidth:e.props.screenWidth,noSpoilers:e.props.noSpoilers})))})}}]),t}();y=(0,s.connect)(function(e,t){var n=e.__BAT__.server||e.__BAT__.bot,r=!n&&("ontouchstart"in window||"onmsgesturechange"in window)?"touch":"desk",o=void 0;return t.getScoreFromFeed&&(0,d.gameIsInFeed)(e,t.match.gameId)&&(o=e.api["games-zero"].data.games[t.match.gameId]),{isServer:n,layout:r,liveMatch:o,screenWidth:e.screenSize.width,noSpoilers:e.__BAT__.noSpoilers}})(y),t.default=y},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"selectEmbed",value:function(){this.embedT.select(),this.embedT.setSelectionRange(0,700)}},{key:"copyEmbed",value:function(){this.selectEmbed(),document.execCommand&&document.execCommand("copy")?this.setState({copied:1}):this.setState({copied:0}),this.props.onCopy&&this.props.onCopy()}},{key:"copyLabel",value:function(){return 0===this.state.copied?"Fail":1===this.state.copied?"Copied!":"Copy"}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"EmbedCode"},o.default.createElement("div",{className:"EmbedCodeIcon"}),o.default.createElement("div",{className:"EmbedCodeTW"},o.default.createElement("textarea",{ref:function(t){return e.embedT=t},rows:1,readOnly:!0,onClick:function(){return e.selectEmbed()},value:this.props.code})),o.default.createElement("div",{className:"EmbedCodeButton"+(1===this.state.copied||0===this.state.copied?" EmbedCodeButton"+this.state.copied:""),onClick:function(){return e.copyEmbed()}},this.copyLabel()))}}]),t}();t.default=a},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(646));var o={en:{month:["January","February","March","April","May","June","July","August","September","October","November","December"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],term:{relevant:"Relevant",now:"Now",all:"All","right now":"Right Now","all leagues":"All Leagues","no games found":"No Games Found",referee:"Referee","points deducted":"points deducted","line-up":"Line-up",bench:"Bench","played today":"Played Today","see full table":"See full table","see all headlines":"See all headlines",connecting:"Connecting",today:"Today","next match":"Next Match","latest match":"Latest Match"},template:{"see all games":(0,r.default)("See all <%= count %> games"),"kick-off at":(0,r.default)("Kick-off at <%= at %>"),"time on weekday, date":(0,r.default)("<%= time %> on <%= weekDay %>, <%= month %> <%= date %>"),numberth:function(e){var t=e.number,n=["th","st","nd","rd"],r=t%100;return t+(n[(r-20)%10]||n[r]||n[0])},plural:(0,r.default)("<%= thing %><%= count !== 1 ? suffix :'' %>"),"commas and":function(e){var t=e.list,n=e.andOr,r=void 0===n?"and":n,o="";return t.length>1?(o+=t.slice(0,t.length-1).join(", "),o+=" "+r+" "+t[t.length-1]):1===t.length&&(o+=t[0]),o},times:function(e){var t=e.number;return 1===t?"once":2===t?"twice":t+" times"}},event:{short:{goal:"goal",pen:"pen",og:"og","m.pen":"m.pen",yc:"yc",rc:"rc","2yc":"2yc",sub:"sub"},full:{goal:"Goal",pen:"Penalty",og:"Own Goal","m.pen":"Missed Penalty",yc:"Yellow Card",rc:"Red Card","2yc":"Second Yellow",sub:"Substitution"}},stat:{possession:"Ball Possession",shot:"Total Attempts",shotOnGoal:"Shots On Target",save:"Saves",foul:"Fouls",corner:"Corners",offside:"Offsides",yc:"Yellow Cards",passes:"Total Passes",completedPasses:"Completed Passes"},playerPosition:{G:"Goalkeeper",D:"Defender",M:"Midfielder",F:"Forward"},gameOutcome:{W:"W",D:"D",L:"L"},status:{full:{"-":"Scheduled","1T":"First Half","2T":"Second Half",HT:"Half Time",FT:"Full Time",Fin:"Ended",Final:"Ended",Res:"Ended",ET:"Extra Time",AET:"After Extra Time",Canc:"Canceled","11M":"Penalties",Pen:"On Penalties",Pst:"Postponed",Ssp:"Suspended",Susp:"Suspended",AW:"Forfeit",NIY:"No Info Yet"},short:{"-":"-","1T":"1T","2T":"2T",HT:"HT",FT:"FT",Fin:"Fin",Final:"Fin",Res:"Res",ET:"ET",AET:"AET",Canc:"Canc","11M":"11M",Pen:"Pen",Pst:"Pst",Ssp:"Ssp",Susp:"Ssp",AW:"Frf",NIY:"NIY"}}}};t.default=o},658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerUrl=t,this.subscribers=[],this.subscriberId=0;var n=window.addEventListener?"addEventListener":"attachEvent",r=window[n],o="attachEvent"==n?"onmessage":"message";this.messageReceived=this.messageReceived.bind(this),r(o,this.messageReceived,!1)}return r(e,[{key:"messageReceived",value:function(e){if(e.origin===this.playerUrl)try{for(var t=JSON.parse(e.data),n=0;n<this.subscribers.length;n++)this.subscribers[n].ref&&this.subscribers[n].ref.contentWindow===e.source&&this.subscribers[n].callback(t)}catch(e){}}},{key:"subscribe",value:function(e,t){var n={ref:e,callback:t,id:this.subscriberId++};return this.subscribers.push(n),n.id}},{key:"unsubscribe",value:function(e){for(var t=0;t<this.subscribers.length;t++)if(this.subscribers[t].id===e)return this.subscribers[t]={id:e},1}}]),e}();t.default=o},659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(2)),a=n(627),i=s(n(660));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this;return o.default.createElement(i.default,{key:this.props.touch?"touch":"mouse",touch:this.props.touch,screenWidth:this.props.screenWidth},this.props.videos.map(function(t,n){var r=t.tt||"Highlights";return e.props.noSpoilers&&(r=(0,a.noSpoilerTitle)(t)),o.default.createElement("div",{key:t.id},o.default.createElement("div",{className:"VideoFeedHorizontalItem"+(n?"":" VideoFeedHorizontalItemFirst")+(t.id===e.props.active?" VideoFeedHorizontalItemActive":""),onClick:function(){return e.props.onPick&&e.props.onPick(t.id)}},o.default.createElement("div",{className:"VideoFeedHorizontalC"},o.default.createElement("div",{className:"VideoFeedHorizontalThumbW"},o.default.createElement("div",{className:"VideoFeedHorizontalThumb",style:{backgroundImage:"url("+(0,a.thumbnail)(t)+")"}}))),o.default.createElement("div",{className:"VideoFeedHorizontalC"},o.default.createElement("div",{className:"VideoFeedHorizontalTitle"},o.default.createElement("div",null,r)))))}))}}]),t}();t.default=l},660:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contentHeight:0,contentWidth:0,width:0,pos:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth})}},{key:"componentDidUpdate",value:function(e,t){if(this.c.clientHeight!==this.state.contentHeight||this.c.scrollWidth!==this.state.contentWidth||this.w.clientWidth!==this.state.width){var n=this.state.pos;!this.props.touch&&this.c.scrollWidth<=this.w.clientWidth&&(n=0),this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth,pos:n})}else t.pos!==this.state.pos&&this.props.onEndReach&&this.state.pos+this.w.clientWidth>=this.state.contentWidth&&this.props.onEndReach()}},{key:"arrowClicked",value:function(e){var t=void 0;"right"===e?(t=this.state.pos+this.state.width/2)+this.state.width>this.state.contentWidth&&(t=this.state.contentWidth-this.state.width):(t=this.state.pos-this.state.width/2)<0&&(t=0),this.setState({pos:t})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"HorizontalScroll "+(this.props.touch?"HorizontalScrollTouch":"HorizontalScrollMouse"),style:{paddingBottom:this.state.contentHeight||this.props.defaultHeight||130}},o.default.createElement("div",{className:"HorizontalScrollW",ref:function(t){return e.w=t}},o.default.createElement("div",{className:"HorizontalScrollC",ref:function(t){return e.c=t},style:this.props.touch?void 0:{transform:"translateX(-"+this.state.pos+"px)"},onScroll:this.props.onEndReach&&this.props.touch?function(t){var n=e.c.scrollWidth,r=e.w.clientWidth;t.target.scrollLeft+r>=n&&e.props.onEndReach()}:void 0},this.props.children),!this.props.touch&&this.state.pos+this.state.width<this.state.contentWidth&&o.default.createElement("div",{className:"HorizontalScrollAR",onClick:function(){return e.arrowClicked("right")}}),!this.props.touch&&this.state.pos>0&&o.default.createElement("div",{className:"HorizontalScrollAL",onClick:function(){return e.arrowClicked("left")}})))}}]),t}();t.default=a},661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(2)),a=n(106),i=n(247),s=n(154),l=u(n(642)),c=u(n(641));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"statusString",value:function(){return o.default.createElement("span",null,this.props.playingTitle||"Highlights"," ",o.default.createElement("span",{className:"VideoInFeedOtherVideos"},this.props.total>1?"and "+(this.props.total-1)+" other video"+(this.props.total>2?"s":""):""))}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.onClick,r=e.active,u=e.showLink,d=e.matchLink,p=e.liveMatch,f=(0,s.splitCompName)(t.comp.name),h=(f.sub?(0,i.capitalizeAllWords)(f.sub.toLowerCase())+" ":"")+f.name;return o.default.createElement("div",{onClick:function(){return n&&n()},className:"BatFeedItemHeaderPaddingV"},o.default.createElement("div",{className:"VideoInFeedBody"},o.default.createElement("div",{className:"VideoInFeedCLogo VideoInFeedCLogoL"},u?o.default.createElement("a",{href:"https://www.scorebat.com/"+(0,s.competitionSlug)(f)+"-live-scores/",title:h,target:"_blank"},o.default.createElement(l.default,{src:t.comp.flag,alt:h})):o.default.createElement(l.default,{src:t.comp.flag,alt:h})),o.default.createElement("div",{className:"VideoInFeedTW"},o.default.createElement("div",{className:"VideoInFeedName"},u?this.props.fullLink?o.default.createElement("a",{href:d,target:"_blank",className:"VideoInFeedTitle VideoInFeedTitleActive"},o.default.createElement("span",{className:"VideoInFeedTitleS"},t.side1),o.default.createElement("span",{className:"VideoInFeedTitleR"}," "),o.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2)):o.default.createElement(a.Link,{to:d,className:"VideoInFeedTitle VideoInFeedTitleActive"},o.default.createElement("span",{className:"VideoInFeedTitleS"},t.side1),o.default.createElement("span",{className:"VideoInFeedTitleR"}," "),o.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2)):o.default.createElement("div",{className:"VideoInFeedTitle"},t.side1,o.default.createElement("span",{className:"VideoInFeedTitleR"}," - "),o.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2))),!r&&o.default.createElement("div",{className:"VideoInFeedSubTitle"},this.statusString())),o.default.createElement(c.default,{match:p||t,shortCompensated:!0})))}}]),t}();t.default=d},662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gameIsInFeed=t.gameForTeams=t.gamesForTeam=t.gamesForComp=void 0;var r=i(n(156)),o=i(n(648)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}var s={};t.gamesForComp=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",o=s[t+"__"+n],i=e.api["games-"+n];return i&&i.data&&(!o||i.gameAdded&&i.gameAdded>(new Date).getTime()?(o=(0,r.default)(i.data.games,{compId:t}),s[t+"__"+n]=o):o&&(0,a.default)(o,function(e){return e!==i.data.games[e.gameId]})&&(o=(0,r.default)(i.data.games,{compId:t}),s[t+"__"+n]=o)),o},t.gamesForTeam=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",r={},a=e.api["games-"+n];return a&&a.data&&(r=(0,o.default)(a.data.games,function(e){return e.side1ScId==t||e.side2ScId==t})),r},t.gameForTeams=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zero",i=e.api["games-"+o];return i&&i.data&&(r=(0,a.default)(i.data.games,function(e){return e.side1ScId==t&&e.side2ScId==n||e.side2ScId==t&&e.side1ScId==n})),r},t.gameIsInFeed=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",r=e.api["games-"+n];return!!(r&&r.data&&r.data.games[t])}}}]);