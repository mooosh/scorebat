(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noSpoilerTitle=t.relevantVideoFeed=t.isHighlights=t.isGoal=t.videoEmbedCode=t.widgetEmbedCode=t.embedCode=t.shouldAutoplay=t.timePast=t.thumbnail=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n(156)),a=(s(n(155)),n(154)),i=s(n(645));function s(e){return e&&e.__esModule?e:{default:e}}t.thumbnail=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(e.sv){case"bl":return t?"https://cdn-b-east.streamable.com/image/"+e.si+".jpg":"https://images.streamable.com/east/image/"+e.si+".jpg?height=300";case"bt":return"https://img.youtube.com/vi/"+e.si+"/"+(t?"hqdefault":"default")+".jpg"}},t.timePast=function(e,t){return t-e.t},t.shouldAutoplay=function(e,t){return e?0:t||"ontouchstart"in window||"onmsgesturechange"in window?0:1},t.embedCode=function(e){return"<iframe src='https://www.scorebat.com/embed/"+(e?"g/"+(0,a.stripSc)(e)+"/":"")+"' frameborder='0' width='560' height='590' allowfullscreen allow='autoplay; fullscreen' style='width:560px;height:590px;overflow:hidden;display:block;' class='_scorebatEmbeddedPlayer_'></iframe><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = 'https://www.scorebat.com/embed/embed.js?v=m2to';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'scorebat-jssdk'));<\/script>"},t.widgetEmbedCode=function(e){return'<iframe src="https://www.scorebat.com/embed/" frameborder="0" width="600" height="760" allowfullscreen allow=\'autoplay; fullscreen\' style="width:600px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \'https://www.scorebat.com/embed/embed.js?v=m2to\';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, \'script\', \'scorebat-jssdk\'));<\/script>'},t.videoEmbedCode=function(e){return'<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://www.scorebat.com/embed/v/'+e+'/" frameborder="0" width="100%" height="100%" allowfullscreen allow=\'autoplay; fullscreen\' style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>'};var l=t.isGoal=function(e){return/^(\d{1,2})-(\d{1,2})(?:.*)$/.exec(e.tt)};t.isHighlights=function(e){var t=e.tt.toLowerCase();return-1!==t.indexOf("highlights")||""===t||"alternative"===t||"extra"===t||"mirror"===t||"extended"===t||"official"===t},t.relevantVideoFeed=function(e,t,n,i){var s=e;return i&&(s=e.map(function(e){return o({},e,{v:(0,r.default)(e.v,function(e){return!l(e)})})})),(s=(0,r.default)(s,function(e){return e.v.length>0&&(0,a.isRelevant)(e,t,n)})).sort(function(e,n){var o=(0,a.dateToFeed)(e.dateT),r=(0,a.dateToFeed)(n.dateT);if(o!==r)return o<r?1:-1;var i=(0,a.isTop)(e,t),s=(0,a.isTop)(n,t);return i!==s?i>s?-1:1:(e.v.length&&e.v[0].t)<(n.v.length&&n.v[0].t)?1:-1}),s},t.noSpoilerTitle=function(e){var t=e.tt||"Highlights",n=l(e);if(n){var o=parseInt(n[1])+parseInt(n[2]);t=(0,i.default)("numberth",{type:"template",number:o})+" Goal"}return t}},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(2)),a=n(106),i=n(56),s=u(n(642)),l=n(247),c=n(154);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){this.setUpBlinking(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.setUpBlinking(e)}},{key:"setUpBlinking",value:function(e){var t=this;"1T"===e.match.status||"2T"===e.match.status?this.blinkT||(this.blinkT=setInterval(function(){t.setState({b:(new Date).getTime()})},500)):this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"componentWillUnmount",value:function(){this.blinkT&&(clearInterval(this.blinkT),this.blinkT=!1)}},{key:"render",value:function(){var e="",t=(0,c.state)(this.props.match.status);if("1T"===this.props.match.status||"2T"===this.props.match.status){var n=(0,c.time)(this.props.match.whistleT,(new Date).getTime()-this.props.difference,this.props.match.status);this.props.shortCompensated?n.isRunningCompensatedTime?(e=n.minutes,e+=" + "+(n.compensatedMinutes+1)+"'"):(e=n.minutes+":",e+=(0,l.addLeadingZero)(n.seconds)):(e=n.minutes+":",n.isRunningCompensatedTime&&(e+="00 + "+n.compensatedMinutes+":"),e+=(0,l.addLeadingZero)(n.seconds))}else e=this.props.match.status;var o=(0,c.splitCompName)(this.props.match.comp.name),i=(o.sub?(0,l.capitalizeAllWords)(o.sub.toLowerCase())+" ":"")+o.name;return r.default.createElement("div",{className:"AdVSc"+(this.props.flag?" AdVScHFl":"")+("scheduled"===t?" AdVSch":"")},this.props.flag&&r.default.createElement("div",{className:"AdVScFl"},this.props.embedded?r.default.createElement("a",{href:"https://www.scorebat.com/"+(0,c.competitionSlug)(o)+"-live-scores/",title:i,target:"_blank"},r.default.createElement(s.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:i})):r.default.createElement(a.Link,{to:"/"+(0,c.competitionSlug)(o)+"-live-scores/",title:i},r.default.createElement(s.default,{src:this.props.match.comp.flag,className:"OnScreenFlag",alt:i}))),!this.props.hideScores&&"scheduled"!==t&&r.default.createElement("div",{className:"AdVScr"},this.props.match.score1," : ",this.props.match.score2),"scheduled"!==t&&r.default.createElement("div",{className:"AdVSt AdVSt"+t+(this.props.hideScores?" AdVStNoScore":"")},e))}}]),t}();d=(0,i.connect)(function(e,t){return{difference:e.serverTimeDifference,hideScores:e.__BAT__.hideScores}})(d),t.default=d},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),a=n(56);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={src:n.props.isServer?n.props.src:void 0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;this.img=new Image,this.img.onload=function(){return e.setState({src:e.props.src})},this.img.onerror=function(){return e.setState({src:e.props.failSrc})},this.img.src=this.props.src}},{key:"componentWillUnmount",value:function(){this.img.onload=function(){return!1},this.img.onerror=function(){return!1},this.img.src=""}},{key:"render",value:function(){return this.props.isServer?r.default.createElement("img",{src:this.state.src,alt:this.props.alt,className:"FailoverImage FailoverImageReady"+(this.props.className?" "+this.props.className:"")}):r.default.createElement("div",{className:"FailoverImage"+(this.state.src?" FailoverImageReady":"")+(this.props.className?" "+this.props.className:""),style:Object.assign(this.state.src?{backgroundImage:"url("+this.state.src+")"}:{},this.props.style)})}}]),t}();i=(0,a.connect)(function(e,t){return{isServer:e.__BAT__.server}})(i),t.default=i},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),a=n(56),i=n(627);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.uid=Math.random().toString(36).substr(2,9),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"VideoPlayer v-"+this.props.video.id},("bl"===this.props.video.sv||"bt"===this.props.video.sv)&&r.default.createElement("div",{className:"VideoPlayerBl",style:this.props.video.r?{paddingBottom:1/this.props.video.r*100+"%"}:void 0},this.props.ssr?r.default.createElement("div",{className:"VideoPlayerTh",style:{backgroundImage:"url("+(0,i.thumbnail)(this.props.video,1)+")"}}):r.default.createElement("iframe",{src:"https://d36i6r7ov1g766.cloudfront.net/embed/player/"+this.props.video.id+"/"+(this.props.autoplay?"?autoplay=1":""),frameBorder:"0",width:"100%",ref:function(t){return e.iframeRef=t},height:"100%",allowFullScreen:!0,allow:"autoplay; fullscreen",scrolling:"no"})))}}]),t}();s=(0,a.connect)(function(e,t){return{ssr:e.__BAT__.server||e.__BAT__.bot}})(s),t.default=s},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(657));t.default=function(e,t){switch((t=t||{}).type){case"month":case"day":case"stat":case"playerPosition":case"gameOutcome":return o.default.en[t.type][e]||e;case"status":case"event":return t.full?o.default.en[t.type].full[e]||e:o.default.en[t.type].short[e]||e;case"template":return o.default.en.template[e](t);default:return o.default.en.term[e.toLowerCase()]||e}}},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=v(n(2)),a=v(n(155)),i=v(n(156)),s=n(56),l=v(n(644)),c=v(n(658)),u=v(n(660)),d=n(661),p=n(154),f=n(627),h=v(n(649)),m=n(246);function v(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n.videosFiltered(e.match.v);return n.state={playing:o.length>0&&o[0].id,embed:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.videosFiltered(e.match.v);this.props.active!==e.active?this.setState({playing:t.length>0&&t[0].id,embed:!1}):0===t.length?this.setState({playing:!1}):this.props.active&&this.state.playing&&(0,a.default)(t,{id:this.state.playing})||this.setState({playing:t[0].id})}},{key:"firstPlayed",value:function(e,t,n){var o=this;this.pause=e,this.play=t,this.played||(this.played=!0,this.props.onFirstPlay&&this.props.onFirstPlay(function(){return o.pause()},function(){return o.play()},n))}},{key:"videosFiltered",value:function(e){return this.props.noSpoilers&&(0,a.default)(e,function(e){return(0,f.isHighlights)(e)})?(0,i.default)(e,function(e){return(0,f.isHighlights)(e)}):e}},{key:"render",value:function(){var e=this,t=this.videosFiltered(this.props.match.v),n=this.state.playing&&(0,a.default)(t,{id:this.state.playing}),o=(0,p.matchAddressNearest)(this.props.match),i="https://www.scorebat.com"+o;return r.default.createElement(m.GAConsumer,null,function(a){return r.default.createElement("div",{className:"VideoPlayerStories VideoPlayerStories"+e.props.layout+(e.props.active?" VideoPlayerStoriesActive":"")+(e.props.match.v.length>1?" VideoPlayerStoriesMulti":" VideoPlayerStoriesSingle")},!e.props.noHeader&&r.default.createElement("div",{className:"VideoPlayerStoriesTW"},r.default.createElement(u.default,{match:e.props.match,playingTitle:e.state.playing?n.tt:"No Videos Yet",total:t.length,onClick:function(){return!e.props.active&&e.props.onPick(e.props.match.gameId)},active:e.props.active,liveMatch:e.props.liveMatch,matchLink:e.props.fullLink?i:o,fullLink:e.props.fullLink,showLink:e.props.active||e.props.isServer})),e.props.active&&r.default.createElement("div",null,r.default.createElement("div",{className:"VideoPlayerStoriesPW"},e.state.playing?r.default.createElement("div",{className:e.props.dontStretch?"":"BatFeedItemStretch"},r.default.createElement(l.default,{video:n,muted:!e.state.picked,autoplay:e.state.picked||e.props.autoplay,key:e.state.playing,onFirstPlay:function(t,n,o){e.firstPlayed(t,n,o),o&&a.sendEvent({category:"VideoPlayerStories",action:"ManualPlay",label:(0,p.stripSc)(e.props.match.gameId)})}},e.props.children)):r.default.createElement("div",{className:"VideoPlayerStoriesSoon"},e.props.match.side1," - ",e.props.match.side2," goals and highlights will appear here"))),r.default.createElement("div",{className:"VideoPlayerStoriesC"},e.props.active&&(e.state.embed?r.default.createElement("div",{className:"VideoPlayerStoriesEC"},r.default.createElement(h.default,{code:(0,f.embedCode)(e.props.match.gameId),onCopy:function(){return a.sendEvent({category:"VideoPlayerStories",action:"EmbedCodeCopied",label:(0,p.stripSc)(e.props.match.gameId)})}})):r.default.createElement("div",{className:"VideoPlayerStoriesPTT"},e.props.noSpoilers?(0,f.noSpoilerTitle)(n):n.tt||"Highlights",!e.props.noEmbedButton&&r.default.createElement("div",{className:"VideoPlayerStoriesEB",onClick:function(){e.setState({embed:!0}),a.sendEvent({category:"VideoPlayerStories",action:"EmbedButtonClicked",label:(0,p.stripSc)(e.props.match.gameId)})}},"‹ Embed ›"))),e.props.active&&t.length>1&&!e.state.embed&&r.default.createElement(c.default,{videos:t,active:e.state.playing,onPick:function(t){e.setState({playing:t,picked:1}),a.sendEvent({category:"VideoPlayerStories",action:"VideoPicked",label:(0,p.stripSc)(e.props.match.gameId)})},touch:"touch"===e.props.layout,screenWidth:e.props.screenWidth,noSpoilers:e.props.noSpoilers})))})}}]),t}();y=(0,s.connect)(function(e,t){var n=e.__BAT__.server||e.__BAT__.bot,o=!n&&("ontouchstart"in window||"onmsgesturechange"in window)?"touch":"desk",r=void 0;return t.getScoreFromFeed&&(0,d.gameIsInFeed)(e,t.match.gameId)&&(r=e.api["games-zero"].data.games[t.match.gameId]),{isServer:n,layout:o,liveMatch:r,screenWidth:e.screenSize.width,noSpoilers:e.__BAT__.noSpoilers}})(y),t.default=y},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){}},{key:"selectEmbed",value:function(){this.embedT.select(),this.embedT.setSelectionRange(0,700)}},{key:"copyEmbed",value:function(){this.selectEmbed(),document.execCommand&&document.execCommand("copy")?this.setState({copied:1}):this.setState({copied:0}),this.props.onCopy&&this.props.onCopy()}},{key:"copyLabel",value:function(){return 0===this.state.copied?"Fail":1===this.state.copied?"Copied!":"Copy"}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"EmbedCode"},r.default.createElement("div",{className:"EmbedCodeIcon"}),r.default.createElement("div",{className:"EmbedCodeTW"},r.default.createElement("textarea",{ref:function(t){return e.embedT=t},rows:1,readOnly:!0,onClick:function(){return e.selectEmbed()},value:this.props.code})),r.default.createElement("div",{className:"EmbedCodeButton"+(1===this.state.copied||0===this.state.copied?" EmbedCodeButton"+this.state.copied:""),onClick:function(){return e.copyEmbed()}},this.copyLabel()))}}]),t}();t.default=a},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(646));var r={en:{month:["January","February","March","April","May","June","July","August","September","October","November","December"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],term:{relevant:"Relevant",now:"Now",all:"All","right now":"Right Now","all leagues":"All Leagues","no games found":"No Games Found",referee:"Referee","points deducted":"points deducted","line-up":"Line-up",bench:"Bench","played today":"Played Today","see full table":"See full table","see all headlines":"See all headlines",connecting:"Connecting",today:"Today","next match":"Next Match","latest match":"Latest Match"},template:{"see all games":(0,o.default)("See all <%= count %> games"),"kick-off at":(0,o.default)("Kick-off at <%= at %>"),"time on weekday, date":(0,o.default)("<%= time %> on <%= weekDay %>, <%= month %> <%= date %>"),numberth:function(e){var t=e.number,n=["th","st","nd","rd"],o=t%100;return t+(n[(o-20)%10]||n[o]||n[0])},plural:(0,o.default)("<%= thing %><%= count !== 1 ? suffix :'' %>"),"commas and":function(e){var t=e.list,n=e.andOr,o=void 0===n?"and":n,r="";return t.length>1?(r+=t.slice(0,t.length-1).join(", "),r+=" "+o+" "+t[t.length-1]):1===t.length&&(r+=t[0]),r},times:function(e){var t=e.number;return 1===t?"once":2===t?"twice":t+" times"}},event:{short:{goal:"goal",pen:"pen",og:"og","m.pen":"m.pen",yc:"yc",rc:"rc","2yc":"2yc",sub:"sub"},full:{goal:"Goal",pen:"Penalty",og:"Own Goal","m.pen":"Missed Penalty",yc:"Yellow Card",rc:"Red Card","2yc":"Second Yellow",sub:"Substitution"}},stat:{possession:"Ball Possession",shot:"Total Attempts",shotOnGoal:"Shots On Target",save:"Saves",foul:"Fouls",corner:"Corners",offside:"Offsides",yc:"Yellow Cards",passes:"Total Passes",completedPasses:"Completed Passes"},playerPosition:{G:"Goalkeeper",D:"Defender",M:"Midfielder",F:"Forward"},gameOutcome:{W:"W",D:"D",L:"L"},status:{full:{"-":"Scheduled","1T":"First Half","2T":"Second Half",HT:"Half Time",FT:"Full Time",Fin:"Ended",Final:"Ended",Res:"Ended",ET:"Extra Time",AET:"After Extra Time",Canc:"Canceled","11M":"Penalties",Pen:"On Penalties",Pst:"Postponed",Ssp:"Suspended",Susp:"Suspended",AW:"Forfeit",NIY:"No Info Yet"},short:{"-":"-","1T":"1T","2T":"2T",HT:"HT",FT:"FT",Fin:"Fin",Final:"Fin",Res:"Res",ET:"ET",AET:"AET",Canc:"Canc","11M":"11M",Pen:"Pen",Pst:"Pst",Ssp:"Ssp",Susp:"Ssp",AW:"Frf",NIY:"NIY"}}}};t.default=r},658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(2)),a=n(627),i=s(n(659));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){var e=this;return r.default.createElement(i.default,{key:this.props.touch?"touch":"mouse",touch:this.props.touch,screenWidth:this.props.screenWidth},this.props.videos.map(function(t,n){var o=t.tt||"Highlights";return e.props.noSpoilers&&(o=(0,a.noSpoilerTitle)(t)),r.default.createElement("div",{key:t.id},r.default.createElement("div",{className:"VideoFeedHorizontalItem"+(n?"":" VideoFeedHorizontalItemFirst")+(t.id===e.props.active?" VideoFeedHorizontalItemActive":""),onClick:function(){return e.props.onPick&&e.props.onPick(t.id)}},r.default.createElement("div",{className:"VideoFeedHorizontalC"},r.default.createElement("div",{className:"VideoFeedHorizontalThumbW"},r.default.createElement("div",{className:"VideoFeedHorizontalThumb",style:{backgroundImage:"url("+(0,a.thumbnail)(t)+")"}}))),r.default.createElement("div",{className:"VideoFeedHorizontalC"},r.default.createElement("div",{className:"VideoFeedHorizontalTitle"},r.default.createElement("div",null,o)))))}))}}]),t}();t.default=l},659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={contentHeight:0,contentWidth:0,width:0,pos:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth})}},{key:"componentDidUpdate",value:function(e,t){if(this.c.clientHeight!==this.state.contentHeight||this.c.scrollWidth!==this.state.contentWidth||this.w.clientWidth!==this.state.width){var n=this.state.pos;!this.props.touch&&this.c.scrollWidth<=this.w.clientWidth&&(n=0),this.setState({contentHeight:this.c.clientHeight,contentWidth:this.c.scrollWidth,width:this.w.clientWidth,pos:n})}else t.pos!==this.state.pos&&this.props.onEndReach&&this.state.pos+this.w.clientWidth>=this.state.contentWidth&&this.props.onEndReach()}},{key:"arrowClicked",value:function(e){var t=void 0;"right"===e?(t=this.state.pos+this.state.width/2)+this.state.width>this.state.contentWidth&&(t=this.state.contentWidth-this.state.width):(t=this.state.pos-this.state.width/2)<0&&(t=0),this.setState({pos:t})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"HorizontalScroll "+(this.props.touch?"HorizontalScrollTouch":"HorizontalScrollMouse"),style:{paddingBottom:this.state.contentHeight||this.props.defaultHeight||130}},r.default.createElement("div",{className:"HorizontalScrollW",ref:function(t){return e.w=t}},r.default.createElement("div",{className:"HorizontalScrollC",ref:function(t){return e.c=t},style:this.props.touch?void 0:{transform:"translateX(-"+this.state.pos+"px)"},onScroll:this.props.onEndReach&&this.props.touch?function(t){var n=e.c.scrollWidth,o=e.w.clientWidth;t.target.scrollLeft+o>=n&&e.props.onEndReach()}:void 0},this.props.children),!this.props.touch&&this.state.pos+this.state.width<this.state.contentWidth&&r.default.createElement("div",{className:"HorizontalScrollAR",onClick:function(){return e.arrowClicked("right")}}),!this.props.touch&&this.state.pos>0&&r.default.createElement("div",{className:"HorizontalScrollAL",onClick:function(){return e.arrowClicked("left")}})))}}]),t}();t.default=a},660:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(2)),a=n(106),i=n(247),s=n(154),l=u(n(642)),c=u(n(641));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"statusString",value:function(){return r.default.createElement("span",null,this.props.playingTitle||"Highlights"," ",r.default.createElement("span",{className:"VideoInFeedOtherVideos"},this.props.total>1?"and "+(this.props.total-1)+" other video"+(this.props.total>2?"s":""):""))}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.onClick,o=e.active,u=e.showLink,d=e.matchLink,p=e.liveMatch,f=(0,s.splitCompName)(t.comp.name),h=(f.sub?(0,i.capitalizeAllWords)(f.sub.toLowerCase())+" ":"")+f.name;return r.default.createElement("div",{onClick:function(){return n&&n()},className:"BatFeedItemHeaderPaddingV"},r.default.createElement("div",{className:"VideoInFeedBody"},r.default.createElement("div",{className:"VideoInFeedCLogo VideoInFeedCLogoL"},u?r.default.createElement("a",{href:"https://www.scorebat.com/"+(0,s.competitionSlug)(f)+"-live-scores/",title:h,target:"_blank"},r.default.createElement(l.default,{src:t.comp.flag,alt:h})):r.default.createElement(l.default,{src:t.comp.flag,alt:h})),r.default.createElement("div",{className:"VideoInFeedTW"},r.default.createElement("div",{className:"VideoInFeedName"},u?this.props.fullLink?r.default.createElement("a",{href:d,target:"_blank",className:"VideoInFeedTitle VideoInFeedTitleActive"},r.default.createElement("span",{className:"VideoInFeedTitleS"},t.side1),r.default.createElement("span",{className:"VideoInFeedTitleR"}," "),r.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2)):r.default.createElement(a.Link,{to:d,className:"VideoInFeedTitle VideoInFeedTitleActive"},r.default.createElement("span",{className:"VideoInFeedTitleS"},t.side1),r.default.createElement("span",{className:"VideoInFeedTitleR"}," "),r.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2)):r.default.createElement("div",{className:"VideoInFeedTitle"},t.side1,r.default.createElement("span",{className:"VideoInFeedTitleR"}," - "),r.default.createElement("span",{className:"VideoInFeedTitleS"},t.side2))),!o&&r.default.createElement("div",{className:"VideoInFeedSubTitle"},this.statusString())),r.default.createElement(c.default,{match:p||t,shortCompensated:!0})))}}]),t}();t.default=d},661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gameIsInFeed=t.gameForTeams=t.gamesForTeam=t.gamesForComp=void 0;var o=i(n(156)),r=i(n(648)),a=i(n(155));function i(e){return e&&e.__esModule?e:{default:e}}var s={};t.gamesForComp=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",r=s[t+"__"+n],i=e.api["games-"+n];return i&&i.data&&(!r||i.gameAdded&&i.gameAdded>(new Date).getTime()?(r=(0,o.default)(i.data.games,{compId:t}),s[t+"__"+n]=r):r&&(0,a.default)(r,function(e){return e!==i.data.games[e.gameId]})&&(r=(0,o.default)(i.data.games,{compId:t}),s[t+"__"+n]=r)),r},t.gamesForTeam=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",o={},a=e.api["games-"+n];return a&&a.data&&(o=(0,r.default)(a.data.games,function(e){return e.side1ScId==t||e.side2ScId==t})),o},t.gameForTeams=function(e,t,n){var o,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zero",i=e.api["games-"+r];return i&&i.data&&(o=(0,a.default)(i.data.games,function(e){return e.side1ScId==t&&e.side2ScId==n||e.side2ScId==t&&e.side1ScId==n})),o},t.gameIsInFeed=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"zero",o=e.api["games-"+n];return!!(o&&o.data&&o.data.games[t])}}}]);