// Compiled by ClojureScript 1.7.145 {}
React = require("react-native/Libraries/react-native/react-native.js");
goog.provide('zooborns.core');
goog.require('cljs.core');
goog.require('om.next');
React = require("react-native/Libraries/react-native/react-native.js");
zooborns.core.view = (function zooborns$core$view(var_args){
var args__6130__auto__ = [];
var len__6123__auto___9508 = arguments.length;
var i__6124__auto___9509 = (0);
while(true){
if((i__6124__auto___9509 < len__6123__auto___9508)){
args__6130__auto__.push((arguments[i__6124__auto___9509]));

var G__9510 = (i__6124__auto___9509 + (1));
i__6124__auto___9509 = G__9510;
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

zooborns.core.view.cljs$lang$applyTo = (function (seq9506){
var G__9507 = cljs.core.first.call(null,seq9506);
var seq9506__$1 = cljs.core.next.call(null,seq9506);
return zooborns.core.view.cljs$core$IFn$_invoke$arity$variadic(G__9507,seq9506__$1);
});
zooborns.core.text = (function zooborns$core$text(var_args){
var args__6130__auto__ = [];
var len__6123__auto___9513 = arguments.length;
var i__6124__auto___9514 = (0);
while(true){
if((i__6124__auto___9514 < len__6123__auto___9513)){
args__6130__auto__.push((arguments[i__6124__auto___9514]));

var G__9515 = (i__6124__auto___9514 + (1));
i__6124__auto___9514 = G__9515;
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

zooborns.core.text.cljs$lang$applyTo = (function (seq9511){
var G__9512 = cljs.core.first.call(null,seq9511);
var seq9511__$1 = cljs.core.next.call(null,seq9511);
return zooborns.core.text.cljs$core$IFn$_invoke$arity$variadic(G__9512,seq9511__$1);
});
if(typeof zooborns.core.app_state !== 'undefined'){
} else {
zooborns.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","msg","app/msg",-1386003639),"Welcome to zooborns"], null));
}
/**
 * @constructor
 */
zooborns.core.WidgetComponent = (function zooborns$core$WidgetComponent(){
var this__6494__auto__ = this;
React.Component.apply(this__6494__auto__,arguments);

if(!((this__6494__auto__.getInitialState == null))){
this__6494__auto__.state = this__6494__auto__.getInitialState();
} else {
this__6494__auto__.state = {};
}

return this__6494__auto__;
});

zooborns.core.WidgetComponent.prototype = goog.object.clone(React.Component.prototype);

var x9520_9530 = zooborns.core.WidgetComponent.prototype;
x9520_9530.componentWillUpdate = ((function (x9520_9530){
return (function (next_props__6435__auto__,next_state__6436__auto__){
var this__6434__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__6434__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__6434__auto__);
});})(x9520_9530))
;

x9520_9530.shouldComponentUpdate = ((function (x9520_9530){
return (function (next_props__6435__auto__,next_state__6436__auto__){
var this__6434__auto__ = this;
var or__5065__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__6434__auto__),goog.object.get(next_props__6435__auto__,"omcljs$value"));
if(or__5065__auto__){
return or__5065__auto__;
} else {
var and__5053__auto__ = this__6434__auto__.state;
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__6434__auto__.state,"omcljs$state"),goog.object.get(next_state__6436__auto__,"omcljs$state"));
} else {
return and__5053__auto__;
}
}
});})(x9520_9530))
;

x9520_9530.componentWillUnmount = ((function (x9520_9530){
return (function (){
var this__6434__auto__ = this;
var r__6440__auto__ = om.next.get_reconciler.call(null,this__6434__auto__);
var cfg__6441__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__6440__auto__);
var st__6442__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__6441__auto__);
var indexer__6439__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__6441__auto__);
if((st__6442__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__6442__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__6434__auto__);
}

if((indexer__6439__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__6439__auto__,this__6434__auto__);
}
});})(x9520_9530))
;

x9520_9530.componentDidUpdate = ((function (x9520_9530){
return (function (prev_props__6437__auto__,prev_state__6438__auto__){
var this__6434__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__6434__auto__);
});})(x9520_9530))
;

x9520_9530.isMounted = ((function (x9520_9530){
return (function (){
var this__6434__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__6434__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x9520_9530))
;

x9520_9530.componentWillMount = ((function (x9520_9530){
return (function (){
var this__6434__auto__ = this;
var indexer__6439__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__6434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__6439__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__6439__auto__,this__6434__auto__);
}
});})(x9520_9530))
;

x9520_9530.render = ((function (x9520_9530){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_9521 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_9522 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_9523 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_9524 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_9525 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__9526 = om.next.props.call(null,this$);
var map__9526__$1 = ((((!((map__9526 == null)))?((((map__9526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9526):map__9526);
var msg = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword("app","msg","app/msg",-1386003639));
return zooborns.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40)], null)], null),zooborns.core.text.call(null,null,msg));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_9525;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_9524;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_9523;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_9522;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_9521;
}});})(x9520_9530))
;


zooborns.core.WidgetComponent.prototype.constructor = zooborns.core.WidgetComponent;

zooborns.core.WidgetComponent.prototype.om$isComponent = true;

var x9528_9531 = zooborns.core.WidgetComponent;
x9528_9531.om$next$IQuery$ = true;

x9528_9531.om$next$IQuery$query$arity$1 = ((function (x9528_9531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x9528_9531))
;


var x9529_9532 = zooborns.core.WidgetComponent.prototype;
x9529_9532.om$next$IQuery$ = true;

x9529_9532.om$next$IQuery$query$arity$1 = ((function (x9529_9532){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x9529_9532))
;


zooborns.core.WidgetComponent.cljs$lang$type = true;

zooborns.core.WidgetComponent.cljs$lang$ctorStr = "zooborns.core/WidgetComponent";

zooborns.core.WidgetComponent.cljs$lang$ctorPrWriter = (function (this__6496__auto__,writer__6497__auto__,opt__6498__auto__){
return cljs.core._write.call(null,writer__6497__auto__,"zooborns.core/WidgetComponent");
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
cljs.core._add_method.call(null,zooborns.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__9533,k,_){
var map__9534 = p__9533;
var map__9534__$1 = ((((!((map__9534 == null)))?((((map__9534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9534):map__9534);
var state = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
cljs.core.find.call(null,st,k);

var temp__4423__auto__ = cljs.core.find.call(null,st,k);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__9536 = temp__4423__auto__;
var ___$1 = cljs.core.nth.call(null,vec__9536,(0),null);
var v = cljs.core.nth.call(null,vec__9536,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
zooborns.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),zooborns.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),zooborns.core.read], null)),new cljs.core.Keyword(null,"root-render","root-render",835981146),(function (p1__9537_SHARP_,p2__9538_SHARP_){
return React.render(p1__9537_SHARP_,p2__9538_SHARP_);
}),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),(function (p1__9539_SHARP_){
return React.unmountComponentAtNode(p1__9539_SHARP_);
})], null));
om.next.add_root_BANG_.call(null,zooborns.core.reconciler,zooborns.core.WidgetComponent,(1));
zooborns.core.init = (function zooborns$core$init(){
return (function zooborns$core$init_$_render(){
return window.requestAnimationFrame(zooborns$core$init_$_render);
}).call(null);
});
goog.exportSymbol('zooborns.core.init', zooborns.core.init);

//# sourceMappingURL=core.js.map