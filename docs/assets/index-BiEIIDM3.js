var Fu=Object.defineProperty;var zu=(r,t,e)=>t in r?Fu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Mt=(r,t,e)=>zu(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="160",Bu=0,mc=1,Ou=2,Th=1,ku=2,Kn=3,mi=0,nn=1,En=2,di=0,Ii=1,gc=2,xc=3,_c=4,Vu=5,Ai=100,Hu=101,Gu=102,vc=103,yc=104,Wu=200,Xu=201,qu=202,Yu=203,La=204,Ia=205,ju=206,Ku=207,Zu=208,$u=209,Ju=210,Qu=211,td=212,ed=213,nd=214,id=0,sd=1,rd=2,Kr=3,od=4,ad=5,cd=6,ld=7,ho=0,hd=1,ud=2,fi=0,dd=1,fd=2,pd=3,md=4,gd=5,xd=6,Mc="attached",_d="detached",Rh=300,ys=301,Ms=302,Zr=303,Da=304,uo=306,Ks=1e3,ln=1001,Ua=1002,ke=1003,wc=1004,Po=1005,fn=1006,vd=1007,Zs=1008,pi=1009,yd=1010,Md=1011,ja=1012,Ch=1013,hi=1014,Jn=1015,$s=1016,Ph=1017,Lh=1018,Di=1020,wd=1021,mn=1023,Sd=1024,Ed=1025,Ui=1026,ws=1027,bd=1028,Ih=1029,Ad=1030,Dh=1031,Uh=1033,Lo=33776,Io=33777,Do=33778,Uo=33779,Sc=35840,Ec=35841,bc=35842,Ac=35843,Nh=36196,Tc=37492,Rc=37496,Cc=37808,Pc=37809,Lc=37810,Ic=37811,Dc=37812,Uc=37813,Nc=37814,Fc=37815,zc=37816,Bc=37817,Oc=37818,kc=37819,Vc=37820,Hc=37821,No=36492,Gc=36494,Wc=36495,Td=36283,Xc=36284,qc=36285,Yc=36286,Rd=2200,Fh=2201,Cd=2202,$r=2300,Jr=2301,Fo=2302,hs=2400,us=2401,Qr=2402,Ka=2500,Pd=2501,zh=3e3,Nn=3001,Ld=3200,Id=3201,fo=0,Dd=1,gn="",ve="srgb",ei="srgb-linear",Za="display-p3",po="display-p3-linear",to="linear",ge="srgb",eo="rec709",no="p3",Vi=7680,jc=519,Ud=512,Nd=513,Fd=514,Bh=515,zd=516,Bd=517,Od=518,kd=519,Na=35044,Kc="300 es",Fa=1035,Qn=2e3,io=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Gs=Math.PI/180,Ss=180/Math.PI;function An(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ve(r,t,e){return Math.max(t,Math.min(e,r))}function $a(r,t){return(r%t+t)%t}function Vd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Hd(r,t,e){return r!==t?(e-r)/(t-r):0}function Ws(r,t,e){return(1-e)*r+e*t}function Gd(r,t,e,n){return Ws(r,t,1-Math.exp(-e*n))}function Wd(r,t=1){return t-Math.abs($a(r,t*2)-t)}function Xd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function qd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Yd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function jd(r,t){return r+Math.random()*(t-r)}function Kd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(Zc=r);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $d(r){return r*Gs}function Jd(r){return r*Ss}function za(r){return(r&r-1)===0&&r!==0}function Qd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function so(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tf(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:Gs,RAD2DEG:Ss,generateUUID:An,clamp:Ve,euclideanModulo:$a,mapLinear:Vd,inverseLerp:Hd,lerp:Ws,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Kd,seededRandom:Zd,degToRad:$d,radToDeg:Jd,isPowerOfTwo:za,ceilPowerOfTwo:Qd,floorPowerOfTwo:so,setQuaternionFromProperEuler:tf,normalize:le,denormalize:Dn};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],_=i[4],S=i[7],L=i[2],A=i[5],T=i[8];return s[0]=o*x+a*v+c*L,s[3]=o*p+a*_+c*A,s[6]=o*g+a*S+c*T,s[1]=l*x+h*v+d*L,s[4]=l*p+h*_+d*A,s[7]=l*g+h*S+d*T,s[2]=u*x+f*v+m*L,s[5]=u*p+f*_+m*A,s[8]=u*g+f*S+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Jt;function Oh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ef(){const r=Js("canvas");return r.style.display="block",r}const $c={};function Xs(r){r in $c||($c[r]=!0,console.warn(r))}const Jc=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qc=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[ei]:{transfer:to,primaries:eo,toReference:r=>r,fromReference:r=>r},[ve]:{transfer:ge,primaries:eo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[po]:{transfer:to,primaries:no,toReference:r=>r.applyMatrix3(Qc),fromReference:r=>r.applyMatrix3(Jc)},[Za]:{transfer:ge,primaries:no,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qc),fromReference:r=>r.applyMatrix3(Jc).convertLinearToSRGB()}},nf=new Set([ei,po]),he={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!nf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=hr[t].toReference,i=hr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return hr[r].primaries},getTransfer:function(r){return r===gn?to:hr[r].transfer}};function ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hi;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=Js("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sf=0;class Vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=An(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class Be extends ki{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ln,i=ln,s=fn,o=Zs,a=mn,c=pi,l=Be.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=An(),this.name="",this.source=new Vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nn?ve:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Nn:zh}set encoding(t){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Nn?ve:gn}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Rh;Be.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(f+1)/2,L=(g+1)/2,A=(h+u)/4,T=(d+x)/4,G=(m+p)/4;return _>S&&_>L?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=T/n):S>L?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=G/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=T/s,i=G/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nn?ve:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class af extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Oe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let p=1-a;const g=c*u+l*f+h*m+d*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const L=Math.sqrt(_),A=Math.atan2(L,g*v);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L}const S=a*v;if(c=c*p+u*S,l=l*p+f*S,h=h*p+m*S,d=d*p+x*S,p===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new R,tl=new Oe;class ze{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),dr.subVectors(this.max,Ls),Gi.subVectors(t.a,Ls),Wi.subVectors(t.b,Ls),Xi.subVectors(t.c,Ls),ii.subVectors(Wi,Gi),si.subVectors(Xi,Wi),vi.subVectors(Gi,Xi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-vi.z,vi.y,ii.z,0,-ii.x,si.z,0,-si.x,vi.z,0,-vi.x,-ii.y,ii.x,0,-si.y,si.x,0,-vi.y,vi.x,0];return!Vo(e,Gi,Wi,Xi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Gi,Wi,Xi,dr))?!1:(fr.crossVectors(ii,si),e=[fr.x,fr.y,fr.z],Vo(e,Gi,Wi,Xi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,ur=new ze,Gi=new R,Wi=new R,Xi=new R,ii=new R,si=new R,vi=new R,Ls=new R,dr=new R,fr=new R,yi=new R;function Vo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yi.fromArray(r,s);const a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const cf=new ze,Is=new R,Ho=new R;let bs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ho)),this.expandByPoint(Is.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const On=new R,Go=new R,pr=new R,ri=new R,Wo=new R,mr=new R,Xo=new R;let mo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Go);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=ri.dot(this.direction),c=-ri.dot(pr),l=ri.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Go).addScaledVector(pr,u),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){Wo.subVectors(e,t),mr.subVectors(n,t),Xo.crossVectors(Wo,mr);let o=this.direction.dot(Xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const c=a*this.direction.dot(mr.crossVectors(ri,mr));if(c<0)return null;const l=a*this.direction.dot(Wo.cross(ri));if(l<0||c+l>o)return null;const h=-a*ri.dot(Xo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ut{constructor(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p)}set(t,e,n,i,s,o,a,c,l,h,d,u,f,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,hf)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),oi.crossVectors(n,on),oi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),oi.crossVectors(n,on)),oi.normalize(),gr.crossVectors(on,oi),i[0]=oi.x,i[4]=gr.x,i[8]=on.x,i[1]=oi.y,i[5]=gr.y,i[9]=on.y,i[2]=oi.z,i[6]=gr.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],_=n[7],S=n[11],L=n[15],A=i[0],T=i[4],G=i[8],b=i[12],E=i[1],H=i[5],W=i[9],B=i[13],I=i[2],U=i[6],N=i[10],it=i[14],C=i[3],O=i[7],j=i[11],st=i[15];return s[0]=o*A+a*E+c*I+l*C,s[4]=o*T+a*H+c*U+l*O,s[8]=o*G+a*W+c*N+l*j,s[12]=o*b+a*B+c*it+l*st,s[1]=h*A+d*E+u*I+f*C,s[5]=h*T+d*H+u*U+f*O,s[9]=h*G+d*W+u*N+f*j,s[13]=h*b+d*B+u*it+f*st,s[2]=m*A+x*E+p*I+g*C,s[6]=m*T+x*H+p*U+g*O,s[10]=m*G+x*W+p*N+g*j,s[14]=m*b+x*B+p*it+g*st,s[3]=v*A+_*E+S*I+L*C,s[7]=v*T+_*H+S*U+L*O,s[11]=v*G+_*W+S*N+L*j,s[15]=v*b+_*B+S*it+L*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+x*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+p*(+e*l*d-e*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+g*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=d*p*l-x*u*l+x*c*f-a*p*f-d*c*g+a*u*g,_=m*u*l-h*p*l-m*c*f+o*p*f+h*c*g-o*u*g,S=h*x*l-m*d*l+m*a*f-o*x*f-h*a*g+o*d*g,L=m*d*c-h*x*c-m*a*u+o*x*u+h*a*p-o*d*p,A=e*v+n*_+i*S+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=v*T,t[1]=(x*u*s-d*p*s-x*i*f+n*p*f+d*i*g-n*u*g)*T,t[2]=(a*p*s-x*c*s+x*i*l-n*p*l-a*i*g+n*c*g)*T,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*T,t[4]=_*T,t[5]=(h*p*s-m*u*s+m*i*f-e*p*f-h*i*g+e*u*g)*T,t[6]=(m*c*s-o*p*s-m*i*l+e*p*l+o*i*g-e*c*g)*T,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*T,t[8]=S*T,t[9]=(m*d*s-h*x*s-m*n*f+e*x*f+h*n*g-e*d*g)*T,t[10]=(o*x*s-m*a*s+m*n*l-e*x*l-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*x*i-m*d*i+m*n*u-e*x*u-h*n*p+e*d*p)*T,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*p-e*a*p)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,m=s*d,x=o*h,p=o*d,g=a*d,v=c*l,_=c*h,S=c*d,L=n.x,A=n.y,T=n.z;return i[0]=(1-(x+g))*L,i[1]=(f+S)*L,i[2]=(m-_)*L,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(u+g))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(m+_)*T,i[9]=(p-v)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const l=1/s,h=1/o,d=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Qn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===Qn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===io)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Qn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h;let m,x;if(a===Qn)m=(o+s)*d,x=-2*d;else if(a===io)m=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new R,vn=new Ut,lf=new R(0,0,0),hf=new R(1,1,1),oi=new R,gr=new R,on=new R,el=new Ut,nl=new Oe;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uf=0;const il=new R,Yi=new Oe,kn=new Ut,xr=new R,Ds=new R,df=new R,ff=new Oe,sl=new R(1,0,0),rl=new R(0,1,0),ol=new R(0,0,1),pf={type:"added"},mf={type:"removed"};class _e extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new R,e=new en,n=new Oe,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Jt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ds,xr,this.up):kn.lookAt(xr,Ds,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(kn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,Vn=new R,qo=new R,Hn=new R,ji=new R,Ki=new R,al=new R,Yo=new R,jo=new R,Ko=new R;let _r=!1;class pn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Vn.subVectors(n,e),qo.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(Vn),c=yn.dot(qo),l=Vn.dot(Vn),h=Vn.dot(qo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,s,o,a,c){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ji.subVectors(i,n),Ki.subVectors(s,n),Yo.subVectors(t,n);const c=ji.dot(Yo),l=Ki.dot(Yo);if(c<=0&&l<=0)return e.copy(n);jo.subVectors(t,i);const h=ji.dot(jo),d=Ki.dot(jo);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ji,o);Ko.subVectors(t,s);const f=ji.dot(Ko),m=Ki.dot(Ko);if(m>=0&&f<=m)return e.copy(s);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ki,a);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return al.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(al,a);const g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Zo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=$a(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zo(o,s,t+1/3),this.g=Zo(o,s,t),this.b=Zo(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return he.fromWorkingColorSpace(We.copy(this),t),Math.round(Ve(We.r*255,0,255))*65536+Math.round(Ve(We.g*255,0,255))*256+Math.round(Ve(We.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(We.copy(this),e);const n=We.r,i=We.g,s=We.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ve){he.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(vr);const n=Ws(ai.h,vr.h,e),i=Ws(ai.s,vr.s,e),s=Ws(ai.l,vr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new kt;kt.NAMES=Gh;let gf=0,ni=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Ii,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Wh extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new R,yr=new Dt;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class Qa extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xh extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xf=0;const dn=new Ut,$o=new _e,Zi=new R,an=new ze,Us=new ze,Fe=new R;class sn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Xh:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(an.min,Us.min),an.expandByPoint(Fe),Fe.addVectors(an.max,Us.max),an.expandByPoint(Fe)):(an.expandByPoint(Us.min),an.expandByPoint(Us.max))}an.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(t,l),Fe.add(Zi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new R,h[E]=new R;const d=new R,u=new R,f=new R,m=new Dt,x=new Dt,p=new Dt,g=new R,v=new R;function _(E,H,W){d.fromArray(i,E*3),u.fromArray(i,H*3),f.fromArray(i,W*3),m.fromArray(o,E*2),x.fromArray(o,H*2),p.fromArray(o,W*2),u.sub(d),f.sub(d),x.sub(m),p.sub(m);const B=1/(x.x*p.y-p.x*x.y);isFinite(B)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(B),v.copy(f).multiplyScalar(x.x).addScaledVector(u,-p.x).multiplyScalar(B),l[E].add(g),l[H].add(g),l[W].add(g),h[E].add(v),h[H].add(v),h[W].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,H=S.length;E<H;++E){const W=S[E],B=W.start,I=W.count;for(let U=B,N=B+I;U<N;U+=3)_(n[U+0],n[U+1],n[U+2])}const L=new R,A=new R,T=new R,G=new R;function b(E){T.fromArray(s,E*3),G.copy(T);const H=l[E];L.copy(H),L.sub(T.multiplyScalar(T.dot(H))).normalize(),A.crossVectors(G,H);const B=A.dot(h[E])<0?-1:1;c[E*4]=L.x,c[E*4+1]=L.y,c[E*4+2]=L.z,c[E*4+3]=B}for(let E=0,H=S.length;E<H;++E){const W=S[E],B=W.start,I=W.count;for(let U=B,N=B+I;U<N;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)u[m++]=l[f++]}return new Tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new Ut,Mi=new mo,Mr=new bs,ll=new R,$i=new R,Ji=new R,Qi=new R,Jo=new R,wr=new R,Sr=new Dt,Er=new Dt,br=new Dt,hl=new R,ul=new R,dl=new R,Ar=new R,Tr=new R;class ae extends _e{constructor(t=new sn,e=new Wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Jo.fromBufferAttribute(d,t),o?wr.addScaledVector(Jo,h):wr.addScaledVector(Jo.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Mr,ll)===null||Mi.origin.distanceToSquared(ll)>(t.far-t.near)**2))&&(cl.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,L=_;S<L;S+=3){const A=a.getX(S),T=a.getX(S+1),G=a.getX(S+2);i=Rr(this,g,t,n,l,h,d,A,T,G),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const v=a.getX(p),_=a.getX(p+1),S=a.getX(p+2);i=Rr(this,o,t,n,l,h,d,v,_,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,L=_;S<L;S+=3){const A=S,T=S+1,G=S+2;i=Rr(this,g,t,n,l,h,d,A,T,G),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){const v=p,_=p+1,S=p+2;i=Rr(this,o,t,n,l,h,d,v,_,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function _f(r,t,e,n,i,s,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===mi,a),c===null)return null;Tr.copy(a),Tr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Tr);return l<e.near||l>e.far?null:{distance:l,point:Tr.clone(),object:r}}function Rr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,$i),r.getVertexPosition(c,Ji),r.getVertexPosition(l,Qi);const h=_f(r,t,e,n,$i,Ji,Qi,Ar);if(h){i&&(Sr.fromBufferAttribute(i,a),Er.fromBufferAttribute(i,c),br.fromBufferAttribute(i,l),h.uv=pn.getInterpolation(Ar,$i,Ji,Qi,Sr,Er,br,new Dt)),s&&(Sr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,c),br.fromBufferAttribute(s,l),h.uv1=pn.getInterpolation(Ar,$i,Ji,Qi,Sr,Er,br,new Dt),h.uv2=h.uv1),o&&(hl.fromBufferAttribute(o,a),ul.fromBufferAttribute(o,c),dl.fromBufferAttribute(o,l),h.normal=pn.getInterpolation(Ar,$i,Ji,Qi,hl,ul,dl,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};pn.getNormal($i,Ji,Qi,d.normal),h.face=d}return h}class Re extends sn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function m(x,p,g,v,_,S,L,A,T,G,b){const E=S/T,H=L/G,W=S/2,B=L/2,I=A/2,U=T+1,N=G+1;let it=0,C=0;const O=new R;for(let j=0;j<N;j++){const st=j*H-B;for(let rt=0;rt<U;rt++){const tt=rt*E-W;O[x]=tt*v,O[p]=st*_,O[g]=I,l.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[g]=A>0?1:-1,h.push(O.x,O.y,O.z),d.push(rt/T),d.push(1-j/G),it+=1}}for(let j=0;j<G;j++)for(let st=0;st<T;st++){const rt=u+st+U*j,tt=u+st+U*(j+1),at=u+(st+1)+U*(j+1),_t=u+(st+1)+U*j;c.push(rt,tt,_t),c.push(tt,at,_t),C+=6}a.addGroup(f,C,b),f+=C,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(r){const t={};for(let e=0;e<r.length;e++){const n=Es(r[e]);for(const i in n)t[i]=n[i]}return t}function vf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qh(r){return r.getRenderTarget()===null?r.outputColorSpace:he.workingColorSpace}const yf={clone:Es,merge:je};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Yh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Sf extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(ts,es,t,e);i.layers=this.layers,this.add(i);const s=new Ze(ts,es,t,e);s.layers=this.layers,this.add(s);const o=new Ze(ts,es,t,e);o.layers=this.layers,this.add(o);const a=new Ze(ts,es,t,e);a.layers=this.layers,this.add(a);const c=new Ze(ts,es,t,e);c.layers=this.layers,this.add(c);const l=new Ze(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class jh extends Be{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Nn?ve:gn),this.texture=new jh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Re(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:di});s.uniforms.tEquirect.value=e;const o=new ae(i,s),a=e.minFilter;return e.minFilter===Zs&&(e.minFilter=fn),new Sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Qo=new R,bf=new R,Af=new Jt;let Ei=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Af.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const wi=new bs,Cr=new R;class tc{constructor(t=new Ei,e=new Ei,n=new Ei,i=new Ei,s=new Ei,o=new Ei){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],m=i[9],x=i[10],p=i[11],g=i[12],v=i[13],_=i[14],S=i[15];if(n[0].setComponents(c-s,u-l,p-f,S-g).normalize(),n[1].setComponents(c+s,u+l,p+f,S+g).normalize(),n[2].setComponents(c+o,u+h,p+m,S+v).normalize(),n[3].setComponents(c-o,u-h,p-m,S-v).normalize(),n[4].setComponents(c-a,u-d,p-x,S-_).normalize(),e===Qn)n[5].setComponents(c+a,u+d,p+x,S+_).normalize();else if(e===io)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Tf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,f=d.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){const u=h.array,f=h._updateRange,m=h.updateRanges;if(r.bindBuffer(d,l),f.count===-1&&m.length===0&&r.bufferSubData(d,0,u),m.length!==0){for(let x=0,p=m.length;x<p;x++){const g=m[x];e?r.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):r.bufferSubData(d,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class go extends sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const v=g*u-o;for(let _=0;_<l;_++){const S=_*d-s;m.push(S,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){const _=v+l*g,S=v+l*(g+1),L=v+1+l*(g+1),A=v+1+l*g;f.push(_,S,A),f.push(S,L,A)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
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
}`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,tg=`#define TOON
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
}`,eg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Rf,alphahash_pars_fragment:Cf,alphamap_fragment:Pf,alphamap_pars_fragment:Lf,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:zf,begin_vertex:Bf,beginnormal_vertex:Of,bsdfs:kf,iridescence_fragment:Vf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:Yf,color_pars_fragment:jf,color_pars_vertex:Kf,color_vertex:Zf,common:$f,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:tp,displacementmap_vertex:ep,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:op,envmap_common_pars_fragment:ap,envmap_pars_fragment:cp,envmap_pars_vertex:lp,envmap_physical_pars_fragment:Mp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:dp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:vp,lights_pars_begin:yp,lights_toon_fragment:wp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:bp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Tp,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:zp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:kp,morphcolor_vertex:Vp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:jp,normal_vertex:Kp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:tm,opaque_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:_m,tonemapping_fragment:vm,tonemapping_pars_fragment:ym,transmission_fragment:Mm,transmission_pars_fragment:wm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:bm,worldpos_vertex:Am,background_vert:Tm,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Im,depth_vert:Dm,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:zm,equirect_frag:Bm,linedashed_vert:Om,linedashed_frag:km,meshbasic_vert:Vm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:jm,meshphong_vert:Km,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:tg,points_vert:eg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},vt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},In={basic:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:je([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:je([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:je([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:je([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:je([vt.lights,vt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};In.physical={uniforms:je([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Pr={r:0,b:0,g:0};function ag(r,t,e,n,i,s,o){const a=new kt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function m(p,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===uo)?(h===void 0&&(h=new ae(new Re(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Es(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=he.getTransfer(_.colorSpace)!==ge,(d!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ae(new go(2,2),new Fi({name:"BackgroundMaterial",uniforms:Es(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=he.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,g){p.getRGB(Pr,qh(r)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),c=g,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:m}}function cg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(I,U,N,it,C){let O=!1;if(o){const j=x(it,N,U);l!==j&&(l=j,f(l.object)),O=g(I,it,N,C),O&&v(I,it,N,C)}else{const j=U.wireframe===!0;(l.geometry!==it.id||l.program!==N.id||l.wireframe!==j)&&(l.geometry=it.id,l.program=N.id,l.wireframe=j,O=!0)}C!==null&&e.update(C,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,G(I,U,N,it),C!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,U,N){const it=N.wireframe===!0;let C=a[I.id];C===void 0&&(C={},a[I.id]=C);let O=C[U.id];O===void 0&&(O={},C[U.id]=O);let j=O[it];return j===void 0&&(j=p(u()),O[it]=j),j}function p(I){const U=[],N=[],it=[];for(let C=0;C<i;C++)U[C]=0,N[C]=0,it[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:it,object:I,attributes:{},index:null}}function g(I,U,N,it){const C=l.attributes,O=U.attributes;let j=0;const st=N.getAttributes();for(const rt in st)if(st[rt].location>=0){const at=C[rt];let _t=O[rt];if(_t===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;j++}return l.attributesNum!==j||l.index!==it}function v(I,U,N,it){const C={},O=U.attributes;let j=0;const st=N.getAttributes();for(const rt in st)if(st[rt].location>=0){let at=O[rt];at===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),C[rt]=_t,j++}l.attributes=C,l.attributesNum=j,l.index=it}function _(){const I=l.newAttributes;for(let U=0,N=I.length;U<N;U++)I[U]=0}function S(I){L(I,0)}function L(I,U){const N=l.newAttributes,it=l.enabledAttributes,C=l.attributeDivisors;N[I]=1,it[I]===0&&(r.enableVertexAttribArray(I),it[I]=1),C[I]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),C[I]=U)}function A(){const I=l.newAttributes,U=l.enabledAttributes;for(let N=0,it=U.length;N<it;N++)U[N]!==I[N]&&(r.disableVertexAttribArray(N),U[N]=0)}function T(I,U,N,it,C,O,j){j===!0?r.vertexAttribIPointer(I,U,N,C,O):r.vertexAttribPointer(I,U,N,it,C,O)}function G(I,U,N,it){if(n.isWebGL2===!1&&(I.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const C=it.attributes,O=N.getAttributes(),j=U.defaultAttributeValues;for(const st in O){const rt=O[st];if(rt.location>=0){let tt=C[st];if(tt===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor)),tt!==void 0){const at=tt.normalized,_t=tt.itemSize,bt=e.get(tt);if(bt===void 0)continue;const At=bt.buffer,Ht=bt.type,Gt=bt.bytesPerElement,Ft=n.isWebGL2===!0&&(Ht===r.INT||Ht===r.UNSIGNED_INT||tt.gpuType===Ch);if(tt.isInterleavedBufferAttribute){const te=tt.data,Q=te.stride,Pe=tt.offset;if(te.isInstancedInterleavedBuffer){for(let Lt=0;Lt<rt.locationSize;Lt++)L(rt.location+Lt,te.meshPerAttribute);I.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Lt=0;Lt<rt.locationSize;Lt++)S(rt.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Lt=0;Lt<rt.locationSize;Lt++)T(rt.location+Lt,_t/rt.locationSize,Ht,at,Q*Gt,(Pe+_t/rt.locationSize*Lt)*Gt,Ft)}else{if(tt.isInstancedBufferAttribute){for(let te=0;te<rt.locationSize;te++)L(rt.location+te,tt.meshPerAttribute);I.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let te=0;te<rt.locationSize;te++)S(rt.location+te);r.bindBuffer(r.ARRAY_BUFFER,At);for(let te=0;te<rt.locationSize;te++)T(rt.location+te,_t/rt.locationSize,Ht,at,_t*Gt,_t/rt.locationSize*te*Gt,Ft)}}else if(j!==void 0){const at=j[st];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(rt.location,at);break;case 3:r.vertexAttrib3fv(rt.location,at);break;case 4:r.vertexAttrib4fv(rt.location,at);break;default:r.vertexAttrib1fv(rt.location,at)}}}}A()}function b(){W();for(const I in a){const U=a[I];for(const N in U){const it=U[N];for(const C in it)m(it[C].object),delete it[C];delete U[N]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const U=a[I.id];for(const N in U){const it=U[N];for(const C in it)m(it[C].object),delete it[C];delete U[N]}delete a[I.id]}function H(I){for(const U in a){const N=a[U];if(N[I.id]===void 0)continue;const it=N[I.id];for(const C in it)m(it[C].object),delete it[C];delete N[I.id]}}function W(){B(),h=!0,l!==c&&(l=c,f(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:S,disableUnusedAttributes:A}}function lg(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(h[m],d[m]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];e.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function hg(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,S=o||t.has("OES_texture_float"),L=_&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:A}}function ug(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ei,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):l();else{const v=s?0:n,_=v*4;let S=g.clippingState||null;c.value=S,S=h(m,u,_,f);for(let L=0;L!==_;++L)S[L]=e[L];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,S=f;_!==x;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function dg(r){let t=new WeakMap;function e(o,a){return a===Zr?o.mapping=ys:a===Da&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zr||a===Da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ef(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ec extends Yh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,fl=[.125,.215,.35,.446,.526,.582],Ti=20,ta=new ec,pl=new kt;let ea=null,na=0,ia=0;const bi=(1+Math.sqrt(5))/2,ns=1/bi,ml=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,bi,ns),new R(0,bi,-ns),new R(ns,0,bi),new R(-ns,0,bi),new R(bi,ns,0),new R(-bi,ns,0)];class gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:$s,format:mn,colorSpace:ei,depthBuffer:!1},i=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(s)),this._blurMaterial=pg(s,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,i){const a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(pl),h.toneMapping=fi,h.autoClear=!1;const f=new Wh({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new ae(new Re,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(pl),x=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):v===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const _=this._cubeSize;Lr(i,v*_,g>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ys||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ml[(i-1)%ml.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ae(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),x=s/m,p=isFinite(s)?1+Math.floor(h*x):Ti;p>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const g=[];let v=0;for(let T=0;T<Ti;++T){const G=T/x,b=Math.exp(-G*G/2);g.push(b),T===0?v+=b:T<p&&(v+=2*b)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;const S=this._sizeLods[i],L=3*S*(i>_-ds?i-_+ds:0),A=4*(this._cubeSize-S);Lr(e,L,A,3*S,2*S),c.setRenderTarget(e),c.render(d,ta)}}function fg(r){const t=[],e=[],n=[];let i=r;const s=r-ds+1+fl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ds?c=fl[o-r+ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,p=2,g=1,v=new Float32Array(x*m*f),_=new Float32Array(p*m*f),S=new Float32Array(g*m*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,G=A>2?0:-1,b=[T,G,0,T+2/3,G,0,T+2/3,G+1,0,T,G,0,T+2/3,G+1,0,T,G+1,0];v.set(b,x*m*A),_.set(u,p*m*A);const E=[A,A,A,A,A,A];S.set(E,g*m*A)}const L=new sn;L.setAttribute("position",new Tn(v,x)),L.setAttribute("uv",new Tn(_,p)),L.setAttribute("faceIndex",new Tn(S,g)),t.push(L),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(r,t,e){const n=new Ni(r,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function pg(r,t,e){const n=new Float32Array(Ti),i=new R(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function _l(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function vl(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function mg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zr||c===Da,h=c===ys||c===Ms;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new gl(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new gl(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xg(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)t.update(u[m],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const x=f[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],r.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,S=v.length;_<S;_+=3){const L=v[_+0],A=v[_+1],T=v[_+2];u.push(L,A,A,T,T,L)}}else if(m!==void 0){const v=m.array;x=m.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const L=_+0,A=_+1,T=_+2;u.push(L,A,A,T,T,L)}}else return;const p=new(Oh(u)?Xh:Qa)(u,1);p.version=x;const g=s.get(d);g&&t.remove(g),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function _g(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){r.drawElements(s,m,a,f*c),e.update(m,s,1)}function d(f,m,x){if(x===0)return;let p,g;if(i)p=r,g="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,m,a,f*c,x),e.update(m,s,x)}function u(f,m,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<x;g++)this.render(f[g]/c,m[g]);else{p.multiDrawElementsWEBGL(s,m,0,a,f,0,x);let g=0;for(let v=0;v<x;v++)g+=m[v];e.update(g,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function vg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yg(r,t){return r[0]-t[0]}function Mg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function wg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new oe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let x=s.get(h);if(x===void 0||x.count!==m){let I=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();const v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let G=0;v===!0&&(G=1),_===!0&&(G=2),S===!0&&(G=3);let b=h.attributes.position.count*G,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const H=new Float32Array(b*E*4*m),W=new Hh(H,b,E,m);W.type=Jn,W.needsUpdate=!0;const B=G*4;for(let U=0;U<m;U++){const N=L[U],it=A[U],C=T[U],O=b*E*4*U;for(let j=0;j<N.count;j++){const st=j*B;v===!0&&(o.fromBufferAttribute(N,j),H[O+st+0]=o.x,H[O+st+1]=o.y,H[O+st+2]=o.z,H[O+st+3]=0),_===!0&&(o.fromBufferAttribute(it,j),H[O+st+4]=o.x,H[O+st+5]=o.y,H[O+st+6]=o.z,H[O+st+7]=0),S===!0&&(o.fromBufferAttribute(C,j),H[O+st+8]=o.x,H[O+st+9]=o.y,H[O+st+10]=o.z,H[O+st+11]=C.itemSize===4?o.w:1)}}x={count:m,texture:W,size:new Dt(b,E)},s.set(h,x),h.addEventListener("dispose",I)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const g=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const f=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let _=0;_<f;_++)m[_]=[_,0];n[h.id]=m}for(let _=0;_<f;_++){const S=m[_];S[0]=_,S[1]=u[_]}m.sort(Mg);for(let _=0;_<8;_++)_<f&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(yg);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let g=0;for(let _=0;_<8;_++){const S=a[_],L=S[0],A=S[1];L!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),p&&h.getAttribute("morphNormal"+_)!==p[L]&&h.setAttribute("morphNormal"+_,p[L]),i[_]=A,g+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const v=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Sg(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Zh extends Be{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=hi),n===void 0&&h===ws&&(n=Di),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $h=new Be,Jh=new Zh(1,1);Jh.compareFunction=Bh;const Qh=new Hh,tu=new af,eu=new jh,yl=[],Ml=[],wl=new Float32Array(16),Sl=new Float32Array(9),El=new Float32Array(4);function As(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=yl[i];if(s===void 0&&(s=new Float32Array(i),yl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function De(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function xo(r,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Eg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function Ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function Rg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;El.set(n),r.uniformMatrix2fv(this.addr,!1,El),Ue(e,n)}}function Cg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Sl.set(n),r.uniformMatrix3fv(this.addr,!1,Sl),Ue(e,n)}}function Pg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;wl.set(n),r.uniformMatrix4fv(this.addr,!1,wl),Ue(e,n)}}function Lg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ig(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function Dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function Ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function Ng(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function Bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function Og(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Jh:$h;e.setTexture2D(t||s,i)}function kg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tu,i)}function Vg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||eu,i)}function Hg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qh,i)}function Gg(r){switch(r){case 5126:return Eg;case 35664:return bg;case 35665:return Ag;case 35666:return Tg;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return zg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Wg(r,t){r.uniform1fv(this.addr,t)}function Xg(r,t){const e=As(t,this.size,2);r.uniform2fv(this.addr,e)}function qg(r,t){const e=As(t,this.size,3);r.uniform3fv(this.addr,e)}function Yg(r,t){const e=As(t,this.size,4);r.uniform4fv(this.addr,e)}function jg(r,t){const e=As(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Kg(r,t){const e=As(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Zg(r,t){const e=As(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function $g(r,t){r.uniform1iv(this.addr,t)}function Jg(r,t){r.uniform2iv(this.addr,t)}function Qg(r,t){r.uniform3iv(this.addr,t)}function t0(r,t){r.uniform4iv(this.addr,t)}function e0(r,t){r.uniform1uiv(this.addr,t)}function n0(r,t){r.uniform2uiv(this.addr,t)}function i0(r,t){r.uniform3uiv(this.addr,t)}function s0(r,t){r.uniform4uiv(this.addr,t)}function r0(r,t,e){const n=this.cache,i=t.length,s=xo(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$h,s[o])}function o0(r,t,e){const n=this.cache,i=t.length,s=xo(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||tu,s[o])}function a0(r,t,e){const n=this.cache,i=t.length,s=xo(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||eu,s[o])}function c0(r,t,e){const n=this.cache,i=t.length,s=xo(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Qh,s[o])}function l0(r){switch(r){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return jg;case 35675:return Kg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return c0}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l0(e.type)}}class d0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function bl(r,t){r.seq.push(t),r.map[t.id]=t}function f0(r,t,e){const n=r.name,i=n.length;for(sa.lastIndex=0;;){const s=sa.exec(n),o=sa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){bl(e,l===void 0?new h0(a,r,t):new u0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new d0(a),bl(e,d)),e=d}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);f0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Al(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const p0=37297;let m0=0;function g0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function x0(r){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(r);let n;switch(t===e?n="":t===no&&e===eo?n="LinearDisplayP3ToLinearSRGB":t===eo&&e===no&&(n="LinearSRGBToLinearDisplayP3"),r){case ei:case po:return[n,"LinearTransferOETF"];case ve:case Za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Tl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+g0(r.getShaderSource(t),o)}else return i}function _0(r,t){const e=x0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function v0(r,t){let e;switch(t){case dd:e="Linear";break;case fd:e="Reinhard";break;case pd:e="OptimizedCineon";break;case md:e="ACESFilmic";break;case xd:e="AgX";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function y0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function M0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fs).join(`
`)}function w0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function fs(r){return r!==""}function Rl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(r){return r.replace(E0,A0)}const b0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function A0(r,t){let e=Zt[t];if(e===void 0){const n=b0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(r){return r.replace(T0,R0)}function R0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ll(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function P0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function I0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ho:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function D0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=C0(e),l=P0(e),h=L0(e),d=I0(e),u=D0(e),f=e.isWebGL2?"":y0(e),m=M0(e),x=w0(s),p=i.createProgram();let g,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fs).join(`
`),g.length>0&&(g+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fs).join(`
`),v.length>0&&(v+=`
`)):(g=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),v=[f,Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==fi?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=Ba(o),o=Rl(o,e),o=Cl(o,e),a=Ba(a),a=Rl(a,e),a=Cl(a,e),o=Pl(o),a=Pl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=_+g+o,L=_+v+a,A=Al(i,i.VERTEX_SHADER,S),T=Al(i,i.FRAGMENT_SHADER,L);i.attachShader(p,A),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function G(W){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(T).trim();let N=!0,it=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,T);else{const C=Tl(i,A,"vertex"),O=Tl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+C+`
`+O)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(I===""||U==="")&&(it=!1);it&&(W.diagnostics={runnable:N,programLog:B,vertexShader:{log:I,prefix:g},fragmentShader:{log:U,prefix:v}})}i.deleteShader(A),i.deleteShader(T),b=new Yr(i,p),E=S0(i,p)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let E;this.getAttributes=function(){return E===void 0&&G(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(p,p0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=T,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z0(t),e.set(t,n)),n}}class z0{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}}function B0(r,t,e,n,i,s,o){const a=new Ja,c=new F0,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,E,H,W,B){const I=W.fog,U=B.geometry,N=b.isMeshStandardMaterial?W.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),C=it&&it.mapping===uo?it.image.height:null,O=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=j!==void 0?j.length:0;let rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let tt,at,_t,bt;if(O){const Kt=In[O];tt=Kt.vertexShader,at=Kt.fragmentShader}else tt=b.vertexShader,at=b.fragmentShader,c.update(b),_t=c.getVertexShaderID(b),bt=c.getFragmentShaderID(b);const At=r.getRenderTarget(),Ht=B.isInstancedMesh===!0,Gt=B.isBatchedMesh===!0,Ft=!!b.map,te=!!b.matcap,Q=!!it,Pe=!!b.aoMap,Lt=!!b.lightMap,Wt=!!b.bumpMap,Tt=!!b.normalMap,fe=!!b.displacementMap,z=!!b.emissiveMap,M=!!b.metalnessMap,y=!!b.roughnessMap,D=b.anisotropy>0,Y=b.clearcoat>0,X=b.iridescence>0,F=b.sheen>0,q=b.transmission>0,K=D&&!!b.anisotropyMap,$=Y&&!!b.clearcoatMap,ot=Y&&!!b.clearcoatNormalMap,ht=Y&&!!b.clearcoatRoughnessMap,k=X&&!!b.iridescenceMap,ct=X&&!!b.iridescenceThicknessMap,ft=F&&!!b.sheenColorMap,lt=F&&!!b.sheenRoughnessMap,xt=!!b.specularMap,gt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,Xt=q&&!!b.transmissionMap,Bt=q&&!!b.thicknessMap,It=!!b.gradientMap,ut=!!b.alphaMap,V=b.alphaTest>0,mt=!!b.alphaHash,pt=!!b.extensions,Pt=!!U.attributes.uv1,dt=!!U.attributes.uv2,yt=!!U.attributes.uv3;let zt=fi;return b.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(zt=r.toneMapping),{isWebGL2:h,shaderID:O,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:at,defines:b.defines,customVertexShaderID:_t,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Gt,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ei,map:Ft,matcap:te,envMap:Q,envMapMode:Q&&it.mapping,envMapCubeUVHeight:C,aoMap:Pe,lightMap:Lt,bumpMap:Wt,normalMap:Tt,displacementMap:u&&fe,emissiveMap:z,normalMapObjectSpace:Tt&&b.normalMapType===Dd,normalMapTangentSpace:Tt&&b.normalMapType===fo,metalnessMap:M,roughnessMap:y,anisotropy:D,anisotropyMap:K,clearcoat:Y,clearcoatMap:$,clearcoatNormalMap:ot,clearcoatRoughnessMap:ht,iridescence:X,iridescenceMap:k,iridescenceThicknessMap:ct,sheen:F,sheenColorMap:ft,sheenRoughnessMap:lt,specularMap:xt,specularColorMap:gt,specularIntensityMap:Rt,transmission:q,transmissionMap:Xt,thicknessMap:Bt,gradientMap:It,opaque:b.transparent===!1&&b.blending===Ii,alphaMap:ut,alphaTest:V,alphaHash:mt,combine:b.combine,mapUv:Ft&&x(b.map.channel),aoMapUv:Pe&&x(b.aoMap.channel),lightMapUv:Lt&&x(b.lightMap.channel),bumpMapUv:Wt&&x(b.bumpMap.channel),normalMapUv:Tt&&x(b.normalMap.channel),displacementMapUv:fe&&x(b.displacementMap.channel),emissiveMapUv:z&&x(b.emissiveMap.channel),metalnessMapUv:M&&x(b.metalnessMap.channel),roughnessMapUv:y&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:$&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(b.sheenRoughnessMap.channel),specularMapUv:xt&&x(b.specularMap.channel),specularColorMapUv:gt&&x(b.specularColorMap.channel),specularIntensityMapUv:Rt&&x(b.specularIntensityMap.channel),transmissionMapUv:Xt&&x(b.transmissionMap.channel),thicknessMapUv:Bt&&x(b.thicknessMap.channel),alphaMapUv:ut&&x(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Tt||D),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:dt,vertexUv3s:yt,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Ft||ut),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pt&&b.extensions.derivatives===!0,extensionFragDepth:pt&&b.extensions.fragDepth===!0,extensionDrawBuffers:pt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)E.push(H),E.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(v(E,b),_(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function S(b){const E=m[b.type];let H;if(E){const W=In[E];H=yf.clone(W.uniforms)}else H=b.uniforms;return H}function L(b,E){let H;for(let W=0,B=l.length;W<B;W++){const I=l[W];if(I.cacheKey===E){H=I,++H.usedTimes;break}}return H===void 0&&(H=new U0(r,E,b,s),l.push(H)),H}function A(b){if(--b.usedTimes===0){const E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:G}}function O0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function k0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Il(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Dl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,x,p){let g=r[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:p},r[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=x,g.group=p),t++,g}function a(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function c(d,u,f,m,x,p){const g=o(d,u,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function l(d,u){e.length>1&&e.sort(d||k0),n.length>1&&n.sort(u||Il),i.length>1&&i.sort(u||Il)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function V0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Dl,r.set(n,[o])):i>=s.length?(o=new Dl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function H0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new kt};break;case"SpotLight":e={position:new R,direction:new R,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function G0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let W0=0;function X0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function q0(r,t){const e=new H0,n=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new Ut,a=new Ut;function c(h,d){let u=0,f=0,m=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let x=0,p=0,g=0,v=0,_=0,S=0,L=0,A=0,T=0,G=0,b=0;h.sort(X0);const E=d===!0?Math.PI:1;for(let W=0,B=h.length;W<B;W++){const I=h[W],U=I.color,N=I.intensity,it=I.distance,C=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*N*E,f+=U.g*N*E,m+=U.b*N*E;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],N);b++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const j=I.shadow,st=n.get(I);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,i.directionalShadow[x]=st,i.directionalShadowMap[x]=C,i.directionalShadowMatrix[x]=I.shadow.matrix,S++}i.directional[x]=O,x++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(U).multiplyScalar(N*E),O.distance=it,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[g]=O;const j=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,j.updateMatrices(I),I.castShadow&&G++),i.spotLightMatrix[g]=j.matrix,I.castShadow){const st=n.get(I);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,i.spotShadow[g]=st,i.spotShadowMap[g]=C,A++}g++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(U).multiplyScalar(N),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=O,v++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),O.distance=I.distance,O.decay=I.decay,I.castShadow){const j=I.shadow,st=n.get(I);st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,st.shadowCameraNear=j.camera.near,st.shadowCameraFar=j.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=C,i.pointShadowMatrix[p]=I.shadow.matrix,L++}i.point[p]=O,p++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(N*E),O.groundColor.copy(I.groundColor).multiplyScalar(N*E),i.hemi[_]=O,_++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const H=i.hash;(H.directionalLength!==x||H.pointLength!==p||H.spotLength!==g||H.rectAreaLength!==v||H.hemiLength!==_||H.numDirectionalShadows!==S||H.numPointShadows!==L||H.numSpotShadows!==A||H.numSpotMaps!==T||H.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=g,i.rectArea.length=v,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+T-G,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=b,H.directionalLength=x,H.pointLength=p,H.spotLength=g,H.rectAreaLength=v,H.hemiLength=_,H.numDirectionalShadows=S,H.numPointShadows=L,H.numSpotShadows=A,H.numSpotMaps=T,H.numLightProbes=b,i.version=W0++)}function l(h,d){let u=0,f=0,m=0,x=0,p=0;const g=d.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){const S=h[v];if(S.isDirectionalLight){const L=i.directional[u];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(g),u++}else if(S.isSpotLight){const L=i.spot[m];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const L=i.rectArea[x];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const L=i.point[f];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const L=i.hemi[p];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:i}}function Ul(r,t){const e=new q0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Y0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Ul(r,t),e.set(s,[c])):o>=a.length?(c=new Ul(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class j0 extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class K0 extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`;function J0(r,t,e){let n=new tc;const i=new Dt,s=new Dt,o=new oe,a=new j0({depthPacking:Id}),c=new K0,l={},h=e.maxTextureSize,d={[mi]:nn,[nn]:mi,[En]:En},u=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Z0,fragmentShader:$0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new sn;m.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ae(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let g=this.type;this.render=function(A,T,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=r.getRenderTarget(),E=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=g!==Kn&&this.type===Kn,I=g===Kn&&this.type!==Kn;for(let U=0,N=A.length;U<N;U++){const it=A[U],C=it.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const O=C.getFrameExtents();if(i.multiply(O),s.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,C.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,C.mapSize.y=s.y)),C.map===null||B===!0||I===!0){const st=this.type!==Kn?{minFilter:ke,magFilter:ke}:{};C.map!==null&&C.map.dispose(),C.map=new Ni(i.x,i.y,st),C.map.texture.name=it.name+".shadowMap",C.camera.updateProjectionMatrix()}r.setRenderTarget(C.map),r.clear();const j=C.getViewportCount();for(let st=0;st<j;st++){const rt=C.getViewport(st);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),W.viewport(o),C.updateMatrices(it,st),n=C.getFrustum(),S(T,G,C.camera,it,this.type)}C.isPointLightShadow!==!0&&this.type===Kn&&v(C,G),C.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(b,E,H)};function v(A,T){const G=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,G,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,G,f,x,null)}function _(A,T,G,b){let E=null;const H=G.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)E=H;else if(E=G.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=E.uuid,B=T.uuid;let I=l[W];I===void 0&&(I={},l[W]=I);let U=I[B];U===void 0&&(U=E.clone(),I[B]=U,T.addEventListener("dispose",L)),E=U}if(E.visible=T.visible,E.wireframe=T.wireframe,b===Kn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,G.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=r.properties.get(E);W.light=G}return E}function S(A,T,G,b,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld);const B=t.update(A),I=A.material;if(Array.isArray(I)){const U=B.groups;for(let N=0,it=U.length;N<it;N++){const C=U[N],O=I[C.materialIndex];if(O&&O.visible){const j=_(A,O,b,E);A.onBeforeShadow(r,A,T,G,B,j,C),r.renderBufferDirect(G,null,B,j,A,C),A.onAfterShadow(r,A,T,G,B,j,C)}}}else if(I.visible){const U=_(A,I,b,E);A.onBeforeShadow(r,A,T,G,B,U,null),r.renderBufferDirect(G,null,B,U,A,null),A.onAfterShadow(r,A,T,G,B,U,null)}}const W=A.children;for(let B=0,I=W.length;B<I;B++)S(W[B],T,G,b,E)}function L(A){A.target.removeEventListener("dispose",L);for(const G in l){const b=l[G],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function Q0(r,t,e){const n=e.isWebGL2;function i(){let V=!1;const mt=new oe;let pt=null;const Pt=new oe(0,0,0,0);return{setMask:function(dt){pt!==dt&&!V&&(r.colorMask(dt,dt,dt,dt),pt=dt)},setLocked:function(dt){V=dt},setClear:function(dt,yt,zt,ee,Kt){Kt===!0&&(dt*=ee,yt*=ee,zt*=ee),mt.set(dt,yt,zt,ee),Pt.equals(mt)===!1&&(r.clearColor(dt,yt,zt,ee),Pt.copy(mt))},reset:function(){V=!1,pt=null,Pt.set(-1,0,0,0)}}}function s(){let V=!1,mt=null,pt=null,Pt=null;return{setTest:function(dt){dt?Gt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(dt){mt!==dt&&!V&&(r.depthMask(dt),mt=dt)},setFunc:function(dt){if(pt!==dt){switch(dt){case id:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case od:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=dt}},setLocked:function(dt){V=dt},setClear:function(dt){Pt!==dt&&(r.clearDepth(dt),Pt=dt)},reset:function(){V=!1,mt=null,pt=null,Pt=null}}}function o(){let V=!1,mt=null,pt=null,Pt=null,dt=null,yt=null,zt=null,ee=null,Kt=null;return{setTest:function(jt){V||(jt?Gt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(jt){mt!==jt&&!V&&(r.stencilMask(jt),mt=jt)},setFunc:function(jt,ne,ce){(pt!==jt||Pt!==ne||dt!==ce)&&(r.stencilFunc(jt,ne,ce),pt=jt,Pt=ne,dt=ce)},setOp:function(jt,ne,ce){(yt!==jt||zt!==ne||ee!==ce)&&(r.stencilOp(jt,ne,ce),yt=jt,zt=ne,ee=ce)},setLocked:function(jt){V=jt},setClear:function(jt){Kt!==jt&&(r.clearStencil(jt),Kt=jt)},reset:function(){V=!1,mt=null,pt=null,Pt=null,dt=null,yt=null,zt=null,ee=null,Kt=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},m=new WeakMap,x=[],p=null,g=!1,v=null,_=null,S=null,L=null,A=null,T=null,G=null,b=new kt(0,0,0),E=0,H=!1,W=null,B=null,I=null,U=null,N=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,O=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),C=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),C=O>=2);let st=null,rt={};const tt=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),_t=new oe().fromArray(tt),bt=new oe().fromArray(at);function At(V,mt,pt,Pt){const dt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(V,yt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<pt;zt++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(mt,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(mt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return yt}const Ht={};Ht[r.TEXTURE_2D]=At(r.TEXTURE_2D,r.TEXTURE_2D,1),Ht[r.TEXTURE_CUBE_MAP]=At(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ht[r.TEXTURE_2D_ARRAY]=At(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ht[r.TEXTURE_3D]=At(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Gt(r.DEPTH_TEST),c.setFunc(Kr),z(!1),M(mc),Gt(r.CULL_FACE),Tt(di);function Gt(V){u[V]!==!0&&(r.enable(V),u[V]=!0)}function Ft(V){u[V]!==!1&&(r.disable(V),u[V]=!1)}function te(V,mt){return f[V]!==mt?(r.bindFramebuffer(V,mt),f[V]=mt,n&&(V===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=mt),V===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=mt)),!0):!1}function Q(V,mt){let pt=x,Pt=!1;if(V)if(pt=m.get(mt),pt===void 0&&(pt=[],m.set(mt,pt)),V.isWebGLMultipleRenderTargets){const dt=V.texture;if(pt.length!==dt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,zt=dt.length;yt<zt;yt++)pt[yt]=r.COLOR_ATTACHMENT0+yt;pt.length=dt.length,Pt=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,Pt=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,Pt=!0);Pt&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function Pe(V){return p!==V?(r.useProgram(V),p=V,!0):!1}const Lt={[Ai]:r.FUNC_ADD,[Hu]:r.FUNC_SUBTRACT,[Gu]:r.FUNC_REVERSE_SUBTRACT};if(n)Lt[vc]=r.MIN,Lt[yc]=r.MAX;else{const V=t.get("EXT_blend_minmax");V!==null&&(Lt[vc]=V.MIN_EXT,Lt[yc]=V.MAX_EXT)}const Wt={[Wu]:r.ZERO,[Xu]:r.ONE,[qu]:r.SRC_COLOR,[La]:r.SRC_ALPHA,[Ju]:r.SRC_ALPHA_SATURATE,[Zu]:r.DST_COLOR,[ju]:r.DST_ALPHA,[Yu]:r.ONE_MINUS_SRC_COLOR,[Ia]:r.ONE_MINUS_SRC_ALPHA,[$u]:r.ONE_MINUS_DST_COLOR,[Ku]:r.ONE_MINUS_DST_ALPHA,[Qu]:r.CONSTANT_COLOR,[td]:r.ONE_MINUS_CONSTANT_COLOR,[ed]:r.CONSTANT_ALPHA,[nd]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(V,mt,pt,Pt,dt,yt,zt,ee,Kt,jt){if(V===di){g===!0&&(Ft(r.BLEND),g=!1);return}if(g===!1&&(Gt(r.BLEND),g=!0),V!==Vu){if(V!==v||jt!==H){if((_!==Ai||A!==Ai)&&(r.blendEquation(r.FUNC_ADD),_=Ai,A=Ai),jt)switch(V){case Ii:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.ONE,r.ONE);break;case xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ii:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,L=null,T=null,G=null,b.set(0,0,0),E=0,v=V,H=jt}return}dt=dt||mt,yt=yt||pt,zt=zt||Pt,(mt!==_||dt!==A)&&(r.blendEquationSeparate(Lt[mt],Lt[dt]),_=mt,A=dt),(pt!==S||Pt!==L||yt!==T||zt!==G)&&(r.blendFuncSeparate(Wt[pt],Wt[Pt],Wt[yt],Wt[zt]),S=pt,L=Pt,T=yt,G=zt),(ee.equals(b)===!1||Kt!==E)&&(r.blendColor(ee.r,ee.g,ee.b,Kt),b.copy(ee),E=Kt),v=V,H=!1}function fe(V,mt){V.side===En?Ft(r.CULL_FACE):Gt(r.CULL_FACE);let pt=V.side===nn;mt&&(pt=!pt),z(pt),V.blending===Ii&&V.transparent===!1?Tt(di):Tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Pt=V.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),D(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Gt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function z(V){W!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),W=V)}function M(V){V!==Bu?(Gt(r.CULL_FACE),V!==B&&(V===mc?r.cullFace(r.BACK):V===Ou?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),B=V}function y(V){V!==I&&(C&&r.lineWidth(V),I=V)}function D(V,mt,pt){V?(Gt(r.POLYGON_OFFSET_FILL),(U!==mt||N!==pt)&&(r.polygonOffset(mt,pt),U=mt,N=pt)):Ft(r.POLYGON_OFFSET_FILL)}function Y(V){V?Gt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function X(V){V===void 0&&(V=r.TEXTURE0+it-1),st!==V&&(r.activeTexture(V),st=V)}function F(V,mt,pt){pt===void 0&&(st===null?pt=r.TEXTURE0+it-1:pt=st);let Pt=rt[pt];Pt===void 0&&(Pt={type:void 0,texture:void 0},rt[pt]=Pt),(Pt.type!==V||Pt.texture!==mt)&&(st!==pt&&(r.activeTexture(pt),st=pt),r.bindTexture(V,mt||Ht[V]),Pt.type=V,Pt.texture=mt)}function q(){const V=rt[st];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(V){_t.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),_t.copy(V))}function Xt(V){bt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function Bt(V,mt){let pt=d.get(mt);pt===void 0&&(pt=new WeakMap,d.set(mt,pt));let Pt=pt.get(V);Pt===void 0&&(Pt=r.getUniformBlockIndex(mt,V.name),pt.set(V,Pt))}function It(V,mt){const Pt=d.get(mt).get(V);h.get(mt)!==Pt&&(r.uniformBlockBinding(mt,Pt,V.__bindingPointIndex),h.set(mt,Pt))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},st=null,rt={},f={},m=new WeakMap,x=[],p=null,g=!1,v=null,_=null,S=null,L=null,A=null,T=null,G=null,b=new kt(0,0,0),E=0,H=!1,W=null,B=null,I=null,U=null,N=null,_t.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Gt,disable:Ft,bindFramebuffer:te,drawBuffers:Q,useProgram:Pe,setBlending:Tt,setMaterial:fe,setFlipSided:z,setCullFace:M,setLineWidth:y,setPolygonOffset:D,setScissorTest:Y,activeTexture:X,bindTexture:F,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:xt,texImage3D:gt,updateUBOMapping:Bt,uniformBlockBinding:It,texStorage2D:ft,texStorage3D:lt,texSubImage2D:ot,texSubImage3D:ht,compressedTexSubImage2D:k,compressedTexSubImage3D:ct,scissor:Rt,viewport:Xt,reset:ut}}function tx(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,y){return f?new OffscreenCanvas(M,y):Js("canvas")}function x(M,y,D,Y){let X=1;if((M.width>Y||M.height>Y)&&(X=Y/Math.max(M.width,M.height)),X<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const F=y?so:Math.floor,q=F(X*M.width),K=F(X*M.height);d===void 0&&(d=m(q,K));const $=D?m(q,K):d;return $.width=q,$.height=K,$.getContext("2d").drawImage(M,0,0,q,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+q+"x"+K+")."),$}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return za(M.width)&&za(M.height)}function g(M){return a?!1:M.wrapS!==ln||M.wrapT!==ln||M.minFilter!==ke&&M.minFilter!==fn}function v(M,y){return M.generateMipmaps&&y&&M.minFilter!==ke&&M.minFilter!==fn}function _(M){r.generateMipmap(M)}function S(M,y,D,Y,X=!1){if(a===!1)return y;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let F=y;if(y===r.RED&&(D===r.FLOAT&&(F=r.R32F),D===r.HALF_FLOAT&&(F=r.R16F),D===r.UNSIGNED_BYTE&&(F=r.R8)),y===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(F=r.R8UI),D===r.UNSIGNED_SHORT&&(F=r.R16UI),D===r.UNSIGNED_INT&&(F=r.R32UI),D===r.BYTE&&(F=r.R8I),D===r.SHORT&&(F=r.R16I),D===r.INT&&(F=r.R32I)),y===r.RG&&(D===r.FLOAT&&(F=r.RG32F),D===r.HALF_FLOAT&&(F=r.RG16F),D===r.UNSIGNED_BYTE&&(F=r.RG8)),y===r.RGBA){const q=X?to:he.getTransfer(Y);D===r.FLOAT&&(F=r.RGBA32F),D===r.HALF_FLOAT&&(F=r.RGBA16F),D===r.UNSIGNED_BYTE&&(F=q===ge?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(F=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(F=r.RGB5_A1)}return(F===r.R16F||F===r.R32F||F===r.RG16F||F===r.RG32F||F===r.RGBA16F||F===r.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function L(M,y,D){return v(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==ke&&M.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function A(M){return M===ke||M===wc||M===Po?r.NEAREST:r.LINEAR}function T(M){const y=M.target;y.removeEventListener("dispose",T),b(y),y.isVideoTexture&&h.delete(y)}function G(M){const y=M.target;y.removeEventListener("dispose",G),H(y)}function b(M){const y=n.get(M);if(y.__webglInit===void 0)return;const D=M.source,Y=u.get(D);if(Y){const X=Y[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&E(M),Object.keys(Y).length===0&&u.delete(D)}n.remove(M)}function E(M){const y=n.get(M);r.deleteTexture(y.__webglTexture);const D=M.source,Y=u.get(D);delete Y[y.__cacheKey],o.memory.textures--}function H(M){const y=M.texture,D=n.get(M),Y=n.get(y);if(Y.__webglTexture!==void 0&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(D.__webglFramebuffer[X]))for(let F=0;F<D.__webglFramebuffer[X].length;F++)r.deleteFramebuffer(D.__webglFramebuffer[X][F]);else r.deleteFramebuffer(D.__webglFramebuffer[X]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[X])}else{if(Array.isArray(D.__webglFramebuffer))for(let X=0;X<D.__webglFramebuffer.length;X++)r.deleteFramebuffer(D.__webglFramebuffer[X]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let X=0;X<D.__webglColorRenderbuffer.length;X++)D.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[X]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let X=0,F=y.length;X<F;X++){const q=n.get(y[X]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(y[X])}n.remove(y),n.remove(M)}let W=0;function B(){W=0}function I(){const M=W;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),W+=1,M}function U(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function N(M,y){const D=n.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(D,M,y);return}}e.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+y)}function it(M,y){const D=n.get(M);if(M.version>0&&D.__version!==M.version){_t(D,M,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+y)}function C(M,y){const D=n.get(M);if(M.version>0&&D.__version!==M.version){_t(D,M,y);return}e.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+y)}function O(M,y){const D=n.get(M);if(M.version>0&&D.__version!==M.version){bt(D,M,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+y)}const j={[Ks]:r.REPEAT,[ln]:r.CLAMP_TO_EDGE,[Ua]:r.MIRRORED_REPEAT},st={[ke]:r.NEAREST,[wc]:r.NEAREST_MIPMAP_NEAREST,[Po]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[vd]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},rt={[Ud]:r.NEVER,[kd]:r.ALWAYS,[Nd]:r.LESS,[Bh]:r.LEQUAL,[Fd]:r.EQUAL,[Od]:r.GEQUAL,[zd]:r.GREATER,[Bd]:r.NOTEQUAL};function tt(M,y,D){if(D?(r.texParameteri(M,r.TEXTURE_WRAP_S,j[y.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,j[y.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,j[y.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,st[y.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,st[y.minFilter])):(r.texParameteri(M,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(M,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==ln||y.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,r.TEXTURE_MAG_FILTER,A(y.magFilter)),r.texParameteri(M,r.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==ke&&y.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Y=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===ke||y.minFilter!==Po&&y.minFilter!==Zs||y.type===Jn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===$s&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(M,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function at(M,y){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",T));const Y=y.source;let X=u.get(Y);X===void 0&&(X={},u.set(Y,X));const F=U(y);if(F!==M.__cacheKey){X[F]===void 0&&(X[F]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[F].usedTimes++;const q=X[M.__cacheKey];q!==void 0&&(X[M.__cacheKey].usedTimes--,q.usedTimes===0&&E(y)),M.__cacheKey=F,M.__webglTexture=X[F].texture}return D}function _t(M,y,D){let Y=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=r.TEXTURE_3D);const X=at(M,y),F=y.source;e.bindTexture(Y,M.__webglTexture,r.TEXTURE0+D);const q=n.get(F);if(F.version!==q.__version||X===!0){e.activeTexture(r.TEXTURE0+D);const K=he.getPrimaries(he.workingColorSpace),$=y.colorSpace===gn?null:he.getPrimaries(y.colorSpace),ot=y.colorSpace===gn||K===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const ht=g(y)&&p(y.image)===!1;let k=x(y.image,ht,!1,i.maxTextureSize);k=z(y,k);const ct=p(k)||a,ft=s.convert(y.format,y.colorSpace);let lt=s.convert(y.type),xt=S(y.internalFormat,ft,lt,y.colorSpace,y.isVideoTexture);tt(Y,y,ct);let gt;const Rt=y.mipmaps,Xt=a&&y.isVideoTexture!==!0&&xt!==Nh,Bt=q.__version===void 0||X===!0,It=L(y,k,ct);if(y.isDepthTexture)xt=r.DEPTH_COMPONENT,a?y.type===Jn?xt=r.DEPTH_COMPONENT32F:y.type===hi?xt=r.DEPTH_COMPONENT24:y.type===Di?xt=r.DEPTH24_STENCIL8:xt=r.DEPTH_COMPONENT16:y.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ui&&xt===r.DEPTH_COMPONENT&&y.type!==ja&&y.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=hi,lt=s.convert(y.type)),y.format===ws&&xt===r.DEPTH_COMPONENT&&(xt=r.DEPTH_STENCIL,y.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Di,lt=s.convert(y.type))),Bt&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,xt,k.width,k.height):e.texImage2D(r.TEXTURE_2D,0,xt,k.width,k.height,0,ft,lt,null));else if(y.isDataTexture)if(Rt.length>0&&ct){Xt&&Bt&&e.texStorage2D(r.TEXTURE_2D,It,xt,Rt[0].width,Rt[0].height);for(let ut=0,V=Rt.length;ut<V;ut++)gt=Rt[ut],Xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,gt.width,gt.height,ft,lt,gt.data):e.texImage2D(r.TEXTURE_2D,ut,xt,gt.width,gt.height,0,ft,lt,gt.data);y.generateMipmaps=!1}else Xt?(Bt&&e.texStorage2D(r.TEXTURE_2D,It,xt,k.width,k.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,k.width,k.height,ft,lt,k.data)):e.texImage2D(r.TEXTURE_2D,0,xt,k.width,k.height,0,ft,lt,k.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&Bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,It,xt,Rt[0].width,Rt[0].height,k.depth);for(let ut=0,V=Rt.length;ut<V;ut++)gt=Rt[ut],y.format!==mn?ft!==null?Xt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,gt.width,gt.height,k.depth,ft,gt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,xt,gt.width,gt.height,k.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,gt.width,gt.height,k.depth,ft,lt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,xt,gt.width,gt.height,k.depth,0,ft,lt,gt.data)}else{Xt&&Bt&&e.texStorage2D(r.TEXTURE_2D,It,xt,Rt[0].width,Rt[0].height);for(let ut=0,V=Rt.length;ut<V;ut++)gt=Rt[ut],y.format!==mn?ft!==null?Xt?e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,gt.width,gt.height,ft,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,gt.width,gt.height,ft,lt,gt.data):e.texImage2D(r.TEXTURE_2D,ut,xt,gt.width,gt.height,0,ft,lt,gt.data)}else if(y.isDataArrayTexture)Xt?(Bt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,It,xt,k.width,k.height,k.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ft,lt,k.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,k.width,k.height,k.depth,0,ft,lt,k.data);else if(y.isData3DTexture)Xt?(Bt&&e.texStorage3D(r.TEXTURE_3D,It,xt,k.width,k.height,k.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ft,lt,k.data)):e.texImage3D(r.TEXTURE_3D,0,xt,k.width,k.height,k.depth,0,ft,lt,k.data);else if(y.isFramebufferTexture){if(Bt)if(Xt)e.texStorage2D(r.TEXTURE_2D,It,xt,k.width,k.height);else{let ut=k.width,V=k.height;for(let mt=0;mt<It;mt++)e.texImage2D(r.TEXTURE_2D,mt,xt,ut,V,0,ft,lt,null),ut>>=1,V>>=1}}else if(Rt.length>0&&ct){Xt&&Bt&&e.texStorage2D(r.TEXTURE_2D,It,xt,Rt[0].width,Rt[0].height);for(let ut=0,V=Rt.length;ut<V;ut++)gt=Rt[ut],Xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,ft,lt,gt):e.texImage2D(r.TEXTURE_2D,ut,xt,ft,lt,gt);y.generateMipmaps=!1}else Xt?(Bt&&e.texStorage2D(r.TEXTURE_2D,It,xt,k.width,k.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,lt,k)):e.texImage2D(r.TEXTURE_2D,0,xt,ft,lt,k);v(y,ct)&&_(Y),q.__version=F.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function bt(M,y,D){if(y.image.length!==6)return;const Y=at(M,y),X=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+D);const F=n.get(X);if(X.version!==F.__version||Y===!0){e.activeTexture(r.TEXTURE0+D);const q=he.getPrimaries(he.workingColorSpace),K=y.colorSpace===gn?null:he.getPrimaries(y.colorSpace),$=y.colorSpace===gn||q===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ot=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,k=[];for(let ut=0;ut<6;ut++)!ot&&!ht?k[ut]=x(y.image[ut],!1,!0,i.maxCubemapSize):k[ut]=ht?y.image[ut].image:y.image[ut],k[ut]=z(y,k[ut]);const ct=k[0],ft=p(ct)||a,lt=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),gt=S(y.internalFormat,lt,xt,y.colorSpace),Rt=a&&y.isVideoTexture!==!0,Xt=F.__version===void 0||Y===!0;let Bt=L(y,ct,ft);tt(r.TEXTURE_CUBE_MAP,y,ft);let It;if(ot){Rt&&Xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,gt,ct.width,ct.height);for(let ut=0;ut<6;ut++){It=k[ut].mipmaps;for(let V=0;V<It.length;V++){const mt=It[V];y.format!==mn?lt!==null?Rt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V,0,0,mt.width,mt.height,lt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V,0,0,mt.width,mt.height,lt,xt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V,gt,mt.width,mt.height,0,lt,xt,mt.data)}}}else{It=y.mipmaps,Rt&&Xt&&(It.length>0&&Bt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,gt,k[0].width,k[0].height));for(let ut=0;ut<6;ut++)if(ht){Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,k[ut].width,k[ut].height,lt,xt,k[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,k[ut].width,k[ut].height,0,lt,xt,k[ut].data);for(let V=0;V<It.length;V++){const pt=It[V].image[ut].image;Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V+1,0,0,pt.width,pt.height,lt,xt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V+1,gt,pt.width,pt.height,0,lt,xt,pt.data)}}else{Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,lt,xt,k[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,lt,xt,k[ut]);for(let V=0;V<It.length;V++){const mt=It[V];Rt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V+1,0,0,lt,xt,mt.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,V+1,gt,lt,xt,mt.image[ut])}}}v(y,ft)&&_(r.TEXTURE_CUBE_MAP),F.__version=X.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function At(M,y,D,Y,X,F){const q=s.convert(D.format,D.colorSpace),K=s.convert(D.type),$=S(D.internalFormat,q,K,D.colorSpace);if(!n.get(y).__hasExternalTextures){const ht=Math.max(1,y.width>>F),k=Math.max(1,y.height>>F);X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?e.texImage3D(X,F,$,ht,k,y.depth,0,q,K,null):e.texImage2D(X,F,$,ht,k,0,q,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,M),Tt(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,X,n.get(D).__webglTexture,0,Wt(y)):(X===r.TEXTURE_2D||X>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,X,n.get(D).__webglTexture,F),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(M,y,D){if(r.bindRenderbuffer(r.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let Y=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(D||Tt(y)){const X=y.depthTexture;X&&X.isDepthTexture&&(X.type===Jn?Y=r.DEPTH_COMPONENT32F:X.type===hi&&(Y=r.DEPTH_COMPONENT24));const F=Wt(y);Tt(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,Y,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,F,Y,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,Y,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){const Y=Wt(y);D&&Tt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,r.DEPTH24_STENCIL8,y.width,y.height):Tt(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{const Y=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let X=0;X<Y.length;X++){const F=Y[X],q=s.convert(F.format,F.colorSpace),K=s.convert(F.type),$=S(F.internalFormat,q,K,F.colorSpace),ot=Wt(y);D&&Tt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,$,y.width,y.height):Tt(y)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,$,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,$,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),N(y.depthTexture,0);const Y=n.get(y.depthTexture).__webglTexture,X=Wt(y);if(y.depthTexture.format===Ui)Tt(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(y.depthTexture.format===ws)Tt(y)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ft(M){const y=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Gt(y.__webglFramebuffer,M)}else if(D){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ht(y.__webglDepthbuffer[Y],M,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Ht(y.__webglDepthbuffer,M,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function te(M,y,D){const Y=n.get(M);y!==void 0&&At(Y.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Ft(M)}function Q(M){const y=M.texture,D=n.get(M),Y=n.get(y);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=y.version,o.memory.textures++);const X=M.isWebGLCubeRenderTarget===!0,F=M.isWebGLMultipleRenderTargets===!0,q=p(M)||a;if(X){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let $=0;$<y.mipmaps.length;$++)D.__webglFramebuffer[K][$]=r.createFramebuffer()}else D.__webglFramebuffer[K]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)D.__webglFramebuffer[K]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(F)if(i.drawBuffers){const K=M.texture;for(let $=0,ot=K.length;$<ot;$++){const ht=n.get(K[$]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Tt(M)===!1){const K=F?y:[y];D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const ot=K[$];D.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[$]);const ht=s.convert(ot.format,ot.colorSpace),k=s.convert(ot.type),ct=S(ot.internalFormat,ht,k,ot.colorSpace,M.isXRRenderTarget===!0),ft=Wt(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ct,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,D.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),tt(r.TEXTURE_CUBE_MAP,y,q);for(let K=0;K<6;K++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)At(D.__webglFramebuffer[K][$],M,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else At(D.__webglFramebuffer[K],M,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);v(y,q)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){const K=M.texture;for(let $=0,ot=K.length;$<ot;$++){const ht=K[$],k=n.get(ht);e.bindTexture(r.TEXTURE_2D,k.__webglTexture),tt(r.TEXTURE_2D,ht,q),At(D.__webglFramebuffer,M,ht,r.COLOR_ATTACHMENT0+$,r.TEXTURE_2D,0),v(ht,q)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?K=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(K,Y.__webglTexture),tt(K,y,q),a&&y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)At(D.__webglFramebuffer[$],M,y,r.COLOR_ATTACHMENT0,K,$);else At(D.__webglFramebuffer,M,y,r.COLOR_ATTACHMENT0,K,0);v(y,q)&&_(K),e.unbindTexture()}M.depthBuffer&&Ft(M)}function Pe(M){const y=p(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0,X=D.length;Y<X;Y++){const F=D[Y];if(v(F,y)){const q=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,K=n.get(F).__webglTexture;e.bindTexture(q,K),_(q),e.unbindTexture()}}}function Lt(M){if(a&&M.samples>0&&Tt(M)===!1){const y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,Y=M.height;let X=r.COLOR_BUFFER_BIT;const F=[],q=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=n.get(M),$=M.isWebGLMultipleRenderTargets===!0;if($)for(let ot=0;ot<y.length;ot++)e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){F.push(r.COLOR_ATTACHMENT0+ot),M.depthBuffer&&F.push(q);const ht=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(ht===!1&&(M.depthBuffer&&(X|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&(X|=r.STENCIL_BUFFER_BIT)),$&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,K.__webglColorRenderbuffer[ot]),ht===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[q]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[q])),$){const k=n.get(y[ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,k,0)}r.blitFramebuffer(0,0,D,Y,0,0,D,Y,X,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let ot=0;ot<y.length;ot++){e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,K.__webglColorRenderbuffer[ot]);const ht=n.get(y[ot]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function Wt(M){return Math.min(i.maxSamples,M.samples)}function Tt(M){const y=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(M){const y=o.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function z(M,y){const D=M.colorSpace,Y=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Fa||D!==ei&&D!==gn&&(he.getTransfer(D)===ge?a===!1?t.has("EXT_sRGB")===!0&&Y===mn?(M.format=Fa,M.minFilter=fn,M.generateMipmaps=!1):y=kh.sRGBToLinear(y):(Y!==mn||X!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=it,this.setTexture3D=C,this.setTextureCube=O,this.rebindTextures=te,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Tt}function ex(r,t,e){const n=e.isWebGL2;function i(s,o=gn){let a;const c=he.getTransfer(o);if(s===pi)return r.UNSIGNED_BYTE;if(s===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yd)return r.BYTE;if(s===Md)return r.SHORT;if(s===ja)return r.UNSIGNED_SHORT;if(s===Ch)return r.INT;if(s===hi)return r.UNSIGNED_INT;if(s===Jn)return r.FLOAT;if(s===$s)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wd)return r.ALPHA;if(s===mn)return r.RGBA;if(s===Sd)return r.LUMINANCE;if(s===Ed)return r.LUMINANCE_ALPHA;if(s===Ui)return r.DEPTH_COMPONENT;if(s===ws)return r.DEPTH_STENCIL;if(s===Fa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bd)return r.RED;if(s===Ih)return r.RED_INTEGER;if(s===Ad)return r.RG;if(s===Dh)return r.RG_INTEGER;if(s===Uh)return r.RGBA_INTEGER;if(s===Lo||s===Io||s===Do||s===Uo)if(c===ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Do)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sc||s===Ec||s===bc||s===Ac)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tc||s===Rc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tc)return c===ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cc||s===Pc||s===Lc||s===Ic||s===Dc||s===Uc||s===Nc||s===Fc||s===zc||s===Bc||s===Oc||s===kc||s===Vc||s===Hc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ic)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hc)return c===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===No||s===Gc||s===Wc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===No)return c===ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===Xc||s===qc||s===Yc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===No)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Di?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class nx extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Un extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ix={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sx extends ki{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const x=e.getContextAttributes();let p=null,g=null;const v=[],_=[],S=new Dt;let L=null;const A=new Ze;A.layers.enable(1),A.viewport=new oe;const T=new Ze;T.layers.enable(2),T.viewport=new oe;const G=[A,T],b=new nx;b.layers.enable(1),b.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=v[tt];return at===void 0&&(at=new ra,v[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=v[tt];return at===void 0&&(at=new ra,v[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=v[tt];return at===void 0&&(at=new ra,v[tt]=at),at.getHandSpace()};function W(tt){const at=_.indexOf(tt.inputSource);if(at===-1)return;const _t=v[at];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,l||o),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function B(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",I);for(let tt=0;tt<v.length;tt++){const at=_[tt];at!==null&&(_[tt]=null,v[tt].disconnect(at))}E=null,H=null,t.setRenderTarget(p),f=null,u=null,d=null,i=null,g=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",B),i.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new Ni(f.framebufferWidth,f.framebufferHeight,{format:mn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let at=null,_t=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?ws:Ui,_t=x.stencil?Di:hi);const At={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new Ni(u.textureWidth,u.textureHeight,{format:mn,type:pi,depthTexture:new Zh(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Ht=t.properties.get(g);Ht.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(tt){for(let at=0;at<tt.removed.length;at++){const _t=tt.removed[at],bt=_.indexOf(_t);bt>=0&&(_[bt]=null,v[bt].disconnect(_t))}for(let at=0;at<tt.added.length;at++){const _t=tt.added[at];let bt=_.indexOf(_t);if(bt===-1){for(let Ht=0;Ht<v.length;Ht++)if(Ht>=_.length){_.push(_t),bt=Ht;break}else if(_[Ht]===null){_[Ht]=_t,bt=Ht;break}if(bt===-1)break}const At=v[bt];At&&At.connect(_t)}}const U=new R,N=new R;function it(tt,at,_t){U.setFromMatrixPosition(at.matrixWorld),N.setFromMatrixPosition(_t.matrixWorld);const bt=U.distanceTo(N),At=at.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,Gt=At[14]/(At[10]-1),Ft=At[14]/(At[10]+1),te=(At[9]+1)/At[5],Q=(At[9]-1)/At[5],Pe=(At[8]-1)/At[0],Lt=(Ht[8]+1)/Ht[0],Wt=Gt*Pe,Tt=Gt*Lt,fe=bt/(-Pe+Lt),z=fe*-Pe;at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(z),tt.translateZ(fe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();const M=Gt+fe,y=Ft+fe,D=Wt-z,Y=Tt+(bt-z),X=te*Ft/y*M,F=Q*Ft/y*M;tt.projectionMatrix.makePerspective(D,Y,X,F,M,y),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function C(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;b.near=T.near=A.near=tt.near,b.far=T.far=A.far=tt.far,(E!==b.near||H!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,H=b.far);const at=tt.parent,_t=b.cameras;C(b,at);for(let bt=0;bt<_t.length;bt++)C(_t[bt],at);_t.length===2?it(b,A,T):b.projectionMatrix.copy(A.projectionMatrix),O(tt,b,at)};function O(tt,at,_t){_t===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ss*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(tt){c=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)};let j=null;function st(tt,at){if(h=at.getViewerPose(l||o),m=at,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let bt=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let At=0;At<_t.length;At++){const Ht=_t[At];let Gt=null;if(f!==null)Gt=f.getViewport(Ht);else{const te=d.getViewSubImage(u,Ht);Gt=te.viewport,At===0&&(t.setRenderTargetTextures(g,te.colorTexture,u.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(g))}let Ft=G[At];Ft===void 0&&(Ft=new Ze,Ft.layers.enable(At),Ft.viewport=new oe,G[At]=Ft),Ft.matrix.fromArray(Ht.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Ht.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),At===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(Ft)}}for(let _t=0;_t<v.length;_t++){const bt=_[_t],At=v[_t];bt!==null&&At!==void 0&&At.update(bt,at,l||o)}j&&j(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}const rt=new Kh;rt.setAnimationLoop(st),this.setAnimationLoop=function(tt){j=tt},this.dispose=function(){}}}function rx(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,qh(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,_,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,v,_):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=t.get(g).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*_,e(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=_*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),t.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const S=_.program;n.uniformBlockBinding(v,S)}function l(v,_){let S=i[v.id];S===void 0&&(m(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",p));const L=_.program;n.updateUBOMapping(v,L);const A=t.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function h(v){const _=d();v.__bindingPointIndex=_;const S=r.createBuffer(),L=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,L,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=i[v.id],S=v.uniforms,L=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let A=0,T=S.length;A<T;A++){const G=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,E=G.length;b<E;b++){const H=G[b];if(f(H,A,b,L)===!0){const W=H.__offset,B=Array.isArray(H.value)?H.value:[H.value];let I=0;for(let U=0;U<B.length;U++){const N=B[U],it=x(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,W+I,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,I),I+=it.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,_,S,L){const A=v.value,T=_+"_"+S;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const G=L[T];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return L[T]=A,!0}else if(G.equals(A)===!1)return G.copy(A),!0}return!1}function m(v){const _=v.uniforms;let S=0;const L=16;for(let T=0,G=_.length;T<G;T++){const b=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,H=b.length;E<H;E++){const W=b[E],B=Array.isArray(W.value)?W.value:[W.value];for(let I=0,U=B.length;I<U;I++){const N=B[I],it=x(N),C=S%L;C!==0&&L-C<it.boundary&&(S+=L-C),W.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=it.storage}}}const A=S%L;return A>0&&(S+=L-A),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class nu{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const _=this;let S=!1,L=0,A=0,T=null,G=-1,b=null;const E=new oe,H=new oe;let W=null;const B=new kt(0);let I=0,U=e.width,N=e.height,it=1,C=null,O=null;const j=new oe(0,0,U,N),st=new oe(0,0,U,N);let rt=!1;const tt=new tc;let at=!1,_t=!1,bt=null;const At=new Ut,Ht=new Dt,Gt=new R,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return T===null?it:1}let Q=n;function Pe(P,Z){for(let J=0;J<P.length;J++){const nt=P[J],et=e.getContext(nt,Z);if(et!==null)return et}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",mt,!1),Q===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),Q=Pe(Z,P),Q===null)throw Pe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Lt,Wt,Tt,fe,z,M,y,D,Y,X,F,q,K,$,ot,ht,k,ct,ft,lt,xt,gt,Rt,Xt;function Bt(){Lt=new gg(Q),Wt=new hg(Q,Lt,t),Lt.init(Wt),gt=new ex(Q,Lt,Wt),Tt=new Q0(Q,Lt,Wt),fe=new vg(Q),z=new O0,M=new tx(Q,Lt,Tt,z,Wt,gt,fe),y=new dg(_),D=new mg(_),Y=new Tf(Q,Wt),Rt=new cg(Q,Lt,Y,Wt),X=new xg(Q,Y,fe,Rt),F=new Sg(Q,X,Y,fe),ft=new wg(Q,Wt,M),ht=new ug(z),q=new B0(_,y,D,Lt,Wt,Rt,ht),K=new rx(_,z),$=new V0,ot=new Y0(Lt,Wt),ct=new ag(_,y,D,Tt,F,u,c),k=new J0(_,F,Wt),Xt=new ox(Q,fe,Wt,Tt),lt=new lg(Q,Lt,fe,Wt),xt=new _g(Q,Lt,fe,Wt),fe.programs=q.programs,_.capabilities=Wt,_.extensions=Lt,_.properties=z,_.renderLists=$,_.shadowMap=k,_.state=Tt,_.info=fe}Bt();const It=new sx(_,Q);this.xr=It,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const P=Lt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Lt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(P){P!==void 0&&(it=P,this.setSize(U,N,!1))},this.getSize=function(P){return P.set(U,N)},this.setSize=function(P,Z,J=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,N=Z,e.width=Math.floor(P*it),e.height=Math.floor(Z*it),J===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(U*it,N*it).floor()},this.setDrawingBufferSize=function(P,Z,J){U=P,N=Z,it=J,e.width=Math.floor(P*J),e.height=Math.floor(Z*J),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,Z,J,nt){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,Z,J,nt),Tt.viewport(E.copy(j).multiplyScalar(it).floor())},this.getScissor=function(P){return P.copy(st)},this.setScissor=function(P,Z,J,nt){P.isVector4?st.set(P.x,P.y,P.z,P.w):st.set(P,Z,J,nt),Tt.scissor(H.copy(st).multiplyScalar(it).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(P){Tt.setScissorTest(rt=P)},this.setOpaqueSort=function(P){C=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(P=!0,Z=!0,J=!0){let nt=0;if(P){let et=!1;if(T!==null){const St=T.texture.format;et=St===Uh||St===Dh||St===Ih}if(et){const St=T.texture.type,Ct=St===pi||St===hi||St===ja||St===Di||St===Ph||St===Lh,Nt=ct.getClearColor(),Vt=ct.getClearAlpha(),Yt=Nt.r,qt=Nt.g,Ot=Nt.b;Ct?(f[0]=Yt,f[1]=qt,f[2]=Ot,f[3]=Vt,Q.clearBufferuiv(Q.COLOR,0,f)):(m[0]=Yt,m[1]=qt,m[2]=Ot,m[3]=Vt,Q.clearBufferiv(Q.COLOR,0,m))}else nt|=Q.COLOR_BUFFER_BIT}Z&&(nt|=Q.DEPTH_BUFFER_BIT),J&&(nt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),$.dispose(),ot.dispose(),z.dispose(),y.dispose(),D.dispose(),F.dispose(),Rt.dispose(),Xt.dispose(),q.dispose(),It.dispose(),It.removeEventListener("sessionstart",Kt),It.removeEventListener("sessionend",jt),bt&&(bt.dispose(),bt=null),ne.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=fe.autoReset,Z=k.enabled,J=k.autoUpdate,nt=k.needsUpdate,et=k.type;Bt(),fe.autoReset=P,k.enabled=Z,k.autoUpdate=J,k.needsUpdate=nt,k.type=et}function mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function pt(P){const Z=P.target;Z.removeEventListener("dispose",pt),Pt(Z)}function Pt(P){dt(P),z.remove(P)}function dt(P){const Z=z.get(P).programs;Z!==void 0&&(Z.forEach(function(J){q.releaseProgram(J)}),P.isShaderMaterial&&q.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,J,nt,et,St){Z===null&&(Z=Ft);const Ct=et.isMesh&&et.matrixWorld.determinant()<0,Nt=lr(P,Z,J,nt,et);Tt.setMaterial(nt,Ct);let Vt=J.index,Yt=1;if(nt.wireframe===!0){if(Vt=X.getWireframeAttribute(J),Vt===void 0)return;Yt=2}const qt=J.drawRange,Ot=J.attributes.position;let pe=qt.start*Yt,Ne=(qt.start+qt.count)*Yt;St!==null&&(pe=Math.max(pe,St.start*Yt),Ne=Math.min(Ne,(St.start+St.count)*Yt)),Vt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,Vt.count)):Ot!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,Ot.count));const ye=Ne-pe;if(ye<0||ye===1/0)return;Rt.setup(et,nt,Nt,J,Vt);let rn,ue=lt;if(Vt!==null&&(rn=Y.get(Vt),ue=xt,ue.setIndex(rn)),et.isMesh)nt.wireframe===!0?(Tt.setLineWidth(nt.wireframeLinewidth*te()),ue.setMode(Q.LINES)):ue.setMode(Q.TRIANGLES);else if(et.isLine){let Qt=nt.linewidth;Qt===void 0&&(Qt=1),Tt.setLineWidth(Qt*te()),et.isLineSegments?ue.setMode(Q.LINES):et.isLineLoop?ue.setMode(Q.LINE_LOOP):ue.setMode(Q.LINE_STRIP)}else et.isPoints?ue.setMode(Q.POINTS):et.isSprite&&ue.setMode(Q.TRIANGLES);if(et.isBatchedMesh)ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)ue.renderInstances(pe,ye,et.count);else if(J.isInstancedBufferGeometry){const Qt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ao=Math.min(J.instanceCount,Qt);ue.renderInstances(pe,ye,Ao)}else ue.render(pe,ye)};function yt(P,Z,J){P.transparent===!0&&P.side===En&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,se(P,Z,J),P.side=mi,P.needsUpdate=!0,se(P,Z,J),P.side=En):se(P,Z,J)}this.compile=function(P,Z,J=null){J===null&&(J=P),p=ot.get(J),p.init(),v.push(p),J.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),P!==J&&P.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights(_._useLegacyLights);const nt=new Set;return P.traverse(function(et){const St=et.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){const Nt=St[Ct];yt(Nt,J,et),nt.add(Nt)}else yt(St,J,et),nt.add(St)}),v.pop(),p=null,nt},this.compileAsync=function(P,Z,J=null){const nt=this.compile(P,Z,J);return new Promise(et=>{function St(){if(nt.forEach(function(Ct){z.get(Ct).currentProgram.isReady()&&nt.delete(Ct)}),nt.size===0){et(P);return}setTimeout(St,10)}Lt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let zt=null;function ee(P){zt&&zt(P)}function Kt(){ne.stop()}function jt(){ne.start()}const ne=new Kh;ne.setAnimationLoop(ee),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(P){zt=P,It.setAnimationLoop(P),P===null?ne.stop():ne.start()},It.addEventListener("sessionstart",Kt),It.addEventListener("sessionend",jt),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(Z),Z=It.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,Z,T),p=ot.get(P,v.length),p.init(),v.push(p),At.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),tt.setFromProjectionMatrix(At),_t=this.localClippingEnabled,at=ht.init(this.clippingPlanes,_t),x=$.get(P,g.length),x.init(),g.push(x),ce(P,Z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(C,O),this.info.render.frame++,at===!0&&ht.beginShadows();const J=p.state.shadowsArray;if(k.render(J,P,Z),at===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(x,P),p.setupLights(_._useLegacyLights),Z.isArrayCamera){const nt=Z.cameras;for(let et=0,St=nt.length;et<St;et++){const Ct=nt[et];$e(x,P,Ct,Ct.viewport)}}else $e(x,P,Z);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(_,P,Z),Rt.resetDefaultState(),G=-1,b=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function ce(P,Z,J,nt){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){nt&&Gt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(At);const Ct=F.update(P),Nt=P.material;Nt.visible&&x.push(P,Ct,Nt,J,Gt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const Ct=F.update(P),Nt=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Gt.copy(P.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Gt.copy(Ct.boundingSphere.center)),Gt.applyMatrix4(P.matrixWorld).applyMatrix4(At)),Array.isArray(Nt)){const Vt=Ct.groups;for(let Yt=0,qt=Vt.length;Yt<qt;Yt++){const Ot=Vt[Yt],pe=Nt[Ot.materialIndex];pe&&pe.visible&&x.push(P,Ct,pe,J,Gt.z,Ot)}}else Nt.visible&&x.push(P,Ct,Nt,J,Gt.z,null)}}const St=P.children;for(let Ct=0,Nt=St.length;Ct<Nt;Ct++)ce(St[Ct],Z,J,nt)}function $e(P,Z,J,nt){const et=P.opaque,St=P.transmissive,Ct=P.transparent;p.setupLightsView(J),at===!0&&ht.setGlobalState(_.clippingPlanes,J),St.length>0&&Le(et,St,Z,J),nt&&Tt.viewport(E.copy(nt)),et.length>0&&Je(et,Z,J),St.length>0&&Je(St,Z,J),Ct.length>0&&Je(Ct,Z,J),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Le(P,Z,J,nt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const St=Wt.isWebGL2;bt===null&&(bt=new Ni(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?$s:pi,minFilter:Zs,samples:St?4:0})),_.getDrawingBufferSize(Ht),St?bt.setSize(Ht.x,Ht.y):bt.setSize(so(Ht.x),so(Ht.y));const Ct=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(B),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=fi,Je(P,J,nt),M.updateMultisampleRenderTarget(bt),M.updateRenderTargetMipmap(bt);let Vt=!1;for(let Yt=0,qt=Z.length;Yt<qt;Yt++){const Ot=Z[Yt],pe=Ot.object,Ne=Ot.geometry,ye=Ot.material,rn=Ot.group;if(ye.side===En&&pe.layers.test(nt.layers)){const ue=ye.side;ye.side=nn,ye.needsUpdate=!0,Rn(pe,J,nt,Ne,ye,rn),ye.side=ue,ye.needsUpdate=!0,Vt=!0}}Vt===!0&&(M.updateMultisampleRenderTarget(bt),M.updateRenderTargetMipmap(bt)),_.setRenderTarget(Ct),_.setClearColor(B,I),_.toneMapping=Nt}function Je(P,Z,J){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let et=0,St=P.length;et<St;et++){const Ct=P[et],Nt=Ct.object,Vt=Ct.geometry,Yt=nt===null?Ct.material:nt,qt=Ct.group;Nt.layers.test(J.layers)&&Rn(Nt,Z,J,Vt,Yt,qt)}}function Rn(P,Z,J,nt,et,St){P.onBeforeRender(_,Z,J,nt,et,St),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),et.onBeforeRender(_,Z,J,nt,P,St),et.transparent===!0&&et.side===En&&et.forceSinglePass===!1?(et.side=nn,et.needsUpdate=!0,_.renderBufferDirect(J,Z,nt,et,P,St),et.side=mi,et.needsUpdate=!0,_.renderBufferDirect(J,Z,nt,et,P,St),et.side=En):_.renderBufferDirect(J,Z,nt,et,P,St),P.onAfterRender(_,Z,J,nt,et,St)}function se(P,Z,J){Z.isScene!==!0&&(Z=Ft);const nt=z.get(P),et=p.state.lights,St=p.state.shadowsArray,Ct=et.state.version,Nt=q.getParameters(P,et.state,St,Z,J),Vt=q.getProgramCacheKey(Nt);let Yt=nt.programs;nt.environment=P.isMeshStandardMaterial?Z.environment:null,nt.fog=Z.fog,nt.envMap=(P.isMeshStandardMaterial?D:y).get(P.envMap||nt.environment),Yt===void 0&&(P.addEventListener("dispose",pt),Yt=new Map,nt.programs=Yt);let qt=Yt.get(Vt);if(qt!==void 0){if(nt.currentProgram===qt&&nt.lightsStateVersion===Ct)return Qe(P,Nt),qt}else Nt.uniforms=q.getUniforms(P),P.onBuild(J,Nt,_),P.onBeforeCompile(Nt,_),qt=q.acquireProgram(Nt,Vt),Yt.set(Vt,qt),nt.uniforms=Nt.uniforms;const Ot=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=ht.uniform),Qe(P,Nt),nt.needsLights=bo(P),nt.lightsStateVersion=Ct,nt.needsLights&&(Ot.ambientLightColor.value=et.state.ambient,Ot.lightProbe.value=et.state.probe,Ot.directionalLights.value=et.state.directional,Ot.directionalLightShadows.value=et.state.directionalShadow,Ot.spotLights.value=et.state.spot,Ot.spotLightShadows.value=et.state.spotShadow,Ot.rectAreaLights.value=et.state.rectArea,Ot.ltc_1.value=et.state.rectAreaLTC1,Ot.ltc_2.value=et.state.rectAreaLTC2,Ot.pointLights.value=et.state.point,Ot.pointLightShadows.value=et.state.pointShadow,Ot.hemisphereLights.value=et.state.hemi,Ot.directionalShadowMap.value=et.state.directionalShadowMap,Ot.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ot.spotShadowMap.value=et.state.spotShadowMap,Ot.spotLightMatrix.value=et.state.spotLightMatrix,Ot.spotLightMap.value=et.state.spotLightMap,Ot.pointShadowMap.value=et.state.pointShadowMap,Ot.pointShadowMatrix.value=et.state.pointShadowMatrix),nt.currentProgram=qt,nt.uniformsList=null,qt}function zn(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Yr.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Qe(P,Z){const J=z.get(P);J.outputColorSpace=Z.outputColorSpace,J.batching=Z.batching,J.instancing=Z.instancing,J.instancingColor=Z.instancingColor,J.skinning=Z.skinning,J.morphTargets=Z.morphTargets,J.morphNormals=Z.morphNormals,J.morphColors=Z.morphColors,J.morphTargetsCount=Z.morphTargetsCount,J.numClippingPlanes=Z.numClippingPlanes,J.numIntersection=Z.numClipIntersection,J.vertexAlphas=Z.vertexAlphas,J.vertexTangents=Z.vertexTangents,J.toneMapping=Z.toneMapping}function lr(P,Z,J,nt,et){Z.isScene!==!0&&(Z=Ft),M.resetTextureUnits();const St=Z.fog,Ct=nt.isMeshStandardMaterial?Z.environment:null,Nt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ei,Vt=(nt.isMeshStandardMaterial?D:y).get(nt.envMap||Ct),Yt=nt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qt=!!J.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ot=!!J.morphAttributes.position,pe=!!J.morphAttributes.normal,Ne=!!J.morphAttributes.color;let ye=fi;nt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ye=_.toneMapping);const rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=rn!==void 0?rn.length:0,Qt=z.get(nt),Ao=p.state.lights;if(at===!0&&(_t===!0||P!==b)){const un=P===b&&nt.id===G;ht.setState(nt,P,un)}let we=!1;nt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ao.state.version||Qt.outputColorSpace!==Nt||et.isBatchedMesh&&Qt.batching===!1||!et.isBatchedMesh&&Qt.batching===!0||et.isInstancedMesh&&Qt.instancing===!1||!et.isInstancedMesh&&Qt.instancing===!0||et.isSkinnedMesh&&Qt.skinning===!1||!et.isSkinnedMesh&&Qt.skinning===!0||et.isInstancedMesh&&Qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Qt.instancingColor===!1&&et.instanceColor!==null||Qt.envMap!==Vt||nt.fog===!0&&Qt.fog!==St||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ht.numPlanes||Qt.numIntersection!==ht.numIntersection)||Qt.vertexAlphas!==Yt||Qt.vertexTangents!==qt||Qt.morphTargets!==Ot||Qt.morphNormals!==pe||Qt.morphColors!==Ne||Qt.toneMapping!==ye||Wt.isWebGL2===!0&&Qt.morphTargetsCount!==ue)&&(we=!0):(we=!0,Qt.__version=nt.version);let xi=Qt.currentProgram;we===!0&&(xi=se(nt,Z,et));let fc=!1,Ps=!1,To=!1;const He=xi.getUniforms(),_i=Qt.uniforms;if(Tt.useProgram(xi.program)&&(fc=!0,Ps=!0,To=!0),nt.id!==G&&(G=nt.id,Ps=!0),fc||b!==P){He.setValue(Q,"projectionMatrix",P.projectionMatrix),He.setValue(Q,"viewMatrix",P.matrixWorldInverse);const un=He.map.cameraPosition;un!==void 0&&un.setValue(Q,Gt.setFromMatrixPosition(P.matrixWorld)),Wt.logarithmicDepthBuffer&&He.setValue(Q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&He.setValue(Q,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Ps=!0,To=!0)}if(et.isSkinnedMesh){He.setOptional(Q,et,"bindMatrix"),He.setOptional(Q,et,"bindMatrixInverse");const un=et.skeleton;un&&(Wt.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),He.setValue(Q,"boneTexture",un.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(He.setOptional(Q,et,"batchingTexture"),He.setValue(Q,"batchingTexture",et._matricesTexture,M));const Ro=J.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&Wt.isWebGL2===!0)&&ft.update(et,J,xi),(Ps||Qt.receiveShadow!==et.receiveShadow)&&(Qt.receiveShadow=et.receiveShadow,He.setValue(Q,"receiveShadow",et.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(_i.envMap.value=Vt,_i.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Ps&&(He.setValue(Q,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights&&Eo(_i,To),St&&nt.fog===!0&&K.refreshFogUniforms(_i,St),K.refreshMaterialUniforms(_i,nt,it,N,bt),Yr.upload(Q,zn(Qt),_i,M)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Yr.upload(Q,zn(Qt),_i,M),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&He.setValue(Q,"center",et.center),He.setValue(Q,"modelViewMatrix",et.modelViewMatrix),He.setValue(Q,"normalMatrix",et.normalMatrix),He.setValue(Q,"modelMatrix",et.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const un=nt.uniformsGroups;for(let Co=0,Nu=un.length;Co<Nu;Co++)if(Wt.isWebGL2){const pc=un[Co];Xt.update(pc,xi),Xt.bind(pc,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Eo(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function bo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,Z,J){z.get(P.texture).__webglTexture=Z,z.get(P.depthTexture).__webglTexture=J;const nt=z.get(P);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=J===void 0,nt.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const J=z.get(P);J.__webglFramebuffer=Z,J.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,J=0){T=P,L=Z,A=J;let nt=!0,et=null,St=!1,Ct=!1;if(P){const Vt=z.get(P);Vt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(Q.FRAMEBUFFER,null),nt=!1):Vt.__webglFramebuffer===void 0?M.setupRenderTarget(P):Vt.__hasExternalTextures&&M.rebindTextures(P,z.get(P.texture).__webglTexture,z.get(P.depthTexture).__webglTexture);const Yt=P.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ct=!0);const qt=z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?et=qt[Z][J]:et=qt[Z],St=!0):Wt.isWebGL2&&P.samples>0&&M.useMultisampledRTT(P)===!1?et=z.get(P).__webglMultisampledFramebuffer:Array.isArray(qt)?et=qt[J]:et=qt,E.copy(P.viewport),H.copy(P.scissor),W=P.scissorTest}else E.copy(j).multiplyScalar(it).floor(),H.copy(st).multiplyScalar(it).floor(),W=rt;if(Tt.bindFramebuffer(Q.FRAMEBUFFER,et)&&Wt.drawBuffers&&nt&&Tt.drawBuffers(P,et),Tt.viewport(E),Tt.scissor(H),Tt.setScissorTest(W),St){const Vt=z.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,J)}else if(Ct){const Vt=z.get(P.texture),Yt=Z||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Vt.__webglTexture,J||0,Yt)}G=-1},this.readRenderTargetPixels=function(P,Z,J,nt,et,St,Ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){Tt.bindFramebuffer(Q.FRAMEBUFFER,Nt);try{const Vt=P.texture,Yt=Vt.format,qt=Vt.type;if(Yt!==mn&&gt.convert(Yt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=qt===$s&&(Lt.has("EXT_color_buffer_half_float")||Wt.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(qt!==pi&&gt.convert(qt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qt===Jn&&(Wt.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-nt&&J>=0&&J<=P.height-et&&Q.readPixels(Z,J,nt,et,gt.convert(Yt),gt.convert(qt),St)}finally{const Vt=T!==null?z.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(Q.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(P,Z,J=0){const nt=Math.pow(2,-J),et=Math.floor(Z.image.width*nt),St=Math.floor(Z.image.height*nt);M.setTexture2D(Z,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,J,0,0,P.x,P.y,et,St),Tt.unbindTexture()},this.copyTextureToTexture=function(P,Z,J,nt=0){const et=Z.image.width,St=Z.image.height,Ct=gt.convert(J.format),Nt=gt.convert(J.type);M.setTexture2D(J,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment),Z.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,nt,P.x,P.y,et,St,Ct,Nt,Z.image.data):Z.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,nt,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ct,Z.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,nt,P.x,P.y,Ct,Nt,Z.image),nt===0&&J.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,J,nt,et=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=P.max.x-P.min.x+1,Ct=P.max.y-P.min.y+1,Nt=P.max.z-P.min.z+1,Vt=gt.convert(nt.format),Yt=gt.convert(nt.type);let qt;if(nt.isData3DTexture)M.setTexture3D(nt,0),qt=Q.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)M.setTexture2DArray(nt,0),qt=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,nt.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,nt.unpackAlignment);const Ot=Q.getParameter(Q.UNPACK_ROW_LENGTH),pe=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ne=Q.getParameter(Q.UNPACK_SKIP_PIXELS),ye=Q.getParameter(Q.UNPACK_SKIP_ROWS),rn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),ue=J.isCompressedTexture?J.mipmaps[et]:J.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,ue.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ue.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,P.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,P.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?Q.texSubImage3D(qt,et,Z.x,Z.y,Z.z,St,Ct,Nt,Vt,Yt,ue.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(qt,et,Z.x,Z.y,Z.z,St,Ct,Nt,Vt,ue.data)):Q.texSubImage3D(qt,et,Z.x,Z.y,Z.z,St,Ct,Nt,Vt,Yt,ue),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Ot),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,pe),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ne),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ye),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,rn),et===0&&nt.generateMipmaps&&Q.generateMipmap(qt),Tt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?M.setTextureCube(P,0):P.isData3DTexture?M.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?M.setTexture2DArray(P,0):M.setTexture2D(P,0),Tt.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,Tt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Za?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Nn:zh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Nn?ve:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ax extends nu{}ax.prototype.isWebGL1Renderer=!0;class cx extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class lx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new R;class ro{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ro(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iu extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let is;const Ns=new R,ss=new R,rs=new R,os=new Dt,Fs=new Dt,su=new Ut,Ir=new R,zs=new R,Dr=new R,Nl=new Dt,oa=new Dt,Fl=new Dt;class zl extends _e{constructor(t=new iu){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lx(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new ro(n,3,0,!1)),is.setAttribute("uv",new ro(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ur(Ir.set(-.5,-.5,0),rs,o,ss,i,s),Ur(zs.set(.5,-.5,0),rs,o,ss,i,s),Ur(Dr.set(.5,.5,0),rs,o,ss,i,s),Nl.set(0,0),oa.set(1,0),Fl.set(1,1);let a=t.ray.intersectTriangle(Ir,zs,Dr,!1,Ns);if(a===null&&(Ur(zs.set(-.5,.5,0),rs,o,ss,i,s),oa.set(0,1),a=t.ray.intersectTriangle(Ir,Dr,zs,!1,Ns),a===null))return;const c=t.ray.origin.distanceTo(Ns);c<t.near||c>t.far||e.push({distance:c,point:Ns.clone(),uv:pn.getInterpolation(Ns,Ir,zs,Dr,Nl,oa,Fl,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(r,t,e,n,i,s){os.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Fs.x=s*os.x-i*os.y,Fs.y=i*os.x+s*os.y):Fs.copy(os),r.copy(t),r.x+=Fs.x,r.y+=Fs.y,r.applyMatrix4(su)}const Bl=new R,Ol=new oe,kl=new oe,hx=new R,Vl=new Ut,Nr=new R,aa=new bs,Hl=new Ut,ca=new mo;class ux extends ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mc,this.bindMatrix=new Ut,this.bindMatrixInverse=new Ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ze),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),t.ray.intersectsSphere(aa)!==!1&&(Hl.copy(i).invert(),ca.copy(t.ray).applyMatrix4(Hl),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ca)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ol.fromBufferAttribute(i.attributes.skinIndex,t),kl.fromBufferAttribute(i.attributes.skinWeight,t),Bl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=kl.getComponent(s);if(o!==0){const a=Ol.getComponent(s);Vl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(hx.copy(Bl).applyMatrix4(Vl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Oa extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dx extends Be{constructor(t=null,e=1,n=1,i,s,o,a,c,l=ke,h=ke,d,u){super(null,o,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gl=new Ut,fx=new Ut;class ic{constructor(t=[],e=[]){this.uuid=An(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ut)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ut;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:fx;Gl.multiplyMatrices(a,e[s]),Gl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ic(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new dx(e,t,t,mn,Jn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Oa),this.bones.push(o),this.boneInverses.push(new Ut().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ru extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wl=new R,Xl=new R,ql=new Ut,la=new mo,Fr=new bs;class px extends _e{constructor(t=new sn,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Wl.fromBufferAttribute(e,i-1),Xl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(Xl);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=s,t.ray.intersectsSphere(Fr)===!1)return;ql.copy(i).invert(),la.copy(t.ray).applyMatrix4(ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,d=new R,u=new R,f=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=g,S=v-1;_<S;_+=f){const L=m.getX(_),A=m.getX(_+1);if(l.fromBufferAttribute(p,L),h.fromBufferAttribute(p,A),la.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const G=t.ray.origin.distanceTo(u);G<t.near||G>t.far||e.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=g,S=v-1;_<S;_+=f){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),la.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(u);A<t.near||A>t.far||e.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class mx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new Dt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],s=[],o=[],a=new R,c=new Ut;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ve(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qs extends sn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const x=[],p=n/2;let g=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2));function v(){const S=new R,L=new R;let A=0;const T=(e-t)/n;for(let G=0;G<=s;G++){const b=[],E=G/s,H=E*(e-t)+t;for(let W=0;W<=i;W++){const B=W/i,I=B*c+a,U=Math.sin(I),N=Math.cos(I);L.x=H*U,L.y=-E*n+p,L.z=H*N,d.push(L.x,L.y,L.z),S.set(U,T,N).normalize(),u.push(S.x,S.y,S.z),f.push(B,1-E),b.push(m++)}x.push(b)}for(let G=0;G<i;G++)for(let b=0;b<s;b++){const E=x[b][G],H=x[b+1][G],W=x[b+1][G+1],B=x[b][G+1];h.push(E,H,B),h.push(H,W,B),A+=6}l.addGroup(g,A,0),g+=A}function _(S){const L=m,A=new Dt,T=new R;let G=0;const b=S===!0?t:e,E=S===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,p*E,0),u.push(0,E,0),f.push(.5,.5),m++;const H=m;for(let W=0;W<=i;W++){const I=W/i*c+a,U=Math.cos(I),N=Math.sin(I);T.x=b*N,T.y=p*E,T.z=b*U,d.push(T.x,T.y,T.z),u.push(0,E,0),A.x=U*.5+.5,A.y=N*.5*E+.5,f.push(A.x,A.y),m++}for(let W=0;W<i;W++){const B=L+W,I=H+W;S===!0?h.push(I,I+1,B):h.push(I+1,I,B),G+=3}l.addGroup(g,G,S===!0?1:2),g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const gx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ou(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,u,f;if(n&&(s=Mx(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let m=e;m<i;m+=e)d=r[m],u=r[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Qs(s,o,e,a,c,f,0),o}};function ou(r,t,e,n,i){let s,o;if(i===Ix(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Yl(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Yl(s,r[s],r[s+1],o);return o&&_o(o,o.next)&&(er(o),o=o.next),o}function zi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||Me(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Ax(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?_x(r,n,i,s):xx(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),er(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=vx(zi(r),t,e),Qs(r,t,e,n,i,s,2)):o===2&&yx(r,t,e,n,i,s):Qs(zi(r),t,e,n,i,s,1);break}}}function xx(r){const t=r.prev,e=r,n=r.next;if(Me(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,u=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ps(i,a,s,c,o,l,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _x(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Me(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,d=s.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,g=ka(f,m,t,e,n),v=ka(x,p,t,e,n);let _=r.prevZ,S=r.nextZ;for(;_&&_.z>=g&&S&&S.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ps(a,h,c,d,l,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=f&&S.x<=x&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&ps(a,h,c,d,l,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ps(a,h,c,d,l,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&ps(a,h,c,d,l,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function vx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!_o(i,s)&&au(i,n,n.next,s)&&tr(i,s)&&tr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),er(n),er(n.next),n=r=s),n=n.next}while(n!==r);return zi(n)}function yx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cx(o,a)){let c=cu(o,a);o=zi(o,o.next),c=zi(c,c.next),Qs(o,t,e,n,i,s,0),Qs(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Mx(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=ou(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Rx(l));for(i.sort(wx),s=0;s<i.length;s++)e=Sx(i[s],e);return e}function wx(r,t){return r.x-t.x}function Sx(r,t){const e=Ex(r,t);if(!e)return t;const n=cu(e,r);return zi(n,n.next),zi(e,e.next)}function Ex(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&ps(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),tr(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&bx(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function bx(r,t){return Me(r.prev,r,t.prev)<0&&Me(t.next,r,r.next)<0}function Ax(r,t,e,n){let i=r;do i.z===0&&(i.z=ka(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Tx(i)}function Tx(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function ka(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Rx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ps(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Cx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Px(r,t)&&(tr(r,t)&&tr(t,r)&&Lx(r,t)&&(Me(r.prev,r,t.prev)||Me(r,t.prev,t))||_o(r,t)&&Me(r.prev,r,r.next)>0&&Me(t.prev,t,t.next)>0)}function Me(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function _o(r,t){return r.x===t.x&&r.y===t.y}function au(r,t,e,n){const i=Br(Me(r,t,e)),s=Br(Me(r,t,n)),o=Br(Me(e,n,r)),a=Br(Me(e,n,t));return!!(i!==s&&o!==a||i===0&&zr(r,e,t)||s===0&&zr(r,n,t)||o===0&&zr(e,r,n)||a===0&&zr(e,t,n))}function zr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Br(r){return r>0?1:r<0?-1:0}function Px(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&au(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function tr(r,t){return Me(r.prev,r,r.next)<0?Me(r,t,r.next)>=0&&Me(r,r.prev,t)>=0:Me(r,t,r.prev)<0||Me(r,r.next,t)<0}function Lx(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function cu(r,t){const e=new Va(r.i,r.x,r.y),n=new Va(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yl(r,t,e,n){const i=new Va(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function er(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Va(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ix(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class sc{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return sc.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];jl(t),Kl(n,t);let o=t.length;e.forEach(jl);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Kl(n,e[c]);const a=gx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function jl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Kl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class rc extends sn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const v=[],_=g/n;let S=0;g===0&&o===0?S=.5/e:g===n&&c===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(i+A*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+A*s)*Math.sin(o+_*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(A+S,1-_),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const _=h[g][v+1],S=h[g][v],L=h[g+1][v],A=h[g+1][v+1];(g!==0||o>0)&&f.push(_,S,A),(g!==n-1||c<Math.PI)&&f.push(S,L,A)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xe extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ha extends ni{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dx extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Or(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ux(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nx(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Zl(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function lu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class vo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fx extends vo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hs,endingEnd:hs}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case us:s=t,a=2*e-n;break;case Qr:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case us:o=t,c=2*n-e;break;case Qr:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-f)*p+(1.5+f)*x+.5*m,S=f*p-f*x;for(let L=0;L!==a;++L)s[L]=g*o[h+L]+v*o[l+L]+_*o[c+L]+S*o[d+L];return s}}class hu extends vo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}}class zx extends vo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Jr:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Ux(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Jr;class Ts extends Fn{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=$r;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class uu extends Fn{}uu.prototype.ValueTypeName="color";class nr extends Fn{}nr.prototype.ValueTypeName="number";class Bx extends vo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Oe.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Bi extends Fn{InterpolantFactoryMethodLinear(t){return new Bx(this.times,this.values,this.getValueSize(),t)}}Bi.prototype.ValueTypeName="quaternion";Bi.prototype.DefaultInterpolation=Jr;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Fn{}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=$r;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Fn{}ir.prototype.ValueTypeName="vector";class Ha{constructor(t,e=-1,n,i=Ka){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(kx(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Nx(c);c=Zl(c,1,h),l=Zl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new nr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,x){if(f.length!==0){const p=[],g=[];lu(f,p,g,m),p.length!==0&&x.push(new d(u,p,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let x=0;x<u[m].morphTargets.length;x++)f[u[m].morphTargets[x]]=-1;for(const x in f){const p=[],g=[];for(let v=0;v!==u[m].morphTargets.length;++v){const _=u[m];p.push(_.time),g.push(_.morphTarget===x?1:0)}i.push(new nr(".morphTargetInfluence["+x+"]",p,g))}c=f.length*o}else{const f=".bones["+e[d].name+"]";n(ir,f+".position",u,"pos",i),n(Bi,f+".quaternion",u,"rot",i),n(ir,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return uu;case"quaternion":return Bi;case"bool":case"boolean":return Ts;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ox(r.type);if(r.times===void 0){const e=[],n=[];lu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const oo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vx{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Hx=new Vx;class Oi{constructor(t){this.manager=t!==void 0?t:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Gx extends Error{constructor(t,e){super(t),this.response=e}}class Wx extends Oi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=oo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:n,onError:i});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[t],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,m=f!==0;let x=0;const p=new ReadableStream({start(g){v();function v(){d.read().then(({done:_,value:S})=>{if(_)g.close();else{x+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let A=0,T=h.length;A<T;A++){const G=h[A];G.onProgress&&G.onProgress(L)}g.enqueue(S),v()}})}}});return new Response(p)}else throw new Gx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{oo.add(t,l);const h=Gn[t];delete Gn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Gn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Gn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Xx extends Oi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=oo.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Js("img");function c(){h(),oo.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class yo extends Oi{constructor(t){super(t)}load(t,e,n,i){const s=new Be,o=new Xx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class or extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class qx extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new Ut,$l=new R,Jl=new R;class oc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yx extends oc{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ss*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class jx extends or{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Yx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ql=new Ut,Bs=new R,da=new R;class Kx extends oc{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),da.copy(n.position),da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(da),n.updateMatrixWorld(),i.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql)}}class th extends or{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zx extends oc{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class du extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Zx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $x extends or{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jx{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Qx{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Oe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Oe.multiplyQuaternionsFlat(t,o,t,e,t,n),Oe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const ac="\\[\\]\\.:\\/",t_=new RegExp("["+ac+"]","g"),cc="[^"+ac+"]",e_="[^"+ac.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",cc),i_=/(WCOD+)?/.source.replace("WCOD",e_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),r_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),o_=new RegExp("^"+n_+i_+s_+r_+"$"),a_=["material","materials","bones","map"];class c_{constructor(t,e,n){const i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,n):new ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(t){const e=o_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);a_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=c_;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class l_{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:hs,endingEnd:hs};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Pd:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ka:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Cd;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Rd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=us,i.endingEnd=us):(t?i.endingStart=this.zeroSlopeAtStart?us:hs:i.endingStart=Qr,e?i.endingEnd=this.zeroSlopeAtEnd?us:hs:i.endingEnd=Qr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const h_=new Float32Array(1);class u_ extends ki{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;m=new Qx(ie.create(n,f,x),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new hu(new Float32Array(2),new Float32Array(2),1,h_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Ha.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ka),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new l_(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Ha.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class d_{constructor(t,e,n=0,i=1/0){this.ray=new mo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ga(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ga(t[i],this,n,e);return n.sort(eh),n}}function eh(r,t){return r.distance-t.distance}function Ga(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ga(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);class bn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new bn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=i[0],p=i[1],g=i[2],v=i[3],_=i[4],S=i[5],L=i[6],A=i[7],T=i[8];return s[0]=o*x+a*v+c*L,s[1]=o*p+a*_+c*A,s[2]=o*g+a*S+c*T,s[3]=l*x+h*v+d*L,s[4]=l*p+h*_+d*A,s[5]=l*g+h*S+d*T,s[6]=u*x+f*v+m*L,s[7]=u*p+f*_+m*A,s[8]=u*g+f*S+m*T,e}scale(t,e){e===void 0&&(e=new bn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new bn);const e=3,n=6,i=f_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,m=i*c,x=s*o,p=s*a,g=s*c,v=this.elements;return v[3*0+0]=1-(u+m),v[3*0+1]=h-g,v[3*0+2]=d+p,v[3*1+0]=h+g,v[3*1+1]=1-(l+m),v[3*1+2]=f-x,v[3*2+0]=d-p,v[3*2+1]=f+x,v[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new bn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const f_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=p_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=m_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(nh),nh.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const p_=new w,m_=new w,nh=new w;class hn{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,ih),l=ih),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new hn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=sh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=sh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(m<0||f>m)}}const ih=new w,sh=[new w,new w,new w,new w,new w,new w,new w,new w];class rh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class fu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ae{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=g_,i=x_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ae);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Ae);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ae),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Ae(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ae);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,f,m,x,p;return f=i*c+s*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,p=Math.sin(e*u)/m):(x=1-e,p=e),n.x=x*i+p*c,n.y=x*s+p*l,n.z=x*o+p*h,n.w=x*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ae);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const g_=new w,x_=new w,__={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Et{constructor(t){t===void 0&&(t={}),this.id=Et.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Et.idCounter=0;Et.types=__;class re{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Ae,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return re.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return re.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(oh),oh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const oh=new Ae;class gs extends Et{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];gs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const x=n.vertices[n.faces[d][m]],p=new w;p.copy(x),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new w,h=new w,d=new w,u=new w,f=new w,m=new w;let x=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],l);const v=p.testSepAxis(l,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}else{const g=a?a.length:p.faces.length;for(let v=0;v<g;v++){const _=a?a[v]:v;l.copy(p.faceNormals[_]),n.vmult(l,l);const S=p.testSepAxis(l,t,e,n,i,s);if(S===!1)return!1;S<x&&(x=S,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const g=c?c.length:t.faces.length;for(let v=0;v<g;v++){const _=c?c[v]:v;h.copy(t.faceNormals[_]),s.vmult(h,h);const S=p.testSepAxis(h,t,e,n,i,s);if(S===!1)return!1;S<x&&(x=S,o.copy(h))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();const _=p.testSepAxis(m,t,e,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;gs.project(a,t,n,i,fa),gs.project(e,t,s,o,pa);const c=fa[0],l=fa[1],h=pa[0],d=pa[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new w,l=new w,h=new w,d=new w,u=new w,f=new w,m=new w,x=new w,p=this,g=[],v=i,_=g;let S=-1,L=Number.MAX_VALUE;for(let E=0;E<p.faces.length;E++){c.copy(p.faceNormals[E]),n.vmult(c,c);const H=c.dot(t);H<L&&(L=H,S=E)}if(S<0)return;const A=p.faces[S];A.connectedFaces=[];for(let E=0;E<p.faces.length;E++)for(let H=0;H<p.faces[E].length;H++)A.indexOf(p.faces[E][H])!==-1&&E!==S&&A.connectedFaces.indexOf(E)===-1&&A.connectedFaces.push(E);const T=A.length;for(let E=0;E<T;E++){const H=p.vertices[A[E]],W=p.vertices[A[(E+1)%T]];H.vsub(W,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[S]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(H),n.vmult(f,f),e.vadd(f,f);const B=A.connectedFaces[E];m.copy(this.faceNormals[B]);const I=this.getPlaneConstantOfFace(B);x.copy(m),n.vmult(x,x);const U=I-x.dot(e);for(this.clipFaceAgainstPlane(v,_,x,U);v.length;)v.shift();for(;_.length;)v.push(_.shift())}m.copy(this.faceNormals[S]);const G=this.getPlaneConstantOfFace(S);x.copy(m),n.vmult(x,x);const b=G-x.dot(e);for(let E=0;E<v.length;E++){let H=x.dot(v[E])+b;if(H<=s&&(console.log(`clamped: depth=${H} to minDist=${s}`),H=s),H<=o){const W=v[E];if(H<=1e-6){const B={point:W,normal:x,depth:H};a.push(B)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new w;d.copy(l),e.push(d)}else{const d=new w;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new w;t.vsub(c,l);const h=a.dot(l),d=new w;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=v_;let c=0,l=0;const h=y_,d=t.vertices;h.setZero(),re.vectorToLocalFrame(n,i,e,a),re.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const fa=[],pa=[];new w;const v_=new w,y_=new w;class cn extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new gs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),cn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ci.set(s[o][0],s[o][1],s[o][2]),e.vmult(ci,ci),t.vadd(ci,ci),n(ci.x,ci.y,ci.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Cn[0].set(s.x,s.y,s.z),Cn[1].set(-s.x,s.y,s.z),Cn[2].set(-s.x,-s.y,s.z),Cn[3].set(-s.x,-s.y,-s.z),Cn[4].set(s.x,-s.y,-s.z),Cn[5].set(s.x,s.y,-s.z),Cn[6].set(-s.x,s.y,-s.z),Cn[7].set(s.x,-s.y,s.z);const o=Cn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=Cn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const ci=new w,Cn=[new w,new w,new w,new w,new w,new w,new w,new w],lc={DYNAMIC:1,STATIC:2,KINEMATIC:4},hc={AWAKE:0,SLEEPY:1,SLEEPING:2};class wt extends fu{constructor(t){t===void 0&&(t={}),super(),this.id=wt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?wt.STATIC:wt.DYNAMIC,typeof t.type==typeof wt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=wt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ae,this.initQuaternion=new Ae,this.previousQuaternion=new Ae,this.interpolatedQuaternion=new Ae,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new bn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new bn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new hn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=wt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===wt.SLEEPING&&this.dispatchEvent(wt.wakeupEvent)}sleep(){this.sleepState=wt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===wt.AWAKE&&n<i?(this.sleepState=wt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(wt.sleepyEvent)):e===wt.SLEEPY&&n>i?this.wakeUp():e===wt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(wt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===wt.SLEEPING||this.type===wt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new Ae;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=M_,o=w_,a=this.quaternion,c=this.aabb,l=S_;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=E_,i=b_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=A_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==wt.DYNAMIC)return;const n=T_,i=R_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===wt.DYNAMIC&&(this.sleepState===wt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=e,i=C_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=P_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==wt.DYNAMIC)return;const n=L_,i=I_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=D_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),cn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===wt.DYNAMIC||this.type===wt.KINEMATIC)||this.sleepState===wt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,x=this.angularFactor,p=c.x*x.x,g=c.y*x.y,v=c.z*x.z;s.x+=t*(m[0]*p+m[1]*g+m[2]*v),s.y+=t*(m[3]*p+m[4]*g+m[5]*v),s.z+=t*(m[6]*p+m[7]*g+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}wt.idCounter=0;wt.COLLIDE_EVENT_NAME="collide";wt.DYNAMIC=lc.DYNAMIC;wt.STATIC=lc.STATIC;wt.KINEMATIC=lc.KINEMATIC;wt.AWAKE=hc.AWAKE;wt.SLEEPY=hc.SLEEPY;wt.SLEEPING=hc.SLEEPING;wt.wakeupEvent={type:"wakeup"};wt.sleepyEvent={type:"sleepy"};wt.sleepEvent={type:"sleep"};const M_=new w,w_=new Ae,S_=new hn,E_=new bn,b_=new bn;new bn;const A_=new w,T_=new w,R_=new w,C_=new w,P_=new w,L_=new w,I_=new w,D_=new w;class U_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&wt.STATIC||t.sleepState===wt.SLEEPING)&&(e.type&wt.STATIC||e.sleepState===wt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=N_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=F_,i=z_,s=B_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const N_=new w;new w;new Ae;new w;const F_={keys:[]},z_=[],B_=[];new w;new w;new w;class pu extends U_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class sr{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let mu,gu,xu,_u,vu,yu,Mu;const uc={CLOSEST:1,ANY:2,ALL:4};mu=Et.types.SPHERE;gu=Et.types.PLANE;xu=Et.types.BOX;_u=Et.types.CYLINDER;vu=Et.types.CONVEXPOLYHEDRON;yu=Et.types.HEIGHTFIELD;Mu=Et.types.TRIMESH;class be{get[mu](){return this._intersectSphere}get[gu](){return this._intersectPlane}get[xu](){return this._intersectBox}get[_u](){return this._intersectConvex}get[vu](){return this._intersectConvex}get[yu](){return this._intersectHeightfield}get[Mu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=be.ANY,this.result=new sr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||be.ANY,this.result=e.result||new sr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ah),ma.length=0,t.broadphase.aabbQuery(t,ah,ma),this.intersectBodies(ma),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=O_,s=k_;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(tv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);const h=new w;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const m=new w,x=new w,p=new w;o.vsub(n,m);const g=-l.dot(m)/f;c.scale(g,x),o.vadd(x,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=V_;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=H_;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new hn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),re.pointToWorldFrame(n,e,t.pillarOffset,kr),this._intersectConvex(t.pillarConvex,e,kr,i,s,ch),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),re.pointToWorldFrame(n,e,t.pillarOffset,kr),this._intersectConvex(t.pillarConvex,e,kr,i,s,ch)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=G_,m=W_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=X_,c=lh,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,p=m.distanceTo(x),g=l?l.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<g;_++){const S=l?l[_]:_,L=h[S],A=u[S],T=e,G=n;c.copy(d[L[0]]),T.vmult(c,c),c.vadd(G,c),c.vsub(m,c),T.vmult(A,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const E=a.dot(c)/b;if(!(E<0)){f.scale(E,tn),tn.vadd(m,tn),Mn.copy(d[L[0]]),T.vmult(Mn,Mn),G.vadd(Mn,Mn);for(let H=1;!v.shouldStop&&H<L.length-1;H++){Pn.copy(d[L[H]]),Ln.copy(d[L[H+1]]),T.vmult(Pn,Pn),T.vmult(Ln,Ln),G.vadd(Pn,Pn),G.vadd(Ln,Ln);const W=tn.distanceTo(m);!(be.pointInTriangle(tn,Mn,Pn,Ln)||be.pointInTriangle(tn,Pn,Mn,Ln))||W>p||this.reportIntersection(a,tn,s,i,S)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=q_,c=J_,l=Q_,h=lh,d=Y_,u=j_,f=K_,m=$_,x=Z_,p=t.indices;t.vertices;const g=this.from,v=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),re.vectorToLocalFrame(n,e,_,d),re.pointToLocalFrame(n,e,g,u),re.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const S=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let L=0,A=c.length;!this.result.shouldStop&&L!==A;L++){const T=c[L];t.getNormal(T,a),t.getVertex(p[T*3],Mn),Mn.vsub(u,h);const G=d.dot(a),b=a.dot(h)/G;if(b<0)continue;d.scale(b,tn),tn.vadd(u,tn),t.getVertex(p[T*3+1],Pn),t.getVertex(p[T*3+2],Ln);const E=tn.distanceSquared(u);!(be.pointInTriangle(tn,Pn,Mn,Ln)||be.pointInTriangle(tn,Mn,Pn,Ln))||E>S||(re.vectorToWorldFrame(e,a,x),re.pointToWorldFrame(n,e,tn,m),this.reportIntersection(x,m,s,i,T))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case be.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case be.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case be.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ri),n.vsub(e,Os),t.vsub(e,ga);const s=Ri.dot(Ri),o=Ri.dot(Os),a=Ri.dot(ga),c=Os.dot(Os),l=Os.dot(ga);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}be.CLOSEST=uc.CLOSEST;be.ANY=uc.ANY;be.ALL=uc.ALL;const ah=new hn,ma=[],Os=new w,ga=new w,O_=new w,k_=new Ae,tn=new w,Mn=new w,Pn=new w,Ln=new w;new w;new sr;const ch={faceList:[0]},kr=new w,V_=new be,H_=[],G_=new w,W_=new w,X_=new w;new w;new w;const lh=new w,q_=new w,Y_=new w,j_=new w,K_=new w,Z_=new w,$_=new w;new hn;const J_=[],Q_=new re,Ri=new w,Vr=new w;function tv(r,t,e){e.vsub(r,Ri);const n=Ri.dot(t);return t.scale(n,Vr),Vr.vadd(r,Vr),e.distanceTo(Vr)}class ev{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class hh{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ar{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ar.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new hh,this.jacobianElementB=new hh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,uh),a.scale(h,dh),n.invInertiaWorldSolve.vmult(o,fh),i.invInertiaWorldSolve.vmult(c,ph),t.multiplyVectors(uh,fh)+e.multiplyVectors(dh,ph)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Hr),l+=Hr.dot(t.rotational),c.vmult(e.rotational,Hr),l+=Hr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=nv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ar.idCounter=0;const uh=new w,dh=new w,fh=new w,ph=new w,Hr=new w,nv=new w;class iv extends ar{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=sv,l=rv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=ov,x=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(x.spatial),c.negate(x.rotational),p.spatial.copy(g),p.rotational.copy(l),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const v=g.dot(m),_=this.restitution+1,S=_*u.dot(g)-_*h.dot(g)+f.dot(l)-d.dot(c),L=this.computeGiMf();return-v*e-S*n-t*L}getImpactVelocityAlongNormal(){const t=av,e=cv,n=lv,i=hv,s=uv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const sv=new w,rv=new w,ov=new w,av=new w,cv=new w,lv=new w,hv=new w,uv=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class mh extends ar{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=dv,o=fv,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const dv=new w,fv=new w;class Mo{constructor(t,e,n){n=ev.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Mo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Mo.idCounter=0;class wo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=wo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}wo.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new be;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class So extends Et{constructor(t){if(super({type:Et.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class pv extends gs{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new w(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new w(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<s;m++){const x=2*Math.PI/s*(m+1),p=2*Math.PI/s*(m+.5);m<s-1?(o.push(new w(-e*u(x),-n*.5,e*d(x))),l.push(2*m+2),o.push(new w(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&a.push(new w(-u(p),0,d(p)))}c.push(l),a.push(new w(0,1,0));const f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=Et.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class mv extends Et{constructor(){super({type:Et.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Wn.set(0,0,1),e.vmult(Wn,Wn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Wn.x===1?i.x=t.x:Wn.x===-1&&(n.x=t.x),Wn.y===1?i.y=t.y:Wn.y===-1&&(n.y=t.y),Wn.z===1?i.z=t.z:Wn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Wn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new hn;new w;new hn;new w;new w;new w;new w;new w;new w;new w;new hn;new w;new re;new hn;class gv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class xv extends gv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,f,m,x,p;if(a!==0)for(let S=0;S!==l;S++)c[S].updateSolveMassProperties();const g=vv,v=yv,_=_v;g.length=a,v.length=a,_.length=a;for(let S=0;S!==a;S++){const L=o[S];_[S]=0,v[S]=L.computeB(h),g[S]=1/L.computeC()}if(a!==0){for(let A=0;A!==l;A++){const T=c[A],G=T.vlambda,b=T.wlambda;G.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let A=0;A!==a;A++){const T=o[A];d=v[A],u=g[A],p=_[A],x=T.computeGWlambda(),f=u*(d-x-T.eps*p),p+f<T.minForce?f=T.minForce-p:p+f>T.maxForce&&(f=T.maxForce-p),_[A]+=f,m+=f>0?f:-f,T.addToWlambda(f)}if(m*m<s)break}for(let A=0;A!==l;A++){const T=c[A],G=T.velocity,b=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),G.vadd(T.vlambda,G),T.wlambda.vmul(T.angularFactor,T.wlambda),b.vadd(T.wlambda,b)}let S=o.length;const L=1/h;for(;S--;)o[S].multiplier=_[S]*L}return n}}const _v=[],vv=[],yv=[];class Mv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class wv extends Mv{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const me={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH};class Sv{get[me.sphereSphere](){return this.sphereSphere}get[me.spherePlane](){return this.spherePlane}get[me.boxBox](){return this.boxBox}get[me.sphereBox](){return this.sphereBox}get[me.planeBox](){return this.planeBox}get[me.convexConvex](){return this.convexConvex}get[me.sphereConvex](){return this.sphereConvex}get[me.planeConvex](){return this.planeConvex}get[me.boxConvex](){return this.boxConvex}get[me.sphereHeightfield](){return this.sphereHeightfield}get[me.boxHeightfield](){return this.boxHeightfield}get[me.convexHeightfield](){return this.convexHeightfield}get[me.sphereParticle](){return this.sphereParticle}get[me.planeParticle](){return this.planeParticle}get[me.boxParticle](){return this.boxParticle}get[me.convexParticle](){return this.convexParticle}get[me.cylinderCylinder](){return this.convexConvex}get[me.sphereCylinder](){return this.sphereConvex}get[me.planeCylinder](){return this.planeConvex}get[me.boxCylinder](){return this.boxConvex}get[me.convexCylinder](){return this.convexConvex}get[me.heightfieldCylinder](){return this.heightfieldCylinder}get[me.particleCylinder](){return this.particleCylinder}get[me.sphereTrimesh](){return this.sphereTrimesh}get[me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new wv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new iv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new mh(n,i,u*f),p=m.length?m.pop():new mh(n,i,u*f);return x.bi=p.bi=n,x.bj=p.bj=i,x.minForce=p.minForce=-u*f,x.maxForce=p.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(x.t,p.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=p.enabled=t.enabled,e.push(x,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Si.setZero(),as.setZero(),cs.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Si.vadd(e.ni,Si),as.vadd(e.ri,as),cs.vadd(e.rj,cs)):(Si.vsub(e.ni,Si),as.vadd(e.rj,as),cs.vadd(e.ri,cs));const o=1/t;as.scale(o,n.ri),cs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Si.normalize(),Si.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Av,l=Tv,h=Ev,d=bv;for(let u=0,f=t.length;u!==f;u++){const m=t[u],x=e[u];let p=null;m.material&&x.material&&(p=n.getContactMaterial(m.material,x.material)||null);const g=m.type&wt.KINEMATIC&&x.type&wt.STATIC||m.type&wt.STATIC&&x.type&wt.KINEMATIC||m.type&wt.KINEMATIC&&x.type&wt.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],c),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const _=m.shapes[v];for(let S=0;S<x.shapes.length;S++){x.quaternion.mult(x.shapeOrientations[S],l),x.quaternion.vmult(x.shapeOffsets[S],d),d.vadd(x.position,d);const L=x.shapes[S];if(!(_.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+L.boundingSphereRadius)continue;let A=null;_.material&&L.material&&(A=n.getContactMaterial(_.material,L.material)||null),this.currentContactMaterial=A||p||n.defaultContactMaterial;const T=_.type|L.type,G=this[T];if(G){let b=!1;_.type<L.type?b=G.call(this,_,L,h,d,c,l,m,x,_,L,g):b=G.call(this,L,_,d,h,l,c,x,m,_,L,g),b&&g&&(n.shapeOverlapKeeper.set(_.id,L.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Gr),u.ni.scale(u.ni.dot(Gr),gh),Gr.vsub(gh,u.rj),-Gr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,f=Qv;n.vsub(i,Wr),e.getSideNormals(f,o);const m=t.radius;let x=!1;const p=ey,g=ny,v=iy;let _=null,S=0,L=0,A=0,T=null;for(let N=0,it=f.length;N!==it&&x===!1;N++){const C=Zv;C.copy(f[N]);const O=C.length();C.normalize();const j=Wr.dot(C);if(j<O+m&&j>0){const st=$v,rt=Jv;st.copy(f[(N+1)%3]),rt.copy(f[(N+2)%3]);const tt=st.length(),at=rt.length();st.normalize(),rt.normalize();const _t=Wr.dot(st),bt=Wr.dot(rt);if(_t<tt&&_t>-tt&&bt<at&&bt>-at){const At=Math.abs(j-O-m);if((T===null||At<T)&&(T=At,L=_t,A=bt,_=O,p.copy(C),g.copy(st),v.copy(rt),S++,d))return!0}}}if(S){x=!0;const N=this.createContactEquation(a,c,t,e,l,h);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(_,p),g.scale(L,g),p.vadd(g,p),v.scale(A,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let G=u.get();const b=ty;for(let N=0;N!==2&&!x;N++)for(let it=0;it!==2&&!x;it++)for(let C=0;C!==2&&!x;C++)if(G.set(0,0,0),N?G.vadd(f[0],G):G.vsub(f[0],G),it?G.vadd(f[1],G):G.vsub(f[1],G),C?G.vadd(f[2],G):G.vsub(f[2],G),i.vadd(G,b),b.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;x=!0;const O=this.createContactEquation(a,c,t,e,l,h);O.ri.copy(b),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(m,O.ri),O.rj.copy(G),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}u.release(G),G=null;const E=u.get(),H=u.get(),W=u.get(),B=u.get(),I=u.get(),U=f.length;for(let N=0;N!==U&&!x;N++)for(let it=0;it!==U&&!x;it++)if(N%3!==it%3){f[it].cross(f[N],E),E.normalize(),f[N].vadd(f[it],H),W.copy(n),W.vsub(H,W),W.vsub(i,W);const C=W.dot(E);E.scale(C,B);let O=0;for(;O===N%3||O===it%3;)O++;I.copy(n),I.vsub(B,I),I.vsub(H,I),I.vsub(i,I);const j=Math.abs(C),st=I.length();if(j<f[O].length()&&st<m){if(d)return!0;x=!0;const rt=this.createContactEquation(a,c,t,e,l,h);H.vadd(B,rt.rj),rt.rj.copy(rt.rj),I.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(m,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(E,H,W,B,I)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,f){const m=_y;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,u,f)){const x=[],p=vy;t.clipAgainstHull(n,s,e,i,o,m,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),S=_.ri,L=_.rj;m.negate(_.ni),x[v].normal.negate(p),p.scale(x[v].depth,p),x[v].point.vadd(p,S),L.copy(x[v].point),S.vsub(n,S),L.vsub(i,L),S.vadd(n,S),S.vsub(a.position,S),L.vadd(i,L),L.vsub(c.position,L),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,sy);const f=e.faceNormals,m=e.faces,x=e.vertices,p=t.radius;let g=!1;for(let v=0;v!==x.length;v++){const _=x[v],S=cy;o.vmult(_,S),i.vadd(S,S);const L=ay;if(S.vsub(n,L),L.lengthSquared()<p*p){if(d)return!0;g=!0;const A=this.createContactEquation(a,c,t,e,l,h);A.ri.copy(L),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(p,A.ri),S.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,_=m.length;v!==_&&g===!1;v++){const S=f[v],L=m[v],A=ly;o.vmult(S,A);const T=hy;o.vmult(x[L[0]],T),T.vadd(i,T);const G=uy;A.scale(-p,G),n.vadd(G,G);const b=dy;G.vsub(T,b);const E=b.dot(A),H=fy;if(n.vsub(T,H),E<0&&H.dot(A)>0){const W=[];for(let B=0,I=L.length;B!==I;B++){const U=u.get();o.vmult(x[L[B]],U),i.vadd(U,U),W.push(U)}if(Kv(W,A,n)){if(d)return!0;g=!0;const B=this.createContactEquation(a,c,t,e,l,h);A.scale(-p,B.ri),A.negate(B.ni);const I=u.get();A.scale(-E,I);const U=u.get();A.scale(-p,U),n.vsub(i,B.rj),B.rj.vadd(U,B.rj),B.rj.vadd(I,B.rj),B.rj.vadd(i,B.rj),B.rj.vsub(c.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),u.release(I),u.release(U),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let N=0,it=W.length;N!==it;N++)u.release(W[N]);return}else for(let B=0;B!==L.length;B++){const I=u.get(),U=u.get();o.vmult(x[L[(B+1)%L.length]],I),o.vmult(x[L[(B+2)%L.length]],U),i.vadd(I,I),i.vadd(U,U);const N=ry;U.vsub(I,N);const it=oy;N.unit(it);const C=u.get(),O=u.get();n.vsub(I,O);const j=O.dot(it);it.scale(j,C),C.vadd(I,C);const st=u.get();if(C.vsub(n,st),j>0&&j*j<N.lengthSquared()&&st.lengthSquared()<p*p){if(d)return!0;const rt=this.createContactEquation(a,c,t,e,l,h);C.vsub(i,rt.rj),C.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(p,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(c.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let tt=0,at=W.length;tt!==at;tt++)u.release(W[tt]);u.release(I),u.release(U),u.release(C),u.release(st),u.release(O);return}u.release(I),u.release(U),u.release(C),u.release(st),u.release(O)}for(let B=0,I=W.length;B!==I;B++)u.release(W[B])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=py,f=my;f.set(0,0,1),s.vmult(f,f);let m=0;const x=gy;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),_=xy;f.scale(f.dot(x),_),u.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=t.radius,m=e.elementSize,x=Ly,p=Py;re.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,v=Math.ceil((p.x+f)/m)+1,_=Math.floor((p.y-f)/m)-1,S=Math.ceil((p.y+f)/m)+1;if(v<0||S<0||g>u.length||_>u[0].length)return;g<0&&(g=0),v<0&&(v=0),_<0&&(_=0),S<0&&(S=0),g>=u.length&&(g=u.length-1),v>=u.length&&(v=u.length-1),S>=u[0].length&&(S=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const L=[];e.getRectMinMax(g,_,v,S,L);const A=L[0],T=L[1];if(p.z-f>T||p.z+f<A)return;const G=this.result;for(let b=g;b<v;b++)for(let E=_;E<S;E++){const H=G.length;let W=!1;if(e.getConvexTrianglePillar(b,E,!1),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&W||(e.getConvexTrianglePillar(b,E,!0),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,x,s,o,a,c,t,e,d)),d&&W))return!0;if(G.length-H>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=Ry,p=Cy,g=Ty;re.pointToLocalFrame(i,o,n,g);let v=Math.floor((g.x-m)/f)-1,_=Math.ceil((g.x+m)/f)+1,S=Math.floor((g.y-m)/f)-1,L=Math.ceil((g.y+m)/f)+1;if(_<0||L<0||v>u.length||S>u[0].length)return;v<0&&(v=0),_<0&&(_=0),S<0&&(S=0),L<0&&(L=0),v>=u.length&&(v=u.length-1),_>=u.length&&(_=u.length-1),L>=u[0].length&&(L=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const A=[];e.getRectMinMax(v,S,_,L,A);const T=A[0],G=A[1];if(!(g.z-m>G||g.z+m<T))for(let b=v;b<_;b++)for(let E=S;E<L;E++){let H=!1;if(e.getConvexTrianglePillar(b,E,!1),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&H||(e.getConvexTrianglePillar(b,E,!0),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,e.pillarConvex,n,x,s,o,a,c,null,null,d,p,null)),d&&H))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Sy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(c,a,e,t,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=yy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=My;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const p=wy;u.scale(u.dot(i),p),i.vsub(p,p),x.rj.copy(p),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const f=by,m=Ay;let x=null;const p=Ey;if(p.copy(i),p.vsub(n,p),s.conjugate(xh),xh.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,v=t.faces.length;g!==v;g++){const _=[t.worldVertices[t.faces[g][0]]],S=t.worldFaceNormals[g];i.vsub(_[0],_h);const L=-S.dot(_h);if(x===null||Math.abs(L)<Math.abs(x)){if(d)return!0;x=L,u=g,f.copy(S)}}if(u!==-1){const g=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const v=g.ri,_=g.rj;v.vadd(i,v),v.vsub(c.position,v),_.vadd(n,_),_.vsub(a.position,_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=Nv,f=Fv,m=zv,x=Bv,p=Ov,g=kv,v=Wv,_=Uv,S=Iv,L=Xv;re.pointToLocalFrame(i,o,n,p);const A=t.radius;v.lowerBound.set(p.x-A,p.y-A,p.z-A),v.upperBound.set(p.x+A,p.y+A,p.z+A),e.getTrianglesInAABB(v,L);const T=Dv,G=t.radius*t.radius;for(let B=0;B<L.length;B++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[L[B]*3+I],T),T.vsub(p,S),S.lengthSquared()<=G){if(_.copy(T),re.pointToWorldFrame(i,o,_,T),T.vsub(n,S),d)return!0;let U=this.createContactEquation(a,c,t,e,l,h);U.ni.copy(S),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(T),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let B=0;B<L.length;B++)for(let I=0;I<3;I++){e.getVertex(e.indices[L[B]*3+I],u),e.getVertex(e.indices[L[B]*3+(I+1)%3],f),f.vsub(u,m),p.vsub(f,g);const U=g.dot(m);p.vsub(u,g);let N=g.dot(m);if(N>0&&U<0&&(p.vsub(u,g),x.copy(m),x.normalize(),N=g.dot(x),x.scale(N,g),g.vadd(u,g),g.distanceTo(p)<t.radius)){if(d)return!0;const C=this.createContactEquation(a,c,t,e,l,h);g.vsub(p,C.ni),C.ni.normalize(),C.ni.scale(t.radius,C.ri),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),re.pointToWorldFrame(i,o,g,g),g.vsub(c.position,C.rj),re.vectorToWorldFrame(o,C.ni,C.ni),re.vectorToWorldFrame(o,C.ri,C.ri),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}}const b=Vv,E=Hv,H=Gv,W=Lv;for(let B=0,I=L.length;B!==I;B++){e.getTriangleVertices(L[B],b,E,H),e.getNormal(L[B],W),p.vsub(b,g);let U=g.dot(W);if(W.scale(U,g),p.vsub(g,g),U=g.distanceTo(p),be.pointInTriangle(g,b,E,H)&&U<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),re.pointToWorldFrame(i,o,g,g),g.vsub(c.position,N.rj),re.vectorToWorldFrame(o,N.ni,N.ni),re.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}L.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new w,f=Rv;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const x=new w;x.copy(u),re.pointToWorldFrame(i,o,x,u);const p=Cv;if(u.vsub(n,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(f);const _=Pv;f.scale(p.dot(f),_),u.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Si=new w,as=new w,cs=new w,Ev=new w,bv=new w,Av=new Ae,Tv=new Ae,Rv=new w,Cv=new w,Pv=new w,Lv=new w,Iv=new w;new w;const Dv=new w,Uv=new w,Nv=new w,Fv=new w,zv=new w,Bv=new w,Ov=new w,kv=new w,Vv=new w,Hv=new w,Gv=new w,Wv=new hn,Xv=[],Gr=new w,gh=new w,qv=new w,Yv=new w,jv=new w;function Kv(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=qv;r[(s+1)%i].vsub(o,a);const c=Yv;a.cross(t,c);const l=jv;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Wr=new w,Zv=new w,$v=new w,Jv=new w,Qv=[new w,new w,new w,new w,new w,new w],ty=new w,ey=new w,ny=new w,iy=new w,sy=new w,ry=new w,oy=new w,ay=new w,cy=new w,ly=new w,hy=new w,uy=new w,dy=new w,fy=new w;new w;new w;const py=new w,my=new w,gy=new w,xy=new w,_y=new w,vy=new w,yy=new w,My=new w,wy=new w,Sy=new w,xh=new Ae,Ey=new w;new w;const by=new w,_h=new w,Ay=new w,Ty=new w,Ry=new w,Cy=[0],Py=new w,Ly=new w;class vh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||yh(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||yh(e,h)}}}function yh(r,t){r.push((t&4294901760)>>16,t&65535)}const xa=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Iy{constructor(){this.data={keys:[]}}get(t,e){const n=xa(t,e);return this.data[n]}set(t,e,n){const i=xa(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=xa(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Dy extends fu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new pu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new xv,this.constraints=[],this.narrowphase=new Sv(this),this.collisionMatrix=new rh,this.collisionMatrixPrevious=new rh,this.bodyOverlapKeeper=new vh,this.shapeOverlapKeeper=new vh,this.contactmaterials=[],this.contactMaterialTable=new Iy,this.defaultMaterial=new wo("default"),this.defaultContactMaterial=new Mo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof sr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=be.ALL,n.from=t,n.to=e,n.callback=i,_a.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=be.ANY,n.from=t,n.to=e,n.result=i,_a.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=be.CLOSEST,n.from=t,n.to=e,n.result=i,_a.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof wt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ie.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=By,i=Oy,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=wt.DYNAMIC;let u=-1/0;const f=this.constraints,m=zy;c.length();const x=c.x,p=c.y,g=c.z;let v=0;for(l&&(u=Ie.now()),v=0;v!==s;v++){const B=o[v];if(B.type===d){const I=B.force,U=B.mass;I.x+=U*x,I.y+=U*p,I.z+=U*g}}for(let B=0,I=this.subsystems.length;B!==I;B++)this.subsystems[B].update();l&&(u=Ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ie.now()-u);let _=f.length;for(v=0;v!==_;v++){const B=f[v];if(!B.collideConnected)for(let I=n.length-1;I>=0;I-=1)(B.bodyA===n[I]&&B.bodyB===i[I]||B.bodyB===n[I]&&B.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),l&&(u=Ie.now());const S=Fy,L=e.length;for(v=0;v!==L;v++)S.push(e[v]);e.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,S,this.frictionEquations,m),l&&(h.narrowphase=Ie.now()-u),l&&(u=Ie.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const T=e.length;for(let B=0;B!==T;B++){const I=e[B],U=I.bi,N=I.bj,it=I.si,C=I.sj;let O;if(U.material&&N.material?O=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(I.restitution=U.material.restitution*N.material.restitution)),a.addEquation(I),U.allowSleep&&U.type===wt.DYNAMIC&&U.sleepState===wt.SLEEPING&&N.sleepState===wt.AWAKE&&N.type!==wt.STATIC){const j=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),st=N.sleepSpeedLimit**2;j>=st*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===wt.DYNAMIC&&N.sleepState===wt.SLEEPING&&U.sleepState===wt.AWAKE&&U.type!==wt.STATIC){const j=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),st=U.sleepSpeedLimit**2;j>=st*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(ks.body=N,ks.contact=I,U.dispatchEvent(ks),ks.body=U,N.dispatchEvent(ks)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(it.id,C.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ie.now()-u,u=Ie.now()),v=0;v!==s;v++){const B=o[v];B.wakeUpAfterNarrowphase&&(B.wakeUp(),B.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){const B=f[v];B.update();for(let I=0,U=B.equations.length;I!==U;I++){const N=B.equations[I];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=Ie.now()-u),a.removeAllEquations();const G=Math.pow;for(v=0;v!==s;v++){const B=o[v];if(B.type&d){const I=G(1-B.linearDamping,t),U=B.velocity;U.scale(I,U);const N=B.angularVelocity;if(N){const it=G(1-B.angularDamping,t);N.scale(it,N)}}}this.dispatchEvent(Ny),l&&(u=Ie.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,E,H);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ie.now()-u),this.stepnumber+=1,this.dispatchEvent(Uy);let W=!0;if(this.allowSleep)for(W=!1,v=0;v!==s;v++){const B=o[v];B.sleepTick(this.time),B.sleepState!==wt.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Xn,qn),t){for(let s=0,o=Xn.length;s<o;s+=2)Vs.bodyA=this.getBodyById(Xn[s]),Vs.bodyB=this.getBodyById(Xn[s+1]),this.dispatchEvent(Vs);Vs.bodyA=Vs.bodyB=null}if(e){for(let s=0,o=qn.length;s<o;s+=2)Hs.bodyA=this.getBodyById(qn[s]),Hs.bodyB=this.getBodyById(qn[s+1]),this.dispatchEvent(Hs);Hs.bodyA=Hs.bodyB=null}Xn.length=qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Xn,qn),n){for(let s=0,o=Xn.length;s<o;s+=2){const a=this.getShapeById(Xn[s]),c=this.getShapeById(Xn[s+1]);Yn.shapeA=a,Yn.shapeB=c,a&&(Yn.bodyA=a.body),c&&(Yn.bodyB=c.body),this.dispatchEvent(Yn)}Yn.bodyA=Yn.bodyB=Yn.shapeA=Yn.shapeB=null}if(i){for(let s=0,o=qn.length;s<o;s+=2){const a=this.getShapeById(qn[s]),c=this.getShapeById(qn[s+1]);jn.shapeA=a,jn.shapeB=c,a&&(jn.bodyA=a.body),c&&(jn.bodyB=c.body),this.dispatchEvent(jn)}jn.bodyA=jn.bodyB=jn.shapeA=jn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new hn;const _a=new be,Ie=globalThis.performance||{};if(!Ie.now){let r=Date.now();Ie.timing&&Ie.timing.navigationStart&&(r=Ie.timing.navigationStart),Ie.now=()=>Date.now()-r}new w;const Uy={type:"postStep"},Ny={type:"preStep"},ks={type:wt.COLLIDE_EVENT_NAME,body:null,contact:null},Fy=[],zy=[],By=[],Oy=[],Xn=[],qn=[],Vs={type:"beginContact",bodyA:null,bodyB:null},Hs={type:"endContact",bodyA:null,bodyB:null},Yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},jn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function ky(){const r=new Dy({gravity:new w(0,-9.82,0)});return r.broadphase=new pu,r.allowSleep=!1,r.defaultContactMaterial.friction=.45,r.defaultContactMaterial.restitution=.05,r}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Mh=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Mh(""))}catch{Mh=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var xn=Uint8Array,ui=Uint16Array,Wa=Uint32Array,wu=new xn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Su=new xn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vy=new xn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Eu=function(r,t){for(var e=new ui(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];for(var i=new Wa(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return[e,i]},bu=Eu(wu,2),Au=bu[0],Hy=bu[1];Au[28]=258,Hy[258]=28;var Gy=Eu(Su,0),Wy=Gy[0],Xa=new ui(32768);for(var xe=0;xe<32768;++xe){var li=(xe&43690)>>>1|(xe&21845)<<1;li=(li&52428)>>>2|(li&13107)<<2,li=(li&61680)>>>4|(li&3855)<<4,Xa[xe]=((li&65280)>>>8|(li&255)<<8)>>>1}var Ys=function(r,t,e){for(var n=r.length,i=0,s=new ui(t);i<n;++i)++s[r[i]-1];var o=new ui(t);for(i=0;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new ui(1<<t);var c=15-t;for(i=0;i<n;++i)if(r[i])for(var l=i<<4|r[i],h=t-r[i],d=o[r[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)a[Xa[d]>>>c]=l}else for(a=new ui(n),i=0;i<n;++i)r[i]&&(a[i]=Xa[o[r[i]-1]++]>>>15-r[i]);return a},cr=new xn(288);for(var xe=0;xe<144;++xe)cr[xe]=8;for(var xe=144;xe<256;++xe)cr[xe]=9;for(var xe=256;xe<280;++xe)cr[xe]=7;for(var xe=280;xe<288;++xe)cr[xe]=8;var Tu=new xn(32);for(var xe=0;xe<32;++xe)Tu[xe]=5;var Xy=Ys(cr,9,1),qy=Ys(Tu,5,1),va=function(r){for(var t=r[0],e=1;e<r.length;++e)r[e]>t&&(t=r[e]);return t},wn=function(r,t,e){var n=t/8|0;return(r[n]|r[n+1]<<8)>>(t&7)&e},ya=function(r,t){var e=t/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(t&7)},Yy=function(r){return(r/8|0)+(r&7&&1)},jy=function(r,t,e){(e==null||e>r.length)&&(e=r.length);var n=new(r instanceof ui?ui:r instanceof Wa?Wa:xn)(e-t);return n.set(r.subarray(t,e)),n},Ky=function(r,t,e){var n=r.length;if(!n||e&&!e.l&&n<5)return t||new xn(0);var i=!t||e,s=!e||e.i;e||(e={}),t||(t=new xn(n*3));var o=function(bt){var At=t.length;if(bt>At){var Ht=new xn(Math.max(At*2,bt));Ht.set(t),t=Ht}},a=e.f||0,c=e.p||0,l=e.b||0,h=e.l,d=e.d,u=e.m,f=e.n,m=n*8;do{if(!h){e.f=a=wn(r,c,1);var x=wn(r,c+1,3);if(c+=3,x)if(x==1)h=Xy,d=qy,u=9,f=5;else if(x==2){var _=wn(r,c,31)+257,S=wn(r,c+10,15)+4,L=_+wn(r,c+5,31)+1;c+=14;for(var A=new xn(L),T=new xn(19),G=0;G<S;++G)T[Vy[G]]=wn(r,c+G*3,7);c+=S*3;for(var b=va(T),E=(1<<b)-1,H=Ys(T,b,1),G=0;G<L;){var W=H[wn(r,c,E)];c+=W&15;var p=W>>>4;if(p<16)A[G++]=p;else{var B=0,I=0;for(p==16?(I=3+wn(r,c,3),c+=2,B=A[G-1]):p==17?(I=3+wn(r,c,7),c+=3):p==18&&(I=11+wn(r,c,127),c+=7);I--;)A[G++]=B}}var U=A.subarray(0,_),N=A.subarray(_);u=va(U),f=va(N),h=Ys(U,u,1),d=Ys(N,f,1)}else throw"invalid block type";else{var p=Yy(c)+4,g=r[p-4]|r[p-3]<<8,v=p+g;if(v>n){if(s)throw"unexpected EOF";break}i&&o(l+g),t.set(r.subarray(p,v),l),e.b=l+=g,e.p=c=v*8;continue}if(c>m){if(s)throw"unexpected EOF";break}}i&&o(l+131072);for(var it=(1<<u)-1,C=(1<<f)-1,O=c;;O=c){var B=h[ya(r,c)&it],j=B>>>4;if(c+=B&15,c>m){if(s)throw"unexpected EOF";break}if(!B)throw"invalid length/literal";if(j<256)t[l++]=j;else if(j==256){O=c,h=null;break}else{var st=j-254;if(j>264){var G=j-257,rt=wu[G];st=wn(r,c,(1<<rt)-1)+Au[G],c+=rt}var tt=d[ya(r,c)&C],at=tt>>>4;if(!tt)throw"invalid distance";c+=tt&15;var N=Wy[at];if(at>3){var rt=Su[at];N+=ya(r,c)&(1<<rt)-1,c+=rt}if(c>m){if(s)throw"unexpected EOF";break}i&&o(l+131072);for(var _t=l+st;l<_t;l+=4)t[l]=t[l-N],t[l+1]=t[l+1-N],t[l+2]=t[l+2-N],t[l+3]=t[l+3-N];l=_t}}e.l=h,e.p=O,e.b=l,h&&(a=1,e.m=u,e.d=d,e.n=f)}while(!a);return l==t.length?t:jy(t,0,l)},Zy=new xn(0),$y=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Jy(r,t){return Ky(($y(r),r.subarray(2,-4)),t)}var Qy=typeof TextDecoder<"u"&&new TextDecoder,tM=0;try{Qy.decode(Zy,{stream:!0}),tM=1}catch{}function Ru(r,t,e){const n=e.length-r-1;if(t>=e[n])return n-1;if(t<=e[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;t<e[o]||t>=e[o+1];)t<e[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function eM(r,t,e,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=e;++a){s[a]=t-n[r+1-a],o[a]=n[r+a]-t;let c=0;for(let l=0;l<a;++l){const h=o[l+1],d=s[a-l],u=i[l]/(h+d);i[l]=c+h*u,c=d*u}i[a]=c}return i}function nM(r,t,e,n){const i=Ru(r,n,t),s=eM(i,n,r,t),o=new oe(0,0,0,0);for(let a=0;a<=r;++a){const c=e[i-r+a],l=s[a],h=c.w*l;o.x+=c.x*h,o.y+=c.y*h,o.z+=c.z*h,o.w+=c.w*l}return o}function iM(r,t,e,n,i){const s=[];for(let d=0;d<=e;++d)s[d]=0;const o=[];for(let d=0;d<=n;++d)o[d]=s.slice(0);const a=[];for(let d=0;d<=e;++d)a[d]=s.slice(0);a[0][0]=1;const c=s.slice(0),l=s.slice(0);for(let d=1;d<=e;++d){c[d]=t-i[r+1-d],l[d]=i[r+d]-t;let u=0;for(let f=0;f<d;++f){const m=l[f+1],x=c[d-f];a[d][f]=m+x;const p=a[f][d-1]/a[d][f];a[f][d]=u+m*p,u=x*p}a[d][d]=u}for(let d=0;d<=e;++d)o[0][d]=a[d][e];for(let d=0;d<=e;++d){let u=0,f=1;const m=[];for(let x=0;x<=e;++x)m[x]=s.slice(0);m[0][0]=1;for(let x=1;x<=n;++x){let p=0;const g=d-x,v=e-x;d>=x&&(m[f][0]=m[u][0]/a[v+1][g],p=m[f][0]*a[g][v]);const _=g>=-1?1:-g,S=d-1<=v?x-1:e-d;for(let A=_;A<=S;++A)m[f][A]=(m[u][A]-m[u][A-1])/a[v+1][g+A],p+=m[f][A]*a[g+A][v];d<=v&&(m[f][x]=-m[u][x-1]/a[v+1][d],p+=m[f][x]*a[d][v]),o[x][d]=p;const L=u;u=f,f=L}}let h=e;for(let d=1;d<=n;++d){for(let u=0;u<=e;++u)o[d][u]*=h;h*=e-d}return o}function sM(r,t,e,n,i){const s=i<r?i:r,o=[],a=Ru(r,n,t),c=iM(a,n,r,s,t),l=[];for(let h=0;h<e.length;++h){const d=e[h].clone(),u=d.w;d.x*=u,d.y*=u,d.z*=u,l[h]=d}for(let h=0;h<=s;++h){const d=l[a-r].clone().multiplyScalar(c[h][0]);for(let u=1;u<=r;++u)d.add(l[a-r+u].clone().multiplyScalar(c[h][u]));o[h]=d}for(let h=s+1;h<=i+1;++h)o[h]=new oe(0,0,0);return o}function rM(r,t){let e=1;for(let i=2;i<=r;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=r-t;++i)n*=i;return e/n}function oM(r){const t=r.length,e=[],n=[];for(let s=0;s<t;++s){const o=r[s];e[s]=new R(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<t;++s){const o=e[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(rM(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function aM(r,t,e,n,i){const s=sM(r,t,e,n,i);return oM(s)}class cM extends mx{constructor(t,e,n,i,s){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new oe(a.x,a.y,a.z,a.w)}}getPoint(t,e=new R){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=nM(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new R){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=aM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let $t,Ee,Ke;class dc extends Oi{constructor(t){super(t)}load(t,e,n,i){const s=this,o=s.path===""?Jx.extractUrlBase(t):s.path,a=new Wx(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(c){try{e(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t,e){if(pM(t))$t=new fM().parse(t);else{const i=Iu(t);if(!mM(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Sh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Sh(i));$t=new dM().parse(i)}const n=new yo(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new lM(n,this.manager).parse($t)}}class lM{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){Ee=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),s=new hM().parse(i);return this.parseScene(i,s,n),Ke}parseConnections(){const t=new Map;return"Connections"in $t&&$t.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};t.get(i).parents.push(a),t.has(s)||t.set(s,{parents:[],children:[]});const c={ID:i,relationship:o};t.get(s).children.push(c)}),t}parseImages(){const t={},e={};if("Video"in $t.Objects){const n=$t.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(t[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,c=typeof s.Content=="string"&&s.Content!=="";if(a||c){const l=this.parseImage(n[i]);e[s.RelativeFilename||s.Filename]=l}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+s+";base64,"+e;{const o=new Uint8Array(e);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(t){const e=new Map;if("Texture"in $t.Objects){const n=$t.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],t);e.set(parseInt(i),s)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,s=t.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Ks:ln,n.wrapT=a===0?Ks:ln,"Scaling"in t){const c=t.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in t){const c=t.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(t,e){let n;const i=this.textureLoader.path,s=Ee.get(t.id).children;s!==void 0&&s.length>0&&e[s[0].ID]!==void 0&&(n=e[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=t.FileName.slice(-3).toLowerCase();if(a==="tga"){const c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),o=new Be):(c.setPath(this.textureLoader.path),o=c.load(n))}else if(a==="dds"){const c=this.manager.getHandler(".dds");c===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",t.RelativeFilename),o=new Be):(c.setPath(this.textureLoader.path),o=c.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),o=new Be):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(t){const e=new Map;if("Material"in $t.Objects){const n=$t.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],t);s!==null&&e.set(parseInt(i),s)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let s=t.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ee.has(n))return null;const o=this.parseParameters(t,e,n);let a;switch(s.toLowerCase()){case"phong":a=new ha;break;case"lambert":a=new Dx;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new ha;break}return a.setValues(o),a.name=i,a}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=new kt().fromArray(t.Diffuse.value).convertSRGBToLinear():t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=new kt().fromArray(t.DiffuseColor.value).convertSRGBToLinear()),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=new kt().fromArray(t.Emissive.value).convertSRGBToLinear():t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=new kt().fromArray(t.EmissiveColor.value).convertSRGBToLinear()),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(i.opacity=parseFloat(t.Opacity.value)),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=new kt().fromArray(t.Specular.value).convertSRGBToLinear():t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=new kt().fromArray(t.SpecularColor.value).convertSRGBToLinear());const s=this;return Ee.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(e,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(e,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(e,o.ID),i.map!==void 0&&(i.map.colorSpace=ve);break;case"DisplacementColor":i.displacementMap=s.getTexture(e,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(e,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ve);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(e,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(e,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Zr,i.envMap.colorSpace=ve);break;case"SpecularColor":i.specularMap=s.getTexture(e,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ve);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(e,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(t,e){return"LayeredTexture"in $t.Objects&&e in $t.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=Ee.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in $t.Objects){const n=$t.Objects.Deformer;for(const i in n){const s=n[i],o=Ee.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,t[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=a}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const s=e[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ut().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const s=t.children[i],o=e[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ee.get(parseInt(s.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(t,e,n){Ke=new Un;const i=this.parseModels(t.skeletons,e,n),s=$t.Objects.Model,o=this;i.forEach(function(c){const l=s[c.ID];o.setLookAtProperties(c,l),Ee.get(c.ID).parents.forEach(function(d){const u=i.get(d.ID);u!==void 0&&u.add(c)}),c.parent===null&&Ke.add(c)}),this.bindSkeleton(t.skeletons,e,i),this.addGlobalSceneSettings(),Ke.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const l=Pu(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});const a=new uM().parse();Ke.children.length===1&&Ke.children[0].isGroup&&(Ke.children[0].animations=a,Ke=Ke.children[0]),Ke.animations=a}parseModels(t,e,n){const i=new Map,s=$t.Objects.Model;for(const o in s){const a=parseInt(o),c=s[o],l=Ee.get(a);let h=this.buildSkeleton(l,t,a,c.attrName);if(!h){switch(c.attrType){case"Camera":h=this.createCamera(l);break;case"Light":h=this.createLight(l);break;case"Mesh":h=this.createMesh(l,e,n);break;case"NurbsCurve":h=this.createCurve(l,e);break;case"LimbNode":case"Root":h=new Oa;break;case"Null":default:h=new Un;break}h.name=c.attrName?ie.sanitizeNodeName(c.attrName):"",h.userData.originalName=c.attrName,h.ID=a}this.getTransformData(h,c),i.set(a,h)}return i}buildSkeleton(t,e,n,i){let s=null;return t.parents.forEach(function(o){for(const a in e){const c=e[a];c.rawBones.forEach(function(l,h){if(l.ID===o.ID){const d=s;s=new Oa,s.matrixWorld.copy(l.transformLink),s.name=i?ie.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,c.bones[h]=s,d!==null&&s.add(d)}})}}),s}createCamera(t){let e,n;if(t.children.forEach(function(i){const s=$t.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new _e;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);const l=a/c;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new Ze(h,l,s,o),d!==null&&e.setFocalLength(d);break;case 1:e=new ec(-a/2,a/2,c/2,-c/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new _e;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const s=$t.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new _e;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new kt().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const c=1;switch(i){case 0:e=new th(s,o,a,c);break;case 1:e=new du(s,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=Se.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Se.degToRad(n.OuterAngle.value),h=Math.max(h,1)),e=new jx(s,o,a,l,h,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new th(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,s=null,o=null;const a=[];return t.children.forEach(function(c){e.has(c.ID)&&(s=e.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ha({name:Oi.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(c){c.vertexColors=!0}),s.FBX_Deformer?(i=new ux(s,o),i.normalizeSkinWeights()):i=new ae(s,o),i}createCurve(t,e){const n=t.children.reduce(function(s,o){return e.has(o.ID)&&(s=e.get(o.ID)),s},null),i=new ru({name:Oi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new px(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=Lu(e.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&Ee.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=$t.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(o),Ke.add(t.target)):t.lookAt(new R().fromArray(o))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const s in t){const o=t[s];Ee.get(parseInt(o.ID)).parents.forEach(function(c){if(e.has(c.ID)){const l=c.ID;Ee.get(l).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new ic(o.bones),i[d.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in $t.Objects){const e=$t.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(s){t[s.Node]=new Ut().fromArray(s.Matrix.a)}):t[i.Node]=new Ut().fromArray(i.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in $t){if("AmbientColor"in $t.GlobalSettings){const t=$t.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const s=new kt(e,n,i).convertSRGBToLinear();Ke.add(new $x(s,1))}}"UnitScaleFactor"in $t.GlobalSettings&&(Ke.userData.unitScaleFactor=$t.GlobalSettings.UnitScaleFactor.value)}}}class hM{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in $t.Objects){const n=$t.Objects.Geometry;for(const i in n){const s=Ee.get(parseInt(i)),o=this.parseGeometry(s,n[i],t);e.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,s=[],o=t.parents.map(function(d){return $t.Objects.Model[d.ID]});if(o.length===0)return;const a=t.children.reduce(function(d,u){return i[u.ID]!==void 0&&(d=i[u.ID]),d},null);t.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&s.push(n.morphTargets[d.ID])});const c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=Lu(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);const h=Pu(l);return this.genGeometry(e,a,s,h)}genGeometry(t,e,n,i){const s=new sn;t.attrName&&(s.name=t.attrName);const o=this.parseGeoNode(t,e),a=this.genBuffers(o),c=new Ce(a.vertex,3);if(c.applyMatrix4(i),s.setAttribute("position",c),a.colors.length>0&&s.setAttribute("color",new Ce(a.colors,3)),e&&(s.setAttribute("skinIndex",new Qa(a.weightsIndices,4)),s.setAttribute("skinWeight",new Ce(a.vertexWeights,4)),s.FBX_Deformer=e),a.normal.length>0){const l=new Jt().getNormalMatrix(i),h=new Ce(a.normal,3);h.applyNormalMatrix(l),s.setAttribute("normal",h)}if(a.uvs.forEach(function(l,h){const d=h===0?"uv":`uv${h}`;s.setAttribute(d,new Ce(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(d,u){d!==l&&(s.addGroup(h,u-h,l),l=d,h=u)}),s.groups.length>0){const d=s.groups[s.groups.length-1],u=d.start+d.count;u!==a.materialIndex.length&&s.addGroup(u,a.materialIndex.length-u,l)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,t,n,i),s}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],c=[],l=[],h=[],d=[];const u=this;return t.vertexIndices.forEach(function(f,m){let x,p=!1;f<0&&(f=f^-1,p=!0);let g=[],v=[];if(o.push(f*3,f*3+1,f*3+2),t.color){const _=Xr(m,n,f,t.color);c.push(_[0],_[1],_[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(_){v.push(_.weight),g.push(_.id)}),v.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const _=[0,0,0,0],S=[0,0,0,0];v.forEach(function(L,A){let T=L,G=g[A];S.forEach(function(b,E,H){if(T>b){H[E]=T,T=b;const W=_[E];_[E]=G,G=W}})}),g=_,v=S}for(;v.length<4;)v.push(0),g.push(0);for(let _=0;_<4;++_)h.push(v[_]),d.push(g[_])}if(t.normal){const _=Xr(m,n,f,t.normal);a.push(_[0],_[1],_[2])}t.material&&t.material.mappingType!=="AllSame"&&(x=Xr(m,n,f,t.material)[0],x<0&&(u.negativeMaterialIndices=!0,x=0)),t.uv&&t.uv.forEach(function(_,S){const L=Xr(m,n,f,_);l[S]===void 0&&(l[S]=[]),l[S].push(L[0]),l[S].push(L[1])}),i++,p&&(u.genFace(e,t,o,x,a,c,l,h,d,i),n++,i=0,o=[],a=[],c=[],l=[],h=[],d=[])}),e}getNormalNewell(t){const e=new R(0,0,0);for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];e.x+=(i.y-s.y)*(i.z+s.z),e.y+=(i.z-s.z)*(i.x+s.x),e.z+=(i.x-s.x)*(i.y+s.y)}return e.normalize(),e}getNormalTangentAndBitangent(t){const e=this.getNormalNewell(t),i=(Math.abs(e.z)>.5?new R(0,1,0):new R(0,0,1)).cross(e).normalize(),s=e.clone().cross(i).normalize();return{normal:e,tangent:i,bitangent:s}}flattenVertex(t,e,n){return new Dt(t.dot(e),t.dot(n))}genFace(t,e,n,i,s,o,a,c,l,h){let d;if(h>3){const u=[];for(let p=0;p<n.length;p+=3)u.push(new R(e.vertexPositions[n[p]],e.vertexPositions[n[p+1]],e.vertexPositions[n[p+2]]));const{tangent:f,bitangent:m}=this.getNormalTangentAndBitangent(u),x=[];for(const p of u)x.push(this.flattenVertex(p,f,m));d=sc.triangulateShape(x,[])}else d=[[0,1,2]];for(const[u,f,m]of d)t.vertex.push(e.vertexPositions[n[u*3]]),t.vertex.push(e.vertexPositions[n[u*3+1]]),t.vertex.push(e.vertexPositions[n[u*3+2]]),t.vertex.push(e.vertexPositions[n[f*3]]),t.vertex.push(e.vertexPositions[n[f*3+1]]),t.vertex.push(e.vertexPositions[n[f*3+2]]),t.vertex.push(e.vertexPositions[n[m*3]]),t.vertex.push(e.vertexPositions[n[m*3+1]]),t.vertex.push(e.vertexPositions[n[m*3+2]]),e.skeleton&&(t.vertexWeights.push(c[u*4]),t.vertexWeights.push(c[u*4+1]),t.vertexWeights.push(c[u*4+2]),t.vertexWeights.push(c[u*4+3]),t.vertexWeights.push(c[f*4]),t.vertexWeights.push(c[f*4+1]),t.vertexWeights.push(c[f*4+2]),t.vertexWeights.push(c[f*4+3]),t.vertexWeights.push(c[m*4]),t.vertexWeights.push(c[m*4+1]),t.vertexWeights.push(c[m*4+2]),t.vertexWeights.push(c[m*4+3]),t.weightsIndices.push(l[u*4]),t.weightsIndices.push(l[u*4+1]),t.weightsIndices.push(l[u*4+2]),t.weightsIndices.push(l[u*4+3]),t.weightsIndices.push(l[f*4]),t.weightsIndices.push(l[f*4+1]),t.weightsIndices.push(l[f*4+2]),t.weightsIndices.push(l[f*4+3]),t.weightsIndices.push(l[m*4]),t.weightsIndices.push(l[m*4+1]),t.weightsIndices.push(l[m*4+2]),t.weightsIndices.push(l[m*4+3])),e.color&&(t.colors.push(o[u*3]),t.colors.push(o[u*3+1]),t.colors.push(o[u*3+2]),t.colors.push(o[f*3]),t.colors.push(o[f*3+1]),t.colors.push(o[f*3+2]),t.colors.push(o[m*3]),t.colors.push(o[m*3+1]),t.colors.push(o[m*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(s[u*3]),t.normal.push(s[u*3+1]),t.normal.push(s[u*3+2]),t.normal.push(s[f*3]),t.normal.push(s[f*3+1]),t.normal.push(s[f*3+2]),t.normal.push(s[m*3]),t.normal.push(s[m*3+1]),t.normal.push(s[m*3+2])),e.uv&&e.uv.forEach(function(x,p){t.uvs[p]===void 0&&(t.uvs[p]=[]),t.uvs[p].push(a[p][u*2]),t.uvs[p].push(a[p][u*2+1]),t.uvs[p].push(a[p][f*2]),t.uvs[p].push(a[p][f*2+1]),t.uvs[p].push(a[p][m*2]),t.uvs[p].push(a[p][m*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const c=$t.Objects.Geometry[a.geoID];c!==void 0&&s.genMorphGeometry(t,e,c,i,a.name)})})}genMorphGeometry(t,e,n,i,s){const o=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],l=t.attributes.position.count*3,h=new Float32Array(l);for(let m=0;m<c.length;m++){const x=c[m]*3;h[x]=a[m*3],h[x+1]=a[m*3+1],h[x+2]=a[m*3+2]}const d={vertexIndices:o,vertexPositions:h},u=this.genBuffers(d),f=new Ce(u.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),t.morphAttributes.position.push(f)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in t?s=t.NormalIndex.a:"NormalsIndex"in t&&(s=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let s=[];return n==="IndexToDirect"&&(s=t.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let s=[];n==="IndexToDirect"&&(s=t.ColorIndex.a);for(let o=0,a=new kt;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new sn;const n=e-1,i=t.KnotVector.a,s=[],o=t.Points.a;for(let d=0,u=o.length;d<u;d+=4)s.push(new oe().fromArray(o,d));let a,c;if(t.Form==="Closed")s.push(s[0]);else if(t.Form==="Periodic"){a=n,c=i.length-1-a;for(let d=0;d<n;++d)s.push(s[d])}const h=new cM(n,i,s,a,c).getPoints(s.length*12);return new sn().setFromPoints(h)}}class uM{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],s=this.addClip(i);t.push(s)}return t}parseClips(){if($t.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=$t.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};e.set(s.id,s)}}return e}parseAnimationCurves(t){const e=$t.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(gM),values:e[n].KeyValueFloat.a},s=Ee.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?t.get(o).curves.x=i:a.match(/Y/)?t.get(o).curves.y=i:a.match(/Z/)?t.get(o).curves.z=i:a.match(/DeformPercent/)&&t.has(o)&&(t.get(o).curves.morph=i)}}}parseAnimationLayers(t){const e=$t.Objects.AnimationLayer,n=new Map;for(const i in e){const s=[],o=Ee.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(t.has(c.ID)){const h=t.get(c.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[l]===void 0){const d=Ee.get(c.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(d!==void 0){const u=$t.Objects.Model[d.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const f={modelName:u.attrName?ie.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ke.traverse(function(m){m.ID===u.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ut),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),s[l]=f}}s[l]&&(s[l][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[l]===void 0){const d=Ee.get(c.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,u=Ee.get(d).parents[0].ID,f=Ee.get(u).parents[0].ID,m=Ee.get(f).parents[0].ID,x=$t.Objects.Model[m],p={modelName:x.attrName?ie.sanitizeNodeName(x.attrName):"",morphName:$t.Objects.Deformer[d].attrName};s[l]=p}s[l][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(t){const e=$t.Objects.AnimationStack,n={};for(const i in e){const s=Ee.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=t.get(s[0].ID);n[i]={name:e[i].attrName,layer:o}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new Ha(t.name,-1,e)}generateTracks(t){const e=[];let n=new R,i=new R;if(t.transform&&t.transform.decompose(n,new Oe,i),n=n.toArray(),i=i.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");s!==void 0&&e.push(s)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const s=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);s!==void 0&&e.push(s)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.S.curves,i,"scale");s!==void 0&&e.push(s)}if(t.DeformPercent!==void 0){const s=this.generateMorphTrack(t);s!==void 0&&e.push(s)}return e}generateVectorTrack(t,e,n,i){const s=this.getTimesForAllAxes(e),o=this.getKeyframeTrackValues(s,e,n);return new ir(t+"."+i,s,o)}generateRotationTrack(t,e,n,i,s){let o,a;if(e.x!==void 0&&e.y!==void 0&&e.z!==void 0){const d=this.interpolateRotations(e.x,e.y,e.z,s);o=d[0],a=d[1]}n!==void 0&&(n=n.map(Se.degToRad),n.push(s),n=new en().fromArray(n),n=new Oe().setFromEuler(n)),i!==void 0&&(i=i.map(Se.degToRad),i.push(s),i=new en().fromArray(i),i=new Oe().setFromEuler(i).invert());const c=new Oe,l=new en,h=[];if(!a||!o)return new Bi(t+".quaternion",[],[]);for(let d=0;d<a.length;d+=3)l.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new Oe().fromArray(h,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,d/3*4);return new Bi(t+".quaternion",o,h)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(s){return s/100}),i=Ke.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new nr(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let s=1;s<e.length;s++){const o=e[s];o!==i&&(e[n]=o,i=o,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,s=[];let o=-1,a=-1,c=-1;return t.forEach(function(l){if(e.x&&(o=e.x.times.indexOf(l)),e.y&&(a=e.y.times.indexOf(l)),e.z&&(c=e.z.times.indexOf(l)),o!==-1){const h=e.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=e.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(c!==-1){const h=e.z.values[c];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(t,e,n,i){const s=[],o=[];s.push(t.times[0]),o.push(Se.degToRad(t.values[0])),o.push(Se.degToRad(e.values[0])),o.push(Se.degToRad(n.values[0]));for(let a=1;a<t.values.length;a++){const c=[t.values[a-1],e.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;const l=c.map(Se.degToRad),h=[t.values[a],e.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const d=h.map(Se.degToRad),u=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const x=Math.max(...f)/180,p=new en(...l,i),g=new en(...d,i),v=new Oe().setFromEuler(p),_=new Oe().setFromEuler(g);v.dot(_)&&_.set(-_.x,-_.y,-_.z,-_.w);const S=t.times[a-1],L=t.times[a]-S,A=new Oe,T=new en;for(let G=0;G<1;G+=1/x)A.copy(v.clone().slerp(_.clone(),G)),s.push(S+G*L),T.setFromQuaternion(A,i),o.push(T.x),o.push(T.y),o.push(T.z)}else s.push(t.times[a]),o.push(Se.degToRad(t.values[a])),o.push(Se.degToRad(e.values[a])),o.push(Se.degToRad(n.values[a]))}return[s,o]}}class dM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new Cu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const c=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(e.currentIndent-1)+"}}");c?e.parseNodeBegin(i,c):l?e.parseNodeProperty(i,l,n[++s]):h?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),s=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(t,i,s);return}if(i==="C"){const c=s.split(",").slice(1),l=parseInt(c[0]),h=parseInt(c[1]);let d=s.split(",").slice(3);d=d.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",s=[l,h],_M(s,d),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=wa(s))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=wa(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],c=i[3];let l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=wa(l);break}this.getPrevNode()[s]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),s)}}class fM{parse(t){const e=new wh(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Cu;for(;!this.endOfContent(e);){const s=this.parseNode(e,n);s!==null&&i.add(s.name,s)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),s=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const o=t.getUint8(),a=t.getString(o);if(i===0)return null;const c=[];for(let u=0;u<s;u++)c.push(this.parseProperty(t));const l=c.length>0?c[0]:"",h=c.length>1?c[1]:"",d=c.length>2?c[2]:"";for(n.singleProperty=s===1&&t.getOffset()===i;i>t.getOffset();){const u=this.parseNode(t,e);u!==null&&this.parseSubNode(a,n,u)}return n.propertyList=c,typeof l=="number"&&(n.id=l),h!==""&&(n.attrName=h),d!==""&&(n.attrType=d),a!==""&&(n.name=a),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){e[s]=n[s]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],e[i]={type:s,type2:o,flag:a,value:c}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),s=t.getUint32(),o=t.getUint32();if(s===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const a=Jy(new Uint8Array(t.getArrayBuffer(o))),c=new wh(a.buffer);switch(e){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class wh{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class Cu{add(t,e){this[t]=e}}function pM(r){const t="Kaydara FBX Binary  \0";return r.byteLength>=t.length&&t===Iu(r,0,t.length)}function mM(r){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const s=r[i-1];return r=r.slice(e+i),e++,s}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function Sh(r){const t=/FBXVersion: (\d+)/,e=r.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function gM(r){return r/46186158e3}const xM=[];function Xr(r,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return vM(xM,n.buffer,s,o)}const Ma=new en,ls=new R;function Pu(r){const t=new Ut,e=new Ut,n=new Ut,i=new Ut,s=new Ut,o=new Ut,a=new Ut,c=new Ut,l=new Ut,h=new Ut,d=new Ut,u=new Ut,f=r.inheritType?r.inheritType:0;if(r.translation&&t.setPosition(ls.fromArray(r.translation)),r.preRotation){const E=r.preRotation.map(Se.degToRad);E.push(r.eulerOrder||en.DEFAULT_ORDER),e.makeRotationFromEuler(Ma.fromArray(E))}if(r.rotation){const E=r.rotation.map(Se.degToRad);E.push(r.eulerOrder||en.DEFAULT_ORDER),n.makeRotationFromEuler(Ma.fromArray(E))}if(r.postRotation){const E=r.postRotation.map(Se.degToRad);E.push(r.eulerOrder||en.DEFAULT_ORDER),i.makeRotationFromEuler(Ma.fromArray(E)),i.invert()}r.scale&&s.scale(ls.fromArray(r.scale)),r.scalingOffset&&a.setPosition(ls.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(ls.fromArray(r.scalingPivot)),r.rotationOffset&&c.setPosition(ls.fromArray(r.rotationOffset)),r.rotationPivot&&l.setPosition(ls.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(d.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const m=e.clone().multiply(n).multiply(i),x=new Ut;x.extractRotation(h);const p=new Ut;p.copyPosition(h);const g=p.clone().invert().multiply(h),v=x.clone().invert().multiply(g),_=s,S=new Ut;if(f===0)S.copy(x).multiply(m).multiply(v).multiply(_);else if(f===1)S.copy(x).multiply(v).multiply(m).multiply(_);else{const H=new Ut().scale(new R().setFromMatrixScale(d)).clone().invert(),W=v.clone().multiply(H);S.copy(x).multiply(m).multiply(W).multiply(_)}const L=l.clone().invert(),A=o.clone().invert();let T=t.clone().multiply(c).multiply(l).multiply(e).multiply(n).multiply(i).multiply(L).multiply(a).multiply(o).multiply(s).multiply(A);const G=new Ut().copyPosition(T),b=h.clone().multiply(G);return u.copyPosition(b),T=u.clone().multiply(S),T.premultiply(h.invert()),T}function Lu(r){r=r||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[r]}function wa(r){return r.split(",").map(function(e){return parseFloat(e)})}function Iu(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=r.byteLength),new TextDecoder().decode(new Uint8Array(r,t,e))}function _M(r,t){for(let e=0,n=r.length,i=t.length;e<i;e++,n++)r[n]=t[e]}function vM(r,t,e,n){for(let i=e,s=0;i<n;i++,s++)r[s]=t[i];return r}function yM(r){const t=new Map,e=new Map,n=r.clone();return Du(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Du(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Du(r.children[n],t.children[n],e)}function de(r,t){return Math.random()*(t-r)+r}function MM(r){return r[Math.floor(Math.random()*r.length)]}function Pi(r,t,e){return Math.min(e,Math.max(t,r))}class wM{constructor(t,e,n,i=new R){Mt(this,"body");Mt(this,"mesh");Mt(this,"state","Idle");Mt(this,"onGround",!1);Mt(this,"mixer",null);Mt(this,"actions",{});Mt(this,"actionByKind",{});Mt(this,"currentAction",null);Mt(this,"animBaseSpeed",1.15);Mt(this,"camYaw",0);Mt(this,"camPitch",-.3);Mt(this,"camDist",4.5);Mt(this,"targetMouse",null);Mt(this,"pounceCooldown",0);Mt(this,"_raycaster",new d_);this.world=t,this.scene=e,this.input=n,this.origin=i;const s=new So(.45),o=10;this.body=new wt({mass:o,shape:s,position:new w(i.x,i.y+.7,i.z)}),this.body.linearDamping=.05,this.body.angularDamping=1,this.body.fixedRotation=!0,t.addBody(this.body);const a=new Un;this.mesh=a,e.add(a),Promise.all([SM(),EM()]).then(([c,l])=>{const h=yM(c);h.traverse(m=>{if(m.isSkinnedMesh||m.isMesh){m.castShadow=!0,m.receiveShadow=!0;const x=p=>{p&&"skinning"in p&&(m.isSkinnedMesh||m.isMesh)&&(p.skinning=!0)};if(l){const p=m.material,g=v=>{v&&"map"in v&&(v.map=l,"side"in v&&(v.side=En),"needsUpdate"in v&&(v.needsUpdate=!0)),x(v)};Array.isArray(p)?p.forEach(g):g(p)}else if(m.material){const p=m.material;Array.isArray(p)?p.forEach(x):x(p)}m.frustumCulled=!1}});const d=new ze().setFromObject(h),u=d.getCenter(new R);h.position.x-=u.x,h.position.z-=u.z,h.position.y-=d.min.y,a.add(h);const f=c.animations||[];if(f&&f.length>0){this.mixer=new u_(h),this.actions={};for(const g of f){const v=this.mixer.clipAction(g);v.loop=Fh,v.clampWhenFinished=!1,this.actions[g.name.toLowerCase()]=v}const m=Object.keys(this.actions),x=g=>m.find(v=>g.some(_=>v.includes(_)));this.actionByKind.idle=x(["idle","stand"])||m[0]||void 0,this.actionByKind.walk=x(["walk"])||this.actionByKind.idle,this.actionByKind.run=x(["run","jog","sprint"])||this.actionByKind.walk;const p=this.actionByKind.idle;p&&this.actions[p]&&(this.actions[p].reset().fadeIn(.2).play(),this.currentAction=p)}})}update(t,e,n,i=[]){var T,G,b;this.onGround=!1;const s=this.body.world,o=((T=s==null?void 0:s.narrowphase)==null?void 0:T.contactEquations)||[];for(const E of o)if(E.bi===this.body||E.bj===this.body){const H=E.ni,W=E.bi===this.body?-H.y:H.y,B=E.bi===this.body?E.bj:E.bi;if(W>.5){this.onGround=!0;break}if(B!=null&&B.isCouch&&W>.1){this.onGround=!0;break}}if(!this.onGround&&this.body&&this.body.world){const E=((G=this.body.world.gravity)==null?void 0:G.y)??-9.82;this.body.force.y+=this.body.mass*E}if(!this.onGround){const E=be,H=sr;if(E&&H){const W=new E,B=new H;if(W.from.set(this.body.position.x,this.body.position.y,this.body.position.z),W.to.set(this.body.position.x,this.body.position.y-.7,this.body.position.z),W.intersectWorld(this.body.world,{mode:E.ANY,result:B,skipBackfaces:!0}),B.hasHit&&B.body!==this.body){const I=this.body.position.y-B.hitPointWorld.y;I<=.75&&(this.onGround=!0),!this.onGround&&((b=B.body)!=null&&b.isCouch)&&I<=.9&&(this.onGround=!0)}}}if(this.mixer&&this.actions){const E=this.body.velocity.x,H=this.body.velocity.z,W=Math.hypot(E,H);let B="idle";W>3?B="run":W>.4&&(B="walk");const I=(this.actionByKind[B]||this.currentAction||"").toLowerCase();if(I&&I!==this.currentAction&&this.actions[I]){const N=this.actions[I],it=this.currentAction?this.actions[this.currentAction]:null;N.reset().fadeIn(.15).play(),it&&it.fadeOut(.15),this.currentAction=I}if(this.currentAction){const N=this.actions[this.currentAction];N&&(this.currentAction===(this.actionByKind.run||"").toLowerCase()?N.timeScale=Se.clamp(W/4,.7,2):this.currentAction===(this.actionByKind.walk||"").toLowerCase()?N.timeScale=Se.clamp(W/1.5,.6,1.6):N.timeScale=1)}const U=W<=.05||!this.onGround;this.mixer.timeScale=U?0:this.animBaseSpeed,this.mixer.update(t)}const a=this.input.consumeMouseDelta(),c=.002*this.input.sensitivity;this.camYaw-=a.x*c,this.camPitch-=a.y*c,this.camPitch=Pi(this.camPitch,-1.3,.3),this.camDist=Pi(this.camDist+this.input.consumeWheelDelta(),3,12);const l=this.input.forward-this.input.backward,h=this.input.right-this.input.left,d=Math.abs(l)+Math.abs(h)>0,u=12,f=u*1.75,x=this.input.sneak?2:this.input.run?f:u;if(this.onGround)if(this.input.jump){this.body.velocity.y=7,this.state="Jump";const H=this.body.velocity.x,W=this.body.velocity.z,B=Math.hypot(H,W),I=Math.min(1,B/f),U=45*Math.PI/180*I,N=7*Math.tan(U);if(B>1e-4&&B<N){const it=H/B,C=W/B,O=N-B;this.body.velocity.x=H+it*O,this.body.velocity.z=W+C*O}}else d?this.state=this.input.sneak?"Sneak":this.input.run?"Run":"Walk":this.state="Idle";else this.state!=="Pounce"&&(this.state="Jump");if(this.pounceCooldown=Math.max(0,this.pounceCooldown-t),this.input.consumeLockPounce()&&this.pounceCooldown<=0){let E=null,H=999;const W=new R(this.body.position.x,this.body.position.y,this.body.position.z),B=new R(Math.sin(this.camYaw),0,Math.cos(this.camYaw));for(const I of n){const U=I.position.distanceTo(W);U<8&&I.position.clone().sub(W).normalize().dot(B)>.6&&U<H&&(H=U,E=I)}if(E){this.targetMouse=E;const I=E.position.clone().sub(W).normalize();this.body.velocity.set(I.x*8,6.5,I.z*8),this.state="Pounce",this.pounceCooldown=1}}const p=new R;if(d){this.body.wakeUp&&this.body.wakeUp();const E=this.camYaw,H=new R(Math.sin(E),0,Math.cos(E)),W=new R(-Math.cos(E),0,Math.sin(E));p.copy(H).multiplyScalar(l).add(W.multiplyScalar(h)).normalize();const B=this.body.velocity;if(this.onGround){const I=new w(p.x*x,B.y,p.z*x),U=.35;B.x+=(I.x-B.x)*U,B.z+=(I.z-B.z)*U}else B.x+=p.x*x*.5*t,B.z+=p.z*x*.5*t}else this.onGround&&(this.body.velocity.x*=.9,this.body.velocity.z*=.9);if(this.mesh.position.set(this.body.position.x,this.body.position.y-.45,this.body.position.z),p.lengthSq()>1e-4){const E=Math.atan2(p.x,p.z),H=this.mesh.rotation.y;let W=E-H;for(;W>Math.PI;)W-=Math.PI*2;for(;W<-Math.PI;)W+=Math.PI*2;let B;if(this.onGround)B=W*.2;else{const U=4*t;B=Pi(W,-U,U)}this.mesh.rotation.y=H+B}const g=new R(this.body.position.x,this.body.position.y+.8,this.body.position.z),v=new R(-Math.sin(this.camYaw)*this.camDist,0,-Math.cos(this.camYaw)*this.camDist);let _=g.clone().add(new R(0,2.5+this.camPitch*-2,0)).add(v);const S=_.clone(),L=new R().subVectors(S,g),A=L.length();if(A>.001&&i&&i.length>0){const E=L.normalize();this._raycaster.set(g,E),this._raycaster.far=A;const H=this._raycaster.intersectObjects(i,!0).filter(W=>{let B=W.object;for(;B;){if(B===this.mesh)return!1;B=B.parent}return!0});if(H.length>0){const B=H[0],I=Math.max(0,B.distance-.25);_.copy(g).add(E.multiplyScalar(I))}}e.position.lerp(_,.15),e.lookAt(g)}}let Sa=null;function SM(){if(!Sa){const r=new dc;Sa=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/cat-w_S28Lp9.fbx",import.meta.url).toString();r.load(n,i=>{const s=new ze().setFromObject(i),o=new R;s.getSize(o);const l=1.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return Sa}let Ea=null;function EM(){return Ea||(Ea=new Promise(r=>{const t=new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAENwAABZ4AAAb5AAAIwP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAQABAAwERAAIRAQMRAf/EAO4AAAICAwADAAAAAAAAAAAAAAgJAAcFBgoCAwQBAAIDAQEBAQAAAAAAAAAAAAYHAAUIAwQCCRAAAQEGBgEEAQUAAAAAAAAAABMBEQIEFAUQEgMVBgc1ICEiJSQjNBY2FxEAAAIGBAoHCQAAAAAAAAAAADEQARECBAUyA7UGIaHBEqIUtBXFFiBRU7NVhQexUjNU1HU2hpYSAAADBQUFBgcAAAAAAAAAAAECAwAQIIKyEVGBscHwcRKzBCExYdFywvFSkhMzY4MTAAECAwcEAwEAAAAAAAAAAAABEfBRcRAhMUFhkcEg0eHxgaGxMP/aAAwDAQACEQMRAAABemFW0kVGeClF2nhLQZKy0GSxLfh3vrzY/MV5mTGxJFf6QUtKGFCXYubF2LGyO/NtH4Wj+crrcIv+SLF2FnylmCKGOKsIxhVhIn4ao9zLwI5bBOnJIqzZWY6OYgWbwqyzdFmUh3i/M4xMSN9wJrqSD88W4z73ZdCG9rNlsbdg10quUYzHmqYL2bJKIehqeqwU45lY/vPS4aY9sxchxB8Hdk7UkkrRpHhkJit0LqO2TQXhtbPxlzD9+xBJl6STDFTKO9A22M+R20xu78N24hSJUWf/2gAIAQEAAQUCrStOypl/Nag6u1nijCrKgriuOxJp/Mag6rmBcqioKsqzsOedzCvOppzOVJVlQVZVnZFwy803E6bns5VFWVBVlWXub+z6yuyXCLlNK9sVB/nvXIqbhCbhCXmcfcuB3TJxRsyp2GubiwVN0N0LhPZ5vh9ybBx2S126vMM7TexU3U3U1Z7PHwuPPxm1/wBqP5KwVP/aAAgBAgABBQKuK4k4lZZxcWYOwryvLDEraXFyYOHejizPonFzYOHejingC5Dh3os7PrtW6U0ctOM1NOqYOHicQnEWeH628+SltZK21g4eUxTFugyyd78prxthtqsZlHlMUxLQZdG++VmfGmQef//aAAgBAwABBQJERJn46zy2e44UwQEC5/GeeWf3HCmCYmXv43R5YfcyimCYmchgbvGVpx2EyimCYmWyLLI8pllb7J6LtJI3GfwfCPhJSN0vdtJS4S2l+oiPwWFiT1fxpjSU1ZeBjJvIwfgsLEhqfiPeaP74fh//2gAIAQICBj8CcU99ubiY6RJHv4qzOJjpEhPzDOJjpEhPzDOJjpEnNULChd8W+982nZEnNULKS0gyHjx1REDfmLKS0g3S2fsqiANu9lZaCt0v9KoP/9oACAEDAgY/AnCXbucfDWI5d1IOUl1iVD00g5WX3RKy0FctL7oiF31Cy6l/ByytwXO/Ot9ZvOAtnjmyh91IMct1kRcc2EzLh6Moi45i1rdRJTB//9oACAEBAQY/AkTpf26yYFE88s4h0DBicLb4fZcEie+WcQQYMGDE3U35Cy4IGJ/hLdXEgYNBgxOVN8OsqBBi8eEt0cUBg0GDETh7HZ6oSRzOLeWObx68o9T65vxOS9G7bjuQGPwK5X8tI/oUGDEStvY9xVCVO5xa9jmUYseoFa2nypoyTNQaKQpCteaeZ3bihL3erW9uiVi+lZ7/AC7oyt53IinjRSFILeabPYpQlr3Xrm3xShfD9fs6sRTxo//aAAgBAQMBPyFk0GTQvcx4pUJ4+H6sVRUQuQuTITSTK/sex7zX0x8ktk40X+FhE5Xb6GRZpr8jfc5Cz8LKBysjcjey1RZSUgXzgZ2+AdRFUiqIpFxZtI+7RAOY5M6fjFZpdxsyJyJz7GMuII2VW1M+UPVV70JrjZA2ZA5A59jSXEM6+HjW/RfKz//aAAgBAgMBPyFgwiEZSW4NZYqKiM1kP4RDy3SathxxSDXQSi2ra1xYaL5l+07hJripRRG9Gl0QXEdxEcALllVtQUGnorqI5nOPoigoNH3/AEXSEPp6L//aAAgBAwMBPyF48Rpzfjq2KCgRpX9ZzcXQMUlIkRSyamLqg0qJDgyPAvEXqqj+lB6KDB3DXDikOb0XoqyseUheEJu34iCpcuXodZWPriUETq6P/9oADAMBAAIRAxEAABBtoisla87a0kT/AET6S0W0b6tYt/VNAHcw/9oACAEBAwE/EIJCCQSYGgzXS2g32TsXh2K/Toa30gyXcbL9FTd3Km7uY2sz9BoQ+xSesY3I38kMKROpE6iLYqrmryNk3USzMhSM9iD2Ku4+TdB8m6CxUOQGj3CV2hSWjv4GezuQupEwiYIquqFmcpIRKtydIGzemGW6SmwDp9/NmJsu5AQQEGWXFCj7Qu/pltRskNJzK9xx5sau/gjvcguNh7jYe4heHN/XBQduKpcvzDUJDzCd1Zne/Aarc9I7kFyrCpVhUxnZqiF9M1i9uXoaA2a/Xc//2gAIAQIDAT8Q1UNVBtr0gag4VQbx1hnuM9xJ9eAPgYN2U+Qw45cMWgkRoH2WDC+Vjbp5CwdZcezoLsSi4TyhXIRUdfDYWTQTYcaBoGEqDTgX67QjcfDyMHjw8KMvlX5s11BXM+O4aw0fbVwLcqnIljbHKFHn/9oACAEDAwE/ENI0hZc9qnJ8RfxC4qGGhoyo5FeSsrWGizeUFBSH7X5sI+GyVHyHBwc0RB1NjNtnfMYbIbISjBVeRr0VRIgkouMbTWwM1qrFXR3WPx8QwN5UUWWInInEn7Ea1cfz4hhPfuoaAyYw8PC71iRzq9WgNGP/2Q==",import.meta.url).toString();new yo().load(t,n=>{try{n.colorSpace=ve??Nn}catch{}r(n)},void 0,()=>r(null))})),Ea}class bM{constructor(t,e,n,i,s,o){Mt(this,"body");Mt(this,"mesh");Mt(this,"wanderTimer",0);Mt(this,"pathTimer",0);Mt(this,"target",null);Mt(this,"lastCatPos",null);Mt(this,"wallCommitTimer",0);Mt(this,"wallCommitDir",null);Mt(this,"fleeCommitTimer",0);Mt(this,"fleeCommitDir",null);Mt(this,"heading",new R(1,0,0));Mt(this,"flipRetryTimer",0);Mt(this,"slowTimer",0);Mt(this,"turnCooldown",0);Mt(this,"forwardBlockTimer",0);Mt(this,"speed",10);Mt(this,"alive",!0);Mt(this,"holeIgnoreTimer",0);Mt(this,"holes");Mt(this,"inHoleTimer",0);Mt(this,"pendingExitHole",null);Mt(this,"erraticTimer",0);Mt(this,"erraticAngle",0);Mt(this,"wasPursued",!1);Mt(this,"wanderJitterTimer",0);this.world=t,this.scene=e,this.bounds=i,this.sfx=o;const a=new So(.24);this.body=new wt({mass:.3,shape:a,position:new w(n.x,.36,n.z)}),this.body.linearDamping=.2,t.addBody(this.body);const c=new Un;this.mesh=c,e.add(c),Promise.all([AM(),TM()]).then(([h,d])=>{const u=h.clone(!0);u.traverse(x=>{if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,d)){const p=x.material,g=v=>{v&&"map"in v&&(v.map=d,"side"in v&&(v.side=En),"needsUpdate"in v&&(v.needsUpdate=!0))};Array.isArray(p)?p.forEach(g):g(p)}});const f=new ze().setFromObject(u),m=f.getCenter(new R);u.position.x-=m.x,u.position.z-=m.z,u.position.y-=f.min.y,c.add(u)});const l=de(0,Math.PI*2);this.heading.set(Math.sin(l),0,Math.cos(l)),this.holes=s}update(t,e){var f;if(!this.alive)return;if(this.inHoleTimer>0)if(this.inHoleTimer=Math.max(0,this.inHoleTimer-t),this.body.velocity.x=0,this.body.velocity.z=0,this.inHoleTimer===0&&this.pendingExitHole)this.performHoleExit(this.pendingExitHole),this.pendingExitHole=null;else return;this.holeIgnoreTimer=Math.max(0,this.holeIgnoreTimer-t),this.wanderTimer-=t,this.pathTimer-=t,this.flipRetryTimer=Math.max(0,this.flipRetryTimer-t);const n=new R(this.body.position.x,0,this.body.position.z);let i=new R;if(!this.target||this.pathTimer<=0||this.target.distanceTo(n)<.3){const x=de(this.bounds.min.x+.4,this.bounds.max.x-.4),p=de(this.bounds.min.z+.4,this.bounds.max.z-.4);this.target=new R(x,0,p),this.pathTimer=de(3,7)}this.target&&i.copy(this.target).sub(n).normalize();const a=n.distanceTo(e)<7;if(a&&!this.wasPursued){(f=this.sfx)==null||f.mouseSqueek(),i.lengthSq()>1e-4||i.set(1,0,0);const x=90*Math.PI/180,p=(Math.random()*2-1)*x,g=Math.sin(p),v=Math.cos(p),_=i.x*v-i.z*g,S=i.x*g+i.z*v,L=new R(_,0,S).normalize(),A=de(1.2,2.5),T=this.bounds,G=.8,b=Pi(n.x+L.x*A,T.min.x+G,T.max.x-G),E=Pi(n.z+L.z*A,T.min.z+G,T.max.z-G);this.target=new R(b,0,E),i.copy(L)}if(a){if(this.erraticTimer-=t,this.erraticTimer<=0){const m=60*Math.PI/180;this.erraticAngle=(Math.random()*2-1)*m,this.erraticTimer=.2}if(i.lengthSq()>1e-4){const m=Math.sin(this.erraticAngle),x=Math.cos(this.erraticAngle),p=i.x*x-i.z*m,g=i.x*m+i.z*x;i.set(p,0,g).normalize()}}else if(this.erraticAngle=0,this.erraticTimer=Math.max(this.erraticTimer,0),this.wanderJitterTimer-=t,this.wanderJitterTimer<=0&&i.lengthSq()>1e-4){const m=15*Math.PI/180,x=(Math.random()*2-1)*m,p=Math.sin(x),g=Math.cos(x),v=i.x*g-i.z*p,_=i.x*p+i.z*g;i.set(v,0,_).normalize(),this.wanderJitterTimer=.25}if(this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0){const m=a?12:6,x=new R(this.body.position.x,.5,this.body.position.z);let p=null,g=1/0;for(const v of this.holes){if(!v.room.containsPoint(x))continue;const _=x.distanceTo(v.position);_<g&&(g=_,p=v)}if(p&&g<=m){const v=p.position.clone().addScaledVector(p.inward,-.1);this.target=v;const _=new R(this.body.position.x,0,this.body.position.z);i.copy(v).sub(_).normalize()}}const c=this.body.velocity,l=i.lengthSq()>1e-4?Math.max(0,c.x*i.x+c.z*i.z):0;if(i.lengthSq()>1e-4){if(l>=this.speed*.9)this.slowTimer=0;else if(this.slowTimer+=t,this.slowTimer>=.25&&this.flipRetryTimer<=0){const m=Math.random()<.5,x=i.clone();m?x.x*=-1:x.z*=-1;const p=de(1.2,2.5),g=this.bounds,v=.8,_=Pi(n.x+x.x*p,g.min.x+v,g.max.x-v),S=Pi(n.z+x.z*p,g.min.z+v,g.max.z-v);this.target=new R(_,0,S),this.flipRetryTimer=.1,this.slowTimer=0,i.copy(x)}}let h=1.2;if(a&&(h*=1.75),c.x+=(i.x*this.speed*h-c.x)*.2,c.z+=(i.z*this.speed*h-c.z)*.2,this.holeIgnoreTimer<=0&&this.holes&&this.holes.length>0){const m=new R(this.body.position.x,0,this.body.position.z);let x=null;for(const p of this.holes){const g=p.inward.clone().setY(0).normalize(),v=new R(-g.z,0,g.x).normalize(),_=m.clone().sub(p.position),S=Math.abs(_.x*v.x+_.z*v.z),L=_.x*g.x+_.z*g.z;if(S<=.18&&L>=0&&L<=.9){x=p;break}}x&&this.teleportFromHole(x)}const d=this.bounds;if(c.x+=(n.x<d.min.x+.5?1:0)+(n.x>d.max.x-.5?-1:0),c.z+=(n.z<d.min.z+.5?1:0)+(n.z>d.max.z-.5?-1:0),this.mesh.position.set(this.body.position.x,.24,this.body.position.z),Math.hypot(c.x,c.z)>.05){const m=Math.atan2(c.x,c.z),x=this.mesh.rotation.y;let p=m-x;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.mesh.rotation.y=x+p*Math.min(1,t*8)}this.wasPursued=a}teleportFromHole(t){const e=this.holes;let n=e[Math.floor(Math.random()*e.length)];if(e.length>1)for(let i=0;i<4&&n===t;i++)n=e[Math.floor(Math.random()*e.length)];this.inHoleTimer=.25,this.pendingExitHole=n,this.mesh.visible=!1,this.body.velocity.x=0,this.body.velocity.z=0}performHoleExit(t){const e=t.inward.clone().setY(0).normalize(),i=t.position.clone().addScaledVector(e,.6);this.body.position.set(i.x,.36,i.z),this.mesh.visible=!0;const o=75*(Math.random()*2-1)*Math.PI/180,a=Math.cos(o),c=Math.sin(o),l=new R(e.x*a+e.z*c,0,e.z*a-e.x*c).normalize(),h=this.speed*1.5;this.body.velocity.x=l.x*h,this.body.velocity.z=l.z*h,this.target=i.clone().addScaledVector(l,2+Math.random()),this.pathTimer=1,this.holeIgnoreTimer=2}kill(){this.alive=!1,this.mesh.visible=!1,this.world.removeBody(this.body)}}let ba=null;function AM(){if(!ba){const r=new dc;ba=new Promise((t,e)=>{const n=new URL("/cat-mouse-hunter/assets/mouse-exported-CiP-23e1.fbx",import.meta.url).toString();r.load(n,i=>{const s=new ze().setFromObject(i),o=new R;s.getSize(o);const l=.2/(o.y||1);i.scale.setScalar(l),t(i)},void 0,i=>e(i))})}return ba}let Aa=null;function TM(){return Aa||(Aa=new Promise(r=>{const t=new URL("/cat-mouse-hunter/assets/mouse-DPwdywtM.png",import.meta.url).toString();new yo().load(t,n=>{try{n.colorSpace=ve??Nn}catch{}r(n)},void 0,()=>r(null))})),Aa}class RM{constructor(t,e,n=Math.random()*1e9){Mt(this,"roomBoxes",[]);Mt(this,"roomLabels",[]);Mt(this,"roomAdjacency",[]);Mt(this,"worldBounds");Mt(this,"floorBody");Mt(this,"meshes",[]);Mt(this,"bodies",[]);Mt(this,"spawnPoints",[]);Mt(this,"dynamicPairs",[]);Mt(this,"pausedBodies",new Set);Mt(this,"mouseHoles",[]);this.world=t,this.scene=e,this.rngSeed=n,this.worldBounds=new ze(new R(-20,0,-20),new R(20,5,20));const i=new mv;this.floorBody=new wt({mass:0}),this.floorBody.addShape(i),this.floorBody.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(this.floorBody);const s=new ae(new go(100,100),new Xe({color:11121823}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),this.meshes.push(s)}update(t,e){const o=Math.max(0,10);for(const a of this.dynamicPairs){if(e){const h=a.body.position.x-e.x,d=a.body.position.z-e.z,u=Math.hypot(h,d),f=this.pausedBodies.has(a.body);!f&&u>14?(a.body.velocity.set(0,0,0),a.body.angularVelocity.set(0,0,0),a.body.sleep&&a.body.sleep(),this.pausedBodies.add(a.body)):f&&u<o&&(a.body.wakeUp&&a.body.wakeUp(),this.pausedBodies.delete(a.body))}const c=a.body.position,l=a.body.quaternion;a.mesh.position.set(c.x,c.y,c.z),a.mesh.quaternion&&a.mesh.quaternion.set(l.x,l.y,l.z,l.w)}}dispose(){for(const t of this.bodies)this.world.removeBody(t);for(const t of this.meshes)this.scene.remove(t);this.bodies.length=0,this.meshes.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0}generate(t){for(let z=this.meshes.length-1;z>=1;z--)this.scene.remove(this.meshes[z]),this.meshes.splice(z,1);for(const z of this.bodies)this.world.removeBody(z);this.bodies.length=0,this.roomBoxes.length=0,this.spawnPoints.length=0,this.mouseHoles.length=0;const e=Math.max(8,t.houseHalfSize||10),n=new R(-e,0,-e),i=new R(e,3,e),s=new ze(n.clone(),i.clone()),o=[];let a=[s];const l=1.2*2+.6,h=(i.x-n.x)*(i.z-n.z),d=typeof t.roomDensity=="number"&&t.roomDensity>0?t.roomDensity:Math.max(.002,t.roomCount/Math.max(1,h)),u=Math.max(1,Math.min(48,Math.floor(h*d)));let f=0;for(;a.length+o.length<u&&f++<500;){let z=-1,M=-1;for(let F=0;F<a.length;F++){const q=a[F],K=new R().subVectors(q.max,q.min),$=K.x*K.z;$>M&&(M=$,z=F)}if(z<0)break;const y=a.splice(z,1)[0],D=new R().subVectors(y.max,y.min);let Y=D.x>D.z,X=!1;for(let F=0;F<8&&!X;F++)if(F<4?Y:!Y){const K=y.min.x+l,$=y.max.x-l;if($-K<=.5)continue;const ot=de(K,$),ht=new ze(y.min.clone(),new R(ot,y.max.y,y.max.z)),k=new ze(new R(ot,y.min.y,y.min.z),y.max.clone()),ct=new R().subVectors(ht.max,ht.min),ft=new R().subVectors(k.max,k.min);ct.x>=l&&ct.z>=l&&ft.x>=l&&ft.z>=l&&(a.push(ht,k),X=!0)}else{const K=y.min.z+l,$=y.max.z-l;if($-K<=.5)continue;const ot=de(K,$),ht=new ze(y.min.clone(),new R(y.max.x,y.max.y,ot)),k=new ze(new R(y.min.x,y.min.y,ot),y.max.clone()),ct=new R().subVectors(ht.max,ht.min),ft=new R().subVectors(k.max,k.min);ct.x>=l&&ct.z>=l&&ft.x>=l&&ft.z>=l&&(a.push(ht,k),X=!0)}X||o.push(y)}o.push(...a),this.roomBoxes=o;const m=7.5,x=.35,p=new Xe({color:15788758,roughness:.9,metalness:0}),g=new Xe({color:16777215,roughness:.7,metalness:0}),v=(z,M,y)=>{const D=new R().subVectors(M,z),Y=D.length(),X=Math.atan2(D.x,D.z),F=new Re(x,y,Y),q=new ae(F,p);q.position.copy(new R().addVectors(z,M).multiplyScalar(.5)),q.position.y=y/2,q.rotation.y=X,q.castShadow=!0,q.receiveShadow=!0,this.scene.add(q),this.meshes.push(q);const K=new cn(new w(x/2,y/2,Y/2)),$=new wt({mass:0,shape:K});$.position.set(q.position.x,q.position.y,q.position.z),$.quaternion.setFromEuler(0,X,0),this.world.addBody($),this.bodies.push($)},_=(z,M,y)=>{const D=new R().subVectors(M,z),Y=D.length();if(Y<.05)return;const X=Math.atan2(D.x,D.z),F=new R().addVectors(z,M).multiplyScalar(.5),q=new R(D.z,0,-D.x).normalize(),K=.24,$=.06,ot=x/2+$/2,ht=new Re($,K,Math.max(.01,Y-.02)),k=new ae(ht,g);k.position.copy(F),k.position.y=K/2,k.position.add(q.clone().multiplyScalar(ot)),k.rotation.y=X,k.castShadow=!1,k.receiveShadow=!0;const ct=k.clone();ct.position.copy(F),ct.position.y=K/2,ct.position.add(q.clone().multiplyScalar(-ot)),this.scene.add(k),this.meshes.push(k),this.scene.add(ct),this.meshes.push(ct)},S=(z,M)=>{const y=new R().subVectors(M,z),D=y.length();if(D<.05)return;const Y=Math.atan2(y.x,y.z),X=new R().addVectors(z,M).multiplyScalar(.5),F=new R(y.z,0,-y.x).normalize(),q=.24,K=.06,$=x/2+K/2,ot=new Re(K,q,Math.max(.01,D-.02)),ht=new R((n.x+i.x)/2,0,(n.z+i.z)/2),k=new R().subVectors(ht,X).setY(0).normalize(),ft=F.dot(k)>0?F:F.clone().multiplyScalar(-1),lt=new ae(ot,g);lt.position.copy(X),lt.position.y=q/2,lt.position.add(ft.clone().multiplyScalar($)),lt.rotation.y=Y,lt.castShadow=!1,lt.receiveShadow=!0,this.scene.add(lt),this.meshes.push(lt)},L=(z,M)=>{const y=z.min,D=z.max,Y=[new R(y.x,0,y.z),new R(D.x,0,y.z),new R(D.x,0,D.z),new R(y.x,0,D.z)],X=[[Y[0],Y[1]],[Y[1],Y[2]],[Y[2],Y[3]],[Y[3],Y[0]]];for(const[F,q]of X){const K=Math.abs(F.z-i.z)<.001&&Math.abs(q.z-i.z)<.001,$=Math.abs(F.z-n.z)<.001&&Math.abs(q.z-n.z)<.001,ot=Math.abs(F.x-i.x)<.001&&Math.abs(q.x-i.x)<.001,ht=Math.abs(F.x-n.x)<.001&&Math.abs(q.x-n.x)<.001,k=!(K||$||ot||ht),ct=new R().subVectors(q,F),ft=ct.length(),lt=ct.clone().normalize(),xt=.3;let gt=null;for(const Rt of M){const Bt=new R().subVectors(Rt,F).dot(lt)/ft;if(Bt<=.05||Bt>=.95)continue;const It=F.clone().addScaledVector(lt,Bt*ft),ut=Rt.clone().sub(It);if(Math.abs(ut.x)+Math.abs(ut.z)<xt){gt=It;break}}if(gt){const Xt=gt.clone().addScaledVector(lt,-1.2),Bt=gt.clone().addScaledVector(lt,1.2),It=ce=>new R(Se.clamp(ce.x,Math.min(F.x,q.x),Math.max(F.x,q.x)),ce.y,Se.clamp(ce.z,Math.min(F.z,q.z),Math.max(F.z,q.z))),ut=F.clone(),V=It(Xt),mt=It(Bt),pt=q.clone();v(ut,V,m),v(mt,pt,m),k?(_(ut,V),_(mt,pt)):(S(ut,V),S(mt,pt));const Pt=1.2*2,dt=m/3,yt=m-dt,zt=Math.atan2(lt.x,lt.z),ee=new Re(x,dt,Pt),Kt=new ae(ee,p);Kt.position.copy(gt),Kt.position.y=yt+dt/2,Kt.rotation.y=zt,Kt.castShadow=!0,Kt.receiveShadow=!0,this.scene.add(Kt),this.meshes.push(Kt);const jt=new cn(new w(x/2,dt/2,Pt/2)),ne=new wt({mass:0,shape:jt});ne.position.set(Kt.position.x,Kt.position.y,Kt.position.z),ne.quaternion.setFromEuler(0,zt,0),this.world.addBody(ne),this.bodies.push(ne)}else v(F,q,m),k?_(F,q):S(F,q)}},A=o.map(()=>[]),T=.001;for(let z=0;z<o.length;z++)for(let M=z+1;M<o.length;M++){const y=o[z],D=o[M];if(Math.min(y.max.z,D.max.z)-Math.max(y.min.z,D.min.z)>0){if(Math.abs(y.max.x-D.min.x)<T){const F=(Math.max(y.min.z,D.min.z)+Math.min(y.max.z,D.max.z))/2,q=y.max.x,K=new R(q,0,F);A[z].push(K),A[M].push(K);continue}if(Math.abs(y.min.x-D.max.x)<T){const F=(Math.max(y.min.z,D.min.z)+Math.min(y.max.z,D.max.z))/2,q=y.min.x,K=new R(q,0,F);A[z].push(K),A[M].push(K);continue}}if(Math.min(y.max.x,D.max.x)-Math.max(y.min.x,D.min.x)>0){if(Math.abs(y.max.z-D.min.z)<T){const F=(Math.max(y.min.x,D.min.x)+Math.min(y.max.x,D.max.x))/2,q=y.max.z,K=new R(F,0,q);A[z].push(K),A[M].push(K);continue}if(Math.abs(y.min.z-D.max.z)<T){const F=(Math.max(y.min.x,D.min.x)+Math.min(y.max.x,D.max.x))/2,q=y.min.z,K=new R(F,0,q);A[z].push(K),A[M].push(K);continue}}}const G=o.findIndex(z=>Math.abs(z.max.z-i.z)<T);if(G>=0){const z=o[G];A[G].push(new R((z.min.x+z.max.x)/2,0,z.max.z))}this.classifyRooms(o,A,n,i);for(let z=0;z<o.length;z++)L(o[z],A[z]);if(this.spawnPoints.length>0){const Y=X=>{let F=-1;for(let $=0;$<o.length;$++){const ot=o[$];if(X.x>=ot.min.x&&X.x<=ot.max.x&&X.z>=ot.min.z&&X.z<=ot.max.z){F=$;break}}if(F<0)return!0;const q=o[F],K=A[F];for(const $ of K)if(Math.abs($.z-q.max.z)<.001&&X.z<=q.max.z&&X.z>=q.max.z-.8&&X.x>=$.x-1.6&&X.x<=$.x+1.6||Math.abs($.z-q.min.z)<.001&&X.z>=q.min.z&&X.z<=q.min.z+.8&&X.x>=$.x-1.6&&X.x<=$.x+1.6||Math.abs($.x-q.max.x)<.001&&X.x<=q.max.x&&X.x>=q.max.x-.8&&X.z>=$.z-1.6&&X.z<=$.z+1.6||Math.abs($.x-q.min.x)<.001&&X.x>=q.min.x&&X.x<=q.min.x+.8&&X.z>=$.z-1.6&&X.z<=$.z+1.6)return!1;return!0};this.spawnPoints=this.spawnPoints.filter(Y)}const b=[],E=new Xe({color:0,roughness:1,metalness:0}),H=(z,M,y)=>{const D=new R().subVectors(y,M);if(D.length()<.8)return;const X=.2+Math.random()*.6,F=M.clone().addScaledVector(D,X),q=Math.atan2(D.x,D.z),K=new R().addVectors(M,y).multiplyScalar(.5),$=new R(D.z,0,-D.x).normalize(),ot=new R((z.min.x+z.max.x)/2,0,(z.min.z+z.max.z)/2),ht=new R().subVectors(ot,K).setY(0).normalize(),k=$.dot(ht)>0?$:$.clone().multiplyScalar(-1);{const ce=Math.abs(M.z-y.z)<.001&&Math.abs(M.z-z.max.z)<.001,$e=Math.abs(M.z-y.z)<.001&&Math.abs(M.z-z.min.z)<.001,Le=Math.abs(M.x-y.x)<.001&&Math.abs(M.x-z.max.x)<.001,Je=Math.abs(M.x-y.x)<.001&&Math.abs(M.x-z.min.x)<.001;let Rn=!1;for(const se of b){if(ce&&Math.abs(se.z+se.halfZ-z.max.z)<.2&&F.x>=se.x-se.halfX-.06&&F.x<=se.x+se.halfX+.06){Rn=!0;break}if($e&&Math.abs(se.z-se.halfZ-z.min.z)<.2&&F.x>=se.x-se.halfX-.06&&F.x<=se.x+se.halfX+.06){Rn=!0;break}if(Le&&Math.abs(se.x+se.halfX-z.max.x)<.2&&F.z>=se.z-se.halfZ-.06&&F.z<=se.z+se.halfZ+.06){Rn=!0;break}if(Je&&Math.abs(se.x-se.halfX-z.min.x)<.2&&F.z>=se.z-se.halfZ-.06&&F.z<=se.z+se.halfZ+.06){Rn=!0;break}}if(Rn)return}const ct=.001,ft=o.indexOf(z);if(ft>=0){const jt=A[ft],ne=1.2,ce=.4;let $e=!1;for(const Le of jt){if(Math.abs(F.z-z.max.z)<ct&&Math.abs(Le.z-z.max.z)<ct&&F.x>=Le.x-(ne+ce)&&F.x<=Le.x+(ne+ce)){$e=!0;break}if(Math.abs(F.z-z.min.z)<ct&&Math.abs(Le.z-z.min.z)<ct&&F.x>=Le.x-(ne+ce)&&F.x<=Le.x+(ne+ce)){$e=!0;break}if(Math.abs(F.x-z.max.x)<ct&&Math.abs(Le.x-z.max.x)<ct&&F.z>=Le.z-(ne+ce)&&F.z<=Le.z+(ne+ce)){$e=!0;break}if(Math.abs(F.x-z.min.x)<ct&&Math.abs(Le.x-z.min.x)<ct&&F.z>=Le.z-(ne+ce)&&F.z<=Le.z+(ne+ce)){$e=!0;break}}if($e)return}const lt=.02,xt=.36,gt=.3,Rt=xt/2,Xt=.85,Bt=new Un,It=new Re(lt,gt,xt),ut=new ae(It,E);ut.position.set(0,gt/2,0),Bt.add(ut);const V=new qs(Rt,Rt,lt,24),mt=new ae(V,E);mt.rotation.z=Math.PI/2;const pt=Rt*Xt;mt.position.set(0,gt+Rt-pt,0),Bt.add(mt),Bt.position.copy(F),Bt.position.y=0;const Pt=x/2+lt/2+.002;Bt.position.add(k.clone().multiplyScalar(Pt)),Bt.rotation.y=q,Bt.position.y+=.001,this.scene.add(Bt),this.meshes.push(Bt),this.mouseHoles.push({position:Bt.position.clone(),inward:k.clone(),room:z});const dt=.06,yt=.24,zt=new Re(dt+.005,yt,xt*.9),ee=new ae(zt,E);ee.position.copy(F),ee.position.y=yt/2+.001;const Kt=x/2+(dt+.005)/2+.001;ee.position.add(k.clone().multiplyScalar(Kt)),ee.rotation.y=q,this.scene.add(ee),this.meshes.push(ee)};for(let z=0;z<o.length;z++){const M=o[z],y=M.min,D=M.max,Y=[new R(y.x,0,y.z),new R(D.x,0,y.z),new R(D.x,0,D.z),new R(y.x,0,D.z)],X=[[Y[0],Y[1]],[Y[1],Y[2]],[Y[2],Y[3]],[Y[3],Y[0]]];for(const[F,q]of X){const K=Math.abs(F.z-i.z)<.001&&Math.abs(q.z-i.z)<.001,$=Math.abs(F.z-n.z)<.001&&Math.abs(q.z-n.z)<.001,ot=Math.abs(F.x-i.x)<.001&&Math.abs(q.x-i.x)<.001,ht=Math.abs(F.x-n.x)<.001&&Math.abs(q.x-n.x)<.001;K||$||ot||ht||Math.random()<.25&&H(M,F,q)}}const W=3;if(this.mouseHoles.length<W){const z=[];for(let M=0;M<o.length;M++){const y=o[M],D=y.min,Y=y.max,X=[new R(D.x,0,D.z),new R(Y.x,0,D.z),new R(Y.x,0,Y.z),new R(D.x,0,Y.z)],F=[[X[0],X[1]],[X[1],X[2]],[X[2],X[3]],[X[3],X[0]]];for(const[q,K]of F){const $=Math.abs(q.z-i.z)<.001&&Math.abs(K.z-i.z)<.001,ot=Math.abs(q.z-n.z)<.001&&Math.abs(K.z-n.z)<.001,ht=Math.abs(q.x-i.x)<.001&&Math.abs(K.x-i.x)<.001,k=Math.abs(q.x-n.x)<.001&&Math.abs(K.x-n.x)<.001;$||ot||ht||k||z.push({room:y,a:q,b:K})}}for(let M=0;M<z.length&&this.mouseHoles.length<W;M++){const y=Math.floor(Math.random()*z.length),D=z[y];H(D.room,D.a,D.b)}}const B=.2,I=10,U=new R(n.x+x,0,i.z+B),N=new R(i.x-x,0,i.z+B+I),it=1.2,C=new Xe({color:9075291}),O=(z,M)=>{const y=new R().subVectors(M,z),D=y.length(),Y=Math.atan2(y.x,y.z),X=new Re(.15,it,D),F=new ae(X,C);F.position.copy(new R().addVectors(z,M).multiplyScalar(.5)),F.position.y=it/2,F.rotation.y=Y,this.scene.add(F),this.meshes.push(F);const q=new cn(new w(.075,it/2,D/2)),K=new wt({mass:0,shape:q});K.position.set(F.position.x,F.position.y,F.position.z),K.quaternion.setFromEuler(0,Y,0),this.world.addBody(K),this.bodies.push(K)};O(new R(N.x,0,U.z),new R(N.x,0,N.z)),O(new R(N.x,0,N.z),new R(U.x,0,N.z)),O(new R(U.x,0,N.z),new R(U.x,0,U.z));const j=new Xe({color:13150590}),st=new Xe({color:15132390});for(const z of o){const M=new R().subVectors(z.max,z.min),y=new ae(new Re(M.x,.1,M.z),j);y.position.set((z.min.x+z.max.x)/2,.05,(z.min.z+z.max.z)/2),y.receiveShadow=!0,this.scene.add(y),this.meshes.push(y);const D=new cn(new w(M.x/2,.05,M.z/2)),Y=new wt({mass:0,shape:D});Y.position.set(y.position.x,y.position.y,y.position.z),this.world.addBody(Y),this.bodies.push(Y);const X=new ae(new Re(M.x,.1,M.z),st);X.position.set((z.min.x+z.max.x)/2,m-.05,(z.min.z+z.max.z)/2),X.receiveShadow=!1,X.castShadow=!1,this.scene.add(X),this.meshes.push(X);const F=new wt({mass:0,shape:new cn(new w(M.x/2,.05,M.z/2))});F.position.set(X.position.x,X.position.y,X.position.z),this.world.addBody(F),this.bodies.push(F);for(let q=0;q<5;q++){const K=de(z.min.x+.5,z.max.x-.5),$=de(z.min.z+.5,z.max.z-.5);this.spawnPoints.push(new R(K,0,$))}}const rt=new R().subVectors(N,U),tt=new ae(new Re(rt.x,.1,rt.z),new Xe({color:11061129}));tt.position.set((U.x+N.x)/2,.05,(U.z+N.z)/2),tt.receiveShadow=!0,this.scene.add(tt),this.meshes.push(tt);const at=new wt({mass:0,shape:new cn(new w(rt.x/2,.05,rt.z/2))});at.position.set(tt.position.x,tt.position.y,tt.position.z),this.world.addBody(at),this.bodies.push(at),new Xe({color:9132587}),new Xe({color:5597999}),new Xe({color:3821675}),new Xe({color:8026746});let _t=null;const bt=()=>{if(!_t){const z=new dc;_t=new Promise((M,y)=>{const D=new URL("/cat-mouse-hunter/assets/toilet-BKS9EQ1_.fbx",import.meta.url).toString();z.load(D,Y=>{const X=new ze().setFromObject(Y),F=new R;X.getSize(F);const K=F.y>0?.85/F.y:1;Y.scale.setScalar(K),M(Y)},void 0,Y=>y(Y))})}return _t},At=(z,M)=>{const y=z.min,D=z.max,Y=[new R(y.x,0,y.z),new R(D.x,0,y.z),new R(D.x,0,D.z),new R(y.x,0,D.z)],X=[[Y[0],Y[1]],[Y[1],Y[2]],[Y[2],Y[3]],[Y[3],Y[0]]],F=new R((y.x+D.x)/2,0,(y.z+D.z)/2),q=1.2,K=.5,$=.001,ot=Math.floor(Math.random()*4);for(let ht=0;ht<4;ht++){const[k,ct]=X[(ot+ht)%4],ft=new R().subVectors(ct,k),lt=ft.length();if(lt<.8)continue;const xt=ft.clone().normalize(),gt=new R(ft.z,0,-ft.x).normalize(),Rt=k.clone().addScaledVector(xt,lt/2),Xt=new R().subVectors(F,Rt).setY(0).normalize(),Bt=gt.dot(Xt)>0?gt:gt.clone().multiplyScalar(-1),It=Math.abs(k.z-D.z)<$&&Math.abs(ct.z-D.z)<$,ut=Math.abs(k.z-y.z)<$&&Math.abs(ct.z-y.z)<$,V=Math.abs(k.x-D.x)<$&&Math.abs(ct.x-D.x)<$,mt=Math.abs(k.x-y.x)<$&&Math.abs(ct.x-y.x)<$,pt=[];for(const dt of M){if(It&&Math.abs(dt.z-D.z)<$){const yt=(dt.x-k.x)/(ct.x-k.x);pt.push([Math.max(0,yt-(q+K)/lt),Math.min(1,yt+(q+K)/lt)])}if(ut&&Math.abs(dt.z-y.z)<$){const yt=(dt.x-k.x)/(ct.x-k.x);pt.push([Math.max(0,yt-(q+K)/lt),Math.min(1,yt+(q+K)/lt)])}if(V&&Math.abs(dt.x-D.x)<$){const yt=(dt.z-k.z)/(ct.z-k.z);pt.push([Math.max(0,yt-(q+K)/lt),Math.min(1,yt+(q+K)/lt)])}if(mt&&Math.abs(dt.x-y.x)<$){const yt=(dt.z-k.z)/(ct.z-k.z);pt.push([Math.max(0,yt-(q+K)/lt),Math.min(1,yt+(q+K)/lt)])}}const Pt=dt=>pt.every(([yt,zt])=>!(dt>=yt&&dt<=zt));for(let dt=0;dt<8;dt++){const yt=.15+Math.random()*.7;if(!Pt(yt))continue;const zt=k.clone().addScaledVector(xt,yt*lt);zt.add(Bt.clone().multiplyScalar(.08)),bt().then(Kt=>{const jt=Kt.clone(!0),ce=new ze().setFromObject(jt).min.y;jt.position.copy(zt),jt.position.y-=ce,jt.rotation.y=Math.atan2(Bt.x,Bt.z),this.scene.add(jt),this.meshes.push(jt)});return}}};for(let z=0;z<o.length;z++)this.roomLabels[z]==="Bathroom"&&At(o[z],A[z]);const Ht=(z,M=.9,y=.8)=>{const D=new Un,Y=new Xe({color:7043727,roughness:.9}),X=new Xe({color:6056570,roughness:.9}),F=new Xe({color:7820595,roughness:.7,metalness:0}),q=.4,K=y-q,$=Math.min(.18,Math.max(.12,z*.08)),ot=.1,ht=new ae(new Re(z,.08,M),F);ht.position.set(0,.08/2+ot,0),ht.castShadow=ht.receiveShadow=!0,D.add(ht);const k=new ae(new Re(z-$*2,q,M-.06,2,1,2),Y);k.position.set(0,ot+.08+q/2,0),k.castShadow=k.receiveShadow=!0,D.add(k);const ct=new ae(new Re(z-$*2,K,.12),X);ct.position.set(0,ot+.08+q+K/2,-(M/2)+.06),ct.castShadow=ct.receiveShadow=!0,D.add(ct);const ft=new ae(new Re($,y,M),X);ft.position.set(-(z/2)+$/2,ot+y/2,0);const lt=ft.clone();lt.position.x=z/2-$/2,D.add(ft,lt);const xt=z>2.4?3:2;for(let ut=0;ut<xt;ut++){const V=(z-$*2-.06*(xt+1))/xt,mt=new ae(new Re(V,q*.95,M-.08,2,1,2),Y);mt.position.set(-(z/2-$)+.06+V/2+ut*(V+.06),ot+.08+q/2+.01,.01),mt.castShadow=mt.receiveShadow=!0,D.add(mt)}const gt=new qs(.035,.035,ot,8),Rt=new ae(gt,F),Xt=Rt.clone(),Bt=Rt.clone(),It=Rt.clone();return Rt.position.set(-z/2+.08,ot/2,-M/2+.08),Xt.position.set(z/2-.08,ot/2,-M/2+.08),Bt.position.set(-z/2+.08,ot/2,M/2-.08),It.position.set(z/2-.08,ot/2,M/2-.08),D.add(Rt,Xt,Bt,It),D},Gt=(z,M,y,D,Y)=>{for(const K of M)if(y===0&&Math.abs(K.z-z.max.z)<.15&&Math.abs(D-K.x)<Y+1.2+.6||y===1&&Math.abs(K.z-z.min.z)<.15&&Math.abs(D-K.x)<Y+1.2+.6||y===2&&Math.abs(K.x-z.max.x)<.15&&Math.abs(D-K.z)<Y+1.2+.6||y===3&&Math.abs(K.x-z.min.x)<.15&&Math.abs(D-K.z)<Y+1.2+.6)return!0;return!1},Ft=(z,M,y,D)=>!(M.x<y.x||z.x>D.x||M.y<y.y||z.y>D.y),te=(z,M,y,D,Y,X,F)=>{const q=Math.abs(Math.sin(Y))>.5?F/2:X/2,K=Math.abs(Math.sin(Y))>.5?X/2:F/2,$=new Dt(y-q,D-K),ot=new Dt(y+q,D+K),ht=.001,k=1.2,ct=1,ft=.6;for(const lt of M){if(Math.abs(lt.z-z.max.z)<ht){const xt=new Dt(lt.x-(k+ft),z.max.z-ct),gt=new Dt(lt.x+(k+ft),z.max.z);if(Ft($,ot,xt,gt))return!0}if(Math.abs(lt.z-z.min.z)<ht){const xt=new Dt(lt.x-(k+ft),z.min.z),gt=new Dt(lt.x+(k+ft),z.min.z+ct);if(Ft($,ot,xt,gt))return!0}if(Math.abs(lt.x-z.max.x)<ht){const xt=new Dt(z.max.x-ct,lt.z-(k+ft)),gt=new Dt(z.max.x,lt.z+(k+ft));if(Ft($,ot,xt,gt))return!0}if(Math.abs(lt.x-z.min.x)<ht){const xt=new Dt(z.min.x,lt.z-(k+ft)),gt=new Dt(z.min.x+ct,lt.z+(k+ft));if(Ft($,ot,xt,gt))return!0}}return!1},Q=(z,M,y,D)=>{for(const X of b)if(!(z+y+.04<X.x-X.halfX||z-y-.04>X.x+X.halfX||M+D+.04<X.z-X.halfZ||M-D-.04>X.z+X.halfZ))return!0;return!1},Pe=(z,M)=>{const D=new R().subVectors(z.max,z.min),Y=Math.max(D.x,D.z),X=Se.clamp((Y-4)/8,0,1),F=(de(1.6,3.2)+X*de(.4,1))*1.5,q=(de(.8,1)+X*de(0,.2))*1.5,K=.8*1.5,$=Ht(F,q,K);$.traverse(dt=>{dt.castShadow=!0,dt.receiveShadow=!0});const ot=Math.floor(Math.random()*4),ht=.06;let k=0,ct=0,ft=0,lt=12,xt=!1;for(;lt-- >0;){if(ot===0){ct=z.max.z-(q/2+ht);const dt=z.min.x+.6+F/2,yt=z.max.x-.6-F/2;if(k=de(dt,Math.max(dt,yt)),ft=Math.PI,!Gt(z,M,ot,k,F/2)&&!Q(k,ct,F/2,q/2)){xt=!0;break}}else if(ot===1){ct=z.min.z+(q/2+ht);const dt=z.min.x+.6+F/2,yt=z.max.x-.6-F/2;if(k=de(dt,Math.max(dt,yt)),ft=0,!Gt(z,M,ot,k,F/2)&&!Q(k,ct,F/2,q/2)){xt=!0;break}}else if(ot===2){k=z.max.x-(q/2+ht);const dt=z.min.z+.6+F/2,yt=z.max.z-.6-F/2;if(ct=de(dt,Math.max(dt,yt)),ft=-Math.PI/2,!Gt(z,M,ot,ct,F/2)&&!Q(k,ct,q/2,F/2)){xt=!0;break}}else{k=z.min.x+(q/2+ht);const dt=z.min.z+.6+F/2,yt=z.max.z-.6-F/2;if(ct=de(dt,Math.max(dt,yt)),ft=Math.PI/2,!Gt(z,M,ot,ct,F/2)&&!Q(k,ct,q/2,F/2)){xt=!0;break}}if(!xt)return 0}if($.position.set(k,0,ct),$.rotation.y=ft,te(z,M,k,ct,ft,F,q))return 0;this.scene.add($),this.meshes.push($);const gt=Math.abs(Math.sin(ft))>.5?q/2:F/2,Rt=Math.abs(Math.sin(ft))>.5?F/2:q/2;b.push({x:k,z:ct,halfX:gt,halfZ:Rt});{const dt=Math.abs(Math.sin(ft))>.5?q/2:F/2,yt=Math.abs(Math.sin(ft))>.5?F/2:q/2;b.push({x:k,z:ct,halfX:dt,halfZ:yt})}const Xt=.1,Bt=.08,It=.4,ut=K-It,V=Math.min(.18*(F/(F||1)),Math.max(.12,F*.08)),mt=Xt+Bt+It,pt=new wt({mass:0});{const dt=Math.max(.2,F-V*2),yt=Math.max(.2,q-.06),zt=.12,ee=new cn(new w(dt/2,zt/2,yt/2)),Kt=new w(0,mt-zt/2,0);pt.addShape(ee,Kt)}{const dt=Math.max(.2,F-V*2),yt=.12,zt=new cn(new w(dt/2,Math.max(.1,ut)/2,yt/2)),ee=Xt+Bt+It+Math.max(.1,ut)/2,Kt=new w(0,ee,-(q/2)+yt/2+.06);pt.addShape(zt,Kt)}pt.position.set(k,0,ct),$.rotation.y!==0&&pt.quaternion.setFromEuler(0,$.rotation.y,0),pt.isCouch=!0,this.world.addBody(pt),this.bodies.push(pt);let Pt=1;if(Y>6&&Math.random()<.5+X*.3){const dt=1+X*.5,yt=de(1.2,2.4)*dt*1.5,zt=de(.75,.95)*dt*1.5,ee=K,Kt=Ht(yt,zt,ee);Kt.traverse(Je=>{Je.castShadow=!0,Je.receiveShadow=!0});const jt=new R(Math.cos(ft),0,-Math.sin(ft)),ne=new R(Math.sin(ft),0,Math.cos(ft)),ce=Je=>new R().copy(new R(k,0,ct)).add(jt.clone().multiplyScalar(Je*F/2)).add(ne.clone().multiplyScalar(q/2)),$e=.06;let Le=!1;for(const Je of[1,-1]){const Rn=ce(Je),se=jt.clone().multiplyScalar(-Je).normalize(),zn=[ft+Math.PI/2,ft-Math.PI/2];let Qe=zn[0],lr=-1e9;for(const P of zn){const J=new R(Math.sin(P),0,Math.cos(P)).dot(se);J>lr&&(lr=J,Qe=P)}const Eo=new R(Math.cos(Qe),0,-Math.sin(Qe)),bo=new R(Math.sin(Qe),0,Math.cos(Qe));for(const P of[1,-1]){const J=Rn.clone().sub(ne.clone().multiplyScalar($e)).clone().sub(Eo.clone().multiplyScalar(P*yt/2+$e)).sub(bo.clone().multiplyScalar(zt/2+$e));if(!(J.x-yt/2<z.min.x+.5||J.x+yt/2>z.max.x-.5)&&!(J.z-zt/2<z.min.z+.5||J.z+zt/2>z.max.z-.5)&&!te(z,M,J.x,J.z,Qe,yt,zt)){const nt=Math.abs(Math.sin(Qe))>.5?zt/2:yt/2,et=Math.abs(Math.sin(Qe))>.5?yt/2:zt/2;if(Q(J.x,J.z,nt,et))continue;Kt.position.set(J.x,0,J.z),Kt.rotation.y=Qe,this.scene.add(Kt),this.meshes.push(Kt);const St=.1,Ct=.08,Nt=.4,Vt=ee-Nt,Yt=Math.min(.18*(yt/(yt||1)),Math.max(.12,yt*.08)),qt=St+Ct+Nt,Ot=new wt({mass:0});{const pe=Math.max(.2,yt-Yt*2),Ne=Math.max(.2,zt-.06),ye=.12,rn=new cn(new w(pe/2,ye/2,Ne/2)),ue=new w(0,qt-ye/2,0);Ot.addShape(rn,ue)}{const pe=Math.max(.2,yt-Yt*2),Ne=.12,ye=new cn(new w(pe/2,Math.max(.1,Vt)/2,Ne/2)),rn=St+Ct+Nt+Math.max(.1,Vt)/2,ue=new w(0,rn,-(zt/2)+Ne/2+.06);Ot.addShape(ye,ue)}Ot.position.set(J.x,0,J.z),Qe!==0&&Ot.quaternion.setFromEuler(0,Qe,0),Ot.isCouch=!0,this.world.addBody(Ot),this.bodies.push(Ot),b.push({x:J.x,z:J.z,halfX:nt,halfZ:et}),Le=!0,Pt+=1;break}}if(Le)break}}return Pt};for(let z=0;z<o.length;z++){const M=o[z];(M.min.x+M.max.x)/2,(M.min.z+M.max.z)/2}const Lt=this.roomLabels.map((z,M)=>({lab:z,i:M})).filter(({lab:z})=>z==="Living Room"||z==="Family Room").map(({i:z})=>z),Wt=Lt.length>0?Math.random()<.5?1:2:0;let Tt=0;for(const z of Lt)Math.random()<.7&&(Tt+=Pe(o[z],A[z])),Math.random()<.35&&(Tt+=Pe(o[z],A[z]));let fe=50;for(;Lt.length>0&&Tt<Wt&&fe-- >0;){const z=Lt[Math.floor(Math.random()*Lt.length)];Tt+=Pe(o[z],A[z])}if(this.mouseHoles.length>0&&b.length>0){const y=X=>{const F=X.room,q=X.position,K=Math.abs(q.z-F.max.z)<.001,$=Math.abs(q.z-F.min.z)<.001,ot=Math.abs(q.x-F.max.x)<.001,ht=Math.abs(q.x-F.min.x)<.001;for(const k of b)if(K&&Math.abs(k.z+k.halfZ-F.max.z)<.2&&q.x>=k.x-k.halfX-.06&&q.x<=k.x+k.halfX+.06||$&&Math.abs(k.z-k.halfZ-F.min.z)<.2&&q.x>=k.x-k.halfX-.06&&q.x<=k.x+k.halfX+.06||ot&&Math.abs(k.x+k.halfX-F.max.x)<.2&&q.z>=k.z-k.halfZ-.06&&q.z<=k.z+k.halfZ+.06||ht&&Math.abs(k.x-k.halfX-F.min.x)<.2&&q.z>=k.z-k.halfZ-.06&&q.z<=k.z+k.halfZ+.06)return!1;return!0},D=this.mouseHoles.length;this.mouseHoles=this.mouseHoles.filter(y);const Y=Math.max(0,D-this.mouseHoles.length);if(Y>0){const X=[];for(let K=0;K<o.length;K++){const $=o[K],ot=$.min,ht=$.max,k=[new R(ot.x,0,ot.z),new R(ht.x,0,ot.z),new R(ht.x,0,ht.z),new R(ot.x,0,ht.z)],ct=[[k[0],k[1]],[k[1],k[2]],[k[2],k[3]],[k[3],k[0]]];for(const[ft,lt]of ct){const xt=Math.abs(ft.z-i.z)<.001&&Math.abs(lt.z-i.z)<.001,gt=Math.abs(ft.z-n.z)<.001&&Math.abs(lt.z-n.z)<.001,Rt=Math.abs(ft.x-i.x)<.001&&Math.abs(lt.x-i.x)<.001,Xt=Math.abs(ft.x-n.x)<.001&&Math.abs(lt.x-n.x)<.001;xt||gt||Rt||Xt||X.push({room:$,a:ft,b:lt})}}let F=Y,q=X.length*2+20;for(;F>0&&q-- >0&&X.length>0;){const K=Math.floor(Math.random()*X.length),$=X[K];H($.room,$.a,$.b);const ot=this.mouseHoles.filter(y),ht=ot.length>this.mouseHoles.length?1:0;this.mouseHoles=ot,ht>0&&(F-=ht)}this.mouseHoles=this.mouseHoles.filter(y)}}this.spawnPoints.length>0&&b.length>0&&(this.spawnPoints=this.spawnPoints.filter(M=>{for(const y of b)if(M.x>=y.x-y.halfX-.1&&M.x<=y.x+y.halfX+.1&&M.z>=y.z-y.halfZ-.1&&M.z<=y.z+y.halfZ+.1)return!1;return!0}));for(let z=0;z<t.clutterCount;z++){const M=MM(o),y=.6,D=de(M.min.x+y,M.max.x-y),Y=de(M.min.z+y,M.max.z-y),X=.15,F=de(.12,.6)*.25,q=de(2,3),K=new Xe({color:16777215*Math.random()});if(Math.random()<.5){const ot=de(.08,.18)*q,ht=new ae(new rc(ot,18,14),K);ht.position.set(D,X+ot+.02,Y),ht.castShadow=!0,ht.receiveShadow=!0,this.scene.add(ht),this.meshes.push(ht);const k=new wt({mass:F,shape:new So(ot)});k.angularDamping=.25,k.linearDamping=.02,k.position.set(ht.position.x,ht.position.y,ht.position.z),this.world.addBody(k),this.bodies.push(k),this.dynamicPairs.push({mesh:ht,body:k})}else{const $=de(.06,.12),ot=de(.14,.3),ht=$*q,k=ot*q,ct=new ae(new qs(ht,ht,k,16),K);ct.position.set(D,X+k/2+.02,Y),ct.castShadow=!0,ct.receiveShadow=!0,this.scene.add(ct),this.meshes.push(ct);const ft=new pv(ht,ht,k,16),lt=new wt({mass:F}),xt=new Ae;xt.setFromEuler(0,0,Math.PI/2),lt.addShape(ft,new w(0,0,0),xt),lt.angularDamping=.25,lt.linearDamping=.02,lt.position.set(ct.position.x,ct.position.y,ct.position.z),this.world.addBody(lt),this.bodies.push(lt),this.dynamicPairs.push({mesh:ct,body:lt})}}}classifyRooms(t,e,n,i){const o=t.map((C,O)=>{const j=new R().subVectors(C.max,C.min),st=Math.max(j.x,j.z),rt=Math.max(.001,Math.min(j.x,j.z)),tt=Math.abs(C.min.x-n.x)<.001||Math.abs(C.max.x-i.x)<.001||Math.abs(C.min.z-n.z)<.001||Math.abs(C.max.z-i.z)<.001;return{idx:O,w:j.x,d:j.z,area:j.x*j.z,aspect:st/rt,boundary:tt,touchesNorth:Math.abs(C.max.z-i.z)<.001,touchesSouth:Math.abs(C.min.z-n.z)<.001,touchesEast:Math.abs(C.max.x-i.x)<.001,touchesWest:Math.abs(C.min.x-n.x)<.001,neighbors:[],degree:0}}),a=t.map(()=>[]);for(let C=0;C<t.length;C++)for(let O=C+1;O<t.length;O++){const j=t[C],st=t[O],rt=Math.min(j.max.z,st.max.z)-Math.max(j.min.z,st.min.z),tt=Math.min(j.max.x,st.max.x)-Math.max(j.min.x,st.min.x),at=rt>0&&(Math.abs(j.max.x-st.min.x)<.001||Math.abs(j.min.x-st.max.x)<.001),_t=tt>0&&(Math.abs(j.max.z-st.min.z)<.001||Math.abs(j.min.z-st.max.z)<.001);(at||_t)&&(a[C].push(O),a[O].push(C))}for(let C=0;C<o.length;C++)o[C].neighbors=a[C],o[C].degree=a[C].length;const c=[...o].sort((C,O)=>O.area-C.area),l=C=>C.aspect>=3&&Math.min(C.w,C.d)<=2.2,h=C=>C.area<9,d=C=>C.area>=9&&C.area<=20,u=t.map(()=>"Unlabeled"),f=new Set;for(const C of o)l(C)&&C.area>=6&&C.area<=40&&C.degree>=2&&(u[C.idx]="Hallway",f.add(C.idx));let m=-1;for(const C of c)if(!f.has(C.idx)&&C.aspect<=2.5){m=C.idx,u[C.idx]="Living Room",f.add(C.idx);break}if(m>=0){const O=o[m].neighbors.map(j=>o[j]).filter(j=>!f.has(j.idx)&&j.aspect<=2.5&&j.area>=10&&j.area<=35).sort((j,st)=>st.area-j.area)[0];O&&(u[O.idx]="Kitchen",f.add(O.idx))}const x=u.indexOf("Kitchen"),p=x>=0?x:m;if(p>=0){const C=o[p].neighbors.map(O=>o[O]).filter(O=>!f.has(O.idx)&&O.area>=8&&O.area<=25&&O.aspect<=2.8).sort((O,j)=>O.area-j.area);C.length>0&&(u[C[0].idx]="Dining Room",f.add(C[0].idx))}const g=u.map((C,O)=>C==="Hallway"?O:-1).filter(C=>C>=0),v=(C,O)=>C.neighbors.some(j=>O.includes(j)),_=o.filter(C=>!f.has(C.idx)&&h(C)).sort((C,O)=>C.area-O.area);let S=!1;for(const C of _)v(C,g)&&(S||(u[C.idx]="Bathroom",f.add(C.idx),S=!0));const L=o.filter(C=>!f.has(C.idx)&&!l(C)&&C.area>=9&&C.area<=25&&C.aspect<=2.6).sort((C,O)=>O.area-C.area),A=[];for(const C of L)(g.length===0||v(C,g)||C.degree<=2)&&(u[C.idx]="Bedroom",f.add(C.idx),A.push(C.idx));if(A.length>0){const C=A.map(O=>o[O]).sort((O,j)=>j.area-O.area)[0];C&&(u[C.idx]="Master Bedroom")}const T=o.filter(C=>!f.has(C.idx)&&C.boundary&&C.touchesSouth&&C.area>=6&&C.area<=16).sort((C,O)=>C.area-O.area);if(T.length>0){const O=T.find(j=>v(j,g)||m>=0&&j.neighbors.includes(m))||T[0];u[O.idx]="Foyer",f.add(O.idx)}const G=o.filter(C=>!f.has(C.idx)&&C.boundary&&C.area>=5&&C.area<=12).sort((C,O)=>C.area-O.area);for(const C of G)if(x>=0&&C.neighbors.includes(x)||v(C,g)){u[C.idx]="Laundry",f.add(C.idx);break}const b=o.filter(C=>!f.has(C.idx)&&d(C)&&C.aspect<=2.5).sort((C,O)=>C.degree-O.degree)[0];b&&(u[b.idx]="Office",f.add(b.idx));const E=C=>u.includes(C),H=()=>u.includes("Bedroom")||u.includes("Master Bedroom"),W=()=>{if(!E("Living Room")){const C=c.find(O=>!f.has(O.idx)&&u[O.idx]!=="Hallway");C&&(u[C.idx]="Living Room",f.add(C.idx))}},B=()=>{if(!E("Kitchen")){const C=u.findIndex(j=>j==="Living Room");if(C>=0){const j=o[C].neighbors.map(st=>o[st]).filter(st=>!f.has(st.idx)&&u[st.idx]!=="Hallway").filter(st=>st.aspect<=2.6).sort((st,rt)=>Math.abs(18-st.area)-Math.abs(18-rt.area))[0];if(j){u[j.idx]="Kitchen",f.add(j.idx);return}}const O=o.filter(j=>!f.has(j.idx)&&u[j.idx]!=="Hallway"&&j.aspect<=2.6).sort((j,st)=>Math.abs(18-j.area)-Math.abs(18-st.area))[0];O&&(u[O.idx]="Kitchen",f.add(O.idx))}},I=()=>{if(!E("Bathroom")){const C=o.filter(O=>!f.has(O.idx)&&u[O.idx]!=="Hallway").sort((O,j)=>O.area-j.area)[0];C&&(u[C.idx]="Bathroom",f.add(C.idx))}},U=()=>{if(!H()){const C=o.filter(O=>!f.has(O.idx)&&!l(O)).sort((O,j)=>Math.abs(14-O.area)-Math.abs(14-j.area))[0];C&&(u[C.idx]="Bedroom",f.add(C.idx))}};W(),B(),I(),U();for(const C of o)f.has(C.idx)||(C.area<7?u[C.idx]="Closet":C.area>26?u[C.idx]="Family Room":u[C.idx]="Spare Room",f.add(C.idx));if(E("Living Room")&&E("Kitchen")&&E("Bathroom")&&H())for(const C of _)(u[C.idx]==="Closet"||u[C.idx]==="Spare Room")&&(u[C.idx]="Bathroom");const it=u.map((C,O)=>C==="Bedroom"||C==="Master Bedroom"?O:-1).filter(C=>C>=0);if(it.length>0){const C=it.map(O=>o[O]).sort((O,j)=>j.area-O.area)[0];C&&(u[C.idx]="Master Bedroom")}this.roomLabels=u,this.roomAdjacency=a,this.roomBoxes=t}getRoomTypeAtPosition(t){for(let e=0;e<this.roomBoxes.length;e++){const n=this.roomBoxes[e];if(t.x>=n.min.x&&t.x<=n.max.x&&t.z>=n.min.z&&t.z<=n.max.z)return this.roomLabels[e]||"Unknown"}return"Unknown"}}class CM{constructor(t=document){Mt(this,"keys",{});Mt(this,"mouseDelta",{x:0,y:0});Mt(this,"wheelDelta",0);Mt(this,"lockPounce",!1);Mt(this,"sensitivity",1);Mt(this,"gpIndex",-1);Mt(this,"gpDeadzone",.2);Mt(this,"gpMoveX",0);Mt(this,"gpMoveY",0);Mt(this,"gpPrevButtons",[]);Mt(this,"padRestart",!1);Mt(this,"padNext",!1);Mt(this,"padAccept",!1);Mt(this,"suppressPadJumpLatched",!1);this.dom=t,this.bind()}bind(){this.dom.addEventListener("keydown",t=>{this.keys[t.code]=!0,["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault()}),this.dom.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="KeyE"&&(this.lockPounce=!0)}),window.addEventListener("mousemove",t=>{this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY}),window.addEventListener("wheel",t=>{this.wheelDelta+=Math.sign(t.deltaY)},{passive:!0}),window.addEventListener("gamepadconnected",t=>{const e=t.gamepad;this.gpIndex<0&&(this.gpIndex=e.index)}),window.addEventListener("gamepaddisconnected",t=>{const e=t.gamepad;this.gpIndex===e.index&&(this.gpIndex=-1)})}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}consumeWheelDelta(){const t=this.wheelDelta;return this.wheelDelta=0,t}consumeLockPounce(){const t=this.lockPounce;return this.lockPounce=!1,t}get forward(){return(this.keys.KeyW?1:0)+(this.keys.ArrowUp?1:0)+Math.max(0,this.gpMoveY)}get backward(){return(this.keys.KeyS?1:0)+(this.keys.ArrowDown?1:0)+Math.max(0,-this.gpMoveY)}get left(){return(this.keys.KeyA?1:0)+(this.keys.ArrowLeft?1:0)+Math.max(0,-this.gpMoveX)}get right(){return(this.keys.KeyD?1:0)+(this.keys.ArrowRight?1:0)+Math.max(0,this.gpMoveX)}get jump(){const t=!!this.keys.Space,e=this.isPadButton(0)&&!this.suppressPadJumpLatched;return t||e}get run(){const t=this.getPadButtonValue(7)>.5||this.isPadButton(5);return!!this.keys.ShiftLeft||!!this.keys.ShiftRight||t}get sneak(){const t=this.getPadButtonValue(6)>.5||this.isPadButton(4);return!!this.keys.ControlLeft||!!this.keys.ControlRight||t}get restart(){return!!this.keys.KeyR||this.padRestart}get next(){return!!this.keys.KeyN||this.padNext}updateGamepad(t=0){const e=navigator.getGamepads?navigator.getGamepads():[];let n=null;if(this.gpIndex>=0&&(n=e[this.gpIndex]||null),!n){for(const g of e)if(g){n=g,this.gpIndex=g.index;break}}if(!n)return;const i=n.axes||[],s=this.gpDeadzone,o=g=>Math.abs(g)<s?0:(g-Math.sign(g)*s)/(1-s),a=o(i[0]||0),c=o(i[1]||0),l=o(i[2]||0),h=o(i[3]||0);this.gpMoveX=a,this.gpMoveY=-c;const d=25*this.sensitivity;this.mouseDelta.x+=l*d,this.mouseDelta.y+=h*d;const u=this.isPadButton(12),f=this.isPadButton(13);u&&(this.wheelDelta-=1),f&&(this.wheelDelta+=1),(this.justPressed(2)||this.justPressed(1))&&(this.lockPounce=!0),this.padRestart=this.justPressed(8),this.padNext=this.justPressed(9),this.padAccept=this.justPressed(0);const x=n.buttons&&n.buttons[0],p=!!(typeof x=="object"?x.pressed:x);this.suppressPadJumpLatched&&!p&&(this.suppressPadJumpLatched=!1),this.gpPrevButtons=(n.buttons||[]).map(g=>typeof g=="object"?g.pressed:!!g)}isPadButton(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.pressed:!!i:!1}getPadButtonValue(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return 0;const i=n.buttons&&n.buttons[t];return i?typeof i=="object"?i.value??(i.pressed?1:0):i?1:0:0}justPressed(t){const e=navigator.getGamepads?navigator.getGamepads():[],n=this.gpIndex>=0&&e[this.gpIndex]||null;if(!n)return!1;const i=n.buttons&&n.buttons[t],s=typeof i=="object"?i.pressed:!!i,o=this.gpPrevButtons[t]||!1;return s&&!o}consumePadAccept(){const t=this.padAccept;return this.padAccept=!1,t}suppressPadJumpOnce(){this.suppressPadJumpLatched=!0}}const Sn={setLevel(r){const t=document.getElementById("level");t&&(t.textContent=String(r))},setCaught(r){const t=document.getElementById("caught");t&&(t.textContent=String(r))},setRequired(r){const t=document.getElementById("required");t&&(t.textContent=String(r))},setRemaining(r){const t=document.getElementById("remaining");t&&(t.textContent=String(r))},setState(r){const t=document.getElementById("state");t&&(t.textContent=r)},setFPS(r){const t=document.getElementById("fps");t&&(t.textContent=r.toFixed(0))},setRoomType(r){const t=document.getElementById("roomType");t&&(t.textContent=r)},showBanner(r){const t=document.getElementById("banner");t&&(t.innerHTML=r,t.style.display="block")},hideBanner(){const r=document.getElementById("banner");r&&(r.style.display="none")}},PM=new URL("/cat-mouse-hunter/assets/mouse-squeek-BdNs5kc5.wav",import.meta.url).toString(),LM=new URL("/cat-mouse-hunter/assets/mouse-die-BT5vEi1c.wav",import.meta.url).toString(),IM=new URL("/cat-mouse-hunter/assets/cat-trill-BzlkgHaC.wav",import.meta.url).toString(),DM=new URL("/cat-mouse-hunter/assets/cat-pur-DlHdAjg8.wav",import.meta.url).toString();class UM{constructor(){Mt(this,"ctx",null);Mt(this,"master",null);Mt(this,"unlocked",!1);Mt(this,"buffers",new Map);Mt(this,"loopSrc",null)}ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination)}}resume(){this.ensure(),this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.unlocked=!0}boop(){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(660,t+.09),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.2,t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.12),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.14)}async loadBuffer(t){if(this.ensure(),!this.ctx)return null;if(this.buffers.has(t))return this.buffers.get(t);try{const n=await(await fetch(t)).arrayBuffer(),i=await this.ctx.decodeAudioData(n);return this.buffers.set(t,i),i}catch{return null}}async playSample(t,e=1,n=1){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;const i=new URL(t,import.meta.url).toString(),s=await this.loadBuffer(i);if(!s)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=s,a.playbackRate.value=n;const c=this.ctx.createGain();c.gain.value=e,a.connect(c),c.connect(this.master),a.start(o)}mouseSqueek(){this.playSample(PM,.45,1)}mouseDie(){this.playSample(LM,1,1)}catTrill(){this.playSample(IM,.12,1)}async startCatPurr(t=.45){if(this.ensure(),!this.ctx||!this.master||!this.unlocked)return;if(this.loopSrc&&this.loopSrc.key==="cat-purr"){this.loopSrc.gain.gain.value=t;return}const e=await this.loadBuffer(DM);if(!e)return;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const i=this.ctx.createGain();i.gain.value=t,n.connect(i),i.connect(this.master),n.start(),this.loopSrc={key:"cat-purr",src:n,gain:i}}stopCatPurr(){if(!(!this.ctx||!this.loopSrc)){try{this.loopSrc.src.stop()}catch{}try{this.loopSrc.src.disconnect(),this.loopSrc.gain.disconnect()}catch{}this.loopSrc=null}}}let Ta=null;function NM(){if(!Ta){const r=new URL("/cat-mouse-hunter/assets/star-cropped-CgZ1Ql_d.png",import.meta.url).toString();Ta=new Promise((t,e)=>{new yo().load(r,n=>{try{n.colorSpace=ve??Nn}catch{}t(n)},void 0,n=>e(n))})}return Ta}class FM{constructor(t,e){Mt(this,"particles",[]);Mt(this,"materialBase",null);Mt(this,"maxParticles",400);Mt(this,"warmSprite",null);Mt(this,"_pendingPrewarm",!1);this.world=t,this.scene=e,NM().then(n=>{this.materialBase=new iu({map:n,transparent:!0,depthWrite:!1,opacity:1,blending:Ii}),this._pendingPrewarm&&(this._pendingPrewarm=!1,this.prewarm())})}prewarm(){if(this.warmSprite)return;if(!this.materialBase){this._pendingPrewarm=!0;return}const t=this.materialBase.clone();t.opacity=0;const e=new zl(t);e.renderOrder=-1,e.position.set(0,-10,0),e.scale.set(.1,.1,1),e.visible=!0,this.scene.add(e),this.warmSprite=e}clear(){var t,e,n,i;for(const s of this.particles)this.scene.remove(s.sprite),(e=(t=s.sprite.material).dispose)==null||e.call(t),this.world.removeBody(s.body);this.particles.length=0,this.warmSprite&&(this.scene.remove(this.warmSprite),(i=(n=this.warmSprite.material).dispose)==null||i.call(n),this.warmSprite=null)}spawn(t,e=16){if(!this.materialBase||this.particles.length>=this.maxParticles)return;const n=Math.max(0,this.maxParticles-this.particles.length),i=Math.min(e,n);for(let s=0;s<i;s++){const o=this.materialBase.clone();o.opacity=1;const a=new zl(o),c=.18+Math.random()*.12;a.scale.set(c,c,1),a.position.set(t.x,Math.max(.1,t.y)+.1,t.z),this.scene.add(a);const l=new So(c*.25),h=new wt({mass:.02,shape:l});h.position.set(a.position.x,a.position.y,a.position.z),h.linearDamping=.15,h.angularDamping=.2;const d=Math.random()*Math.PI*2,u=1+Math.random()*1,f=(1+Math.random()*1.2)*5;h.velocity.set(Math.sin(d)*u,f,Math.cos(d)*u),h.angularVelocity.set((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),this.world.addBody(h);const m=1.2+Math.random()*.6;this.particles.push({body:h,sprite:a,life:m,total:m})}}update(t){var e,n;if(this.particles.length!==0)for(let i=this.particles.length-1;i>=0;i--){const s=this.particles[i];s.life-=t,s.sprite.position.set(s.body.position.x,s.body.position.y,s.body.position.z);const o=Math.max(0,s.life)/s.total,a=o*o;s.sprite.material.opacity=a,(s.life<=0||s.body.position.y<-1||s.sprite.material.opacity<=.01)&&(this.scene.remove(s.sprite),(n=(e=s.sprite.material).dispose)==null||n.call(e),this.world.removeBody(s.body),this.particles.splice(i,1))}}}const zM=document.getElementById("app"),Cs=new nu({antialias:!0});Cs.setSize(window.innerWidth,window.innerHeight);Cs.shadowMap.enabled=!0;zM.appendChild(Cs.domElement);const ti=new cx;ti.background=new kt(2240570);const rr=new Ze(60,window.innerWidth/window.innerHeight,.1,1e3);rr.position.set(0,2.8,4.2);const BM=new qx(16777215,4478310,.6);ti.add(BM);const gi=new du(16777215,.9);gi.position.set(10,15,8);gi.castShadow=!0;gi.shadow.mapSize.set(2048,2048);gi.shadow.camera.left=-25;gi.shadow.camera.right=25;gi.shadow.camera.top=25;gi.shadow.camera.bottom=-25;ti.add(gi);const xs=ky(),Zn=new CM(document),_s=new UM,vs=Cs.domElement;vs.style.outline="none";vs.tabIndex=0;vs.addEventListener("click",()=>{document.pointerLockElement!==vs&&vs.requestPointerLock(),_s.resume()});document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===vs,t=document.getElementById("lockHint");t&&(t.style.display=r?"none":"block")});const Ra=document.getElementById("sensitivity"),Eh=document.getElementById("sensitivityLabel");if(Ra){const r=()=>{const t=Number(Ra.value);Zn.sensitivity=isNaN(t)?1:t,Eh&&(Eh.textContent=`${Zn.sensitivity.toFixed(2)}x`)};r(),Ra.addEventListener("input",r)}const qe=new RM(xs,ti);let js=1;const ao=new FM(xs,ti);ao.prewarm();function bh(r){const t=4+Math.floor(r*1.5),e=10+Math.min(20,Math.floor(r*2)),n=e/10,i=e*2*(e*2),s=Math.min(14,3+Math.floor(r*.8)+Math.floor((n-1)*3)),o=s/i;return{miceRequired:Math.min(t,4+r),mouseCount:t,mouseSpeed:2.5+r*.2,roomCount:s,clutterCount:Math.floor((20+r*5)*n*n),houseHalfSize:e,roomDensity:o}}let $n,Li=[],Ci=0,co=0,lo=0,jr=!1;function qa(r){qe.generate(bh(r)),ao.clear(),_s.stopCatPurr(),$n&&(ti.remove($n.mesh),xs.removeBody($n.body));const t=qe.spawnPoints[Math.floor(Math.random()*qe.spawnPoints.length)]||new R(0,0,0);$n=new wM(xs,ti,Zn,t.clone()),Sn.hideBanner(),jr=!1;for(const s of Li)s.alive&&s.kill();Li=[];const e=bh(r);co=e.miceRequired;const n=5;qe.spawnPoints.length>0&&(qe.spawnPoints=qe.spawnPoints.filter(s=>s.distanceTo(t)>=n));const i=s=>{if(qe.spawnPoints.length>0)return qe.spawnPoints[Math.floor(Math.random()*qe.spawnPoints.length)].clone();for(let a=0;a<40;a++){const c=qe.roomBoxes[Math.floor(Math.random()*qe.roomBoxes.length)],l=.6,h=Se.lerp(c.min.x+l,c.max.x-l,Math.random()),d=Se.lerp(c.min.z+l,c.max.z-l,Math.random()),u=new R(h,0,d);if(u.distanceTo(s)>=n)return u}const o=new Dt(Math.random()-.5,Math.random()-.5).normalize();return new R(s.x+o.x*(n+1),0,s.z+o.y*(n+1))};for(let s=0;s<e.mouseCount;s++){const o=i(t),a=new bM(xs,ti,o.clone(),qe.worldBounds.clone(),qe.mouseHoles,_s);a.speed=e.mouseSpeed,Li.push(a)}Ci=0,lo=Li.length,Sn.setLevel(js),Sn.setCaught(Ci),Sn.setRequired(co),Sn.setRemaining(lo)}qa(js);window.addEventListener("resize",()=>{rr.aspect=window.innerWidth/window.innerHeight,rr.updateProjectionMatrix(),Cs.setSize(window.innerWidth,window.innerHeight)});let Ah=performance.now(),qr=0,Ca=0,Pa=0;function Uu(){const r=performance.now(),t=Math.min(.033,(r-Ah)/1e3);Ah=r,xs.step(1/60,t,3),Zn.updateGamepad(t),jr&&Zn.padAccept&&Zn.suppressPadJumpOnce();const e=new R($n.body.position.x,0,$n.body.position.z);qe.update(t,e),ao.update(t),$n.update(t,rr,Li.filter(i=>i.alive).map(i=>i.mesh),qe.meshes);const n=e.clone();for(const i of Li)i.update(t,n);for(const i of Li){if(!i.alive)continue;if(i.mesh.position.distanceTo($n.mesh.position)<.7){const o=i.mesh.position.clone();ao.spawn(o,18+Math.floor(Math.random()*10)),i.kill(),_s.mouseDie(),_s.catTrill(),Ci++,lo--,Sn.setCaught(Ci),Sn.setRemaining(lo),Ci>=co&&!jr&&(Sn.showBanner(`<h2>House cleared!</h2><p>You caught ${Ci} mice.</p><p>Press <b>N</b> for the next house.</p>`),jr=!0,_s.startCatPurr())}}if(Zn.restart&&qa(js),(Zn.next||Zn.consumePadAccept())&&Ci>=co&&(js++,qa(js)),Sn.setState($n.state),Cs.render(ti,rr),qr+=t,Ca++,Pa+=t,Pa>=.25){const i=qe.getRoomTypeAtPosition(e);Sn.setRoomType(i),Pa=0}if(qr>=.5){const i=Ca/qr;Sn.setFPS(i),qr=0,Ca=0}requestAnimationFrame(Uu)}Uu();
