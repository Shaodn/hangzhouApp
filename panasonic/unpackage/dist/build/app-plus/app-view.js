var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'name']]],[[2,'!'],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'type']]]],[[2,'!'],[[6],[[7],[3,'nodes']],[3,'length']]]])
Z([[7],[3,'showAnimation']])
Z([3,'__l'])
Z([3,'_contain'])
Z([[7],[3,'imgMode']])
Z([[7],[3,'loadVideo']])
Z([[2,'?:'],[[6],[[7],[3,'nodes']],[3,'length']],[[7],[3,'nodes']],[[2,'?:'],[[2,'||'],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'name']],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'type']]],[[7],[3,'html']],[[4],[[5]]]]])
Z([[2,'+'],[[2,'+'],[1,'display:block;'],[[2,'?:'],[[7],[3,'selectable']],[1,'user-select:text;-webkit-user-select:text;'],[1,'']]],[[2,'?:'],[[7],[3,'showWithAnimation']],[1,'opacity:0'],[1,'']]])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'display:inherit;white-space:inherit;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'nodes']])
Z(z[1])
Z([[12],[[6],[[7],[3,'handler']],[3,'notContinue']],[[5],[[7],[3,'item']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'img']])
Z([3,'__e'])
Z([3,'img'])
Z([[6],[[7],[3,'item']],[3,'attrs']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'previewEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']])
Z([[12],[[6],[[7],[3,'handler']],[3,'setImgStyle']],[[5],[[5],[[5],[[7],[3,'item']]],[[7],[3,'imgMode']]],[[7],[3,'imgLoad']]]])
Z([[2,'+'],[1,'text-indent:0;'],[[12],[[6],[[7],[3,'handler']],[3,'getStyle']],[[5],[[5],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'style']]],[1,'inline-block']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'decode']]])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z([[4],[[5],[[7],[3,'item']]]])
Z([3,'display:inline-block;'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'br']])
Z([3,'\n'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'video']])
Z([[2,'&&'],[[2,'||'],[[2,'!'],[[7],[3,'loadVideo']]],[[6],[[7],[3,'item']],[3,'lazyLoad']]],[[2,'!'],[[6],[[6],[[7],[3,'controls']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']]],[3,'play']]]])
Z(z[7])
Z([[4],[[5],[[2,'+'],[1,'_video '],[[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']],[1,'']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_loadVideo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'style']])
Z([[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'autoplay']],[[2,'&&'],[[6],[[7],[3,'controls']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']]],[[6],[[6],[[7],[3,'controls']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']]],[3,'play']]]])
Z(z[7])
Z(z[7])
Z([[4],[[5],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']]]])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'controls']])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'playEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'videoError']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'source']])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'loop']])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'muted']])
Z([[2,'?:'],[[6],[[7],[3,'controls']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']]],[[6],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'source']],[[6],[[6],[[7],[3,'controls']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'id']]],[3,'index']]],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'src']]])
Z(z[27])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[1,'unit-id']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'audio']])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'author']])
Z(z[7])
Z(z[31])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'audioError']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[34])
Z(z[11])
Z(z[36])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'name']])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'poster']])
Z(z[38])
Z(z[27])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'a']])
Z(z[7])
Z([[4],[[5],[[2,'+'],[1,'_a '],[[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']],[1,'']]]]])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'navigator-hover'])
Z([1,25])
Z([1,300])
Z(z[27])
Z([3,'__l'])
Z([3,'vue-ref-in-for'])
Z([3,'nodes'])
Z([[7],[3,'imgMode']])
Z([[7],[3,'loadVideo']])
Z([[6],[[7],[3,'item']],[3,'children']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'name']]]])
Z(z[11])
Z([[12],[[6],[[7],[3,'handler']],[3,'setStyle']],[[5],[[7],[3,'item']]]])
Z([[2,'+'],[1,''],[[12],[[6],[[7],[3,'handler']],[3,'getStyle']],[[5],[[5],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'style']]],[1,'block']]]])
Z(z[63])
Z([[4],[[5],[[2,'+'],[[2,'+'],[[2,'+'],[1,'_'],[[6],[[7],[3,'item']],[3,'name']]],[1,' ']],[[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']],[1,'']]]]])
Z(z[11])
Z(z[66])
Z(z[67])
Z(z[68])
Z(z[27])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'product-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotoproduct']]]]]]]]])
Z([3,'image-view'])
Z([3,'uni-product-image'])
Z([3,'aspectFit'])
Z([[2,'+'],[[2,'+'],[1,'../../static/productimg/'],[[7],[3,'producturl']]],[1,'_Gallery_1.jpg']])
Z([3,'uni-product-title'])
Z([a,[[7],[3,'CatchPhrase']]])
Z([3,'_br'])
Z([a,[[7],[3,'productname']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[7],[3,'scrollTop']],[1,100]])
Z([3,'__e'])
Z([3,'returnTop'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'returnTop']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'aspectFit'])
Z([3,'../../static/fanhuidingbu.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-load-more'])
Z([3,'uni-load-more__img'])
Z([[2,'!'],[[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[7],[3,'showIcon']]]])
Z([3,'load1 load'])
Z([3,'uni-load-view_wrapper'])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'color']]],[1,';']])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'load2 load'])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'load3 load'])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'uni-load-more__text'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'more']],[[6],[[7],[3,'contentText']],[3,'contentdown']],[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[6],[[7],[3,'contentText']],[3,'contentrefresh']],[[6],[[7],[3,'contentText']],[3,'contentnomore']]]]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'page-body'])
Z([3,'nav-left'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'height']]],[1,'px;']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'menulist']])
Z([3,'lv1Id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'nav-left-item']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'categoryActive']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'categoryClickMain']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'menulist']],[1,'lv1Id']],[[6],[[7],[3,'item']],[3,'lv1Id']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'lv1Name']]],[1,'']]])
Z(z[8])
Z([3,'nav-right'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollTop']])
Z(z[3])
Z([3,'nav-right-list'])
Z(z[4])
Z(z[5])
Z([[6],[[6],[[7],[3,'menulist']],[[7],[3,'categoryActive']]],[3,'content']])
Z(z[4])
Z(z[8])
Z([3,'nav-right-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'golist']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[2,'+'],[[2,'+'],[1,'menulist.'],[[7],[3,'categoryActive']]],[1,'.content']]],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[1,'first'],[1,'']])
Z([[2,'+'],[[2,'+'],[1,'../../static/menu-images/'],[[6],[[7],[3,'item']],[3,'lv2Id']]],[1,'.png']])
Z([a,[[6],[[7],[3,'item']],[3,'lv2Name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'home-banner'])
Z([3,'true'])
Z(z[2])
Z([3,'swiper-home'])
Z([3,'1000'])
Z([3,'3000'])
Z([3,'swiper-item'])
Z([3,'scaleToFill'])
Z([3,'../../static/home-kv.jpg'])
Z(z[7])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotopromotion']],[[4],[[5],[1,'../../static/promotion/content1.jpg']]]]]]]]]]])
Z(z[8])
Z([3,'../../static/app_home-kv02.jpg'])
Z([3,'home-search'])
Z(z[11])
Z([3,'search-container'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotosearch']]]]]]]]])
Z([3,'uni-icon uni-icon-search'])
Z([3,'search-text'])
Z([3,'搜索产品'])
Z([3,'swiper'])
Z(z[5])
Z([3,'#016b69'])
Z([3,'#999999'])
Z(z[2])
Z(z[7])
Z(z[11])
Z([3,'swiper-cate'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,0]]]]]]]]]]])
Z([3,'widthFix'])
Z([3,'../../static/home/ref.png'])
Z([3,'冰箱'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,1]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/weiyu.png'])
Z([3,'家装卫浴'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,2]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/dadian.png'])
Z([3,'厨房大电'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,3]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/xiaodian.png'])
Z([3,'厨房小电'])
Z(z[7])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,4]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/health.png'])
Z([3,'个护健康'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,5]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/shenghuo.png'])
Z([3,'生活电器'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,6]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/homeav.png'])
Z([3,'视听影音'])
Z(z[11])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotocate']],[[4],[[5],[1,7]]]]]]]]]]])
Z(z[31])
Z([3,'../../static/home/cameras-camcorders.png'])
Z([3,'摄影摄像'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'productpage'])
Z([3,'overview'])
Z([[2,'>'],[[6],[[7],[3,'productdata']],[3,'gallery']],[1,1]])
Z([3,'true'])
Z([3,'swiper'])
Z([3,'1000'])
Z([3,'#016b69'])
Z([3,'#999999'])
Z(z[3])
Z([3,'10000'])
Z([3,'__i0__'])
Z([3,'index'])
Z([[6],[[7],[3,'productdata']],[3,'gallery']])
Z([3,'*this'])
Z([3,'swiper-item'])
Z([3,'overviewgallery'])
Z([3,'aspectFill'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'../../static/productimg/'],[[6],[[7],[3,'productdata']],[3,'pid']]],[1,'_Gallery_']],[[2,'+'],[[7],[3,'index']],[1,1]]],[1,'.jpg']])
Z([[2,'=='],[[6],[[7],[3,'productdata']],[3,'gallery']],[1,1]])
Z([3,'productimg'])
Z(z[16])
Z([[2,'+'],[[2,'+'],[1,'../../static/productimg/'],[[6],[[7],[3,'productdata']],[3,'pid']]],[1,'_Gallery_1.jpg']])
Z([3,'productname'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'productdata']],[3,'catch']]],[[6],[[7],[3,'productdata']],[3,'pname']]],[1,'']]])
Z([3,'feature'])
Z([[2,'>'],[[6],[[7],[3,'productdata']],[3,'feature']],[1,1]])
Z([3,'galleryfeature'])
Z([3,'__e'])
Z(z[4])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'curIndex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'duration']])
Z(z[7])
Z([3,'__i1__'])
Z([3,'indexf'])
Z([[6],[[7],[3,'productdata']],[3,'feature']])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'../../static/productimg/'],[[6],[[7],[3,'productdata']],[3,'pid']]],[1,'_feature_']],[[2,'+'],[[7],[3,'indexf']],[1,1]]],[1,'.jpg']])
Z([3,'swiper-dots'])
Z([3,'num'])
Z([a,[[2,'+'],[[7],[3,'current']],[1,1]]])
Z([3,'sign'])
Z([3,'/'])
Z(z[42])
Z([a,[[6],[[7],[3,'productdata']],[3,'feature']]])
Z([3,'sliderbutton'])
Z(z[27])
Z([3,'uni-icon uni-icon-arrowleft'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'prev']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[27])
Z([3,'uni-icon uni-icon-arrowright'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'next']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[19])
Z(z[16])
Z([[2,'+'],[[2,'+'],[1,'../../static/productimg/'],[[6],[[7],[3,'productdata']],[3,'pid']]],[1,'_feature_1.jpg']])
Z([[2,'!='],[[6],[[7],[3,'productdata']],[3,'spectable']],[1,'no-spec']])
Z([3,'spectable'])
Z([3,'title'])
Z([3,'产品参数'])
Z([3,'__l'])
Z([3,'specttable'])
Z([[6],[[7],[3,'productdata']],[3,'spectable']])
Z([[7],[3,'tagStyle']])
Z([3,'1'])
Z([3,'related'])
Z(z[60])
Z([3,'相关联产品'])
Z([3,'product-list'])
Z([3,'indexr'])
Z([3,'product'])
Z([[7],[3,'productlist']])
Z(z[66])
Z([[2,'<'],[[7],[3,'indexr']],[[7],[3,'loadmore']]])
Z([[6],[[6],[[7],[3,'product']],[1,0]],[3,'catch']])
Z(z[62])
Z([[6],[[7],[3,'proInfo']],[3,'subcategory']])
Z([[6],[[7],[3,'product']],[1,1]])
Z([[6],[[6],[[7],[3,'product']],[1,0]],[3,'pname']])
Z([[6],[[6],[[7],[3,'product']],[1,0]],[3,'pid']])
Z([[2,'+'],[1,'2-'],[[7],[3,'indexr']]])
Z([[7],[3,'loading']])
Z(z[62])
Z([[7],[3,'loadingcolor']])
Z([[7],[3,'contentText']])
Z([[7],[3,'status']])
Z([3,'3'])
Z(z[62])
Z([[7],[3,'scrollTop']])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'categoryTitle']]],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'productlist']],[3,'length']],[1,0]])
Z([3,'hasdata'])
Z([3,'product-list'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productlist']])
Z(z[5])
Z([[2,'<'],[[7],[3,'index']],[[7],[3,'loadmore']]])
Z([[6],[[7],[3,'product']],[3,'catch']])
Z([3,'__l'])
Z([[7],[3,'categoryid']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'product']],[3,'pname']])
Z([[6],[[7],[3,'product']],[3,'pid']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[7],[3,'loading']])
Z(z[11])
Z([[7],[3,'loadingcolor']])
Z([[7],[3,'contentText']])
Z([[7],[3,'status']])
Z([3,'2'])
Z([3,'no-data'])
Z([3,'暂无产品，敬请期待。'])
Z(z[11])
Z([[7],[3,'scrollTop']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([3,'conImage'])
Z([3,'widthFix'])
Z([[7],[3,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'CuWrap'])
Z([3,'index'])
Z([3,'CuItem'])
Z([[7],[3,'content']])
Z(z[1])
Z(z[2])
Z([3,'none'])
Z([[2,'+'],[1,'../promotion/promotion?cuxiaoid\x3d'],[[6],[[7],[3,'CuItem']],[3,'content']]])
Z([3,'CuItemImage'])
Z([[6],[[7],[3,'CuItem']],[3,'image']])
Z([3,'CuItemTitle'])
Z([a,[[6],[[7],[3,'CuItem']],[3,'title']]])
Z([3,'CuItemDate'])
Z([a,[[6],[[7],[3,'CuItem']],[3,'date']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isHistory']])
Z([3,'history-box'])
Z([3,'history-title'])
Z([3,'搜索历史'])
Z([[2,'>'],[[6],[[7],[3,'historyList']],[3,'length']],[1,0]])
Z([3,'__e'])
Z([3,'uni-icon uni-icon-trash'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearSearch']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'history-content'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'historyList']])
Z(z[9])
Z(z[5])
Z([3,'history-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'searchhistory']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'historyList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'item']]],[1,'']]])
Z(z[1])
Z(z[2])
Z([a,[[2,'+'],[[2,'+'],[1,'搜索到'],[[6],[[7],[3,'products']],[3,'length']]],[1,'个产品']]])
Z([[2,'>'],[[6],[[7],[3,'products']],[3,'length']],[1,0]])
Z([3,'hasdata'])
Z([3,'product-list'])
Z(z[9])
Z([3,'product'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[9])
Z([[2,'<'],[[7],[3,'index']],[[7],[3,'loadmore']]])
Z([[6],[[6],[[7],[3,'product']],[3,'$orig']],[3,'catch']])
Z([3,'__l'])
Z([[6],[[6],[[7],[3,'product']],[3,'$orig']],[3,'level2id']])
Z([[6],[[7],[3,'product']],[3,'m0']])
Z([[6],[[6],[[7],[3,'product']],[3,'$orig']],[3,'productname']])
Z([[6],[[6],[[7],[3,'product']],[3,'$orig']],[3,'pid']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[7],[3,'loading']])
Z(z[29])
Z([[7],[3,'loadingcolor']])
Z([[7],[3,'contentText']])
Z([[7],[3,'status']])
Z([3,'2'])
Z([3,'no-data'])
Z([3,'没有搜索到相关内容'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'menu'])
Z([3,'index'])
Z([3,'menuItem'])
Z([[7],[3,'menu']])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'menuItem']],[[2,'?:'],[[2,'=='],[[7],[3,'rindex']],[[7],[3,'index']]],[1,'menuItemGreen'],[1,'menuItemBlack']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'choose']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[7],[3,'menuItem']]])
Z([3,'buyContentWrap'])
Z([3,'buyIndex'])
Z([3,'buyconItem'])
Z([[7],[3,'buyContent']])
Z(z[10])
Z(z[5])
Z([3,'BuyContent'])
Z([[6],[[7],[3,'buyconItem']],[3,'tip']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'gotoApp']],[[4],[[5],[[5],[1,'$event']],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'buyContent']],[1,'']],[[7],[3,'buyIndex']]],[1,'schemeLink']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'buyconItem']],[3,'link']])
Z([3,'contentLeft'])
Z([3,'ConName'])
Z([a,[[6],[[7],[3,'buyconItem']],[3,'name']]])
Z([3,'ConLink'])
Z([a,[[6],[[7],[3,'buyconItem']],[3,'showlink']]])
Z([3,'icon'])
Z([3,'../../static/buyImage/icon.gif'])
Z([3,'contentRight'])
Z([3,'buyImage'])
Z([[6],[[7],[3,'buyconItem']],[3,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./components/jyf-Parser/handler.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/jyf-Parser/handler.wxs'] = nv_require("p_./components/jyf-Parser/handler.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_Tags = ({nv_abbr:true,nv_b:true,nv_big:true,nv_code:true,nv_del:true,nv_em:true,nv_font:true,nv_i:true,nv_ins:true,nv_label:true,nv_mark:true,nv_q:true,nv_s:true,nv_small:true,nv_span:true,nv_strong:true,nv_u:true,});nv_module.nv_exports = ({nv_getStyle:(function (nv_style,nv_display){nv_res = "";var nv_reg = nv_getRegExp("float[^;]+(?![\x5cs\x5cS]*?float)","i");if (nv_reg.nv_test(nv_style))nv_res += nv_reg.nv_exec(nv_style)[(0)];;nv_reg = nv_getRegExp("margin[^;]+","gi");if (nv_reg.nv_test(nv_style))nv_res += (';' + nv_style.nv_match(nv_reg).nv_join(';'));;nv_reg = nv_getRegExp("display\x5cs*:\x5cs*([^;]*)(?![\x5cs\x5cS]*?display)","i");if (nv_reg.nv_test(nv_style) && nv_reg.nv_exec(nv_style)[(1)] != "flex")nv_res += (';' + nv_reg.nv_exec(nv_style)[(0)]); else nv_res += (';display:' + nv_display);nv_reg = nv_getRegExp("flex[^;]*:[^;]+","ig");if (nv_reg.nv_test(nv_style))nv_res += (';' + nv_style.nv_match(nv_reg).nv_join(';'));;nv_reg = nv_getRegExp("[^;\x5cs]*width[^;]+","ig");if (nv_reg.nv_test(nv_style))nv_res += (';' + nv_style.nv_match(nv_reg).nv_join(';'));;return(nv_res)}),nv_setImgStyle:(function (nv_item,nv_imgMode,nv_imgLoad){if (nv_imgMode == "widthFix")nv_item.nv_attrs.nv_style = (nv_item.nv_attrs.nv_style || '') + ";height:auto !important";;if (nv_item.nv_attrs.nv_style)nv_item.nv_attrs.nv_style = nv_item.nv_attrs.nv_style.nv_replace(nv_getRegExp("width[^;]*?%","gi"),"width:100%").nv_replace(nv_getRegExp('margin[^;]+',"gi"),"");;if (!nv_imgLoad){delete(nv_item.nv_attrs.nv_src);nv_item.nv_attrs.nv_style += ";width:5px !important;height:5px !important"};return([nv_item])}),nv_setStyle:(function (nv_item){if (nv_item.nv_attrs.nv_style)nv_item.nv_attrs.nv_style = nv_item.nv_attrs.nv_style.nv_replace(nv_getRegExp("width[^;]*?%","gi"),"width:100%").nv_replace(nv_getRegExp('margin[^;]+',"gi"),"");;return([nv_item])}),nv_notContinue:(function (nv_item){if (nv_item.nv_name == 'a')return(true);;return(!(nv_item[("nv_"+"continue")] || nv_Tags[((nt_4=(nv_item.nv_name),null==nt_4?undefined:'number'=== typeof nt_4?nt_4:"nv_"+nt_4))]))}),});return nv_module.nv_exports;}

f_['./components/jyf-Parser/trees.wxml']={};
f_['./components/jyf-Parser/trees.wxml']['handler'] =f_['./components/jyf-Parser/handler.wxs'] || nv_require("p_./components/jyf-Parser/handler.wxs");
f_['./components/jyf-Parser/trees.wxml']['handler']();

var x=['./components/jyf-Parser/index.wxml','./components/jyf-Parser/trees.wxml','./components/product-item/product-item.wxml','./components/scrollTopCom/scrollTopCom.wxml','./components/uni-load-more/uni-load-more.wxml','./pages/category/category.wxml','./pages/main/main.wxml','./pages/product/product.wxml','./pages/productlist/productlist.wxml','./pages/promotion/promotion.wxml','./pages/promotionlist/promotionlist.wxml','./pages/search/search.wxml','./pages/wheretobuy/wheretobuy.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_v()
_(oB,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_n('slot')
_(xC,oD)
}
var fE=_mz(z,'trees',['animation',1,'bind:__l',1,'class',2,'imgMode',3,'loadVideo',4,'nodes',5,'style',6,'vueId',7],[],e,s,gg)
_(oB,fE)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hG=_n('view')
_rz(z,hG,'style',0,e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
if(_oz(z,5,lK,oJ,gg)){eN.wxVkey=1
var bO=_v()
_(eN,bO)
if(_oz(z,6,lK,oJ,gg)){bO.wxVkey=1
var oP=_mz(z,'rich-text',['bindtap',7,'class',1,'data-attrs',2,'data-event-opts',3,'id',4,'nodes',5,'style',6],[],lK,oJ,gg)
_(bO,oP)
}
else{bO.wxVkey=2
var xQ=_v()
_(bO,xQ)
if(_oz(z,14,lK,oJ,gg)){xQ.wxVkey=1
var oR=_v()
_(xQ,oR)
if(_oz(z,15,lK,oJ,gg)){oR.wxVkey=1
var fS=_n('text')
fS.attr['decode']=true
var cT=_oz(z,16,lK,oJ,gg)
_(fS,cT)
_(oR,fS)
}
else{oR.wxVkey=2
var hU=_mz(z,'rich-text',['nodes',17,'style',1],[],lK,oJ,gg)
_(oR,hU)
}
oR.wxXCkey=1
}
else{xQ.wxVkey=2
var oV=_v()
_(xQ,oV)
if(_oz(z,19,lK,oJ,gg)){oV.wxVkey=1
var cW=_n('text')
var oX=_oz(z,20,lK,oJ,gg)
_(cW,oX)
_(oV,cW)
}
else{oV.wxVkey=2
var lY=_v()
_(oV,lY)
if(_oz(z,21,lK,oJ,gg)){lY.wxVkey=1
var aZ=_v()
_(lY,aZ)
if(_oz(z,22,lK,oJ,gg)){aZ.wxVkey=1
var t1=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2,'id',3,'style',4],[],lK,oJ,gg)
_(aZ,t1)
}
else{aZ.wxVkey=2
var e2=_mz(z,'video',['autoplay',28,'binderror',1,'bindplay',2,'class',3,'controls',4,'data-event-opts',5,'data-source',6,'id',7,'loop',8,'muted',9,'src',10,'style',11,'unitId',12],[],lK,oJ,gg)
_(aZ,e2)
}
aZ.wxXCkey=1
}
else{lY.wxVkey=2
var b3=_v()
_(lY,b3)
if(_oz(z,41,lK,oJ,gg)){b3.wxVkey=1
var o4=_mz(z,'audio',['author',42,'binderror',1,'class',2,'controls',3,'data-event-opts',4,'data-source',5,'id',6,'loop',7,'name',8,'poster',9,'src',10,'style',11],[],lK,oJ,gg)
_(b3,o4)
}
else{b3.wxVkey=2
var x5=_v()
_(b3,x5)
if(_oz(z,54,lK,oJ,gg)){x5.wxVkey=1
var o6=_mz(z,'view',['bindtap',55,'class',1,'data-attrs',2,'data-event-opts',3,'hoverClass',4,'hoverStartTime',5,'hoverStayTime',6,'style',7],[],lK,oJ,gg)
var f7=_mz(z,'trees',['bind:__l',63,'class',1,'data-ref',2,'imgMode',3,'loadVideo',4,'nodes',5,'vueId',6],[],lK,oJ,gg)
_(o6,f7)
_(x5,o6)
}
else{x5.wxVkey=2
var c8=_mz(z,'rich-text',['class',70,'id',1,'nodes',2,'style',3],[],lK,oJ,gg)
_(x5,c8)
}
x5.wxXCkey=1
x5.wxXCkey=3
}
b3.wxXCkey=1
b3.wxXCkey=3
}
lY.wxXCkey=1
lY.wxXCkey=3
}
oV.wxXCkey=1
oV.wxXCkey=3
}
xQ.wxXCkey=1
xQ.wxXCkey=3
}
bO.wxXCkey=1
bO.wxXCkey=3
}
else{eN.wxVkey=2
var h9=_mz(z,'trees',['bind:__l',74,'class',1,'id',2,'imgMode',3,'loadVideo',4,'nodes',5,'style',6,'vueId',7],[],lK,oJ,gg)
_(eN,h9)
}
eN.wxXCkey=1
eN.wxXCkey=3
eN.wxXCkey=3
return aL
}
oH.wxXCkey=4
_2z(z,3,cI,e,s,gg,oH,'item','index','index')
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cAB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var oBB=_n('view')
_rz(z,oBB,'class',3,e,s,gg)
var lCB=_mz(z,'image',['class',4,'mode',1,'src',2],[],e,s,gg)
_(oBB,lCB)
_(cAB,oBB)
var aDB=_n('view')
_rz(z,aDB,'class',7,e,s,gg)
var tEB=_oz(z,8,e,s,gg)
_(aDB,tEB)
var eFB=_n('view')
_rz(z,eFB,'class',9,e,s,gg)
_(aDB,eFB)
var bGB=_oz(z,10,e,s,gg)
_(aDB,bGB)
_(cAB,aDB)
_(r,cAB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xIB=_n('view')
var oJB=_v()
_(xIB,oJB)
if(_oz(z,0,e,s,gg)){oJB.wxVkey=1
var fKB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cLB=_mz(z,'image',['mode',4,'src',1],[],e,s,gg)
_(fKB,cLB)
_(oJB,fKB)
}
oJB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oNB=_n('view')
_rz(z,oNB,'class',0,e,s,gg)
var cOB=_mz(z,'view',['class',1,'hidden',1],[],e,s,gg)
var oPB=_n('view')
_rz(z,oPB,'class',3,e,s,gg)
var lQB=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
_(oPB,lQB)
var aRB=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
_(oPB,aRB)
var tSB=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
_(oPB,tSB)
var eTB=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
_(oPB,eTB)
_(cOB,oPB)
var bUB=_n('view')
_rz(z,bUB,'class',12,e,s,gg)
var oVB=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
_(bUB,xWB)
var oXB=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
_(bUB,oXB)
var fYB=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
_(bUB,fYB)
_(cOB,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',21,e,s,gg)
var h1B=_mz(z,'view',['class',22,'style',1],[],e,s,gg)
_(cZB,h1B)
var o2B=_mz(z,'view',['class',24,'style',1],[],e,s,gg)
_(cZB,o2B)
var c3B=_mz(z,'view',['class',26,'style',1],[],e,s,gg)
_(cZB,c3B)
var o4B=_mz(z,'view',['class',28,'style',1],[],e,s,gg)
_(cZB,o4B)
_(cOB,cZB)
_(oNB,cOB)
var l5B=_mz(z,'text',['class',30,'style',1],[],e,s,gg)
var a6B=_oz(z,32,e,s,gg)
_(l5B,a6B)
_(oNB,l5B)
_(r,oNB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',1,e,s,gg)
var o0B=_mz(z,'scroll-view',['scrollY',-1,'class',2,'style',1],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],cDC,fCC,gg)
var oHC=_oz(z,11,cDC,fCC,gg)
_(cGC,oHC)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=2
_2z(z,6,oBC,e,s,gg,xAC,'item','index','lv1Id')
_(b9B,o0B)
var lIC=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',12,'class',1,'data-event-opts',2,'scrollTop',3,'style',4],[],e,s,gg)
var aJC=_n('view')
_rz(z,aJC,'class',17,e,s,gg)
var tKC=_v()
_(aJC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2,'id',3],[],oNC,bMC,gg)
var cRC=_n('image')
_rz(z,cRC,'src',26,oNC,bMC,gg)
_(fQC,cRC)
var hSC=_n('view')
var oTC=_oz(z,27,oNC,bMC,gg)
_(hSC,oTC)
_(fQC,hSC)
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=2
_2z(z,20,eLC,e,s,gg,tKC,'item','index','index')
_(lIC,aJC)
_(b9B,lIC)
_(e8B,b9B)
_(r,e8B)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oVC=_n('view')
_rz(z,oVC,'class',0,e,s,gg)
var lWC=_n('view')
_rz(z,lWC,'class',1,e,s,gg)
var aXC=_mz(z,'swiper',['autoplay',2,'circular',1,'class',2,'duration',3,'interval',4],[],e,s,gg)
var tYC=_n('swiper-item')
var eZC=_n('view')
_rz(z,eZC,'class',7,e,s,gg)
var b1C=_mz(z,'image',['mode',8,'src',1],[],e,s,gg)
_(eZC,b1C)
_(tYC,eZC)
_(aXC,tYC)
var o2C=_n('swiper-item')
var x3C=_n('view')
_rz(z,x3C,'class',10,e,s,gg)
var o4C=_mz(z,'image',['bindtap',11,'data-event-opts',1,'mode',2,'src',3],[],e,s,gg)
_(x3C,o4C)
_(o2C,x3C)
_(aXC,o2C)
_(lWC,aXC)
_(oVC,lWC)
var f5C=_n('view')
_rz(z,f5C,'class',15,e,s,gg)
var c6C=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var h7C=_n('text')
_rz(z,h7C,'class',19,e,s,gg)
_(c6C,h7C)
var o8C=_n('text')
_rz(z,o8C,'class',20,e,s,gg)
var c9C=_oz(z,21,e,s,gg)
_(o8C,c9C)
_(c6C,o8C)
_(f5C,c6C)
_(oVC,f5C)
var o0C=_mz(z,'swiper',['class',22,'duration',1,'indicatorActiveColor',2,'indicatorColor',3,'indicatorDots',4],[],e,s,gg)
var lAD=_n('swiper-item')
var aBD=_n('view')
_rz(z,aBD,'class',27,e,s,gg)
var tCD=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
var eDD=_mz(z,'image',['mode',31,'src',1],[],e,s,gg)
_(tCD,eDD)
var bED=_n('text')
var oFD=_oz(z,33,e,s,gg)
_(bED,oFD)
_(tCD,bED)
_(aBD,tCD)
var xGD=_mz(z,'view',['bindtap',34,'class',1,'data-event-opts',2],[],e,s,gg)
var oHD=_mz(z,'image',['mode',37,'src',1],[],e,s,gg)
_(xGD,oHD)
var fID=_n('text')
var cJD=_oz(z,39,e,s,gg)
_(fID,cJD)
_(xGD,fID)
_(aBD,xGD)
var hKD=_mz(z,'view',['bindtap',40,'class',1,'data-event-opts',2],[],e,s,gg)
var oLD=_mz(z,'image',['mode',43,'src',1],[],e,s,gg)
_(hKD,oLD)
var cMD=_n('text')
var oND=_oz(z,45,e,s,gg)
_(cMD,oND)
_(hKD,cMD)
_(aBD,hKD)
var lOD=_mz(z,'view',['bindtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
var aPD=_mz(z,'image',['mode',49,'src',1],[],e,s,gg)
_(lOD,aPD)
var tQD=_n('text')
var eRD=_oz(z,51,e,s,gg)
_(tQD,eRD)
_(lOD,tQD)
_(aBD,lOD)
_(lAD,aBD)
_(o0C,lAD)
var bSD=_n('swiper-item')
var oTD=_n('view')
_rz(z,oTD,'class',52,e,s,gg)
var xUD=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var oVD=_mz(z,'image',['mode',56,'src',1],[],e,s,gg)
_(xUD,oVD)
var fWD=_n('text')
var cXD=_oz(z,58,e,s,gg)
_(fWD,cXD)
_(xUD,fWD)
_(oTD,xUD)
var hYD=_mz(z,'view',['bindtap',59,'class',1,'data-event-opts',2],[],e,s,gg)
var oZD=_mz(z,'image',['mode',62,'src',1],[],e,s,gg)
_(hYD,oZD)
var c1D=_n('text')
var o2D=_oz(z,64,e,s,gg)
_(c1D,o2D)
_(hYD,c1D)
_(oTD,hYD)
var l3D=_mz(z,'view',['bindtap',65,'class',1,'data-event-opts',2],[],e,s,gg)
var a4D=_mz(z,'image',['mode',68,'src',1],[],e,s,gg)
_(l3D,a4D)
var t5D=_n('text')
var e6D=_oz(z,70,e,s,gg)
_(t5D,e6D)
_(l3D,t5D)
_(oTD,l3D)
var b7D=_mz(z,'view',['bindtap',71,'class',1,'data-event-opts',2],[],e,s,gg)
var o8D=_mz(z,'image',['mode',74,'src',1],[],e,s,gg)
_(b7D,o8D)
var x9D=_n('text')
var o0D=_oz(z,76,e,s,gg)
_(x9D,o0D)
_(b7D,x9D)
_(oTD,b7D)
_(bSD,oTD)
_(o0C,bSD)
_(oVC,o0C)
_(r,oVC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'id',1,e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,2,e,s,gg)){cEE.wxVkey=1
var lGE=_mz(z,'swiper',['circular',3,'class',1,'duration',2,'indicatorActiveColor',3,'indicatorColor',4,'indicatorDots',5,'interval',6],[],e,s,gg)
var aHE=_v()
_(lGE,aHE)
var tIE=function(bKE,eJE,oLE,gg){
var oNE=_n('swiper-item')
_rz(z,oNE,'class',14,bKE,eJE,gg)
var fOE=_n('view')
_rz(z,fOE,'class',15,bKE,eJE,gg)
var cPE=_mz(z,'image',['mode',16,'src',1],[],bKE,eJE,gg)
_(fOE,cPE)
_(oNE,fOE)
_(oLE,oNE)
return oLE
}
aHE.wxXCkey=2
_2z(z,12,tIE,e,s,gg,aHE,'index','__i0__','*this')
_(cEE,lGE)
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,18,e,s,gg)){oFE.wxVkey=1
var hQE=_n('view')
_rz(z,hQE,'class',19,e,s,gg)
var oRE=_mz(z,'image',['mode',20,'src',1],[],e,s,gg)
_(hQE,oRE)
_(oFE,hQE)
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(cBE,oDE)
var cSE=_n('view')
_rz(z,cSE,'class',22,e,s,gg)
var oTE=_oz(z,23,e,s,gg)
_(cSE,oTE)
_(cBE,cSE)
var lUE=_n('view')
_rz(z,lUE,'id',24,e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,25,e,s,gg)){aVE.wxVkey=1
var tWE=_n('view')
_rz(z,tWE,'class',26,e,s,gg)
var eXE=_mz(z,'swiper',['bindchange',27,'class',1,'current',2,'data-event-opts',3,'duration',4,'indicatorColor',5],[],e,s,gg)
var bYE=_v()
_(eXE,bYE)
var oZE=function(o2E,x1E,f3E,gg){
var h5E=_n('swiper-item')
_rz(z,h5E,'class',37,o2E,x1E,gg)
var o6E=_n('view')
_rz(z,o6E,'class',38,o2E,x1E,gg)
var c7E=_mz(z,'image',['mode',39,'src',1],[],o2E,x1E,gg)
_(o6E,c7E)
_(h5E,o6E)
_(f3E,h5E)
return f3E
}
bYE.wxXCkey=2
_2z(z,35,oZE,e,s,gg,bYE,'indexf','__i1__','*this')
_(tWE,eXE)
var o8E=_n('view')
_rz(z,o8E,'class',41,e,s,gg)
var l9E=_n('text')
_rz(z,l9E,'class',42,e,s,gg)
var a0E=_oz(z,43,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_n('text')
_rz(z,tAF,'class',44,e,s,gg)
var eBF=_oz(z,45,e,s,gg)
_(tAF,eBF)
_(o8E,tAF)
var bCF=_n('text')
_rz(z,bCF,'class',46,e,s,gg)
var oDF=_oz(z,47,e,s,gg)
_(bCF,oDF)
_(o8E,bCF)
_(tWE,o8E)
var xEF=_n('view')
_rz(z,xEF,'class',48,e,s,gg)
var oFF=_mz(z,'text',['bindtap',49,'class',1,'data-event-opts',2],[],e,s,gg)
_(xEF,oFF)
var fGF=_mz(z,'text',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
_(xEF,fGF)
_(tWE,xEF)
_(aVE,tWE)
}
else{aVE.wxVkey=2
var cHF=_n('view')
_rz(z,cHF,'class',55,e,s,gg)
var hIF=_mz(z,'image',['mode',56,'src',1],[],e,s,gg)
_(cHF,hIF)
_(aVE,cHF)
}
aVE.wxXCkey=1
_(cBE,lUE)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,58,e,s,gg)){hCE.wxVkey=1
var oJF=_n('view')
_rz(z,oJF,'id',59,e,s,gg)
var cKF=_n('view')
_rz(z,cKF,'class',60,e,s,gg)
var oLF=_oz(z,61,e,s,gg)
_(cKF,oLF)
_(oJF,cKF)
var lMF=_mz(z,'parser',['bind:__l',62,'class',1,'html',2,'tagStyle',3,'vueId',4],[],e,s,gg)
_(oJF,lMF)
_(hCE,oJF)
}
var aNF=_n('view')
_rz(z,aNF,'id',67,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',68,e,s,gg)
var bQF=_oz(z,69,e,s,gg)
_(ePF,bQF)
_(aNF,ePF)
var oRF=_n('view')
_rz(z,oRF,'class',70,e,s,gg)
var xSF=_v()
_(oRF,xSF)
var oTF=function(cVF,fUF,hWF,gg){
var cYF=_v()
_(hWF,cYF)
if(_oz(z,75,cVF,fUF,gg)){cYF.wxVkey=1
var oZF=_mz(z,'product-item',['CatchPhrase',76,'bind:__l',1,'level2id',2,'productid',3,'productname',4,'producturl',5,'vueId',6],[],cVF,fUF,gg)
_(cYF,oZF)
}
cYF.wxXCkey=1
cYF.wxXCkey=3
return hWF
}
xSF.wxXCkey=4
_2z(z,73,oTF,e,s,gg,xSF,'product','indexr','1')
_(aNF,oRF)
var tOF=_v()
_(aNF,tOF)
if(_oz(z,83,e,s,gg)){tOF.wxVkey=1
var l1F=_mz(z,'uni-load-more',['bind:__l',84,'color',1,'contentText',2,'status',3,'vueId',4],[],e,s,gg)
_(tOF,l1F)
}
tOF.wxXCkey=1
tOF.wxXCkey=3
_(cBE,aNF)
var a2F=_mz(z,'srorll-top-com',['bind:__l',89,'scrollTop',1,'vueId',2],[],e,s,gg)
_(cBE,a2F)
hCE.wxXCkey=1
hCE.wxXCkey=3
_(r,cBE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var e4F=_n('view')
var o6F=_n('view')
_rz(z,o6F,'class',0,e,s,gg)
var x7F=_oz(z,1,e,s,gg)
_(o6F,x7F)
_(e4F,o6F)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,2,e,s,gg)){b5F.wxVkey=1
var o8F=_n('view')
_rz(z,o8F,'class',3,e,s,gg)
var c0F=_n('view')
_rz(z,c0F,'class',4,e,s,gg)
var hAG=_v()
_(c0F,hAG)
var oBG=function(oDG,cCG,lEG,gg){
var tGG=_v()
_(lEG,tGG)
if(_oz(z,9,oDG,cCG,gg)){tGG.wxVkey=1
var eHG=_mz(z,'product-item',['CatchPhrase',10,'bind:__l',1,'level2id',2,'productid',3,'productname',4,'producturl',5,'vueId',6],[],oDG,cCG,gg)
_(tGG,eHG)
}
tGG.wxXCkey=1
tGG.wxXCkey=3
return lEG
}
hAG.wxXCkey=4
_2z(z,7,oBG,e,s,gg,hAG,'product','index','index')
_(o8F,c0F)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,17,e,s,gg)){f9F.wxVkey=1
var bIG=_mz(z,'uni-load-more',['bind:__l',18,'color',1,'contentText',2,'status',3,'vueId',4],[],e,s,gg)
_(f9F,bIG)
}
f9F.wxXCkey=1
f9F.wxXCkey=3
_(b5F,o8F)
}
else{b5F.wxVkey=2
var oJG=_n('view')
_rz(z,oJG,'class',23,e,s,gg)
var xKG=_oz(z,24,e,s,gg)
_(oJG,xKG)
_(b5F,oJG)
}
var oLG=_mz(z,'srorll-top-com',['bind:__l',25,'scrollTop',1,'vueId',2],[],e,s,gg)
_(e4F,oLG)
b5F.wxXCkey=1
b5F.wxXCkey=3
_(r,e4F)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cNG=_n('view')
_rz(z,cNG,'class',0,e,s,gg)
var hOG=_mz(z,'image',['class',1,'mode',1,'src',2],[],e,s,gg)
_(cNG,hOG)
_(r,cNG)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cQG=_n('view')
var oRG=_n('view')
_rz(z,oRG,'class',0,e,s,gg)
var lSG=_v()
_(oRG,lSG)
var aTG=function(eVG,tUG,bWG,gg){
var xYG=_n('view')
_rz(z,xYG,'class',5,eVG,tUG,gg)
var oZG=_mz(z,'navigator',['hoverClass',6,'url',1],[],eVG,tUG,gg)
var f1G=_mz(z,'image',['class',8,'src',1],[],eVG,tUG,gg)
_(oZG,f1G)
var c2G=_n('view')
_rz(z,c2G,'class',10,eVG,tUG,gg)
var h3G=_oz(z,11,eVG,tUG,gg)
_(c2G,h3G)
_(oZG,c2G)
var o4G=_n('view')
_rz(z,o4G,'class',12,eVG,tUG,gg)
var c5G=_oz(z,13,eVG,tUG,gg)
_(o4G,c5G)
_(oZG,o4G)
_(xYG,oZG)
_(bWG,xYG)
return bWG
}
lSG.wxXCkey=2
_2z(z,3,aTG,e,s,gg,lSG,'CuItem','index','index')
_(cQG,oRG)
_(r,cQG)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var l7G=_n('view')
var a8G=_v()
_(l7G,a8G)
if(_oz(z,0,e,s,gg)){a8G.wxVkey=1
var t9G=_n('view')
_rz(z,t9G,'class',1,e,s,gg)
var e0G=_n('view')
var bAH=_n('view')
_rz(z,bAH,'class',2,e,s,gg)
var xCH=_n('text')
var oDH=_oz(z,3,e,s,gg)
_(xCH,oDH)
_(bAH,xCH)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,4,e,s,gg)){oBH.wxVkey=1
var fEH=_mz(z,'text',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
_(oBH,fEH)
}
oBH.wxXCkey=1
_(e0G,bAH)
var cFH=_n('view')
_rz(z,cFH,'class',8,e,s,gg)
var hGH=_v()
_(cFH,hGH)
var oHH=function(oJH,cIH,lKH,gg){
var tMH=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],oJH,cIH,gg)
var eNH=_oz(z,16,oJH,cIH,gg)
_(tMH,eNH)
_(lKH,tMH)
return lKH
}
hGH.wxXCkey=2
_2z(z,11,oHH,e,s,gg,hGH,'item','index','index')
_(e0G,cFH)
_(t9G,e0G)
_(a8G,t9G)
}
else{a8G.wxVkey=2
var bOH=_n('view')
_rz(z,bOH,'class',17,e,s,gg)
var xQH=_n('view')
_rz(z,xQH,'class',18,e,s,gg)
var oRH=_n('text')
var fSH=_oz(z,19,e,s,gg)
_(oRH,fSH)
_(xQH,oRH)
_(bOH,xQH)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,20,e,s,gg)){oPH.wxVkey=1
var cTH=_n('view')
_rz(z,cTH,'class',21,e,s,gg)
var oVH=_n('view')
_rz(z,oVH,'class',22,e,s,gg)
var cWH=_v()
_(oVH,cWH)
var oXH=function(aZH,lYH,t1H,gg){
var b3H=_v()
_(t1H,b3H)
if(_oz(z,27,aZH,lYH,gg)){b3H.wxVkey=1
var o4H=_mz(z,'product-item',['CatchPhrase',28,'bind:__l',1,'level2id',2,'productid',3,'productname',4,'producturl',5,'vueId',6],[],aZH,lYH,gg)
_(b3H,o4H)
}
b3H.wxXCkey=1
b3H.wxXCkey=3
return t1H
}
cWH.wxXCkey=4
_2z(z,25,oXH,e,s,gg,cWH,'product','index','index')
_(cTH,oVH)
var hUH=_v()
_(cTH,hUH)
if(_oz(z,35,e,s,gg)){hUH.wxVkey=1
var x5H=_mz(z,'uni-load-more',['bind:__l',36,'color',1,'contentText',2,'status',3,'vueId',4],[],e,s,gg)
_(hUH,x5H)
}
hUH.wxXCkey=1
hUH.wxXCkey=3
_(oPH,cTH)
}
else{oPH.wxVkey=2
var o6H=_n('view')
_rz(z,o6H,'class',41,e,s,gg)
var f7H=_oz(z,42,e,s,gg)
_(o6H,f7H)
_(oPH,o6H)
}
oPH.wxXCkey=1
oPH.wxXCkey=3
_(a8G,bOH)
}
a8G.wxXCkey=1
a8G.wxXCkey=3
_(r,l7G)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h9H=_n('view')
var o0H=_n('view')
_rz(z,o0H,'class',0,e,s,gg)
var cAI=_v()
_(o0H,cAI)
var oBI=function(aDI,lCI,tEI,gg){
var bGI=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],aDI,lCI,gg)
var oHI=_n('text')
var xII=_oz(z,8,aDI,lCI,gg)
_(oHI,xII)
_(bGI,oHI)
_(tEI,bGI)
return tEI
}
cAI.wxXCkey=2
_2z(z,3,oBI,e,s,gg,cAI,'menuItem','index','index')
_(h9H,o0H)
var oJI=_n('view')
_rz(z,oJI,'class',9,e,s,gg)
var fKI=_v()
_(oJI,fKI)
var cLI=function(oNI,hMI,cOI,gg){
var lQI=_mz(z,'view',['bindtap',14,'class',1,'data-appTip',2,'data-event-opts',3,'data-reLink',4],[],oNI,hMI,gg)
var aRI=_n('view')
_rz(z,aRI,'class',19,oNI,hMI,gg)
var tSI=_n('view')
_rz(z,tSI,'class',20,oNI,hMI,gg)
var eTI=_oz(z,21,oNI,hMI,gg)
_(tSI,eTI)
_(aRI,tSI)
var bUI=_n('view')
_rz(z,bUI,'class',22,oNI,hMI,gg)
var oVI=_n('text')
var xWI=_oz(z,23,oNI,hMI,gg)
_(oVI,xWI)
_(bUI,oVI)
var oXI=_mz(z,'image',['mode',-1,'class',24,'src',1],[],oNI,hMI,gg)
_(bUI,oXI)
_(aRI,bUI)
_(lQI,aRI)
var fYI=_n('view')
_rz(z,fYI,'class',26,oNI,hMI,gg)
var cZI=_mz(z,'image',['class',27,'src',1],[],oNI,hMI,gg)
_(fYI,cZI)
_(lQI,fYI)
_(cOI,lQI)
return cOI
}
fKI.wxXCkey=2
_2z(z,12,cLI,e,s,gg,fKI,'buyconItem','buyIndex','buyIndex')
_(h9H,oJI)
_(r,h9H)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/ttf;base64,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b250VmVyc2lvbiAxLjBtdWlmb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAbQB1AGkAZgBvAG4AdABSAGUAZwB1AGwAYQByAG0AdQBpAGYAbwBuAHQAbQB1AGkAZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAbQB1AGkAZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgANc3Bpbm5lci1jeWNsZQRjaGF0A2V5ZQRiYXJzBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgNtYXACcXENY2lyY2xlLWZpbGxlZARsaXN0B3NwaW5uZXIIcHVsbGRvd24FaW1hZ2UGY2FtZXJhB2NvbnRhY3QOY29udGFjdC1maWxsZWQIZG93bmxvYWQFZW1haWwMZW1haWwtZmlsbGVkBGhlbHALaGVscC1maWxsZWQIbG9jYXRpb24PbG9jYXRpb24tZmlsbGVkBmxvY2tlZAZtaWNvZmYDbWljCm1pYy1maWxsZWQQcGVyc29uYWRkLWZpbGxlZAxyZWZyZXNoZW1wdHkHcmVmcmVzaA5yZWZyZXNoLWZpbGxlZAZyZWxvYWQIc3RhcmhhbGYEc3RhcgtzdGFyLWZpbGxlZAVwaG9uZQxwaG9uZS1maWxsZWQEdW5kbwZ1cGxvYWQIdmlkZW9jYW0JcGFwZXJjbGlwBnBlcnNvbg1wZXJzb24tZmlsbGVkCXBlcnNvbmFkZAljaGF0Ym94ZXMQY2hhdGJveGVzLWZpbGxlZApjaGF0YnViYmxlEWNoYXRidWJibGUtZmlsbGVkCmNsb3NlZW1wdHkFY2xvc2UMY2xvc2UtZmlsbGVkB2NvbXBvc2UFdHJhc2gEcmVkbwRpbmZvC2luZm8tZmlsbGVkBGdlYXILZ2Vhci1maWxsZWQEaG9tZQtob21lLWZpbGxlZAZzZWFyY2gIc2V0dGluZ3MFbWludXMMbWludXMtZmlsbGVkCXBsdXNlbXB0eQRwbHVzC3BsdXMtZmlsbGVkBGJhY2sHZm9yd2FyZAhuYXZpZ2F0ZQRmbGFnBGxvb3AEbW9yZQttb3JlLWZpbGxlZApwYXBlcnBsYW5lCWFycm93ZG93bglhcnJvd2xlZnQKYXJyb3dyaWdodA1hcnJvd3RoaW5kb3duDWFycm93dGhpbmxlZnQOYXJyb3d0aGlucmlnaHQLYXJyb3d0aGludXAHYXJyb3d1cA5jaGVja21hcmtlbXB0eQ9jaGVja2JveC1maWxsZWQGY2lyY2xlBHNjYW4AAA\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\nbody{ background: #f6f6f6; font-family: yahei; }\n.",[1],"uni-page-head-btn{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead(["[is\x3d\x22components/jyf-Parser/index\x22]{display: block; overflow: scroll; -webkit-overflow-scrolling: touch;}\n[is\x3d\x22components/jyf-Parser/trees\x22]{display: inherit; float: inherit;}\n",])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/jyf-Parser/index.wxss']=setCssToHead([],undefined,{path:"./components/jyf-Parser/index.wxss"});    
__wxAppCode__['components/jyf-Parser/index.wxml']=$gwx('./components/jyf-Parser/index.wxml');

__wxAppCode__['components/jyf-Parser/trees.wxss']=setCssToHead([".",[1],"navigator-hover { opacity: 0.7; text-decoration: underline; }\n.",[1],"_a { display: inline; color: #366092; }\n.",[1],"_div, .",[1],"_blockquote, .",[1],"_p { display: block; }\n.",[1],"_b, .",[1],"_strong { display: inline; font-weight: bold; }\n.",[1],"_em, .",[1],"_i { display: inline; font-style: italic; }\n.",[1],"_del { display: inline; text-decoration: line-through; }\n.",[1],"_ins { display: inline; text-decoration: underline; }\n.",[1],"_code { display: inline; font-family: monospace; }\n.",[1],"_big { font-size: 1.2em; display: inline; }\n.",[1],"_small { font-size: 0.8em; display: inline; }\n.",[1],"_q, .",[1],"_span, .",[1],"_label, .",[1],"_abbr { display: inline; }\n.",[1],"_q::before { content: \x27\x22\x27; }\n.",[1],"_q::after { content: \x27\x22\x27; }\n.",[1],"_video { background-color: black; width: 300px; height: 225px; display: inline-block; position: relative; }\n.",[1],"_video::after { content: \x27\x27; border-width: 15px 0 15px 30px; border-style: solid; border-color: transparent transparent transparent white; position: absolute; left: 50%; top: 50%; margin: -15px 0 0 -15px; }\n",],undefined,{path:"./components/jyf-Parser/trees.wxss"});    
__wxAppCode__['components/jyf-Parser/trees.wxml']=$gwx('./components/jyf-Parser/trees.wxml');

__wxAppCode__['components/product-item/product-item.wxss']=setCssToHead([".",[1],"product-item{ width:",[0,230],"; margin:",[0,5]," ",[0,5],"; background: #FFFFFF; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; text-align: center; border-radius: ",[0,5],"; font-size: 0; }\n.",[1],"uni-product-image{ width: ",[0,230],"; height: ",[0,175],"; }\n.",[1],"uni-product-title{ font-size:",[0,16],"; margin-top:",[0,15],"; margin-bottom:",[0,20],"; line-height: 1.5; text-align: center; }\n",],undefined,{path:"./components/product-item/product-item.wxss"});    
__wxAppCode__['components/product-item/product-item.wxml']=$gwx('./components/product-item/product-item.wxml');

__wxAppCode__['components/scrollTopCom/scrollTopCom.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"returnTop { position: fixed; bottom: ",[0,100],"; right: 0; }\n.",[1],"returnTop wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n",],undefined,{path:"./components/scrollTopCom/scrollTopCom.wxss"});    
__wxAppCode__['components/scrollTopCom/scrollTopCom.wxml']=$gwx('./components/scrollTopCom/scrollTopCom.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-load-more { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"uni-load-more__text { font-size: ",[0,18],"; color: #999 }\n.",[1],"uni-load-more__img { height: 24px; width: 24px; margin-right: 10px }\n.",[1],"uni-load-more__img\x3e.",[1],"load { position: absolute }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper { width: 6px; height: 2px; border-top-left-radius: 1px; border-bottom-left-radius: 1px; background: #999; position: absolute; opacity: .2; -webkit-transform-origin: 50%; -ms-transform-origin: 50%; transform-origin: 50%; -webkit-animation: load 1.56s ease infinite; animation: load 1.56s ease infinite }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); top: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 11px; right: 0 }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); bottom: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(4) { top: 11px; left: 0 }\n.",[1],"load1, .",[1],"load2, .",[1],"load3 { height: 24px; width: 24px }\n.",[1],"load2 { -webkit-transform: rotate(30deg); -ms-transform: rotate(30deg); transform: rotate(30deg) }\n.",[1],"load3 { -webkit-transform: rotate(60deg); -ms-transform: rotate(60deg); transform: rotate(60deg) }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: 0s; animation-delay: 0s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: .13s; animation-delay: .13s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: .26s; animation-delay: .26s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .39s; animation-delay: .39s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .52s; animation-delay: .52s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .65s; animation-delay: .65s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: .78s; animation-delay: .78s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: .91s; animation-delay: .91s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: 1.04s; animation-delay: 1.04s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.17s; animation-delay: 1.17s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.3s; animation-delay: 1.3s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.43s; animation-delay: 1.43s }\n@-webkit-keyframes load { 0% { opacity: 1 }\n100% { opacity: .2 }\n}",],undefined,{path:"./components/uni-load-more/uni-load-more.wxss"});    
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['pages/category/category.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #FFFFFF; }\n.",[1],"main-title { border-bottom: solid 1px #E0E0E0; text-align: center; padding-bottom: ",[0,20],"; padding-top: ",[0,20],"; }\n.",[1],"page-body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"nav-left { width: ",[0,175],"; background: #f2f2f2; }\n.",[1],"nav-left-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; height: ",[0,72],"; font-size: ",[0,16],"; color: #000000; position: relative; }\n.",[1],"nav-left-item.",[1],"active { background: #ffffff; }\n.",[1],"nav-left-item.",[1],"active:before { content: \x27\x27; position: absolute; left: 0; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); height: ",[0,20],"; width: ",[0,6],"; background-color: #006B69; opacity: .8; }\n.",[1],"nav-right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; }\n.",[1],"nav-right-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; background: #fff; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding-top: ",[0,45],"; margin: 0 ",[0,20],"; }\n.",[1],"nav-right-item { width: ",[0,168],"; margin: ",[0,25]," ",[0,5],"; text-align: center; font-size: ",[0,16],"; height: ",[0,164],"; }\n.",[1],"nav-right-item wx-image { width: ",[0,168],"; height: ",[0,126.5],"; margin-bottom: ",[0,10],"; will-change: transform; }\n",],undefined,{path:"./pages/category/category.wxss"});    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/main/main.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"home-search { text-align: center; margin: ",[0,33]," auto ",[0,23],"; }\n.",[1],"home-search .",[1],"search-container { padding-top: ",[0,15],"; padding-bottom: ",[0,15],"; padding-left: ",[0,10],"; background: #FFFFFF; border-radius: ",[0,50],"; width: 70%; margin: 0 auto; font-size: ",[0,12],"; color: #bdbdbd; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; border: 1px solid #cccccc; }\n.",[1],"home-search .",[1],"uni-icon-search:before { content: \x22\\E466\x22; font-size: ",[0,18],"; color: #737373; }\n.",[1],"home-search .",[1],"search-text, .",[1],"home-search .",[1],"uni-icon { font-size: ",[0,14],"; }\n.",[1],"home-banner { width: 100%; font-size: 0; }\n.",[1],"home-banner wx-image { width: 100%; height: ",[0,568],"; }\n.",[1],"home-banner .",[1],"swiper-home { height: ",[0,568],"; }\n.",[1],"swiper { height: ",[0,280],"; }\n.",[1],"swiper .",[1],"swiper-item { margin: ",[0,20]," ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"swiper .",[1],"swiper-item .",[1],"swiper-cate { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,178],"; height: ",[0,198],"; margin: 0 ",[0,5],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #FFFFFF; border-radius: ",[0,5],"; }\n.",[1],"swiper .",[1],"swiper-item .",[1],"swiper-cate wx-text { font-size: ",[0,16],"; margin-top: ",[0,16],"; }\n.",[1],"swiper .",[1],"swiper-item .",[1],"swiper-cate wx-image { width: ",[0,120],"; }\n",],undefined,{path:"./pages/main/main.wxss"});    
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/product/product.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"productpage { background: #FFFFFF; }\n#overview .",[1],"swiper { height: ",[0,300],"; }\n#overview .",[1],"overviewgallery { width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; }\n#overview wx-image { height: ",[0,273],"; width: ",[0,364],"; }\n#overview .",[1],"productimg { text-align: center; }\n.",[1],"productname { text-align: center; font-size: ",[0,24],"; margin-top: ",[0,24],"; }\n#feature { margin-top: ",[0,30],"; overflow: hidden; }\n#feature .",[1],"swiper { height: ",[0,293.75],"; }\n#feature .",[1],"galleryfeature { position: relative; }\n#feature wx-image { width: ",[0,750],"; height: ",[0,293.75],"; }\n#feature .",[1],"swiper-dots { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: absolute; right: ",[0,20],"; bottom: ",[0,12],"; width: ",[0,60],"; height: ",[0,30],"; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg\x3d\x3d); background-size: 100% 100%; }\n#feature .",[1],"swiper-dots .",[1],"num { width: ",[0,30],"; height: ",[0,30],"; border-radius: 50px; font-size: ",[0,18],"; color: #fff; text-align: center; line-height: ",[0,30],"; }\n#feature .",[1],"swiper-dots .",[1],"sign { position: absolute; top: 0; left: 50%; line-height: ",[0,30],"; font-size: ",[0,12],"; color: #fff; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); }\n#feature .",[1],"sliderbutton { position: absolute; top: 38%; width: 100%; z-index: 20; height: 0; }\n#feature .",[1],"sliderbutton .",[1],"uni-icon { background: rgba(164, 164, 164, 0.7); height: ",[0,50],"; line-height: ",[0,50],"; width: ",[0,50],"; text-align: center; border-radius: ",[0,52],"; color: #ffffff; }\n#feature .",[1],"sliderbutton .",[1],"uni-icon-arrowleft { float: left; -webkit-transform: translateX(-40%); -ms-transform: translateX(-40%); transform: translateX(-40%); }\n#feature .",[1],"sliderbutton .",[1],"uni-icon-arrowright { float: right; -webkit-transform: translateX(40%); -ms-transform: translateX(40%); transform: translateX(40%); }\n#spectable { margin: ",[0,50]," ",[0,20]," 0; }\n#spectable .",[1],"title { font-size: ",[0,24],"; margin-bottom: ",[0,20],"; }\n#related { margin: ",[0,30]," 0 0; background: #f6f6f6; padding: ",[0,32]," ",[0,20]," 0; }\n#related .",[1],"title { font-size: ",[0,24],"; }\n.",[1],"scroll-view_H { white-space: nowrap; width: 100%; margin-top: ",[0,25],"; }\n.",[1],"scroll-view-item_H { display: inline-block; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"product-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin: ",[0,20]," ",[0,-5],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/product/product.wxss:147:1)",{path:"./pages/product/product.wxss"});    
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/productlist/productlist.wxss']=setCssToHead([".",[1],"main-title { text-align: center; padding-top: ",[0,40],"; margin: 0 auto ",[0,35],"; font-size: ",[0,24],"; letter-spacing: ",[0,2],"; color: #333333; }\n.",[1],"product-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin:0 ",[0,15]," ",[0,20],"; }\n.",[1],"no-data{ margin: 0 15px 20px; font-size: ",[0,16],"; }\n",],undefined,{path:"./pages/productlist/productlist.wxss"});    
__wxAppCode__['pages/productlist/productlist.wxml']=$gwx('./pages/productlist/productlist.wxml');

__wxAppCode__['pages/promotion/promotion.wxss']=setCssToHead([".",[1],"conImage{ width: 100%; }\nbody{ background: #FFFFFF; }\n",],undefined,{path:"./pages/promotion/promotion.wxss"});    
__wxAppCode__['pages/promotion/promotion.wxml']=$gwx('./pages/promotion/promotion.wxml');

__wxAppCode__['pages/promotionlist/promotionlist.wxss']=setCssToHead([".",[1],"CuWrap{ padding: 0 ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"CuItem{ width: 50%; margin-top: ",[0,40],"; display: inline-block; vertical-align: top; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"CuItem:nth-child(2n+1){ padding-right: ",[0,10],"; }\n.",[1],"CuItem:nth-child(2n + 2){ padding-left: ",[0,10],"; }\n.",[1],"CuItemImage{ width: 100%; height: ",[0,194],"; margin-bottom: ",[0,20],"; }\n.",[1],"CuItemTitle{ font-size: ",[0,16],"; }\n.",[1],"CuItemDate{ font-size: ",[0,14],"; margin-top: ",[0,16],"; }\nbody{ background-color: #FFFFFF; }\n",],undefined,{path:"./pages/promotionlist/promotionlist.wxss"});    
__wxAppCode__['pages/promotionlist/promotionlist.wxml']=$gwx('./pages/promotionlist/promotionlist.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"uni-page-head-btn{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"uni-page-head-btn{ width: 80px; }\n.",[1],"history-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin: ",[0,40]," ",[0,20]," ",[0,20],"; padding-bottom: 0; font-size: ",[0,18],"; font-weight: bold; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"history-title .",[1],"uni-icon { font-size: ",[0,28],"; }\n.",[1],"history-content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin: 0 ",[0,10],"; }\n.",[1],"history-item { padding: 10px ",[0,40],"; border: 1px #f1f1f1 solid; background: #E4E4E4; border-radius: ",[0,50],"; font-size: ",[0,14],"; margin:",[0,5]," ",[0,10],"; }\n.",[1],"product-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; margin:0 ",[0,15]," ",[0,20],"; }\n.",[1],"no-data{ margin: 0 15px 20px; font-size: ",[0,16],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/wheretobuy/wheretobuy.wxss']=setCssToHead([".",[1],"menu{ text-align: center; border-bottom: 1px solid #e6e6e6; padding-top: ",[0,19],"; margin-bottom: ",[0,5],"; }\n.",[1],"menuItem{ display: inline-block; margin: 0 ",[0,35]," 0 ",[0,35],"; font-size: 18px; font-weight: 400; padding: 0 ",[0,10],"; padding-bottom: ",[0,16],"; }\n.",[1],"menuItemGreen{ color: #016b69; border-bottom: ",[0,5]," solid #016b69; }\n.",[1],"BuyContent{ overflow: hidden; margin-top: ",[0,32],"; }\n.",[1],"contentLeft,.",[1],"contentRight{ display: inline-block; -webkit-box-sizing: border-box; box-sizing: border-box; float: left; font-size: 18px; padding: 0 ",[0,20]," 0 ",[0,20],"; }\n.",[1],"ConLink{ font-size: 16px; }\n.",[1],"contentLeft{ width: 65%; }\n.",[1],"contentRight{ width: 35%; overflow: hidden; }\n.",[1],"ConLink{ margin-top:",[0,16],"; }\n.",[1],"icon{ display: inline-block; width: 10px; height: 10px; margin-left: ",[0,16],"; }\n.",[1],"buyImage{ float: right; width: ",[0,210],"; height: ",[0,75],"; }\nbody{ background-color: #FFFFFF; }\n",],undefined,{path:"./pages/wheretobuy/wheretobuy.wxss"});    
__wxAppCode__['pages/wheretobuy/wheretobuy.wxml']=$gwx('./pages/wheretobuy/wheretobuy.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
