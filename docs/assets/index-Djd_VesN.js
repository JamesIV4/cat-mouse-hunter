var ad=Object.defineProperty;var cd=(r,t,e)=>t in r?ad(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var yt=(r,t,e)=>cd(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="160",ld=0,Tc=1,hd=2,Zh=1,ud=2,Kn=3,mi=0,en=1,En=2,di=0,Ni=1,Rc=2,Cc=3,Pc=4,dd=5,Ci=100,fd=101,pd=102,Lc=103,Ic=104,md=200,gd=201,xd=202,vd=203,Ha=204,Ga=205,_d=206,yd=207,Md=208,wd=209,Sd=210,bd=211,Ed=212,Ad=213,Td=214,Rd=0,Cd=1,Pd=2,ro=3,Ld=4,Id=5,Dd=6,Ud=7,wo=0,Nd=1,Fd=2,fi=0,zd=1,Bd=2,Od=3,kd=4,Vd=5,Hd=6,Dc="attached",Gd="detached",$h=300,bs=301,Es=302,oo=303,Wa=304,So=306,Jn=1e3,an=1001,Xa=1002,ke=1003,Uc=1004,zo=1005,dn=1006,Wd=1007,er=1008,pi=1009,Xd=1010,qd=1011,oc=1012,Jh=1013,hi=1014,Qn=1015,nr=1016,Qh=1017,tu=1018,Fi=1020,jd=1021,pn=1023,Yd=1024,Kd=1025,zi=1026,As=1027,Zd=1028,eu=1029,$d=1030,nu=1031,iu=1033,Bo=33776,Oo=33777,ko=33778,Vo=33779,Nc=35840,Fc=35841,zc=35842,Bc=35843,su=36196,Oc=37492,kc=37496,Vc=37808,Hc=37809,Gc=37810,Wc=37811,Xc=37812,qc=37813,jc=37814,Yc=37815,Kc=37816,Zc=37817,$c=37818,Jc=37819,Qc=37820,tl=37821,Ho=36492,el=36494,nl=36495,Jd=36283,il=36284,sl=36285,rl=36286,Qd=2200,ru=2201,tf=2202,ao=2300,co=2301,Go=2302,ps=2400,ms=2401,lo=2402,ac=2500,ef=2501,ou=3e3,Tn=3001,nf=3200,sf=3201,bo=0,rf=1,mn="",ue="srgb",ni="srgb-linear",cc="display-p3",Eo="display-p3-linear",ho="linear",me="srgb",uo="rec709",fo="p3",Xi=7680,ol=519,of=512,af=513,cf=514,au=515,lf=516,hf=517,uf=518,df=519,qa=35044,al="300 es",ja=1035,ti=2e3,po=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Ks=Math.PI/180,Ts=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ve(r,t,e){return Math.max(t,Math.min(e,r))}function lc(r,t){return(r%t+t)%t}function ff(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function pf(r,t,e){return r!==t?(e-r)/(t-r):0}function Zs(r,t,e){return(1-e)*r+e*t}function mf(r,t,e,n){return Zs(r,t,1-Math.exp(-e*n))}function gf(r,t=1){return t-Math.abs(lc(r,t*2)-t)}function xf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function vf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function _f(r,t){return r+Math.floor(Math.random()*(t-r+1))}function yf(r,t){return r+Math.random()*(t-r)}function Mf(r){return r*(.5-Math.random())}function wf(r){r!==void 0&&(cl=r);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(r){return r*Ks}function bf(r){return r*Ts}function Ya(r){return(r&r-1)===0&&r!==0}function Ef(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Af(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:Ks,RAD2DEG:Ts,generateUUID:Rn,clamp:Ve,euclideanModulo:lc,mapLinear:ff,inverseLerp:pf,lerp:Zs,damp:mf,pingpong:gf,smoothstep:xf,smootherstep:vf,randInt:_f,randFloat:yf,randFloatSpread:Mf,seededRandom:wf,degToRad:Sf,radToDeg:bf,isPowerOfTwo:Ya,ceilPowerOfTwo:Ef,floorPowerOfTwo:mo,setQuaternionFromProperEuler:Af,normalize:ie,denormalize:Un};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],_=i[1],v=i[4],y=i[7],C=i[2],w=i[5],T=i[8];return s[0]=o*x+a*_+c*C,s[3]=o*p+a*v+c*w,s[6]=o*g+a*y+c*T,s[1]=l*x+h*_+d*C,s[4]=l*p+h*v+d*w,s[7]=l*g+h*y+d*T,s[2]=u*x+f*_+m*C,s[5]=u*p+f*v+m*w,s[8]=u*g+f*y+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Zt;function cu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tf(){const r=ir("canvas");return r.style.display="block",r}const ll={};function $s(r){r in ll||(ll[r]=!0,console.warn(r))}const hl=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[ni]:{transfer:ho,primaries:uo,toReference:r=>r,fromReference:r=>r},[ue]:{transfer:me,primaries:uo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Eo]:{transfer:ho,primaries:fo,toReference:r=>r.applyMatrix3(ul),fromReference:r=>r.applyMatrix3(hl)},[cc]:{transfer:me,primaries:fo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ul),fromReference:r=>r.applyMatrix3(hl).convertLinearToSRGB()}},Rf=new Set([ni,Eo]),se={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Rf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=gr[t].toReference,i=gr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return gr[r].primaries},getTransfer:function(r){return r===mn?ho:gr[r].transfer}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qi;class lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=ir("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cf=0;class hu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qo(i[o].image)):s.push(qo(i[o]))}else s=qo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class Fe extends Hi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=an,i=an,s=dn,o=er,a=pn,c=pi,l=Fe.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Rn(),this.name="",this.source=new hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Tn?ue:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?Tn:ou}set encoding(t){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Tn?ue:mn}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=$h;Fe.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,C=(g+1)/2,w=(h+u)/4,T=(d+x)/4,k=(m+p)/4;return v>y&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=k/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=k/s),this.set(n,i,s,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends Hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tn?ue:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uu extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Oe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let p=1-a;const g=c*u+l*f+h*m+d*x,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,g*_);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const y=a*_;if(c=c*p+u*y,l=l*p+f*y,h=h*p+m*y,d=d*p+x*y,p===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new A,dl=new Oe;class we{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),vr.subVectors(this.max,Fs),ji.subVectors(t.a,Fs),Yi.subVectors(t.b,Fs),Ki.subVectors(t.c,Fs),ii.subVectors(Yi,ji),si.subVectors(Ki,Yi),wi.subVectors(ji,Ki);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!Yo(e,ji,Yi,Ki,vr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,ji,Yi,Ki,vr))?!1:(_r.crossVectors(ii,si),e=[_r.x,_r.y,_r.z],Yo(e,ji,Yi,Ki,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new A,new A,new A,new A,new A,new A,new A,new A],vn=new A,xr=new we,ji=new A,Yi=new A,Ki=new A,ii=new A,si=new A,wi=new A,Fs=new A,vr=new A,_r=new A,Si=new A;function Yo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Si.fromArray(r,s);const a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Df=new we,zs=new A,Ko=new A;let Gi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Ko)),this.expandByPoint(zs.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const On=new A,Zo=new A,yr=new A,ri=new A,$o=new A,Mr=new A,Jo=new A;let ur=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zo.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Zo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=ri.dot(this.direction),c=-ri.dot(yr),l=ri.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zo).addScaledVector(yr,u),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){$o.subVectors(e,t),Mr.subVectors(n,t),Jo.crossVectors($o,Mr);let o=this.direction.dot(Jo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const c=a*this.direction.dot(Mr.crossVectors(ri,Mr));if(c<0)return null;const l=a*this.direction.dot($o.cross(ri));if(l<0||c+l>o)return null;const h=-a*ri.dot(Jo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ft{constructor(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p)}set(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Nf)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),oi.crossVectors(n,sn),oi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),oi.crossVectors(n,sn)),oi.normalize(),wr.crossVectors(sn,oi),i[0]=oi.x,i[4]=wr.x,i[8]=sn.x,i[1]=oi.y,i[5]=wr.y,i[9]=sn.y,i[2]=oi.z,i[6]=wr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],v=n[7],y=n[11],C=n[15],w=i[0],T=i[4],k=i[8],b=i[12],S=i[1],O=i[5],G=i[9],F=i[13],P=i[2],U=i[6],N=i[10],et=i[14],R=i[3],z=i[7],X=i[11],st=i[15];return s[0]=o*w+a*S+c*P+l*R,s[4]=o*T+a*O+c*U+l*z,s[8]=o*k+a*G+c*N+l*X,s[12]=o*b+a*F+c*et+l*st,s[1]=h*w+d*S+u*P+f*R,s[5]=h*T+d*O+u*U+f*z,s[9]=h*k+d*G+u*N+f*X,s[13]=h*b+d*F+u*et+f*st,s[2]=m*w+x*S+p*P+g*R,s[6]=m*T+x*O+p*U+g*z,s[10]=m*k+x*G+p*N+g*X,s[14]=m*b+x*F+p*et+g*st,s[3]=_*w+v*S+y*P+C*R,s[7]=_*T+v*O+y*U+C*z,s[11]=_*k+v*G+y*N+C*X,s[15]=_*b+v*F+y*et+C*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+x*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+p*(+e*l*d-e*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+g*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],_=d*p*l-x*u*l+x*c*f-a*p*f-d*c*g+a*u*g,v=m*u*l-h*p*l-m*c*f+o*p*f+h*c*g-o*u*g,y=h*x*l-m*d*l+m*a*f-o*x*f-h*a*g+o*d*g,C=m*d*c-h*x*c-m*a*u+o*x*u+h*a*p-o*d*p,w=e*_+n*v+i*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=_*T,t[1]=(x*u*s-d*p*s-x*i*f+n*p*f+d*i*g-n*u*g)*T,t[2]=(a*p*s-x*c*s+x*i*l-n*p*l-a*i*g+n*c*g)*T,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*T,t[4]=v*T,t[5]=(h*p*s-m*u*s+m*i*f-e*p*f-h*i*g+e*u*g)*T,t[6]=(m*c*s-o*p*s-m*i*l+e*p*l+o*i*g-e*c*g)*T,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*T,t[8]=y*T,t[9]=(m*d*s-h*x*s-m*n*f+e*x*f+h*n*g-e*d*g)*T,t[10]=(o*x*s-m*a*s+m*n*l-e*x*l-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=C*T,t[13]=(h*x*i-m*d*i+m*n*u-e*x*u-h*n*p+e*d*p)*T,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*p-e*a*p)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,m=s*d,x=o*h,p=o*d,g=a*d,_=c*l,v=c*h,y=c*d,C=n.x,w=n.y,T=n.z;return i[0]=(1-(x+g))*C,i[1]=(f+y)*C,i[2]=(m-v)*C,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(u+g))*w,i[6]=(p+_)*w,i[7]=0,i[8]=(m+v)*T,i[9]=(p-_)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);const l=1/s,h=1/o,d=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=ti){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===ti)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===po)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ti){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h;let m,x;if(a===ti)m=(o+s)*d,x=-2*d;else if(a===po)m=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new A,_n=new Ft,Uf=new A(0,0,0),Nf=new A(1,1,1),oi=new A,wr=new A,sn=new A,fl=new Ft,pl=new Oe;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const ml=new A,$i=new Oe,kn=new Ft,Sr=new A,Bs=new A,zf=new A,Bf=new Oe,gl=new A(1,0,0),xl=new A(0,1,0),vl=new A(0,0,1),Of={type:"added"},kf={type:"removed"};class ae extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new A,e=new tn,n=new Oe,i=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Zt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Bs,Sr,this.up):kn.lookAt(Sr,Bs,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(kn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Of)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DEFAULT_UP=new A(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new A,Vn=new A,Qo=new A,Hn=new A,Ji=new A,Qi=new A,_l=new A,ta=new A,ea=new A,na=new A;let br=!1;class fn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Vn.subVectors(n,e),Qo.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(Vn),c=yn.dot(Qo),l=Vn.dot(Vn),h=Vn.dot(Qo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,s,o,a,c){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(s,n),ta.subVectors(t,n);const c=Ji.dot(ta),l=Qi.dot(ta);if(c<=0&&l<=0)return e.copy(n);ea.subVectors(t,i);const h=Ji.dot(ea),d=Qi.dot(ea);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ji,o);na.subVectors(t,s);const f=Ji.dot(na),m=Qi.dot(na);if(m>=0&&f<=m)return e.copy(s);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Qi,a);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return _l.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(_l,a);const g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ia(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=lc(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ia(o,s,t+1/3),this.g=ia(o,s,t),this.b=ia(o,s,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return se.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ve(Xe.r*255,0,255))*65536+Math.round(Ve(Xe.g*255,0,255))*256+Math.round(Ve(Xe.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,s=Xe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=ue){se.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Er);const n=Zs(ai.h,Er.h,e),i=Zs(ai.s,Er.s,e),s=Zs(ai.l,Er.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Bt;Bt.NAMES=du;let Vf=0,xn=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ni,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class fu extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new A,Ar=new Nt;class Cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class uc extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pu extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const hn=new Ft,sa=new ae,ts=new A,rn=new we,Os=new we,Ne=new A;class He extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?pu:uc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(rn.min,Os.min),rn.expandByPoint(Ne),Ne.addVectors(rn.max,Os.max),rn.expandByPoint(Ne)):(rn.expandByPoint(Os.min),rn.expandByPoint(Os.max))}rn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(t,l),Ne.add(ts)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new A,h[S]=new A;const d=new A,u=new A,f=new A,m=new Nt,x=new Nt,p=new Nt,g=new A,_=new A;function v(S,O,G){d.fromArray(i,S*3),u.fromArray(i,O*3),f.fromArray(i,G*3),m.fromArray(o,S*2),x.fromArray(o,O*2),p.fromArray(o,G*2),u.sub(d),f.sub(d),x.sub(m),p.sub(m);const F=1/(x.x*p.y-p.x*x.y);isFinite(F)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(F),_.copy(f).multiplyScalar(x.x).addScaledVector(u,-p.x).multiplyScalar(F),l[S].add(g),l[O].add(g),l[G].add(g),h[S].add(_),h[O].add(_),h[G].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,O=y.length;S<O;++S){const G=y[S],F=G.start,P=G.count;for(let U=F,N=F+P;U<N;U+=3)v(n[U+0],n[U+1],n[U+2])}const C=new A,w=new A,T=new A,k=new A;function b(S){T.fromArray(s,S*3),k.copy(T);const O=l[S];C.copy(O),C.sub(T.multiplyScalar(T.dot(O))).normalize(),w.crossVectors(k,O);const F=w.dot(h[S])<0?-1:1;c[S*4]=C.x,c[S*4+1]=C.y,c[S*4+2]=C.z,c[S*4+3]=F}for(let S=0,O=y.length;S<O;++S){const G=y[S],F=G.start,P=G.count;for(let U=F,N=F+P;U<N;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,o=new A,a=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new Cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ft,bi=new ur,Tr=new Gi,Ml=new A,es=new A,ns=new A,is=new A,ra=new A,Rr=new A,Cr=new Nt,Pr=new Nt,Lr=new Nt,wl=new A,Sl=new A,bl=new A,Ir=new A,Dr=new A;class he extends ae{constructor(t=new He,e=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Rr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(ra.fromBufferAttribute(d,t),o?Rr.addScaledVector(ra,h):Rr.addScaledVector(ra.sub(e),h))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Tr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Tr,Ml)===null||bi.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(yl.copy(s).invert(),bi.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){const w=a.getX(y),T=a.getX(y+1),k=a.getX(y+2);i=Ur(this,g,t,n,l,h,d,w,T,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=Ur(this,o,t,n,l,h,d,_,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){const w=y,T=y+1,k=y+2;i=Ur(this,g,t,n,l,h,d,w,T,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const _=p,v=p+1,y=p+2;i=Ur(this,o,t,n,l,h,d,_,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Gf(r,t,e,n,i,s,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===mi,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Dr);return l<e.near||l>e.far?null:{distance:l,point:Dr.clone(),object:r}}function Ur(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,es),r.getVertexPosition(c,ns),r.getVertexPosition(l,is);const h=Gf(r,t,e,n,es,ns,is,Ir);if(h){i&&(Cr.fromBufferAttribute(i,a),Pr.fromBufferAttribute(i,c),Lr.fromBufferAttribute(i,l),h.uv=fn.getInterpolation(Ir,es,ns,is,Cr,Pr,Lr,new Nt)),s&&(Cr.fromBufferAttribute(s,a),Pr.fromBufferAttribute(s,c),Lr.fromBufferAttribute(s,l),h.uv1=fn.getInterpolation(Ir,es,ns,is,Cr,Pr,Lr,new Nt),h.uv2=h.uv1),o&&(wl.fromBufferAttribute(o,a),Sl.fromBufferAttribute(o,c),bl.fromBufferAttribute(o,l),h.normal=fn.getInterpolation(Ir,es,ns,is,wl,Sl,bl,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};fn.getNormal(es,ns,is,d.normal),h.face=d}return h}class $e extends He{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function m(x,p,g,_,v,y,C,w,T,k,b){const S=y/T,O=C/k,G=y/2,F=C/2,P=w/2,U=T+1,N=k+1;let et=0,R=0;const z=new A;for(let X=0;X<N;X++){const st=X*O-F;for(let at=0;at<U;at++){const nt=at*S-G;z[x]=nt*_,z[p]=st*v,z[g]=P,l.push(z.x,z.y,z.z),z[x]=0,z[p]=0,z[g]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(at/T),d.push(1-X/k),et+=1}}for(let X=0;X<k;X++)for(let st=0;st<T;st++){const at=u+st+U*X,nt=u+st+U*(X+1),ht=u+(st+1)+U*(X+1),mt=u+(st+1)+U*X;c.push(at,nt,mt),c.push(nt,ht,mt),R+=6}a.addGroup(f,R,b),f+=R,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(r){const t={};for(let e=0;e<r.length;e++){const n=Rs(r[e]);for(const i in n)t[i]=n[i]}return t}function Wf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mu(r){return r.getRenderTarget()===null?r.outputColorSpace:se.workingColorSpace}const Xf={clone:Rs,merge:Ke};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gu extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends gu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class Yf extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(ss,rs,t,e);i.layers=this.layers,this.add(i);const s=new Je(ss,rs,t,e);s.layers=this.layers,this.add(s);const o=new Je(ss,rs,t,e);o.layers=this.layers,this.add(o);const a=new Je(ss,rs,t,e);a.layers=this.layers,this.add(a);const c=new Je(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new Je(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class xu extends Fe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kf extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Tn?ue:mn),this.texture=new xu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $e(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:di});s.uniforms.tEquirect.value=e;const o=new he(i,s),a=e.minFilter;return e.minFilter===er&&(e.minFilter=dn),new Yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const oa=new A,Zf=new A,$f=new Zt;let Ti=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oa.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$f.getNormalMatrix(t),i=this.coplanarPoint(oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ei=new Gi,Nr=new A;class dc{constructor(t=new Ti,e=new Ti,n=new Ti,i=new Ti,s=new Ti,o=new Ti){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],m=i[9],x=i[10],p=i[11],g=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,p-f,y-g).normalize(),n[1].setComponents(c+s,u+l,p+f,y+g).normalize(),n[2].setComponents(c+o,u+h,p+m,y+_).normalize(),n[3].setComponents(c-o,u-h,p-m,y-_).normalize(),n[4].setComponents(c-a,u-d,p-x,y-v).normalize(),e===ti)n[5].setComponents(c+a,u+d,p+x,y+v).normalize();else if(e===po)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Nr.x=i.normal.x>0?t.max.x:t.min.x,Nr.y=i.normal.y>0?t.max.y:t.min.y,Nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=d.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){const u=h.array,f=h._updateRange,m=h.updateRanges;if(r.bindBuffer(d,l),f.count===-1&&m.length===0&&r.bufferSubData(d,0,u),m.length!==0){for(let x=0,p=m.length;x<p;x++){const g=m[x];e?r.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):r.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class Ao extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const _=g*u-o;for(let v=0;v<l;v++){const y=v*d-s;m.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const v=_+l*g,y=_+l*(g+1),C=_+1+l*(g+1),w=_+1+l*g;f.push(v,y,w),f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
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
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Sg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Eg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Qf,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:cp,begin_vertex:lp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:vp,color_pars_fragment:_p,color_pars_vertex:yp,color_vertex:Mp,common:wp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Ap,emissivemap_fragment:Tp,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:qp,envmap_vertex:Np,fog_vertex:Fp,fog_pars_vertex:zp,fog_fragment:Bp,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:jp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Zp,lights_physical_fragment:$p,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:tm,lights_fragment_end:em,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:cm,map_particle_pars_fragment:lm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:vm,normal_pars_vertex:_m,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Em,opaque_fragment:Am,packing:Tm,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:zm,skinbase_vertex:Bm,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:jm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:Zm,worldpos_vertex:$m,background_vert:Jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:cg,equirect_frag:lg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:_g,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:wg,meshphysical_frag:Sg,meshtoon_vert:bg,meshtoon_frag:Eg,points_vert:Ag,points_frag:Tg,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Lg},vt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ke([vt.common,vt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ke([vt.lights,vt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Dn.physical={uniforms:Ke([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Fr={r:0,b:0,g:0};function Ig(r,t,e,n,i,s,o){const a=new Bt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function m(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===So)?(h===void 0&&(h=new he(new $e(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Rs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=se.getTransfer(v.colorSpace)!==me,(d!==v||u!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new he(new Ao(2,2),new Oi({name:"BackgroundMaterial",uniforms:Rs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,g){p.getRGB(Fr,mu(r)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),c=g,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:m}}function Dg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(P,U,N,et,R){let z=!1;if(o){const X=x(et,N,U);l!==X&&(l=X,f(l.object)),z=g(P,et,N,R),z&&_(P,et,N,R)}else{const X=U.wireframe===!0;(l.geometry!==et.id||l.program!==N.id||l.wireframe!==X)&&(l.geometry=et.id,l.program=N.id,l.wireframe=X,z=!0)}R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,k(P,U,N,et),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,U,N){const et=N.wireframe===!0;let R=a[P.id];R===void 0&&(R={},a[P.id]=R);let z=R[U.id];z===void 0&&(z={},R[U.id]=z);let X=z[et];return X===void 0&&(X=p(u()),z[et]=X),X}function p(P){const U=[],N=[],et=[];for(let R=0;R<i;R++)U[R]=0,N[R]=0,et[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:et,object:P,attributes:{},index:null}}function g(P,U,N,et){const R=l.attributes,z=U.attributes;let X=0;const st=N.getAttributes();for(const at in st)if(st[at].location>=0){const ht=R[at];let mt=z[at];if(mt===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;X++}return l.attributesNum!==X||l.index!==et}function _(P,U,N,et){const R={},z=U.attributes;let X=0;const st=N.getAttributes();for(const at in st)if(st[at].location>=0){let ht=z[at];ht===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),R[at]=mt,X++}l.attributes=R,l.attributesNum=X,l.index=et}function v(){const P=l.newAttributes;for(let U=0,N=P.length;U<N;U++)P[U]=0}function y(P){C(P,0)}function C(P,U){const N=l.newAttributes,et=l.enabledAttributes,R=l.attributeDivisors;N[P]=1,et[P]===0&&(r.enableVertexAttribArray(P),et[P]=1),R[P]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),R[P]=U)}function w(){const P=l.newAttributes,U=l.enabledAttributes;for(let N=0,et=U.length;N<et;N++)U[N]!==P[N]&&(r.disableVertexAttribArray(N),U[N]=0)}function T(P,U,N,et,R,z,X){X===!0?r.vertexAttribIPointer(P,U,N,R,z):r.vertexAttribPointer(P,U,N,et,R,z)}function k(P,U,N,et){if(n.isWebGL2===!1&&(P.isInstancedMesh||et.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const R=et.attributes,z=N.getAttributes(),X=U.defaultAttributeValues;for(const st in z){const at=z[st];if(at.location>=0){let nt=R[st];if(nt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){const ht=nt.normalized,mt=nt.itemSize,wt=e.get(nt);if(wt===void 0)continue;const gt=wt.buffer,Rt=wt.type,Ct=wt.bytesPerElement,zt=n.isWebGL2===!0&&(Rt===r.INT||Rt===r.UNSIGNED_INT||nt.gpuType===Jh);if(nt.isInterleavedBufferAttribute){const qt=nt.data,J=qt.stride,Te=nt.offset;if(qt.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)C(at.location+It,qt.meshPerAttribute);P.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let It=0;It<at.locationSize;It++)y(at.location+It);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let It=0;It<at.locationSize;It++)T(at.location+It,mt/at.locationSize,Rt,ht,J*Ct,(Te+mt/at.locationSize*It)*Ct,zt)}else{if(nt.isInstancedBufferAttribute){for(let qt=0;qt<at.locationSize;qt++)C(at.location+qt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let qt=0;qt<at.locationSize;qt++)y(at.location+qt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let qt=0;qt<at.locationSize;qt++)T(at.location+qt,mt/at.locationSize,Rt,ht,mt*Ct,mt/at.locationSize*qt*Ct,zt)}}else if(X!==void 0){const ht=X[st];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(at.location,ht);break;case 3:r.vertexAttrib3fv(at.location,ht);break;case 4:r.vertexAttrib4fv(at.location,ht);break;default:r.vertexAttrib1fv(at.location,ht)}}}}w()}function b(){G();for(const P in a){const U=a[P];for(const N in U){const et=U[N];for(const R in et)m(et[R].object),delete et[R];delete U[N]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const N in U){const et=U[N];for(const R in et)m(et[R].object),delete et[R];delete U[N]}delete a[P.id]}function O(P){for(const U in a){const N=a[U];if(N[P.id]===void 0)continue;const et=N[P.id];for(const R in et)m(et[R].object),delete et[R];delete N[P.id]}}function G(){F(),h=!0,l!==c&&(l=c,f(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function Ug(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(h[m],d[m]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];e.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ng(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=o||t.has("OES_texture_float"),C=v&&y,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function Fg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ti,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):l();else{const _=s?0:n,v=_*4;let y=g.clippingState||null;c.value=y,y=h(m,u,v,f);for(let C=0;C!==v;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function zg(r){let t=new WeakMap;function e(o,a){return a===oo?o.mapping=bs:a===Wa&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oo||a===Wa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kf(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class fc extends gu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,El=[.125,.215,.35,.446,.526,.582],Pi=20,aa=new fc,Al=new Bt;let ca=null,la=0,ha=0;const Ri=(1+Math.sqrt(5))/2,os=1/Ri,Tl=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Ri,os),new A(0,Ri,-os),new A(os,0,Ri),new A(-os,0,Ri),new A(Ri,os,0),new A(-Ri,os,0)];class Rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:nr,format:pn,colorSpace:ni,depthBuffer:!1},i=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(s)),this._blurMaterial=Og(s,t,e)}return i}_compileMaterial(t){const e=new he(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i){const a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Al),h.toneMapping=fi,h.autoClear=!1;const f=new fu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new he(new $e,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Al),x=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const v=this._cubeSize;zr(i,_*v,g>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bs||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Tl[(i-1)%Tl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new he(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),x=s/m,p=isFinite(s)?1+Math.floor(h*x):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const g=[];let _=0;for(let T=0;T<Pi;++T){const k=T/x,b=Math.exp(-k*k/2);g.push(b),T===0?_+=b:T<p&&(_+=2*b)}for(let T=0;T<g.length;T++)g[T]=g[T]/_;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const y=this._sizeLods[i],C=3*y*(i>v-gs?i-v+gs:0),w=4*(this._cubeSize-y);zr(e,C,w,3*y,2*y),c.setRenderTarget(e),c.render(d,aa)}}function Bg(r){const t=[],e=[],n=[];let i=r;const s=r-gs+1+El.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-gs?c=El[o-r+gs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,_=new Float32Array(x*m*f),v=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,k=w>2?0:-1,b=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];_.set(b,x*m*w),v.set(u,p*m*w);const S=[w,w,w,w,w,w];y.set(S,g*m*w)}const C=new He;C.setAttribute("position",new Cn(_,x)),C.setAttribute("uv",new Cn(v,p)),C.setAttribute("faceIndex",new Cn(y,g)),t.push(C),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(r,t,e){const n=new Bi(r,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Og(r,t,e){const n=new Float32Array(Pi),i=new A(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Pl(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ll(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function kg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===oo||c===Wa,h=c===bs||c===Es;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Rl(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Rl(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hg(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)t.update(u[m],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const x=f[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],r.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){const C=_[v+0],w=_[v+1],T=_[v+2];u.push(C,w,w,T,T,C)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const C=v+0,w=v+1,T=v+2;u.push(C,w,w,T,T,C)}}else return;const p=new(cu(u)?pu:uc)(u,1);p.version=x;const g=s.get(d);g&&t.remove(g),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Gg(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){r.drawElements(s,m,a,f*c),e.update(m,s,1)}function d(f,m,x){if(x===0)return;let p,g;if(i)p=r,g="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,m,a,f*c,x),e.update(m,s,x)}function u(f,m,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<x;g++)this.render(f[g]/c,m[g]);else{p.multiDrawElementsWEBGL(s,m,0,a,f,0,x);let g=0;for(let _=0;_<x;_++)g+=m[_];e.update(g,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Wg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xg(r,t){return r[0]-t[0]}function qg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function jg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ee,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let x=s.get(h);if(x===void 0||x.count!==m){let P=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let k=0;_===!0&&(k=1),v===!0&&(k=2),y===!0&&(k=3);let b=h.attributes.position.count*k,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const O=new Float32Array(b*S*4*m),G=new uu(O,b,S,m);G.type=Qn,G.needsUpdate=!0;const F=k*4;for(let U=0;U<m;U++){const N=C[U],et=w[U],R=T[U],z=b*S*4*U;for(let X=0;X<N.count;X++){const st=X*F;_===!0&&(o.fromBufferAttribute(N,X),O[z+st+0]=o.x,O[z+st+1]=o.y,O[z+st+2]=o.z,O[z+st+3]=0),v===!0&&(o.fromBufferAttribute(et,X),O[z+st+4]=o.x,O[z+st+5]=o.y,O[z+st+6]=o.z,O[z+st+7]=0),y===!0&&(o.fromBufferAttribute(R,X),O[z+st+8]=o.x,O[z+st+9]=o.y,O[z+st+10]=o.z,O[z+st+11]=R.itemSize===4?o.w:1)}}x={count:m,texture:G,size:new Nt(b,S)},s.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const f=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<f;v++){const y=m[v];y[0]=v,y[1]=u[v]}m.sort(qg);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Xg);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const y=a[v],C=y[0],w=y[1];C!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),p&&h.getAttribute("morphNormal"+v)!==p[C]&&h.setAttribute("morphNormal"+v,p[C]),i[v]=w,g+=w):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Yg(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class _u extends Fe{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:zi,h!==zi&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=hi),n===void 0&&h===As&&(n=Fi),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yu=new Fe,Mu=new _u(1,1);Mu.compareFunction=au;const wu=new uu,Su=new If,bu=new xu,Il=[],Dl=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function Cs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Il[i];if(s===void 0&&(s=new Float32Array(i),Il[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function To(r,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Kg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function Jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function Qg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Fl.set(n),r.uniformMatrix2fv(this.addr,!1,Fl),De(e,n)}}function t0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Nl.set(n),r.uniformMatrix3fv(this.addr,!1,Nl),De(e,n)}}function e0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ul.set(n),r.uniformMatrix4fv(this.addr,!1,Ul),De(e,n)}}function n0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function i0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function s0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function o0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function a0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function c0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function l0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function h0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Mu:yu;e.setTexture2D(t||s,i)}function u0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Su,i)}function d0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bu,i)}function f0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wu,i)}function p0(r){switch(r){case 5126:return Kg;case 35664:return Zg;case 35665:return $g;case 35666:return Jg;case 35674:return Qg;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(r,t){r.uniform1fv(this.addr,t)}function g0(r,t){const e=Cs(t,this.size,2);r.uniform2fv(this.addr,e)}function x0(r,t){const e=Cs(t,this.size,3);r.uniform3fv(this.addr,e)}function v0(r,t){const e=Cs(t,this.size,4);r.uniform4fv(this.addr,e)}function _0(r,t){const e=Cs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function y0(r,t){const e=Cs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function M0(r,t){const e=Cs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function w0(r,t){r.uniform1iv(this.addr,t)}function S0(r,t){r.uniform2iv(this.addr,t)}function b0(r,t){r.uniform3iv(this.addr,t)}function E0(r,t){r.uniform4iv(this.addr,t)}function A0(r,t){r.uniform1uiv(this.addr,t)}function T0(r,t){r.uniform2uiv(this.addr,t)}function R0(r,t){r.uniform3uiv(this.addr,t)}function C0(r,t){r.uniform4uiv(this.addr,t)}function P0(r,t,e){const n=this.cache,i=t.length,s=To(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||yu,s[o])}function L0(r,t,e){const n=this.cache,i=t.length,s=To(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Su,s[o])}function I0(r,t,e){const n=this.cache,i=t.length,s=To(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bu,s[o])}function D0(r,t,e){const n=this.cache,i=t.length,s=To(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wu,s[o])}function U0(r){switch(r){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return v0;case 35674:return _0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return w0;case 35667:case 35671:return S0;case 35668:case 35672:return b0;case 35669:case 35673:return E0;case 5125:return A0;case 36294:return T0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return D0}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function zl(r,t){r.seq.push(t),r.map[t.id]=t}function B0(r,t,e){const n=r.name,i=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),o=ua.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){zl(e,l===void 0?new N0(a,r,t):new F0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new z0(a),zl(e,d)),e=d}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);B0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const O0=37297;let k0=0;function V0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function H0(r){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(r);let n;switch(t===e?n="":t===fo&&e===uo?n="LinearDisplayP3ToLinearSRGB":t===uo&&e===fo&&(n="LinearSRGBToLinearDisplayP3"),r){case ni:case Eo:return[n,"LinearTransferOETF"];case ue:case cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ol(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+V0(r.getShaderSource(t),o)}else return i}function G0(r,t){const e=H0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function W0(r,t){let e;switch(t){case zd:e="Linear";break;case Bd:e="Reinhard";break;case Od:e="OptimizedCineon";break;case kd:e="ACESFilmic";break;case Hd:e="AgX";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function X0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function q0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function j0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xs(r){return r!==""}function kl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(r){return r.replace(K0,$0)}const Z0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $0(r,t){let e=jt[t];if(e===void 0){const n=Z0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(r){return r.replace(J0,Q0)}function Q0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function ex(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case Es:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function ix(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case Nd:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function sx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=tx(e),l=ex(e),h=nx(e),d=ix(e),u=sx(e),f=e.isWebGL2?"":X0(e),m=q0(e),x=j0(s),p=i.createProgram();let g,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xs).join(`
`),g.length>0&&(g+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xs).join(`
`),_.length>0&&(_+=`
`)):(g=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),_=[f,Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Ka(o),o=kl(o,e),o=Vl(o,e),a=Ka(a),a=kl(a,e),a=Vl(a,e),o=Hl(o),a=Hl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+g+o,C=v+_+a,w=Bl(i,i.VERTEX_SHADER,y),T=Bl(i,i.FRAGMENT_SHADER,C);i.attachShader(p,w),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function k(G){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(T).trim();let N=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,T);else{const R=Ol(i,w,"vertex"),z=Ol(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+R+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||U==="")&&(et=!1);et&&(G.diagnostics={runnable:N,programLog:F,vertexShader:{log:P,prefix:g},fragmentShader:{log:U,prefix:_}})}i.deleteShader(w),i.deleteShader(T),b=new no(i,p),S=Y0(i,p)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let S;this.getAttributes=function(){return S===void 0&&k(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(p,O0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let ox=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cx(t),e.set(t,n)),n}}class cx{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}}function lx(r,t,e,n,i,s,o){const a=new hc,c=new ax,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,S,O,G,F){const P=G.fog,U=F.geometry,N=b.isMeshStandardMaterial?G.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),R=et&&et.mapping===So?et.image.height:null,z=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=X!==void 0?X.length:0;let at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let nt,ht,mt,wt;if(z){const Re=Dn[z];nt=Re.vertexShader,ht=Re.fragmentShader}else nt=b.vertexShader,ht=b.fragmentShader,c.update(b),mt=c.getVertexShaderID(b),wt=c.getFragmentShaderID(b);const gt=r.getRenderTarget(),Rt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,zt=!!b.map,qt=!!b.matcap,J=!!et,Te=!!b.aoMap,It=!!b.lightMap,Vt=!!b.bumpMap,Pt=!!b.normalMap,de=!!b.displacementMap,Ht=!!b.emissiveMap,I=!!b.metalnessMap,E=!!b.roughnessMap,tt=b.anisotropy>0,D=b.clearcoat>0,H=b.iridescence>0,B=b.sheen>0,q=b.transmission>0,Z=tt&&!!b.anisotropyMap,K=D&&!!b.clearcoatMap,Y=D&&!!b.clearcoatNormalMap,$=D&&!!b.clearcoatRoughnessMap,W=H&&!!b.iridescenceMap,ct=H&&!!b.iridescenceThicknessMap,dt=B&&!!b.sheenColorMap,ut=B&&!!b.sheenRoughnessMap,Q=!!b.specularMap,lt=!!b.specularColorMap,St=!!b.specularIntensityMap,_t=q&&!!b.transmissionMap,Dt=q&&!!b.thicknessMap,Tt=!!b.gradientMap,pt=!!b.alphaMap,V=b.alphaTest>0,ft=!!b.alphaHash,xt=!!b.extensions,Lt=!!U.attributes.uv1,bt=!!U.attributes.uv2,Gt=!!U.attributes.uv3;let ne=fi;return b.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ne=r.toneMapping),{isWebGL2:h,shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:ht,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ct,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ni,map:zt,matcap:qt,envMap:J,envMapMode:J&&et.mapping,envMapCubeUVHeight:R,aoMap:Te,lightMap:It,bumpMap:Vt,normalMap:Pt,displacementMap:u&&de,emissiveMap:Ht,normalMapObjectSpace:Pt&&b.normalMapType===rf,normalMapTangentSpace:Pt&&b.normalMapType===bo,metalnessMap:I,roughnessMap:E,anisotropy:tt,anisotropyMap:Z,clearcoat:D,clearcoatMap:K,clearcoatNormalMap:Y,clearcoatRoughnessMap:$,iridescence:H,iridescenceMap:W,iridescenceThicknessMap:ct,sheen:B,sheenColorMap:dt,sheenRoughnessMap:ut,specularMap:Q,specularColorMap:lt,specularIntensityMap:St,transmission:q,transmissionMap:_t,thicknessMap:Dt,gradientMap:Tt,opaque:b.transparent===!1&&b.blending===Ni,alphaMap:pt,alphaTest:V,alphaHash:ft,combine:b.combine,mapUv:zt&&x(b.map.channel),aoMapUv:Te&&x(b.aoMap.channel),lightMapUv:It&&x(b.lightMap.channel),bumpMapUv:Vt&&x(b.bumpMap.channel),normalMapUv:Pt&&x(b.normalMap.channel),displacementMapUv:de&&x(b.displacementMap.channel),emissiveMapUv:Ht&&x(b.emissiveMap.channel),metalnessMapUv:I&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:Z&&x(b.anisotropyMap.channel),clearcoatMapUv:K&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Y&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(b.sheenRoughnessMap.channel),specularMapUv:Q&&x(b.specularMap.channel),specularColorMapUv:lt&&x(b.specularColorMap.channel),specularIntensityMapUv:St&&x(b.specularIntensityMap.channel),transmissionMapUv:_t&&x(b.transmissionMap.channel),thicknessMapUv:Dt&&x(b.thicknessMap.channel),alphaMapUv:pt&&x(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Pt||tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:bt,vertexUv3s:Gt,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(zt||pt),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,useLegacyLights:r._useLegacyLights,decodeVideoTexture:zt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)S.push(O),S.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const S=m[b.type];let O;if(S){const G=Dn[S];O=Xf.clone(G.uniforms)}else O=b.uniforms;return O}function C(b,S){let O;for(let G=0,F=l.length;G<F;G++){const P=l[G];if(P.cacheKey===S){O=P,++O.usedTimes;break}}return O===void 0&&(O=new rx(r,S,b,s),l.push(O)),O}function w(b){if(--b.usedTimes===0){const S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:k}}function hx(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ux(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,x,p){let g=r[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},r[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),t++,g}function a(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function c(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function l(d,u){e.length>1&&e.sort(d||ux),n.length>1&&n.sort(u||Wl),i.length>1&&i.sort(u||Wl)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function dx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xl,r.set(n,[o])):i>=s.length?(o=new Xl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function fx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Bt};break;case"SpotLight":e={position:new A,direction:new A,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function px(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let mx=0;function gx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function xx(r,t){const e=new fx,n=px(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);const s=new A,o=new Ft,a=new Ft;function c(h,d){let u=0,f=0,m=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,p=0,g=0,_=0,v=0,y=0,C=0,w=0,T=0,k=0,b=0;h.sort(gx);const S=d===!0?Math.PI:1;for(let G=0,F=h.length;G<F;G++){const P=h[G],U=P.color,N=P.intensity,et=P.distance,R=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*N*S,f+=U.g*N*S,m+=U.b*N*S;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],N);b++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const X=P.shadow,st=n.get(P);st.shadowBias=X.bias,st.shadowNormalBias=X.normalBias,st.shadowRadius=X.radius,st.shadowMapSize=X.mapSize,i.directionalShadow[x]=st,i.directionalShadowMap[x]=R,i.directionalShadowMatrix[x]=P.shadow.matrix,y++}i.directional[x]=z,x++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(N*S),z.distance=et,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[g]=z;const X=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[g]=X.matrix,P.castShadow){const st=n.get(P);st.shadowBias=X.bias,st.shadowNormalBias=X.normalBias,st.shadowRadius=X.radius,st.shadowMapSize=X.mapSize,i.spotShadow[g]=st,i.spotShadowMap[g]=R,w++}g++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(U).multiplyScalar(N),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=z,_++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*S),z.distance=P.distance,z.decay=P.decay,P.castShadow){const X=P.shadow,st=n.get(P);st.shadowBias=X.bias,st.shadowNormalBias=X.normalBias,st.shadowRadius=X.radius,st.shadowMapSize=X.mapSize,st.shadowCameraNear=X.camera.near,st.shadowCameraFar=X.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=R,i.pointShadowMatrix[p]=P.shadow.matrix,C++}i.point[p]=z,p++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(N*S),z.groundColor.copy(P.groundColor).multiplyScalar(N*S),i.hemi[v]=z,v++}}_>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const O=i.hash;(O.directionalLength!==x||O.pointLength!==p||O.spotLength!==g||O.rectAreaLength!==_||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==C||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=g,i.rectArea.length=_,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+T-k,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=b,O.directionalLength=x,O.pointLength=p,O.spotLength=g,O.rectAreaLength=_,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=C,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=b,i.version=mx++)}function l(h,d){let u=0,f=0,m=0,x=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const y=h[_];if(y.isDirectionalLight){const C=i.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(y.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const C=i.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:i}}function ql(r,t){const e=new xx(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function vx(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new ql(r,t),e.set(s,[c])):o>=a.length?(c=new ql(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class _x extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yx extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Sx(r,t,e){let n=new dc;const i=new Nt,s=new Nt,o=new ee,a=new _x({depthPacking:sf}),c=new yx,l={},h=e.maxTextureSize,d={[mi]:en,[en]:mi,[En]:En},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Mx,fragmentShader:wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new He;m.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new he(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let g=this.type;this.render=function(w,T,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),G=r.state;G.setBlending(di),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=g!==Kn&&this.type===Kn,P=g===Kn&&this.type!==Kn;for(let U=0,N=w.length;U<N;U++){const et=w[U],R=et.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,R.mapSize.y=s.y)),R.map===null||F===!0||P===!0){const st=this.type!==Kn?{minFilter:ke,magFilter:ke}:{};R.map!==null&&R.map.dispose(),R.map=new Bi(i.x,i.y,st),R.map.texture.name=et.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const X=R.getViewportCount();for(let st=0;st<X;st++){const at=R.getViewport(st);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),G.viewport(o),R.updateMatrices(et,st),n=R.getFrustum(),y(T,k,R.camera,et,this.type)}R.isPointLightShadow!==!0&&this.type===Kn&&_(R,k),R.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(b,S,O)};function _(w,T){const k=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,k,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,k,f,x,null)}function v(w,T,k,b){let S=null;const O=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)S=O;else if(S=k.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=S.uuid,F=T.uuid;let P=l[G];P===void 0&&(P={},l[G]=P);let U=P[F];U===void 0&&(U=S.clone(),P[F]=U,T.addEventListener("dispose",C)),S=U}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Kn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=r.properties.get(S);G.light=k}return S}function y(w,T,k,b,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const F=t.update(w),P=w.material;if(Array.isArray(P)){const U=F.groups;for(let N=0,et=U.length;N<et;N++){const R=U[N],z=P[R.materialIndex];if(z&&z.visible){const X=v(w,z,b,S);w.onBeforeShadow(r,w,T,k,F,X,R),r.renderBufferDirect(k,null,F,X,w,R),w.onAfterShadow(r,w,T,k,F,X,R)}}}else if(P.visible){const U=v(w,P,b,S);w.onBeforeShadow(r,w,T,k,F,U,null),r.renderBufferDirect(k,null,F,U,w,null),w.onAfterShadow(r,w,T,k,F,U,null)}}const G=w.children;for(let F=0,P=G.length;F<P;F++)y(G[F],T,k,b,S)}function C(w){w.target.removeEventListener("dispose",C);for(const k in l){const b=l[k],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function bx(r,t,e){const n=e.isWebGL2;function i(){let V=!1;const ft=new ee;let xt=null;const Lt=new ee(0,0,0,0);return{setMask:function(bt){xt!==bt&&!V&&(r.colorMask(bt,bt,bt,bt),xt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,Gt,ne,_e,Re){Re===!0&&(bt*=_e,Gt*=_e,ne*=_e),ft.set(bt,Gt,ne,_e),Lt.equals(ft)===!1&&(r.clearColor(bt,Gt,ne,_e),Lt.copy(ft))},reset:function(){V=!1,xt=null,Lt.set(-1,0,0,0)}}}function s(){let V=!1,ft=null,xt=null,Lt=null;return{setTest:function(bt){bt?Ct(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(bt){ft!==bt&&!V&&(r.depthMask(bt),ft=bt)},setFunc:function(bt){if(xt!==bt){switch(bt){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Id:r.depthFunc(r.GEQUAL);break;case Dd:r.depthFunc(r.GREATER);break;case Ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Lt!==bt&&(r.clearDepth(bt),Lt=bt)},reset:function(){V=!1,ft=null,xt=null,Lt=null}}}function o(){let V=!1,ft=null,xt=null,Lt=null,bt=null,Gt=null,ne=null,_e=null,Re=null;return{setTest:function(Qt){V||(Qt?Ct(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Qt){ft!==Qt&&!V&&(r.stencilMask(Qt),ft=Qt)},setFunc:function(Qt,ye,Pe){(xt!==Qt||Lt!==ye||bt!==Pe)&&(r.stencilFunc(Qt,ye,Pe),xt=Qt,Lt=ye,bt=Pe)},setOp:function(Qt,ye,Pe){(Gt!==Qt||ne!==ye||_e!==Pe)&&(r.stencilOp(Qt,ye,Pe),Gt=Qt,ne=ye,_e=Pe)},setLocked:function(Qt){V=Qt},setClear:function(Qt){Re!==Qt&&(r.clearStencil(Qt),Re=Qt)},reset:function(){V=!1,ft=null,xt=null,Lt=null,bt=null,Gt=null,ne=null,_e=null,Re=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,v=null,y=null,C=null,w=null,T=null,k=null,b=new Bt(0,0,0),S=0,O=!1,G=null,F=null,P=null,U=null,N=null;const et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),R=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),R=z>=2);let st=null,at={};const nt=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),mt=new ee().fromArray(nt),wt=new ee().fromArray(ht);function gt(V,ft,xt,Lt){const bt=new Uint8Array(4),Gt=r.createTexture();r.bindTexture(V,Gt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<xt;ne++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(ft+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return Gt}const Rt={};Rt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ct(r.DEPTH_TEST),c.setFunc(ro),Ht(!1),I(Tc),Ct(r.CULL_FACE),Pt(di);function Ct(V){u[V]!==!0&&(r.enable(V),u[V]=!0)}function zt(V){u[V]!==!1&&(r.disable(V),u[V]=!1)}function qt(V,ft){return f[V]!==ft?(r.bindFramebuffer(V,ft),f[V]=ft,n&&(V===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ft),V===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function J(V,ft){let xt=x,Lt=!1;if(V)if(xt=m.get(ft),xt===void 0&&(xt=[],m.set(ft,xt)),V.isWebGLMultipleRenderTargets){const bt=V.texture;if(xt.length!==bt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let Gt=0,ne=bt.length;Gt<ne;Gt++)xt[Gt]=r.COLOR_ATTACHMENT0+Gt;xt.length=bt.length,Lt=!0}}else xt[0]!==r.COLOR_ATTACHMENT0&&(xt[0]=r.COLOR_ATTACHMENT0,Lt=!0);else xt[0]!==r.BACK&&(xt[0]=r.BACK,Lt=!0);Lt&&(e.isWebGL2?r.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Te(V){return p!==V?(r.useProgram(V),p=V,!0):!1}const It={[Ci]:r.FUNC_ADD,[fd]:r.FUNC_SUBTRACT,[pd]:r.FUNC_REVERSE_SUBTRACT};if(n)It[Lc]=r.MIN,It[Ic]=r.MAX;else{const V=t.get("EXT_blend_minmax");V!==null&&(It[Lc]=V.MIN_EXT,It[Ic]=V.MAX_EXT)}const Vt={[md]:r.ZERO,[gd]:r.ONE,[xd]:r.SRC_COLOR,[Ha]:r.SRC_ALPHA,[Sd]:r.SRC_ALPHA_SATURATE,[Md]:r.DST_COLOR,[_d]:r.DST_ALPHA,[vd]:r.ONE_MINUS_SRC_COLOR,[Ga]:r.ONE_MINUS_SRC_ALPHA,[wd]:r.ONE_MINUS_DST_COLOR,[yd]:r.ONE_MINUS_DST_ALPHA,[bd]:r.CONSTANT_COLOR,[Ed]:r.ONE_MINUS_CONSTANT_COLOR,[Ad]:r.CONSTANT_ALPHA,[Td]:r.ONE_MINUS_CONSTANT_ALPHA};function Pt(V,ft,xt,Lt,bt,Gt,ne,_e,Re,Qt){if(V===di){g===!0&&(zt(r.BLEND),g=!1);return}if(g===!1&&(Ct(r.BLEND),g=!0),V!==dd){if(V!==_||Qt!==O){if((v!==Ci||w!==Ci)&&(r.blendEquation(r.FUNC_ADD),v=Ci,w=Ci),Qt)switch(V){case Ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.ONE,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,C=null,T=null,k=null,b.set(0,0,0),S=0,_=V,O=Qt}return}bt=bt||ft,Gt=Gt||xt,ne=ne||Lt,(ft!==v||bt!==w)&&(r.blendEquationSeparate(It[ft],It[bt]),v=ft,w=bt),(xt!==y||Lt!==C||Gt!==T||ne!==k)&&(r.blendFuncSeparate(Vt[xt],Vt[Lt],Vt[Gt],Vt[ne]),y=xt,C=Lt,T=Gt,k=ne),(_e.equals(b)===!1||Re!==S)&&(r.blendColor(_e.r,_e.g,_e.b,Re),b.copy(_e),S=Re),_=V,O=!1}function de(V,ft){V.side===En?zt(r.CULL_FACE):Ct(r.CULL_FACE);let xt=V.side===en;ft&&(xt=!xt),Ht(xt),V.blending===Ni&&V.transparent===!1?Pt(di):Pt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Lt=V.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(V){G!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),G=V)}function I(V){V!==ld?(Ct(r.CULL_FACE),V!==F&&(V===Tc?r.cullFace(r.BACK):V===hd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),F=V}function E(V){V!==P&&(R&&r.lineWidth(V),P=V)}function tt(V,ft,xt){V?(Ct(r.POLYGON_OFFSET_FILL),(U!==ft||N!==xt)&&(r.polygonOffset(ft,xt),U=ft,N=xt)):zt(r.POLYGON_OFFSET_FILL)}function D(V){V?Ct(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function H(V){V===void 0&&(V=r.TEXTURE0+et-1),st!==V&&(r.activeTexture(V),st=V)}function B(V,ft,xt){xt===void 0&&(st===null?xt=r.TEXTURE0+et-1:xt=st);let Lt=at[xt];Lt===void 0&&(Lt={type:void 0,texture:void 0},at[xt]=Lt),(Lt.type!==V||Lt.texture!==ft)&&(st!==xt&&(r.activeTexture(xt),st=xt),r.bindTexture(V,ft||Rt[V]),Lt.type=V,Lt.texture=ft)}function q(){const V=at[st];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(V){mt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),mt.copy(V))}function _t(V){wt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),wt.copy(V))}function Dt(V,ft){let xt=d.get(ft);xt===void 0&&(xt=new WeakMap,d.set(ft,xt));let Lt=xt.get(V);Lt===void 0&&(Lt=r.getUniformBlockIndex(ft,V.name),xt.set(V,Lt))}function Tt(V,ft){const Lt=d.get(ft).get(V);h.get(ft)!==Lt&&(r.uniformBlockBinding(ft,Lt,V.__bindingPointIndex),h.set(ft,Lt))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},st=null,at={},f={},m=new WeakMap,x=[],p=null,g=!1,_=null,v=null,y=null,C=null,w=null,T=null,k=null,b=new Bt(0,0,0),S=0,O=!1,G=null,F=null,P=null,U=null,N=null,mt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ct,disable:zt,bindFramebuffer:qt,drawBuffers:J,useProgram:Te,setBlending:Pt,setMaterial:de,setFlipSided:Ht,setCullFace:I,setLineWidth:E,setPolygonOffset:tt,setScissorTest:D,activeTexture:H,bindTexture:B,unbindTexture:q,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:Q,texImage3D:lt,updateUBOMapping:Dt,uniformBlockBinding:Tt,texStorage2D:dt,texStorage3D:ut,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:ct,scissor:St,viewport:_t,reset:pt}}function Ex(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return f?new OffscreenCanvas(I,E):ir("canvas")}function x(I,E,tt,D){let H=1;if((I.width>D||I.height>D)&&(H=D/Math.max(I.width,I.height)),H<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const B=E?mo:Math.floor,q=B(H*I.width),Z=B(H*I.height);d===void 0&&(d=m(q,Z));const K=tt?m(q,Z):d;return K.width=q,K.height=Z,K.getContext("2d").drawImage(I,0,0,q,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+q+"x"+Z+")."),K}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function p(I){return Ya(I.width)&&Ya(I.height)}function g(I){return a?!1:I.wrapS!==an||I.wrapT!==an||I.minFilter!==ke&&I.minFilter!==dn}function _(I,E){return I.generateMipmaps&&E&&I.minFilter!==ke&&I.minFilter!==dn}function v(I){r.generateMipmap(I)}function y(I,E,tt,D,H=!1){if(a===!1)return E;if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let B=E;if(E===r.RED&&(tt===r.FLOAT&&(B=r.R32F),tt===r.HALF_FLOAT&&(B=r.R16F),tt===r.UNSIGNED_BYTE&&(B=r.R8)),E===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(B=r.R8UI),tt===r.UNSIGNED_SHORT&&(B=r.R16UI),tt===r.UNSIGNED_INT&&(B=r.R32UI),tt===r.BYTE&&(B=r.R8I),tt===r.SHORT&&(B=r.R16I),tt===r.INT&&(B=r.R32I)),E===r.RG&&(tt===r.FLOAT&&(B=r.RG32F),tt===r.HALF_FLOAT&&(B=r.RG16F),tt===r.UNSIGNED_BYTE&&(B=r.RG8)),E===r.RGBA){const q=H?ho:se.getTransfer(D);tt===r.FLOAT&&(B=r.RGBA32F),tt===r.HALF_FLOAT&&(B=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(B=q===me?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(B=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(B=r.RGB5_A1)}return(B===r.R16F||B===r.R32F||B===r.RG16F||B===r.RG32F||B===r.RGBA16F||B===r.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function C(I,E,tt){return _(I,tt)===!0||I.isFramebufferTexture&&I.minFilter!==ke&&I.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){return I===ke||I===Uc||I===zo?r.NEAREST:r.LINEAR}function T(I){const E=I.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&h.delete(E)}function k(I){const E=I.target;E.removeEventListener("dispose",k),O(E)}function b(I){const E=n.get(I);if(E.__webglInit===void 0)return;const tt=I.source,D=u.get(tt);if(D){const H=D[E.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(I),Object.keys(D).length===0&&u.delete(tt)}n.remove(I)}function S(I){const E=n.get(I);r.deleteTexture(E.__webglTexture);const tt=I.source,D=u.get(tt);delete D[E.__cacheKey],o.memory.textures--}function O(I){const E=I.texture,tt=n.get(I),D=n.get(E);if(D.__webglTexture!==void 0&&(r.deleteTexture(D.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(tt.__webglFramebuffer[H]))for(let B=0;B<tt.__webglFramebuffer[H].length;B++)r.deleteFramebuffer(tt.__webglFramebuffer[H][B]);else r.deleteFramebuffer(tt.__webglFramebuffer[H]);tt.__webglDepthbuffer&&r.deleteRenderbuffer(tt.__webglDepthbuffer[H])}else{if(Array.isArray(tt.__webglFramebuffer))for(let H=0;H<tt.__webglFramebuffer.length;H++)r.deleteFramebuffer(tt.__webglFramebuffer[H]);else r.deleteFramebuffer(tt.__webglFramebuffer);if(tt.__webglDepthbuffer&&r.deleteRenderbuffer(tt.__webglDepthbuffer),tt.__webglMultisampledFramebuffer&&r.deleteFramebuffer(tt.__webglMultisampledFramebuffer),tt.__webglColorRenderbuffer)for(let H=0;H<tt.__webglColorRenderbuffer.length;H++)tt.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(tt.__webglColorRenderbuffer[H]);tt.__webglDepthRenderbuffer&&r.deleteRenderbuffer(tt.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let H=0,B=E.length;H<B;H++){const q=n.get(E[H]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(E[H])}n.remove(E),n.remove(I)}let G=0;function F(){G=0}function P(){const I=G;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),G+=1,I}function U(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function N(I,E){const tt=n.get(I);if(I.isVideoTexture&&de(I),I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){const D=I.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(tt,I,E);return}}e.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+E)}function et(I,E){const tt=n.get(I);if(I.version>0&&tt.__version!==I.version){mt(tt,I,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+E)}function R(I,E){const tt=n.get(I);if(I.version>0&&tt.__version!==I.version){mt(tt,I,E);return}e.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+E)}function z(I,E){const tt=n.get(I);if(I.version>0&&tt.__version!==I.version){wt(tt,I,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+E)}const X={[Jn]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[Xa]:r.MIRRORED_REPEAT},st={[ke]:r.NEAREST,[Uc]:r.NEAREST_MIPMAP_NEAREST,[zo]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[Wd]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},at={[of]:r.NEVER,[df]:r.ALWAYS,[af]:r.LESS,[au]:r.LEQUAL,[cf]:r.EQUAL,[uf]:r.GEQUAL,[lf]:r.GREATER,[hf]:r.NOTEQUAL};function nt(I,E,tt){if(tt?(r.texParameteri(I,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,X[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,st[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,st[E.minFilter])):(r.texParameteri(I,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(I,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==an||E.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(I,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(I,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==ke&&E.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ke||E.minFilter!==zo&&E.minFilter!==er||E.type===Qn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===nr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(I,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ht(I,E){let tt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));const D=E.source;let H=u.get(D);H===void 0&&(H={},u.set(D,H));const B=U(E);if(B!==I.__cacheKey){H[B]===void 0&&(H[B]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),H[B].usedTimes++;const q=H[I.__cacheKey];q!==void 0&&(H[I.__cacheKey].usedTimes--,q.usedTimes===0&&S(E)),I.__cacheKey=B,I.__webglTexture=H[B].texture}return tt}function mt(I,E,tt){let D=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(D=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(D=r.TEXTURE_3D);const H=ht(I,E),B=E.source;e.bindTexture(D,I.__webglTexture,r.TEXTURE0+tt);const q=n.get(B);if(B.version!==q.__version||H===!0){e.activeTexture(r.TEXTURE0+tt);const Z=se.getPrimaries(se.workingColorSpace),K=E.colorSpace===mn?null:se.getPrimaries(E.colorSpace),Y=E.colorSpace===mn||Z===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const $=g(E)&&p(E.image)===!1;let W=x(E.image,$,!1,i.maxTextureSize);W=Ht(E,W);const ct=p(W)||a,dt=s.convert(E.format,E.colorSpace);let ut=s.convert(E.type),Q=y(E.internalFormat,dt,ut,E.colorSpace,E.isVideoTexture);nt(D,E,ct);let lt;const St=E.mipmaps,_t=a&&E.isVideoTexture!==!0&&Q!==su,Dt=q.__version===void 0||H===!0,Tt=C(E,W,ct);if(E.isDepthTexture)Q=r.DEPTH_COMPONENT,a?E.type===Qn?Q=r.DEPTH_COMPONENT32F:E.type===hi?Q=r.DEPTH_COMPONENT24:E.type===Fi?Q=r.DEPTH24_STENCIL8:Q=r.DEPTH_COMPONENT16:E.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===zi&&Q===r.DEPTH_COMPONENT&&E.type!==oc&&E.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hi,ut=s.convert(E.type)),E.format===As&&Q===r.DEPTH_COMPONENT&&(Q=r.DEPTH_STENCIL,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,ut=s.convert(E.type))),Dt&&(_t?e.texStorage2D(r.TEXTURE_2D,1,Q,W.width,W.height):e.texImage2D(r.TEXTURE_2D,0,Q,W.width,W.height,0,dt,ut,null));else if(E.isDataTexture)if(St.length>0&&ct){_t&&Dt&&e.texStorage2D(r.TEXTURE_2D,Tt,Q,St[0].width,St[0].height);for(let pt=0,V=St.length;pt<V;pt++)lt=St[pt],_t?e.texSubImage2D(r.TEXTURE_2D,pt,0,0,lt.width,lt.height,dt,ut,lt.data):e.texImage2D(r.TEXTURE_2D,pt,Q,lt.width,lt.height,0,dt,ut,lt.data);E.generateMipmaps=!1}else _t?(Dt&&e.texStorage2D(r.TEXTURE_2D,Tt,Q,W.width,W.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,W.width,W.height,dt,ut,W.data)):e.texImage2D(r.TEXTURE_2D,0,Q,W.width,W.height,0,dt,ut,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_t&&Dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Q,St[0].width,St[0].height,W.depth);for(let pt=0,V=St.length;pt<V;pt++)lt=St[pt],E.format!==pn?dt!==null?_t?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,lt.width,lt.height,W.depth,dt,lt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Q,lt.width,lt.height,W.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?e.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,lt.width,lt.height,W.depth,dt,ut,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,pt,Q,lt.width,lt.height,W.depth,0,dt,ut,lt.data)}else{_t&&Dt&&e.texStorage2D(r.TEXTURE_2D,Tt,Q,St[0].width,St[0].height);for(let pt=0,V=St.length;pt<V;pt++)lt=St[pt],E.format!==pn?dt!==null?_t?e.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,lt.width,lt.height,dt,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,pt,Q,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?e.texSubImage2D(r.TEXTURE_2D,pt,0,0,lt.width,lt.height,dt,ut,lt.data):e.texImage2D(r.TEXTURE_2D,pt,Q,lt.width,lt.height,0,dt,ut,lt.data)}else if(E.isDataArrayTexture)_t?(Dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Q,W.width,W.height,W.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,dt,ut,W.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,W.width,W.height,W.depth,0,dt,ut,W.data);else if(E.isData3DTexture)_t?(Dt&&e.texStorage3D(r.TEXTURE_3D,Tt,Q,W.width,W.height,W.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,dt,ut,W.data)):e.texImage3D(r.TEXTURE_3D,0,Q,W.width,W.height,W.depth,0,dt,ut,W.data);else if(E.isFramebufferTexture){if(Dt)if(_t)e.texStorage2D(r.TEXTURE_2D,Tt,Q,W.width,W.height);else{let pt=W.width,V=W.height;for(let ft=0;ft<Tt;ft++)e.texImage2D(r.TEXTURE_2D,ft,Q,pt,V,0,dt,ut,null),pt>>=1,V>>=1}}else if(St.length>0&&ct){_t&&Dt&&e.texStorage2D(r.TEXTURE_2D,Tt,Q,St[0].width,St[0].height);for(let pt=0,V=St.length;pt<V;pt++)lt=St[pt],_t?e.texSubImage2D(r.TEXTURE_2D,pt,0,0,dt,ut,lt):e.texImage2D(r.TEXTURE_2D,pt,Q,dt,ut,lt);E.generateMipmaps=!1}else _t?(Dt&&e.texStorage2D(r.TEXTURE_2D,Tt,Q,W.width,W.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,ut,W)):e.texImage2D(r.TEXTURE_2D,0,Q,dt,ut,W);_(E,ct)&&v(D),q.__version=B.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,tt){if(E.image.length!==6)return;const D=ht(I,E),H=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+tt);const B=n.get(H);if(H.version!==B.__version||D===!0){e.activeTexture(r.TEXTURE0+tt);const q=se.getPrimaries(se.workingColorSpace),Z=E.colorSpace===mn?null:se.getPrimaries(E.colorSpace),K=E.colorSpace===mn||q===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const Y=E.isCompressedTexture||E.image[0].isCompressedTexture,$=E.image[0]&&E.image[0].isDataTexture,W=[];for(let pt=0;pt<6;pt++)!Y&&!$?W[pt]=x(E.image[pt],!1,!0,i.maxCubemapSize):W[pt]=$?E.image[pt].image:E.image[pt],W[pt]=Ht(E,W[pt]);const ct=W[0],dt=p(ct)||a,ut=s.convert(E.format,E.colorSpace),Q=s.convert(E.type),lt=y(E.internalFormat,ut,Q,E.colorSpace),St=a&&E.isVideoTexture!==!0,_t=B.__version===void 0||D===!0;let Dt=C(E,ct,dt);nt(r.TEXTURE_CUBE_MAP,E,dt);let Tt;if(Y){St&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,lt,ct.width,ct.height);for(let pt=0;pt<6;pt++){Tt=W[pt].mipmaps;for(let V=0;V<Tt.length;V++){const ft=Tt[V];E.format!==pn?ut!==null?St?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V,lt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V,0,0,ft.width,ft.height,ut,Q,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V,lt,ft.width,ft.height,0,ut,Q,ft.data)}}}else{Tt=E.mipmaps,St&&_t&&(Tt.length>0&&Dt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,lt,W[0].width,W[0].height));for(let pt=0;pt<6;pt++)if($){St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,W[pt].width,W[pt].height,ut,Q,W[pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,lt,W[pt].width,W[pt].height,0,ut,Q,W[pt].data);for(let V=0;V<Tt.length;V++){const xt=Tt[V].image[pt].image;St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V+1,0,0,xt.width,xt.height,ut,Q,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V+1,lt,xt.width,xt.height,0,ut,Q,xt.data)}}else{St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ut,Q,W[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,lt,ut,Q,W[pt]);for(let V=0;V<Tt.length;V++){const ft=Tt[V];St?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V+1,0,0,ut,Q,ft.image[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,V+1,lt,ut,Q,ft.image[pt])}}}_(E,dt)&&v(r.TEXTURE_CUBE_MAP),B.__version=H.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function gt(I,E,tt,D,H,B){const q=s.convert(tt.format,tt.colorSpace),Z=s.convert(tt.type),K=y(tt.internalFormat,q,Z,tt.colorSpace);if(!n.get(E).__hasExternalTextures){const $=Math.max(1,E.width>>B),W=Math.max(1,E.height>>B);H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?e.texImage3D(H,B,K,$,W,E.depth,0,q,Z,null):e.texImage2D(H,B,K,$,W,0,q,Z,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Pt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,D,H,n.get(tt).__webglTexture,0,Vt(E)):(H===r.TEXTURE_2D||H>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,D,H,n.get(tt).__webglTexture,B),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(I,E,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let D=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(tt||Pt(E)){const H=E.depthTexture;H&&H.isDepthTexture&&(H.type===Qn?D=r.DEPTH_COMPONENT32F:H.type===hi&&(D=r.DEPTH_COMPONENT24));const B=Vt(E);Pt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,D,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,B,D,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,D,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){const D=Vt(E);tt&&Pt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,r.DEPTH24_STENCIL8,E.width,E.height):Pt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,I)}else{const D=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let H=0;H<D.length;H++){const B=D[H],q=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),K=y(B.internalFormat,q,Z,B.colorSpace),Y=Vt(E);tt&&Pt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,K,E.width,E.height):Pt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const D=n.get(E.depthTexture).__webglTexture,H=Vt(E);if(E.depthTexture.format===zi)Pt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0);else if(E.depthTexture.format===As)Pt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function zt(I){const E=n.get(I),tt=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,I)}else if(tt){E.__webglDepthbuffer=[];for(let D=0;D<6;D++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[D]),E.__webglDepthbuffer[D]=r.createRenderbuffer(),Rt(E.__webglDepthbuffer[D],I,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Rt(E.__webglDepthbuffer,I,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(I,E,tt){const D=n.get(I);E!==void 0&&gt(D.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&zt(I)}function J(I){const E=I.texture,tt=n.get(I),D=n.get(E);I.addEventListener("dispose",k),I.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=r.createTexture()),D.__version=E.version,o.memory.textures++);const H=I.isWebGLCubeRenderTarget===!0,B=I.isWebGLMultipleRenderTargets===!0,q=p(I)||a;if(H){tt.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(a&&E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Z]=[];for(let K=0;K<E.mipmaps.length;K++)tt.__webglFramebuffer[Z][K]=r.createFramebuffer()}else tt.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Z=0;Z<E.mipmaps.length;Z++)tt.__webglFramebuffer[Z]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(B)if(i.drawBuffers){const Z=I.texture;for(let K=0,Y=Z.length;K<Y;K++){const $=n.get(Z[K]);$.__webglTexture===void 0&&($.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Pt(I)===!1){const Z=B?E:[E];tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const Y=Z[K];tt.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[K]);const $=s.convert(Y.format,Y.colorSpace),W=s.convert(Y.type),ct=y(Y.internalFormat,$,W,Y.colorSpace,I.isXRRenderTarget===!0),dt=Vt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,ct,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,tt.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(tt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H){e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture),nt(r.TEXTURE_CUBE_MAP,E,q);for(let Z=0;Z<6;Z++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)gt(tt.__webglFramebuffer[Z][K],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else gt(tt.__webglFramebuffer[Z],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);_(E,q)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(B){const Z=I.texture;for(let K=0,Y=Z.length;K<Y;K++){const $=Z[K],W=n.get($);e.bindTexture(r.TEXTURE_2D,W.__webglTexture),nt(r.TEXTURE_2D,$,q),gt(tt.__webglFramebuffer,I,$,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,0),_($,q)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let Z=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?Z=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Z,D.__webglTexture),nt(Z,E,q),a&&E.mipmaps&&E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)gt(tt.__webglFramebuffer[K],I,E,r.COLOR_ATTACHMENT0,Z,K);else gt(tt.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,Z,0);_(E,q)&&v(Z),e.unbindTexture()}I.depthBuffer&&zt(I)}function Te(I){const E=p(I)||a,tt=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let D=0,H=tt.length;D<H;D++){const B=tt[D];if(_(B,E)){const q=I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Z=n.get(B).__webglTexture;e.bindTexture(q,Z),v(q),e.unbindTexture()}}}function It(I){if(a&&I.samples>0&&Pt(I)===!1){const E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],tt=I.width,D=I.height;let H=r.COLOR_BUFFER_BIT;const B=[],q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=n.get(I),K=I.isWebGLMultipleRenderTargets===!0;if(K)for(let Y=0;Y<E.length;Y++)e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let Y=0;Y<E.length;Y++){B.push(r.COLOR_ATTACHMENT0+Y),I.depthBuffer&&B.push(q);const $=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if($===!1&&(I.depthBuffer&&(H|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&(H|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Y]),$===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[q]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[q])),K){const W=n.get(E[Y]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,tt,D,0,0,tt,D,H,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Y=0;Y<E.length;Y++){e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Y]);const $=n.get(E[Y]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,$,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function Vt(I){return Math.min(i.maxSamples,I.samples)}function Pt(I){const E=n.get(I);return a&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(I){const E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ht(I,E){const tt=I.colorSpace,D=I.format,H=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ja||tt!==ni&&tt!==mn&&(se.getTransfer(tt)===me?a===!1?t.has("EXT_sRGB")===!0&&D===pn?(I.format=ja,I.minFilter=dn,I.generateMipmaps=!1):E=lu.sRGBToLinear(E):(D!==pn||H!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=et,this.setTexture3D=R,this.setTextureCube=z,this.rebindTextures=qt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Pt}function Ax(r,t,e){const n=e.isWebGL2;function i(s,o=mn){let a;const c=se.getTransfer(o);if(s===pi)return r.UNSIGNED_BYTE;if(s===Qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===tu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xd)return r.BYTE;if(s===qd)return r.SHORT;if(s===oc)return r.UNSIGNED_SHORT;if(s===Jh)return r.INT;if(s===hi)return r.UNSIGNED_INT;if(s===Qn)return r.FLOAT;if(s===nr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jd)return r.ALPHA;if(s===pn)return r.RGBA;if(s===Yd)return r.LUMINANCE;if(s===Kd)return r.LUMINANCE_ALPHA;if(s===zi)return r.DEPTH_COMPONENT;if(s===As)return r.DEPTH_STENCIL;if(s===ja)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zd)return r.RED;if(s===eu)return r.RED_INTEGER;if(s===$d)return r.RG;if(s===nu)return r.RG_INTEGER;if(s===iu)return r.RGBA_INTEGER;if(s===Bo||s===Oo||s===ko||s===Vo)if(c===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nc||s===Fc||s===zc||s===Bc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===su)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oc||s===kc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Oc)return c===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vc||s===Hc||s===Gc||s===Wc||s===Xc||s===qc||s===jc||s===Yc||s===Kc||s===Zc||s===$c||s===Jc||s===Qc||s===tl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$c)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qc)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ho||s===el||s===nl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ho)return c===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===el)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jd||s===il||s===sl||s===rl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ho)return a.COMPRESSED_RED_RGTC1_EXT;if(s===il)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Tx extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nn extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rx={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cx extends Hi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const x=e.getContextAttributes();let p=null,g=null;const _=[],v=[],y=new Nt;let C=null;const w=new Je;w.layers.enable(1),w.viewport=new ee;const T=new Je;T.layers.enable(2),T.viewport=new ee;const k=[w,T],b=new Tx;b.layers.enable(1),b.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=_[nt];return ht===void 0&&(ht=new da,_[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=_[nt];return ht===void 0&&(ht=new da,_[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=_[nt];return ht===void 0&&(ht=new da,_[nt]=ht),ht.getHandSpace()};function G(nt){const ht=v.indexOf(nt.inputSource);if(ht===-1)return;const mt=_[ht];mt!==void 0&&(mt.update(nt.inputSource,nt.frame,l||o),mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function F(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",P);for(let nt=0;nt<_.length;nt++){const ht=v[nt];ht!==null&&(v[nt]=null,_[nt].disconnect(ht))}S=null,O=null,t.setRenderTarget(p),f=null,u=null,d=null,i=null,g=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(nt){if(i=nt,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",F),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ht={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new Bi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ht=null,mt=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=x.stencil?As:zi,mt=x.stencil?Fi:hi);const gt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new Bi(u.textureWidth,u.textureHeight,{format:pn,type:pi,depthTexture:new _u(u.textureWidth,u.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Rt=t.properties.get(g);Rt.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(nt){for(let ht=0;ht<nt.removed.length;ht++){const mt=nt.removed[ht],wt=v.indexOf(mt);wt>=0&&(v[wt]=null,_[wt].disconnect(mt))}for(let ht=0;ht<nt.added.length;ht++){const mt=nt.added[ht];let wt=v.indexOf(mt);if(wt===-1){for(let Rt=0;Rt<_.length;Rt++)if(Rt>=v.length){v.push(mt),wt=Rt;break}else if(v[Rt]===null){v[Rt]=mt,wt=Rt;break}if(wt===-1)break}const gt=_[wt];gt&&gt.connect(mt)}}const U=new A,N=new A;function et(nt,ht,mt){U.setFromMatrixPosition(ht.matrixWorld),N.setFromMatrixPosition(mt.matrixWorld);const wt=U.distanceTo(N),gt=ht.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ct=gt[14]/(gt[10]-1),zt=gt[14]/(gt[10]+1),qt=(gt[9]+1)/gt[5],J=(gt[9]-1)/gt[5],Te=(gt[8]-1)/gt[0],It=(Rt[8]+1)/Rt[0],Vt=Ct*Te,Pt=Ct*It,de=wt/(-Te+It),Ht=de*-Te;ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ht),nt.translateZ(de),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert();const I=Ct+de,E=zt+de,tt=Vt-Ht,D=Pt+(wt-Ht),H=qt*zt/E*I,B=J*zt/E*I;nt.projectionMatrix.makePerspective(tt,D,H,B,I,E),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}function R(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(i===null)return;b.near=T.near=w.near=nt.near,b.far=T.far=w.far=nt.far,(S!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,O=b.far);const ht=nt.parent,mt=b.cameras;R(b,ht);for(let wt=0;wt<mt.length;wt++)R(mt[wt],ht);mt.length===2?et(b,w,T):b.projectionMatrix.copy(w.projectionMatrix),z(nt,b,ht)};function z(nt,ht,mt){mt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ts*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(nt){c=nt,u!==null&&(u.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)};let X=null;function st(nt,ht){if(h=ht.getViewerPose(l||o),m=ht,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let wt=!1;mt.length!==b.cameras.length&&(b.cameras.length=0,wt=!0);for(let gt=0;gt<mt.length;gt++){const Rt=mt[gt];let Ct=null;if(f!==null)Ct=f.getViewport(Rt);else{const qt=d.getViewSubImage(u,Rt);Ct=qt.viewport,gt===0&&(t.setRenderTargetTextures(g,qt.colorTexture,u.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(g))}let zt=k[gt];zt===void 0&&(zt=new Je,zt.layers.enable(gt),zt.viewport=new ee,k[gt]=zt),zt.matrix.fromArray(Rt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Rt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),gt===0&&(b.matrix.copy(zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),wt===!0&&b.cameras.push(zt)}}for(let mt=0;mt<_.length;mt++){const wt=v[mt],gt=_[mt];wt!==null&&gt!==void 0&&gt.update(wt,ht,l||o)}X&&X(nt,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}const at=new vu;at.setAnimationLoop(st),this.setAnimationLoop=function(nt){X=nt},this.dispose=function(){}}}function Px(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,mu(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,v):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===en&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===en&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*v,e(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),t.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lx(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(m(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(_,C);const w=t.render.frame;s[_.id]!==w&&(u(_),s[_.id]=w)}function h(_){const v=d();_.__bindingPointIndex=v;const y=r.createBuffer(),C=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=i[_.id],y=_.uniforms,C=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,T=y.length;w<T;w++){const k=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,S=k.length;b<S;b++){const O=k[b];if(f(O,w,b,C)===!0){const G=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let U=0;U<F.length;U++){const N=F[U],et=x(N);typeof N=="number"||typeof N=="boolean"?(O.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,G+P,O.__data)):N.isMatrix3?(O.__data[0]=N.elements[0],O.__data[1]=N.elements[1],O.__data[2]=N.elements[2],O.__data[3]=0,O.__data[4]=N.elements[3],O.__data[5]=N.elements[4],O.__data[6]=N.elements[5],O.__data[7]=0,O.__data[8]=N.elements[6],O.__data[9]=N.elements[7],O.__data[10]=N.elements[8],O.__data[11]=0):(N.toArray(O.__data,P),P+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,v,y,C){const w=_.value,T=v+"_"+y;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const k=C[T];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return C[T]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function m(_){const v=_.uniforms;let y=0;const C=16;for(let T=0,k=v.length;T<k;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,O=b.length;S<O;S++){const G=b[S],F=Array.isArray(G.value)?G.value:[G.value];for(let P=0,U=F.length;P<U;P++){const N=F[P],et=x(N),R=y%C;R!==0&&C-R<et.boundary&&(y+=C-R),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=et.storage}}}const w=y%C;return w>0&&(y+=C-w),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class Eu{constructor(t={}){const{canvas:e=Tf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let y=!1,C=0,w=0,T=null,k=-1,b=null;const S=new ee,O=new ee;let G=null;const F=new Bt(0);let P=0,U=e.width,N=e.height,et=1,R=null,z=null;const X=new ee(0,0,U,N),st=new ee(0,0,U,N);let at=!1;const nt=new dc;let ht=!1,mt=!1,wt=null;const gt=new Ft,Rt=new Nt,Ct=new A,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return T===null?et:1}let J=n;function Te(L,j){for(let rt=0;rt<L.length;rt++){const ot=L[rt],it=e.getContext(ot,j);if(it!==null)return it}return null}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",ft,!1),J===null){const j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),J=Te(j,L),J===null)throw Te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let It,Vt,Pt,de,Ht,I,E,tt,D,H,B,q,Z,K,Y,$,W,ct,dt,ut,Q,lt,St,_t;function Dt(){It=new Vg(J),Vt=new Ng(J,It,t),It.init(Vt),lt=new Ax(J,It,Vt),Pt=new bx(J,It,Vt),de=new Wg(J),Ht=new hx,I=new Ex(J,It,Pt,Ht,Vt,lt,de),E=new zg(v),tt=new kg(v),D=new Jf(J,Vt),St=new Dg(J,It,D,Vt),H=new Hg(J,D,de,St),B=new Yg(J,H,D,de),dt=new jg(J,Vt,I),$=new Fg(Ht),q=new lx(v,E,tt,It,Vt,St,$),Z=new Px(v,Ht),K=new dx,Y=new vx(It,Vt),ct=new Ig(v,E,tt,Pt,B,u,c),W=new Sx(v,B,Vt),_t=new Lx(J,de,Vt,Pt),ut=new Ug(J,It,de,Vt),Q=new Gg(J,It,de,Vt),de.programs=q.programs,v.capabilities=Vt,v.extensions=It,v.properties=Ht,v.renderLists=K,v.shadowMap=W,v.state=Pt,v.info=de}Dt();const Tt=new Cx(v,J);this.xr=Tt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const L=It.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=It.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(L){L!==void 0&&(et=L,this.setSize(U,N,!1))},this.getSize=function(L){return L.set(U,N)},this.setSize=function(L,j,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,N=j,e.width=Math.floor(L*et),e.height=Math.floor(j*et),rt===!0&&(e.style.width=L+"px",e.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(U*et,N*et).floor()},this.setDrawingBufferSize=function(L,j,rt){U=L,N=j,et=rt,e.width=Math.floor(L*rt),e.height=Math.floor(j*rt),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(S)},this.getViewport=function(L){return L.copy(X)},this.setViewport=function(L,j,rt,ot){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,j,rt,ot),Pt.viewport(S.copy(X).multiplyScalar(et).floor())},this.getScissor=function(L){return L.copy(st)},this.setScissor=function(L,j,rt,ot){L.isVector4?st.set(L.x,L.y,L.z,L.w):st.set(L,j,rt,ot),Pt.scissor(O.copy(st).multiplyScalar(et).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(L){Pt.setScissorTest(at=L)},this.setOpaqueSort=function(L){R=L},this.setTransparentSort=function(L){z=L},this.getClearColor=function(L){return L.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(L=!0,j=!0,rt=!0){let ot=0;if(L){let it=!1;if(T!==null){const Et=T.texture.format;it=Et===iu||Et===nu||Et===eu}if(it){const Et=T.texture.type,Ut=Et===pi||Et===hi||Et===oc||Et===Fi||Et===Qh||Et===tu,Ot=ct.getClearColor(),kt=ct.getClearAlpha(),Yt=Ot.r,Wt=Ot.g,Xt=Ot.b;Ut?(f[0]=Yt,f[1]=Wt,f[2]=Xt,f[3]=kt,J.clearBufferuiv(J.COLOR,0,f)):(m[0]=Yt,m[1]=Wt,m[2]=Xt,m[3]=kt,J.clearBufferiv(J.COLOR,0,m))}else ot|=J.COLOR_BUFFER_BIT}j&&(ot|=J.DEPTH_BUFFER_BIT),rt&&(ot|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),K.dispose(),Y.dispose(),Ht.dispose(),E.dispose(),tt.dispose(),B.dispose(),St.dispose(),_t.dispose(),q.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Re),Tt.removeEventListener("sessionend",Qt),wt&&(wt.dispose(),wt=null),ye.stop()};function pt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const L=de.autoReset,j=W.enabled,rt=W.autoUpdate,ot=W.needsUpdate,it=W.type;Dt(),de.autoReset=L,W.enabled=j,W.autoUpdate=rt,W.needsUpdate=ot,W.type=it}function ft(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xt(L){const j=L.target;j.removeEventListener("dispose",xt),Lt(j)}function Lt(L){bt(L),Ht.remove(L)}function bt(L){const j=Ht.get(L).programs;j!==void 0&&(j.forEach(function(rt){q.releaseProgram(rt)}),L.isShaderMaterial&&q.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,rt,ot,it,Et){j===null&&(j=zt);const Ut=it.isMesh&&it.matrixWorld.determinant()<0,Ot=_i(L,j,rt,ot,it);Pt.setMaterial(ot,Ut);let kt=rt.index,Yt=1;if(ot.wireframe===!0){if(kt=H.getWireframeAttribute(rt),kt===void 0)return;Yt=2}const Wt=rt.drawRange,Xt=rt.attributes.position;let Se=Wt.start*Yt,nn=(Wt.start+Wt.count)*Yt;Et!==null&&(Se=Math.max(Se,Et.start*Yt),nn=Math.min(nn,(Et.start+Et.count)*Yt)),kt!==null?(Se=Math.max(Se,0),nn=Math.min(nn,kt.count)):Xt!=null&&(Se=Math.max(Se,0),nn=Math.min(nn,Xt.count));const Ue=nn-Se;if(Ue<0||Ue===1/0)return;St.setup(it,ot,Ot,rt,kt);let zn,xe=ut;if(kt!==null&&(zn=D.get(kt),xe=Q,xe.setIndex(zn)),it.isMesh)ot.wireframe===!0?(Pt.setLineWidth(ot.wireframeLinewidth*qt()),xe.setMode(J.LINES)):xe.setMode(J.TRIANGLES);else if(it.isLine){let $t=ot.linewidth;$t===void 0&&($t=1),Pt.setLineWidth($t*qt()),it.isLineSegments?xe.setMode(J.LINES):it.isLineLoop?xe.setMode(J.LINE_LOOP):xe.setMode(J.LINE_STRIP)}else it.isPoints?xe.setMode(J.POINTS):it.isSprite&&xe.setMode(J.TRIANGLES);if(it.isBatchedMesh)xe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else if(it.isInstancedMesh)xe.renderInstances(Se,Ue,it.count);else if(rt.isInstancedBufferGeometry){const $t=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Do=Math.min(rt.instanceCount,$t);xe.renderInstances(Se,Ue,Do)}else xe.render(Se,Ue)};function Gt(L,j,rt){L.transparent===!0&&L.side===En&&L.forceSinglePass===!1?(L.side=en,L.needsUpdate=!0,ze(L,j,rt),L.side=mi,L.needsUpdate=!0,ze(L,j,rt),L.side=En):ze(L,j,rt)}this.compile=function(L,j,rt=null){rt===null&&(rt=L),p=Y.get(rt),p.init(),_.push(p),rt.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),L!==rt&&L.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),p.setupLights(v._useLegacyLights);const ot=new Set;return L.traverse(function(it){const Et=it.material;if(Et)if(Array.isArray(Et))for(let Ut=0;Ut<Et.length;Ut++){const Ot=Et[Ut];Gt(Ot,rt,it),ot.add(Ot)}else Gt(Et,rt,it),ot.add(Et)}),_.pop(),p=null,ot},this.compileAsync=function(L,j,rt=null){const ot=this.compile(L,j,rt);return new Promise(it=>{function Et(){if(ot.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){it(L);return}setTimeout(Et,10)}It.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ne=null;function _e(L){ne&&ne(L)}function Re(){ye.stop()}function Qt(){ye.start()}const ye=new vu;ye.setAnimationLoop(_e),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(L){ne=L,Tt.setAnimationLoop(L),L===null?ye.stop():ye.start()},Tt.addEventListener("sessionstart",Re),Tt.addEventListener("sessionend",Qt),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(j),j=Tt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,j,T),p=Y.get(L,_.length),p.init(),_.push(p),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),nt.setFromProjectionMatrix(gt),mt=this.localClippingEnabled,ht=$.init(this.clippingPlanes,mt),x=K.get(L,g.length),x.init(),g.push(x),Pe(L,j,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(R,z),this.info.render.frame++,ht===!0&&$.beginShadows();const rt=p.state.shadowsArray;if(W.render(rt,L,j),ht===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(x,L),p.setupLights(v._useLegacyLights),j.isArrayCamera){const ot=j.cameras;for(let it=0,Et=ot.length;it<Et;it++){const Ut=ot[it];vi(x,L,Ut,Ut.viewport)}}else vi(x,L,j);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(v,L,j),St.resetDefaultState(),k=-1,b=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Pe(L,j,rt,ot){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)rt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||nt.intersectsSprite(L)){ot&&Ct.setFromMatrixPosition(L.matrixWorld).applyMatrix4(gt);const Ut=B.update(L),Ot=L.material;Ot.visible&&x.push(L,Ut,Ot,rt,Ct.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||nt.intersectsObject(L))){const Ut=B.update(L),Ot=L.material;if(ot&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ct.copy(L.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ct.copy(Ut.boundingSphere.center)),Ct.applyMatrix4(L.matrixWorld).applyMatrix4(gt)),Array.isArray(Ot)){const kt=Ut.groups;for(let Yt=0,Wt=kt.length;Yt<Wt;Yt++){const Xt=kt[Yt],Se=Ot[Xt.materialIndex];Se&&Se.visible&&x.push(L,Ut,Se,rt,Ct.z,Xt)}}else Ot.visible&&x.push(L,Ut,Ot,rt,Ct.z,null)}}const Et=L.children;for(let Ut=0,Ot=Et.length;Ut<Ot;Ut++)Pe(Et[Ut],j,rt,ot)}function vi(L,j,rt,ot){const it=L.opaque,Et=L.transmissive,Ut=L.transparent;p.setupLightsView(rt),ht===!0&&$.setGlobalState(v.clippingPlanes,rt),Et.length>0&&Wi(it,Et,j,rt),ot&&Pt.viewport(S.copy(ot)),it.length>0&&fe(it,j,rt),Et.length>0&&fe(Et,j,rt),Ut.length>0&&fe(Ut,j,rt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Wi(L,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const Et=Vt.isWebGL2;wt===null&&(wt=new Bi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?nr:pi,minFilter:er,samples:Et?4:0})),v.getDrawingBufferSize(Rt),Et?wt.setSize(Rt.x,Rt.y):wt.setSize(mo(Rt.x),mo(Rt.y));const Ut=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(F),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ot=v.toneMapping;v.toneMapping=fi,fe(L,rt,ot),I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt);let kt=!1;for(let Yt=0,Wt=j.length;Yt<Wt;Yt++){const Xt=j[Yt],Se=Xt.object,nn=Xt.geometry,Ue=Xt.material,zn=Xt.group;if(Ue.side===En&&Se.layers.test(ot.layers)){const xe=Ue.side;Ue.side=en,Ue.needsUpdate=!0,je(Se,rt,ot,nn,Ue,zn),Ue.side=xe,Ue.needsUpdate=!0,kt=!0}}kt===!0&&(I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt)),v.setRenderTarget(Ut),v.setClearColor(F,P),v.toneMapping=Ot}function fe(L,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let it=0,Et=L.length;it<Et;it++){const Ut=L[it],Ot=Ut.object,kt=Ut.geometry,Yt=ot===null?Ut.material:ot,Wt=Ut.group;Ot.layers.test(rt.layers)&&je(Ot,j,rt,kt,Yt,Wt)}}function je(L,j,rt,ot,it,Et){L.onBeforeRender(v,j,rt,ot,it,Et),L.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),it.onBeforeRender(v,j,rt,ot,L,Et),it.transparent===!0&&it.side===En&&it.forceSinglePass===!1?(it.side=en,it.needsUpdate=!0,v.renderBufferDirect(rt,j,ot,it,L,Et),it.side=mi,it.needsUpdate=!0,v.renderBufferDirect(rt,j,ot,it,L,Et),it.side=En):v.renderBufferDirect(rt,j,ot,it,L,Et),L.onAfterRender(v,j,rt,ot,it,Et)}function ze(L,j,rt){j.isScene!==!0&&(j=zt);const ot=Ht.get(L),it=p.state.lights,Et=p.state.shadowsArray,Ut=it.state.version,Ot=q.getParameters(L,it.state,Et,j,rt),kt=q.getProgramCacheKey(Ot);let Yt=ot.programs;ot.environment=L.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(L.isMeshStandardMaterial?tt:E).get(L.envMap||ot.environment),Yt===void 0&&(L.addEventListener("dispose",xt),Yt=new Map,ot.programs=Yt);let Wt=Yt.get(kt);if(Wt!==void 0){if(ot.currentProgram===Wt&&ot.lightsStateVersion===Ut)return mr(L,Ot),Wt}else Ot.uniforms=q.getUniforms(L),L.onBuild(rt,Ot,v),L.onBeforeCompile(Ot,v),Wt=q.acquireProgram(Ot,kt),Yt.set(kt,Wt),ot.uniforms=Ot.uniforms;const Xt=ot.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xt.clippingPlanes=$.uniform),mr(L,Ot),ot.needsLights=Us(L),ot.lightsStateVersion=Ut,ot.needsLights&&(Xt.ambientLightColor.value=it.state.ambient,Xt.lightProbe.value=it.state.probe,Xt.directionalLights.value=it.state.directional,Xt.directionalLightShadows.value=it.state.directionalShadow,Xt.spotLights.value=it.state.spot,Xt.spotLightShadows.value=it.state.spotShadow,Xt.rectAreaLights.value=it.state.rectArea,Xt.ltc_1.value=it.state.rectAreaLTC1,Xt.ltc_2.value=it.state.rectAreaLTC2,Xt.pointLights.value=it.state.point,Xt.pointLightShadows.value=it.state.pointShadow,Xt.hemisphereLights.value=it.state.hemi,Xt.directionalShadowMap.value=it.state.directionalShadowMap,Xt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Xt.spotShadowMap.value=it.state.spotShadowMap,Xt.spotLightMatrix.value=it.state.spotLightMatrix,Xt.spotLightMap.value=it.state.spotLightMap,Xt.pointShadowMap.value=it.state.pointShadowMap,Xt.pointShadowMatrix.value=it.state.pointShadowMatrix),ot.currentProgram=Wt,ot.uniformsList=null,Wt}function Be(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=no.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function mr(L,j){const rt=Ht.get(L);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function _i(L,j,rt,ot,it){j.isScene!==!0&&(j=zt),I.resetTextureUnits();const Et=j.fog,Ut=ot.isMeshStandardMaterial?j.environment:null,Ot=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,kt=(ot.isMeshStandardMaterial?tt:E).get(ot.envMap||Ut),Yt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,nn=!!rt.morphAttributes.color;let Ue=fi;ot.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const zn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,xe=zn!==void 0?zn.length:0,$t=Ht.get(ot),Do=p.state.lights;if(ht===!0&&(mt===!0||L!==b)){const ln=L===b&&ot.id===k;$.setState(ot,L,ln)}let Me=!1;ot.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Do.state.version||$t.outputColorSpace!==Ot||it.isBatchedMesh&&$t.batching===!1||!it.isBatchedMesh&&$t.batching===!0||it.isInstancedMesh&&$t.instancing===!1||!it.isInstancedMesh&&$t.instancing===!0||it.isSkinnedMesh&&$t.skinning===!1||!it.isSkinnedMesh&&$t.skinning===!0||it.isInstancedMesh&&$t.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&$t.instancingColor===!1&&it.instanceColor!==null||$t.envMap!==kt||ot.fog===!0&&$t.fog!==Et||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==$.numPlanes||$t.numIntersection!==$.numIntersection)||$t.vertexAlphas!==Yt||$t.vertexTangents!==Wt||$t.morphTargets!==Xt||$t.morphNormals!==Se||$t.morphColors!==nn||$t.toneMapping!==Ue||Vt.isWebGL2===!0&&$t.morphTargetsCount!==xe)&&(Me=!0):(Me=!0,$t.__version=ot.version);let yi=$t.currentProgram;Me===!0&&(yi=ze(ot,j,it));let Ec=!1,Ns=!1,Uo=!1;const Ge=yi.getUniforms(),Mi=$t.uniforms;if(Pt.useProgram(yi.program)&&(Ec=!0,Ns=!0,Uo=!0),ot.id!==k&&(k=ot.id,Ns=!0),Ec||b!==L){Ge.setValue(J,"projectionMatrix",L.projectionMatrix),Ge.setValue(J,"viewMatrix",L.matrixWorldInverse);const ln=Ge.map.cameraPosition;ln!==void 0&&ln.setValue(J,Ct.setFromMatrixPosition(L.matrixWorld)),Vt.logarithmicDepthBuffer&&Ge.setValue(J,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(J,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Ns=!0,Uo=!0)}if(it.isSkinnedMesh){Ge.setOptional(J,it,"bindMatrix"),Ge.setOptional(J,it,"bindMatrixInverse");const ln=it.skeleton;ln&&(Vt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Ge.setValue(J,"boneTexture",ln.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}it.isBatchedMesh&&(Ge.setOptional(J,it,"batchingTexture"),Ge.setValue(J,"batchingTexture",it._matricesTexture,I));const No=rt.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0&&Vt.isWebGL2===!0)&&dt.update(it,rt,yi),(Ns||$t.receiveShadow!==it.receiveShadow)&&($t.receiveShadow=it.receiveShadow,Ge.setValue(J,"receiveShadow",it.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Mi.envMap.value=kt,Mi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Ns&&(Ge.setValue(J,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&ce(Mi,Uo),Et&&ot.fog===!0&&Z.refreshFogUniforms(Mi,Et),Z.refreshMaterialUniforms(Mi,ot,et,N,wt),no.upload(J,Be($t),Mi,I)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(no.upload(J,Be($t),Mi,I),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(J,"center",it.center),Ge.setValue(J,"modelViewMatrix",it.modelViewMatrix),Ge.setValue(J,"normalMatrix",it.normalMatrix),Ge.setValue(J,"modelMatrix",it.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const ln=ot.uniformsGroups;for(let Fo=0,od=ln.length;Fo<od;Fo++)if(Vt.isWebGL2){const Ac=ln[Fo];_t.update(Ac,yi),_t.bind(Ac,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function ce(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function Us(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,j,rt){Ht.get(L.texture).__webglTexture=j,Ht.get(L.depthTexture).__webglTexture=rt;const ot=Ht.get(L);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){const rt=Ht.get(L);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,rt=0){T=L,C=j,w=rt;let ot=!0,it=null,Et=!1,Ut=!1;if(L){const kt=Ht.get(L);kt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(J.FRAMEBUFFER,null),ot=!1):kt.__webglFramebuffer===void 0?I.setupRenderTarget(L):kt.__hasExternalTextures&&I.rebindTextures(L,Ht.get(L.texture).__webglTexture,Ht.get(L.depthTexture).__webglTexture);const Yt=L.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ut=!0);const Wt=Ht.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?it=Wt[j][rt]:it=Wt[j],Et=!0):Vt.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?it=Ht.get(L).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[rt]:it=Wt,S.copy(L.viewport),O.copy(L.scissor),G=L.scissorTest}else S.copy(X).multiplyScalar(et).floor(),O.copy(st).multiplyScalar(et).floor(),G=at;if(Pt.bindFramebuffer(J.FRAMEBUFFER,it)&&Vt.drawBuffers&&ot&&Pt.drawBuffers(L,it),Pt.viewport(S),Pt.scissor(O),Pt.setScissorTest(G),Et){const kt=Ht.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+j,kt.__webglTexture,rt)}else if(Ut){const kt=Ht.get(L.texture),Yt=j||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,kt.__webglTexture,rt||0,Yt)}k=-1},this.readRenderTargetPixels=function(L,j,rt,ot,it,Et,Ut){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Pt.bindFramebuffer(J.FRAMEBUFFER,Ot);try{const kt=L.texture,Yt=kt.format,Wt=kt.type;if(Yt!==pn&&lt.convert(Yt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xt=Wt===nr&&(It.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&It.has("EXT_color_buffer_float"));if(Wt!==pi&&lt.convert(Wt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Qn&&(Vt.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-ot&&rt>=0&&rt<=L.height-it&&J.readPixels(j,rt,ot,it,lt.convert(Yt),lt.convert(Wt),Et)}finally{const kt=T!==null?Ht.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(J.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(L,j,rt=0){const ot=Math.pow(2,-rt),it=Math.floor(j.image.width*ot),Et=Math.floor(j.image.height*ot);I.setTexture2D(j,0),J.copyTexSubImage2D(J.TEXTURE_2D,rt,0,0,L.x,L.y,it,Et),Pt.unbindTexture()},this.copyTextureToTexture=function(L,j,rt,ot=0){const it=j.image.width,Et=j.image.height,Ut=lt.convert(rt.format),Ot=lt.convert(rt.type);I.setTexture2D(rt,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,rt.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,rt.unpackAlignment),j.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ot,L.x,L.y,it,Et,Ut,Ot,j.image.data):j.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ot,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Ut,j.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ot,L.x,L.y,Ut,Ot,j.image),ot===0&&rt.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(L,j,rt,ot,it=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=L.max.x-L.min.x+1,Ut=L.max.y-L.min.y+1,Ot=L.max.z-L.min.z+1,kt=lt.convert(ot.format),Yt=lt.convert(ot.type);let Wt;if(ot.isData3DTexture)I.setTexture3D(ot,0),Wt=J.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)I.setTexture2DArray(ot,0),Wt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ot.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ot.unpackAlignment);const Xt=J.getParameter(J.UNPACK_ROW_LENGTH),Se=J.getParameter(J.UNPACK_IMAGE_HEIGHT),nn=J.getParameter(J.UNPACK_SKIP_PIXELS),Ue=J.getParameter(J.UNPACK_SKIP_ROWS),zn=J.getParameter(J.UNPACK_SKIP_IMAGES),xe=rt.isCompressedTexture?rt.mipmaps[it]:rt.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,xe.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,xe.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,L.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,L.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,L.min.z),rt.isDataTexture||rt.isData3DTexture?J.texSubImage3D(Wt,it,j.x,j.y,j.z,Et,Ut,Ot,kt,Yt,xe.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Wt,it,j.x,j.y,j.z,Et,Ut,Ot,kt,xe.data)):J.texSubImage3D(Wt,it,j.x,j.y,j.z,Et,Ut,Ot,kt,Yt,xe),J.pixelStorei(J.UNPACK_ROW_LENGTH,Xt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Se),J.pixelStorei(J.UNPACK_SKIP_PIXELS,nn),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ue),J.pixelStorei(J.UNPACK_SKIP_IMAGES,zn),it===0&&ot.generateMipmaps&&J.generateMipmap(Wt),Pt.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Pt.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,Pt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===cc?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?Tn:ou}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Tn?ue:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ix extends Eu{}Ix.prototype.isWebGL1Renderer=!0;class Dx extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ux{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new A;class go{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Au extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const ks=new A,cs=new A,ls=new A,hs=new Nt,Vs=new Nt,Tu=new Ft,Br=new A,Hs=new A,Or=new A,jl=new Nt,fa=new Nt,Yl=new Nt;class Kl extends ae{constructor(t=new Au){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ux(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new go(n,3,0,!1)),as.setAttribute("uv",new go(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;kr(Br.set(-.5,-.5,0),ls,o,cs,i,s),kr(Hs.set(.5,-.5,0),ls,o,cs,i,s),kr(Or.set(.5,.5,0),ls,o,cs,i,s),jl.set(0,0),fa.set(1,0),Yl.set(1,1);let a=t.ray.intersectTriangle(Br,Hs,Or,!1,ks);if(a===null&&(kr(Hs.set(-.5,.5,0),ls,o,cs,i,s),fa.set(0,1),a=t.ray.intersectTriangle(Br,Or,Hs,!1,ks),a===null))return;const c=t.ray.origin.distanceTo(ks);c<t.near||c>t.far||e.push({distance:c,point:ks.clone(),uv:fn.getInterpolation(ks,Br,Hs,Or,jl,fa,Yl,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function kr(r,t,e,n,i,s){hs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Vs.x=s*hs.x-i*hs.y,Vs.y=i*hs.x+s*hs.y):Vs.copy(hs),r.copy(t),r.x+=Vs.x,r.y+=Vs.y,r.applyMatrix4(Tu)}const Zl=new A,$l=new ee,Jl=new ee,Nx=new A,Ql=new Ft,Vr=new A,pa=new Gi,th=new Ft,ma=new ur;class Fx extends he{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new we),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vr),this.boundingBox.expandByPoint(Vr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vr),this.boundingSphere.expandByPoint(Vr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),t.ray.intersectsSphere(pa)!==!1&&(th.copy(i).invert(),ma.copy(t.ray).applyMatrix4(th),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ma)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;$l.fromBufferAttribute(i.attributes.skinIndex,t),Jl.fromBufferAttribute(i.attributes.skinWeight,t),Zl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Jl.getComponent(s);if(o!==0){const a=$l.getComponent(s);Ql.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Nx.copy(Zl).applyMatrix4(Ql),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Za extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zx extends Fe{constructor(t=null,e=1,n=1,i,s,o,a,c,l=ke,h=ke,d,u){super(null,o,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new Ft,Bx=new Ft;class mc{constructor(t=[],e=[]){this.uuid=Rn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ft)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ft;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Bx;eh.multiplyMatrices(a,e[s]),eh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zx(e,t,t,pn,Qn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Za),this.bones.push(o),this.boneInverses.push(new Ft().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Js extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nh=new A,ih=new A,sh=new Ft,ga=new ur,Hr=new Gi;class Ru extends ae{constructor(t=new He,e=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)nh.fromBufferAttribute(e,i-1),ih.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nh.distanceTo(ih);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=s,t.ray.intersectsSphere(Hr)===!1)return;sh.copy(i).invert(),ga.copy(t.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new A,h=new A,d=new A,u=new A,f=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const g=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=g,y=_-1;v<y;v+=f){const C=m.getX(v),w=m.getX(v+1);if(l.fromBufferAttribute(p,C),h.fromBufferAttribute(p,w),ga.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(u);k<t.near||k>t.far||e.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=g,y=_-1;v<y;v+=f){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),ga.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const rh=new A,oh=new A;class ah extends Ru{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)rh.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(oh);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ys extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ch=new Ft,$a=new ur,Gr=new Gi,Wr=new A;class xa extends ae{constructor(t=new He,e=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=s,t.ray.intersectsSphere(Gr)===!1)return;ch.copy(i).invert(),$a.copy(t.ray).applyMatrix4(ch);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=u,x=f;m<x;m++){const p=l.getX(m);Wr.fromBufferAttribute(d,p),lh(Wr,p,c,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Wr.fromBufferAttribute(d,m),lh(Wr,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lh(r,t,e,n,i,s,o){const a=$a.distanceSqToPoint(r);if(a<e){const c=new A;$a.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Ox{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new Nt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],s=[],o=[],a=new A,c=new Ft;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ve(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xo extends He{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const x=[],p=n/2;let g=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function _(){const y=new A,C=new A;let w=0;const T=(e-t)/n;for(let k=0;k<=s;k++){const b=[],S=k/s,O=S*(e-t)+t;for(let G=0;G<=i;G++){const F=G/i,P=F*c+a,U=Math.sin(P),N=Math.cos(P);C.x=O*U,C.y=-S*n+p,C.z=O*N,d.push(C.x,C.y,C.z),y.set(U,T,N).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-S),b.push(m++)}x.push(b)}for(let k=0;k<i;k++)for(let b=0;b<s;b++){const S=x[b][k],O=x[b+1][k],G=x[b+1][k+1],F=x[b][k+1];h.push(S,O,F),h.push(O,G,F),w+=6}l.addGroup(g,w,0),g+=w}function v(y){const C=m,w=new Nt,T=new A;let k=0;const b=y===!0?t:e,S=y===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,p*S,0),u.push(0,S,0),f.push(.5,.5),m++;const O=m;for(let G=0;G<=i;G++){const P=G/i*c+a,U=Math.cos(P),N=Math.sin(P);T.x=b*N,T.y=p*S,T.z=b*U,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=U*.5+.5,w.y=N*.5*S+.5,f.push(w.x,w.y),m++}for(let G=0;G<i;G++){const F=C+G,P=O+G;y===!0?h.push(P,P+1,F):h.push(P+1,P,F),k+=3}l.addGroup(g,k,y===!0?1:2),g+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const kx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Cu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,u,f;if(n&&(s=Xx(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let m=e;m<i;m+=e)d=r[m],u=r[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return sr(s,o,e,a,c,f,0),o}};function Cu(r,t,e,n,i){let s,o;if(i===nv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=hh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=hh(s,r[s],r[s+1],o);return o&&Ro(o,o.next)&&(or(o),o=o.next),o}function ki(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ro(e,e.next)||ve(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Zx(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Hx(r,n,i,s):Vx(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),or(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Gx(ki(r),t,e),sr(r,t,e,n,i,s,2)):o===2&&Wx(r,t,e,n,i,s):sr(ki(r),t,e,n,i,s,1);break}}}function Vx(r){const t=r.prev,e=r,n=r.next;if(ve(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,u=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&vs(i,a,s,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hx(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ve(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,d=s.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,g=Ja(f,m,t,e,n),_=Ja(x,p,t,e,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=g&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&vs(a,h,c,d,l,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&vs(a,h,c,d,l,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&vs(a,h,c,d,l,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&vs(a,h,c,d,l,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Gx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Ro(i,s)&&Pu(i,n,n.next,s)&&rr(i,s)&&rr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),or(n),or(n.next),n=r=s),n=n.next}while(n!==r);return ki(n)}function Wx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qx(o,a)){let c=Lu(o,a);o=ki(o,o.next),c=ki(c,c.next),sr(o,t,e,n,i,s,0),sr(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Xx(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Cu(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Jx(l));for(i.sort(qx),s=0;s<i.length;s++)e=jx(i[s],e);return e}function qx(r,t){return r.x-t.x}function jx(r,t){const e=Yx(r,t);if(!e)return t;const n=Lu(e,r);return ki(n,n.next),ki(e,e.next)}function Yx(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&vs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),rr(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Kx(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Kx(r,t){return ve(r.prev,r,t.prev)<0&&ve(t.next,r,r.next)<0}function Zx(r,t,e,n){let i=r;do i.z===0&&(i.z=Ja(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$x(i)}function $x(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Ja(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Jx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function vs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Qx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!tv(r,t)&&(rr(r,t)&&rr(t,r)&&ev(r,t)&&(ve(r.prev,r,t.prev)||ve(r,t.prev,t))||Ro(r,t)&&ve(r.prev,r,r.next)>0&&ve(t.prev,t,t.next)>0)}function ve(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ro(r,t){return r.x===t.x&&r.y===t.y}function Pu(r,t,e,n){const i=qr(ve(r,t,e)),s=qr(ve(r,t,n)),o=qr(ve(e,n,r)),a=qr(ve(e,n,t));return!!(i!==s&&o!==a||i===0&&Xr(r,e,t)||s===0&&Xr(r,n,t)||o===0&&Xr(e,r,n)||a===0&&Xr(e,t,n))}function Xr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function qr(r){return r>0?1:r<0?-1:0}function tv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function rr(r,t){return ve(r.prev,r,r.next)<0?ve(r,t,r.next)>=0&&ve(r,r.prev,t)>=0:ve(r,t,r.prev)<0||ve(r,r.next,t)<0}function ev(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Lu(r,t){const e=new Qa(r.i,r.x,r.y),n=new Qa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function hh(r,t,e,n){const i=new Qa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function or(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Qa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class gc{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return gc.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];uh(t),dh(n,t);let o=t.length;e.forEach(uh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,dh(n,e[c]);const a=kx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function uh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function dh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class xc extends He{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new A,u=new A,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const _=[],v=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const w=C/e;d.x=-t*Math.cos(i+w*s)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+w*s)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(w+y,1-v),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const v=h[g][_+1],y=h[g][_],C=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&f.push(v,y,w),(g!==n-1||c<Math.PI)&&f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class on extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class io extends xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iv extends xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function jr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function sv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function rv(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function Iu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Co{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ov extends Co{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ms:s=t,a=2*e-n;break;case lo:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ms:o=t,c=2*n-e;break;case lo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,v=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+_*o[l+C]+v*o[c+C]+y*o[d+C];return s}}class Du extends Co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}}class av extends Co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new av(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ov(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case co:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&sv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Go,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=co;class Ps extends Fn{}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ao;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Uu extends Fn{}Uu.prototype.ValueTypeName="color";class ar extends Fn{}ar.prototype.ValueTypeName="number";class cv extends Co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Oe.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Vi extends Fn{InterpolantFactoryMethodLinear(t){return new cv(this.times,this.values,this.getValueSize(),t)}}Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=co;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Fn{}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ao;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Fn{}cr.prototype.ValueTypeName="vector";class tc{constructor(t,e=-1,n,i=ac){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(hv(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=rv(c);c=fh(c,1,h),l=fh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ar(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,x){if(f.length!==0){const p=[],g=[];Iu(f,p,g,m),p.length!==0&&x.push(new d(u,p,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let x=0;x<u[m].morphTargets.length;x++)f[u[m].morphTargets[x]]=-1;for(const x in f){const p=[],g=[];for(let _=0;_!==u[m].morphTargets.length;++_){const v=u[m];p.push(v.time),g.push(v.morphTarget===x?1:0)}i.push(new ar(".morphTargetInfluence["+x+"]",p,g))}c=f.length*o}else{const f=".bones["+e[d].name+"]";n(cr,f+".position",u,"pos",i),n(Vi,f+".quaternion",u,"rot",i),n(cr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return Uu;case"quaternion":return Vi;case"bool":case"boolean":return Ps;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=lv(r.type);if(r.times===void 0){const e=[],n=[];Iu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const vo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uv{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const dv=new uv;class gi{constructor(t){this.manager=t!==void 0?t:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class fv extends Error{constructor(t,e){super(t),this.response=e}}class Nu extends gi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=vo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:n,onError:i});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[t],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,m=f!==0;let x=0;const p=new ReadableStream({start(g){_();function _(){d.read().then(({done:v,value:y})=>{if(v)g.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let w=0,T=h.length;w<T;w++){const k=h[w];k.onProgress&&k.onProgress(C)}g.enqueue(y),_()}})}}});return new Response(p)}else throw new fv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{vo.add(t,l);const h=Gn[t];delete Gn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Gn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Gn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class pv extends gi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=vo.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ir("img");function c(){h(),vo.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Is extends gi{constructor(t){super(t)}load(t,e,n,i){const s=new Fe,o=new pv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class dr extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class mv extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const va=new Ft,ph=new A,mh=new A;class vc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gv extends vc{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ts*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class xv extends dr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const gh=new Ft,Gs=new A,_a=new A;class vv extends vc{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),_a.copy(n.position),_a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_a),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh)}}class xh extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _v extends vc{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fu extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yv extends dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mv{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class wv{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Oe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Oe.multiplyQuaternionsFlat(t,o,t,e,t,n),Oe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const _c="\\[\\]\\.:\\/",Sv=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",bv="[^"+_c.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",yc),Av=/(WCOD+)?/.source.replace("WCOD",bv),Tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Cv=new RegExp("^"+Ev+Av+Tv+Rv+"$"),Pv=["material","materials","bones","map"];class Lv{constructor(t,e,n){const i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(t){const e=Cv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Pv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=Lv;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Iv{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:ps,endingEnd:ps};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ru,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ef:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case ac:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===tf;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Qd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ms,i.endingEnd=ms):(t?i.endingStart=this.zeroSlopeAtStart?ms:ps:i.endingStart=lo,e?i.endingEnd=this.zeroSlopeAtEnd?ms:ps:i.endingEnd=lo)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const Dv=new Float32Array(1);class Uv extends Hi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;m=new wv(Jt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Du(new Float32Array(2),new Float32Array(2),1,Dv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?tc.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ac),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Iv(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?tc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Nv{constructor(t,e,n=0,i=1/0){this.ray=new ur(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ec(t[i],this,n,e);return n.sort(vh),n}}function vh(r,t){return r.distance-t.distance}function ec(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ec(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);class An{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new An);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=i[0],p=i[1],g=i[2],_=i[3],v=i[4],y=i[5],C=i[6],w=i[7],T=i[8];return s[0]=o*x+a*_+c*C,s[1]=o*p+a*v+c*w,s[2]=o*g+a*y+c*T,s[3]=l*x+h*_+d*C,s[4]=l*p+h*v+d*w,s[5]=l*g+h*y+d*T,s[6]=u*x+f*_+m*C,s[7]=u*p+f*v+m*w,s[8]=u*g+f*y+m*T,e}scale(t,e){e===void 0&&(e=new An);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new An);const e=3,n=6,i=Fv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,m=i*c,x=s*o,p=s*a,g=s*c,_=this.elements;return _[3*0+0]=1-(u+m),_[3*0+1]=h-g,_[3*0+2]=d+p,_[3*1+0]=h+g,_[3*1+1]=1-(l+m),_[3*1+2]=f-x,_[3*2+0]=d-p,_[3*2+1]=f+x,_[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new An);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Fv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new An([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=zv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Bv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(_h),_h.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const zv=new M,Bv=new M,_h=new M;class cn{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,yh),l=yh),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new cn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=Mh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Mh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(m<0||f>m)}}const yh=new M,Mh=[new M,new M,new M,new M,new M,new M,new M,new M];class wh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class zu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ae{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Ov,i=kv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ae);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Ae);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ae),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Ae(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ae);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,f,m,x,p;return f=i*c+s*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,p=Math.sin(e*u)/m):(x=1-e,p=e),n.x=x*i+p*c,n.y=x*s+p*l,n.z=x*o+p*h,n.w=x*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ae);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const Ov=new M,kv=new M,Vv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class At{constructor(t){t===void 0&&(t={}),this.id=At.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}At.idCounter=0;At.types=Vv;class te{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new Ae,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return te.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return te.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Sh),Sh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Sh=new Ae;class ys extends At{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:At.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ys.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const x=n.vertices[n.faces[d][m]],p=new M;p.copy(x),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new M,h=new M,d=new M,u=new M,f=new M,m=new M;let x=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],l);const _=p.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(l))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const v=a?a[_]:_;l.copy(p.faceNormals[v]),n.vmult(l,l);const y=p.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],h);const _=p.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}else{const g=c?c.length:t.faces.length;for(let _=0;_<g;_++){const v=c?c[_]:_;h.copy(t.faceNormals[v]),s.vmult(h,h);const y=p.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),u.cross(f,m),!m.almostZero()){m.normalize();const v=p.testSepAxis(m,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;ys.project(a,t,n,i,ya),ys.project(e,t,s,o,Ma);const c=ya[0],l=ya[1],h=Ma[0],d=Ma[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,m=new M,x=new M,p=this,g=[],_=i,v=g;let y=-1,C=Number.MAX_VALUE;for(let S=0;S<p.faces.length;S++){c.copy(p.faceNormals[S]),n.vmult(c,c);const O=c.dot(t);O<C&&(C=O,y=S)}if(y<0)return;const w=p.faces[y];w.connectedFaces=[];for(let S=0;S<p.faces.length;S++)for(let O=0;O<p.faces[S].length;O++)w.indexOf(p.faces[S][O])!==-1&&S!==y&&w.connectedFaces.indexOf(S)===-1&&w.connectedFaces.push(S);const T=w.length;for(let S=0;S<T;S++){const O=p.vertices[w[S]],G=p.vertices[w[(S+1)%T]];O.vsub(G,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(O),n.vmult(f,f),e.vadd(f,f);const F=w.connectedFaces[S];m.copy(this.faceNormals[F]);const P=this.getPlaneConstantOfFace(F);x.copy(m),n.vmult(x,x);const U=P-x.dot(e);for(this.clipFaceAgainstPlane(_,v,x,U);_.length;)_.shift();for(;v.length;)_.push(v.shift())}m.copy(this.faceNormals[y]);const k=this.getPlaneConstantOfFace(y);x.copy(m),n.vmult(x,x);const b=k-x.dot(e);for(let S=0;S<_.length;S++){let O=x.dot(_[S])+b;if(O<=s&&(console.log(`clamped: depth=${O} to minDist=${s}`),O=s),O<=o){const G=_[S];if(O<=1e-6){const F={point:G,normal:x,depth:O};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new M;d.copy(l),e.push(d)}else{const d=new M;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new M;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new M;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new M;t.vsub(c,l);const h=a.dot(l),d=new M;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Hv;let c=0,l=0;const h=Gv,d=t.vertices;h.setZero(),te.vectorToLocalFrame(n,i,e,a),te.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const ya=[],Ma=[];new M;const Hv=new M,Gv=new M;class Sn extends At{constructor(t){super({type:At.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ys({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Sn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ci.set(s[o][0],s[o][1],s[o][2]),e.vmult(ci,ci),t.vadd(ci,ci),n(ci.x,ci.y,ci.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Pn[0].set(s.x,s.y,s.z),Pn[1].set(-s.x,s.y,s.z),Pn[2].set(-s.x,-s.y,s.z),Pn[3].set(-s.x,-s.y,-s.z),Pn[4].set(s.x,-s.y,-s.z),Pn[5].set(s.x,s.y,-s.z),Pn[6].set(-s.x,s.y,-s.z),Pn[7].set(s.x,-s.y,s.z);const o=Pn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=Pn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const ci=new M,Pn=[new M,new M,new M,new M,new M,new M,new M,new M],Mc={DYNAMIC:1,STATIC:2,KINEMATIC:4},wc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Mt extends zu{constructor(t){t===void 0&&(t={}),super(),this.id=Mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Mt.STATIC:Mt.DYNAMIC,typeof t.type==typeof Mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Ae,this.initQuaternion=new Ae,this.previousQuaternion=new Ae,this.interpolatedQuaternion=new Ae,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new An,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new An,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Mt.SLEEPING&&this.dispatchEvent(Mt.wakeupEvent)}sleep(){this.sleepState=Mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Mt.AWAKE&&n<i?(this.sleepState=Mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Mt.sleepyEvent)):e===Mt.SLEEPY&&n>i?this.wakeUp():e===Mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Mt.SLEEPING||this.type===Mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new Ae;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Wv,o=Xv,a=this.quaternion,c=this.aabb,l=qv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=jv,i=Yv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=Kv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;const n=Zv,i=$v;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Mt.DYNAMIC&&(this.sleepState===Mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=e,i=Jv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Qv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==Mt.DYNAMIC)return;const n=t_,i=e_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=n_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Sn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Mt.DYNAMIC||this.type===Mt.KINEMATIC)||this.sleepState===Mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,x=this.angularFactor,p=c.x*x.x,g=c.y*x.y,_=c.z*x.z;s.x+=t*(m[0]*p+m[1]*g+m[2]*_),s.y+=t*(m[3]*p+m[4]*g+m[5]*_),s.z+=t*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Mt.idCounter=0;Mt.COLLIDE_EVENT_NAME="collide";Mt.DYNAMIC=Mc.DYNAMIC;Mt.STATIC=Mc.STATIC;Mt.KINEMATIC=Mc.KINEMATIC;Mt.AWAKE=wc.AWAKE;Mt.SLEEPY=wc.SLEEPY;Mt.SLEEPING=wc.SLEEPING;Mt.wakeupEvent={type:"wakeup"};Mt.sleepyEvent={type:"sleepy"};Mt.sleepEvent={type:"sleep"};const Wv=new M,Xv=new Ae,qv=new cn,jv=new An,Yv=new An;new An;const Kv=new M,Zv=new M,$v=new M,Jv=new M,Qv=new M,t_=new M,e_=new M,n_=new M;class i_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Mt.STATIC||t.sleepState===Mt.SLEEPING)&&(e.type&Mt.STATIC||e.sleepState===Mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=s_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=r_,i=o_,s=a_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const s_=new M;new M;new Ae;new M;const r_={keys:[]},o_=[],a_=[];new M;new M;new M;class Bu extends i_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class lr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Ou,ku,Vu,Hu,Gu,Wu,Xu;const Sc={CLOSEST:1,ANY:2,ALL:4};Ou=At.types.SPHERE;ku=At.types.PLANE;Vu=At.types.BOX;Hu=At.types.CYLINDER;Gu=At.types.CONVEXPOLYHEDRON;Wu=At.types.HEIGHTFIELD;Xu=At.types.TRIMESH;class Ee{get[Ou](){return this._intersectSphere}get[ku](){return this._intersectPlane}get[Vu](){return this._intersectBox}get[Hu](){return this._intersectConvex}get[Gu](){return this._intersectConvex}get[Wu](){return this._intersectHeightfield}get[Xu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ee.ANY,this.result=new lr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ee.ANY,this.result=e.result||new lr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(bh),wa.length=0,t.broadphase.aabbQuery(t,bh,wa),this.intersectBodies(wa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=c_,s=l_;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(S_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new M(0,0,1);e.vmult(l,l);const h=new M;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const m=new M,x=new M,p=new M;o.vsub(n,m);const g=-l.dot(m)/f;c.scale(g,x),o.vadd(x,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=h_;o.from.copy(this.from),o.to.copy(this.to),te.pointToLocalFrame(n,e,o.from,o.from),te.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=u_;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new cn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),te.pointToWorldFrame(n,e,t.pillarOffset,Yr),this._intersectConvex(t.pillarConvex,e,Yr,i,s,Eh),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),te.pointToWorldFrame(n,e,t.pillarOffset,Yr),this._intersectConvex(t.pillarConvex,e,Yr,i,s,Eh)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=d_,m=f_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=p_,c=Ah,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,p=m.distanceTo(x),g=l?l.length:h.length,_=this.result;for(let v=0;!_.shouldStop&&v<g;v++){const y=l?l[v]:v,C=h[y],w=u[y],T=e,k=n;c.copy(d[C[0]]),T.vmult(c,c),c.vadd(k,c),c.vsub(m,c),T.vmult(w,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const S=a.dot(c)/b;if(!(S<0)){f.scale(S,Qe),Qe.vadd(m,Qe),Mn.copy(d[C[0]]),T.vmult(Mn,Mn),k.vadd(Mn,Mn);for(let O=1;!_.shouldStop&&O<C.length-1;O++){Ln.copy(d[C[O]]),In.copy(d[C[O+1]]),T.vmult(Ln,Ln),T.vmult(In,In),k.vadd(Ln,Ln),k.vadd(In,In);const G=Qe.distanceTo(m);!(Ee.pointInTriangle(Qe,Mn,Ln,In)||Ee.pointInTriangle(Qe,Ln,Mn,In))||G>p||this.reportIntersection(a,Qe,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=m_,c=M_,l=w_,h=Ah,d=g_,u=x_,f=v_,m=y_,x=__,p=t.indices;t.vertices;const g=this.from,_=this.to,v=this.direction;l.position.copy(n),l.quaternion.copy(e),te.vectorToLocalFrame(n,e,v,d),te.pointToLocalFrame(n,e,g,u),te.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let C=0,w=c.length;!this.result.shouldStop&&C!==w;C++){const T=c[C];t.getNormal(T,a),t.getVertex(p[T*3],Mn),Mn.vsub(u,h);const k=d.dot(a),b=a.dot(h)/k;if(b<0)continue;d.scale(b,Qe),Qe.vadd(u,Qe),t.getVertex(p[T*3+1],Ln),t.getVertex(p[T*3+2],In);const S=Qe.distanceSquared(u);!(Ee.pointInTriangle(Qe,Ln,Mn,In)||Ee.pointInTriangle(Qe,Mn,Ln,In))||S>y||(te.vectorToWorldFrame(e,a,x),te.pointToWorldFrame(n,e,Qe,m),this.reportIntersection(x,m,s,i,T))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ee.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Ee.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Ee.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Li),n.vsub(e,Ws),t.vsub(e,Sa);const s=Li.dot(Li),o=Li.dot(Ws),a=Li.dot(Sa),c=Ws.dot(Ws),l=Ws.dot(Sa);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}Ee.CLOSEST=Sc.CLOSEST;Ee.ANY=Sc.ANY;Ee.ALL=Sc.ALL;const bh=new cn,wa=[],Ws=new M,Sa=new M,c_=new M,l_=new Ae,Qe=new M,Mn=new M,Ln=new M,In=new M;new M;new lr;const Eh={faceList:[0]},Yr=new M,h_=new Ee,u_=[],d_=new M,f_=new M,p_=new M;new M;new M;const Ah=new M,m_=new M,g_=new M,x_=new M,v_=new M,__=new M,y_=new M;new cn;const M_=[],w_=new te,Li=new M,Kr=new M;function S_(r,t,e){e.vsub(r,Li);const n=Li.dot(t);return t.scale(n,Kr),Kr.vadd(r,Kr),e.distanceTo(Kr)}class b_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Th{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class fr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=fr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Th,this.jacobianElementB=new Th,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Rh),a.scale(h,Ch),n.invInertiaWorldSolve.vmult(o,Ph),i.invInertiaWorldSolve.vmult(c,Lh),t.multiplyVectors(Rh,Ph)+e.multiplyVectors(Ch,Lh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Zr),l+=Zr.dot(t.rotational),c.vmult(e.rotational,Zr),l+=Zr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=E_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}fr.idCounter=0;const Rh=new M,Ch=new M,Ph=new M,Lh=new M,Zr=new M,E_=new M;class A_ extends fr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=T_,l=R_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=C_,x=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(x.spatial),c.negate(x.rotational),p.spatial.copy(g),p.rotational.copy(l),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),v=this.restitution+1,y=v*u.dot(g)-v*h.dot(g)+f.dot(l)-d.dot(c),C=this.computeGiMf();return-_*e-y*n-t*C}getImpactVelocityAlongNormal(){const t=P_,e=L_,n=I_,i=D_,s=U_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const T_=new M,R_=new M,C_=new M,P_=new M,L_=new M,I_=new M,D_=new M,U_=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ih extends fr{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=N_,o=F_,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const N_=new M,F_=new M;class Po{constructor(t,e,n){n=b_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Po.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Po.idCounter=0;class Lo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Lo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Lo.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ee;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Io extends At{constructor(t){if(super({type:At.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class z_ extends ys{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new M(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<s;m++){const x=2*Math.PI/s*(m+1),p=2*Math.PI/s*(m+.5);m<s-1?(o.push(new M(-e*u(x),-n*.5,e*d(x))),l.push(2*m+2),o.push(new M(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&a.push(new M(-u(p),0,d(p)))}c.push(l),a.push(new M(0,1,0));const f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=At.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class B_ extends At{constructor(){super({type:At.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Wn.set(0,0,1),e.vmult(Wn,Wn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Wn.x===1?i.x=t.x:Wn.x===-1&&(n.x=t.x),Wn.y===1?i.y=t.y:Wn.y===-1&&(n.y=t.y),Wn.z===1?i.z=t.z:Wn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Wn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new cn;new M;new cn;new M;new M;new M;new M;new M;new M;new M;new cn;new M;new te;new cn;class O_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class k_ extends O_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,f,m,x,p;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const g=H_,_=G_,v=V_;g.length=a,_.length=a,v.length=a;for(let y=0;y!==a;y++){const C=o[y];v[y]=0,_[y]=C.computeB(h),g[y]=1/C.computeC()}if(a!==0){for(let w=0;w!==l;w++){const T=c[w],k=T.vlambda,b=T.wlambda;k.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const T=o[w];d=_[w],u=g[w],p=v[w],x=T.computeGWlambda(),f=u*(d-x-T.eps*p),p+f<T.minForce?f=T.minForce-p:p+f>T.maxForce&&(f=T.maxForce-p),v[w]+=f,m+=f>0?f:-f,T.addToWlambda(f)}if(m*m<s)break}for(let w=0;w!==l;w++){const T=c[w],k=T.velocity,b=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),k.vadd(T.vlambda,k),T.wlambda.vmul(T.angularFactor,T.wlambda),b.vadd(T.wlambda,b)}let y=o.length;const C=1/h;for(;y--;)o[y].multiplier=v[y]*C}return n}}const V_=[],H_=[],G_=[];class W_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class X_ extends W_{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const pe={sphereSphere:At.types.SPHERE,spherePlane:At.types.SPHERE|At.types.PLANE,boxBox:At.types.BOX|At.types.BOX,sphereBox:At.types.SPHERE|At.types.BOX,planeBox:At.types.PLANE|At.types.BOX,convexConvex:At.types.CONVEXPOLYHEDRON,sphereConvex:At.types.SPHERE|At.types.CONVEXPOLYHEDRON,planeConvex:At.types.PLANE|At.types.CONVEXPOLYHEDRON,boxConvex:At.types.BOX|At.types.CONVEXPOLYHEDRON,sphereHeightfield:At.types.SPHERE|At.types.HEIGHTFIELD,boxHeightfield:At.types.BOX|At.types.HEIGHTFIELD,convexHeightfield:At.types.CONVEXPOLYHEDRON|At.types.HEIGHTFIELD,sphereParticle:At.types.PARTICLE|At.types.SPHERE,planeParticle:At.types.PLANE|At.types.PARTICLE,boxParticle:At.types.BOX|At.types.PARTICLE,convexParticle:At.types.PARTICLE|At.types.CONVEXPOLYHEDRON,cylinderCylinder:At.types.CYLINDER,sphereCylinder:At.types.SPHERE|At.types.CYLINDER,planeCylinder:At.types.PLANE|At.types.CYLINDER,boxCylinder:At.types.BOX|At.types.CYLINDER,convexCylinder:At.types.CONVEXPOLYHEDRON|At.types.CYLINDER,heightfieldCylinder:At.types.HEIGHTFIELD|At.types.CYLINDER,particleCylinder:At.types.PARTICLE|At.types.CYLINDER,sphereTrimesh:At.types.SPHERE|At.types.TRIMESH,planeTrimesh:At.types.PLANE|At.types.TRIMESH};class q_{get[pe.sphereSphere](){return this.sphereSphere}get[pe.spherePlane](){return this.spherePlane}get[pe.boxBox](){return this.boxBox}get[pe.sphereBox](){return this.sphereBox}get[pe.planeBox](){return this.planeBox}get[pe.convexConvex](){return this.convexConvex}get[pe.sphereConvex](){return this.sphereConvex}get[pe.planeConvex](){return this.planeConvex}get[pe.boxConvex](){return this.boxConvex}get[pe.sphereHeightfield](){return this.sphereHeightfield}get[pe.boxHeightfield](){return this.boxHeightfield}get[pe.convexHeightfield](){return this.convexHeightfield}get[pe.sphereParticle](){return this.sphereParticle}get[pe.planeParticle](){return this.planeParticle}get[pe.boxParticle](){return this.boxParticle}get[pe.convexParticle](){return this.convexParticle}get[pe.cylinderCylinder](){return this.convexConvex}get[pe.sphereCylinder](){return this.sphereConvex}get[pe.planeCylinder](){return this.planeConvex}get[pe.boxCylinder](){return this.boxConvex}get[pe.convexCylinder](){return this.convexConvex}get[pe.heightfieldCylinder](){return this.heightfieldCylinder}get[pe.particleCylinder](){return this.particleCylinder}get[pe.sphereTrimesh](){return this.sphereTrimesh}get[pe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new X_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new A_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new Ih(n,i,u*f),p=m.length?m.pop():new Ih(n,i,u*f);return x.bi=p.bi=n,x.bj=p.bj=i,x.minForce=p.minForce=-u*f,x.maxForce=p.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(x.t,p.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=p.enabled=t.enabled,e.push(x,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ai.setZero(),us.setZero(),ds.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ai.vadd(e.ni,Ai),us.vadd(e.ri,us),ds.vadd(e.rj,ds)):(Ai.vsub(e.ni,Ai),us.vadd(e.rj,us),ds.vadd(e.ri,ds));const o=1/t;us.scale(o,n.ri),ds.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ai.normalize(),Ai.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=K_,l=Z_,h=j_,d=Y_;for(let u=0,f=t.length;u!==f;u++){const m=t[u],x=e[u];let p=null;m.material&&x.material&&(p=n.getContactMaterial(m.material,x.material)||null);const g=m.type&Mt.KINEMATIC&&x.type&Mt.STATIC||m.type&Mt.STATIC&&x.type&Mt.KINEMATIC||m.type&Mt.KINEMATIC&&x.type&Mt.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],c),m.quaternion.vmult(m.shapeOffsets[_],h),h.vadd(m.position,h);const v=m.shapes[_];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],l),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);const C=x.shapes[y];if(!(v.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&v.collisionFilterGroup)||h.distanceTo(d)>v.boundingSphereRadius+C.boundingSphereRadius)continue;let w=null;v.material&&C.material&&(w=n.getContactMaterial(v.material,C.material)||null),this.currentContactMaterial=w||p||n.defaultContactMaterial;const T=v.type|C.type,k=this[T];if(k){let b=!1;v.type<C.type?b=k.call(this,v,C,h,d,c,l,m,x,v,C,g):b=k.call(this,C,v,d,h,l,c,x,m,v,C,g),b&&g&&(n.shapeOverlapKeeper.set(v.id,C.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,$r),u.ni.scale(u.ni.dot($r),Dh),$r.vsub(Dh,u.rj),-$r.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,f=wy;n.vsub(i,Jr),e.getSideNormals(f,o);const m=t.radius;let x=!1;const p=by,g=Ey,_=Ay;let v=null,y=0,C=0,w=0,T=null;for(let N=0,et=f.length;N!==et&&x===!1;N++){const R=_y;R.copy(f[N]);const z=R.length();R.normalize();const X=Jr.dot(R);if(X<z+m&&X>0){const st=yy,at=My;st.copy(f[(N+1)%3]),at.copy(f[(N+2)%3]);const nt=st.length(),ht=at.length();st.normalize(),at.normalize();const mt=Jr.dot(st),wt=Jr.dot(at);if(mt<nt&&mt>-nt&&wt<ht&&wt>-ht){const gt=Math.abs(X-z-m);if((T===null||gt<T)&&(T=gt,C=mt,w=wt,v=z,p.copy(R),g.copy(st),_.copy(at),y++,d))return!0}}}if(y){x=!0;const N=this.createContactEquation(a,c,t,e,l,h);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(v,p),g.scale(C,g),p.vadd(g,p),_.scale(w,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let k=u.get();const b=Sy;for(let N=0;N!==2&&!x;N++)for(let et=0;et!==2&&!x;et++)for(let R=0;R!==2&&!x;R++)if(k.set(0,0,0),N?k.vadd(f[0],k):k.vsub(f[0],k),et?k.vadd(f[1],k):k.vsub(f[1],k),R?k.vadd(f[2],k):k.vsub(f[2],k),i.vadd(k,b),b.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;x=!0;const z=this.createContactEquation(a,c,t,e,l,h);z.ri.copy(b),z.ri.normalize(),z.ni.copy(z.ri),z.ri.scale(m,z.ri),z.rj.copy(k),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}u.release(k),k=null;const S=u.get(),O=u.get(),G=u.get(),F=u.get(),P=u.get(),U=f.length;for(let N=0;N!==U&&!x;N++)for(let et=0;et!==U&&!x;et++)if(N%3!==et%3){f[et].cross(f[N],S),S.normalize(),f[N].vadd(f[et],O),G.copy(n),G.vsub(O,G),G.vsub(i,G);const R=G.dot(S);S.scale(R,F);let z=0;for(;z===N%3||z===et%3;)z++;P.copy(n),P.vsub(F,P),P.vsub(O,P),P.vsub(i,P);const X=Math.abs(R),st=P.length();if(X<f[z].length()&&st<m){if(d)return!0;x=!0;const at=this.createContactEquation(a,c,t,e,l,h);O.vadd(F,at.rj),at.rj.copy(at.rj),P.negate(at.ni),at.ni.normalize(),at.ri.copy(at.rj),at.ri.vadd(i,at.ri),at.ri.vsub(n,at.ri),at.ri.normalize(),at.ri.scale(m,at.ri),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),at.rj.vadd(i,at.rj),at.rj.vsub(c.position,at.rj),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult)}}u.release(S,O,G,F,P)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,f){const m=Vy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,u,f)){const x=[],p=Hy;t.clipAgainstHull(n,s,e,i,o,m,-100,100,x);let g=0;for(let _=0;_!==x.length;_++){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),y=v.ri,C=v.rj;m.negate(v.ni),x[_].normal.negate(p),p.scale(x[_].depth,p),x[_].point.vadd(p,y),C.copy(x[_].point),y.vsub(n,y),C.vsub(i,C),y.vadd(n,y),y.vsub(a.position,y),C.vadd(i,C),C.vsub(c.position,C),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,Ty);const f=e.faceNormals,m=e.faces,x=e.vertices,p=t.radius;let g=!1;for(let _=0;_!==x.length;_++){const v=x[_],y=Ly;o.vmult(v,y),i.vadd(y,y);const C=Py;if(y.vsub(n,C),C.lengthSquared()<p*p){if(d)return!0;g=!0;const w=this.createContactEquation(a,c,t,e,l,h);w.ri.copy(C),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(p,w.ri),y.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(c.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let _=0,v=m.length;_!==v&&g===!1;_++){const y=f[_],C=m[_],w=Iy;o.vmult(y,w);const T=Dy;o.vmult(x[C[0]],T),T.vadd(i,T);const k=Uy;w.scale(-p,k),n.vadd(k,k);const b=Ny;k.vsub(T,b);const S=b.dot(w),O=Fy;if(n.vsub(T,O),S<0&&O.dot(w)>0){const G=[];for(let F=0,P=C.length;F!==P;F++){const U=u.get();o.vmult(x[C[F]],U),i.vadd(U,U),G.push(U)}if(vy(G,w,n)){if(d)return!0;g=!0;const F=this.createContactEquation(a,c,t,e,l,h);w.scale(-p,F.ri),w.negate(F.ni);const P=u.get();w.scale(-S,P);const U=u.get();w.scale(-p,U),n.vsub(i,F.rj),F.rj.vadd(U,F.rj),F.rj.vadd(P,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),u.release(P),u.release(U),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let N=0,et=G.length;N!==et;N++)u.release(G[N]);return}else for(let F=0;F!==C.length;F++){const P=u.get(),U=u.get();o.vmult(x[C[(F+1)%C.length]],P),o.vmult(x[C[(F+2)%C.length]],U),i.vadd(P,P),i.vadd(U,U);const N=Ry;U.vsub(P,N);const et=Cy;N.unit(et);const R=u.get(),z=u.get();n.vsub(P,z);const X=z.dot(et);et.scale(X,R),R.vadd(P,R);const st=u.get();if(R.vsub(n,st),X>0&&X*X<N.lengthSquared()&&st.lengthSquared()<p*p){if(d)return!0;const at=this.createContactEquation(a,c,t,e,l,h);R.vsub(i,at.rj),R.vsub(n,at.ni),at.ni.normalize(),at.ni.scale(p,at.ri),at.rj.vadd(i,at.rj),at.rj.vsub(c.position,at.rj),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult);for(let nt=0,ht=G.length;nt!==ht;nt++)u.release(G[nt]);u.release(P),u.release(U),u.release(R),u.release(st),u.release(z);return}u.release(P),u.release(U),u.release(R),u.release(st),u.release(z)}for(let F=0,P=G.length;F!==P;F++)u.release(G[F])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=zy,f=By;f.set(0,0,1),s.vmult(f,f);let m=0;const x=Oy;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),v=ky;f.scale(f.dot(x),v),u.vsub(v,v),v.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=t.radius,m=e.elementSize,x=tM,p=Qy;te.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,v=Math.floor((p.y-f)/m)-1,y=Math.ceil((p.y+f)/m)+1;if(_<0||y<0||g>u.length||v>u[0].length)return;g<0&&(g=0),_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),g>=u.length&&(g=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const C=[];e.getRectMinMax(g,v,_,y,C);const w=C[0],T=C[1];if(p.z-f>T||p.z+f<w)return;const k=this.result;for(let b=g;b<_;b++)for(let S=v;S<y;S++){const O=k.length;let G=!1;if(e.getConvexTrianglePillar(b,S,!1),te.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&G||(e.getConvexTrianglePillar(b,S,!0),te.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&G))return!0;if(k.length-O>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=$y,p=Jy,g=Zy;te.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/f)-1,v=Math.ceil((g.x+m)/f)+1,y=Math.floor((g.y-m)/f)-1,C=Math.ceil((g.y+m)/f)+1;if(v<0||C<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),C<0&&(C=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),C>=u[0].length&&(C=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const w=[];e.getRectMinMax(_,y,v,C,w);const T=w[0],k=w[1];if(!(g.z-m>k||g.z+m<T))for(let b=_;b<v;b++)for(let S=y;S<C;S++){let O=!1;if(e.getConvexTrianglePillar(b,S,!1),te.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&O||(e.getConvexTrianglePillar(b,S,!0),te.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&O))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=qy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(c,a,e,t,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Gy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Wy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const p=Xy;u.scale(u.dot(i),p),i.vsub(p,p),x.rj.copy(p),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const f=Yy,m=Ky;let x=null;const p=jy;if(p.copy(i),p.vsub(n,p),s.conjugate(Uh),Uh.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const v=[t.worldVertices[t.faces[g][0]]],y=t.worldFaceNormals[g];i.vsub(v[0],Nh);const C=-y.dot(Nh);if(x===null||Math.abs(C)<Math.abs(x)){if(d)return!0;x=C,u=g,f.copy(y)}}if(u!==-1){const g=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,v=g.rj;_.vadd(i,_),_.vsub(c.position,_),v.vadd(n,v),v.vsub(a.position,v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=sy,f=ry,m=oy,x=ay,p=cy,g=ly,_=fy,v=iy,y=ey,C=py;te.pointToLocalFrame(i,o,n,p);const w=t.radius;_.lowerBound.set(p.x-w,p.y-w,p.z-w),_.upperBound.set(p.x+w,p.y+w,p.z+w),e.getTrianglesInAABB(_,C);const T=ny,k=t.radius*t.radius;for(let F=0;F<C.length;F++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[C[F]*3+P],T),T.vsub(p,y),y.lengthSquared()<=k){if(v.copy(T),te.pointToWorldFrame(i,o,v,T),T.vsub(n,y),d)return!0;let U=this.createContactEquation(a,c,t,e,l,h);U.ni.copy(y),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(T),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let F=0;F<C.length;F++)for(let P=0;P<3;P++){e.getVertex(e.indices[C[F]*3+P],u),e.getVertex(e.indices[C[F]*3+(P+1)%3],f),f.vsub(u,m),p.vsub(f,g);const U=g.dot(m);p.vsub(u,g);let N=g.dot(m);if(N>0&&U<0&&(p.vsub(u,g),x.copy(m),x.normalize(),N=g.dot(x),x.scale(N,g),g.vadd(u,g),g.distanceTo(p)<t.radius)){if(d)return!0;const R=this.createContactEquation(a,c,t,e,l,h);g.vsub(p,R.ni),R.ni.normalize(),R.ni.scale(t.radius,R.ri),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),te.pointToWorldFrame(i,o,g,g),g.vsub(c.position,R.rj),te.vectorToWorldFrame(o,R.ni,R.ni),te.vectorToWorldFrame(o,R.ri,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}const b=hy,S=uy,O=dy,G=ty;for(let F=0,P=C.length;F!==P;F++){e.getTriangleVertices(C[F],b,S,O),e.getNormal(C[F],G),p.vsub(b,g);let U=g.dot(G);if(G.scale(U,g),p.vsub(g,g),U=g.distanceTo(p),Ee.pointInTriangle(g,b,S,O)&&U<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),te.pointToWorldFrame(i,o,g,g),g.vsub(c.position,N.rj),te.vectorToWorldFrame(o,N.ni,N.ni),te.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}C.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new M,f=$_;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const x=new M;x.copy(u),te.pointToWorldFrame(i,o,x,u);const p=J_;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(f);const v=Q_;f.scale(p.dot(f),v),u.vsub(v,v),_.ri.copy(v),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Ai=new M,us=new M,ds=new M,j_=new M,Y_=new M,K_=new Ae,Z_=new Ae,$_=new M,J_=new M,Q_=new M,ty=new M,ey=new M;new M;const ny=new M,iy=new M,sy=new M,ry=new M,oy=new M,ay=new M,cy=new M,ly=new M,hy=new M,uy=new M,dy=new M,fy=new cn,py=[],$r=new M,Dh=new M,my=new M,gy=new M,xy=new M;function vy(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=my;r[(s+1)%i].vsub(o,a);const c=gy;a.cross(t,c);const l=xy;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Jr=new M,_y=new M,yy=new M,My=new M,wy=[new M,new M,new M,new M,new M,new M],Sy=new M,by=new M,Ey=new M,Ay=new M,Ty=new M,Ry=new M,Cy=new M,Py=new M,Ly=new M,Iy=new M,Dy=new M,Uy=new M,Ny=new M,Fy=new M;new M;new M;const zy=new M,By=new M,Oy=new M,ky=new M,Vy=new M,Hy=new M,Gy=new M,Wy=new M,Xy=new M,qy=new M,Uh=new Ae,jy=new M;new M;const Yy=new M,Nh=new M,Ky=new M,Zy=new M,$y=new M,Jy=[0],Qy=new M,tM=new M;class Fh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||zh(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||zh(e,h)}}}function zh(r,t){r.push((t&4294901760)>>16,t&65535)}const ba=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class eM{constructor(){this.data={keys:[]}}get(t,e){const n=ba(t,e);return this.data[n]}set(t,e,n){const i=ba(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ba(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class nM extends zu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Bu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new k_,this.constraints=[],this.narrowphase=new q_(this),this.collisionMatrix=new wh,this.collisionMatrixPrevious=new wh,this.bodyOverlapKeeper=new Fh,this.shapeOverlapKeeper=new Fh,this.contactmaterials=[],this.contactMaterialTable=new eM,this.defaultMaterial=new Lo("default"),this.defaultContactMaterial=new Po(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof lr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ALL,n.from=t,n.to=e,n.callback=i,Ea.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ANY,n.from=t,n.to=e,n.result=i,Ea.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.CLOSEST,n.from=t,n.to=e,n.result=i,Ea.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Le.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Le.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Le.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=aM,i=cM,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=Mt.DYNAMIC;let u=-1/0;const f=this.constraints,m=oM;c.length();const x=c.x,p=c.y,g=c.z;let _=0;for(l&&(u=Le.now()),_=0;_!==s;_++){const F=o[_];if(F.type===d){const P=F.force,U=F.mass;P.x+=U*x,P.y+=U*p,P.z+=U*g}}for(let F=0,P=this.subsystems.length;F!==P;F++)this.subsystems[F].update();l&&(u=Le.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Le.now()-u);let v=f.length;for(_=0;_!==v;_++){const F=f[_];if(!F.collideConnected)for(let P=n.length-1;P>=0;P-=1)(F.bodyA===n[P]&&F.bodyB===i[P]||F.bodyB===n[P]&&F.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(u=Le.now());const y=rM,C=e.length;for(_=0;_!==C;_++)y.push(e[_]);e.length=0;const w=this.frictionEquations.length;for(_=0;_!==w;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,m),l&&(h.narrowphase=Le.now()-u),l&&(u=Le.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const T=e.length;for(let F=0;F!==T;F++){const P=e[F],U=P.bi,N=P.bj,et=P.si,R=P.sj;let z;if(U.material&&N.material?z=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:z=this.defaultContactMaterial,z.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=U.material.restitution*N.material.restitution)),a.addEquation(P),U.allowSleep&&U.type===Mt.DYNAMIC&&U.sleepState===Mt.SLEEPING&&N.sleepState===Mt.AWAKE&&N.type!==Mt.STATIC){const X=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),st=N.sleepSpeedLimit**2;X>=st*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Mt.DYNAMIC&&N.sleepState===Mt.SLEEPING&&U.sleepState===Mt.AWAKE&&U.type!==Mt.STATIC){const X=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),st=U.sleepSpeedLimit**2;X>=st*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(Xs.body=N,Xs.contact=P,U.dispatchEvent(Xs),Xs.body=U,N.dispatchEvent(Xs)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(et.id,R.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Le.now()-u,u=Le.now()),_=0;_!==s;_++){const F=o[_];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(v=f.length,_=0;_!==v;_++){const F=f[_];F.update();for(let P=0,U=F.equations.length;P!==U;P++){const N=F.equations[P];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=Le.now()-u),a.removeAllEquations();const k=Math.pow;for(_=0;_!==s;_++){const F=o[_];if(F.type&d){const P=k(1-F.linearDamping,t),U=F.velocity;U.scale(P,U);const N=F.angularVelocity;if(N){const et=k(1-F.angularDamping,t);N.scale(et,N)}}}this.dispatchEvent(sM),l&&(u=Le.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,O=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,S,O);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Le.now()-u),this.stepnumber+=1,this.dispatchEvent(iM);let G=!0;if(this.allowSleep)for(G=!1,_=0;_!==s;_++){const F=o[_];F.sleepTick(this.time),F.sleepState!==Mt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Xn,qn),t){for(let s=0,o=Xn.length;s<o;s+=2)qs.bodyA=this.getBodyById(Xn[s]),qs.bodyB=this.getBodyById(Xn[s+1]),this.dispatchEvent(qs);qs.bodyA=qs.bodyB=null}if(e){for(let s=0,o=qn.length;s<o;s+=2)js.bodyA=this.getBodyById(qn[s]),js.bodyB=this.getBodyById(qn[s+1]),this.dispatchEvent(js);js.bodyA=js.bodyB=null}Xn.length=qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Xn,qn),n){for(let s=0,o=Xn.length;s<o;s+=2){const a=this.getShapeById(Xn[s]),c=this.getShapeById(Xn[s+1]);jn.shapeA=a,jn.shapeB=c,a&&(jn.bodyA=a.body),c&&(jn.bodyB=c.body),this.dispatchEvent(jn)}jn.bodyA=jn.bodyB=jn.shapeA=jn.shapeB=null}if(i){for(let s=0,o=qn.length;s<o;s+=2){const a=this.getShapeById(qn[s]),c=this.getShapeById(qn[s+1]);Yn.shapeA=a,Yn.shapeB=c,a&&(Yn.bodyA=a.body),c&&(Yn.bodyB=c.body),this.dispatchEvent(Yn)}Yn.bodyA=Yn.bodyB=Yn.shapeA=Yn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new cn;const Ea=new Ee,Le=globalThis.performance||{};if(!Le.now){let r=Date.now();Le.timing&&Le.timing.navigationStart&&(r=Le.timing.navigationStart),Le.now=()=>Date.now()-r}new M;const iM={type:"postStep"},sM={type:"preStep"},Xs={type:Mt.COLLIDE_EVENT_NAME,body:null,contact:null},rM=[],oM=[],aM=[],cM=[],Xn=[],qn=[],qs={type:"beginContact",bodyA:null,bodyB:null},js={type:"endContact",bodyA:null,bodyB:null},jn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Yn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function lM(){const r=new nM({gravity:new M(0,-9.82,0)});return r.broadphase=new Bu,r.allowSleep=!1,r.defaultContactMaterial.friction=.45,r.defaultContactMaterial.restitution=.05,r}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Bh=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Bh(""))}catch{Bh=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var gn=Uint8Array,ui=Uint16Array,nc=Uint32Array,qu=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ju=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hM=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yu=function(r,t){for(var e=new ui(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];for(var i=new nc(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return[e,i]},Ku=Yu(qu,2),Zu=Ku[0],uM=Ku[1];Zu[28]=258,uM[258]=28;var dM=Yu(ju,0),fM=dM[0],ic=new ui(32768);for(var ge=0;ge<32768;++ge){var li=(ge&43690)>>>1|(ge&21845)<<1;li=(li&52428)>>>2|(li&13107)<<2,li=(li&61680)>>>4|(li&3855)<<4,ic[ge]=((li&65280)>>>8|(li&255)<<8)>>>1}var Qs=function(r,t,e){for(var n=r.length,i=0,s=new ui(t);i<n;++i)++s[r[i]-1];var o=new ui(t);for(i=0;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new ui(1<<t);var c=15-t;for(i=0;i<n;++i)if(r[i])for(var l=i<<4|r[i],h=t-r[i],d=o[r[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)a[ic[d]>>>c]=l}else for(a=new ui(n),i=0;i<n;++i)r[i]&&(a[i]=ic[o[r[i]-1]++]>>>15-r[i]);return a},pr=new gn(288);for(var ge=0;ge<144;++ge)pr[ge]=8;for(var ge=144;ge<256;++ge)pr[ge]=9;for(var ge=256;ge<280;++ge)pr[ge]=7;for(var ge=280;ge<288;++ge)pr[ge]=8;var $u=new gn(32);for(var ge=0;ge<32;++ge)$u[ge]=5;var pM=Qs(pr,9,1),mM=Qs($u,5,1),Aa=function(r){for(var t=r[0],e=1;e<r.length;++e)r[e]>t&&(t=r[e]);return t},wn=function(r,t,e){var n=t/8|0;return(r[n]|r[n+1]<<8)>>(t&7)&e},Ta=function(r,t){var e=t/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(t&7)},gM=function(r){return(r/8|0)+(r&7&&1)},xM=function(r,t,e){(e==null||e>r.length)&&(e=r.length);var n=new(r instanceof ui?ui:r instanceof nc?nc:gn)(e-t);return n.set(r.subarray(t,e)),n},vM=function(r,t,e){var n=r.length;if(!n||e&&!e.l&&n<5)return t||new gn(0);var i=!t||e,s=!e||e.i;e||(e={}),t||(t=new gn(n*3));var o=function(wt){var gt=t.length;if(wt>gt){var Rt=new gn(Math.max(gt*2,wt));Rt.set(t),t=Rt}},a=e.f||0,c=e.p||0,l=e.b||0,h=e.l,d=e.d,u=e.m,f=e.n,m=n*8;do{if(!h){e.f=a=wn(r,c,1);var x=wn(r,c+1,3);if(c+=3,x)if(x==1)h=pM,d=mM,u=9,f=5;else if(x==2){var v=wn(r,c,31)+257,y=wn(r,c+10,15)+4,C=v+wn(r,c+5,31)+1;c+=14;for(var w=new gn(C),T=new gn(19),k=0;k<y;++k)T[hM[k]]=wn(r,c+k*3,7);c+=y*3;for(var b=Aa(T),S=(1<<b)-1,O=Qs(T,b,1),k=0;k<C;){var G=O[wn(r,c,S)];c+=G&15;var p=G>>>4;if(p<16)w[k++]=p;else{var F=0,P=0;for(p==16?(P=3+wn(r,c,3),c+=2,F=w[k-1]):p==17?(P=3+wn(r,c,7),c+=3):p==18&&(P=11+wn(r,c,127),c+=7);P--;)w[k++]=F}}var U=w.subarray(0,v),N=w.subarray(v);u=Aa(U),f=Aa(N),h=Qs(U,u,1),d=Qs(N,f,1)}else throw"invalid block type";else{var p=gM(c)+4,g=r[p-4]|r[p-3]<<8,_=p+g;if(_>n){if(s)throw"unexpected EOF";break}i&&o(l+g),t.set(r.subarray(p,_),l),e.b=l+=g,e.p=c=_*8;continue}if(c>m){if(s)throw"unexpected EOF";break}}i&&o(l+131072);for(var et=(1<<u)-1,R=(1<<f)-1,z=c;;z=c){var F=h[Ta(r,c)&et],X=F>>>4;if(c+=F&15,c>m){if(s)throw"unexpected EOF";break}if(!F)throw"invalid length/literal";if(X<256)t[l++]=X;else if(X==256){z=c,h=null;break}else{var st=X-254;if(X>264){var k=X-257,at=qu[k];st=wn(r,c,(1<<at)-1)+Zu[k],c+=at}var nt=d[Ta(r,c)&R],ht=nt>>>4;if(!nt)throw"invalid distance";c+=nt&15;var N=fM[ht];if(ht>3){var at=ju[ht];N+=Ta(r,c)&(1<<at)-1,c+=at}if(c>m){if(s)throw"unexpected EOF";break}i&&o(l+131072);for(var mt=l+st;l<mt;l+=4)t[l]=t[l-N],t[l+1]=t[l+1-N],t[l+2]=t[l+2-N],t[l+3]=t[l+3-N];l=mt}}e.l=h,e.p=z,e.b=l,h&&(a=1,e.m=u,e.d=d,e.n=f)}while(!a);return l==t.length?t:xM(t,0,l)},_M=new gn(0),yM=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function MM(r,t){return vM((yM(r),r.subarray(2,-4)),t)}var wM=typeof TextDecoder<"u"&&new TextDecoder,SM=0;try{wM.decode(_M,{stream:!0}),SM=1}catch{}function Ju(r,t,e){const n=e.length-r-1;if(t>=e[n])return n-1;if(t<=e[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;t<e[o]||t>=e[o+1];)t<e[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function bM(r,t,e,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=e;++a){s[a]=t-n[r+1-a],o[a]=n[r+a]-t;let c=0;for(let l=0;l<a;++l){const h=o[l+1],d=s[a-l],u=i[l]/(h+d);i[l]=c+h*u,c=d*u}i[a]=c}return i}function EM(r,t,e,n){const i=Ju(r,n,t),s=bM(i,n,r,t),o=new ee(0,0,0,0);for(let a=0;a<=r;++a){const c=e[i-r+a],l=s[a],h=c.w*l;o.x+=c.x*h,o.y+=c.y*h,o.z+=c.z*h,o.w+=c.w*l}return o}function AM(r,t,e,n,i){const s=[];for(let d=0;d<=e;++d)s[d]=0;const o=[];for(let d=0;d<=n;++d)o[d]=s.slice(0);const a=[];for(let d=0;d<=e;++d)a[d]=s.slice(0);a[0][0]=1;const c=s.slice(0),l=s.slice(0);for(let d=1;d<=e;++d){c[d]=t-i[r+1-d],l[d]=i[r+d]-t;let u=0;for(let f=0;f<d;++f){const m=l[f+1],x=c[d-f];a[d][f]=m+x;const p=a[f][d-1]/a[d][f];a[f][d]=u+m*p,u=x*p}a[d][d]=u}for(let d=0;d<=e;++d)o[0][d]=a[d][e];for(let d=0;d<=e;++d){let u=0,f=1;const m=[];for(let x=0;x<=e;++x)m[x]=s.slice(0);m[0][0]=1;for(let x=1;x<=n;++x){let p=0;const g=d-x,_=e-x;d>=x&&(m[f][0]=m[u][0]/a[_+1][g],p=m[f][0]*a[g][_]);const v=g>=-1?1:-g,y=d-1<=_?x-1:e-d;for(let w=v;w<=y;++w)m[f][w]=(m[u][w]-m[u][w-1])/a[_+1][g+w],p+=m[f][w]*a[g+w][_];d<=_&&(m[f][x]=-m[u][x-1]/a[_+1][d],p+=m[f][x]*a[d][_]),o[x][d]=p;const C=u;u=f,f=C}}let h=e;for(let d=1;d<=n;++d){for(let u=0;u<=e;++u)o[d][u]*=h;h*=e-d}return o}function TM(r,t,e,n,i){const s=i<r?i:r,o=[],a=Ju(r,n,t),c=AM(a,n,r,s,t),l=[];for(let h=0;h<e.length;++h){const d=e[h].clone(),u=d.w;d.x*=u,d.y*=u,d.z*=u,l[h]=d}for(let h=0;h<=s;++h){const d=l[a-r].clone().multiplyScalar(c[h][0]);for(let u=1;u<=r;++u)d.add(l[a-r+u].clone().multiplyScalar(c[h][u]));o[h]=d}for(let h=s+1;h<=i+1;++h)o[h]=new ee(0,0,0);return o}function RM(r,t){let e=1;for(let i=2;i<=r;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=r-t;++i)n*=i;return e/n}function CM(r){const t=r.length,e=[],n=[];for(let s=0;s<t;++s){const o=r[s];e[s]=new A(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<t;++s){const o=e[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(RM(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function PM(r,t,e,n,i){const s=TM(r,t,e,n,i);return CM(s)}class LM extends Ox{constructor(t,e,n,i,s){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new ee(a.x,a.y,a.z,a.w)}}getPoint(t,e=new A){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=EM(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new A){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=PM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let Kt,be,Ze;class bc extends gi{constructor(t){super(t)}load(t,e,n,i){const s=this,o=s.path===""?Mv.extractUrlBase(t):s.path,a=new Nu(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(c){try{e(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t,e){if(zM(t))Kt=new FM().parse(t);else{const i=nd(t);if(!BM(i))throw new Error("THREE.FBXLoader: Unknown format.");if(kh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+kh(i));Kt=new NM().parse(i)}const n=new Is(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new IM(n,this.manager).parse(Kt)}}class IM{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){be=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),s=new DM().parse(i);return this.parseScene(i,s,n),Ze}parseConnections(){const t=new Map;return"Connections"in Kt&&Kt.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};t.get(i).parents.push(a),t.has(s)||t.set(s,{parents:[],children:[]});const c={ID:i,relationship:o};t.get(s).children.push(c)}),t}parseImages(){const t={},e={};if("Video"in Kt.Objects){const n=Kt.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(t[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,c=typeof s.Content=="string"&&s.Content!=="";if(a||c){const l=this.parseImage(n[i]);e[s.RelativeFilename||s.Filename]=l}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+s+";base64,"+e;{const o=new Uint8Array(e);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(t){const e=new Map;if("Texture"in Kt.Objects){const n=Kt.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],t);e.set(parseInt(i),s)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,s=t.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Jn:an,n.wrapT=a===0?Jn:an,"Scaling"in t){const c=t.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in t){const c=t.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(t,e){let n;const i=this.textureLoader.path,s=be.get(t.id).children;s!==void 0&&s.length>0&&e[s[0].ID]!==void 0&&(n=e[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=t.FileName.slice(-3).toLowerCase();if(a==="tga"){const c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),o=new Fe):(c.setPath(this.textureLoader.path),o=c.load(n))}else if(a==="dds"){const c=this.manager.getHandler(".dds");c===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",t.RelativeFilename),o=new Fe):(c.setPath(this.textureLoader.path),o=c.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),o=new Fe):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(t){const e=new Map;if("Material"in Kt.Objects){const n=Kt.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],t);s!==null&&e.set(parseInt(i),s)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let s=t.ShadingModel;if(typeof s=="object"&&(s=s.value),!be.has(n))return null;const o=this.parseParameters(t,e,n);let a;switch(s.toLowerCase()){case"phong":a=new io;break;case"lambert":a=new iv;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new io;break}return a.setValues(o),a.name=i,a}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new Bt().fromArray(t.Diffuse.value).convertSRGBToLinear():t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new Bt().fromArray(t.DiffuseColor.value).convertSRGBToLinear()),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new Bt().fromArray(t.Emissive.value).convertSRGBToLinear():t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Bt().fromArray(t.EmissiveColor.value).convertSRGBToLinear()),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new Bt().fromArray(t.Specular.value).convertSRGBToLinear():t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new Bt().fromArray(t.SpecularColor.value).convertSRGBToLinear());const s=this;return be.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(e,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(e,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(e,o.ID),i.map!==void 0&&(i.map.colorSpace=ue);break;case"DisplacementColor":i.displacementMap=s.getTexture(e,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(e,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ue);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(e,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(e,o.ID),i.envMap!==void 0&&(i.envMap.mapping=oo,i.envMap.colorSpace=ue);break;case"SpecularColor":i.specularMap=s.getTexture(e,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ue);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(e,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(t,e){return"LayeredTexture"in Kt.Objects&&e in Kt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=be.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Kt.Objects){const n=Kt.Objects.Deformer;for(const i in n){const s=n[i],o=be.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,t[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=a}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const s=e[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ft().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const s=t.children[i],o=e[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=be.get(parseInt(s.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(t,e,n){Ze=new Nn;const i=this.parseModels(t.skeletons,e,n),s=Kt.Objects.Model,o=this;i.forEach(function(c){const l=s[c.ID];o.setLookAtProperties(c,l),be.get(c.ID).parents.forEach(function(d){const u=i.get(d.ID);u!==void 0&&u.add(c)}),c.parent===null&&Ze.add(c)}),this.bindSkeleton(t.skeletons,e,i),this.addGlobalSceneSettings(),Ze.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const l=td(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});const a=new UM().parse();Ze.children.length===1&&Ze.children[0].isGroup&&(Ze.children[0].animations=a,Ze=Ze.children[0]),Ze.animations=a}parseModels(t,e,n){const i=new Map,s=Kt.Objects.Model;for(const o in s){const a=parseInt(o),c=s[o],l=be.get(a);let h=this.buildSkeleton(l,t,a,c.attrName);if(!h){switch(c.attrType){case"Camera":h=this.createCamera(l);break;case"Light":h=this.createLight(l);break;case"Mesh":h=this.createMesh(l,e,n);break;case"NurbsCurve":h=this.createCurve(l,e);break;case"LimbNode":case"Root":h=new Za;break;case"Null":default:h=new Nn;break}h.name=c.attrName?Jt.sanitizeNodeName(c.attrName):"",h.userData.originalName=c.attrName,h.ID=a}this.getTransformData(h,c),i.set(a,h)}return i}buildSkeleton(t,e,n,i){let s=null;return t.parents.forEach(function(o){for(const a in e){const c=e[a];c.rawBones.forEach(function(l,h){if(l.ID===o.ID){const d=s;s=new Za,s.matrixWorld.copy(l.transformLink),s.name=i?Jt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,c.bones[h]=s,d!==null&&s.add(d)}})}}),s}createCamera(t){let e,n;if(t.children.forEach(function(i){const s=Kt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new ae;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);const l=a/c;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new Je(h,l,s,o),d!==null&&e.setFocalLength(d);break;case 1:e=new fc(-a/2,a/2,c/2,-c/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new ae;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const s=Kt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new ae;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Bt().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const c=1;switch(i){case 0:e=new xh(s,o,a,c);break;case 1:e=new Fu(s,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=re.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=re.degToRad(n.OuterAngle.value),h=Math.max(h,1)),e=new xv(s,o,a,l,h,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new xh(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,s=null,o=null;const a=[];return t.children.forEach(function(c){e.has(c.ID)&&(s=e.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new io({name:gi.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(c){c.vertexColors=!0}),s.FBX_Deformer?(i=new Fx(s,o),i.normalizeSkinWeights()):i=new he(s,o),i}createCurve(t,e){const n=t.children.reduce(function(s,o){return e.has(o.ID)&&(s=e.get(o.ID)),s},null),i=new Js({name:gi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ru(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=ed(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&be.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Kt.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(o),Ze.add(t.target)):t.lookAt(new A().fromArray(o))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const s in t){const o=t[s];be.get(parseInt(o.ID)).parents.forEach(function(c){if(e.has(c.ID)){const l=c.ID;be.get(l).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new mc(o.bones),i[d.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Kt.Objects){const e=Kt.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(s){t[s.Node]=new Ft().fromArray(s.Matrix.a)}):t[i.Node]=new Ft().fromArray(i.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in Kt){if("AmbientColor"in Kt.GlobalSettings){const t=Kt.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const s=new Bt(e,n,i).convertSRGBToLinear();Ze.add(new yv(s,1))}}"UnitScaleFactor"in Kt.GlobalSettings&&(Ze.userData.unitScaleFactor=Kt.GlobalSettings.UnitScaleFactor.value)}}}class DM{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in Kt.Objects){const n=Kt.Objects.Geometry;for(const i in n){const s=be.get(parseInt(i)),o=this.parseGeometry(s,n[i],t);e.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,s=[],o=t.parents.map(function(d){return Kt.Objects.Model[d.ID]});if(o.length===0)return;const a=t.children.reduce(function(d,u){return i[u.ID]!==void 0&&(d=i[u.ID]),d},null);t.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&s.push(n.morphTargets[d.ID])});const c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=ed(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);const h=td(l);return this.genGeometry(e,a,s,h)}genGeometry(t,e,n,i){const s=new He;t.attrName&&(s.name=t.attrName);const o=this.parseGeoNode(t,e),a=this.genBuffers(o),c=new oe(a.vertex,3);if(c.applyMatrix4(i),s.setAttribute("position",c),a.colors.length>0&&s.setAttribute("color",new oe(a.colors,3)),e&&(s.setAttribute("skinIndex",new uc(a.weightsIndices,4)),s.setAttribute("skinWeight",new oe(a.vertexWeights,4)),s.FBX_Deformer=e),a.normal.length>0){const l=new Zt().getNormalMatrix(i),h=new oe(a.normal,3);h.applyNormalMatrix(l),s.setAttribute("normal",h)}if(a.uvs.forEach(function(l,h){const d=h===0?"uv":`uv${h}`;s.setAttribute(d,new oe(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(d,u){d!==l&&(s.addGroup(h,u-h,l),l=d,h=u)}),s.groups.length>0){const d=s.groups[s.groups.length-1],u=d.start+d.count;u!==a.materialIndex.length&&s.addGroup(u,a.materialIndex.length-u,l)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,t,n,i),s}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],c=[],l=[],h=[],d=[];const u=this;return t.vertexIndices.forEach(function(f,m){let x,p=!1;f<0&&(f=f^-1,p=!0);let g=[],_=[];if(o.push(f*3,f*3+1,f*3+2),t.color){const v=Qr(m,n,f,t.color);c.push(v[0],v[1],v[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(v){_.push(v.weight),g.push(v.id)}),_.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],y=[0,0,0,0];_.forEach(function(C,w){let T=C,k=g[w];y.forEach(function(b,S,O){if(T>b){O[S]=T,T=b;const G=v[S];v[S]=k,k=G}})}),g=v,_=y}for(;_.length<4;)_.push(0),g.push(0);for(let v=0;v<4;++v)h.push(_[v]),d.push(g[v])}if(t.normal){const v=Qr(m,n,f,t.normal);a.push(v[0],v[1],v[2])}t.material&&t.material.mappingType!=="AllSame"&&(x=Qr(m,n,f,t.material)[0],x<0&&(u.negativeMaterialIndices=!0,x=0)),t.uv&&t.uv.forEach(function(v,y){const C=Qr(m,n,f,v);l[y]===void 0&&(l[y]=[]),l[y].push(C[0]),l[y].push(C[1])}),i++,p&&(u.genFace(e,t,o,x,a,c,l,h,d,i),n++,i=0,o=[],a=[],c=[],l=[],h=[],d=[])}),e}getNormalNewell(t){const e=new A(0,0,0);for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];e.x+=(i.y-s.y)*(i.z+s.z),e.y+=(i.z-s.z)*(i.x+s.x),e.z+=(i.x-s.x)*(i.y+s.y)}return e.normalize(),e}getNormalTangentAndBitangent(t){const e=this.getNormalNewell(t),i=(Math.abs(e.z)>.5?new A(0,1,0):new A(0,0,1)).cross(e).normalize(),s=e.clone().cross(i).normalize();return{normal:e,tangent:i,bitangent:s}}flattenVertex(t,e,n){return new Nt(t.dot(e),t.dot(n))}genFace(t,e,n,i,s,o,a,c,l,h){let d;if(h>3){const u=[];for(let p=0;p<n.length;p+=3)u.push(new A(e.vertexPositions[n[p]],e.vertexPositions[n[p+1]],e.vertexPositions[n[p+2]]));const{tangent:f,bitangent:m}=this.getNormalTangentAndBitangent(u),x=[];for(const p of u)x.push(this.flattenVertex(p,f,m));d=gc.triangulateShape(x,[])}else d=[[0,1,2]];for(const[u,f,m]of d)t.vertex.push(e.vertexPositions[n[u*3]]),t.vertex.push(e.vertexPositions[n[u*3+1]]),t.vertex.push(e.vertexPositions[n[u*3+2]]),t.vertex.push(e.vertexPositions[n[f*3]]),t.vertex.push(e.vertexPositions[n[f*3+1]]),t.vertex.push(e.vertexPositions[n[f*3+2]]),t.vertex.push(e.vertexPositions[n[m*3]]),t.vertex.push(e.vertexPositions[n[m*3+1]]),t.vertex.push(e.vertexPositions[n[m*3+2]]),e.skeleton&&(t.vertexWeights.push(c[u*4]),t.vertexWeights.push(c[u*4+1]),t.vertexWeights.push(c[u*4+2]),t.vertexWeights.push(c[u*4+3]),t.vertexWeights.push(c[f*4]),t.vertexWeights.push(c[f*4+1]),t.vertexWeights.push(c[f*4+2]),t.vertexWeights.push(c[f*4+3]),t.vertexWeights.push(c[m*4]),t.vertexWeights.push(c[m*4+1]),t.vertexWeights.push(c[m*4+2]),t.vertexWeights.push(c[m*4+3]),t.weightsIndices.push(l[u*4]),t.weightsIndices.push(l[u*4+1]),t.weightsIndices.push(l[u*4+2]),t.weightsIndices.push(l[u*4+3]),t.weightsIndices.push(l[f*4]),t.weightsIndices.push(l[f*4+1]),t.weightsIndices.push(l[f*4+2]),t.weightsIndices.push(l[f*4+3]),t.weightsIndices.push(l[m*4]),t.weightsIndices.push(l[m*4+1]),t.weightsIndices.push(l[m*4+2]),t.weightsIndices.push(l[m*4+3])),e.color&&(t.colors.push(o[u*3]),t.colors.push(o[u*3+1]),t.colors.push(o[u*3+2]),t.colors.push(o[f*3]),t.colors.push(o[f*3+1]),t.colors.push(o[f*3+2]),t.colors.push(o[m*3]),t.colors.push(o[m*3+1]),t.colors.push(o[m*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(s[u*3]),t.normal.push(s[u*3+1]),t.normal.push(s[u*3+2]),t.normal.push(s[f*3]),t.normal.push(s[f*3+1]),t.normal.push(s[f*3+2]),t.normal.push(s[m*3]),t.normal.push(s[m*3+1]),t.normal.push(s[m*3+2])),e.uv&&e.uv.forEach(function(x,p){t.uvs[p]===void 0&&(t.uvs[p]=[]),t.uvs[p].push(a[p][u*2]),t.uvs[p].push(a[p][u*2+1]),t.uvs[p].push(a[p][f*2]),t.uvs[p].push(a[p][f*2+1]),t.uvs[p].push(a[p][m*2]),t.uvs[p].push(a[p][m*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const c=Kt.Objects.Geometry[a.geoID];c!==void 0&&s.genMorphGeometry(t,e,c,i,a.name)})})}genMorphGeometry(t,e,n,i,s){const o=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],l=t.attributes.position.count*3,h=new Float32Array(l);for(let m=0;m<c.length;m++){const x=c[m]*3;h[x]=a[m*3],h[x+1]=a[m*3+1],h[x+2]=a[m*3+2]}const d={vertexIndices:o,vertexPositions:h},u=this.genBuffers(d),f=new oe(u.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),t.morphAttributes.position.push(f)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in t?s=t.NormalIndex.a:"NormalsIndex"in t&&(s=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let s=[];return n==="IndexToDirect"&&(s=t.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let s=[];n==="IndexToDirect"&&(s=t.ColorIndex.a);for(let o=0,a=new Bt;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new He;const n=e-1,i=t.KnotVector.a,s=[],o=t.Points.a;for(let d=0,u=o.length;d<u;d+=4)s.push(new ee().fromArray(o,d));let a,c;if(t.Form==="Closed")s.push(s[0]);else if(t.Form==="Periodic"){a=n,c=i.length-1-a;for(let d=0;d<n;++d)s.push(s[d])}const h=new LM(n,i,s,a,c).getPoints(s.length*12);return new He().setFromPoints(h)}}class UM{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],s=this.addClip(i);t.push(s)}return t}parseClips(){if(Kt.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Kt.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};e.set(s.id,s)}}return e}parseAnimationCurves(t){const e=Kt.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(OM),values:e[n].KeyValueFloat.a},s=be.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?t.get(o).curves.x=i:a.match(/Y/)?t.get(o).curves.y=i:a.match(/Z/)?t.get(o).curves.z=i:a.match(/DeformPercent/)&&t.has(o)&&(t.get(o).curves.morph=i)}}}parseAnimationLayers(t){const e=Kt.Objects.AnimationLayer,n=new Map;for(const i in e){const s=[],o=be.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(t.has(c.ID)){const h=t.get(c.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[l]===void 0){const d=be.get(c.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(d!==void 0){const u=Kt.Objects.Model[d.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const f={modelName:u.attrName?Jt.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ze.traverse(function(m){m.ID===u.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ft),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),s[l]=f}}s[l]&&(s[l][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[l]===void 0){const d=be.get(c.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,u=be.get(d).parents[0].ID,f=be.get(u).parents[0].ID,m=be.get(f).parents[0].ID,x=Kt.Objects.Model[m],p={modelName:x.attrName?Jt.sanitizeNodeName(x.attrName):"",morphName:Kt.Objects.Deformer[d].attrName};s[l]=p}s[l][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(t){const e=Kt.Objects.AnimationStack,n={};for(const i in e){const s=be.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=t.get(s[0].ID);n[i]={name:e[i].attrName,layer:o}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new tc(t.name,-1,e)}generateTracks(t){const e=[];let n=new A,i=new A;if(t.transform&&t.transform.decompose(n,new Oe,i),n=n.toArray(),i=i.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");s!==void 0&&e.push(s)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const s=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);s!==void 0&&e.push(s)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.S.curves,i,"scale");s!==void 0&&e.push(s)}if(t.DeformPercent!==void 0){const s=this.generateMorphTrack(t);s!==void 0&&e.push(s)}return e}generateVectorTrack(t,e,n,i){const s=this.getTimesForAllAxes(e),o=this.getKeyframeTrackValues(s,e,n);return new cr(t+"."+i,s,o)}generateRotationTrack(t,e,n,i,s){let o,a;if(e.x!==void 0&&e.y!==void 0&&e.z!==void 0){const d=this.interpolateRotations(e.x,e.y,e.z,s);o=d[0],a=d[1]}n!==void 0&&(n=n.map(re.degToRad),n.push(s),n=new tn().fromArray(n),n=new Oe().setFromEuler(n)),i!==void 0&&(i=i.map(re.degToRad),i.push(s),i=new tn().fromArray(i),i=new Oe().setFromEuler(i).invert());const c=new Oe,l=new tn,h=[];if(!a||!o)return new Vi(t+".quaternion",[],[]);for(let d=0;d<a.length;d+=3)l.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new Oe().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new Vi(t+".quaternion",o,h)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(s){return s/100}),i=Ze.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new ar(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let s=1;s<e.length;s++){const o=e[s];o!==i&&(e[n]=o,i=o,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,s=[];let o=-1,a=-1,c=-1;return t.forEach(function(l){if(e.x&&(o=e.x.times.indexOf(l)),e.y&&(a=e.y.times.indexOf(l)),e.z&&(c=e.z.times.indexOf(l)),o!==-1){const h=e.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=e.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(c!==-1){const h=e.z.values[c];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(t,e,n,i){const s=[],o=[];s.push(t.times[0]),o.push(re.degToRad(t.values[0])),o.push(re.degToRad(e.values[0])),o.push(re.degToRad(n.values[0]));for(let a=1;a<t.values.length;a++){const c=[t.values[a-1],e.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;const l=c.map(re.degToRad),h=[t.values[a],e.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const d=h.map(re.degToRad),u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const x=Math.max(...f)/180,p=new tn(...l,i),g=new tn(...d,i),_=new Oe().setFromEuler(p),v=new Oe().setFromEuler(g);_.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const y=t.times[a-1],C=t.times[a]-y,w=new Oe,T=new tn;for(let k=0;k<1;k+=1/x)w.copy(_.clone().slerp(v.clone(),k)),s.push(y+k*C),T.setFromQuaternion(w,i),o.push(T.x),o.push(T.y),o.push(T.z)}else s.push(t.times[a]),o.push(re.degToRad(t.values[a])),o.push(re.degToRad(e.values[a])),o.push(re.degToRad(n.values[a]))}return[s,o]}}class NM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new Qu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const c=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(e.currentIndent-1)+"}}");c?e.parseNodeBegin(i,c):l?e.parseNodeProperty(i,l,n[++s]):h?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),s=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(t,i,s);return}if(i==="C"){const c=s.split(",").slice(1),l=parseInt(c[0]),h=parseInt(c[1]);let d=s.split(",").slice(3);d=d.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",s=[l,h],VM(s,d),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=Ca(s))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=Ca(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],c=i[3];let l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=Ca(l);break}this.getPrevNode()[s]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),s)}}class FM{parse(t){const e=new Oh(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Qu;for(;!this.endOfContent(e);){const s=this.parseNode(e,n);s!==null&&i.add(s.name,s)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),s=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const o=t.getUint8(),a=t.getString(o);if(i===0)return null;const c=[];for(let u=0;u<s;u++)c.push(this.parseProperty(t));const l=c.length>0?c[0]:"",h=c.length>1?c[1]:"",d=c.length>2?c[2]:"";for(n.singleProperty=s===1&&t.getOffset()===i;i>t.getOffset();){const u=this.parseNode(t,e);u!==null&&this.parseSubNode(a,n,u)}return n.propertyList=c,typeof l=="number"&&(n.id=l),h!==""&&(n.attrName=h),d!==""&&(n.attrType=d),a!==""&&(n.name=a),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){e[s]=n[s]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],e[i]={type:s,type2:o,flag:a,value:c}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),s=t.getUint32(),o=t.getUint32();if(s===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const a=MM(new Uint8Array(t.getArrayBuffer(o))),c=new Oh(a.buffer);switch(e){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class Oh{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class Qu{add(t,e){this[t]=e}}function zM(r){const t="Kaydara FBX Binary  \0";return r.byteLength>=t.length&&t===nd(r,0,t.length)}function BM(r){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const s=r[i-1];return r=r.slice(e+i),e++,s}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function kh(r){const t=/FBXVersion: (\d+)/,e=r.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function OM(r){return r/46186158e3}const kM=[];function Qr(r,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return HM(kM,n.buffer,s,o)}const Ra=new tn,fs=new A;function td(r){const t=new Ft,e=new Ft,n=new Ft,i=new Ft,s=new Ft,o=new Ft,a=new Ft,c=new Ft,l=new Ft,h=new Ft,d=new Ft,u=new Ft,f=r.inheritType?r.inheritType:0;if(r.translation&&t.setPosition(fs.fromArray(r.translation)),r.preRotation){const S=r.preRotation.map(re.degToRad);S.push(r.eulerOrder||tn.DEFAULT_ORDER),e.makeRotationFromEuler(Ra.fromArray(S))}if(r.rotation){const S=r.rotation.map(re.degToRad);S.push(r.eulerOrder||tn.DEFAULT_ORDER),n.makeRotationFromEuler(Ra.fromArray(S))}if(r.postRotation){const S=r.postRotation.map(re.degToRad);S.push(r.eulerOrder||tn.DEFAULT_ORDER),i.makeRotationFromEuler(Ra.fromArray(S)),i.invert()}r.scale&&s.scale(fs.fromArray(r.scale)),r.scalingOffset&&a.setPosition(fs.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(fs.fromArray(r.scalingPivot)),r.rotationOffset&&c.setPosition(fs.fromArray(r.rotationOffset)),r.rotationPivot&&l.setPosition(fs.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(d.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const m=e.clone().multiply(n).multiply(i),x=new Ft;x.extractRotation(h);const p=new Ft;p.copyPosition(h);const g=p.clone().invert().multiply(h),_=x.clone().invert().multiply(g),v=s,y=new Ft;if(f===0)y.copy(x).multiply(m).multiply(_).multiply(v);else if(f===1)y.copy(x).multiply(_).multiply(m).multiply(v);else{const O=new Ft().scale(new A().setFromMatrixScale(d)).clone().invert(),G=_.clone().multiply(O);y.copy(x).multiply(m).multiply(G).multiply(v)}const C=l.clone().invert(),w=o.clone().invert();let T=t.clone().multiply(c).multiply(l).multiply(e).multiply(n).multiply(i).multiply(C).multiply(a).multiply(o).multiply(s).multiply(w);const k=new Ft().copyPosition(T),b=h.clone().multiply(k);return u.copyPosition(b),T=u.clone().multiply(y),T.premultiply(h.invert()),T}function ed(r){r=r||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[r]}function Ca(r){return r.split(",").map(function(e){return parseFloat(e)})}function nd(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=r.byteLength),new TextDecoder().decode(new Uint8Array(r,t,e))}function VM(r,t){for(let e=0,n=r.length,i=t.length;e<i;e++,n++)r[n]=t[e]}function HM(r,t,e,n){for(let i=e,s=0;i<n;i++,s++)r[s]=t[i];return r}function GM(r){const t=new Map,e=new Map,n=r.clone();return id(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function id(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)id(r.children[n],t.children[n],e)}function le(r,t){return Math.random()*(t-r)+r}function Di(r,t,e){return Math.min(e,Math.max(t,r))}class WM{constructor(t,e,n,i=new A){yt(this,"body");yt(this,"mesh");yt(this,"state","Idle");yt(this,"onGround",!1);yt(this,"mixer",null);yt(this,"actions",{});yt(this,"actionByKind",{});yt(this,"currentAction",null);yt(this,"animBaseSpeed",1.15);yt(this,"camYaw",0);yt(this,"camPitch",-.3);yt(this,"camDist",4.5);yt(this,"targetMouse",null);yt(this,"pounceCooldown",0);yt(this,"_raycaster",new Nv);this.world=t,this.scene=e,this.input=n,this.origin=i;const s=new Io(.45),o=10;this.body=new Mt({mass:o,shape:s,position:new M(i.x,i.y+.7,i.z)}),this.body.linearDamping=.05,this.body.angularDamping=1,this.body.fixedRotation=!0,t.addBody(this.body);const a=new Nn;this.mesh=a,e.add(a),Promise.all([XM(),qM()]).then(([c,l])=>{const h=GM(c);h.traverse(m=>{if(m.isSkinnedMesh||m.isMesh){m.castShadow=!0,m.receiveShadow=!0;const x=p=>{p&&"skinning"in p&&(m.isSkinnedMesh||m.isMesh)&&(p.skinning=!0)};if(l){const p=m.material,g=_=>{_&&"map"in _&&(_.map=l,"side"in _&&(_.side=En),"needsUpdate"in _&&(_.needsUpdate=!0)),x(_)};Array.isArray(p)?p.forEach(g):g(p)}else if(m.material){const p=m.material;Array.isArray(p)?p.forEach(x):x(p)}m.frustumCulled=!1}});const d=new we().setFromObject(h),u=d.getCenter(new A);h.position.x-=u.x,h.position.z-=u.z,h.position.y-=d.min.y,a.add(h);const f=c.animations||[];if(f&&f.length>0){this.mixer=new Uv(h),this.actions={};for(const g of f){const _=this.mixer.clipAction(g);_.loop=ru,_.clampWhenFinished=!1,this.actions[g.name.toLowerCase()]=_}const m=Object.keys(this.actions),x=g=>m.find(_=>g.some(v=>_.includes(v)));this.actionByKind.idle=x(["idle","stand"])||m[0]||void 0,this.actionByKind.walk=x(["walk"])||this.actionByKind.idle,this.actionByKind.run=x(["run","jog","sprint"])||this.actionByKind.walk;const p=this.actionByKind.idle;p&&this.actions[p]&&(this.actions[p].reset().fadeIn(.2).play(),this.currentAction=p)}})}update(t,e,n,i=[]){var T,k,b;this.onGround=!1;const s=this.body.world,o=((T=s==null?void 0:s.narrowphase)==null?void 0:T.contactEquations)||[];for(const S of o)if(S.bi===this.body||S.bj===this.body){const O=S.ni,G=S.bi===this.body?-O.y:O.y,F=S.bi===this.body?S.bj:S.bi;if(G>.5){this.onGround=!0;break}if(F!=null&&F.isCouch&&G>.1){this.onGround=!0;break}}if(!this.onGround&&this.body&&this.body.world){const S=((k=this.body.world.gravity)==null?void 0:k.y)??-9.82;this.body.force.y+=this.body.mass*S}if(!this.onGround){const S=Ee,O=lr;if(S&&O){const G=new S,F=new O;if(G.from.set(this.body.position.x,this.body.position.y,this.body.position.z),G.to.set(this.body.position.x,this.body.position.y-.7,this.body.position.z),G.intersectWorld(this.body.world,{mode:S.ANY,result:F,skipBackfaces:!0}),F.hasHit&&F.body!==this.body){const P=this.body.position.y-F.hitPointWorld.y;P<=.75&&(this.onGround=!0),!this.onGround&&((b=F.body)!=null&&b.isCouch)&&P<=.9&&(this.onGround=!0)}}}if(this.mixer&&this.actions){const S=this.body.velocity.x,O=this.body.velocity.z,G=Math.hypot(S,O);let F="idle";G>3?F="run":G>.4&&(F="walk");const P=(this.actionByKind[F]||this.currentAction||"").toLowerCase();if(P&&P!==this.currentAction&&this.actions[P]){const N=this.actions[P],et=this.currentAction?this.actions[this.currentAction]:null;N.reset().fadeIn(.15).play(),et&&et.fadeOut(.15),this.currentAction=P}if(this.currentAction){const N=this.actions[this.currentAction];N&&(this.currentAction===(this.actionByKind.run||"").toLowerCase()?N.timeScale=re.clamp(G/4,.7,2):this.currentAction===(this.actionByKind.walk||"").toLowerCase()?N.timeScale=re.clamp(G/1.5,.6,1.6):N.timeScale=1)}const U=G<=.05||!this.onGround;this.mixer.timeScale=U?0:this.animBaseSpeed,this.mixer.update(t)}const a=this.input.consumeMouseDelta(),c=.002*this.input.sensitivity;this.camYaw-=a.x*c,this.camPitch-=a.y*c,this.camPitch=Di(this.camPitch,-1.3,.3),this.camDist=Di(this.camDist+this.input.consumeWheelDelta(),3,12);const l=this.input.forward-this.input.backward,h=this.input.right-this.input.left,d=Math.abs(l)+Math.abs(h)>0,u=12,f=u*1.75,x=this.input.sneak?2:this.input.run?f:u;if(this.onGround)if(this.input.jump){this.body.velocity.y=7,this.state="Jump";const O=this.body.velocity.x,G=this.body.velocity.z,F=Math.hypot(O,G),P=Math.min(1,F/f),U=45*Math.PI/180*P,N=7*Math.tan(U);if(F>1e-4&&F<N){const et=O/F,R=G/F,z=N-F;this.body.velocity.x=O+et*z,this.body.velocity.z=G+R*z}}else d?this.state=this.input.sneak?"Sneak":this.input.run?"Run":"Walk":this.state="Idle";else this.state!=="Pounce"&&(this.state="Jump");if(this.pounceCooldown=Math.max(0,this.pounceCooldown-t),this.input.consumeLockPounce()&&this.pounceCooldown<=0){let S=null,O=999;const G=new A(this.body.position.x,this.body.position.y,this.body.position.z),F=new A(Math.sin(this.camYaw),0,Math.cos(this.camYaw));for(const P of n){const U=P.position.distanceTo(G);U<8&&P.position.clone().sub(G).normalize().dot(F)>.6&&U<O&&(O=U,S=P)}if(S){this.targetMouse=S;const P=S.position.clone().sub(G).normalize();this.body.velocity.set(P.x*8,6.5,P.z*8),this.state="Pounce",this.pounceCooldown=1}}const p=new A;if(d){this.body.wakeUp&&this.body.wakeUp();const S=this.camYaw,O=new A(Math.sin(S),0,Math.cos(S)),G=new A(-Math.cos(S),0,Math.sin(S));p.copy(O).multiplyScalar(l).add(G.multiplyScalar(h)).normalize();const F=this.body.velocity;if(this.onGround){const P=new M(p.x*x,F.y,p.z*x),U=.35;F.x+=(P.x-F.x)*U,F.z+=(P.z-F.z)*U}else F.x+=p.x*x*.5*t,F.z+=p.z*x*.5*t}else this.onGround&&(this.body.velocity.x*=.9,this.body.velocity.z*=.9);if(this.mesh.position.set(this.body.position.x,this.body.position.y-.45,this.body.position.z),p.lengthSq()>1e-4){const S=Math.atan2(p.x,p.z),O=this.mesh.rotation.y;let G=S-O;for(;G>Math.PI;)G-=Math.PI*2;for(;G<-Math.PI;)G+=Math.PI*2;let F;if(this.onGround)F=G*.2;else{const U=4*t;F=Di(G,-U,U)}this.mesh.rotation.y=O+F}const g=new A(this.body.position.x,this.body.position.y+.8,this.body.position.z),_=new A(-Math.sin(this.camYaw)*this.camDist,0,-Math.cos(this.camYaw)*this.camDist);let v=g.clone().add(new A(0,2.5+this.camPitch*-2,0)).add(_);const y=v.clone(),C=new A().subVectors(y,g),w=C.length();if(w>.001&&i&&i.length>0){const S=C.normalize();this._raycaster.set(g,S),this._raycaster.far=w;const O=this._raycaster.intersectObjects(i,!0).filter(G=>{let F=G.object;for(;F;){if(F===this.mesh)return!1;F=F.parent}return!0});if(O.length>0){const F=O[0],P=Math.max(0,F.distance-.25);v.copy(g).add(S.multiplyScalar(P))}}e.position.lerp(v,.15),e.lookAt(g)}}let Pa=null;function XM(){if(!Pa){const r=new bc;Pa=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/cat-w_S28Lp9.fbx",import.meta.url).toString();r.load(n,i=>{const s=new we().setFromObject(i),o=new A;s.getSize(o);const l=1.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return Pa}let La=null;function qM(){return La||(La=new Promise(r=>{const t=new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAENwAABZ4AAAb5AAAIwP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAQABAAwERAAIRAQMRAf/EAO4AAAICAwADAAAAAAAAAAAAAAgJAAcFBgoCAwQBAAIDAQEBAQAAAAAAAAAAAAYHAAUIAwQCCRAAAQEGBgEEAQUAAAAAAAAAABMBEQIEFAUQEgMVBgc1ICEiJSQjNBY2FxEAAAIGBAoHCQAAAAAAAAAAADEQARECBAUyA7UGIaHBEqIUtBXFFiBRU7NVhQexUjNU1HU2hpYSAAADBQUFBgcAAAAAAAAAAAECAwAQIIKyEVGBscHwcRKzBCExYdFywvFSkhMzY4MTAAECAwcEAwEAAAAAAAAAAAABEfBRcRAhMUFhkcEg0eHxgaGxMP/aAAwDAQACEQMRAAABemFW0kVGeClF2nhLQZKy0GSxLfh3vrzY/MV5mTGxJFf6QUtKGFCXYubF2LGyO/NtH4Wj+crrcIv+SLF2FnylmCKGOKsIxhVhIn4ao9zLwI5bBOnJIqzZWY6OYgWbwqyzdFmUh3i/M4xMSN9wJrqSD88W4z73ZdCG9rNlsbdg10quUYzHmqYL2bJKIehqeqwU45lY/vPS4aY9sxchxB8Hdk7UkkrRpHhkJit0LqO2TQXhtbPxlzD9+xBJl6STDFTKO9A22M+R20xu78N24hSJUWf/2gAIAQEAAQUCrStOypl/Nag6u1nijCrKgriuOxJp/Mag6rmBcqioKsqzsOedzCvOppzOVJVlQVZVnZFwy803E6bns5VFWVBVlWXub+z6yuyXCLlNK9sVB/nvXIqbhCbhCXmcfcuB3TJxRsyp2GubiwVN0N0LhPZ5vh9ybBx2S126vMM7TexU3U3U1Z7PHwuPPxm1/wBqP5KwVP/aAAgBAgABBQKuK4k4lZZxcWYOwryvLDEraXFyYOHejizPonFzYOHejingC5Dh3os7PrtW6U0ctOM1NOqYOHicQnEWeH628+SltZK21g4eUxTFugyyd78prxthtqsZlHlMUxLQZdG++VmfGmQef//aAAgBAwABBQJERJn46zy2e44UwQEC5/GeeWf3HCmCYmXv43R5YfcyimCYmchgbvGVpx2EyimCYmWyLLI8pllb7J6LtJI3GfwfCPhJSN0vdtJS4S2l+oiPwWFiT1fxpjSU1ZeBjJvIwfgsLEhqfiPeaP74fh//2gAIAQICBj8CcU99ubiY6RJHv4qzOJjpEhPzDOJjpEhPzDOJjpEnNULChd8W+982nZEnNULKS0gyHjx1REDfmLKS0g3S2fsqiANu9lZaCt0v9KoP/9oACAEDAgY/AnCXbucfDWI5d1IOUl1iVD00g5WX3RKy0FctL7oiF31Cy6l/ByytwXO/Ot9ZvOAtnjmyh91IMct1kRcc2EzLh6Moi45i1rdRJTB//9oACAEBAQY/AkTpf26yYFE88s4h0DBicLb4fZcEie+WcQQYMGDE3U35Cy4IGJ/hLdXEgYNBgxOVN8OsqBBi8eEt0cUBg0GDETh7HZ6oSRzOLeWObx68o9T65vxOS9G7bjuQGPwK5X8tI/oUGDEStvY9xVCVO5xa9jmUYseoFa2nypoyTNQaKQpCteaeZ3bihL3erW9uiVi+lZ7/AC7oyt53IinjRSFILeabPYpQlr3Xrm3xShfD9fs6sRTxo//aAAgBAQMBPyFk0GTQvcx4pUJ4+H6sVRUQuQuTITSTK/sex7zX0x8ktk40X+FhE5Xb6GRZpr8jfc5Cz8LKBysjcjey1RZSUgXzgZ2+AdRFUiqIpFxZtI+7RAOY5M6fjFZpdxsyJyJz7GMuII2VW1M+UPVV70JrjZA2ZA5A59jSXEM6+HjW/RfKz//aAAgBAgMBPyFgwiEZSW4NZYqKiM1kP4RDy3SathxxSDXQSi2ra1xYaL5l+07hJripRRG9Gl0QXEdxEcALllVtQUGnorqI5nOPoigoNH3/AEXSEPp6L//aAAgBAwMBPyF48Rpzfjq2KCgRpX9ZzcXQMUlIkRSyamLqg0qJDgyPAvEXqqj+lB6KDB3DXDikOb0XoqyseUheEJu34iCpcuXodZWPriUETq6P/9oADAMBAAIRAxEAABBtoisla87a0kT/AET6S0W0b6tYt/VNAHcw/9oACAEBAwE/EIJCCQSYGgzXS2g32TsXh2K/Toa30gyXcbL9FTd3Km7uY2sz9BoQ+xSesY3I38kMKROpE6iLYqrmryNk3USzMhSM9iD2Ku4+TdB8m6CxUOQGj3CV2hSWjv4GezuQupEwiYIquqFmcpIRKtydIGzemGW6SmwDp9/NmJsu5AQQEGWXFCj7Qu/pltRskNJzK9xx5sau/gjvcguNh7jYe4heHN/XBQduKpcvzDUJDzCd1Zne/Aarc9I7kFyrCpVhUxnZqiF9M1i9uXoaA2a/Xc//2gAIAQIDAT8Q1UNVBtr0gag4VQbx1hnuM9xJ9eAPgYN2U+Qw45cMWgkRoH2WDC+Vjbp5CwdZcezoLsSi4TyhXIRUdfDYWTQTYcaBoGEqDTgX67QjcfDyMHjw8KMvlX5s11BXM+O4aw0fbVwLcqnIljbHKFHn/9oACAEDAwE/ENI0hZc9qnJ8RfxC4qGGhoyo5FeSsrWGizeUFBSH7X5sI+GyVHyHBwc0RB1NjNtnfMYbIbISjBVeRr0VRIgkouMbTWwM1qrFXR3WPx8QwN5UUWWInInEn7Ea1cfz4hhPfuoaAyYw8PC71iRzq9WgNGP/2Q==",import.meta.url).toString();new Is().load(t,n=>{try{n.colorSpace=ue??Tn}catch{}r(n)},void 0,()=>r(null))})),La}class jM{constructor(t,e,n,i,s,o){yt(this,"body");yt(this,"mesh");yt(this,"wanderTimer",0);yt(this,"pathTimer",0);yt(this,"target",null);yt(this,"lastCatPos",null);yt(this,"wallCommitTimer",0);yt(this,"wallCommitDir",null);yt(this,"fleeCommitTimer",0);yt(this,"fleeCommitDir",null);yt(this,"heading",new A(1,0,0));yt(this,"flipRetryTimer",0);yt(this,"slowTimer",0);yt(this,"turnCooldown",0);yt(this,"forwardBlockTimer",0);yt(this,"speed",10);yt(this,"alive",!0);yt(this,"holeIgnoreTimer",0);yt(this,"holes");yt(this,"inHoleTimer",0);yt(this,"pendingExitHole",null);yt(this,"seekHoleThisPursuit",null);yt(this,"erraticTimer",0);yt(this,"erraticAngle",0);yt(this,"wasPursued",!1);yt(this,"wanderJitterTimer",0);this.world=t,this.scene=e,this.bounds=i,this.sfx=o;const a=new Io(.24);this.body=new Mt({mass:.3,shape:a,position:new M(n.x,.36,n.z)}),this.body.linearDamping=.2,t.addBody(this.body);const c=new Nn;this.mesh=c,e.add(c),Promise.all([YM(),KM()]).then(([h,d])=>{const u=h.clone(!0);u.traverse(x=>{if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,d)){const p=x.material,g=_=>{_&&"map"in _&&(_.map=d,"side"in _&&(_.side=En),"needsUpdate"in _&&(_.needsUpdate=!0))};Array.isArray(p)?p.forEach(g):g(p)}});const f=new we().setFromObject(u),m=f.getCenter(new A);u.position.x-=m.x,u.position.z-=m.z,u.position.y-=f.min.y,c.add(u)});const l=le(0,Math.PI*2);this.heading.set(Math.sin(l),0,Math.cos(l)),this.holes=s}update(t,e){var m;if(!this.alive)return;if(this.inHoleTimer>0)if(this.inHoleTimer=Math.max(0,this.inHoleTimer-t),this.body.velocity.x=0,this.body.velocity.z=0,this.inHoleTimer===0&&this.pendingExitHole)this.performHoleExit(this.pendingExitHole),this.pendingExitHole=null;else return;this.holeIgnoreTimer=Math.max(0,this.holeIgnoreTimer-t),this.wanderTimer-=t,this.pathTimer-=t,this.flipRetryTimer=Math.max(0,this.flipRetryTimer-t);const n=new A(this.body.position.x,0,this.body.position.z);let i=new A;if(!this.target||this.pathTimer<=0||this.target.distanceTo(n)<.3){const p=le(this.bounds.min.x+.4,this.bounds.max.x-.4),g=le(this.bounds.min.z+.4,this.bounds.max.z-.4);this.target=new A(p,0,g),this.pathTimer=le(3,7)}this.target&&i.copy(this.target).sub(n).normalize();const a=n.distanceTo(e)<7;if(a&&!this.wasPursued){(m=this.sfx)==null||m.mouseSqueek(),this.seekHoleThisPursuit=Math.random()<.5;const x=new A(n.x-e.x,0,n.z-e.z).normalize(),p=100*Math.PI/180,g=le(-p,p),_=Math.sin(g),v=Math.cos(g),y=x.x*v-x.z*_,C=x.x*_+x.z*v,w=new A(y,0,C).normalize(),T=le(1.2,2.5),k=this.bounds,b=.8,S=Di(n.x+w.x*T,k.min.x+b,k.max.x-b),O=Di(n.z+w.z*T,k.min.z+b,k.max.z-b);if(this.target=new A(S,0,O),this.fleeCommitDir=w.clone(),this.fleeCommitTimer=.3,i.copy(w),this.seekHoleThisPursuit&&this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0){const G=new A(this.body.position.x,.5,this.body.position.z);let F=null,P=1/0;for(const U of this.holes){if(!U.room.containsPoint(G))continue;const N=G.distanceTo(U.position);N<P&&(P=N,F=U)}if(F){const U=F.position.clone().addScaledVector(F.inward,-.1);this.target=U;const N=new A(this.body.position.x,0,this.body.position.z);i.copy(U).sub(N).normalize()}}}if(a){this.fleeCommitTimer=Math.max(0,this.fleeCommitTimer-t);const x=new A(n.x-e.x,0,n.z-e.z);if(x.lengthSq()<1e-6&&x.set(1,0,0),x.normalize(),this.erraticTimer-=t,this.erraticTimer<=0){const p=100*Math.PI/180,g=le(-p,p),_=Math.sin(g),v=Math.cos(g),y=x.x*v-x.z*_,C=x.x*_+x.z*v;this.erraticTimer=.2,this.fleeCommitDir=new A(y,0,C).normalize(),this.fleeCommitTimer=Math.max(this.fleeCommitTimer,.25)}this.fleeCommitDir&&i.copy(this.fleeCommitDir)}else if(this.erraticAngle=0,this.erraticTimer=Math.max(this.erraticTimer,0),this.fleeCommitTimer=0,this.fleeCommitDir=null,this.seekHoleThisPursuit=null,this.wanderJitterTimer-=t,this.wanderJitterTimer<=0&&i.lengthSq()>1e-4){const x=15*Math.PI/180,p=(Math.random()*2-1)*x,g=Math.sin(p),_=Math.cos(p),v=i.x*_-i.z*g,y=i.x*g+i.z*_;i.set(v,0,y).normalize(),this.wanderJitterTimer=.25}if(this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0&&(!a||this.seekHoleThisPursuit===!0)){const x=a?12:6,p=new A(this.body.position.x,.5,this.body.position.z);let g=null,_=1/0;for(const v of this.holes){if(!v.room.containsPoint(p))continue;const y=p.distanceTo(v.position);y<_&&(_=y,g=v)}if(g&&_<=x){const v=g.position.clone().addScaledVector(g.inward,-.1);this.target=v;const y=new A(this.body.position.x,0,this.body.position.z);i.copy(v).sub(y).normalize()}}const l=this.body.velocity,h=i.lengthSq()>1e-4?Math.max(0,l.x*i.x+l.z*i.z):0;if(i.lengthSq()>1e-4){if(h>=this.speed*.9)this.slowTimer=0;else if(this.slowTimer+=t,this.slowTimer>=.25&&this.flipRetryTimer<=0){const x=Math.random()<.5,p=i.clone();x?p.x*=-1:p.z*=-1;const g=le(1.2,2.5),_=this.bounds,v=.8,y=Di(n.x+p.x*g,_.min.x+v,_.max.x-v),C=Di(n.z+p.z*g,_.min.z+v,_.max.z-v);this.target=new A(y,0,C),this.flipRetryTimer=.1,this.slowTimer=0,i.copy(p)}}let d=1.2;if(a&&(d*=1.75),l.x+=(i.x*this.speed*d-l.x)*.2,l.z+=(i.z*this.speed*d-l.z)*.2,this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0&&(!a||this.seekHoleThisPursuit===!0)){const x=new A(this.body.position.x,0,this.body.position.z);let p=null;for(const g of this.holes){const _=g.inward.clone().setY(0).normalize(),v=new A(-_.z,0,_.x).normalize(),y=x.clone().sub(g.position),C=Math.abs(y.x*v.x+y.z*v.z),w=y.x*_.x+y.z*_.z;if(C<=.18&&w>=0&&w<=.9){p=g;break}}p&&this.teleportFromHole(p)}const u=this.bounds;if(l.x+=(n.x<u.min.x+.5?1:0)+(n.x>u.max.x-.5?-1:0),l.z+=(n.z<u.min.z+.5?1:0)+(n.z>u.max.z-.5?-1:0),this.mesh.position.set(this.body.position.x,.1,this.body.position.z),Math.hypot(l.x,l.z)>.05){const x=Math.atan2(l.x,l.z),p=this.mesh.rotation.y;let g=x-p;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;this.mesh.rotation.y=p+g*Math.min(1,t*8)}this.wasPursued=a}teleportFromHole(t){const e=this.holes;let n=e[Math.floor(Math.random()*e.length)];if(e.length>1)for(let i=0;i<4&&n===t;i++)n=e[Math.floor(Math.random()*e.length)];this.inHoleTimer=.25,this.pendingExitHole=n,this.mesh.visible=!1,this.body.velocity.x=0,this.body.velocity.z=0}performHoleExit(t){const e=t.inward.clone().setY(0).normalize(),i=t.position.clone().addScaledVector(e,.6);this.body.position.set(i.x,.36,i.z),this.mesh.visible=!0;const o=75*(Math.random()*2-1)*Math.PI/180,a=Math.cos(o),c=Math.sin(o),l=new A(e.x*a+e.z*c,0,e.z*a-e.x*c).normalize(),h=this.speed*1.5;this.body.velocity.x=l.x*h,this.body.velocity.z=l.z*h,this.target=i.clone().addScaledVector(l,2+Math.random()),this.pathTimer=1,this.holeIgnoreTimer=2}kill(){this.alive=!1,this.mesh.visible=!1,this.world.removeBody(this.body)}}let Ia=null;function YM(){if(!Ia){const r=new bc;Ia=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/mouse-exported-CiP-23e1.fbx",import.meta.url).toString();r.load(n,i=>{const s=new we().setFromObject(i),o=new A;s.getSize(o);const l=.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return Ia}let Da=null;function KM(){return Da||(Da=new Promise(r=>{const t=new URL("/cat-mouse-hunter/assets/mouse-DPwdywtM.png",import.meta.url).toString();new Is().load(t,n=>{try{n.colorSpace=ue??Tn}catch{}r(n)},void 0,()=>r(null))})),Da}const ZM=/^[og]\s*(.+)?/,$M=/^mtllib /,JM=/^usemtl /,QM=/^usemap /,Vh=/\s+/,Hh=new A,Ua=new A,Gh=new A,Wh=new A,un=new A,to=new Bt;function tw(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Hh.fromArray(i,t),Ua.fromArray(i,e),Gh.fromArray(i,n),un.subVectors(Gh,Ua),Wh.subVectors(Hh,Ua),un.cross(Wh),un.normalize(),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,o,a,c,l){const h=this.vertices.length;let d=this.parseVertexIndex(t,h),u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),a!==void 0&&a!==""){const m=this.normals.length;d=this.parseNormalIndex(a,m),u=this.parseNormalIndex(c,m),f=this.parseNormalIndex(l,m),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==""){const m=this.uvs.length;d=this.parseUVIndex(i,m),u=this.parseUVIndex(s,m),f=this.parseUVIndex(o,m),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class ew extends gi{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,o=new Nu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new tw;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const d=l.split(Vh);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(to.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),e.colors.push(to.r,to.g,to.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=l.slice(1).trim().split(Vh),f=[];for(let x=0,p=u.length;x<p;x++){const g=u[x];if(g.length>0){const _=g.split("/");f.push(_)}}const m=f[0];for(let x=1,p=f.length-1;x<p;x++){const g=f[x],_=f[x+1];e.addFace(m[0],g[0],_[0],m[1],g[1],_[1],m[2],g[2],_[2])}}else if(h==="l"){const d=l.substring(1).trim().split(" ");let u=[];const f=[];if(l.indexOf("/")===-1)u=d;else for(let m=0,x=d.length;m<x;m++){const p=d[m].split("/");p[0]!==""&&u.push(p[0]),p[1]!==""&&f.push(p[1])}e.addLineGeometry(u,f)}else if(h==="p"){const u=l.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((i=ZM.exec(l))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);e.startObject(d)}else if(JM.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if($M.test(l))e.materialLibraries.push(l.substring(7).trim());else if(QM.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const u=i[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new Nn;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const l=e.objects[a],h=l.geometry,d=l.materials,u=h.type==="Line",f=h.type==="Points";let m=!1;if(h.vertices.length===0)continue;const x=new He;x.setAttribute("position",new oe(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new oe(h.normals,3)),h.colors.length>0&&(m=!0,x.setAttribute("color",new oe(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new oe(h.uvs,2));const p=[];for(let _=0,v=d.length;_<v;_++){const y=d[_],C=y.name+"_"+y.smooth+"_"+m;let w=e.materials[C];if(this.materials!==null){if(w=this.materials.create(y.name),u&&w&&!(w instanceof Js)){const T=new Js;xn.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(f&&w&&!(w instanceof Ys)){const T=new Ys({size:10,sizeAttenuation:!1});xn.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(u?w=new Js:f?w=new Ys({size:1,sizeAttenuation:!1}):w=new io,w.name=y.name,w.flatShading=!y.smooth,w.vertexColors=m,e.materials[C]=w),p.push(w)}let g;if(p.length>1){for(let _=0,v=d.length;_<v;_++){const y=d[_];x.addGroup(y.groupStart,y.groupCount,_)}u?g=new ah(x,p):f?g=new xa(x,p):g=new he(x,p)}else u?g=new ah(x,p[0]):f?g=new xa(x,p[0]):g=new he(x,p[0]);g.name=l.name,s.add(g)}else if(e.vertices.length>0){const a=new Ys({size:1,sizeAttenuation:!1}),c=new He;c.setAttribute("position",new oe(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new oe(e.colors,3)),a.vertexColors=!0);const l=new xa(c,a);s.add(l)}return s}}const Na=new Map,Fa=new Map;function nw(r){const t=r;if(!Na.has(t)){const e=new bc,n=new URL(r,import.meta.url).toString(),i=new Promise((s,o)=>{e.load(n,a=>{s(a)},void 0,a=>o(a))});Na.set(t,i)}return Na.get(t)}function iw(r){const t=r;if(!Fa.has(t)){const e=new ew,n=new URL(r,import.meta.url).toString(),i=new Promise((s,o)=>{e.load(n,a=>s(a),void 0,a=>o(a))});Fa.set(t,i)}return Fa.get(t)}function sd(r,t){const n=r.toLowerCase().endsWith(".obj")?iw(r):nw(r);return t?Promise.all([n,sw(t).catch(()=>null)]).then(([i,s])=>(s&&i.traverse(o=>{o&&o.isMesh&&o.material&&"map"in o.material&&(o.material.map=s,"needsUpdate"in o.material&&(o.material.needsUpdate=!0))}),i)):n}function Xh(r,t,e,n,i){const s=e.min,o=e.max,a=[new A(s.x,0,s.z),new A(o.x,0,s.z),new A(o.x,0,o.z),new A(s.x,0,o.z)],c=[[a[0],a[1]],[a[1],a[2]],[a[2],a[3]],[a[3],a[0]]],l=new A((s.x+o.x)/2,0,(s.z+o.z)/2),h=i.doorHalf??1.2,d=i.doorMargin??.5,u=.001,f=Math.floor(Math.random()*4);sd(i.modelUrl,i.textureUrl).then(m=>{for(let x=0;x<4;x++){const[p,g]=c[(f+x)%4],_=new A().subVectors(g,p),v=_.length();if(v<.8)continue;const y=_.clone().normalize(),C=new A(_.z,0,-_.x).normalize(),w=p.clone().addScaledVector(y,v/2),T=new A().subVectors(l,w).setY(0).normalize(),k=C.dot(T)>0?C:C.clone().multiplyScalar(-1),b=Math.abs(p.z-o.z)<u&&Math.abs(g.z-o.z)<u,S=Math.abs(p.z-s.z)<u&&Math.abs(g.z-s.z)<u,O=Math.abs(p.x-o.x)<u&&Math.abs(g.x-o.x)<u,G=Math.abs(p.x-s.x)<u&&Math.abs(g.x-s.x)<u,F=[];for(const U of n){if(b&&Math.abs(U.z-o.z)<u){const N=(U.x-p.x)/(g.x-p.x);F.push([Math.max(0,N-(h+d)/v),Math.min(1,N+(h+d)/v)])}if(S&&Math.abs(U.z-s.z)<u){const N=(U.x-p.x)/(g.x-p.x);F.push([Math.max(0,N-(h+d)/v),Math.min(1,N+(h+d)/v)])}if(O&&Math.abs(U.x-o.x)<u){const N=(U.z-p.z)/(g.z-p.z);F.push([Math.max(0,N-(h+d)/v),Math.min(1,N+(h+d)/v)])}if(G&&Math.abs(U.x-s.x)<u){const N=(U.z-p.z)/(g.z-p.z);F.push([Math.max(0,N-(h+d)/v),Math.min(1,N+(h+d)/v)])}}const P=U=>F.every(([N,et])=>!(U>=N&&U<=et));for(let U=0;U<8;U++){const N=.15+Math.random()*.7;if(!P(N))continue;const et=p.clone().addScaledVector(y,N*v),R=i.inwardOffset??.08;et.add(k.clone().multiplyScalar(R));const z=m.clone(!0);if(i.targetHeight&&i.targetHeight>0){const gt=new we().setFromObject(z),Rt=new A;gt.getSize(Rt);const Ct=Rt.y>0?i.targetHeight/Rt.y:1;z.scale.setScalar(Ct)}if(typeof i.scale=="number")z.scale.multiplyScalar(i.scale);else if(i.scale&&typeof i.scale=="object"){const gt=i.scale;z.scale.set(gt.x,gt.y,gt.z)}const X=i.castShadow??!0,st=i.receiveShadow??!0,at=typeof i.textureBrightness=="number"?i.textureBrightness:1;z.traverse(gt=>{if(gt&&gt.isMesh&&(gt.castShadow=X,gt.receiveShadow=st,at!==1&&gt.material)){const Rt=Array.isArray(gt.material)?gt.material:[gt.material];for(const Ct of Rt)Ct&&"color"in Ct&&Ct.color&&typeof Ct.color.multiplyScalar=="function"&&(Ct.color.multiplyScalar(at),"needsUpdate"in Ct&&(Ct.needsUpdate=!0))}});const ht=new we().setFromObject(z).min.y;z.position.copy(et),z.position.y-=ht;const mt=Math.atan2(k.x,k.z)+re.degToRad(i.yawOffset??0);z.rotation.y=mt,t.add(z);let wt=null;if(i.collidable!==!1){z.updateMatrixWorld(!0);const gt=new we().setFromObject(z),Rt=new A;gt.getSize(Rt);const Ct=gt.getCenter(new A),zt=i.shrink??.9,qt=Math.max(.05,Rt.x*zt/2),J=Math.max(.3,Rt.y*zt/2),Te=Math.max(.05,Rt.z*zt/2),It=new Sn(new M(qt,J,Te));wt=new Mt({mass:0,shape:It}),wt.position.set(Ct.x,Ct.y,Ct.z),wt.quaternion.setFromEuler(0,mt,0),i.tag&&(wt[`is${i.tag[0].toUpperCase()}${i.tag.slice(1)}`]=!0),r.addBody(wt)}i.onPlaced&&i.onPlaced(z,wt);return}}i.onPlaced&&i.onPlaced(new ae,null)})}const za=new Map;function sw(r){const t=r;if(!za.has(t)){const e=new URL(r,import.meta.url).toString(),n=new Promise((i,s)=>{new Is().load(e,a=>{try{a.colorSpace=ue??Tn}catch{}i(a)},void 0,a=>s(a))});za.set(t,n)}return za.get(t)}function qh(r,t,e){sd(e.modelUrl,e.textureUrl).then(n=>{const i=n.clone(!0);if(e.targetHeight&&e.targetHeight>0){const u=new we().setFromObject(i),f=new A;u.getSize(f);const m=f.y>0?e.targetHeight/f.y:1;i.scale.setScalar(m)}typeof e.scale=="number"?i.scale.multiplyScalar(e.scale):e.scale&&typeof e.scale=="object"&&i.scale.set(e.scale.x,e.scale.y,e.scale.z);const s=e.castShadow??!0,o=e.receiveShadow??!0,a=typeof e.textureBrightness=="number"?e.textureBrightness:1;i.traverse(u=>{if(u&&u.isMesh&&(u.castShadow=s,u.receiveShadow=o,a!==1&&u.material)){const f=Array.isArray(u.material)?u.material:[u.material];for(const m of f)m&&"color"in m&&m.color&&typeof m.color.multiplyScalar=="function"&&(m.color.multiplyScalar(a),"needsUpdate"in m&&(m.needsUpdate=!0))}});const l=new we().setFromObject(i).min.y;i.position.copy(e.position),typeof e.y=="number"?i.position.y=e.y:i.position.y-=l;const h=re.degToRad(e.yawDeg??0)+re.degToRad(e.yawOffset??0);i.rotation.y=h,t.add(i);let d=null;if(e.collidable!==!1){i.updateMatrixWorld(!0);const u=new we().setFromObject(i),f=new A;u.getSize(f);const m=u.getCenter(new A),x=e.shrink??.9,p=Math.max(.05,f.x*x/2),g=Math.max(.1,f.y*x/2),_=Math.max(.05,f.z*x/2),v=new Sn(new M(p,g,_));d=new Mt({mass:0,shape:v}),d.position.set(m.x,m.y,m.z),d.quaternion.setFromEuler(0,h,0),e.tag&&(d[`is${e.tag[0].toUpperCase()}${e.tag.slice(1)}`]=!0),r.addBody(d)}e.onPlaced&&e.onPlaced(i,d)})}class rw{constructor(t,e,n=Math.random()*1e9){yt(this,"roomBoxes",[]);yt(this,"roomLabels",[]);yt(this,"roomAdjacency",[]);yt(this,"worldBounds");yt(this,"floorBody");yt(this,"meshes",[]);yt(this,"bodies",[]);yt(this,"spawnPoints",[]);yt(this,"dynamicPairs",[]);yt(this,"pausedBodies",new Set);yt(this,"mouseHoles",[]);this.world=t,this.scene=e,this.rngSeed=n,this.worldBounds=new we(new A(-20,0,-20),new A(20,5,20));const i=new B_;this.floorBody=new Mt({mass:0}),this.floorBody.addShape(i),this.floorBody.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(this.floorBody);const s=new he(new Ao(100,100),new on({color:11121823}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),this.meshes.push(s)}update(t,e){const o=Math.max(0,10);for(const a of this.dynamicPairs){if(e){const h=a.body.position.x-e.x,d=a.body.position.z-e.z,u=Math.hypot(h,d),f=this.pausedBodies.has(a.body);!f&&u>14?(a.body.velocity.set(0,0,0),a.body.angularVelocity.set(0,0,0),a.body.sleep&&a.body.sleep(),this.pausedBodies.add(a.body)):f&&u<o&&(a.body.wakeUp&&a.body.wakeUp(),this.pausedBodies.delete(a.body))}const c=a.body.position,l=a.body.quaternion;a.mesh.position.set(c.x,c.y,c.z),a.mesh.quaternion&&a.mesh.quaternion.set(l.x,l.y,l.z,l.w)}}dispose(){for(const t of this.bodies)this.world.removeBody(t);for(const t of this.meshes)this.scene.remove(t);this.bodies.length=0,this.meshes.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0}generate(t){for(let D=this.meshes.length-1;D>=1;D--)this.scene.remove(this.meshes[D]),this.meshes.splice(D,1);for(const D of this.bodies)this.world.removeBody(D);this.bodies.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0,this.mouseHoles.length=0;const e=Math.max(8,t.houseHalfSize||10),n=new A(-e,0,-e),i=new A(e,3,e),s=new we(n.clone(),i.clone()),o=[];let a=[s];const l=1.2*2+.6,h=(i.x-n.x)*(i.z-n.z),d=typeof t.roomDensity=="number"&&t.roomDensity>0?t.roomDensity:Math.max(.002,t.roomCount/Math.max(1,h)),u=Math.max(1,Math.min(48,Math.floor(h*d)));let f=0;for(;a.length+o.length<u&&f++<500;){let D=-1,H=-1;for(let Y=0;Y<a.length;Y++){const $=a[Y],W=new A().subVectors($.max,$.min),ct=W.x*W.z;ct>H&&(H=ct,D=Y)}if(D<0)break;const B=a.splice(D,1)[0],q=new A().subVectors(B.max,B.min);let Z=q.x>q.z,K=!1;for(let Y=0;Y<8&&!K;Y++)if(Y<4?Z:!Z){const W=B.min.x+l,ct=B.max.x-l;if(ct-W<=.5)continue;const dt=le(W,ct),ut=new we(B.min.clone(),new A(dt,B.max.y,B.max.z)),Q=new we(new A(dt,B.min.y,B.min.z),B.max.clone()),lt=new A().subVectors(ut.max,ut.min),St=new A().subVectors(Q.max,Q.min);lt.x>=l&&lt.z>=l&&St.x>=l&&St.z>=l&&(a.push(ut,Q),K=!0)}else{const W=B.min.z+l,ct=B.max.z-l;if(ct-W<=.5)continue;const dt=le(W,ct),ut=new we(B.min.clone(),new A(B.max.x,B.max.y,dt)),Q=new we(new A(B.min.x,B.min.y,dt),B.max.clone()),lt=new A().subVectors(ut.max,ut.min),St=new A().subVectors(Q.max,Q.min);lt.x>=l&&lt.z>=l&&St.x>=l&&St.z>=l&&(a.push(ut,Q),K=!0)}K||o.push(B)}o.push(...a),this.roomBoxes=o;const m=7.5,x=.35,p=new on({color:15788758,roughness:.9,metalness:0}),g=new on({color:16777215,roughness:.7,metalness:0}),_=(D,H,B)=>{const q=new A().subVectors(H,D),Z=q.length(),K=Math.atan2(q.x,q.z),Y=new $e(x,B,Z),$=new he(Y,p);$.position.copy(new A().addVectors(D,H).multiplyScalar(.5)),$.position.y=B/2,$.rotation.y=K,$.castShadow=!0,$.receiveShadow=!0,this.scene.add($),this.meshes.push($);const W=new Sn(new M(x/2,B/2,Z/2)),ct=new Mt({mass:0,shape:W});ct.position.set($.position.x,$.position.y,$.position.z),ct.quaternion.setFromEuler(0,K,0),this.world.addBody(ct),this.bodies.push(ct)},v=(D,H,B)=>{const q=new A().subVectors(H,D),Z=q.length();if(Z<.05)return;const K=Math.atan2(q.x,q.z),Y=new A().addVectors(D,H).multiplyScalar(.5),$=new A(q.z,0,-q.x).normalize(),W=.24,ct=.06,dt=x/2+ct/2,ut=new $e(ct,W,Math.max(.01,Z-.02)),Q=new he(ut,g);Q.position.copy(Y),Q.position.y=W/2,Q.position.add($.clone().multiplyScalar(dt)),Q.rotation.y=K,Q.castShadow=!1,Q.receiveShadow=!0;const lt=Q.clone();lt.position.copy(Y),lt.position.y=W/2,lt.position.add($.clone().multiplyScalar(-dt)),this.scene.add(Q),this.meshes.push(Q),this.scene.add(lt),this.meshes.push(lt)},y=(D,H)=>{const B=new A().subVectors(H,D),q=B.length();if(q<.05)return;const Z=Math.atan2(B.x,B.z),K=new A().addVectors(D,H).multiplyScalar(.5),Y=new A(B.z,0,-B.x).normalize(),$=.24,W=.06,ct=x/2+W/2,dt=new $e(W,$,Math.max(.01,q-.02)),ut=new A((n.x+i.x)/2,0,(n.z+i.z)/2),Q=new A().subVectors(ut,K).setY(0).normalize(),St=Y.dot(Q)>0?Y:Y.clone().multiplyScalar(-1),_t=new he(dt,g);_t.position.copy(K),_t.position.y=$/2,_t.position.add(St.clone().multiplyScalar(ct)),_t.rotation.y=Z,_t.castShadow=!1,_t.receiveShadow=!0,this.scene.add(_t),this.meshes.push(_t)},C=(D,H)=>{const B=D.min,q=D.max,Z=[new A(B.x,0,B.z),new A(q.x,0,B.z),new A(q.x,0,q.z),new A(B.x,0,q.z)],K=[[Z[0],Z[1]],[Z[1],Z[2]],[Z[2],Z[3]],[Z[3],Z[0]]];for(const[Y,$]of K){const W=Math.abs(Y.z-i.z)<.001&&Math.abs($.z-i.z)<.001,ct=Math.abs(Y.z-n.z)<.001&&Math.abs($.z-n.z)<.001,dt=Math.abs(Y.x-i.x)<.001&&Math.abs($.x-i.x)<.001,ut=Math.abs(Y.x-n.x)<.001&&Math.abs($.x-n.x)<.001,Q=!(W||ct||dt||ut),lt=new A().subVectors($,Y),St=lt.length(),_t=lt.clone().normalize(),Dt=.3,Tt=1.2,pt=[];for(const ft of H){const Lt=new A().subVectors(ft,Y).dot(_t)/St;if(Lt<=.05||Lt>=.95)continue;const bt=Y.clone().addScaledVector(_t,Lt*St),Gt=ft.clone().sub(bt);Math.abs(Gt.x)+Math.abs(Gt.z)<Dt&&pt.push({t:Lt,center:bt})}pt.sort((ft,xt)=>ft.t-xt.t);const V=[];for(const ft of pt)(V.length===0||Math.abs(ft.t-V[V.length-1].t)*St>=Tt*2+.6)&&V.push(ft);if(V.length>0){const ft=bt=>new A(re.clamp(bt.x,Math.min(Y.x,$.x),Math.max(Y.x,$.x)),bt.y,re.clamp(bt.z,Math.min(Y.z,$.z),Math.max(Y.z,$.z))),xt=(bt,Gt)=>{bt.distanceToSquared(Gt)<1e-6||(_(bt,Gt,m),Q?v(bt,Gt):y(bt,Gt))};let Lt=Y.clone();for(let bt=0;bt<V.length;bt++){const Gt=V[bt].center,ne=Gt.clone().addScaledVector(_t,-Tt),_e=Gt.clone().addScaledVector(_t,Tt),Re=ft(ne);xt(Lt,Re);const Qt=Tt*2,ye=m/3,Pe=m-ye,vi=Math.atan2(_t.x,_t.z),Wi=new $e(x,ye,Qt),fe=new he(Wi,p);fe.position.copy(Gt),fe.position.y=Pe+ye/2,fe.rotation.y=vi,fe.castShadow=!0,fe.receiveShadow=!0,this.scene.add(fe),this.meshes.push(fe);const je=new Sn(new M(x/2,ye/2,Qt/2)),ze=new Mt({mass:0,shape:je});ze.position.set(fe.position.x,fe.position.y,fe.position.z),ze.quaternion.setFromEuler(0,vi,0),this.world.addBody(ze),this.bodies.push(ze),Lt=ft(_e)}xt(Lt,$.clone())}else _(Y,$,m),Q?v(Y,$):y(Y,$)}},w=o.map(()=>[]),T=.001;for(let D=0;D<o.length;D++)for(let H=D+1;H<o.length;H++){const B=o[D],q=o[H];if(Math.min(B.max.z,q.max.z)-Math.max(B.min.z,q.min.z)>0){const W=Math.max(B.min.z,q.min.z)+1.6,ct=Math.min(B.max.z,q.max.z)-1.6;if(ct>W){const dt=ut=>{const Q=le(W,ct),lt=new A(ut,0,Q);w[D].push(lt),w[H].push(lt)};if(Math.abs(B.max.x-q.min.x)<T){dt(B.max.x);continue}if(Math.abs(B.min.x-q.max.x)<T){dt(B.min.x);continue}}}if(Math.min(B.max.x,q.max.x)-Math.max(B.min.x,q.min.x)>0){const W=Math.max(B.min.x,q.min.x)+1.6,ct=Math.min(B.max.x,q.max.x)-1.6;if(ct>W){const dt=ut=>{const Q=le(W,ct),lt=new A(Q,0,ut);w[D].push(lt),w[H].push(lt)};if(Math.abs(B.max.z-q.min.z)<T){dt(B.max.z);continue}if(Math.abs(B.min.z-q.max.z)<T){dt(B.min.z);continue}}}}const k=o.findIndex(D=>Math.abs(D.max.z-i.z)<T);if(k>=0){const D=o[k],B=1.2+.4,q=D.min.x+B,Z=D.max.x-B,K=q<Z?le(q,Z):(D.min.x+D.max.x)/2;w[k].push(new A(K,0,D.max.z))}this.classifyRooms(o,w,n,i);for(let D=0;D<o.length;D++)C(o[D],w[D]);if(this.spawnPoints.length>0){const Z=K=>{let Y=-1;for(let ct=0;ct<o.length;ct++){const dt=o[ct];if(K.x>=dt.min.x&&K.x<=dt.max.x&&K.z>=dt.min.z&&K.z<=dt.max.z){Y=ct;break}}if(Y<0)return!0;const $=o[Y],W=w[Y];for(const ct of W)if(Math.abs(ct.z-$.max.z)<.001&&K.z<=$.max.z&&K.z>=$.max.z-.8&&K.x>=ct.x-1.6&&K.x<=ct.x+1.6||Math.abs(ct.z-$.min.z)<.001&&K.z>=$.min.z&&K.z<=$.min.z+.8&&K.x>=ct.x-1.6&&K.x<=ct.x+1.6||Math.abs(ct.x-$.max.x)<.001&&K.x<=$.max.x&&K.x>=$.max.x-.8&&K.z>=ct.z-1.6&&K.z<=ct.z+1.6||Math.abs(ct.x-$.min.x)<.001&&K.x>=$.min.x&&K.x<=$.min.x+.8&&K.z>=ct.z-1.6&&K.z<=ct.z+1.6)return!1;return!0};this.spawnPoints=this.spawnPoints.filter(Z)}const b=[],S=new on({color:0,roughness:1,metalness:0}),O=(D,H,B)=>{const q=new A().subVectors(B,H);if(q.length()<.8)return;const K=.2+Math.random()*.6,Y=H.clone().addScaledVector(q,K),$=Math.atan2(q.x,q.z),W=new A().addVectors(H,B).multiplyScalar(.5),ct=new A(q.z,0,-q.x).normalize(),dt=new A((D.min.x+D.max.x)/2,0,(D.min.z+D.max.z)/2),ut=new A().subVectors(dt,W).setY(0).normalize(),Q=ct.dot(ut)>0?ct:ct.clone().multiplyScalar(-1);{const je=Math.abs(H.z-B.z)<.001&&Math.abs(H.z-D.max.z)<.001,ze=Math.abs(H.z-B.z)<.001&&Math.abs(H.z-D.min.z)<.001,Be=Math.abs(H.x-B.x)<.001&&Math.abs(H.x-D.max.x)<.001,mr=Math.abs(H.x-B.x)<.001&&Math.abs(H.x-D.min.x)<.001;let _i=!1;for(const ce of b){if(je&&Math.abs(ce.z+ce.halfZ-D.max.z)<.2&&Y.x>=ce.x-ce.halfX-.06&&Y.x<=ce.x+ce.halfX+.06){_i=!0;break}if(ze&&Math.abs(ce.z-ce.halfZ-D.min.z)<.2&&Y.x>=ce.x-ce.halfX-.06&&Y.x<=ce.x+ce.halfX+.06){_i=!0;break}if(Be&&Math.abs(ce.x+ce.halfX-D.max.x)<.2&&Y.z>=ce.z-ce.halfZ-.06&&Y.z<=ce.z+ce.halfZ+.06){_i=!0;break}if(mr&&Math.abs(ce.x-ce.halfX-D.min.x)<.2&&Y.z>=ce.z-ce.halfZ-.06&&Y.z<=ce.z+ce.halfZ+.06){_i=!0;break}}if(_i)return}const lt=.001,St=o.indexOf(D);if(St>=0){const Wi=w[St],fe=1.2,je=.4;let ze=!1;for(const Be of Wi){if(Math.abs(Y.z-D.max.z)<lt&&Math.abs(Be.z-D.max.z)<lt&&Y.x>=Be.x-(fe+je)&&Y.x<=Be.x+(fe+je)){ze=!0;break}if(Math.abs(Y.z-D.min.z)<lt&&Math.abs(Be.z-D.min.z)<lt&&Y.x>=Be.x-(fe+je)&&Y.x<=Be.x+(fe+je)){ze=!0;break}if(Math.abs(Y.x-D.max.x)<lt&&Math.abs(Be.x-D.max.x)<lt&&Y.z>=Be.z-(fe+je)&&Y.z<=Be.z+(fe+je)){ze=!0;break}if(Math.abs(Y.x-D.min.x)<lt&&Math.abs(Be.x-D.min.x)<lt&&Y.z>=Be.z-(fe+je)&&Y.z<=Be.z+(fe+je)){ze=!0;break}}if(ze)return}const _t=.02,Dt=.36,Tt=.3,pt=Dt/2,V=.85,ft=new Nn,xt=new $e(_t,Tt,Dt),Lt=new he(xt,S);Lt.position.set(0,Tt/2,0),ft.add(Lt);const bt=new xo(pt,pt,_t,24),Gt=new he(bt,S);Gt.rotation.z=Math.PI/2;const ne=pt*V;Gt.position.set(0,Tt+pt-ne,0),ft.add(Gt),ft.position.copy(Y),ft.position.y=0;const _e=x/2+_t/2+.002;ft.position.add(Q.clone().multiplyScalar(_e)),ft.rotation.y=$,ft.position.y+=.001,this.scene.add(ft),this.meshes.push(ft),this.mouseHoles.push({position:ft.position.clone(),inward:Q.clone(),room:D});const Re=.06,Qt=.24,ye=new $e(Re+.005,Qt,Dt*.9),Pe=new he(ye,S);Pe.position.copy(Y),Pe.position.y=Qt/2+.001;const vi=x/2+(Re+.005)/2+.001;Pe.position.add(Q.clone().multiplyScalar(vi)),Pe.rotation.y=$,this.scene.add(Pe),this.meshes.push(Pe)};for(let D=0;D<o.length;D++){const H=o[D],B=H.min,q=H.max,Z=[new A(B.x,0,B.z),new A(q.x,0,B.z),new A(q.x,0,q.z),new A(B.x,0,q.z)],K=[[Z[0],Z[1]],[Z[1],Z[2]],[Z[2],Z[3]],[Z[3],Z[0]]];for(const[Y,$]of K){const W=Math.abs(Y.z-i.z)<.001&&Math.abs($.z-i.z)<.001,ct=Math.abs(Y.z-n.z)<.001&&Math.abs($.z-n.z)<.001,dt=Math.abs(Y.x-i.x)<.001&&Math.abs($.x-i.x)<.001,ut=Math.abs(Y.x-n.x)<.001&&Math.abs($.x-n.x)<.001;W||ct||dt||ut||Math.random()<.25&&O(H,Y,$)}}const G=3;if(this.mouseHoles.length<G){const D=[];for(let H=0;H<o.length;H++){const B=o[H],q=B.min,Z=B.max,K=[new A(q.x,0,q.z),new A(Z.x,0,q.z),new A(Z.x,0,Z.z),new A(q.x,0,Z.z)],Y=[[K[0],K[1]],[K[1],K[2]],[K[2],K[3]],[K[3],K[0]]];for(const[$,W]of Y){const ct=Math.abs($.z-i.z)<.001&&Math.abs(W.z-i.z)<.001,dt=Math.abs($.z-n.z)<.001&&Math.abs(W.z-n.z)<.001,ut=Math.abs($.x-i.x)<.001&&Math.abs(W.x-i.x)<.001,Q=Math.abs($.x-n.x)<.001&&Math.abs(W.x-n.x)<.001;ct||dt||ut||Q||D.push({room:B,a:$,b:W})}}for(let H=0;H<D.length&&this.mouseHoles.length<G;H++){const B=Math.floor(Math.random()*D.length),q=D[B];O(q.room,q.a,q.b)}}const F=.2,P=10,U=new A(n.x+x,0,i.z+F),N=new A(i.x-x,0,i.z+F+P),et=1.2,R=new on({color:9075291}),z=(D,H)=>{const B=new A().subVectors(H,D),q=B.length(),Z=Math.atan2(B.x,B.z),K=new $e(.15,et,q),Y=new he(K,R);Y.position.copy(new A().addVectors(D,H).multiplyScalar(.5)),Y.position.y=et/2,Y.rotation.y=Z,this.scene.add(Y),this.meshes.push(Y);const $=new Sn(new M(.075,et/2,q/2)),W=new Mt({mass:0,shape:$});W.position.set(Y.position.x,Y.position.y,Y.position.z),W.quaternion.setFromEuler(0,Z,0),this.world.addBody(W),this.bodies.push(W)};z(new A(N.x,0,U.z),new A(N.x,0,N.z)),z(new A(N.x,0,N.z),new A(U.x,0,N.z)),z(new A(U.x,0,N.z),new A(U.x,0,U.z));const X=new URL("/cat-mouse-hunter/assets/wood-floor-EyqHkZ5a.jpg",import.meta.url).toString(),st=new Is().load(X);st.wrapS=Jn,st.wrapT=Jn,st.colorSpace=ue,st.anisotropy=8;const at=2.5,nt=(D,H)=>{const B=st.clone();return B.needsUpdate=!0,B.wrapS=Jn,B.wrapT=Jn,B.repeat.set(Math.max(1,D/at),Math.max(1,H/at)),new on({map:B,roughness:.85,metalness:0})},ht=new on({color:15132390});for(const D of o){const H=new A().subVectors(D.max,D.min),B=new he(new $e(H.x,.1,H.z),nt(H.x,H.z));B.position.set((D.min.x+D.max.x)/2,.05,(D.min.z+D.max.z)/2),B.receiveShadow=!0,this.scene.add(B),this.meshes.push(B);const q=new Sn(new M(H.x/2,.05,H.z/2)),Z=new Mt({mass:0,shape:q});Z.position.set(B.position.x,B.position.y,B.position.z),this.world.addBody(Z),this.bodies.push(Z);const K=new he(new $e(H.x,.1,H.z),ht);K.position.set((D.min.x+D.max.x)/2,m-.05,(D.min.z+D.max.z)/2),K.receiveShadow=!1,K.castShadow=!1,this.scene.add(K),this.meshes.push(K);const Y=new Mt({mass:0,shape:new Sn(new M(H.x/2,.05,H.z/2))});Y.position.set(K.position.x,K.position.y,K.position.z),this.world.addBody(Y),this.bodies.push(Y);for(let $=0;$<5;$++){const W=le(D.min.x+.5,D.max.x-.5),ct=le(D.min.z+.5,D.max.z-.5);this.spawnPoints.push(new A(W,0,ct))}}const mt=new A().subVectors(N,U),wt=new he(new $e(mt.x,.1,mt.z),new on({color:11061129}));wt.position.set((U.x+N.x)/2,.05,(U.z+N.z)/2),wt.receiveShadow=!0,this.scene.add(wt),this.meshes.push(wt);const gt=new Mt({mass:0,shape:new Sn(new M(mt.x/2,.05,mt.z/2))});gt.position.set(wt.position.x,wt.position.y,wt.position.z),this.world.addBody(gt),this.bodies.push(gt),new on({color:9132587}),new on({color:5597999}),new on({color:3821675}),new on({color:8026746});for(let D=0;D<o.length;D++)this.roomLabels[D]==="Bathroom"&&(Xh(this.world,this.scene,o[D],w[D],{modelUrl:"../models/toilet/toilet.fbx",targetHeight:2,inwardOffset:1.08,yawOffset:-90,shrink:.9,tag:"toilet",onPlaced:(H,B)=>{this.meshes.push(H),B&&this.bodies.push(B)}}),Xh(this.world,this.scene,o[D],w[D],{modelUrl:"../models/sink-bathroom/sink-bathroom.obj",targetHeight:3,inwardOffset:.9,yawOffset:0,shrink:.9,tag:"sink",onPlaced:(H,B)=>{this.meshes.push(H),B&&this.bodies.push(B)}}));const Rt=3,Ct=2,zt=2,qt=(D,H,B,q,Z)=>{for(const W of H)if(B===0&&Math.abs(W.z-D.max.z)<.15&&Math.abs(q-W.x)<Z+1.2+.6||B===1&&Math.abs(W.z-D.min.z)<.15&&Math.abs(q-W.x)<Z+1.2+.6||B===2&&Math.abs(W.x-D.max.x)<.15&&Math.abs(q-W.z)<Z+1.2+.6||B===3&&Math.abs(W.x-D.min.x)<.15&&Math.abs(q-W.z)<Z+1.2+.6)return!0;return!1},J=(D,H,B,q)=>!(H.x<B.x||D.x>q.x||H.y<B.y||D.y>q.y),Te=(D,H,B,q,Z,K,Y)=>{const $=Math.abs(Math.sin(Z))>.5?Y/2:K/2,W=Math.abs(Math.sin(Z))>.5?K/2:Y/2,ct=new Nt(B-$,q-W),dt=new Nt(B+$,q+W),ut=.001,Q=1.2,lt=1,St=.6;for(const _t of H){if(Math.abs(_t.z-D.max.z)<ut){const Dt=new Nt(_t.x-(Q+St),D.max.z-lt),Tt=new Nt(_t.x+(Q+St),D.max.z);if(J(ct,dt,Dt,Tt))return!0}if(Math.abs(_t.z-D.min.z)<ut){const Dt=new Nt(_t.x-(Q+St),D.min.z),Tt=new Nt(_t.x+(Q+St),D.min.z+lt);if(J(ct,dt,Dt,Tt))return!0}if(Math.abs(_t.x-D.max.x)<ut){const Dt=new Nt(D.max.x-lt,_t.z-(Q+St)),Tt=new Nt(D.max.x,_t.z+(Q+St));if(J(ct,dt,Dt,Tt))return!0}if(Math.abs(_t.x-D.min.x)<ut){const Dt=new Nt(D.min.x,_t.z-(Q+St)),Tt=new Nt(D.min.x+lt,_t.z+(Q+St));if(J(ct,dt,Dt,Tt))return!0}}return!1},It=(D,H,B,q)=>{for(const K of b)if(!(D+B+.04<K.x-K.halfX||D-B-.04>K.x+K.halfX||H+q+.04<K.z-K.halfZ||H-q-.04>K.z+K.halfZ))return!0;return!1},Vt=(D,H)=>{const B=new A().subVectors(D.max,D.min);Math.max(B.x,B.z);const q=Rt,Z=Ct,K=zt,Y=Math.floor(Math.random()*4),$=.06;let W=0,ct=0,dt=0,ut=12,Q=!1;for(;ut-- >0;){if(Y===0){ct=D.max.z-(Z/2+$);const Dt=D.min.x+.6+q/2,Tt=D.max.x-.6-q/2;if(W=le(Dt,Math.max(Dt,Tt)),dt=Math.PI,!qt(D,H,Y,W,q/2)&&!It(W,ct,q/2,Z/2)){Q=!0;break}}else if(Y===1){ct=D.min.z+(Z/2+$);const Dt=D.min.x+.6+q/2,Tt=D.max.x-.6-q/2;if(W=le(Dt,Math.max(Dt,Tt)),dt=0,!qt(D,H,Y,W,q/2)&&!It(W,ct,q/2,Z/2)){Q=!0;break}}else if(Y===2){W=D.max.x-(Z/2+$);const Dt=D.min.z+.6+q/2,Tt=D.max.z-.6-q/2;if(ct=le(Dt,Math.max(Dt,Tt)),dt=-Math.PI/2,!qt(D,H,Y,ct,q/2)&&!It(W,ct,Z/2,q/2)){Q=!0;break}}else{W=D.min.x+(Z/2+$);const Dt=D.min.z+.6+q/2,Tt=D.max.z-.6-q/2;if(ct=le(Dt,Math.max(Dt,Tt)),dt=Math.PI/2,!qt(D,H,Y,ct,q/2)&&!It(W,ct,Z/2,q/2)){Q=!0;break}}if(!Q)return{placed:!1}}if(Te(D,H,W,ct,dt,q,Z))return{placed:!1};const lt=Math.round(re.radToDeg(dt));qh(this.world,this.scene,{modelUrl:"../models/couch/couch.fbx",textureUrl:"../models/couch/couch.jpg",textureBrightness:2,targetHeight:K,position:new A(W,0,ct),yawDeg:lt,collidable:!1,tag:"couch",onPlaced:(Dt,Tt)=>{this.meshes.push(Dt)}});const St=Math.abs(Math.sin(dt))>.5?Z/2:q/2,_t=Math.abs(Math.sin(dt))>.5?q/2:Z/2;return b.push({x:W,z:ct,halfX:St,halfZ:_t}),{placed:!0,x:W,z:ct,yaw:dt}};for(let D=0;D<o.length;D++){const H=o[D];(H.min.x+H.max.x)/2,(H.min.z+H.max.z)/2}const Pt=this.roomLabels.map((D,H)=>({lab:D,i:H})).filter(({lab:D})=>D==="Living Room"||D==="Family Room").map(({i:D})=>D);for(const D of Pt){const H=Vt(o[D],w[D]);if(H.placed&&Math.random()<.35){const B=Math.random()<.5?1:-1,q=H.yaw,Z=new A(Math.cos(q),0,-Math.sin(q)),$=new A(H.x,0,H.z).clone().add(Z.clone().multiplyScalar(B*(Rt/2+Ct/2+.06))),W=q+B*Math.PI/2;if($.x-Rt/2>=o[D].min.x+.5&&$.x+Rt/2<=o[D].max.x-.5&&$.z-Ct/2>=o[D].min.z+.5&&$.z+Ct/2<=o[D].max.z-.5&&!It($.x,$.z,Math.abs(Math.sin(W))>.5?Ct/2:Rt/2,Math.abs(Math.sin(W))>.5?Rt/2:Ct/2)&&!Te(o[D],w[D],$.x,$.z,W,Rt,Ct)){qh(this.world,this.scene,{modelUrl:"../models/couch/couch.fbx",textureUrl:"../models/couch/couch.jpg",textureBrightness:1,targetHeight:zt,position:$,yawDeg:Math.round(re.radToDeg(W)),collidable:!0,tag:"couch",onPlaced:(ut,Q)=>{this.meshes.push(ut)}});const ct=Math.abs(Math.sin(W))>.5?Ct/2:Rt/2,dt=Math.abs(Math.sin(W))>.5?Rt/2:Ct/2;b.push({x:$.x,z:$.z,halfX:ct,halfZ:dt})}}}if(this.mouseHoles.length>0&&b.length>0){const B=K=>{const Y=K.room,$=K.position,W=Math.abs($.z-Y.max.z)<.001,ct=Math.abs($.z-Y.min.z)<.001,dt=Math.abs($.x-Y.max.x)<.001,ut=Math.abs($.x-Y.min.x)<.001;for(const Q of b)if(W&&Math.abs(Q.z+Q.halfZ-Y.max.z)<.2&&$.x>=Q.x-Q.halfX-.06&&$.x<=Q.x+Q.halfX+.06||ct&&Math.abs(Q.z-Q.halfZ-Y.min.z)<.2&&$.x>=Q.x-Q.halfX-.06&&$.x<=Q.x+Q.halfX+.06||dt&&Math.abs(Q.x+Q.halfX-Y.max.x)<.2&&$.z>=Q.z-Q.halfZ-.06&&$.z<=Q.z+Q.halfZ+.06||ut&&Math.abs(Q.x-Q.halfX-Y.min.x)<.2&&$.z>=Q.z-Q.halfZ-.06&&$.z<=Q.z+Q.halfZ+.06)return!1;return!0},q=this.mouseHoles.length;this.mouseHoles=this.mouseHoles.filter(B);const Z=Math.max(0,q-this.mouseHoles.length);if(Z>0){const K=[];for(let W=0;W<o.length;W++){const ct=o[W],dt=ct.min,ut=ct.max,Q=[new A(dt.x,0,dt.z),new A(ut.x,0,dt.z),new A(ut.x,0,ut.z),new A(dt.x,0,ut.z)],lt=[[Q[0],Q[1]],[Q[1],Q[2]],[Q[2],Q[3]],[Q[3],Q[0]]];for(const[St,_t]of lt){const Dt=Math.abs(St.z-i.z)<.001&&Math.abs(_t.z-i.z)<.001,Tt=Math.abs(St.z-n.z)<.001&&Math.abs(_t.z-n.z)<.001,pt=Math.abs(St.x-i.x)<.001&&Math.abs(_t.x-i.x)<.001,V=Math.abs(St.x-n.x)<.001&&Math.abs(_t.x-n.x)<.001;Dt||Tt||pt||V||K.push({room:ct,a:St,b:_t})}}let Y=Z,$=K.length*2+20;for(;Y>0&&$-- >0&&K.length>0;){const W=Math.floor(Math.random()*K.length),ct=K[W];O(ct.room,ct.a,ct.b);const dt=this.mouseHoles.filter(B),ut=dt.length>this.mouseHoles.length?1:0;this.mouseHoles=dt,ut>0&&(Y-=ut)}this.mouseHoles=this.mouseHoles.filter(B)}}this.spawnPoints.length>0&&b.length>0&&(this.spawnPoints=this.spawnPoints.filter(H=>{for(const B of b)if(H.x>=B.x-B.halfX-.1&&H.x<=B.x+B.halfX+.1&&H.z>=B.z-B.halfZ-.1&&H.z<=B.z+B.halfZ+.1)return!1;return!0}));const de={"Living Room":1,"Family Room":1,"Master Bedroom":.9,Bedroom:.8,"Spare Room":.5,"Dining Room":.2,Hallway:0,Kitchen:0,Bathroom:0,Office:0,Laundry:0,Closet:0},Ht=[];for(let D=0;D<o.length;D++){const H=this.roomLabels[D]||"",B=de[H]??0;if(B<=0)continue;const q=new A().subVectors(o[D].max,o[D].min),Z=re.clamp(q.x*q.z/16,.6,1.6);Ht.push({room:o[D],weight:B*Z})}const I=[];let E=0;for(const D of Ht)E+=D.weight,I.push(E);const tt=()=>{if(Ht.length===0||E<=0)return null;const D=Math.random()*E,H=I.findIndex(B=>D<B);return Ht[Math.max(0,H)].room};for(let D=0;D<t.clutterCount;D++){const H=tt();if(!H)break;const B=.6,q=le(H.min.x+B,H.max.x-B),Z=le(H.min.z+B,H.max.z-B),K=.15,Y=le(.12,.6)*.25,$=le(2,3),W=new on({color:16777215*Math.random()});if(Math.random()<.5){const dt=le(.08,.18)*$,ut=new he(new xc(dt,18,14),W);ut.position.set(q,K+dt+.02,Z),ut.castShadow=!0,ut.receiveShadow=!0,this.scene.add(ut),this.meshes.push(ut);const Q=new Mt({mass:Y,shape:new Io(dt)});Q.angularDamping=.25,Q.linearDamping=.02,Q.position.set(ut.position.x,ut.position.y,ut.position.z),this.world.addBody(Q),this.bodies.push(Q),this.dynamicPairs.push({mesh:ut,body:Q})}else{const ct=le(.06,.12),dt=le(.14,.3),ut=ct*$,Q=dt*$,lt=new he(new xo(ut,ut,Q,16),W);lt.position.set(q,K+Q/2+.02,Z),lt.castShadow=!0,lt.receiveShadow=!0,this.scene.add(lt),this.meshes.push(lt);const St=new z_(ut,ut,Q,16),_t=new Mt({mass:Y}),Dt=new Ae;Dt.setFromEuler(0,0,Math.PI/2),_t.addShape(St,new M(0,0,0),Dt),_t.angularDamping=.25,_t.linearDamping=.02,_t.position.set(lt.position.x,lt.position.y,lt.position.z),this.world.addBody(_t),this.bodies.push(_t),this.dynamicPairs.push({mesh:lt,body:_t})}}}classifyRooms(t,e,n,i){const o=t.map((R,z)=>{const X=new A().subVectors(R.max,R.min),st=Math.max(X.x,X.z),at=Math.max(.001,Math.min(X.x,X.z)),nt=Math.abs(R.min.x-n.x)<.001||Math.abs(R.max.x-i.x)<.001||Math.abs(R.min.z-n.z)<.001||Math.abs(R.max.z-i.z)<.001;return{idx:z,w:X.x,d:X.z,area:X.x*X.z,aspect:st/at,boundary:nt,touchesNorth:Math.abs(R.max.z-i.z)<.001,touchesSouth:Math.abs(R.min.z-n.z)<.001,touchesEast:Math.abs(R.max.x-i.x)<.001,touchesWest:Math.abs(R.min.x-n.x)<.001,neighbors:[],degree:0}}),a=t.map(()=>[]);for(let R=0;R<t.length;R++)for(let z=R+1;z<t.length;z++){const X=t[R],st=t[z],at=Math.min(X.max.z,st.max.z)-Math.max(X.min.z,st.min.z),nt=Math.min(X.max.x,st.max.x)-Math.max(X.min.x,st.min.x),ht=at>0&&(Math.abs(X.max.x-st.min.x)<.001||Math.abs(X.min.x-st.max.x)<.001),mt=nt>0&&(Math.abs(X.max.z-st.min.z)<.001||Math.abs(X.min.z-st.max.z)<.001);(ht||mt)&&(a[R].push(z),a[z].push(R))}for(let R=0;R<o.length;R++)o[R].neighbors=a[R],o[R].degree=a[R].length;const c=[...o].sort((R,z)=>z.area-R.area),l=R=>R.aspect>=3&&Math.min(R.w,R.d)<=2.2,h=R=>R.area<9,d=R=>R.area>=9&&R.area<=20,u=t.map(()=>"Unlabeled"),f=new Set;for(const R of o)l(R)&&R.area>=6&&R.area<=40&&R.degree>=2&&(u[R.idx]="Hallway",f.add(R.idx));let m=-1;for(const R of c)if(!f.has(R.idx)&&R.aspect<=2.5){m=R.idx,u[R.idx]="Living Room",f.add(R.idx);break}if(m>=0){const z=o[m].neighbors.map(X=>o[X]).filter(X=>!f.has(X.idx)&&X.aspect<=2.5&&X.area>=10&&X.area<=35).sort((X,st)=>st.area-X.area)[0];z&&(u[z.idx]="Kitchen",f.add(z.idx))}const x=u.indexOf("Kitchen"),p=x>=0?x:m;if(p>=0){const R=o[p].neighbors.map(z=>o[z]).filter(z=>!f.has(z.idx)&&z.area>=8&&z.area<=25&&z.aspect<=2.8).sort((z,X)=>z.area-X.area);R.length>0&&(u[R[0].idx]="Dining Room",f.add(R[0].idx))}const g=u.map((R,z)=>R==="Hallway"?z:-1).filter(R=>R>=0),_=(R,z)=>R.neighbors.some(X=>z.includes(X)),v=o.filter(R=>!f.has(R.idx)&&h(R)).sort((R,z)=>R.area-z.area);let y=!1;for(const R of v)_(R,g)&&(y||(u[R.idx]="Bathroom",f.add(R.idx),y=!0));const C=o.filter(R=>!f.has(R.idx)&&!l(R)&&R.area>=9&&R.area<=25&&R.aspect<=2.6).sort((R,z)=>z.area-R.area),w=[];for(const R of C)(g.length===0||_(R,g)||R.degree<=2)&&(u[R.idx]="Bedroom",f.add(R.idx),w.push(R.idx));if(w.length>0){const R=w.map(z=>o[z]).sort((z,X)=>X.area-z.area)[0];R&&(u[R.idx]="Master Bedroom")}const T=o.filter(R=>!f.has(R.idx)&&R.boundary&&R.touchesSouth&&R.area>=6&&R.area<=16).sort((R,z)=>R.area-z.area);if(T.length>0){const z=T.find(X=>_(X,g)||m>=0&&X.neighbors.includes(m))||T[0];u[z.idx]="Foyer",f.add(z.idx)}const k=o.filter(R=>!f.has(R.idx)&&R.boundary&&R.area>=5&&R.area<=12).sort((R,z)=>R.area-z.area);for(const R of k)if(x>=0&&R.neighbors.includes(x)||_(R,g)){u[R.idx]="Laundry",f.add(R.idx);break}const b=o.filter(R=>!f.has(R.idx)&&d(R)&&R.aspect<=2.5).sort((R,z)=>R.degree-z.degree)[0];b&&(u[b.idx]="Office",f.add(b.idx));const S=R=>u.includes(R),O=()=>u.includes("Bedroom")||u.includes("Master Bedroom"),G=()=>{if(!S("Living Room")){const R=c.find(z=>!f.has(z.idx)&&u[z.idx]!=="Hallway");R&&(u[R.idx]="Living Room",f.add(R.idx))}},F=()=>{if(!S("Kitchen")){const R=u.findIndex(X=>X==="Living Room");if(R>=0){const X=o[R].neighbors.map(st=>o[st]).filter(st=>!f.has(st.idx)&&u[st.idx]!=="Hallway").filter(st=>st.aspect<=2.6).sort((st,at)=>Math.abs(18-st.area)-Math.abs(18-at.area))[0];if(X){u[X.idx]="Kitchen",f.add(X.idx);return}}const z=o.filter(X=>!f.has(X.idx)&&u[X.idx]!=="Hallway"&&X.aspect<=2.6).sort((X,st)=>Math.abs(18-X.area)-Math.abs(18-st.area))[0];z&&(u[z.idx]="Kitchen",f.add(z.idx))}},P=()=>{if(!S("Bathroom")){const R=o.filter(z=>!f.has(z.idx)&&u[z.idx]!=="Hallway").sort((z,X)=>z.area-X.area)[0];R&&(u[R.idx]="Bathroom",f.add(R.idx))}},U=()=>{if(!O()){const R=o.filter(z=>!f.has(z.idx)&&!l(z)).sort((z,X)=>Math.abs(14-z.area)-Math.abs(14-X.area))[0];R&&(u[R.idx]="Bedroom",f.add(R.idx))}};G(),F(),P(),U();for(const R of o)f.has(R.idx)||(R.area<7?u[R.idx]="Closet":R.area>26?u[R.idx]="Family Room":u[R.idx]="Spare Room",f.add(R.idx));if(S("Living Room")&&S("Kitchen")&&S("Bathroom")&&O())for(const R of v)(u[R.idx]==="Closet"||u[R.idx]==="Spare Room")&&(u[R.idx]="Bathroom");const et=u.map((R,z)=>R==="Bedroom"||R==="Master Bedroom"?z:-1).filter(R=>R>=0);if(et.length>0){const R=et.map(z=>o[z]).sort((z,X)=>X.area-z.area)[0];R&&(u[R.idx]="Master Bedroom")}this.roomLabels=u,this.roomAdjacency=a,this.roomBoxes=t}getRoomTypeAtPosition(t){for(let e=0;e<this.roomBoxes.length;e++){const n=this.roomBoxes[e];if(t.x>=n.min.x&&t.x<=n.max.x&&t.z>=n.min.z&&t.z<=n.max.z)return this.roomLabels[e]||"Unknown"}return"Unknown"}}class ow{constructor(t=document){yt(this,"keys",{});yt(this,"mouseDelta",{x:0,y:0});yt(this,"wheelDelta",0);yt(this,"lockPounce",!1);yt(this,"sensitivity",1);yt(this,"gpIndex",-1);yt(this,"gpDeadzone",.2);yt(this,"gpMoveX",0);yt(this,"gpMoveY",0);yt(this,"gpPrevButtons",[]);yt(this,"padRestart",!1);yt(this,"padNext",!1);yt(this,"padAccept",!1);yt(this,"suppressPadJumpLatched",!1);this.dom=t,this.bind()}bind(){this.dom.addEventListener("keydown",t=>{this.keys[t.code]=!0,["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),this.dom.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="KeyE"&&(this.lockPounce=!0)}),window.addEventListener("mousemove",t=>{this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY}),window.addEventListener("wheel",t=>{this.wheelDelta+=Math.sign(t.deltaY)},{passive:!0}),window.addEventListener("gamepadconnected",t=>{const e=t.gamepad;this.gpIndex<0&&(this.gpIndex=e.index)}),window.addEventListener("gamepaddisconnected",t=>{const e=t.gamepad;this.gpIndex===e.index&&(this.gpIndex=-1)})}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}consumeWheelDelta(){const t=this.wheelDelta;return this.wheelDelta=0,t}consumeLockPounce(){const t=this.lockPounce;return this.lockPounce=!1,t}get forward(){return(this.keys.KeyW?1:0)+(this.keys.ArrowUp?1:0)+Math.max(0,this.gpMoveY)}get backward(){return(this.keys.KeyS?1:0)+(this.keys.ArrowDown?1:0)+Math.max(0,-this.gpMoveY)}get left(){return(this.keys.KeyA?1:0)+(this.keys.ArrowLeft?1:0)+Math.max(0,-this.gpMoveX)}get right(){return(this.keys.KeyD?1:0)+(this.keys.ArrowRight?1:0)+Math.max(0,this.gpMoveX)}get jump(){const t=!!this.keys.Space,e=this.isPadButton(0)&&!this.suppressPadJumpLatched;return t||e}get run(){const t=this.getPadButtonValue(7)>.5||this.isPadButton(5);return!!this.keys.ShiftLeft||!!this.keys.ShiftRight||t}get sneak(){const t=this.getPadButtonValue(6)>.5||this.isPadButton(4);return!!this.keys.ControlLeft||!!this.keys.ControlRight||t}get restart(){return!!this.keys.KeyR||this.padRestart}get next(){return!!this.keys.KeyN||this.padNext}updateGamepad(t=0){const e=navigator.getGamepads?navigator.getGamepads():[];let n=null;if(this.gpIndex>=0&&(n=e[this.gpIndex]||null),!n){for(const g of e)if(g){n=g,this.gpIndex=g.index;break}}if(!n)return;const i=n.axes||[],s=this.gpDeadzone,o=g=>Math.abs(g)<s?0:(g-Math.sign(g)*s)/(1-s),a=o(i[0]||0),c=o(i[1]||0),l=o(i[2]||0),h=o(i[3]||0);this.gpMoveX=a,this.gpMoveY=-c;const d=25*this.sensitivity;this.mouseDelta.x+=l*d,this.mouseDelta.y+=h*d;const u=this.isPadButton(12),f=this.isPadButton(13);u&&(this.wheelDelta-=1),f&&(this.wheelDelta+=1),(this.justPressed(2)||this.justPressed(1))&&(this.lockPounce=!0),this.padRestart=this.justPressed(8),this.padNext=this.justPressed(9),this.padAccept=this.justPressed(0);const x=n.buttons&&n.buttons[0],p=!!(typeof x=="object"?x.pressed:x);this.suppressPadJumpLatched&&!p&&(this.suppressPadJumpLatched=!1),this.gpPrevButtons=(n.buttons||[]).map(g=>typeof g=="object"?g.pressed:!!g)}isPadButton(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.pressed:!!i:!1}getPadButtonValue(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return 0;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.value??(i.pressed?1:0):i?1:0:0}justPressed(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t],s=typeof i=="object"?i.pressed:!!i,o=this.gpPrevButtons[t]||!1;return s&&!o}consumePadAccept(){const t=this.padAccept;return this.padAccept=!1,t}suppressPadJumpOnce(){this.suppressPadJumpLatched=!0}}const bn={setLevel(r){const t=document.getElementById("level");t&&(t.textContent=String(r))},setCaught(r){const t=document.getElementById("caught");t&&(t.textContent=String(r))},setRequired(r){const t=document.getElementById("required");t&&(t.textContent=String(r))},setRemaining(r){const t=document.getElementById("remaining");t&&(t.textContent=String(r))},setState(r){const t=document.getElementById("state");t&&(t.textContent=r)},setFPS(r){const t=document.getElementById("fps");t&&(t.textContent=r.toFixed(0))},setRoomType(r){const t=document.getElementById("roomType");t&&(t.textContent=r)},showBanner(r){const t=document.getElementById("banner");t&&(t.innerHTML=r,t.style.display="block")},hideBanner(){const r=document.getElementById("banner");r&&(r.style.display="none")}},aw=new URL("/cat-mouse-hunter/assets/mouse-squeek-BdNs5kc5.wav",import.meta.url).toString(),cw=new URL("/cat-mouse-hunter/assets/mouse-die-BT5vEi1c.wav",import.meta.url).toString(),lw=new URL("/cat-mouse-hunter/assets/cat-trill-BzlkgHaC.wav",import.meta.url).toString(),hw=new URL("/cat-mouse-hunter/assets/cat-pur-DlHdAjg8.wav",import.meta.url).toString();class uw{constructor(){yt(this,"ctx",null);yt(this,"master",null);yt(this,"unlocked",!1);yt(this,"buffers",new Map);yt(this,"loopSrc",null)}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination)}}resume(){this.ensure(),this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.unlocked=!0}boop(){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(660,t+.09),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.2,t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.12),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.14)}async loadBuffer(t){if(this.ensure(),!this.ctx)return null;if(this.buffers.has(t))return this.buffers.get(t);try{const n=await(await fetch(t)).arrayBuffer(),i=await this.ctx.decodeAudioData(n);return this.buffers.set(t,i),i}catch{return null}}async playSample(t,e=1,n=1){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const i=new URL(t,import.meta.url).toString(),s=await this.loadBuffer(i);if(!s)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=s,a.playbackRate.value=n;const c=this.ctx.createGain();c.gain.value=e,a.connect(c),c.connect(this.master),a.start(o)}mouseSqueek(){this.playSample(aw,.45,1)}mouseDie(){this.playSample(cw,1,1)}catTrill(){this.playSample(lw,.12,1)}async startCatPurr(t=.45){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;if(this.loopSrc&&this.loopSrc.key==="cat-purr"){this.loopSrc.gain.gain.value=t;return}const e=await this.loadBuffer(hw);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const i=this.ctx.createGain();i.gain.value=t,n.connect(i),i.connect(this.master),n.start(),this.loopSrc={key:"cat-purr",src:n,gain:i}}stopCatPurr(){if(!(!this.ctx||!this.loopSrc)){try{this.loopSrc.src.stop()}catch{}try{this.loopSrc.src.disconnect(),this.loopSrc.gain.disconnect()}catch{}this.loopSrc=null}}}let Ba=null;function dw(){if(!Ba){const r=new URL("/cat-mouse-hunter/assets/star-cropped-CgZ1Ql_d.png",import.meta.url).toString();Ba=new Promise((t,e)=>{new Is().load(r,n=>{try{n.colorSpace=ue??Tn}catch{}t(n)},void 0,n=>e(n))})}return Ba}class fw{constructor(t,e){yt(this,"particles",[]);yt(this,"materialBase",null);yt(this,"maxParticles",400);yt(this,"warmSprite",null);yt(this,"_pendingPrewarm",!1);this.world=t,this.scene=e,dw().then(n=>{this.materialBase=new Au({map:n,transparent:!0,depthWrite:!1,opacity:1,blending:Ni}),this._pendingPrewarm&&(this._pendingPrewarm=!1,this.prewarm())})}prewarm(){if(this.warmSprite)return;if(!this.materialBase){this._pendingPrewarm=!0;return}const t=this.materialBase.clone();t.opacity=0;const e=new Kl(t);e.renderOrder=-1,e.position.set(0,-10,0),e.scale.set(.1,.1,1),e.visible=!0,this.scene.add(e),this.warmSprite=e}clear(){var t,e,n,i;for(const s of this.particles)this.scene.remove(s.sprite),(e=(t=s.sprite.material).dispose)==null||e.call(t),this.world.removeBody(s.body);this.particles.length=0,this.warmSprite&&(this.scene.remove(this.warmSprite),(i=(n=this.warmSprite.material).dispose)==null||i.call(n),this.warmSprite=null)}spawn(t,e=16){if(!this.materialBase||this.particles.length>=this.maxParticles)return;const n=Math.max(0,this.maxParticles-this.particles.length),i=Math.min(e,n);for(let s=0;s<i;s++){const o=this.materialBase.clone();o.opacity=1;const a=new Kl(o),c=.18+Math.random()*.12;a.scale.set(c,c,1),a.position.set(t.x,Math.max(.1,t.y)+.1,t.z),this.scene.add(a);const l=new Io(c*.25),h=new Mt({mass:.02,shape:l});h.position.set(a.position.x,a.position.y,a.position.z),h.linearDamping=.15,h.angularDamping=.2;const d=Math.random()*Math.PI*2,u=1+Math.random()*1,f=(1+Math.random()*1.2)*5;h.velocity.set(Math.sin(d)*u,f,Math.cos(d)*u),h.angularVelocity.set((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),this.world.addBody(h);const m=1.2+Math.random()*.6;this.particles.push({body:h,sprite:a,life:m,total:m})}}update(t){var e,n;if(this.particles.length!==0)for(let i=this.particles.length-1;i>=0;i--){const s=this.particles[i];s.life-=t,s.sprite.position.set(s.body.position.x,s.body.position.y,s.body.position.z);const o=Math.max(0,s.life)/s.total,a=o*o;s.sprite.material.opacity=a,(s.life<=0||s.body.position.y<-1||s.sprite.material.opacity<=.01)&&(this.scene.remove(s.sprite),(n=(e=s.sprite.material).dispose)==null||n.call(e),this.world.removeBody(s.body),this.particles.splice(i,1))}}}const pw=document.getElementById("app"),Ds=new Eu({antialias:!0});Ds.setSize(window.innerWidth,window.innerHeight);Ds.shadowMap.enabled=!0;pw.appendChild(Ds.domElement);const ei=new Dx;ei.background=new Bt(2240570);const hr=new Je(60,window.innerWidth/window.innerHeight,.1,1e3);hr.position.set(0,2.8,4.2);const mw=new mv(16777215,4478310,.6);ei.add(mw);const xi=new Fu(16777215,.9);xi.position.set(10,15,8);xi.castShadow=!0;xi.shadow.mapSize.set(2048,2048);xi.shadow.camera.left=-25;xi.shadow.camera.right=25;xi.shadow.camera.top=25;xi.shadow.camera.bottom=-25;ei.add(xi);const Ms=lM(),Zn=new ow(document),ws=new uw,Ss=Ds.domElement;Ss.style.outline="none";Ss.tabIndex=0;Ss.addEventListener("click",()=>{document.pointerLockElement!==Ss&&Ss.requestPointerLock(),ws.resume()});document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===Ss,t=document.getElementById("lockHint");t&&(t.style.display=r?"none":"block")});const Oa=document.getElementById("sensitivity"),jh=document.getElementById("sensitivityLabel");if(Oa){const r=()=>{const t=Number(Oa.value);Zn.sensitivity=isNaN(t)?1:t,jh&&(jh.textContent=`${Zn.sensitivity.toFixed(2)}x`)};r(),Oa.addEventListener("input",r)}const qe=new rw(Ms,ei);let tr=1;const _o=new fw(Ms,ei);_o.prewarm();function Yh(r){const t=4+Math.floor(r*1.5),e=10+Math.min(20,Math.floor(r*2)),n=e/10,i=e*2*(e*2),s=Math.min(14,3+Math.floor(r*.8)+Math.floor((n-1)*3)),o=s/i;return{miceRequired:Math.min(t,4+r),mouseCount:t,mouseSpeed:2.5+r*.2,roomCount:s,clutterCount:Math.floor((20+r*5)*n*n),houseHalfSize:e,roomDensity:o}}let $n,Ui=[],Ii=0,yo=0,Mo=0,so=!1;function sc(r){qe.generate(Yh(r)),_o.clear(),ws.stopCatPurr(),$n&&(ei.remove($n.mesh),Ms.removeBody($n.body));const t=qe.spawnPoints[Math.floor(Math.random()*qe.spawnPoints.length)]||new A(0,0,0);$n=new WM(Ms,ei,Zn,t.clone()),bn.hideBanner(),so=!1;for(const s of Ui)s.alive&&s.kill();Ui=[];const e=Yh(r);yo=e.miceRequired;const n=5;qe.spawnPoints.length>0&&(qe.spawnPoints=qe.spawnPoints.filter(s=>s.distanceTo(t)>=n));const i=s=>{if(qe.spawnPoints.length>0)return qe.spawnPoints[Math.floor(Math.random()*qe.spawnPoints.length)].clone();for(let a=0;a<40;a++){const c=qe.roomBoxes[Math.floor(Math.random()*qe.roomBoxes.length)],l=.6,h=re.lerp(c.min.x+l,c.max.x-l,Math.random()),d=re.lerp(c.min.z+l,c.max.z-l,Math.random()),u=new A(h,0,d);if(u.distanceTo(s)>=n)return u}const o=new Nt(Math.random()-.5,Math.random()-.5).normalize();return new A(s.x+o.x*(n+1),0,s.z+o.y*(n+1))};for(let s=0;s<e.mouseCount;s++){const o=i(t),a=new jM(Ms,ei,o.clone(),qe.worldBounds.clone(),qe.mouseHoles,ws);a.speed=e.mouseSpeed,Ui.push(a)}Ii=0,Mo=Ui.length,bn.setLevel(tr),bn.setCaught(Ii),bn.setRequired(yo),bn.setRemaining(Mo)}sc(tr);window.addEventListener("resize",()=>{hr.aspect=window.innerWidth/window.innerHeight,hr.updateProjectionMatrix(),Ds.setSize(window.innerWidth,window.innerHeight)});let Kh=performance.now(),eo=0,ka=0,Va=0;function rd(){const r=performance.now(),t=Math.min(.033,(r-Kh)/1e3);Kh=r,Ms.step(1/60,t,3),Zn.updateGamepad(t),so&&Zn.padAccept&&Zn.suppressPadJumpOnce();const e=new A($n.body.position.x,0,$n.body.position.z);qe.update(t,e),_o.update(t),$n.update(t,hr,Ui.filter(i=>i.alive).map(i=>i.mesh),qe.meshes);const n=e.clone();for(const i of Ui)i.update(t,n);for(const i of Ui){if(!i.alive)continue;if(i.mesh.position.distanceTo($n.mesh.position)<.7){const o=i.mesh.position.clone();_o.spawn(o,18+Math.floor(Math.random()*10)),i.kill(),ws.mouseDie(),ws.catTrill(),Ii++,Mo--,bn.setCaught(Ii),bn.setRemaining(Mo),Ii>=yo&&!so&&(bn.showBanner(`<h2>House cleared!</h2><p>You caught ${Ii} mice.</p><p>Press <b>N</b> for the next house.</p>`),so=!0,ws.startCatPurr())}}if(Zn.restart&&sc(tr),(Zn.next||Zn.consumePadAccept())&&Ii>=yo&&(tr++,sc(tr)),bn.setState($n.state),Ds.render(ei,hr),eo+=t,ka++,Va+=t,Va>=.25){const i=qe.getRoomTypeAtPosition(e);bn.setRoomType(i),Va=0}if(eo>=.5){const i=ka/eo;bn.setFPS(i),eo=0,ka=0}requestAnimationFrame(rd)}rd();
