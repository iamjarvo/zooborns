// Compiled by ClojureScript 1.7.145 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
var node_SINGLEQUOTE_ = cljs.core.first.call(null,node);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__8809_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__8809_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__8809_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__8809_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__8810 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__8810;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_.call(null,node)) && (((1) < cljs.core.count.call(null,node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__8819 = clojure.zip.down.call(null,loc);
var G__8820 = path__$1;
loc = G__8819;
path__$1 = G__8820;
continue;
} else {
var vec__8818 = path__$1;
var k = cljs.core.nth.call(null,vec__8818,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8818,(1));
if(om.next.union_QMARK_.call(null,node)){
var node__$1 = clojure.zip.node.call(null,om.next.move_to_key.call(null,loc,k));
var G__8821 = clojure.zip.replace.call(null,loc,node__$1);
var G__8822 = ks;
loc = G__8821;
path__$1 = G__8822;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var G__8823 = om.next.move_to_key.call(null,loc,k);
var G__8824 = ks;
loc = G__8823;
path__$1 = G__8824;
continue;
} else {
var G__8825 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__8826 = ks;
loc = G__8825;
path__$1 = G__8826;
continue;
}
} else {
var G__8827 = clojure.zip.right.call(null,loc);
var G__8828 = path__$1;
loc = G__8827;
path__$1 = G__8828;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query;
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return om$next$join_key.call(null,cljs.core.first.call(null,node));
} else {
return node;

}
}
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,node),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,node)),ks)], true, false);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,node)),om$next$focused_join.call(null,cljs.core.first.call(null,node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__8830 = path;
var k = cljs.core.nth.call(null,vec__8830,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8830,(1));
var match = ((function (vec__8830,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.next.join_key.call(null,x));
});})(vec__8830,k,ks))
;
var value = ((function (vec__8830,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__8830,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks),new cljs.core.Keyword("om.next","union","om.next/union",1397420192),true], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args8831 = [];
var len__6123__auto___8835 = arguments.length;
var i__6124__auto___8836 = (0);
while(true){
if((i__6124__auto___8836 < len__6123__auto___8835)){
args8831.push((arguments[i__6124__auto___8836]));

var G__8837 = (i__6124__auto___8836 + (1));
i__6124__auto___8836 = G__8837;
continue;
} else {
}
break;
}

var G__8833 = args8831.length;
switch (G__8833) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8831.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__5053__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || (cljs.core.not_EQ_.call(null,path,bound));
if(and__5053__auto__){
var and__5053__auto____$1 = cljs.core.some.call(null,cljs.core.map_QMARK_,focus);
if(cljs.core.truth_(and__5053__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__5053__auto____$1;
}
} else {
return and__5053__auto__;
}
})())){
var vec__8834 = cljs.core.ffirst.call(null,focus);
var k = cljs.core.nth.call(null,vec__8834,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8834,(1),null);
var G__8839 = focus_SINGLEQUOTE_;
var G__8840 = bound;
var G__8841 = cljs.core.conj.call(null,path,k);
focus = G__8839;
bound = G__8840;
path = G__8841;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next.ident[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$,props);
} else {
var m__5721__auto____$1 = (om.next.ident["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});

(om.next.Ident["_"] = true);

(om.next.ident["_"] = (function (this$,props){
return this$;
}));

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next.params[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$);
} else {
var m__5721__auto____$1 = (om.next.params["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next.query[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$);
} else {
var m__5721__auto____$1 = (om.next.query["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$,new_state);
} else {
var m__5721__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next._get_state[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$);
} else {
var m__5721__auto____$1 = (om.next._get_state["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next._get_rendered_state[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$);
} else {
var m__5721__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__5720__auto__ = (((this$ == null))?null:this$);
var m__5721__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,this$);
} else {
var m__5721__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__5053__auto__ = (x instanceof cljs.core.Symbol);
if(and__5053__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__5053__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;
om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__8843 = om.next.get_reconciler.call(null,component);
var G__8843__$1 = (((G__8843 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__8843));
var G__8843__$2 = (((G__8843__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__8843__$1));
var G__8843__$3 = (((G__8843__$2 == null))?null:cljs.core.deref.call(null,G__8843__$2));
var G__8843__$4 = (((G__8843__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__8843__$3));
var G__8843__$5 = (((G__8843__$4 == null))?null:cljs.core.get.call(null,G__8843__$4,component));
return G__8843__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data.call(null,c);
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1))){
var q = om.next.query.call(null,x__$1);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x__$1),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__5663__auto__,writer__5664__auto__,opt__5665__auto__){
return cljs.core._write.call(null,writer__5664__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args8850 = [];
var len__6123__auto___8857 = arguments.length;
var i__6124__auto___8858 = (0);
while(true){
if((i__6124__auto___8858 < len__6123__auto___8857)){
args8850.push((arguments[i__6124__auto___8858]));

var G__8859 = (i__6124__auto___8858 + (1));
i__6124__auto___8858 = G__8859;
continue;
} else {
}
break;
}

var G__8852 = args8850.length;
switch (G__8852) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8850.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__8853){
var map__8854 = p__8853;
var map__8854__$1 = ((((!((map__8854 == null)))?((((map__8854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8854):map__8854);
var opts = map__8854__$1;
var validator = cljs.core.get.call(null,map__8854__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__8854__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__8854,map__8854__$1,opts,validator,keyfn){
return (function() { 
var G__8861__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.call(null,om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__8856 = ref;
var G__8856__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__8856)].join(''):G__8856);
return G__8856__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},children);
}
};
var G__8861 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__8862__i = 0, G__8862__a = new Array(arguments.length -  1);
while (G__8862__i < G__8862__a.length) {G__8862__a[G__8862__i] = arguments[G__8862__i + 1]; ++G__8862__i;}
  children = new cljs.core.IndexedSeq(G__8862__a,0);
} 
return G__8861__delegate.call(this,props,children);};
G__8861.cljs$lang$maxFixedArity = 1;
G__8861.cljs$lang$applyTo = (function (arglist__8863){
var props = cljs.core.first(arglist__8863);
var children = cljs.core.rest(arglist__8863);
return G__8861__delegate(props,children);
});
G__8861.cljs$core$IFn$_invoke$arity$variadic = G__8861__delegate;
return G__8861;
})()
;
;})(map__8854,map__8854__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
return x.om$isComponent;
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args8864 = [];
var len__6123__auto___8867 = arguments.length;
var i__6124__auto___8868 = (0);
while(true){
if((i__6124__auto___8868 < len__6123__auto___8867)){
args8864.push((arguments[i__6124__auto___8868]));

var G__8869 = (i__6124__auto___8868 + (1));
i__6124__auto___8868 = G__8869;
continue;
} else {
}
break;
}

var G__8866 = args8864.length;
switch (G__8866) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8864.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args8871 = [];
var len__6123__auto___8874 = arguments.length;
var i__6124__auto___8875 = (0);
while(true){
if((i__6124__auto___8875 < len__6123__auto___8874)){
args8871.push((arguments[i__6124__auto___8875]));

var G__8876 = (i__6124__auto___8875 + (1));
i__6124__auto___8875 = G__8876;
continue;
} else {
}
break;
}

var G__8873 = args8871.length;
switch (G__8873) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8871.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,next_props),om.next.get_props.call(null,component.props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop.call(null,component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__5065__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__5065__auto__)){
return or__5065__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
om.next.shared = (function om$next$shared(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$shared");
});
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__8879 = c.state;
goog.object.set(G__8879,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__8879;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if(cljs.core.vector_QMARK_.call(null,props)){
var G__8882 = props;
var G__8882__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__8882,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__8882);
return G__8882__$1;
} else {
var G__8883 = props;
var G__8883__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__8883,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__8883);
return G__8883__$1;
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args8884 = [];
var len__6123__auto___8889 = arguments.length;
var i__6124__auto___8890 = (0);
while(true){
if((i__6124__auto___8890 < len__6123__auto___8889)){
args8884.push((arguments[i__6124__auto___8890]));

var G__8891 = (i__6124__auto___8890 + (1));
i__6124__auto___8890 = G__8891;
continue;
} else {
}
break;
}

var G__8886 = args8884.length;
switch (G__8886) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8884.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
var props = (function (){var G__8887 = x;
var G__8887__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__8887):G__8887);
return G__8887__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__8888 = k_or_ks;
var G__8888__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__8888],null)):G__8888);
return G__8888__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.ident.call(null,component,om.next.props.call(null,component));
});
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args8895 = [];
var len__6123__auto___8899 = arguments.length;
var i__6124__auto___8900 = (0);
while(true){
if((i__6124__auto___8900 < len__6123__auto___8899)){
args8895.push((arguments[i__6124__auto___8900]));

var G__8901 = (i__6124__auto___8900 + (1));
i__6124__auto___8900 = G__8901;
continue;
} else {
}
break;
}

var G__8897 = args8895.length;
switch (G__8897) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8895.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component)))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__5065__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__5065__auto__)){
return or__5065__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args8903 = [];
var len__6123__auto___8913 = arguments.length;
var i__6124__auto___8914 = (0);
while(true){
if((i__6124__auto___8914 < len__6123__auto___8913)){
args8903.push((arguments[i__6124__auto___8914]));

var G__8915 = (i__6124__auto___8914 + (1));
i__6124__auto___8914 = G__8915;
continue;
} else {
}
break;
}

var G__8912 = args8903.length;
switch (G__8912) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__6142__auto__ = (new cljs.core.IndexedSeq(args8903.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__6142__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq8904){
var G__8905 = cljs.core.first.call(null,seq8904);
var seq8904__$1 = cljs.core.next.call(null,seq8904);
var G__8906 = cljs.core.first.call(null,seq8904__$1);
var seq8904__$2 = cljs.core.next.call(null,seq8904__$1);
var G__8907 = cljs.core.first.call(null,seq8904__$2);
var seq8904__$3 = cljs.core.next.call(null,seq8904__$2);
var G__8908 = cljs.core.first.call(null,seq8904__$3);
var seq8904__$4 = cljs.core.next.call(null,seq8904__$3);
var G__8909 = cljs.core.first.call(null,seq8904__$4);
var seq8904__$5 = cljs.core.next.call(null,seq8904__$4);
var G__8910 = cljs.core.first.call(null,seq8904__$5);
var seq8904__$6 = cljs.core.next.call(null,seq8904__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8905,G__8906,G__8907,G__8908,G__8909,G__8910,seq8904__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
return om.next._get_rendered_state.call(null,component);
} else {
var G__8920 = component;
var G__8920__$1 = (((G__8920 == null))?null:G__8920.state);
var G__8920__$2 = (((G__8920__$1 == null))?null:goog.object.get(G__8920__$1,"omcljs$state"));
return G__8920__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__8924 = c;
var G__8924__$1 = (((G__8924 == null))?null:G__8924.state);
var G__8924__$2 = (((G__8924__$1 == null))?null:goog.object.get(G__8924__$1,"omcljs$pendingState"));
return G__8924__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args8925 = [];
var len__6123__auto___8928 = arguments.length;
var i__6124__auto___8929 = (0);
while(true){
if((i__6124__auto___8929 < len__6123__auto___8928)){
args8925.push((arguments[i__6124__auto___8929]));

var G__8930 = (i__6124__auto___8929 + (1));
i__6124__auto___8929 = G__8930;
continue;
} else {
}
break;
}

var G__8927 = args8925.length;
switch (G__8927) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8925.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Change the query of a component. Will schedule a re-render.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,new_query){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query '"),cljs.core.str(new_query),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new_query], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Change the query parameters of a component. Will schedule a re-render.
 */
om.next.set_params_BANG_ = (function om$next$set_params_BANG_(component,new_params){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query params "),cljs.core.str(new_params),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new_params], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__8933 = component.refs;
var G__8933__$1 = (((G__8933 == null))?null:goog.object.get(G__8933,name));
return G__8933__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args8934 = [];
var len__6123__auto___8937 = arguments.length;
var i__6124__auto___8938 = (0);
while(true){
if((i__6124__auto___8938 < len__6123__auto___8937)){
args8934.push((arguments[i__6124__auto___8938]));

var G__8939 = (i__6124__auto___8938 + (1));
i__6124__auto___8938 = G__8939;
continue;
} else {
}
break;
}

var G__8936 = args8934.length;
switch (G__8936) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8934.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__8941 = p;
var G__8942 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__8941;
ret = G__8942;
continue;
} else {
var G__8943 = p;
var G__8944 = ret;
c__$1 = G__8943;
ret = G__8944;
continue;
}
} else {
var seen = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.take_while.call(null,((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),x)){
return null;
} else {
cljs.core.swap_BANG_.call(null,seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
om.next.join_value = (function om$next$join_value(node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
return cljs.core.first.call(null,node);
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__8946 = subquery_ref;
var G__8946__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__8946)].join(''):G__8946);
return G__8946__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(300));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args8947 = [];
var len__6123__auto___8950 = arguments.length;
var i__6124__auto___8951 = (0);
while(true){
if((i__6124__auto___8951 < len__6123__auto___8950)){
args8947.push((arguments[i__6124__auto___8951]));

var G__8952 = (i__6124__auto___8951 + (1));
i__6124__auto___8951 = G__8952;
continue;
} else {
}
break;
}

var G__8949 = args8947.length;
switch (G__8949) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8947.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

var temp__4425__auto___8954 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___8954)){
var old_reconciler_8955 = temp__4425__auto___8954;
om.next.remove_root_BANG_.call(null,old_reconciler_8955,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__5720__auto__ = (((c == null))?null:c);
var m__5721__auto__ = (om.next.tx_intercept[goog.typeOf(x__5720__auto__)]);
if(!((m__5721__auto__ == null))){
return m__5721__auto__.call(null,c,tx);
} else {
var m__5721__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__5721__auto____$1 == null))){
return m__5721__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310)], null));
});
om.next.gather_sends = (function om$next$gather_sends(p__8957,tx,remotes){
var map__8962 = p__8957;
var map__8962__$1 = ((((!((map__8962 == null)))?((((map__8962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8962):map__8962);
var env = map__8962__$1;
var parser = cljs.core.get.call(null,map__8962__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__8962,map__8962__$1,env,parser){
return (function (p1__8956_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8956_SHARP_,parser.call(null,env,tx,p1__8956_SHARP_)],null));
});})(map__8962,map__8962__$1,env,parser))
),cljs.core.filter.call(null,((function (map__8962,map__8962__$1,env,parser){
return (function (p__8964){
var vec__8965 = p__8964;
var _ = cljs.core.nth.call(null,vec__8965,(0),null);
var v = cljs.core.nth.call(null,vec__8965,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__8962,map__8962__$1,env,parser))
)),remotes);
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__5053__auto__ = c;
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not.call(null,ref);
} else {
return and__5053__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (((om.next._STAR_logger_STAR_ == null))?null:goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join('')));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,(cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,v))));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args8966 = [];
var len__6123__auto___8971 = arguments.length;
var i__6124__auto___8972 = (0);
while(true){
if((i__6124__auto___8972 < len__6123__auto___8971)){
args8966.push((arguments[i__6124__auto___8972]));

var G__8973 = (i__6124__auto___8972 + (1));
i__6124__auto___8972 = G__8973;
continue;
} else {
}
break;
}

var G__8968 = args8966.length;
switch (G__8968) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8966.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IQuery","IQuery",-2026788688,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var p = om.next.parent.call(null,x);
var tx__$1 = tx;
while(true){
if((p == null)){
return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),x,null,tx__$1);
} else {
var tx__$2 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p)))?om.next.tx_intercept.call(null,p,tx__$1):tx__$1);
var G__8975 = om.next.parent.call(null,p);
var G__8976 = tx__$2;
p = G__8975;
tx__$1 = G__8976;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__8977){
var map__8980 = p__8977;
var map__8980__$1 = ((((!((map__8980 == null)))?((((map__8980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8980):map__8980);
var opts = map__8980__$1;
var read = cljs.core.get.call(null,map__8980__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__8980__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__8988 = x;
var G__8988__$1 = ((om.next.component_QMARK_.call(null,x))?cljs.core.type.call(null,G__8988):G__8988);
return G__8988__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,selector,path,classpath){
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));
} else {
}

if(cljs.core.vector_QMARK_.call(null,selector)){
var map__9043 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__9043__$1 = ((((!((map__9043 == null)))?((((map__9043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9043):map__9043);
var props = cljs.core.get.call(null,map__9043__$1,false);
var joins = cljs.core.get.call(null,map__9043__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__8982_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__8982_SHARP_,cljs.core.zipmap.call(null,props,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__9045 = cljs.core.seq.call(null,joins);
var chunk__9046 = null;
var count__9047 = (0);
var i__9048 = (0);
while(true){
if((i__9048 < count__9047)){
var join = cljs.core._nth.call(null,chunk__9046,i__9048);
var vec__9049_9067 = om.next.join_value.call(null,join);
var prop_9068 = cljs.core.nth.call(null,vec__9049_9067,(0),null);
var selector_SINGLEQUOTE__9069 = cljs.core.nth.call(null,vec__9049_9067,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__9045,chunk__9046,count__9047,i__9048,vec__9049_9067,prop_9068,selector_SINGLEQUOTE__9069,join,map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__8983_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__8983_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_9068,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__9045,chunk__9046,count__9047,i__9048,vec__9049_9067,prop_9068,selector_SINGLEQUOTE__9069,join,map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__9070 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__9069));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__9070,selector_SINGLEQUOTE__9069,cljs.core.conj.call(null,path,prop_9068),(function (){var G__9050 = classpath;
var G__9050__$1 = (cljs.core.truth_(class_SINGLEQUOTE__9070)?cljs.core.conj.call(null,G__9050,class_SINGLEQUOTE__9070):G__9050);
return G__9050__$1;
})());

var G__9071 = seq__9045;
var G__9072 = chunk__9046;
var G__9073 = count__9047;
var G__9074 = (i__9048 + (1));
seq__9045 = G__9071;
chunk__9046 = G__9072;
count__9047 = G__9073;
i__9048 = G__9074;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9045);
if(temp__4425__auto__){
var seq__9045__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9045__$1)){
var c__5868__auto__ = cljs.core.chunk_first.call(null,seq__9045__$1);
var G__9075 = cljs.core.chunk_rest.call(null,seq__9045__$1);
var G__9076 = c__5868__auto__;
var G__9077 = cljs.core.count.call(null,c__5868__auto__);
var G__9078 = (0);
seq__9045 = G__9075;
chunk__9046 = G__9076;
count__9047 = G__9077;
i__9048 = G__9078;
continue;
} else {
var join = cljs.core.first.call(null,seq__9045__$1);
var vec__9051_9079 = om.next.join_value.call(null,join);
var prop_9080 = cljs.core.nth.call(null,vec__9051_9079,(0),null);
var selector_SINGLEQUOTE__9081 = cljs.core.nth.call(null,vec__9051_9079,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__9045,chunk__9046,count__9047,i__9048,vec__9051_9079,prop_9080,selector_SINGLEQUOTE__9081,join,seq__9045__$1,temp__4425__auto__,map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__8983_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__8983_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_9080,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__9045,chunk__9046,count__9047,i__9048,vec__9051_9079,prop_9080,selector_SINGLEQUOTE__9081,join,seq__9045__$1,temp__4425__auto__,map__9043,map__9043__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__9082 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__9081));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__9082,selector_SINGLEQUOTE__9081,cljs.core.conj.call(null,path,prop_9080),(function (){var G__9052 = classpath;
var G__9052__$1 = (cljs.core.truth_(class_SINGLEQUOTE__9082)?cljs.core.conj.call(null,G__9052,class_SINGLEQUOTE__9082):G__9052);
return G__9052__$1;
})());

var G__9083 = cljs.core.next.call(null,seq__9045__$1);
var G__9084 = null;
var G__9085 = (0);
var G__9086 = (0);
seq__9045 = G__9083;
chunk__9046 = G__9084;
count__9047 = G__9085;
i__9048 = G__9086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__9053 = cljs.core.seq.call(null,selector);
var chunk__9054 = null;
var count__9055 = (0);
var i__9056 = (0);
while(true){
if((i__9056 < count__9055)){
var vec__9057 = cljs.core._nth.call(null,chunk__9054,i__9056);
var k = cljs.core.nth.call(null,vec__9057,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__9057,(1),null);
var class_SINGLEQUOTE__9087 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__9087,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__9058 = classpath;
var G__9058__$1 = (cljs.core.truth_(class_SINGLEQUOTE__9087)?cljs.core.conj.call(null,G__9058,class_SINGLEQUOTE__9087):G__9058);
return G__9058__$1;
})());

var G__9088 = seq__9053;
var G__9089 = chunk__9054;
var G__9090 = count__9055;
var G__9091 = (i__9056 + (1));
seq__9053 = G__9088;
chunk__9054 = G__9089;
count__9055 = G__9090;
i__9056 = G__9091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9053);
if(temp__4425__auto__){
var seq__9053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9053__$1)){
var c__5868__auto__ = cljs.core.chunk_first.call(null,seq__9053__$1);
var G__9092 = cljs.core.chunk_rest.call(null,seq__9053__$1);
var G__9093 = c__5868__auto__;
var G__9094 = cljs.core.count.call(null,c__5868__auto__);
var G__9095 = (0);
seq__9053 = G__9092;
chunk__9054 = G__9093;
count__9055 = G__9094;
i__9056 = G__9095;
continue;
} else {
var vec__9059 = cljs.core.first.call(null,seq__9053__$1);
var k = cljs.core.nth.call(null,vec__9059,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__9059,(1),null);
var class_SINGLEQUOTE__9096 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__9096,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__9060 = classpath;
var G__9060__$1 = (cljs.core.truth_(class_SINGLEQUOTE__9096)?cljs.core.conj.call(null,G__9060,class_SINGLEQUOTE__9096):G__9060);
return G__9060__$1;
})());

var G__9097 = cljs.core.next.call(null,seq__9053__$1);
var G__9098 = null;
var G__9099 = (0);
var G__9100 = (0);
seq__9053 = G__9097;
chunk__9054 = G__9098;
count__9055 = G__9099;
i__9056 = G__9100;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__9061 = indexes__$2;
var G__9061__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__9061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__9061);
return G__9061__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__9062 = indexes__$2;
var G__9062__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__9062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c):G__9062);
return G__9062__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__8984_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__8984_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5679__auto__,k__5680__auto__){
var self__ = this;
var this__5679__auto____$1 = this;
return cljs.core._lookup.call(null,this__5679__auto____$1,k__5680__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5681__auto__,k8986,else__5682__auto__){
var self__ = this;
var this__5681__auto____$1 = this;
var G__9063 = (((k8986 instanceof cljs.core.Keyword))?k8986.fqn:null);
switch (G__9063) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8986,else__5682__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5693__auto__,writer__5694__auto__,opts__5695__auto__){
var self__ = this;
var this__5693__auto____$1 = this;
var pr_pair__5696__auto__ = ((function (this__5693__auto____$1){
return (function (keyval__5697__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5694__auto__,cljs.core.pr_writer,""," ","",opts__5695__auto__,keyval__5697__auto__);
});})(this__5693__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5694__auto__,pr_pair__5696__auto__,"#om.next.Indexer{",", ","}",opts__5695__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8985){
var self__ = this;
var G__8985__$1 = this;
return (new cljs.core.RecordIter((0),G__8985__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5677__auto__){
var self__ = this;
var this__5677__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5673__auto__){
var self__ = this;
var this__5673__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5683__auto__){
var self__ = this;
var this__5683__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5674__auto__){
var self__ = this;
var this__5674__auto____$1 = this;
var h__5500__auto__ = self__.__hash;
if(!((h__5500__auto__ == null))){
return h__5500__auto__;
} else {
var h__5500__auto____$1 = cljs.core.hash_imap.call(null,this__5674__auto____$1);
self__.__hash = h__5500__auto____$1;

return h__5500__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5675__auto__,other__5676__auto__){
var self__ = this;
var this__5675__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5053__auto__ = other__5676__auto__;
if(cljs.core.truth_(and__5053__auto__)){
var and__5053__auto____$1 = (this__5675__auto____$1.constructor === other__5676__auto__.constructor);
if(and__5053__auto____$1){
return cljs.core.equiv_map.call(null,this__5675__auto____$1,other__5676__auto__);
} else {
return and__5053__auto____$1;
}
} else {
return and__5053__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5688__auto__,k__5689__auto__){
var self__ = this;
var this__5688__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__5689__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5688__auto____$1),self__.__meta),k__5689__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5689__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5686__auto__,k__5687__auto__,G__8985){
var self__ = this;
var this__5686__auto____$1 = this;
var pred__9064 = cljs.core.keyword_identical_QMARK_;
var expr__9065 = k__5687__auto__;
if(cljs.core.truth_(pred__9064.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__9065))){
return (new om.next.Indexer(G__8985,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5687__auto__,G__8985),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5691__auto__){
var self__ = this;
var this__5691__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5678__auto__,G__8985){
var self__ = this;
var this__5678__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__8985,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5684__auto__,entry__5685__auto__){
var self__ = this;
var this__5684__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5685__auto__)){
return cljs.core._assoc.call(null,this__5684__auto____$1,cljs.core._nth.call(null,entry__5685__auto__,(0)),cljs.core._nth.call(null,entry__5685__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5684__auto____$1,entry__5685__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__5713__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__5713__auto__,writer__5714__auto__){
return cljs.core._write.call(null,writer__5714__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__8987){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__8987),null,cljs.core.dissoc.call(null,G__8987,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args9103 = [];
var len__6123__auto___9108 = arguments.length;
var i__6124__auto___9109 = (0);
while(true){
if((i__6124__auto___9109 < len__6123__auto___9108)){
args9103.push((arguments[i__6124__auto___9109]));

var G__9110 = (i__6124__auto___9109 + (1));
i__6124__auto___9109 = G__9110;
continue;
} else {
}
break;
}

var G__9105 = args9103.length;
switch (G__9105) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9103.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,path){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),path);
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__9102_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__9102_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,om.next.get_query.call(null,component));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$)))){
return Object.create(class$.prototype);
} else {
return class$;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(selector,data,refs){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),selector)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,selector)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector)));
var ref = om.next.ident.call(null,class$,data);
return om$next$normalize_STAR_.call(null,cljs.core.get.call(null,selector,cljs.core.first.call(null,ref)),data,refs);
} else {
var q = cljs.core.seq.call(null,selector);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((q == null))){
var node = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.next.join_QMARK_.call(null,node))){
var vec__9119 = om.next.join_value.call(null,node);
var k = cljs.core.nth.call(null,vec__9119,(0),null);
var sel = cljs.core.nth.call(null,vec__9119,(1),null);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel)));
var v = cljs.core.get.call(null,data,k);
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel,v,refs);
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__9122 = cljs.core.next.call(null,q);
var G__9123 = cljs.core.assoc.call(null,ret,k,i);
q = G__9122;
ret = G__9123;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__9119,k,sel,class$,v,node){
return (function (p1__9114_SHARP_){
return om$next$normalize_STAR_.call(null,sel,p1__9114_SHARP_,refs);
});})(q,ret,vec__9119,k,sel,class$,v,node))
),v);
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__9119,k,sel,class$,v,node){
return (function (p1__9115_SHARP_){
return om.next.ident.call(null,class$,p1__9115_SHARP_);
});})(q,ret,xs,vec__9119,k,sel,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel)){
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,xs,is,vec__9119,k,sel,class$,v,node){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,xs,is,vec__9119,k,sel,class$,v,node))
);
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,xs,is,vec__9119,k,sel,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,xs,is,vec__9119,k,sel,class$,v,node){
return (function (ret__$1,p__9120){
var vec__9121 = p__9120;
var i = cljs.core.nth.call(null,vec__9121,(0),null);
var x = cljs.core.nth.call(null,vec__9121,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,xs,is,vec__9119,k,sel,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,xs,is,vec__9119,k,sel,class$,v,node))
);
}

var G__9124 = cljs.core.next.call(null,q);
var G__9125 = cljs.core.assoc.call(null,ret,k,is);
q = G__9124;
ret = G__9125;
continue;
} else {
if((v == null)){
var G__9126 = cljs.core.next.call(null,q);
var G__9127 = ret;
q = G__9126;
ret = G__9127;
continue;
} else {
var G__9128 = cljs.core.next.call(null,q);
var G__9129 = cljs.core.assoc.call(null,ret,k,v);
q = G__9128;
ret = G__9129;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.first.call(null,node):node);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__9130 = cljs.core.next.call(null,q);
var G__9131 = ret;
q = G__9130;
ret = G__9131;
continue;
} else {
var G__9132 = cljs.core.next.call(null,q);
var G__9133 = cljs.core.assoc.call(null,ret,k,v);
q = G__9132;
ret = G__9133;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-ref
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args9134 = [];
var len__6123__auto___9137 = arguments.length;
var i__6124__auto___9138 = (0);
while(true){
if((i__6124__auto___9138 < len__6123__auto___9137)){
args9134.push((arguments[i__6124__auto___9138]));

var G__9139 = (i__6124__auto___9138 + (1));
i__6124__auto___9138 = G__9139;
continue;
} else {
}
break;
}

var G__9136 = args9134.length;
switch (G__9136) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9134.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs);
if(merge_refs){
return cljs.core.merge.call(null,ret,cljs.core.deref.call(null,refs));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__9144 = cljs.core.group_by.call(null,(function (p1__9141_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__9141_SHARP_));
}),res);
var map__9144__$1 = ((((!((map__9144 == null)))?((((map__9144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9144):map__9144);
var refs = cljs.core.get.call(null,map__9144__$1,true);
var rest = cljs.core.get.call(null,map__9144__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a selector, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(selector,data,refs){
if(cljs.core.vector_QMARK_.call(null,data)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__9146_SHARP_){
return om$next$db__GT_tree.call(null,selector,cljs.core.get_in.call(null,refs,p1__9146_SHARP_),refs);
})),data);
} else {
var map__9150 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__9150__$1 = ((((!((map__9150 == null)))?((((map__9150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9150):map__9150);
var props = cljs.core.get.call(null,map__9150__$1,false);
var joins = cljs.core.get.call(null,map__9150__$1,true);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__9152 = om.next.join_value.call(null,join);
var key = cljs.core.nth.call(null,vec__9152,(0),null);
var sel = cljs.core.nth.call(null,vec__9152,(1),null);
var v = cljs.core.get.call(null,data,key);
if(!(om.next.ref_QMARK_.call(null,v))){
var G__9153 = cljs.core.next.call(null,joins__$1);
var G__9154 = cljs.core.assoc.call(null,ret,key,om$next$db__GT_tree.call(null,sel,v,refs));
joins__$1 = G__9153;
ret = G__9154;
continue;
} else {
var G__9155 = cljs.core.next.call(null,joins__$1);
var G__9156 = cljs.core.assoc.call(null,ret,key,om$next$db__GT_tree.call(null,sel,cljs.core.get_in.call(null,refs,v),refs));
joins__$1 = G__9155;
ret = G__9156;
continue;
}
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data,props),ret);
}
break;
}
}
});
om.next.queue_calls_BANG_ = (function om$next$queue_calls_BANG_(reconciler,res){
return om.next.protocols.queue_BANG_.call(null,reconciler,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__9165 = config;
var map__9165__$1 = ((((!((map__9165 == null)))?((((map__9165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9165):map__9165);
var merge_ref = cljs.core.get.call(null,map__9165__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403));
var indexer = cljs.core.get.call(null,map__9165__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var step = ((function (map__9165,map__9165__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__9170){
var vec__9172 = p__9170;
var ref = cljs.core.nth.call(null,vec__9172,(0),null);
var props = cljs.core.nth.call(null,vec__9172,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any.call(null,indexer,ref);
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props);
}
});})(map__9165,map__9165__$1,merge_ref,indexer))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,res){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
var vec__9175 = om.next.sift_refs.call(null,res);
var refs = cljs.core.nth.call(null,vec__9175,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__9175,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config),((function (config,root,vec__9175,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1){
return (function (p1__9173_SHARP_){
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs.call(null,p1__9173_SHARP_,config,refs),res_SINGLEQUOTE___$1);
});})(config,root,vec__9175,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1))
);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
om.next.queue_calls_BANG_.call(null,reconciler,delta);

return om.next.merge_novelty_BANG_.call(null,reconciler,delta);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5679__auto__,k__5680__auto__){
var self__ = this;
var this__5679__auto____$1 = this;
return cljs.core._lookup.call(null,this__5679__auto____$1,k__5680__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5681__auto__,k9183,else__5682__auto__){
var self__ = this;
var this__5681__auto____$1 = this;
var G__9185 = (((k9183 instanceof cljs.core.Keyword))?k9183.fqn:null);
switch (G__9185) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9183,else__5682__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__9181_SHARP_){
om.next.queue_calls_BANG_.call(null,this$__$1,p1__9181_SHARP_);

return om.next.merge_novelty_BANG_.call(null,this$__$1,p1__9181_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_.call(null,q)){
new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
} else {
var cs_9200 = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__9178_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__9178_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__9179_SHARP_,p2__9180_SHARP_){
return cljs.core.into.call(null,p1__9179_SHARP_,p2__9180_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__9186_9201 = self__.config;
var map__9186_9202__$1 = ((((!((map__9186_9201 == null)))?((((map__9186_9201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9186_9201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9186_9201):map__9186_9201);
var ui__GT_props_9203 = cljs.core.get.call(null,map__9186_9202__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env_9204 = om.next.to_env.call(null,self__.config);
var seq__9188_9205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_9200));
var chunk__9189_9206 = null;
var count__9190_9207 = (0);
var i__9191_9208 = (0);
while(true){
if((i__9191_9208 < count__9190_9207)){
var c_9209 = cljs.core._nth.call(null,chunk__9189_9206,i__9191_9208);
if(om.next.mounted_QMARK_.call(null,c_9209)){
var computed_9210 = om.next.get_computed.call(null,om.next.props.call(null,c_9209));
var next_props_9211 = om.next.computed.call(null,ui__GT_props_9203.call(null,env_9204,c_9209),computed_9210);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_9209,next_props_9211,om.next.get_state.call(null,c_9209)))){
if(!((next_props_9211 == null))){
om.next.update_component_BANG_.call(null,c_9209,next_props_9211);
} else {
c_9209.forceUpdate();
}
} else {
}
} else {
}

var G__9212 = seq__9188_9205;
var G__9213 = chunk__9189_9206;
var G__9214 = count__9190_9207;
var G__9215 = (i__9191_9208 + (1));
seq__9188_9205 = G__9212;
chunk__9189_9206 = G__9213;
count__9190_9207 = G__9214;
i__9191_9208 = G__9215;
continue;
} else {
var temp__4425__auto___9216 = cljs.core.seq.call(null,seq__9188_9205);
if(temp__4425__auto___9216){
var seq__9188_9217__$1 = temp__4425__auto___9216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9188_9217__$1)){
var c__5868__auto___9218 = cljs.core.chunk_first.call(null,seq__9188_9217__$1);
var G__9219 = cljs.core.chunk_rest.call(null,seq__9188_9217__$1);
var G__9220 = c__5868__auto___9218;
var G__9221 = cljs.core.count.call(null,c__5868__auto___9218);
var G__9222 = (0);
seq__9188_9205 = G__9219;
chunk__9189_9206 = G__9220;
count__9190_9207 = G__9221;
i__9191_9208 = G__9222;
continue;
} else {
var c_9223 = cljs.core.first.call(null,seq__9188_9217__$1);
if(om.next.mounted_QMARK_.call(null,c_9223)){
var computed_9224 = om.next.get_computed.call(null,om.next.props.call(null,c_9223));
var next_props_9225 = om.next.computed.call(null,ui__GT_props_9203.call(null,env_9204,c_9223),computed_9224);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_9223,next_props_9225,om.next.get_state.call(null,c_9223)))){
if(!((next_props_9225 == null))){
om.next.update_component_BANG_.call(null,c_9223,next_props_9225);
} else {
c_9223.forceUpdate();
}
} else {
}
} else {
}

var G__9226 = cljs.core.next.call(null,seq__9188_9217__$1);
var G__9227 = null;
var G__9228 = (0);
var G__9229 = (0);
seq__9188_9205 = G__9226;
chunk__9189_9206 = G__9227;
count__9190_9207 = G__9228;
i__9191_9208 = G__9229;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class))){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__5053__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__5053__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__5053__auto__;
}
})())){
var new_state_9230 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_9231 = cljs.core.meta.call(null,new_state_9230);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_9230,refs_9231));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);

om.next.protocols.queue_BANG_.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null));
} else {
}

var renderf = ((function (ret,rctor,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_9193 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_9194 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_9194;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_9193;
}});})(ret,rctor,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__5065__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__5065__auto__)){
return or__5065__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
var snds = om.next.gather_sends.call(null,env,sel,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,v)){
} else {
renderf.call(null,v);
}

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto__)){
var send = temp__4425__auto__;
return send.call(null,snds,((function (send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1){
return (function (p1__9176_SHARP_){
om.next.merge_novelty_BANG_.call(null,this$__$1,p1__9176_SHARP_);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel));
});})(send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1))
);
} else {
return null;
}
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target);

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (p1__9177_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__9177_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,this$__$1))
);

return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
});})(renderf,parsef,ret,rctor,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,this$__$1))
);

parsef.call(null);

return ret;
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root))){
return om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5693__auto__,writer__5694__auto__,opts__5695__auto__){
var self__ = this;
var this__5693__auto____$1 = this;
var pr_pair__5696__auto__ = ((function (this__5693__auto____$1){
return (function (keyval__5697__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5694__auto__,cljs.core.pr_writer,""," ","",opts__5695__auto__,keyval__5697__auto__);
});})(this__5693__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5694__auto__,pr_pair__5696__auto__,"#om.next.Reconciler{",", ","}",opts__5695__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9182){
var self__ = this;
var G__9182__$1 = this;
return (new cljs.core.RecordIter((0),G__9182__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5677__auto__){
var self__ = this;
var this__5677__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5673__auto__){
var self__ = this;
var this__5673__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5683__auto__){
var self__ = this;
var this__5683__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5674__auto__){
var self__ = this;
var this__5674__auto____$1 = this;
var h__5500__auto__ = self__.__hash;
if(!((h__5500__auto__ == null))){
return h__5500__auto__;
} else {
var h__5500__auto____$1 = cljs.core.hash_imap.call(null,this__5674__auto____$1);
self__.__hash = h__5500__auto____$1;

return h__5500__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5675__auto__,other__5676__auto__){
var self__ = this;
var this__5675__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5053__auto__ = other__5676__auto__;
if(cljs.core.truth_(and__5053__auto__)){
var and__5053__auto____$1 = (this__5675__auto____$1.constructor === other__5676__auto__.constructor);
if(and__5053__auto____$1){
return cljs.core.equiv_map.call(null,this__5675__auto____$1,other__5676__auto__);
} else {
return and__5053__auto____$1;
}
} else {
return and__5053__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5688__auto__,k__5689__auto__){
var self__ = this;
var this__5688__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5689__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5688__auto____$1),self__.__meta),k__5689__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5689__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5686__auto__,k__5687__auto__,G__9182){
var self__ = this;
var this__5686__auto____$1 = this;
var pred__9196 = cljs.core.keyword_identical_QMARK_;
var expr__9197 = k__5687__auto__;
if(cljs.core.truth_(pred__9196.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__9197))){
return (new om.next.Reconciler(G__9182,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9196.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__9197))){
return (new om.next.Reconciler(self__.config,G__9182,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5687__auto__,G__9182),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5691__auto__){
var self__ = this;
var this__5691__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5678__auto__,G__9182){
var self__ = this;
var this__5678__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__9182,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5684__auto__,entry__5685__auto__){
var self__ = this;
var this__5684__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5685__auto__)){
return cljs.core._assoc.call(null,this__5684__auto____$1,cljs.core._nth.call(null,entry__5685__auto__,(0)),cljs.core._nth.call(null,entry__5685__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5684__auto____$1,entry__5685__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__5713__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__5713__auto__,writer__5714__auto__){
return cljs.core._write.call(null,writer__5714__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__9184){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__9184),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__9184),null,cljs.core.dissoc.call(null,G__9184,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__9232,c){
var map__9235 = p__9232;
var map__9235__$1 = ((((!((map__9235 == null)))?((((map__9235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9235):map__9235);
var env = map__9235__$1;
var parser = cljs.core.get.call(null,map__9235__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var path = om.next.path.call(null,c);
var fq = om.next.full_query.call(null,c,path);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
if((om.next._STAR_logger_STAR_ == null)){
} else {
var dt_9237 = (e - s);
if(((16) < dt_9237)){
goog.log.warning(om.next._STAR_logger_STAR_,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_9237),cljs.core.str(" msecs")].join(''));
} else {
}
}

return cljs.core.get_in.call(null,ui,path);
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
/**
 * Construct a reconciler from a configuration map, the following options
 * are required:
 * 
 * :state        - the application state, must be IAtom.
 * :normalize    - whether the state should be normalized. If true it is assumed
 *                 all novelty introduced into the system will also need
 *                 normalization.
 * :parser       - the parser to be used
 * :send         - required only if the parser will return a non-empty value when
 *                 run against the supplied :remotes. send is a function of two
 *                 arguments, the map of remote expressions keyed by remote target
 *                 and a callback which should be invoked with the result from each
 *                 remote target. Note this means the callback can be invoked
 *                 multiple times to support parallel fetching and incremental
 *                 loading if desired.
 * :remotes      - a vector of keywords representing remote services which can
 *                 evaluate query expressions. Defaults to [:remote]
 * :root-render  - the root render function. Defaults to ReactDOM.render
 * :root-unmount - the root unmount function. Defuaults to
 *                 ReactDOM.unmountComponentAtNode
 */
om.next.reconciler = (function om$next$reconciler(p__9245){
var map__9249 = p__9245;
var map__9249__$1 = ((((!((map__9249 == null)))?((((map__9249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9249):map__9249);
var config = map__9249__$1;
var root_render = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__9249,map__9249__$1,config){
return (function (p1__9242_SHARP_,p2__9243_SHARP_){
return ReactDOM.render(p1__9242_SHARP_,p2__9243_SHARP_);
});})(map__9249,map__9249__$1,config))
);
var normalize = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var merge_sends = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__9249,map__9249__$1,config,root_render,normalize){
return (function (p1__9238_SHARP_,p2__9239_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__9238_SHARP_,p2__9239_SHARP_);
});})(map__9249,map__9249__$1,config,root_render,normalize))
);
var remotes = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var history = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var merge_ref = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),om.next.default_merge_ref);
var state = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui__GT_props = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer){
return (function (p1__9244_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__9244_SHARP_);
});})(map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send){
return (function (p1__9240_SHARP_,p2__9241_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.merge,p1__9240_SHARP_,p2__9241_SHARP_);
});})(map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send))
);
var shared = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__9249__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__9249,map__9249__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[merge_sends,remotes,om.next.cache.cache.call(null,history),merge_ref,state_SINGLEQUOTE_,parser,ui__GT_props,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__5065__auto__ = !(norm_QMARK_);
if(or__5065__auto__){
return or__5065__auto__;
} else {
return normalize;
}
})()]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});

//# sourceMappingURL=next.js.map