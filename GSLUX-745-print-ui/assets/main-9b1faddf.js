import{g as st,c as ot,a as at,b as ut,d as ht,l as ft,e as lt,i as z,f as dt,h as Q,j as k,k as ct,t as q,m as b,F as xt,P as pt,U as wt,n as Ft,o as gt,p as vt,q as V,r as yt,s as mt,L as _t,u as Pt,v as Vt,w as Ct,x as Mt,y as tt,z as X,A as Tt,V as St,C as H,B as W,R as Bt,D as It,E as Et}from"./index-95e08829.js";var L={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */L.read=function(t,e,i,r,s){var n,o,h=s*8-r-1,f=(1<<h)-1,a=f>>1,u=-7,l=i?s-1:0,x=i?-1:1,d=t[e+l];for(l+=x,n=d&(1<<-u)-1,d>>=-u,u+=h;u>0;n=n*256+t[e+l],l+=x,u-=8);for(o=n&(1<<-u)-1,n>>=-u,u+=r;u>0;o=o*256+t[e+l],l+=x,u-=8);if(n===0)n=1-a;else{if(n===f)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,r),n=n-a}return(d?-1:1)*o*Math.pow(2,n-r)};L.write=function(t,e,i,r,s,n){var o,h,f,a=n*8-s-1,u=(1<<a)-1,l=u>>1,x=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:n-1,p=r?1:-1,w=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(h=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-o))<1&&(o--,f*=2),o+l>=1?e+=x/f:e+=x*Math.pow(2,1-l),e*f>=2&&(o++,f/=2),o+l>=u?(h=0,o=u):o+l>=1?(h=(e*f-1)*Math.pow(2,s),o=o+l):(h=e*Math.pow(2,l-1)*Math.pow(2,s),o=0));s>=8;t[i+d]=h&255,d+=p,h/=256,s-=8);for(o=o<<s|h,a+=s;a>0;t[i+d]=o&255,d+=p,o/=256,a-=8);t[i+d-p]|=w*128};var kt=c,B=L;function c(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}c.Varint=0;c.Fixed64=1;c.Bytes=2;c.Fixed32=5;var O=65536*65536,Y=1/O,Dt=12,et=typeof TextDecoder>"u"?null:new TextDecoder("utf8");c.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=r&7,t(s,e,this),this.pos===n&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=I(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=Z(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=I(this.buf,this.pos)+I(this.buf,this.pos+4)*O;return this.pos+=8,t},readSFixed64:function(){var t=I(this.buf,this.pos)+Z(this.buf,this.pos+4)*O;return this.pos+=8,t},readFloat:function(){var t=B.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=B.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e=this.buf,i,r;return r=e[this.pos++],i=r&127,r<128||(r=e[this.pos++],i|=(r&127)<<7,r<128)||(r=e[this.pos++],i|=(r&127)<<14,r<128)||(r=e[this.pos++],i|=(r&127)<<21,r<128)?i:(r=e[this.pos],i|=(r&15)<<28,Rt(i,t,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2===1?(t+1)/-2:t/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=Dt&&et?Zt(this.buf,e,t):$t(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==c.Bytes)return t.push(this.readVarint(e));var i=m(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==c.Bytes)return t.push(this.readSVarint());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==c.Bytes)return t.push(this.readBoolean());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==c.Bytes)return t.push(this.readFloat());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==c.Bytes)return t.push(this.readDouble());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==c.Bytes)return t.push(this.readFixed32());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==c.Bytes)return t.push(this.readSFixed32());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==c.Bytes)return t.push(this.readFixed64());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==c.Bytes)return t.push(this.readSFixed64());var e=m(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=t&7;if(e===c.Varint)for(;this.buf[this.pos++]>127;);else if(e===c.Bytes)this.pos=this.readVarint()+this.pos;else if(e===c.Fixed32)this.pos+=4;else if(e===c.Fixed64)this.pos+=8;else throw new Error("Unimplemented type: "+e)},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),M(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),M(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),M(this.buf,t&-1,this.pos),M(this.buf,Math.floor(t*Y),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),M(this.buf,t&-1,this.pos),M(this.buf,Math.floor(t*Y),this.pos+4),this.pos+=8},writeVarint:function(t){if(t=+t||0,t>268435455||t<0){Gt(t,this);return}this.realloc(4),this.buf[this.pos++]=t&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=(t>>>=7)&127|(t>127?128:0),!(t<=127)&&(this.buf[this.pos++]=t>>>7&127)))},writeSVarint:function(t){this.writeVarint(t<0?-t*2-1:t*2)},writeBoolean:function(t){this.writeVarint(!!t)},writeString:function(t){t=String(t),this.realloc(t.length*4),this.pos++;var e=this.pos;this.pos=Jt(this.buf,t,this.pos);var i=this.pos-e;i>=128&&$(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),B.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),B.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++;var i=this.pos;t(e,this);var r=this.pos-i;r>=128&&$(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,c.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Ot,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Lt,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,zt,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Ut,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,jt,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Xt,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Ht,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Wt,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Yt,e)},writeBytesField:function(t,e){this.writeTag(t,c.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,c.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,c.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,c.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,c.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,c.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,c.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,c.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,c.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,c.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,!!e)}};function Rt(t,e,i){var r=i.buf,s,n;if(n=r[i.pos++],s=(n&112)>>4,n<128||(n=r[i.pos++],s|=(n&127)<<3,n<128)||(n=r[i.pos++],s|=(n&127)<<10,n<128)||(n=r[i.pos++],s|=(n&127)<<17,n<128)||(n=r[i.pos++],s|=(n&127)<<24,n<128)||(n=r[i.pos++],s|=(n&1)<<31,n<128))return C(t,s,e);throw new Error("Expected varint not more than 10 bytes")}function m(t){return t.type===c.Bytes?t.readVarint()+t.pos:t.pos+1}function C(t,e,i){return i?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function Gt(t,e){var i,r;if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(i=~(-t%4294967296),r=~(-t/4294967296),i^4294967295?i=i+1|0:(i=0,r=r+1|0)),t>=18446744073709552e3||t<-18446744073709552e3)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),At(i,r,e),Nt(r,e)}function At(t,e,i){i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos++]=t&127|128,t>>>=7,i.buf[i.pos]=t&127}function Nt(t,e){var i=(t&7)<<4;e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=t&127)))))}function $(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(Math.LN2*7));i.realloc(r);for(var s=i.pos-1;s>=t;s--)i.buf[s+r]=i.buf[s]}function Ot(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function Lt(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function Ut(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function jt(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function zt(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function Xt(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function Ht(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function Wt(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function Yt(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function I(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+t[e+3]*16777216}function M(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function Z(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function $t(t,e,i){for(var r="",s=e;s<i;){var n=t[s],o=null,h=n>239?4:n>223?3:n>191?2:1;if(s+h>i)break;var f,a,u;h===1?n<128&&(o=n):h===2?(f=t[s+1],(f&192)===128&&(o=(n&31)<<6|f&63,o<=127&&(o=null))):h===3?(f=t[s+1],a=t[s+2],(f&192)===128&&(a&192)===128&&(o=(n&15)<<12|(f&63)<<6|a&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):h===4&&(f=t[s+1],a=t[s+2],u=t[s+3],(f&192)===128&&(a&192)===128&&(u&192)===128&&(o=(n&15)<<18|(f&63)<<12|(a&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,h=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),s+=h}return r}function Zt(t,e,i){return et.decode(t.subarray(e,i))}function Jt(t,e,i){for(var r=0,s,n;r<e.length;r++){if(s=e.charCodeAt(r),s>55295&&s<57344)if(n)if(s<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=s;continue}else s=n-55296<<10|s-56320|65536,n=null;else{s>56319||r+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=s;continue}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null);s<128?t[i++]=s:(s<2048?t[i++]=s>>6|192:(s<65536?t[i++]=s>>12|224:(t[i++]=s>>18|240,t[i++]=s>>12&63|128),t[i++]=s>>6&63|128),t[i++]=s&63|128)}return i}const Kt=st(kt),J=b();class S{constructor(e,i,r,s,n){this.styleFunction,this.extent_,this.id_=n,this.type_=e,this.flatCoordinates_=i,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=r,this.properties_=s}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?ot(this.flatCoordinates_):at(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const e=ut(this.getExtent());this.flatInteriorPoints_=ht(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const e=ft(this.flatCoordinates_,0,this.ends_,2);this.flatInteriorPoints_=lt(this.flatCoordinates_,0,this.ends_,2,e)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=z(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const e=this.flatCoordinates_;let i=0;const r=this.ends_;for(let s=0,n=r.length;s<n;++s){const o=r[s],h=z(e,i,o,2,.5);dt(this.flatMidpoints_,h),i=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,i){return this}getProperties(){return this.properties_}getStride(){return 2}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=Q(e);const i=e.getExtent(),r=e.getWorldExtent();if(i&&r){const s=k(r)/k(i);ct(J,r[0],r[3],s,-s,0,0,0),q(this.flatCoordinates_,0,this.flatCoordinates_.length,2,J,this.flatCoordinates_)}}getEnds(){return this.ends_}}S.prototype.getEndss=S.prototype.getEnds;S.prototype.getFlatCoordinates=S.prototype.getOrientedFlatCoordinates;const K=S;class Qt extends xt{constructor(e){super();const i=e||{};this.dataProjection=new pt({code:"",units:wt.TILE_PIXELS}),this.featureClass_=i.featureClass?i.featureClass:K,this.geometryName_=i.geometryName,this.layerName_=i.layerName?i.layerName:"layer",this.layers_=i.layers?i.layers:null,this.idProperty_=i.idProperty,this.supportedMediaTypes=["application/vnd.mapbox-vector-tile","application/x-protobuf"]}readRawGeometry_(e,i,r,s){e.pos=i.geometry;const n=e.readVarint()+e.pos;let o=1,h=0,f=0,a=0,u=0,l=0;for(;e.pos<n;){if(!h){const x=e.readVarint();o=x&7,h=x>>3}h--,o===1||o===2?(f+=e.readSVarint(),a+=e.readSVarint(),o===1&&u>l&&(s.push(u),l=u),r.push(f,a),u+=2):o===7?u>l&&(r.push(r[l],r[l+1]),u+=2):Ft(!1,59)}u>l&&(s.push(u),l=u)}createFeature_(e,i,r){const s=i.type;if(s===0)return null;let n;const o=i.properties;let h;this.idProperty_?(h=o[this.idProperty_],delete o[this.idProperty_]):h=i.id,o[this.layerName_]=i.layer.name;const f=[],a=[];this.readRawGeometry_(e,i,f,a);const u=ie(s,a.length);if(this.featureClass_===K)n=new this.featureClass_(u,f,a,o,h),n.transform(r.dataProjection);else{let l;if(u=="Polygon"){const p=gt(f,a);l=p.length>1?new vt(f,V.XY,p):new yt(f,V.XY,a)}else l=u==="Point"?new mt(f,V.XY):u==="LineString"?new _t(f,V.XY):u==="MultiPoint"?new Pt(f,V.XY):u==="MultiLineString"?new Vt(f,V.XY,a):null;const x=this.featureClass_;n=new x,this.geometryName_&&n.setGeometryName(this.geometryName_);const d=Ct(l,!1,r);n.setGeometry(d),h!==void 0&&n.setId(h),n.setProperties(o,!0)}return n}getType(){return"arraybuffer"}readFeatures(e,i){const r=this.layers_,s=this.adaptOptions(i),n=Q(s.dataProjection);n.setWorldExtent(s.extent),s.dataProjection=n;const o=new Kt(e),h=o.readFields(qt,{}),f=[];for(const a in h){if(r&&r.indexOf(a)==-1)continue;const u=h[a],l=u?[0,0,u.extent,u.extent]:null;n.setExtent(l);for(let x=0,d=u.length;x<d;++x){const p=ee(o,u,x),w=this.createFeature_(o,p,s);w!==null&&f.push(w)}}return f}readProjection(e){return this.dataProjection}setLayers(e){this.layers_=e}}function qt(t,e,i){if(t===3){const r={keys:[],values:[],features:[]},s=i.readVarint()+i.pos;i.readFields(bt,r,s),r.length=r.features.length,r.length&&(e[r.name]=r)}}function bt(t,e,i){if(t===15)e.version=i.readVarint();else if(t===1)e.name=i.readString();else if(t===5)e.extent=i.readVarint();else if(t===2)e.features.push(i.pos);else if(t===3)e.keys.push(i.readString());else if(t===4){let r=null;const s=i.readVarint()+i.pos;for(;i.pos<s;)t=i.readVarint()>>3,r=t===1?i.readString():t===2?i.readFloat():t===3?i.readDouble():t===4?i.readVarint64():t===5?i.readVarint():t===6?i.readSVarint():t===7?i.readBoolean():null;e.values.push(r)}}function te(t,e,i){if(t==1)e.id=i.readVarint();else if(t==2){const r=i.readVarint()+i.pos;for(;i.pos<r;){const s=e.layer.keys[i.readVarint()],n=e.layer.values[i.readVarint()];e.properties[s]=n}}else t==3?e.type=i.readVarint():t==4&&(e.geometry=i.pos)}function ee(t,e,i){t.pos=e.features[i];const r=t.readVarint()+t.pos,s={layer:e,type:0,properties:{}};return t.readFields(te,s,r),s}function ie(t,e){let i;return t===1?i=e===1?"Point":"MultiPoint":t===2?i=e===1?"LineString":"MultiLineString":t===3&&(i="Polygon"),i}const re=Qt;function ne(t,e,i){var r=b(),s=Mt(t),n=tt(t),o=k(t),h=n/o,f=e/i;return console.assert(Math.abs(h/f-1)<.02,"extent and canvas don't have same ratio: ".concat(h,", ").concat(f)),X(r,0,i),Tt(r,e/n,-i/o),X(r,-s[0],-s[1]),r}function se(t,e,i){var r=i.getZForResolution(e,.01),s=[];return i.forEachTileCoord(t,r,function(n){var o=i.getTileCoordExtent(n);s.push({coord:n,extent:o})}),s}var G;function oe(t,e){if(e===1)return t;G||(G=document.createElement("canvas"));var i=G;i.width=t.width,i.height=t.height;var r=i.getContext("2d");return r.globalAlpha=e,r.drawImage(t,0,0),i}var A=globalThis&&globalThis.__awaiter||function(t,e,i,r){function s(n){return n instanceof i?n:new i(function(o){o(n)})}return new(i||(i=Promise))(function(n,o){function h(u){try{a(r.next(u))}catch(l){o(l)}}function f(u){try{a(r.throw(u))}catch(l){o(l)}}function a(u){u.done?n(u.value):s(u.value).then(h,f)}a((r=r.apply(t,e||[])).next())})},N=globalThis&&globalThis.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,s,n,o;return o={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function h(a){return function(u){return f([a,u])}}function f(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(i=0)),i;)try{if(r=1,s&&(n=a[0]&2?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[a[0]&2,n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,s=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!(n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],s=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},E=Number.parseInt(St.split(".")[0]),ae=function(){function t(){}return t.prototype.fetch=function(e,i){return typeof fetch<"u"?fetch(e,i):Promise.reject("no Fetch")},t}(),ue=new ae,he=new re,fe=function(){function t(){}return t.prototype.drawFeaturesToContextUsingRenderAPI_=function(e,i,r,s,n,o,h){var f=1,a=new H(0,e.extent,r,f),u;h&&E<=9&&(u=new H(0,e.extent,r,f));function l(){console.log("FIXME: some resource is now available, we should regenerate the image")}var x=function(T){var P,U=T.getStyleFunction()||i;U&&(P=U(T,r));var D=!1;if(P){Array.isArray(P)||(P=[P]);for(var rt=0,R=0,j=P;R<j.length;R++){var nt=j[R];D=Et(a,T,nt,rt,l,void 0,E<=9?u:h)||D}}return D},d=!1;e.features.forEach(function(T){d=x(T)||d}),d&&console.log("FIXME: some styles are still loading");var p=!0,w=a.finish(),v=new W(e.extent,r,f,p,w,o),F=s,g=0,y=!0,_=E<9?1:[n.canvas.width,n.canvas.height];if(v.execute(n,_,F,g,y,void 0,null),u){var it=new W(e.extent,r,f,p,u.finish(),o);it.execute(n,_,F,g,y,void 0,h)}},t.prototype.drawFeaturesToContextUsingImmediateAPI_=function(e,i,r,s,n){var o=[],h=0;e.forEach(function(F){var g=i(F,r);g&&(Array.isArray(g)?g.forEach(function(y,_){o.push({zIndex:y.getZIndex(),feature:F,naturalOrder:++h,styleIdx:_})}):o.push({zIndex:g.getZIndex(),feature:F,naturalOrder:++h,styleIdx:-1}))}),o.sort(function(F,g){var y=(F.zIndex||0)-(g.zIndex||0);return y||F.naturalOrder-g.naturalOrder});for(var f=0,a=o;f<a.length;f++){var u=a[f],l=i(u.feature,r),x=u.styleIdx===-1?l:l[u.styleIdx];n.setStyle(x);var d=x.getGeometry();typeof d=="function"&&(d=d()),d||(d=u.feature.getGeometry()),d=Object.assign(Object.create(Object.getPrototypeOf(d)),d);var p=d.flatCoordinates_,w=d.flatCoordinates_=new Array(p.length),v=d.getStride();q(p,0,p.length,v,s,w),n.drawGeometry(d)}},t.prototype.snapTileResolution=function(e,i){for(var r=e.getResolutions(),s=r[r.length-2],n=r.length-2;n>=0;n--){var o=r[n];if(o<=i)s=o;else break}return s},t.prototype.assertCanvasSize=function(e,i){var r=tt(e)/k(e),s=i[0]/i[1];if(Math.abs(r/s-1)>.02){var n="The print extent ratio ".concat(r," and the canvas ratio ").concat(s," mismatch: ").concat(Math.abs(r/s-1)*100," %");throw new Error(n)}},t.prototype.allFullfilled=function(e){return A(this,void 0,void 0,function(){var i,r,s,n;return N(this,function(o){switch(o.label){case 0:i=[],r=0,s=e,o.label=1;case 1:return r<s.length?(n=s[r],[4,n.then(function(h){return i.push(h)},function(){})]):[3,4];case 2:o.sent(),o.label=3;case 3:return r++,[3,1];case 4:return[2,i]}})})},t.prototype.fetchFeatures=function(e,i){return A(this,void 0,void 0,function(){var r,s,n;return N(this,function(o){return r=i.getTileUrlFunction(),s=i.getProjection(),n=e.map(function(h){var f=r(h.coord,1,s);return f?ue.fetch(f).then(function(a){return a.arrayBuffer()}).then(function(a){var u=he.readFeatures(a,{extent:h.extent,featureProjection:s});return{features:u,extent:h.extent,url:f}}):Promise.reject("Could not create URL")}),[2,this.allFullfilled(n)]})})},t.prototype.encodeMVTLayer=function(e){return A(this,void 0,void 0,function(){var i,r,s,n,o,h,f,a,u,l,x,d,p,w,v,F,g=this;return N(this,function(y){switch(y.label){case 0:return i=e.layer,r=e.outputFormat||"png",s=i.getRenderBuffer()||100,n=i.getSource(),o=n.getTileGrid(),h=this.snapTileResolution(o,e.tileResolution),h!==e.tileResolution&&(console.warn("snapped and tile resolution mismatch: ".concat(h," != ").concat(e.tileResolution)),e.tileResolution=h),f=e.printExtent,a=se(f,h,o),[4,this.fetchFeatures(a,n)];case 1:return u=y.sent(),l=e.canvasSize,this.assertCanvasSize(f,l),x=[{printExtent:f,canvasSize:l}],d=e.styleResolution||h,p=i.getStyleFunction(),w=i.get("opacity"),v=E<9?i.getDeclutter()?new Bt(7):void 0:!!i.getDeclutter(),F=x.map(function(_){return g.renderTile(u,_.printExtent,_.canvasSize,d,p,w,s,v,r)}),[2,F]}})})},t.prototype.renderTile=function(e,i,r,s,n,o,h,f,a){var u=this,l=document.createElement("canvas"),x=l.getContext("2d");console.assert(x,"Could not get the context ".concat(l.width,"x").concat(l.height));var d=It(x,{size:r,pixelRatio:1});e.forEach(function(w){var v=ne(i,l.width,l.height);t.useImmediateAPI?u.drawFeaturesToContextUsingImmediateAPI_(w.features,n,s,v,d):u.drawFeaturesToContextUsingRenderAPI_(w,n,s,v,x,h,f)});var p=(o===1?l:oe(l,o)).toDataURL(a);return{extent:i,baseURL:p}},t.useImmediateAPI=!1,t}();const de=fe;export{de as MVTEncoder};