// Compiled by ClojureScript 1.7.145 {}
React = require("react-native/Libraries/react-native/react-native.js");
goog.provide('zooborns.core');
goog.require('cljs.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
zooborns.core.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#F5FCFF"], null),new cljs.core.Keyword(null,"list-view","list-view",-358977901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),(20),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#F5FCFF"], null),new cljs.core.Keyword(null,"rightContainer","rightContainer",-2095708944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#3b3b39",new cljs.core.Keyword(null,"height","height",1025178622),(81),new cljs.core.Keyword(null,"width","width",-384071477),(53)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(8),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null);
React = require("react-native/Libraries/react-native/react-native.js");
zooborns.core.view = (function zooborns$core$view(var_args){
var args__6130__auto__ = [];
var len__6123__auto___6509 = arguments.length;
var i__6124__auto___6510 = (0);
while(true){
if((i__6124__auto___6510 < len__6123__auto___6509)){
args__6130__auto__.push((arguments[i__6124__auto___6510]));

var G__6511 = (i__6124__auto___6510 + (1));
i__6124__auto___6510 = G__6511;
continue;
} else {
}
break;
}

var argseq__6131__auto__ = ((((1) < args__6130__auto__.length))?(new cljs.core.IndexedSeq(args__6130__auto__.slice((1)),(0))):null);
return zooborns.core.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6131__auto__);
});

zooborns.core.view.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
return cljs.core.apply.call(null,React.createElement,React.View,cljs.core.clj__GT_js.call(null,opts),children);
});

zooborns.core.view.cljs$lang$maxFixedArity = (1);

zooborns.core.view.cljs$lang$applyTo = (function (seq6507){
var G__6508 = cljs.core.first.call(null,seq6507);
var seq6507__$1 = cljs.core.next.call(null,seq6507);
return zooborns.core.view.cljs$core$IFn$_invoke$arity$variadic(G__6508,seq6507__$1);
});
zooborns.core.text = (function zooborns$core$text(var_args){
var args__6130__auto__ = [];
var len__6123__auto___6514 = arguments.length;
var i__6124__auto___6515 = (0);
while(true){
if((i__6124__auto___6515 < len__6123__auto___6514)){
args__6130__auto__.push((arguments[i__6124__auto___6515]));

var G__6516 = (i__6124__auto___6515 + (1));
i__6124__auto___6515 = G__6516;
continue;
} else {
}
break;
}

var argseq__6131__auto__ = ((((1) < args__6130__auto__.length))?(new cljs.core.IndexedSeq(args__6130__auto__.slice((1)),(0))):null);
return zooborns.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6131__auto__);
});

zooborns.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
return cljs.core.apply.call(null,React.createElement,React.Text,cljs.core.clj__GT_js.call(null,opts),children);
});

zooborns.core.text.cljs$lang$maxFixedArity = (1);

zooborns.core.text.cljs$lang$applyTo = (function (seq6512){
var G__6513 = cljs.core.first.call(null,seq6512);
var seq6512__$1 = cljs.core.next.call(null,seq6512);
return zooborns.core.text.cljs$core$IFn$_invoke$arity$variadic(G__6513,seq6512__$1);
});
zooborns.core.navigator_ios = (function zooborns$core$navigator_ios(opts){
return React.createElement(React.NavigatorIOS,cljs.core.clj__GT_js.call(null,opts));
});
zooborns.core.list_view = (function zooborns$core$list_view(var_args){
var args__6130__auto__ = [];
var len__6123__auto___6519 = arguments.length;
var i__6124__auto___6520 = (0);
while(true){
if((i__6124__auto___6520 < len__6123__auto___6519)){
args__6130__auto__.push((arguments[i__6124__auto___6520]));

var G__6521 = (i__6124__auto___6520 + (1));
i__6124__auto___6520 = G__6521;
continue;
} else {
}
break;
}

var argseq__6131__auto__ = ((((1) < args__6130__auto__.length))?(new cljs.core.IndexedSeq(args__6130__auto__.slice((1)),(0))):null);
return zooborns.core.list_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6131__auto__);
});

zooborns.core.list_view.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
return React.createElement(React.ListView,cljs.core.clj__GT_js.call(null,opts),children);
});

zooborns.core.list_view.cljs$lang$maxFixedArity = (1);

zooborns.core.list_view.cljs$lang$applyTo = (function (seq6517){
var G__6518 = cljs.core.first.call(null,seq6517);
var seq6517__$1 = cljs.core.next.call(null,seq6517);
return zooborns.core.list_view.cljs$core$IFn$_invoke$arity$variadic(G__6518,seq6517__$1);
});
zooborns.core.row_has_changed = (function zooborns$core$row_has_changed(x,y){
var row_1 = cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var row_2 = cljs.core.js__GT_clj.call(null,y,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.not_EQ_.call(null,row_1,row_2);
});
zooborns.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app","title","app/title",636408784),"ZooBorns",new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),(new React.ListView.DataSource(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowHasChanged","rowHasChanged",1384698654),zooborns.core.row_has_changed], null)))),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Penguin Chick's Name May Stick Like Glue",new cljs.core.Keyword(null,"body","body",-2049205669),"<p><a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01b7c7eca096970b-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22760871426_d7b3e67f81_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01b7c7eca096970b image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01b7c7eca096970b-800wi\" title=\"22760871426_d7b3e67f81_k\" /><br /></a>A Black-footed Penguin chick hatched at the <a href=\"http://www.auduboninstitute.org/aquarium\">Audubon Aquarium of the Americas</a> was named for the glue used to repair its shell, which cracked during incubation.</p>\r\n<p><a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cafc970d-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22786887265_42cef5839c_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01bb0890cafc970d image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cafc970d-800wi\" title=\"22786887265_42cef5839c_k\" /></a><br /> <a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cb01970d-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22164124944_a371f7d7bf_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01bb0890cb01970d image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cb01970d-800wi\" title=\"22164124944_a371f7d7bf_k\" /></a><br />Photo Credit: &#0160;Audubon Aquarium of the Americas<br /><iframe allowfullscreen=\"\" frameborder=\"0\" height=\"360\" src=\"https://www.youtube.com/embed/FxtaS1tg7So\" width=\"640\"></iframe>&#0160;<br /><br /></p>\r\n<p>Elmer, as keepers are temporarily calling the chick, hatched on August 31 and was reared by zoo keepers behind the scenes \u00E2\u20AC\u201C a routine practice that allows the Penguins to become accustomed to daily hand feedings.&#0160;</p>\r\n<p>Elmer\u00E2\u20AC\u2122s name may not stick, though, because keepers don\u00E2\u20AC\u2122t know yet if the chick is male or female.&#0160; They\u00E2\u20AC\u2122ll determine its gender in a few months.&#0160;</p>\r\n<p>Though less than months old, Elmer has grown rapidly, as all Penguins do.&#0160; Elmer\u00E2\u20AC\u2122s downy feathers will soon begin to fall out in a process called molting, and they\u00E2\u20AC\u2122ll be replaced by the sleek gray feathers of a juvenile Black-footed Penguin.&#0160; Until those feathers come in and Elmer is able to swim, the young Penguin is segregated from the rest of the flock and most importantly, the exhibit pool. For now, Elmer can see the Penguin flock through a Plexiglas partition.</p>\r\n<p>To maximize genetic diversity among zoo-dwelling birds, Black-footed Penguins are managed by the Association of Zoos &amp; Aquariums Species Survival Plan.&#0160; Elmer is the second chick for parents Millicent and Puddles.&#0160;&#0160;</p>\r\n<p>Native to southern Africa, Black-footed Penguins are listed as Vulnerable by the International Union for Conservation of Nature. &#0160;Populations have decreased dramatically in the last decades as Penguins&#39; prey has been reduced by overfishing, and oil spills have killed thousands of birds.</p>\r\n<p>See more photos of Elmer below.</p>\r\n",new cljs.core.Keyword(null,"display-image","display-image",1829605831),"http://a6.typepad.com/6a010535647bf3970b01b7c7eca096970b-pi"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Second post"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Third post"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Fourth post"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Fifth posts"], null)], null)], null));
zooborns.core.log_message = (function zooborns$core$log_message(post){
return console.log([cljs.core.str("LOG_MESSAGE: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post))].join(''));
});
/**
 * @constructor
 */
zooborns.core.PostComponent = (function zooborns$core$PostComponent(){
var this__6262__auto__ = this;
React.Component.apply(this__6262__auto__,arguments);

if(!((this__6262__auto__.getInitialState == null))){
this__6262__auto__.state = this__6262__auto__.getInitialState();
} else {
this__6262__auto__.state = {};
}

return this__6262__auto__;
});

zooborns.core.PostComponent.prototype = goog.object.clone(React.Component.prototype);

var x6526_6534 = zooborns.core.PostComponent.prototype;
x6526_6534.componentWillUpdate = ((function (x6526_6534){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__6202__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__6202__auto__);
});})(x6526_6534))
;

x6526_6534.shouldComponentUpdate = ((function (x6526_6534){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
var or__5065__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__6202__auto__),goog.object.get(next_props__6203__auto__,"omcljs$value"));
if(or__5065__auto__){
return or__5065__auto__;
} else {
var and__5053__auto__ = this__6202__auto__.state;
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__6202__auto__.state,"omcljs$state"),goog.object.get(next_state__6204__auto__,"omcljs$state"));
} else {
return and__5053__auto__;
}
}
});})(x6526_6534))
;

x6526_6534.componentWillUnmount = ((function (x6526_6534){
return (function (){
var this__6202__auto__ = this;
var r__6208__auto__ = om.next.get_reconciler.call(null,this__6202__auto__);
var cfg__6209__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__6208__auto__);
var st__6210__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
var indexer__6207__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
if((st__6210__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__6210__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__6202__auto__);
}

if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6526_6534))
;

x6526_6534.componentDidUpdate = ((function (x6526_6534){
return (function (prev_props__6205__auto__,prev_state__6206__auto__){
var this__6202__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__6202__auto__);
});})(x6526_6534))
;

x6526_6534.isMounted = ((function (x6526_6534){
return (function (){
var this__6202__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__6202__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x6526_6534))
;

x6526_6534.componentWillMount = ((function (x6526_6534){
return (function (){
var this__6202__auto__ = this;
var indexer__6207__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__6202__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6526_6534))
;

x6526_6534.render = ((function (x6526_6534){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_6527 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_6528 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_6529 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_6530 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_6531 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return zooborns.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(zooborns.core.styles)], null),zooborns.core.text.call(null,null,"test"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_6531;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_6530;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_6529;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_6528;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_6527;
}});})(x6526_6534))
;


zooborns.core.PostComponent.prototype.constructor = zooborns.core.PostComponent;

zooborns.core.PostComponent.prototype.om$isComponent = true;

var x6532_6535 = zooborns.core.PostComponent;


var x6533_6536 = zooborns.core.PostComponent.prototype;


zooborns.core.PostComponent.cljs$lang$type = true;

zooborns.core.PostComponent.cljs$lang$ctorStr = "zooborns.core/PostComponent";

zooborns.core.PostComponent.cljs$lang$ctorPrWriter = (function (this__6264__auto__,writer__6265__auto__,opt__6266__auto__){
return cljs.core._write.call(null,writer__6265__auto__,"zooborns.core/PostComponent");
});
zooborns.core.show_post = (function zooborns$core$show_post(t,post){
var navigator = t.props.navigator;
return navigator.push(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"What",new cljs.core.Keyword(null,"component","component",1555936782),zooborns.core.PostComponent], null)));
});
zooborns.core.render_post = (function zooborns$core$render_post(p,context){
console.log("my context");

console.log(context);

var post = cljs.core.js__GT_clj.call(null,p,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return React.createElement(React.TouchableHighlight,{"onPress": ((function (post){
return (function (){
return zooborns.core.show_post.call(null,context,post);
});})(post))
},zooborns.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),(10)], null)], null),zooborns.core.text.call(null,null,[cljs.core.str("REALLY: "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post))].join(''))));
});
zooborns.core.posts = new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,zooborns.core.app_state));
/**
 * @constructor
 */
zooborns.core.RecentPostsComponent = (function zooborns$core$RecentPostsComponent(){
var this__6262__auto__ = this;
React.Component.apply(this__6262__auto__,arguments);

if(!((this__6262__auto__.getInitialState == null))){
this__6262__auto__.state = this__6262__auto__.getInitialState();
} else {
this__6262__auto__.state = {};
}

return this__6262__auto__;
});

zooborns.core.RecentPostsComponent.prototype = goog.object.clone(React.Component.prototype);

var x6542_6550 = zooborns.core.RecentPostsComponent.prototype;
x6542_6550.componentWillUpdate = ((function (x6542_6550){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__6202__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__6202__auto__);
});})(x6542_6550))
;

x6542_6550.shouldComponentUpdate = ((function (x6542_6550){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
var or__5065__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__6202__auto__),goog.object.get(next_props__6203__auto__,"omcljs$value"));
if(or__5065__auto__){
return or__5065__auto__;
} else {
var and__5053__auto__ = this__6202__auto__.state;
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__6202__auto__.state,"omcljs$state"),goog.object.get(next_state__6204__auto__,"omcljs$state"));
} else {
return and__5053__auto__;
}
}
});})(x6542_6550))
;

x6542_6550.componentWillUnmount = ((function (x6542_6550){
return (function (){
var this__6202__auto__ = this;
var r__6208__auto__ = om.next.get_reconciler.call(null,this__6202__auto__);
var cfg__6209__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__6208__auto__);
var st__6210__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
var indexer__6207__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
if((st__6210__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__6210__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__6202__auto__);
}

if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6542_6550))
;

x6542_6550.componentDidUpdate = ((function (x6542_6550){
return (function (prev_props__6205__auto__,prev_state__6206__auto__){
var this__6202__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__6202__auto__);
});})(x6542_6550))
;

x6542_6550.isMounted = ((function (x6542_6550){
return (function (){
var this__6202__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__6202__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x6542_6550))
;

x6542_6550.componentWillMount = ((function (x6542_6550){
return (function (){
var this__6202__auto__ = this;
var indexer__6207__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__6202__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6542_6550))
;

x6542_6550.render = ((function (x6542_6550){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_6543 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_6544 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_6545 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_6546 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_6547 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return zooborns.core.list_view.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,zooborns.core.app_state)).cloneWithRows(cljs.core.clj__GT_js.call(null,zooborns.core.posts)),new cljs.core.Keyword(null,"renderRow","renderRow",239389977),((function (_STAR_reconciler_STAR_6543,_STAR_depth_STAR_6544,_STAR_shared_STAR_6545,_STAR_instrument_STAR_6546,_STAR_parent_STAR_6547,this$,x6542_6550){
return (function (p1__6537_SHARP_){
return zooborns.core.render_post.call(null,p1__6537_SHARP_,this$);
});})(_STAR_reconciler_STAR_6543,_STAR_depth_STAR_6544,_STAR_shared_STAR_6545,_STAR_instrument_STAR_6546,_STAR_parent_STAR_6547,this$,x6542_6550))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"list-view","list-view",-358977901).cljs$core$IFn$_invoke$arity$1(zooborns.core.styles)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_6547;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_6546;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_6545;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_6544;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_6543;
}});})(x6542_6550))
;


zooborns.core.RecentPostsComponent.prototype.constructor = zooborns.core.RecentPostsComponent;

zooborns.core.RecentPostsComponent.prototype.om$isComponent = true;

var x6548_6551 = zooborns.core.RecentPostsComponent;


var x6549_6552 = zooborns.core.RecentPostsComponent.prototype;


zooborns.core.RecentPostsComponent.cljs$lang$type = true;

zooborns.core.RecentPostsComponent.cljs$lang$ctorStr = "zooborns.core/RecentPostsComponent";

zooborns.core.RecentPostsComponent.cljs$lang$ctorPrWriter = (function (this__6264__auto__,writer__6265__auto__,opt__6266__auto__){
return cljs.core._write.call(null,writer__6265__auto__,"zooborns.core/RecentPostsComponent");
});
/**
 * @constructor
 */
zooborns.core.WidgetComponent = (function zooborns$core$WidgetComponent(){
var this__6262__auto__ = this;
React.Component.apply(this__6262__auto__,arguments);

if(!((this__6262__auto__.getInitialState == null))){
this__6262__auto__.state = this__6262__auto__.getInitialState();
} else {
this__6262__auto__.state = {};
}

return this__6262__auto__;
});

zooborns.core.WidgetComponent.prototype = goog.object.clone(React.Component.prototype);

var x6557_6567 = zooborns.core.WidgetComponent.prototype;
x6557_6567.componentWillUpdate = ((function (x6557_6567){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__6202__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__6202__auto__);
});})(x6557_6567))
;

x6557_6567.shouldComponentUpdate = ((function (x6557_6567){
return (function (next_props__6203__auto__,next_state__6204__auto__){
var this__6202__auto__ = this;
var or__5065__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__6202__auto__),goog.object.get(next_props__6203__auto__,"omcljs$value"));
if(or__5065__auto__){
return or__5065__auto__;
} else {
var and__5053__auto__ = this__6202__auto__.state;
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__6202__auto__.state,"omcljs$state"),goog.object.get(next_state__6204__auto__,"omcljs$state"));
} else {
return and__5053__auto__;
}
}
});})(x6557_6567))
;

x6557_6567.componentWillUnmount = ((function (x6557_6567){
return (function (){
var this__6202__auto__ = this;
var r__6208__auto__ = om.next.get_reconciler.call(null,this__6202__auto__);
var cfg__6209__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__6208__auto__);
var st__6210__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
var indexer__6207__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__6209__auto__);
if((st__6210__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__6210__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__6202__auto__);
}

if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6557_6567))
;

x6557_6567.componentDidUpdate = ((function (x6557_6567){
return (function (prev_props__6205__auto__,prev_state__6206__auto__){
var this__6202__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__6202__auto__);
});})(x6557_6567))
;

x6557_6567.isMounted = ((function (x6557_6567){
return (function (){
var this__6202__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__6202__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x6557_6567))
;

x6557_6567.componentWillMount = ((function (x6557_6567){
return (function (){
var this__6202__auto__ = this;
var indexer__6207__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__6202__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__6207__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__6207__auto__,this__6202__auto__);
}
});})(x6557_6567))
;

x6557_6567.render = ((function (x6557_6567){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_6558 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_6559 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_6560 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_6561 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_6562 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__6563 = om.next.props.call(null,this$);
var map__6563__$1 = ((((!((map__6563 == null)))?((((map__6563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6563):map__6563);
var title = cljs.core.get.call(null,map__6563__$1,new cljs.core.Keyword("app","title","app/title",636408784));
return zooborns.core.navigator_ios.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"initialRoute","initialRoute",-467348775),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),zooborns.core.RecentPostsComponent,new cljs.core.Keyword(null,"title","title",636505583),title], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_6562;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_6561;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_6560;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_6559;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_6558;
}});})(x6557_6567))
;


zooborns.core.WidgetComponent.prototype.constructor = zooborns.core.WidgetComponent;

zooborns.core.WidgetComponent.prototype.om$isComponent = true;

var x6565_6568 = zooborns.core.WidgetComponent;
x6565_6568.om$next$IQuery$ = true;

x6565_6568.om$next$IQuery$query$arity$1 = ((function (x6565_6568){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null);
});})(x6565_6568))
;


var x6566_6569 = zooborns.core.WidgetComponent.prototype;
x6566_6569.om$next$IQuery$ = true;

x6566_6569.om$next$IQuery$query$arity$1 = ((function (x6566_6569){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null);
});})(x6566_6569))
;


zooborns.core.WidgetComponent.cljs$lang$type = true;

zooborns.core.WidgetComponent.cljs$lang$ctorStr = "zooborns.core/WidgetComponent";

zooborns.core.WidgetComponent.cljs$lang$ctorPrWriter = (function (this__6264__auto__,writer__6265__auto__,opt__6266__auto__){
return cljs.core._write.call(null,writer__6265__auto__,"zooborns.core/WidgetComponent");
});
if(typeof zooborns.core.read !== 'undefined'){
} else {
zooborns.core.read = (function (){var method_table__5978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5982__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"zooborns.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5982__auto__,method_table__5978__auto__,prefer_table__5979__auto__,method_cache__5980__auto__,cached_hierarchy__5981__auto__));
})();
}
cljs.core._add_method.call(null,zooborns.core.read,new cljs.core.Keyword(null,"props","props",453281727),(function (p__6570,k,_){
var map__6571 = p__6570;
var map__6571__$1 = ((((!((map__6571 == null)))?((((map__6571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6571):map__6571);
var my_props = cljs.core.get.call(null,map__6571__$1,new cljs.core.Keyword(null,"my-props","my-props",-1205900167));
var st = cljs.core.deref.call(null,zooborns.core.state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),zooborns.core.v], null);
}));
cljs.core._add_method.call(null,zooborns.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__6573,k,_){
var map__6574 = p__6573;
var map__6574__$1 = ((((!((map__6574 == null)))?((((map__6574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6574):map__6574);
var state = cljs.core.get.call(null,map__6574__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
console.log("I AMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM BEING CALLED ");

console.log([cljs.core.str("test: "),cljs.core.str(k)].join(''));

cljs.core.find.call(null,st,k);

var temp__4423__auto__ = cljs.core.find.call(null,st,k);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__6576 = temp__4423__auto__;
var ___$1 = cljs.core.nth.call(null,vec__6576,(0),null);
var v = cljs.core.nth.call(null,vec__6576,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
zooborns.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),zooborns.core.app_state,new cljs.core.Keyword(null,"my-props","my-props",-1205900167),zooborns.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),zooborns.core.read], null)),new cljs.core.Keyword(null,"root-render","root-render",835981146),(function (p1__6577_SHARP_,p2__6578_SHARP_){
return React.render(p1__6577_SHARP_,p2__6578_SHARP_);
}),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),(function (p1__6579_SHARP_){
return React.unmountComponentAtNode(p1__6579_SHARP_);
})], null));
om.next.add_root_BANG_.call(null,zooborns.core.reconciler,zooborns.core.WidgetComponent,(1));
zooborns.core.init = (function zooborns$core$init(){
return (function zooborns$core$init_$_render(){
return window.requestAnimationFrame(zooborns$core$init_$_render);
}).call(null);
});
goog.exportSymbol('zooborns.core.init', zooborns.core.init);

//# sourceMappingURL=core.js.map