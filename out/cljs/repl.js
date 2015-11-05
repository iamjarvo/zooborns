// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8723_8737 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8724_8738 = null;
var count__8725_8739 = (0);
var i__8726_8740 = (0);
while(true){
if((i__8726_8740 < count__8725_8739)){
var f_8741 = cljs.core._nth.call(null,chunk__8724_8738,i__8726_8740);
cljs.core.println.call(null,"  ",f_8741);

var G__8742 = seq__8723_8737;
var G__8743 = chunk__8724_8738;
var G__8744 = count__8725_8739;
var G__8745 = (i__8726_8740 + (1));
seq__8723_8737 = G__8742;
chunk__8724_8738 = G__8743;
count__8725_8739 = G__8744;
i__8726_8740 = G__8745;
continue;
} else {
var temp__4425__auto___8746 = cljs.core.seq.call(null,seq__8723_8737);
if(temp__4425__auto___8746){
var seq__8723_8747__$1 = temp__4425__auto___8746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8723_8747__$1)){
var c__5868__auto___8748 = cljs.core.chunk_first.call(null,seq__8723_8747__$1);
var G__8749 = cljs.core.chunk_rest.call(null,seq__8723_8747__$1);
var G__8750 = c__5868__auto___8748;
var G__8751 = cljs.core.count.call(null,c__5868__auto___8748);
var G__8752 = (0);
seq__8723_8737 = G__8749;
chunk__8724_8738 = G__8750;
count__8725_8739 = G__8751;
i__8726_8740 = G__8752;
continue;
} else {
var f_8753 = cljs.core.first.call(null,seq__8723_8747__$1);
cljs.core.println.call(null,"  ",f_8753);

var G__8754 = cljs.core.next.call(null,seq__8723_8747__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8723_8737 = G__8754;
chunk__8724_8738 = G__8755;
count__8725_8739 = G__8756;
i__8726_8740 = G__8757;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8758 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5065__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5065__auto__)){
return or__5065__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8758);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8758)))?cljs.core.second.call(null,arglists_8758):arglists_8758));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8727 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8728 = null;
var count__8729 = (0);
var i__8730 = (0);
while(true){
if((i__8730 < count__8729)){
var vec__8731 = cljs.core._nth.call(null,chunk__8728,i__8730);
var name = cljs.core.nth.call(null,vec__8731,(0),null);
var map__8732 = cljs.core.nth.call(null,vec__8731,(1),null);
var map__8732__$1 = ((((!((map__8732 == null)))?((((map__8732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8732):map__8732);
var doc = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8759 = seq__8727;
var G__8760 = chunk__8728;
var G__8761 = count__8729;
var G__8762 = (i__8730 + (1));
seq__8727 = G__8759;
chunk__8728 = G__8760;
count__8729 = G__8761;
i__8730 = G__8762;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8727);
if(temp__4425__auto__){
var seq__8727__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8727__$1)){
var c__5868__auto__ = cljs.core.chunk_first.call(null,seq__8727__$1);
var G__8763 = cljs.core.chunk_rest.call(null,seq__8727__$1);
var G__8764 = c__5868__auto__;
var G__8765 = cljs.core.count.call(null,c__5868__auto__);
var G__8766 = (0);
seq__8727 = G__8763;
chunk__8728 = G__8764;
count__8729 = G__8765;
i__8730 = G__8766;
continue;
} else {
var vec__8734 = cljs.core.first.call(null,seq__8727__$1);
var name = cljs.core.nth.call(null,vec__8734,(0),null);
var map__8735 = cljs.core.nth.call(null,vec__8734,(1),null);
var map__8735__$1 = ((((!((map__8735 == null)))?((((map__8735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8735):map__8735);
var doc = cljs.core.get.call(null,map__8735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8767 = cljs.core.next.call(null,seq__8727__$1);
var G__8768 = null;
var G__8769 = (0);
var G__8770 = (0);
seq__8727 = G__8767;
chunk__8728 = G__8768;
count__8729 = G__8769;
i__8730 = G__8770;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map