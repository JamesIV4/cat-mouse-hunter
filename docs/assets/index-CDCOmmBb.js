var rd=Object.defineProperty;var od=(r,t,e)=>t in r?rd(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var xt=(r,t,e)=>od(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="160",ad=0,Ec=1,cd=2,Xh=1,ld=2,Wn=3,hi=0,Ke=1,vn=2,ai=0,Ri=1,bc=2,Ac=3,Tc=4,hd=5,wi=100,ud=101,dd=102,Rc=103,Cc=104,fd=200,pd=201,md=202,gd=203,Na=204,Fa=205,xd=206,vd=207,_d=208,yd=209,Md=210,wd=211,Sd=212,Ed=213,bd=214,Ad=0,Td=1,Rd=2,$r=3,Cd=4,Pd=5,Ld=6,Id=7,po=0,Dd=1,Ud=2,ci=0,Nd=1,Fd=2,Bd=3,zd=4,Od=5,kd=6,Pc="attached",Vd="detached",qh=300,gs=301,xs=302,Jr=303,Ba=304,mo=306,jn=1e3,tn=1001,za=1002,Ue=1003,Lc=1004,Co=1005,on=1006,Hd=1007,qs=1008,li=1009,Gd=1010,Wd=1011,Qa=1012,jh=1013,ri=1014,Yn=1015,js=1016,Yh=1017,Kh=1018,Ci=1020,Xd=1021,cn=1023,qd=1024,jd=1025,Pi=1026,vs=1027,Yd=1028,Zh=1029,Kd=1030,$h=1031,Jh=1033,Po=33776,Lo=33777,Io=33778,Do=33779,Ic=35840,Dc=35841,Uc=35842,Nc=35843,Qh=36196,Fc=37492,Bc=37496,zc=37808,Oc=37809,kc=37810,Vc=37811,Hc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,jc=37817,Yc=37818,Kc=37819,Zc=37820,$c=37821,Uo=36492,Jc=36494,Qc=36495,Zd=36283,tl=36284,el=36285,nl=36286,$d=2200,tu=2201,Jd=2202,Qr=2300,to=2301,No=2302,os=2400,as=2401,eo=2402,tc=2500,Qd=2501,eu=3e3,yn=3001,tf=3200,ef=3201,go=0,nf=1,ln="",de="srgb",$n="srgb-linear",ec="display-p3",xo="display-p3-linear",no="linear",pe="srgb",io="rec709",so="p3",Bi=7680,il=519,sf=512,rf=513,of=514,nu=515,af=516,cf=517,lf=518,hf=519,Oa=35044,sl="300 es",ka=1035,Kn=2e3,ro=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const ks=Math.PI/180,_s=180/Math.PI;function Mn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function nc(r,t){return(r%t+t)%t}function uf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function df(r,t,e){return r!==t?(e-r)/(t-r):0}function Vs(r,t,e){return(1-e)*r+e*t}function ff(r,t,e,n){return Vs(r,t,1-Math.exp(-e*n))}function pf(r,t=1){return t-Math.abs(nc(r,t*2)-t)}function mf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function gf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function xf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function vf(r,t){return r+Math.random()*(t-r)}function _f(r){return r*(.5-Math.random())}function yf(r){r!==void 0&&(rl=r);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(r){return r*ks}function wf(r){return r*_s}function Va(r){return(r&r-1)===0&&r!==0}function Sf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ef(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:ks,RAD2DEG:_s,generateUUID:Mn,clamp:Ne,euclideanModulo:nc,mapLinear:uf,inverseLerp:df,lerp:Vs,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:vf,randFloatSpread:_f,seededRandom:yf,degToRad:Mf,radToDeg:wf,isPowerOfTwo:Va,ceilPowerOfTwo:Sf,floorPowerOfTwo:oo,setQuaternionFromProperEuler:Ef,normalize:re,denormalize:Cn};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],_=i[1],v=i[4],y=i[7],P=i[2],S=i[5],T=i[8];return s[0]=o*x+a*_+c*P,s[3]=o*p+a*v+c*S,s[6]=o*m+a*y+c*T,s[1]=l*x+h*_+d*P,s[4]=l*p+h*v+d*S,s[7]=l*m+h*y+d*T,s[2]=u*x+f*_+g*P,s[5]=u*p+f*v+g*S,s[8]=u*m+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Zt;function iu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bf(){const r=Ys("canvas");return r.style.display="block",r}const ol={};function Hs(r){r in ol||(ol[r]=!0,console.warn(r))}const al=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[$n]:{transfer:no,primaries:io,toReference:r=>r,fromReference:r=>r},[de]:{transfer:pe,primaries:io,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[xo]:{transfer:no,primaries:so,toReference:r=>r.applyMatrix3(cl),fromReference:r=>r.applyMatrix3(al)},[ec]:{transfer:pe,primaries:so,toReference:r=>r.convertSRGBToLinear().applyMatrix3(cl),fromReference:r=>r.applyMatrix3(al).convertLinearToSRGB()}},Af=new Set([$n,xo]),oe={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Af.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=cr[t].toReference,i=cr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return cr[r].primaries},getTransfer:function(r){return r===ln?no:cr[r].transfer}};function us(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zi;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Ys("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Mn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zo(i[o].image)):s.push(zo(i[o]))}else s=zo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function zo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?su.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;class Ie extends Ni{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=tn,i=tn,s=on,o=qs,a=cn,c=li,l=Ie.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Mn(),this.name="",this.source=new ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yn?de:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===de?yn:eu}set encoding(t){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===yn?de:ln}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=qh;Ie.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,P=(m+1)/2,S=(h+u)/4,T=(d+x)/4,z=(g+p)/4;return v>y&&v>P?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=T/n):y>P?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=z/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=T/s,i=z/s),this.set(n,i,s,e),this}let _=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yn?de:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ru(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Cf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let De=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==g){let p=1-a;const m=c*u+l*f+h*g+d*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),S=Math.atan2(P,m*_);p=Math.sin(p*S)/P,a=Math.sin(a*S)/P}const y=a*_;if(c=c*p+u*y,l=l*p+f*y,h=h*p+g*y,d=d*p+x*y,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new R,ll=new De;class Te{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),hr.subVectors(this.max,Ts),Oi.subVectors(t.a,Ts),ki.subVectors(t.b,Ts),Vi.subVectors(t.c,Ts),Jn.subVectors(ki,Oi),Qn.subVectors(Vi,ki),mi.subVectors(Oi,Vi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!ko(e,Oi,ki,Vi,hr)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,Oi,ki,Vi,hr))?!1:(ur.crossVectors(Jn,Qn),e=[ur.x,ur.y,ur.z],ko(e,Oi,ki,Vi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new R,new R,new R,new R,new R,new R,new R,new R],dn=new R,lr=new Te,Oi=new R,ki=new R,Vi=new R,Jn=new R,Qn=new R,mi=new R,Ts=new R,hr=new R,ur=new R,gi=new R;function ko(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gi.fromArray(r,s);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Lf=new Te,Rs=new R,Vo=new R;let Fi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Vo)),this.expandByPoint(Rs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Un=new R,Ho=new R,dr=new R,ti=new R,Go=new R,fr=new R,Wo=new R;let nr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ho);const s=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=ti.dot(this.direction),c=-ti.dot(dr),l=ti.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ho).addScaledVector(dr,u),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,s){Go.subVectors(e,t),fr.subVectors(n,t),Wo.crossVectors(Go,fr);let o=this.direction.dot(Wo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const c=a*this.direction.dot(fr.crossVectors(ti,fr));if(c<0)return null;const l=a*this.direction.dot(Go.cross(ti));if(l<0||c+l>o)return null;const h=-a*ti.dot(Wo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Lt{constructor(t,e,n,i,s,o,a,c,l,h,d,u,f,g,x,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,x,p)}set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),s=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Df)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ei.crossVectors(n,$e),ei.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ei.crossVectors(n,$e)),ei.normalize(),pr.crossVectors($e,ei),i[0]=ei.x,i[4]=pr.x,i[8]=$e.x,i[1]=ei.y,i[5]=pr.y,i[9]=$e.y,i[2]=ei.z,i[6]=pr.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],v=n[7],y=n[11],P=n[15],S=i[0],T=i[4],z=i[8],b=i[12],E=i[1],B=i[5],k=i[9],N=i[13],L=i[2],D=i[6],U=i[10],Z=i[14],C=i[3],F=i[7],H=i[11],J=i[15];return s[0]=o*S+a*E+c*L+l*C,s[4]=o*T+a*B+c*D+l*F,s[8]=o*z+a*k+c*U+l*H,s[12]=o*b+a*N+c*Z+l*J,s[1]=h*S+d*E+u*L+f*C,s[5]=h*T+d*B+u*D+f*F,s[9]=h*z+d*k+u*U+f*H,s[13]=h*b+d*N+u*Z+f*J,s[2]=g*S+x*E+p*L+m*C,s[6]=g*T+x*B+p*D+m*F,s[10]=g*z+x*k+p*U+m*H,s[14]=g*b+x*N+p*Z+m*J,s[3]=_*S+v*E+y*L+P*C,s[7]=_*T+v*B+y*D+P*F,s[11]=_*z+v*k+y*U+P*H,s[15]=_*b+v*N+y*Z+P*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+x*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+p*(+e*l*d-e*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+m*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=d*p*l-x*u*l+x*c*f-a*p*f-d*c*m+a*u*m,v=g*u*l-h*p*l-g*c*f+o*p*f+h*c*m-o*u*m,y=h*x*l-g*d*l+g*a*f-o*x*f-h*a*m+o*d*m,P=g*d*c-h*x*c-g*a*u+o*x*u+h*a*p-o*d*p,S=e*_+n*v+i*y+s*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=_*T,t[1]=(x*u*s-d*p*s-x*i*f+n*p*f+d*i*m-n*u*m)*T,t[2]=(a*p*s-x*c*s+x*i*l-n*p*l-a*i*m+n*c*m)*T,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*T,t[4]=v*T,t[5]=(h*p*s-g*u*s+g*i*f-e*p*f-h*i*m+e*u*m)*T,t[6]=(g*c*s-o*p*s-g*i*l+e*p*l+o*i*m-e*c*m)*T,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*T,t[8]=y*T,t[9]=(g*d*s-h*x*s-g*n*f+e*x*f+h*n*m-e*d*m)*T,t[10]=(o*x*s-g*a*s+g*n*l-e*x*l-o*n*m+e*a*m)*T,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*p+e*d*p)*T,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*p-e*a*p)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,g=s*d,x=o*h,p=o*d,m=a*d,_=c*l,v=c*h,y=c*d,P=n.x,S=n.y,T=n.z;return i[0]=(1-(x+m))*P,i[1]=(f+y)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(u+m))*S,i[6]=(p+_)*S,i[7]=0,i[8]=(g+v)*T,i[9]=(p-_)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Hi.set(i[0],i[1],i[2]).length();const o=Hi.set(i[4],i[5],i[6]).length(),a=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const l=1/s,h=1/o,d=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Kn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Kn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ro)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Kn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h;let g,x;if(a===Kn)g=(o+s)*d,x=-2*d;else if(a===ro)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new R,fn=new Lt,If=new R(0,0,0),Df=new R(1,1,1),ei=new R,pr=new R,$e=new R,hl=new Lt,ul=new De;class Ye{constructor(t=0,e=0,n=0,i=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uf=0;const dl=new R,Gi=new De,Nn=new Lt,mr=new R,Cs=new R,Nf=new R,Ff=new De,fl=new R(1,0,0),pl=new R(0,1,0),ml=new R(0,0,1),Bf={type:"added"},zf={type:"removed"};class ce extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new R,e=new Ye,n=new De,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Zt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Cs,mr,this.up):Nn.lookAt(mr,Cs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new R(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new R,Fn=new R,Xo=new R,Bn=new R,Wi=new R,Xi=new R,gl=new R,qo=new R,jo=new R,Yo=new R;let gr=!1;class an{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Fn.subVectors(n,e),Xo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Fn),c=pn.dot(Xo),l=Fn.dot(Fn),h=Fn.dot(Xo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,i,s,o,a,c){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Wi.subVectors(i,n),Xi.subVectors(s,n),qo.subVectors(t,n);const c=Wi.dot(qo),l=Xi.dot(qo);if(c<=0&&l<=0)return e.copy(n);jo.subVectors(t,i);const h=Wi.dot(jo),d=Xi.dot(jo);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Wi,o);Yo.subVectors(t,s);const f=Wi.dot(Yo),g=Xi.dot(Yo);if(g>=0&&f<=g)return e.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return gl.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(gl,a);const m=1/(p+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ko(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=nc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ko(o,s,t+1/3),this.g=Ko(o,s,t),this.b=Ko(o,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=de){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){const n=au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return oe.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ne(Oe.r*255,0,255))*65536+Math.round(Ne(Oe.g*255,0,255))*256+Math.round(Ne(Oe.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,s=Oe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=de){oe.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(xr);const n=Vs(ni.h,xr.h,e),i=Vs(ni.s,xr.s,e),s=Vs(ni.l,xr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Nt;Nt.NAMES=au;let Of=0,un=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ri,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class cu extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new R,vr=new Ht;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class sc extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lu extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kf=0;const sn=new Lt,Zo=new ce,qi=new R,Je=new Te,Ps=new Te,Le=new R;class Fe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?lu:sc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Je.min,Ps.min),Je.expandByPoint(Le),Le.addVectors(Je.max,Ps.max),Je.expandByPoint(Le)):(Je.expandByPoint(Ps.min),Je.expandByPoint(Ps.max))}Je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Le.add(qi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new R,h[E]=new R;const d=new R,u=new R,f=new R,g=new Ht,x=new Ht,p=new Ht,m=new R,_=new R;function v(E,B,k){d.fromArray(i,E*3),u.fromArray(i,B*3),f.fromArray(i,k*3),g.fromArray(o,E*2),x.fromArray(o,B*2),p.fromArray(o,k*2),u.sub(d),f.sub(d),x.sub(g),p.sub(g);const N=1/(x.x*p.y-p.x*x.y);isFinite(N)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(N),_.copy(f).multiplyScalar(x.x).addScaledVector(u,-p.x).multiplyScalar(N),l[E].add(m),l[B].add(m),l[k].add(m),h[E].add(_),h[B].add(_),h[k].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,B=y.length;E<B;++E){const k=y[E],N=k.start,L=k.count;for(let D=N,U=N+L;D<U;D+=3)v(n[D+0],n[D+1],n[D+2])}const P=new R,S=new R,T=new R,z=new R;function b(E){T.fromArray(s,E*3),z.copy(T);const B=l[E];P.copy(B),P.sub(T.multiplyScalar(T.dot(B))).normalize(),S.crossVectors(z,B);const N=S.dot(h[E])<0?-1:1;c[E*4]=P.x,c[E*4+1]=P.y,c[E*4+2]=P.z,c[E*4+3]=N}for(let E=0,B=y.length;E<B;++E){const k=y[E],N=k.start,L=k.count;for(let D=N,U=N+L;D<U;D+=3)b(n[D+0]),b(n[D+1]),b(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new wn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Lt,xi=new nr,_r=new Fi,vl=new R,ji=new R,Yi=new R,Ki=new R,$o=new R,yr=new R,Mr=new Ht,wr=new Ht,Sr=new Ht,_l=new R,yl=new R,Ml=new R,Er=new R,br=new R;class ue extends ce{constructor(t=new Fe,e=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&($o.fromBufferAttribute(d,t),o?yr.addScaledVector($o,h):yr.addScaledVector($o.sub(e),h))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(_r.containsPoint(xi.origin)===!1&&(xi.intersectSphere(_r,vl)===null||xi.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(xl.copy(s).invert(),xi.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,P=v;y<P;y+=3){const S=a.getX(y),T=a.getX(y+1),z=a.getX(y+2);i=Ar(this,m,t,n,l,h,d,S,T,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Ar(this,o,t,n,l,h,d,_,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,P=v;y<P;y+=3){const S=y,T=y+1,z=y+2;i=Ar(this,m,t,n,l,h,d,S,T,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=p,v=p+1,y=p+2;i=Ar(this,o,t,n,l,h,d,_,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Vf(r,t,e,n,i,s,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===hi,a),c===null)return null;br.copy(a),br.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(br);return l<e.near||l>e.far?null:{distance:l,point:br.clone(),object:r}}function Ar(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,ji),r.getVertexPosition(c,Yi),r.getVertexPosition(l,Ki);const h=Vf(r,t,e,n,ji,Yi,Ki,Er);if(h){i&&(Mr.fromBufferAttribute(i,a),wr.fromBufferAttribute(i,c),Sr.fromBufferAttribute(i,l),h.uv=an.getInterpolation(Er,ji,Yi,Ki,Mr,wr,Sr,new Ht)),s&&(Mr.fromBufferAttribute(s,a),wr.fromBufferAttribute(s,c),Sr.fromBufferAttribute(s,l),h.uv1=an.getInterpolation(Er,ji,Yi,Ki,Mr,wr,Sr,new Ht),h.uv2=h.uv1),o&&(_l.fromBufferAttribute(o,a),yl.fromBufferAttribute(o,c),Ml.fromBufferAttribute(o,l),h.normal=an.getInterpolation(Er,ji,Yi,Ki,_l,yl,Ml,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};an.getNormal(ji,Yi,Ki,d.normal),h.face=d}return h}class Xe extends Fe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(x,p,m,_,v,y,P,S,T,z,b){const E=y/T,B=P/z,k=y/2,N=P/2,L=S/2,D=T+1,U=z+1;let Z=0,C=0;const F=new R;for(let H=0;H<U;H++){const J=H*B-N;for(let tt=0;tt<D;tt++){const j=tt*E-k;F[x]=j*_,F[p]=J*v,F[m]=L,l.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[m]=S>0?1:-1,h.push(F.x,F.y,F.z),d.push(tt/T),d.push(1-H/z),Z+=1}}for(let H=0;H<z;H++)for(let J=0;J<T;J++){const tt=u+J+D*H,j=u+J+D*(H+1),rt=u+(J+1)+D*(H+1),ht=u+(J+1)+D*H;c.push(tt,j,ht),c.push(j,rt,ht),C+=6}a.addGroup(f,C,b),f+=C,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(r){const t={};for(let e=0;e<r.length;e++){const n=ys(r[e]);for(const i in n)t[i]=n[i]}return t}function Hf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function hu(r){return r.getRenderTarget()===null?r.outputColorSpace:oe.workingColorSpace}const Gf={clone:ys,merge:Ge};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uu extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends uu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,$i=1;class qf extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qe(Zi,$i,t,e);i.layers=this.layers,this.add(i);const s=new qe(Zi,$i,t,e);s.layers=this.layers,this.add(s);const o=new qe(Zi,$i,t,e);o.layers=this.layers,this.add(o);const a=new qe(Zi,$i,t,e);a.layers=this.layers,this.add(a);const c=new qe(Zi,$i,t,e);c.layers=this.layers,this.add(c);const l=new qe(Zi,$i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class du extends Ie{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===yn?de:ln),this.texture=new du(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xe(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ai});s.uniforms.tEquirect.value=e;const o=new ue(i,s),a=e.minFilter;return e.minFilter===qs&&(e.minFilter=on),new qf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Jo=new R,Yf=new R,Kf=new Zt;let yi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jo.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),i=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const vi=new Fi,Tr=new R;class rc{constructor(t=new yi,e=new yi,n=new yi,i=new yi,s=new yi,o=new yi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],p=i[11],m=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,p-f,y-m).normalize(),n[1].setComponents(c+s,u+l,p+f,y+m).normalize(),n[2].setComponents(c+o,u+h,p+g,y+_).normalize(),n[3].setComponents(c-o,u-h,p-g,y-_).normalize(),n[4].setComponents(c-a,u-d,p-x,y-v).normalize(),e===Kn)n[5].setComponents(c+a,u+d,p+x,y+v).normalize();else if(e===ro)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Tr.x=i.normal.x>0?t.max.x:t.min.x,Tr.y=i.normal.y>0?t.max.y:t.min.y,Tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,l),f.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let x=0,p=g.length;x<p;x++){const m=g[x];e?r.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):r.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class vo extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const _=m*u-o;for(let v=0;v<l;v++){const y=v*d-s;g.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){const v=_+l*m,y=_+l*(m+1),P=_+1+l*(m+1),S=_+1+l*m;f.push(v,y,S),f.push(y,P,S)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.width,t.height,t.widthSegments,t.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:$f,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:xp,color_pars_vertex:vp,color_vertex:_p,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:bp,emissivemap_pars_fragment:Ap,colorspace_fragment:Tp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Wp,envmap_vertex:Dp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Bp,gradientmap_pars_fragment:zp,lightmap_fragment:Op,lightmap_pars_fragment:kp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Xp,lights_toon_pars_fragment:qp,lights_phong_fragment:jp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:$p,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:cm,metalnessmap_pars_fragment:lm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:vm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:bm,premultiplied_alpha_fragment:Am,project_vertex:Tm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Om,specularmap_fragment:km,specularmap_pars_fragment:Vm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:jm,uv_vertex:Ym,worldpos_vertex:Km,background_vert:Zm,background_frag:$m,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:vg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:wg,meshtoon_frag:Sg,points_vert:Eg,points_frag:bg,shadow_vert:Ag,shadow_frag:Tg,sprite_vert:Rg,sprite_frag:Cg},mt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ge([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ge([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ge([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ge([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ge([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ge([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ge([mt.common,mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ge([mt.lights,mt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Tn.physical={uniforms:Ge([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Rr={r:0,b:0,g:0};function Pg(r,t,e,n,i,s,o){const a=new Nt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===mo)?(h===void 0&&(h=new ue(new Xe(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ys(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(d!==v||u!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new vo(2,2),new Ii({name:"BackgroundMaterial",uniforms:ys(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(Rr,hu(r)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function Lg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(L,D,U,Z,C){let F=!1;if(o){const H=x(Z,U,D);l!==H&&(l=H,f(l.object)),F=m(L,Z,U,C),F&&_(L,Z,U,C)}else{const H=D.wireframe===!0;(l.geometry!==Z.id||l.program!==U.id||l.wireframe!==H)&&(l.geometry=Z.id,l.program=U.id,l.wireframe=H,F=!0)}C!==null&&e.update(C,r.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,z(L,D,U,Z),C!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,D,U){const Z=U.wireframe===!0;let C=a[L.id];C===void 0&&(C={},a[L.id]=C);let F=C[D.id];F===void 0&&(F={},C[D.id]=F);let H=F[Z];return H===void 0&&(H=p(u()),F[Z]=H),H}function p(L){const D=[],U=[],Z=[];for(let C=0;C<i;C++)D[C]=0,U[C]=0,Z[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:Z,object:L,attributes:{},index:null}}function m(L,D,U,Z){const C=l.attributes,F=D.attributes;let H=0;const J=U.getAttributes();for(const tt in J)if(J[tt].location>=0){const rt=C[tt];let ht=F[tt];if(ht===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),rt===void 0||rt.attribute!==ht||ht&&rt.data!==ht.data)return!0;H++}return l.attributesNum!==H||l.index!==Z}function _(L,D,U,Z){const C={},F=D.attributes;let H=0;const J=U.getAttributes();for(const tt in J)if(J[tt].location>=0){let rt=F[tt];rt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));const ht={};ht.attribute=rt,rt&&rt.data&&(ht.data=rt.data),C[tt]=ht,H++}l.attributes=C,l.attributesNum=H,l.index=Z}function v(){const L=l.newAttributes;for(let D=0,U=L.length;D<U;D++)L[D]=0}function y(L){P(L,0)}function P(L,D){const U=l.newAttributes,Z=l.enabledAttributes,C=l.attributeDivisors;U[L]=1,Z[L]===0&&(r.enableVertexAttribArray(L),Z[L]=1),C[L]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),C[L]=D)}function S(){const L=l.newAttributes,D=l.enabledAttributes;for(let U=0,Z=D.length;U<Z;U++)D[U]!==L[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function T(L,D,U,Z,C,F,H){H===!0?r.vertexAttribIPointer(L,D,U,C,F):r.vertexAttribPointer(L,D,U,Z,C,F)}function z(L,D,U,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const C=Z.attributes,F=U.getAttributes(),H=D.defaultAttributeValues;for(const J in F){const tt=F[J];if(tt.location>=0){let j=C[J];if(j===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const rt=j.normalized,ht=j.itemSize,wt=e.get(j);if(wt===void 0)continue;const ft=wt.buffer,Ct=wt.type,At=wt.bytesPerElement,It=n.isWebGL2===!0&&(Ct===r.INT||Ct===r.UNSIGNED_INT||j.gpuType===jh);if(j.isInterleavedBufferAttribute){const qt=j.data,q=qt.stride,Y=j.offset;if(qt.isInstancedInterleavedBuffer){for(let it=0;it<tt.locationSize;it++)P(tt.location+it,qt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let it=0;it<tt.locationSize;it++)y(tt.location+it);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let it=0;it<tt.locationSize;it++)T(tt.location+it,ht/tt.locationSize,Ct,rt,q*At,(Y+ht/tt.locationSize*it)*At,It)}else{if(j.isInstancedBufferAttribute){for(let qt=0;qt<tt.locationSize;qt++)P(tt.location+qt,j.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let qt=0;qt<tt.locationSize;qt++)y(tt.location+qt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let qt=0;qt<tt.locationSize;qt++)T(tt.location+qt,ht/tt.locationSize,Ct,rt,ht*At,ht/tt.locationSize*qt*At,It)}}else if(H!==void 0){const rt=H[J];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(tt.location,rt);break;case 3:r.vertexAttrib3fv(tt.location,rt);break;case 4:r.vertexAttrib4fv(tt.location,rt);break;default:r.vertexAttrib1fv(tt.location,rt)}}}}S()}function b(){k();for(const L in a){const D=a[L];for(const U in D){const Z=D[U];for(const C in Z)g(Z[C].object),delete Z[C];delete D[U]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const D=a[L.id];for(const U in D){const Z=D[U];for(const C in Z)g(Z[C].object),delete Z[C];delete D[U]}delete a[L.id]}function B(L){for(const D in a){const U=a[D];if(U[L.id]===void 0)continue;const Z=U[L.id];for(const C in Z)g(Z[C].object),delete Z[C];delete U[L.id]}}function k(){N(),h=!0,l!==c&&(l=c,f(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:k,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function Ig(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Dg(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=o||t.has("OES_texture_float"),P=v&&y,S=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:S}}function Ug(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new yi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const _=s?0:n,v=_*4;let y=m.clippingState||null;c.value=y,y=h(g,u,v,f);for(let P=0;P!==v;++P)y[P]=e[P];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Ng(r){let t=new WeakMap;function e(o,a){return a===Jr?o.mapping=gs:a===Ba&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jr||a===Ba)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jf(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class oc extends uu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,wl=[.125,.215,.35,.446,.526,.582],Si=20,Qo=new oc,Sl=new Nt;let ta=null,ea=0,na=0;const Mi=(1+Math.sqrt(5))/2,Ji=1/Mi,El=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Mi,Ji),new R(0,Mi,-Ji),new R(Ji,0,Mi),new R(-Ji,0,Mi),new R(Mi,Ji,0),new R(-Mi,Ji,0)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:js,format:cn,colorSpace:$n,depthBuffer:!1},i=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(s)),this._blurMaterial=Bg(s,t,e)}return i}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,i){const a=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Sl),h.toneMapping=ci,h.autoClear=!1;const f=new cu({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new ue(new Xe,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Sl),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Cr(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gs||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=El[(i-1)%El.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ue(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Si-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const m=[];let _=0;for(let T=0;T<Si;++T){const z=T/x,b=Math.exp(-z*z/2);m.push(b),T===0?_+=b:T<p&&(_+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const y=this._sizeLods[i],P=3*y*(i>v-cs?i-v+cs:0),S=4*(this._cubeSize-y);Cr(e,P,S,3*y,2*y),c.setRenderTarget(e),c.render(d,Qo)}}function Fg(r){const t=[],e=[],n=[];let i=r;const s=r-cs+1+wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-cs?c=wl[o-r+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),v=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,z=S>2?0:-1,b=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];_.set(b,x*g*S),v.set(u,p*g*S);const E=[S,S,S,S,S,S];y.set(E,m*g*S)}const P=new Fe;P.setAttribute("position",new wn(_,x)),P.setAttribute("uv",new wn(v,p)),P.setAttribute("faceIndex",new wn(y,m)),t.push(P),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(r,t,e){const n=new Li(r,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Bg(r,t,e){const n=new Float32Array(Si),i=new R(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Tl(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rl(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jr||c===Ba,h=c===gs||c===xs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new bl(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new bl(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Og(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kg(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],r.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){const P=_[v+0],S=_[v+1],T=_[v+2];u.push(P,S,S,T,T,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const P=v+0,S=v+1,T=v+2;u.push(P,S,S,T,T,P)}}else return;const p=new(iu(u)?lu:sc)(u,1);p.version=x;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Vg(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){r.drawElements(s,g,a,f*c),e.update(g,s,1)}function d(f,g,x){if(x===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*c,x),e.update(g,s,x)}function u(f,g,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];e.update(m,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Hg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gg(r,t){return r[0]-t[0]}function Wg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Xg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ne,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let L=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let z=0;_===!0&&(z=1),v===!0&&(z=2),y===!0&&(z=3);let b=h.attributes.position.count*z,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const B=new Float32Array(b*E*4*g),k=new ou(B,b,E,g);k.type=Yn,k.needsUpdate=!0;const N=z*4;for(let D=0;D<g;D++){const U=P[D],Z=S[D],C=T[D],F=b*E*4*D;for(let H=0;H<U.count;H++){const J=H*N;_===!0&&(o.fromBufferAttribute(U,H),B[F+J+0]=o.x,B[F+J+1]=o.y,B[F+J+2]=o.z,B[F+J+3]=0),v===!0&&(o.fromBufferAttribute(Z,H),B[F+J+4]=o.x,B[F+J+5]=o.y,B[F+J+6]=o.z,B[F+J+7]=0),y===!0&&(o.fromBufferAttribute(C,H),B[F+J+8]=o.x,B[F+J+9]=o.y,B[F+J+10]=o.z,B[F+J+11]=C.itemSize===4?o.w:1)}}x={count:g,texture:k,size:new Ht(b,E)},s.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let _=0;_<u.length;_++)p+=u[_];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const f=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){const y=g[v];y[0]=v,y[1]=u[v]}g.sort(Wg);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Gg);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],P=y[0],S=y[1];P!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+v)!==x[P]&&h.setAttribute("morphTarget"+v,x[P]),p&&h.getAttribute("morphNormal"+v)!==p[P]&&h.setAttribute("morphNormal"+v,p[P]),i[v]=S,m+=S):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const _=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function qg(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class pu extends Ie{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Pi,h!==Pi&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ri),n===void 0&&h===vs&&(n=Ci),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mu=new Ie,gu=new pu(1,1);gu.compareFunction=nu;const xu=new ou,vu=new Pf,_u=new du,Cl=[],Pl=[],Ll=new Float32Array(16),Il=new Float32Array(9),Dl=new Float32Array(4);function Ms(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Cl[i];if(s===void 0&&(s=new Float32Array(i),Cl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ce(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function _o(r,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function jg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Ce(e,t)}}function Kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Ce(e,t)}}function Zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Ce(e,t)}}function $g(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Dl.set(n),r.uniformMatrix2fv(this.addr,!1,Dl),Ce(e,n)}}function Jg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Il.set(n),r.uniformMatrix3fv(this.addr,!1,Il),Ce(e,n)}}function Qg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ll.set(n),r.uniformMatrix4fv(this.addr,!1,Ll),Ce(e,n)}}function t0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function e0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Ce(e,t)}}function n0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Ce(e,t)}}function i0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Ce(e,t)}}function s0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Ce(e,t)}}function o0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Ce(e,t)}}function a0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Ce(e,t)}}function c0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?gu:mu;e.setTexture2D(t||s,i)}function l0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function h0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_u,i)}function u0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function d0(r){switch(r){case 5126:return jg;case 35664:return Yg;case 35665:return Kg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(r,t){r.uniform1fv(this.addr,t)}function p0(r,t){const e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function m0(r,t){const e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function g0(r,t){const e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function x0(r,t){const e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function v0(r,t){const e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function _0(r,t){const e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function y0(r,t){r.uniform1iv(this.addr,t)}function M0(r,t){r.uniform2iv(this.addr,t)}function w0(r,t){r.uniform3iv(this.addr,t)}function S0(r,t){r.uniform4iv(this.addr,t)}function E0(r,t){r.uniform1uiv(this.addr,t)}function b0(r,t){r.uniform2uiv(this.addr,t)}function A0(r,t){r.uniform3uiv(this.addr,t)}function T0(r,t){r.uniform4uiv(this.addr,t)}function R0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mu,s[o])}function C0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vu,s[o])}function P0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_u,s[o])}function L0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xu,s[o])}function I0(r){switch(r){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return v0;case 35676:return _0;case 5124:case 35670:return y0;case 35667:case 35671:return M0;case 35668:case 35672:return w0;case 35669:case 35673:return S0;case 5125:return E0;case 36294:return b0;case 36295:return A0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}class D0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ul(r,t){r.seq.push(t),r.map[t.id]=t}function F0(r,t,e){const n=r.name,i=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),o=ia.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ul(e,l===void 0?new D0(a,r,t):new U0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new N0(a),Ul(e,d)),e=d}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);F0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Nl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const B0=37297;let z0=0;function O0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function k0(r){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(r);let n;switch(t===e?n="":t===so&&e===io?n="LinearDisplayP3ToLinearSRGB":t===io&&e===so&&(n="LinearSRGBToLinearDisplayP3"),r){case $n:case xo:return[n,"LinearTransferOETF"];case de:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Fl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O0(r.getShaderSource(t),o)}else return i}function V0(r,t){const e=k0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function H0(r,t){let e;switch(t){case Nd:e="Linear";break;case Fd:e="Reinhard";break;case Bd:e="OptimizedCineon";break;case zd:e="ACESFilmic";break;case kd:e="AgX";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function G0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function W0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function X0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ls(r){return r!==""}function Bl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(r){return r.replace(j0,K0)}const Y0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function K0(r,t){let e=jt[t];if(e===void 0){const n=Y0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(r){return r.replace(Z0,$0)}function $0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ld?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Q0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case xs:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function ex(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case Dd:t="ENVMAP_BLENDING_MIX";break;case Ud:t="ENVMAP_BLENDING_ADD";break}return t}function nx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ix(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=J0(e),l=Q0(e),h=tx(e),d=ex(e),u=nx(e),f=e.isWebGL2?"":G0(e),g=W0(e),x=X0(s),p=i.createProgram();let m,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ls).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(m=[kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[f,kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?jt.tonemapping_pars_fragment:"",e.toneMapping!==ci?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=Ha(o),o=Bl(o,e),o=zl(o,e),a=Ha(a),a=Bl(a,e),a=zl(a,e),o=Ol(o),a=Ol(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+m+o,P=v+_+a,S=Nl(i,i.VERTEX_SHADER,y),T=Nl(i,i.FRAGMENT_SHADER,P);i.attachShader(p,S),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function z(k){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(S).trim(),D=i.getShaderInfoLog(T).trim();let U=!0,Z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,S,T);else{const C=Fl(i,S,"vertex"),F=Fl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+C+`
`+F)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||D==="")&&(Z=!1);Z&&(k.diagnostics={runnable:U,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:D,prefix:_}})}i.deleteShader(S),i.deleteShader(T),b=new Yr(i,p),E=q0(i,p)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,B0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}let sx=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ox(t),e.set(t,n)),n}}class ox{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}}function ax(r,t,e,n,i,s,o){const a=new ic,c=new rx,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,E,B,k,N){const L=k.fog,D=N.geometry,U=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),C=Z&&Z.mapping===mo?Z.image.height:null,F=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const H=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=H!==void 0?H.length:0;let tt=0;D.morphAttributes.position!==void 0&&(tt=1),D.morphAttributes.normal!==void 0&&(tt=2),D.morphAttributes.color!==void 0&&(tt=3);let j,rt,ht,wt;if(F){const se=Tn[F];j=se.vertexShader,rt=se.fragmentShader}else j=b.vertexShader,rt=b.fragmentShader,c.update(b),ht=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);const ft=r.getRenderTarget(),Ct=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,It=!!b.map,qt=!!b.matcap,q=!!Z,Y=!!b.aoMap,it=!!b.lightMap,W=!!b.bumpMap,st=!!b.normalMap,vt=!!b.displacementMap,at=!!b.emissiveMap,A=!!b.metalnessMap,M=!!b.roughnessMap,V=b.anisotropy>0,X=b.clearcoat>0,et=b.iridescence>0,nt=b.sheen>0,lt=b.transmission>0,ot=V&&!!b.anisotropyMap,gt=X&&!!b.clearcoatMap,_t=X&&!!b.clearcoatNormalMap,Ft=X&&!!b.clearcoatRoughnessMap,ct=et&&!!b.iridescenceMap,Jt=et&&!!b.iridescenceThicknessMap,zt=nt&&!!b.sheenColorMap,bt=nt&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,Mt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,kt=lt&&!!b.transmissionMap,le=lt&&!!b.thicknessMap,Gt=!!b.gradientMap,ut=!!b.alphaMap,O=b.alphaTest>0,pt=!!b.alphaHash,dt=!!b.extensions,Ut=!!D.attributes.uv1,Dt=!!D.attributes.uv2,Ot=!!D.attributes.uv3;let Qt=ci;return b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Qt=r.toneMapping),{isWebGL2:h,shaderID:F,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:rt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:At,instancing:Ct,instancingColor:Ct&&N.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:$n,map:It,matcap:qt,envMap:q,envMapMode:q&&Z.mapping,envMapCubeUVHeight:C,aoMap:Y,lightMap:it,bumpMap:W,normalMap:st,displacementMap:u&&vt,emissiveMap:at,normalMapObjectSpace:st&&b.normalMapType===nf,normalMapTangentSpace:st&&b.normalMapType===go,metalnessMap:A,roughnessMap:M,anisotropy:V,anisotropyMap:ot,clearcoat:X,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ft,iridescence:et,iridescenceMap:ct,iridescenceThicknessMap:Jt,sheen:nt,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:Tt,specularColorMap:Mt,specularIntensityMap:Rt,transmission:lt,transmissionMap:kt,thicknessMap:le,gradientMap:Gt,opaque:b.transparent===!1&&b.blending===Ri,alphaMap:ut,alphaTest:O,alphaHash:pt,combine:b.combine,mapUv:It&&x(b.map.channel),aoMapUv:Y&&x(b.aoMap.channel),lightMapUv:it&&x(b.lightMap.channel),bumpMapUv:W&&x(b.bumpMap.channel),normalMapUv:st&&x(b.normalMap.channel),displacementMapUv:vt&&x(b.displacementMap.channel),emissiveMapUv:at&&x(b.emissiveMap.channel),metalnessMapUv:A&&x(b.metalnessMap.channel),roughnessMapUv:M&&x(b.roughnessMap.channel),anisotropyMapUv:ot&&x(b.anisotropyMap.channel),clearcoatMapUv:gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:_t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Tt&&x(b.specularMap.channel),specularColorMapUv:Mt&&x(b.specularColorMap.channel),specularIntensityMapUv:Rt&&x(b.specularIntensityMap.channel),transmissionMapUv:kt&&x(b.transmissionMap.channel),thicknessMapUv:le&&x(b.thicknessMap.channel),alphaMapUv:ut&&x(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(st||V),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:Ot,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(It||ut),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:dt&&b.extensions.derivatives===!0,extensionFragDepth:dt&&b.extensions.fragDepth===!0,extensionDrawBuffers:dt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)E.push(B),E.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(E,b),v(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function _(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const E=g[b.type];let B;if(E){const k=Tn[E];B=Gf.clone(k.uniforms)}else B=b.uniforms;return B}function P(b,E){let B;for(let k=0,N=l.length;k<N;k++){const L=l[k];if(L.cacheKey===E){B=L,++B.usedTimes;break}}return B===void 0&&(B=new ix(r,E,b,s),l.push(B)),B}function S(b){if(--b.usedTimes===0){const E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:z}}function cx(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Vl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,x,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function a(d,u,f,g,x,p){const m=o(d,u,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(d,u,f,g,x,p){const m=o(d,u,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||lx),n.length>1&&n.sort(u||Vl),i.length>1&&i.sort(u||Vl)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function hx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Hl,r.set(n,[o])):i>=s.length?(o=new Hl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function ux(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function dx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let fx=0;function px(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function mx(r,t){const e=new ux,n=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new Lt,a=new Lt;function c(h,d){let u=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let x=0,p=0,m=0,_=0,v=0,y=0,P=0,S=0,T=0,z=0,b=0;h.sort(px);const E=d===!0?Math.PI:1;for(let k=0,N=h.length;k<N;k++){const L=h[k],D=L.color,U=L.intensity,Z=L.distance,C=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*U*E,f+=D.g*U*E,g+=D.b*U*E;else if(L.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(L.sh.coefficients[F],U);b++}else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const H=L.shadow,J=n.get(L);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.directionalShadow[x]=J,i.directionalShadowMap[x]=C,i.directionalShadowMatrix[x]=L.shadow.matrix,y++}i.directional[x]=F,x++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(D).multiplyScalar(U*E),F.distance=Z,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,i.spot[m]=F;const H=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,H.updateMatrices(L),L.castShadow&&z++),i.spotLightMatrix[m]=H.matrix,L.castShadow){const J=n.get(L);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=C,S++}m++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=F,_++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const H=L.shadow,J=n.get(L);J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=C,i.pointShadowMatrix[p]=L.shadow.matrix,P++}i.point[p]=F,p++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(U*E),F.groundColor.copy(L.groundColor).multiplyScalar(U*E),i.hemi[v]=F,v++}}_>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==x||B.pointLength!==p||B.spotLength!==m||B.rectAreaLength!==_||B.hemiLength!==v||B.numDirectionalShadows!==y||B.numPointShadows!==P||B.numSpotShadows!==S||B.numSpotMaps!==T||B.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=S+T-z,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=b,B.directionalLength=x,B.pointLength=p,B.spotLength=m,B.rectAreaLength=_,B.hemiLength=v,B.numDirectionalShadows=y,B.numPointShadows=P,B.numSpotShadows=S,B.numSpotMaps=T,B.numLightProbes=b,i.version=fx++)}function l(h,d){let u=0,f=0,g=0,x=0,p=0;const m=d.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const y=h[_];if(y.isDirectionalLight){const P=i.directional[u];P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),u++}else if(y.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const P=i.rectArea[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const P=i.point[f];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function Gl(r,t){const e=new mx(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gx(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Gl(r,t),e.set(s,[c])):o>=a.length?(c=new Gl(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class xx extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vx extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mx(r,t,e){let n=new rc;const i=new Ht,s=new Ht,o=new ne,a=new xx({depthPacking:ef}),c=new vx,l={},h=e.maxTextureSize,d={[hi]:Ke,[Ke]:hi,[vn]:vn},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:_x,fragmentShader:yx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ue(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let m=this.type;this.render=function(S,T,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const b=r.getRenderTarget(),E=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ai),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=m!==Wn&&this.type===Wn,L=m===Wn&&this.type!==Wn;for(let D=0,U=S.length;D<U;D++){const Z=S[D],C=Z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const F=C.getFrameExtents();if(i.multiply(F),s.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/F.x),i.x=s.x*F.x,C.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/F.y),i.y=s.y*F.y,C.mapSize.y=s.y)),C.map===null||N===!0||L===!0){const J=this.type!==Wn?{minFilter:Ue,magFilter:Ue}:{};C.map!==null&&C.map.dispose(),C.map=new Li(i.x,i.y,J),C.map.texture.name=Z.name+".shadowMap",C.camera.updateProjectionMatrix()}r.setRenderTarget(C.map),r.clear();const H=C.getViewportCount();for(let J=0;J<H;J++){const tt=C.getViewport(J);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),k.viewport(o),C.updateMatrices(Z,J),n=C.getFrustum(),y(T,z,C.camera,Z,this.type)}C.isPointLightShadow!==!0&&this.type===Wn&&_(C,z),C.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,E,B)};function _(S,T){const z=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Li(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,z,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,z,f,x,null)}function v(S,T,z,b){let E=null;const B=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)E=B;else if(E=z.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=E.uuid,N=T.uuid;let L=l[k];L===void 0&&(L={},l[k]=L);let D=L[N];D===void 0&&(D=E.clone(),L[N]=D,T.addEventListener("dispose",P)),E=D}if(E.visible=T.visible,E.wireframe=T.wireframe,b===Wn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=r.properties.get(E);k.light=z}return E}function y(S,T,z,b,E){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Wn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);const N=t.update(S),L=S.material;if(Array.isArray(L)){const D=N.groups;for(let U=0,Z=D.length;U<Z;U++){const C=D[U],F=L[C.materialIndex];if(F&&F.visible){const H=v(S,F,b,E);S.onBeforeShadow(r,S,T,z,N,H,C),r.renderBufferDirect(z,null,N,H,S,C),S.onAfterShadow(r,S,T,z,N,H,C)}}}else if(L.visible){const D=v(S,L,b,E);S.onBeforeShadow(r,S,T,z,N,D,null),r.renderBufferDirect(z,null,N,D,S,null),S.onAfterShadow(r,S,T,z,N,D,null)}}const k=S.children;for(let N=0,L=k.length;N<L;N++)y(k[N],T,z,b,E)}function P(S){S.target.removeEventListener("dispose",P);for(const z in l){const b=l[z],E=S.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function wx(r,t,e){const n=e.isWebGL2;function i(){let O=!1;const pt=new ne;let dt=null;const Ut=new ne(0,0,0,0);return{setMask:function(Dt){dt!==Dt&&!O&&(r.colorMask(Dt,Dt,Dt,Dt),dt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,Ot,Qt,ie,se){se===!0&&(Dt*=ie,Ot*=ie,Qt*=ie),pt.set(Dt,Ot,Qt,ie),Ut.equals(pt)===!1&&(r.clearColor(Dt,Ot,Qt,ie),Ut.copy(pt))},reset:function(){O=!1,dt=null,Ut.set(-1,0,0,0)}}}function s(){let O=!1,pt=null,dt=null,Ut=null;return{setTest:function(Dt){Dt?At(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Dt){pt!==Dt&&!O&&(r.depthMask(Dt),pt=Dt)},setFunc:function(Dt){if(dt!==Dt){switch(Dt){case Ad:r.depthFunc(r.NEVER);break;case Td:r.depthFunc(r.ALWAYS);break;case Rd:r.depthFunc(r.LESS);break;case $r:r.depthFunc(r.LEQUAL);break;case Cd:r.depthFunc(r.EQUAL);break;case Pd:r.depthFunc(r.GEQUAL);break;case Ld:r.depthFunc(r.GREATER);break;case Id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){Ut!==Dt&&(r.clearDepth(Dt),Ut=Dt)},reset:function(){O=!1,pt=null,dt=null,Ut=null}}}function o(){let O=!1,pt=null,dt=null,Ut=null,Dt=null,Ot=null,Qt=null,ie=null,se=null;return{setTest:function(he){O||(he?At(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(he){pt!==he&&!O&&(r.stencilMask(he),pt=he)},setFunc:function(he,Ve,Sn){(dt!==he||Ut!==Ve||Dt!==Sn)&&(r.stencilFunc(he,Ve,Sn),dt=he,Ut=Ve,Dt=Sn)},setOp:function(he,Ve,Sn){(Ot!==he||Qt!==Ve||ie!==Sn)&&(r.stencilOp(he,Ve,Sn),Ot=he,Qt=Ve,ie=Sn)},setLocked:function(he){O=he},setClear:function(he){se!==he&&(r.clearStencil(he),se=he)},reset:function(){O=!1,pt=null,dt=null,Ut=null,Dt=null,Ot=null,Qt=null,ie=null,se=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,P=null,S=null,T=null,z=null,b=new Nt(0,0,0),E=0,B=!1,k=null,N=null,L=null,D=null,U=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,F=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),C=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),C=F>=2);let J=null,tt={};const j=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),ht=new ne().fromArray(j),wt=new ne().fromArray(rt);function ft(O,pt,dt,Ut){const Dt=new Uint8Array(4),Ot=r.createTexture();r.bindTexture(O,Ot),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<dt;Qt++)n&&(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)?r.texImage3D(pt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(pt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return Ot}const Ct={};Ct[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Ct[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ct[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),At(r.DEPTH_TEST),c.setFunc($r),at(!1),A(Ec),At(r.CULL_FACE),st(ai);function At(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function It(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function qt(O,pt){return f[O]!==pt?(r.bindFramebuffer(O,pt),f[O]=pt,n&&(O===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=pt),O===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=pt)),!0):!1}function q(O,pt){let dt=x,Ut=!1;if(O)if(dt=g.get(pt),dt===void 0&&(dt=[],g.set(pt,dt)),O.isWebGLMultipleRenderTargets){const Dt=O.texture;if(dt.length!==Dt.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++)dt[Ot]=r.COLOR_ATTACHMENT0+Ot;dt.length=Dt.length,Ut=!0}}else dt[0]!==r.COLOR_ATTACHMENT0&&(dt[0]=r.COLOR_ATTACHMENT0,Ut=!0);else dt[0]!==r.BACK&&(dt[0]=r.BACK,Ut=!0);Ut&&(e.isWebGL2?r.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Y(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const it={[wi]:r.FUNC_ADD,[ud]:r.FUNC_SUBTRACT,[dd]:r.FUNC_REVERSE_SUBTRACT};if(n)it[Rc]=r.MIN,it[Cc]=r.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(it[Rc]=O.MIN_EXT,it[Cc]=O.MAX_EXT)}const W={[fd]:r.ZERO,[pd]:r.ONE,[md]:r.SRC_COLOR,[Na]:r.SRC_ALPHA,[Md]:r.SRC_ALPHA_SATURATE,[_d]:r.DST_COLOR,[xd]:r.DST_ALPHA,[gd]:r.ONE_MINUS_SRC_COLOR,[Fa]:r.ONE_MINUS_SRC_ALPHA,[yd]:r.ONE_MINUS_DST_COLOR,[vd]:r.ONE_MINUS_DST_ALPHA,[wd]:r.CONSTANT_COLOR,[Sd]:r.ONE_MINUS_CONSTANT_COLOR,[Ed]:r.CONSTANT_ALPHA,[bd]:r.ONE_MINUS_CONSTANT_ALPHA};function st(O,pt,dt,Ut,Dt,Ot,Qt,ie,se,he){if(O===ai){m===!0&&(It(r.BLEND),m=!1);return}if(m===!1&&(At(r.BLEND),m=!0),O!==hd){if(O!==_||he!==B){if((v!==wi||S!==wi)&&(r.blendEquation(r.FUNC_ADD),v=wi,S=wi),he)switch(O){case Ri:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.ONE,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,P=null,T=null,z=null,b.set(0,0,0),E=0,_=O,B=he}return}Dt=Dt||pt,Ot=Ot||dt,Qt=Qt||Ut,(pt!==v||Dt!==S)&&(r.blendEquationSeparate(it[pt],it[Dt]),v=pt,S=Dt),(dt!==y||Ut!==P||Ot!==T||Qt!==z)&&(r.blendFuncSeparate(W[dt],W[Ut],W[Ot],W[Qt]),y=dt,P=Ut,T=Ot,z=Qt),(ie.equals(b)===!1||se!==E)&&(r.blendColor(ie.r,ie.g,ie.b,se),b.copy(ie),E=se),_=O,B=!1}function vt(O,pt){O.side===vn?It(r.CULL_FACE):At(r.CULL_FACE);let dt=O.side===Ke;pt&&(dt=!dt),at(dt),O.blending===Ri&&O.transparent===!1?st(ai):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ut=O.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),V(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(O){k!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),k=O)}function A(O){O!==ad?(At(r.CULL_FACE),O!==N&&(O===Ec?r.cullFace(r.BACK):O===cd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),N=O}function M(O){O!==L&&(C&&r.lineWidth(O),L=O)}function V(O,pt,dt){O?(At(r.POLYGON_OFFSET_FILL),(D!==pt||U!==dt)&&(r.polygonOffset(pt,dt),D=pt,U=dt)):It(r.POLYGON_OFFSET_FILL)}function X(O){O?At(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function et(O){O===void 0&&(O=r.TEXTURE0+Z-1),J!==O&&(r.activeTexture(O),J=O)}function nt(O,pt,dt){dt===void 0&&(J===null?dt=r.TEXTURE0+Z-1:dt=J);let Ut=tt[dt];Ut===void 0&&(Ut={type:void 0,texture:void 0},tt[dt]=Ut),(Ut.type!==O||Ut.texture!==pt)&&(J!==dt&&(r.activeTexture(dt),J=dt),r.bindTexture(O,pt||Ct[O]),Ut.type=O,Ut.texture=pt)}function lt(){const O=tt[J];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(O){ht.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ht.copy(O))}function kt(O){wt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function le(O,pt){let dt=d.get(pt);dt===void 0&&(dt=new WeakMap,d.set(pt,dt));let Ut=dt.get(O);Ut===void 0&&(Ut=r.getUniformBlockIndex(pt,O.name),dt.set(O,Ut))}function Gt(O,pt){const Ut=d.get(pt).get(O);h.get(pt)!==Ut&&(r.uniformBlockBinding(pt,Ut,O.__bindingPointIndex),h.set(pt,Ut))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,tt={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,P=null,S=null,T=null,z=null,b=new Nt(0,0,0),E=0,B=!1,k=null,N=null,L=null,D=null,U=null,ht.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:At,disable:It,bindFramebuffer:qt,drawBuffers:q,useProgram:Y,setBlending:st,setMaterial:vt,setFlipSided:at,setCullFace:A,setLineWidth:M,setPolygonOffset:V,setScissorTest:X,activeTexture:et,bindTexture:nt,unbindTexture:lt,compressedTexImage2D:ot,compressedTexImage3D:gt,texImage2D:Tt,texImage3D:Mt,updateUBOMapping:le,uniformBlockBinding:Gt,texStorage2D:zt,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:Ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:Jt,scissor:Rt,viewport:kt,reset:ut}}function Sx(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Ys("canvas")}function x(A,M,V,X){let et=1;if((A.width>X||A.height>X)&&(et=X/Math.max(A.width,A.height)),et<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const nt=M?oo:Math.floor,lt=nt(et*A.width),ot=nt(et*A.height);d===void 0&&(d=g(lt,ot));const gt=V?g(lt,ot):d;return gt.width=lt,gt.height=ot,gt.getContext("2d").drawImage(A,0,0,lt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+lt+"x"+ot+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Va(A.width)&&Va(A.height)}function m(A){return a?!1:A.wrapS!==tn||A.wrapT!==tn||A.minFilter!==Ue&&A.minFilter!==on}function _(A,M){return A.generateMipmaps&&M&&A.minFilter!==Ue&&A.minFilter!==on}function v(A){r.generateMipmap(A)}function y(A,M,V,X,et=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt=M;if(M===r.RED&&(V===r.FLOAT&&(nt=r.R32F),V===r.HALF_FLOAT&&(nt=r.R16F),V===r.UNSIGNED_BYTE&&(nt=r.R8)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(nt=r.R8UI),V===r.UNSIGNED_SHORT&&(nt=r.R16UI),V===r.UNSIGNED_INT&&(nt=r.R32UI),V===r.BYTE&&(nt=r.R8I),V===r.SHORT&&(nt=r.R16I),V===r.INT&&(nt=r.R32I)),M===r.RG&&(V===r.FLOAT&&(nt=r.RG32F),V===r.HALF_FLOAT&&(nt=r.RG16F),V===r.UNSIGNED_BYTE&&(nt=r.RG8)),M===r.RGBA){const lt=et?no:oe.getTransfer(X);V===r.FLOAT&&(nt=r.RGBA32F),V===r.HALF_FLOAT&&(nt=r.RGBA16F),V===r.UNSIGNED_BYTE&&(nt=lt===pe?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function P(A,M,V){return _(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function S(A){return A===Ue||A===Lc||A===Co?r.NEAREST:r.LINEAR}function T(A){const M=A.target;M.removeEventListener("dispose",T),b(M),M.isVideoTexture&&h.delete(M)}function z(A){const M=A.target;M.removeEventListener("dispose",z),B(M)}function b(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,X=u.get(V);if(X){const et=X[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(A),Object.keys(X).length===0&&u.delete(V)}n.remove(A)}function E(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const V=A.source,X=u.get(V);delete X[M.__cacheKey],o.memory.textures--}function B(A){const M=A.texture,V=n.get(A),X=n.get(M);if(X.__webglTexture!==void 0&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(V.__webglFramebuffer[et]))for(let nt=0;nt<V.__webglFramebuffer[et].length;nt++)r.deleteFramebuffer(V.__webglFramebuffer[et][nt]);else r.deleteFramebuffer(V.__webglFramebuffer[et]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[et])}else{if(Array.isArray(V.__webglFramebuffer))for(let et=0;et<V.__webglFramebuffer.length;et++)r.deleteFramebuffer(V.__webglFramebuffer[et]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,nt=M.length;et<nt;et++){const lt=n.get(M[et]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(M[et])}n.remove(M),n.remove(A)}let k=0;function N(){k=0}function L(){const A=k;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),k+=1,A}function D(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function U(A,M){const V=n.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(V,A,M);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function Z(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ht(V,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function C(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ht(V,A,M);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function F(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){wt(V,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const H={[jn]:r.REPEAT,[tn]:r.CLAMP_TO_EDGE,[za]:r.MIRRORED_REPEAT},J={[Ue]:r.NEAREST,[Lc]:r.NEAREST_MIPMAP_NEAREST,[Co]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Hd]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},tt={[sf]:r.NEVER,[hf]:r.ALWAYS,[rf]:r.LESS,[nu]:r.LEQUAL,[of]:r.EQUAL,[lf]:r.GEQUAL,[af]:r.GREATER,[cf]:r.NOTEQUAL};function j(A,M,V){if(V?(r.texParameteri(A,r.TEXTURE_WRAP_S,H[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,H[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,H[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,J[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,J[M.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==tn||M.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,S(M.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==Ue&&M.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const X=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ue||M.minFilter!==Co&&M.minFilter!==qs||M.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===js&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function rt(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const X=M.source;let et=u.get(X);et===void 0&&(et={},u.set(X,et));const nt=D(M);if(nt!==A.__cacheKey){et[nt]===void 0&&(et[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[nt].usedTimes++;const lt=et[A.__cacheKey];lt!==void 0&&(et[A.__cacheKey].usedTimes--,lt.usedTimes===0&&E(M)),A.__cacheKey=nt,A.__webglTexture=et[nt].texture}return V}function ht(A,M,V){let X=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=r.TEXTURE_3D);const et=rt(A,M),nt=M.source;e.bindTexture(X,A.__webglTexture,r.TEXTURE0+V);const lt=n.get(nt);if(nt.version!==lt.__version||et===!0){e.activeTexture(r.TEXTURE0+V);const ot=oe.getPrimaries(oe.workingColorSpace),gt=M.colorSpace===ln?null:oe.getPrimaries(M.colorSpace),_t=M.colorSpace===ln||ot===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ft=m(M)&&p(M.image)===!1;let ct=x(M.image,Ft,!1,i.maxTextureSize);ct=at(M,ct);const Jt=p(ct)||a,zt=s.convert(M.format,M.colorSpace);let bt=s.convert(M.type),Tt=y(M.internalFormat,zt,bt,M.colorSpace,M.isVideoTexture);j(X,M,Jt);let Mt;const Rt=M.mipmaps,kt=a&&M.isVideoTexture!==!0&&Tt!==Qh,le=lt.__version===void 0||et===!0,Gt=P(M,ct,Jt);if(M.isDepthTexture)Tt=r.DEPTH_COMPONENT,a?M.type===Yn?Tt=r.DEPTH_COMPONENT32F:M.type===ri?Tt=r.DEPTH_COMPONENT24:M.type===Ci?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:M.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pi&&Tt===r.DEPTH_COMPONENT&&M.type!==Qa&&M.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ri,bt=s.convert(M.type)),M.format===vs&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,M.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ci,bt=s.convert(M.type))),le&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Tt,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Tt,ct.width,ct.height,0,zt,bt,null));else if(M.isDataTexture)if(Rt.length>0&&Jt){kt&&le&&e.texStorage2D(r.TEXTURE_2D,Gt,Tt,Rt[0].width,Rt[0].height);for(let ut=0,O=Rt.length;ut<O;ut++)Mt=Rt[ut],kt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,zt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,ut,Tt,Mt.width,Mt.height,0,zt,bt,Mt.data);M.generateMipmaps=!1}else kt?(le&&e.texStorage2D(r.TEXTURE_2D,Gt,Tt,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,zt,bt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,ct.width,ct.height,0,zt,bt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Tt,Rt[0].width,Rt[0].height,ct.depth);for(let ut=0,O=Rt.length;ut<O;ut++)Mt=Rt[ut],M.format!==cn?zt!==null?kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ct.depth,zt,Mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Tt,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ct.depth,zt,bt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,Tt,Mt.width,Mt.height,ct.depth,0,zt,bt,Mt.data)}else{kt&&le&&e.texStorage2D(r.TEXTURE_2D,Gt,Tt,Rt[0].width,Rt[0].height);for(let ut=0,O=Rt.length;ut<O;ut++)Mt=Rt[ut],M.format!==cn?zt!==null?kt?e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,Tt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,zt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,ut,Tt,Mt.width,Mt.height,0,zt,bt,Mt.data)}else if(M.isDataArrayTexture)kt?(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Tt,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,zt,bt,ct.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,ct.width,ct.height,ct.depth,0,zt,bt,ct.data);else if(M.isData3DTexture)kt?(le&&e.texStorage3D(r.TEXTURE_3D,Gt,Tt,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,zt,bt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,ct.width,ct.height,ct.depth,0,zt,bt,ct.data);else if(M.isFramebufferTexture){if(le)if(kt)e.texStorage2D(r.TEXTURE_2D,Gt,Tt,ct.width,ct.height);else{let ut=ct.width,O=ct.height;for(let pt=0;pt<Gt;pt++)e.texImage2D(r.TEXTURE_2D,pt,Tt,ut,O,0,zt,bt,null),ut>>=1,O>>=1}}else if(Rt.length>0&&Jt){kt&&le&&e.texStorage2D(r.TEXTURE_2D,Gt,Tt,Rt[0].width,Rt[0].height);for(let ut=0,O=Rt.length;ut<O;ut++)Mt=Rt[ut],kt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,zt,bt,Mt):e.texImage2D(r.TEXTURE_2D,ut,Tt,zt,bt,Mt);M.generateMipmaps=!1}else kt?(le&&e.texStorage2D(r.TEXTURE_2D,Gt,Tt,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,zt,bt,ct)):e.texImage2D(r.TEXTURE_2D,0,Tt,zt,bt,ct);_(M,Jt)&&v(X),lt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function wt(A,M,V){if(M.image.length!==6)return;const X=rt(A,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+V);const nt=n.get(et);if(et.version!==nt.__version||X===!0){e.activeTexture(r.TEXTURE0+V);const lt=oe.getPrimaries(oe.workingColorSpace),ot=M.colorSpace===ln?null:oe.getPrimaries(M.colorSpace),gt=M.colorSpace===ln||lt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const _t=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let ut=0;ut<6;ut++)!_t&&!Ft?ct[ut]=x(M.image[ut],!1,!0,i.maxCubemapSize):ct[ut]=Ft?M.image[ut].image:M.image[ut],ct[ut]=at(M,ct[ut]);const Jt=ct[0],zt=p(Jt)||a,bt=s.convert(M.format,M.colorSpace),Tt=s.convert(M.type),Mt=y(M.internalFormat,bt,Tt,M.colorSpace),Rt=a&&M.isVideoTexture!==!0,kt=nt.__version===void 0||X===!0;let le=P(M,Jt,zt);j(r.TEXTURE_CUBE_MAP,M,zt);let Gt;if(_t){Rt&&kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,le,Mt,Jt.width,Jt.height);for(let ut=0;ut<6;ut++){Gt=ct[ut].mipmaps;for(let O=0;O<Gt.length;O++){const pt=Gt[O];M.format!==cn?bt!==null?Rt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O,0,0,pt.width,pt.height,bt,Tt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O,Mt,pt.width,pt.height,0,bt,Tt,pt.data)}}}else{Gt=M.mipmaps,Rt&&kt&&(Gt.length>0&&le++,e.texStorage2D(r.TEXTURE_CUBE_MAP,le,Mt,ct[0].width,ct[0].height));for(let ut=0;ut<6;ut++)if(Ft){Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ct[ut].width,ct[ut].height,bt,Tt,ct[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Mt,ct[ut].width,ct[ut].height,0,bt,Tt,ct[ut].data);for(let O=0;O<Gt.length;O++){const dt=Gt[O].image[ut].image;Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O+1,0,0,dt.width,dt.height,bt,Tt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O+1,Mt,dt.width,dt.height,0,bt,Tt,dt.data)}}else{Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt,Tt,ct[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Mt,bt,Tt,ct[ut]);for(let O=0;O<Gt.length;O++){const pt=Gt[O];Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O+1,0,0,bt,Tt,pt.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,O+1,Mt,bt,Tt,pt.image[ut])}}}_(M,zt)&&v(r.TEXTURE_CUBE_MAP),nt.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ft(A,M,V,X,et,nt){const lt=s.convert(V.format,V.colorSpace),ot=s.convert(V.type),gt=y(V.internalFormat,lt,ot,V.colorSpace);if(!n.get(M).__hasExternalTextures){const Ft=Math.max(1,M.width>>nt),ct=Math.max(1,M.height>>nt);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,nt,gt,Ft,ct,M.depth,0,lt,ot,null):e.texImage2D(et,nt,gt,Ft,ct,0,lt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),st(M)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,et,n.get(V).__webglTexture,0,W(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,et,n.get(V).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(A,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let X=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||st(M)){const et=M.depthTexture;et&&et.isDepthTexture&&(et.type===Yn?X=r.DEPTH_COMPONENT32F:et.type===ri&&(X=r.DEPTH_COMPONENT24));const nt=W(M);st(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,X,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,X,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const X=W(M);V&&st(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,X,r.DEPTH24_STENCIL8,M.width,M.height):st(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const X=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let et=0;et<X.length;et++){const nt=X[et],lt=s.convert(nt.format,nt.colorSpace),ot=s.convert(nt.type),gt=y(nt.internalFormat,lt,ot,nt.colorSpace),_t=W(M);V&&st(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,gt,M.width,M.height):st(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,gt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,gt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const X=n.get(M.depthTexture).__webglTexture,et=W(M);if(M.depthTexture.format===Pi)st(M)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else if(M.depthTexture.format===vs)st(M)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function It(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]=r.createRenderbuffer(),Ct(M.__webglDepthbuffer[X],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ct(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(A,M,V){const X=n.get(A);M!==void 0&&ft(X.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&It(A)}function q(A){const M=A.texture,V=n.get(A),X=n.get(M);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=M.version,o.memory.textures++);const et=A.isWebGLCubeRenderTarget===!0,nt=A.isWebGLMultipleRenderTargets===!0,lt=p(A)||a;if(et){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let gt=0;gt<M.mipmaps.length;gt++)V.__webglFramebuffer[ot][gt]=r.createFramebuffer()}else V.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)V.__webglFramebuffer[ot]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(nt)if(i.drawBuffers){const ot=A.texture;for(let gt=0,_t=ot.length;gt<_t;gt++){const Ft=n.get(ot[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&st(A)===!1){const ot=nt?M:[M];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){const _t=ot[gt];V.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const Ft=s.convert(_t.format,_t.colorSpace),ct=s.convert(_t.type),Jt=y(_t.internalFormat,Ft,ct,_t.colorSpace,A.isXRRenderTarget===!0),zt=W(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Jt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),j(r.TEXTURE_CUBE_MAP,M,lt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)ft(V.__webglFramebuffer[ot][gt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else ft(V.__webglFramebuffer[ot],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);_(M,lt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ot=A.texture;for(let gt=0,_t=ot.length;gt<_t;gt++){const Ft=ot[gt],ct=n.get(Ft);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),j(r.TEXTURE_2D,Ft,lt),ft(V.__webglFramebuffer,A,Ft,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),_(Ft,lt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ot=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,X.__webglTexture),j(ot,M,lt),a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)ft(V.__webglFramebuffer[gt],A,M,r.COLOR_ATTACHMENT0,ot,gt);else ft(V.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,ot,0);_(M,lt)&&v(ot),e.unbindTexture()}A.depthBuffer&&It(A)}function Y(A){const M=p(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let X=0,et=V.length;X<et;X++){const nt=V[X];if(_(nt,M)){const lt=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ot=n.get(nt).__webglTexture;e.bindTexture(lt,ot),v(lt),e.unbindTexture()}}}function it(A){if(a&&A.samples>0&&st(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,X=A.height;let et=r.COLOR_BUFFER_BIT;const nt=[],lt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(A),gt=A.isWebGLMultipleRenderTargets===!0;if(gt)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){nt.push(r.COLOR_ATTACHMENT0+_t),A.depthBuffer&&nt.push(lt);const Ft=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Ft===!1&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),gt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[_t]),Ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[lt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[lt])),gt){const ct=n.get(M[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,V,X,0,0,V,X,et,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,ot.__webglColorRenderbuffer[_t]);const Ft=n.get(M[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function W(A){return Math.min(i.maxSamples,A.samples)}function st(A){const M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function at(A,M){const V=A.colorSpace,X=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ka||V!==$n&&V!==ln&&(oe.getTransfer(V)===pe?a===!1?t.has("EXT_sRGB")===!0&&X===cn?(A.format=ka,A.minFilter=on,A.generateMipmaps=!1):M=su.sRGBToLinear(M):(X!==cn||et!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=Z,this.setTexture3D=C,this.setTextureCube=F,this.rebindTextures=qt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=st}function Ex(r,t,e){const n=e.isWebGL2;function i(s,o=ln){let a;const c=oe.getTransfer(o);if(s===li)return r.UNSIGNED_BYTE;if(s===Yh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Gd)return r.BYTE;if(s===Wd)return r.SHORT;if(s===Qa)return r.UNSIGNED_SHORT;if(s===jh)return r.INT;if(s===ri)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===js)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xd)return r.ALPHA;if(s===cn)return r.RGBA;if(s===qd)return r.LUMINANCE;if(s===jd)return r.LUMINANCE_ALPHA;if(s===Pi)return r.DEPTH_COMPONENT;if(s===vs)return r.DEPTH_STENCIL;if(s===ka)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yd)return r.RED;if(s===Zh)return r.RED_INTEGER;if(s===Kd)return r.RG;if(s===$h)return r.RG_INTEGER;if(s===Jh)return r.RGBA_INTEGER;if(s===Po||s===Lo||s===Io||s===Do)if(c===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Do)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ic||s===Dc||s===Uc||s===Nc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ic)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fc||s===Bc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fc)return c===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zc||s===Oc||s===kc||s===Vc||s===Hc||s===Gc||s===Wc||s===Xc||s===qc||s===jc||s===Yc||s===Kc||s===Zc||s===$c)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zc)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$c)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uo||s===Jc||s===Qc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Uo)return c===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===tl||s===el||s===nl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===el)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ci?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class bx extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pn extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ax={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Tx extends Ni{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const x=e.getContextAttributes();let p=null,m=null;const _=[],v=[],y=new Ht;let P=null;const S=new qe;S.layers.enable(1),S.viewport=new ne;const T=new qe;T.layers.enable(2),T.viewport=new ne;const z=[S,T],b=new bx;b.layers.enable(1),b.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=_[j];return rt===void 0&&(rt=new sa,_[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=_[j];return rt===void 0&&(rt=new sa,_[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=_[j];return rt===void 0&&(rt=new sa,_[j]=rt),rt.getHandSpace()};function k(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const ht=_[rt];ht!==void 0&&(ht.update(j.inputSource,j.frame,l||o),ht.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",L);for(let j=0;j<_.length;j++){const rt=v[j];rt!==null&&(v[j]=null,_[j].disconnect(rt))}E=null,B=null,t.setRenderTarget(p),f=null,u=null,d=null,i=null,m=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Li(f.framebufferWidth,f.framebufferHeight,{format:cn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let rt=null,ht=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?vs:Pi,ht=x.stencil?Ci:ri);const ft={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),m=new Li(u.textureWidth,u.textureHeight,{format:cn,type:li,depthTexture:new pu(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Ct=t.properties.get(m);Ct.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(j){for(let rt=0;rt<j.removed.length;rt++){const ht=j.removed[rt],wt=v.indexOf(ht);wt>=0&&(v[wt]=null,_[wt].disconnect(ht))}for(let rt=0;rt<j.added.length;rt++){const ht=j.added[rt];let wt=v.indexOf(ht);if(wt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=v.length){v.push(ht),wt=Ct;break}else if(v[Ct]===null){v[Ct]=ht,wt=Ct;break}if(wt===-1)break}const ft=_[wt];ft&&ft.connect(ht)}}const D=new R,U=new R;function Z(j,rt,ht){D.setFromMatrixPosition(rt.matrixWorld),U.setFromMatrixPosition(ht.matrixWorld);const wt=D.distanceTo(U),ft=rt.projectionMatrix.elements,Ct=ht.projectionMatrix.elements,At=ft[14]/(ft[10]-1),It=ft[14]/(ft[10]+1),qt=(ft[9]+1)/ft[5],q=(ft[9]-1)/ft[5],Y=(ft[8]-1)/ft[0],it=(Ct[8]+1)/Ct[0],W=At*Y,st=At*it,vt=wt/(-Y+it),at=vt*-Y;rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=At+vt,M=It+vt,V=W-at,X=st+(wt-at),et=qt*It/M*A,nt=q*It/M*A;j.projectionMatrix.makePerspective(V,X,et,nt,A,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function C(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=T.near=S.near=j.near,b.far=T.far=S.far=j.far,(E!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,B=b.far);const rt=j.parent,ht=b.cameras;C(b,rt);for(let wt=0;wt<ht.length;wt++)C(ht[wt],rt);ht.length===2?Z(b,S,T):b.projectionMatrix.copy(S.projectionMatrix),F(j,b,rt)};function F(j,rt,ht){ht===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_s*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let H=null;function J(j,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let wt=!1;ht.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let ft=0;ft<ht.length;ft++){const Ct=ht[ft];let At=null;if(f!==null)At=f.getViewport(Ct);else{const qt=d.getViewSubImage(u,Ct);At=qt.viewport,ft===0&&(t.setRenderTargetTextures(m,qt.colorTexture,u.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(m))}let It=z[ft];It===void 0&&(It=new qe,It.layers.enable(ft),It.viewport=new ne,z[ft]=It),It.matrix.fromArray(Ct.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Ct.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(At.x,At.y,At.width,At.height),ft===0&&(b.matrix.copy(It.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(It)}}for(let ht=0;ht<_.length;ht++){const wt=v[ht],ft=_[ht];wt!==null&&ft!==void 0&&ft.update(wt,rt,l||o)}H&&H(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const tt=new fu;tt.setAnimationLoop(J),this.setAnimationLoop=function(j){H=j},this.dispose=function(){}}}function Rx(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,hu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cx(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(_,P);const S=t.render.frame;s[_.id]!==S&&(u(_),s[_.id]=S)}function h(_){const v=d();_.__bindingPointIndex=v;const y=r.createBuffer(),P=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,P,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=i[_.id],y=_.uniforms,P=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,T=y.length;S<T;S++){const z=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,E=z.length;b<E;b++){const B=z[b];if(f(B,S,b,P)===!0){const k=B.__offset,N=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let D=0;D<N.length;D++){const U=N[D],Z=x(U);typeof U=="number"||typeof U=="boolean"?(B.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,k+L,B.__data)):U.isMatrix3?(B.__data[0]=U.elements[0],B.__data[1]=U.elements[1],B.__data[2]=U.elements[2],B.__data[3]=0,B.__data[4]=U.elements[3],B.__data[5]=U.elements[4],B.__data[6]=U.elements[5],B.__data[7]=0,B.__data[8]=U.elements[6],B.__data[9]=U.elements[7],B.__data[10]=U.elements[8],B.__data[11]=0):(U.toArray(B.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,v,y,P){const S=_.value,T=v+"_"+y;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{const z=P[T];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return P[T]=S,!0}else if(z.equals(S)===!1)return z.copy(S),!0}return!1}function g(_){const v=_.uniforms;let y=0;const P=16;for(let T=0,z=v.length;T<z;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,B=b.length;E<B;E++){const k=b[E],N=Array.isArray(k.value)?k.value:[k.value];for(let L=0,D=N.length;L<D;L++){const U=N[L],Z=x(U),C=y%P;C!==0&&P-C<Z.boundary&&(y+=P-C),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Z.storage}}}const S=y%P;return S>0&&(y+=P-S),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}class yu{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const v=this;let y=!1,P=0,S=0,T=null,z=-1,b=null;const E=new ne,B=new ne;let k=null;const N=new Nt(0);let L=0,D=e.width,U=e.height,Z=1,C=null,F=null;const H=new ne(0,0,D,U),J=new ne(0,0,D,U);let tt=!1;const j=new rc;let rt=!1,ht=!1,wt=null;const ft=new Lt,Ct=new Ht,At=new R,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return T===null?Z:1}let q=n;function Y(I,G){for(let $=0;$<I.length;$++){const Q=I[$],K=e.getContext(Q,G);if(K!==null)return K}return null}try{const I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ja}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",pt,!1),q===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),q=Y(G,I),q===null)throw Y(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let it,W,st,vt,at,A,M,V,X,et,nt,lt,ot,gt,_t,Ft,ct,Jt,zt,bt,Tt,Mt,Rt,kt;function le(){it=new Og(q),W=new Dg(q,it,t),it.init(W),Mt=new Ex(q,it,W),st=new wx(q,it,W),vt=new Hg(q),at=new cx,A=new Sx(q,it,st,at,W,Mt,vt),M=new Ng(v),V=new zg(v),X=new Zf(q,W),Rt=new Lg(q,it,X,W),et=new kg(q,X,vt,Rt),nt=new qg(q,et,X,vt),zt=new Xg(q,W,A),Ft=new Ug(at),lt=new ax(v,M,V,it,W,Rt,Ft),ot=new Rx(v,at),gt=new hx,_t=new gx(it,W),Jt=new Pg(v,M,V,st,nt,u,c),ct=new Mx(v,nt,W),kt=new Cx(q,vt,W,st),bt=new Ig(q,it,vt,W),Tt=new Vg(q,it,vt,W),vt.programs=lt.programs,v.capabilities=W,v.extensions=it,v.properties=at,v.renderLists=gt,v.shadowMap=ct,v.state=st,v.info=vt}le();const Gt=new Tx(v,q);this.xr=Gt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(I){I!==void 0&&(Z=I,this.setSize(D,U,!1))},this.getSize=function(I){return I.set(D,U)},this.setSize=function(I,G,$=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,U=G,e.width=Math.floor(I*Z),e.height=Math.floor(G*Z),$===!0&&(e.style.width=I+"px",e.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(D*Z,U*Z).floor()},this.setDrawingBufferSize=function(I,G,$){D=I,U=G,Z=$,e.width=Math.floor(I*$),e.height=Math.floor(G*$),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(H)},this.setViewport=function(I,G,$,Q){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,G,$,Q),st.viewport(E.copy(H).multiplyScalar(Z).floor())},this.getScissor=function(I){return I.copy(J)},this.setScissor=function(I,G,$,Q){I.isVector4?J.set(I.x,I.y,I.z,I.w):J.set(I,G,$,Q),st.scissor(B.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(I){st.setScissorTest(tt=I)},this.setOpaqueSort=function(I){C=I},this.setTransparentSort=function(I){F=I},this.getClearColor=function(I){return I.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(I=!0,G=!0,$=!0){let Q=0;if(I){let K=!1;if(T!==null){const St=T.texture.format;K=St===Jh||St===$h||St===Zh}if(K){const St=T.texture.type,Pt=St===li||St===ri||St===Qa||St===Ci||St===Yh||St===Kh,Bt=Jt.getClearColor(),Vt=Jt.getClearAlpha(),Yt=Bt.r,Wt=Bt.g,Xt=Bt.b;Pt?(f[0]=Yt,f[1]=Wt,f[2]=Xt,f[3]=Vt,q.clearBufferuiv(q.COLOR,0,f)):(g[0]=Yt,g[1]=Wt,g[2]=Xt,g[3]=Vt,q.clearBufferiv(q.COLOR,0,g))}else Q|=q.COLOR_BUFFER_BIT}G&&(Q|=q.DEPTH_BUFFER_BIT),$&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),gt.dispose(),_t.dispose(),at.dispose(),M.dispose(),V.dispose(),nt.dispose(),Rt.dispose(),kt.dispose(),lt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",se),Gt.removeEventListener("sessionend",he),wt&&(wt.dispose(),wt=null),Ve.stop()};function ut(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const I=vt.autoReset,G=ct.enabled,$=ct.autoUpdate,Q=ct.needsUpdate,K=ct.type;le(),vt.autoReset=I,ct.enabled=G,ct.autoUpdate=$,ct.needsUpdate=Q,ct.type=K}function pt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function dt(I){const G=I.target;G.removeEventListener("dispose",dt),Ut(G)}function Ut(I){Dt(I),at.remove(I)}function Dt(I){const G=at.get(I).programs;G!==void 0&&(G.forEach(function($){lt.releaseProgram($)}),I.isShaderMaterial&&lt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,$,Q,K,St){G===null&&(G=It);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ed(I,G,$,Q,K);st.setMaterial(Q,Pt);let Vt=$.index,Yt=1;if(Q.wireframe===!0){if(Vt=et.getWireframeAttribute($),Vt===void 0)return;Yt=2}const Wt=$.drawRange,Xt=$.attributes.position;let Me=Wt.start*Yt,Ze=(Wt.start+Wt.count)*Yt;St!==null&&(Me=Math.max(Me,St.start*Yt),Ze=Math.min(Ze,(St.start+St.count)*Yt)),Vt!==null?(Me=Math.max(Me,0),Ze=Math.min(Ze,Vt.count)):Xt!=null&&(Me=Math.max(Me,0),Ze=Math.min(Ze,Xt.count));const Pe=Ze-Me;if(Pe<0||Pe===1/0)return;Rt.setup(K,Q,Bt,$,Vt);let In,ge=bt;if(Vt!==null&&(In=X.get(Vt),ge=Tt,ge.setIndex(In)),K.isMesh)Q.wireframe===!0?(st.setLineWidth(Q.wireframeLinewidth*qt()),ge.setMode(q.LINES)):ge.setMode(q.TRIANGLES);else if(K.isLine){let $t=Q.linewidth;$t===void 0&&($t=1),st.setLineWidth($t*qt()),K.isLineSegments?ge.setMode(q.LINES):K.isLineLoop?ge.setMode(q.LINE_LOOP):ge.setMode(q.LINE_STRIP)}else K.isPoints?ge.setMode(q.POINTS):K.isSprite&&ge.setMode(q.TRIANGLES);if(K.isBatchedMesh)ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)ge.renderInstances(Me,Pe,K.count);else if($.isInstancedBufferGeometry){const $t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,bo=Math.min($.instanceCount,$t);ge.renderInstances(Me,Pe,bo)}else ge.render(Me,Pe)};function Ot(I,G,$){I.transparent===!0&&I.side===vn&&I.forceSinglePass===!1?(I.side=Ke,I.needsUpdate=!0,ar(I,G,$),I.side=hi,I.needsUpdate=!0,ar(I,G,$),I.side=vn):ar(I,G,$)}this.compile=function(I,G,$=null){$===null&&($=I),p=_t.get($),p.init(),_.push(p),$.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),I!==$&&I.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(v._useLegacyLights);const Q=new Set;return I.traverse(function(K){const St=K.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Bt=St[Pt];Ot(Bt,$,K),Q.add(Bt)}else Ot(St,$,K),Q.add(St)}),_.pop(),p=null,Q},this.compileAsync=function(I,G,$=null){const Q=this.compile(I,G,$);return new Promise(K=>{function St(){if(Q.forEach(function(Pt){at.get(Pt).currentProgram.isReady()&&Q.delete(Pt)}),Q.size===0){K(I);return}setTimeout(St,10)}it.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Qt=null;function ie(I){Qt&&Qt(I)}function se(){Ve.stop()}function he(){Ve.start()}const Ve=new fu;Ve.setAnimationLoop(ie),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(I){Qt=I,Gt.setAnimationLoop(I),I===null?Ve.stop():Ve.start()},Gt.addEventListener("sessionstart",se),Gt.addEventListener("sessionend",he),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(G),G=Gt.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,G,T),p=_t.get(I,_.length),p.init(),_.push(p),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(ft),ht=this.localClippingEnabled,rt=Ft.init(this.clippingPlanes,ht),x=gt.get(I,m.length),x.init(),m.push(x),Sn(I,G,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(C,F),this.info.render.frame++,rt===!0&&Ft.beginShadows();const $=p.state.shadowsArray;if(ct.render($,I,G),rt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(x,I),p.setupLights(v._useLegacyLights),G.isArrayCamera){const Q=G.cameras;for(let K=0,St=Q.length;K<St;K++){const Pt=Q[K];vc(x,I,Pt,Pt.viewport)}}else vc(x,I,G);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(v,I,G),Rt.resetDefaultState(),z=-1,b=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Sn(I,G,$,Q){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)$=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||j.intersectsSprite(I)){Q&&At.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ft);const Pt=nt.update(I),Bt=I.material;Bt.visible&&x.push(I,Pt,Bt,$,At.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||j.intersectsObject(I))){const Pt=nt.update(I),Bt=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),At.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),At.copy(Pt.boundingSphere.center)),At.applyMatrix4(I.matrixWorld).applyMatrix4(ft)),Array.isArray(Bt)){const Vt=Pt.groups;for(let Yt=0,Wt=Vt.length;Yt<Wt;Yt++){const Xt=Vt[Yt],Me=Bt[Xt.materialIndex];Me&&Me.visible&&x.push(I,Pt,Me,$,At.z,Xt)}}else Bt.visible&&x.push(I,Pt,Bt,$,At.z,null)}}const St=I.children;for(let Pt=0,Bt=St.length;Pt<Bt;Pt++)Sn(St[Pt],G,$,Q)}function vc(I,G,$,Q){const K=I.opaque,St=I.transmissive,Pt=I.transparent;p.setupLightsView($),rt===!0&&Ft.setGlobalState(v.clippingPlanes,$),St.length>0&&td(K,St,G,$),Q&&st.viewport(E.copy(Q)),K.length>0&&or(K,G,$),St.length>0&&or(St,G,$),Pt.length>0&&or(Pt,G,$),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function td(I,G,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const St=W.isWebGL2;wt===null&&(wt=new Li(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?js:li,minFilter:qs,samples:St?4:0})),v.getDrawingBufferSize(Ct),St?wt.setSize(Ct.x,Ct.y):wt.setSize(oo(Ct.x),oo(Ct.y));const Pt=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(N),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Bt=v.toneMapping;v.toneMapping=ci,or(I,$,Q),A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt);let Vt=!1;for(let Yt=0,Wt=G.length;Yt<Wt;Yt++){const Xt=G[Yt],Me=Xt.object,Ze=Xt.geometry,Pe=Xt.material,In=Xt.group;if(Pe.side===vn&&Me.layers.test(Q.layers)){const ge=Pe.side;Pe.side=Ke,Pe.needsUpdate=!0,_c(Me,$,Q,Ze,Pe,In),Pe.side=ge,Pe.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt)),v.setRenderTarget(Pt),v.setClearColor(N,L),v.toneMapping=Bt}function or(I,G,$){const Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,St=I.length;K<St;K++){const Pt=I[K],Bt=Pt.object,Vt=Pt.geometry,Yt=Q===null?Pt.material:Q,Wt=Pt.group;Bt.layers.test($.layers)&&_c(Bt,G,$,Vt,Yt,Wt)}}function _c(I,G,$,Q,K,St){I.onBeforeRender(v,G,$,Q,K,St),I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(v,G,$,Q,I,St),K.transparent===!0&&K.side===vn&&K.forceSinglePass===!1?(K.side=Ke,K.needsUpdate=!0,v.renderBufferDirect($,G,Q,K,I,St),K.side=hi,K.needsUpdate=!0,v.renderBufferDirect($,G,Q,K,I,St),K.side=vn):v.renderBufferDirect($,G,Q,K,I,St),I.onAfterRender(v,G,$,Q,K,St)}function ar(I,G,$){G.isScene!==!0&&(G=It);const Q=at.get(I),K=p.state.lights,St=p.state.shadowsArray,Pt=K.state.version,Bt=lt.getParameters(I,K.state,St,G,$),Vt=lt.getProgramCacheKey(Bt);let Yt=Q.programs;Q.environment=I.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(I.isMeshStandardMaterial?V:M).get(I.envMap||Q.environment),Yt===void 0&&(I.addEventListener("dispose",dt),Yt=new Map,Q.programs=Yt);let Wt=Yt.get(Vt);if(Wt!==void 0){if(Q.currentProgram===Wt&&Q.lightsStateVersion===Pt)return Mc(I,Bt),Wt}else Bt.uniforms=lt.getUniforms(I),I.onBuild($,Bt,v),I.onBeforeCompile(Bt,v),Wt=lt.acquireProgram(Bt,Vt),Yt.set(Vt,Wt),Q.uniforms=Bt.uniforms;const Xt=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xt.clippingPlanes=Ft.uniform),Mc(I,Bt),Q.needsLights=id(I),Q.lightsStateVersion=Pt,Q.needsLights&&(Xt.ambientLightColor.value=K.state.ambient,Xt.lightProbe.value=K.state.probe,Xt.directionalLights.value=K.state.directional,Xt.directionalLightShadows.value=K.state.directionalShadow,Xt.spotLights.value=K.state.spot,Xt.spotLightShadows.value=K.state.spotShadow,Xt.rectAreaLights.value=K.state.rectArea,Xt.ltc_1.value=K.state.rectAreaLTC1,Xt.ltc_2.value=K.state.rectAreaLTC2,Xt.pointLights.value=K.state.point,Xt.pointLightShadows.value=K.state.pointShadow,Xt.hemisphereLights.value=K.state.hemi,Xt.directionalShadowMap.value=K.state.directionalShadowMap,Xt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xt.spotShadowMap.value=K.state.spotShadowMap,Xt.spotLightMatrix.value=K.state.spotLightMatrix,Xt.spotLightMap.value=K.state.spotLightMap,Xt.pointShadowMap.value=K.state.pointShadowMap,Xt.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Wt,Q.uniformsList=null,Wt}function yc(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=Yr.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Mc(I,G){const $=at.get(I);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function ed(I,G,$,Q,K){G.isScene!==!0&&(G=It),A.resetTextureUnits();const St=G.fog,Pt=Q.isMeshStandardMaterial?G.environment:null,Bt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$n,Vt=(Q.isMeshStandardMaterial?V:M).get(Q.envMap||Pt),Yt=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Wt=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xt=!!$.morphAttributes.position,Me=!!$.morphAttributes.normal,Ze=!!$.morphAttributes.color;let Pe=ci;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pe=v.toneMapping);const In=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=In!==void 0?In.length:0,$t=at.get(Q),bo=p.state.lights;if(rt===!0&&(ht===!0||I!==b)){const nn=I===b&&Q.id===z;Ft.setState(Q,I,nn)}let _e=!1;Q.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==bo.state.version||$t.outputColorSpace!==Bt||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||$t.envMap!==Vt||Q.fog===!0&&$t.fog!==St||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ft.numPlanes||$t.numIntersection!==Ft.numIntersection)||$t.vertexAlphas!==Yt||$t.vertexTangents!==Wt||$t.morphTargets!==Xt||$t.morphNormals!==Me||$t.morphColors!==Ze||$t.toneMapping!==Pe||W.isWebGL2===!0&&$t.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,$t.__version=Q.version);let fi=$t.currentProgram;_e===!0&&(fi=ar(Q,G,K));let wc=!1,As=!1,Ao=!1;const Be=fi.getUniforms(),pi=$t.uniforms;if(st.useProgram(fi.program)&&(wc=!0,As=!0,Ao=!0),Q.id!==z&&(z=Q.id,As=!0),wc||b!==I){Be.setValue(q,"projectionMatrix",I.projectionMatrix),Be.setValue(q,"viewMatrix",I.matrixWorldInverse);const nn=Be.map.cameraPosition;nn!==void 0&&nn.setValue(q,At.setFromMatrixPosition(I.matrixWorld)),W.logarithmicDepthBuffer&&Be.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Be.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,As=!0,Ao=!0)}if(K.isSkinnedMesh){Be.setOptional(q,K,"bindMatrix"),Be.setOptional(q,K,"bindMatrixInverse");const nn=K.skeleton;nn&&(W.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Be.setValue(q,"boneTexture",nn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Be.setOptional(q,K,"batchingTexture"),Be.setValue(q,"batchingTexture",K._matricesTexture,A));const To=$.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&W.isWebGL2===!0)&&zt.update(K,$,fi),(As||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Be.setValue(q,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pi.envMap.value=Vt,pi.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),As&&(Be.setValue(q,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&nd(pi,Ao),St&&Q.fog===!0&&ot.refreshFogUniforms(pi,St),ot.refreshMaterialUniforms(pi,Q,Z,U,wt),Yr.upload(q,yc($t),pi,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Yr.upload(q,yc($t),pi,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Be.setValue(q,"center",K.center),Be.setValue(q,"modelViewMatrix",K.modelViewMatrix),Be.setValue(q,"normalMatrix",K.normalMatrix),Be.setValue(q,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const nn=Q.uniformsGroups;for(let Ro=0,sd=nn.length;Ro<sd;Ro++)if(W.isWebGL2){const Sc=nn[Ro];kt.update(Sc,fi),kt.bind(Sc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function nd(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function id(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,G,$){at.get(I.texture).__webglTexture=G,at.get(I.depthTexture).__webglTexture=$;const Q=at.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,G){const $=at.get(I);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,$=0){T=I,P=G,S=$;let Q=!0,K=null,St=!1,Pt=!1;if(I){const Vt=at.get(I);Vt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1):Vt.__webglFramebuffer===void 0?A.setupRenderTarget(I):Vt.__hasExternalTextures&&A.rebindTextures(I,at.get(I.texture).__webglTexture,at.get(I.depthTexture).__webglTexture);const Yt=I.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Pt=!0);const Wt=at.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Wt[G])?K=Wt[G][$]:K=Wt[G],St=!0):W.isWebGL2&&I.samples>0&&A.useMultisampledRTT(I)===!1?K=at.get(I).__webglMultisampledFramebuffer:Array.isArray(Wt)?K=Wt[$]:K=Wt,E.copy(I.viewport),B.copy(I.scissor),k=I.scissorTest}else E.copy(H).multiplyScalar(Z).floor(),B.copy(J).multiplyScalar(Z).floor(),k=tt;if(st.bindFramebuffer(q.FRAMEBUFFER,K)&&W.drawBuffers&&Q&&st.drawBuffers(I,K),st.viewport(E),st.scissor(B),st.setScissorTest(k),St){const Vt=at.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Vt.__webglTexture,$)}else if(Pt){const Vt=at.get(I.texture),Yt=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Vt.__webglTexture,$||0,Yt)}z=-1},this.readRenderTargetPixels=function(I,G,$,Q,K,St,Pt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=at.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){st.bindFramebuffer(q.FRAMEBUFFER,Bt);try{const Vt=I.texture,Yt=Vt.format,Wt=Vt.type;if(Yt!==cn&&Mt.convert(Yt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xt=Wt===js&&(it.has("EXT_color_buffer_half_float")||W.isWebGL2&&it.has("EXT_color_buffer_float"));if(Wt!==li&&Mt.convert(Wt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Yn&&(W.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-Q&&$>=0&&$<=I.height-K&&q.readPixels(G,$,Q,K,Mt.convert(Yt),Mt.convert(Wt),St)}finally{const Vt=T!==null?at.get(T).__webglFramebuffer:null;st.bindFramebuffer(q.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(I,G,$=0){const Q=Math.pow(2,-$),K=Math.floor(G.image.width*Q),St=Math.floor(G.image.height*Q);A.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,I.x,I.y,K,St),st.unbindTexture()},this.copyTextureToTexture=function(I,G,$,Q=0){const K=G.image.width,St=G.image.height,Pt=Mt.convert($.format),Bt=Mt.convert($.type);A.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,K,St,Pt,Bt,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,G.mipmaps[0].width,G.mipmaps[0].height,Pt,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Pt,Bt,G.image),Q===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(I,G,$,Q,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=I.max.x-I.min.x+1,Pt=I.max.y-I.min.y+1,Bt=I.max.z-I.min.z+1,Vt=Mt.convert(Q.format),Yt=Mt.convert(Q.type);let Wt;if(Q.isData3DTexture)A.setTexture3D(Q,0),Wt=q.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)A.setTexture2DArray(Q,0),Wt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);const Xt=q.getParameter(q.UNPACK_ROW_LENGTH),Me=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Ze=q.getParameter(q.UNPACK_SKIP_PIXELS),Pe=q.getParameter(q.UNPACK_SKIP_ROWS),In=q.getParameter(q.UNPACK_SKIP_IMAGES),ge=$.isCompressedTexture?$.mipmaps[K]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,ge.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ge.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,I.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,I.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,I.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Wt,K,G.x,G.y,G.z,St,Pt,Bt,Vt,Yt,ge.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Wt,K,G.x,G.y,G.z,St,Pt,Bt,Vt,ge.data)):q.texSubImage3D(Wt,K,G.x,G.y,G.z,St,Pt,Bt,Vt,Yt,ge),q.pixelStorei(q.UNPACK_ROW_LENGTH,Xt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),q.pixelStorei(q.UNPACK_SKIP_ROWS,Pe),q.pixelStorei(q.UNPACK_SKIP_IMAGES,In),K===0&&Q.generateMipmaps&&q.generateMipmap(Wt),st.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?A.setTextureCube(I,0):I.isData3DTexture?A.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?A.setTexture2DArray(I,0):A.setTexture2D(I,0),st.unbindTexture()},this.resetState=function(){P=0,S=0,T=null,st.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ec?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===de?yn:eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===yn?de:$n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Px extends yu{}Px.prototype.isWebGL1Renderer=!0;class Lx extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ix{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new R;class ao{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ao(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mu extends un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Ls=new R,ts=new R,es=new R,ns=new Ht,Is=new Ht,wu=new Lt,Pr=new R,Ds=new R,Lr=new R,Wl=new Ht,ra=new Ht,Xl=new Ht;class ql extends ce{constructor(t=new Mu){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ix(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new ao(n,3,0,!1)),Qi.setAttribute("uv",new ao(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ir(Pr.set(-.5,-.5,0),es,o,ts,i,s),Ir(Ds.set(.5,-.5,0),es,o,ts,i,s),Ir(Lr.set(.5,.5,0),es,o,ts,i,s),Wl.set(0,0),ra.set(1,0),Xl.set(1,1);let a=t.ray.intersectTriangle(Pr,Ds,Lr,!1,Ls);if(a===null&&(Ir(Ds.set(-.5,.5,0),es,o,ts,i,s),ra.set(0,1),a=t.ray.intersectTriangle(Pr,Lr,Ds,!1,Ls),a===null))return;const c=t.ray.origin.distanceTo(Ls);c<t.near||c>t.far||e.push({distance:c,point:Ls.clone(),uv:an.getInterpolation(Ls,Pr,Ds,Lr,Wl,ra,Xl,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ir(r,t,e,n,i,s){ns.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Is.x=s*ns.x-i*ns.y,Is.y=i*ns.x+s*ns.y):Is.copy(ns),r.copy(t),r.x+=Is.x,r.y+=Is.y,r.applyMatrix4(wu)}const jl=new R,Yl=new ne,Kl=new ne,Dx=new R,Zl=new Lt,Dr=new R,oa=new Fi,$l=new Lt,aa=new nr;class Ux extends ue{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pc,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Te),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),t.ray.intersectsSphere(oa)!==!1&&($l.copy(i).invert(),aa.copy(t.ray).applyMatrix4($l),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,aa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Pc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Yl.fromBufferAttribute(i.attributes.skinIndex,t),Kl.fromBufferAttribute(i.attributes.skinWeight,t),jl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Kl.getComponent(s);if(o!==0){const a=Yl.getComponent(s);Zl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Dx.copy(jl).applyMatrix4(Zl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Ga extends ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nx extends Ie{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Ue,h=Ue,d,u){super(null,o,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new Lt,Fx=new Lt;class cc{constructor(t=[],e=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Lt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Fx;Jl.multiplyMatrices(a,e[s]),Jl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Nx(e,t,t,cn,Yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ga),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Gs extends un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ql=new R,th=new R,eh=new Lt,ca=new nr,Ur=new Fi;class Su extends ce{constructor(t=new Fe,e=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ql.fromBufferAttribute(e,i-1),th.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ql.distanceTo(th);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,t.ray.intersectsSphere(Ur)===!1)return;eh.copy(i).invert(),ca.copy(t.ray).applyMatrix4(eh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,d=new R,u=new R,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){const P=g.getX(v),S=g.getX(v+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,S),ca.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(u);z<t.near||z>t.far||e.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=f){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),ca.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(u);S<t.near||S>t.far||e.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const nh=new R,ih=new R;class sh extends Su{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Os extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rh=new Lt,Wa=new nr,Nr=new Fi,Fr=new R;class la extends ce{constructor(t=new Fe,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;rh.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(rh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){const p=l.getX(g);Fr.fromBufferAttribute(d,p),oh(Fr,p,c,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Fr.fromBufferAttribute(d,g),oh(Fr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oh(r,t,e,n,i,s,o){const a=Wa.distanceSqToPoint(r);if(a<e){const c=new R;Wa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Bx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new Ht:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],s=[],o=[],a=new R,c=new Lt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ne(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class co extends Fe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const x=[],p=n/2;let m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function _(){const y=new R,P=new R;let S=0;const T=(e-t)/n;for(let z=0;z<=s;z++){const b=[],E=z/s,B=E*(e-t)+t;for(let k=0;k<=i;k++){const N=k/i,L=N*c+a,D=Math.sin(L),U=Math.cos(L);P.x=B*D,P.y=-E*n+p,P.z=B*U,d.push(P.x,P.y,P.z),y.set(D,T,U).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-E),b.push(g++)}x.push(b)}for(let z=0;z<i;z++)for(let b=0;b<s;b++){const E=x[b][z],B=x[b+1][z],k=x[b+1][z+1],N=x[b][z+1];h.push(E,B,N),h.push(B,k,N),S+=6}l.addGroup(m,S,0),m+=S}function v(y){const P=g,S=new Ht,T=new R;let z=0;const b=y===!0?t:e,E=y===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,p*E,0),u.push(0,E,0),f.push(.5,.5),g++;const B=g;for(let k=0;k<=i;k++){const L=k/i*c+a,D=Math.cos(L),U=Math.sin(L);T.x=b*U,T.y=p*E,T.z=b*D,d.push(T.x,T.y,T.z),u.push(0,E,0),S.x=D*.5+.5,S.y=U*.5*E+.5,f.push(S.x,S.y),g++}for(let k=0;k<i;k++){const N=P+k,L=B+k;y===!0?h.push(L,L+1,N):h.push(L+1,L,N),z+=3}l.addGroup(m,z,y===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const zx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Eu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,u,f;if(n&&(s=Gx(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)d=r[g],u=r[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ks(s,o,e,a,c,f,0),o}};function Eu(r,t,e,n,i){let s,o;if(i===tv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ah(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ah(s,r[s],r[s+1],o);return o&&yo(o,o.next)&&($s(o),o=o.next),o}function Di(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(yo(e,e.next)||ve(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Yx(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?kx(r,n,i,s):Ox(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),$s(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Vx(Di(r),t,e),Ks(r,t,e,n,i,s,2)):o===2&&Hx(r,t,e,n,i,s):Ks(Di(r),t,e,n,i,s,1);break}}}function Ox(r){const t=r.prev,e=r,n=r.next;if(ve(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,u=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&hs(i,a,s,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kx(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ve(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,d=s.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,m=Xa(f,g,t,e,n),_=Xa(x,p,t,e,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&hs(a,h,c,d,l,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&hs(a,h,c,d,l,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&hs(a,h,c,d,l,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&hs(a,h,c,d,l,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!yo(i,s)&&bu(i,n,n.next,s)&&Zs(i,s)&&Zs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),$s(n),$s(n.next),n=r=s),n=n.next}while(n!==r);return Di(n)}function Hx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$x(o,a)){let c=Au(o,a);o=Di(o,o.next),c=Di(c,c.next),Ks(o,t,e,n,i,s,0),Ks(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Gx(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Eu(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Zx(l));for(i.sort(Wx),s=0;s<i.length;s++)e=Xx(i[s],e);return e}function Wx(r,t){return r.x-t.x}function Xx(r,t){const e=qx(r,t);if(!e)return t;const n=Au(e,r);return Di(n,n.next),Di(e,e.next)}function qx(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&hs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),Zs(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&jx(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function jx(r,t){return ve(r.prev,r,t.prev)<0&&ve(t.next,r,r.next)<0}function Yx(r,t,e,n){let i=r;do i.z===0&&(i.z=Xa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Kx(i)}function Kx(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Xa(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Zx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function hs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function $x(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Jx(r,t)&&(Zs(r,t)&&Zs(t,r)&&Qx(r,t)&&(ve(r.prev,r,t.prev)||ve(r,t.prev,t))||yo(r,t)&&ve(r.prev,r,r.next)>0&&ve(t.prev,t,t.next)>0)}function ve(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function yo(r,t){return r.x===t.x&&r.y===t.y}function bu(r,t,e,n){const i=zr(ve(r,t,e)),s=zr(ve(r,t,n)),o=zr(ve(e,n,r)),a=zr(ve(e,n,t));return!!(i!==s&&o!==a||i===0&&Br(r,e,t)||s===0&&Br(r,n,t)||o===0&&Br(e,r,n)||a===0&&Br(e,t,n))}function Br(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function zr(r){return r>0?1:r<0?-1:0}function Jx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Zs(r,t){return ve(r.prev,r,r.next)<0?ve(r,t,r.next)>=0&&ve(r,r.prev,t)>=0:ve(r,t,r.prev)<0||ve(r,r.next,t)<0}function Qx(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Au(r,t){const e=new qa(r.i,r.x,r.y),n=new qa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ah(r,t,e,n){const i=new qa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class lc{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return lc.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ch(t),lh(n,t);let o=t.length;e.forEach(ch);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,lh(n,e[c]);const a=zx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ch(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function lh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class hc extends Fe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const S=P/e;d.x=-t*Math.cos(i+S*s)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+S*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(S+y,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const v=h[m][_+1],y=h[m][_],P=h[m+1][_],S=h[m+1][_+1];(m!==0||o>0)&&f.push(v,y,S),(m!==n-1||c<Math.PI)&&f.push(y,P,S)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qe extends un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kr extends un{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Nt(16777215),this.specular=new Nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ev extends un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Or(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function nv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function iv(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function hh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function Tu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Mo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sv extends Mo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case as:s=t,a=2*e-n;break;case eo:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case as:o=t,c=2*n-e;break;case eo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let P=0;P!==a;++P)s[P]=m*o[h+P]+_*o[l+P]+v*o[c+P]+y*o[d+P];return s}}class Ru extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}}class rv extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ru(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&nv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===No,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=to;class ws extends Ln{}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Qr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends Ln{}Cu.prototype.ValueTypeName="color";class Js extends Ln{}Js.prototype.ValueTypeName="number";class ov extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)De.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ui extends Ln{InterpolantFactoryMethodLinear(t){return new ov(this.times,this.values,this.getValueSize(),t)}}Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=to;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Ln{}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Qr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Ln{}Qs.prototype.ValueTypeName="vector";class ja{constructor(t,e=-1,n,i=tc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(cv(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=iv(c);c=hh(c,1,h),l=hh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Js(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,x){if(f.length!==0){const p=[],m=[];Tu(f,p,m,g),p.length!==0&&x.push(new d(u,p,m))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(const x in f){const p=[],m=[];for(let _=0;_!==u[g].morphTargets.length;++_){const v=u[g];p.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Js(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{const f=".bones["+e[d].name+"]";n(Qs,f+".position",u,"pos",i),n(Ui,f+".quaternion",u,"rot",i),n(Qs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function av(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return Cu;case"quaternion":return Ui;case"bool":case"boolean":return ws;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function cv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=av(r.type);if(r.times===void 0){const e=[],n=[];Tu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const lo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lv{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const hv=new lv;class ui{constructor(t){this.manager=t!==void 0?t:hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class uv extends Error{constructor(t,e){super(t),this.response=e}}class Pu extends ui{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=lo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(zn[t]!==void 0){zn[t].push({onLoad:e,onProgress:n,onError:i});return}zn[t]=[],zn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=zn[t],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let x=0;const p=new ReadableStream({start(m){_();function _(){d.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let S=0,T=h.length;S<T;S++){const z=h[S];z.onProgress&&z.onProgress(P)}m.enqueue(y),_()}})}}});return new Response(p)}else throw new uv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{lo.add(t,l);const h=zn[t];delete zn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=zn[t];if(h===void 0)throw this.manager.itemError(t),l;delete zn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dv extends ui{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=lo.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ys("img");function c(){h(),lo.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Es extends ui{constructor(t){super(t)}load(t,e,n,i){const s=new Ie,o=new dv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ir extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class fv extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ha=new Lt,uh=new R,dh=new R;class uc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pv extends uc{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=_s*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class mv extends ir{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new pv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fh=new Lt,Us=new R,ua=new R;class gv extends uc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class ph extends ir{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xv extends uc{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lu extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new xv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vv extends ir{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _v{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class yv{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){De.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;De.multiplyQuaternionsFlat(t,o,t,e,t,n),De.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const dc="\\[\\]\\.:\\/",Mv=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",wv="[^"+dc.replace("\\.","")+"]",Sv=/((?:WC+[\/:])*)/.source.replace("WC",fc),Ev=/(WCOD+)?/.source.replace("WCOD",wv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),Tv=new RegExp("^"+Sv+Ev+bv+Av+"$"),Rv=["material","materials","bones","map"];class Cv{constructor(t,e,n){const i=n||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class te{constructor(t,e,n){this.path=e,this.parsedPath=n||te.parseTrackName(e),this.node=te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new te.Composite(t,e,n):new te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(t){const e=Tv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}te.Composite=Cv;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pv{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:os,endingEnd:os};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Qd:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case tc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Jd;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===$d){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=as,i.endingEnd=as):(t?i.endingStart=this.zeroSlopeAtStart?as:os:i.endingStart=eo,e?i.endingEnd=this.zeroSlopeAtEnd?as:os:i.endingEnd=eo)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const Lv=new Float32Array(1);class Iv extends Ni{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;g=new yv(te.create(n,f,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Ru(new Float32Array(2),new Float32Array(2),1,Lv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?ja.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=tc),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Pv(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ja.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Dv{constructor(t,e,n=0,i=1/0){this.ray=new nr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ya(t,this,n,e),n.sort(mh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ya(t[i],this,n,e);return n.sort(mh),n}}function mh(r,t){return r.distance-t.distance}function Ya(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ya(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);class _n{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new _n);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],x=i[0],p=i[1],m=i[2],_=i[3],v=i[4],y=i[5],P=i[6],S=i[7],T=i[8];return s[0]=o*x+a*_+c*P,s[1]=o*p+a*v+c*S,s[2]=o*m+a*y+c*T,s[3]=l*x+h*_+d*P,s[4]=l*p+h*v+d*S,s[5]=l*m+h*y+d*T,s[6]=u*x+f*_+g*P,s[7]=u*p+f*v+g*S,s[8]=u*m+f*y+g*T,e}scale(t,e){e===void 0&&(e=new _n);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new _n);const e=3,n=6,i=Uv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,g=i*c,x=s*o,p=s*a,m=s*c,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-m,_[3*0+2]=d+p,_[3*1+0]=h+m,_[3*1+1]=1-(l+g),_[3*1+2]=f-x,_[3*2+0]=d-p,_[3*2+1]=f+x,_[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new _n);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Uv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new _n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Nv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Fv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(gh),gh.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const Nv=new w,Fv=new w,gh=new w;class en{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,xh),l=xh),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new en().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=vh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=vh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}}const xh=new w,vh=[new w,new w,new w,new w,new w,new w,new w,new w];class _h{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Iu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ee{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Bv,i=zv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ee);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Ee);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ee),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Ee(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ee);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,f,g,x,p;return f=i*c+s*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),x=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(x=1-e,p=e),n.x=x*i+p*c,n.y=x*s+p*l,n.z=x*o+p*h,n.w=x*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ee);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const Bv=new w,zv=new w,Ov={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Et{constructor(t){t===void 0&&(t={}),this.id=Et.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Et.idCounter=0;Et.types=Ov;class ee{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Ee,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ee.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ee.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(yh),yh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const yh=new Ee;class ds extends Et{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ds.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const x=n.vertices[n.faces[d][g]],p=new w;p.copy(x),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new w,h=new w,d=new w,u=new w,f=new w,g=new w;let x=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);const _=p.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(l))}else{const m=a?a.length:p.faces.length;for(let _=0;_<m;_++){const v=a?a[_]:_;l.copy(p.faceNormals[v]),n.vmult(l,l);const y=p.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],h);const _=p.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}else{const m=c?c.length:t.faces.length;for(let _=0;_<m;_++){const v=c?c[_]:_;h.copy(t.faceNormals[v]),s.vmult(h,h);const y=p.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),u.cross(f,g),!g.almostZero()){g.normalize();const v=p.testSepAxis(g,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;ds.project(a,t,n,i,da),ds.project(e,t,s,o,fa);const c=da[0],l=da[1],h=fa[0],d=fa[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new w,l=new w,h=new w,d=new w,u=new w,f=new w,g=new w,x=new w,p=this,m=[],_=i,v=m;let y=-1,P=Number.MAX_VALUE;for(let E=0;E<p.faces.length;E++){c.copy(p.faceNormals[E]),n.vmult(c,c);const B=c.dot(t);B<P&&(P=B,y=E)}if(y<0)return;const S=p.faces[y];S.connectedFaces=[];for(let E=0;E<p.faces.length;E++)for(let B=0;B<p.faces[E].length;B++)S.indexOf(p.faces[E][B])!==-1&&E!==y&&S.connectedFaces.indexOf(E)===-1&&S.connectedFaces.push(E);const T=S.length;for(let E=0;E<T;E++){const B=p.vertices[S[E]],k=p.vertices[S[(E+1)%T]];B.vsub(k,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(B),n.vmult(f,f),e.vadd(f,f);const N=S.connectedFaces[E];g.copy(this.faceNormals[N]);const L=this.getPlaneConstantOfFace(N);x.copy(g),n.vmult(x,x);const D=L-x.dot(e);for(this.clipFaceAgainstPlane(_,v,x,D);_.length;)_.shift();for(;v.length;)_.push(v.shift())}g.copy(this.faceNormals[y]);const z=this.getPlaneConstantOfFace(y);x.copy(g),n.vmult(x,x);const b=z-x.dot(e);for(let E=0;E<_.length;E++){let B=x.dot(_[E])+b;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){const k=_[E];if(B<=1e-6){const N={point:k,normal:x,depth:B};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new w;d.copy(l),e.push(d)}else{const d=new w;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new w;t.vsub(c,l);const h=a.dot(l),d=new w;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=kv;let c=0,l=0;const h=Vv,d=t.vertices;h.setZero(),ee.vectorToLocalFrame(n,i,e,a),ee.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const da=[],fa=[];new w;const kv=new w,Vv=new w;class Rn extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ds({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),Rn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ii.set(s[o][0],s[o][1],s[o][2]),e.vmult(ii,ii),t.vadd(ii,ii),n(ii.x,ii.y,ii.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;En[0].set(s.x,s.y,s.z),En[1].set(-s.x,s.y,s.z),En[2].set(-s.x,-s.y,s.z),En[3].set(-s.x,-s.y,-s.z),En[4].set(s.x,-s.y,-s.z),En[5].set(s.x,s.y,-s.z),En[6].set(-s.x,s.y,-s.z),En[7].set(s.x,-s.y,s.z);const o=En[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=En[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const ii=new w,En=[new w,new w,new w,new w,new w,new w,new w,new w],pc={DYNAMIC:1,STATIC:2,KINEMATIC:4},mc={AWAKE:0,SLEEPY:1,SLEEPING:2};class yt extends Iu{constructor(t){t===void 0&&(t={}),super(),this.id=yt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?yt.STATIC:yt.DYNAMIC,typeof t.type==typeof yt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=yt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ee,this.initQuaternion=new Ee,this.previousQuaternion=new Ee,this.interpolatedQuaternion=new Ee,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new _n,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new _n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new en,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=yt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===yt.SLEEPING&&this.dispatchEvent(yt.wakeupEvent)}sleep(){this.sleepState=yt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===yt.AWAKE&&n<i?(this.sleepState=yt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(yt.sleepyEvent)):e===yt.SLEEPY&&n>i?this.wakeUp():e===yt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(yt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===yt.SLEEPING||this.type===yt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new Ee;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Hv,o=Gv,a=this.quaternion,c=this.aabb,l=Wv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Xv,i=qv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=jv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==yt.DYNAMIC)return;const n=Yv,i=Kv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===yt.DYNAMIC&&(this.sleepState===yt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==yt.DYNAMIC)return;this.sleepState===yt.SLEEPING&&this.wakeUp();const n=e,i=Zv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=$v;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==yt.DYNAMIC)return;const n=Jv,i=Qv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=t_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===yt.DYNAMIC||this.type===yt.KINEMATIC)||this.sleepState===yt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,x=this.angularFactor,p=c.x*x.x,m=c.y*x.y,_=c.z*x.z;s.x+=t*(g[0]*p+g[1]*m+g[2]*_),s.y+=t*(g[3]*p+g[4]*m+g[5]*_),s.z+=t*(g[6]*p+g[7]*m+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}yt.idCounter=0;yt.COLLIDE_EVENT_NAME="collide";yt.DYNAMIC=pc.DYNAMIC;yt.STATIC=pc.STATIC;yt.KINEMATIC=pc.KINEMATIC;yt.AWAKE=mc.AWAKE;yt.SLEEPY=mc.SLEEPY;yt.SLEEPING=mc.SLEEPING;yt.wakeupEvent={type:"wakeup"};yt.sleepyEvent={type:"sleepy"};yt.sleepEvent={type:"sleep"};const Hv=new w,Gv=new Ee,Wv=new en,Xv=new _n,qv=new _n;new _n;const jv=new w,Yv=new w,Kv=new w,Zv=new w,$v=new w,Jv=new w,Qv=new w,t_=new w;class e_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&yt.STATIC||t.sleepState===yt.SLEEPING)&&(e.type&yt.STATIC||e.sleepState===yt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=n_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=i_,i=s_,s=r_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const n_=new w;new w;new Ee;new w;const i_={keys:[]},s_=[],r_=[];new w;new w;new w;class Du extends e_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class tr{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Uu,Nu,Fu,Bu,zu,Ou,ku;const gc={CLOSEST:1,ANY:2,ALL:4};Uu=Et.types.SPHERE;Nu=Et.types.PLANE;Fu=Et.types.BOX;Bu=Et.types.CYLINDER;zu=Et.types.CONVEXPOLYHEDRON;Ou=Et.types.HEIGHTFIELD;ku=Et.types.TRIMESH;class Se{get[Uu](){return this._intersectSphere}get[Nu](){return this._intersectPlane}get[Fu](){return this._intersectBox}get[Bu](){return this._intersectConvex}get[zu](){return this._intersectConvex}get[Ou](){return this._intersectHeightfield}get[ku](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Se.ANY,this.result=new tr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Se.ANY,this.result=e.result||new tr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Mh),pa.length=0,t.broadphase.aabbQuery(t,Mh,pa),this.intersectBodies(pa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=o_,s=a_;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(M_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);const h=new w;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new w,x=new w,p=new w;o.vsub(n,g);const m=-l.dot(g)/f;c.scale(m,x),o.vadd(x,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=c_;o.from.copy(this.from),o.to.copy(this.to),ee.pointToLocalFrame(n,e,o.from,o.from),ee.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=l_;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new en;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ee.pointToWorldFrame(n,e,t.pillarOffset,kr),this._intersectConvex(t.pillarConvex,e,kr,i,s,wh),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ee.pointToWorldFrame(n,e,t.pillarOffset,kr),this._intersectConvex(t.pillarConvex,e,kr,i,s,wh)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=h_,g=u_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=d_,c=Sh,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,x=this.to,p=g.distanceTo(x),m=l?l.length:h.length,_=this.result;for(let v=0;!_.shouldStop&&v<m;v++){const y=l?l[v]:v,P=h[y],S=u[y],T=e,z=n;c.copy(d[P[0]]),T.vmult(c,c),c.vadd(z,c),c.vsub(g,c),T.vmult(S,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const E=a.dot(c)/b;if(!(E<0)){f.scale(E,je),je.vadd(g,je),mn.copy(d[P[0]]),T.vmult(mn,mn),z.vadd(mn,mn);for(let B=1;!_.shouldStop&&B<P.length-1;B++){bn.copy(d[P[B]]),An.copy(d[P[B+1]]),T.vmult(bn,bn),T.vmult(An,An),z.vadd(bn,bn),z.vadd(An,An);const k=je.distanceTo(g);!(Se.pointInTriangle(je,mn,bn,An)||Se.pointInTriangle(je,bn,mn,An))||k>p||this.reportIntersection(a,je,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=f_,c=__,l=y_,h=Sh,d=p_,u=m_,f=g_,g=v_,x=x_,p=t.indices;t.vertices;const m=this.from,_=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(e),ee.vectorToLocalFrame(n,e,v,d),ee.pointToLocalFrame(n,e,m,u),ee.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let P=0,S=c.length;!this.result.shouldStop&&P!==S;P++){const T=c[P];t.getNormal(T,a),t.getVertex(p[T*3],mn),mn.vsub(u,h);const z=d.dot(a),b=a.dot(h)/z;if(b<0)continue;d.scale(b,je),je.vadd(u,je),t.getVertex(p[T*3+1],bn),t.getVertex(p[T*3+2],An);const E=je.distanceSquared(u);!(Se.pointInTriangle(je,bn,mn,An)||Se.pointInTriangle(je,mn,bn,An))||E>y||(ee.vectorToWorldFrame(e,a,x),ee.pointToWorldFrame(n,e,je,g),this.reportIntersection(x,g,s,i,T))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Se.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Se.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Se.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ei),n.vsub(e,Ns),t.vsub(e,ma);const s=Ei.dot(Ei),o=Ei.dot(Ns),a=Ei.dot(ma),c=Ns.dot(Ns),l=Ns.dot(ma);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}Se.CLOSEST=gc.CLOSEST;Se.ANY=gc.ANY;Se.ALL=gc.ALL;const Mh=new en,pa=[],Ns=new w,ma=new w,o_=new w,a_=new Ee,je=new w,mn=new w,bn=new w,An=new w;new w;new tr;const wh={faceList:[0]},kr=new w,c_=new Se,l_=[],h_=new w,u_=new w,d_=new w;new w;new w;const Sh=new w,f_=new w,p_=new w,m_=new w,g_=new w,x_=new w,v_=new w;new en;const __=[],y_=new ee,Ei=new w,Vr=new w;function M_(r,t,e){e.vsub(r,Ei);const n=Ei.dot(t);return t.scale(n,Vr),Vr.vadd(r,Vr),e.distanceTo(Vr)}class w_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Eh{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class sr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=sr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Eh,this.jacobianElementB=new Eh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,bh),a.scale(h,Ah),n.invInertiaWorldSolve.vmult(o,Th),i.invInertiaWorldSolve.vmult(c,Rh),t.multiplyVectors(bh,Th)+e.multiplyVectors(Ah,Rh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Hr),l+=Hr.dot(t.rotational),c.vmult(e.rotational,Hr),l+=Hr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=S_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}sr.idCounter=0;const bh=new w,Ah=new w,Th=new w,Rh=new w,Hr=new w,S_=new w;class E_ extends sr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=b_,l=A_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=T_,x=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,c),a.cross(m,l),m.negate(x.spatial),c.negate(x.rotational),p.spatial.copy(m),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=m.dot(g),v=this.restitution+1,y=v*u.dot(m)-v*h.dot(m)+f.dot(l)-d.dot(c),P=this.computeGiMf();return-_*e-y*n-t*P}getImpactVelocityAlongNormal(){const t=R_,e=C_,n=P_,i=L_,s=I_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const b_=new w,A_=new w,T_=new w,R_=new w,C_=new w,P_=new w,L_=new w,I_=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Ch extends sr{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=D_,o=U_,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const D_=new w,U_=new w;class wo{constructor(t,e,n){n=w_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=wo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}wo.idCounter=0;class So{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=So.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}So.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Se;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Eo extends Et{constructor(t){if(super({type:Et.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class N_ extends ds{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new w(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new w(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<s;g++){const x=2*Math.PI/s*(g+1),p=2*Math.PI/s*(g+.5);g<s-1?(o.push(new w(-e*u(x),-n*.5,e*d(x))),l.push(2*g+2),o.push(new w(-t*u(x),n*.5,t*d(x))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new w(-u(p),0,d(p)))}c.push(l),a.push(new w(0,1,0));const f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=Et.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class F_ extends Et{constructor(){super({type:Et.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){On.set(0,0,1),e.vmult(On,On);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),On.x===1?i.x=t.x:On.x===-1&&(n.x=t.x),On.y===1?i.y=t.y:On.y===-1&&(n.y=t.y),On.z===1?i.z=t.z:On.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const On=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new en;new w;new en;new w;new w;new w;new w;new w;new w;new w;new en;new w;new ee;new en;class B_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class z_ extends B_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,f,g,x,p;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const m=k_,_=V_,v=O_;m.length=a,_.length=a,v.length=a;for(let y=0;y!==a;y++){const P=o[y];v[y]=0,_[y]=P.computeB(h),m[y]=1/P.computeC()}if(a!==0){for(let S=0;S!==l;S++){const T=c[S],z=T.vlambda,b=T.wlambda;z.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const T=o[S];d=_[S],u=m[S],p=v[S],x=T.computeGWlambda(),f=u*(d-x-T.eps*p),p+f<T.minForce?f=T.minForce-p:p+f>T.maxForce&&(f=T.maxForce-p),v[S]+=f,g+=f>0?f:-f,T.addToWlambda(f)}if(g*g<s)break}for(let S=0;S!==l;S++){const T=c[S],z=T.velocity,b=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),z.vadd(T.vlambda,z),T.wlambda.vmul(T.angularFactor,T.wlambda),b.vadd(T.wlambda,b)}let y=o.length;const P=1/h;for(;y--;)o[y].multiplier=v[y]*P}return n}}const O_=[],k_=[],V_=[];class H_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class G_ extends H_{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const fe={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH};class W_{get[fe.sphereSphere](){return this.sphereSphere}get[fe.spherePlane](){return this.spherePlane}get[fe.boxBox](){return this.boxBox}get[fe.sphereBox](){return this.sphereBox}get[fe.planeBox](){return this.planeBox}get[fe.convexConvex](){return this.convexConvex}get[fe.sphereConvex](){return this.sphereConvex}get[fe.planeConvex](){return this.planeConvex}get[fe.boxConvex](){return this.boxConvex}get[fe.sphereHeightfield](){return this.sphereHeightfield}get[fe.boxHeightfield](){return this.boxHeightfield}get[fe.convexHeightfield](){return this.convexHeightfield}get[fe.sphereParticle](){return this.sphereParticle}get[fe.planeParticle](){return this.planeParticle}get[fe.boxParticle](){return this.boxParticle}get[fe.convexParticle](){return this.convexParticle}get[fe.cylinderCylinder](){return this.convexConvex}get[fe.sphereCylinder](){return this.sphereConvex}get[fe.planeCylinder](){return this.planeConvex}get[fe.boxCylinder](){return this.boxConvex}get[fe.convexCylinder](){return this.convexConvex}get[fe.heightfieldCylinder](){return this.heightfieldCylinder}get[fe.particleCylinder](){return this.particleCylinder}get[fe.sphereTrimesh](){return this.sphereTrimesh}get[fe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new G_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new E_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,x=g.length?g.pop():new Ch(n,i,u*f),p=g.length?g.pop():new Ch(n,i,u*f);return x.bi=p.bi=n,x.bj=p.bj=i,x.minForce=p.minForce=-u*f,x.maxForce=p.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(x.t,p.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=p.enabled=t.enabled,e.push(x,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];_i.setZero(),is.setZero(),ss.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(_i.vadd(e.ni,_i),is.vadd(e.ri,is),ss.vadd(e.rj,ss)):(_i.vsub(e.ni,_i),is.vadd(e.rj,is),ss.vadd(e.ri,ss));const o=1/t;is.scale(o,n.ri),ss.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),_i.normalize(),_i.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=j_,l=Y_,h=X_,d=q_;for(let u=0,f=t.length;u!==f;u++){const g=t[u],x=e[u];let p=null;g.material&&x.material&&(p=n.getContactMaterial(g.material,x.material)||null);const m=g.type&yt.KINEMATIC&&x.type&yt.STATIC||g.type&yt.STATIC&&x.type&yt.KINEMATIC||g.type&yt.KINEMATIC&&x.type&yt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const v=g.shapes[_];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],l),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);const P=x.shapes[y];if(!(v.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+P.boundingSphereRadius)continue;let S=null;v.material&&P.material&&(S=n.getContactMaterial(v.material,P.material)||null),this.currentContactMaterial=S||p||n.defaultContactMaterial;const T=v.type|P.type,z=this[T];if(z){let b=!1;v.type<P.type?b=z.call(this,v,P,h,d,c,l,g,x,v,P,m):b=z.call(this,P,v,d,h,l,c,x,g,v,P,m),b&&m&&(n.shapeOverlapKeeper.set(v.id,P.id),n.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Gr),u.ni.scale(u.ni.dot(Gr),Ph),Gr.vsub(Ph,u.rj),-Gr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,f=yy;n.vsub(i,Wr),e.getSideNormals(f,o);const g=t.radius;let x=!1;const p=wy,m=Sy,_=Ey;let v=null,y=0,P=0,S=0,T=null;for(let U=0,Z=f.length;U!==Z&&x===!1;U++){const C=xy;C.copy(f[U]);const F=C.length();C.normalize();const H=Wr.dot(C);if(H<F+g&&H>0){const J=vy,tt=_y;J.copy(f[(U+1)%3]),tt.copy(f[(U+2)%3]);const j=J.length(),rt=tt.length();J.normalize(),tt.normalize();const ht=Wr.dot(J),wt=Wr.dot(tt);if(ht<j&&ht>-j&&wt<rt&&wt>-rt){const ft=Math.abs(H-F-g);if((T===null||ft<T)&&(T=ft,P=ht,S=wt,v=F,p.copy(C),m.copy(J),_.copy(tt),y++,d))return!0}}}if(y){x=!0;const U=this.createContactEquation(a,c,t,e,l,h);p.scale(-g,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(v,p),m.scale(P,m),p.vadd(m,p),_.scale(S,_),p.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let z=u.get();const b=My;for(let U=0;U!==2&&!x;U++)for(let Z=0;Z!==2&&!x;Z++)for(let C=0;C!==2&&!x;C++)if(z.set(0,0,0),U?z.vadd(f[0],z):z.vsub(f[0],z),Z?z.vadd(f[1],z):z.vsub(f[1],z),C?z.vadd(f[2],z):z.vsub(f[2],z),i.vadd(z,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;x=!0;const F=this.createContactEquation(a,c,t,e,l,h);F.ri.copy(b),F.ri.normalize(),F.ni.copy(F.ri),F.ri.scale(g,F.ri),F.rj.copy(z),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}u.release(z),z=null;const E=u.get(),B=u.get(),k=u.get(),N=u.get(),L=u.get(),D=f.length;for(let U=0;U!==D&&!x;U++)for(let Z=0;Z!==D&&!x;Z++)if(U%3!==Z%3){f[Z].cross(f[U],E),E.normalize(),f[U].vadd(f[Z],B),k.copy(n),k.vsub(B,k),k.vsub(i,k);const C=k.dot(E);E.scale(C,N);let F=0;for(;F===U%3||F===Z%3;)F++;L.copy(n),L.vsub(N,L),L.vsub(B,L),L.vsub(i,L);const H=Math.abs(C),J=L.length();if(H<f[F].length()&&J<g){if(d)return!0;x=!0;const tt=this.createContactEquation(a,c,t,e,l,h);B.vadd(N,tt.rj),tt.rj.copy(tt.rj),L.negate(tt.ni),tt.ni.normalize(),tt.ri.copy(tt.rj),tt.ri.vadd(i,tt.ri),tt.ri.vsub(n,tt.ri),tt.ri.normalize(),tt.ri.scale(g,tt.ri),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),tt.rj.vadd(i,tt.rj),tt.rj.vsub(c.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}}u.release(E,B,k,N,L)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,f){const g=Oy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){const x=[],p=ky;t.clipAgainstHull(n,s,e,i,o,g,-100,100,x);let m=0;for(let _=0;_!==x.length;_++){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),y=v.ri,P=v.rj;g.negate(v.ni),x[_].normal.negate(p),p.scale(x[_].depth,p),x[_].point.vadd(p,y),P.copy(x[_].point),y.vsub(n,y),P.vsub(i,P),y.vadd(n,y),y.vsub(a.position,y),P.vadd(i,P),P.vsub(c.position,P),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,by);const f=e.faceNormals,g=e.faces,x=e.vertices,p=t.radius;let m=!1;for(let _=0;_!==x.length;_++){const v=x[_],y=Cy;o.vmult(v,y),i.vadd(y,y);const P=Ry;if(y.vsub(n,P),P.lengthSquared()<p*p){if(d)return!0;m=!0;const S=this.createContactEquation(a,c,t,e,l,h);S.ri.copy(P),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(p,S.ri),y.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let _=0,v=g.length;_!==v&&m===!1;_++){const y=f[_],P=g[_],S=Py;o.vmult(y,S);const T=Ly;o.vmult(x[P[0]],T),T.vadd(i,T);const z=Iy;S.scale(-p,z),n.vadd(z,z);const b=Dy;z.vsub(T,b);const E=b.dot(S),B=Uy;if(n.vsub(T,B),E<0&&B.dot(S)>0){const k=[];for(let N=0,L=P.length;N!==L;N++){const D=u.get();o.vmult(x[P[N]],D),i.vadd(D,D),k.push(D)}if(gy(k,S,n)){if(d)return!0;m=!0;const N=this.createContactEquation(a,c,t,e,l,h);S.scale(-p,N.ri),S.negate(N.ni);const L=u.get();S.scale(-E,L);const D=u.get();S.scale(-p,D),n.vsub(i,N.rj),N.rj.vadd(D,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(L),u.release(D),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let U=0,Z=k.length;U!==Z;U++)u.release(k[U]);return}else for(let N=0;N!==P.length;N++){const L=u.get(),D=u.get();o.vmult(x[P[(N+1)%P.length]],L),o.vmult(x[P[(N+2)%P.length]],D),i.vadd(L,L),i.vadd(D,D);const U=Ay;D.vsub(L,U);const Z=Ty;U.unit(Z);const C=u.get(),F=u.get();n.vsub(L,F);const H=F.dot(Z);Z.scale(H,C),C.vadd(L,C);const J=u.get();if(C.vsub(n,J),H>0&&H*H<U.lengthSquared()&&J.lengthSquared()<p*p){if(d)return!0;const tt=this.createContactEquation(a,c,t,e,l,h);C.vsub(i,tt.rj),C.vsub(n,tt.ni),tt.ni.normalize(),tt.ni.scale(p,tt.ri),tt.rj.vadd(i,tt.rj),tt.rj.vsub(c.position,tt.rj),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(let j=0,rt=k.length;j!==rt;j++)u.release(k[j]);u.release(L),u.release(D),u.release(C),u.release(J),u.release(F);return}u.release(L),u.release(D),u.release(C),u.release(J),u.release(F)}for(let N=0,L=k.length;N!==L;N++)u.release(k[N])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=Ny,f=Fy;f.set(0,0,1),s.vmult(f,f);let g=0;const x=By;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),v=zy;f.scale(f.dot(x),v),u.vsub(v,v),v.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=t.radius,g=e.elementSize,x=Jy,p=$y;ee.pointToLocalFrame(i,o,n,p);let m=Math.floor((p.x-f)/g)-1,_=Math.ceil((p.x+f)/g)+1,v=Math.floor((p.y-f)/g)-1,y=Math.ceil((p.y+f)/g)+1;if(_<0||y<0||m>u.length||v>u[0].length)return;m<0&&(m=0),_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),m>=u.length&&(m=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const P=[];e.getRectMinMax(m,v,_,y,P);const S=P[0],T=P[1];if(p.z-f>T||p.z+f<S)return;const z=this.result;for(let b=m;b<_;b++)for(let E=v;E<y;E++){const B=z.length;let k=!1;if(e.getConvexTrianglePillar(b,E,!1),ee.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&k||(e.getConvexTrianglePillar(b,E,!0),ee.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&k))return!0;if(z.length-B>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,x=Ky,p=Zy,m=Yy;ee.pointToLocalFrame(i,o,n,m);let _=Math.floor((m.x-g)/f)-1,v=Math.ceil((m.x+g)/f)+1,y=Math.floor((m.y-g)/f)-1,P=Math.ceil((m.y+g)/f)+1;if(v<0||P<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),P<0&&(P=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),P>=u[0].length&&(P=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const S=[];e.getRectMinMax(_,y,v,P,S);const T=S[0],z=S[1];if(!(m.z-g>z||m.z+g<T))for(let b=_;b<v;b++)for(let E=y;E<P;E++){let B=!1;if(e.getConvexTrianglePillar(b,E,!1),ee.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&B||(e.getConvexTrianglePillar(b,E,!0),ee.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&B))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Wy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Vy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Hy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const p=Gy;u.scale(u.dot(i),p),i.vsub(p,p),x.rj.copy(p),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const f=qy,g=jy;let x=null;const p=Xy;if(p.copy(i),p.vsub(n,p),s.conjugate(Lh),Lh.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,_=t.faces.length;m!==_;m++){const v=[t.worldVertices[t.faces[m][0]]],y=t.worldFaceNormals[m];i.vsub(v[0],Ih);const P=-y.dot(Ih);if(x===null||Math.abs(P)<Math.abs(x)){if(d)return!0;x=P,u=m,f.copy(y)}}if(u!==-1){const m=this.createContactEquation(c,a,e,t,l,h);f.scale(x,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const _=m.ri,v=m.rj;_.vadd(i,_),_.vsub(c.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=ny,f=iy,g=sy,x=ry,p=oy,m=ay,_=uy,v=ey,y=Q_,P=dy;ee.pointToLocalFrame(i,o,n,p);const S=t.radius;_.lowerBound.set(p.x-S,p.y-S,p.z-S),_.upperBound.set(p.x+S,p.y+S,p.z+S),e.getTrianglesInAABB(_,P);const T=ty,z=t.radius*t.radius;for(let N=0;N<P.length;N++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[P[N]*3+L],T),T.vsub(p,y),y.lengthSquared()<=z){if(v.copy(T),ee.pointToWorldFrame(i,o,v,T),T.vsub(n,y),d)return!0;let D=this.createContactEquation(a,c,t,e,l,h);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(T),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let N=0;N<P.length;N++)for(let L=0;L<3;L++){e.getVertex(e.indices[P[N]*3+L],u),e.getVertex(e.indices[P[N]*3+(L+1)%3],f),f.vsub(u,g),p.vsub(f,m);const D=m.dot(g);p.vsub(u,m);let U=m.dot(g);if(U>0&&D<0&&(p.vsub(u,m),x.copy(g),x.normalize(),U=m.dot(x),x.scale(U,m),m.vadd(u,m),m.distanceTo(p)<t.radius)){if(d)return!0;const C=this.createContactEquation(a,c,t,e,l,h);m.vsub(p,C.ni),C.ni.normalize(),C.ni.scale(t.radius,C.ri),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),ee.pointToWorldFrame(i,o,m,m),m.vsub(c.position,C.rj),ee.vectorToWorldFrame(o,C.ni,C.ni),ee.vectorToWorldFrame(o,C.ri,C.ri),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}}const b=cy,E=ly,B=hy,k=J_;for(let N=0,L=P.length;N!==L;N++){e.getTriangleVertices(P[N],b,E,B),e.getNormal(P[N],k),p.vsub(b,m);let D=m.dot(k);if(k.scale(D,m),p.vsub(m,m),D=m.distanceTo(p),Se.pointInTriangle(m,b,E,B)&&D<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,h);m.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),ee.pointToWorldFrame(i,o,m,m),m.vsub(c.position,U.rj),ee.vectorToWorldFrame(o,U.ni,U.ni),ee.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new w,f=K_;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const x=new w;x.copy(u),ee.pointToWorldFrame(i,o,x,u);const p=Z_;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(f);const v=$_;f.scale(p.dot(f),v),u.vsub(v,v),_.ri.copy(v),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const _i=new w,is=new w,ss=new w,X_=new w,q_=new w,j_=new Ee,Y_=new Ee,K_=new w,Z_=new w,$_=new w,J_=new w,Q_=new w;new w;const ty=new w,ey=new w,ny=new w,iy=new w,sy=new w,ry=new w,oy=new w,ay=new w,cy=new w,ly=new w,hy=new w,uy=new en,dy=[],Gr=new w,Ph=new w,fy=new w,py=new w,my=new w;function gy(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=fy;r[(s+1)%i].vsub(o,a);const c=py;a.cross(t,c);const l=my;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Wr=new w,xy=new w,vy=new w,_y=new w,yy=[new w,new w,new w,new w,new w,new w],My=new w,wy=new w,Sy=new w,Ey=new w,by=new w,Ay=new w,Ty=new w,Ry=new w,Cy=new w,Py=new w,Ly=new w,Iy=new w,Dy=new w,Uy=new w;new w;new w;const Ny=new w,Fy=new w,By=new w,zy=new w,Oy=new w,ky=new w,Vy=new w,Hy=new w,Gy=new w,Wy=new w,Lh=new Ee,Xy=new w;new w;const qy=new w,Ih=new w,jy=new w,Yy=new w,Ky=new w,Zy=[0],$y=new w,Jy=new w;class Dh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Uh(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Uh(e,h)}}}function Uh(r,t){r.push((t&4294901760)>>16,t&65535)}const ga=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Qy{constructor(){this.data={keys:[]}}get(t,e){const n=ga(t,e);return this.data[n]}set(t,e,n){const i=ga(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ga(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class tM extends Iu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Du,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new z_,this.constraints=[],this.narrowphase=new W_(this),this.collisionMatrix=new _h,this.collisionMatrixPrevious=new _h,this.bodyOverlapKeeper=new Dh,this.shapeOverlapKeeper=new Dh,this.contactmaterials=[],this.contactMaterialTable=new Qy,this.defaultMaterial=new So("default"),this.defaultContactMaterial=new wo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof tr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Se.ALL,n.from=t,n.to=e,n.callback=i,xa.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Se.ANY,n.from=t,n.to=e,n.result=i,xa.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Se.CLOSEST,n.from=t,n.to=e,n.result=i,xa.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof yt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=rM,i=oM,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=yt.DYNAMIC;let u=-1/0;const f=this.constraints,g=sM;c.length();const x=c.x,p=c.y,m=c.z;let _=0;for(l&&(u=Ae.now()),_=0;_!==s;_++){const N=o[_];if(N.type===d){const L=N.force,D=N.mass;L.x+=D*x,L.y+=D*p,L.z+=D*m}}for(let N=0,L=this.subsystems.length;N!==L;N++)this.subsystems[N].update();l&&(u=Ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ae.now()-u);let v=f.length;for(_=0;_!==v;_++){const N=f[_];if(!N.collideConnected)for(let L=n.length-1;L>=0;L-=1)(N.bodyA===n[L]&&N.bodyB===i[L]||N.bodyB===n[L]&&N.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),l&&(u=Ae.now());const y=iM,P=e.length;for(_=0;_!==P;_++)y.push(e[_]);e.length=0;const S=this.frictionEquations.length;for(_=0;_!==S;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(h.narrowphase=Ae.now()-u),l&&(u=Ae.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const T=e.length;for(let N=0;N!==T;N++){const L=e[N],D=L.bi,U=L.bj,Z=L.si,C=L.sj;let F;if(D.material&&U.material?F=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:F=this.defaultContactMaterial,F.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(L.restitution=D.material.restitution*U.material.restitution)),a.addEquation(L),D.allowSleep&&D.type===yt.DYNAMIC&&D.sleepState===yt.SLEEPING&&U.sleepState===yt.AWAKE&&U.type!==yt.STATIC){const H=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),J=U.sleepSpeedLimit**2;H>=J*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===yt.DYNAMIC&&U.sleepState===yt.SLEEPING&&D.sleepState===yt.AWAKE&&D.type!==yt.STATIC){const H=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),J=D.sleepSpeedLimit**2;H>=J*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(Fs.body=U,Fs.contact=L,D.dispatchEvent(Fs),Fs.body=D,U.dispatchEvent(Fs)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(Z.id,C.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ae.now()-u,u=Ae.now()),_=0;_!==s;_++){const N=o[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(v=f.length,_=0;_!==v;_++){const N=f[_];N.update();for(let L=0,D=N.equations.length;L!==D;L++){const U=N.equations[L];a.addEquation(U)}}a.solve(t,this),l&&(h.solve=Ae.now()-u),a.removeAllEquations();const z=Math.pow;for(_=0;_!==s;_++){const N=o[_];if(N.type&d){const L=z(1-N.linearDamping,t),D=N.velocity;D.scale(L,D);const U=N.angularVelocity;if(U){const Z=z(1-N.angularDamping,t);U.scale(Z,U)}}}this.dispatchEvent(nM),l&&(u=Ae.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,E,B);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ae.now()-u),this.stepnumber+=1,this.dispatchEvent(eM);let k=!0;if(this.allowSleep)for(k=!1,_=0;_!==s;_++){const N=o[_];N.sleepTick(this.time),N.sleepState!==yt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(kn,Vn),t){for(let s=0,o=kn.length;s<o;s+=2)Bs.bodyA=this.getBodyById(kn[s]),Bs.bodyB=this.getBodyById(kn[s+1]),this.dispatchEvent(Bs);Bs.bodyA=Bs.bodyB=null}if(e){for(let s=0,o=Vn.length;s<o;s+=2)zs.bodyA=this.getBodyById(Vn[s]),zs.bodyB=this.getBodyById(Vn[s+1]),this.dispatchEvent(zs);zs.bodyA=zs.bodyB=null}kn.length=Vn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(kn,Vn),n){for(let s=0,o=kn.length;s<o;s+=2){const a=this.getShapeById(kn[s]),c=this.getShapeById(kn[s+1]);Hn.shapeA=a,Hn.shapeB=c,a&&(Hn.bodyA=a.body),c&&(Hn.bodyB=c.body),this.dispatchEvent(Hn)}Hn.bodyA=Hn.bodyB=Hn.shapeA=Hn.shapeB=null}if(i){for(let s=0,o=Vn.length;s<o;s+=2){const a=this.getShapeById(Vn[s]),c=this.getShapeById(Vn[s+1]);Gn.shapeA=a,Gn.shapeB=c,a&&(Gn.bodyA=a.body),c&&(Gn.bodyB=c.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new en;const xa=new Se,Ae=globalThis.performance||{};if(!Ae.now){let r=Date.now();Ae.timing&&Ae.timing.navigationStart&&(r=Ae.timing.navigationStart),Ae.now=()=>Date.now()-r}new w;const eM={type:"postStep"},nM={type:"preStep"},Fs={type:yt.COLLIDE_EVENT_NAME,body:null,contact:null},iM=[],sM=[],rM=[],oM=[],kn=[],Vn=[],Bs={type:"beginContact",bodyA:null,bodyB:null},zs={type:"endContact",bodyA:null,bodyB:null},Hn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function aM(){const r=new tM({gravity:new w(0,-9.82,0)});return r.broadphase=new Du,r.allowSleep=!1,r.defaultContactMaterial.friction=.45,r.defaultContactMaterial.restitution=.05,r}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Nh=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Nh(""))}catch{Nh=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var hn=Uint8Array,oi=Uint16Array,Ka=Uint32Array,Vu=new hn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Hu=new hn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cM=new hn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gu=function(r,t){for(var e=new oi(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];for(var i=new Ka(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return[e,i]},Wu=Gu(Vu,2),Xu=Wu[0],lM=Wu[1];Xu[28]=258,lM[258]=28;var hM=Gu(Hu,0),uM=hM[0],Za=new oi(32768);for(var me=0;me<32768;++me){var si=(me&43690)>>>1|(me&21845)<<1;si=(si&52428)>>>2|(si&13107)<<2,si=(si&61680)>>>4|(si&3855)<<4,Za[me]=((si&65280)>>>8|(si&255)<<8)>>>1}var Ws=function(r,t,e){for(var n=r.length,i=0,s=new oi(t);i<n;++i)++s[r[i]-1];var o=new oi(t);for(i=0;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new oi(1<<t);var c=15-t;for(i=0;i<n;++i)if(r[i])for(var l=i<<4|r[i],h=t-r[i],d=o[r[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)a[Za[d]>>>c]=l}else for(a=new oi(n),i=0;i<n;++i)r[i]&&(a[i]=Za[o[r[i]-1]++]>>>15-r[i]);return a},rr=new hn(288);for(var me=0;me<144;++me)rr[me]=8;for(var me=144;me<256;++me)rr[me]=9;for(var me=256;me<280;++me)rr[me]=7;for(var me=280;me<288;++me)rr[me]=8;var qu=new hn(32);for(var me=0;me<32;++me)qu[me]=5;var dM=Ws(rr,9,1),fM=Ws(qu,5,1),va=function(r){for(var t=r[0],e=1;e<r.length;++e)r[e]>t&&(t=r[e]);return t},gn=function(r,t,e){var n=t/8|0;return(r[n]|r[n+1]<<8)>>(t&7)&e},_a=function(r,t){var e=t/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(t&7)},pM=function(r){return(r/8|0)+(r&7&&1)},mM=function(r,t,e){(e==null||e>r.length)&&(e=r.length);var n=new(r instanceof oi?oi:r instanceof Ka?Ka:hn)(e-t);return n.set(r.subarray(t,e)),n},gM=function(r,t,e){var n=r.length;if(!n||e&&!e.l&&n<5)return t||new hn(0);var i=!t||e,s=!e||e.i;e||(e={}),t||(t=new hn(n*3));var o=function(wt){var ft=t.length;if(wt>ft){var Ct=new hn(Math.max(ft*2,wt));Ct.set(t),t=Ct}},a=e.f||0,c=e.p||0,l=e.b||0,h=e.l,d=e.d,u=e.m,f=e.n,g=n*8;do{if(!h){e.f=a=gn(r,c,1);var x=gn(r,c+1,3);if(c+=3,x)if(x==1)h=dM,d=fM,u=9,f=5;else if(x==2){var v=gn(r,c,31)+257,y=gn(r,c+10,15)+4,P=v+gn(r,c+5,31)+1;c+=14;for(var S=new hn(P),T=new hn(19),z=0;z<y;++z)T[cM[z]]=gn(r,c+z*3,7);c+=y*3;for(var b=va(T),E=(1<<b)-1,B=Ws(T,b,1),z=0;z<P;){var k=B[gn(r,c,E)];c+=k&15;var p=k>>>4;if(p<16)S[z++]=p;else{var N=0,L=0;for(p==16?(L=3+gn(r,c,3),c+=2,N=S[z-1]):p==17?(L=3+gn(r,c,7),c+=3):p==18&&(L=11+gn(r,c,127),c+=7);L--;)S[z++]=N}}var D=S.subarray(0,v),U=S.subarray(v);u=va(D),f=va(U),h=Ws(D,u,1),d=Ws(U,f,1)}else throw"invalid block type";else{var p=pM(c)+4,m=r[p-4]|r[p-3]<<8,_=p+m;if(_>n){if(s)throw"unexpected EOF";break}i&&o(l+m),t.set(r.subarray(p,_),l),e.b=l+=m,e.p=c=_*8;continue}if(c>g){if(s)throw"unexpected EOF";break}}i&&o(l+131072);for(var Z=(1<<u)-1,C=(1<<f)-1,F=c;;F=c){var N=h[_a(r,c)&Z],H=N>>>4;if(c+=N&15,c>g){if(s)throw"unexpected EOF";break}if(!N)throw"invalid length/literal";if(H<256)t[l++]=H;else if(H==256){F=c,h=null;break}else{var J=H-254;if(H>264){var z=H-257,tt=Vu[z];J=gn(r,c,(1<<tt)-1)+Xu[z],c+=tt}var j=d[_a(r,c)&C],rt=j>>>4;if(!j)throw"invalid distance";c+=j&15;var U=uM[rt];if(rt>3){var tt=Hu[rt];U+=_a(r,c)&(1<<tt)-1,c+=tt}if(c>g){if(s)throw"unexpected EOF";break}i&&o(l+131072);for(var ht=l+J;l<ht;l+=4)t[l]=t[l-U],t[l+1]=t[l+1-U],t[l+2]=t[l+2-U],t[l+3]=t[l+3-U];l=ht}}e.l=h,e.p=F,e.b=l,h&&(a=1,e.m=u,e.d=d,e.n=f)}while(!a);return l==t.length?t:mM(t,0,l)},xM=new hn(0),vM=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function _M(r,t){return gM((vM(r),r.subarray(2,-4)),t)}var yM=typeof TextDecoder<"u"&&new TextDecoder,MM=0;try{yM.decode(xM,{stream:!0}),MM=1}catch{}function ju(r,t,e){const n=e.length-r-1;if(t>=e[n])return n-1;if(t<=e[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;t<e[o]||t>=e[o+1];)t<e[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function wM(r,t,e,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=e;++a){s[a]=t-n[r+1-a],o[a]=n[r+a]-t;let c=0;for(let l=0;l<a;++l){const h=o[l+1],d=s[a-l],u=i[l]/(h+d);i[l]=c+h*u,c=d*u}i[a]=c}return i}function SM(r,t,e,n){const i=ju(r,n,t),s=wM(i,n,r,t),o=new ne(0,0,0,0);for(let a=0;a<=r;++a){const c=e[i-r+a],l=s[a],h=c.w*l;o.x+=c.x*h,o.y+=c.y*h,o.z+=c.z*h,o.w+=c.w*l}return o}function EM(r,t,e,n,i){const s=[];for(let d=0;d<=e;++d)s[d]=0;const o=[];for(let d=0;d<=n;++d)o[d]=s.slice(0);const a=[];for(let d=0;d<=e;++d)a[d]=s.slice(0);a[0][0]=1;const c=s.slice(0),l=s.slice(0);for(let d=1;d<=e;++d){c[d]=t-i[r+1-d],l[d]=i[r+d]-t;let u=0;for(let f=0;f<d;++f){const g=l[f+1],x=c[d-f];a[d][f]=g+x;const p=a[f][d-1]/a[d][f];a[f][d]=u+g*p,u=x*p}a[d][d]=u}for(let d=0;d<=e;++d)o[0][d]=a[d][e];for(let d=0;d<=e;++d){let u=0,f=1;const g=[];for(let x=0;x<=e;++x)g[x]=s.slice(0);g[0][0]=1;for(let x=1;x<=n;++x){let p=0;const m=d-x,_=e-x;d>=x&&(g[f][0]=g[u][0]/a[_+1][m],p=g[f][0]*a[m][_]);const v=m>=-1?1:-m,y=d-1<=_?x-1:e-d;for(let S=v;S<=y;++S)g[f][S]=(g[u][S]-g[u][S-1])/a[_+1][m+S],p+=g[f][S]*a[m+S][_];d<=_&&(g[f][x]=-g[u][x-1]/a[_+1][d],p+=g[f][x]*a[d][_]),o[x][d]=p;const P=u;u=f,f=P}}let h=e;for(let d=1;d<=n;++d){for(let u=0;u<=e;++u)o[d][u]*=h;h*=e-d}return o}function bM(r,t,e,n,i){const s=i<r?i:r,o=[],a=ju(r,n,t),c=EM(a,n,r,s,t),l=[];for(let h=0;h<e.length;++h){const d=e[h].clone(),u=d.w;d.x*=u,d.y*=u,d.z*=u,l[h]=d}for(let h=0;h<=s;++h){const d=l[a-r].clone().multiplyScalar(c[h][0]);for(let u=1;u<=r;++u)d.add(l[a-r+u].clone().multiplyScalar(c[h][u]));o[h]=d}for(let h=s+1;h<=i+1;++h)o[h]=new ne(0,0,0);return o}function AM(r,t){let e=1;for(let i=2;i<=r;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=r-t;++i)n*=i;return e/n}function TM(r){const t=r.length,e=[],n=[];for(let s=0;s<t;++s){const o=r[s];e[s]=new R(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<t;++s){const o=e[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(AM(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function RM(r,t,e,n,i){const s=bM(r,t,e,n,i);return TM(s)}class CM extends Bx{constructor(t,e,n,i,s){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new ne(a.x,a.y,a.z,a.w)}}getPoint(t,e=new R){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=SM(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new R){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=RM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Kt,we,We;class xc extends ui{constructor(t){super(t)}load(t,e,n,i){const s=this,o=s.path===""?_v.extractUrlBase(t):s.path,a=new Pu(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(c){try{e(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t,e){if(NM(t))Kt=new UM().parse(t);else{const i=$u(t);if(!FM(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Bh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Bh(i));Kt=new DM().parse(i)}const n=new Es(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new PM(n,this.manager).parse(Kt)}}class PM{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){we=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),s=new LM().parse(i);return this.parseScene(i,s,n),We}parseConnections(){const t=new Map;return"Connections"in Kt&&Kt.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};t.get(i).parents.push(a),t.has(s)||t.set(s,{parents:[],children:[]});const c={ID:i,relationship:o};t.get(s).children.push(c)}),t}parseImages(){const t={},e={};if("Video"in Kt.Objects){const n=Kt.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(t[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,c=typeof s.Content=="string"&&s.Content!=="";if(a||c){const l=this.parseImage(n[i]);e[s.RelativeFilename||s.Filename]=l}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+s+";base64,"+e;{const o=new Uint8Array(e);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(t){const e=new Map;if("Texture"in Kt.Objects){const n=Kt.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],t);e.set(parseInt(i),s)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,s=t.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?jn:tn,n.wrapT=a===0?jn:tn,"Scaling"in t){const c=t.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in t){const c=t.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(t,e){let n;const i=this.textureLoader.path,s=we.get(t.id).children;s!==void 0&&s.length>0&&e[s[0].ID]!==void 0&&(n=e[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=t.FileName.slice(-3).toLowerCase();if(a==="tga"){const c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),o=new Ie):(c.setPath(this.textureLoader.path),o=c.load(n))}else if(a==="dds"){const c=this.manager.getHandler(".dds");c===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",t.RelativeFilename),o=new Ie):(c.setPath(this.textureLoader.path),o=c.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),o=new Ie):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(t){const e=new Map;if("Material"in Kt.Objects){const n=Kt.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],t);s!==null&&e.set(parseInt(i),s)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let s=t.ShadingModel;if(typeof s=="object"&&(s=s.value),!we.has(n))return null;const o=this.parseParameters(t,e,n);let a;switch(s.toLowerCase()){case"phong":a=new Kr;break;case"lambert":a=new ev;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Kr;break}return a.setValues(o),a.name=i,a}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new Nt().fromArray(t.Diffuse.value).convertSRGBToLinear():t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new Nt().fromArray(t.DiffuseColor.value).convertSRGBToLinear()),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new Nt().fromArray(t.Emissive.value).convertSRGBToLinear():t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Nt().fromArray(t.EmissiveColor.value).convertSRGBToLinear()),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new Nt().fromArray(t.Specular.value).convertSRGBToLinear():t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new Nt().fromArray(t.SpecularColor.value).convertSRGBToLinear());const s=this;return we.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(e,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(e,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(e,o.ID),i.map!==void 0&&(i.map.colorSpace=de);break;case"DisplacementColor":i.displacementMap=s.getTexture(e,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(e,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=de);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(e,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(e,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Jr,i.envMap.colorSpace=de);break;case"SpecularColor":i.specularMap=s.getTexture(e,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=de);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(e,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(t,e){return"LayeredTexture"in Kt.Objects&&e in Kt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=we.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Kt.Objects){const n=Kt.Objects.Deformer;for(const i in n){const s=n[i],o=we.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,t[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=a}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const s=e[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Lt().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const s=t.children[i],o=e[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=we.get(parseInt(s.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(t,e,n){We=new Pn;const i=this.parseModels(t.skeletons,e,n),s=Kt.Objects.Model,o=this;i.forEach(function(c){const l=s[c.ID];o.setLookAtProperties(c,l),we.get(c.ID).parents.forEach(function(d){const u=i.get(d.ID);u!==void 0&&u.add(c)}),c.parent===null&&We.add(c)}),this.bindSkeleton(t.skeletons,e,i),this.addGlobalSceneSettings(),We.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const l=Ku(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});const a=new IM().parse();We.children.length===1&&We.children[0].isGroup&&(We.children[0].animations=a,We=We.children[0]),We.animations=a}parseModels(t,e,n){const i=new Map,s=Kt.Objects.Model;for(const o in s){const a=parseInt(o),c=s[o],l=we.get(a);let h=this.buildSkeleton(l,t,a,c.attrName);if(!h){switch(c.attrType){case"Camera":h=this.createCamera(l);break;case"Light":h=this.createLight(l);break;case"Mesh":h=this.createMesh(l,e,n);break;case"NurbsCurve":h=this.createCurve(l,e);break;case"LimbNode":case"Root":h=new Ga;break;case"Null":default:h=new Pn;break}h.name=c.attrName?te.sanitizeNodeName(c.attrName):"",h.userData.originalName=c.attrName,h.ID=a}this.getTransformData(h,c),i.set(a,h)}return i}buildSkeleton(t,e,n,i){let s=null;return t.parents.forEach(function(o){for(const a in e){const c=e[a];c.rawBones.forEach(function(l,h){if(l.ID===o.ID){const d=s;s=new Ga,s.matrixWorld.copy(l.transformLink),s.name=i?te.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,c.bones[h]=s,d!==null&&s.add(d)}})}}),s}createCamera(t){let e,n;if(t.children.forEach(function(i){const s=Kt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new ce;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);const l=a/c;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new qe(h,l,s,o),d!==null&&e.setFocalLength(d);break;case 1:e=new oc(-a/2,a/2,c/2,-c/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new ce;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const s=Kt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new ce;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Nt().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const c=1;switch(i){case 0:e=new ph(s,o,a,c);break;case 1:e=new Lu(s,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=xe.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=xe.degToRad(n.OuterAngle.value),h=Math.max(h,1)),e=new mv(s,o,a,l,h,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new ph(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,s=null,o=null;const a=[];return t.children.forEach(function(c){e.has(c.ID)&&(s=e.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Kr({name:ui.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(c){c.vertexColors=!0}),s.FBX_Deformer?(i=new Ux(s,o),i.normalizeSkinWeights()):i=new ue(s,o),i}createCurve(t,e){const n=t.children.reduce(function(s,o){return e.has(o.ID)&&(s=e.get(o.ID)),s},null),i=new Gs({name:ui.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Su(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=Zu(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&we.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Kt.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(o),We.add(t.target)):t.lookAt(new R().fromArray(o))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const s in t){const o=t[s];we.get(parseInt(o.ID)).parents.forEach(function(c){if(e.has(c.ID)){const l=c.ID;we.get(l).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new cc(o.bones),i[d.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Kt.Objects){const e=Kt.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(s){t[s.Node]=new Lt().fromArray(s.Matrix.a)}):t[i.Node]=new Lt().fromArray(i.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in Kt){if("AmbientColor"in Kt.GlobalSettings){const t=Kt.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const s=new Nt(e,n,i).convertSRGBToLinear();We.add(new vv(s,1))}}"UnitScaleFactor"in Kt.GlobalSettings&&(We.userData.unitScaleFactor=Kt.GlobalSettings.UnitScaleFactor.value)}}}class LM{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in Kt.Objects){const n=Kt.Objects.Geometry;for(const i in n){const s=we.get(parseInt(i)),o=this.parseGeometry(s,n[i],t);e.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,s=[],o=t.parents.map(function(d){return Kt.Objects.Model[d.ID]});if(o.length===0)return;const a=t.children.reduce(function(d,u){return i[u.ID]!==void 0&&(d=i[u.ID]),d},null);t.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&s.push(n.morphTargets[d.ID])});const c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=Zu(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);const h=Ku(l);return this.genGeometry(e,a,s,h)}genGeometry(t,e,n,i){const s=new Fe;t.attrName&&(s.name=t.attrName);const o=this.parseGeoNode(t,e),a=this.genBuffers(o),c=new ae(a.vertex,3);if(c.applyMatrix4(i),s.setAttribute("position",c),a.colors.length>0&&s.setAttribute("color",new ae(a.colors,3)),e&&(s.setAttribute("skinIndex",new sc(a.weightsIndices,4)),s.setAttribute("skinWeight",new ae(a.vertexWeights,4)),s.FBX_Deformer=e),a.normal.length>0){const l=new Zt().getNormalMatrix(i),h=new ae(a.normal,3);h.applyNormalMatrix(l),s.setAttribute("normal",h)}if(a.uvs.forEach(function(l,h){const d=h===0?"uv":`uv${h}`;s.setAttribute(d,new ae(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(d,u){d!==l&&(s.addGroup(h,u-h,l),l=d,h=u)}),s.groups.length>0){const d=s.groups[s.groups.length-1],u=d.start+d.count;u!==a.materialIndex.length&&s.addGroup(u,a.materialIndex.length-u,l)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,t,n,i),s}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],c=[],l=[],h=[],d=[];const u=this;return t.vertexIndices.forEach(function(f,g){let x,p=!1;f<0&&(f=f^-1,p=!0);let m=[],_=[];if(o.push(f*3,f*3+1,f*3+2),t.color){const v=Xr(g,n,f,t.color);c.push(v[0],v[1],v[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(v){_.push(v.weight),m.push(v.id)}),_.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],y=[0,0,0,0];_.forEach(function(P,S){let T=P,z=m[S];y.forEach(function(b,E,B){if(T>b){B[E]=T,T=b;const k=v[E];v[E]=z,z=k}})}),m=v,_=y}for(;_.length<4;)_.push(0),m.push(0);for(let v=0;v<4;++v)h.push(_[v]),d.push(m[v])}if(t.normal){const v=Xr(g,n,f,t.normal);a.push(v[0],v[1],v[2])}t.material&&t.material.mappingType!=="AllSame"&&(x=Xr(g,n,f,t.material)[0],x<0&&(u.negativeMaterialIndices=!0,x=0)),t.uv&&t.uv.forEach(function(v,y){const P=Xr(g,n,f,v);l[y]===void 0&&(l[y]=[]),l[y].push(P[0]),l[y].push(P[1])}),i++,p&&(u.genFace(e,t,o,x,a,c,l,h,d,i),n++,i=0,o=[],a=[],c=[],l=[],h=[],d=[])}),e}getNormalNewell(t){const e=new R(0,0,0);for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];e.x+=(i.y-s.y)*(i.z+s.z),e.y+=(i.z-s.z)*(i.x+s.x),e.z+=(i.x-s.x)*(i.y+s.y)}return e.normalize(),e}getNormalTangentAndBitangent(t){const e=this.getNormalNewell(t),i=(Math.abs(e.z)>.5?new R(0,1,0):new R(0,0,1)).cross(e).normalize(),s=e.clone().cross(i).normalize();return{normal:e,tangent:i,bitangent:s}}flattenVertex(t,e,n){return new Ht(t.dot(e),t.dot(n))}genFace(t,e,n,i,s,o,a,c,l,h){let d;if(h>3){const u=[];for(let p=0;p<n.length;p+=3)u.push(new R(e.vertexPositions[n[p]],e.vertexPositions[n[p+1]],e.vertexPositions[n[p+2]]));const{tangent:f,bitangent:g}=this.getNormalTangentAndBitangent(u),x=[];for(const p of u)x.push(this.flattenVertex(p,f,g));d=lc.triangulateShape(x,[])}else d=[[0,1,2]];for(const[u,f,g]of d)t.vertex.push(e.vertexPositions[n[u*3]]),t.vertex.push(e.vertexPositions[n[u*3+1]]),t.vertex.push(e.vertexPositions[n[u*3+2]]),t.vertex.push(e.vertexPositions[n[f*3]]),t.vertex.push(e.vertexPositions[n[f*3+1]]),t.vertex.push(e.vertexPositions[n[f*3+2]]),t.vertex.push(e.vertexPositions[n[g*3]]),t.vertex.push(e.vertexPositions[n[g*3+1]]),t.vertex.push(e.vertexPositions[n[g*3+2]]),e.skeleton&&(t.vertexWeights.push(c[u*4]),t.vertexWeights.push(c[u*4+1]),t.vertexWeights.push(c[u*4+2]),t.vertexWeights.push(c[u*4+3]),t.vertexWeights.push(c[f*4]),t.vertexWeights.push(c[f*4+1]),t.vertexWeights.push(c[f*4+2]),t.vertexWeights.push(c[f*4+3]),t.vertexWeights.push(c[g*4]),t.vertexWeights.push(c[g*4+1]),t.vertexWeights.push(c[g*4+2]),t.vertexWeights.push(c[g*4+3]),t.weightsIndices.push(l[u*4]),t.weightsIndices.push(l[u*4+1]),t.weightsIndices.push(l[u*4+2]),t.weightsIndices.push(l[u*4+3]),t.weightsIndices.push(l[f*4]),t.weightsIndices.push(l[f*4+1]),t.weightsIndices.push(l[f*4+2]),t.weightsIndices.push(l[f*4+3]),t.weightsIndices.push(l[g*4]),t.weightsIndices.push(l[g*4+1]),t.weightsIndices.push(l[g*4+2]),t.weightsIndices.push(l[g*4+3])),e.color&&(t.colors.push(o[u*3]),t.colors.push(o[u*3+1]),t.colors.push(o[u*3+2]),t.colors.push(o[f*3]),t.colors.push(o[f*3+1]),t.colors.push(o[f*3+2]),t.colors.push(o[g*3]),t.colors.push(o[g*3+1]),t.colors.push(o[g*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(s[u*3]),t.normal.push(s[u*3+1]),t.normal.push(s[u*3+2]),t.normal.push(s[f*3]),t.normal.push(s[f*3+1]),t.normal.push(s[f*3+2]),t.normal.push(s[g*3]),t.normal.push(s[g*3+1]),t.normal.push(s[g*3+2])),e.uv&&e.uv.forEach(function(x,p){t.uvs[p]===void 0&&(t.uvs[p]=[]),t.uvs[p].push(a[p][u*2]),t.uvs[p].push(a[p][u*2+1]),t.uvs[p].push(a[p][f*2]),t.uvs[p].push(a[p][f*2+1]),t.uvs[p].push(a[p][g*2]),t.uvs[p].push(a[p][g*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const c=Kt.Objects.Geometry[a.geoID];c!==void 0&&s.genMorphGeometry(t,e,c,i,a.name)})})}genMorphGeometry(t,e,n,i,s){const o=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],l=t.attributes.position.count*3,h=new Float32Array(l);for(let g=0;g<c.length;g++){const x=c[g]*3;h[x]=a[g*3],h[x+1]=a[g*3+1],h[x+2]=a[g*3+2]}const d={vertexIndices:o,vertexPositions:h},u=this.genBuffers(d),f=new ae(u.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),t.morphAttributes.position.push(f)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in t?s=t.NormalIndex.a:"NormalsIndex"in t&&(s=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let s=[];return n==="IndexToDirect"&&(s=t.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let s=[];n==="IndexToDirect"&&(s=t.ColorIndex.a);for(let o=0,a=new Nt;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new Fe;const n=e-1,i=t.KnotVector.a,s=[],o=t.Points.a;for(let d=0,u=o.length;d<u;d+=4)s.push(new ne().fromArray(o,d));let a,c;if(t.Form==="Closed")s.push(s[0]);else if(t.Form==="Periodic"){a=n,c=i.length-1-a;for(let d=0;d<n;++d)s.push(s[d])}const h=new CM(n,i,s,a,c).getPoints(s.length*12);return new Fe().setFromPoints(h)}}class IM{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],s=this.addClip(i);t.push(s)}return t}parseClips(){if(Kt.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Kt.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};e.set(s.id,s)}}return e}parseAnimationCurves(t){const e=Kt.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(BM),values:e[n].KeyValueFloat.a},s=we.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?t.get(o).curves.x=i:a.match(/Y/)?t.get(o).curves.y=i:a.match(/Z/)?t.get(o).curves.z=i:a.match(/DeformPercent/)&&t.has(o)&&(t.get(o).curves.morph=i)}}}parseAnimationLayers(t){const e=Kt.Objects.AnimationLayer,n=new Map;for(const i in e){const s=[],o=we.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(t.has(c.ID)){const h=t.get(c.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[l]===void 0){const d=we.get(c.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(d!==void 0){const u=Kt.Objects.Model[d.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const f={modelName:u.attrName?te.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};We.traverse(function(g){g.ID===u.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Lt),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),s[l]=f}}s[l]&&(s[l][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[l]===void 0){const d=we.get(c.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,u=we.get(d).parents[0].ID,f=we.get(u).parents[0].ID,g=we.get(f).parents[0].ID,x=Kt.Objects.Model[g],p={modelName:x.attrName?te.sanitizeNodeName(x.attrName):"",morphName:Kt.Objects.Deformer[d].attrName};s[l]=p}s[l][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(t){const e=Kt.Objects.AnimationStack,n={};for(const i in e){const s=we.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=t.get(s[0].ID);n[i]={name:e[i].attrName,layer:o}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new ja(t.name,-1,e)}generateTracks(t){const e=[];let n=new R,i=new R;if(t.transform&&t.transform.decompose(n,new De,i),n=n.toArray(),i=i.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");s!==void 0&&e.push(s)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const s=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);s!==void 0&&e.push(s)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.S.curves,i,"scale");s!==void 0&&e.push(s)}if(t.DeformPercent!==void 0){const s=this.generateMorphTrack(t);s!==void 0&&e.push(s)}return e}generateVectorTrack(t,e,n,i){const s=this.getTimesForAllAxes(e),o=this.getKeyframeTrackValues(s,e,n);return new Qs(t+"."+i,s,o)}generateRotationTrack(t,e,n,i,s){let o,a;if(e.x!==void 0&&e.y!==void 0&&e.z!==void 0){const d=this.interpolateRotations(e.x,e.y,e.z,s);o=d[0],a=d[1]}n!==void 0&&(n=n.map(xe.degToRad),n.push(s),n=new Ye().fromArray(n),n=new De().setFromEuler(n)),i!==void 0&&(i=i.map(xe.degToRad),i.push(s),i=new Ye().fromArray(i),i=new De().setFromEuler(i).invert());const c=new De,l=new Ye,h=[];if(!a||!o)return new Ui(t+".quaternion",[],[]);for(let d=0;d<a.length;d+=3)l.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new De().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new Ui(t+".quaternion",o,h)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(s){return s/100}),i=We.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new Js(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let s=1;s<e.length;s++){const o=e[s];o!==i&&(e[n]=o,i=o,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,s=[];let o=-1,a=-1,c=-1;return t.forEach(function(l){if(e.x&&(o=e.x.times.indexOf(l)),e.y&&(a=e.y.times.indexOf(l)),e.z&&(c=e.z.times.indexOf(l)),o!==-1){const h=e.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=e.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(c!==-1){const h=e.z.values[c];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(t,e,n,i){const s=[],o=[];s.push(t.times[0]),o.push(xe.degToRad(t.values[0])),o.push(xe.degToRad(e.values[0])),o.push(xe.degToRad(n.values[0]));for(let a=1;a<t.values.length;a++){const c=[t.values[a-1],e.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;const l=c.map(xe.degToRad),h=[t.values[a],e.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const d=h.map(xe.degToRad),u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const x=Math.max(...f)/180,p=new Ye(...l,i),m=new Ye(...d,i),_=new De().setFromEuler(p),v=new De().setFromEuler(m);_.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const y=t.times[a-1],P=t.times[a]-y,S=new De,T=new Ye;for(let z=0;z<1;z+=1/x)S.copy(_.clone().slerp(v.clone(),z)),s.push(y+z*P),T.setFromQuaternion(S,i),o.push(T.x),o.push(T.y),o.push(T.z)}else s.push(t.times[a]),o.push(xe.degToRad(t.values[a])),o.push(xe.degToRad(e.values[a])),o.push(xe.degToRad(n.values[a]))}return[s,o]}}class DM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new Yu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const c=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(e.currentIndent-1)+"}}");c?e.parseNodeBegin(i,c):l?e.parseNodeProperty(i,l,n[++s]):h?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),s=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(t,i,s);return}if(i==="C"){const c=s.split(",").slice(1),l=parseInt(c[0]),h=parseInt(c[1]);let d=s.split(",").slice(3);d=d.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",s=[l,h],OM(s,d),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=Ma(s))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=Ma(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],c=i[3];let l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=Ma(l);break}this.getPrevNode()[s]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),s)}}class UM{parse(t){const e=new Fh(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Yu;for(;!this.endOfContent(e);){const s=this.parseNode(e,n);s!==null&&i.add(s.name,s)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),s=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const o=t.getUint8(),a=t.getString(o);if(i===0)return null;const c=[];for(let u=0;u<s;u++)c.push(this.parseProperty(t));const l=c.length>0?c[0]:"",h=c.length>1?c[1]:"",d=c.length>2?c[2]:"";for(n.singleProperty=s===1&&t.getOffset()===i;i>t.getOffset();){const u=this.parseNode(t,e);u!==null&&this.parseSubNode(a,n,u)}return n.propertyList=c,typeof l=="number"&&(n.id=l),h!==""&&(n.attrName=h),d!==""&&(n.attrType=d),a!==""&&(n.name=a),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){e[s]=n[s]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],e[i]={type:s,type2:o,flag:a,value:c}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),s=t.getUint32(),o=t.getUint32();if(s===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const a=_M(new Uint8Array(t.getArrayBuffer(o))),c=new Fh(a.buffer);switch(e){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class Fh{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class Yu{add(t,e){this[t]=e}}function NM(r){const t="Kaydara FBX Binary  \0";return r.byteLength>=t.length&&t===$u(r,0,t.length)}function FM(r){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const s=r[i-1];return r=r.slice(e+i),e++,s}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function Bh(r){const t=/FBXVersion: (\d+)/,e=r.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function BM(r){return r/46186158e3}const zM=[];function Xr(r,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return kM(zM,n.buffer,s,o)}const ya=new Ye,rs=new R;function Ku(r){const t=new Lt,e=new Lt,n=new Lt,i=new Lt,s=new Lt,o=new Lt,a=new Lt,c=new Lt,l=new Lt,h=new Lt,d=new Lt,u=new Lt,f=r.inheritType?r.inheritType:0;if(r.translation&&t.setPosition(rs.fromArray(r.translation)),r.preRotation){const E=r.preRotation.map(xe.degToRad);E.push(r.eulerOrder||Ye.DEFAULT_ORDER),e.makeRotationFromEuler(ya.fromArray(E))}if(r.rotation){const E=r.rotation.map(xe.degToRad);E.push(r.eulerOrder||Ye.DEFAULT_ORDER),n.makeRotationFromEuler(ya.fromArray(E))}if(r.postRotation){const E=r.postRotation.map(xe.degToRad);E.push(r.eulerOrder||Ye.DEFAULT_ORDER),i.makeRotationFromEuler(ya.fromArray(E)),i.invert()}r.scale&&s.scale(rs.fromArray(r.scale)),r.scalingOffset&&a.setPosition(rs.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(rs.fromArray(r.scalingPivot)),r.rotationOffset&&c.setPosition(rs.fromArray(r.rotationOffset)),r.rotationPivot&&l.setPosition(rs.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(d.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const g=e.clone().multiply(n).multiply(i),x=new Lt;x.extractRotation(h);const p=new Lt;p.copyPosition(h);const m=p.clone().invert().multiply(h),_=x.clone().invert().multiply(m),v=s,y=new Lt;if(f===0)y.copy(x).multiply(g).multiply(_).multiply(v);else if(f===1)y.copy(x).multiply(_).multiply(g).multiply(v);else{const B=new Lt().scale(new R().setFromMatrixScale(d)).clone().invert(),k=_.clone().multiply(B);y.copy(x).multiply(g).multiply(k).multiply(v)}const P=l.clone().invert(),S=o.clone().invert();let T=t.clone().multiply(c).multiply(l).multiply(e).multiply(n).multiply(i).multiply(P).multiply(a).multiply(o).multiply(s).multiply(S);const z=new Lt().copyPosition(T),b=h.clone().multiply(z);return u.copyPosition(b),T=u.clone().multiply(y),T.premultiply(h.invert()),T}function Zu(r){r=r||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[r]}function Ma(r){return r.split(",").map(function(e){return parseFloat(e)})}function $u(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=r.byteLength),new TextDecoder().decode(new Uint8Array(r,t,e))}function OM(r,t){for(let e=0,n=r.length,i=t.length;e<i;e++,n++)r[n]=t[e]}function kM(r,t,e,n){for(let i=e,s=0;i<n;i++,s++)r[s]=t[i];return r}function VM(r){const t=new Map,e=new Map,n=r.clone();return Ju(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ju(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Ju(r.children[n],t.children[n],e)}function ye(r,t){return Math.random()*(t-r)+r}function Ai(r,t,e){return Math.min(e,Math.max(t,r))}class HM{constructor(t,e,n,i=new R){xt(this,"body");xt(this,"mesh");xt(this,"state","Idle");xt(this,"onGround",!1);xt(this,"mixer",null);xt(this,"actions",{});xt(this,"actionByKind",{});xt(this,"currentAction",null);xt(this,"animBaseSpeed",1.15);xt(this,"camYaw",0);xt(this,"camPitch",-.3);xt(this,"camDist",4.5);xt(this,"targetMouse",null);xt(this,"pounceCooldown",0);xt(this,"_raycaster",new Dv);this.world=t,this.scene=e,this.input=n,this.origin=i;const s=new Eo(.45),o=10;this.body=new yt({mass:o,shape:s,position:new w(i.x,i.y+.7,i.z)}),this.body.linearDamping=.05,this.body.angularDamping=1,this.body.fixedRotation=!0,t.addBody(this.body);const a=new Pn;this.mesh=a,e.add(a),Promise.all([GM(),WM()]).then(([c,l])=>{const h=VM(c);h.traverse(g=>{if(g.isSkinnedMesh||g.isMesh){g.castShadow=!0,g.receiveShadow=!0;const x=p=>{p&&"skinning"in p&&(g.isSkinnedMesh||g.isMesh)&&(p.skinning=!0)};if(l){const p=g.material,m=_=>{_&&"map"in _&&(_.map=l,"side"in _&&(_.side=vn),"needsUpdate"in _&&(_.needsUpdate=!0)),x(_)};Array.isArray(p)?p.forEach(m):m(p)}else if(g.material){const p=g.material;Array.isArray(p)?p.forEach(x):x(p)}g.frustumCulled=!1}});const d=new Te().setFromObject(h),u=d.getCenter(new R);h.position.x-=u.x,h.position.z-=u.z,h.position.y-=d.min.y,a.add(h);const f=c.animations||[];if(f&&f.length>0){this.mixer=new Iv(h),this.actions={};for(const m of f){const _=this.mixer.clipAction(m);_.loop=tu,_.clampWhenFinished=!1,this.actions[m.name.toLowerCase()]=_}const g=Object.keys(this.actions),x=m=>g.find(_=>m.some(v=>_.includes(v)));this.actionByKind.idle=x(["idle","stand"])||g[0]||void 0,this.actionByKind.walk=x(["walk"])||this.actionByKind.idle,this.actionByKind.run=x(["run","jog","sprint"])||this.actionByKind.walk;const p=this.actionByKind.idle;p&&this.actions[p]&&(this.actions[p].reset().fadeIn(.2).play(),this.currentAction=p)}})}update(t,e,n,i=[]){var T,z,b;this.onGround=!1;const s=this.body.world,o=((T=s==null?void 0:s.narrowphase)==null?void 0:T.contactEquations)||[];for(const E of o)if(E.bi===this.body||E.bj===this.body){const B=E.ni,k=E.bi===this.body?-B.y:B.y,N=E.bi===this.body?E.bj:E.bi;if(k>.5){this.onGround=!0;break}if(N!=null&&N.isCouch&&k>.1){this.onGround=!0;break}}if(!this.onGround&&this.body&&this.body.world){const E=((z=this.body.world.gravity)==null?void 0:z.y)??-9.82;this.body.force.y+=this.body.mass*E}if(!this.onGround){const E=Se,B=tr;if(E&&B){const k=new E,N=new B;if(k.from.set(this.body.position.x,this.body.position.y,this.body.position.z),k.to.set(this.body.position.x,this.body.position.y-.7,this.body.position.z),k.intersectWorld(this.body.world,{mode:E.ANY,result:N,skipBackfaces:!0}),N.hasHit&&N.body!==this.body){const L=this.body.position.y-N.hitPointWorld.y;L<=.75&&(this.onGround=!0),!this.onGround&&((b=N.body)!=null&&b.isCouch)&&L<=.9&&(this.onGround=!0)}}}if(this.mixer&&this.actions){const E=this.body.velocity.x,B=this.body.velocity.z,k=Math.hypot(E,B);let N="idle";k>3?N="run":k>.4&&(N="walk");const L=(this.actionByKind[N]||this.currentAction||"").toLowerCase();if(L&&L!==this.currentAction&&this.actions[L]){const U=this.actions[L],Z=this.currentAction?this.actions[this.currentAction]:null;U.reset().fadeIn(.15).play(),Z&&Z.fadeOut(.15),this.currentAction=L}if(this.currentAction){const U=this.actions[this.currentAction];U&&(this.currentAction===(this.actionByKind.run||"").toLowerCase()?U.timeScale=xe.clamp(k/4,.7,2):this.currentAction===(this.actionByKind.walk||"").toLowerCase()?U.timeScale=xe.clamp(k/1.5,.6,1.6):U.timeScale=1)}const D=k<=.05||!this.onGround;this.mixer.timeScale=D?0:this.animBaseSpeed,this.mixer.update(t)}const a=this.input.consumeMouseDelta(),c=.002*this.input.sensitivity;this.camYaw-=a.x*c,this.camPitch-=a.y*c,this.camPitch=Ai(this.camPitch,-1.3,.3),this.camDist=Ai(this.camDist+this.input.consumeWheelDelta(),3,12);const l=this.input.forward-this.input.backward,h=this.input.right-this.input.left,d=Math.abs(l)+Math.abs(h)>0,u=12,f=u*1.75,x=this.input.sneak?2:this.input.run?f:u;if(this.onGround)if(this.input.jump){this.body.velocity.y=7,this.state="Jump";const B=this.body.velocity.x,k=this.body.velocity.z,N=Math.hypot(B,k),L=Math.min(1,N/f),D=45*Math.PI/180*L,U=7*Math.tan(D);if(N>1e-4&&N<U){const Z=B/N,C=k/N,F=U-N;this.body.velocity.x=B+Z*F,this.body.velocity.z=k+C*F}}else d?this.state=this.input.sneak?"Sneak":this.input.run?"Run":"Walk":this.state="Idle";else this.state!=="Pounce"&&(this.state="Jump");if(this.pounceCooldown=Math.max(0,this.pounceCooldown-t),this.input.consumeLockPounce()&&this.pounceCooldown<=0){let E=null,B=999;const k=new R(this.body.position.x,this.body.position.y,this.body.position.z),N=new R(Math.sin(this.camYaw),0,Math.cos(this.camYaw));for(const L of n){const D=L.position.distanceTo(k);D<8&&L.position.clone().sub(k).normalize().dot(N)>.6&&D<B&&(B=D,E=L)}if(E){this.targetMouse=E;const L=E.position.clone().sub(k).normalize();this.body.velocity.set(L.x*8,6.5,L.z*8),this.state="Pounce",this.pounceCooldown=1}}const p=new R;if(d){this.body.wakeUp&&this.body.wakeUp();const E=this.camYaw,B=new R(Math.sin(E),0,Math.cos(E)),k=new R(-Math.cos(E),0,Math.sin(E));p.copy(B).multiplyScalar(l).add(k.multiplyScalar(h)).normalize();const N=this.body.velocity;if(this.onGround){const L=new w(p.x*x,N.y,p.z*x),D=.35;N.x+=(L.x-N.x)*D,N.z+=(L.z-N.z)*D}else N.x+=p.x*x*.5*t,N.z+=p.z*x*.5*t}else this.onGround&&(this.body.velocity.x*=.9,this.body.velocity.z*=.9);if(this.mesh.position.set(this.body.position.x,this.body.position.y-.45,this.body.position.z),p.lengthSq()>1e-4){const E=Math.atan2(p.x,p.z),B=this.mesh.rotation.y;let k=E-B;for(;k>Math.PI;)k-=Math.PI*2;for(;k<-Math.PI;)k+=Math.PI*2;let N;if(this.onGround)N=k*.2;else{const D=4*t;N=Ai(k,-D,D)}this.mesh.rotation.y=B+N}const m=new R(this.body.position.x,this.body.position.y+.8,this.body.position.z),_=new R(-Math.sin(this.camYaw)*this.camDist,0,-Math.cos(this.camYaw)*this.camDist);let v=m.clone().add(new R(0,2.5+this.camPitch*-2,0)).add(_);const y=v.clone(),P=new R().subVectors(y,m),S=P.length();if(S>.001&&i&&i.length>0){const E=P.normalize();this._raycaster.set(m,E),this._raycaster.far=S;const B=this._raycaster.intersectObjects(i,!0).filter(k=>{let N=k.object;for(;N;){if(N===this.mesh)return!1;N=N.parent}return!0});if(B.length>0){const N=B[0],L=Math.max(0,N.distance-.25);v.copy(m).add(E.multiplyScalar(L))}}e.position.lerp(v,.15),e.lookAt(m)}}let wa=null;function GM(){if(!wa){const r=new xc;wa=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/cat-w_S28Lp9.fbx",import.meta.url).toString();r.load(n,i=>{const s=new Te().setFromObject(i),o=new R;s.getSize(o);const l=1.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return wa}let Sa=null;function WM(){return Sa||(Sa=new Promise(r=>{const t=new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAENwAABZ4AAAb5AAAIwP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAQABAAwERAAIRAQMRAf/EAO4AAAICAwADAAAAAAAAAAAAAAgJAAcFBgoCAwQBAAIDAQEBAQAAAAAAAAAAAAYHAAUIAwQCCRAAAQEGBgEEAQUAAAAAAAAAABMBEQIEFAUQEgMVBgc1ICEiJSQjNBY2FxEAAAIGBAoHCQAAAAAAAAAAADEQARECBAUyA7UGIaHBEqIUtBXFFiBRU7NVhQexUjNU1HU2hpYSAAADBQUFBgcAAAAAAAAAAAECAwAQIIKyEVGBscHwcRKzBCExYdFywvFSkhMzY4MTAAECAwcEAwEAAAAAAAAAAAABEfBRcRAhMUFhkcEg0eHxgaGxMP/aAAwDAQACEQMRAAABemFW0kVGeClF2nhLQZKy0GSxLfh3vrzY/MV5mTGxJFf6QUtKGFCXYubF2LGyO/NtH4Wj+crrcIv+SLF2FnylmCKGOKsIxhVhIn4ao9zLwI5bBOnJIqzZWY6OYgWbwqyzdFmUh3i/M4xMSN9wJrqSD88W4z73ZdCG9rNlsbdg10quUYzHmqYL2bJKIehqeqwU45lY/vPS4aY9sxchxB8Hdk7UkkrRpHhkJit0LqO2TQXhtbPxlzD9+xBJl6STDFTKO9A22M+R20xu78N24hSJUWf/2gAIAQEAAQUCrStOypl/Nag6u1nijCrKgriuOxJp/Mag6rmBcqioKsqzsOedzCvOppzOVJVlQVZVnZFwy803E6bns5VFWVBVlWXub+z6yuyXCLlNK9sVB/nvXIqbhCbhCXmcfcuB3TJxRsyp2GubiwVN0N0LhPZ5vh9ybBx2S126vMM7TexU3U3U1Z7PHwuPPxm1/wBqP5KwVP/aAAgBAgABBQKuK4k4lZZxcWYOwryvLDEraXFyYOHejizPonFzYOHejingC5Dh3os7PrtW6U0ctOM1NOqYOHicQnEWeH628+SltZK21g4eUxTFugyyd78prxthtqsZlHlMUxLQZdG++VmfGmQef//aAAgBAwABBQJERJn46zy2e44UwQEC5/GeeWf3HCmCYmXv43R5YfcyimCYmchgbvGVpx2EyimCYmWyLLI8pllb7J6LtJI3GfwfCPhJSN0vdtJS4S2l+oiPwWFiT1fxpjSU1ZeBjJvIwfgsLEhqfiPeaP74fh//2gAIAQICBj8CcU99ubiY6RJHv4qzOJjpEhPzDOJjpEhPzDOJjpEnNULChd8W+982nZEnNULKS0gyHjx1REDfmLKS0g3S2fsqiANu9lZaCt0v9KoP/9oACAEDAgY/AnCXbucfDWI5d1IOUl1iVD00g5WX3RKy0FctL7oiF31Cy6l/ByytwXO/Ot9ZvOAtnjmyh91IMct1kRcc2EzLh6Moi45i1rdRJTB//9oACAEBAQY/AkTpf26yYFE88s4h0DBicLb4fZcEie+WcQQYMGDE3U35Cy4IGJ/hLdXEgYNBgxOVN8OsqBBi8eEt0cUBg0GDETh7HZ6oSRzOLeWObx68o9T65vxOS9G7bjuQGPwK5X8tI/oUGDEStvY9xVCVO5xa9jmUYseoFa2nypoyTNQaKQpCteaeZ3bihL3erW9uiVi+lZ7/AC7oyt53IinjRSFILeabPYpQlr3Xrm3xShfD9fs6sRTxo//aAAgBAQMBPyFk0GTQvcx4pUJ4+H6sVRUQuQuTITSTK/sex7zX0x8ktk40X+FhE5Xb6GRZpr8jfc5Cz8LKBysjcjey1RZSUgXzgZ2+AdRFUiqIpFxZtI+7RAOY5M6fjFZpdxsyJyJz7GMuII2VW1M+UPVV70JrjZA2ZA5A59jSXEM6+HjW/RfKz//aAAgBAgMBPyFgwiEZSW4NZYqKiM1kP4RDy3SathxxSDXQSi2ra1xYaL5l+07hJripRRG9Gl0QXEdxEcALllVtQUGnorqI5nOPoigoNH3/AEXSEPp6L//aAAgBAwMBPyF48Rpzfjq2KCgRpX9ZzcXQMUlIkRSyamLqg0qJDgyPAvEXqqj+lB6KDB3DXDikOb0XoqyseUheEJu34iCpcuXodZWPriUETq6P/9oADAMBAAIRAxEAABBtoisla87a0kT/AET6S0W0b6tYt/VNAHcw/9oACAEBAwE/EIJCCQSYGgzXS2g32TsXh2K/Toa30gyXcbL9FTd3Km7uY2sz9BoQ+xSesY3I38kMKROpE6iLYqrmryNk3USzMhSM9iD2Ku4+TdB8m6CxUOQGj3CV2hSWjv4GezuQupEwiYIquqFmcpIRKtydIGzemGW6SmwDp9/NmJsu5AQQEGWXFCj7Qu/pltRskNJzK9xx5sau/gjvcguNh7jYe4heHN/XBQduKpcvzDUJDzCd1Zne/Aarc9I7kFyrCpVhUxnZqiF9M1i9uXoaA2a/Xc//2gAIAQIDAT8Q1UNVBtr0gag4VQbx1hnuM9xJ9eAPgYN2U+Qw45cMWgkRoH2WDC+Vjbp5CwdZcezoLsSi4TyhXIRUdfDYWTQTYcaBoGEqDTgX67QjcfDyMHjw8KMvlX5s11BXM+O4aw0fbVwLcqnIljbHKFHn/9oACAEDAwE/ENI0hZc9qnJ8RfxC4qGGhoyo5FeSsrWGizeUFBSH7X5sI+GyVHyHBwc0RB1NjNtnfMYbIbISjBVeRr0VRIgkouMbTWwM1qrFXR3WPx8QwN5UUWWInInEn7Ea1cfz4hhPfuoaAyYw8PC71iRzq9WgNGP/2Q==",import.meta.url).toString();new Es().load(t,n=>{try{n.colorSpace=de??yn}catch{}r(n)},void 0,()=>r(null))})),Sa}class XM{constructor(t,e,n,i,s,o){xt(this,"body");xt(this,"mesh");xt(this,"wanderTimer",0);xt(this,"pathTimer",0);xt(this,"target",null);xt(this,"lastCatPos",null);xt(this,"wallCommitTimer",0);xt(this,"wallCommitDir",null);xt(this,"fleeCommitTimer",0);xt(this,"fleeCommitDir",null);xt(this,"heading",new R(1,0,0));xt(this,"flipRetryTimer",0);xt(this,"slowTimer",0);xt(this,"turnCooldown",0);xt(this,"forwardBlockTimer",0);xt(this,"speed",10);xt(this,"alive",!0);xt(this,"holeIgnoreTimer",0);xt(this,"holes");xt(this,"inHoleTimer",0);xt(this,"pendingExitHole",null);xt(this,"seekHoleThisPursuit",null);xt(this,"erraticTimer",0);xt(this,"erraticAngle",0);xt(this,"wasPursued",!1);xt(this,"wanderJitterTimer",0);this.world=t,this.scene=e,this.bounds=i,this.sfx=o;const a=new Eo(.24);this.body=new yt({mass:.3,shape:a,position:new w(n.x,.36,n.z)}),this.body.linearDamping=.2,t.addBody(this.body);const c=new Pn;this.mesh=c,e.add(c),Promise.all([qM(),jM()]).then(([h,d])=>{const u=h.clone(!0);u.traverse(x=>{if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,d)){const p=x.material,m=_=>{_&&"map"in _&&(_.map=d,"side"in _&&(_.side=vn),"needsUpdate"in _&&(_.needsUpdate=!0))};Array.isArray(p)?p.forEach(m):m(p)}});const f=new Te().setFromObject(u),g=f.getCenter(new R);u.position.x-=g.x,u.position.z-=g.z,u.position.y-=f.min.y,c.add(u)});const l=ye(0,Math.PI*2);this.heading.set(Math.sin(l),0,Math.cos(l)),this.holes=s}update(t,e){var g;if(!this.alive)return;if(this.inHoleTimer>0)if(this.inHoleTimer=Math.max(0,this.inHoleTimer-t),this.body.velocity.x=0,this.body.velocity.z=0,this.inHoleTimer===0&&this.pendingExitHole)this.performHoleExit(this.pendingExitHole),this.pendingExitHole=null;else return;this.holeIgnoreTimer=Math.max(0,this.holeIgnoreTimer-t),this.wanderTimer-=t,this.pathTimer-=t,this.flipRetryTimer=Math.max(0,this.flipRetryTimer-t);const n=new R(this.body.position.x,0,this.body.position.z);let i=new R;if(!this.target||this.pathTimer<=0||this.target.distanceTo(n)<.3){const p=ye(this.bounds.min.x+.4,this.bounds.max.x-.4),m=ye(this.bounds.min.z+.4,this.bounds.max.z-.4);this.target=new R(p,0,m),this.pathTimer=ye(3,7)}this.target&&i.copy(this.target).sub(n).normalize();const a=n.distanceTo(e)<7;if(a&&!this.wasPursued){(g=this.sfx)==null||g.mouseSqueek(),this.seekHoleThisPursuit=Math.random()<.5;const x=new R(n.x-e.x,0,n.z-e.z).normalize(),p=100*Math.PI/180,m=ye(-p,p),_=Math.sin(m),v=Math.cos(m),y=x.x*v-x.z*_,P=x.x*_+x.z*v,S=new R(y,0,P).normalize(),T=ye(1.2,2.5),z=this.bounds,b=.8,E=Ai(n.x+S.x*T,z.min.x+b,z.max.x-b),B=Ai(n.z+S.z*T,z.min.z+b,z.max.z-b);if(this.target=new R(E,0,B),this.fleeCommitDir=S.clone(),this.fleeCommitTimer=.3,i.copy(S),this.seekHoleThisPursuit&&this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0){const k=new R(this.body.position.x,.5,this.body.position.z);let N=null,L=1/0;for(const D of this.holes){if(!D.room.containsPoint(k))continue;const U=k.distanceTo(D.position);U<L&&(L=U,N=D)}if(N){const D=N.position.clone().addScaledVector(N.inward,-.1);this.target=D;const U=new R(this.body.position.x,0,this.body.position.z);i.copy(D).sub(U).normalize()}}}if(a){this.fleeCommitTimer=Math.max(0,this.fleeCommitTimer-t);const x=new R(n.x-e.x,0,n.z-e.z);if(x.lengthSq()<1e-6&&x.set(1,0,0),x.normalize(),this.erraticTimer-=t,this.erraticTimer<=0){const p=100*Math.PI/180,m=ye(-p,p),_=Math.sin(m),v=Math.cos(m),y=x.x*v-x.z*_,P=x.x*_+x.z*v;this.erraticTimer=.2,this.fleeCommitDir=new R(y,0,P).normalize(),this.fleeCommitTimer=Math.max(this.fleeCommitTimer,.25)}this.fleeCommitDir&&i.copy(this.fleeCommitDir)}else if(this.erraticAngle=0,this.erraticTimer=Math.max(this.erraticTimer,0),this.fleeCommitTimer=0,this.fleeCommitDir=null,this.seekHoleThisPursuit=null,this.wanderJitterTimer-=t,this.wanderJitterTimer<=0&&i.lengthSq()>1e-4){const x=15*Math.PI/180,p=(Math.random()*2-1)*x,m=Math.sin(p),_=Math.cos(p),v=i.x*_-i.z*m,y=i.x*m+i.z*_;i.set(v,0,y).normalize(),this.wanderJitterTimer=.25}if(this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0&&(!a||this.seekHoleThisPursuit===!0)){const x=a?12:6,p=new R(this.body.position.x,.5,this.body.position.z);let m=null,_=1/0;for(const v of this.holes){if(!v.room.containsPoint(p))continue;const y=p.distanceTo(v.position);y<_&&(_=y,m=v)}if(m&&_<=x){const v=m.position.clone().addScaledVector(m.inward,-.1);this.target=v;const y=new R(this.body.position.x,0,this.body.position.z);i.copy(v).sub(y).normalize()}}const l=this.body.velocity,h=i.lengthSq()>1e-4?Math.max(0,l.x*i.x+l.z*i.z):0;if(i.lengthSq()>1e-4){if(h>=this.speed*.9)this.slowTimer=0;else if(this.slowTimer+=t,this.slowTimer>=.25&&this.flipRetryTimer<=0){const x=Math.random()<.5,p=i.clone();x?p.x*=-1:p.z*=-1;const m=ye(1.2,2.5),_=this.bounds,v=.8,y=Ai(n.x+p.x*m,_.min.x+v,_.max.x-v),P=Ai(n.z+p.z*m,_.min.z+v,_.max.z-v);this.target=new R(y,0,P),this.flipRetryTimer=.1,this.slowTimer=0,i.copy(p)}}let d=1.2;if(a&&(d*=1.75),l.x+=(i.x*this.speed*d-l.x)*.2,l.z+=(i.z*this.speed*d-l.z)*.2,this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0&&(!a||this.seekHoleThisPursuit===!0)){const x=new R(this.body.position.x,0,this.body.position.z);let p=null;for(const m of this.holes){const _=m.inward.clone().setY(0).normalize(),v=new R(-_.z,0,_.x).normalize(),y=x.clone().sub(m.position),P=Math.abs(y.x*v.x+y.z*v.z),S=y.x*_.x+y.z*_.z;if(P<=.18&&S>=0&&S<=.9){p=m;break}}p&&this.teleportFromHole(p)}const u=this.bounds;if(l.x+=(n.x<u.min.x+.5?1:0)+(n.x>u.max.x-.5?-1:0),l.z+=(n.z<u.min.z+.5?1:0)+(n.z>u.max.z-.5?-1:0),this.mesh.position.set(this.body.position.x,.1,this.body.position.z),Math.hypot(l.x,l.z)>.05){const x=Math.atan2(l.x,l.z),p=this.mesh.rotation.y;let m=x-p;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;this.mesh.rotation.y=p+m*Math.min(1,t*8)}this.wasPursued=a}teleportFromHole(t){const e=this.holes;let n=e[Math.floor(Math.random()*e.length)];if(e.length>1)for(let i=0;i<4&&n===t;i++)n=e[Math.floor(Math.random()*e.length)];this.inHoleTimer=.25,this.pendingExitHole=n,this.mesh.visible=!1,this.body.velocity.x=0,this.body.velocity.z=0}performHoleExit(t){const e=t.inward.clone().setY(0).normalize(),i=t.position.clone().addScaledVector(e,.6);this.body.position.set(i.x,.36,i.z),this.mesh.visible=!0;const o=75*(Math.random()*2-1)*Math.PI/180,a=Math.cos(o),c=Math.sin(o),l=new R(e.x*a+e.z*c,0,e.z*a-e.x*c).normalize(),h=this.speed*1.5;this.body.velocity.x=l.x*h,this.body.velocity.z=l.z*h,this.target=i.clone().addScaledVector(l,2+Math.random()),this.pathTimer=1,this.holeIgnoreTimer=2}kill(){this.alive=!1,this.mesh.visible=!1,this.world.removeBody(this.body)}}let Ea=null;function qM(){if(!Ea){const r=new xc;Ea=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/mouse-exported-CiP-23e1.fbx",import.meta.url).toString();r.load(n,i=>{const s=new Te().setFromObject(i),o=new R;s.getSize(o);const l=.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return Ea}let ba=null;function jM(){return ba||(ba=new Promise(r=>{const t=new URL("/cat-mouse-hunter/assets/mouse-DPwdywtM.png",import.meta.url).toString();new Es().load(t,n=>{try{n.colorSpace=de??yn}catch{}r(n)},void 0,()=>r(null))})),ba}const YM=/^[og]\s*(.+)?/,KM=/^mtllib /,ZM=/^usemtl /,$M=/^usemap /,zh=/\s+/,Oh=new R,Aa=new R,kh=new R,Vh=new R,rn=new R,qr=new Nt;function JM(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Oh.fromArray(i,t),Aa.fromArray(i,e),kh.fromArray(i,n),rn.subVectors(kh,Aa),Vh.subVectors(Oh,Aa),rn.cross(Vh),rn.normalize(),s.push(rn.x,rn.y,rn.z),s.push(rn.x,rn.y,rn.z),s.push(rn.x,rn.y,rn.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,o,a,c,l){const h=this.vertices.length;let d=this.parseVertexIndex(t,h),u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),a!==void 0&&a!==""){const g=this.normals.length;d=this.parseNormalIndex(a,g),u=this.parseNormalIndex(c,g),f=this.parseNormalIndex(l,g),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==""){const g=this.uvs.length;d=this.parseUVIndex(i,g),u=this.parseUVIndex(s,g),f=this.parseUVIndex(o,g),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class QM extends ui{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,o=new Pu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new JM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const d=l.split(zh);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(qr.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),e.colors.push(qr.r,qr.g,qr.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=l.slice(1).trim().split(zh),f=[];for(let x=0,p=u.length;x<p;x++){const m=u[x];if(m.length>0){const _=m.split("/");f.push(_)}}const g=f[0];for(let x=1,p=f.length-1;x<p;x++){const m=f[x],_=f[x+1];e.addFace(g[0],m[0],_[0],g[1],m[1],_[1],g[2],m[2],_[2])}}else if(h==="l"){const d=l.substring(1).trim().split(" ");let u=[];const f=[];if(l.indexOf("/")===-1)u=d;else for(let g=0,x=d.length;g<x;g++){const p=d[g].split("/");p[0]!==""&&u.push(p[0]),p[1]!==""&&f.push(p[1])}e.addLineGeometry(u,f)}else if(h==="p"){const u=l.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((i=YM.exec(l))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);e.startObject(d)}else if(ZM.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(KM.test(l))e.materialLibraries.push(l.substring(7).trim());else if($M.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const u=i[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new Pn;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const l=e.objects[a],h=l.geometry,d=l.materials,u=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const x=new Fe;x.setAttribute("position",new ae(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new ae(h.normals,3)),h.colors.length>0&&(g=!0,x.setAttribute("color",new ae(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new ae(h.uvs,2));const p=[];for(let _=0,v=d.length;_<v;_++){const y=d[_],P=y.name+"_"+y.smooth+"_"+g;let S=e.materials[P];if(this.materials!==null){if(S=this.materials.create(y.name),u&&S&&!(S instanceof Gs)){const T=new Gs;un.prototype.copy.call(T,S),T.color.copy(S.color),S=T}else if(f&&S&&!(S instanceof Os)){const T=new Os({size:10,sizeAttenuation:!1});un.prototype.copy.call(T,S),T.color.copy(S.color),T.map=S.map,S=T}}S===void 0&&(u?S=new Gs:f?S=new Os({size:1,sizeAttenuation:!1}):S=new Kr,S.name=y.name,S.flatShading=!y.smooth,S.vertexColors=g,e.materials[P]=S),p.push(S)}let m;if(p.length>1){for(let _=0,v=d.length;_<v;_++){const y=d[_];x.addGroup(y.groupStart,y.groupCount,_)}u?m=new sh(x,p):f?m=new la(x,p):m=new ue(x,p)}else u?m=new sh(x,p[0]):f?m=new la(x,p[0]):m=new ue(x,p[0]);m.name=l.name,s.add(m)}else if(e.vertices.length>0){const a=new Os({size:1,sizeAttenuation:!1}),c=new Fe;c.setAttribute("position",new ae(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new ae(e.colors,3)),a.vertexColors=!0);const l=new la(c,a);s.add(l)}return s}}const Ta=new Map,Ra=new Map;function tw(r){const t=r;if(!Ta.has(t)){const e=new xc,n=new URL(r,import.meta.url).toString(),i=new Promise((s,o)=>{e.load(n,a=>{s(a)},void 0,a=>o(a))});Ta.set(t,i)}return Ta.get(t)}function ew(r){const t=r;if(!Ra.has(t)){const e=new QM,n=new URL(r,import.meta.url).toString(),i=new Promise((s,o)=>{e.load(n,a=>s(a),void 0,a=>o(a))});Ra.set(t,i)}return Ra.get(t)}function nw(r,t){const n=r.toLowerCase().endsWith(".obj")?ew(r):tw(r);return t?Promise.all([n,iw(t).catch(()=>null)]).then(([i,s])=>(s&&i.traverse(o=>{o&&o.isMesh&&o.material&&"map"in o.material&&(o.material.map=s,"needsUpdate"in o.material&&(o.material.needsUpdate=!0))}),i)):n}function Ca(r,t,e,n,i){const s=e.min,o=e.max,a=[new R(s.x,0,s.z),new R(o.x,0,s.z),new R(o.x,0,o.z),new R(s.x,0,o.z)],c=[[a[0],a[1]],[a[1],a[2]],[a[2],a[3]],[a[3],a[0]]],l=new R((s.x+o.x)/2,0,(s.z+o.z)/2),h=i.doorHalf??1.2,d=i.doorMargin??.5,u=.001,f=Math.floor(Math.random()*4);nw(i.modelUrl,i.textureUrl).then(g=>{for(let x=0;x<4;x++){const[p,m]=c[(f+x)%4],_=new R().subVectors(m,p),v=_.length();if(v<.8)continue;const y=_.clone().normalize(),P=new R(_.z,0,-_.x).normalize(),S=p.clone().addScaledVector(y,v/2),T=new R().subVectors(l,S).setY(0).normalize(),z=P.dot(T)>0?P:P.clone().multiplyScalar(-1),b=Math.abs(p.z-o.z)<u&&Math.abs(m.z-o.z)<u,E=Math.abs(p.z-s.z)<u&&Math.abs(m.z-s.z)<u,B=Math.abs(p.x-o.x)<u&&Math.abs(m.x-o.x)<u,k=Math.abs(p.x-s.x)<u&&Math.abs(m.x-s.x)<u,N=[];for(const D of n){if(b&&Math.abs(D.z-o.z)<u){const U=(D.x-p.x)/(m.x-p.x);N.push([Math.max(0,U-(h+d)/v),Math.min(1,U+(h+d)/v)])}if(E&&Math.abs(D.z-s.z)<u){const U=(D.x-p.x)/(m.x-p.x);N.push([Math.max(0,U-(h+d)/v),Math.min(1,U+(h+d)/v)])}if(B&&Math.abs(D.x-o.x)<u){const U=(D.z-p.z)/(m.z-p.z);N.push([Math.max(0,U-(h+d)/v),Math.min(1,U+(h+d)/v)])}if(k&&Math.abs(D.x-s.x)<u){const U=(D.z-p.z)/(m.z-p.z);N.push([Math.max(0,U-(h+d)/v),Math.min(1,U+(h+d)/v)])}}const L=D=>N.every(([U,Z])=>!(D>=U&&D<=Z));for(let D=0;D<8;D++){const U=.15+Math.random()*.7;if(!L(U))continue;const Z=p.clone().addScaledVector(y,U*v),C=i.inwardOffset??.08;Z.add(z.clone().multiplyScalar(C));const F=g.clone(!0);if(i.targetHeight&&i.targetHeight>0){const ft=new Te().setFromObject(F),Ct=new R;ft.getSize(Ct);const At=Ct.y>0?i.targetHeight/Ct.y:1;F.scale.setScalar(At)}if(typeof i.scale=="number")F.scale.multiplyScalar(i.scale);else if(i.scale&&typeof i.scale=="object"){const ft=i.scale;F.scale.set(ft.x,ft.y,ft.z)}const H=i.castShadow??!0,J=i.receiveShadow??!0,tt=typeof i.textureBrightness=="number"?i.textureBrightness:1;F.traverse(ft=>{if(ft&&ft.isMesh&&(ft.castShadow=H,ft.receiveShadow=J,tt!==1&&ft.material)){const Ct=Array.isArray(ft.material)?ft.material:[ft.material];for(const At of Ct)At&&"color"in At&&At.color&&typeof At.color.multiplyScalar=="function"&&(At.color.multiplyScalar(tt),"needsUpdate"in At&&(At.needsUpdate=!0))}});const rt=new Te().setFromObject(F).min.y;F.position.copy(Z),F.position.y-=rt;const ht=Math.atan2(z.x,z.z)+xe.degToRad(i.yawOffset??0);F.rotation.y=ht,t.add(F);let wt=null;if(i.collidable!==!1){F.updateMatrixWorld(!0);const ft=new Te().setFromObject(F),Ct=new R;ft.getSize(Ct);const At=ft.getCenter(new R),It=i.shrink??.9,qt=Math.max(.05,Ct.x*It/2),q=Math.max(.3,Ct.y*It/2),Y=Math.max(.05,Ct.z*It/2),it=new Rn(new w(qt,q,Y));wt=new yt({mass:0,shape:it}),wt.position.set(At.x,At.y,At.z),wt.quaternion.setFromEuler(0,ht,0),i.tag&&(wt[`is${i.tag[0].toUpperCase()}${i.tag.slice(1)}`]=!0),r.addBody(wt)}i.onPlaced&&i.onPlaced(F,wt);return}}i.onPlaced&&i.onPlaced(new ce,null)})}const Pa=new Map;function iw(r){const t=r;if(!Pa.has(t)){const e=new URL(r,import.meta.url).toString(),n=new Promise((i,s)=>{new Es().load(e,a=>{try{a.colorSpace=de??yn}catch{}i(a)},void 0,a=>s(a))});Pa.set(t,n)}return Pa.get(t)}class sw{constructor(t,e,n=Math.random()*1e9){xt(this,"roomBoxes",[]);xt(this,"roomLabels",[]);xt(this,"roomAdjacency",[]);xt(this,"worldBounds");xt(this,"floorBody");xt(this,"meshes",[]);xt(this,"bodies",[]);xt(this,"spawnPoints",[]);xt(this,"dynamicPairs",[]);xt(this,"pausedBodies",new Set);xt(this,"mouseHoles",[]);this.world=t,this.scene=e,this.rngSeed=n,this.worldBounds=new Te(new R(-20,0,-20),new R(20,5,20));const i=new F_;this.floorBody=new yt({mass:0}),this.floorBody.addShape(i),this.floorBody.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(this.floorBody);const s=new ue(new vo(100,100),new Qe({color:11121823}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),this.meshes.push(s)}update(t,e){const o=Math.max(0,10);for(const a of this.dynamicPairs){if(e){const h=a.body.position.x-e.x,d=a.body.position.z-e.z,u=Math.hypot(h,d),f=this.pausedBodies.has(a.body);!f&&u>14?(a.body.velocity.set(0,0,0),a.body.angularVelocity.set(0,0,0),a.body.sleep&&a.body.sleep(),this.pausedBodies.add(a.body)):f&&u<o&&(a.body.wakeUp&&a.body.wakeUp(),this.pausedBodies.delete(a.body))}const c=a.body.position,l=a.body.quaternion;a.mesh.position.set(c.x,c.y,c.z),a.mesh.quaternion&&a.mesh.quaternion.set(l.x,l.y,l.z,l.w)}}dispose(){for(const t of this.bodies)this.world.removeBody(t);for(const t of this.meshes)this.scene.remove(t);this.bodies.length=0,this.meshes.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0}generate(t){for(let Y=this.meshes.length-1;Y>=1;Y--)this.scene.remove(this.meshes[Y]),this.meshes.splice(Y,1);for(const Y of this.bodies)this.world.removeBody(Y);this.bodies.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0,this.mouseHoles.length=0;const e=Math.max(8,t.houseHalfSize||10),n=new R(-e,0,-e),i=new R(e,3,e),s=new Te(n.clone(),i.clone()),o=[];let a=[s];const l=1.2*2+.6,h=(i.x-n.x)*(i.z-n.z),d=typeof t.roomDensity=="number"&&t.roomDensity>0?t.roomDensity:Math.max(.002,t.roomCount/Math.max(1,h)),u=Math.max(1,Math.min(48,Math.floor(h*d)));let f=0;for(;a.length+o.length<u&&f++<500;){let Y=-1,it=-1;for(let A=0;A<a.length;A++){const M=a[A],V=new R().subVectors(M.max,M.min),X=V.x*V.z;X>it&&(it=X,Y=A)}if(Y<0)break;const W=a.splice(Y,1)[0],st=new R().subVectors(W.max,W.min);let vt=st.x>st.z,at=!1;for(let A=0;A<8&&!at;A++)if(A<4?vt:!vt){const V=W.min.x+l,X=W.max.x-l;if(X-V<=.5)continue;const et=ye(V,X),nt=new Te(W.min.clone(),new R(et,W.max.y,W.max.z)),lt=new Te(new R(et,W.min.y,W.min.z),W.max.clone()),ot=new R().subVectors(nt.max,nt.min),gt=new R().subVectors(lt.max,lt.min);ot.x>=l&&ot.z>=l&&gt.x>=l&&gt.z>=l&&(a.push(nt,lt),at=!0)}else{const V=W.min.z+l,X=W.max.z-l;if(X-V<=.5)continue;const et=ye(V,X),nt=new Te(W.min.clone(),new R(W.max.x,W.max.y,et)),lt=new Te(new R(W.min.x,W.min.y,et),W.max.clone()),ot=new R().subVectors(nt.max,nt.min),gt=new R().subVectors(lt.max,lt.min);ot.x>=l&&ot.z>=l&&gt.x>=l&&gt.z>=l&&(a.push(nt,lt),at=!0)}at||o.push(W)}o.push(...a),this.roomBoxes=o;const g=7.5,x=.35,p=new Qe({color:15788758,roughness:.9,metalness:0}),m=new Qe({color:16777215,roughness:.7,metalness:0}),_=(Y,it,W)=>{const st=new R().subVectors(it,Y),vt=st.length(),at=Math.atan2(st.x,st.z),A=new Xe(x,W,vt),M=new ue(A,p);M.position.copy(new R().addVectors(Y,it).multiplyScalar(.5)),M.position.y=W/2,M.rotation.y=at,M.castShadow=!0,M.receiveShadow=!0,this.scene.add(M),this.meshes.push(M);const V=new Rn(new w(x/2,W/2,vt/2)),X=new yt({mass:0,shape:V});X.position.set(M.position.x,M.position.y,M.position.z),X.quaternion.setFromEuler(0,at,0),this.world.addBody(X),this.bodies.push(X)},v=(Y,it,W)=>{const st=new R().subVectors(it,Y),vt=st.length();if(vt<.05)return;const at=Math.atan2(st.x,st.z),A=new R().addVectors(Y,it).multiplyScalar(.5),M=new R(st.z,0,-st.x).normalize(),V=.24,X=.06,et=x/2+X/2,nt=new Xe(X,V,Math.max(.01,vt-.02)),lt=new ue(nt,m);lt.position.copy(A),lt.position.y=V/2,lt.position.add(M.clone().multiplyScalar(et)),lt.rotation.y=at,lt.castShadow=!1,lt.receiveShadow=!0;const ot=lt.clone();ot.position.copy(A),ot.position.y=V/2,ot.position.add(M.clone().multiplyScalar(-et)),this.scene.add(lt),this.meshes.push(lt),this.scene.add(ot),this.meshes.push(ot)},y=(Y,it)=>{const W=new R().subVectors(it,Y),st=W.length();if(st<.05)return;const vt=Math.atan2(W.x,W.z),at=new R().addVectors(Y,it).multiplyScalar(.5),A=new R(W.z,0,-W.x).normalize(),M=.24,V=.06,X=x/2+V/2,et=new Xe(V,M,Math.max(.01,st-.02)),nt=new R((n.x+i.x)/2,0,(n.z+i.z)/2),lt=new R().subVectors(nt,at).setY(0).normalize(),gt=A.dot(lt)>0?A:A.clone().multiplyScalar(-1),_t=new ue(et,m);_t.position.copy(at),_t.position.y=M/2,_t.position.add(gt.clone().multiplyScalar(X)),_t.rotation.y=vt,_t.castShadow=!1,_t.receiveShadow=!0,this.scene.add(_t),this.meshes.push(_t)},P=(Y,it)=>{const W=Y.min,st=Y.max,vt=[new R(W.x,0,W.z),new R(st.x,0,W.z),new R(st.x,0,st.z),new R(W.x,0,st.z)],at=[[vt[0],vt[1]],[vt[1],vt[2]],[vt[2],vt[3]],[vt[3],vt[0]]];for(const[A,M]of at){const V=Math.abs(A.z-i.z)<.001&&Math.abs(M.z-i.z)<.001,X=Math.abs(A.z-n.z)<.001&&Math.abs(M.z-n.z)<.001,et=Math.abs(A.x-i.x)<.001&&Math.abs(M.x-i.x)<.001,nt=Math.abs(A.x-n.x)<.001&&Math.abs(M.x-n.x)<.001,lt=!(V||X||et||nt),ot=new R().subVectors(M,A),gt=ot.length(),_t=ot.clone().normalize(),Ft=.3,ct=1.2,Jt=[];for(const bt of it){const Mt=new R().subVectors(bt,A).dot(_t)/gt;if(Mt<=.05||Mt>=.95)continue;const Rt=A.clone().addScaledVector(_t,Mt*gt),kt=bt.clone().sub(Rt);Math.abs(kt.x)+Math.abs(kt.z)<Ft&&Jt.push({t:Mt,center:Rt})}Jt.sort((bt,Tt)=>bt.t-Tt.t);const zt=[];for(const bt of Jt)(zt.length===0||Math.abs(bt.t-zt[zt.length-1].t)*gt>=ct*2+.6)&&zt.push(bt);if(zt.length>0){const bt=Rt=>new R(xe.clamp(Rt.x,Math.min(A.x,M.x),Math.max(A.x,M.x)),Rt.y,xe.clamp(Rt.z,Math.min(A.z,M.z),Math.max(A.z,M.z))),Tt=(Rt,kt)=>{Rt.distanceToSquared(kt)<1e-6||(_(Rt,kt,g),lt?v(Rt,kt):y(Rt,kt))};let Mt=A.clone();for(let Rt=0;Rt<zt.length;Rt++){const kt=zt[Rt].center,le=kt.clone().addScaledVector(_t,-ct),Gt=kt.clone().addScaledVector(_t,ct),ut=bt(le);Tt(Mt,ut);const O=ct*2,pt=g/3,dt=g-pt,Ut=Math.atan2(_t.x,_t.z),Dt=new Xe(x,pt,O),Ot=new ue(Dt,p);Ot.position.copy(kt),Ot.position.y=dt+pt/2,Ot.rotation.y=Ut,Ot.castShadow=!0,Ot.receiveShadow=!0,this.scene.add(Ot),this.meshes.push(Ot);const Qt=new Rn(new w(x/2,pt/2,O/2)),ie=new yt({mass:0,shape:Qt});ie.position.set(Ot.position.x,Ot.position.y,Ot.position.z),ie.quaternion.setFromEuler(0,Ut,0),this.world.addBody(ie),this.bodies.push(ie),Mt=bt(Gt)}Tt(Mt,M.clone())}else _(A,M,g),lt?v(A,M):y(A,M)}},S=o.map(()=>[]),T=.001;for(let Y=0;Y<o.length;Y++)for(let it=Y+1;it<o.length;it++){const W=o[Y],st=o[it];if(Math.min(W.max.z,st.max.z)-Math.max(W.min.z,st.min.z)>0){const V=Math.max(W.min.z,st.min.z)+1.6,X=Math.min(W.max.z,st.max.z)-1.6;if(X>V){const et=nt=>{const lt=ye(V,X),ot=new R(nt,0,lt);S[Y].push(ot),S[it].push(ot)};if(Math.abs(W.max.x-st.min.x)<T){et(W.max.x);continue}if(Math.abs(W.min.x-st.max.x)<T){et(W.min.x);continue}}}if(Math.min(W.max.x,st.max.x)-Math.max(W.min.x,st.min.x)>0){const V=Math.max(W.min.x,st.min.x)+1.6,X=Math.min(W.max.x,st.max.x)-1.6;if(X>V){const et=nt=>{const lt=ye(V,X),ot=new R(lt,0,nt);S[Y].push(ot),S[it].push(ot)};if(Math.abs(W.max.z-st.min.z)<T){et(W.max.z);continue}if(Math.abs(W.min.z-st.max.z)<T){et(W.min.z);continue}}}}const z=o.findIndex(Y=>Math.abs(Y.max.z-i.z)<T);if(z>=0){const Y=o[z],W=1.2+.4,st=Y.min.x+W,vt=Y.max.x-W,at=st<vt?ye(st,vt):(Y.min.x+Y.max.x)/2;S[z].push(new R(at,0,Y.max.z))}this.classifyRooms(o,S,n,i);for(let Y=0;Y<o.length;Y++)P(o[Y],S[Y]);if(this.spawnPoints.length>0){const vt=at=>{let A=-1;for(let X=0;X<o.length;X++){const et=o[X];if(at.x>=et.min.x&&at.x<=et.max.x&&at.z>=et.min.z&&at.z<=et.max.z){A=X;break}}if(A<0)return!0;const M=o[A],V=S[A];for(const X of V)if(Math.abs(X.z-M.max.z)<.001&&at.z<=M.max.z&&at.z>=M.max.z-.8&&at.x>=X.x-1.6&&at.x<=X.x+1.6||Math.abs(X.z-M.min.z)<.001&&at.z>=M.min.z&&at.z<=M.min.z+.8&&at.x>=X.x-1.6&&at.x<=X.x+1.6||Math.abs(X.x-M.max.x)<.001&&at.x<=M.max.x&&at.x>=M.max.x-.8&&at.z>=X.z-1.6&&at.z<=X.z+1.6||Math.abs(X.x-M.min.x)<.001&&at.x>=M.min.x&&at.x<=M.min.x+.8&&at.z>=X.z-1.6&&at.z<=X.z+1.6)return!1;return!0};this.spawnPoints=this.spawnPoints.filter(vt)}const b=new Qe({color:0,roughness:1,metalness:0}),E=(Y,it,W)=>{const st=new R().subVectors(W,it);if(st.length()<.8)return;const at=.2+Math.random()*.6,A=it.clone().addScaledVector(st,at),M=Math.atan2(st.x,st.z),V=new R().addVectors(it,W).multiplyScalar(.5),X=new R(st.z,0,-st.x).normalize(),et=new R((Y.min.x+Y.max.x)/2,0,(Y.min.z+Y.max.z)/2),nt=new R().subVectors(et,V).setY(0).normalize(),lt=X.dot(nt)>0?X:X.clone().multiplyScalar(-1),ot=.001,gt=o.indexOf(Y);if(gt>=0){const Dt=S[gt],Ot=1.2,Qt=.4;let ie=!1;for(const se of Dt){if(Math.abs(A.z-Y.max.z)<ot&&Math.abs(se.z-Y.max.z)<ot&&A.x>=se.x-(Ot+Qt)&&A.x<=se.x+(Ot+Qt)){ie=!0;break}if(Math.abs(A.z-Y.min.z)<ot&&Math.abs(se.z-Y.min.z)<ot&&A.x>=se.x-(Ot+Qt)&&A.x<=se.x+(Ot+Qt)){ie=!0;break}if(Math.abs(A.x-Y.max.x)<ot&&Math.abs(se.x-Y.max.x)<ot&&A.z>=se.z-(Ot+Qt)&&A.z<=se.z+(Ot+Qt)){ie=!0;break}if(Math.abs(A.x-Y.min.x)<ot&&Math.abs(se.x-Y.min.x)<ot&&A.z>=se.z-(Ot+Qt)&&A.z<=se.z+(Ot+Qt)){ie=!0;break}}if(ie)return}const _t=.02,Ft=.36,ct=.3,Jt=Ft/2,zt=.85,bt=new Pn,Tt=new Xe(_t,ct,Ft),Mt=new ue(Tt,b);Mt.position.set(0,ct/2,0),bt.add(Mt);const Rt=new co(Jt,Jt,_t,24),kt=new ue(Rt,b);kt.rotation.z=Math.PI/2;const le=Jt*zt;kt.position.set(0,ct+Jt-le,0),bt.add(kt),bt.position.copy(A),bt.position.y=0;const Gt=x/2+_t/2+.002;bt.position.add(lt.clone().multiplyScalar(Gt)),bt.rotation.y=M,bt.position.y+=.001,this.scene.add(bt),this.meshes.push(bt),this.mouseHoles.push({position:bt.position.clone(),inward:lt.clone(),room:Y});const ut=.06,O=.24,pt=new Xe(ut+.005,O,Ft*.9),dt=new ue(pt,b);dt.position.copy(A),dt.position.y=O/2+.001;const Ut=x/2+(ut+.005)/2+.001;dt.position.add(lt.clone().multiplyScalar(Ut)),dt.rotation.y=M,this.scene.add(dt),this.meshes.push(dt)};for(let Y=0;Y<o.length;Y++){const it=o[Y],W=it.min,st=it.max,vt=[new R(W.x,0,W.z),new R(st.x,0,W.z),new R(st.x,0,st.z),new R(W.x,0,st.z)],at=[[vt[0],vt[1]],[vt[1],vt[2]],[vt[2],vt[3]],[vt[3],vt[0]]];for(const[A,M]of at){const V=Math.abs(A.z-i.z)<.001&&Math.abs(M.z-i.z)<.001,X=Math.abs(A.z-n.z)<.001&&Math.abs(M.z-n.z)<.001,et=Math.abs(A.x-i.x)<.001&&Math.abs(M.x-i.x)<.001,nt=Math.abs(A.x-n.x)<.001&&Math.abs(M.x-n.x)<.001;V||X||et||nt||Math.random()<.25&&E(it,A,M)}}const B=3;if(this.mouseHoles.length<B){const Y=[];for(let it=0;it<o.length;it++){const W=o[it],st=W.min,vt=W.max,at=[new R(st.x,0,st.z),new R(vt.x,0,st.z),new R(vt.x,0,vt.z),new R(st.x,0,vt.z)],A=[[at[0],at[1]],[at[1],at[2]],[at[2],at[3]],[at[3],at[0]]];for(const[M,V]of A){const X=Math.abs(M.z-i.z)<.001&&Math.abs(V.z-i.z)<.001,et=Math.abs(M.z-n.z)<.001&&Math.abs(V.z-n.z)<.001,nt=Math.abs(M.x-i.x)<.001&&Math.abs(V.x-i.x)<.001,lt=Math.abs(M.x-n.x)<.001&&Math.abs(V.x-n.x)<.001;X||et||nt||lt||Y.push({room:W,a:M,b:V})}}for(let it=0;it<Y.length&&this.mouseHoles.length<B;it++){const W=Math.floor(Math.random()*Y.length),st=Y[W];E(st.room,st.a,st.b)}}const k=.2,N=10,L=new R(n.x+x,0,i.z+k),D=new R(i.x-x,0,i.z+k+N),U=1.2,Z=new Qe({color:9075291}),C=(Y,it)=>{const W=new R().subVectors(it,Y),st=W.length(),vt=Math.atan2(W.x,W.z),at=new Xe(.15,U,st),A=new ue(at,Z);A.position.copy(new R().addVectors(Y,it).multiplyScalar(.5)),A.position.y=U/2,A.rotation.y=vt,this.scene.add(A),this.meshes.push(A);const M=new Rn(new w(.075,U/2,st/2)),V=new yt({mass:0,shape:M});V.position.set(A.position.x,A.position.y,A.position.z),V.quaternion.setFromEuler(0,vt,0),this.world.addBody(V),this.bodies.push(V)};C(new R(D.x,0,L.z),new R(D.x,0,D.z)),C(new R(D.x,0,D.z),new R(L.x,0,D.z)),C(new R(L.x,0,D.z),new R(L.x,0,L.z));const F=new URL("/cat-mouse-hunter/assets/wood-floor-EyqHkZ5a.jpg",import.meta.url).toString(),H=new Es().load(F);H.wrapS=jn,H.wrapT=jn,H.colorSpace=de,H.anisotropy=8;const J=2.5,tt=(Y,it)=>{const W=H.clone();return W.needsUpdate=!0,W.wrapS=jn,W.wrapT=jn,W.repeat.set(Math.max(1,Y/J),Math.max(1,it/J)),new Qe({map:W,roughness:.85,metalness:0})},j=new Qe({color:15132390});for(const Y of o){const it=new R().subVectors(Y.max,Y.min),W=new ue(new Xe(it.x,.1,it.z),tt(it.x,it.z));W.position.set((Y.min.x+Y.max.x)/2,.05,(Y.min.z+Y.max.z)/2),W.receiveShadow=!0,this.scene.add(W),this.meshes.push(W);const st=new Rn(new w(it.x/2,.05,it.z/2)),vt=new yt({mass:0,shape:st});vt.position.set(W.position.x,W.position.y,W.position.z),this.world.addBody(vt),this.bodies.push(vt);const at=new ue(new Xe(it.x,.1,it.z),j);at.position.set((Y.min.x+Y.max.x)/2,g-.05,(Y.min.z+Y.max.z)/2),at.receiveShadow=!1,at.castShadow=!1,this.scene.add(at),this.meshes.push(at);const A=new yt({mass:0,shape:new Rn(new w(it.x/2,.05,it.z/2))});A.position.set(at.position.x,at.position.y,at.position.z),this.world.addBody(A),this.bodies.push(A);for(let M=0;M<5;M++){const V=ye(Y.min.x+.5,Y.max.x-.5),X=ye(Y.min.z+.5,Y.max.z-.5);this.spawnPoints.push(new R(V,0,X))}}const rt=new R().subVectors(D,L),ht=new ue(new Xe(rt.x,.1,rt.z),new Qe({color:11061129}));ht.position.set((L.x+D.x)/2,.05,(L.z+D.z)/2),ht.receiveShadow=!0,this.scene.add(ht),this.meshes.push(ht);const wt=new yt({mass:0,shape:new Rn(new w(rt.x/2,.05,rt.z/2))});wt.position.set(ht.position.x,ht.position.y,ht.position.z),this.world.addBody(wt),this.bodies.push(wt),new Qe({color:9132587}),new Qe({color:5597999}),new Qe({color:3821675}),new Qe({color:8026746});for(let Y=0;Y<o.length;Y++)this.roomLabels[Y]==="Bathroom"&&(Ca(this.world,this.scene,o[Y],S[Y],{modelUrl:"../models/toilet/toilet.fbx",targetHeight:2,inwardOffset:1.08,yawOffset:-90,shrink:.9,tag:"toilet",onPlaced:(it,W)=>{this.meshes.push(it),W&&this.bodies.push(W)}}),Ca(this.world,this.scene,o[Y],S[Y],{modelUrl:"../models/sink-bathroom/sink-bathroom.obj",targetHeight:3,inwardOffset:.9,yawOffset:0,shrink:.9,tag:"sink",onPlaced:(it,W)=>{this.meshes.push(it),W&&this.bodies.push(W)}}));const ft=this.roomLabels.map((Y,it)=>({label:Y,i:it})).filter(({label:Y})=>Y==="Living Room"||Y==="Family Room").map(({i:Y})=>Y);for(const Y of ft)Ca(this.world,this.scene,o[Y],S[Y],{modelUrl:"../models/couch/couch.fbx",textureUrl:"../models/couch/couch.jpg",targetHeight:2,inwardOffset:.12,doorHalf:1.2,doorMargin:.6,shrink:.9,tag:"couch",onPlaced:(it,W)=>{this.meshes.push(it),W&&this.bodies.push(W)}});for(let Y=0;Y<o.length;Y++){const it=o[Y];(it.min.x+it.max.x)/2,(it.min.z+it.max.z)/2}const Ct={"Living Room":1,"Family Room":1,"Master Bedroom":.9,Bedroom:.8,"Spare Room":.5,"Dining Room":.2,Hallway:0,Kitchen:0,Bathroom:0,Office:0,Laundry:0,Closet:0},At=[];for(let Y=0;Y<o.length;Y++){const it=this.roomLabels[Y]||"",W=Ct[it]??0;if(W<=0)continue;const st=new R().subVectors(o[Y].max,o[Y].min),vt=xe.clamp(st.x*st.z/16,.6,1.6);At.push({room:o[Y],weight:W*vt})}const It=[];let qt=0;for(const Y of At)qt+=Y.weight,It.push(qt);const q=()=>{if(At.length===0||qt<=0)return null;const Y=Math.random()*qt,it=It.findIndex(W=>Y<W);return At[Math.max(0,it)].room};for(let Y=0;Y<t.clutterCount;Y++){const it=q();if(!it)break;const W=.6,st=ye(it.min.x+W,it.max.x-W),vt=ye(it.min.z+W,it.max.z-W),at=.15,A=ye(.12,.6)*.25,M=ye(2,3),V=new Qe({color:16777215*Math.random()});if(Math.random()<.5){const et=ye(.08,.18)*M,nt=new ue(new hc(et,18,14),V);nt.position.set(st,at+et+.02,vt),nt.castShadow=!0,nt.receiveShadow=!0,this.scene.add(nt),this.meshes.push(nt);const lt=new yt({mass:A,shape:new Eo(et)});lt.angularDamping=.25,lt.linearDamping=.02,lt.position.set(nt.position.x,nt.position.y,nt.position.z),this.world.addBody(lt),this.bodies.push(lt),this.dynamicPairs.push({mesh:nt,body:lt})}else{const X=ye(.06,.12),et=ye(.14,.3),nt=X*M,lt=et*M,ot=new ue(new co(nt,nt,lt,16),V);ot.position.set(st,at+lt/2+.02,vt),ot.castShadow=!0,ot.receiveShadow=!0,this.scene.add(ot),this.meshes.push(ot);const gt=new N_(nt,nt,lt,16),_t=new yt({mass:A}),Ft=new Ee;Ft.setFromEuler(0,0,Math.PI/2),_t.addShape(gt,new w(0,0,0),Ft),_t.angularDamping=.25,_t.linearDamping=.02,_t.position.set(ot.position.x,ot.position.y,ot.position.z),this.world.addBody(_t),this.bodies.push(_t),this.dynamicPairs.push({mesh:ot,body:_t})}}}classifyRooms(t,e,n,i){const o=t.map((C,F)=>{const H=new R().subVectors(C.max,C.min),J=Math.max(H.x,H.z),tt=Math.max(.001,Math.min(H.x,H.z)),j=Math.abs(C.min.x-n.x)<.001||Math.abs(C.max.x-i.x)<.001||Math.abs(C.min.z-n.z)<.001||Math.abs(C.max.z-i.z)<.001;return{idx:F,w:H.x,d:H.z,area:H.x*H.z,aspect:J/tt,boundary:j,touchesNorth:Math.abs(C.max.z-i.z)<.001,touchesSouth:Math.abs(C.min.z-n.z)<.001,touchesEast:Math.abs(C.max.x-i.x)<.001,touchesWest:Math.abs(C.min.x-n.x)<.001,neighbors:[],degree:0}}),a=t.map(()=>[]);for(let C=0;C<t.length;C++)for(let F=C+1;F<t.length;F++){const H=t[C],J=t[F],tt=Math.min(H.max.z,J.max.z)-Math.max(H.min.z,J.min.z),j=Math.min(H.max.x,J.max.x)-Math.max(H.min.x,J.min.x),rt=tt>0&&(Math.abs(H.max.x-J.min.x)<.001||Math.abs(H.min.x-J.max.x)<.001),ht=j>0&&(Math.abs(H.max.z-J.min.z)<.001||Math.abs(H.min.z-J.max.z)<.001);(rt||ht)&&(a[C].push(F),a[F].push(C))}for(let C=0;C<o.length;C++)o[C].neighbors=a[C],o[C].degree=a[C].length;const c=[...o].sort((C,F)=>F.area-C.area),l=C=>C.aspect>=3&&Math.min(C.w,C.d)<=2.2,h=C=>C.area<9,d=C=>C.area>=9&&C.area<=20,u=t.map(()=>"Unlabeled"),f=new Set;for(const C of o)l(C)&&C.area>=6&&C.area<=40&&C.degree>=2&&(u[C.idx]="Hallway",f.add(C.idx));let g=-1;for(const C of c)if(!f.has(C.idx)&&C.aspect<=2.5){g=C.idx,u[C.idx]="Living Room",f.add(C.idx);break}if(g>=0){const F=o[g].neighbors.map(H=>o[H]).filter(H=>!f.has(H.idx)&&H.aspect<=2.5&&H.area>=10&&H.area<=35).sort((H,J)=>J.area-H.area)[0];F&&(u[F.idx]="Kitchen",f.add(F.idx))}const x=u.indexOf("Kitchen"),p=x>=0?x:g;if(p>=0){const C=o[p].neighbors.map(F=>o[F]).filter(F=>!f.has(F.idx)&&F.area>=8&&F.area<=25&&F.aspect<=2.8).sort((F,H)=>F.area-H.area);C.length>0&&(u[C[0].idx]="Dining Room",f.add(C[0].idx))}const m=u.map((C,F)=>C==="Hallway"?F:-1).filter(C=>C>=0),_=(C,F)=>C.neighbors.some(H=>F.includes(H)),v=o.filter(C=>!f.has(C.idx)&&h(C)).sort((C,F)=>C.area-F.area);let y=!1;for(const C of v)_(C,m)&&(y||(u[C.idx]="Bathroom",f.add(C.idx),y=!0));const P=o.filter(C=>!f.has(C.idx)&&!l(C)&&C.area>=9&&C.area<=25&&C.aspect<=2.6).sort((C,F)=>F.area-C.area),S=[];for(const C of P)(m.length===0||_(C,m)||C.degree<=2)&&(u[C.idx]="Bedroom",f.add(C.idx),S.push(C.idx));if(S.length>0){const C=S.map(F=>o[F]).sort((F,H)=>H.area-F.area)[0];C&&(u[C.idx]="Master Bedroom")}const T=o.filter(C=>!f.has(C.idx)&&C.boundary&&C.touchesSouth&&C.area>=6&&C.area<=16).sort((C,F)=>C.area-F.area);if(T.length>0){const F=T.find(H=>_(H,m)||g>=0&&H.neighbors.includes(g))||T[0];u[F.idx]="Foyer",f.add(F.idx)}const z=o.filter(C=>!f.has(C.idx)&&C.boundary&&C.area>=5&&C.area<=12).sort((C,F)=>C.area-F.area);for(const C of z)if(x>=0&&C.neighbors.includes(x)||_(C,m)){u[C.idx]="Laundry",f.add(C.idx);break}const b=o.filter(C=>!f.has(C.idx)&&d(C)&&C.aspect<=2.5).sort((C,F)=>C.degree-F.degree)[0];b&&(u[b.idx]="Office",f.add(b.idx));const E=C=>u.includes(C),B=()=>u.includes("Bedroom")||u.includes("Master Bedroom"),k=()=>{if(!E("Living Room")){const C=c.find(F=>!f.has(F.idx)&&u[F.idx]!=="Hallway");C&&(u[C.idx]="Living Room",f.add(C.idx))}},N=()=>{if(!E("Kitchen")){const C=u.findIndex(H=>H==="Living Room");if(C>=0){const H=o[C].neighbors.map(J=>o[J]).filter(J=>!f.has(J.idx)&&u[J.idx]!=="Hallway").filter(J=>J.aspect<=2.6).sort((J,tt)=>Math.abs(18-J.area)-Math.abs(18-tt.area))[0];if(H){u[H.idx]="Kitchen",f.add(H.idx);return}}const F=o.filter(H=>!f.has(H.idx)&&u[H.idx]!=="Hallway"&&H.aspect<=2.6).sort((H,J)=>Math.abs(18-H.area)-Math.abs(18-J.area))[0];F&&(u[F.idx]="Kitchen",f.add(F.idx))}},L=()=>{if(!E("Bathroom")){const C=o.filter(F=>!f.has(F.idx)&&u[F.idx]!=="Hallway").sort((F,H)=>F.area-H.area)[0];C&&(u[C.idx]="Bathroom",f.add(C.idx))}},D=()=>{if(!B()){const C=o.filter(F=>!f.has(F.idx)&&!l(F)).sort((F,H)=>Math.abs(14-F.area)-Math.abs(14-H.area))[0];C&&(u[C.idx]="Bedroom",f.add(C.idx))}};k(),N(),L(),D();for(const C of o)f.has(C.idx)||(C.area<7?u[C.idx]="Closet":C.area>26?u[C.idx]="Family Room":u[C.idx]="Spare Room",f.add(C.idx));if(E("Living Room")&&E("Kitchen")&&E("Bathroom")&&B())for(const C of v)(u[C.idx]==="Closet"||u[C.idx]==="Spare Room")&&(u[C.idx]="Bathroom");const Z=u.map((C,F)=>C==="Bedroom"||C==="Master Bedroom"?F:-1).filter(C=>C>=0);if(Z.length>0){const C=Z.map(F=>o[F]).sort((F,H)=>H.area-F.area)[0];C&&(u[C.idx]="Master Bedroom")}this.roomLabels=u,this.roomAdjacency=a,this.roomBoxes=t}getRoomTypeAtPosition(t){for(let e=0;e<this.roomBoxes.length;e++){const n=this.roomBoxes[e];if(t.x>=n.min.x&&t.x<=n.max.x&&t.z>=n.min.z&&t.z<=n.max.z)return this.roomLabels[e]||"Unknown"}return"Unknown"}}class rw{constructor(t=document){xt(this,"keys",{});xt(this,"mouseDelta",{x:0,y:0});xt(this,"wheelDelta",0);xt(this,"lockPounce",!1);xt(this,"sensitivity",1);xt(this,"gpIndex",-1);xt(this,"gpDeadzone",.2);xt(this,"gpMoveX",0);xt(this,"gpMoveY",0);xt(this,"gpPrevButtons",[]);xt(this,"padRestart",!1);xt(this,"padNext",!1);xt(this,"padAccept",!1);xt(this,"suppressPadJumpLatched",!1);this.dom=t,this.bind()}bind(){this.dom.addEventListener("keydown",t=>{this.keys[t.code]=!0,["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),this.dom.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="KeyE"&&(this.lockPounce=!0)}),window.addEventListener("mousemove",t=>{this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY}),window.addEventListener("wheel",t=>{this.wheelDelta+=Math.sign(t.deltaY)},{passive:!0}),window.addEventListener("gamepadconnected",t=>{const e=t.gamepad;this.gpIndex<0&&(this.gpIndex=e.index)}),window.addEventListener("gamepaddisconnected",t=>{const e=t.gamepad;this.gpIndex===e.index&&(this.gpIndex=-1)})}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}consumeWheelDelta(){const t=this.wheelDelta;return this.wheelDelta=0,t}consumeLockPounce(){const t=this.lockPounce;return this.lockPounce=!1,t}get forward(){return(this.keys.KeyW?1:0)+(this.keys.ArrowUp?1:0)+Math.max(0,this.gpMoveY)}get backward(){return(this.keys.KeyS?1:0)+(this.keys.ArrowDown?1:0)+Math.max(0,-this.gpMoveY)}get left(){return(this.keys.KeyA?1:0)+(this.keys.ArrowLeft?1:0)+Math.max(0,-this.gpMoveX)}get right(){return(this.keys.KeyD?1:0)+(this.keys.ArrowRight?1:0)+Math.max(0,this.gpMoveX)}get jump(){const t=!!this.keys.Space,e=this.isPadButton(0)&&!this.suppressPadJumpLatched;return t||e}get run(){const t=this.getPadButtonValue(7)>.5||this.isPadButton(5);return!!this.keys.ShiftLeft||!!this.keys.ShiftRight||t}get sneak(){const t=this.getPadButtonValue(6)>.5||this.isPadButton(4);return!!this.keys.ControlLeft||!!this.keys.ControlRight||t}get restart(){return!!this.keys.KeyR||this.padRestart}get next(){return!!this.keys.KeyN||this.padNext}updateGamepad(t=0){const e=navigator.getGamepads?navigator.getGamepads():[];let n=null;if(this.gpIndex>=0&&(n=e[this.gpIndex]||null),!n){for(const m of e)if(m){n=m,this.gpIndex=m.index;break}}if(!n)return;const i=n.axes||[],s=this.gpDeadzone,o=m=>Math.abs(m)<s?0:(m-Math.sign(m)*s)/(1-s),a=o(i[0]||0),c=o(i[1]||0),l=o(i[2]||0),h=o(i[3]||0);this.gpMoveX=a,this.gpMoveY=-c;const d=25*this.sensitivity;this.mouseDelta.x+=l*d,this.mouseDelta.y+=h*d;const u=this.isPadButton(12),f=this.isPadButton(13);u&&(this.wheelDelta-=1),f&&(this.wheelDelta+=1),(this.justPressed(2)||this.justPressed(1))&&(this.lockPounce=!0),this.padRestart=this.justPressed(8),this.padNext=this.justPressed(9),this.padAccept=this.justPressed(0);const x=n.buttons&&n.buttons[0],p=!!(typeof x=="object"?x.pressed:x);this.suppressPadJumpLatched&&!p&&(this.suppressPadJumpLatched=!1),this.gpPrevButtons=(n.buttons||[]).map(m=>typeof m=="object"?m.pressed:!!m)}isPadButton(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.pressed:!!i:!1}getPadButtonValue(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return 0;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.value??(i.pressed?1:0):i?1:0:0}justPressed(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t],s=typeof i=="object"?i.pressed:!!i,o=this.gpPrevButtons[t]||!1;return s&&!o}consumePadAccept(){const t=this.padAccept;return this.padAccept=!1,t}suppressPadJumpOnce(){this.suppressPadJumpLatched=!0}}const xn={setLevel(r){const t=document.getElementById("level");t&&(t.textContent=String(r))},setCaught(r){const t=document.getElementById("caught");t&&(t.textContent=String(r))},setRequired(r){const t=document.getElementById("required");t&&(t.textContent=String(r))},setRemaining(r){const t=document.getElementById("remaining");t&&(t.textContent=String(r))},setState(r){const t=document.getElementById("state");t&&(t.textContent=r)},setFPS(r){const t=document.getElementById("fps");t&&(t.textContent=r.toFixed(0))},setRoomType(r){const t=document.getElementById("roomType");t&&(t.textContent=r)},showBanner(r){const t=document.getElementById("banner");t&&(t.innerHTML=r,t.style.display="block")},hideBanner(){const r=document.getElementById("banner");r&&(r.style.display="none")}},ow=new URL("/cat-mouse-hunter/assets/mouse-squeek-BdNs5kc5.wav",import.meta.url).toString(),aw=new URL("/cat-mouse-hunter/assets/mouse-die-BT5vEi1c.wav",import.meta.url).toString(),cw=new URL("/cat-mouse-hunter/assets/cat-trill-BzlkgHaC.wav",import.meta.url).toString(),lw=new URL("/cat-mouse-hunter/assets/cat-pur-DlHdAjg8.wav",import.meta.url).toString();class hw{constructor(){xt(this,"ctx",null);xt(this,"master",null);xt(this,"unlocked",!1);xt(this,"buffers",new Map);xt(this,"loopSrc",null)}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination)}}resume(){this.ensure(),this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.unlocked=!0}boop(){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(660,t+.09),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.2,t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.12),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.14)}async loadBuffer(t){if(this.ensure(),!this.ctx)return null;if(this.buffers.has(t))return this.buffers.get(t);try{const n=await(await fetch(t)).arrayBuffer(),i=await this.ctx.decodeAudioData(n);return this.buffers.set(t,i),i}catch{return null}}async playSample(t,e=1,n=1){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const i=new URL(t,import.meta.url).toString(),s=await this.loadBuffer(i);if(!s)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=s,a.playbackRate.value=n;const c=this.ctx.createGain();c.gain.value=e,a.connect(c),c.connect(this.master),a.start(o)}mouseSqueek(){this.playSample(ow,.45,1)}mouseDie(){this.playSample(aw,1,1)}catTrill(){this.playSample(cw,.12,1)}async startCatPurr(t=.45){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;if(this.loopSrc&&this.loopSrc.key==="cat-purr"){this.loopSrc.gain.gain.value=t;return}const e=await this.loadBuffer(lw);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const i=this.ctx.createGain();i.gain.value=t,n.connect(i),i.connect(this.master),n.start(),this.loopSrc={key:"cat-purr",src:n,gain:i}}stopCatPurr(){if(!(!this.ctx||!this.loopSrc)){try{this.loopSrc.src.stop()}catch{}try{this.loopSrc.src.disconnect(),this.loopSrc.gain.disconnect()}catch{}this.loopSrc=null}}}let La=null;function uw(){if(!La){const r=new URL("/cat-mouse-hunter/assets/star-cropped-CgZ1Ql_d.png",import.meta.url).toString();La=new Promise((t,e)=>{new Es().load(r,n=>{try{n.colorSpace=de??yn}catch{}t(n)},void 0,n=>e(n))})}return La}class dw{constructor(t,e){xt(this,"particles",[]);xt(this,"materialBase",null);xt(this,"maxParticles",400);xt(this,"warmSprite",null);xt(this,"_pendingPrewarm",!1);this.world=t,this.scene=e,uw().then(n=>{this.materialBase=new Mu({map:n,transparent:!0,depthWrite:!1,opacity:1,blending:Ri}),this._pendingPrewarm&&(this._pendingPrewarm=!1,this.prewarm())})}prewarm(){if(this.warmSprite)return;if(!this.materialBase){this._pendingPrewarm=!0;return}const t=this.materialBase.clone();t.opacity=0;const e=new ql(t);e.renderOrder=-1,e.position.set(0,-10,0),e.scale.set(.1,.1,1),e.visible=!0,this.scene.add(e),this.warmSprite=e}clear(){var t,e,n,i;for(const s of this.particles)this.scene.remove(s.sprite),(e=(t=s.sprite.material).dispose)==null||e.call(t),this.world.removeBody(s.body);this.particles.length=0,this.warmSprite&&(this.scene.remove(this.warmSprite),(i=(n=this.warmSprite.material).dispose)==null||i.call(n),this.warmSprite=null)}spawn(t,e=16){if(!this.materialBase||this.particles.length>=this.maxParticles)return;const n=Math.max(0,this.maxParticles-this.particles.length),i=Math.min(e,n);for(let s=0;s<i;s++){const o=this.materialBase.clone();o.opacity=1;const a=new ql(o),c=.18+Math.random()*.12;a.scale.set(c,c,1),a.position.set(t.x,Math.max(.1,t.y)+.1,t.z),this.scene.add(a);const l=new Eo(c*.25),h=new yt({mass:.02,shape:l});h.position.set(a.position.x,a.position.y,a.position.z),h.linearDamping=.15,h.angularDamping=.2;const d=Math.random()*Math.PI*2,u=1+Math.random()*1,f=(1+Math.random()*1.2)*5;h.velocity.set(Math.sin(d)*u,f,Math.cos(d)*u),h.angularVelocity.set((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),this.world.addBody(h);const g=1.2+Math.random()*.6;this.particles.push({body:h,sprite:a,life:g,total:g})}}update(t){var e,n;if(this.particles.length!==0)for(let i=this.particles.length-1;i>=0;i--){const s=this.particles[i];s.life-=t,s.sprite.position.set(s.body.position.x,s.body.position.y,s.body.position.z);const o=Math.max(0,s.life)/s.total,a=o*o;s.sprite.material.opacity=a,(s.life<=0||s.body.position.y<-1||s.sprite.material.opacity<=.01)&&(this.scene.remove(s.sprite),(n=(e=s.sprite.material).dispose)==null||n.call(e),this.world.removeBody(s.body),this.particles.splice(i,1))}}}const fw=document.getElementById("app"),bs=new yu({antialias:!0});bs.setSize(window.innerWidth,window.innerHeight);bs.shadowMap.enabled=!0;fw.appendChild(bs.domElement);const Zn=new Lx;Zn.background=new Nt(2240570);const er=new qe(60,window.innerWidth/window.innerHeight,.1,1e3);er.position.set(0,2.8,4.2);const pw=new fv(16777215,4478310,.6);Zn.add(pw);const di=new Lu(16777215,.9);di.position.set(10,15,8);di.castShadow=!0;di.shadow.mapSize.set(2048,2048);di.shadow.camera.left=-25;di.shadow.camera.right=25;di.shadow.camera.top=25;di.shadow.camera.bottom=-25;Zn.add(di);const fs=aM(),Xn=new rw(document),ps=new hw,ms=bs.domElement;ms.style.outline="none";ms.tabIndex=0;ms.addEventListener("click",()=>{document.pointerLockElement!==ms&&ms.requestPointerLock(),ps.resume()});document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===ms,t=document.getElementById("lockHint");t&&(t.style.display=r?"none":"block")});const Ia=document.getElementById("sensitivity"),Hh=document.getElementById("sensitivityLabel");if(Ia){const r=()=>{const t=Number(Ia.value);Xn.sensitivity=isNaN(t)?1:t,Hh&&(Hh.textContent=`${Xn.sensitivity.toFixed(2)}x`)};r(),Ia.addEventListener("input",r)}const ke=new sw(fs,Zn);let Xs=1;const ho=new dw(fs,Zn);ho.prewarm();function Gh(r){const t=4+Math.floor(r*1.5),e=10+Math.min(20,Math.floor(r*2)),n=e/10,i=e*2*(e*2),s=Math.min(14,3+Math.floor(r*.8)+Math.floor((n-1)*3)),o=s/i;return{miceRequired:Math.min(t,4+r),mouseCount:t,mouseSpeed:2.5+r*.2,roomCount:s,clutterCount:Math.floor((20+r*5)*n*n),houseHalfSize:e,roomDensity:o}}let qn,Ti=[],bi=0,uo=0,fo=0,Zr=!1;function $a(r){ke.generate(Gh(r)),ho.clear(),ps.stopCatPurr(),qn&&(Zn.remove(qn.mesh),fs.removeBody(qn.body));const t=ke.spawnPoints[Math.floor(Math.random()*ke.spawnPoints.length)]||new R(0,0,0);qn=new HM(fs,Zn,Xn,t.clone()),xn.hideBanner(),Zr=!1;for(const s of Ti)s.alive&&s.kill();Ti=[];const e=Gh(r);uo=e.miceRequired;const n=5;ke.spawnPoints.length>0&&(ke.spawnPoints=ke.spawnPoints.filter(s=>s.distanceTo(t)>=n));const i=s=>{if(ke.spawnPoints.length>0)return ke.spawnPoints[Math.floor(Math.random()*ke.spawnPoints.length)].clone();for(let a=0;a<40;a++){const c=ke.roomBoxes[Math.floor(Math.random()*ke.roomBoxes.length)],l=.6,h=xe.lerp(c.min.x+l,c.max.x-l,Math.random()),d=xe.lerp(c.min.z+l,c.max.z-l,Math.random()),u=new R(h,0,d);if(u.distanceTo(s)>=n)return u}const o=new Ht(Math.random()-.5,Math.random()-.5).normalize();return new R(s.x+o.x*(n+1),0,s.z+o.y*(n+1))};for(let s=0;s<e.mouseCount;s++){const o=i(t),a=new XM(fs,Zn,o.clone(),ke.worldBounds.clone(),ke.mouseHoles,ps);a.speed=e.mouseSpeed,Ti.push(a)}bi=0,fo=Ti.length,xn.setLevel(Xs),xn.setCaught(bi),xn.setRequired(uo),xn.setRemaining(fo)}$a(Xs);window.addEventListener("resize",()=>{er.aspect=window.innerWidth/window.innerHeight,er.updateProjectionMatrix(),bs.setSize(window.innerWidth,window.innerHeight)});let Wh=performance.now(),jr=0,Da=0,Ua=0;function Qu(){const r=performance.now(),t=Math.min(.033,(r-Wh)/1e3);Wh=r,fs.step(1/60,t,3),Xn.updateGamepad(t),Zr&&Xn.padAccept&&Xn.suppressPadJumpOnce();const e=new R(qn.body.position.x,0,qn.body.position.z);ke.update(t,e),ho.update(t),qn.update(t,er,Ti.filter(i=>i.alive).map(i=>i.mesh),ke.meshes);const n=e.clone();for(const i of Ti)i.update(t,n);for(const i of Ti){if(!i.alive)continue;if(i.mesh.position.distanceTo(qn.mesh.position)<.7){const o=i.mesh.position.clone();ho.spawn(o,18+Math.floor(Math.random()*10)),i.kill(),ps.mouseDie(),ps.catTrill(),bi++,fo--,xn.setCaught(bi),xn.setRemaining(fo),bi>=uo&&!Zr&&(xn.showBanner(`<h2>House cleared!</h2><p>You caught ${bi} mice.</p><p>Press <b>N</b> for the next house.</p>`),Zr=!0,ps.startCatPurr())}}if(Xn.restart&&$a(Xs),(Xn.next||Xn.consumePadAccept())&&bi>=uo&&(Xs++,$a(Xs)),xn.setState(qn.state),bs.render(Zn,er),jr+=t,Da++,Ua+=t,Ua>=.25){const i=ke.getRoomTypeAtPosition(e);xn.setRoomType(i),Ua=0}if(jr>=.5){const i=Da/jr;xn.setFPS(i),jr=0,Da=0}requestAnimationFrame(Qu)}Qu();
