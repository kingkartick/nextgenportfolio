(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const M of m.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&c(M)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=Math.PI/180,If=180/Math.PI;function il(){const u=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0,c=Math.random()*4294967295|0;return(zn[u&255]+zn[u>>8&255]+zn[u>>16&255]+zn[u>>24&255]+"-"+zn[i&255]+zn[i>>8&255]+"-"+zn[i>>16&15|64]+zn[i>>24&255]+"-"+zn[s&63|128]+zn[s>>8&255]+"-"+zn[s>>16&255]+zn[s>>24&255]+zn[c&255]+zn[c>>8&255]+zn[c>>16&255]+zn[c>>24&255]).toLowerCase()}function nr(u,i,s){return Math.max(i,Math.min(s,u))}function A1(u,i){return(u%i+i)%i}function Jd(u,i,s){return(1-s)*u+s*i}function Yc(u,i){switch(i.constructor){case Float32Array:return u;case Uint32Array:return u/4294967295;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int32Array:return Math.max(u/2147483647,-1);case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function ir(u,i){switch(i.constructor){case Float32Array:return u;case Uint32Array:return Math.round(u*4294967295);case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int32Array:return Math.round(u*2147483647);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}const w1="164",R1=0,s_=1,C1=2,N0=1,P1=2,ps=3,gs=0,rr=1,br=2,Xs=0,Xo=1,a_=2,o_=3,c_=4,L1=5,Fa=100,I1=101,D1=102,U1=103,N1=104,F1=200,O1=201,B1=202,z1=203,Df=204,Uf=205,V1=206,G1=207,H1=208,k1=209,W1=210,X1=211,q1=212,Y1=213,Z1=214,$1=0,K1=1,J1=2,au=3,j1=4,Q1=5,eT=6,tT=7,F0=0,iT=1,nT=2,qs=0,rT=1,sT=2,aT=3,oT=4,cT=5,lT=6,hT=7,O0=300,Zo=301,$o=302,Nf=303,Ff=304,du=306,Of=1e3,Ba=1001,Bf=1002,Er=1003,uT=1004,Fh=1005,gr=1006,jd=1007,za=1008,Zs=1009,dT=1010,fT=1011,B0=1012,z0=1013,Ko=1014,ks=1015,fu=1016,V0=1017,G0=1018,nl=1020,pT=35902,mT=1021,gT=1022,Xr=1023,_T=1024,xT=1025,qo=1026,el=1027,vT=1028,H0=1029,yT=1030,k0=1031,W0=1033,Qd=33776,ef=33777,tf=33778,nf=33779,l_=35840,h_=35841,u_=35842,d_=35843,f_=36196,p_=37492,m_=37496,g_=37808,__=37809,x_=37810,v_=37811,y_=37812,M_=37813,S_=37814,b_=37815,E_=37816,T_=37817,A_=37818,w_=37819,R_=37820,C_=37821,rf=36492,P_=36494,L_=36495,MT=36283,I_=36284,D_=36285,U_=36286,ST=3200,bT=3201,ET=0,TT=1,Hs="",Hr="srgb",$s="srgb-linear",Gf="display-p3",pu="display-p3-linear",ou="linear",tn="srgb",cu="rec709",lu="p3",wo=7680,N_=519,AT=512,wT=513,RT=514,X0=515,CT=516,PT=517,LT=518,IT=519,F_=35044,O_="300 es",ms=2e3,hu=2001;class Qo{addEventListener(i,s){this._listeners===void 0&&(this._listeners={});const c=this._listeners;c[i]===void 0&&(c[i]=[]),c[i].indexOf(s)===-1&&c[i].push(s)}hasEventListener(i,s){if(this._listeners===void 0)return!1;const c=this._listeners;return c[i]!==void 0&&c[i].indexOf(s)!==-1}removeEventListener(i,s){if(this._listeners===void 0)return;const d=this._listeners[i];if(d!==void 0){const m=d.indexOf(s);m!==-1&&d.splice(m,1)}}dispatchEvent(i){if(this._listeners===void 0)return;const c=this._listeners[i.type];if(c!==void 0){i.target=this;const d=c.slice(0);for(let m=0,M=d.length;m<M;m++)d[m].call(this,i);i.target=null}}}class Oi{constructor(i=0,s=0){Oi.prototype.isVector2=!0,this.x=i,this.y=s}get width(){return this.x}set width(i){this.x=i}get height(){return this.y}set height(i){this.y=i}set(i,s){return this.x=i,this.y=s,this}setScalar(i){return this.x=i,this.y=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setComponent(i,s){switch(i){case 0:this.x=s;break;case 1:this.y=s;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y)}copy(i){return this.x=i.x,this.y=i.y,this}add(i){return this.x+=i.x,this.y+=i.y,this}addScalar(i){return this.x+=i,this.y+=i,this}addVectors(i,s){return this.x=i.x+s.x,this.y=i.y+s.y,this}addScaledVector(i,s){return this.x+=i.x*s,this.y+=i.y*s,this}sub(i){return this.x-=i.x,this.y-=i.y,this}subScalar(i){return this.x-=i,this.y-=i,this}subVectors(i,s){return this.x=i.x-s.x,this.y=i.y-s.y,this}multiply(i){return this.x*=i.x,this.y*=i.y,this}multiplyScalar(i){return this.x*=i,this.y*=i,this}divide(i){return this.x/=i.x,this.y/=i.y,this}divideScalar(i){return this.multiplyScalar(1/i)}applyMatrix3(i){const s=this.x,c=this.y,d=i.elements;return this.x=d[0]*s+d[3]*c+d[6],this.y=d[1]*s+d[4]*c+d[7],this}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this}clamp(i,s){return this.x=Math.max(i.x,Math.min(s.x,this.x)),this.y=Math.max(i.y,Math.min(s.y,this.y)),this}clampScalar(i,s){return this.x=Math.max(i,Math.min(s,this.x)),this.y=Math.max(i,Math.min(s,this.y)),this}clampLength(i,s){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(i,Math.min(s,c)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(i){return this.x*i.x+this.y*i.y}cross(i){return this.x*i.y-this.y*i.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(i){const s=Math.sqrt(this.lengthSq()*i.lengthSq());if(s===0)return Math.PI/2;const c=this.dot(i)/s;return Math.acos(nr(c,-1,1))}distanceTo(i){return Math.sqrt(this.distanceToSquared(i))}distanceToSquared(i){const s=this.x-i.x,c=this.y-i.y;return s*s+c*c}manhattanDistanceTo(i){return Math.abs(this.x-i.x)+Math.abs(this.y-i.y)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,s){return this.x+=(i.x-this.x)*s,this.y+=(i.y-this.y)*s,this}lerpVectors(i,s,c){return this.x=i.x+(s.x-i.x)*c,this.y=i.y+(s.y-i.y)*c,this}equals(i){return i.x===this.x&&i.y===this.y}fromArray(i,s=0){return this.x=i[s],this.y=i[s+1],this}toArray(i=[],s=0){return i[s]=this.x,i[s+1]=this.y,i}fromBufferAttribute(i,s){return this.x=i.getX(s),this.y=i.getY(s),this}rotateAround(i,s){const c=Math.cos(s),d=Math.sin(s),m=this.x-i.x,M=this.y-i.y;return this.x=m*c-M*d+i.x,this.y=m*d+M*c+i.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(i,s,c,d,m,M,y,T,A){Ti.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],i!==void 0&&this.set(i,s,c,d,m,M,y,T,A)}set(i,s,c,d,m,M,y,T,A){const R=this.elements;return R[0]=i,R[1]=d,R[2]=y,R[3]=s,R[4]=m,R[5]=T,R[6]=c,R[7]=M,R[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(i){const s=this.elements,c=i.elements;return s[0]=c[0],s[1]=c[1],s[2]=c[2],s[3]=c[3],s[4]=c[4],s[5]=c[5],s[6]=c[6],s[7]=c[7],s[8]=c[8],this}extractBasis(i,s,c){return i.setFromMatrix3Column(this,0),s.setFromMatrix3Column(this,1),c.setFromMatrix3Column(this,2),this}setFromMatrix4(i){const s=i.elements;return this.set(s[0],s[4],s[8],s[1],s[5],s[9],s[2],s[6],s[10]),this}multiply(i){return this.multiplyMatrices(this,i)}premultiply(i){return this.multiplyMatrices(i,this)}multiplyMatrices(i,s){const c=i.elements,d=s.elements,m=this.elements,M=c[0],y=c[3],T=c[6],A=c[1],R=c[4],L=c[7],I=c[2],N=c[5],G=c[8],W=d[0],P=d[3],C=d[6],$=d[1],X=d[4],ee=d[7],xe=d[2],se=d[5],ae=d[8];return m[0]=M*W+y*$+T*xe,m[3]=M*P+y*X+T*se,m[6]=M*C+y*ee+T*ae,m[1]=A*W+R*$+L*xe,m[4]=A*P+R*X+L*se,m[7]=A*C+R*ee+L*ae,m[2]=I*W+N*$+G*xe,m[5]=I*P+N*X+G*se,m[8]=I*C+N*ee+G*ae,this}multiplyScalar(i){const s=this.elements;return s[0]*=i,s[3]*=i,s[6]*=i,s[1]*=i,s[4]*=i,s[7]*=i,s[2]*=i,s[5]*=i,s[8]*=i,this}determinant(){const i=this.elements,s=i[0],c=i[1],d=i[2],m=i[3],M=i[4],y=i[5],T=i[6],A=i[7],R=i[8];return s*M*R-s*y*A-c*m*R+c*y*T+d*m*A-d*M*T}invert(){const i=this.elements,s=i[0],c=i[1],d=i[2],m=i[3],M=i[4],y=i[5],T=i[6],A=i[7],R=i[8],L=R*M-y*A,I=y*T-R*m,N=A*m-M*T,G=s*L+c*I+d*N;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);const W=1/G;return i[0]=L*W,i[1]=(d*A-R*c)*W,i[2]=(y*c-d*M)*W,i[3]=I*W,i[4]=(R*s-d*T)*W,i[5]=(d*m-y*s)*W,i[6]=N*W,i[7]=(c*T-A*s)*W,i[8]=(M*s-c*m)*W,this}transpose(){let i;const s=this.elements;return i=s[1],s[1]=s[3],s[3]=i,i=s[2],s[2]=s[6],s[6]=i,i=s[5],s[5]=s[7],s[7]=i,this}getNormalMatrix(i){return this.setFromMatrix4(i).invert().transpose()}transposeIntoArray(i){const s=this.elements;return i[0]=s[0],i[1]=s[3],i[2]=s[6],i[3]=s[1],i[4]=s[4],i[5]=s[7],i[6]=s[2],i[7]=s[5],i[8]=s[8],this}setUvTransform(i,s,c,d,m,M,y){const T=Math.cos(m),A=Math.sin(m);return this.set(c*T,c*A,-c*(T*M+A*y)+M+i,-d*A,d*T,-d*(-A*M+T*y)+y+s,0,0,1),this}scale(i,s){return this.premultiply(sf.makeScale(i,s)),this}rotate(i){return this.premultiply(sf.makeRotation(-i)),this}translate(i,s){return this.premultiply(sf.makeTranslation(i,s)),this}makeTranslation(i,s){return i.isVector2?this.set(1,0,i.x,0,1,i.y,0,0,1):this.set(1,0,i,0,1,s,0,0,1),this}makeRotation(i){const s=Math.cos(i),c=Math.sin(i);return this.set(s,-c,0,c,s,0,0,0,1),this}makeScale(i,s){return this.set(i,0,0,0,s,0,0,0,1),this}equals(i){const s=this.elements,c=i.elements;for(let d=0;d<9;d++)if(s[d]!==c[d])return!1;return!0}fromArray(i,s=0){for(let c=0;c<9;c++)this.elements[c]=i[c+s];return this}toArray(i=[],s=0){const c=this.elements;return i[s]=c[0],i[s+1]=c[1],i[s+2]=c[2],i[s+3]=c[3],i[s+4]=c[4],i[s+5]=c[5],i[s+6]=c[6],i[s+7]=c[7],i[s+8]=c[8],i}clone(){return new this.constructor().fromArray(this.elements)}}const sf=new Ti;function q0(u){for(let i=u.length-1;i>=0;--i)if(u[i]>=65535)return!0;return!1}function tl(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function DT(){const u=tl("canvas");return u.style.display="block",u}const B_={};function UT(u){u in B_||(B_[u]=!0,console.warn(u))}const z_=new Ti().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),V_=new Ti().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oh={[$s]:{transfer:ou,primaries:cu,toReference:u=>u,fromReference:u=>u},[Hr]:{transfer:tn,primaries:cu,toReference:u=>u.convertSRGBToLinear(),fromReference:u=>u.convertLinearToSRGB()},[pu]:{transfer:ou,primaries:lu,toReference:u=>u.applyMatrix3(V_),fromReference:u=>u.applyMatrix3(z_)},[Gf]:{transfer:tn,primaries:lu,toReference:u=>u.convertSRGBToLinear().applyMatrix3(V_),fromReference:u=>u.applyMatrix3(z_).convertLinearToSRGB()}},NT=new Set([$s,pu]),Ki={enabled:!0,_workingColorSpace:$s,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(u){if(!NT.has(u))throw new Error(`Unsupported working color space, "${u}".`);this._workingColorSpace=u},convert:function(u,i,s){if(this.enabled===!1||i===s||!i||!s)return u;const c=Oh[i].toReference,d=Oh[s].fromReference;return d(c(u))},fromWorkingColorSpace:function(u,i){return this.convert(u,this._workingColorSpace,i)},toWorkingColorSpace:function(u,i){return this.convert(u,i,this._workingColorSpace)},getPrimaries:function(u){return Oh[u].primaries},getTransfer:function(u){return u===Hs?ou:Oh[u].transfer}};function Yo(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function af(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}let Ro;class FT{static getDataURL(i){if(/^data:/i.test(i.src)||typeof HTMLCanvasElement>"u")return i.src;let s;if(i instanceof HTMLCanvasElement)s=i;else{Ro===void 0&&(Ro=tl("canvas")),Ro.width=i.width,Ro.height=i.height;const c=Ro.getContext("2d");i instanceof ImageData?c.putImageData(i,0,0):c.drawImage(i,0,0,i.width,i.height),s=Ro}return s.width>2048||s.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",i),s.toDataURL("image/jpeg",.6)):s.toDataURL("image/png")}static sRGBToLinear(i){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){const s=tl("canvas");s.width=i.width,s.height=i.height;const c=s.getContext("2d");c.drawImage(i,0,0,i.width,i.height);const d=c.getImageData(0,0,i.width,i.height),m=d.data;for(let M=0;M<m.length;M++)m[M]=Yo(m[M]/255)*255;return c.putImageData(d,0,0),s}else if(i.data){const s=i.data.slice(0);for(let c=0;c<s.length;c++)s instanceof Uint8Array||s instanceof Uint8ClampedArray?s[c]=Math.floor(Yo(s[c]/255)*255):s[c]=Yo(s[c]);return{data:s,width:i.width,height:i.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),i}}let OT=0;class Y0{constructor(i=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=il(),this.data=i,this.dataReady=!0,this.version=0}set needsUpdate(i){i===!0&&this.version++}toJSON(i){const s=i===void 0||typeof i=="string";if(!s&&i.images[this.uuid]!==void 0)return i.images[this.uuid];const c={uuid:this.uuid,url:""},d=this.data;if(d!==null){let m;if(Array.isArray(d)){m=[];for(let M=0,y=d.length;M<y;M++)d[M].isDataTexture?m.push(of(d[M].image)):m.push(of(d[M]))}else m=of(d);c.url=m}return s||(i.images[this.uuid]=c),c}}function of(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?FT.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;class Hn extends Qo{constructor(i=Hn.DEFAULT_IMAGE,s=Hn.DEFAULT_MAPPING,c=Ba,d=Ba,m=gr,M=za,y=Xr,T=Zs,A=Hn.DEFAULT_ANISOTROPY,R=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=il(),this.name="",this.source=new Y0(i),this.mipmaps=[],this.mapping=s,this.channel=0,this.wrapS=c,this.wrapT=d,this.magFilter=m,this.minFilter=M,this.anisotropy=A,this.format=y,this.internalFormat=null,this.type=T,this.offset=new Oi(0,0),this.repeat=new Oi(1,1),this.center=new Oi(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ti,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=R,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(i=null){this.source.data=i}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(i){return this.name=i.name,this.source=i.source,this.mipmaps=i.mipmaps.slice(0),this.mapping=i.mapping,this.channel=i.channel,this.wrapS=i.wrapS,this.wrapT=i.wrapT,this.magFilter=i.magFilter,this.minFilter=i.minFilter,this.anisotropy=i.anisotropy,this.format=i.format,this.internalFormat=i.internalFormat,this.type=i.type,this.offset.copy(i.offset),this.repeat.copy(i.repeat),this.center.copy(i.center),this.rotation=i.rotation,this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrix.copy(i.matrix),this.generateMipmaps=i.generateMipmaps,this.premultiplyAlpha=i.premultiplyAlpha,this.flipY=i.flipY,this.unpackAlignment=i.unpackAlignment,this.colorSpace=i.colorSpace,this.userData=JSON.parse(JSON.stringify(i.userData)),this.needsUpdate=!0,this}toJSON(i){const s=i===void 0||typeof i=="string";if(!s&&i.textures[this.uuid]!==void 0)return i.textures[this.uuid];const c={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(i).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(c.userData=this.userData),s||(i.textures[this.uuid]=c),c}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(i){if(this.mapping!==O0)return i;if(i.applyMatrix3(this.matrix),i.x<0||i.x>1)switch(this.wrapS){case Of:i.x=i.x-Math.floor(i.x);break;case Ba:i.x=i.x<0?0:1;break;case Bf:Math.abs(Math.floor(i.x)%2)===1?i.x=Math.ceil(i.x)-i.x:i.x=i.x-Math.floor(i.x);break}if(i.y<0||i.y>1)switch(this.wrapT){case Of:i.y=i.y-Math.floor(i.y);break;case Ba:i.y=i.y<0?0:1;break;case Bf:Math.abs(Math.floor(i.y)%2)===1?i.y=Math.ceil(i.y)-i.y:i.y=i.y-Math.floor(i.y);break}return this.flipY&&(i.y=1-i.y),i}set needsUpdate(i){i===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(i){i===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=O0;Hn.DEFAULT_ANISOTROPY=1;class sn{constructor(i=0,s=0,c=0,d=1){sn.prototype.isVector4=!0,this.x=i,this.y=s,this.z=c,this.w=d}get width(){return this.z}set width(i){this.z=i}get height(){return this.w}set height(i){this.w=i}set(i,s,c,d){return this.x=i,this.y=s,this.z=c,this.w=d,this}setScalar(i){return this.x=i,this.y=i,this.z=i,this.w=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setZ(i){return this.z=i,this}setW(i){return this.w=i,this}setComponent(i,s){switch(i){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;case 3:this.w=s;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(i){return this.x=i.x,this.y=i.y,this.z=i.z,this.w=i.w!==void 0?i.w:1,this}add(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this.w+=i.w,this}addScalar(i){return this.x+=i,this.y+=i,this.z+=i,this.w+=i,this}addVectors(i,s){return this.x=i.x+s.x,this.y=i.y+s.y,this.z=i.z+s.z,this.w=i.w+s.w,this}addScaledVector(i,s){return this.x+=i.x*s,this.y+=i.y*s,this.z+=i.z*s,this.w+=i.w*s,this}sub(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this.w-=i.w,this}subScalar(i){return this.x-=i,this.y-=i,this.z-=i,this.w-=i,this}subVectors(i,s){return this.x=i.x-s.x,this.y=i.y-s.y,this.z=i.z-s.z,this.w=i.w-s.w,this}multiply(i){return this.x*=i.x,this.y*=i.y,this.z*=i.z,this.w*=i.w,this}multiplyScalar(i){return this.x*=i,this.y*=i,this.z*=i,this.w*=i,this}applyMatrix4(i){const s=this.x,c=this.y,d=this.z,m=this.w,M=i.elements;return this.x=M[0]*s+M[4]*c+M[8]*d+M[12]*m,this.y=M[1]*s+M[5]*c+M[9]*d+M[13]*m,this.z=M[2]*s+M[6]*c+M[10]*d+M[14]*m,this.w=M[3]*s+M[7]*c+M[11]*d+M[15]*m,this}divideScalar(i){return this.multiplyScalar(1/i)}setAxisAngleFromQuaternion(i){this.w=2*Math.acos(i.w);const s=Math.sqrt(1-i.w*i.w);return s<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=i.x/s,this.y=i.y/s,this.z=i.z/s),this}setAxisAngleFromRotationMatrix(i){let s,c,d,m;const T=i.elements,A=T[0],R=T[4],L=T[8],I=T[1],N=T[5],G=T[9],W=T[2],P=T[6],C=T[10];if(Math.abs(R-I)<.01&&Math.abs(L-W)<.01&&Math.abs(G-P)<.01){if(Math.abs(R+I)<.1&&Math.abs(L+W)<.1&&Math.abs(G+P)<.1&&Math.abs(A+N+C-3)<.1)return this.set(1,0,0,0),this;s=Math.PI;const X=(A+1)/2,ee=(N+1)/2,xe=(C+1)/2,se=(R+I)/4,ae=(L+W)/4,Ne=(G+P)/4;return X>ee&&X>xe?X<.01?(c=0,d=.707106781,m=.707106781):(c=Math.sqrt(X),d=se/c,m=ae/c):ee>xe?ee<.01?(c=.707106781,d=0,m=.707106781):(d=Math.sqrt(ee),c=se/d,m=Ne/d):xe<.01?(c=.707106781,d=.707106781,m=0):(m=Math.sqrt(xe),c=ae/m,d=Ne/m),this.set(c,d,m,s),this}let $=Math.sqrt((P-G)*(P-G)+(L-W)*(L-W)+(I-R)*(I-R));return Math.abs($)<.001&&($=1),this.x=(P-G)/$,this.y=(L-W)/$,this.z=(I-R)/$,this.w=Math.acos((A+N+C-1)/2),this}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this.z=Math.min(this.z,i.z),this.w=Math.min(this.w,i.w),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this.z=Math.max(this.z,i.z),this.w=Math.max(this.w,i.w),this}clamp(i,s){return this.x=Math.max(i.x,Math.min(s.x,this.x)),this.y=Math.max(i.y,Math.min(s.y,this.y)),this.z=Math.max(i.z,Math.min(s.z,this.z)),this.w=Math.max(i.w,Math.min(s.w,this.w)),this}clampScalar(i,s){return this.x=Math.max(i,Math.min(s,this.x)),this.y=Math.max(i,Math.min(s,this.y)),this.z=Math.max(i,Math.min(s,this.z)),this.w=Math.max(i,Math.min(s,this.w)),this}clampLength(i,s){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(i,Math.min(s,c)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z+this.w*i.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,s){return this.x+=(i.x-this.x)*s,this.y+=(i.y-this.y)*s,this.z+=(i.z-this.z)*s,this.w+=(i.w-this.w)*s,this}lerpVectors(i,s,c){return this.x=i.x+(s.x-i.x)*c,this.y=i.y+(s.y-i.y)*c,this.z=i.z+(s.z-i.z)*c,this.w=i.w+(s.w-i.w)*c,this}equals(i){return i.x===this.x&&i.y===this.y&&i.z===this.z&&i.w===this.w}fromArray(i,s=0){return this.x=i[s],this.y=i[s+1],this.z=i[s+2],this.w=i[s+3],this}toArray(i=[],s=0){return i[s]=this.x,i[s+1]=this.y,i[s+2]=this.z,i[s+3]=this.w,i}fromBufferAttribute(i,s){return this.x=i.getX(s),this.y=i.getY(s),this.z=i.getZ(s),this.w=i.getW(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zT extends Qo{constructor(i=1,s=1,c={}){super(),this.isRenderTarget=!0,this.width=i,this.height=s,this.depth=1,this.scissor=new sn(0,0,i,s),this.scissorTest=!1,this.viewport=new sn(0,0,i,s);const d={width:i,height:s,depth:1};c=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},c);const m=new Hn(d,c.mapping,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.colorSpace);m.flipY=!1,m.generateMipmaps=c.generateMipmaps,m.internalFormat=c.internalFormat,this.textures=[];const M=c.count;for(let y=0;y<M;y++)this.textures[y]=m.clone(),this.textures[y].isRenderTargetTexture=!0;this.depthBuffer=c.depthBuffer,this.stencilBuffer=c.stencilBuffer,this.resolveDepthBuffer=c.resolveDepthBuffer,this.resolveStencilBuffer=c.resolveStencilBuffer,this.depthTexture=c.depthTexture,this.samples=c.samples}get texture(){return this.textures[0]}set texture(i){this.textures[0]=i}setSize(i,s,c=1){if(this.width!==i||this.height!==s||this.depth!==c){this.width=i,this.height=s,this.depth=c;for(let d=0,m=this.textures.length;d<m;d++)this.textures[d].image.width=i,this.textures[d].image.height=s,this.textures[d].image.depth=c;this.dispose()}this.viewport.set(0,0,i,s),this.scissor.set(0,0,i,s)}clone(){return new this.constructor().copy(this)}copy(i){this.width=i.width,this.height=i.height,this.depth=i.depth,this.scissor.copy(i.scissor),this.scissorTest=i.scissorTest,this.viewport.copy(i.viewport),this.textures.length=0;for(let c=0,d=i.textures.length;c<d;c++)this.textures[c]=i.textures[c].clone(),this.textures[c].isRenderTargetTexture=!0;const s=Object.assign({},i.texture.image);return this.texture.source=new Y0(s),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,i.depthTexture!==null&&(this.depthTexture=i.depthTexture.clone()),this.samples=i.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends zT{constructor(i=1,s=1,c={}){super(i,s,c),this.isWebGLRenderTarget=!0}}class Z0 extends Hn{constructor(i=null,s=1,c=1,d=1){super(null),this.isDataArrayTexture=!0,this.image={data:i,width:s,height:c,depth:d},this.magFilter=Er,this.minFilter=Er,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class VT extends Hn{constructor(i=null,s=1,c=1,d=1){super(null),this.isData3DTexture=!0,this.image={data:i,width:s,height:c,depth:d},this.magFilter=Er,this.minFilter=Er,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(i=0,s=0,c=0,d=1){this.isQuaternion=!0,this._x=i,this._y=s,this._z=c,this._w=d}static slerpFlat(i,s,c,d,m,M,y){let T=c[d+0],A=c[d+1],R=c[d+2],L=c[d+3];const I=m[M+0],N=m[M+1],G=m[M+2],W=m[M+3];if(y===0){i[s+0]=T,i[s+1]=A,i[s+2]=R,i[s+3]=L;return}if(y===1){i[s+0]=I,i[s+1]=N,i[s+2]=G,i[s+3]=W;return}if(L!==W||T!==I||A!==N||R!==G){let P=1-y;const C=T*I+A*N+R*G+L*W,$=C>=0?1:-1,X=1-C*C;if(X>Number.EPSILON){const xe=Math.sqrt(X),se=Math.atan2(xe,C*$);P=Math.sin(P*se)/xe,y=Math.sin(y*se)/xe}const ee=y*$;if(T=T*P+I*ee,A=A*P+N*ee,R=R*P+G*ee,L=L*P+W*ee,P===1-y){const xe=1/Math.sqrt(T*T+A*A+R*R+L*L);T*=xe,A*=xe,R*=xe,L*=xe}}i[s]=T,i[s+1]=A,i[s+2]=R,i[s+3]=L}static multiplyQuaternionsFlat(i,s,c,d,m,M){const y=c[d],T=c[d+1],A=c[d+2],R=c[d+3],L=m[M],I=m[M+1],N=m[M+2],G=m[M+3];return i[s]=y*G+R*L+T*N-A*I,i[s+1]=T*G+R*I+A*L-y*N,i[s+2]=A*G+R*N+y*I-T*L,i[s+3]=R*G-y*L-T*I-A*N,i}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get w(){return this._w}set w(i){this._w=i,this._onChangeCallback()}set(i,s,c,d){return this._x=i,this._y=s,this._z=c,this._w=d,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(i){return this._x=i.x,this._y=i.y,this._z=i.z,this._w=i.w,this._onChangeCallback(),this}setFromEuler(i,s=!0){const c=i._x,d=i._y,m=i._z,M=i._order,y=Math.cos,T=Math.sin,A=y(c/2),R=y(d/2),L=y(m/2),I=T(c/2),N=T(d/2),G=T(m/2);switch(M){case"XYZ":this._x=I*R*L+A*N*G,this._y=A*N*L-I*R*G,this._z=A*R*G+I*N*L,this._w=A*R*L-I*N*G;break;case"YXZ":this._x=I*R*L+A*N*G,this._y=A*N*L-I*R*G,this._z=A*R*G-I*N*L,this._w=A*R*L+I*N*G;break;case"ZXY":this._x=I*R*L-A*N*G,this._y=A*N*L+I*R*G,this._z=A*R*G+I*N*L,this._w=A*R*L-I*N*G;break;case"ZYX":this._x=I*R*L-A*N*G,this._y=A*N*L+I*R*G,this._z=A*R*G-I*N*L,this._w=A*R*L+I*N*G;break;case"YZX":this._x=I*R*L+A*N*G,this._y=A*N*L+I*R*G,this._z=A*R*G-I*N*L,this._w=A*R*L-I*N*G;break;case"XZY":this._x=I*R*L-A*N*G,this._y=A*N*L-I*R*G,this._z=A*R*G+I*N*L,this._w=A*R*L+I*N*G;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+M)}return s===!0&&this._onChangeCallback(),this}setFromAxisAngle(i,s){const c=s/2,d=Math.sin(c);return this._x=i.x*d,this._y=i.y*d,this._z=i.z*d,this._w=Math.cos(c),this._onChangeCallback(),this}setFromRotationMatrix(i){const s=i.elements,c=s[0],d=s[4],m=s[8],M=s[1],y=s[5],T=s[9],A=s[2],R=s[6],L=s[10],I=c+y+L;if(I>0){const N=.5/Math.sqrt(I+1);this._w=.25/N,this._x=(R-T)*N,this._y=(m-A)*N,this._z=(M-d)*N}else if(c>y&&c>L){const N=2*Math.sqrt(1+c-y-L);this._w=(R-T)/N,this._x=.25*N,this._y=(d+M)/N,this._z=(m+A)/N}else if(y>L){const N=2*Math.sqrt(1+y-c-L);this._w=(m-A)/N,this._x=(d+M)/N,this._y=.25*N,this._z=(T+R)/N}else{const N=2*Math.sqrt(1+L-c-y);this._w=(M-d)/N,this._x=(m+A)/N,this._y=(T+R)/N,this._z=.25*N}return this._onChangeCallback(),this}setFromUnitVectors(i,s){let c=i.dot(s)+1;return c<Number.EPSILON?(c=0,Math.abs(i.x)>Math.abs(i.z)?(this._x=-i.y,this._y=i.x,this._z=0,this._w=c):(this._x=0,this._y=-i.z,this._z=i.y,this._w=c)):(this._x=i.y*s.z-i.z*s.y,this._y=i.z*s.x-i.x*s.z,this._z=i.x*s.y-i.y*s.x,this._w=c),this.normalize()}angleTo(i){return 2*Math.acos(Math.abs(nr(this.dot(i),-1,1)))}rotateTowards(i,s){const c=this.angleTo(i);if(c===0)return this;const d=Math.min(1,s/c);return this.slerp(i,d),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(i){return this._x*i._x+this._y*i._y+this._z*i._z+this._w*i._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let i=this.length();return i===0?(this._x=0,this._y=0,this._z=0,this._w=1):(i=1/i,this._x=this._x*i,this._y=this._y*i,this._z=this._z*i,this._w=this._w*i),this._onChangeCallback(),this}multiply(i){return this.multiplyQuaternions(this,i)}premultiply(i){return this.multiplyQuaternions(i,this)}multiplyQuaternions(i,s){const c=i._x,d=i._y,m=i._z,M=i._w,y=s._x,T=s._y,A=s._z,R=s._w;return this._x=c*R+M*y+d*A-m*T,this._y=d*R+M*T+m*y-c*A,this._z=m*R+M*A+c*T-d*y,this._w=M*R-c*y-d*T-m*A,this._onChangeCallback(),this}slerp(i,s){if(s===0)return this;if(s===1)return this.copy(i);const c=this._x,d=this._y,m=this._z,M=this._w;let y=M*i._w+c*i._x+d*i._y+m*i._z;if(y<0?(this._w=-i._w,this._x=-i._x,this._y=-i._y,this._z=-i._z,y=-y):this.copy(i),y>=1)return this._w=M,this._x=c,this._y=d,this._z=m,this;const T=1-y*y;if(T<=Number.EPSILON){const N=1-s;return this._w=N*M+s*this._w,this._x=N*c+s*this._x,this._y=N*d+s*this._y,this._z=N*m+s*this._z,this.normalize(),this}const A=Math.sqrt(T),R=Math.atan2(A,y),L=Math.sin((1-s)*R)/A,I=Math.sin(s*R)/A;return this._w=M*L+this._w*I,this._x=c*L+this._x*I,this._y=d*L+this._y*I,this._z=m*L+this._z*I,this._onChangeCallback(),this}slerpQuaternions(i,s,c){return this.copy(i).slerp(s,c)}random(){const i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random(),c=Math.random(),d=Math.sqrt(1-c),m=Math.sqrt(c);return this.set(d*Math.sin(i),d*Math.cos(i),m*Math.sin(s),m*Math.cos(s))}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._w===this._w}fromArray(i,s=0){return this._x=i[s],this._y=i[s+1],this._z=i[s+2],this._w=i[s+3],this._onChangeCallback(),this}toArray(i=[],s=0){return i[s]=this._x,i[s+1]=this._y,i[s+2]=this._z,i[s+3]=this._w,i}fromBufferAttribute(i,s){return this._x=i.getX(s),this._y=i.getY(s),this._z=i.getZ(s),this._w=i.getW(s),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(i=0,s=0,c=0){_e.prototype.isVector3=!0,this.x=i,this.y=s,this.z=c}set(i,s,c){return c===void 0&&(c=this.z),this.x=i,this.y=s,this.z=c,this}setScalar(i){return this.x=i,this.y=i,this.z=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setZ(i){return this.z=i,this}setComponent(i,s){switch(i){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(i){return this.x=i.x,this.y=i.y,this.z=i.z,this}add(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this}addScalar(i){return this.x+=i,this.y+=i,this.z+=i,this}addVectors(i,s){return this.x=i.x+s.x,this.y=i.y+s.y,this.z=i.z+s.z,this}addScaledVector(i,s){return this.x+=i.x*s,this.y+=i.y*s,this.z+=i.z*s,this}sub(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this}subScalar(i){return this.x-=i,this.y-=i,this.z-=i,this}subVectors(i,s){return this.x=i.x-s.x,this.y=i.y-s.y,this.z=i.z-s.z,this}multiply(i){return this.x*=i.x,this.y*=i.y,this.z*=i.z,this}multiplyScalar(i){return this.x*=i,this.y*=i,this.z*=i,this}multiplyVectors(i,s){return this.x=i.x*s.x,this.y=i.y*s.y,this.z=i.z*s.z,this}applyEuler(i){return this.applyQuaternion(G_.setFromEuler(i))}applyAxisAngle(i,s){return this.applyQuaternion(G_.setFromAxisAngle(i,s))}applyMatrix3(i){const s=this.x,c=this.y,d=this.z,m=i.elements;return this.x=m[0]*s+m[3]*c+m[6]*d,this.y=m[1]*s+m[4]*c+m[7]*d,this.z=m[2]*s+m[5]*c+m[8]*d,this}applyNormalMatrix(i){return this.applyMatrix3(i).normalize()}applyMatrix4(i){const s=this.x,c=this.y,d=this.z,m=i.elements,M=1/(m[3]*s+m[7]*c+m[11]*d+m[15]);return this.x=(m[0]*s+m[4]*c+m[8]*d+m[12])*M,this.y=(m[1]*s+m[5]*c+m[9]*d+m[13])*M,this.z=(m[2]*s+m[6]*c+m[10]*d+m[14])*M,this}applyQuaternion(i){const s=this.x,c=this.y,d=this.z,m=i.x,M=i.y,y=i.z,T=i.w,A=2*(M*d-y*c),R=2*(y*s-m*d),L=2*(m*c-M*s);return this.x=s+T*A+M*L-y*R,this.y=c+T*R+y*A-m*L,this.z=d+T*L+m*R-M*A,this}project(i){return this.applyMatrix4(i.matrixWorldInverse).applyMatrix4(i.projectionMatrix)}unproject(i){return this.applyMatrix4(i.projectionMatrixInverse).applyMatrix4(i.matrixWorld)}transformDirection(i){const s=this.x,c=this.y,d=this.z,m=i.elements;return this.x=m[0]*s+m[4]*c+m[8]*d,this.y=m[1]*s+m[5]*c+m[9]*d,this.z=m[2]*s+m[6]*c+m[10]*d,this.normalize()}divide(i){return this.x/=i.x,this.y/=i.y,this.z/=i.z,this}divideScalar(i){return this.multiplyScalar(1/i)}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this.z=Math.min(this.z,i.z),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this.z=Math.max(this.z,i.z),this}clamp(i,s){return this.x=Math.max(i.x,Math.min(s.x,this.x)),this.y=Math.max(i.y,Math.min(s.y,this.y)),this.z=Math.max(i.z,Math.min(s.z,this.z)),this}clampScalar(i,s){return this.x=Math.max(i,Math.min(s,this.x)),this.y=Math.max(i,Math.min(s,this.y)),this.z=Math.max(i,Math.min(s,this.z)),this}clampLength(i,s){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(i,Math.min(s,c)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,s){return this.x+=(i.x-this.x)*s,this.y+=(i.y-this.y)*s,this.z+=(i.z-this.z)*s,this}lerpVectors(i,s,c){return this.x=i.x+(s.x-i.x)*c,this.y=i.y+(s.y-i.y)*c,this.z=i.z+(s.z-i.z)*c,this}cross(i){return this.crossVectors(this,i)}crossVectors(i,s){const c=i.x,d=i.y,m=i.z,M=s.x,y=s.y,T=s.z;return this.x=d*T-m*y,this.y=m*M-c*T,this.z=c*y-d*M,this}projectOnVector(i){const s=i.lengthSq();if(s===0)return this.set(0,0,0);const c=i.dot(this)/s;return this.copy(i).multiplyScalar(c)}projectOnPlane(i){return cf.copy(this).projectOnVector(i),this.sub(cf)}reflect(i){return this.sub(cf.copy(i).multiplyScalar(2*this.dot(i)))}angleTo(i){const s=Math.sqrt(this.lengthSq()*i.lengthSq());if(s===0)return Math.PI/2;const c=this.dot(i)/s;return Math.acos(nr(c,-1,1))}distanceTo(i){return Math.sqrt(this.distanceToSquared(i))}distanceToSquared(i){const s=this.x-i.x,c=this.y-i.y,d=this.z-i.z;return s*s+c*c+d*d}manhattanDistanceTo(i){return Math.abs(this.x-i.x)+Math.abs(this.y-i.y)+Math.abs(this.z-i.z)}setFromSpherical(i){return this.setFromSphericalCoords(i.radius,i.phi,i.theta)}setFromSphericalCoords(i,s,c){const d=Math.sin(s)*i;return this.x=d*Math.sin(c),this.y=Math.cos(s)*i,this.z=d*Math.cos(c),this}setFromCylindrical(i){return this.setFromCylindricalCoords(i.radius,i.theta,i.y)}setFromCylindricalCoords(i,s,c){return this.x=i*Math.sin(s),this.y=c,this.z=i*Math.cos(s),this}setFromMatrixPosition(i){const s=i.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this}setFromMatrixScale(i){const s=this.setFromMatrixColumn(i,0).length(),c=this.setFromMatrixColumn(i,1).length(),d=this.setFromMatrixColumn(i,2).length();return this.x=s,this.y=c,this.z=d,this}setFromMatrixColumn(i,s){return this.fromArray(i.elements,s*4)}setFromMatrix3Column(i,s){return this.fromArray(i.elements,s*3)}setFromEuler(i){return this.x=i._x,this.y=i._y,this.z=i._z,this}setFromColor(i){return this.x=i.r,this.y=i.g,this.z=i.b,this}equals(i){return i.x===this.x&&i.y===this.y&&i.z===this.z}fromArray(i,s=0){return this.x=i[s],this.y=i[s+1],this.z=i[s+2],this}toArray(i=[],s=0){return i[s]=this.x,i[s+1]=this.y,i[s+2]=this.z,i}fromBufferAttribute(i,s){return this.x=i.getX(s),this.y=i.getY(s),this.z=i.getZ(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const i=Math.random()*Math.PI*2,s=Math.random()*2-1,c=Math.sqrt(1-s*s);return this.x=c*Math.cos(i),this.y=s,this.z=c*Math.sin(i),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new _e,G_=new rl;class sl{constructor(i=new _e(1/0,1/0,1/0),s=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=i,this.max=s}set(i,s){return this.min.copy(i),this.max.copy(s),this}setFromArray(i){this.makeEmpty();for(let s=0,c=i.length;s<c;s+=3)this.expandByPoint(Nr.fromArray(i,s));return this}setFromBufferAttribute(i){this.makeEmpty();for(let s=0,c=i.count;s<c;s++)this.expandByPoint(Nr.fromBufferAttribute(i,s));return this}setFromPoints(i){this.makeEmpty();for(let s=0,c=i.length;s<c;s++)this.expandByPoint(i[s]);return this}setFromCenterAndSize(i,s){const c=Nr.copy(s).multiplyScalar(.5);return this.min.copy(i).sub(c),this.max.copy(i).add(c),this}setFromObject(i,s=!1){return this.makeEmpty(),this.expandByObject(i,s)}clone(){return new this.constructor().copy(this)}copy(i){return this.min.copy(i.min),this.max.copy(i.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(i){return this.isEmpty()?i.set(0,0,0):i.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(i){return this.isEmpty()?i.set(0,0,0):i.subVectors(this.max,this.min)}expandByPoint(i){return this.min.min(i),this.max.max(i),this}expandByVector(i){return this.min.sub(i),this.max.add(i),this}expandByScalar(i){return this.min.addScalar(-i),this.max.addScalar(i),this}expandByObject(i,s=!1){i.updateWorldMatrix(!1,!1);const c=i.geometry;if(c!==void 0){const m=c.getAttribute("position");if(s===!0&&m!==void 0&&i.isInstancedMesh!==!0)for(let M=0,y=m.count;M<y;M++)i.isMesh===!0?i.getVertexPosition(M,Nr):Nr.fromBufferAttribute(m,M),Nr.applyMatrix4(i.matrixWorld),this.expandByPoint(Nr);else i.boundingBox!==void 0?(i.boundingBox===null&&i.computeBoundingBox(),Bh.copy(i.boundingBox)):(c.boundingBox===null&&c.computeBoundingBox(),Bh.copy(c.boundingBox)),Bh.applyMatrix4(i.matrixWorld),this.union(Bh)}const d=i.children;for(let m=0,M=d.length;m<M;m++)this.expandByObject(d[m],s);return this}containsPoint(i){return!(i.x<this.min.x||i.x>this.max.x||i.y<this.min.y||i.y>this.max.y||i.z<this.min.z||i.z>this.max.z)}containsBox(i){return this.min.x<=i.min.x&&i.max.x<=this.max.x&&this.min.y<=i.min.y&&i.max.y<=this.max.y&&this.min.z<=i.min.z&&i.max.z<=this.max.z}getParameter(i,s){return s.set((i.x-this.min.x)/(this.max.x-this.min.x),(i.y-this.min.y)/(this.max.y-this.min.y),(i.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(i){return!(i.max.x<this.min.x||i.min.x>this.max.x||i.max.y<this.min.y||i.min.y>this.max.y||i.max.z<this.min.z||i.min.z>this.max.z)}intersectsSphere(i){return this.clampPoint(i.center,Nr),Nr.distanceToSquared(i.center)<=i.radius*i.radius}intersectsPlane(i){let s,c;return i.normal.x>0?(s=i.normal.x*this.min.x,c=i.normal.x*this.max.x):(s=i.normal.x*this.max.x,c=i.normal.x*this.min.x),i.normal.y>0?(s+=i.normal.y*this.min.y,c+=i.normal.y*this.max.y):(s+=i.normal.y*this.max.y,c+=i.normal.y*this.min.y),i.normal.z>0?(s+=i.normal.z*this.min.z,c+=i.normal.z*this.max.z):(s+=i.normal.z*this.max.z,c+=i.normal.z*this.min.z),s<=-i.constant&&c>=-i.constant}intersectsTriangle(i){if(this.isEmpty())return!1;this.getCenter(Zc),zh.subVectors(this.max,Zc),Co.subVectors(i.a,Zc),Po.subVectors(i.b,Zc),Lo.subVectors(i.c,Zc),Fs.subVectors(Po,Co),Os.subVectors(Lo,Po),wa.subVectors(Co,Lo);let s=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-wa.z,wa.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,wa.z,0,-wa.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-wa.y,wa.x,0];return!lf(s,Co,Po,Lo,zh)||(s=[1,0,0,0,1,0,0,0,1],!lf(s,Co,Po,Lo,zh))?!1:(Vh.crossVectors(Fs,Os),s=[Vh.x,Vh.y,Vh.z],lf(s,Co,Po,Lo,zh))}clampPoint(i,s){return s.copy(i).clamp(this.min,this.max)}distanceToPoint(i){return this.clampPoint(i,Nr).distanceTo(i)}getBoundingSphere(i){return this.isEmpty()?i.makeEmpty():(this.getCenter(i.center),i.radius=this.getSize(Nr).length()*.5),i}intersect(i){return this.min.max(i.min),this.max.min(i.max),this.isEmpty()&&this.makeEmpty(),this}union(i){return this.min.min(i.min),this.max.max(i.max),this}applyMatrix4(i){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(i),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(i),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(i),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(i),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(i),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(i),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(i),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(i),this.setFromPoints(ls),this)}translate(i){return this.min.add(i),this.max.add(i),this}equals(i){return i.min.equals(this.min)&&i.max.equals(this.max)}}const ls=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],Nr=new _e,Bh=new sl,Co=new _e,Po=new _e,Lo=new _e,Fs=new _e,Os=new _e,wa=new _e,Zc=new _e,zh=new _e,Vh=new _e,Ra=new _e;function lf(u,i,s,c,d){for(let m=0,M=u.length-3;m<=M;m+=3){Ra.fromArray(u,m);const y=d.x*Math.abs(Ra.x)+d.y*Math.abs(Ra.y)+d.z*Math.abs(Ra.z),T=i.dot(Ra),A=s.dot(Ra),R=c.dot(Ra);if(Math.max(-Math.max(T,A,R),Math.min(T,A,R))>y)return!1}return!0}const GT=new sl,$c=new _e,hf=new _e;class Hf{constructor(i=new _e,s=-1){this.isSphere=!0,this.center=i,this.radius=s}set(i,s){return this.center.copy(i),this.radius=s,this}setFromPoints(i,s){const c=this.center;s!==void 0?c.copy(s):GT.setFromPoints(i).getCenter(c);let d=0;for(let m=0,M=i.length;m<M;m++)d=Math.max(d,c.distanceToSquared(i[m]));return this.radius=Math.sqrt(d),this}copy(i){return this.center.copy(i.center),this.radius=i.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(i){return i.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(i){return i.distanceTo(this.center)-this.radius}intersectsSphere(i){const s=this.radius+i.radius;return i.center.distanceToSquared(this.center)<=s*s}intersectsBox(i){return i.intersectsSphere(this)}intersectsPlane(i){return Math.abs(i.distanceToPoint(this.center))<=this.radius}clampPoint(i,s){const c=this.center.distanceToSquared(i);return s.copy(i),c>this.radius*this.radius&&(s.sub(this.center).normalize(),s.multiplyScalar(this.radius).add(this.center)),s}getBoundingBox(i){return this.isEmpty()?(i.makeEmpty(),i):(i.set(this.center,this.center),i.expandByScalar(this.radius),i)}applyMatrix4(i){return this.center.applyMatrix4(i),this.radius=this.radius*i.getMaxScaleOnAxis(),this}translate(i){return this.center.add(i),this}expandByPoint(i){if(this.isEmpty())return this.center.copy(i),this.radius=0,this;$c.subVectors(i,this.center);const s=$c.lengthSq();if(s>this.radius*this.radius){const c=Math.sqrt(s),d=(c-this.radius)*.5;this.center.addScaledVector($c,d/c),this.radius+=d}return this}union(i){return i.isEmpty()?this:this.isEmpty()?(this.copy(i),this):(this.center.equals(i.center)===!0?this.radius=Math.max(this.radius,i.radius):(hf.subVectors(i.center,this.center).setLength(i.radius),this.expandByPoint($c.copy(i.center).add(hf)),this.expandByPoint($c.copy(i.center).sub(hf))),this)}equals(i){return i.center.equals(this.center)&&i.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hs=new _e,uf=new _e,Gh=new _e,Bs=new _e,df=new _e,Hh=new _e,ff=new _e;class HT{constructor(i=new _e,s=new _e(0,0,-1)){this.origin=i,this.direction=s}set(i,s){return this.origin.copy(i),this.direction.copy(s),this}copy(i){return this.origin.copy(i.origin),this.direction.copy(i.direction),this}at(i,s){return s.copy(this.origin).addScaledVector(this.direction,i)}lookAt(i){return this.direction.copy(i).sub(this.origin).normalize(),this}recast(i){return this.origin.copy(this.at(i,hs)),this}closestPointToPoint(i,s){s.subVectors(i,this.origin);const c=s.dot(this.direction);return c<0?s.copy(this.origin):s.copy(this.origin).addScaledVector(this.direction,c)}distanceToPoint(i){return Math.sqrt(this.distanceSqToPoint(i))}distanceSqToPoint(i){const s=hs.subVectors(i,this.origin).dot(this.direction);return s<0?this.origin.distanceToSquared(i):(hs.copy(this.origin).addScaledVector(this.direction,s),hs.distanceToSquared(i))}distanceSqToSegment(i,s,c,d){uf.copy(i).add(s).multiplyScalar(.5),Gh.copy(s).sub(i).normalize(),Bs.copy(this.origin).sub(uf);const m=i.distanceTo(s)*.5,M=-this.direction.dot(Gh),y=Bs.dot(this.direction),T=-Bs.dot(Gh),A=Bs.lengthSq(),R=Math.abs(1-M*M);let L,I,N,G;if(R>0)if(L=M*T-y,I=M*y-T,G=m*R,L>=0)if(I>=-G)if(I<=G){const W=1/R;L*=W,I*=W,N=L*(L+M*I+2*y)+I*(M*L+I+2*T)+A}else I=m,L=Math.max(0,-(M*I+y)),N=-L*L+I*(I+2*T)+A;else I=-m,L=Math.max(0,-(M*I+y)),N=-L*L+I*(I+2*T)+A;else I<=-G?(L=Math.max(0,-(-M*m+y)),I=L>0?-m:Math.min(Math.max(-m,-T),m),N=-L*L+I*(I+2*T)+A):I<=G?(L=0,I=Math.min(Math.max(-m,-T),m),N=I*(I+2*T)+A):(L=Math.max(0,-(M*m+y)),I=L>0?m:Math.min(Math.max(-m,-T),m),N=-L*L+I*(I+2*T)+A);else I=M>0?-m:m,L=Math.max(0,-(M*I+y)),N=-L*L+I*(I+2*T)+A;return c&&c.copy(this.origin).addScaledVector(this.direction,L),d&&d.copy(uf).addScaledVector(Gh,I),N}intersectSphere(i,s){hs.subVectors(i.center,this.origin);const c=hs.dot(this.direction),d=hs.dot(hs)-c*c,m=i.radius*i.radius;if(d>m)return null;const M=Math.sqrt(m-d),y=c-M,T=c+M;return T<0?null:y<0?this.at(T,s):this.at(y,s)}intersectsSphere(i){return this.distanceSqToPoint(i.center)<=i.radius*i.radius}distanceToPlane(i){const s=i.normal.dot(this.direction);if(s===0)return i.distanceToPoint(this.origin)===0?0:null;const c=-(this.origin.dot(i.normal)+i.constant)/s;return c>=0?c:null}intersectPlane(i,s){const c=this.distanceToPlane(i);return c===null?null:this.at(c,s)}intersectsPlane(i){const s=i.distanceToPoint(this.origin);return s===0||i.normal.dot(this.direction)*s<0}intersectBox(i,s){let c,d,m,M,y,T;const A=1/this.direction.x,R=1/this.direction.y,L=1/this.direction.z,I=this.origin;return A>=0?(c=(i.min.x-I.x)*A,d=(i.max.x-I.x)*A):(c=(i.max.x-I.x)*A,d=(i.min.x-I.x)*A),R>=0?(m=(i.min.y-I.y)*R,M=(i.max.y-I.y)*R):(m=(i.max.y-I.y)*R,M=(i.min.y-I.y)*R),c>M||m>d||((m>c||isNaN(c))&&(c=m),(M<d||isNaN(d))&&(d=M),L>=0?(y=(i.min.z-I.z)*L,T=(i.max.z-I.z)*L):(y=(i.max.z-I.z)*L,T=(i.min.z-I.z)*L),c>T||y>d)||((y>c||c!==c)&&(c=y),(T<d||d!==d)&&(d=T),d<0)?null:this.at(c>=0?c:d,s)}intersectsBox(i){return this.intersectBox(i,hs)!==null}intersectTriangle(i,s,c,d,m){df.subVectors(s,i),Hh.subVectors(c,i),ff.crossVectors(df,Hh);let M=this.direction.dot(ff),y;if(M>0){if(d)return null;y=1}else if(M<0)y=-1,M=-M;else return null;Bs.subVectors(this.origin,i);const T=y*this.direction.dot(Hh.crossVectors(Bs,Hh));if(T<0)return null;const A=y*this.direction.dot(df.cross(Bs));if(A<0||T+A>M)return null;const R=-y*Bs.dot(ff);return R<0?null:this.at(R/M,m)}applyMatrix4(i){return this.origin.applyMatrix4(i),this.direction.transformDirection(i),this}equals(i){return i.origin.equals(this.origin)&&i.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(i,s,c,d,m,M,y,T,A,R,L,I,N,G,W,P){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i!==void 0&&this.set(i,s,c,d,m,M,y,T,A,R,L,I,N,G,W,P)}set(i,s,c,d,m,M,y,T,A,R,L,I,N,G,W,P){const C=this.elements;return C[0]=i,C[4]=s,C[8]=c,C[12]=d,C[1]=m,C[5]=M,C[9]=y,C[13]=T,C[2]=A,C[6]=R,C[10]=L,C[14]=I,C[3]=N,C[7]=G,C[11]=W,C[15]=P,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(i){const s=this.elements,c=i.elements;return s[0]=c[0],s[1]=c[1],s[2]=c[2],s[3]=c[3],s[4]=c[4],s[5]=c[5],s[6]=c[6],s[7]=c[7],s[8]=c[8],s[9]=c[9],s[10]=c[10],s[11]=c[11],s[12]=c[12],s[13]=c[13],s[14]=c[14],s[15]=c[15],this}copyPosition(i){const s=this.elements,c=i.elements;return s[12]=c[12],s[13]=c[13],s[14]=c[14],this}setFromMatrix3(i){const s=i.elements;return this.set(s[0],s[3],s[6],0,s[1],s[4],s[7],0,s[2],s[5],s[8],0,0,0,0,1),this}extractBasis(i,s,c){return i.setFromMatrixColumn(this,0),s.setFromMatrixColumn(this,1),c.setFromMatrixColumn(this,2),this}makeBasis(i,s,c){return this.set(i.x,s.x,c.x,0,i.y,s.y,c.y,0,i.z,s.z,c.z,0,0,0,0,1),this}extractRotation(i){const s=this.elements,c=i.elements,d=1/Io.setFromMatrixColumn(i,0).length(),m=1/Io.setFromMatrixColumn(i,1).length(),M=1/Io.setFromMatrixColumn(i,2).length();return s[0]=c[0]*d,s[1]=c[1]*d,s[2]=c[2]*d,s[3]=0,s[4]=c[4]*m,s[5]=c[5]*m,s[6]=c[6]*m,s[7]=0,s[8]=c[8]*M,s[9]=c[9]*M,s[10]=c[10]*M,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromEuler(i){const s=this.elements,c=i.x,d=i.y,m=i.z,M=Math.cos(c),y=Math.sin(c),T=Math.cos(d),A=Math.sin(d),R=Math.cos(m),L=Math.sin(m);if(i.order==="XYZ"){const I=M*R,N=M*L,G=y*R,W=y*L;s[0]=T*R,s[4]=-T*L,s[8]=A,s[1]=N+G*A,s[5]=I-W*A,s[9]=-y*T,s[2]=W-I*A,s[6]=G+N*A,s[10]=M*T}else if(i.order==="YXZ"){const I=T*R,N=T*L,G=A*R,W=A*L;s[0]=I+W*y,s[4]=G*y-N,s[8]=M*A,s[1]=M*L,s[5]=M*R,s[9]=-y,s[2]=N*y-G,s[6]=W+I*y,s[10]=M*T}else if(i.order==="ZXY"){const I=T*R,N=T*L,G=A*R,W=A*L;s[0]=I-W*y,s[4]=-M*L,s[8]=G+N*y,s[1]=N+G*y,s[5]=M*R,s[9]=W-I*y,s[2]=-M*A,s[6]=y,s[10]=M*T}else if(i.order==="ZYX"){const I=M*R,N=M*L,G=y*R,W=y*L;s[0]=T*R,s[4]=G*A-N,s[8]=I*A+W,s[1]=T*L,s[5]=W*A+I,s[9]=N*A-G,s[2]=-A,s[6]=y*T,s[10]=M*T}else if(i.order==="YZX"){const I=M*T,N=M*A,G=y*T,W=y*A;s[0]=T*R,s[4]=W-I*L,s[8]=G*L+N,s[1]=L,s[5]=M*R,s[9]=-y*R,s[2]=-A*R,s[6]=N*L+G,s[10]=I-W*L}else if(i.order==="XZY"){const I=M*T,N=M*A,G=y*T,W=y*A;s[0]=T*R,s[4]=-L,s[8]=A*R,s[1]=I*L+W,s[5]=M*R,s[9]=N*L-G,s[2]=G*L-N,s[6]=y*R,s[10]=W*L+I}return s[3]=0,s[7]=0,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromQuaternion(i){return this.compose(kT,i,WT)}lookAt(i,s,c){const d=this.elements;return fr.subVectors(i,s),fr.lengthSq()===0&&(fr.z=1),fr.normalize(),zs.crossVectors(c,fr),zs.lengthSq()===0&&(Math.abs(c.z)===1?fr.x+=1e-4:fr.z+=1e-4,fr.normalize(),zs.crossVectors(c,fr)),zs.normalize(),kh.crossVectors(fr,zs),d[0]=zs.x,d[4]=kh.x,d[8]=fr.x,d[1]=zs.y,d[5]=kh.y,d[9]=fr.y,d[2]=zs.z,d[6]=kh.z,d[10]=fr.z,this}multiply(i){return this.multiplyMatrices(this,i)}premultiply(i){return this.multiplyMatrices(i,this)}multiplyMatrices(i,s){const c=i.elements,d=s.elements,m=this.elements,M=c[0],y=c[4],T=c[8],A=c[12],R=c[1],L=c[5],I=c[9],N=c[13],G=c[2],W=c[6],P=c[10],C=c[14],$=c[3],X=c[7],ee=c[11],xe=c[15],se=d[0],ae=d[4],Ne=d[8],K=d[12],H=d[1],Me=d[5],Ie=d[9],he=d[13],qe=d[2],Xe=d[6],gt=d[10],ht=d[14],De=d[3],vt=d[7],ft=d[11],Kt=d[15];return m[0]=M*se+y*H+T*qe+A*De,m[4]=M*ae+y*Me+T*Xe+A*vt,m[8]=M*Ne+y*Ie+T*gt+A*ft,m[12]=M*K+y*he+T*ht+A*Kt,m[1]=R*se+L*H+I*qe+N*De,m[5]=R*ae+L*Me+I*Xe+N*vt,m[9]=R*Ne+L*Ie+I*gt+N*ft,m[13]=R*K+L*he+I*ht+N*Kt,m[2]=G*se+W*H+P*qe+C*De,m[6]=G*ae+W*Me+P*Xe+C*vt,m[10]=G*Ne+W*Ie+P*gt+C*ft,m[14]=G*K+W*he+P*ht+C*Kt,m[3]=$*se+X*H+ee*qe+xe*De,m[7]=$*ae+X*Me+ee*Xe+xe*vt,m[11]=$*Ne+X*Ie+ee*gt+xe*ft,m[15]=$*K+X*he+ee*ht+xe*Kt,this}multiplyScalar(i){const s=this.elements;return s[0]*=i,s[4]*=i,s[8]*=i,s[12]*=i,s[1]*=i,s[5]*=i,s[9]*=i,s[13]*=i,s[2]*=i,s[6]*=i,s[10]*=i,s[14]*=i,s[3]*=i,s[7]*=i,s[11]*=i,s[15]*=i,this}determinant(){const i=this.elements,s=i[0],c=i[4],d=i[8],m=i[12],M=i[1],y=i[5],T=i[9],A=i[13],R=i[2],L=i[6],I=i[10],N=i[14],G=i[3],W=i[7],P=i[11],C=i[15];return G*(+m*T*L-d*A*L-m*y*I+c*A*I+d*y*N-c*T*N)+W*(+s*T*N-s*A*I+m*M*I-d*M*N+d*A*R-m*T*R)+P*(+s*A*L-s*y*N-m*M*L+c*M*N+m*y*R-c*A*R)+C*(-d*y*R-s*T*L+s*y*I+d*M*L-c*M*I+c*T*R)}transpose(){const i=this.elements;let s;return s=i[1],i[1]=i[4],i[4]=s,s=i[2],i[2]=i[8],i[8]=s,s=i[6],i[6]=i[9],i[9]=s,s=i[3],i[3]=i[12],i[12]=s,s=i[7],i[7]=i[13],i[13]=s,s=i[11],i[11]=i[14],i[14]=s,this}setPosition(i,s,c){const d=this.elements;return i.isVector3?(d[12]=i.x,d[13]=i.y,d[14]=i.z):(d[12]=i,d[13]=s,d[14]=c),this}invert(){const i=this.elements,s=i[0],c=i[1],d=i[2],m=i[3],M=i[4],y=i[5],T=i[6],A=i[7],R=i[8],L=i[9],I=i[10],N=i[11],G=i[12],W=i[13],P=i[14],C=i[15],$=L*P*A-W*I*A+W*T*N-y*P*N-L*T*C+y*I*C,X=G*I*A-R*P*A-G*T*N+M*P*N+R*T*C-M*I*C,ee=R*W*A-G*L*A+G*y*N-M*W*N-R*y*C+M*L*C,xe=G*L*T-R*W*T-G*y*I+M*W*I+R*y*P-M*L*P,se=s*$+c*X+d*ee+m*xe;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/se;return i[0]=$*ae,i[1]=(W*I*m-L*P*m-W*d*N+c*P*N+L*d*C-c*I*C)*ae,i[2]=(y*P*m-W*T*m+W*d*A-c*P*A-y*d*C+c*T*C)*ae,i[3]=(L*T*m-y*I*m-L*d*A+c*I*A+y*d*N-c*T*N)*ae,i[4]=X*ae,i[5]=(R*P*m-G*I*m+G*d*N-s*P*N-R*d*C+s*I*C)*ae,i[6]=(G*T*m-M*P*m-G*d*A+s*P*A+M*d*C-s*T*C)*ae,i[7]=(M*I*m-R*T*m+R*d*A-s*I*A-M*d*N+s*T*N)*ae,i[8]=ee*ae,i[9]=(G*L*m-R*W*m-G*c*N+s*W*N+R*c*C-s*L*C)*ae,i[10]=(M*W*m-G*y*m+G*c*A-s*W*A-M*c*C+s*y*C)*ae,i[11]=(R*y*m-M*L*m-R*c*A+s*L*A+M*c*N-s*y*N)*ae,i[12]=xe*ae,i[13]=(R*W*d-G*L*d+G*c*I-s*W*I-R*c*P+s*L*P)*ae,i[14]=(G*y*d-M*W*d-G*c*T+s*W*T+M*c*P-s*y*P)*ae,i[15]=(M*L*d-R*y*d+R*c*T-s*L*T-M*c*I+s*y*I)*ae,this}scale(i){const s=this.elements,c=i.x,d=i.y,m=i.z;return s[0]*=c,s[4]*=d,s[8]*=m,s[1]*=c,s[5]*=d,s[9]*=m,s[2]*=c,s[6]*=d,s[10]*=m,s[3]*=c,s[7]*=d,s[11]*=m,this}getMaxScaleOnAxis(){const i=this.elements,s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],c=i[4]*i[4]+i[5]*i[5]+i[6]*i[6],d=i[8]*i[8]+i[9]*i[9]+i[10]*i[10];return Math.sqrt(Math.max(s,c,d))}makeTranslation(i,s,c){return i.isVector3?this.set(1,0,0,i.x,0,1,0,i.y,0,0,1,i.z,0,0,0,1):this.set(1,0,0,i,0,1,0,s,0,0,1,c,0,0,0,1),this}makeRotationX(i){const s=Math.cos(i),c=Math.sin(i);return this.set(1,0,0,0,0,s,-c,0,0,c,s,0,0,0,0,1),this}makeRotationY(i){const s=Math.cos(i),c=Math.sin(i);return this.set(s,0,c,0,0,1,0,0,-c,0,s,0,0,0,0,1),this}makeRotationZ(i){const s=Math.cos(i),c=Math.sin(i);return this.set(s,-c,0,0,c,s,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(i,s){const c=Math.cos(s),d=Math.sin(s),m=1-c,M=i.x,y=i.y,T=i.z,A=m*M,R=m*y;return this.set(A*M+c,A*y-d*T,A*T+d*y,0,A*y+d*T,R*y+c,R*T-d*M,0,A*T-d*y,R*T+d*M,m*T*T+c,0,0,0,0,1),this}makeScale(i,s,c){return this.set(i,0,0,0,0,s,0,0,0,0,c,0,0,0,0,1),this}makeShear(i,s,c,d,m,M){return this.set(1,c,m,0,i,1,M,0,s,d,1,0,0,0,0,1),this}compose(i,s,c){const d=this.elements,m=s._x,M=s._y,y=s._z,T=s._w,A=m+m,R=M+M,L=y+y,I=m*A,N=m*R,G=m*L,W=M*R,P=M*L,C=y*L,$=T*A,X=T*R,ee=T*L,xe=c.x,se=c.y,ae=c.z;return d[0]=(1-(W+C))*xe,d[1]=(N+ee)*xe,d[2]=(G-X)*xe,d[3]=0,d[4]=(N-ee)*se,d[5]=(1-(I+C))*se,d[6]=(P+$)*se,d[7]=0,d[8]=(G+X)*ae,d[9]=(P-$)*ae,d[10]=(1-(I+W))*ae,d[11]=0,d[12]=i.x,d[13]=i.y,d[14]=i.z,d[15]=1,this}decompose(i,s,c){const d=this.elements;let m=Io.set(d[0],d[1],d[2]).length();const M=Io.set(d[4],d[5],d[6]).length(),y=Io.set(d[8],d[9],d[10]).length();this.determinant()<0&&(m=-m),i.x=d[12],i.y=d[13],i.z=d[14],Fr.copy(this);const A=1/m,R=1/M,L=1/y;return Fr.elements[0]*=A,Fr.elements[1]*=A,Fr.elements[2]*=A,Fr.elements[4]*=R,Fr.elements[5]*=R,Fr.elements[6]*=R,Fr.elements[8]*=L,Fr.elements[9]*=L,Fr.elements[10]*=L,s.setFromRotationMatrix(Fr),c.x=m,c.y=M,c.z=y,this}makePerspective(i,s,c,d,m,M,y=ms){const T=this.elements,A=2*m/(s-i),R=2*m/(c-d),L=(s+i)/(s-i),I=(c+d)/(c-d);let N,G;if(y===ms)N=-(M+m)/(M-m),G=-2*M*m/(M-m);else if(y===hu)N=-M/(M-m),G=-M*m/(M-m);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+y);return T[0]=A,T[4]=0,T[8]=L,T[12]=0,T[1]=0,T[5]=R,T[9]=I,T[13]=0,T[2]=0,T[6]=0,T[10]=N,T[14]=G,T[3]=0,T[7]=0,T[11]=-1,T[15]=0,this}makeOrthographic(i,s,c,d,m,M,y=ms){const T=this.elements,A=1/(s-i),R=1/(c-d),L=1/(M-m),I=(s+i)*A,N=(c+d)*R;let G,W;if(y===ms)G=(M+m)*L,W=-2*L;else if(y===hu)G=m*L,W=-1*L;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+y);return T[0]=2*A,T[4]=0,T[8]=0,T[12]=-I,T[1]=0,T[5]=2*R,T[9]=0,T[13]=-N,T[2]=0,T[6]=0,T[10]=W,T[14]=-G,T[3]=0,T[7]=0,T[11]=0,T[15]=1,this}equals(i){const s=this.elements,c=i.elements;for(let d=0;d<16;d++)if(s[d]!==c[d])return!1;return!0}fromArray(i,s=0){for(let c=0;c<16;c++)this.elements[c]=i[c+s];return this}toArray(i=[],s=0){const c=this.elements;return i[s]=c[0],i[s+1]=c[1],i[s+2]=c[2],i[s+3]=c[3],i[s+4]=c[4],i[s+5]=c[5],i[s+6]=c[6],i[s+7]=c[7],i[s+8]=c[8],i[s+9]=c[9],i[s+10]=c[10],i[s+11]=c[11],i[s+12]=c[12],i[s+13]=c[13],i[s+14]=c[14],i[s+15]=c[15],i}}const Io=new _e,Fr=new dn,kT=new _e(0,0,0),WT=new _e(1,1,1),zs=new _e,kh=new _e,fr=new _e,H_=new dn,k_=new rl;class _s{constructor(i=0,s=0,c=0,d=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=i,this._y=s,this._z=c,this._order=d}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get order(){return this._order}set order(i){this._order=i,this._onChangeCallback()}set(i,s,c,d=this._order){return this._x=i,this._y=s,this._z=c,this._order=d,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(i){return this._x=i._x,this._y=i._y,this._z=i._z,this._order=i._order,this._onChangeCallback(),this}setFromRotationMatrix(i,s=this._order,c=!0){const d=i.elements,m=d[0],M=d[4],y=d[8],T=d[1],A=d[5],R=d[9],L=d[2],I=d[6],N=d[10];switch(s){case"XYZ":this._y=Math.asin(nr(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(-R,N),this._z=Math.atan2(-M,m)):(this._x=Math.atan2(I,A),this._z=0);break;case"YXZ":this._x=Math.asin(-nr(R,-1,1)),Math.abs(R)<.9999999?(this._y=Math.atan2(y,N),this._z=Math.atan2(T,A)):(this._y=Math.atan2(-L,m),this._z=0);break;case"ZXY":this._x=Math.asin(nr(I,-1,1)),Math.abs(I)<.9999999?(this._y=Math.atan2(-L,N),this._z=Math.atan2(-M,A)):(this._y=0,this._z=Math.atan2(T,m));break;case"ZYX":this._y=Math.asin(-nr(L,-1,1)),Math.abs(L)<.9999999?(this._x=Math.atan2(I,N),this._z=Math.atan2(T,m)):(this._x=0,this._z=Math.atan2(-M,A));break;case"YZX":this._z=Math.asin(nr(T,-1,1)),Math.abs(T)<.9999999?(this._x=Math.atan2(-R,A),this._y=Math.atan2(-L,m)):(this._x=0,this._y=Math.atan2(y,N));break;case"XZY":this._z=Math.asin(-nr(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(I,A),this._y=Math.atan2(y,m)):(this._x=Math.atan2(-R,N),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+s)}return this._order=s,c===!0&&this._onChangeCallback(),this}setFromQuaternion(i,s,c){return H_.makeRotationFromQuaternion(i),this.setFromRotationMatrix(H_,s,c)}setFromVector3(i,s=this._order){return this.set(i.x,i.y,i.z,s)}reorder(i){return k_.setFromEuler(this),this.setFromQuaternion(k_,i)}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._order===this._order}fromArray(i){return this._x=i[0],this._y=i[1],this._z=i[2],i[3]!==void 0&&(this._order=i[3]),this._onChangeCallback(),this}toArray(i=[],s=0){return i[s]=this._x,i[s+1]=this._y,i[s+2]=this._z,i[s+3]=this._order,i}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(i){this.mask=(1<<i|0)>>>0}enable(i){this.mask|=1<<i|0}enableAll(){this.mask=-1}toggle(i){this.mask^=1<<i|0}disable(i){this.mask&=~(1<<i|0)}disableAll(){this.mask=0}test(i){return(this.mask&i.mask)!==0}isEnabled(i){return(this.mask&(1<<i|0))!==0}}let XT=0;const W_=new _e,Do=new rl,us=new dn,Wh=new _e,Kc=new _e,qT=new _e,YT=new rl,X_=new _e(1,0,0),q_=new _e(0,1,0),Y_=new _e(0,0,1),Z_={type:"added"},ZT={type:"removed"},Uo={type:"childadded",child:null},pf={type:"childremoved",child:null};class sr extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sr.DEFAULT_UP.clone();const i=new _e,s=new _s,c=new rl,d=new _e(1,1,1);function m(){c.setFromEuler(s,!1)}function M(){s.setFromQuaternion(c,void 0,!1)}s._onChange(m),c._onChange(M),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:i},rotation:{configurable:!0,enumerable:!0,value:s},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new dn},normalMatrix:{value:new Ti}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=sr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(i){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(i),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(i){return this.quaternion.premultiply(i),this}setRotationFromAxisAngle(i,s){this.quaternion.setFromAxisAngle(i,s)}setRotationFromEuler(i){this.quaternion.setFromEuler(i,!0)}setRotationFromMatrix(i){this.quaternion.setFromRotationMatrix(i)}setRotationFromQuaternion(i){this.quaternion.copy(i)}rotateOnAxis(i,s){return Do.setFromAxisAngle(i,s),this.quaternion.multiply(Do),this}rotateOnWorldAxis(i,s){return Do.setFromAxisAngle(i,s),this.quaternion.premultiply(Do),this}rotateX(i){return this.rotateOnAxis(X_,i)}rotateY(i){return this.rotateOnAxis(q_,i)}rotateZ(i){return this.rotateOnAxis(Y_,i)}translateOnAxis(i,s){return W_.copy(i).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(s)),this}translateX(i){return this.translateOnAxis(X_,i)}translateY(i){return this.translateOnAxis(q_,i)}translateZ(i){return this.translateOnAxis(Y_,i)}localToWorld(i){return this.updateWorldMatrix(!0,!1),i.applyMatrix4(this.matrixWorld)}worldToLocal(i){return this.updateWorldMatrix(!0,!1),i.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(i,s,c){i.isVector3?Wh.copy(i):Wh.set(i,s,c);const d=this.parent;this.updateWorldMatrix(!0,!1),Kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Kc,Wh,this.up):us.lookAt(Wh,Kc,this.up),this.quaternion.setFromRotationMatrix(us),d&&(us.extractRotation(d.matrixWorld),Do.setFromRotationMatrix(us),this.quaternion.premultiply(Do.invert()))}add(i){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.add(arguments[s]);return this}return i===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",i),this):(i&&i.isObject3D?(i.removeFromParent(),i.parent=this,this.children.push(i),i.dispatchEvent(Z_),Uo.child=i,this.dispatchEvent(Uo),Uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",i),this)}remove(i){if(arguments.length>1){for(let c=0;c<arguments.length;c++)this.remove(arguments[c]);return this}const s=this.children.indexOf(i);return s!==-1&&(i.parent=null,this.children.splice(s,1),i.dispatchEvent(ZT),pf.child=i,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const i=this.parent;return i!==null&&i.remove(this),this}clear(){return this.remove(...this.children)}attach(i){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),i.parent!==null&&(i.parent.updateWorldMatrix(!0,!1),us.multiply(i.parent.matrixWorld)),i.applyMatrix4(us),i.removeFromParent(),i.parent=this,this.children.push(i),i.updateWorldMatrix(!1,!0),i.dispatchEvent(Z_),Uo.child=i,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(i){return this.getObjectByProperty("id",i)}getObjectByName(i){return this.getObjectByProperty("name",i)}getObjectByProperty(i,s){if(this[i]===s)return this;for(let c=0,d=this.children.length;c<d;c++){const M=this.children[c].getObjectByProperty(i,s);if(M!==void 0)return M}}getObjectsByProperty(i,s,c=[]){this[i]===s&&c.push(this);const d=this.children;for(let m=0,M=d.length;m<M;m++)d[m].getObjectsByProperty(i,s,c);return c}getWorldPosition(i){return this.updateWorldMatrix(!0,!1),i.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(i){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,i,qT),i}getWorldScale(i){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,YT,i),i}getWorldDirection(i){this.updateWorldMatrix(!0,!1);const s=this.matrixWorld.elements;return i.set(s[8],s[9],s[10]).normalize()}raycast(){}traverse(i){i(this);const s=this.children;for(let c=0,d=s.length;c<d;c++)s[c].traverse(i)}traverseVisible(i){if(this.visible===!1)return;i(this);const s=this.children;for(let c=0,d=s.length;c<d;c++)s[c].traverseVisible(i)}traverseAncestors(i){const s=this.parent;s!==null&&(i(s),s.traverseAncestors(i))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(i){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,i=!0);const s=this.children;for(let c=0,d=s.length;c<d;c++){const m=s[c];(m.matrixWorldAutoUpdate===!0||i===!0)&&m.updateMatrixWorld(i)}}updateWorldMatrix(i,s){const c=this.parent;if(i===!0&&c!==null&&c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),s===!0){const d=this.children;for(let m=0,M=d.length;m<M;m++){const y=d[m];y.matrixWorldAutoUpdate===!0&&y.updateWorldMatrix(!1,!0)}}}toJSON(i){const s=i===void 0||typeof i=="string",c={};s&&(i={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},c.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const d={};d.uuid=this.uuid,d.type=this.type,this.name!==""&&(d.name=this.name),this.castShadow===!0&&(d.castShadow=!0),this.receiveShadow===!0&&(d.receiveShadow=!0),this.visible===!1&&(d.visible=!1),this.frustumCulled===!1&&(d.frustumCulled=!1),this.renderOrder!==0&&(d.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(d.userData=this.userData),d.layers=this.layers.mask,d.matrix=this.matrix.toArray(),d.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(d.matrixAutoUpdate=!1),this.isInstancedMesh&&(d.type="InstancedMesh",d.count=this.count,d.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(d.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(d.type="BatchedMesh",d.perObjectFrustumCulled=this.perObjectFrustumCulled,d.sortObjects=this.sortObjects,d.drawRanges=this._drawRanges,d.reservedRanges=this._reservedRanges,d.visibility=this._visibility,d.active=this._active,d.bounds=this._bounds.map(y=>({boxInitialized:y.boxInitialized,boxMin:y.box.min.toArray(),boxMax:y.box.max.toArray(),sphereInitialized:y.sphereInitialized,sphereRadius:y.sphere.radius,sphereCenter:y.sphere.center.toArray()})),d.maxGeometryCount=this._maxGeometryCount,d.maxVertexCount=this._maxVertexCount,d.maxIndexCount=this._maxIndexCount,d.geometryInitialized=this._geometryInitialized,d.geometryCount=this._geometryCount,d.matricesTexture=this._matricesTexture.toJSON(i),this.boundingSphere!==null&&(d.boundingSphere={center:d.boundingSphere.center.toArray(),radius:d.boundingSphere.radius}),this.boundingBox!==null&&(d.boundingBox={min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}));function m(y,T){return y[T.uuid]===void 0&&(y[T.uuid]=T.toJSON(i)),T.uuid}if(this.isScene)this.background&&(this.background.isColor?d.background=this.background.toJSON():this.background.isTexture&&(d.background=this.background.toJSON(i).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(d.environment=this.environment.toJSON(i).uuid);else if(this.isMesh||this.isLine||this.isPoints){d.geometry=m(i.geometries,this.geometry);const y=this.geometry.parameters;if(y!==void 0&&y.shapes!==void 0){const T=y.shapes;if(Array.isArray(T))for(let A=0,R=T.length;A<R;A++){const L=T[A];m(i.shapes,L)}else m(i.shapes,T)}}if(this.isSkinnedMesh&&(d.bindMode=this.bindMode,d.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(m(i.skeletons,this.skeleton),d.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const y=[];for(let T=0,A=this.material.length;T<A;T++)y.push(m(i.materials,this.material[T]));d.material=y}else d.material=m(i.materials,this.material);if(this.children.length>0){d.children=[];for(let y=0;y<this.children.length;y++)d.children.push(this.children[y].toJSON(i).object)}if(this.animations.length>0){d.animations=[];for(let y=0;y<this.animations.length;y++){const T=this.animations[y];d.animations.push(m(i.animations,T))}}if(s){const y=M(i.geometries),T=M(i.materials),A=M(i.textures),R=M(i.images),L=M(i.shapes),I=M(i.skeletons),N=M(i.animations),G=M(i.nodes);y.length>0&&(c.geometries=y),T.length>0&&(c.materials=T),A.length>0&&(c.textures=A),R.length>0&&(c.images=R),L.length>0&&(c.shapes=L),I.length>0&&(c.skeletons=I),N.length>0&&(c.animations=N),G.length>0&&(c.nodes=G)}return c.object=d,c;function M(y){const T=[];for(const A in y){const R=y[A];delete R.metadata,T.push(R)}return T}}clone(i){return new this.constructor().copy(this,i)}copy(i,s=!0){if(this.name=i.name,this.up.copy(i.up),this.position.copy(i.position),this.rotation.order=i.rotation.order,this.quaternion.copy(i.quaternion),this.scale.copy(i.scale),this.matrix.copy(i.matrix),this.matrixWorld.copy(i.matrixWorld),this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrixWorldAutoUpdate=i.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=i.matrixWorldNeedsUpdate,this.layers.mask=i.layers.mask,this.visible=i.visible,this.castShadow=i.castShadow,this.receiveShadow=i.receiveShadow,this.frustumCulled=i.frustumCulled,this.renderOrder=i.renderOrder,this.animations=i.animations.slice(),this.userData=JSON.parse(JSON.stringify(i.userData)),s===!0)for(let c=0;c<i.children.length;c++){const d=i.children[c];this.add(d.clone())}return this}}sr.DEFAULT_UP=new _e(0,1,0);sr.DEFAULT_MATRIX_AUTO_UPDATE=!0;sr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Or=new _e,ds=new _e,mf=new _e,fs=new _e,No=new _e,Fo=new _e,$_=new _e,gf=new _e,_f=new _e,xf=new _e;class Wr{constructor(i=new _e,s=new _e,c=new _e){this.a=i,this.b=s,this.c=c}static getNormal(i,s,c,d){d.subVectors(c,s),Or.subVectors(i,s),d.cross(Or);const m=d.lengthSq();return m>0?d.multiplyScalar(1/Math.sqrt(m)):d.set(0,0,0)}static getBarycoord(i,s,c,d,m){Or.subVectors(d,s),ds.subVectors(c,s),mf.subVectors(i,s);const M=Or.dot(Or),y=Or.dot(ds),T=Or.dot(mf),A=ds.dot(ds),R=ds.dot(mf),L=M*A-y*y;if(L===0)return m.set(0,0,0),null;const I=1/L,N=(A*T-y*R)*I,G=(M*R-y*T)*I;return m.set(1-N-G,G,N)}static containsPoint(i,s,c,d){return this.getBarycoord(i,s,c,d,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(i,s,c,d,m,M,y,T){return this.getBarycoord(i,s,c,d,fs)===null?(T.x=0,T.y=0,"z"in T&&(T.z=0),"w"in T&&(T.w=0),null):(T.setScalar(0),T.addScaledVector(m,fs.x),T.addScaledVector(M,fs.y),T.addScaledVector(y,fs.z),T)}static isFrontFacing(i,s,c,d){return Or.subVectors(c,s),ds.subVectors(i,s),Or.cross(ds).dot(d)<0}set(i,s,c){return this.a.copy(i),this.b.copy(s),this.c.copy(c),this}setFromPointsAndIndices(i,s,c,d){return this.a.copy(i[s]),this.b.copy(i[c]),this.c.copy(i[d]),this}setFromAttributeAndIndices(i,s,c,d){return this.a.fromBufferAttribute(i,s),this.b.fromBufferAttribute(i,c),this.c.fromBufferAttribute(i,d),this}clone(){return new this.constructor().copy(this)}copy(i){return this.a.copy(i.a),this.b.copy(i.b),this.c.copy(i.c),this}getArea(){return Or.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Or.cross(ds).length()*.5}getMidpoint(i){return i.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(i){return Wr.getNormal(this.a,this.b,this.c,i)}getPlane(i){return i.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(i,s){return Wr.getBarycoord(i,this.a,this.b,this.c,s)}getInterpolation(i,s,c,d,m){return Wr.getInterpolation(i,this.a,this.b,this.c,s,c,d,m)}containsPoint(i){return Wr.containsPoint(i,this.a,this.b,this.c)}isFrontFacing(i){return Wr.isFrontFacing(this.a,this.b,this.c,i)}intersectsBox(i){return i.intersectsTriangle(this)}closestPointToPoint(i,s){const c=this.a,d=this.b,m=this.c;let M,y;No.subVectors(d,c),Fo.subVectors(m,c),gf.subVectors(i,c);const T=No.dot(gf),A=Fo.dot(gf);if(T<=0&&A<=0)return s.copy(c);_f.subVectors(i,d);const R=No.dot(_f),L=Fo.dot(_f);if(R>=0&&L<=R)return s.copy(d);const I=T*L-R*A;if(I<=0&&T>=0&&R<=0)return M=T/(T-R),s.copy(c).addScaledVector(No,M);xf.subVectors(i,m);const N=No.dot(xf),G=Fo.dot(xf);if(G>=0&&N<=G)return s.copy(m);const W=N*A-T*G;if(W<=0&&A>=0&&G<=0)return y=A/(A-G),s.copy(c).addScaledVector(Fo,y);const P=R*G-N*L;if(P<=0&&L-R>=0&&N-G>=0)return $_.subVectors(m,d),y=(L-R)/(L-R+(N-G)),s.copy(d).addScaledVector($_,y);const C=1/(P+W+I);return M=W*C,y=I*C,s.copy(c).addScaledVector(No,M).addScaledVector(Fo,y)}equals(i){return i.a.equals(this.a)&&i.b.equals(this.b)&&i.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},Xh={h:0,s:0,l:0};function vf(u,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?u+(i-u)*6*s:s<1/2?i:s<2/3?u+(i-u)*6*(2/3-s):u}class Fi{constructor(i,s,c){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(i,s,c)}set(i,s,c){if(s===void 0&&c===void 0){const d=i;d&&d.isColor?this.copy(d):typeof d=="number"?this.setHex(d):typeof d=="string"&&this.setStyle(d)}else this.setRGB(i,s,c);return this}setScalar(i){return this.r=i,this.g=i,this.b=i,this}setHex(i,s=Hr){return i=Math.floor(i),this.r=(i>>16&255)/255,this.g=(i>>8&255)/255,this.b=(i&255)/255,Ki.toWorkingColorSpace(this,s),this}setRGB(i,s,c,d=Ki.workingColorSpace){return this.r=i,this.g=s,this.b=c,Ki.toWorkingColorSpace(this,d),this}setHSL(i,s,c,d=Ki.workingColorSpace){if(i=A1(i,1),s=nr(s,0,1),c=nr(c,0,1),s===0)this.r=this.g=this.b=c;else{const m=c<=.5?c*(1+s):c+s-c*s,M=2*c-m;this.r=vf(M,m,i+1/3),this.g=vf(M,m,i),this.b=vf(M,m,i-1/3)}return Ki.toWorkingColorSpace(this,d),this}setStyle(i,s=Hr){function c(m){m!==void 0&&parseFloat(m)<1&&console.warn("THREE.Color: Alpha component of "+i+" will be ignored.")}let d;if(d=/^(\w+)\(([^\)]*)\)/.exec(i)){let m;const M=d[1],y=d[2];switch(M){case"rgb":case"rgba":if(m=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return c(m[4]),this.setRGB(Math.min(255,parseInt(m[1],10))/255,Math.min(255,parseInt(m[2],10))/255,Math.min(255,parseInt(m[3],10))/255,s);if(m=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return c(m[4]),this.setRGB(Math.min(100,parseInt(m[1],10))/100,Math.min(100,parseInt(m[2],10))/100,Math.min(100,parseInt(m[3],10))/100,s);break;case"hsl":case"hsla":if(m=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return c(m[4]),this.setHSL(parseFloat(m[1])/360,parseFloat(m[2])/100,parseFloat(m[3])/100,s);break;default:console.warn("THREE.Color: Unknown color model "+i)}}else if(d=/^\#([A-Fa-f\d]+)$/.exec(i)){const m=d[1],M=m.length;if(M===3)return this.setRGB(parseInt(m.charAt(0),16)/15,parseInt(m.charAt(1),16)/15,parseInt(m.charAt(2),16)/15,s);if(M===6)return this.setHex(parseInt(m,16),s);console.warn("THREE.Color: Invalid hex color "+i)}else if(i&&i.length>0)return this.setColorName(i,s);return this}setColorName(i,s=Hr){const c=K0[i.toLowerCase()];return c!==void 0?this.setHex(c,s):console.warn("THREE.Color: Unknown color "+i),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(i){return this.r=i.r,this.g=i.g,this.b=i.b,this}copySRGBToLinear(i){return this.r=Yo(i.r),this.g=Yo(i.g),this.b=Yo(i.b),this}copyLinearToSRGB(i){return this.r=af(i.r),this.g=af(i.g),this.b=af(i.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(i=Hr){return Ki.fromWorkingColorSpace(Vn.copy(this),i),Math.round(nr(Vn.r*255,0,255))*65536+Math.round(nr(Vn.g*255,0,255))*256+Math.round(nr(Vn.b*255,0,255))}getHexString(i=Hr){return("000000"+this.getHex(i).toString(16)).slice(-6)}getHSL(i,s=Ki.workingColorSpace){Ki.fromWorkingColorSpace(Vn.copy(this),s);const c=Vn.r,d=Vn.g,m=Vn.b,M=Math.max(c,d,m),y=Math.min(c,d,m);let T,A;const R=(y+M)/2;if(y===M)T=0,A=0;else{const L=M-y;switch(A=R<=.5?L/(M+y):L/(2-M-y),M){case c:T=(d-m)/L+(d<m?6:0);break;case d:T=(m-c)/L+2;break;case m:T=(c-d)/L+4;break}T/=6}return i.h=T,i.s=A,i.l=R,i}getRGB(i,s=Ki.workingColorSpace){return Ki.fromWorkingColorSpace(Vn.copy(this),s),i.r=Vn.r,i.g=Vn.g,i.b=Vn.b,i}getStyle(i=Hr){Ki.fromWorkingColorSpace(Vn.copy(this),i);const s=Vn.r,c=Vn.g,d=Vn.b;return i!==Hr?`color(${i} ${s.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(3)})`:`rgb(${Math.round(s*255)},${Math.round(c*255)},${Math.round(d*255)})`}offsetHSL(i,s,c){return this.getHSL(Vs),this.setHSL(Vs.h+i,Vs.s+s,Vs.l+c)}add(i){return this.r+=i.r,this.g+=i.g,this.b+=i.b,this}addColors(i,s){return this.r=i.r+s.r,this.g=i.g+s.g,this.b=i.b+s.b,this}addScalar(i){return this.r+=i,this.g+=i,this.b+=i,this}sub(i){return this.r=Math.max(0,this.r-i.r),this.g=Math.max(0,this.g-i.g),this.b=Math.max(0,this.b-i.b),this}multiply(i){return this.r*=i.r,this.g*=i.g,this.b*=i.b,this}multiplyScalar(i){return this.r*=i,this.g*=i,this.b*=i,this}lerp(i,s){return this.r+=(i.r-this.r)*s,this.g+=(i.g-this.g)*s,this.b+=(i.b-this.b)*s,this}lerpColors(i,s,c){return this.r=i.r+(s.r-i.r)*c,this.g=i.g+(s.g-i.g)*c,this.b=i.b+(s.b-i.b)*c,this}lerpHSL(i,s){this.getHSL(Vs),i.getHSL(Xh);const c=Jd(Vs.h,Xh.h,s),d=Jd(Vs.s,Xh.s,s),m=Jd(Vs.l,Xh.l,s);return this.setHSL(c,d,m),this}setFromVector3(i){return this.r=i.x,this.g=i.y,this.b=i.z,this}applyMatrix3(i){const s=this.r,c=this.g,d=this.b,m=i.elements;return this.r=m[0]*s+m[3]*c+m[6]*d,this.g=m[1]*s+m[4]*c+m[7]*d,this.b=m[2]*s+m[5]*c+m[8]*d,this}equals(i){return i.r===this.r&&i.g===this.g&&i.b===this.b}fromArray(i,s=0){return this.r=i[s],this.g=i[s+1],this.b=i[s+2],this}toArray(i=[],s=0){return i[s]=this.r,i[s+1]=this.g,i[s+2]=this.b,i}fromBufferAttribute(i,s){return this.r=i.getX(s),this.g=i.getY(s),this.b=i.getZ(s),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Fi;Fi.NAMES=K0;let $T=0;class mu extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Xo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Uf,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fi(0,0,0),this.blendAlpha=0,this.depthFunc=au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(i){this._alphaTest>0!=i>0&&this.version++,this._alphaTest=i}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(i){if(i!==void 0)for(const s in i){const c=i[s];if(c===void 0){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const d=this[s];if(d===void 0){console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`);continue}d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[s]=c}}toJSON(i){const s=i===void 0||typeof i=="string";s&&(i={textures:{},images:{}});const c={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.color&&this.color.isColor&&(c.color=this.color.getHex()),this.roughness!==void 0&&(c.roughness=this.roughness),this.metalness!==void 0&&(c.metalness=this.metalness),this.sheen!==void 0&&(c.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(c.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(c.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(c.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(c.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(c.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(c.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(c.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(c.shininess=this.shininess),this.clearcoat!==void 0&&(c.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(c.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(c.clearcoatMap=this.clearcoatMap.toJSON(i).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(c.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(i).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(c.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(i).uuid,c.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(c.dispersion=this.dispersion),this.iridescence!==void 0&&(c.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(c.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(c.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(c.iridescenceMap=this.iridescenceMap.toJSON(i).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(c.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(i).uuid),this.anisotropy!==void 0&&(c.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(c.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(c.anisotropyMap=this.anisotropyMap.toJSON(i).uuid),this.map&&this.map.isTexture&&(c.map=this.map.toJSON(i).uuid),this.matcap&&this.matcap.isTexture&&(c.matcap=this.matcap.toJSON(i).uuid),this.alphaMap&&this.alphaMap.isTexture&&(c.alphaMap=this.alphaMap.toJSON(i).uuid),this.lightMap&&this.lightMap.isTexture&&(c.lightMap=this.lightMap.toJSON(i).uuid,c.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(c.aoMap=this.aoMap.toJSON(i).uuid,c.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(c.bumpMap=this.bumpMap.toJSON(i).uuid,c.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(c.normalMap=this.normalMap.toJSON(i).uuid,c.normalMapType=this.normalMapType,c.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(c.displacementMap=this.displacementMap.toJSON(i).uuid,c.displacementScale=this.displacementScale,c.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(c.roughnessMap=this.roughnessMap.toJSON(i).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(c.metalnessMap=this.metalnessMap.toJSON(i).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(c.emissiveMap=this.emissiveMap.toJSON(i).uuid),this.specularMap&&this.specularMap.isTexture&&(c.specularMap=this.specularMap.toJSON(i).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(c.specularIntensityMap=this.specularIntensityMap.toJSON(i).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(c.specularColorMap=this.specularColorMap.toJSON(i).uuid),this.envMap&&this.envMap.isTexture&&(c.envMap=this.envMap.toJSON(i).uuid,this.combine!==void 0&&(c.combine=this.combine)),this.envMapRotation!==void 0&&(c.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(c.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(c.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(c.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(c.gradientMap=this.gradientMap.toJSON(i).uuid),this.transmission!==void 0&&(c.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(c.transmissionMap=this.transmissionMap.toJSON(i).uuid),this.thickness!==void 0&&(c.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(c.thicknessMap=this.thicknessMap.toJSON(i).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(c.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(c.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(c.size=this.size),this.shadowSide!==null&&(c.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(c.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(c.blending=this.blending),this.side!==gs&&(c.side=this.side),this.vertexColors===!0&&(c.vertexColors=!0),this.opacity<1&&(c.opacity=this.opacity),this.transparent===!0&&(c.transparent=!0),this.blendSrc!==Df&&(c.blendSrc=this.blendSrc),this.blendDst!==Uf&&(c.blendDst=this.blendDst),this.blendEquation!==Fa&&(c.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(c.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(c.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(c.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(c.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(c.blendAlpha=this.blendAlpha),this.depthFunc!==au&&(c.depthFunc=this.depthFunc),this.depthTest===!1&&(c.depthTest=this.depthTest),this.depthWrite===!1&&(c.depthWrite=this.depthWrite),this.colorWrite===!1&&(c.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(c.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(c.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(c.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(c.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(c.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(c.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(c.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(c.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(c.rotation=this.rotation),this.polygonOffset===!0&&(c.polygonOffset=!0),this.polygonOffsetFactor!==0&&(c.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(c.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(c.linewidth=this.linewidth),this.dashSize!==void 0&&(c.dashSize=this.dashSize),this.gapSize!==void 0&&(c.gapSize=this.gapSize),this.scale!==void 0&&(c.scale=this.scale),this.dithering===!0&&(c.dithering=!0),this.alphaTest>0&&(c.alphaTest=this.alphaTest),this.alphaHash===!0&&(c.alphaHash=!0),this.alphaToCoverage===!0&&(c.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(c.premultipliedAlpha=!0),this.forceSinglePass===!0&&(c.forceSinglePass=!0),this.wireframe===!0&&(c.wireframe=!0),this.wireframeLinewidth>1&&(c.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(c.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(c.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(c.flatShading=!0),this.visible===!1&&(c.visible=!1),this.toneMapped===!1&&(c.toneMapped=!1),this.fog===!1&&(c.fog=!1),Object.keys(this.userData).length>0&&(c.userData=this.userData);function d(m){const M=[];for(const y in m){const T=m[y];delete T.metadata,M.push(T)}return M}if(s){const m=d(i.textures),M=d(i.images);m.length>0&&(c.textures=m),M.length>0&&(c.images=M)}return c}clone(){return new this.constructor().copy(this)}copy(i){this.name=i.name,this.blending=i.blending,this.side=i.side,this.vertexColors=i.vertexColors,this.opacity=i.opacity,this.transparent=i.transparent,this.blendSrc=i.blendSrc,this.blendDst=i.blendDst,this.blendEquation=i.blendEquation,this.blendSrcAlpha=i.blendSrcAlpha,this.blendDstAlpha=i.blendDstAlpha,this.blendEquationAlpha=i.blendEquationAlpha,this.blendColor.copy(i.blendColor),this.blendAlpha=i.blendAlpha,this.depthFunc=i.depthFunc,this.depthTest=i.depthTest,this.depthWrite=i.depthWrite,this.stencilWriteMask=i.stencilWriteMask,this.stencilFunc=i.stencilFunc,this.stencilRef=i.stencilRef,this.stencilFuncMask=i.stencilFuncMask,this.stencilFail=i.stencilFail,this.stencilZFail=i.stencilZFail,this.stencilZPass=i.stencilZPass,this.stencilWrite=i.stencilWrite;const s=i.clippingPlanes;let c=null;if(s!==null){const d=s.length;c=new Array(d);for(let m=0;m!==d;++m)c[m]=s[m].clone()}return this.clippingPlanes=c,this.clipIntersection=i.clipIntersection,this.clipShadows=i.clipShadows,this.shadowSide=i.shadowSide,this.colorWrite=i.colorWrite,this.precision=i.precision,this.polygonOffset=i.polygonOffset,this.polygonOffsetFactor=i.polygonOffsetFactor,this.polygonOffsetUnits=i.polygonOffsetUnits,this.dithering=i.dithering,this.alphaTest=i.alphaTest,this.alphaHash=i.alphaHash,this.alphaToCoverage=i.alphaToCoverage,this.premultipliedAlpha=i.premultipliedAlpha,this.forceSinglePass=i.forceSinglePass,this.visible=i.visible,this.toneMapped=i.toneMapped,this.userData=JSON.parse(JSON.stringify(i.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(i){i===!0&&this.version++}}class J0 extends mu{constructor(i){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(i)}copy(i){return super.copy(i),this.color.copy(i.color),this.map=i.map,this.lightMap=i.lightMap,this.lightMapIntensity=i.lightMapIntensity,this.aoMap=i.aoMap,this.aoMapIntensity=i.aoMapIntensity,this.specularMap=i.specularMap,this.alphaMap=i.alphaMap,this.envMap=i.envMap,this.envMapRotation.copy(i.envMapRotation),this.combine=i.combine,this.reflectivity=i.reflectivity,this.refractionRatio=i.refractionRatio,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.wireframeLinecap=i.wireframeLinecap,this.wireframeLinejoin=i.wireframeLinejoin,this.fog=i.fog,this}}const yn=new _e,qh=new Oi;class qr{constructor(i,s,c=!1){if(Array.isArray(i))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=i,this.itemSize=s,this.count=i!==void 0?i.length/s:0,this.normalized=c,this.usage=F_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ks,this.version=0}onUploadCallback(){}set needsUpdate(i){i===!0&&this.version++}get updateRange(){return UT("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(i){return this.usage=i,this}addUpdateRange(i,s){this.updateRanges.push({start:i,count:s})}clearUpdateRanges(){this.updateRanges.length=0}copy(i){return this.name=i.name,this.array=new i.array.constructor(i.array),this.itemSize=i.itemSize,this.count=i.count,this.normalized=i.normalized,this.usage=i.usage,this.gpuType=i.gpuType,this}copyAt(i,s,c){i*=this.itemSize,c*=s.itemSize;for(let d=0,m=this.itemSize;d<m;d++)this.array[i+d]=s.array[c+d];return this}copyArray(i){return this.array.set(i),this}applyMatrix3(i){if(this.itemSize===2)for(let s=0,c=this.count;s<c;s++)qh.fromBufferAttribute(this,s),qh.applyMatrix3(i),this.setXY(s,qh.x,qh.y);else if(this.itemSize===3)for(let s=0,c=this.count;s<c;s++)yn.fromBufferAttribute(this,s),yn.applyMatrix3(i),this.setXYZ(s,yn.x,yn.y,yn.z);return this}applyMatrix4(i){for(let s=0,c=this.count;s<c;s++)yn.fromBufferAttribute(this,s),yn.applyMatrix4(i),this.setXYZ(s,yn.x,yn.y,yn.z);return this}applyNormalMatrix(i){for(let s=0,c=this.count;s<c;s++)yn.fromBufferAttribute(this,s),yn.applyNormalMatrix(i),this.setXYZ(s,yn.x,yn.y,yn.z);return this}transformDirection(i){for(let s=0,c=this.count;s<c;s++)yn.fromBufferAttribute(this,s),yn.transformDirection(i),this.setXYZ(s,yn.x,yn.y,yn.z);return this}set(i,s=0){return this.array.set(i,s),this}getComponent(i,s){let c=this.array[i*this.itemSize+s];return this.normalized&&(c=Yc(c,this.array)),c}setComponent(i,s,c){return this.normalized&&(c=ir(c,this.array)),this.array[i*this.itemSize+s]=c,this}getX(i){let s=this.array[i*this.itemSize];return this.normalized&&(s=Yc(s,this.array)),s}setX(i,s){return this.normalized&&(s=ir(s,this.array)),this.array[i*this.itemSize]=s,this}getY(i){let s=this.array[i*this.itemSize+1];return this.normalized&&(s=Yc(s,this.array)),s}setY(i,s){return this.normalized&&(s=ir(s,this.array)),this.array[i*this.itemSize+1]=s,this}getZ(i){let s=this.array[i*this.itemSize+2];return this.normalized&&(s=Yc(s,this.array)),s}setZ(i,s){return this.normalized&&(s=ir(s,this.array)),this.array[i*this.itemSize+2]=s,this}getW(i){let s=this.array[i*this.itemSize+3];return this.normalized&&(s=Yc(s,this.array)),s}setW(i,s){return this.normalized&&(s=ir(s,this.array)),this.array[i*this.itemSize+3]=s,this}setXY(i,s,c){return i*=this.itemSize,this.normalized&&(s=ir(s,this.array),c=ir(c,this.array)),this.array[i+0]=s,this.array[i+1]=c,this}setXYZ(i,s,c,d){return i*=this.itemSize,this.normalized&&(s=ir(s,this.array),c=ir(c,this.array),d=ir(d,this.array)),this.array[i+0]=s,this.array[i+1]=c,this.array[i+2]=d,this}setXYZW(i,s,c,d,m){return i*=this.itemSize,this.normalized&&(s=ir(s,this.array),c=ir(c,this.array),d=ir(d,this.array),m=ir(m,this.array)),this.array[i+0]=s,this.array[i+1]=c,this.array[i+2]=d,this.array[i+3]=m,this}onUpload(i){return this.onUploadCallback=i,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const i={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(i.name=this.name),this.usage!==F_&&(i.usage=this.usage),i}}class j0 extends qr{constructor(i,s,c){super(new Uint16Array(i),s,c)}}class Q0 extends qr{constructor(i,s,c){super(new Uint32Array(i),s,c)}}class Ys extends qr{constructor(i,s,c){super(new Float32Array(i),s,c)}}let KT=0;const Sr=new dn,yf=new sr,Oo=new _e,pr=new sl,Jc=new sl,wn=new _e;class Ga extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(i){return Array.isArray(i)?this.index=new(q0(i)?Q0:j0)(i,1):this.index=i,this}getAttribute(i){return this.attributes[i]}setAttribute(i,s){return this.attributes[i]=s,this}deleteAttribute(i){return delete this.attributes[i],this}hasAttribute(i){return this.attributes[i]!==void 0}addGroup(i,s,c=0){this.groups.push({start:i,count:s,materialIndex:c})}clearGroups(){this.groups=[]}setDrawRange(i,s){this.drawRange.start=i,this.drawRange.count=s}applyMatrix4(i){const s=this.attributes.position;s!==void 0&&(s.applyMatrix4(i),s.needsUpdate=!0);const c=this.attributes.normal;if(c!==void 0){const m=new Ti().getNormalMatrix(i);c.applyNormalMatrix(m),c.needsUpdate=!0}const d=this.attributes.tangent;return d!==void 0&&(d.transformDirection(i),d.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(i){return Sr.makeRotationFromQuaternion(i),this.applyMatrix4(Sr),this}rotateX(i){return Sr.makeRotationX(i),this.applyMatrix4(Sr),this}rotateY(i){return Sr.makeRotationY(i),this.applyMatrix4(Sr),this}rotateZ(i){return Sr.makeRotationZ(i),this.applyMatrix4(Sr),this}translate(i,s,c){return Sr.makeTranslation(i,s,c),this.applyMatrix4(Sr),this}scale(i,s,c){return Sr.makeScale(i,s,c),this.applyMatrix4(Sr),this}lookAt(i){return yf.lookAt(i),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(i){const s=[];for(let c=0,d=i.length;c<d;c++){const m=i[c];s.push(m.x,m.y,m.z||0)}return this.setAttribute("position",new Ys(s,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const i=this.attributes.position,s=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(i!==void 0){if(this.boundingBox.setFromBufferAttribute(i),s)for(let c=0,d=s.length;c<d;c++){const m=s[c];pr.setFromBufferAttribute(m),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hf);const i=this.attributes.position,s=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _e,1/0);return}if(i){const c=this.boundingSphere.center;if(pr.setFromBufferAttribute(i),s)for(let m=0,M=s.length;m<M;m++){const y=s[m];Jc.setFromBufferAttribute(y),this.morphTargetsRelative?(wn.addVectors(pr.min,Jc.min),pr.expandByPoint(wn),wn.addVectors(pr.max,Jc.max),pr.expandByPoint(wn)):(pr.expandByPoint(Jc.min),pr.expandByPoint(Jc.max))}pr.getCenter(c);let d=0;for(let m=0,M=i.count;m<M;m++)wn.fromBufferAttribute(i,m),d=Math.max(d,c.distanceToSquared(wn));if(s)for(let m=0,M=s.length;m<M;m++){const y=s[m],T=this.morphTargetsRelative;for(let A=0,R=y.count;A<R;A++)wn.fromBufferAttribute(y,A),T&&(Oo.fromBufferAttribute(i,A),wn.add(Oo)),d=Math.max(d,c.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(d),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const i=this.index,s=this.attributes;if(i===null||s.position===void 0||s.normal===void 0||s.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const c=s.position,d=s.normal,m=s.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qr(new Float32Array(4*c.count),4));const M=this.getAttribute("tangent"),y=[],T=[];for(let Ne=0;Ne<c.count;Ne++)y[Ne]=new _e,T[Ne]=new _e;const A=new _e,R=new _e,L=new _e,I=new Oi,N=new Oi,G=new Oi,W=new _e,P=new _e;function C(Ne,K,H){A.fromBufferAttribute(c,Ne),R.fromBufferAttribute(c,K),L.fromBufferAttribute(c,H),I.fromBufferAttribute(m,Ne),N.fromBufferAttribute(m,K),G.fromBufferAttribute(m,H),R.sub(A),L.sub(A),N.sub(I),G.sub(I);const Me=1/(N.x*G.y-G.x*N.y);isFinite(Me)&&(W.copy(R).multiplyScalar(G.y).addScaledVector(L,-N.y).multiplyScalar(Me),P.copy(L).multiplyScalar(N.x).addScaledVector(R,-G.x).multiplyScalar(Me),y[Ne].add(W),y[K].add(W),y[H].add(W),T[Ne].add(P),T[K].add(P),T[H].add(P))}let $=this.groups;$.length===0&&($=[{start:0,count:i.count}]);for(let Ne=0,K=$.length;Ne<K;++Ne){const H=$[Ne],Me=H.start,Ie=H.count;for(let he=Me,qe=Me+Ie;he<qe;he+=3)C(i.getX(he+0),i.getX(he+1),i.getX(he+2))}const X=new _e,ee=new _e,xe=new _e,se=new _e;function ae(Ne){xe.fromBufferAttribute(d,Ne),se.copy(xe);const K=y[Ne];X.copy(K),X.sub(xe.multiplyScalar(xe.dot(K))).normalize(),ee.crossVectors(se,K);const Me=ee.dot(T[Ne])<0?-1:1;M.setXYZW(Ne,X.x,X.y,X.z,Me)}for(let Ne=0,K=$.length;Ne<K;++Ne){const H=$[Ne],Me=H.start,Ie=H.count;for(let he=Me,qe=Me+Ie;he<qe;he+=3)ae(i.getX(he+0)),ae(i.getX(he+1)),ae(i.getX(he+2))}}computeVertexNormals(){const i=this.index,s=this.getAttribute("position");if(s!==void 0){let c=this.getAttribute("normal");if(c===void 0)c=new qr(new Float32Array(s.count*3),3),this.setAttribute("normal",c);else for(let I=0,N=c.count;I<N;I++)c.setXYZ(I,0,0,0);const d=new _e,m=new _e,M=new _e,y=new _e,T=new _e,A=new _e,R=new _e,L=new _e;if(i)for(let I=0,N=i.count;I<N;I+=3){const G=i.getX(I+0),W=i.getX(I+1),P=i.getX(I+2);d.fromBufferAttribute(s,G),m.fromBufferAttribute(s,W),M.fromBufferAttribute(s,P),R.subVectors(M,m),L.subVectors(d,m),R.cross(L),y.fromBufferAttribute(c,G),T.fromBufferAttribute(c,W),A.fromBufferAttribute(c,P),y.add(R),T.add(R),A.add(R),c.setXYZ(G,y.x,y.y,y.z),c.setXYZ(W,T.x,T.y,T.z),c.setXYZ(P,A.x,A.y,A.z)}else for(let I=0,N=s.count;I<N;I+=3)d.fromBufferAttribute(s,I+0),m.fromBufferAttribute(s,I+1),M.fromBufferAttribute(s,I+2),R.subVectors(M,m),L.subVectors(d,m),R.cross(L),c.setXYZ(I+0,R.x,R.y,R.z),c.setXYZ(I+1,R.x,R.y,R.z),c.setXYZ(I+2,R.x,R.y,R.z);this.normalizeNormals(),c.needsUpdate=!0}}normalizeNormals(){const i=this.attributes.normal;for(let s=0,c=i.count;s<c;s++)wn.fromBufferAttribute(i,s),wn.normalize(),i.setXYZ(s,wn.x,wn.y,wn.z)}toNonIndexed(){function i(y,T){const A=y.array,R=y.itemSize,L=y.normalized,I=new A.constructor(T.length*R);let N=0,G=0;for(let W=0,P=T.length;W<P;W++){y.isInterleavedBufferAttribute?N=T[W]*y.data.stride+y.offset:N=T[W]*R;for(let C=0;C<R;C++)I[G++]=A[N++]}return new qr(I,R,L)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const s=new Ga,c=this.index.array,d=this.attributes;for(const y in d){const T=d[y],A=i(T,c);s.setAttribute(y,A)}const m=this.morphAttributes;for(const y in m){const T=[],A=m[y];for(let R=0,L=A.length;R<L;R++){const I=A[R],N=i(I,c);T.push(N)}s.morphAttributes[y]=T}s.morphTargetsRelative=this.morphTargetsRelative;const M=this.groups;for(let y=0,T=M.length;y<T;y++){const A=M[y];s.addGroup(A.start,A.count,A.materialIndex)}return s}toJSON(){const i={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),Object.keys(this.userData).length>0&&(i.userData=this.userData),this.parameters!==void 0){const T=this.parameters;for(const A in T)T[A]!==void 0&&(i[A]=T[A]);return i}i.data={attributes:{}};const s=this.index;s!==null&&(i.data.index={type:s.array.constructor.name,array:Array.prototype.slice.call(s.array)});const c=this.attributes;for(const T in c){const A=c[T];i.data.attributes[T]=A.toJSON(i.data)}const d={};let m=!1;for(const T in this.morphAttributes){const A=this.morphAttributes[T],R=[];for(let L=0,I=A.length;L<I;L++){const N=A[L];R.push(N.toJSON(i.data))}R.length>0&&(d[T]=R,m=!0)}m&&(i.data.morphAttributes=d,i.data.morphTargetsRelative=this.morphTargetsRelative);const M=this.groups;M.length>0&&(i.data.groups=JSON.parse(JSON.stringify(M)));const y=this.boundingSphere;return y!==null&&(i.data.boundingSphere={center:y.center.toArray(),radius:y.radius}),i}clone(){return new this.constructor().copy(this)}copy(i){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const s={};this.name=i.name;const c=i.index;c!==null&&this.setIndex(c.clone(s));const d=i.attributes;for(const A in d){const R=d[A];this.setAttribute(A,R.clone(s))}const m=i.morphAttributes;for(const A in m){const R=[],L=m[A];for(let I=0,N=L.length;I<N;I++)R.push(L[I].clone(s));this.morphAttributes[A]=R}this.morphTargetsRelative=i.morphTargetsRelative;const M=i.groups;for(let A=0,R=M.length;A<R;A++){const L=M[A];this.addGroup(L.start,L.count,L.materialIndex)}const y=i.boundingBox;y!==null&&(this.boundingBox=y.clone());const T=i.boundingSphere;return T!==null&&(this.boundingSphere=T.clone()),this.drawRange.start=i.drawRange.start,this.drawRange.count=i.drawRange.count,this.userData=i.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K_=new dn,Ca=new HT,Yh=new Hf,J_=new _e,Bo=new _e,zo=new _e,Vo=new _e,Mf=new _e,Zh=new _e,$h=new Oi,Kh=new Oi,Jh=new Oi,j_=new _e,Q_=new _e,e0=new _e,jh=new _e,Qh=new _e;class _r extends sr{constructor(i=new Ga,s=new J0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=i,this.material=s,this.updateMorphTargets()}copy(i,s){return super.copy(i,s),i.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=i.morphTargetInfluences.slice()),i.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},i.morphTargetDictionary)),this.material=Array.isArray(i.material)?i.material.slice():i.material,this.geometry=i.geometry,this}updateMorphTargets(){const s=this.geometry.morphAttributes,c=Object.keys(s);if(c.length>0){const d=s[c[0]];if(d!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let m=0,M=d.length;m<M;m++){const y=d[m].name||String(m);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=m}}}}getVertexPosition(i,s){const c=this.geometry,d=c.attributes.position,m=c.morphAttributes.position,M=c.morphTargetsRelative;s.fromBufferAttribute(d,i);const y=this.morphTargetInfluences;if(m&&y){Zh.set(0,0,0);for(let T=0,A=m.length;T<A;T++){const R=y[T],L=m[T];R!==0&&(Mf.fromBufferAttribute(L,i),M?Zh.addScaledVector(Mf,R):Zh.addScaledVector(Mf.sub(s),R))}s.add(Zh)}return s}raycast(i,s){const c=this.geometry,d=this.material,m=this.matrixWorld;d!==void 0&&(c.boundingSphere===null&&c.computeBoundingSphere(),Yh.copy(c.boundingSphere),Yh.applyMatrix4(m),Ca.copy(i.ray).recast(i.near),!(Yh.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(Yh,J_)===null||Ca.origin.distanceToSquared(J_)>(i.far-i.near)**2))&&(K_.copy(m).invert(),Ca.copy(i.ray).applyMatrix4(K_),!(c.boundingBox!==null&&Ca.intersectsBox(c.boundingBox)===!1)&&this._computeIntersections(i,s,Ca)))}_computeIntersections(i,s,c){let d;const m=this.geometry,M=this.material,y=m.index,T=m.attributes.position,A=m.attributes.uv,R=m.attributes.uv1,L=m.attributes.normal,I=m.groups,N=m.drawRange;if(y!==null)if(Array.isArray(M))for(let G=0,W=I.length;G<W;G++){const P=I[G],C=M[P.materialIndex],$=Math.max(P.start,N.start),X=Math.min(y.count,Math.min(P.start+P.count,N.start+N.count));for(let ee=$,xe=X;ee<xe;ee+=3){const se=y.getX(ee),ae=y.getX(ee+1),Ne=y.getX(ee+2);d=eu(this,C,i,c,A,R,L,se,ae,Ne),d&&(d.faceIndex=Math.floor(ee/3),d.face.materialIndex=P.materialIndex,s.push(d))}}else{const G=Math.max(0,N.start),W=Math.min(y.count,N.start+N.count);for(let P=G,C=W;P<C;P+=3){const $=y.getX(P),X=y.getX(P+1),ee=y.getX(P+2);d=eu(this,M,i,c,A,R,L,$,X,ee),d&&(d.faceIndex=Math.floor(P/3),s.push(d))}}else if(T!==void 0)if(Array.isArray(M))for(let G=0,W=I.length;G<W;G++){const P=I[G],C=M[P.materialIndex],$=Math.max(P.start,N.start),X=Math.min(T.count,Math.min(P.start+P.count,N.start+N.count));for(let ee=$,xe=X;ee<xe;ee+=3){const se=ee,ae=ee+1,Ne=ee+2;d=eu(this,C,i,c,A,R,L,se,ae,Ne),d&&(d.faceIndex=Math.floor(ee/3),d.face.materialIndex=P.materialIndex,s.push(d))}}else{const G=Math.max(0,N.start),W=Math.min(T.count,N.start+N.count);for(let P=G,C=W;P<C;P+=3){const $=P,X=P+1,ee=P+2;d=eu(this,M,i,c,A,R,L,$,X,ee),d&&(d.faceIndex=Math.floor(P/3),s.push(d))}}}}function JT(u,i,s,c,d,m,M,y){let T;if(i.side===rr?T=c.intersectTriangle(M,m,d,!0,y):T=c.intersectTriangle(d,m,M,i.side===gs,y),T===null)return null;Qh.copy(y),Qh.applyMatrix4(u.matrixWorld);const A=s.ray.origin.distanceTo(Qh);return A<s.near||A>s.far?null:{distance:A,point:Qh.clone(),object:u}}function eu(u,i,s,c,d,m,M,y,T,A){u.getVertexPosition(y,Bo),u.getVertexPosition(T,zo),u.getVertexPosition(A,Vo);const R=JT(u,i,s,c,Bo,zo,Vo,jh);if(R){d&&($h.fromBufferAttribute(d,y),Kh.fromBufferAttribute(d,T),Jh.fromBufferAttribute(d,A),R.uv=Wr.getInterpolation(jh,Bo,zo,Vo,$h,Kh,Jh,new Oi)),m&&($h.fromBufferAttribute(m,y),Kh.fromBufferAttribute(m,T),Jh.fromBufferAttribute(m,A),R.uv1=Wr.getInterpolation(jh,Bo,zo,Vo,$h,Kh,Jh,new Oi)),M&&(j_.fromBufferAttribute(M,y),Q_.fromBufferAttribute(M,T),e0.fromBufferAttribute(M,A),R.normal=Wr.getInterpolation(jh,Bo,zo,Vo,j_,Q_,e0,new _e),R.normal.dot(c.direction)>0&&R.normal.multiplyScalar(-1));const L={a:y,b:T,c:A,normal:new _e,materialIndex:0};Wr.getNormal(Bo,zo,Vo,L.normal),R.face=L}return R}class al extends Ga{constructor(i=1,s=1,c=1,d=1,m=1,M=1){super(),this.type="BoxGeometry",this.parameters={width:i,height:s,depth:c,widthSegments:d,heightSegments:m,depthSegments:M};const y=this;d=Math.floor(d),m=Math.floor(m),M=Math.floor(M);const T=[],A=[],R=[],L=[];let I=0,N=0;G("z","y","x",-1,-1,c,s,i,M,m,0),G("z","y","x",1,-1,c,s,-i,M,m,1),G("x","z","y",1,1,i,c,s,d,M,2),G("x","z","y",1,-1,i,c,-s,d,M,3),G("x","y","z",1,-1,i,s,c,d,m,4),G("x","y","z",-1,-1,i,s,-c,d,m,5),this.setIndex(T),this.setAttribute("position",new Ys(A,3)),this.setAttribute("normal",new Ys(R,3)),this.setAttribute("uv",new Ys(L,2));function G(W,P,C,$,X,ee,xe,se,ae,Ne,K){const H=ee/ae,Me=xe/Ne,Ie=ee/2,he=xe/2,qe=se/2,Xe=ae+1,gt=Ne+1;let ht=0,De=0;const vt=new _e;for(let ft=0;ft<gt;ft++){const Kt=ft*Me-he;for(let vi=0;vi<Xe;vi++){const Hi=vi*H-Ie;vt[W]=Hi*$,vt[P]=Kt*X,vt[C]=qe,A.push(vt.x,vt.y,vt.z),vt[W]=0,vt[P]=0,vt[C]=se>0?1:-1,R.push(vt.x,vt.y,vt.z),L.push(vi/ae),L.push(1-ft/Ne),ht+=1}}for(let ft=0;ft<Ne;ft++)for(let Kt=0;Kt<ae;Kt++){const vi=I+Kt+Xe*ft,Hi=I+Kt+Xe*(ft+1),Fe=I+(Kt+1)+Xe*(ft+1),yt=I+(Kt+1)+Xe*ft;T.push(vi,Hi,yt),T.push(Hi,Fe,yt),De+=6}y.addGroup(N,De,K),N+=De,I+=ht}}copy(i){return super.copy(i),this.parameters=Object.assign({},i.parameters),this}static fromJSON(i){return new al(i.width,i.height,i.depth,i.widthSegments,i.heightSegments,i.depthSegments)}}function Jo(u){const i={};for(const s in u){i[s]={};for(const c in u[s]){const d=u[s][c];d&&(d.isColor||d.isMatrix3||d.isMatrix4||d.isVector2||d.isVector3||d.isVector4||d.isTexture||d.isQuaternion)?d.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),i[s][c]=null):i[s][c]=d.clone():Array.isArray(d)?i[s][c]=d.slice():i[s][c]=d}}return i}function Jn(u){const i={};for(let s=0;s<u.length;s++){const c=Jo(u[s]);for(const d in c)i[d]=c[d]}return i}function jT(u){const i=[];for(let s=0;s<u.length;s++)i.push(u[s].clone());return i}function ex(u){const i=u.getRenderTarget();return i===null?u.outputColorSpace:i.isXRRenderTarget===!0?i.texture.colorSpace:Ki.workingColorSpace}const QT={clone:Jo,merge:Jn},eA=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,tA=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Tr extends mu{constructor(i){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,i!==void 0&&this.setValues(i)}copy(i){return super.copy(i),this.fragmentShader=i.fragmentShader,this.vertexShader=i.vertexShader,this.uniforms=Jo(i.uniforms),this.uniformsGroups=jT(i.uniformsGroups),this.defines=Object.assign({},i.defines),this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.fog=i.fog,this.lights=i.lights,this.clipping=i.clipping,this.extensions=Object.assign({},i.extensions),this.glslVersion=i.glslVersion,this}toJSON(i){const s=super.toJSON(i);s.glslVersion=this.glslVersion,s.uniforms={};for(const d in this.uniforms){const M=this.uniforms[d].value;M&&M.isTexture?s.uniforms[d]={type:"t",value:M.toJSON(i).uuid}:M&&M.isColor?s.uniforms[d]={type:"c",value:M.getHex()}:M&&M.isVector2?s.uniforms[d]={type:"v2",value:M.toArray()}:M&&M.isVector3?s.uniforms[d]={type:"v3",value:M.toArray()}:M&&M.isVector4?s.uniforms[d]={type:"v4",value:M.toArray()}:M&&M.isMatrix3?s.uniforms[d]={type:"m3",value:M.toArray()}:M&&M.isMatrix4?s.uniforms[d]={type:"m4",value:M.toArray()}:s.uniforms[d]={value:M}}Object.keys(this.defines).length>0&&(s.defines=this.defines),s.vertexShader=this.vertexShader,s.fragmentShader=this.fragmentShader,s.lights=this.lights,s.clipping=this.clipping;const c={};for(const d in this.extensions)this.extensions[d]===!0&&(c[d]=!0);return Object.keys(c).length>0&&(s.extensions=c),s}}class tx extends sr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ms}copy(i,s){return super.copy(i,s),this.matrixWorldInverse.copy(i.matrixWorldInverse),this.projectionMatrix.copy(i.projectionMatrix),this.projectionMatrixInverse.copy(i.projectionMatrixInverse),this.coordinateSystem=i.coordinateSystem,this}getWorldDirection(i){return super.getWorldDirection(i).negate()}updateMatrixWorld(i){super.updateMatrixWorld(i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(i,s){super.updateWorldMatrix(i,s),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gs=new _e,t0=new Oi,i0=new Oi;class mr extends tx{constructor(i=50,s=1,c=.1,d=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=i,this.zoom=1,this.near=c,this.far=d,this.focus=10,this.aspect=s,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(i,s){return super.copy(i,s),this.fov=i.fov,this.zoom=i.zoom,this.near=i.near,this.far=i.far,this.focus=i.focus,this.aspect=i.aspect,this.view=i.view===null?null:Object.assign({},i.view),this.filmGauge=i.filmGauge,this.filmOffset=i.filmOffset,this}setFocalLength(i){const s=.5*this.getFilmHeight()/i;this.fov=If*2*Math.atan(s),this.updateProjectionMatrix()}getFocalLength(){const i=Math.tan(Kd*.5*this.fov);return .5*this.getFilmHeight()/i}getEffectiveFOV(){return If*2*Math.atan(Math.tan(Kd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(i,s,c){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Gs.x,Gs.y).multiplyScalar(-i/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),c.set(Gs.x,Gs.y).multiplyScalar(-i/Gs.z)}getViewSize(i,s){return this.getViewBounds(i,t0,i0),s.subVectors(i0,t0)}setViewOffset(i,s,c,d,m,M){this.aspect=i/s,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=s,this.view.offsetX=c,this.view.offsetY=d,this.view.width=m,this.view.height=M,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let s=i*Math.tan(Kd*.5*this.fov)/this.zoom,c=2*s,d=this.aspect*c,m=-.5*d;const M=this.view;if(this.view!==null&&this.view.enabled){const T=M.fullWidth,A=M.fullHeight;m+=M.offsetX*d/T,s-=M.offsetY*c/A,d*=M.width/T,c*=M.height/A}const y=this.filmOffset;y!==0&&(m+=i*y/this.getFilmWidth()),this.projectionMatrix.makePerspective(m,m+d,s,s-c,i,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(i){const s=super.toJSON(i);return s.object.fov=this.fov,s.object.zoom=this.zoom,s.object.near=this.near,s.object.far=this.far,s.object.focus=this.focus,s.object.aspect=this.aspect,this.view!==null&&(s.object.view=Object.assign({},this.view)),s.object.filmGauge=this.filmGauge,s.object.filmOffset=this.filmOffset,s}}const Go=-90,Ho=1;class iA extends sr{constructor(i,s,c){super(),this.type="CubeCamera",this.renderTarget=c,this.coordinateSystem=null,this.activeMipmapLevel=0;const d=new mr(Go,Ho,i,s);d.layers=this.layers,this.add(d);const m=new mr(Go,Ho,i,s);m.layers=this.layers,this.add(m);const M=new mr(Go,Ho,i,s);M.layers=this.layers,this.add(M);const y=new mr(Go,Ho,i,s);y.layers=this.layers,this.add(y);const T=new mr(Go,Ho,i,s);T.layers=this.layers,this.add(T);const A=new mr(Go,Ho,i,s);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){const i=this.coordinateSystem,s=this.children.concat(),[c,d,m,M,y,T]=s;for(const A of s)this.remove(A);if(i===ms)c.up.set(0,1,0),c.lookAt(1,0,0),d.up.set(0,1,0),d.lookAt(-1,0,0),m.up.set(0,0,-1),m.lookAt(0,1,0),M.up.set(0,0,1),M.lookAt(0,-1,0),y.up.set(0,1,0),y.lookAt(0,0,1),T.up.set(0,1,0),T.lookAt(0,0,-1);else if(i===hu)c.up.set(0,-1,0),c.lookAt(-1,0,0),d.up.set(0,-1,0),d.lookAt(1,0,0),m.up.set(0,0,1),m.lookAt(0,1,0),M.up.set(0,0,-1),M.lookAt(0,-1,0),y.up.set(0,-1,0),y.lookAt(0,0,1),T.up.set(0,-1,0),T.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+i);for(const A of s)this.add(A),A.updateMatrixWorld()}update(i,s){this.parent===null&&this.updateMatrixWorld();const{renderTarget:c,activeMipmapLevel:d}=this;this.coordinateSystem!==i.coordinateSystem&&(this.coordinateSystem=i.coordinateSystem,this.updateCoordinateSystem());const[m,M,y,T,A,R]=this.children,L=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.xr.enabled;i.xr.enabled=!1;const W=c.texture.generateMipmaps;c.texture.generateMipmaps=!1,i.setRenderTarget(c,0,d),i.render(s,m),i.setRenderTarget(c,1,d),i.render(s,M),i.setRenderTarget(c,2,d),i.render(s,y),i.setRenderTarget(c,3,d),i.render(s,T),i.setRenderTarget(c,4,d),i.render(s,A),c.texture.generateMipmaps=W,i.setRenderTarget(c,5,d),i.render(s,R),i.setRenderTarget(L,I,N),i.xr.enabled=G,c.texture.needsPMREMUpdate=!0}}class ix extends Hn{constructor(i,s,c,d,m,M,y,T,A,R){i=i!==void 0?i:[],s=s!==void 0?s:Zo,super(i,s,c,d,m,M,y,T,A,R),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(i){this.image=i}}class nA extends Va{constructor(i=1,s={}){super(i,i,s),this.isWebGLCubeRenderTarget=!0;const c={width:i,height:i,depth:1},d=[c,c,c,c,c,c];this.texture=new ix(d,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:gr}fromEquirectangularTexture(i,s){this.texture.type=s.type,this.texture.colorSpace=s.colorSpace,this.texture.generateMipmaps=s.generateMipmaps,this.texture.minFilter=s.minFilter,this.texture.magFilter=s.magFilter;const c={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},d=new al(5,5,5),m=new Tr({name:"CubemapFromEquirect",uniforms:Jo(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,side:rr,blending:Xs});m.uniforms.tEquirect.value=s;const M=new _r(d,m),y=s.minFilter;return s.minFilter===za&&(s.minFilter=gr),new iA(1,10,this).update(i,M),s.minFilter=y,M.geometry.dispose(),M.material.dispose(),this}clear(i,s,c,d){const m=i.getRenderTarget();for(let M=0;M<6;M++)i.setRenderTarget(this,M),i.clear(s,c,d);i.setRenderTarget(m)}}const Sf=new _e,rA=new _e,sA=new Ti;class Ua{constructor(i=new _e(1,0,0),s=0){this.isPlane=!0,this.normal=i,this.constant=s}set(i,s){return this.normal.copy(i),this.constant=s,this}setComponents(i,s,c,d){return this.normal.set(i,s,c),this.constant=d,this}setFromNormalAndCoplanarPoint(i,s){return this.normal.copy(i),this.constant=-s.dot(this.normal),this}setFromCoplanarPoints(i,s,c){const d=Sf.subVectors(c,s).cross(rA.subVectors(i,s)).normalize();return this.setFromNormalAndCoplanarPoint(d,i),this}copy(i){return this.normal.copy(i.normal),this.constant=i.constant,this}normalize(){const i=1/this.normal.length();return this.normal.multiplyScalar(i),this.constant*=i,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(i){return this.normal.dot(i)+this.constant}distanceToSphere(i){return this.distanceToPoint(i.center)-i.radius}projectPoint(i,s){return s.copy(i).addScaledVector(this.normal,-this.distanceToPoint(i))}intersectLine(i,s){const c=i.delta(Sf),d=this.normal.dot(c);if(d===0)return this.distanceToPoint(i.start)===0?s.copy(i.start):null;const m=-(i.start.dot(this.normal)+this.constant)/d;return m<0||m>1?null:s.copy(i.start).addScaledVector(c,m)}intersectsLine(i){const s=this.distanceToPoint(i.start),c=this.distanceToPoint(i.end);return s<0&&c>0||c<0&&s>0}intersectsBox(i){return i.intersectsPlane(this)}intersectsSphere(i){return i.intersectsPlane(this)}coplanarPoint(i){return i.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(i,s){const c=s||sA.getNormalMatrix(i),d=this.coplanarPoint(Sf).applyMatrix4(i),m=this.normal.applyMatrix3(c).normalize();return this.constant=-d.dot(m),this}translate(i){return this.constant-=i.dot(this.normal),this}equals(i){return i.normal.equals(this.normal)&&i.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pa=new Hf,tu=new _e;class kf{constructor(i=new Ua,s=new Ua,c=new Ua,d=new Ua,m=new Ua,M=new Ua){this.planes=[i,s,c,d,m,M]}set(i,s,c,d,m,M){const y=this.planes;return y[0].copy(i),y[1].copy(s),y[2].copy(c),y[3].copy(d),y[4].copy(m),y[5].copy(M),this}copy(i){const s=this.planes;for(let c=0;c<6;c++)s[c].copy(i.planes[c]);return this}setFromProjectionMatrix(i,s=ms){const c=this.planes,d=i.elements,m=d[0],M=d[1],y=d[2],T=d[3],A=d[4],R=d[5],L=d[6],I=d[7],N=d[8],G=d[9],W=d[10],P=d[11],C=d[12],$=d[13],X=d[14],ee=d[15];if(c[0].setComponents(T-m,I-A,P-N,ee-C).normalize(),c[1].setComponents(T+m,I+A,P+N,ee+C).normalize(),c[2].setComponents(T+M,I+R,P+G,ee+$).normalize(),c[3].setComponents(T-M,I-R,P-G,ee-$).normalize(),c[4].setComponents(T-y,I-L,P-W,ee-X).normalize(),s===ms)c[5].setComponents(T+y,I+L,P+W,ee+X).normalize();else if(s===hu)c[5].setComponents(y,L,W,X).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+s);return this}intersectsObject(i){if(i.boundingSphere!==void 0)i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere).applyMatrix4(i.matrixWorld);else{const s=i.geometry;s.boundingSphere===null&&s.computeBoundingSphere(),Pa.copy(s.boundingSphere).applyMatrix4(i.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(i){return Pa.center.set(0,0,0),Pa.radius=.7071067811865476,Pa.applyMatrix4(i.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(i){const s=this.planes,c=i.center,d=-i.radius;for(let m=0;m<6;m++)if(s[m].distanceToPoint(c)<d)return!1;return!0}intersectsBox(i){const s=this.planes;for(let c=0;c<6;c++){const d=s[c];if(tu.x=d.normal.x>0?i.max.x:i.min.x,tu.y=d.normal.y>0?i.max.y:i.min.y,tu.z=d.normal.z>0?i.max.z:i.min.z,d.distanceToPoint(tu)<0)return!1}return!0}containsPoint(i){const s=this.planes;for(let c=0;c<6;c++)if(s[c].distanceToPoint(i)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nx(){let u=null,i=!1,s=null,c=null;function d(m,M){s(m,M),c=u.requestAnimationFrame(d)}return{start:function(){i!==!0&&s!==null&&(c=u.requestAnimationFrame(d),i=!0)},stop:function(){u.cancelAnimationFrame(c),i=!1},setAnimationLoop:function(m){s=m},setContext:function(m){u=m}}}function aA(u){const i=new WeakMap;function s(y,T){const A=y.array,R=y.usage,L=A.byteLength,I=u.createBuffer();u.bindBuffer(T,I),u.bufferData(T,A,R),y.onUploadCallback();let N;if(A instanceof Float32Array)N=u.FLOAT;else if(A instanceof Uint16Array)y.isFloat16BufferAttribute?N=u.HALF_FLOAT:N=u.UNSIGNED_SHORT;else if(A instanceof Int16Array)N=u.SHORT;else if(A instanceof Uint32Array)N=u.UNSIGNED_INT;else if(A instanceof Int32Array)N=u.INT;else if(A instanceof Int8Array)N=u.BYTE;else if(A instanceof Uint8Array)N=u.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)N=u.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:I,type:N,bytesPerElement:A.BYTES_PER_ELEMENT,version:y.version,size:L}}function c(y,T,A){const R=T.array,L=T._updateRange,I=T.updateRanges;if(u.bindBuffer(A,y),L.count===-1&&I.length===0&&u.bufferSubData(A,0,R),I.length!==0){for(let N=0,G=I.length;N<G;N++){const W=I[N];u.bufferSubData(A,W.start*R.BYTES_PER_ELEMENT,R,W.start,W.count)}T.clearUpdateRanges()}L.count!==-1&&(u.bufferSubData(A,L.offset*R.BYTES_PER_ELEMENT,R,L.offset,L.count),L.count=-1),T.onUploadCallback()}function d(y){return y.isInterleavedBufferAttribute&&(y=y.data),i.get(y)}function m(y){y.isInterleavedBufferAttribute&&(y=y.data);const T=i.get(y);T&&(u.deleteBuffer(T.buffer),i.delete(y))}function M(y,T){if(y.isGLBufferAttribute){const R=i.get(y);(!R||R.version<y.version)&&i.set(y,{buffer:y.buffer,type:y.type,bytesPerElement:y.elementSize,version:y.version});return}y.isInterleavedBufferAttribute&&(y=y.data);const A=i.get(y);if(A===void 0)i.set(y,s(y,T));else if(A.version<y.version){if(A.size!==y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(A.buffer,y,T),A.version=y.version}}return{get:d,remove:m,update:M}}class jo extends Ga{constructor(i=1,s=1,c=1,d=1){super(),this.type="PlaneGeometry",this.parameters={width:i,height:s,widthSegments:c,heightSegments:d};const m=i/2,M=s/2,y=Math.floor(c),T=Math.floor(d),A=y+1,R=T+1,L=i/y,I=s/T,N=[],G=[],W=[],P=[];for(let C=0;C<R;C++){const $=C*I-M;for(let X=0;X<A;X++){const ee=X*L-m;G.push(ee,-$,0),W.push(0,0,1),P.push(X/y),P.push(1-C/T)}}for(let C=0;C<T;C++)for(let $=0;$<y;$++){const X=$+A*C,ee=$+A*(C+1),xe=$+1+A*(C+1),se=$+1+A*C;N.push(X,ee,se),N.push(ee,xe,se)}this.setIndex(N),this.setAttribute("position",new Ys(G,3)),this.setAttribute("normal",new Ys(W,3)),this.setAttribute("uv",new Ys(P,2))}copy(i){return super.copy(i),this.parameters=Object.assign({},i.parameters),this}static fromJSON(i){return new jo(i.width,i.height,i.widthSegments,i.heightSegments)}}const oA=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,cA=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,lA=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,hA=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,uA=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,dA=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,fA=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
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

#endif
`,pA=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,mA=`
#ifdef USE_BATCHING
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
#endif
`,gA=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`,_A=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,xA=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,vA=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,yA=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,MA=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,SA=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

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

	#endif

#endif
`,bA=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,EA=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,TA=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,AA=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,wA=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,RA=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,CA=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,PA=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

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

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,LA=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,IA=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

#endif
`,DA=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,UA=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,NA=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,FA=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,OA=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,BA=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
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

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`,zA=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

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

#endif
`,VA=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,GA=`
#ifdef USE_ENVMAP

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

#endif
`,HA=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,kA=`
#ifdef USE_ENVMAP

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

#endif
`,WA=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,XA=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,qA=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,YA=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,ZA=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,$A=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,KA=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,JA=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,jA=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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

#endif
`,QA=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,ew=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,tw=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,iw=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,nw=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,rw=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
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

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

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

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,sw=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

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

// temporary
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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
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

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

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

	float alpha = pow2( roughness ); // UE4's roughness

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

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
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

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
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

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
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

	// Both indirect specular and indirect diffuse light accumulate here

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

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,aw=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

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

		// Iridescence F0 approximation
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

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

#endif
`,ow=`
#if defined( RE_IndirectDiffuse )

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

#endif
`,cw=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,lw=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,hw=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,uw=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,dw=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,fw=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,pw=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,mw=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

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

#endif
`,gw=`
#if defined( USE_POINTS_UV )

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

#endif
`,_w=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,xw=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,vw=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[MORPHTARGETS_COUNT];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,yw=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Mw=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,Sw=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;

	#endif

	#ifdef MORPHTARGETS_TEXTURE

		#ifndef USE_INSTANCING_MORPH

			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

		#endif

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

#endif
`,bw=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,Ew=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

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

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,Tw=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

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

#endif
`,Aw=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,ww=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Rw=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Cw=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Pw=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,Lw=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Iw=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,Dw=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Uw=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Nw=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
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

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Fw=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Ow=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Bw=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,zw=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Vw=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Gw=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Hw=`
#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
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

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return shadow;

	}

#endif
`,kw=`

#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Ww=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,Xw=`
float getShadowMask() {

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,qw=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Yw=`
#ifdef USE_SKINNING

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

#endif
`,Zw=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,$w=`
#ifdef USE_SKINNING

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

#endif
`,Kw=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Jw=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,jw=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,Qw=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
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

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
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

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,eR=`
#ifdef USE_TRANSMISSION

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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,tR=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
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

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,iR=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,nR=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,rR=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,sR=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,aR=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,oR=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,cR=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,lR=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,hR=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,uR=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,dR=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

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

}
`,fR=`
#if DEPTH_PACKING == 3200

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

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,pR=`
#define DISTANCE

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

	#include <morphinstance_vertex>

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

}
`,mR=`
#define DISTANCE

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

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,gR=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,_R=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,xR=`
uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,vR=`
uniform vec3 diffuse;
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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,yR=`
#include <common>
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
	#include <morphinstance_vertex>
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

}
`,MR=`
uniform vec3 diffuse;
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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
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

}
`,SR=`
#define LAMBERT

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
	#include <morphinstance_vertex>
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

}
`,bR=`
#define LAMBERT

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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

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

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,ER=`
#define MATCAP

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
	#include <morphinstance_vertex>
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

}
`,TR=`
#define MATCAP

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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,AR=`
#define NORMAL

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
	#include <morphinstance_vertex>
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

}
`,wR=`
#define NORMAL

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

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,RR=`
#define PHONG

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
	#include <morphinstance_vertex>
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

}
`,CR=`
#define PHONG

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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

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

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,PR=`
#define STANDARD

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
	#include <morphinstance_vertex>
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
}
`,LR=`
#define STANDARD

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

#ifdef USE_DISPERSION
	uniform float dispersion;
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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
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

}
`,IR=`
#define TOON

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
	#include <morphinstance_vertex>
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

}
`,DR=`
#define TOON

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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

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

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,UR=`
uniform float size;
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
	#include <morphinstance_vertex>
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

}
`,NR=`
uniform vec3 diffuse;
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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

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

}
`,FR=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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

}
`,OR=`
uniform vec3 color;
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

}
`,BR=`
uniform float rotation;
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

}
`,zR=`
uniform vec3 diffuse;
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

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

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

}
`,Ei={alphahash_fragment:oA,alphahash_pars_fragment:cA,alphamap_fragment:lA,alphamap_pars_fragment:hA,alphatest_fragment:uA,alphatest_pars_fragment:dA,aomap_fragment:fA,aomap_pars_fragment:pA,batching_pars_vertex:mA,batching_vertex:gA,begin_vertex:_A,beginnormal_vertex:xA,bsdfs:vA,iridescence_fragment:yA,bumpmap_pars_fragment:MA,clipping_planes_fragment:SA,clipping_planes_pars_fragment:bA,clipping_planes_pars_vertex:EA,clipping_planes_vertex:TA,color_fragment:AA,color_pars_fragment:wA,color_pars_vertex:RA,color_vertex:CA,common:PA,cube_uv_reflection_fragment:LA,defaultnormal_vertex:IA,displacementmap_pars_vertex:DA,displacementmap_vertex:UA,emissivemap_fragment:NA,emissivemap_pars_fragment:FA,colorspace_fragment:OA,colorspace_pars_fragment:BA,envmap_fragment:zA,envmap_common_pars_fragment:VA,envmap_pars_fragment:GA,envmap_pars_vertex:HA,envmap_physical_pars_fragment:QA,envmap_vertex:kA,fog_vertex:WA,fog_pars_vertex:XA,fog_fragment:qA,fog_pars_fragment:YA,gradientmap_pars_fragment:ZA,lightmap_pars_fragment:$A,lights_lambert_fragment:KA,lights_lambert_pars_fragment:JA,lights_pars_begin:jA,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:iw,lights_phong_pars_fragment:nw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:aw,lights_fragment_maps:ow,lights_fragment_end:cw,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:uw,logdepthbuf_vertex:dw,map_fragment:fw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:gw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:xw,morphinstance_vertex:vw,morphcolor_vertex:yw,morphnormal_vertex:Mw,morphtarget_pars_vertex:Sw,morphtarget_vertex:bw,normal_fragment_begin:Ew,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:ww,normal_vertex:Rw,normalmap_pars_fragment:Cw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Iw,iridescence_pars_fragment:Dw,opaque_fragment:Uw,packing:Nw,premultiplied_alpha_fragment:Fw,project_vertex:Ow,dithering_fragment:Bw,dithering_pars_fragment:zw,roughnessmap_fragment:Vw,roughnessmap_pars_fragment:Gw,shadowmap_pars_fragment:Hw,shadowmap_pars_vertex:kw,shadowmap_vertex:Ww,shadowmask_pars_fragment:Xw,skinbase_vertex:qw,skinning_pars_vertex:Yw,skinning_vertex:Zw,skinnormal_vertex:$w,specularmap_fragment:Kw,specularmap_pars_fragment:Jw,tonemapping_fragment:jw,tonemapping_pars_fragment:Qw,transmission_fragment:eR,transmission_pars_fragment:tR,uv_pars_fragment:iR,uv_pars_vertex:nR,uv_vertex:rR,worldpos_vertex:sR,background_vert:aR,background_frag:oR,backgroundCube_vert:cR,backgroundCube_frag:lR,cube_vert:hR,cube_frag:uR,depth_vert:dR,depth_frag:fR,distanceRGBA_vert:pR,distanceRGBA_frag:mR,equirect_vert:gR,equirect_frag:_R,linedashed_vert:xR,linedashed_frag:vR,meshbasic_vert:yR,meshbasic_frag:MR,meshlambert_vert:SR,meshlambert_frag:bR,meshmatcap_vert:ER,meshmatcap_frag:TR,meshnormal_vert:AR,meshnormal_frag:wR,meshphong_vert:RR,meshphong_frag:CR,meshphysical_vert:PR,meshphysical_frag:LR,meshtoon_vert:IR,meshtoon_frag:DR,points_vert:UR,points_frag:NR,shadow_vert:FR,shadow_frag:OR,sprite_vert:BR,sprite_frag:zR},It={common:{diffuse:{value:new Fi(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ti},alphaMap:{value:null},alphaMapTransform:{value:new Ti},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ti}},envmap:{envMap:{value:null},envMapRotation:{value:new Ti},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ti}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ti}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ti},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ti},normalScale:{value:new Oi(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ti},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ti}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ti}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ti}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fi(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fi(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ti},alphaTest:{value:0},uvTransform:{value:new Ti}},sprite:{diffuse:{value:new Fi(16777215)},opacity:{value:1},center:{value:new Oi(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ti},alphaMap:{value:null},alphaMapTransform:{value:new Ti},alphaTest:{value:0}}},kr={basic:{uniforms:Jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Ei.meshbasic_vert,fragmentShader:Ei.meshbasic_frag},lambert:{uniforms:Jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Fi(0)}}]),vertexShader:Ei.meshlambert_vert,fragmentShader:Ei.meshlambert_frag},phong:{uniforms:Jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Fi(0)},specular:{value:new Fi(1118481)},shininess:{value:30}}]),vertexShader:Ei.meshphong_vert,fragmentShader:Ei.meshphong_frag},standard:{uniforms:Jn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Fi(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ei.meshphysical_vert,fragmentShader:Ei.meshphysical_frag},toon:{uniforms:Jn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Fi(0)}}]),vertexShader:Ei.meshtoon_vert,fragmentShader:Ei.meshtoon_frag},matcap:{uniforms:Jn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Ei.meshmatcap_vert,fragmentShader:Ei.meshmatcap_frag},points:{uniforms:Jn([It.points,It.fog]),vertexShader:Ei.points_vert,fragmentShader:Ei.points_frag},dashed:{uniforms:Jn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ei.linedashed_vert,fragmentShader:Ei.linedashed_frag},depth:{uniforms:Jn([It.common,It.displacementmap]),vertexShader:Ei.depth_vert,fragmentShader:Ei.depth_frag},normal:{uniforms:Jn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Ei.meshnormal_vert,fragmentShader:Ei.meshnormal_frag},sprite:{uniforms:Jn([It.sprite,It.fog]),vertexShader:Ei.sprite_vert,fragmentShader:Ei.sprite_frag},background:{uniforms:{uvTransform:{value:new Ti},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ei.background_vert,fragmentShader:Ei.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ti}},vertexShader:Ei.backgroundCube_vert,fragmentShader:Ei.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ei.cube_vert,fragmentShader:Ei.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ei.equirect_vert,fragmentShader:Ei.equirect_frag},distanceRGBA:{uniforms:Jn([It.common,It.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ei.distanceRGBA_vert,fragmentShader:Ei.distanceRGBA_frag},shadow:{uniforms:Jn([It.lights,It.fog,{color:{value:new Fi(0)},opacity:{value:1}}]),vertexShader:Ei.shadow_vert,fragmentShader:Ei.shadow_frag}};kr.physical={uniforms:Jn([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ti},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ti},clearcoatNormalScale:{value:new Oi(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ti},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ti},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ti},sheen:{value:0},sheenColor:{value:new Fi(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ti},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ti},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ti},transmissionSamplerSize:{value:new Oi},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ti},attenuationDistance:{value:0},attenuationColor:{value:new Fi(0)},specularColor:{value:new Fi(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ti},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ti},anisotropyVector:{value:new Oi},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ti}}]),vertexShader:Ei.meshphysical_vert,fragmentShader:Ei.meshphysical_frag};const iu={r:0,b:0,g:0},La=new _s,VR=new dn;function GR(u,i,s,c,d,m,M){const y=new Fi(0);let T=m===!0?0:1,A,R,L=null,I=0,N=null;function G($){let X=$.isScene===!0?$.background:null;return X&&X.isTexture&&(X=($.backgroundBlurriness>0?s:i).get(X)),X}function W($){let X=!1;const ee=G($);ee===null?C(y,T):ee&&ee.isColor&&(C(ee,1),X=!0);const xe=u.xr.getEnvironmentBlendMode();xe==="additive"?c.buffers.color.setClear(0,0,0,1,M):xe==="alpha-blend"&&c.buffers.color.setClear(0,0,0,0,M),(u.autoClear||X)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil)}function P($,X){const ee=G(X);ee&&(ee.isCubeTexture||ee.mapping===du)?(R===void 0&&(R=new _r(new al(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Jo(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),R.geometry.deleteAttribute("normal"),R.geometry.deleteAttribute("uv"),R.onBeforeRender=function(xe,se,ae){this.matrixWorld.copyPosition(ae.matrixWorld)},Object.defineProperty(R.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),d.update(R)),La.copy(X.backgroundRotation),La.x*=-1,La.y*=-1,La.z*=-1,ee.isCubeTexture&&ee.isRenderTargetTexture===!1&&(La.y*=-1,La.z*=-1),R.material.uniforms.envMap.value=ee,R.material.uniforms.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1,R.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,R.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,R.material.uniforms.backgroundRotation.value.setFromMatrix4(VR.makeRotationFromEuler(La)),R.material.toneMapped=Ki.getTransfer(ee.colorSpace)!==tn,(L!==ee||I!==ee.version||N!==u.toneMapping)&&(R.material.needsUpdate=!0,L=ee,I=ee.version,N=u.toneMapping),R.layers.enableAll(),$.unshift(R,R.geometry,R.material,0,0,null)):ee&&ee.isTexture&&(A===void 0&&(A=new _r(new jo(2,2),new Tr({name:"BackgroundMaterial",uniforms:Jo(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),d.update(A)),A.material.uniforms.t2D.value=ee,A.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,A.material.toneMapped=Ki.getTransfer(ee.colorSpace)!==tn,ee.matrixAutoUpdate===!0&&ee.updateMatrix(),A.material.uniforms.uvTransform.value.copy(ee.matrix),(L!==ee||I!==ee.version||N!==u.toneMapping)&&(A.material.needsUpdate=!0,L=ee,I=ee.version,N=u.toneMapping),A.layers.enableAll(),$.unshift(A,A.geometry,A.material,0,0,null))}function C($,X){$.getRGB(iu,ex(u)),c.buffers.color.setClear(iu.r,iu.g,iu.b,X,M)}return{getClearColor:function(){return y},setClearColor:function($,X=1){y.set($),T=X,C(y,T)},getClearAlpha:function(){return T},setClearAlpha:function($){T=$,C(y,T)},render:W,addToRenderList:P}}function HR(u,i){const s=u.getParameter(u.MAX_VERTEX_ATTRIBS),c={},d=I(null);let m=d,M=!1;function y(H,Me,Ie,he,qe){let Xe=!1;const gt=L(he,Ie,Me);m!==gt&&(m=gt,A(m.object)),Xe=N(H,he,Ie,qe),Xe&&G(H,he,Ie,qe),qe!==null&&i.update(qe,u.ELEMENT_ARRAY_BUFFER),(Xe||M)&&(M=!1,ee(H,Me,Ie,he),qe!==null&&u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,i.get(qe).buffer))}function T(){return u.createVertexArray()}function A(H){return u.bindVertexArray(H)}function R(H){return u.deleteVertexArray(H)}function L(H,Me,Ie){const he=Ie.wireframe===!0;let qe=c[H.id];qe===void 0&&(qe={},c[H.id]=qe);let Xe=qe[Me.id];Xe===void 0&&(Xe={},qe[Me.id]=Xe);let gt=Xe[he];return gt===void 0&&(gt=I(T()),Xe[he]=gt),gt}function I(H){const Me=[],Ie=[],he=[];for(let qe=0;qe<s;qe++)Me[qe]=0,Ie[qe]=0,he[qe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Me,enabledAttributes:Ie,attributeDivisors:he,object:H,attributes:{},index:null}}function N(H,Me,Ie,he){const qe=m.attributes,Xe=Me.attributes;let gt=0;const ht=Ie.getAttributes();for(const De in ht)if(ht[De].location>=0){const ft=qe[De];let Kt=Xe[De];if(Kt===void 0&&(De==="instanceMatrix"&&H.instanceMatrix&&(Kt=H.instanceMatrix),De==="instanceColor"&&H.instanceColor&&(Kt=H.instanceColor)),ft===void 0||ft.attribute!==Kt||Kt&&ft.data!==Kt.data)return!0;gt++}return m.attributesNum!==gt||m.index!==he}function G(H,Me,Ie,he){const qe={},Xe=Me.attributes;let gt=0;const ht=Ie.getAttributes();for(const De in ht)if(ht[De].location>=0){let ft=Xe[De];ft===void 0&&(De==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),De==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor));const Kt={};Kt.attribute=ft,ft&&ft.data&&(Kt.data=ft.data),qe[De]=Kt,gt++}m.attributes=qe,m.attributesNum=gt,m.index=he}function W(){const H=m.newAttributes;for(let Me=0,Ie=H.length;Me<Ie;Me++)H[Me]=0}function P(H){C(H,0)}function C(H,Me){const Ie=m.newAttributes,he=m.enabledAttributes,qe=m.attributeDivisors;Ie[H]=1,he[H]===0&&(u.enableVertexAttribArray(H),he[H]=1),qe[H]!==Me&&(u.vertexAttribDivisor(H,Me),qe[H]=Me)}function $(){const H=m.newAttributes,Me=m.enabledAttributes;for(let Ie=0,he=Me.length;Ie<he;Ie++)Me[Ie]!==H[Ie]&&(u.disableVertexAttribArray(Ie),Me[Ie]=0)}function X(H,Me,Ie,he,qe,Xe,gt){gt===!0?u.vertexAttribIPointer(H,Me,Ie,qe,Xe):u.vertexAttribPointer(H,Me,Ie,he,qe,Xe)}function ee(H,Me,Ie,he){W();const qe=he.attributes,Xe=Ie.getAttributes(),gt=Me.defaultAttributeValues;for(const ht in Xe){const De=Xe[ht];if(De.location>=0){let vt=qe[ht];if(vt===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(vt=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(vt=H.instanceColor)),vt!==void 0){const ft=vt.normalized,Kt=vt.itemSize,vi=i.get(vt);if(vi===void 0)continue;const Hi=vi.buffer,Fe=vi.type,yt=vi.bytesPerElement,kt=Fe===u.INT||Fe===u.UNSIGNED_INT||vt.gpuType===z0;if(vt.isInterleavedBufferAttribute){const oe=vt.data,be=oe.stride,we=vt.offset;if(oe.isInstancedInterleavedBuffer){for(let te=0;te<De.locationSize;te++)C(De.location+te,oe.meshPerAttribute);H.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let te=0;te<De.locationSize;te++)P(De.location+te);u.bindBuffer(u.ARRAY_BUFFER,Hi);for(let te=0;te<De.locationSize;te++)X(De.location+te,Kt/De.locationSize,Fe,ft,be*yt,(we+Kt/De.locationSize*te)*yt,kt)}else{if(vt.isInstancedBufferAttribute){for(let oe=0;oe<De.locationSize;oe++)C(De.location+oe,vt.meshPerAttribute);H.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let oe=0;oe<De.locationSize;oe++)P(De.location+oe);u.bindBuffer(u.ARRAY_BUFFER,Hi);for(let oe=0;oe<De.locationSize;oe++)X(De.location+oe,Kt/De.locationSize,Fe,ft,Kt*yt,Kt/De.locationSize*oe*yt,kt)}}else if(gt!==void 0){const ft=gt[ht];if(ft!==void 0)switch(ft.length){case 2:u.vertexAttrib2fv(De.location,ft);break;case 3:u.vertexAttrib3fv(De.location,ft);break;case 4:u.vertexAttrib4fv(De.location,ft);break;default:u.vertexAttrib1fv(De.location,ft)}}}}$()}function xe(){Ne();for(const H in c){const Me=c[H];for(const Ie in Me){const he=Me[Ie];for(const qe in he)R(he[qe].object),delete he[qe];delete Me[Ie]}delete c[H]}}function se(H){if(c[H.id]===void 0)return;const Me=c[H.id];for(const Ie in Me){const he=Me[Ie];for(const qe in he)R(he[qe].object),delete he[qe];delete Me[Ie]}delete c[H.id]}function ae(H){for(const Me in c){const Ie=c[Me];if(Ie[H.id]===void 0)continue;const he=Ie[H.id];for(const qe in he)R(he[qe].object),delete he[qe];delete Ie[H.id]}}function Ne(){K(),M=!0,m!==d&&(m=d,A(m.object))}function K(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:y,reset:Ne,resetDefaultState:K,dispose:xe,releaseStatesOfGeometry:se,releaseStatesOfProgram:ae,initAttributes:W,enableAttribute:P,disableUnusedAttributes:$}}function kR(u,i,s){let c;function d(A){c=A}function m(A,R){u.drawArrays(c,A,R),s.update(R,c,1)}function M(A,R,L){L!==0&&(u.drawArraysInstanced(c,A,R,L),s.update(R,c,L))}function y(A,R,L){if(L===0)return;const I=i.get("WEBGL_multi_draw");if(I===null)for(let N=0;N<L;N++)this.render(A[N],R[N]);else{I.multiDrawArraysWEBGL(c,A,0,R,0,L);let N=0;for(let G=0;G<L;G++)N+=R[G];s.update(N,c,1)}}function T(A,R,L,I){if(L===0)return;const N=i.get("WEBGL_multi_draw");if(N===null)for(let G=0;G<A.length;G++)M(A[G],R[G],I[G]);else{N.multiDrawArraysInstancedWEBGL(c,A,0,R,0,I,0,L);let G=0;for(let W=0;W<L;W++)G+=R[W];for(let W=0;W<I.length;W++)s.update(G,c,I[W])}}this.setMode=d,this.render=m,this.renderInstances=M,this.renderMultiDraw=y,this.renderMultiDrawInstances=T}function WR(u,i,s,c){let d;function m(){if(d!==void 0)return d;if(i.has("EXT_texture_filter_anisotropic")===!0){const se=i.get("EXT_texture_filter_anisotropic");d=u.getParameter(se.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else d=0;return d}function M(se){return!(se!==Xr&&c.convert(se)!==u.getParameter(u.IMPLEMENTATION_COLOR_READ_FORMAT))}function y(se){const ae=se===fu&&(i.has("EXT_color_buffer_half_float")||i.has("EXT_color_buffer_float"));return!(se!==Zs&&c.convert(se)!==u.getParameter(u.IMPLEMENTATION_COLOR_READ_TYPE)&&se!==ks&&!ae)}function T(se){if(se==="highp"){if(u.getShaderPrecisionFormat(u.VERTEX_SHADER,u.HIGH_FLOAT).precision>0&&u.getShaderPrecisionFormat(u.FRAGMENT_SHADER,u.HIGH_FLOAT).precision>0)return"highp";se="mediump"}return se==="mediump"&&u.getShaderPrecisionFormat(u.VERTEX_SHADER,u.MEDIUM_FLOAT).precision>0&&u.getShaderPrecisionFormat(u.FRAGMENT_SHADER,u.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=s.precision!==void 0?s.precision:"highp";const R=T(A);R!==A&&(console.warn("THREE.WebGLRenderer:",A,"not supported, using",R,"instead."),A=R);const L=s.logarithmicDepthBuffer===!0,I=u.getParameter(u.MAX_TEXTURE_IMAGE_UNITS),N=u.getParameter(u.MAX_VERTEX_TEXTURE_IMAGE_UNITS),G=u.getParameter(u.MAX_TEXTURE_SIZE),W=u.getParameter(u.MAX_CUBE_MAP_TEXTURE_SIZE),P=u.getParameter(u.MAX_VERTEX_ATTRIBS),C=u.getParameter(u.MAX_VERTEX_UNIFORM_VECTORS),$=u.getParameter(u.MAX_VARYING_VECTORS),X=u.getParameter(u.MAX_FRAGMENT_UNIFORM_VECTORS),ee=N>0,xe=u.getParameter(u.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:m,getMaxPrecision:T,textureFormatReadable:M,textureTypeReadable:y,precision:A,logarithmicDepthBuffer:L,maxTextures:I,maxVertexTextures:N,maxTextureSize:G,maxCubemapSize:W,maxAttributes:P,maxVertexUniforms:C,maxVaryings:$,maxFragmentUniforms:X,vertexTextures:ee,maxSamples:xe}}function XR(u){const i=this;let s=null,c=0,d=!1,m=!1;const M=new Ua,y=new Ti,T={value:null,needsUpdate:!1};this.uniform=T,this.numPlanes=0,this.numIntersection=0,this.init=function(L,I){const N=L.length!==0||I||c!==0||d;return d=I,c=L.length,N},this.beginShadows=function(){m=!0,R(null)},this.endShadows=function(){m=!1},this.setGlobalState=function(L,I){s=R(L,I,0)},this.setState=function(L,I,N){const G=L.clippingPlanes,W=L.clipIntersection,P=L.clipShadows,C=u.get(L);if(!d||G===null||G.length===0||m&&!P)m?R(null):A();else{const $=m?0:c,X=$*4;let ee=C.clippingState||null;T.value=ee,ee=R(G,I,X,N);for(let xe=0;xe!==X;++xe)ee[xe]=s[xe];C.clippingState=ee,this.numIntersection=W?this.numPlanes:0,this.numPlanes+=$}};function A(){T.value!==s&&(T.value=s,T.needsUpdate=c>0),i.numPlanes=c,i.numIntersection=0}function R(L,I,N,G){const W=L!==null?L.length:0;let P=null;if(W!==0){if(P=T.value,G!==!0||P===null){const C=N+W*4,$=I.matrixWorldInverse;y.getNormalMatrix($),(P===null||P.length<C)&&(P=new Float32Array(C));for(let X=0,ee=N;X!==W;++X,ee+=4)M.copy(L[X]).applyMatrix4($,y),M.normal.toArray(P,ee),P[ee+3]=M.constant}T.value=P,T.needsUpdate=!0}return i.numPlanes=W,i.numIntersection=0,P}}function qR(u){let i=new WeakMap;function s(M,y){return y===Nf?M.mapping=Zo:y===Ff&&(M.mapping=$o),M}function c(M){if(M&&M.isTexture){const y=M.mapping;if(y===Nf||y===Ff)if(i.has(M)){const T=i.get(M).texture;return s(T,M.mapping)}else{const T=M.image;if(T&&T.height>0){const A=new nA(T.height);return A.fromEquirectangularTexture(u,M),i.set(M,A),M.addEventListener("dispose",d),s(A.texture,M.mapping)}else return null}}return M}function d(M){const y=M.target;y.removeEventListener("dispose",d);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function m(){i=new WeakMap}return{get:c,dispose:m}}class YR extends tx{constructor(i=-1,s=1,c=1,d=-1,m=.1,M=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=i,this.right=s,this.top=c,this.bottom=d,this.near=m,this.far=M,this.updateProjectionMatrix()}copy(i,s){return super.copy(i,s),this.left=i.left,this.right=i.right,this.top=i.top,this.bottom=i.bottom,this.near=i.near,this.far=i.far,this.zoom=i.zoom,this.view=i.view===null?null:Object.assign({},i.view),this}setViewOffset(i,s,c,d,m,M){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=s,this.view.offsetX=c,this.view.offsetY=d,this.view.width=m,this.view.height=M,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;let m=c-i,M=c+i,y=d+s,T=d-s;if(this.view!==null&&this.view.enabled){const A=(this.right-this.left)/this.view.fullWidth/this.zoom,R=(this.top-this.bottom)/this.view.fullHeight/this.zoom;m+=A*this.view.offsetX,M=m+A*this.view.width,y-=R*this.view.offsetY,T=y-R*this.view.height}this.projectionMatrix.makeOrthographic(m,M,y,T,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(i){const s=super.toJSON(i);return s.object.zoom=this.zoom,s.object.left=this.left,s.object.right=this.right,s.object.top=this.top,s.object.bottom=this.bottom,s.object.near=this.near,s.object.far=this.far,this.view!==null&&(s.object.view=Object.assign({},this.view)),s}}const Wo=4,n0=[.125,.215,.35,.446,.526,.582],Oa=20,bf=new YR,r0=new Fi;let Ef=null,Tf=0,Af=0,wf=!1;const Na=(1+Math.sqrt(5))/2,ko=1/Na,s0=[new _e(-Na,ko,0),new _e(Na,ko,0),new _e(-ko,0,Na),new _e(ko,0,Na),new _e(0,Na,-ko),new _e(0,Na,ko),new _e(-1,1,-1),new _e(1,1,-1),new _e(-1,1,1),new _e(1,1,1)];class a0{constructor(i){this._renderer=i,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(i,s=0,c=.1,d=100){Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(i,c,d,m),s>0&&this._blur(m,0,0,s),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(i,s=null){return this._fromTexture(i,s)}fromCubemap(i,s=null){return this._fromTexture(i,s)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(i){this._lodMax=Math.floor(Math.log2(i)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let i=0;i<this._lodPlanes.length;i++)this._lodPlanes[i].dispose()}_cleanup(i){this._renderer.setRenderTarget(Ef,Tf,Af),this._renderer.xr.enabled=wf,i.scissorTest=!1,nu(i,0,0,i.width,i.height)}_fromTexture(i,s){i.mapping===Zo||i.mapping===$o?this._setSize(i.image.length===0?16:i.image[0].width||i.image[0].image.width):this._setSize(i.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const c=s||this._allocateTargets();return this._textureToCubeUV(i,c),this._applyPMREM(c),this._cleanup(c),c}_allocateTargets(){const i=3*Math.max(this._cubeSize,112),s=4*this._cubeSize,c={magFilter:gr,minFilter:gr,generateMipmaps:!1,type:fu,format:Xr,colorSpace:$s,depthBuffer:!1},d=o0(i,s,c);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==i||this._pingPongRenderTarget.height!==s){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(i,s,c);const{_lodMax:m}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZR(m)),this._blurMaterial=$R(m,i,s)}return d}_compileMaterial(i){const s=new _r(this._lodPlanes[0],i);this._renderer.compile(s,bf)}_sceneToCubeUV(i,s,c,d){const y=new mr(90,1,s,c),T=[1,-1,1,1,1,1],A=[1,1,1,-1,-1,-1],R=this._renderer,L=R.autoClear,I=R.toneMapping;R.getClearColor(r0),R.toneMapping=qs,R.autoClear=!1;const N=new J0({name:"PMREM.Background",side:rr,depthWrite:!1,depthTest:!1}),G=new _r(new al,N);let W=!1;const P=i.background;P?P.isColor&&(N.color.copy(P),i.background=null,W=!0):(N.color.copy(r0),W=!0);for(let C=0;C<6;C++){const $=C%3;$===0?(y.up.set(0,T[C],0),y.lookAt(A[C],0,0)):$===1?(y.up.set(0,0,T[C]),y.lookAt(0,A[C],0)):(y.up.set(0,T[C],0),y.lookAt(0,0,A[C]));const X=this._cubeSize;nu(d,$*X,C>2?X:0,X,X),R.setRenderTarget(d),W&&R.render(G,y),R.render(i,y)}G.geometry.dispose(),G.material.dispose(),R.toneMapping=I,R.autoClear=L,i.background=P}_textureToCubeUV(i,s){const c=this._renderer,d=i.mapping===Zo||i.mapping===$o;d?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=i.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const m=d?this._cubemapMaterial:this._equirectMaterial,M=new _r(this._lodPlanes[0],m),y=m.uniforms;y.envMap.value=i;const T=this._cubeSize;nu(s,0,0,3*T,2*T),c.setRenderTarget(s),c.render(M,bf)}_applyPMREM(i){const s=this._renderer,c=s.autoClear;s.autoClear=!1;const d=this._lodPlanes.length;for(let m=1;m<d;m++){const M=Math.sqrt(this._sigmas[m]*this._sigmas[m]-this._sigmas[m-1]*this._sigmas[m-1]),y=s0[(d-m-1)%s0.length];this._blur(i,m-1,m,M,y)}s.autoClear=c}_blur(i,s,c,d,m){const M=this._pingPongRenderTarget;this._halfBlur(i,M,s,c,d,"latitudinal",m),this._halfBlur(M,i,c,c,d,"longitudinal",m)}_halfBlur(i,s,c,d,m,M,y){const T=this._renderer,A=this._blurMaterial;M!=="latitudinal"&&M!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const R=3,L=new _r(this._lodPlanes[d],A),I=A.uniforms,N=this._sizeLods[c]-1,G=isFinite(m)?Math.PI/(2*N):2*Math.PI/(2*Oa-1),W=m/G,P=isFinite(m)?1+Math.floor(R*W):Oa;P>Oa&&console.warn(`sigmaRadians, ${m}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${Oa}`);const C=[];let $=0;for(let ae=0;ae<Oa;++ae){const Ne=ae/W,K=Math.exp(-Ne*Ne/2);C.push(K),ae===0?$+=K:ae<P&&($+=2*K)}for(let ae=0;ae<C.length;ae++)C[ae]=C[ae]/$;I.envMap.value=i.texture,I.samples.value=P,I.weights.value=C,I.latitudinal.value=M==="latitudinal",y&&(I.poleAxis.value=y);const{_lodMax:X}=this;I.dTheta.value=G,I.mipInt.value=X-c;const ee=this._sizeLods[d],xe=3*ee*(d>X-Wo?d-X+Wo:0),se=4*(this._cubeSize-ee);nu(s,xe,se,3*ee,2*ee),T.setRenderTarget(s),T.render(L,bf)}}function ZR(u){const i=[],s=[],c=[];let d=u;const m=u-Wo+1+n0.length;for(let M=0;M<m;M++){const y=Math.pow(2,d);s.push(y);let T=1/y;M>u-Wo?T=n0[M-u+Wo-1]:M===0&&(T=0),c.push(T);const A=1/(y-2),R=-A,L=1+A,I=[R,R,L,R,L,L,R,R,L,L,R,L],N=6,G=6,W=3,P=2,C=1,$=new Float32Array(W*G*N),X=new Float32Array(P*G*N),ee=new Float32Array(C*G*N);for(let se=0;se<N;se++){const ae=se%3*2/3-1,Ne=se>2?0:-1,K=[ae,Ne,0,ae+2/3,Ne,0,ae+2/3,Ne+1,0,ae,Ne,0,ae+2/3,Ne+1,0,ae,Ne+1,0];$.set(K,W*G*se),X.set(I,P*G*se);const H=[se,se,se,se,se,se];ee.set(H,C*G*se)}const xe=new Ga;xe.setAttribute("position",new qr($,W)),xe.setAttribute("uv",new qr(X,P)),xe.setAttribute("faceIndex",new qr(ee,C)),i.push(xe),d>Wo&&d--}return{lodPlanes:i,sizeLods:s,sigmas:c}}function o0(u,i,s){const c=new Va(u,i,s);return c.texture.mapping=du,c.texture.name="PMREM.cubeUv",c.scissorTest=!0,c}function nu(u,i,s,c,d){u.viewport.set(i,s,c,d),u.scissor.set(i,s,c,d)}function $R(u,i,s){const c=new Float32Array(Oa),d=new _e(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Oa,CUBEUV_TEXEL_WIDTH:1/i,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:d}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function c0(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function l0(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function KR(u){let i=new WeakMap,s=null;function c(y){if(y&&y.isTexture){const T=y.mapping,A=T===Nf||T===Ff,R=T===Zo||T===$o;if(A||R){let L=i.get(y);const I=L!==void 0?L.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==I)return s===null&&(s=new a0(u)),L=A?s.fromEquirectangular(y,L):s.fromCubemap(y,L),L.texture.pmremVersion=y.pmremVersion,i.set(y,L),L.texture;if(L!==void 0)return L.texture;{const N=y.image;return A&&N&&N.height>0||R&&N&&d(N)?(s===null&&(s=new a0(u)),L=A?s.fromEquirectangular(y):s.fromCubemap(y),L.texture.pmremVersion=y.pmremVersion,i.set(y,L),y.addEventListener("dispose",m),L.texture):null}}}return y}function d(y){let T=0;const A=6;for(let R=0;R<A;R++)y[R]!==void 0&&T++;return T===A}function m(y){const T=y.target;T.removeEventListener("dispose",m);const A=i.get(T);A!==void 0&&(i.delete(T),A.dispose())}function M(){i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:M}}function JR(u){const i={};function s(c){if(i[c]!==void 0)return i[c];let d;switch(c){case"WEBGL_depth_texture":d=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=u.getExtension(c)}return i[c]=d,d}return{has:function(c){return s(c)!==null},init:function(){s("EXT_color_buffer_float"),s("WEBGL_clip_cull_distance"),s("OES_texture_float_linear"),s("EXT_color_buffer_half_float"),s("WEBGL_multisampled_render_to_texture"),s("WEBGL_render_shared_exponent")},get:function(c){const d=s(c);return d===null&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported."),d}}}function jR(u,i,s,c){const d={},m=new WeakMap;function M(L){const I=L.target;I.index!==null&&i.remove(I.index);for(const G in I.attributes)i.remove(I.attributes[G]);for(const G in I.morphAttributes){const W=I.morphAttributes[G];for(let P=0,C=W.length;P<C;P++)i.remove(W[P])}I.removeEventListener("dispose",M),delete d[I.id];const N=m.get(I);N&&(i.remove(N),m.delete(I)),c.releaseStatesOfGeometry(I),I.isInstancedBufferGeometry===!0&&delete I._maxInstanceCount,s.memory.geometries--}function y(L,I){return d[I.id]===!0||(I.addEventListener("dispose",M),d[I.id]=!0,s.memory.geometries++),I}function T(L){const I=L.attributes;for(const G in I)i.update(I[G],u.ARRAY_BUFFER);const N=L.morphAttributes;for(const G in N){const W=N[G];for(let P=0,C=W.length;P<C;P++)i.update(W[P],u.ARRAY_BUFFER)}}function A(L){const I=[],N=L.index,G=L.attributes.position;let W=0;if(N!==null){const $=N.array;W=N.version;for(let X=0,ee=$.length;X<ee;X+=3){const xe=$[X+0],se=$[X+1],ae=$[X+2];I.push(xe,se,se,ae,ae,xe)}}else if(G!==void 0){const $=G.array;W=G.version;for(let X=0,ee=$.length/3-1;X<ee;X+=3){const xe=X+0,se=X+1,ae=X+2;I.push(xe,se,se,ae,ae,xe)}}else return;const P=new(q0(I)?Q0:j0)(I,1);P.version=W;const C=m.get(L);C&&i.remove(C),m.set(L,P)}function R(L){const I=m.get(L);if(I){const N=L.index;N!==null&&I.version<N.version&&A(L)}else A(L);return m.get(L)}return{get:y,update:T,getWireframeAttribute:R}}function QR(u,i,s){let c;function d(I){c=I}let m,M;function y(I){m=I.type,M=I.bytesPerElement}function T(I,N){u.drawElements(c,N,m,I*M),s.update(N,c,1)}function A(I,N,G){G!==0&&(u.drawElementsInstanced(c,N,m,I*M,G),s.update(N,c,G))}function R(I,N,G){if(G===0)return;const W=i.get("WEBGL_multi_draw");if(W===null)for(let P=0;P<G;P++)this.render(I[P]/M,N[P]);else{W.multiDrawElementsWEBGL(c,N,0,m,I,0,G);let P=0;for(let C=0;C<G;C++)P+=N[C];s.update(P,c,1)}}function L(I,N,G,W){if(G===0)return;const P=i.get("WEBGL_multi_draw");if(P===null)for(let C=0;C<I.length;C++)A(I[C]/M,N[C],W[C]);else{P.multiDrawElementsInstancedWEBGL(c,N,0,m,I,0,W,0,G);let C=0;for(let $=0;$<G;$++)C+=N[$];for(let $=0;$<W.length;$++)s.update(C,c,W[$])}}this.setMode=d,this.setIndex=y,this.render=T,this.renderInstances=A,this.renderMultiDraw=R,this.renderMultiDrawInstances=L}function eC(u){const i={geometries:0,textures:0},s={frame:0,calls:0,triangles:0,points:0,lines:0};function c(m,M,y){switch(s.calls++,M){case u.TRIANGLES:s.triangles+=y*(m/3);break;case u.LINES:s.lines+=y*(m/2);break;case u.LINE_STRIP:s.lines+=y*(m-1);break;case u.LINE_LOOP:s.lines+=y*m;break;case u.POINTS:s.points+=y*m;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",M);break}}function d(){s.calls=0,s.triangles=0,s.points=0,s.lines=0}return{memory:i,render:s,programs:null,autoReset:!0,reset:d,update:c}}function tC(u,i,s){const c=new WeakMap,d=new sn;function m(M,y,T){const A=M.morphTargetInfluences,R=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,L=R!==void 0?R.length:0;let I=c.get(y);if(I===void 0||I.count!==L){let H=function(){Ne.dispose(),c.delete(y),y.removeEventListener("dispose",H)};var N=H;I!==void 0&&I.texture.dispose();const G=y.morphAttributes.position!==void 0,W=y.morphAttributes.normal!==void 0,P=y.morphAttributes.color!==void 0,C=y.morphAttributes.position||[],$=y.morphAttributes.normal||[],X=y.morphAttributes.color||[];let ee=0;G===!0&&(ee=1),W===!0&&(ee=2),P===!0&&(ee=3);let xe=y.attributes.position.count*ee,se=1;xe>i.maxTextureSize&&(se=Math.ceil(xe/i.maxTextureSize),xe=i.maxTextureSize);const ae=new Float32Array(xe*se*4*L),Ne=new Z0(ae,xe,se,L);Ne.type=ks,Ne.needsUpdate=!0;const K=ee*4;for(let Me=0;Me<L;Me++){const Ie=C[Me],he=$[Me],qe=X[Me],Xe=xe*se*4*Me;for(let gt=0;gt<Ie.count;gt++){const ht=gt*K;G===!0&&(d.fromBufferAttribute(Ie,gt),ae[Xe+ht+0]=d.x,ae[Xe+ht+1]=d.y,ae[Xe+ht+2]=d.z,ae[Xe+ht+3]=0),W===!0&&(d.fromBufferAttribute(he,gt),ae[Xe+ht+4]=d.x,ae[Xe+ht+5]=d.y,ae[Xe+ht+6]=d.z,ae[Xe+ht+7]=0),P===!0&&(d.fromBufferAttribute(qe,gt),ae[Xe+ht+8]=d.x,ae[Xe+ht+9]=d.y,ae[Xe+ht+10]=d.z,ae[Xe+ht+11]=qe.itemSize===4?d.w:1)}}I={count:L,texture:Ne,size:new Oi(xe,se)},c.set(y,I),y.addEventListener("dispose",H)}if(M.isInstancedMesh===!0&&M.morphTexture!==null)T.getUniforms().setValue(u,"morphTexture",M.morphTexture,s);else{let G=0;for(let P=0;P<A.length;P++)G+=A[P];const W=y.morphTargetsRelative?1:1-G;T.getUniforms().setValue(u,"morphTargetBaseInfluence",W),T.getUniforms().setValue(u,"morphTargetInfluences",A)}T.getUniforms().setValue(u,"morphTargetsTexture",I.texture,s),T.getUniforms().setValue(u,"morphTargetsTextureSize",I.size)}return{update:m}}function iC(u,i,s,c){let d=new WeakMap;function m(T){const A=c.render.frame,R=T.geometry,L=i.get(T,R);if(d.get(L)!==A&&(i.update(L),d.set(L,A)),T.isInstancedMesh&&(T.hasEventListener("dispose",y)===!1&&T.addEventListener("dispose",y),d.get(T)!==A&&(s.update(T.instanceMatrix,u.ARRAY_BUFFER),T.instanceColor!==null&&s.update(T.instanceColor,u.ARRAY_BUFFER),d.set(T,A))),T.isSkinnedMesh){const I=T.skeleton;d.get(I)!==A&&(I.update(),d.set(I,A))}return L}function M(){d=new WeakMap}function y(T){const A=T.target;A.removeEventListener("dispose",y),s.remove(A.instanceMatrix),A.instanceColor!==null&&s.remove(A.instanceColor)}return{update:m,dispose:M}}class rx extends Hn{constructor(i,s,c,d,m,M,y,T,A,R){if(R=R!==void 0?R:qo,R!==qo&&R!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");c===void 0&&R===qo&&(c=Ko),c===void 0&&R===el&&(c=nl),super(null,d,m,M,y,T,R,c,A),this.isDepthTexture=!0,this.image={width:i,height:s},this.magFilter=y!==void 0?y:Er,this.minFilter=T!==void 0?T:Er,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(i){return super.copy(i),this.compareFunction=i.compareFunction,this}toJSON(i){const s=super.toJSON(i);return this.compareFunction!==null&&(s.compareFunction=this.compareFunction),s}}const sx=new Hn,ax=new rx(1,1);ax.compareFunction=X0;const ox=new Z0,cx=new VT,lx=new ix,h0=[],u0=[],d0=new Float32Array(16),f0=new Float32Array(9),p0=new Float32Array(4);function ec(u,i,s){const c=u[0];if(c<=0||c>0)return u;const d=i*s;let m=h0[d];if(m===void 0&&(m=new Float32Array(d),h0[d]=m),i!==0){c.toArray(m,0);for(let M=1,y=0;M!==i;++M)y+=s,u[M].toArray(m,y)}return m}function En(u,i){if(u.length!==i.length)return!1;for(let s=0,c=u.length;s<c;s++)if(u[s]!==i[s])return!1;return!0}function Tn(u,i){for(let s=0,c=i.length;s<c;s++)u[s]=i[s]}function gu(u,i){let s=u0[i];s===void 0&&(s=new Int32Array(i),u0[i]=s);for(let c=0;c!==i;++c)s[c]=u.allocateTextureUnit();return s}function nC(u,i){const s=this.cache;s[0]!==i&&(u.uniform1f(this.addr,i),s[0]=i)}function rC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y)&&(u.uniform2f(this.addr,i.x,i.y),s[0]=i.x,s[1]=i.y);else{if(En(s,i))return;u.uniform2fv(this.addr,i),Tn(s,i)}}function sC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z)&&(u.uniform3f(this.addr,i.x,i.y,i.z),s[0]=i.x,s[1]=i.y,s[2]=i.z);else if(i.r!==void 0)(s[0]!==i.r||s[1]!==i.g||s[2]!==i.b)&&(u.uniform3f(this.addr,i.r,i.g,i.b),s[0]=i.r,s[1]=i.g,s[2]=i.b);else{if(En(s,i))return;u.uniform3fv(this.addr,i),Tn(s,i)}}function aC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z||s[3]!==i.w)&&(u.uniform4f(this.addr,i.x,i.y,i.z,i.w),s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=i.w);else{if(En(s,i))return;u.uniform4fv(this.addr,i),Tn(s,i)}}function oC(u,i){const s=this.cache,c=i.elements;if(c===void 0){if(En(s,i))return;u.uniformMatrix2fv(this.addr,!1,i),Tn(s,i)}else{if(En(s,c))return;p0.set(c),u.uniformMatrix2fv(this.addr,!1,p0),Tn(s,c)}}function cC(u,i){const s=this.cache,c=i.elements;if(c===void 0){if(En(s,i))return;u.uniformMatrix3fv(this.addr,!1,i),Tn(s,i)}else{if(En(s,c))return;f0.set(c),u.uniformMatrix3fv(this.addr,!1,f0),Tn(s,c)}}function lC(u,i){const s=this.cache,c=i.elements;if(c===void 0){if(En(s,i))return;u.uniformMatrix4fv(this.addr,!1,i),Tn(s,i)}else{if(En(s,c))return;d0.set(c),u.uniformMatrix4fv(this.addr,!1,d0),Tn(s,c)}}function hC(u,i){const s=this.cache;s[0]!==i&&(u.uniform1i(this.addr,i),s[0]=i)}function uC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y)&&(u.uniform2i(this.addr,i.x,i.y),s[0]=i.x,s[1]=i.y);else{if(En(s,i))return;u.uniform2iv(this.addr,i),Tn(s,i)}}function dC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z)&&(u.uniform3i(this.addr,i.x,i.y,i.z),s[0]=i.x,s[1]=i.y,s[2]=i.z);else{if(En(s,i))return;u.uniform3iv(this.addr,i),Tn(s,i)}}function fC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z||s[3]!==i.w)&&(u.uniform4i(this.addr,i.x,i.y,i.z,i.w),s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=i.w);else{if(En(s,i))return;u.uniform4iv(this.addr,i),Tn(s,i)}}function pC(u,i){const s=this.cache;s[0]!==i&&(u.uniform1ui(this.addr,i),s[0]=i)}function mC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y)&&(u.uniform2ui(this.addr,i.x,i.y),s[0]=i.x,s[1]=i.y);else{if(En(s,i))return;u.uniform2uiv(this.addr,i),Tn(s,i)}}function gC(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z)&&(u.uniform3ui(this.addr,i.x,i.y,i.z),s[0]=i.x,s[1]=i.y,s[2]=i.z);else{if(En(s,i))return;u.uniform3uiv(this.addr,i),Tn(s,i)}}function _C(u,i){const s=this.cache;if(i.x!==void 0)(s[0]!==i.x||s[1]!==i.y||s[2]!==i.z||s[3]!==i.w)&&(u.uniform4ui(this.addr,i.x,i.y,i.z,i.w),s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=i.w);else{if(En(s,i))return;u.uniform4uiv(this.addr,i),Tn(s,i)}}function xC(u,i,s){const c=this.cache,d=s.allocateTextureUnit();c[0]!==d&&(u.uniform1i(this.addr,d),c[0]=d);const m=this.type===u.SAMPLER_2D_SHADOW?ax:sx;s.setTexture2D(i||m,d)}function vC(u,i,s){const c=this.cache,d=s.allocateTextureUnit();c[0]!==d&&(u.uniform1i(this.addr,d),c[0]=d),s.setTexture3D(i||cx,d)}function yC(u,i,s){const c=this.cache,d=s.allocateTextureUnit();c[0]!==d&&(u.uniform1i(this.addr,d),c[0]=d),s.setTextureCube(i||lx,d)}function MC(u,i,s){const c=this.cache,d=s.allocateTextureUnit();c[0]!==d&&(u.uniform1i(this.addr,d),c[0]=d),s.setTexture2DArray(i||ox,d)}function SC(u){switch(u){case 5126:return nC;case 35664:return rC;case 35665:return sC;case 35666:return aC;case 35674:return oC;case 35675:return cC;case 35676:return lC;case 5124:case 35670:return hC;case 35667:case 35671:return uC;case 35668:case 35672:return dC;case 35669:case 35673:return fC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return MC}}function bC(u,i){u.uniform1fv(this.addr,i)}function EC(u,i){const s=ec(i,this.size,2);u.uniform2fv(this.addr,s)}function TC(u,i){const s=ec(i,this.size,3);u.uniform3fv(this.addr,s)}function AC(u,i){const s=ec(i,this.size,4);u.uniform4fv(this.addr,s)}function wC(u,i){const s=ec(i,this.size,4);u.uniformMatrix2fv(this.addr,!1,s)}function RC(u,i){const s=ec(i,this.size,9);u.uniformMatrix3fv(this.addr,!1,s)}function CC(u,i){const s=ec(i,this.size,16);u.uniformMatrix4fv(this.addr,!1,s)}function PC(u,i){u.uniform1iv(this.addr,i)}function LC(u,i){u.uniform2iv(this.addr,i)}function IC(u,i){u.uniform3iv(this.addr,i)}function DC(u,i){u.uniform4iv(this.addr,i)}function UC(u,i){u.uniform1uiv(this.addr,i)}function NC(u,i){u.uniform2uiv(this.addr,i)}function FC(u,i){u.uniform3uiv(this.addr,i)}function OC(u,i){u.uniform4uiv(this.addr,i)}function BC(u,i,s){const c=this.cache,d=i.length,m=gu(s,d);En(c,m)||(u.uniform1iv(this.addr,m),Tn(c,m));for(let M=0;M!==d;++M)s.setTexture2D(i[M]||sx,m[M])}function zC(u,i,s){const c=this.cache,d=i.length,m=gu(s,d);En(c,m)||(u.uniform1iv(this.addr,m),Tn(c,m));for(let M=0;M!==d;++M)s.setTexture3D(i[M]||cx,m[M])}function VC(u,i,s){const c=this.cache,d=i.length,m=gu(s,d);En(c,m)||(u.uniform1iv(this.addr,m),Tn(c,m));for(let M=0;M!==d;++M)s.setTextureCube(i[M]||lx,m[M])}function GC(u,i,s){const c=this.cache,d=i.length,m=gu(s,d);En(c,m)||(u.uniform1iv(this.addr,m),Tn(c,m));for(let M=0;M!==d;++M)s.setTexture2DArray(i[M]||ox,m[M])}function HC(u){switch(u){case 5126:return bC;case 35664:return EC;case 35665:return TC;case 35666:return AC;case 35674:return wC;case 35675:return RC;case 35676:return CC;case 5124:case 35670:return PC;case 35667:case 35671:return LC;case 35668:case 35672:return IC;case 35669:case 35673:return DC;case 5125:return UC;case 36294:return NC;case 36295:return FC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return GC}}class kC{constructor(i,s,c){this.id=i,this.addr=c,this.cache=[],this.type=s.type,this.setValue=SC(s.type)}}class WC{constructor(i,s,c){this.id=i,this.addr=c,this.cache=[],this.type=s.type,this.size=s.size,this.setValue=HC(s.type)}}class XC{constructor(i){this.id=i,this.seq=[],this.map={}}setValue(i,s,c){const d=this.seq;for(let m=0,M=d.length;m!==M;++m){const y=d[m];y.setValue(i,s[y.id],c)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function m0(u,i){u.seq.push(i),u.map[i.id]=i}function qC(u,i,s){const c=u.name,d=c.length;for(Rf.lastIndex=0;;){const m=Rf.exec(c),M=Rf.lastIndex;let y=m[1];const T=m[2]==="]",A=m[3];if(T&&(y=y|0),A===void 0||A==="["&&M+2===d){m0(s,A===void 0?new kC(y,u,i):new WC(y,u,i));break}else{let L=s.map[y];L===void 0&&(L=new XC(y),m0(s,L)),s=L}}}class su{constructor(i,s){this.seq=[],this.map={};const c=i.getProgramParameter(s,i.ACTIVE_UNIFORMS);for(let d=0;d<c;++d){const m=i.getActiveUniform(s,d),M=i.getUniformLocation(s,m.name);qC(m,M,this)}}setValue(i,s,c,d){const m=this.map[s];m!==void 0&&m.setValue(i,c,d)}setOptional(i,s,c){const d=s[c];d!==void 0&&this.setValue(i,c,d)}static upload(i,s,c,d){for(let m=0,M=s.length;m!==M;++m){const y=s[m],T=c[y.id];T.needsUpdate!==!1&&y.setValue(i,T.value,d)}}static seqWithValue(i,s){const c=[];for(let d=0,m=i.length;d!==m;++d){const M=i[d];M.id in s&&c.push(M)}return c}}function g0(u,i,s){const c=u.createShader(i);return u.shaderSource(c,s),u.compileShader(c),c}const YC=37297;let ZC=0;function $C(u,i){const s=u.split(`
`),c=[],d=Math.max(i-6,0),m=Math.min(i+6,s.length);for(let M=d;M<m;M++){const y=M+1;c.push(`${y===i?">":" "} ${y}: ${s[M]}`)}return c.join(`
`)}function KC(u){const i=Ki.getPrimaries(Ki.workingColorSpace),s=Ki.getPrimaries(u);let c;switch(i===s?c="":i===lu&&s===cu?c="LinearDisplayP3ToLinearSRGB":i===cu&&s===lu&&(c="LinearSRGBToLinearDisplayP3"),u){case $s:case pu:return[c,"LinearTransferOETF"];case Hr:case Gf:return[c,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",u),[c,"LinearTransferOETF"]}}function _0(u,i,s){const c=u.getShaderParameter(i,u.COMPILE_STATUS),d=u.getShaderInfoLog(i).trim();if(c&&d==="")return"";const m=/ERROR: 0:(\d+)/.exec(d);if(m){const M=parseInt(m[1]);return s.toUpperCase()+`

`+d+`

`+$C(u.getShaderSource(i),M)}else return d}function JC(u,i){const s=KC(i);return`vec4 ${u}( vec4 value ) { return ${s[0]}( ${s[1]}( value ) ); }`}function jC(u,i){let s;switch(i){case rT:s="Linear";break;case sT:s="Reinhard";break;case aT:s="OptimizedCineon";break;case oT:s="ACESFilmic";break;case lT:s="AgX";break;case hT:s="Neutral";break;case cT:s="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",i),s="Linear"}return"vec3 "+u+"( vec3 color ) { return "+s+"ToneMapping( color ); }"}function QC(u){return[u.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",u.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qc).join(`
`)}function e2(u){const i=[];for(const s in u){const c=u[s];c!==!1&&i.push("#define "+s+" "+c)}return i.join(`
`)}function t2(u,i){const s={},c=u.getProgramParameter(i,u.ACTIVE_ATTRIBUTES);for(let d=0;d<c;d++){const m=u.getActiveAttrib(i,d),M=m.name;let y=1;m.type===u.FLOAT_MAT2&&(y=2),m.type===u.FLOAT_MAT3&&(y=3),m.type===u.FLOAT_MAT4&&(y=4),s[M]={type:m.type,location:u.getAttribLocation(i,M),locationSize:y}}return s}function Qc(u){return u!==""}function x0(u,i){const s=i.numSpotLightShadows+i.numSpotLightMaps-i.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,i.numDirLights).replace(/NUM_SPOT_LIGHTS/g,i.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,i.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,s).replace(/NUM_RECT_AREA_LIGHTS/g,i.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,i.numPointLights).replace(/NUM_HEMI_LIGHTS/g,i.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,i.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,i.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,i.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,i.numPointLightShadows)}function v0(u,i){return u.replace(/NUM_CLIPPING_PLANES/g,i.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,i.numClippingPlanes-i.numClipIntersection)}const i2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(u){return u.replace(i2,r2)}const n2=new Map;function r2(u,i){let s=Ei[i];if(s===void 0){const c=n2.get(i);if(c!==void 0)s=Ei[c],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',i,c);else throw new Error("Can not resolve #include <"+i+">")}return zf(s)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(u){return u.replace(s2,a2)}function a2(u,i,s,c){let d="";for(let m=parseInt(i);m<parseInt(s);m++)d+=c.replace(/\[\s*i\s*\]/g,"[ "+m+" ]").replace(/UNROLLED_LOOP_INDEX/g,m);return d}function M0(u){let i=`precision ${u.precision} float;
	precision ${u.precision} int;
	precision ${u.precision} sampler2D;
	precision ${u.precision} samplerCube;
	precision ${u.precision} sampler3D;
	precision ${u.precision} sampler2DArray;
	precision ${u.precision} sampler2DShadow;
	precision ${u.precision} samplerCubeShadow;
	precision ${u.precision} sampler2DArrayShadow;
	precision ${u.precision} isampler2D;
	precision ${u.precision} isampler3D;
	precision ${u.precision} isamplerCube;
	precision ${u.precision} isampler2DArray;
	precision ${u.precision} usampler2D;
	precision ${u.precision} usampler3D;
	precision ${u.precision} usamplerCube;
	precision ${u.precision} usampler2DArray;
	`;return u.precision==="highp"?i+=`
#define HIGH_PRECISION`:u.precision==="mediump"?i+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(i+=`
#define LOW_PRECISION`),i}function o2(u){let i="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===N0?i="SHADOWMAP_TYPE_PCF":u.shadowMapType===P1?i="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===ps&&(i="SHADOWMAP_TYPE_VSM"),i}function c2(u){let i="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Zo:case $o:i="ENVMAP_TYPE_CUBE";break;case du:i="ENVMAP_TYPE_CUBE_UV";break}return i}function l2(u){let i="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case $o:i="ENVMAP_MODE_REFRACTION";break}return i}function h2(u){let i="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case F0:i="ENVMAP_BLENDING_MULTIPLY";break;case iT:i="ENVMAP_BLENDING_MIX";break;case nT:i="ENVMAP_BLENDING_ADD";break}return i}function u2(u){const i=u.envMapCubeUVHeight;if(i===null)return null;const s=Math.log2(i)-2,c=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,s),7*16)),texelHeight:c,maxMip:s}}function d2(u,i,s,c){const d=u.getContext(),m=s.defines;let M=s.vertexShader,y=s.fragmentShader;const T=o2(s),A=c2(s),R=l2(s),L=h2(s),I=u2(s),N=QC(s),G=e2(m),W=d.createProgram();let P,C,$=s.glslVersion?"#version "+s.glslVersion+`
`:"";s.isRawShaderMaterial?(P=["#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,G].filter(Qc).join(`
`),P.length>0&&(P+=`
`),C=["#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,G].filter(Qc).join(`
`),C.length>0&&(C+=`
`)):(P=[M0(s),"#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,G,s.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",s.batching?"#define USE_BATCHING":"",s.instancing?"#define USE_INSTANCING":"",s.instancingColor?"#define USE_INSTANCING_COLOR":"",s.instancingMorph?"#define USE_INSTANCING_MORPH":"",s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.map?"#define USE_MAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+R:"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.displacementMap?"#define USE_DISPLACEMENTMAP":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.anisotropy?"#define USE_ANISOTROPY":"",s.anisotropyMap?"#define USE_ANISOTROPYMAP":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.alphaHash?"#define USE_ALPHAHASH":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.mapUv?"#define MAP_UV "+s.mapUv:"",s.alphaMapUv?"#define ALPHAMAP_UV "+s.alphaMapUv:"",s.lightMapUv?"#define LIGHTMAP_UV "+s.lightMapUv:"",s.aoMapUv?"#define AOMAP_UV "+s.aoMapUv:"",s.emissiveMapUv?"#define EMISSIVEMAP_UV "+s.emissiveMapUv:"",s.bumpMapUv?"#define BUMPMAP_UV "+s.bumpMapUv:"",s.normalMapUv?"#define NORMALMAP_UV "+s.normalMapUv:"",s.displacementMapUv?"#define DISPLACEMENTMAP_UV "+s.displacementMapUv:"",s.metalnessMapUv?"#define METALNESSMAP_UV "+s.metalnessMapUv:"",s.roughnessMapUv?"#define ROUGHNESSMAP_UV "+s.roughnessMapUv:"",s.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+s.anisotropyMapUv:"",s.clearcoatMapUv?"#define CLEARCOATMAP_UV "+s.clearcoatMapUv:"",s.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+s.clearcoatNormalMapUv:"",s.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+s.clearcoatRoughnessMapUv:"",s.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+s.iridescenceMapUv:"",s.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+s.iridescenceThicknessMapUv:"",s.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+s.sheenColorMapUv:"",s.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+s.sheenRoughnessMapUv:"",s.specularMapUv?"#define SPECULARMAP_UV "+s.specularMapUv:"",s.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+s.specularColorMapUv:"",s.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+s.specularIntensityMapUv:"",s.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+s.transmissionMapUv:"",s.thicknessMapUv?"#define THICKNESSMAP_UV "+s.thicknessMapUv:"",s.vertexTangents&&s.flatShading===!1?"#define USE_TANGENT":"",s.vertexColors?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.flatShading?"#define FLAT_SHADED":"",s.skinning?"#define USE_SKINNING":"",s.morphTargets?"#define USE_MORPHTARGETS":"",s.morphNormals&&s.flatShading===!1?"#define USE_MORPHNORMALS":"",s.morphColors?"#define USE_MORPHCOLORS":"",s.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",s.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+s.morphTextureStride:"",s.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+s.morphTargetsCount:"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+T:"",s.sizeAttenuation?"#define USE_SIZEATTENUATION":"",s.numLightProbes>0?"#define USE_LIGHT_PROBES":"",s.useLegacyLights?"#define LEGACY_LIGHTS":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qc).join(`
`),C=[M0(s),"#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,G,s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",s.map?"#define USE_MAP":"",s.matcap?"#define USE_MATCAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+A:"",s.envMap?"#define "+R:"",s.envMap?"#define "+L:"",I?"#define CUBEUV_TEXEL_WIDTH "+I.texelWidth:"",I?"#define CUBEUV_TEXEL_HEIGHT "+I.texelHeight:"",I?"#define CUBEUV_MAX_MIP "+I.maxMip+".0":"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.anisotropy?"#define USE_ANISOTROPY":"",s.anisotropyMap?"#define USE_ANISOTROPYMAP":"",s.clearcoat?"#define USE_CLEARCOAT":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.dispersion?"#define USE_DISPERSION":"",s.iridescence?"#define USE_IRIDESCENCE":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.alphaTest?"#define USE_ALPHATEST":"",s.alphaHash?"#define USE_ALPHAHASH":"",s.sheen?"#define USE_SHEEN":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.vertexTangents&&s.flatShading===!1?"#define USE_TANGENT":"",s.vertexColors||s.instancingColor?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.gradientMap?"#define USE_GRADIENTMAP":"",s.flatShading?"#define FLAT_SHADED":"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+T:"",s.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",s.numLightProbes>0?"#define USE_LIGHT_PROBES":"",s.useLegacyLights?"#define LEGACY_LIGHTS":"",s.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",s.toneMapping!==qs?"#define TONE_MAPPING":"",s.toneMapping!==qs?Ei.tonemapping_pars_fragment:"",s.toneMapping!==qs?jC("toneMapping",s.toneMapping):"",s.dithering?"#define DITHERING":"",s.opaque?"#define OPAQUE":"",Ei.colorspace_pars_fragment,JC("linearToOutputTexel",s.outputColorSpace),s.useDepthPacking?"#define DEPTH_PACKING "+s.depthPacking:"",`
`].filter(Qc).join(`
`)),M=zf(M),M=x0(M,s),M=v0(M,s),y=zf(y),y=x0(y,s),y=v0(y,s),M=y0(M),y=y0(y),s.isRawShaderMaterial!==!0&&($=`#version 300 es
`,P=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+P,C=["#define varying in",s.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",s.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const X=$+P+M,ee=$+C+y,xe=g0(d,d.VERTEX_SHADER,X),se=g0(d,d.FRAGMENT_SHADER,ee);d.attachShader(W,xe),d.attachShader(W,se),s.index0AttributeName!==void 0?d.bindAttribLocation(W,0,s.index0AttributeName):s.morphTargets===!0&&d.bindAttribLocation(W,0,"position"),d.linkProgram(W);function ae(Me){if(u.debug.checkShaderErrors){const Ie=d.getProgramInfoLog(W).trim(),he=d.getShaderInfoLog(xe).trim(),qe=d.getShaderInfoLog(se).trim();let Xe=!0,gt=!0;if(d.getProgramParameter(W,d.LINK_STATUS)===!1)if(Xe=!1,typeof u.debug.onShaderError=="function")u.debug.onShaderError(d,W,xe,se);else{const ht=_0(d,xe,"vertex"),De=_0(d,se,"fragment");console.error("THREE.WebGLProgram: Shader Error "+d.getError()+" - VALIDATE_STATUS "+d.getProgramParameter(W,d.VALIDATE_STATUS)+`

Material Name: `+Me.name+`
Material Type: `+Me.type+`

Program Info Log: `+Ie+`
`+ht+`
`+De)}else Ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ie):(he===""||qe==="")&&(gt=!1);gt&&(Me.diagnostics={runnable:Xe,programLog:Ie,vertexShader:{log:he,prefix:P},fragmentShader:{log:qe,prefix:C}})}d.deleteShader(xe),d.deleteShader(se),Ne=new su(d,W),K=t2(d,W)}let Ne;this.getUniforms=function(){return Ne===void 0&&ae(this),Ne};let K;this.getAttributes=function(){return K===void 0&&ae(this),K};let H=s.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=d.getProgramParameter(W,YC)),H},this.destroy=function(){c.releaseStatesOfProgram(this),d.deleteProgram(W),this.program=void 0},this.type=s.shaderType,this.name=s.shaderName,this.id=ZC++,this.cacheKey=i,this.usedTimes=1,this.program=W,this.vertexShader=xe,this.fragmentShader=se,this}let f2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(i){const s=i.vertexShader,c=i.fragmentShader,d=this._getShaderStage(s),m=this._getShaderStage(c),M=this._getShaderCacheForMaterial(i);return M.has(d)===!1&&(M.add(d),d.usedTimes++),M.has(m)===!1&&(M.add(m),m.usedTimes++),this}remove(i){const s=this.materialCache.get(i);for(const c of s)c.usedTimes--,c.usedTimes===0&&this.shaderCache.delete(c.code);return this.materialCache.delete(i),this}getVertexShaderID(i){return this._getShaderStage(i.vertexShader).id}getFragmentShaderID(i){return this._getShaderStage(i.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(i){const s=this.materialCache;let c=s.get(i);return c===void 0&&(c=new Set,s.set(i,c)),c}_getShaderStage(i){const s=this.shaderCache;let c=s.get(i);return c===void 0&&(c=new m2(i),s.set(i,c)),c}}class m2{constructor(i){this.id=f2++,this.code=i,this.usedTimes=0}}function g2(u,i,s,c,d,m,M){const y=new $0,T=new p2,A=new Set,R=[],L=d.logarithmicDepthBuffer,I=d.vertexTextures;let N=d.precision;const G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function W(K){return A.add(K),K===0?"uv":`uv${K}`}function P(K,H,Me,Ie,he){const qe=Ie.fog,Xe=he.geometry,gt=K.isMeshStandardMaterial?Ie.environment:null,ht=(K.isMeshStandardMaterial?s:i).get(K.envMap||gt),De=ht&&ht.mapping===du?ht.image.height:null,vt=G[K.type];K.precision!==null&&(N=d.getMaxPrecision(K.precision),N!==K.precision&&console.warn("THREE.WebGLProgram.getParameters:",K.precision,"not supported, using",N,"instead."));const ft=Xe.morphAttributes.position||Xe.morphAttributes.normal||Xe.morphAttributes.color,Kt=ft!==void 0?ft.length:0;let vi=0;Xe.morphAttributes.position!==void 0&&(vi=1),Xe.morphAttributes.normal!==void 0&&(vi=2),Xe.morphAttributes.color!==void 0&&(vi=3);let Hi,Fe,yt,kt;if(vt){const Bi=kr[vt];Hi=Bi.vertexShader,Fe=Bi.fragmentShader}else Hi=K.vertexShader,Fe=K.fragmentShader,T.update(K),yt=T.getVertexShaderID(K),kt=T.getFragmentShaderID(K);const oe=u.getRenderTarget(),be=he.isInstancedMesh===!0,we=he.isBatchedMesh===!0,te=!!K.map,tt=!!K.matcap,Je=!!ht,zt=!!K.aoMap,_t=!!K.lightMap,at=!!K.bumpMap,Et=!!K.normalMap,Ct=!!K.displacementMap,jt=!!K.emissiveMap,Q=!!K.metalnessMap,z=!!K.roughnessMap,pe=K.anisotropy>0,Ae=K.clearcoat>0,Pe=K.dispersion>0,Ve=K.iridescence>0,ot=K.sheen>0,st=K.transmission>0,it=pe&&!!K.anisotropyMap,pt=Ae&&!!K.clearcoatMap,Ye=Ae&&!!K.clearcoatNormalMap,ze=Ae&&!!K.clearcoatRoughnessMap,Ut=Ve&&!!K.iridescenceMap,mt=Ve&&!!K.iridescenceThicknessMap,ut=ot&&!!K.sheenColorMap,Vt=ot&&!!K.sheenRoughnessMap,ai=!!K.specularMap,Ji=!!K.specularColorMap,si=!!K.specularIntensityMap,le=st&&!!K.transmissionMap,Ge=st&&!!K.thicknessMap,Oe=!!K.gradientMap,Rt=!!K.alphaMap,At=K.alphaTest>0,Ui=!!K.alphaHash,Li=!!K.extensions;let Qi=qs;K.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Qi=u.toneMapping);const Mn={shaderID:vt,shaderType:K.type,shaderName:K.name,vertexShader:Hi,fragmentShader:Fe,defines:K.defines,customVertexShaderID:yt,customFragmentShaderID:kt,isRawShaderMaterial:K.isRawShaderMaterial===!0,glslVersion:K.glslVersion,precision:N,batching:we,instancing:be,instancingColor:be&&he.instanceColor!==null,instancingMorph:be&&he.morphTexture!==null,supportsVertexTextures:I,outputColorSpace:oe===null?u.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$s,alphaToCoverage:!!K.alphaToCoverage,map:te,matcap:tt,envMap:Je,envMapMode:Je&&ht.mapping,envMapCubeUVHeight:De,aoMap:zt,lightMap:_t,bumpMap:at,normalMap:Et,displacementMap:I&&Ct,emissiveMap:jt,normalMapObjectSpace:Et&&K.normalMapType===TT,normalMapTangentSpace:Et&&K.normalMapType===ET,metalnessMap:Q,roughnessMap:z,anisotropy:pe,anisotropyMap:it,clearcoat:Ae,clearcoatMap:pt,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ze,dispersion:Pe,iridescence:Ve,iridescenceMap:Ut,iridescenceThicknessMap:mt,sheen:ot,sheenColorMap:ut,sheenRoughnessMap:Vt,specularMap:ai,specularColorMap:Ji,specularIntensityMap:si,transmission:st,transmissionMap:le,thicknessMap:Ge,gradientMap:Oe,opaque:K.transparent===!1&&K.blending===Xo&&K.alphaToCoverage===!1,alphaMap:Rt,alphaTest:At,alphaHash:Ui,combine:K.combine,mapUv:te&&W(K.map.channel),aoMapUv:zt&&W(K.aoMap.channel),lightMapUv:_t&&W(K.lightMap.channel),bumpMapUv:at&&W(K.bumpMap.channel),normalMapUv:Et&&W(K.normalMap.channel),displacementMapUv:Ct&&W(K.displacementMap.channel),emissiveMapUv:jt&&W(K.emissiveMap.channel),metalnessMapUv:Q&&W(K.metalnessMap.channel),roughnessMapUv:z&&W(K.roughnessMap.channel),anisotropyMapUv:it&&W(K.anisotropyMap.channel),clearcoatMapUv:pt&&W(K.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&W(K.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&W(K.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&W(K.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&W(K.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&W(K.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&W(K.sheenRoughnessMap.channel),specularMapUv:ai&&W(K.specularMap.channel),specularColorMapUv:Ji&&W(K.specularColorMap.channel),specularIntensityMapUv:si&&W(K.specularIntensityMap.channel),transmissionMapUv:le&&W(K.transmissionMap.channel),thicknessMapUv:Ge&&W(K.thicknessMap.channel),alphaMapUv:Rt&&W(K.alphaMap.channel),vertexTangents:!!Xe.attributes.tangent&&(Et||pe),vertexColors:K.vertexColors,vertexAlphas:K.vertexColors===!0&&!!Xe.attributes.color&&Xe.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!Xe.attributes.uv&&(te||Rt),fog:!!qe,useFog:K.fog===!0,fogExp2:!!qe&&qe.isFogExp2,flatShading:K.flatShading===!0,sizeAttenuation:K.sizeAttenuation===!0,logarithmicDepthBuffer:L,skinning:he.isSkinnedMesh===!0,morphTargets:Xe.morphAttributes.position!==void 0,morphNormals:Xe.morphAttributes.normal!==void 0,morphColors:Xe.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:vi,numDirLights:H.directional.length,numPointLights:H.point.length,numSpotLights:H.spot.length,numSpotLightMaps:H.spotLightMap.length,numRectAreaLights:H.rectArea.length,numHemiLights:H.hemi.length,numDirLightShadows:H.directionalShadowMap.length,numPointLightShadows:H.pointShadowMap.length,numSpotLightShadows:H.spotShadowMap.length,numSpotLightShadowsWithMaps:H.numSpotLightShadowsWithMaps,numLightProbes:H.numLightProbes,numClippingPlanes:M.numPlanes,numClipIntersection:M.numIntersection,dithering:K.dithering,shadowMapEnabled:u.shadowMap.enabled&&Me.length>0,shadowMapType:u.shadowMap.type,toneMapping:Qi,useLegacyLights:u._useLegacyLights,decodeVideoTexture:te&&K.map.isVideoTexture===!0&&Ki.getTransfer(K.map.colorSpace)===tn,premultipliedAlpha:K.premultipliedAlpha,doubleSided:K.side===br,flipSided:K.side===rr,useDepthPacking:K.depthPacking>=0,depthPacking:K.depthPacking||0,index0AttributeName:K.index0AttributeName,extensionClipCullDistance:Li&&K.extensions.clipCullDistance===!0&&c.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Li&&K.extensions.multiDraw===!0&&c.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:c.has("KHR_parallel_shader_compile"),customProgramCacheKey:K.customProgramCacheKey()};return Mn.vertexUv1s=A.has(1),Mn.vertexUv2s=A.has(2),Mn.vertexUv3s=A.has(3),A.clear(),Mn}function C(K){const H=[];if(K.shaderID?H.push(K.shaderID):(H.push(K.customVertexShaderID),H.push(K.customFragmentShaderID)),K.defines!==void 0)for(const Me in K.defines)H.push(Me),H.push(K.defines[Me]);return K.isRawShaderMaterial===!1&&($(H,K),X(H,K),H.push(u.outputColorSpace)),H.push(K.customProgramCacheKey),H.join()}function $(K,H){K.push(H.precision),K.push(H.outputColorSpace),K.push(H.envMapMode),K.push(H.envMapCubeUVHeight),K.push(H.mapUv),K.push(H.alphaMapUv),K.push(H.lightMapUv),K.push(H.aoMapUv),K.push(H.bumpMapUv),K.push(H.normalMapUv),K.push(H.displacementMapUv),K.push(H.emissiveMapUv),K.push(H.metalnessMapUv),K.push(H.roughnessMapUv),K.push(H.anisotropyMapUv),K.push(H.clearcoatMapUv),K.push(H.clearcoatNormalMapUv),K.push(H.clearcoatRoughnessMapUv),K.push(H.iridescenceMapUv),K.push(H.iridescenceThicknessMapUv),K.push(H.sheenColorMapUv),K.push(H.sheenRoughnessMapUv),K.push(H.specularMapUv),K.push(H.specularColorMapUv),K.push(H.specularIntensityMapUv),K.push(H.transmissionMapUv),K.push(H.thicknessMapUv),K.push(H.combine),K.push(H.fogExp2),K.push(H.sizeAttenuation),K.push(H.morphTargetsCount),K.push(H.morphAttributeCount),K.push(H.numDirLights),K.push(H.numPointLights),K.push(H.numSpotLights),K.push(H.numSpotLightMaps),K.push(H.numHemiLights),K.push(H.numRectAreaLights),K.push(H.numDirLightShadows),K.push(H.numPointLightShadows),K.push(H.numSpotLightShadows),K.push(H.numSpotLightShadowsWithMaps),K.push(H.numLightProbes),K.push(H.shadowMapType),K.push(H.toneMapping),K.push(H.numClippingPlanes),K.push(H.numClipIntersection),K.push(H.depthPacking)}function X(K,H){y.disableAll(),H.supportsVertexTextures&&y.enable(0),H.instancing&&y.enable(1),H.instancingColor&&y.enable(2),H.instancingMorph&&y.enable(3),H.matcap&&y.enable(4),H.envMap&&y.enable(5),H.normalMapObjectSpace&&y.enable(6),H.normalMapTangentSpace&&y.enable(7),H.clearcoat&&y.enable(8),H.iridescence&&y.enable(9),H.alphaTest&&y.enable(10),H.vertexColors&&y.enable(11),H.vertexAlphas&&y.enable(12),H.vertexUv1s&&y.enable(13),H.vertexUv2s&&y.enable(14),H.vertexUv3s&&y.enable(15),H.vertexTangents&&y.enable(16),H.anisotropy&&y.enable(17),H.alphaHash&&y.enable(18),H.batching&&y.enable(19),H.dispersion&&y.enable(20),K.push(y.mask),y.disableAll(),H.fog&&y.enable(0),H.useFog&&y.enable(1),H.flatShading&&y.enable(2),H.logarithmicDepthBuffer&&y.enable(3),H.skinning&&y.enable(4),H.morphTargets&&y.enable(5),H.morphNormals&&y.enable(6),H.morphColors&&y.enable(7),H.premultipliedAlpha&&y.enable(8),H.shadowMapEnabled&&y.enable(9),H.useLegacyLights&&y.enable(10),H.doubleSided&&y.enable(11),H.flipSided&&y.enable(12),H.useDepthPacking&&y.enable(13),H.dithering&&y.enable(14),H.transmission&&y.enable(15),H.sheen&&y.enable(16),H.opaque&&y.enable(17),H.pointsUvs&&y.enable(18),H.decodeVideoTexture&&y.enable(19),H.alphaToCoverage&&y.enable(20),K.push(y.mask)}function ee(K){const H=G[K.type];let Me;if(H){const Ie=kr[H];Me=QT.clone(Ie.uniforms)}else Me=K.uniforms;return Me}function xe(K,H){let Me;for(let Ie=0,he=R.length;Ie<he;Ie++){const qe=R[Ie];if(qe.cacheKey===H){Me=qe,++Me.usedTimes;break}}return Me===void 0&&(Me=new d2(u,H,K,m),R.push(Me)),Me}function se(K){if(--K.usedTimes===0){const H=R.indexOf(K);R[H]=R[R.length-1],R.pop(),K.destroy()}}function ae(K){T.remove(K)}function Ne(){T.dispose()}return{getParameters:P,getProgramCacheKey:C,getUniforms:ee,acquireProgram:xe,releaseProgram:se,releaseShaderCache:ae,programs:R,dispose:Ne}}function _2(){let u=new WeakMap;function i(m){let M=u.get(m);return M===void 0&&(M={},u.set(m,M)),M}function s(m){u.delete(m)}function c(m,M,y){u.get(m)[M]=y}function d(){u=new WeakMap}return{get:i,remove:s,update:c,dispose:d}}function x2(u,i){return u.groupOrder!==i.groupOrder?u.groupOrder-i.groupOrder:u.renderOrder!==i.renderOrder?u.renderOrder-i.renderOrder:u.material.id!==i.material.id?u.material.id-i.material.id:u.z!==i.z?u.z-i.z:u.id-i.id}function S0(u,i){return u.groupOrder!==i.groupOrder?u.groupOrder-i.groupOrder:u.renderOrder!==i.renderOrder?u.renderOrder-i.renderOrder:u.z!==i.z?i.z-u.z:u.id-i.id}function b0(){const u=[];let i=0;const s=[],c=[],d=[];function m(){i=0,s.length=0,c.length=0,d.length=0}function M(L,I,N,G,W,P){let C=u[i];return C===void 0?(C={id:L.id,object:L,geometry:I,material:N,groupOrder:G,renderOrder:L.renderOrder,z:W,group:P},u[i]=C):(C.id=L.id,C.object=L,C.geometry=I,C.material=N,C.groupOrder=G,C.renderOrder=L.renderOrder,C.z=W,C.group=P),i++,C}function y(L,I,N,G,W,P){const C=M(L,I,N,G,W,P);N.transmission>0?c.push(C):N.transparent===!0?d.push(C):s.push(C)}function T(L,I,N,G,W,P){const C=M(L,I,N,G,W,P);N.transmission>0?c.unshift(C):N.transparent===!0?d.unshift(C):s.unshift(C)}function A(L,I){s.length>1&&s.sort(L||x2),c.length>1&&c.sort(I||S0),d.length>1&&d.sort(I||S0)}function R(){for(let L=i,I=u.length;L<I;L++){const N=u[L];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:s,transmissive:c,transparent:d,init:m,push:y,unshift:T,finish:R,sort:A}}function v2(){let u=new WeakMap;function i(c,d){const m=u.get(c);let M;return m===void 0?(M=new b0,u.set(c,[M])):d>=m.length?(M=new b0,m.push(M)):M=m[d],M}function s(){u=new WeakMap}return{get:i,dispose:s}}function y2(){const u={};return{get:function(i){if(u[i.id]!==void 0)return u[i.id];let s;switch(i.type){case"DirectionalLight":s={direction:new _e,color:new Fi};break;case"SpotLight":s={position:new _e,direction:new _e,color:new Fi,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new _e,color:new Fi,distance:0,decay:0};break;case"HemisphereLight":s={direction:new _e,skyColor:new Fi,groundColor:new Fi};break;case"RectAreaLight":s={color:new Fi,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return u[i.id]=s,s}}}function M2(){const u={};return{get:function(i){if(u[i.id]!==void 0)return u[i.id];let s;switch(i.type){case"DirectionalLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oi};break;case"SpotLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oi};break;case"PointLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oi,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[i.id]=s,s}}}let S2=0;function b2(u,i){return(i.castShadow?2:0)-(u.castShadow?2:0)+(i.map?1:0)-(u.map?1:0)}function E2(u){const i=new y2,s=M2(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)c.probe.push(new _e);const d=new _e,m=new dn,M=new dn;function y(A,R){let L=0,I=0,N=0;for(let Me=0;Me<9;Me++)c.probe[Me].set(0,0,0);let G=0,W=0,P=0,C=0,$=0,X=0,ee=0,xe=0,se=0,ae=0,Ne=0;A.sort(b2);const K=R===!0?Math.PI:1;for(let Me=0,Ie=A.length;Me<Ie;Me++){const he=A[Me],qe=he.color,Xe=he.intensity,gt=he.distance,ht=he.shadow&&he.shadow.map?he.shadow.map.texture:null;if(he.isAmbientLight)L+=qe.r*Xe*K,I+=qe.g*Xe*K,N+=qe.b*Xe*K;else if(he.isLightProbe){for(let De=0;De<9;De++)c.probe[De].addScaledVector(he.sh.coefficients[De],Xe);Ne++}else if(he.isDirectionalLight){const De=i.get(he);if(De.color.copy(he.color).multiplyScalar(he.intensity*K),he.castShadow){const vt=he.shadow,ft=s.get(he);ft.shadowBias=vt.bias,ft.shadowNormalBias=vt.normalBias,ft.shadowRadius=vt.radius,ft.shadowMapSize=vt.mapSize,c.directionalShadow[G]=ft,c.directionalShadowMap[G]=ht,c.directionalShadowMatrix[G]=he.shadow.matrix,X++}c.directional[G]=De,G++}else if(he.isSpotLight){const De=i.get(he);De.position.setFromMatrixPosition(he.matrixWorld),De.color.copy(qe).multiplyScalar(Xe*K),De.distance=gt,De.coneCos=Math.cos(he.angle),De.penumbraCos=Math.cos(he.angle*(1-he.penumbra)),De.decay=he.decay,c.spot[P]=De;const vt=he.shadow;if(he.map&&(c.spotLightMap[se]=he.map,se++,vt.updateMatrices(he),he.castShadow&&ae++),c.spotLightMatrix[P]=vt.matrix,he.castShadow){const ft=s.get(he);ft.shadowBias=vt.bias,ft.shadowNormalBias=vt.normalBias,ft.shadowRadius=vt.radius,ft.shadowMapSize=vt.mapSize,c.spotShadow[P]=ft,c.spotShadowMap[P]=ht,xe++}P++}else if(he.isRectAreaLight){const De=i.get(he);De.color.copy(qe).multiplyScalar(Xe),De.halfWidth.set(he.width*.5,0,0),De.halfHeight.set(0,he.height*.5,0),c.rectArea[C]=De,C++}else if(he.isPointLight){const De=i.get(he);if(De.color.copy(he.color).multiplyScalar(he.intensity*K),De.distance=he.distance,De.decay=he.decay,he.castShadow){const vt=he.shadow,ft=s.get(he);ft.shadowBias=vt.bias,ft.shadowNormalBias=vt.normalBias,ft.shadowRadius=vt.radius,ft.shadowMapSize=vt.mapSize,ft.shadowCameraNear=vt.camera.near,ft.shadowCameraFar=vt.camera.far,c.pointShadow[W]=ft,c.pointShadowMap[W]=ht,c.pointShadowMatrix[W]=he.shadow.matrix,ee++}c.point[W]=De,W++}else if(he.isHemisphereLight){const De=i.get(he);De.skyColor.copy(he.color).multiplyScalar(Xe*K),De.groundColor.copy(he.groundColor).multiplyScalar(Xe*K),c.hemi[$]=De,$++}}C>0&&(u.has("OES_texture_float_linear")===!0?(c.rectAreaLTC1=It.LTC_FLOAT_1,c.rectAreaLTC2=It.LTC_FLOAT_2):(c.rectAreaLTC1=It.LTC_HALF_1,c.rectAreaLTC2=It.LTC_HALF_2)),c.ambient[0]=L,c.ambient[1]=I,c.ambient[2]=N;const H=c.hash;(H.directionalLength!==G||H.pointLength!==W||H.spotLength!==P||H.rectAreaLength!==C||H.hemiLength!==$||H.numDirectionalShadows!==X||H.numPointShadows!==ee||H.numSpotShadows!==xe||H.numSpotMaps!==se||H.numLightProbes!==Ne)&&(c.directional.length=G,c.spot.length=P,c.rectArea.length=C,c.point.length=W,c.hemi.length=$,c.directionalShadow.length=X,c.directionalShadowMap.length=X,c.pointShadow.length=ee,c.pointShadowMap.length=ee,c.spotShadow.length=xe,c.spotShadowMap.length=xe,c.directionalShadowMatrix.length=X,c.pointShadowMatrix.length=ee,c.spotLightMatrix.length=xe+se-ae,c.spotLightMap.length=se,c.numSpotLightShadowsWithMaps=ae,c.numLightProbes=Ne,H.directionalLength=G,H.pointLength=W,H.spotLength=P,H.rectAreaLength=C,H.hemiLength=$,H.numDirectionalShadows=X,H.numPointShadows=ee,H.numSpotShadows=xe,H.numSpotMaps=se,H.numLightProbes=Ne,c.version=S2++)}function T(A,R){let L=0,I=0,N=0,G=0,W=0;const P=R.matrixWorldInverse;for(let C=0,$=A.length;C<$;C++){const X=A[C];if(X.isDirectionalLight){const ee=c.directional[L];ee.direction.setFromMatrixPosition(X.matrixWorld),d.setFromMatrixPosition(X.target.matrixWorld),ee.direction.sub(d),ee.direction.transformDirection(P),L++}else if(X.isSpotLight){const ee=c.spot[N];ee.position.setFromMatrixPosition(X.matrixWorld),ee.position.applyMatrix4(P),ee.direction.setFromMatrixPosition(X.matrixWorld),d.setFromMatrixPosition(X.target.matrixWorld),ee.direction.sub(d),ee.direction.transformDirection(P),N++}else if(X.isRectAreaLight){const ee=c.rectArea[G];ee.position.setFromMatrixPosition(X.matrixWorld),ee.position.applyMatrix4(P),M.identity(),m.copy(X.matrixWorld),m.premultiply(P),M.extractRotation(m),ee.halfWidth.set(X.width*.5,0,0),ee.halfHeight.set(0,X.height*.5,0),ee.halfWidth.applyMatrix4(M),ee.halfHeight.applyMatrix4(M),G++}else if(X.isPointLight){const ee=c.point[I];ee.position.setFromMatrixPosition(X.matrixWorld),ee.position.applyMatrix4(P),I++}else if(X.isHemisphereLight){const ee=c.hemi[W];ee.direction.setFromMatrixPosition(X.matrixWorld),ee.direction.transformDirection(P),W++}}}return{setup:y,setupView:T,state:c}}function E0(u){const i=new E2(u),s=[],c=[];function d(R){A.camera=R,s.length=0,c.length=0}function m(R){s.push(R)}function M(R){c.push(R)}function y(R){i.setup(s,R)}function T(R){i.setupView(s,R)}const A={lightsArray:s,shadowsArray:c,camera:null,lights:i,transmissionRenderTarget:{}};return{init:d,state:A,setupLights:y,setupLightsView:T,pushLight:m,pushShadow:M}}function T2(u){let i=new WeakMap;function s(d,m=0){const M=i.get(d);let y;return M===void 0?(y=new E0(u),i.set(d,[y])):m>=M.length?(y=new E0(u),M.push(y)):y=M[m],y}function c(){i=new WeakMap}return{get:s,dispose:c}}class A2 extends mu{constructor(i){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ST,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(i)}copy(i){return super.copy(i),this.depthPacking=i.depthPacking,this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this}}class w2 extends mu{constructor(i){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(i)}copy(i){return super.copy(i),this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this}}const R2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,C2=`
uniform sampler2D shadow_pass;
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

}
`;function P2(u,i,s){let c=new kf;const d=new Oi,m=new Oi,M=new sn,y=new A2({depthPacking:bT}),T=new w2,A={},R=s.maxTextureSize,L={[gs]:rr,[rr]:gs,[br]:br},I=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oi},radius:{value:4}},vertexShader:R2,fragmentShader:C2}),N=I.clone();N.defines.HORIZONTAL_PASS=1;const G=new Ga;G.setAttribute("position",new qr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const W=new _r(G,I),P=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let C=this.type;this.render=function(se,ae,Ne){if(P.enabled===!1||P.autoUpdate===!1&&P.needsUpdate===!1||se.length===0)return;const K=u.getRenderTarget(),H=u.getActiveCubeFace(),Me=u.getActiveMipmapLevel(),Ie=u.state;Ie.setBlending(Xs),Ie.buffers.color.setClear(1,1,1,1),Ie.buffers.depth.setTest(!0),Ie.setScissorTest(!1);const he=C!==ps&&this.type===ps,qe=C===ps&&this.type!==ps;for(let Xe=0,gt=se.length;Xe<gt;Xe++){const ht=se[Xe],De=ht.shadow;if(De===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(De.autoUpdate===!1&&De.needsUpdate===!1)continue;d.copy(De.mapSize);const vt=De.getFrameExtents();if(d.multiply(vt),m.copy(De.mapSize),(d.x>R||d.y>R)&&(d.x>R&&(m.x=Math.floor(R/vt.x),d.x=m.x*vt.x,De.mapSize.x=m.x),d.y>R&&(m.y=Math.floor(R/vt.y),d.y=m.y*vt.y,De.mapSize.y=m.y)),De.map===null||he===!0||qe===!0){const Kt=this.type!==ps?{minFilter:Er,magFilter:Er}:{};De.map!==null&&De.map.dispose(),De.map=new Va(d.x,d.y,Kt),De.map.texture.name=ht.name+".shadowMap",De.camera.updateProjectionMatrix()}u.setRenderTarget(De.map),u.clear();const ft=De.getViewportCount();for(let Kt=0;Kt<ft;Kt++){const vi=De.getViewport(Kt);M.set(m.x*vi.x,m.y*vi.y,m.x*vi.z,m.y*vi.w),Ie.viewport(M),De.updateMatrices(ht,Kt),c=De.getFrustum(),ee(ae,Ne,De.camera,ht,this.type)}De.isPointLightShadow!==!0&&this.type===ps&&$(De,Ne),De.needsUpdate=!1}C=this.type,P.needsUpdate=!1,u.setRenderTarget(K,H,Me)};function $(se,ae){const Ne=i.update(W);I.defines.VSM_SAMPLES!==se.blurSamples&&(I.defines.VSM_SAMPLES=se.blurSamples,N.defines.VSM_SAMPLES=se.blurSamples,I.needsUpdate=!0,N.needsUpdate=!0),se.mapPass===null&&(se.mapPass=new Va(d.x,d.y)),I.uniforms.shadow_pass.value=se.map.texture,I.uniforms.resolution.value=se.mapSize,I.uniforms.radius.value=se.radius,u.setRenderTarget(se.mapPass),u.clear(),u.renderBufferDirect(ae,null,Ne,I,W,null),N.uniforms.shadow_pass.value=se.mapPass.texture,N.uniforms.resolution.value=se.mapSize,N.uniforms.radius.value=se.radius,u.setRenderTarget(se.map),u.clear(),u.renderBufferDirect(ae,null,Ne,N,W,null)}function X(se,ae,Ne,K){let H=null;const Me=Ne.isPointLight===!0?se.customDistanceMaterial:se.customDepthMaterial;if(Me!==void 0)H=Me;else if(H=Ne.isPointLight===!0?T:y,u.localClippingEnabled&&ae.clipShadows===!0&&Array.isArray(ae.clippingPlanes)&&ae.clippingPlanes.length!==0||ae.displacementMap&&ae.displacementScale!==0||ae.alphaMap&&ae.alphaTest>0||ae.map&&ae.alphaTest>0){const Ie=H.uuid,he=ae.uuid;let qe=A[Ie];qe===void 0&&(qe={},A[Ie]=qe);let Xe=qe[he];Xe===void 0&&(Xe=H.clone(),qe[he]=Xe,ae.addEventListener("dispose",xe)),H=Xe}if(H.visible=ae.visible,H.wireframe=ae.wireframe,K===ps?H.side=ae.shadowSide!==null?ae.shadowSide:ae.side:H.side=ae.shadowSide!==null?ae.shadowSide:L[ae.side],H.alphaMap=ae.alphaMap,H.alphaTest=ae.alphaTest,H.map=ae.map,H.clipShadows=ae.clipShadows,H.clippingPlanes=ae.clippingPlanes,H.clipIntersection=ae.clipIntersection,H.displacementMap=ae.displacementMap,H.displacementScale=ae.displacementScale,H.displacementBias=ae.displacementBias,H.wireframeLinewidth=ae.wireframeLinewidth,H.linewidth=ae.linewidth,Ne.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Ie=u.properties.get(H);Ie.light=Ne}return H}function ee(se,ae,Ne,K,H){if(se.visible===!1)return;if(se.layers.test(ae.layers)&&(se.isMesh||se.isLine||se.isPoints)&&(se.castShadow||se.receiveShadow&&H===ps)&&(!se.frustumCulled||c.intersectsObject(se))){se.modelViewMatrix.multiplyMatrices(Ne.matrixWorldInverse,se.matrixWorld);const he=i.update(se),qe=se.material;if(Array.isArray(qe)){const Xe=he.groups;for(let gt=0,ht=Xe.length;gt<ht;gt++){const De=Xe[gt],vt=qe[De.materialIndex];if(vt&&vt.visible){const ft=X(se,vt,K,H);se.onBeforeShadow(u,se,ae,Ne,he,ft,De),u.renderBufferDirect(Ne,null,he,ft,se,De),se.onAfterShadow(u,se,ae,Ne,he,ft,De)}}}else if(qe.visible){const Xe=X(se,qe,K,H);se.onBeforeShadow(u,se,ae,Ne,he,Xe,null),u.renderBufferDirect(Ne,null,he,Xe,se,null),se.onAfterShadow(u,se,ae,Ne,he,Xe,null)}}const Ie=se.children;for(let he=0,qe=Ie.length;he<qe;he++)ee(Ie[he],ae,Ne,K,H)}function xe(se){se.target.removeEventListener("dispose",xe);for(const Ne in A){const K=A[Ne],H=se.target.uuid;H in K&&(K[H].dispose(),delete K[H])}}}function L2(u){function i(){let le=!1;const Ge=new sn;let Oe=null;const Rt=new sn(0,0,0,0);return{setMask:function(At){Oe!==At&&!le&&(u.colorMask(At,At,At,At),Oe=At)},setLocked:function(At){le=At},setClear:function(At,Ui,Li,Qi,Mn){Mn===!0&&(At*=Qi,Ui*=Qi,Li*=Qi),Ge.set(At,Ui,Li,Qi),Rt.equals(Ge)===!1&&(u.clearColor(At,Ui,Li,Qi),Rt.copy(Ge))},reset:function(){le=!1,Oe=null,Rt.set(-1,0,0,0)}}}function s(){let le=!1,Ge=null,Oe=null,Rt=null;return{setTest:function(At){At?kt(u.DEPTH_TEST):oe(u.DEPTH_TEST)},setMask:function(At){Ge!==At&&!le&&(u.depthMask(At),Ge=At)},setFunc:function(At){if(Oe!==At){switch(At){case $1:u.depthFunc(u.NEVER);break;case K1:u.depthFunc(u.ALWAYS);break;case J1:u.depthFunc(u.LESS);break;case au:u.depthFunc(u.LEQUAL);break;case j1:u.depthFunc(u.EQUAL);break;case Q1:u.depthFunc(u.GEQUAL);break;case eT:u.depthFunc(u.GREATER);break;case tT:u.depthFunc(u.NOTEQUAL);break;default:u.depthFunc(u.LEQUAL)}Oe=At}},setLocked:function(At){le=At},setClear:function(At){Rt!==At&&(u.clearDepth(At),Rt=At)},reset:function(){le=!1,Ge=null,Oe=null,Rt=null}}}function c(){let le=!1,Ge=null,Oe=null,Rt=null,At=null,Ui=null,Li=null,Qi=null,Mn=null;return{setTest:function(Bi){le||(Bi?kt(u.STENCIL_TEST):oe(u.STENCIL_TEST))},setMask:function(Bi){Ge!==Bi&&!le&&(u.stencilMask(Bi),Ge=Bi)},setFunc:function(Bi,jn,an){(Oe!==Bi||Rt!==jn||At!==an)&&(u.stencilFunc(Bi,jn,an),Oe=Bi,Rt=jn,At=an)},setOp:function(Bi,jn,an){(Ui!==Bi||Li!==jn||Qi!==an)&&(u.stencilOp(Bi,jn,an),Ui=Bi,Li=jn,Qi=an)},setLocked:function(Bi){le=Bi},setClear:function(Bi){Mn!==Bi&&(u.clearStencil(Bi),Mn=Bi)},reset:function(){le=!1,Ge=null,Oe=null,Rt=null,At=null,Ui=null,Li=null,Qi=null,Mn=null}}}const d=new i,m=new s,M=new c,y=new WeakMap,T=new WeakMap;let A={},R={},L=new WeakMap,I=[],N=null,G=!1,W=null,P=null,C=null,$=null,X=null,ee=null,xe=null,se=new Fi(0,0,0),ae=0,Ne=!1,K=null,H=null,Me=null,Ie=null,he=null;const qe=u.getParameter(u.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Xe=!1,gt=0;const ht=u.getParameter(u.VERSION);ht.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),Xe=gt>=1):ht.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),Xe=gt>=2);let De=null,vt={};const ft=u.getParameter(u.SCISSOR_BOX),Kt=u.getParameter(u.VIEWPORT),vi=new sn().fromArray(ft),Hi=new sn().fromArray(Kt);function Fe(le,Ge,Oe,Rt){const At=new Uint8Array(4),Ui=u.createTexture();u.bindTexture(le,Ui),u.texParameteri(le,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(le,u.TEXTURE_MAG_FILTER,u.NEAREST);for(let Li=0;Li<Oe;Li++)le===u.TEXTURE_3D||le===u.TEXTURE_2D_ARRAY?u.texImage3D(Ge,0,u.RGBA,1,1,Rt,0,u.RGBA,u.UNSIGNED_BYTE,At):u.texImage2D(Ge+Li,0,u.RGBA,1,1,0,u.RGBA,u.UNSIGNED_BYTE,At);return Ui}const yt={};yt[u.TEXTURE_2D]=Fe(u.TEXTURE_2D,u.TEXTURE_2D,1),yt[u.TEXTURE_CUBE_MAP]=Fe(u.TEXTURE_CUBE_MAP,u.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[u.TEXTURE_2D_ARRAY]=Fe(u.TEXTURE_2D_ARRAY,u.TEXTURE_2D_ARRAY,1,1),yt[u.TEXTURE_3D]=Fe(u.TEXTURE_3D,u.TEXTURE_3D,1,1),d.setClear(0,0,0,1),m.setClear(1),M.setClear(0),kt(u.DEPTH_TEST),m.setFunc(au),at(!1),Et(s_),kt(u.CULL_FACE),zt(Xs);function kt(le){A[le]!==!0&&(u.enable(le),A[le]=!0)}function oe(le){A[le]!==!1&&(u.disable(le),A[le]=!1)}function be(le,Ge){return R[le]!==Ge?(u.bindFramebuffer(le,Ge),R[le]=Ge,le===u.DRAW_FRAMEBUFFER&&(R[u.FRAMEBUFFER]=Ge),le===u.FRAMEBUFFER&&(R[u.DRAW_FRAMEBUFFER]=Ge),!0):!1}function we(le,Ge){let Oe=I,Rt=!1;if(le){Oe=L.get(Ge),Oe===void 0&&(Oe=[],L.set(Ge,Oe));const At=le.textures;if(Oe.length!==At.length||Oe[0]!==u.COLOR_ATTACHMENT0){for(let Ui=0,Li=At.length;Ui<Li;Ui++)Oe[Ui]=u.COLOR_ATTACHMENT0+Ui;Oe.length=At.length,Rt=!0}}else Oe[0]!==u.BACK&&(Oe[0]=u.BACK,Rt=!0);Rt&&u.drawBuffers(Oe)}function te(le){return N!==le?(u.useProgram(le),N=le,!0):!1}const tt={[Fa]:u.FUNC_ADD,[I1]:u.FUNC_SUBTRACT,[D1]:u.FUNC_REVERSE_SUBTRACT};tt[U1]=u.MIN,tt[N1]=u.MAX;const Je={[F1]:u.ZERO,[O1]:u.ONE,[B1]:u.SRC_COLOR,[Df]:u.SRC_ALPHA,[W1]:u.SRC_ALPHA_SATURATE,[H1]:u.DST_COLOR,[V1]:u.DST_ALPHA,[z1]:u.ONE_MINUS_SRC_COLOR,[Uf]:u.ONE_MINUS_SRC_ALPHA,[k1]:u.ONE_MINUS_DST_COLOR,[G1]:u.ONE_MINUS_DST_ALPHA,[X1]:u.CONSTANT_COLOR,[q1]:u.ONE_MINUS_CONSTANT_COLOR,[Y1]:u.CONSTANT_ALPHA,[Z1]:u.ONE_MINUS_CONSTANT_ALPHA};function zt(le,Ge,Oe,Rt,At,Ui,Li,Qi,Mn,Bi){if(le===Xs){G===!0&&(oe(u.BLEND),G=!1);return}if(G===!1&&(kt(u.BLEND),G=!0),le!==L1){if(le!==W||Bi!==Ne){if((P!==Fa||X!==Fa)&&(u.blendEquation(u.FUNC_ADD),P=Fa,X=Fa),Bi)switch(le){case Xo:u.blendFuncSeparate(u.ONE,u.ONE_MINUS_SRC_ALPHA,u.ONE,u.ONE_MINUS_SRC_ALPHA);break;case a_:u.blendFunc(u.ONE,u.ONE);break;case o_:u.blendFuncSeparate(u.ZERO,u.ONE_MINUS_SRC_COLOR,u.ZERO,u.ONE);break;case c_:u.blendFuncSeparate(u.ZERO,u.SRC_COLOR,u.ZERO,u.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",le);break}else switch(le){case Xo:u.blendFuncSeparate(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA,u.ONE,u.ONE_MINUS_SRC_ALPHA);break;case a_:u.blendFunc(u.SRC_ALPHA,u.ONE);break;case o_:u.blendFuncSeparate(u.ZERO,u.ONE_MINUS_SRC_COLOR,u.ZERO,u.ONE);break;case c_:u.blendFunc(u.ZERO,u.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",le);break}C=null,$=null,ee=null,xe=null,se.set(0,0,0),ae=0,W=le,Ne=Bi}return}At=At||Ge,Ui=Ui||Oe,Li=Li||Rt,(Ge!==P||At!==X)&&(u.blendEquationSeparate(tt[Ge],tt[At]),P=Ge,X=At),(Oe!==C||Rt!==$||Ui!==ee||Li!==xe)&&(u.blendFuncSeparate(Je[Oe],Je[Rt],Je[Ui],Je[Li]),C=Oe,$=Rt,ee=Ui,xe=Li),(Qi.equals(se)===!1||Mn!==ae)&&(u.blendColor(Qi.r,Qi.g,Qi.b,Mn),se.copy(Qi),ae=Mn),W=le,Ne=!1}function _t(le,Ge){le.side===br?oe(u.CULL_FACE):kt(u.CULL_FACE);let Oe=le.side===rr;Ge&&(Oe=!Oe),at(Oe),le.blending===Xo&&le.transparent===!1?zt(Xs):zt(le.blending,le.blendEquation,le.blendSrc,le.blendDst,le.blendEquationAlpha,le.blendSrcAlpha,le.blendDstAlpha,le.blendColor,le.blendAlpha,le.premultipliedAlpha),m.setFunc(le.depthFunc),m.setTest(le.depthTest),m.setMask(le.depthWrite),d.setMask(le.colorWrite);const Rt=le.stencilWrite;M.setTest(Rt),Rt&&(M.setMask(le.stencilWriteMask),M.setFunc(le.stencilFunc,le.stencilRef,le.stencilFuncMask),M.setOp(le.stencilFail,le.stencilZFail,le.stencilZPass)),jt(le.polygonOffset,le.polygonOffsetFactor,le.polygonOffsetUnits),le.alphaToCoverage===!0?kt(u.SAMPLE_ALPHA_TO_COVERAGE):oe(u.SAMPLE_ALPHA_TO_COVERAGE)}function at(le){K!==le&&(le?u.frontFace(u.CW):u.frontFace(u.CCW),K=le)}function Et(le){le!==R1?(kt(u.CULL_FACE),le!==H&&(le===s_?u.cullFace(u.BACK):le===C1?u.cullFace(u.FRONT):u.cullFace(u.FRONT_AND_BACK))):oe(u.CULL_FACE),H=le}function Ct(le){le!==Me&&(Xe&&u.lineWidth(le),Me=le)}function jt(le,Ge,Oe){le?(kt(u.POLYGON_OFFSET_FILL),(Ie!==Ge||he!==Oe)&&(u.polygonOffset(Ge,Oe),Ie=Ge,he=Oe)):oe(u.POLYGON_OFFSET_FILL)}function Q(le){le?kt(u.SCISSOR_TEST):oe(u.SCISSOR_TEST)}function z(le){le===void 0&&(le=u.TEXTURE0+qe-1),De!==le&&(u.activeTexture(le),De=le)}function pe(le,Ge,Oe){Oe===void 0&&(De===null?Oe=u.TEXTURE0+qe-1:Oe=De);let Rt=vt[Oe];Rt===void 0&&(Rt={type:void 0,texture:void 0},vt[Oe]=Rt),(Rt.type!==le||Rt.texture!==Ge)&&(De!==Oe&&(u.activeTexture(Oe),De=Oe),u.bindTexture(le,Ge||yt[le]),Rt.type=le,Rt.texture=Ge)}function Ae(){const le=vt[De];le!==void 0&&le.type!==void 0&&(u.bindTexture(le.type,null),le.type=void 0,le.texture=void 0)}function Pe(){try{u.compressedTexImage2D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function Ve(){try{u.compressedTexImage3D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function ot(){try{u.texSubImage2D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function st(){try{u.texSubImage3D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function it(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function pt(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function Ye(){try{u.texStorage2D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function ze(){try{u.texStorage3D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function Ut(){try{u.texImage2D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function mt(){try{u.texImage3D.apply(u,arguments)}catch(le){console.error("THREE.WebGLState:",le)}}function ut(le){vi.equals(le)===!1&&(u.scissor(le.x,le.y,le.z,le.w),vi.copy(le))}function Vt(le){Hi.equals(le)===!1&&(u.viewport(le.x,le.y,le.z,le.w),Hi.copy(le))}function ai(le,Ge){let Oe=T.get(Ge);Oe===void 0&&(Oe=new WeakMap,T.set(Ge,Oe));let Rt=Oe.get(le);Rt===void 0&&(Rt=u.getUniformBlockIndex(Ge,le.name),Oe.set(le,Rt))}function Ji(le,Ge){const Rt=T.get(Ge).get(le);y.get(Ge)!==Rt&&(u.uniformBlockBinding(Ge,Rt,le.__bindingPointIndex),y.set(Ge,Rt))}function si(){u.disable(u.BLEND),u.disable(u.CULL_FACE),u.disable(u.DEPTH_TEST),u.disable(u.POLYGON_OFFSET_FILL),u.disable(u.SCISSOR_TEST),u.disable(u.STENCIL_TEST),u.disable(u.SAMPLE_ALPHA_TO_COVERAGE),u.blendEquation(u.FUNC_ADD),u.blendFunc(u.ONE,u.ZERO),u.blendFuncSeparate(u.ONE,u.ZERO,u.ONE,u.ZERO),u.blendColor(0,0,0,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(u.LESS),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(u.ALWAYS,0,4294967295),u.stencilOp(u.KEEP,u.KEEP,u.KEEP),u.clearStencil(0),u.cullFace(u.BACK),u.frontFace(u.CCW),u.polygonOffset(0,0),u.activeTexture(u.TEXTURE0),u.bindFramebuffer(u.FRAMEBUFFER,null),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.bindFramebuffer(u.READ_FRAMEBUFFER,null),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),A={},De=null,vt={},R={},L=new WeakMap,I=[],N=null,G=!1,W=null,P=null,C=null,$=null,X=null,ee=null,xe=null,se=new Fi(0,0,0),ae=0,Ne=!1,K=null,H=null,Me=null,Ie=null,he=null,vi.set(0,0,u.canvas.width,u.canvas.height),Hi.set(0,0,u.canvas.width,u.canvas.height),d.reset(),m.reset(),M.reset()}return{buffers:{color:d,depth:m,stencil:M},enable:kt,disable:oe,bindFramebuffer:be,drawBuffers:we,useProgram:te,setBlending:zt,setMaterial:_t,setFlipSided:at,setCullFace:Et,setLineWidth:Ct,setPolygonOffset:jt,setScissorTest:Q,activeTexture:z,bindTexture:pe,unbindTexture:Ae,compressedTexImage2D:Pe,compressedTexImage3D:Ve,texImage2D:Ut,texImage3D:mt,updateUBOMapping:ai,uniformBlockBinding:Ji,texStorage2D:Ye,texStorage3D:ze,texSubImage2D:ot,texSubImage3D:st,compressedTexSubImage2D:it,compressedTexSubImage3D:pt,scissor:ut,viewport:Vt,reset:si}}function I2(u,i,s,c,d,m,M){const y=i.has("WEBGL_multisampled_render_to_texture")?i.get("WEBGL_multisampled_render_to_texture"):null,T=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new Oi,R=new WeakMap;let L;const I=new WeakMap;let N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function G(Q,z){return N?new OffscreenCanvas(Q,z):tl("canvas")}function W(Q,z,pe){let Ae=1;const Pe=jt(Q);if((Pe.width>pe||Pe.height>pe)&&(Ae=pe/Math.max(Pe.width,Pe.height)),Ae<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const Ve=Math.floor(Ae*Pe.width),ot=Math.floor(Ae*Pe.height);L===void 0&&(L=G(Ve,ot));const st=z?G(Ve,ot):L;return st.width=Ve,st.height=ot,st.getContext("2d").drawImage(Q,0,0,Ve,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pe.width+"x"+Pe.height+") to ("+Ve+"x"+ot+")."),st}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pe.width+"x"+Pe.height+")."),Q;return Q}function P(Q){return Q.generateMipmaps&&Q.minFilter!==Er&&Q.minFilter!==gr}function C(Q){u.generateMipmap(Q)}function $(Q,z,pe,Ae,Pe=!1){if(Q!==null){if(u[Q]!==void 0)return u[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let Ve=z;if(z===u.RED&&(pe===u.FLOAT&&(Ve=u.R32F),pe===u.HALF_FLOAT&&(Ve=u.R16F),pe===u.UNSIGNED_BYTE&&(Ve=u.R8)),z===u.RED_INTEGER&&(pe===u.UNSIGNED_BYTE&&(Ve=u.R8UI),pe===u.UNSIGNED_SHORT&&(Ve=u.R16UI),pe===u.UNSIGNED_INT&&(Ve=u.R32UI),pe===u.BYTE&&(Ve=u.R8I),pe===u.SHORT&&(Ve=u.R16I),pe===u.INT&&(Ve=u.R32I)),z===u.RG&&(pe===u.FLOAT&&(Ve=u.RG32F),pe===u.HALF_FLOAT&&(Ve=u.RG16F),pe===u.UNSIGNED_BYTE&&(Ve=u.RG8)),z===u.RG_INTEGER&&(pe===u.UNSIGNED_BYTE&&(Ve=u.RG8UI),pe===u.UNSIGNED_SHORT&&(Ve=u.RG16UI),pe===u.UNSIGNED_INT&&(Ve=u.RG32UI),pe===u.BYTE&&(Ve=u.RG8I),pe===u.SHORT&&(Ve=u.RG16I),pe===u.INT&&(Ve=u.RG32I)),z===u.RGB&&pe===u.UNSIGNED_INT_5_9_9_9_REV&&(Ve=u.RGB9_E5),z===u.RGBA){const ot=Pe?ou:Ki.getTransfer(Ae);pe===u.FLOAT&&(Ve=u.RGBA32F),pe===u.HALF_FLOAT&&(Ve=u.RGBA16F),pe===u.UNSIGNED_BYTE&&(Ve=ot===tn?u.SRGB8_ALPHA8:u.RGBA8),pe===u.UNSIGNED_SHORT_4_4_4_4&&(Ve=u.RGBA4),pe===u.UNSIGNED_SHORT_5_5_5_1&&(Ve=u.RGB5_A1)}return(Ve===u.R16F||Ve===u.R32F||Ve===u.RG16F||Ve===u.RG32F||Ve===u.RGBA16F||Ve===u.RGBA32F)&&i.get("EXT_color_buffer_float"),Ve}function X(Q,z){return P(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==Er&&Q.minFilter!==gr?Math.log2(Math.max(z.width,z.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?z.mipmaps.length:1}function ee(Q){const z=Q.target;z.removeEventListener("dispose",ee),se(z),z.isVideoTexture&&R.delete(z)}function xe(Q){const z=Q.target;z.removeEventListener("dispose",xe),Ne(z)}function se(Q){const z=c.get(Q);if(z.__webglInit===void 0)return;const pe=Q.source,Ae=I.get(pe);if(Ae){const Pe=Ae[z.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&ae(Q),Object.keys(Ae).length===0&&I.delete(pe)}c.remove(Q)}function ae(Q){const z=c.get(Q);u.deleteTexture(z.__webglTexture);const pe=Q.source,Ae=I.get(pe);delete Ae[z.__cacheKey],M.memory.textures--}function Ne(Q){const z=c.get(Q);if(Q.depthTexture&&Q.depthTexture.dispose(),Q.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(z.__webglFramebuffer[Ae]))for(let Pe=0;Pe<z.__webglFramebuffer[Ae].length;Pe++)u.deleteFramebuffer(z.__webglFramebuffer[Ae][Pe]);else u.deleteFramebuffer(z.__webglFramebuffer[Ae]);z.__webglDepthbuffer&&u.deleteRenderbuffer(z.__webglDepthbuffer[Ae])}else{if(Array.isArray(z.__webglFramebuffer))for(let Ae=0;Ae<z.__webglFramebuffer.length;Ae++)u.deleteFramebuffer(z.__webglFramebuffer[Ae]);else u.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&u.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&u.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Ae=0;Ae<z.__webglColorRenderbuffer.length;Ae++)z.__webglColorRenderbuffer[Ae]&&u.deleteRenderbuffer(z.__webglColorRenderbuffer[Ae]);z.__webglDepthRenderbuffer&&u.deleteRenderbuffer(z.__webglDepthRenderbuffer)}const pe=Q.textures;for(let Ae=0,Pe=pe.length;Ae<Pe;Ae++){const Ve=c.get(pe[Ae]);Ve.__webglTexture&&(u.deleteTexture(Ve.__webglTexture),M.memory.textures--),c.remove(pe[Ae])}c.remove(Q)}let K=0;function H(){K=0}function Me(){const Q=K;return Q>=d.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+d.maxTextures),K+=1,Q}function Ie(Q){const z=[];return z.push(Q.wrapS),z.push(Q.wrapT),z.push(Q.wrapR||0),z.push(Q.magFilter),z.push(Q.minFilter),z.push(Q.anisotropy),z.push(Q.internalFormat),z.push(Q.format),z.push(Q.type),z.push(Q.generateMipmaps),z.push(Q.premultiplyAlpha),z.push(Q.flipY),z.push(Q.unpackAlignment),z.push(Q.colorSpace),z.join()}function he(Q,z){const pe=c.get(Q);if(Q.isVideoTexture&&Et(Q),Q.isRenderTargetTexture===!1&&Q.version>0&&pe.__version!==Q.version){const Ae=Q.image;if(Ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vi(pe,Q,z);return}}s.bindTexture(u.TEXTURE_2D,pe.__webglTexture,u.TEXTURE0+z)}function qe(Q,z){const pe=c.get(Q);if(Q.version>0&&pe.__version!==Q.version){vi(pe,Q,z);return}s.bindTexture(u.TEXTURE_2D_ARRAY,pe.__webglTexture,u.TEXTURE0+z)}function Xe(Q,z){const pe=c.get(Q);if(Q.version>0&&pe.__version!==Q.version){vi(pe,Q,z);return}s.bindTexture(u.TEXTURE_3D,pe.__webglTexture,u.TEXTURE0+z)}function gt(Q,z){const pe=c.get(Q);if(Q.version>0&&pe.__version!==Q.version){Hi(pe,Q,z);return}s.bindTexture(u.TEXTURE_CUBE_MAP,pe.__webglTexture,u.TEXTURE0+z)}const ht={[Of]:u.REPEAT,[Ba]:u.CLAMP_TO_EDGE,[Bf]:u.MIRRORED_REPEAT},De={[Er]:u.NEAREST,[uT]:u.NEAREST_MIPMAP_NEAREST,[Fh]:u.NEAREST_MIPMAP_LINEAR,[gr]:u.LINEAR,[jd]:u.LINEAR_MIPMAP_NEAREST,[za]:u.LINEAR_MIPMAP_LINEAR},vt={[AT]:u.NEVER,[IT]:u.ALWAYS,[wT]:u.LESS,[X0]:u.LEQUAL,[RT]:u.EQUAL,[LT]:u.GEQUAL,[CT]:u.GREATER,[PT]:u.NOTEQUAL};function ft(Q,z){if(z.type===ks&&i.has("OES_texture_float_linear")===!1&&(z.magFilter===gr||z.magFilter===jd||z.magFilter===Fh||z.magFilter===za||z.minFilter===gr||z.minFilter===jd||z.minFilter===Fh||z.minFilter===za)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),u.texParameteri(Q,u.TEXTURE_WRAP_S,ht[z.wrapS]),u.texParameteri(Q,u.TEXTURE_WRAP_T,ht[z.wrapT]),(Q===u.TEXTURE_3D||Q===u.TEXTURE_2D_ARRAY)&&u.texParameteri(Q,u.TEXTURE_WRAP_R,ht[z.wrapR]),u.texParameteri(Q,u.TEXTURE_MAG_FILTER,De[z.magFilter]),u.texParameteri(Q,u.TEXTURE_MIN_FILTER,De[z.minFilter]),z.compareFunction&&(u.texParameteri(Q,u.TEXTURE_COMPARE_MODE,u.COMPARE_REF_TO_TEXTURE),u.texParameteri(Q,u.TEXTURE_COMPARE_FUNC,vt[z.compareFunction])),i.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===Er||z.minFilter!==Fh&&z.minFilter!==za||z.type===ks&&i.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||c.get(z).__currentAnisotropy){const pe=i.get("EXT_texture_filter_anisotropic");u.texParameterf(Q,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,d.getMaxAnisotropy())),c.get(z).__currentAnisotropy=z.anisotropy}}}function Kt(Q,z){let pe=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,z.addEventListener("dispose",ee));const Ae=z.source;let Pe=I.get(Ae);Pe===void 0&&(Pe={},I.set(Ae,Pe));const Ve=Ie(z);if(Ve!==Q.__cacheKey){Pe[Ve]===void 0&&(Pe[Ve]={texture:u.createTexture(),usedTimes:0},M.memory.textures++,pe=!0),Pe[Ve].usedTimes++;const ot=Pe[Q.__cacheKey];ot!==void 0&&(Pe[Q.__cacheKey].usedTimes--,ot.usedTimes===0&&ae(z)),Q.__cacheKey=Ve,Q.__webglTexture=Pe[Ve].texture}return pe}function vi(Q,z,pe){let Ae=u.TEXTURE_2D;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(Ae=u.TEXTURE_2D_ARRAY),z.isData3DTexture&&(Ae=u.TEXTURE_3D);const Pe=Kt(Q,z),Ve=z.source;s.bindTexture(Ae,Q.__webglTexture,u.TEXTURE0+pe);const ot=c.get(Ve);if(Ve.version!==ot.__version||Pe===!0){s.activeTexture(u.TEXTURE0+pe);const st=Ki.getPrimaries(Ki.workingColorSpace),it=z.colorSpace===Hs?null:Ki.getPrimaries(z.colorSpace),pt=z.colorSpace===Hs||st===it?u.NONE:u.BROWSER_DEFAULT_WEBGL;u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,z.flipY),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),u.pixelStorei(u.UNPACK_ALIGNMENT,z.unpackAlignment),u.pixelStorei(u.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ye=W(z.image,!1,d.maxTextureSize);Ye=Ct(z,Ye);const ze=m.convert(z.format,z.colorSpace),Ut=m.convert(z.type);let mt=$(z.internalFormat,ze,Ut,z.colorSpace,z.isVideoTexture);ft(Ae,z);let ut;const Vt=z.mipmaps,ai=z.isVideoTexture!==!0,Ji=ot.__version===void 0||Pe===!0,si=Ve.dataReady,le=X(z,Ye);if(z.isDepthTexture)mt=u.DEPTH_COMPONENT16,z.type===ks?mt=u.DEPTH_COMPONENT32F:z.type===Ko?mt=u.DEPTH_COMPONENT24:z.type===nl&&(mt=u.DEPTH24_STENCIL8),Ji&&(ai?s.texStorage2D(u.TEXTURE_2D,1,mt,Ye.width,Ye.height):s.texImage2D(u.TEXTURE_2D,0,mt,Ye.width,Ye.height,0,ze,Ut,null));else if(z.isDataTexture)if(Vt.length>0){ai&&Ji&&s.texStorage2D(u.TEXTURE_2D,le,mt,Vt[0].width,Vt[0].height);for(let Ge=0,Oe=Vt.length;Ge<Oe;Ge++)ut=Vt[Ge],ai?si&&s.texSubImage2D(u.TEXTURE_2D,Ge,0,0,ut.width,ut.height,ze,Ut,ut.data):s.texImage2D(u.TEXTURE_2D,Ge,mt,ut.width,ut.height,0,ze,Ut,ut.data);z.generateMipmaps=!1}else ai?(Ji&&s.texStorage2D(u.TEXTURE_2D,le,mt,Ye.width,Ye.height),si&&s.texSubImage2D(u.TEXTURE_2D,0,0,0,Ye.width,Ye.height,ze,Ut,Ye.data)):s.texImage2D(u.TEXTURE_2D,0,mt,Ye.width,Ye.height,0,ze,Ut,Ye.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){ai&&Ji&&s.texStorage3D(u.TEXTURE_2D_ARRAY,le,mt,Vt[0].width,Vt[0].height,Ye.depth);for(let Ge=0,Oe=Vt.length;Ge<Oe;Ge++)ut=Vt[Ge],z.format!==Xr?ze!==null?ai?si&&s.compressedTexSubImage3D(u.TEXTURE_2D_ARRAY,Ge,0,0,0,ut.width,ut.height,Ye.depth,ze,ut.data,0,0):s.compressedTexImage3D(u.TEXTURE_2D_ARRAY,Ge,mt,ut.width,ut.height,Ye.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ai?si&&s.texSubImage3D(u.TEXTURE_2D_ARRAY,Ge,0,0,0,ut.width,ut.height,Ye.depth,ze,Ut,ut.data):s.texImage3D(u.TEXTURE_2D_ARRAY,Ge,mt,ut.width,ut.height,Ye.depth,0,ze,Ut,ut.data)}else{ai&&Ji&&s.texStorage2D(u.TEXTURE_2D,le,mt,Vt[0].width,Vt[0].height);for(let Ge=0,Oe=Vt.length;Ge<Oe;Ge++)ut=Vt[Ge],z.format!==Xr?ze!==null?ai?si&&s.compressedTexSubImage2D(u.TEXTURE_2D,Ge,0,0,ut.width,ut.height,ze,ut.data):s.compressedTexImage2D(u.TEXTURE_2D,Ge,mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ai?si&&s.texSubImage2D(u.TEXTURE_2D,Ge,0,0,ut.width,ut.height,ze,Ut,ut.data):s.texImage2D(u.TEXTURE_2D,Ge,mt,ut.width,ut.height,0,ze,Ut,ut.data)}else if(z.isDataArrayTexture)ai?(Ji&&s.texStorage3D(u.TEXTURE_2D_ARRAY,le,mt,Ye.width,Ye.height,Ye.depth),si&&s.texSubImage3D(u.TEXTURE_2D_ARRAY,0,0,0,0,Ye.width,Ye.height,Ye.depth,ze,Ut,Ye.data)):s.texImage3D(u.TEXTURE_2D_ARRAY,0,mt,Ye.width,Ye.height,Ye.depth,0,ze,Ut,Ye.data);else if(z.isData3DTexture)ai?(Ji&&s.texStorage3D(u.TEXTURE_3D,le,mt,Ye.width,Ye.height,Ye.depth),si&&s.texSubImage3D(u.TEXTURE_3D,0,0,0,0,Ye.width,Ye.height,Ye.depth,ze,Ut,Ye.data)):s.texImage3D(u.TEXTURE_3D,0,mt,Ye.width,Ye.height,Ye.depth,0,ze,Ut,Ye.data);else if(z.isFramebufferTexture){if(Ji)if(ai)s.texStorage2D(u.TEXTURE_2D,le,mt,Ye.width,Ye.height);else{let Ge=Ye.width,Oe=Ye.height;for(let Rt=0;Rt<le;Rt++)s.texImage2D(u.TEXTURE_2D,Rt,mt,Ge,Oe,0,ze,Ut,null),Ge>>=1,Oe>>=1}}else if(Vt.length>0){if(ai&&Ji){const Ge=jt(Vt[0]);s.texStorage2D(u.TEXTURE_2D,le,mt,Ge.width,Ge.height)}for(let Ge=0,Oe=Vt.length;Ge<Oe;Ge++)ut=Vt[Ge],ai?si&&s.texSubImage2D(u.TEXTURE_2D,Ge,0,0,ze,Ut,ut):s.texImage2D(u.TEXTURE_2D,Ge,mt,ze,Ut,ut);z.generateMipmaps=!1}else if(ai){if(Ji){const Ge=jt(Ye);s.texStorage2D(u.TEXTURE_2D,le,mt,Ge.width,Ge.height)}si&&s.texSubImage2D(u.TEXTURE_2D,0,0,0,ze,Ut,Ye)}else s.texImage2D(u.TEXTURE_2D,0,mt,ze,Ut,Ye);P(z)&&C(Ae),ot.__version=Ve.version,z.onUpdate&&z.onUpdate(z)}Q.__version=z.version}function Hi(Q,z,pe){if(z.image.length!==6)return;const Ae=Kt(Q,z),Pe=z.source;s.bindTexture(u.TEXTURE_CUBE_MAP,Q.__webglTexture,u.TEXTURE0+pe);const Ve=c.get(Pe);if(Pe.version!==Ve.__version||Ae===!0){s.activeTexture(u.TEXTURE0+pe);const ot=Ki.getPrimaries(Ki.workingColorSpace),st=z.colorSpace===Hs?null:Ki.getPrimaries(z.colorSpace),it=z.colorSpace===Hs||ot===st?u.NONE:u.BROWSER_DEFAULT_WEBGL;u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,z.flipY),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),u.pixelStorei(u.UNPACK_ALIGNMENT,z.unpackAlignment),u.pixelStorei(u.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const pt=z.isCompressedTexture||z.image[0].isCompressedTexture,Ye=z.image[0]&&z.image[0].isDataTexture,ze=[];for(let Oe=0;Oe<6;Oe++)!pt&&!Ye?ze[Oe]=W(z.image[Oe],!0,d.maxCubemapSize):ze[Oe]=Ye?z.image[Oe].image:z.image[Oe],ze[Oe]=Ct(z,ze[Oe]);const Ut=ze[0],mt=m.convert(z.format,z.colorSpace),ut=m.convert(z.type),Vt=$(z.internalFormat,mt,ut,z.colorSpace),ai=z.isVideoTexture!==!0,Ji=Ve.__version===void 0||Ae===!0,si=Pe.dataReady;let le=X(z,Ut);ft(u.TEXTURE_CUBE_MAP,z);let Ge;if(pt){ai&&Ji&&s.texStorage2D(u.TEXTURE_CUBE_MAP,le,Vt,Ut.width,Ut.height);for(let Oe=0;Oe<6;Oe++){Ge=ze[Oe].mipmaps;for(let Rt=0;Rt<Ge.length;Rt++){const At=Ge[Rt];z.format!==Xr?mt!==null?ai?si&&s.compressedTexSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,0,0,At.width,At.height,mt,At.data):s.compressedTexImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ai?si&&s.texSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,0,0,At.width,At.height,mt,ut,At.data):s.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,Vt,At.width,At.height,0,mt,ut,At.data)}}}else{if(Ge=z.mipmaps,ai&&Ji){Ge.length>0&&le++;const Oe=jt(ze[0]);s.texStorage2D(u.TEXTURE_CUBE_MAP,le,Vt,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(Ye){ai?si&&s.texSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ze[Oe].width,ze[Oe].height,mt,ut,ze[Oe].data):s.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Vt,ze[Oe].width,ze[Oe].height,0,mt,ut,ze[Oe].data);for(let Rt=0;Rt<Ge.length;Rt++){const Ui=Ge[Rt].image[Oe].image;ai?si&&s.texSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,0,0,Ui.width,Ui.height,mt,ut,Ui.data):s.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,Vt,Ui.width,Ui.height,0,mt,ut,Ui.data)}}else{ai?si&&s.texSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,mt,ut,ze[Oe]):s.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Vt,mt,ut,ze[Oe]);for(let Rt=0;Rt<Ge.length;Rt++){const At=Ge[Rt];ai?si&&s.texSubImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,0,0,mt,ut,At.image[Oe]):s.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,Vt,mt,ut,At.image[Oe])}}}P(z)&&C(u.TEXTURE_CUBE_MAP),Ve.__version=Pe.version,z.onUpdate&&z.onUpdate(z)}Q.__version=z.version}function Fe(Q,z,pe,Ae,Pe,Ve){const ot=m.convert(pe.format,pe.colorSpace),st=m.convert(pe.type),it=$(pe.internalFormat,ot,st,pe.colorSpace);if(!c.get(z).__hasExternalTextures){const Ye=Math.max(1,z.width>>Ve),ze=Math.max(1,z.height>>Ve);Pe===u.TEXTURE_3D||Pe===u.TEXTURE_2D_ARRAY?s.texImage3D(Pe,Ve,it,Ye,ze,z.depth,0,ot,st,null):s.texImage2D(Pe,Ve,it,Ye,ze,0,ot,st,null)}s.bindFramebuffer(u.FRAMEBUFFER,Q),at(z)?y.framebufferTexture2DMultisampleEXT(u.FRAMEBUFFER,Ae,Pe,c.get(pe).__webglTexture,0,_t(z)):(Pe===u.TEXTURE_2D||Pe>=u.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=u.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&u.framebufferTexture2D(u.FRAMEBUFFER,Ae,Pe,c.get(pe).__webglTexture,Ve),s.bindFramebuffer(u.FRAMEBUFFER,null)}function yt(Q,z,pe){if(u.bindRenderbuffer(u.RENDERBUFFER,Q),z.depthBuffer&&!z.stencilBuffer){let Ae=u.DEPTH_COMPONENT24;if(pe||at(z)){const Pe=z.depthTexture;Pe&&Pe.isDepthTexture&&(Pe.type===ks?Ae=u.DEPTH_COMPONENT32F:Pe.type===Ko&&(Ae=u.DEPTH_COMPONENT24));const Ve=_t(z);at(z)?y.renderbufferStorageMultisampleEXT(u.RENDERBUFFER,Ve,Ae,z.width,z.height):u.renderbufferStorageMultisample(u.RENDERBUFFER,Ve,Ae,z.width,z.height)}else u.renderbufferStorage(u.RENDERBUFFER,Ae,z.width,z.height);u.framebufferRenderbuffer(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.RENDERBUFFER,Q)}else if(z.depthBuffer&&z.stencilBuffer){const Ae=_t(z);pe&&at(z)===!1?u.renderbufferStorageMultisample(u.RENDERBUFFER,Ae,u.DEPTH24_STENCIL8,z.width,z.height):at(z)?y.renderbufferStorageMultisampleEXT(u.RENDERBUFFER,Ae,u.DEPTH24_STENCIL8,z.width,z.height):u.renderbufferStorage(u.RENDERBUFFER,u.DEPTH_STENCIL,z.width,z.height),u.framebufferRenderbuffer(u.FRAMEBUFFER,u.DEPTH_STENCIL_ATTACHMENT,u.RENDERBUFFER,Q)}else{const Ae=z.textures;for(let Pe=0;Pe<Ae.length;Pe++){const Ve=Ae[Pe],ot=m.convert(Ve.format,Ve.colorSpace),st=m.convert(Ve.type),it=$(Ve.internalFormat,ot,st,Ve.colorSpace),pt=_t(z);pe&&at(z)===!1?u.renderbufferStorageMultisample(u.RENDERBUFFER,pt,it,z.width,z.height):at(z)?y.renderbufferStorageMultisampleEXT(u.RENDERBUFFER,pt,it,z.width,z.height):u.renderbufferStorage(u.RENDERBUFFER,it,z.width,z.height)}}u.bindRenderbuffer(u.RENDERBUFFER,null)}function kt(Q,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(s.bindFramebuffer(u.FRAMEBUFFER,Q),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!c.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),he(z.depthTexture,0);const Ae=c.get(z.depthTexture).__webglTexture,Pe=_t(z);if(z.depthTexture.format===qo)at(z)?y.framebufferTexture2DMultisampleEXT(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.TEXTURE_2D,Ae,0,Pe):u.framebufferTexture2D(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.TEXTURE_2D,Ae,0);else if(z.depthTexture.format===el)at(z)?y.framebufferTexture2DMultisampleEXT(u.FRAMEBUFFER,u.DEPTH_STENCIL_ATTACHMENT,u.TEXTURE_2D,Ae,0,Pe):u.framebufferTexture2D(u.FRAMEBUFFER,u.DEPTH_STENCIL_ATTACHMENT,u.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function oe(Q){const z=c.get(Q),pe=Q.isWebGLCubeRenderTarget===!0;if(Q.depthTexture&&!z.__autoAllocateDepthBuffer){if(pe)throw new Error("target.depthTexture not supported in Cube render targets");kt(z.__webglFramebuffer,Q)}else if(pe){z.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)s.bindFramebuffer(u.FRAMEBUFFER,z.__webglFramebuffer[Ae]),z.__webglDepthbuffer[Ae]=u.createRenderbuffer(),yt(z.__webglDepthbuffer[Ae],Q,!1)}else s.bindFramebuffer(u.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=u.createRenderbuffer(),yt(z.__webglDepthbuffer,Q,!1);s.bindFramebuffer(u.FRAMEBUFFER,null)}function be(Q,z,pe){const Ae=c.get(Q);z!==void 0&&Fe(Ae.__webglFramebuffer,Q,Q.texture,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,0),pe!==void 0&&oe(Q)}function we(Q){const z=Q.texture,pe=c.get(Q),Ae=c.get(z);Q.addEventListener("dispose",xe);const Pe=Q.textures,Ve=Q.isWebGLCubeRenderTarget===!0,ot=Pe.length>1;if(ot||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=u.createTexture()),Ae.__version=z.version,M.memory.textures++),Ve){pe.__webglFramebuffer=[];for(let st=0;st<6;st++)if(z.mipmaps&&z.mipmaps.length>0){pe.__webglFramebuffer[st]=[];for(let it=0;it<z.mipmaps.length;it++)pe.__webglFramebuffer[st][it]=u.createFramebuffer()}else pe.__webglFramebuffer[st]=u.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){pe.__webglFramebuffer=[];for(let st=0;st<z.mipmaps.length;st++)pe.__webglFramebuffer[st]=u.createFramebuffer()}else pe.__webglFramebuffer=u.createFramebuffer();if(ot)for(let st=0,it=Pe.length;st<it;st++){const pt=c.get(Pe[st]);pt.__webglTexture===void 0&&(pt.__webglTexture=u.createTexture(),M.memory.textures++)}if(Q.samples>0&&at(Q)===!1){pe.__webglMultisampledFramebuffer=u.createFramebuffer(),pe.__webglColorRenderbuffer=[],s.bindFramebuffer(u.FRAMEBUFFER,pe.__webglMultisampledFramebuffer);for(let st=0;st<Pe.length;st++){const it=Pe[st];pe.__webglColorRenderbuffer[st]=u.createRenderbuffer(),u.bindRenderbuffer(u.RENDERBUFFER,pe.__webglColorRenderbuffer[st]);const pt=m.convert(it.format,it.colorSpace),Ye=m.convert(it.type),ze=$(it.internalFormat,pt,Ye,it.colorSpace,Q.isXRRenderTarget===!0),Ut=_t(Q);u.renderbufferStorageMultisample(u.RENDERBUFFER,Ut,ze,Q.width,Q.height),u.framebufferRenderbuffer(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0+st,u.RENDERBUFFER,pe.__webglColorRenderbuffer[st])}u.bindRenderbuffer(u.RENDERBUFFER,null),Q.depthBuffer&&(pe.__webglDepthRenderbuffer=u.createRenderbuffer(),yt(pe.__webglDepthRenderbuffer,Q,!0)),s.bindFramebuffer(u.FRAMEBUFFER,null)}}if(Ve){s.bindTexture(u.TEXTURE_CUBE_MAP,Ae.__webglTexture),ft(u.TEXTURE_CUBE_MAP,z);for(let st=0;st<6;st++)if(z.mipmaps&&z.mipmaps.length>0)for(let it=0;it<z.mipmaps.length;it++)Fe(pe.__webglFramebuffer[st][it],Q,z,u.COLOR_ATTACHMENT0,u.TEXTURE_CUBE_MAP_POSITIVE_X+st,it);else Fe(pe.__webglFramebuffer[st],Q,z,u.COLOR_ATTACHMENT0,u.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);P(z)&&C(u.TEXTURE_CUBE_MAP),s.unbindTexture()}else if(ot){for(let st=0,it=Pe.length;st<it;st++){const pt=Pe[st],Ye=c.get(pt);s.bindTexture(u.TEXTURE_2D,Ye.__webglTexture),ft(u.TEXTURE_2D,pt),Fe(pe.__webglFramebuffer,Q,pt,u.COLOR_ATTACHMENT0+st,u.TEXTURE_2D,0),P(pt)&&C(u.TEXTURE_2D)}s.unbindTexture()}else{let st=u.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(st=Q.isWebGL3DRenderTarget?u.TEXTURE_3D:u.TEXTURE_2D_ARRAY),s.bindTexture(st,Ae.__webglTexture),ft(st,z),z.mipmaps&&z.mipmaps.length>0)for(let it=0;it<z.mipmaps.length;it++)Fe(pe.__webglFramebuffer[it],Q,z,u.COLOR_ATTACHMENT0,st,it);else Fe(pe.__webglFramebuffer,Q,z,u.COLOR_ATTACHMENT0,st,0);P(z)&&C(st),s.unbindTexture()}Q.depthBuffer&&oe(Q)}function te(Q){const z=Q.textures;for(let pe=0,Ae=z.length;pe<Ae;pe++){const Pe=z[pe];if(P(Pe)){const Ve=Q.isWebGLCubeRenderTarget?u.TEXTURE_CUBE_MAP:u.TEXTURE_2D,ot=c.get(Pe).__webglTexture;s.bindTexture(Ve,ot),C(Ve),s.unbindTexture()}}}const tt=[],Je=[];function zt(Q){if(Q.samples>0){if(at(Q)===!1){const z=Q.textures,pe=Q.width,Ae=Q.height;let Pe=u.COLOR_BUFFER_BIT;const Ve=Q.stencilBuffer?u.DEPTH_STENCIL_ATTACHMENT:u.DEPTH_ATTACHMENT,ot=c.get(Q),st=z.length>1;if(st)for(let it=0;it<z.length;it++)s.bindFramebuffer(u.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0+it,u.RENDERBUFFER,null),s.bindFramebuffer(u.FRAMEBUFFER,ot.__webglFramebuffer),u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0+it,u.TEXTURE_2D,null,0);s.bindFramebuffer(u.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.bindFramebuffer(u.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let it=0;it<z.length;it++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Pe|=u.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Pe|=u.STENCIL_BUFFER_BIT)),st){u.framebufferRenderbuffer(u.READ_FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.RENDERBUFFER,ot.__webglColorRenderbuffer[it]);const pt=c.get(z[it]).__webglTexture;u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,pt,0)}u.blitFramebuffer(0,0,pe,Ae,0,0,pe,Ae,Pe,u.NEAREST),T===!0&&(tt.length=0,Je.length=0,tt.push(u.COLOR_ATTACHMENT0+it),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(tt.push(Ve),Je.push(Ve),u.invalidateFramebuffer(u.DRAW_FRAMEBUFFER,Je)),u.invalidateFramebuffer(u.READ_FRAMEBUFFER,tt))}if(s.bindFramebuffer(u.READ_FRAMEBUFFER,null),s.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),st)for(let it=0;it<z.length;it++){s.bindFramebuffer(u.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0+it,u.RENDERBUFFER,ot.__webglColorRenderbuffer[it]);const pt=c.get(z[it]).__webglTexture;s.bindFramebuffer(u.FRAMEBUFFER,ot.__webglFramebuffer),u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,u.COLOR_ATTACHMENT0+it,u.TEXTURE_2D,pt,0)}s.bindFramebuffer(u.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&T){const z=Q.stencilBuffer?u.DEPTH_STENCIL_ATTACHMENT:u.DEPTH_ATTACHMENT;u.invalidateFramebuffer(u.DRAW_FRAMEBUFFER,[z])}}}function _t(Q){return Math.min(d.maxSamples,Q.samples)}function at(Q){const z=c.get(Q);return Q.samples>0&&i.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function Et(Q){const z=M.render.frame;R.get(Q)!==z&&(R.set(Q,z),Q.update())}function Ct(Q,z){const pe=Q.colorSpace,Ae=Q.format,Pe=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||pe!==$s&&pe!==Hs&&(Ki.getTransfer(pe)===tn?(Ae!==Xr||Pe!==Zs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",pe)),z}function jt(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(A.width=Q.naturalWidth||Q.width,A.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(A.width=Q.displayWidth,A.height=Q.displayHeight):(A.width=Q.width,A.height=Q.height),A}this.allocateTextureUnit=Me,this.resetTextureUnits=H,this.setTexture2D=he,this.setTexture2DArray=qe,this.setTexture3D=Xe,this.setTextureCube=gt,this.rebindTextures=be,this.setupRenderTarget=we,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=at}function D2(u,i){function s(c,d=Hs){let m;const M=Ki.getTransfer(d);if(c===Zs)return u.UNSIGNED_BYTE;if(c===V0)return u.UNSIGNED_SHORT_4_4_4_4;if(c===G0)return u.UNSIGNED_SHORT_5_5_5_1;if(c===pT)return u.UNSIGNED_INT_5_9_9_9_REV;if(c===dT)return u.BYTE;if(c===fT)return u.SHORT;if(c===B0)return u.UNSIGNED_SHORT;if(c===z0)return u.INT;if(c===Ko)return u.UNSIGNED_INT;if(c===ks)return u.FLOAT;if(c===fu)return u.HALF_FLOAT;if(c===mT)return u.ALPHA;if(c===gT)return u.RGB;if(c===Xr)return u.RGBA;if(c===_T)return u.LUMINANCE;if(c===xT)return u.LUMINANCE_ALPHA;if(c===qo)return u.DEPTH_COMPONENT;if(c===el)return u.DEPTH_STENCIL;if(c===vT)return u.RED;if(c===H0)return u.RED_INTEGER;if(c===yT)return u.RG;if(c===k0)return u.RG_INTEGER;if(c===W0)return u.RGBA_INTEGER;if(c===Qd||c===ef||c===tf||c===nf)if(M===tn)if(m=i.get("WEBGL_compressed_texture_s3tc_srgb"),m!==null){if(c===Qd)return m.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===ef)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===tf)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===nf)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(m=i.get("WEBGL_compressed_texture_s3tc"),m!==null){if(c===Qd)return m.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===ef)return m.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===tf)return m.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===nf)return m.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===l_||c===h_||c===u_||c===d_)if(m=i.get("WEBGL_compressed_texture_pvrtc"),m!==null){if(c===l_)return m.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===h_)return m.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===u_)return m.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===d_)return m.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===f_||c===p_||c===m_)if(m=i.get("WEBGL_compressed_texture_etc"),m!==null){if(c===f_||c===p_)return M===tn?m.COMPRESSED_SRGB8_ETC2:m.COMPRESSED_RGB8_ETC2;if(c===m_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:m.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===g_||c===__||c===x_||c===v_||c===y_||c===M_||c===S_||c===b_||c===E_||c===T_||c===A_||c===w_||c===R_||c===C_)if(m=i.get("WEBGL_compressed_texture_astc"),m!==null){if(c===g_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:m.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===__)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:m.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===x_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:m.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===v_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:m.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===y_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:m.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===M_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:m.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===S_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:m.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===b_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:m.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===E_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:m.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===T_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:m.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===A_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:m.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===w_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:m.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===R_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:m.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===C_)return M===tn?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:m.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===rf||c===P_||c===L_)if(m=i.get("EXT_texture_compression_bptc"),m!==null){if(c===rf)return M===tn?m.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:m.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===P_)return m.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===L_)return m.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===MT||c===I_||c===D_||c===U_)if(m=i.get("EXT_texture_compression_rgtc"),m!==null){if(c===rf)return m.COMPRESSED_RED_RGTC1_EXT;if(c===I_)return m.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===D_)return m.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===U_)return m.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===nl?u.UNSIGNED_INT_24_8:u[c]!==void 0?u[c]:null}return{convert:s}}class U2 extends mr{constructor(i=[]){super(),this.isArrayCamera=!0,this.cameras=i}}class Ws extends sr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N2={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(i){return this._targetRay!==null&&this._targetRay.dispatchEvent(i),this._grip!==null&&this._grip.dispatchEvent(i),this._hand!==null&&this._hand.dispatchEvent(i),this}connect(i){if(i&&i.hand){const s=this._hand;if(s)for(const c of i.hand.values())this._getHandJoint(s,c)}return this.dispatchEvent({type:"connected",data:i}),this}disconnect(i){return this.dispatchEvent({type:"disconnected",data:i}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(i,s,c){let d=null,m=null,M=null;const y=this._targetRay,T=this._grip,A=this._hand;if(i&&s.session.visibilityState!=="visible-blurred"){if(A&&i.hand){M=!0;for(const W of i.hand.values()){const P=s.getJointPose(W,c),C=this._getHandJoint(A,W);P!==null&&(C.matrix.fromArray(P.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,C.jointRadius=P.radius),C.visible=P!==null}const R=A.joints["index-finger-tip"],L=A.joints["thumb-tip"],I=R.position.distanceTo(L.position),N=.02,G=.005;A.inputState.pinching&&I>N+G?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:i.handedness,target:this})):!A.inputState.pinching&&I<=N-G&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:i.handedness,target:this}))}else T!==null&&i.gripSpace&&(m=s.getPose(i.gripSpace,c),m!==null&&(T.matrix.fromArray(m.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.matrixWorldNeedsUpdate=!0,m.linearVelocity?(T.hasLinearVelocity=!0,T.linearVelocity.copy(m.linearVelocity)):T.hasLinearVelocity=!1,m.angularVelocity?(T.hasAngularVelocity=!0,T.angularVelocity.copy(m.angularVelocity)):T.hasAngularVelocity=!1));y!==null&&(d=s.getPose(i.targetRaySpace,c),d===null&&m!==null&&(d=m),d!==null&&(y.matrix.fromArray(d.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,d.linearVelocity?(y.hasLinearVelocity=!0,y.linearVelocity.copy(d.linearVelocity)):y.hasLinearVelocity=!1,d.angularVelocity?(y.hasAngularVelocity=!0,y.angularVelocity.copy(d.angularVelocity)):y.hasAngularVelocity=!1,this.dispatchEvent(N2)))}return y!==null&&(y.visible=d!==null),T!==null&&(T.visible=m!==null),A!==null&&(A.visible=M!==null),this}_getHandJoint(i,s){if(i.joints[s.jointName]===void 0){const c=new Ws;c.matrixAutoUpdate=!1,c.visible=!1,i.joints[s.jointName]=c,i.add(c)}return i.joints[s.jointName]}}const F2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(i,s,c){if(this.texture===null){const d=new Hn,m=i.properties.get(d);m.__webglTexture=s.texture,(s.depthNear!=c.depthNear||s.depthFar!=c.depthFar)&&(this.depthNear=s.depthNear,this.depthFar=s.depthFar),this.texture=d}}render(i,s){if(this.texture!==null){if(this.mesh===null){const c=s.cameras[0].viewport,d=new Tr({vertexShader:F2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:c.z},depthHeight:{value:c.w}}});this.mesh=new _r(new jo(20,20),d)}i.render(this.mesh,s)}}reset(){this.texture=null,this.mesh=null}}class z2 extends Qo{constructor(i,s){super();const c=this;let d=null,m=1,M=null,y="local-floor",T=1,A=null,R=null,L=null,I=null,N=null,G=null;const W=new B2,P=s.getContextAttributes();let C=null,$=null;const X=[],ee=[],xe=new Oi;let se=null;const ae=new mr;ae.layers.enable(1),ae.viewport=new sn;const Ne=new mr;Ne.layers.enable(2),Ne.viewport=new sn;const K=[ae,Ne],H=new U2;H.layers.enable(1),H.layers.enable(2);let Me=null,Ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Fe){let yt=X[Fe];return yt===void 0&&(yt=new Cf,X[Fe]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Fe){let yt=X[Fe];return yt===void 0&&(yt=new Cf,X[Fe]=yt),yt.getGripSpace()},this.getHand=function(Fe){let yt=X[Fe];return yt===void 0&&(yt=new Cf,X[Fe]=yt),yt.getHandSpace()};function he(Fe){const yt=ee.indexOf(Fe.inputSource);if(yt===-1)return;const kt=X[yt];kt!==void 0&&(kt.update(Fe.inputSource,Fe.frame,A||M),kt.dispatchEvent({type:Fe.type,data:Fe.inputSource}))}function qe(){d.removeEventListener("select",he),d.removeEventListener("selectstart",he),d.removeEventListener("selectend",he),d.removeEventListener("squeeze",he),d.removeEventListener("squeezestart",he),d.removeEventListener("squeezeend",he),d.removeEventListener("end",qe),d.removeEventListener("inputsourceschange",Xe);for(let Fe=0;Fe<X.length;Fe++){const yt=ee[Fe];yt!==null&&(ee[Fe]=null,X[Fe].disconnect(yt))}Me=null,Ie=null,W.reset(),i.setRenderTarget(C),N=null,I=null,L=null,d=null,$=null,Hi.stop(),c.isPresenting=!1,i.setPixelRatio(se),i.setSize(xe.width,xe.height,!1),c.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Fe){m=Fe,c.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Fe){y=Fe,c.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||M},this.setReferenceSpace=function(Fe){A=Fe},this.getBaseLayer=function(){return I!==null?I:N},this.getBinding=function(){return L},this.getFrame=function(){return G},this.getSession=function(){return d},this.setSession=async function(Fe){if(d=Fe,d!==null){if(C=i.getRenderTarget(),d.addEventListener("select",he),d.addEventListener("selectstart",he),d.addEventListener("selectend",he),d.addEventListener("squeeze",he),d.addEventListener("squeezestart",he),d.addEventListener("squeezeend",he),d.addEventListener("end",qe),d.addEventListener("inputsourceschange",Xe),P.xrCompatible!==!0&&await s.makeXRCompatible(),se=i.getPixelRatio(),i.getSize(xe),d.renderState.layers===void 0){const yt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:m};N=new XRWebGLLayer(d,s,yt),d.updateRenderState({baseLayer:N}),i.setPixelRatio(1),i.setSize(N.framebufferWidth,N.framebufferHeight,!1),$=new Va(N.framebufferWidth,N.framebufferHeight,{format:Xr,type:Zs,colorSpace:i.outputColorSpace,stencilBuffer:P.stencil})}else{let yt=null,kt=null,oe=null;P.depth&&(oe=P.stencil?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT24,yt=P.stencil?el:qo,kt=P.stencil?nl:Ko);const be={colorFormat:s.RGBA8,depthFormat:oe,scaleFactor:m};L=new XRWebGLBinding(d,s),I=L.createProjectionLayer(be),d.updateRenderState({layers:[I]}),i.setPixelRatio(1),i.setSize(I.textureWidth,I.textureHeight,!1),$=new Va(I.textureWidth,I.textureHeight,{format:Xr,type:Zs,depthTexture:new rx(I.textureWidth,I.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:P.stencil,colorSpace:i.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:I.ignoreDepthValues===!1})}$.isXRRenderTarget=!0,this.setFoveation(T),A=null,M=await d.requestReferenceSpace(y),Hi.setContext(d),Hi.start(),c.isPresenting=!0,c.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(d!==null)return d.environmentBlendMode};function Xe(Fe){for(let yt=0;yt<Fe.removed.length;yt++){const kt=Fe.removed[yt],oe=ee.indexOf(kt);oe>=0&&(ee[oe]=null,X[oe].disconnect(kt))}for(let yt=0;yt<Fe.added.length;yt++){const kt=Fe.added[yt];let oe=ee.indexOf(kt);if(oe===-1){for(let we=0;we<X.length;we++)if(we>=ee.length){ee.push(kt),oe=we;break}else if(ee[we]===null){ee[we]=kt,oe=we;break}if(oe===-1)break}const be=X[oe];be&&be.connect(kt)}}const gt=new _e,ht=new _e;function De(Fe,yt,kt){gt.setFromMatrixPosition(yt.matrixWorld),ht.setFromMatrixPosition(kt.matrixWorld);const oe=gt.distanceTo(ht),be=yt.projectionMatrix.elements,we=kt.projectionMatrix.elements,te=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),Je=(be[9]+1)/be[5],zt=(be[9]-1)/be[5],_t=(be[8]-1)/be[0],at=(we[8]+1)/we[0],Et=te*_t,Ct=te*at,jt=oe/(-_t+at),Q=jt*-_t;yt.matrixWorld.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.translateX(Q),Fe.translateZ(jt),Fe.matrixWorld.compose(Fe.position,Fe.quaternion,Fe.scale),Fe.matrixWorldInverse.copy(Fe.matrixWorld).invert();const z=te+jt,pe=tt+jt,Ae=Et-Q,Pe=Ct+(oe-Q),Ve=Je*tt/pe*z,ot=zt*tt/pe*z;Fe.projectionMatrix.makePerspective(Ae,Pe,Ve,ot,z,pe),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert()}function vt(Fe,yt){yt===null?Fe.matrixWorld.copy(Fe.matrix):Fe.matrixWorld.multiplyMatrices(yt.matrixWorld,Fe.matrix),Fe.matrixWorldInverse.copy(Fe.matrixWorld).invert()}this.updateCamera=function(Fe){if(d===null)return;W.texture!==null&&(Fe.near=W.depthNear,Fe.far=W.depthFar),H.near=Ne.near=ae.near=Fe.near,H.far=Ne.far=ae.far=Fe.far,(Me!==H.near||Ie!==H.far)&&(d.updateRenderState({depthNear:H.near,depthFar:H.far}),Me=H.near,Ie=H.far,ae.near=Me,ae.far=Ie,Ne.near=Me,Ne.far=Ie,ae.updateProjectionMatrix(),Ne.updateProjectionMatrix(),Fe.updateProjectionMatrix());const yt=Fe.parent,kt=H.cameras;vt(H,yt);for(let oe=0;oe<kt.length;oe++)vt(kt[oe],yt);kt.length===2?De(H,ae,Ne):H.projectionMatrix.copy(ae.projectionMatrix),ft(Fe,H,yt)};function ft(Fe,yt,kt){kt===null?Fe.matrix.copy(yt.matrixWorld):(Fe.matrix.copy(kt.matrixWorld),Fe.matrix.invert(),Fe.matrix.multiply(yt.matrixWorld)),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.updateMatrixWorld(!0),Fe.projectionMatrix.copy(yt.projectionMatrix),Fe.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Fe.isPerspectiveCamera&&(Fe.fov=If*2*Math.atan(1/Fe.projectionMatrix.elements[5]),Fe.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(I===null&&N===null))return T},this.setFoveation=function(Fe){T=Fe,I!==null&&(I.fixedFoveation=Fe),N!==null&&N.fixedFoveation!==void 0&&(N.fixedFoveation=Fe)},this.hasDepthSensing=function(){return W.texture!==null};let Kt=null;function vi(Fe,yt){if(R=yt.getViewerPose(A||M),G=yt,R!==null){const kt=R.views;N!==null&&(i.setRenderTargetFramebuffer($,N.framebuffer),i.setRenderTarget($));let oe=!1;kt.length!==H.cameras.length&&(H.cameras.length=0,oe=!0);for(let we=0;we<kt.length;we++){const te=kt[we];let tt=null;if(N!==null)tt=N.getViewport(te);else{const zt=L.getViewSubImage(I,te);tt=zt.viewport,we===0&&(i.setRenderTargetTextures($,zt.colorTexture,I.ignoreDepthValues?void 0:zt.depthStencilTexture),i.setRenderTarget($))}let Je=K[we];Je===void 0&&(Je=new mr,Je.layers.enable(we),Je.viewport=new sn,K[we]=Je),Je.matrix.fromArray(te.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(te.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(tt.x,tt.y,tt.width,tt.height),we===0&&(H.matrix.copy(Je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),oe===!0&&H.cameras.push(Je)}const be=d.enabledFeatures;if(be&&be.includes("depth-sensing")){const we=L.getDepthInformation(kt[0]);we&&we.isValid&&we.texture&&W.init(i,we,d.renderState)}}for(let kt=0;kt<X.length;kt++){const oe=ee[kt],be=X[kt];oe!==null&&be!==void 0&&be.update(oe,yt,A||M)}W.render(i,H),Kt&&Kt(Fe,yt),yt.detectedPlanes&&c.dispatchEvent({type:"planesdetected",data:yt}),G=null}const Hi=new nx;Hi.setAnimationLoop(vi),this.setAnimationLoop=function(Fe){Kt=Fe},this.dispose=function(){}}}const Ia=new _s,V2=new dn;function G2(u,i){function s(P,C){P.matrixAutoUpdate===!0&&P.updateMatrix(),C.value.copy(P.matrix)}function c(P,C){C.color.getRGB(P.fogColor.value,ex(u)),C.isFog?(P.fogNear.value=C.near,P.fogFar.value=C.far):C.isFogExp2&&(P.fogDensity.value=C.density)}function d(P,C,$,X,ee){C.isMeshBasicMaterial||C.isMeshLambertMaterial?m(P,C):C.isMeshToonMaterial?(m(P,C),L(P,C)):C.isMeshPhongMaterial?(m(P,C),R(P,C)):C.isMeshStandardMaterial?(m(P,C),I(P,C),C.isMeshPhysicalMaterial&&N(P,C,ee)):C.isMeshMatcapMaterial?(m(P,C),G(P,C)):C.isMeshDepthMaterial?m(P,C):C.isMeshDistanceMaterial?(m(P,C),W(P,C)):C.isMeshNormalMaterial?m(P,C):C.isLineBasicMaterial?(M(P,C),C.isLineDashedMaterial&&y(P,C)):C.isPointsMaterial?T(P,C,$,X):C.isSpriteMaterial?A(P,C):C.isShadowMaterial?(P.color.value.copy(C.color),P.opacity.value=C.opacity):C.isShaderMaterial&&(C.uniformsNeedUpdate=!1)}function m(P,C){P.opacity.value=C.opacity,C.color&&P.diffuse.value.copy(C.color),C.emissive&&P.emissive.value.copy(C.emissive).multiplyScalar(C.emissiveIntensity),C.map&&(P.map.value=C.map,s(C.map,P.mapTransform)),C.alphaMap&&(P.alphaMap.value=C.alphaMap,s(C.alphaMap,P.alphaMapTransform)),C.bumpMap&&(P.bumpMap.value=C.bumpMap,s(C.bumpMap,P.bumpMapTransform),P.bumpScale.value=C.bumpScale,C.side===rr&&(P.bumpScale.value*=-1)),C.normalMap&&(P.normalMap.value=C.normalMap,s(C.normalMap,P.normalMapTransform),P.normalScale.value.copy(C.normalScale),C.side===rr&&P.normalScale.value.negate()),C.displacementMap&&(P.displacementMap.value=C.displacementMap,s(C.displacementMap,P.displacementMapTransform),P.displacementScale.value=C.displacementScale,P.displacementBias.value=C.displacementBias),C.emissiveMap&&(P.emissiveMap.value=C.emissiveMap,s(C.emissiveMap,P.emissiveMapTransform)),C.specularMap&&(P.specularMap.value=C.specularMap,s(C.specularMap,P.specularMapTransform)),C.alphaTest>0&&(P.alphaTest.value=C.alphaTest);const $=i.get(C),X=$.envMap,ee=$.envMapRotation;if(X&&(P.envMap.value=X,Ia.copy(ee),Ia.x*=-1,Ia.y*=-1,Ia.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Ia.y*=-1,Ia.z*=-1),P.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(Ia)),P.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,P.reflectivity.value=C.reflectivity,P.ior.value=C.ior,P.refractionRatio.value=C.refractionRatio),C.lightMap){P.lightMap.value=C.lightMap;const xe=u._useLegacyLights===!0?Math.PI:1;P.lightMapIntensity.value=C.lightMapIntensity*xe,s(C.lightMap,P.lightMapTransform)}C.aoMap&&(P.aoMap.value=C.aoMap,P.aoMapIntensity.value=C.aoMapIntensity,s(C.aoMap,P.aoMapTransform))}function M(P,C){P.diffuse.value.copy(C.color),P.opacity.value=C.opacity,C.map&&(P.map.value=C.map,s(C.map,P.mapTransform))}function y(P,C){P.dashSize.value=C.dashSize,P.totalSize.value=C.dashSize+C.gapSize,P.scale.value=C.scale}function T(P,C,$,X){P.diffuse.value.copy(C.color),P.opacity.value=C.opacity,P.size.value=C.size*$,P.scale.value=X*.5,C.map&&(P.map.value=C.map,s(C.map,P.uvTransform)),C.alphaMap&&(P.alphaMap.value=C.alphaMap,s(C.alphaMap,P.alphaMapTransform)),C.alphaTest>0&&(P.alphaTest.value=C.alphaTest)}function A(P,C){P.diffuse.value.copy(C.color),P.opacity.value=C.opacity,P.rotation.value=C.rotation,C.map&&(P.map.value=C.map,s(C.map,P.mapTransform)),C.alphaMap&&(P.alphaMap.value=C.alphaMap,s(C.alphaMap,P.alphaMapTransform)),C.alphaTest>0&&(P.alphaTest.value=C.alphaTest)}function R(P,C){P.specular.value.copy(C.specular),P.shininess.value=Math.max(C.shininess,1e-4)}function L(P,C){C.gradientMap&&(P.gradientMap.value=C.gradientMap)}function I(P,C){P.metalness.value=C.metalness,C.metalnessMap&&(P.metalnessMap.value=C.metalnessMap,s(C.metalnessMap,P.metalnessMapTransform)),P.roughness.value=C.roughness,C.roughnessMap&&(P.roughnessMap.value=C.roughnessMap,s(C.roughnessMap,P.roughnessMapTransform)),C.envMap&&(P.envMapIntensity.value=C.envMapIntensity)}function N(P,C,$){P.ior.value=C.ior,C.sheen>0&&(P.sheenColor.value.copy(C.sheenColor).multiplyScalar(C.sheen),P.sheenRoughness.value=C.sheenRoughness,C.sheenColorMap&&(P.sheenColorMap.value=C.sheenColorMap,s(C.sheenColorMap,P.sheenColorMapTransform)),C.sheenRoughnessMap&&(P.sheenRoughnessMap.value=C.sheenRoughnessMap,s(C.sheenRoughnessMap,P.sheenRoughnessMapTransform))),C.clearcoat>0&&(P.clearcoat.value=C.clearcoat,P.clearcoatRoughness.value=C.clearcoatRoughness,C.clearcoatMap&&(P.clearcoatMap.value=C.clearcoatMap,s(C.clearcoatMap,P.clearcoatMapTransform)),C.clearcoatRoughnessMap&&(P.clearcoatRoughnessMap.value=C.clearcoatRoughnessMap,s(C.clearcoatRoughnessMap,P.clearcoatRoughnessMapTransform)),C.clearcoatNormalMap&&(P.clearcoatNormalMap.value=C.clearcoatNormalMap,s(C.clearcoatNormalMap,P.clearcoatNormalMapTransform),P.clearcoatNormalScale.value.copy(C.clearcoatNormalScale),C.side===rr&&P.clearcoatNormalScale.value.negate())),C.dispersion>0&&(P.dispersion.value=C.dispersion),C.iridescence>0&&(P.iridescence.value=C.iridescence,P.iridescenceIOR.value=C.iridescenceIOR,P.iridescenceThicknessMinimum.value=C.iridescenceThicknessRange[0],P.iridescenceThicknessMaximum.value=C.iridescenceThicknessRange[1],C.iridescenceMap&&(P.iridescenceMap.value=C.iridescenceMap,s(C.iridescenceMap,P.iridescenceMapTransform)),C.iridescenceThicknessMap&&(P.iridescenceThicknessMap.value=C.iridescenceThicknessMap,s(C.iridescenceThicknessMap,P.iridescenceThicknessMapTransform))),C.transmission>0&&(P.transmission.value=C.transmission,P.transmissionSamplerMap.value=$.texture,P.transmissionSamplerSize.value.set($.width,$.height),C.transmissionMap&&(P.transmissionMap.value=C.transmissionMap,s(C.transmissionMap,P.transmissionMapTransform)),P.thickness.value=C.thickness,C.thicknessMap&&(P.thicknessMap.value=C.thicknessMap,s(C.thicknessMap,P.thicknessMapTransform)),P.attenuationDistance.value=C.attenuationDistance,P.attenuationColor.value.copy(C.attenuationColor)),C.anisotropy>0&&(P.anisotropyVector.value.set(C.anisotropy*Math.cos(C.anisotropyRotation),C.anisotropy*Math.sin(C.anisotropyRotation)),C.anisotropyMap&&(P.anisotropyMap.value=C.anisotropyMap,s(C.anisotropyMap,P.anisotropyMapTransform))),P.specularIntensity.value=C.specularIntensity,P.specularColor.value.copy(C.specularColor),C.specularColorMap&&(P.specularColorMap.value=C.specularColorMap,s(C.specularColorMap,P.specularColorMapTransform)),C.specularIntensityMap&&(P.specularIntensityMap.value=C.specularIntensityMap,s(C.specularIntensityMap,P.specularIntensityMapTransform))}function G(P,C){C.matcap&&(P.matcap.value=C.matcap)}function W(P,C){const $=i.get(C).light;P.referencePosition.value.setFromMatrixPosition($.matrixWorld),P.nearDistance.value=$.shadow.camera.near,P.farDistance.value=$.shadow.camera.far}return{refreshFogUniforms:c,refreshMaterialUniforms:d}}function H2(u,i,s,c){let d={},m={},M=[];const y=u.getParameter(u.MAX_UNIFORM_BUFFER_BINDINGS);function T($,X){const ee=X.program;c.uniformBlockBinding($,ee)}function A($,X){let ee=d[$.id];ee===void 0&&(G($),ee=R($),d[$.id]=ee,$.addEventListener("dispose",P));const xe=X.program;c.updateUBOMapping($,xe);const se=i.render.frame;m[$.id]!==se&&(I($),m[$.id]=se)}function R($){const X=L();$.__bindingPointIndex=X;const ee=u.createBuffer(),xe=$.__size,se=$.usage;return u.bindBuffer(u.UNIFORM_BUFFER,ee),u.bufferData(u.UNIFORM_BUFFER,xe,se),u.bindBuffer(u.UNIFORM_BUFFER,null),u.bindBufferBase(u.UNIFORM_BUFFER,X,ee),ee}function L(){for(let $=0;$<y;$++)if(M.indexOf($)===-1)return M.push($),$;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function I($){const X=d[$.id],ee=$.uniforms,xe=$.__cache;u.bindBuffer(u.UNIFORM_BUFFER,X);for(let se=0,ae=ee.length;se<ae;se++){const Ne=Array.isArray(ee[se])?ee[se]:[ee[se]];for(let K=0,H=Ne.length;K<H;K++){const Me=Ne[K];if(N(Me,se,K,xe)===!0){const Ie=Me.__offset,he=Array.isArray(Me.value)?Me.value:[Me.value];let qe=0;for(let Xe=0;Xe<he.length;Xe++){const gt=he[Xe],ht=W(gt);typeof gt=="number"||typeof gt=="boolean"?(Me.__data[0]=gt,u.bufferSubData(u.UNIFORM_BUFFER,Ie+qe,Me.__data)):gt.isMatrix3?(Me.__data[0]=gt.elements[0],Me.__data[1]=gt.elements[1],Me.__data[2]=gt.elements[2],Me.__data[3]=0,Me.__data[4]=gt.elements[3],Me.__data[5]=gt.elements[4],Me.__data[6]=gt.elements[5],Me.__data[7]=0,Me.__data[8]=gt.elements[6],Me.__data[9]=gt.elements[7],Me.__data[10]=gt.elements[8],Me.__data[11]=0):(gt.toArray(Me.__data,qe),qe+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(u.UNIFORM_BUFFER,Ie,Me.__data)}}}u.bindBuffer(u.UNIFORM_BUFFER,null)}function N($,X,ee,xe){const se=$.value,ae=X+"_"+ee;if(xe[ae]===void 0)return typeof se=="number"||typeof se=="boolean"?xe[ae]=se:xe[ae]=se.clone(),!0;{const Ne=xe[ae];if(typeof se=="number"||typeof se=="boolean"){if(Ne!==se)return xe[ae]=se,!0}else if(Ne.equals(se)===!1)return Ne.copy(se),!0}return!1}function G($){const X=$.uniforms;let ee=0;const xe=16;for(let ae=0,Ne=X.length;ae<Ne;ae++){const K=Array.isArray(X[ae])?X[ae]:[X[ae]];for(let H=0,Me=K.length;H<Me;H++){const Ie=K[H],he=Array.isArray(Ie.value)?Ie.value:[Ie.value];for(let qe=0,Xe=he.length;qe<Xe;qe++){const gt=he[qe],ht=W(gt),De=ee%xe;De!==0&&xe-De<ht.boundary&&(ee+=xe-De),Ie.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),Ie.__offset=ee,ee+=ht.storage}}}const se=ee%xe;return se>0&&(ee+=xe-se),$.__size=ee,$.__cache={},this}function W($){const X={boundary:0,storage:0};return typeof $=="number"||typeof $=="boolean"?(X.boundary=4,X.storage=4):$.isVector2?(X.boundary=8,X.storage=8):$.isVector3||$.isColor?(X.boundary=16,X.storage=12):$.isVector4?(X.boundary=16,X.storage=16):$.isMatrix3?(X.boundary=48,X.storage=48):$.isMatrix4?(X.boundary=64,X.storage=64):$.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",$),X}function P($){const X=$.target;X.removeEventListener("dispose",P);const ee=M.indexOf(X.__bindingPointIndex);M.splice(ee,1),u.deleteBuffer(d[X.id]),delete d[X.id],delete m[X.id]}function C(){for(const $ in d)u.deleteBuffer(d[$]);M=[],d={},m={}}return{bind:T,update:A,dispose:C}}class k2{constructor(i={}){const{canvas:s=DT(),context:c=null,depth:d=!0,stencil:m=!1,alpha:M=!1,antialias:y=!1,premultipliedAlpha:T=!0,preserveDrawingBuffer:A=!1,powerPreference:R="default",failIfMajorPerformanceCaveat:L=!1}=i;this.isWebGLRenderer=!0;let I;if(c!==null){if(typeof WebGLRenderingContext<"u"&&c instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");I=c.getContextAttributes().alpha}else I=M;const N=new Uint32Array(4),G=new Int32Array(4);let W=null,P=null;const C=[],$=[];this.domElement=s,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hr,this._useLegacyLights=!1,this.toneMapping=qs,this.toneMappingExposure=1;const X=this;let ee=!1,xe=0,se=0,ae=null,Ne=-1,K=null;const H=new sn,Me=new sn;let Ie=null;const he=new Fi(0);let qe=0,Xe=s.width,gt=s.height,ht=1,De=null,vt=null;const ft=new sn(0,0,Xe,gt),Kt=new sn(0,0,Xe,gt);let vi=!1;const Hi=new kf;let Fe=!1,yt=!1;const kt=new dn,oe=new _e,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return ae===null?ht:1}let te=c;function tt(q,fe){return s.getContext(q,fe)}try{const q={alpha:!0,depth:d,stencil:m,antialias:y,premultipliedAlpha:T,preserveDrawingBuffer:A,powerPreference:R,failIfMajorPerformanceCaveat:L};if("setAttribute"in s&&s.setAttribute("data-engine",`three.js r${w1}`),s.addEventListener("webglcontextlost",le,!1),s.addEventListener("webglcontextrestored",Ge,!1),s.addEventListener("webglcontextcreationerror",Oe,!1),te===null){const fe="webgl2";if(te=tt(fe,q),te===null)throw tt(fe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(q){throw console.error("THREE.WebGLRenderer: "+q.message),q}let Je,zt,_t,at,Et,Ct,jt,Q,z,pe,Ae,Pe,Ve,ot,st,it,pt,Ye,ze,Ut,mt,ut,Vt,ai;function Ji(){Je=new JR(te),Je.init(),ut=new D2(te,Je),zt=new WR(te,Je,i,ut),_t=new L2(te),at=new eC(te),Et=new _2,Ct=new I2(te,Je,_t,Et,zt,ut,at),jt=new qR(X),Q=new KR(X),z=new aA(te),Vt=new HR(te,z),pe=new jR(te,z,at,Vt),Ae=new iC(te,pe,z,at),ze=new tC(te,zt,Ct),it=new XR(Et),Pe=new g2(X,jt,Q,Je,zt,Vt,it),Ve=new G2(X,Et),ot=new v2,st=new T2(Je),Ye=new GR(X,jt,Q,_t,Ae,I,T),pt=new P2(X,Ae,zt),ai=new H2(te,at,zt,_t),Ut=new kR(te,Je,at),mt=new QR(te,Je,at),at.programs=Pe.programs,X.capabilities=zt,X.extensions=Je,X.properties=Et,X.renderLists=ot,X.shadowMap=pt,X.state=_t,X.info=at}Ji();const si=new z2(X,te);this.xr=si,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const q=Je.get("WEBGL_lose_context");q&&q.loseContext()},this.forceContextRestore=function(){const q=Je.get("WEBGL_lose_context");q&&q.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(q){q!==void 0&&(ht=q,this.setSize(Xe,gt,!1))},this.getSize=function(q){return q.set(Xe,gt)},this.setSize=function(q,fe,Re=!0){if(si.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=q,gt=fe,s.width=Math.floor(q*ht),s.height=Math.floor(fe*ht),Re===!0&&(s.style.width=q+"px",s.style.height=fe+"px"),this.setViewport(0,0,q,fe)},this.getDrawingBufferSize=function(q){return q.set(Xe*ht,gt*ht).floor()},this.setDrawingBufferSize=function(q,fe,Re){Xe=q,gt=fe,ht=Re,s.width=Math.floor(q*Re),s.height=Math.floor(fe*Re),this.setViewport(0,0,q,fe)},this.getCurrentViewport=function(q){return q.copy(H)},this.getViewport=function(q){return q.copy(ft)},this.setViewport=function(q,fe,Re,ve){q.isVector4?ft.set(q.x,q.y,q.z,q.w):ft.set(q,fe,Re,ve),_t.viewport(H.copy(ft).multiplyScalar(ht).round())},this.getScissor=function(q){return q.copy(Kt)},this.setScissor=function(q,fe,Re,ve){q.isVector4?Kt.set(q.x,q.y,q.z,q.w):Kt.set(q,fe,Re,ve),_t.scissor(Me.copy(Kt).multiplyScalar(ht).round())},this.getScissorTest=function(){return vi},this.setScissorTest=function(q){_t.setScissorTest(vi=q)},this.setOpaqueSort=function(q){De=q},this.setTransparentSort=function(q){vt=q},this.getClearColor=function(q){return q.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(q=!0,fe=!0,Re=!0){let ve=0;if(q){let ye=!1;if(ae!==null){const Pt=ae.texture.format;ye=Pt===W0||Pt===k0||Pt===H0}if(ye){const Pt=ae.texture.type,qt=Pt===Zs||Pt===Ko||Pt===B0||Pt===nl||Pt===V0||Pt===G0,Zt=Ye.getClearColor(),ii=Ye.getClearAlpha(),li=Zt.r,ui=Zt.g,di=Zt.b;qt?(N[0]=li,N[1]=ui,N[2]=di,N[3]=ii,te.clearBufferuiv(te.COLOR,0,N)):(G[0]=li,G[1]=ui,G[2]=di,G[3]=ii,te.clearBufferiv(te.COLOR,0,G))}else ve|=te.COLOR_BUFFER_BIT}fe&&(ve|=te.DEPTH_BUFFER_BIT),Re&&(ve|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){s.removeEventListener("webglcontextlost",le,!1),s.removeEventListener("webglcontextrestored",Ge,!1),s.removeEventListener("webglcontextcreationerror",Oe,!1),ot.dispose(),st.dispose(),Et.dispose(),jt.dispose(),Q.dispose(),Ae.dispose(),Vt.dispose(),ai.dispose(),Pe.dispose(),si.dispose(),si.removeEventListener("sessionstart",Bi),si.removeEventListener("sessionend",jn),an.stop()};function le(q){q.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ee=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),ee=!1;const q=at.autoReset,fe=pt.enabled,Re=pt.autoUpdate,ve=pt.needsUpdate,ye=pt.type;Ji(),at.autoReset=q,pt.enabled=fe,pt.autoUpdate=Re,pt.needsUpdate=ve,pt.type=ye}function Oe(q){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",q.statusMessage)}function Rt(q){const fe=q.target;fe.removeEventListener("dispose",Rt),At(fe)}function At(q){Ui(q),Et.remove(q)}function Ui(q){const fe=Et.get(q).programs;fe!==void 0&&(fe.forEach(function(Re){Pe.releaseProgram(Re)}),q.isShaderMaterial&&Pe.releaseShaderCache(q))}this.renderBufferDirect=function(q,fe,Re,ve,ye,Pt){fe===null&&(fe=be);const qt=ye.isMesh&&ye.matrixWorld.determinant()<0,Zt=Wn(q,fe,Re,ve,ye);_t.setMaterial(ve,qt);let ii=Re.index,li=1;if(ve.wireframe===!0){if(ii=pe.getWireframeAttribute(Re),ii===void 0)return;li=2}const ui=Re.drawRange,di=Re.attributes.position;let nn=ui.start*li,mn=(ui.start+ui.count)*li;Pt!==null&&(nn=Math.max(nn,Pt.start*li),mn=Math.min(mn,(Pt.start+Pt.count)*li)),ii!==null?(nn=Math.max(nn,0),mn=Math.min(mn,ii.count)):di!=null&&(nn=Math.max(nn,0),mn=Math.min(mn,di.count));const Rn=mn-nn;if(Rn<0||Rn===1/0)return;Vt.setup(ye,ve,Zt,Re,ii);let ar,Ni=Ut;if(ii!==null&&(ar=z.get(ii),Ni=mt,Ni.setIndex(ar)),ye.isMesh)ve.wireframe===!0?(_t.setLineWidth(ve.wireframeLinewidth*we()),Ni.setMode(te.LINES)):Ni.setMode(te.TRIANGLES);else if(ye.isLine){let hi=ve.linewidth;hi===void 0&&(hi=1),_t.setLineWidth(hi*we()),ye.isLineSegments?Ni.setMode(te.LINES):ye.isLineLoop?Ni.setMode(te.LINE_LOOP):Ni.setMode(te.LINE_STRIP)}else ye.isPoints?Ni.setMode(te.POINTS):ye.isSprite&&Ni.setMode(te.TRIANGLES);if(ye.isBatchedMesh)ye._multiDrawInstances!==null?Ni.renderMultiDrawInstances(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount,ye._multiDrawInstances):Ni.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else if(ye.isInstancedMesh)Ni.renderInstances(nn,Rn,ye.count);else if(Re.isInstancedBufferGeometry){const hi=Re._maxInstanceCount!==void 0?Re._maxInstanceCount:1/0,Zr=Math.min(Re.instanceCount,hi);Ni.renderInstances(nn,Rn,Zr)}else Ni.render(nn,Rn)};function Li(q,fe,Re){q.transparent===!0&&q.side===br&&q.forceSinglePass===!1?(q.side=rr,q.needsUpdate=!0,Ks(q,fe,Re),q.side=gs,q.needsUpdate=!0,Ks(q,fe,Re),q.side=br):Ks(q,fe,Re)}this.compile=function(q,fe,Re=null){Re===null&&(Re=q),P=st.get(Re),P.init(fe),$.push(P),Re.traverseVisible(function(ye){ye.isLight&&ye.layers.test(fe.layers)&&(P.pushLight(ye),ye.castShadow&&P.pushShadow(ye))}),q!==Re&&q.traverseVisible(function(ye){ye.isLight&&ye.layers.test(fe.layers)&&(P.pushLight(ye),ye.castShadow&&P.pushShadow(ye))}),P.setupLights(X._useLegacyLights);const ve=new Set;return q.traverse(function(ye){const Pt=ye.material;if(Pt)if(Array.isArray(Pt))for(let qt=0;qt<Pt.length;qt++){const Zt=Pt[qt];Li(Zt,Re,ye),ve.add(Zt)}else Li(Pt,Re,ye),ve.add(Pt)}),$.pop(),P=null,ve},this.compileAsync=function(q,fe,Re=null){const ve=this.compile(q,fe,Re);return new Promise(ye=>{function Pt(){if(ve.forEach(function(qt){Et.get(qt).currentProgram.isReady()&&ve.delete(qt)}),ve.size===0){ye(q);return}setTimeout(Pt,10)}Je.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Qi=null;function Mn(q){Qi&&Qi(q)}function Bi(){an.stop()}function jn(){an.start()}const an=new nx;an.setAnimationLoop(Mn),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(q){Qi=q,si.setAnimationLoop(q),q===null?an.stop():an.start()},si.addEventListener("sessionstart",Bi),si.addEventListener("sessionend",jn),this.render=function(q,fe){if(fe!==void 0&&fe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ee===!0)return;q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.parent===null&&fe.matrixWorldAutoUpdate===!0&&fe.updateMatrixWorld(),si.enabled===!0&&si.isPresenting===!0&&(si.cameraAutoUpdate===!0&&si.updateCamera(fe),fe=si.getCamera()),q.isScene===!0&&q.onBeforeRender(X,q,fe,ae),P=st.get(q,$.length),P.init(fe),$.push(P),kt.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),Hi.setFromProjectionMatrix(kt),yt=this.localClippingEnabled,Fe=it.init(this.clippingPlanes,yt),W=ot.get(q,C.length),W.init(),C.push(W),kn(q,fe,0,X.sortObjects),W.finish(),X.sortObjects===!0&&W.sort(De,vt);const Re=si.enabled===!1||si.isPresenting===!1||si.hasDepthSensing()===!1;Re&&Ye.addToRenderList(W,q),this.info.render.frame++,Fe===!0&&it.beginShadows();const ve=P.state.shadowsArray;pt.render(ve,q,fe),Fe===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const ye=W.opaque,Pt=W.transmissive;if(P.setupLights(X._useLegacyLights),fe.isArrayCamera){const qt=fe.cameras;if(Pt.length>0)for(let Zt=0,ii=qt.length;Zt<ii;Zt++){const li=qt[Zt];Ha(ye,Pt,q,li)}Re&&Ye.render(q);for(let Zt=0,ii=qt.length;Zt<ii;Zt++){const li=qt[Zt];xs(W,q,li,li.viewport)}}else Pt.length>0&&Ha(ye,Pt,q,fe),Re&&Ye.render(q),xs(W,q,fe);ae!==null&&(Ct.updateMultisampleRenderTarget(ae),Ct.updateRenderTargetMipmap(ae)),q.isScene===!0&&q.onAfterRender(X,q,fe),Vt.resetDefaultState(),Ne=-1,K=null,$.pop(),$.length>0?(P=$[$.length-1],Fe===!0&&it.setGlobalState(X.clippingPlanes,P.state.camera)):P=null,C.pop(),C.length>0?W=C[C.length-1]:W=null};function kn(q,fe,Re,ve){if(q.visible===!1)return;if(q.layers.test(fe.layers)){if(q.isGroup)Re=q.renderOrder;else if(q.isLOD)q.autoUpdate===!0&&q.update(fe);else if(q.isLight)P.pushLight(q),q.castShadow&&P.pushShadow(q);else if(q.isSprite){if(!q.frustumCulled||Hi.intersectsSprite(q)){ve&&oe.setFromMatrixPosition(q.matrixWorld).applyMatrix4(kt);const qt=Ae.update(q),Zt=q.material;Zt.visible&&W.push(q,qt,Zt,Re,oe.z,null)}}else if((q.isMesh||q.isLine||q.isPoints)&&(!q.frustumCulled||Hi.intersectsObject(q))){const qt=Ae.update(q),Zt=q.material;if(ve&&(q.boundingSphere!==void 0?(q.boundingSphere===null&&q.computeBoundingSphere(),oe.copy(q.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),oe.copy(qt.boundingSphere.center)),oe.applyMatrix4(q.matrixWorld).applyMatrix4(kt)),Array.isArray(Zt)){const ii=qt.groups;for(let li=0,ui=ii.length;li<ui;li++){const di=ii[li],nn=Zt[di.materialIndex];nn&&nn.visible&&W.push(q,qt,nn,Re,oe.z,di)}}else Zt.visible&&W.push(q,qt,Zt,Re,oe.z,null)}}const Pt=q.children;for(let qt=0,Zt=Pt.length;qt<Zt;qt++)kn(Pt[qt],fe,Re,ve)}function xs(q,fe,Re,ve){const ye=q.opaque,Pt=q.transmissive,qt=q.transparent;P.setupLightsView(Re),Fe===!0&&it.setGlobalState(X.clippingPlanes,Re),ve&&_t.viewport(H.copy(ve)),ye.length>0&&vs(ye,fe,Re),Pt.length>0&&vs(Pt,fe,Re),qt.length>0&&vs(qt,fe,Re),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ha(q,fe,Re,ve){if((Re.isScene===!0?Re.overrideMaterial:null)!==null)return;P.state.transmissionRenderTarget[ve.id]===void 0&&(P.state.transmissionRenderTarget[ve.id]=new Va(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?fu:Zs,minFilter:za,samples:4,stencilBuffer:m,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Pt=P.state.transmissionRenderTarget[ve.id],qt=ve.viewport||H;Pt.setSize(qt.z,qt.w);const Zt=X.getRenderTarget();X.setRenderTarget(Pt),X.getClearColor(he),qe=X.getClearAlpha(),qe<1&&X.setClearColor(16777215,.5),X.clear();const ii=X.toneMapping;X.toneMapping=qs;const li=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),P.setupLightsView(ve),Fe===!0&&it.setGlobalState(X.clippingPlanes,ve),vs(q,Re,ve),Ct.updateMultisampleRenderTarget(Pt),Ct.updateRenderTargetMipmap(Pt),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ui=!1;for(let di=0,nn=fe.length;di<nn;di++){const mn=fe[di],Rn=mn.object,ar=mn.geometry,Ni=mn.material,hi=mn.group;if(Ni.side===br&&Rn.layers.test(ve.layers)){const Zr=Ni.side;Ni.side=rr,Ni.needsUpdate=!0,Yr(Rn,Re,ve,ar,Ni,hi),Ni.side=Zr,Ni.needsUpdate=!0,ui=!0}}ui===!0&&(Ct.updateMultisampleRenderTarget(Pt),Ct.updateRenderTargetMipmap(Pt))}X.setRenderTarget(Zt),X.setClearColor(he,qe),li!==void 0&&(ve.viewport=li),X.toneMapping=ii}function vs(q,fe,Re){const ve=fe.isScene===!0?fe.overrideMaterial:null;for(let ye=0,Pt=q.length;ye<Pt;ye++){const qt=q[ye],Zt=qt.object,ii=qt.geometry,li=ve===null?qt.material:ve,ui=qt.group;Zt.layers.test(Re.layers)&&Yr(Zt,fe,Re,ii,li,ui)}}function Yr(q,fe,Re,ve,ye,Pt){q.onBeforeRender(X,fe,Re,ve,ye,Pt),q.modelViewMatrix.multiplyMatrices(Re.matrixWorldInverse,q.matrixWorld),q.normalMatrix.getNormalMatrix(q.modelViewMatrix),ye.onBeforeRender(X,fe,Re,ve,q,Pt),ye.transparent===!0&&ye.side===br&&ye.forceSinglePass===!1?(ye.side=rr,ye.needsUpdate=!0,X.renderBufferDirect(Re,fe,ve,ye,q,Pt),ye.side=gs,ye.needsUpdate=!0,X.renderBufferDirect(Re,fe,ve,ye,q,Pt),ye.side=br):X.renderBufferDirect(Re,fe,ve,ye,q,Pt),q.onAfterRender(X,fe,Re,ve,ye,Pt)}function Ks(q,fe,Re){fe.isScene!==!0&&(fe=be);const ve=Et.get(q),ye=P.state.lights,Pt=P.state.shadowsArray,qt=ye.state.version,Zt=Pe.getParameters(q,ye.state,Pt,fe,Re),ii=Pe.getProgramCacheKey(Zt);let li=ve.programs;ve.environment=q.isMeshStandardMaterial?fe.environment:null,ve.fog=fe.fog,ve.envMap=(q.isMeshStandardMaterial?Q:jt).get(q.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&q.envMap===null?fe.environmentRotation:q.envMapRotation,li===void 0&&(q.addEventListener("dispose",Rt),li=new Map,ve.programs=li);let ui=li.get(ii);if(ui!==void 0){if(ve.currentProgram===ui&&ve.lightsStateVersion===qt)return ic(q,Zt),ui}else Zt.uniforms=Pe.getUniforms(q),q.onBuild(Re,Zt,X),q.onBeforeCompile(Zt,X),ui=Pe.acquireProgram(Zt,ii),li.set(ii,ui),ve.uniforms=Zt.uniforms;const di=ve.uniforms;return(!q.isShaderMaterial&&!q.isRawShaderMaterial||q.clipping===!0)&&(di.clippingPlanes=it.uniform),ic(q,Zt),ve.needsLights=cl(q),ve.lightsStateVersion=qt,ve.needsLights&&(di.ambientLightColor.value=ye.state.ambient,di.lightProbe.value=ye.state.probe,di.directionalLights.value=ye.state.directional,di.directionalLightShadows.value=ye.state.directionalShadow,di.spotLights.value=ye.state.spot,di.spotLightShadows.value=ye.state.spotShadow,di.rectAreaLights.value=ye.state.rectArea,di.ltc_1.value=ye.state.rectAreaLTC1,di.ltc_2.value=ye.state.rectAreaLTC2,di.pointLights.value=ye.state.point,di.pointLightShadows.value=ye.state.pointShadow,di.hemisphereLights.value=ye.state.hemi,di.directionalShadowMap.value=ye.state.directionalShadowMap,di.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,di.spotShadowMap.value=ye.state.spotShadowMap,di.spotLightMatrix.value=ye.state.spotLightMatrix,di.spotLightMap.value=ye.state.spotLightMap,di.pointShadowMap.value=ye.state.pointShadowMap,di.pointShadowMatrix.value=ye.state.pointShadowMatrix),ve.currentProgram=ui,ve.uniformsList=null,ui}function tc(q){if(q.uniformsList===null){const fe=q.currentProgram.getUniforms();q.uniformsList=su.seqWithValue(fe.seq,q.uniforms)}return q.uniformsList}function ic(q,fe){const Re=Et.get(q);Re.outputColorSpace=fe.outputColorSpace,Re.batching=fe.batching,Re.instancing=fe.instancing,Re.instancingColor=fe.instancingColor,Re.instancingMorph=fe.instancingMorph,Re.skinning=fe.skinning,Re.morphTargets=fe.morphTargets,Re.morphNormals=fe.morphNormals,Re.morphColors=fe.morphColors,Re.morphTargetsCount=fe.morphTargetsCount,Re.numClippingPlanes=fe.numClippingPlanes,Re.numIntersection=fe.numClipIntersection,Re.vertexAlphas=fe.vertexAlphas,Re.vertexTangents=fe.vertexTangents,Re.toneMapping=fe.toneMapping}function Wn(q,fe,Re,ve,ye){fe.isScene!==!0&&(fe=be),Ct.resetTextureUnits();const Pt=fe.fog,qt=ve.isMeshStandardMaterial?fe.environment:null,Zt=ae===null?X.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:$s,ii=(ve.isMeshStandardMaterial?Q:jt).get(ve.envMap||qt),li=ve.vertexColors===!0&&!!Re.attributes.color&&Re.attributes.color.itemSize===4,ui=!!Re.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),di=!!Re.morphAttributes.position,nn=!!Re.morphAttributes.normal,mn=!!Re.morphAttributes.color;let Rn=qs;ve.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Rn=X.toneMapping);const ar=Re.morphAttributes.position||Re.morphAttributes.normal||Re.morphAttributes.color,Ni=ar!==void 0?ar.length:0,hi=Et.get(ve),Zr=P.state.lights;if(Fe===!0&&(yt===!0||q!==K)){const Pn=q===K&&ve.id===Ne;it.setState(ve,q,Pn)}let $i=!1;ve.version===hi.__version?(hi.needsLights&&hi.lightsStateVersion!==Zr.state.version||hi.outputColorSpace!==Zt||ye.isBatchedMesh&&hi.batching===!1||!ye.isBatchedMesh&&hi.batching===!0||ye.isInstancedMesh&&hi.instancing===!1||!ye.isInstancedMesh&&hi.instancing===!0||ye.isSkinnedMesh&&hi.skinning===!1||!ye.isSkinnedMesh&&hi.skinning===!0||ye.isInstancedMesh&&hi.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&hi.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&hi.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&hi.instancingMorph===!1&&ye.morphTexture!==null||hi.envMap!==ii||ve.fog===!0&&hi.fog!==Pt||hi.numClippingPlanes!==void 0&&(hi.numClippingPlanes!==it.numPlanes||hi.numIntersection!==it.numIntersection)||hi.vertexAlphas!==li||hi.vertexTangents!==ui||hi.morphTargets!==di||hi.morphNormals!==nn||hi.morphColors!==mn||hi.toneMapping!==Rn||hi.morphTargetsCount!==Ni)&&($i=!0):($i=!0,hi.__version=ve.version);let Ar=hi.currentProgram;$i===!0&&(Ar=Ks(ve,fe,ye));let ka=!1,$r=!1,Js=!1;const gn=Ar.getUniforms(),xr=hi.uniforms;if(_t.useProgram(Ar.program)&&(ka=!0,$r=!0,Js=!0),ve.id!==Ne&&(Ne=ve.id,$r=!0),ka||K!==q){gn.setValue(te,"projectionMatrix",q.projectionMatrix),gn.setValue(te,"viewMatrix",q.matrixWorldInverse);const Pn=gn.map.cameraPosition;Pn!==void 0&&Pn.setValue(te,oe.setFromMatrixPosition(q.matrixWorld)),zt.logarithmicDepthBuffer&&gn.setValue(te,"logDepthBufFC",2/(Math.log(q.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&gn.setValue(te,"isOrthographic",q.isOrthographicCamera===!0),K!==q&&(K=q,$r=!0,Js=!0)}if(ye.isSkinnedMesh){gn.setOptional(te,ye,"bindMatrix"),gn.setOptional(te,ye,"bindMatrixInverse");const Pn=ye.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),gn.setValue(te,"boneTexture",Pn.boneTexture,Ct))}ye.isBatchedMesh&&(gn.setOptional(te,ye,"batchingTexture"),gn.setValue(te,"batchingTexture",ye._matricesTexture,Ct));const js=Re.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&ze.update(ye,Re,Ar),($r||hi.receiveShadow!==ye.receiveShadow)&&(hi.receiveShadow=ye.receiveShadow,gn.setValue(te,"receiveShadow",ye.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(xr.envMap.value=ii,xr.flipEnvMap.value=ii.isCubeTexture&&ii.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&fe.environment!==null&&(xr.envMapIntensity.value=fe.environmentIntensity),$r&&(gn.setValue(te,"toneMappingExposure",X.toneMappingExposure),hi.needsLights&&ol(xr,Js),Pt&&ve.fog===!0&&Ve.refreshFogUniforms(xr,Pt),Ve.refreshMaterialUniforms(xr,ve,ht,gt,P.state.transmissionRenderTarget[q.id]),su.upload(te,tc(hi),xr,Ct)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(su.upload(te,tc(hi),xr,Ct),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&gn.setValue(te,"center",ye.center),gn.setValue(te,"modelViewMatrix",ye.modelViewMatrix),gn.setValue(te,"normalMatrix",ye.normalMatrix),gn.setValue(te,"modelMatrix",ye.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const Pn=ve.uniformsGroups;for(let Qs=0,nc=Pn.length;Qs<nc;Qs++){const Wa=Pn[Qs];ai.update(Wa,Ar),ai.bind(Wa,Ar)}}return Ar}function ol(q,fe){q.ambientLightColor.needsUpdate=fe,q.lightProbe.needsUpdate=fe,q.directionalLights.needsUpdate=fe,q.directionalLightShadows.needsUpdate=fe,q.pointLights.needsUpdate=fe,q.pointLightShadows.needsUpdate=fe,q.spotLights.needsUpdate=fe,q.spotLightShadows.needsUpdate=fe,q.rectAreaLights.needsUpdate=fe,q.hemisphereLights.needsUpdate=fe}function cl(q){return q.isMeshLambertMaterial||q.isMeshToonMaterial||q.isMeshPhongMaterial||q.isMeshStandardMaterial||q.isShadowMaterial||q.isShaderMaterial&&q.lights===!0}this.getActiveCubeFace=function(){return xe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(q,fe,Re){Et.get(q.texture).__webglTexture=fe,Et.get(q.depthTexture).__webglTexture=Re;const ve=Et.get(q);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=Re===void 0,ve.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(q,fe){const Re=Et.get(q);Re.__webglFramebuffer=fe,Re.__useDefaultFramebuffer=fe===void 0},this.setRenderTarget=function(q,fe=0,Re=0){ae=q,xe=fe,se=Re;let ve=!0,ye=null,Pt=!1,qt=!1;if(q){const ii=Et.get(q);ii.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(te.FRAMEBUFFER,null),ve=!1):ii.__webglFramebuffer===void 0?Ct.setupRenderTarget(q):ii.__hasExternalTextures&&Ct.rebindTextures(q,Et.get(q.texture).__webglTexture,Et.get(q.depthTexture).__webglTexture);const li=q.texture;(li.isData3DTexture||li.isDataArrayTexture||li.isCompressedArrayTexture)&&(qt=!0);const ui=Et.get(q).__webglFramebuffer;q.isWebGLCubeRenderTarget?(Array.isArray(ui[fe])?ye=ui[fe][Re]:ye=ui[fe],Pt=!0):q.samples>0&&Ct.useMultisampledRTT(q)===!1?ye=Et.get(q).__webglMultisampledFramebuffer:Array.isArray(ui)?ye=ui[Re]:ye=ui,H.copy(q.viewport),Me.copy(q.scissor),Ie=q.scissorTest}else H.copy(ft).multiplyScalar(ht).floor(),Me.copy(Kt).multiplyScalar(ht).floor(),Ie=vi;if(_t.bindFramebuffer(te.FRAMEBUFFER,ye)&&ve&&_t.drawBuffers(q,ye),_t.viewport(H),_t.scissor(Me),_t.setScissorTest(Ie),Pt){const ii=Et.get(q.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ii.__webglTexture,Re)}else if(qt){const ii=Et.get(q.texture),li=fe||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,ii.__webglTexture,Re||0,li)}Ne=-1},this.readRenderTargetPixels=function(q,fe,Re,ve,ye,Pt,qt){if(!(q&&q.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Et.get(q).__webglFramebuffer;if(q.isWebGLCubeRenderTarget&&qt!==void 0&&(Zt=Zt[qt]),Zt){_t.bindFramebuffer(te.FRAMEBUFFER,Zt);try{const ii=q.texture,li=ii.format,ui=ii.type;if(!zt.textureFormatReadable(li)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ui)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}fe>=0&&fe<=q.width-ve&&Re>=0&&Re<=q.height-ye&&te.readPixels(fe,Re,ve,ye,ut.convert(li),ut.convert(ui),Pt)}finally{const ii=ae!==null?Et.get(ae).__webglFramebuffer:null;_t.bindFramebuffer(te.FRAMEBUFFER,ii)}}},this.copyFramebufferToTexture=function(q,fe,Re=0){const ve=Math.pow(2,-Re),ye=Math.floor(fe.image.width*ve),Pt=Math.floor(fe.image.height*ve);Ct.setTexture2D(fe,0),te.copyTexSubImage2D(te.TEXTURE_2D,Re,0,0,q.x,q.y,ye,Pt),_t.unbindTexture()},this.copyTextureToTexture=function(q,fe,Re,ve=0){const ye=fe.image.width,Pt=fe.image.height,qt=ut.convert(Re.format),Zt=ut.convert(Re.type);Ct.setTexture2D(Re,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,Re.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Re.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,Re.unpackAlignment),fe.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ve,q.x,q.y,ye,Pt,qt,Zt,fe.image.data):fe.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ve,q.x,q.y,fe.mipmaps[0].width,fe.mipmaps[0].height,qt,fe.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,ve,q.x,q.y,qt,Zt,fe.image),ve===0&&Re.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(q,fe,Re,ve,ye=0){const Pt=q.max.x-q.min.x,qt=q.max.y-q.min.y,Zt=q.max.z-q.min.z,ii=ut.convert(ve.format),li=ut.convert(ve.type);let ui;if(ve.isData3DTexture)Ct.setTexture3D(ve,0),ui=te.TEXTURE_3D;else if(ve.isDataArrayTexture||ve.isCompressedArrayTexture)Ct.setTexture2DArray(ve,0),ui=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ve.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ve.unpackAlignment);const di=te.getParameter(te.UNPACK_ROW_LENGTH),nn=te.getParameter(te.UNPACK_IMAGE_HEIGHT),mn=te.getParameter(te.UNPACK_SKIP_PIXELS),Rn=te.getParameter(te.UNPACK_SKIP_ROWS),ar=te.getParameter(te.UNPACK_SKIP_IMAGES),Ni=Re.isCompressedTexture?Re.mipmaps[ye]:Re.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,Ni.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Ni.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,q.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,q.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,q.min.z),Re.isDataTexture||Re.isData3DTexture?te.texSubImage3D(ui,ye,fe.x,fe.y,fe.z,Pt,qt,Zt,ii,li,Ni.data):ve.isCompressedArrayTexture?te.compressedTexSubImage3D(ui,ye,fe.x,fe.y,fe.z,Pt,qt,Zt,ii,Ni.data):te.texSubImage3D(ui,ye,fe.x,fe.y,fe.z,Pt,qt,Zt,ii,li,Ni),te.pixelStorei(te.UNPACK_ROW_LENGTH,di),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,nn),te.pixelStorei(te.UNPACK_SKIP_PIXELS,mn),te.pixelStorei(te.UNPACK_SKIP_ROWS,Rn),te.pixelStorei(te.UNPACK_SKIP_IMAGES,ar),ye===0&&ve.generateMipmaps&&te.generateMipmap(ui),_t.unbindTexture()},this.initTexture=function(q){q.isCubeTexture?Ct.setTextureCube(q,0):q.isData3DTexture?Ct.setTexture3D(q,0):q.isDataArrayTexture||q.isCompressedArrayTexture?Ct.setTexture2DArray(q,0):Ct.setTexture2D(q,0),_t.unbindTexture()},this.resetState=function(){xe=0,se=0,ae=null,_t.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i;const s=this.getContext();s.drawingBufferColorSpace=i===Gf?"display-p3":"srgb",s.unpackColorSpace=Ki.workingColorSpace===pu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(i){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=i}}class T0 extends sr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(i,s){return super.copy(i,s),i.background!==null&&(this.background=i.background.clone()),i.environment!==null&&(this.environment=i.environment.clone()),i.fog!==null&&(this.fog=i.fog.clone()),this.backgroundBlurriness=i.backgroundBlurriness,this.backgroundIntensity=i.backgroundIntensity,this.backgroundRotation.copy(i.backgroundRotation),this.environmentIntensity=i.environmentIntensity,this.environmentRotation.copy(i.environmentRotation),i.overrideMaterial!==null&&(this.overrideMaterial=i.overrideMaterial.clone()),this.matrixAutoUpdate=i.matrixAutoUpdate,this}toJSON(i){const s=super.toJSON(i);return this.fog!==null&&(s.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(s.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(s.object.backgroundIntensity=this.backgroundIntensity),s.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(s.object.environmentIntensity=this.environmentIntensity),s.object.environmentRotation=this.environmentRotation.toArray(),s}}class W2 extends Hn{constructor(i,s,c,d,m,M,y,T,A){super(i,s,c,d,m,M,y,T,A),this.isVideoTexture=!0,this.minFilter=M!==void 0?M:gr,this.magFilter=m!==void 0?m:gr,this.generateMipmaps=!1;const R=this;function L(){R.needsUpdate=!0,i.requestVideoFrameCallback(L)}"requestVideoFrameCallback"in i&&i.requestVideoFrameCallback(L)}clone(){return new this.constructor(this.image).copy(this)}update(){const i=this.image;"requestVideoFrameCallback"in i===!1&&i.readyState>=i.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const A0={enabled:!1,files:{},add:function(u,i){this.enabled!==!1&&(this.files[u]=i)},get:function(u){if(this.enabled!==!1)return this.files[u]},remove:function(u){delete this.files[u]},clear:function(){this.files={}}};class X2{constructor(i,s,c){const d=this;let m=!1,M=0,y=0,T;const A=[];this.onStart=void 0,this.onLoad=i,this.onProgress=s,this.onError=c,this.itemStart=function(R){y++,m===!1&&d.onStart!==void 0&&d.onStart(R,M,y),m=!0},this.itemEnd=function(R){M++,d.onProgress!==void 0&&d.onProgress(R,M,y),M===y&&(m=!1,d.onLoad!==void 0&&d.onLoad())},this.itemError=function(R){d.onError!==void 0&&d.onError(R)},this.resolveURL=function(R){return T?T(R):R},this.setURLModifier=function(R){return T=R,this},this.addHandler=function(R,L){return A.push(R,L),this},this.removeHandler=function(R){const L=A.indexOf(R);return L!==-1&&A.splice(L,2),this},this.getHandler=function(R){for(let L=0,I=A.length;L<I;L+=2){const N=A[L],G=A[L+1];if(N.global&&(N.lastIndex=0),N.test(R))return G}return null}}}const q2=new X2;class Xf{constructor(i){this.manager=i!==void 0?i:q2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(i,s){const c=this;return new Promise(function(d,m){c.load(i,d,s,m)})}parse(){}setCrossOrigin(i){return this.crossOrigin=i,this}setWithCredentials(i){return this.withCredentials=i,this}setPath(i){return this.path=i,this}setResourcePath(i){return this.resourcePath=i,this}setRequestHeader(i){return this.requestHeader=i,this}}Xf.DEFAULT_MATERIAL_NAME="__DEFAULT";class Y2 extends Xf{constructor(i){super(i)}load(i,s,c,d){this.path!==void 0&&(i=this.path+i),i=this.manager.resolveURL(i);const m=this,M=A0.get(i);if(M!==void 0)return m.manager.itemStart(i),setTimeout(function(){s&&s(M),m.manager.itemEnd(i)},0),M;const y=tl("img");function T(){R(),A0.add(i,this),s&&s(this),m.manager.itemEnd(i)}function A(L){R(),d&&d(L),m.manager.itemError(i),m.manager.itemEnd(i)}function R(){y.removeEventListener("load",T,!1),y.removeEventListener("error",A,!1)}return y.addEventListener("load",T,!1),y.addEventListener("error",A,!1),i.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(y.crossOrigin=this.crossOrigin),m.manager.itemStart(i),y.src=i,y}}class ru extends Xf{constructor(i){super(i)}load(i,s,c,d){const m=new Hn,M=new Y2(this.manager);return M.setCrossOrigin(this.crossOrigin),M.setPath(this.path),M.load(i,function(y){m.image=y,m.needsUpdate=!0,s!==void 0&&s(m)},c,d),m}}class hx extends sr{constructor(i,s=1){super(),this.isLight=!0,this.type="Light",this.color=new Fi(i),this.intensity=s}dispose(){}copy(i,s){return super.copy(i,s),this.color.copy(i.color),this.intensity=i.intensity,this}toJSON(i){const s=super.toJSON(i);return s.object.color=this.color.getHex(),s.object.intensity=this.intensity,this.groundColor!==void 0&&(s.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(s.object.distance=this.distance),this.angle!==void 0&&(s.object.angle=this.angle),this.decay!==void 0&&(s.object.decay=this.decay),this.penumbra!==void 0&&(s.object.penumbra=this.penumbra),this.shadow!==void 0&&(s.object.shadow=this.shadow.toJSON()),s}}const Pf=new dn,w0=new _e,R0=new _e;class Z2{constructor(i){this.camera=i,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oi(512,512),this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new Oi(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(i){const s=this.camera,c=this.matrix;w0.setFromMatrixPosition(i.matrixWorld),s.position.copy(w0),R0.setFromMatrixPosition(i.target.matrixWorld),s.lookAt(R0),s.updateMatrixWorld(),Pf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf),c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),c.multiply(Pf)}getViewport(i){return this._viewports[i]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(i){return this.camera=i.camera.clone(),this.bias=i.bias,this.radius=i.radius,this.mapSize.copy(i.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const i={};return this.bias!==0&&(i.bias=this.bias),this.normalBias!==0&&(i.normalBias=this.normalBias),this.radius!==1&&(i.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(i.mapSize=this.mapSize.toArray()),i.camera=this.camera.toJSON(!1).object,delete i.camera.matrix,i}}const C0=new dn,jc=new _e,Lf=new _e;class $2 extends Z2{constructor(){super(new mr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oi(4,2),this._viewportCount=6,this._viewports=[new sn(2,1,1,1),new sn(0,1,1,1),new sn(3,1,1,1),new sn(1,1,1,1),new sn(3,0,1,1),new sn(1,0,1,1)],this._cubeDirections=[new _e(1,0,0),new _e(-1,0,0),new _e(0,0,1),new _e(0,0,-1),new _e(0,1,0),new _e(0,-1,0)],this._cubeUps=[new _e(0,1,0),new _e(0,1,0),new _e(0,1,0),new _e(0,1,0),new _e(0,0,1),new _e(0,0,-1)]}updateMatrices(i,s=0){const c=this.camera,d=this.matrix,m=i.distance||c.far;m!==c.far&&(c.far=m,c.updateProjectionMatrix()),jc.setFromMatrixPosition(i.matrixWorld),c.position.copy(jc),Lf.copy(c.position),Lf.add(this._cubeDirections[s]),c.up.copy(this._cubeUps[s]),c.lookAt(Lf),c.updateMatrixWorld(),d.makeTranslation(-jc.x,-jc.y,-jc.z),C0.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C0)}}class K2 extends hx{constructor(i,s,c=0,d=2){super(i,s),this.isPointLight=!0,this.type="PointLight",this.distance=c,this.decay=d,this.shadow=new $2}get power(){return this.intensity*4*Math.PI}set power(i){this.intensity=i/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(i,s){return super.copy(i,s),this.distance=i.distance,this.decay=i.decay,this.shadow=i.shadow.clone(),this}}class J2 extends hx{constructor(i,s){super(i,s),this.isAmbientLight=!0,this.type="AmbientLight"}}let j2=`
uniform vec3 uColor;
varying vec2 vUV;
uniform float timeanim;
float PI = 3.141;
// varying vec3 vPosition;

void main() {
  vec3 pos= position;
  vUV = (uv-vec2(0.5))*0.9 + vec2(0.5);
  pos.y += sin(PI*uv.x)*0.01;
  pos.z += sin(PI*uv.x)*0.02;
  pos.y += sin(timeanim*0.03)*0.02;
  vUV.y -= sin(timeanim*0.02)*0.02;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,Q2=`
uniform sampler2D textureimg;
varying vec2 vUV;
uniform float distancefromcent;
uniform float waveintensity;
uniform  float timeanim;
uniform float glitchIntensity;



void main() {
  vec2 uv = vUV;

  float wave1 = sin(uv.x * 10.0 + (timeanim) * 0.1 + 0.2 * 5.0) * waveintensity;
  float wave2 = sin(uv.y * 12.0 + (timeanim) * 0.5 + 0.2 * 4.0) * waveintensity;
  float wave3 = cos(uv.x * 8.0 + (timeanim) * 0.9+ 0.2 * 3.0) * waveintensity;
  float wave4 = cos(uv.y * 9.0 + (timeanim) * 0.9 + 0.2 * 3.5) * waveintensity;

  uv.y += wave1 + wave2;
  uv.x += wave3 + wave4;

  vec4 text = texture2D(textureimg,uv);
  float bw = (text.r + text.b + text.g )/3.;
  vec4 another = vec4(bw,bw,bw,1.);

  if (glitchIntensity > 0.0) {
    float segment = floor(uv.y * 12.0); 
    float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453); 
    vec2 offset = vec2(randomValue * 0.03, 0.0) * glitchIntensity;

    vec4 redGlitch = texture2D(textureimg, uv + offset);
    vec4 greenGlitch = texture2D(textureimg, uv - offset);
    vec4 blueGlitch = texture2D(textureimg, uv);
    if (mod(segment, 3.0) == 0.0) {
      gl_FragColor = vec4(redGlitch.r, greenGlitch.g, text.b, 1.0);
      } else if (mod(segment, 3.0) == 1.0) {
          gl_FragColor = vec4(text.r, greenGlitch.g, blueGlitch.b, 1.0);
      } else {
          gl_FragColor = vec4(redGlitch.r, text.g, blueGlitch.b, 1.0);
      }
    } else {
    gl_FragColor = mix(another,text,distancefromcent);; 
   }  
 
  gl_FragColor.a = clamp(distancefromcent,0.4,2.);
}`,eP=`

 

 
 varying vec2 vUv;
 
 void main() {
   vUv = uv;
   vec3 pos= position;
  //  float wave  = sin(pos.y * 3);
  //  pos.z += wave ;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }
 
 `,tP=`
 uniform sampler2D textureSampler;
 uniform float glitchIntensity;
 varying vec2 vUv;
 
 void main() {
  
  vec2 uv = vUv;
  vec4 baseState = texture2D(textureSampler, uv);

  if (glitchIntensity > 0.0) {
    float segment = floor(uv.y * 12.0); 
    float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453); 
    vec2 offset = vec2(randomValue * 0.03, 0.0) * glitchIntensity;

    vec4 redGlitch = texture2D(textureSampler, uv + offset);
    vec4 greenGlitch = texture2D(textureSampler, uv - offset);
    vec4 blueGlitch = texture2D(textureSampler, uv);

    if (mod(segment, 3.0) == 0.0) {
        gl_FragColor = vec4(redGlitch.r, greenGlitch.g, baseState.b, 1.0);
    } else if (mod(segment, 3.0) == 1.0) {
        gl_FragColor = vec4(baseState.r, greenGlitch.g, blueGlitch.b, 1.0);
    } else {
        gl_FragColor = vec4(redGlitch.r, baseState.g, blueGlitch.b, 1.0);
    }
} else {
    gl_FragColor = baseState; 
}


 }`,P0=`
// Varyings
varying vec2 vUv;

// Uniforms: Common
uniform float uOpacity;
uniform float uThreshold;
uniform float uAlphaTest;
uniform vec3 uColor;
uniform sampler2D uMap;

uniform bool ustroke;

// Uniforms: Strokes
uniform vec3 uStrokeColor;
uniform float uStrokeOutsetWidth;
uniform float uStrokeInsetWidth;

// Utils: Median
float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
}

void main() {
    // Common
    // Texture sample
    vec3 s = texture2D(uMap, vUv).rgb;

    // Signed distance
    float sigDist = median(s.r, s.g, s.b) - 0.5;

    float afwidth = 1.4142135623730951 / 2.0;

    #ifdef IS_SMALL
        float alpha = smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDist);
    #else
        float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
    #endif

    // Strokes
    // Outset
    float sigDistOutset = sigDist + uStrokeOutsetWidth * 0.5;

    // Inset
    float sigDistInset = sigDist - uStrokeInsetWidth * 0.5;

    #ifdef IS_SMALL
        float outset = smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDistOutset);
        float inset = 1.0 - smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDistInset);
    #else
        float outset = clamp(sigDistOutset / fwidth(sigDistOutset) + 0.5, 0.0, 1.0);
        float inset = 1.0 - clamp(sigDistInset / fwidth(sigDistInset) + 0.5, 0.0, 1.0);
    #endif

    // Border
    float border = outset * inset;

    // Alpha Test
    if (alpha < uAlphaTest) discard;

    vec4 strokedFragColor = vec4(uStrokeColor, uOpacity * border);
    vec4 filledFragColor = vec4(uColor, uOpacity * alpha);
    if (ustroke == true){
        
        gl_FragColor = strokedFragColor;

    }else{
       
        gl_FragColor = filledFragColor;
    }

    // Output: Common


    // Output: Strokes
    

   

   
}
`,L0=`
 uniform float uSpeed;
 mat4 rotationMatrix(vec3 axis, float angle) {
     axis = normalize(axis);
     float s = sin(angle);
     float c = cos(angle);
     float oc = 1.0 - c;
     
     return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                 oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                 oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                 0.0,                                0.0,                                0.0,                                1.0);
 }
 
 vec3 rotate(vec3 v, vec3 axis, float angle) {
     mat4 m = rotationMatrix(axis, angle);
     return (m * vec4(v, 1.0)).xyz;
 }
     // Attribute
     attribute vec2 layoutUv;

     attribute float lineIndex;

     attribute float lineLettersTotal;
     attribute float lineLetterIndex;

     attribute float lineWordsTotal;
     attribute float lineWordIndex;

     attribute float wordIndex;

     attribute float letterIndex;

     // Varyings
     varying vec2 vUv;
     varying vec2 vLayoutUv;
     varying vec3 vViewPosition;
     varying vec3 vNormal;

     varying float vLineIndex;

     varying float vLineLettersTotal;
     varying float vLineLetterIndex;

     varying float vLineWordsTotal;
     varying float vLineWordIndex;

     varying float vWordIndex;

     varying float vLetterIndex;

     void main() {
     
         // Varyings
         vUv = uv;
         vLayoutUv = layoutUv;
         
         vNormal = normal;

         vLineIndex = lineIndex;

         vLineLettersTotal = lineLettersTotal;
         vLineLetterIndex = lineLetterIndex;

         vLineWordsTotal = lineWordsTotal;
         vLineWordIndex = lineWordIndex;

         vWordIndex = wordIndex;

         vLetterIndex = letterIndex;

         // Output
         vec3 newpos = position;
         float xx = position.x*0.01;
         newpos = rotate(newpos,vec3(0.0,0.0,1.0),xx*uSpeed);

         vec4 mvPosition = vec4(newpos, 1.0);
         mvPosition = modelViewMatrix * mvPosition;
         gl_Position = projectionMatrix * mvPosition;
         
         vViewPosition = -mvPosition.xyz;
     }
 `;const iP=["roboto-regular.png"],nP=[{id:40,index:12,char:"(",width:25,height:87,xoffset:3,yoffset:-2,xadvance:27,chnl:15,x:0,y:0,page:0},{id:41,index:13,char:")",width:25,height:87,xoffset:-1,yoffset:-2,xadvance:28,chnl:15,x:0,y:88,page:0},{id:91,index:63,char:"[",width:19,height:81,xoffset:4,yoffset:-3,xadvance:21,chnl:15,x:0,y:176,page:0},{id:93,index:65,char:"]",width:19,height:81,xoffset:-2,yoffset:-3,xadvance:21,chnl:15,x:0,y:258,page:0},{id:123,index:95,char:"{",width:28,height:81,xoffset:1,yoffset:0,xadvance:27,chnl:15,x:0,y:340,page:0},{id:125,index:97,char:"}",width:28,height:81,xoffset:-1,yoffset:0,xadvance:27,chnl:15,x:0,y:422,page:0},{id:106,index:78,char:"j",width:20,height:79,xoffset:-5,yoffset:4,xadvance:19,chnl:15,x:20,y:176,page:0},{id:36,index:8,char:"$",width:40,height:78,xoffset:2,yoffset:-4,xadvance:45,chnl:15,x:20,y:256,page:0},{id:64,index:36,char:"@",width:67,height:78,xoffset:3,yoffset:6,xadvance:72,chnl:15,x:26,y:0,page:0},{id:81,index:53,char:"Q",width:50,height:71,xoffset:2,yoffset:4,xadvance:55,chnl:15,x:26,y:79,page:0},{id:87,index:59,char:"W",width:71,height:61,xoffset:0,yoffset:5,xadvance:71,chnl:15,x:41,y:151,page:0},{id:124,index:96,char:"|",width:10,height:71,xoffset:5,yoffset:5,xadvance:19,chnl:15,x:77,y:79,page:0},{id:92,index:64,char:"\\",width:35,height:66,xoffset:0,yoffset:5,xadvance:33,chnl:15,x:88,y:79,page:0},{id:47,index:19,char:"/",width:34,height:66,xoffset:-1,yoffset:5,xadvance:33,chnl:15,x:94,y:0,page:0},{id:162,index:100,char:"¢",width:40,height:65,xoffset:2,yoffset:11,xadvance:44,chnl:15,x:29,y:335,page:0},{id:98,index:70,char:"b",width:40,height:65,xoffset:3,yoffset:2,xadvance:45,chnl:15,x:29,y:401,page:0},{id:100,index:72,char:"d",width:40,height:65,xoffset:2,yoffset:2,xadvance:45,chnl:15,x:61,y:213,page:0},{id:102,index:74,char:"f",width:30,height:65,xoffset:0,yoffset:1,xadvance:28,chnl:15,x:70,y:279,page:0},{id:103,index:75,char:"g",width:40,height:64,xoffset:2,yoffset:19,xadvance:45,chnl:15,x:70,y:345,page:0},{id:104,index:76,char:"h",width:37,height:64,xoffset:3,yoffset:2,xadvance:44,chnl:15,x:101,y:279,page:0},{id:107,index:79,char:"k",width:39,height:64,xoffset:4,yoffset:2,xadvance:41,chnl:15,x:102,y:213,page:0},{id:108,index:80,char:"l",width:11,height:64,xoffset:4,yoffset:2,xadvance:19,chnl:15,x:113,y:146,page:0},{id:37,index:9,char:"%",width:55,height:63,xoffset:2,yoffset:4,xadvance:59,chnl:15,x:124,y:67,page:0},{id:109,index:81,char:"m",width:63,height:47,xoffset:3,yoffset:19,xadvance:70,chnl:15,x:129,y:0,page:0},{id:112,index:84,char:"p",width:40,height:63,xoffset:3,yoffset:19,xadvance:45,chnl:15,x:125,y:131,page:0},{id:113,index:85,char:"q",width:40,height:63,xoffset:2,yoffset:19,xadvance:45,chnl:15,x:70,y:410,page:0},{id:121,index:93,char:"y",width:40,height:63,xoffset:-1,yoffset:20,xadvance:38,chnl:15,x:111,y:344,page:0},{id:163,index:101,char:"£",width:45,height:62,xoffset:2,yoffset:4,xadvance:46,chnl:15,x:139,y:278,page:0},{id:38,index:10,char:"&",width:50,height:62,xoffset:2,yoffset:4,xadvance:50,chnl:15,x:142,y:195,page:0},{id:48,index:20,char:"0",width:40,height:62,xoffset:2,yoffset:4,xadvance:45,chnl:15,x:166,y:131,page:0},{id:50,index:22,char:"2",width:42,height:62,xoffset:2,yoffset:4,xadvance:45,chnl:15,x:180,y:48,page:0},{id:51,index:23,char:"3",width:40,height:62,xoffset:2,yoffset:4,xadvance:45,chnl:15,x:111,y:408,page:0},{id:53,index:25,char:"5",width:40,height:62,xoffset:4,yoffset:5,xadvance:45,chnl:15,x:152,y:341,page:0},{id:54,index:26,char:"6",width:40,height:62,xoffset:3,yoffset:5,xadvance:45,chnl:15,x:185,y:258,page:0},{id:56,index:28,char:"8",width:40,height:62,xoffset:2,yoffset:4,xadvance:45,chnl:15,x:193,y:194,page:0},{id:57,index:29,char:"9",width:40,height:62,xoffset:2,yoffset:4,xadvance:45,chnl:15,x:207,y:111,page:0},{id:63,index:35,char:"?",width:36,height:62,xoffset:1,yoffset:4,xadvance:38,chnl:15,x:152,y:404,page:0},{id:67,index:39,char:"C",width:48,height:62,xoffset:3,yoffset:4,xadvance:52,chnl:15,x:189,y:404,page:0},{id:71,index:43,char:"G",width:48,height:62,xoffset:3,yoffset:4,xadvance:54,chnl:15,x:193,y:321,page:0},{id:74,index:46,char:"J",width:40,height:62,xoffset:0,yoffset:5,xadvance:44,chnl:15,x:226,y:257,page:0},{id:79,index:51,char:"O",width:50,height:62,xoffset:3,yoffset:4,xadvance:55,chnl:15,x:234,y:174,page:0},{id:83,index:55,char:"S",width:45,height:62,xoffset:1,yoffset:4,xadvance:47,chnl:15,x:223,y:0,page:0},{id:85,index:57,char:"U",width:45,height:62,xoffset:3,yoffset:5,xadvance:52,chnl:15,x:248,y:63,page:0},{id:105,index:77,char:"i",width:13,height:62,xoffset:4,yoffset:4,xadvance:19,chnl:15,x:269,y:0,page:0},{id:165,index:103,char:"¥",width:45,height:61,xoffset:-1,yoffset:5,xadvance:42,chnl:15,x:283,y:0,page:0},{id:161,index:99,char:"¡",width:13,height:61,xoffset:3,yoffset:19,xadvance:19,chnl:15,x:238,y:384,page:0},{id:33,index:5,char:"!",width:13,height:61,xoffset:4,yoffset:5,xadvance:21,chnl:15,x:242,y:320,page:0},{id:35,index:7,char:"#",width:48,height:61,xoffset:3,yoffset:5,xadvance:49,chnl:15,x:238,y:446,page:0},{id:49,index:21,char:"1",width:26,height:61,xoffset:5,yoffset:5,xadvance:45,chnl:15,x:252,y:382,page:0},{id:52,index:24,char:"4",width:45,height:61,xoffset:0,yoffset:5,xadvance:45,chnl:15,x:256,y:320,page:0},{id:55,index:27,char:"7",width:42,height:61,xoffset:1,yoffset:5,xadvance:45,chnl:15,x:279,y:382,page:0},{id:65,index:37,char:"A",width:54,height:61,xoffset:-1,yoffset:5,xadvance:52,chnl:15,x:287,y:444,page:0},{id:66,index:38,char:"B",width:43,height:61,xoffset:5,yoffset:5,xadvance:50,chnl:15,x:267,y:237,page:0},{id:68,index:40,char:"D",width:45,height:61,xoffset:5,yoffset:5,xadvance:52,chnl:15,x:302,y:299,page:0},{id:69,index:41,char:"E",width:40,height:61,xoffset:5,yoffset:5,xadvance:45,chnl:15,x:322,y:361,page:0},{id:70,index:42,char:"F",width:39,height:61,xoffset:5,yoffset:5,xadvance:44,chnl:15,x:342,y:423,page:0},{id:72,index:44,char:"H",width:48,height:61,xoffset:5,yoffset:5,xadvance:57,chnl:15,x:285,y:126,page:0},{id:73,index:45,char:"I",width:12,height:61,xoffset:5,yoffset:5,xadvance:22,chnl:15,x:294,y:62,page:0},{id:75,index:47,char:"K",width:48,height:61,xoffset:5,yoffset:5,xadvance:50,chnl:15,x:307,y:62,page:0},{id:76,index:48,char:"L",width:38,height:61,xoffset:5,yoffset:5,xadvance:43,chnl:15,x:329,y:0,page:0},{id:77,index:49,char:"M",width:61,height:61,xoffset:5,yoffset:5,xadvance:70,chnl:15,x:311,y:188,page:0},{id:78,index:50,char:"N",width:48,height:61,xoffset:5,yoffset:5,xadvance:57,chnl:15,x:334,y:124,page:0},{id:80,index:52,char:"P",width:45,height:61,xoffset:5,yoffset:5,xadvance:50,chnl:15,x:356,y:62,page:0},{id:82,index:54,char:"R",width:45,height:61,xoffset:5,yoffset:5,xadvance:49,chnl:15,x:368,y:0,page:0},{id:84,index:56,char:"T",width:48,height:61,xoffset:0,yoffset:5,xadvance:48,chnl:15,x:348,y:250,page:0},{id:86,index:58,char:"V",width:53,height:61,xoffset:-1,yoffset:5,xadvance:51,chnl:15,x:373,y:186,page:0},{id:88,index:60,char:"X",width:50,height:61,xoffset:0,yoffset:5,xadvance:50,chnl:15,x:383,y:124,page:0},{id:89,index:61,char:"Y",width:51,height:61,xoffset:-1,yoffset:5,xadvance:48,chnl:15,x:402,y:62,page:0},{id:90,index:62,char:"Z",width:45,height:61,xoffset:1,yoffset:5,xadvance:48,chnl:15,x:414,y:0,page:0},{id:119,index:91,char:"w",width:61,height:46,xoffset:0,yoffset:20,xadvance:60,chnl:15,x:348,y:312,page:0},{id:59,index:31,char:";",width:16,height:58,xoffset:0,yoffset:19,xadvance:17,chnl:15,x:363,y:359,page:0},{id:116,index:88,char:"t",width:27,height:57,xoffset:-2,yoffset:10,xadvance:26,chnl:15,x:397,y:248,page:0},{id:164,index:102,char:"¤",width:53,height:54,xoffset:2,yoffset:13,xadvance:57,chnl:15,x:454,y:62,page:0},{id:97,index:69,char:"a",width:39,height:48,xoffset:2,yoffset:19,xadvance:44,chnl:15,x:460,y:0,page:0},{id:99,index:71,char:"c",width:40,height:48,xoffset:2,yoffset:19,xadvance:42,chnl:15,x:380,y:359,page:0},{id:101,index:73,char:"e",width:40,height:48,xoffset:2,yoffset:19,xadvance:42,chnl:15,x:410,y:306,page:0},{id:111,index:83,char:"o",width:42,height:48,xoffset:2,yoffset:19,xadvance:46,chnl:15,x:425,y:248,page:0},{id:115,index:87,char:"s",width:38,height:48,xoffset:2,yoffset:19,xadvance:41,chnl:15,x:468,y:117,page:0},{id:126,index:98,char:"~",width:48,height:20,xoffset:3,yoffset:31,xadvance:54,chnl:15,x:342,y:485,page:0},{id:58,index:30,char:":",width:13,height:47,xoffset:3,yoffset:19,xadvance:19,chnl:15,x:193,y:0,page:0},{id:110,index:82,char:"n",width:37,height:47,xoffset:3,yoffset:19,xadvance:44,chnl:15,x:468,y:166,page:0},{id:114,index:86,char:"r",width:24,height:47,xoffset:3,yoffset:19,xadvance:27,chnl:15,x:223,y:63,page:0},{id:117,index:89,char:"u",width:37,height:47,xoffset:3,yoffset:20,xadvance:44,chnl:15,x:427,y:186,page:0},{id:118,index:90,char:"v",width:40,height:46,xoffset:-1,yoffset:20,xadvance:39,chnl:15,x:468,y:214,page:0},{id:120,index:92,char:"x",width:40,height:46,xoffset:0,yoffset:20,xadvance:40,chnl:15,x:468,y:261,page:0},{id:122,index:94,char:"z",width:38,height:46,xoffset:1,yoffset:20,xadvance:40,chnl:15,x:451,y:308,page:0},{id:43,index:15,char:"+",width:43,height:45,xoffset:1,yoffset:15,xadvance:45,chnl:15,x:152,y:467,page:0},{id:95,index:67,char:"_",width:40,height:10,xoffset:-2,yoffset:62,xadvance:36,chnl:15,x:29,y:467,page:0},{id:60,index:32,char:"<",width:36,height:39,xoffset:1,yoffset:19,xadvance:41,chnl:15,x:248,y:126,page:0},{id:62,index:34,char:">",width:37,height:39,xoffset:3,yoffset:19,xadvance:42,chnl:15,x:111,y:471,page:0},{id:42,index:14,char:"*",width:36,height:37,xoffset:-1,yoffset:5,xadvance:34,chnl:15,x:311,y:250,page:0},{id:61,index:33,char:"=",width:37,height:27,xoffset:4,yoffset:24,xadvance:44,chnl:15,x:70,y:474,page:0},{id:171,index:109,char:"«",width:34,height:35,xoffset:2,yoffset:25,xadvance:38,chnl:15,x:196,y:467,page:0},{id:94,index:66,char:"^",width:32,height:32,xoffset:1,yoffset:5,xadvance:33,chnl:15,x:434,y:124,page:0},{id:44,index:16,char:",",width:15,height:24,xoffset:-1,yoffset:53,xadvance:16,chnl:15,x:207,y:0,page:0},{id:34,index:6,char:'"',width:20,height:23,xoffset:3,yoffset:2,xadvance:26,chnl:15,x:490,y:308,page:0},{id:39,index:11,char:"'",width:10,height:23,xoffset:2,yoffset:2,xadvance:14,chnl:15,x:26,y:151,page:0},{id:45,index:17,char:"-",width:23,height:10,xoffset:-1,yoffset:35,xadvance:22,chnl:15,x:311,y:288,page:0},{id:96,index:68,char:"`",width:20,height:15,xoffset:0,yoffset:2,xadvance:25,chnl:15,x:490,y:332,page:0},{id:46,index:18,char:".",width:13,height:13,xoffset:4,yoffset:54,xadvance:21,chnl:15,x:427,y:234,page:0},{id:32,index:4,char:" ",width:0,height:0,xoffset:-2,yoffset:62,xadvance:20,chnl:15,x:124,y:131,page:0}],rP={face:"Roboto-Regular",size:80,bold:0,italic:0,charset:["«","¢","£","¤","¥","¡","!","\\",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"," "],unicode:1,stretchH:100,smooth:1,aa:1,padding:[2,2,2,2],spacing:[0,0]},sP={lineHeight:84,base:62,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},aP={fieldType:"msdf",distanceRange:4},oP=[{first:34,second:34,amount:-4},{first:34,second:39,amount:-4},{first:34,second:65,amount:-5},{first:34,second:97,amount:-2},{first:34,second:99,amount:-2},{first:34,second:100,amount:-2},{first:34,second:101,amount:-2},{first:34,second:103,amount:-2},{first:34,second:109,amount:-1},{first:34,second:110,amount:-1},{first:34,second:111,amount:-2},{first:34,second:112,amount:-1},{first:34,second:113,amount:-2},{first:34,second:115,amount:-3},{first:34,second:119,amount:0},{first:39,second:34,amount:-4},{first:39,second:39,amount:-4},{first:39,second:65,amount:-5},{first:39,second:97,amount:-2},{first:39,second:99,amount:-2},{first:39,second:100,amount:-2},{first:39,second:101,amount:-2},{first:39,second:103,amount:-2},{first:39,second:109,amount:-1},{first:39,second:110,amount:-1},{first:39,second:111,amount:-2},{first:39,second:112,amount:-1},{first:39,second:113,amount:-2},{first:39,second:115,amount:-3},{first:39,second:119,amount:0},{first:40,second:86,amount:1},{first:40,second:87,amount:1},{first:40,second:89,amount:1},{first:44,second:34,amount:-7},{first:44,second:39,amount:-7},{first:46,second:34,amount:-7},{first:46,second:39,amount:-7},{first:47,second:47,amount:-9},{first:65,second:34,amount:-5},{first:65,second:39,amount:-5},{first:65,second:63,amount:-2},{first:65,second:67,amount:0},{first:65,second:71,amount:0},{first:65,second:79,amount:0},{first:65,second:81,amount:0},{first:65,second:84,amount:-5},{first:65,second:85,amount:-1},{first:65,second:86,amount:-3},{first:65,second:87,amount:-3},{first:65,second:89,amount:-4},{first:65,second:111,amount:0},{first:65,second:116,amount:-1},{first:65,second:117,amount:0},{first:65,second:118,amount:-2},{first:65,second:119,amount:-1},{first:65,second:121,amount:-2},{first:65,second:122,amount:0},{first:66,second:84,amount:-1},{first:66,second:86,amount:-1},{first:66,second:89,amount:-2},{first:67,second:41,amount:-1},{first:67,second:84,amount:-1},{first:67,second:93,amount:0},{first:67,second:125,amount:-1},{first:68,second:44,amount:-4},{first:68,second:46,amount:-4},{first:68,second:65,amount:-1},{first:68,second:84,amount:-1},{first:68,second:86,amount:-1},{first:68,second:88,amount:-1},{first:68,second:89,amount:-2},{first:68,second:90,amount:-1},{first:69,second:84,amount:1},{first:69,second:99,amount:-1},{first:69,second:100,amount:-1},{first:69,second:101,amount:-1},{first:69,second:102,amount:-1},{first:69,second:103,amount:-1},{first:69,second:111,amount:-1},{first:69,second:113,amount:-1},{first:69,second:117,amount:-1},{first:69,second:118,amount:-1},{first:69,second:119,amount:-1},{first:69,second:121,amount:-1},{first:70,second:44,amount:-9},{first:70,second:46,amount:-9},{first:70,second:65,amount:-7},{first:70,second:74,amount:-10},{first:70,second:84,amount:1},{first:70,second:97,amount:-1},{first:70,second:99,amount:-1},{first:70,second:100,amount:-1},{first:70,second:101,amount:-1},{first:70,second:103,amount:-1},{first:70,second:111,amount:-1},{first:70,second:113,amount:-1},{first:70,second:114,amount:-1},{first:70,second:117,amount:-1},{first:70,second:118,amount:-1},{first:70,second:121,amount:-1},{first:72,second:65,amount:1},{first:72,second:84,amount:-1},{first:72,second:88,amount:1},{first:72,second:89,amount:-1},{first:73,second:65,amount:1},{first:73,second:84,amount:-1},{first:73,second:88,amount:1},{first:73,second:89,amount:-1},{first:74,second:65,amount:-1},{first:75,second:45,amount:-2},{first:75,second:67,amount:-1},{first:75,second:71,amount:-1},{first:75,second:79,amount:-1},{first:75,second:81,amount:-1},{first:75,second:99,amount:-1},{first:75,second:100,amount:-1},{first:75,second:101,amount:-1},{first:75,second:103,amount:-1},{first:75,second:109,amount:-1},{first:75,second:110,amount:-1},{first:75,second:111,amount:-1},{first:75,second:112,amount:-1},{first:75,second:113,amount:-1},{first:75,second:117,amount:-1},{first:75,second:118,amount:-2},{first:75,second:119,amount:-2},{first:75,second:121,amount:-2},{first:76,second:34,amount:-13},{first:76,second:39,amount:-13},{first:76,second:65,amount:1},{first:76,second:67,amount:-3},{first:76,second:71,amount:-3},{first:76,second:79,amount:-3},{first:76,second:81,amount:-3},{first:76,second:84,amount:-11},{first:76,second:85,amount:-2},{first:76,second:86,amount:-7},{first:76,second:87,amount:-6},{first:76,second:89,amount:-9},{first:76,second:117,amount:-2},{first:76,second:118,amount:-5},{first:76,second:119,amount:-4},{first:76,second:121,amount:-5},{first:77,second:65,amount:1},{first:77,second:84,amount:-1},{first:77,second:88,amount:1},{first:77,second:89,amount:-1},{first:78,second:65,amount:1},{first:78,second:84,amount:-1},{first:78,second:88,amount:1},{first:78,second:89,amount:-1},{first:79,second:44,amount:-4},{first:79,second:46,amount:-4},{first:79,second:65,amount:-1},{first:79,second:84,amount:-1},{first:79,second:86,amount:-1},{first:79,second:88,amount:-1},{first:79,second:89,amount:-2},{first:79,second:90,amount:-1},{first:80,second:44,amount:-13},{first:80,second:46,amount:-13},{first:80,second:65,amount:-5},{first:80,second:74,amount:-8},{first:80,second:88,amount:-1},{first:80,second:90,amount:-1},{first:80,second:97,amount:0},{first:80,second:99,amount:-1},{first:80,second:100,amount:-1},{first:80,second:101,amount:-1},{first:80,second:103,amount:-1},{first:80,second:111,amount:-1},{first:80,second:113,amount:-1},{first:80,second:116,amount:1},{first:80,second:118,amount:1},{first:80,second:121,amount:1},{first:81,second:84,amount:-2},{first:81,second:86,amount:-1},{first:81,second:87,amount:-1},{first:81,second:89,amount:-1},{first:82,second:84,amount:-3},{first:82,second:86,amount:-1},{first:82,second:89,amount:-2},{first:84,second:171,amount:-13},{first:84,second:44,amount:-9},{first:84,second:45,amount:-9},{first:84,second:46,amount:-9},{first:84,second:65,amount:-3},{first:84,second:67,amount:-1},{first:84,second:71,amount:-1},{first:84,second:74,amount:-9},{first:84,second:79,amount:-1},{first:84,second:81,amount:-1},{first:84,second:83,amount:-1},{first:84,second:84,amount:1},{first:84,second:86,amount:1},{first:84,second:87,amount:1},{first:84,second:89,amount:1},{first:84,second:97,amount:-4},{first:84,second:99,amount:-4},{first:84,second:100,amount:-4},{first:84,second:101,amount:-4},{first:84,second:103,amount:-4},{first:84,second:109,amount:-4},{first:84,second:110,amount:-4},{first:84,second:111,amount:-4},{first:84,second:112,amount:-4},{first:84,second:113,amount:-4},{first:84,second:114,amount:-3},{first:84,second:115,amount:-5},{first:84,second:117,amount:-4},{first:84,second:118,amount:-3},{first:84,second:119,amount:-2},{first:84,second:120,amount:-3},{first:84,second:121,amount:-3},{first:84,second:122,amount:-2},{first:84,second:32,amount:-2},{first:85,second:65,amount:-1},{first:86,second:41,amount:1},{first:86,second:44,amount:-9},{first:86,second:45,amount:-1},{first:86,second:46,amount:-9},{first:86,second:65,amount:-3},{first:86,second:67,amount:-1},{first:86,second:71,amount:-1},{first:86,second:79,amount:-1},{first:86,second:81,amount:-1},{first:86,second:93,amount:1},{first:86,second:97,amount:-2},{first:86,second:99,amount:-2},{first:86,second:100,amount:-2},{first:86,second:101,amount:-2},{first:86,second:103,amount:-2},{first:86,second:111,amount:-2},{first:86,second:113,amount:-2},{first:86,second:114,amount:-1},{first:86,second:117,amount:-1},{first:86,second:118,amount:0},{first:86,second:121,amount:0},{first:86,second:125,amount:1},{first:87,second:41,amount:1},{first:87,second:44,amount:-5},{first:87,second:45,amount:-2},{first:87,second:46,amount:-5},{first:87,second:65,amount:-2},{first:87,second:84,amount:1},{first:87,second:93,amount:0},{first:87,second:97,amount:-1},{first:87,second:99,amount:-1},{first:87,second:100,amount:-1},{first:87,second:101,amount:-1},{first:87,second:103,amount:-1},{first:87,second:111,amount:-1},{first:87,second:113,amount:-1},{first:87,second:114,amount:-1},{first:87,second:117,amount:-1},{first:87,second:125,amount:1},{first:88,second:45,amount:-2},{first:88,second:67,amount:-1},{first:88,second:71,amount:-1},{first:88,second:79,amount:-1},{first:88,second:81,amount:-1},{first:88,second:86,amount:1},{first:88,second:99,amount:-1},{first:88,second:100,amount:-1},{first:88,second:101,amount:-1},{first:88,second:103,amount:-1},{first:88,second:111,amount:-1},{first:88,second:113,amount:-1},{first:88,second:117,amount:-1},{first:88,second:118,amount:-1},{first:88,second:121,amount:-1},{first:89,second:171,amount:-3},{first:89,second:38,amount:-1},{first:89,second:41,amount:1},{first:89,second:42,amount:-2},{first:89,second:44,amount:-8},{first:89,second:45,amount:-2},{first:89,second:46,amount:-8},{first:89,second:65,amount:-4},{first:89,second:67,amount:-1},{first:89,second:71,amount:-1},{first:89,second:74,amount:-4},{first:89,second:79,amount:-1},{first:89,second:81,amount:-1},{first:89,second:83,amount:-1},{first:89,second:84,amount:1},{first:89,second:85,amount:-4},{first:89,second:86,amount:1},{first:89,second:87,amount:1},{first:89,second:88,amount:1},{first:89,second:89,amount:1},{first:89,second:93,amount:1},{first:89,second:97,amount:-3},{first:89,second:99,amount:-3},{first:89,second:100,amount:-3},{first:89,second:101,amount:-3},{first:89,second:102,amount:-1},{first:89,second:103,amount:-3},{first:89,second:109,amount:-2},{first:89,second:110,amount:-2},{first:89,second:111,amount:-3},{first:89,second:112,amount:-2},{first:89,second:113,amount:-3},{first:89,second:114,amount:-2},{first:89,second:115,amount:-2},{first:89,second:116,amount:-1},{first:89,second:117,amount:-2},{first:89,second:118,amount:-1},{first:89,second:120,amount:-1},{first:89,second:121,amount:-1},{first:89,second:122,amount:-1},{first:89,second:125,amount:1},{first:90,second:65,amount:1},{first:90,second:67,amount:-1},{first:90,second:71,amount:-1},{first:90,second:79,amount:-1},{first:90,second:81,amount:-1},{first:90,second:99,amount:-1},{first:90,second:100,amount:-1},{first:90,second:101,amount:-1},{first:90,second:103,amount:-1},{first:90,second:111,amount:-1},{first:90,second:113,amount:-1},{first:90,second:117,amount:-1},{first:90,second:118,amount:-1},{first:90,second:119,amount:-1},{first:90,second:121,amount:-1},{first:91,second:74,amount:-1},{first:91,second:85,amount:-1},{first:97,second:34,amount:-3},{first:97,second:39,amount:-3},{first:97,second:118,amount:-1},{first:97,second:121,amount:-1},{first:98,second:34,amount:-1},{first:98,second:39,amount:-1},{first:98,second:118,amount:0},{first:98,second:120,amount:-1},{first:98,second:121,amount:0},{first:98,second:122,amount:-1},{first:99,second:34,amount:0},{first:99,second:39,amount:0},{first:101,second:34,amount:-1},{first:101,second:39,amount:-1},{first:101,second:118,amount:-1},{first:101,second:121,amount:-1},{first:102,second:34,amount:1},{first:102,second:39,amount:1},{first:102,second:41,amount:1},{first:102,second:93,amount:1},{first:102,second:99,amount:-1},{first:102,second:100,amount:-1},{first:102,second:101,amount:-1},{first:102,second:103,amount:-1},{first:102,second:113,amount:-1},{first:102,second:125,amount:1},{first:104,second:34,amount:-4},{first:104,second:39,amount:-4},{first:107,second:99,amount:-1},{first:107,second:100,amount:-1},{first:107,second:101,amount:-1},{first:107,second:103,amount:-1},{first:107,second:113,amount:-1},{first:109,second:34,amount:-4},{first:109,second:39,amount:-4},{first:110,second:34,amount:-4},{first:110,second:39,amount:-4},{first:111,second:34,amount:-5},{first:111,second:39,amount:-5},{first:111,second:118,amount:-1},{first:111,second:120,amount:-1},{first:111,second:121,amount:-1},{first:111,second:122,amount:-1},{first:112,second:34,amount:-1},{first:112,second:39,amount:-1},{first:112,second:118,amount:0},{first:112,second:120,amount:-1},{first:112,second:121,amount:0},{first:112,second:122,amount:-1},{first:114,second:34,amount:1},{first:114,second:39,amount:1},{first:114,second:44,amount:-5},{first:114,second:46,amount:-5},{first:114,second:97,amount:-2},{first:114,second:99,amount:-1},{first:114,second:100,amount:-1},{first:114,second:101,amount:-1},{first:114,second:102,amount:1},{first:114,second:103,amount:-1},{first:114,second:111,amount:-1},{first:114,second:113,amount:-1},{first:114,second:116,amount:2},{first:114,second:118,amount:1},{first:114,second:119,amount:1},{first:114,second:121,amount:1},{first:116,second:111,amount:-1},{first:118,second:34,amount:1},{first:118,second:39,amount:1},{first:118,second:44,amount:-4},{first:118,second:46,amount:-4},{first:118,second:97,amount:-1},{first:118,second:99,amount:-1},{first:118,second:100,amount:-1},{first:118,second:101,amount:-1},{first:118,second:102,amount:1},{first:118,second:103,amount:-1},{first:118,second:111,amount:-1},{first:118,second:113,amount:-1},{first:119,second:44,amount:-5},{first:119,second:46,amount:-5},{first:120,second:99,amount:-1},{first:120,second:100,amount:-1},{first:120,second:101,amount:-1},{first:120,second:103,amount:-1},{first:120,second:111,amount:-1},{first:120,second:113,amount:-1},{first:121,second:34,amount:1},{first:121,second:39,amount:1},{first:121,second:44,amount:-4},{first:121,second:46,amount:-4},{first:121,second:97,amount:-1},{first:121,second:99,amount:-1},{first:121,second:100,amount:-1},{first:121,second:101,amount:-1},{first:121,second:102,amount:1},{first:121,second:103,amount:-1},{first:121,second:111,amount:-1},{first:121,second:113,amount:-1},{first:122,second:99,amount:-1},{first:122,second:100,amount:-1},{first:122,second:101,amount:-1},{first:122,second:103,amount:-1},{first:122,second:111,amount:-1},{first:122,second:113,amount:-1},{first:123,second:74,amount:-1},{first:123,second:85,amount:-1},{first:32,second:84,amount:-2}],cP={pages:iP,chars:nP,info:rP,common:sP,distanceField:aP,kernings:oP},lP="/assets/roboto-regular-UGOCllx3.png";var ux=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hP={exports:{}};(function(u,i){(function(s,c){u.exports=c()})(ux,function(){var s=0;function c(W){return"__private_"+s+++"_"+W}function d(W,P){if(!Object.prototype.hasOwnProperty.call(W,P))throw new TypeError("attempted to use private field on non-instance");return W}function m(){}m.prototype={on:function(W,P,C){var $=this.e||(this.e={});return($[W]||($[W]=[])).push({fn:P,ctx:C}),this},once:function(W,P,C){var $=this;function X(){$.off(W,X),P.apply(C,arguments)}return X._=P,this.on(W,X,C)},emit:function(W){for(var P=[].slice.call(arguments,1),C=((this.e||(this.e={}))[W]||[]).slice(),$=0,X=C.length;$<X;$++)C[$].fn.apply(C[$].ctx,P);return this},off:function(W,P){var C=this.e||(this.e={}),$=C[W],X=[];if($&&P)for(var ee=0,xe=$.length;ee<xe;ee++)$[ee].fn!==P&&$[ee].fn._!==P&&X.push($[ee]);return X.length?C[W]=X:delete C[W],this}};var M=m;M.TinyEmitter=m;var y,T="virtualscroll",A=c("options"),R=c("el"),L=c("emitter"),I=c("event"),N=c("touchStart"),G=c("bodyTouchAction");return function(){function W(C){var $=this;Object.defineProperty(this,A,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,G,{writable:!0,value:void 0}),this._onWheel=function(X){var ee=d($,A)[A],xe=d($,I)[I];xe.deltaX=X.wheelDeltaX||-1*X.deltaX,xe.deltaY=X.wheelDeltaY||-1*X.deltaY,y.isFirefox&&X.deltaMode===1&&(xe.deltaX*=ee.firefoxMultiplier,xe.deltaY*=ee.firefoxMultiplier),xe.deltaX*=ee.mouseMultiplier,xe.deltaY*=ee.mouseMultiplier,$._notify(X)},this._onMouseWheel=function(X){var ee=d($,I)[I];ee.deltaX=X.wheelDeltaX?X.wheelDeltaX:0,ee.deltaY=X.wheelDeltaY?X.wheelDeltaY:X.wheelDelta,$._notify(X)},this._onTouchStart=function(X){var ee=X.targetTouches?X.targetTouches[0]:X;d($,N)[N].x=ee.pageX,d($,N)[N].y=ee.pageY},this._onTouchMove=function(X){var ee=d($,A)[A];ee.preventTouch&&!X.target.classList.contains(ee.unpreventTouchClass)&&X.preventDefault();var xe=d($,I)[I],se=X.targetTouches?X.targetTouches[0]:X;xe.deltaX=(se.pageX-d($,N)[N].x)*ee.touchMultiplier,xe.deltaY=(se.pageY-d($,N)[N].y)*ee.touchMultiplier,d($,N)[N].x=se.pageX,d($,N)[N].y=se.pageY,$._notify(X)},this._onKeyDown=function(X){var ee=d($,I)[I];ee.deltaX=ee.deltaY=0;var xe=window.innerHeight-40;switch(X.keyCode){case 37:case 38:ee.deltaY=d($,A)[A].keyStep;break;case 39:case 40:ee.deltaY=-d($,A)[A].keyStep;break;case 32:ee.deltaY=xe*(X.shiftKey?1:-1);break;default:return}$._notify(X)},d(this,R)[R]=window,C&&C.el&&(d(this,R)[R]=C.el,delete C.el),y||(y={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),d(this,A)[A]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},C),d(this,L)[L]=new M,d(this,I)[I]={y:0,x:0,deltaX:0,deltaY:0},d(this,N)[N]={x:null,y:null},d(this,G)[G]=null,d(this,A)[A].passive!==void 0&&(this.listenerOptions={passive:d(this,A)[A].passive})}var P=W.prototype;return P._notify=function(C){var $=d(this,I)[I];$.x+=$.deltaX,$.y+=$.deltaY,d(this,L)[L].emit(T,{x:$.x,y:$.y,deltaX:$.deltaX,deltaY:$.deltaY,originalEvent:C})},P._bind=function(){y.hasWheelEvent&&d(this,R)[R].addEventListener("wheel",this._onWheel,this.listenerOptions),y.hasMouseWheelEvent&&d(this,R)[R].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),y.hasTouch&&d(this,A)[A].useTouch&&(d(this,R)[R].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),d(this,R)[R].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),y.hasPointer&&y.hasTouchWin&&(d(this,G)[G]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",d(this,R)[R].addEventListener("MSPointerDown",this._onTouchStart,!0),d(this,R)[R].addEventListener("MSPointerMove",this._onTouchMove,!0)),y.hasKeyDown&&d(this,A)[A].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},P._unbind=function(){y.hasWheelEvent&&d(this,R)[R].removeEventListener("wheel",this._onWheel),y.hasMouseWheelEvent&&d(this,R)[R].removeEventListener("mousewheel",this._onMouseWheel),y.hasTouch&&(d(this,R)[R].removeEventListener("touchstart",this._onTouchStart),d(this,R)[R].removeEventListener("touchmove",this._onTouchMove)),y.hasPointer&&y.hasTouchWin&&(document.body.style.msTouchAction=d(this,G)[G],d(this,R)[R].removeEventListener("MSPointerDown",this._onTouchStart,!0),d(this,R)[R].removeEventListener("MSPointerMove",this._onTouchMove,!0)),y.hasKeyDown&&d(this,A)[A].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},P.on=function(C,$){d(this,L)[L].on(T,C,$);var X=d(this,L)[L].e;X&&X[T]&&X[T].length===1&&this._bind()},P.off=function(C,$){d(this,L)[L].off(T,C,$);var X=d(this,L)[L].e;(!X[T]||X[T].length<=0)&&this._unbind()},P.destroy=function(){d(this,L)[L].off(),this._unbind()},W}()})})(hP);var Vf={exports:{}},U={};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var I0;function uP(){if(I0)return U;I0=1;const u="164",i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c=0,d=1,m=2,M=3,y=0,T=1,A=2,R=3,L=0,I=1,N=2,G=0,W=1,P=2,C=3,$=4,X=5,ee=100,xe=101,se=102,ae=103,Ne=104,K=200,H=201,Me=202,Ie=203,he=204,qe=205,Xe=206,gt=207,ht=208,De=209,vt=210,ft=211,Kt=212,vi=213,Hi=214,Fe=0,yt=1,kt=2,oe=3,be=4,we=5,te=6,tt=7,Je=0,zt=1,_t=2,at=0,Et=1,Ct=2,jt=3,Q=4,z=5,pe=6,Ae=7,Pe="attached",Ve="detached",ot=300,st=301,it=302,pt=303,Ye=304,ze=306,Ut=1e3,mt=1001,ut=1002,Vt=1003,ai=1004,Ji=1004,si=1005,le=1005,Ge=1006,Oe=1007,Rt=1007,At=1008,Ui=1008,Li=1009,Qi=1010,Mn=1011,Bi=1012,jn=1013,an=1014,kn=1015,xs=1016,Ha=1017,vs=1018,Yr=1020,Ks=35902,tc=1021,ic=1022,Wn=1023,ol=1024,cl=1025,q=1026,fe=1027,Re=1028,ve=1029,ye=1030,Pt=1031,qt=1033,Zt=33776,ii=33777,li=33778,ui=33779,di=35840,nn=35841,mn=35842,Rn=35843,ar=36196,Ni=37492,hi=37496,Zr=37808,$i=37809,Ar=37810,ka=37811,$r=37812,Js=37813,gn=37814,xr=37815,js=37816,Pn=37817,Qs=37818,nc=37819,Wa=37820,_u=37821,ll=36492,xu=36494,vu=36495,qf=36283,yu=36284,Mu=36285,Su=36286,Yf=2200,Zf=2201,$f=2202,rc=2300,sc=2301,hl=2302,ea=2400,ta=2401,ac=2402,ul=2500,bu=2501,dx=0,fx=1,px=2,Kf=3200,Jf=3201,ys=0,jf=1,Kr="",vr="srgb",Jr="srgb-linear",dl="display-p3",oc="display-p3-linear",cc="linear",ji="srgb",lc="rec709",hc="p3",mx=0,ia=7680,gx=7681,_x=7682,xx=7683,vx=34055,yx=34056,Mx=5386,Sx=512,bx=513,Ex=514,Tx=515,Ax=516,wx=517,Rx=518,Eu=519,Qf=512,ep=513,tp=514,Tu=515,ip=516,np=517,rp=518,sp=519,uc=35044,Cx=35048,Px=35040,Lx=35045,Ix=35049,Dx=35041,Ux=35046,Nx=35050,Fx=35042,Ox="100",Au="300 es",Br=2e3,dc=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ap=1234567;const na=Math.PI/180,Xa=180/Math.PI;function or(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function cn(o,e,t){return Math.max(e,Math.min(t,o))}function wu(o,e){return(o%e+e)%e}function Bx(o,e,t,n,r){return n+(o-e)*(r-n)/(t-e)}function zx(o,e,t){return o!==e?(t-o)/(e-o):0}function fc(o,e,t){return(1-t)*o+t*e}function Vx(o,e,t,n){return fc(o,e,1-Math.exp(-t*n))}function Gx(o,e=1){return e-Math.abs(wu(o,e*2)-e)}function Hx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function kx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Wx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Xx(o,e){return o+Math.random()*(e-o)}function qx(o){return o*(.5-Math.random())}function Yx(o){o!==void 0&&(ap=o);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zx(o){return o*na}function $x(o){return o*Xa}function Kx(o){return(o&o-1)===0&&o!==0}function Jx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function jx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Qx(o,e,t,n,r){const a=Math.cos,l=Math.sin,h=a(t/2),f=l(t/2),p=a((e+n)/2),g=l((e+n)/2),_=a((e-n)/2),x=l((e-n)/2),v=a((n-e)/2),b=l((n-e)/2);switch(r){case"XYX":o.set(h*g,f*_,f*x,h*p);break;case"YZY":o.set(f*x,h*g,f*_,h*p);break;case"ZXZ":o.set(f*_,f*x,h*g,h*p);break;case"XZX":o.set(h*g,f*b,f*v,h*p);break;case"YXY":o.set(f*v,h*g,f*b,h*p);break;case"ZYZ":o.set(f*b,f*v,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ev={DEG2RAD:na,RAD2DEG:Xa,generateUUID:or,clamp:cn,euclideanModulo:wu,mapLinear:Bx,inverseLerp:zx,lerp:fc,damp:Vx,pingpong:Gx,smoothstep:Hx,smootherstep:kx,randInt:Wx,randFloat:Xx,randFloatSpread:qx,seededRandom:Yx,degToRad:Zx,radToDeg:$x,isPowerOfTwo:Kx,ceilPowerOfTwo:Jx,floorPowerOfTwo:jx,setQuaternionFromProperEuler:Qx,normalize:fi,denormalize:Xn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(e,t,n,r,a,l,h,f,p){pi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,h,f,p)}set(e,t,n,r,a,l,h,f,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=t,g[4]=a,g[5]=f,g[6]=n,g[7]=l,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],h=n[3],f=n[6],p=n[1],g=n[4],_=n[7],x=n[2],v=n[5],b=n[8],w=r[0],E=r[3],S=r[6],F=r[1],D=r[4],O=r[7],ne=r[2],Z=r[5],j=r[8];return a[0]=l*w+h*F+f*ne,a[3]=l*E+h*D+f*Z,a[6]=l*S+h*O+f*j,a[1]=p*w+g*F+_*ne,a[4]=p*E+g*D+_*Z,a[7]=p*S+g*O+_*j,a[2]=x*w+v*F+b*ne,a[5]=x*E+v*D+b*Z,a[8]=x*S+v*O+b*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*l*g-t*h*p-n*a*g+n*h*f+r*a*p-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=g*l-h*p,x=h*f-g*a,v=p*a-l*f,b=t*_+n*x+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(r*p-g*n)*w,e[2]=(h*n-r*l)*w,e[3]=x*w,e[4]=(g*t-r*f)*w,e[5]=(r*a-h*t)*w,e[6]=v*w,e[7]=(n*f-p*t)*w,e[8]=(l*t-n*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,h){const f=Math.cos(a),p=Math.sin(a);return this.set(n*f,n*p,-n*(f*l+p*h)+l+e,-r*p,r*f,-r*(-p*l+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new pi;function op(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}const tv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function qa(o,e){return new tv[o](e)}function pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cp(){const o=pc("canvas");return o.style.display="block",o}const lp={};function hp(o){o in lp||(lp[o]=!0,console.warn(o))}const up=new pi().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dp=new pi().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Jr]:{transfer:cc,primaries:lc,toReference:o=>o,fromReference:o=>o},[vr]:{transfer:ji,primaries:lc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[oc]:{transfer:cc,primaries:hc,toReference:o=>o.applyMatrix3(dp),fromReference:o=>o.applyMatrix3(up)},[dl]:{transfer:ji,primaries:hc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(dp),fromReference:o=>o.applyMatrix3(up).convertLinearToSRGB()}},iv=new Set([Jr,oc]),Wi={enabled:!0,_workingColorSpace:Jr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!iv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=fl[e].toReference,r=fl[t].fromReference;return r(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return fl[o].primaries},getTransfer:function(o){return o===Kr?cc:fl[o].transfer}};function Ya(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Za;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Za===void 0&&(Za=pc("canvas")),Za.width=e.width,Za.height=e.height;const n=Za.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Za}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Ya(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ya(t[n]/255)*255):t[n]=Ya(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nv=0;class ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?a.push(Pu(r[l].image)):a.push(Pu(r[l]))}else a=Pu(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Pu(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class ln extends jr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=mt,r=mt,a=Ge,l=At,h=Wn,f=Li,p=ln.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=or(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ot)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ut:e.x=e.x-Math.floor(e.x);break;case mt:e.x=e.x<0?0:1;break;case ut:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ut:e.y=e.y-Math.floor(e.y);break;case mt:e.y=e.y<0?0:1;break;case ut:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null,ln.DEFAULT_MAPPING=ot,ln.DEFAULT_ANISOTROPY=1;class Xi{constructor(e=0,t=0,n=0,r=1){Xi.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,p=f[0],g=f[4],_=f[8],x=f[1],v=f[5],b=f[9],w=f[2],E=f[6],S=f[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(b-E)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(b+E)<.1&&Math.abs(p+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,O=(v+1)/2,ne=(S+1)/2,Z=(g+x)/4,j=(_+w)/4,re=(b+E)/4;return D>O&&D>ne?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=Z/n,a=j/n):O>ne?O<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(O),n=Z/r,a=re/r):ne<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(ne),n=j/a,r=re/a),this.set(n,r,a,t),this}let F=Math.sqrt((E-b)*(E-b)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(E-b)/F,this.y=(_-w)/F,this.z=(x-g)/F,this.w=Math.acos((p+v+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends jr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xi(0,0,e,t),this.scissorTest=!1,this.viewport=new Xi(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pl extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sv extends wr{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new pl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Lu extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class av extends wr{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Lu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,h){let f=n[r+0],p=n[r+1],g=n[r+2],_=n[r+3];const x=a[l+0],v=a[l+1],b=a[l+2],w=a[l+3];if(h===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=v,e[t+2]=b,e[t+3]=w;return}if(_!==w||f!==x||p!==v||g!==b){let E=1-h;const S=f*x+p*v+g*b+_*w,F=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const ne=Math.sqrt(D),Z=Math.atan2(ne,S*F);E=Math.sin(E*Z)/ne,h=Math.sin(h*Z)/ne}const O=h*F;if(f=f*E+x*O,p=p*E+v*O,g=g*E+b*O,_=_*E+w*O,E===1-h){const ne=1/Math.sqrt(f*f+p*p+g*g+_*_);f*=ne,p*=ne,g*=ne,_*=ne}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,l){const h=n[r],f=n[r+1],p=n[r+2],g=n[r+3],_=a[l],x=a[l+1],v=a[l+2],b=a[l+3];return e[t]=h*b+g*_+f*v-p*x,e[t+1]=f*b+g*x+p*_-h*v,e[t+2]=p*b+g*v+h*x-f*_,e[t+3]=g*b-h*_-f*x-p*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,h=Math.cos,f=Math.sin,p=h(n/2),g=h(r/2),_=h(a/2),x=f(n/2),v=f(r/2),b=f(a/2);switch(l){case"XYZ":this._x=x*g*_+p*v*b,this._y=p*v*_-x*g*b,this._z=p*g*b+x*v*_,this._w=p*g*_-x*v*b;break;case"YXZ":this._x=x*g*_+p*v*b,this._y=p*v*_-x*g*b,this._z=p*g*b-x*v*_,this._w=p*g*_+x*v*b;break;case"ZXY":this._x=x*g*_-p*v*b,this._y=p*v*_+x*g*b,this._z=p*g*b+x*v*_,this._w=p*g*_-x*v*b;break;case"ZYX":this._x=x*g*_-p*v*b,this._y=p*v*_+x*g*b,this._z=p*g*b-x*v*_,this._w=p*g*_+x*v*b;break;case"YZX":this._x=x*g*_+p*v*b,this._y=p*v*_+x*g*b,this._z=p*g*b-x*v*_,this._w=p*g*_-x*v*b;break;case"XZY":this._x=x*g*_-p*v*b,this._y=p*v*_-x*g*b,this._z=p*g*b+x*v*_,this._w=p*g*_+x*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],h=t[5],f=t[9],p=t[2],g=t[6],_=t[10],x=n+h+_;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(g-f)*v,this._y=(a-p)*v,this._z=(l-r)*v}else if(n>h&&n>_){const v=2*Math.sqrt(1+n-h-_);this._w=(g-f)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+p)/v}else if(h>_){const v=2*Math.sqrt(1+h-n-_);this._w=(a-p)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(f+g)/v}else{const v=2*Math.sqrt(1+_-n-h);this._w=(l-r)/v,this._x=(a+p)/v,this._y=(f+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=n*g+l*h+r*p-a*f,this._y=r*g+l*f+a*h-n*p,this._z=a*g+l*p+n*f-r*h,this._w=l*g-n*h-r*f-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let h=l*e._w+n*e._x+r*e._y+a*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const f=1-h*h;if(f<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const p=Math.sqrt(f),g=Math.atan2(p,h),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=l*_+this._w*x,this._x=n*_+this._x*x,this._y=r*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,h=e.z,f=e.w,p=2*(l*r-h*n),g=2*(h*t-a*r),_=2*(a*n-l*t);return this.x=t+f*p+l*_-h*g,this.y=n+f*g+h*p-a*_,this.z=r+f*_+a*g-l*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,h=t.y,f=t.z;return this.x=r*f-a*h,this.y=a*l-n*f,this.z=n*h-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new J,mp=new Qn;class qn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)e.isMesh===!0?e.getVertexPosition(l,Rr):Rr.fromBufferAttribute(a,l),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mc),gl.subVectors(this.max,mc),$a.subVectors(e.a,mc),Ka.subVectors(e.b,mc),Ja.subVectors(e.c,mc),Ms.subVectors(Ka,$a),Ss.subVectors(Ja,Ka),sa.subVectors($a,Ja);let t=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-sa.z,sa.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,sa.z,0,-sa.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-sa.y,sa.x,0];return!Du(t,$a,Ka,Ja,gl)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,$a,Ka,Ja,gl))?!1:(_l.crossVectors(Ms,Ss),t=[_l.x,_l.y,_l.z],Du(t,$a,Ka,Ja,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qr=[new J,new J,new J,new J,new J,new J,new J,new J],Rr=new J,ml=new qn,$a=new J,Ka=new J,Ja=new J,Ms=new J,Ss=new J,sa=new J,mc=new J,gl=new J,_l=new J,aa=new J;function Du(o,e,t,n,r){for(let a=0,l=o.length-3;a<=l;a+=3){aa.fromArray(o,a);const h=r.x*Math.abs(aa.x)+r.y*Math.abs(aa.y)+r.z*Math.abs(aa.z),f=e.dot(aa),p=t.dot(aa),g=n.dot(aa);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const ov=new qn,gc=new J,Uu=new J;class In{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ov.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gc.subVectors(e,this.center);const t=gc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(gc,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gc.copy(e.center).add(Uu)),this.expandByPoint(gc.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const es=new J,Nu=new J,xl=new J,bs=new J,Fu=new J,vl=new J,Ou=new J;class ja{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nu.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Nu);const a=e.distanceTo(t)*.5,l=-this.direction.dot(xl),h=bs.dot(this.direction),f=-bs.dot(xl),p=bs.lengthSq(),g=Math.abs(1-l*l);let _,x,v,b;if(g>0)if(_=l*f-h,x=l*h-f,b=a*g,_>=0)if(x>=-b)if(x<=b){const w=1/g;_*=w,x*=w,v=_*(_+l*x+2*h)+x*(l*_+x+2*f)+p}else x=a,_=Math.max(0,-(l*x+h)),v=-_*_+x*(x+2*f)+p;else x=-a,_=Math.max(0,-(l*x+h)),v=-_*_+x*(x+2*f)+p;else x<=-b?(_=Math.max(0,-(-l*a+h)),x=_>0?-a:Math.min(Math.max(-a,-f),a),v=-_*_+x*(x+2*f)+p):x<=b?(_=0,x=Math.min(Math.max(-a,-f),a),v=x*(x+2*f)+p):(_=Math.max(0,-(l*a+h)),x=_>0?a:Math.min(Math.max(-a,-f),a),v=-_*_+x*(x+2*f)+p);else x=l>0?-a:a,_=Math.max(0,-(l*x+h)),v=-_*_+x*(x+2*f)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Nu).addScaledVector(xl,x),v}intersectSphere(e,t){es.subVectors(e.center,this.origin);const n=es.dot(this.direction),r=es.dot(es)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),h=n-l,f=n+l;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,h,f;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,r=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,r=(e.min.x-x.x)*p),g>=0?(a=(e.min.y-x.y)*g,l=(e.max.y-x.y)*g):(a=(e.max.y-x.y)*g,l=(e.min.y-x.y)*g),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),_>=0?(h=(e.min.z-x.z)*_,f=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,f=(e.min.z-x.z)*_),n>f||h>r)||((h>n||n!==n)&&(n=h),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,n,r,a){Fu.subVectors(t,e),vl.subVectors(n,e),Ou.crossVectors(Fu,vl);let l=this.direction.dot(Ou),h;if(l>0){if(r)return null;h=1}else if(l<0)h=-1,l=-l;else return null;bs.subVectors(this.origin,e);const f=h*this.direction.dot(vl.crossVectors(bs,vl));if(f<0)return null;const p=h*this.direction.dot(Fu.cross(bs));if(p<0||f+p>l)return null;const g=-h*bs.dot(Ou);return g<0?null:this.at(g/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri{constructor(e,t,n,r,a,l,h,f,p,g,_,x,v,b,w,E){ri.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,h,f,p,g,_,x,v,b,w,E)}set(e,t,n,r,a,l,h,f,p,g,_,x,v,b,w,E){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=r,S[1]=a,S[5]=l,S[9]=h,S[13]=f,S[2]=p,S[6]=g,S[10]=_,S[14]=x,S[3]=v,S[7]=b,S[11]=w,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ri().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qa.setFromMatrixColumn(e,0).length(),a=1/Qa.setFromMatrixColumn(e,1).length(),l=1/Qa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),h=Math.sin(n),f=Math.cos(r),p=Math.sin(r),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=l*g,v=l*_,b=h*g,w=h*_;t[0]=f*g,t[4]=-f*_,t[8]=p,t[1]=v+b*p,t[5]=x-w*p,t[9]=-h*f,t[2]=w-x*p,t[6]=b+v*p,t[10]=l*f}else if(e.order==="YXZ"){const x=f*g,v=f*_,b=p*g,w=p*_;t[0]=x+w*h,t[4]=b*h-v,t[8]=l*p,t[1]=l*_,t[5]=l*g,t[9]=-h,t[2]=v*h-b,t[6]=w+x*h,t[10]=l*f}else if(e.order==="ZXY"){const x=f*g,v=f*_,b=p*g,w=p*_;t[0]=x-w*h,t[4]=-l*_,t[8]=b+v*h,t[1]=v+b*h,t[5]=l*g,t[9]=w-x*h,t[2]=-l*p,t[6]=h,t[10]=l*f}else if(e.order==="ZYX"){const x=l*g,v=l*_,b=h*g,w=h*_;t[0]=f*g,t[4]=b*p-v,t[8]=x*p+w,t[1]=f*_,t[5]=w*p+x,t[9]=v*p-b,t[2]=-p,t[6]=h*f,t[10]=l*f}else if(e.order==="YZX"){const x=l*f,v=l*p,b=h*f,w=h*p;t[0]=f*g,t[4]=w-x*_,t[8]=b*_+v,t[1]=_,t[5]=l*g,t[9]=-h*g,t[2]=-p*g,t[6]=v*_+b,t[10]=x-w*_}else if(e.order==="XZY"){const x=l*f,v=l*p,b=h*f,w=h*p;t[0]=f*g,t[4]=-_,t[8]=p*g,t[1]=x*_+w,t[5]=l*g,t[9]=v*_-b,t[2]=b*_-v,t[6]=h*g,t[10]=w*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,lv)}lookAt(e,t,n){const r=this.elements;return cr.subVectors(e,t),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),Es.crossVectors(n,cr),Es.lengthSq()===0&&(Math.abs(n.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),Es.crossVectors(n,cr)),Es.normalize(),yl.crossVectors(cr,Es),r[0]=Es.x,r[4]=yl.x,r[8]=cr.x,r[1]=Es.y,r[5]=yl.y,r[9]=cr.y,r[2]=Es.z,r[6]=yl.z,r[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],h=n[4],f=n[8],p=n[12],g=n[1],_=n[5],x=n[9],v=n[13],b=n[2],w=n[6],E=n[10],S=n[14],F=n[3],D=n[7],O=n[11],ne=n[15],Z=r[0],j=r[4],re=r[8],k=r[12],B=r[1],ue=r[5],Le=r[9],ce=r[13],Be=r[2],He=r[6],nt=r[10],dt=r[14],Ue=r[3],Mt=r[7],xt=r[11],Wt=r[15];return a[0]=l*Z+h*B+f*Be+p*Ue,a[4]=l*j+h*ue+f*He+p*Mt,a[8]=l*re+h*Le+f*nt+p*xt,a[12]=l*k+h*ce+f*dt+p*Wt,a[1]=g*Z+_*B+x*Be+v*Ue,a[5]=g*j+_*ue+x*He+v*Mt,a[9]=g*re+_*Le+x*nt+v*xt,a[13]=g*k+_*ce+x*dt+v*Wt,a[2]=b*Z+w*B+E*Be+S*Ue,a[6]=b*j+w*ue+E*He+S*Mt,a[10]=b*re+w*Le+E*nt+S*xt,a[14]=b*k+w*ce+E*dt+S*Wt,a[3]=F*Z+D*B+O*Be+ne*Ue,a[7]=F*j+D*ue+O*He+ne*Mt,a[11]=F*re+D*Le+O*nt+ne*xt,a[15]=F*k+D*ce+O*dt+ne*Wt,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],h=e[5],f=e[9],p=e[13],g=e[2],_=e[6],x=e[10],v=e[14],b=e[3],w=e[7],E=e[11],S=e[15];return b*(+a*f*_-r*p*_-a*h*x+n*p*x+r*h*v-n*f*v)+w*(+t*f*v-t*p*x+a*l*x-r*l*v+r*p*g-a*f*g)+E*(+t*p*_-t*h*v-a*l*_+n*l*v+a*h*g-n*p*g)+S*(-r*h*g-t*f*_+t*h*x+r*l*_-n*l*x+n*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=e[9],x=e[10],v=e[11],b=e[12],w=e[13],E=e[14],S=e[15],F=_*E*p-w*x*p+w*f*v-h*E*v-_*f*S+h*x*S,D=b*x*p-g*E*p-b*f*v+l*E*v+g*f*S-l*x*S,O=g*w*p-b*_*p+b*h*v-l*w*v-g*h*S+l*_*S,ne=b*_*f-g*w*f-b*h*x+l*w*x+g*h*E-l*_*E,Z=t*F+n*D+r*O+a*ne;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/Z;return e[0]=F*j,e[1]=(w*x*a-_*E*a-w*r*v+n*E*v+_*r*S-n*x*S)*j,e[2]=(h*E*a-w*f*a+w*r*p-n*E*p-h*r*S+n*f*S)*j,e[3]=(_*f*a-h*x*a-_*r*p+n*x*p+h*r*v-n*f*v)*j,e[4]=D*j,e[5]=(g*E*a-b*x*a+b*r*v-t*E*v-g*r*S+t*x*S)*j,e[6]=(b*f*a-l*E*a-b*r*p+t*E*p+l*r*S-t*f*S)*j,e[7]=(l*x*a-g*f*a+g*r*p-t*x*p-l*r*v+t*f*v)*j,e[8]=O*j,e[9]=(b*_*a-g*w*a-b*n*v+t*w*v+g*n*S-t*_*S)*j,e[10]=(l*w*a-b*h*a+b*n*p-t*w*p-l*n*S+t*h*S)*j,e[11]=(g*h*a-l*_*a-g*n*p+t*_*p+l*n*v-t*h*v)*j,e[12]=ne*j,e[13]=(g*w*r-b*_*r+b*n*x-t*w*x-g*n*E+t*_*E)*j,e[14]=(b*h*r-l*w*r-b*n*f+t*w*f+l*n*E-t*h*E)*j,e[15]=(l*_*r-g*h*r+g*n*f-t*_*f-l*n*x+t*h*x)*j,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,h=e.y,f=e.z,p=a*l,g=a*h;return this.set(p*l+n,p*h-r*f,p*f+r*h,0,p*h+r*f,g*h+n,g*f-r*l,0,p*f-r*h,g*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,h=t._z,f=t._w,p=a+a,g=l+l,_=h+h,x=a*p,v=a*g,b=a*_,w=l*g,E=l*_,S=h*_,F=f*p,D=f*g,O=f*_,ne=n.x,Z=n.y,j=n.z;return r[0]=(1-(w+S))*ne,r[1]=(v+O)*ne,r[2]=(b-D)*ne,r[3]=0,r[4]=(v-O)*Z,r[5]=(1-(x+S))*Z,r[6]=(E+F)*Z,r[7]=0,r[8]=(b+D)*j,r[9]=(E-F)*j,r[10]=(1-(x+w))*j,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Qa.set(r[0],r[1],r[2]).length();const l=Qa.set(r[4],r[5],r[6]).length(),h=Qa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Cr.copy(this);const p=1/a,g=1/l,_=1/h;return Cr.elements[0]*=p,Cr.elements[1]*=p,Cr.elements[2]*=p,Cr.elements[4]*=g,Cr.elements[5]*=g,Cr.elements[6]*=g,Cr.elements[8]*=_,Cr.elements[9]*=_,Cr.elements[10]*=_,t.setFromRotationMatrix(Cr),n.x=a,n.y=l,n.z=h,this}makePerspective(e,t,n,r,a,l,h=Br){const f=this.elements,p=2*a/(t-e),g=2*a/(n-r),_=(t+e)/(t-e),x=(n+r)/(n-r);let v,b;if(h===Br)v=-(l+a)/(l-a),b=-2*l*a/(l-a);else if(h===dc)v=-l/(l-a),b=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,l,h=Br){const f=this.elements,p=1/(t-e),g=1/(n-r),_=1/(l-a),x=(t+e)*p,v=(n+r)*g;let b,w;if(h===Br)b=(l+a)*_,w=-2*_;else if(h===dc)b=a*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=w,f[14]=-b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qa=new J,Cr=new ri,cv=new J(0,0,0),lv=new J(1,1,1),Es=new J,yl=new J,cr=new J,gp=new ri,_p=new Qn;class lr{constructor(e=0,t=0,n=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],h=r[8],f=r[1],p=r[5],g=r[9],_=r[2],x=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-cn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hv=0;const xp=new J,eo=new Qn,ts=new ri,Sl=new J,_c=new J,uv=new J,dv=new Qn,vp=new J(1,0,0),yp=new J(0,1,0),Mp=new J(0,0,1),Sp={type:"added"},fv={type:"removed"},to={type:"childadded",child:null},Bu={type:"childremoved",child:null};class Vi extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vi.DEFAULT_UP.clone();const e=new J,t=new lr,n=new Qn,r=new J(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ri},normalMatrix:{value:new pi}}),this.matrix=new ri,this.matrixWorld=new ri,this.matrixAutoUpdate=Vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Mp,e)}translateOnAxis(e,t){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sl.copy(e):Sl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_c.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(_c,Sl,this.up):ts.lookAt(Sl,_c,this.up),this.quaternion.setFromRotationMatrix(ts),r&&(ts.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(ts),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_c,e,uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_c,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const h=r[a];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const _=f[p];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(a(e.materials,this.material[f]));r.material=h}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];r.animations.push(a(e.animations,f))}}if(t){const h=l(e.geometries),f=l(e.materials),p=l(e.textures),g=l(e.images),_=l(e.shapes),x=l(e.skeletons),v=l(e.animations),b=l(e.nodes);h.length>0&&(n.geometries=h),f.length>0&&(n.materials=f),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vi.DEFAULT_UP=new J(0,1,0),Vi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pr=new J,is=new J,zu=new J,ns=new J,io=new J,no=new J,bp=new J,Vu=new J,Gu=new J,Hu=new J;class hr{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pr.subVectors(e,t),r.cross(Pr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Pr.subVectors(r,t),is.subVectors(n,t),zu.subVectors(e,t);const l=Pr.dot(Pr),h=Pr.dot(is),f=Pr.dot(zu),p=is.dot(is),g=is.dot(zu),_=l*p-h*h;if(_===0)return a.set(0,0,0),null;const x=1/_,v=(p*f-h*g)*x,b=(l*g-h*f)*x;return a.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,n,r,a,l,h,f){return this.getBarycoord(e,t,n,r,ns)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ns.x),f.addScaledVector(l,ns.y),f.addScaledVector(h,ns.z),f)}static isFrontFacing(e,t,n,r){return Pr.subVectors(n,t),is.subVectors(e,t),Pr.cross(is).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pr.subVectors(this.c,this.b),is.subVectors(this.a,this.b),Pr.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return hr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,h;io.subVectors(r,n),no.subVectors(a,n),Vu.subVectors(e,n);const f=io.dot(Vu),p=no.dot(Vu);if(f<=0&&p<=0)return t.copy(n);Gu.subVectors(e,r);const g=io.dot(Gu),_=no.dot(Gu);if(g>=0&&_<=g)return t.copy(r);const x=f*_-g*p;if(x<=0&&f>=0&&g<=0)return l=f/(f-g),t.copy(n).addScaledVector(io,l);Hu.subVectors(e,a);const v=io.dot(Hu),b=no.dot(Hu);if(b>=0&&v<=b)return t.copy(a);const w=v*p-f*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),t.copy(n).addScaledVector(no,h);const E=g*b-v*_;if(E<=0&&_-g>=0&&v-b>=0)return bp.subVectors(a,r),h=(_-g)/(_-g+(v-b)),t.copy(r).addScaledVector(bp,h);const S=1/(E+w+x);return l=w*S,h=x*S,t.copy(n).addScaledVector(io,l).addScaledVector(no,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},bl={h:0,s:0,l:0};function ku(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wi.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Wi.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wi.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Wi.workingColorSpace){if(e=wu(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=ku(l,a,e+1/3),this.g=ku(l,a,e),this.b=ku(l,a,e-1/3)}return Wi.toWorkingColorSpace(this,r),this}setStyle(e,t=vr){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vr){const n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vr){return Wi.fromWorkingColorSpace(Dn.copy(this),e),Math.round(cn(Dn.r*255,0,255))*65536+Math.round(cn(Dn.g*255,0,255))*256+Math.round(cn(Dn.b*255,0,255))}getHexString(e=vr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wi.workingColorSpace){Wi.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,r=Dn.g,a=Dn.b,l=Math.max(n,r,a),h=Math.min(n,r,a);let f,p;const g=(h+l)/2;if(h===l)f=0,p=0;else{const _=l-h;switch(p=g<=.5?_/(l+h):_/(2-l-h),l){case n:f=(r-a)/_+(r<a?6:0);break;case r:f=(a-n)/_+2;break;case a:f=(n-r)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Wi.workingColorSpace){return Wi.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=vr){Wi.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,r=Dn.b;return e!==vr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(bl);const n=fc(Ts.h,bl.h,t),r=fc(Ts.s,bl.s,t),a=fc(Ts.l,bl.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Bt;Bt.NAMES=Ep;let pv=0;class Un extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=or(),this.name="",this.type="Material",this.blending=W,this.side=L,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=he,this.blendDst=qe,this.blendEquation=ee,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=oe,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==W&&(n.blending=this.blending),this.side!==L&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==he&&(n.blendSrc=this.blendSrc),this.blendDst!==qe&&(n.blendDst=this.blendDst),this.blendEquation!==ee&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oe&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const h in a){const f=a[h];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class As extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Je,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rs=mv();function mv(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),r=new Uint32Array(512);for(let f=0;f<256;++f){const p=f-127;p<-27?(n[f]=0,n[f|256]=32768,r[f]=24,r[f|256]=24):p<-14?(n[f]=1024>>-p-14,n[f|256]=1024>>-p-14|32768,r[f]=-p-1,r[f|256]=-p-1):p<=15?(n[f]=p+15<<10,n[f|256]=p+15<<10|32768,r[f]=13,r[f|256]=13):p<128?(n[f]=31744,n[f|256]=64512,r[f]=24,r[f|256]=24):(n[f]=31744,n[f|256]=64512,r[f]=13,r[f|256]=13)}const a=new Uint32Array(2048),l=new Uint32Array(64),h=new Uint32Array(64);for(let f=1;f<1024;++f){let p=f<<13,g=0;for(;!(p&8388608);)p<<=1,g-=8388608;p&=-8388609,g+=947912704,a[f]=p|g}for(let f=1024;f<2048;++f)a[f]=939524096+(f-1024<<13);for(let f=1;f<31;++f)l[f]=f<<23;l[31]=1199570944,l[32]=2147483648;for(let f=33;f<63;++f)l[f]=2147483648+(f-32<<23);l[63]=3347054592;for(let f=1;f<64;++f)f!==32&&(h[f]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:a,exponentTable:l,offsetTable:h}}function er(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=cn(o,-65504,65504),rs.floatView[0]=o;const e=rs.uint32View[0],t=e>>23&511;return rs.baseTable[t]+((e&8388607)>>rs.shiftTable[t])}function xc(o){const e=o>>10;return rs.uint32View[0]=rs.mantissaTable[rs.offsetTable[e]+(o&1023)]+rs.exponentTable[e],rs.floatView[0]}const gv={toHalfFloat:er,fromHalfFloat:xc},_n=new J,El=new je;class qi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array),a=fi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class _v extends qi{constructor(e,t,n){super(new Int8Array(e),t,n)}}class xv extends qi{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class vv extends qi{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class yv extends qi{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Wu extends qi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mv extends qi{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Xu extends qi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sv extends qi{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=xc(this.array[e*this.itemSize]);return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize]=er(t),this}getY(e){let t=xc(this.array[e*this.itemSize+1]);return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+1]=er(t),this}getZ(e){let t=xc(this.array[e*this.itemSize+2]);return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+2]=er(t),this}getW(e){let t=xc(this.array[e*this.itemSize+3]);return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+3]=er(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array)),this.array[e+0]=er(t),this.array[e+1]=er(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array)),this.array[e+0]=er(t),this.array[e+1]=er(n),this.array[e+2]=er(r),this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array),a=fi(a,this.array)),this.array[e+0]=er(t),this.array[e+1]=er(n),this.array[e+2]=er(r),this.array[e+3]=er(a),this}}class $t extends qi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bv=0;const yr=new ri,qu=new Vi,ro=new J,ur=new qn,vc=new qn,An=new J;class yi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?Xu:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new pi().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yr.makeRotationFromQuaternion(e),this.applyMatrix4(yr),this}rotateX(e){return yr.makeRotationX(e),this.applyMatrix4(yr),this}rotateY(e){return yr.makeRotationY(e),this.applyMatrix4(yr),this}rotateZ(e){return yr.makeRotationZ(e),this.applyMatrix4(yr),this}translate(e,t,n){return yr.makeTranslation(e,t,n),this.applyMatrix4(yr),this}scale(e,t,n){return yr.makeScale(e,t,n),this.applyMatrix4(yr),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const h=t[a];vc.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ur.min,vc.min),ur.expandByPoint(An),An.addVectors(ur.max,vc.max),ur.expandByPoint(An)):(ur.expandByPoint(vc.min),ur.expandByPoint(vc.max))}ur.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)An.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(An));if(t)for(let a=0,l=t.length;a<l;a++){const h=t[a],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)An.fromBufferAttribute(h,p),f&&(ro.fromBufferAttribute(e,p),An.add(ro)),r=Math.max(r,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),h=[],f=[];for(let re=0;re<n.count;re++)h[re]=new J,f[re]=new J;const p=new J,g=new J,_=new J,x=new je,v=new je,b=new je,w=new J,E=new J;function S(re,k,B){p.fromBufferAttribute(n,re),g.fromBufferAttribute(n,k),_.fromBufferAttribute(n,B),x.fromBufferAttribute(a,re),v.fromBufferAttribute(a,k),b.fromBufferAttribute(a,B),g.sub(p),_.sub(p),v.sub(x),b.sub(x);const ue=1/(v.x*b.y-b.x*v.y);isFinite(ue)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-v.y).multiplyScalar(ue),E.copy(_).multiplyScalar(v.x).addScaledVector(g,-b.x).multiplyScalar(ue),h[re].add(w),h[k].add(w),h[B].add(w),f[re].add(E),f[k].add(E),f[B].add(E))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let re=0,k=F.length;re<k;++re){const B=F[re],ue=B.start,Le=B.count;for(let ce=ue,Be=ue+Le;ce<Be;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const D=new J,O=new J,ne=new J,Z=new J;function j(re){ne.fromBufferAttribute(r,re),Z.copy(ne);const k=h[re];D.copy(k),D.sub(ne.multiplyScalar(ne.dot(k))).normalize(),O.crossVectors(Z,k);const ue=O.dot(f[re])<0?-1:1;l.setXYZW(re,D.x,D.y,D.z,ue)}for(let re=0,k=F.length;re<k;++re){const B=F[re],ue=B.start,Le=B.count;for(let ce=ue,Be=ue+Le;ce<Be;ce+=3)j(e.getX(ce+0)),j(e.getX(ce+1)),j(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,v=n.count;x<v;x++)n.setXYZ(x,0,0,0);const r=new J,a=new J,l=new J,h=new J,f=new J,p=new J,g=new J,_=new J;if(e)for(let x=0,v=e.count;x<v;x+=3){const b=e.getX(x+0),w=e.getX(x+1),E=e.getX(x+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),g.subVectors(l,a),_.subVectors(r,a),g.cross(_),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,w),p.fromBufferAttribute(n,E),h.add(g),f.add(g),p.add(g),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(w,f.x,f.y,f.z),n.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,v=t.count;x<v;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),l.fromBufferAttribute(t,x+2),g.subVectors(l,a),_.subVectors(r,a),g.cross(_),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(f.length*g);let v=0,b=0;for(let w=0,E=f.length;w<E;w++){h.isInterleavedBufferAttribute?v=f[w]*h.data.stride+h.offset:v=f[w]*g;for(let S=0;S<g;S++)x[b++]=p[v++]}return new qi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,n=this.index.array,r=this.attributes;for(const h in r){const f=r[h],p=e(f,n);t.setAttribute(h,p)}const a=this.morphAttributes;for(const h in a){const f=[],p=a[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],v=e(x,n);f.push(v)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let h=0,f=l.length;h<f;h++){const p=l[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const p=n[f];e.data.attributes[f]=p.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let _=0,x=p.length;_<x;_++){const v=p[_];g.push(v.toJSON(e.data))}g.length>0&&(r[f]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],_=a[p];for(let x=0,v=_.length;x<v;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,g=l.length;p<g;p++){const _=l[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new ri,oa=new ja,Tl=new In,Ap=new J,so=new J,ao=new J,oo=new J,Yu=new J,Al=new J,wl=new je,Rl=new je,Cl=new je,wp=new J,Rp=new J,Cp=new J,Pl=new J,Ll=new J;class xn extends Vi{constructor(e=new yi,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(a&&h){Al.set(0,0,0);for(let f=0,p=a.length;f<p;f++){const g=h[f],_=a[f];g!==0&&(Yu.fromBufferAttribute(_,e),l?Al.addScaledVector(Yu,g):Al.addScaledVector(Yu.sub(t),g))}t.add(Al)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(a),oa.copy(e.ray).recast(e.near),!(Tl.containsPoint(oa.origin)===!1&&(oa.intersectSphere(Tl,Ap)===null||oa.origin.distanceToSquared(Ap)>(e.far-e.near)**2))&&(Tp.copy(a).invert(),oa.copy(e.ray).applyMatrix4(Tp),!(n.boundingBox!==null&&oa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oa)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,h=a.index,f=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,x=a.groups,v=a.drawRange;if(h!==null)if(Array.isArray(l))for(let b=0,w=x.length;b<w;b++){const E=x[b],S=l[E.materialIndex],F=Math.max(E.start,v.start),D=Math.min(h.count,Math.min(E.start+E.count,v.start+v.count));for(let O=F,ne=D;O<ne;O+=3){const Z=h.getX(O),j=h.getX(O+1),re=h.getX(O+2);r=Il(this,S,e,n,p,g,_,Z,j,re),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),w=Math.min(h.count,v.start+v.count);for(let E=b,S=w;E<S;E+=3){const F=h.getX(E),D=h.getX(E+1),O=h.getX(E+2);r=Il(this,l,e,n,p,g,_,F,D,O),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let b=0,w=x.length;b<w;b++){const E=x[b],S=l[E.materialIndex],F=Math.max(E.start,v.start),D=Math.min(f.count,Math.min(E.start+E.count,v.start+v.count));for(let O=F,ne=D;O<ne;O+=3){const Z=O,j=O+1,re=O+2;r=Il(this,S,e,n,p,g,_,Z,j,re),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),w=Math.min(f.count,v.start+v.count);for(let E=b,S=w;E<S;E+=3){const F=E,D=E+1,O=E+2;r=Il(this,l,e,n,p,g,_,F,D,O),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}}function Ev(o,e,t,n,r,a,l,h){let f;if(e.side===I?f=n.intersectTriangle(l,a,r,!0,h):f=n.intersectTriangle(r,a,l,e.side===L,h),f===null)return null;Ll.copy(h),Ll.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:o}}function Il(o,e,t,n,r,a,l,h,f,p){o.getVertexPosition(h,so),o.getVertexPosition(f,ao),o.getVertexPosition(p,oo);const g=Ev(o,e,t,n,so,ao,oo,Pl);if(g){r&&(wl.fromBufferAttribute(r,h),Rl.fromBufferAttribute(r,f),Cl.fromBufferAttribute(r,p),g.uv=hr.getInterpolation(Pl,so,ao,oo,wl,Rl,Cl,new je)),a&&(wl.fromBufferAttribute(a,h),Rl.fromBufferAttribute(a,f),Cl.fromBufferAttribute(a,p),g.uv1=hr.getInterpolation(Pl,so,ao,oo,wl,Rl,Cl,new je)),l&&(wp.fromBufferAttribute(l,h),Rp.fromBufferAttribute(l,f),Cp.fromBufferAttribute(l,p),g.normal=hr.getInterpolation(Pl,so,ao,oo,wp,Rp,Cp,new J),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:f,c:p,normal:new J,materialIndex:0};hr.getNormal(so,ao,oo,_.normal),g.face=_}return g}class ca extends yi{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const h=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],p=[],g=[],_=[];let x=0,v=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(_,2));function b(w,E,S,F,D,O,ne,Z,j,re,k){const B=O/j,ue=ne/re,Le=O/2,ce=ne/2,Be=Z/2,He=j+1,nt=re+1;let dt=0,Ue=0;const Mt=new J;for(let xt=0;xt<nt;xt++){const Wt=xt*ue-ce;for(let Mi=0;Mi<He;Mi++){const Yi=Mi*B-Le;Mt[w]=Yi*F,Mt[E]=Wt*D,Mt[S]=Be,p.push(Mt.x,Mt.y,Mt.z),Mt[w]=0,Mt[E]=0,Mt[S]=Z>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(Mi/j),_.push(1-xt/re),dt+=1}}for(let xt=0;xt<re;xt++)for(let Wt=0;Wt<j;Wt++){const Mi=x+Wt+He*xt,Yi=x+Wt+He*(xt+1),ke=x+(Wt+1)+He*(xt+1),St=x+(Wt+1)+He*xt;f.push(Mi,Yi,St),f.push(Yi,ke,St),Ue+=6}h.addGroup(v,Ue,k),v+=Ue,x+=dt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yn(o){const e={};for(let t=0;t<o.length;t++){const n=co(o[t]);for(const r in n)e[r]=n[r]}return e}function Tv(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Pp(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wi.workingColorSpace}const Lp={clone:co,merge:Yn};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dl extends Vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ri,this.projectionMatrix=new ri,this.projectionMatrixInverse=new ri,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new J,Ip=new je,Dp=new je;class Cn extends Dl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Ip,Dp),t.subVectors(Dp,Ip)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,p=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/p,r*=l.width/f,n*=l.height/p}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,ho=1;class Up extends Vi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(lo,ho,e,t);r.layers=this.layers,this.add(r);const a=new Cn(lo,ho,e,t);a.layers=this.layers,this.add(a);const l=new Cn(lo,ho,e,t);l.layers=this.layers,this.add(l);const h=new Cn(lo,ho,e,t);h.layers=this.layers,this.add(h);const f=new Cn(lo,ho,e,t);f.layers=this.layers,this.add(f);const p=new Cn(lo,ho,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,h,f]=t;for(const p of t)this.remove(p);if(e===Br)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,h,f,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,h),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(_,x,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class yc extends ln{constructor(e,t,n,r,a,l,h,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:st,super(e,t,n,r,a,l,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Np extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ge}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ca(5,5,5),a=new Lr({name:"CubemapFromEquirect",uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:I,blending:G});a.uniforms.tEquirect.value=t;const l=new xn(r,a),h=t.minFilter;return t.minFilter===At&&(t.minFilter=Ge),new Up(1,10,this).update(e,l),t.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const Zu=new J,Rv=new J,Cv=new pi;class Rs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zu.subVectors(n,t).cross(Rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cv.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const la=new In,Ul=new J;class Mc{constructor(e=new Rs,t=new Rs,n=new Rs,r=new Rs,a=new Rs,l=new Rs){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(r),h[4].copy(a),h[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Br){const n=this.planes,r=e.elements,a=r[0],l=r[1],h=r[2],f=r[3],p=r[4],g=r[5],_=r[6],x=r[7],v=r[8],b=r[9],w=r[10],E=r[11],S=r[12],F=r[13],D=r[14],O=r[15];if(n[0].setComponents(f-a,x-p,E-v,O-S).normalize(),n[1].setComponents(f+a,x+p,E+v,O+S).normalize(),n[2].setComponents(f+l,x+g,E+b,O+F).normalize(),n[3].setComponents(f-l,x-g,E-b,O-F).normalize(),n[4].setComponents(f-h,x-_,E-w,O-D).normalize(),t===Br)n[5].setComponents(f+h,x+_,E+w,O+D).normalize();else if(t===dc)n[5].setComponents(h,_,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),la.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),la.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(la)}intersectsSprite(e){return la.center.set(0,0,0),la.radius=.7071067811865476,la.applyMatrix4(e.matrixWorld),this.intersectsSphere(la)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let o=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Pv(o){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(f,x),o.bufferData(f,p,g),h.onUploadCallback();let v;if(p instanceof Float32Array)v=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=o.SHORT;else if(p instanceof Uint32Array)v=o.UNSIGNED_INT;else if(p instanceof Int32Array)v=o.INT;else if(p instanceof Int8Array)v=o.BYTE;else if(p instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,f,p){const g=f.array,_=f._updateRange,x=f.updateRanges;if(o.bindBuffer(p,h),_.count===-1&&x.length===0&&o.bufferSubData(p,0,g),x.length!==0){for(let v=0,b=x.length;v<b;v++){const w=x[v];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}f.clearUpdateRanges()}_.count!==-1&&(o.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),f.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(o.deleteBuffer(f.buffer),e.delete(h))}function l(h,f){if(h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,h,f),p.version=h.version}}return{get:r,remove:a,update:l}}class uo extends yi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,h=Math.floor(n),f=Math.floor(r),p=h+1,g=f+1,_=e/h,x=t/f,v=[],b=[],w=[],E=[];for(let S=0;S<g;S++){const F=S*x-l;for(let D=0;D<p;D++){const O=D*_-a;b.push(O,-F,0),w.push(0,0,1),E.push(D/h),E.push(1-S/f)}}for(let S=0;S<f;S++)for(let F=0;F<h;F++){const D=F+p*S,O=F+p*(S+1),ne=F+1+p*(S+1),Z=F+1+p*S;v.push(D,O,Z),v.push(O,ne,Z)}this.setIndex(v),this.setAttribute("position",new $t(b,3)),this.setAttribute("normal",new $t(w,3)),this.setAttribute("uv",new $t(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iy=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`
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
}`,ly=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sy=`uniform bool receiveShadow;
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
#endif`,by=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Cy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Py=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mM=`float getShadowMask() {
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
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,yM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _i={alphahash_fragment:Lv,alphahash_pars_fragment:Iv,alphamap_fragment:Dv,alphamap_pars_fragment:Uv,alphatest_fragment:Nv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Bv,batching_pars_vertex:zv,batching_vertex:Vv,begin_vertex:Gv,beginnormal_vertex:Hv,bsdfs:kv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:$v,color_fragment:Kv,color_pars_fragment:Jv,color_pars_vertex:jv,color_vertex:Qv,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:iy,displacementmap_pars_vertex:ny,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:ay,colorspace_fragment:oy,colorspace_pars_fragment:cy,envmap_fragment:ly,envmap_common_pars_fragment:hy,envmap_pars_fragment:uy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:by,envmap_vertex:fy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:_y,gradientmap_pars_fragment:xy,lightmap_pars_fragment:vy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:My,lights_pars_begin:Sy,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:Ay,lights_phong_pars_fragment:wy,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Py,lights_fragment_maps:Ly,lights_fragment_end:Iy,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Uy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Fy,map_fragment:Oy,map_pars_fragment:By,map_particle_fragment:zy,map_particle_pars_fragment:Vy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Hy,morphinstance_vertex:ky,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:qy,morphtarget_vertex:Yy,normal_fragment_begin:Zy,normal_fragment_maps:$y,normal_pars_fragment:Ky,normal_pars_vertex:Jy,normal_vertex:jy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:nM,opaque_fragment:rM,packing:sM,premultiplied_alpha_fragment:aM,project_vertex:oM,dithering_fragment:cM,dithering_pars_fragment:lM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:fM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:xM,skinnormal_vertex:vM,specularmap_fragment:yM,specularmap_pars_fragment:MM,tonemapping_fragment:SM,tonemapping_pars_fragment:bM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:wM,uv_vertex:RM,worldpos_vertex:CM,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,distanceRGBA_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},Lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pi},alphaMap:{value:null},alphaMapTransform:{value:new pi},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pi}},envmap:{envMap:{value:null},envMapRotation:{value:new pi},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pi}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pi}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pi},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pi},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pi},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pi}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pi}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pi}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pi},alphaTest:{value:0},uvTransform:{value:new pi}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pi},alphaMap:{value:null},alphaMapTransform:{value:new pi},alphaTest:{value:0}}},Ir={basic:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:_i.meshbasic_vert,fragmentShader:_i.meshbasic_frag},lambert:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:_i.meshlambert_vert,fragmentShader:_i.meshlambert_frag},phong:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:_i.meshphong_vert,fragmentShader:_i.meshphong_frag},standard:{uniforms:Yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_i.meshphysical_vert,fragmentShader:_i.meshphysical_frag},toon:{uniforms:Yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:_i.meshtoon_vert,fragmentShader:_i.meshtoon_frag},matcap:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:_i.meshmatcap_vert,fragmentShader:_i.meshmatcap_frag},points:{uniforms:Yn([Lt.points,Lt.fog]),vertexShader:_i.points_vert,fragmentShader:_i.points_frag},dashed:{uniforms:Yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_i.linedashed_vert,fragmentShader:_i.linedashed_frag},depth:{uniforms:Yn([Lt.common,Lt.displacementmap]),vertexShader:_i.depth_vert,fragmentShader:_i.depth_frag},normal:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:_i.meshnormal_vert,fragmentShader:_i.meshnormal_frag},sprite:{uniforms:Yn([Lt.sprite,Lt.fog]),vertexShader:_i.sprite_vert,fragmentShader:_i.sprite_frag},background:{uniforms:{uvTransform:{value:new pi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_i.background_vert,fragmentShader:_i.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pi}},vertexShader:_i.backgroundCube_vert,fragmentShader:_i.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_i.cube_vert,fragmentShader:_i.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_i.equirect_vert,fragmentShader:_i.equirect_frag},distanceRGBA:{uniforms:Yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_i.distanceRGBA_vert,fragmentShader:_i.distanceRGBA_frag},shadow:{uniforms:Yn([Lt.lights,Lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:_i.shadow_vert,fragmentShader:_i.shadow_frag}};Ir.physical={uniforms:Yn([Ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pi},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pi},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pi},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pi},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pi},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pi},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pi},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pi},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pi},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pi},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pi},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pi}}]),vertexShader:_i.meshphysical_vert,fragmentShader:_i.meshphysical_frag};const Nl={r:0,b:0,g:0},ha=new lr,PM=new ri;function LM(o,e,t,n,r,a,l){const h=new Bt(0);let f=a===!0?0:1,p,g,_=null,x=0,v=null;function b(F){let D=F.isScene===!0?F.background:null;return D&&D.isTexture&&(D=(F.backgroundBlurriness>0?t:e).get(D)),D}function w(F){let D=!1;const O=b(F);O===null?S(h,f):O&&O.isColor&&(S(O,1),D=!0);const ne=o.xr.getEnvironmentBlendMode();ne==="additive"?n.buffers.color.setClear(0,0,0,1,l):ne==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||D)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function E(F,D){const O=b(D);O&&(O.isCubeTexture||O.mapping===ze)?(g===void 0&&(g=new xn(new ca(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:co(Ir.backgroundCube.uniforms),vertexShader:Ir.backgroundCube.vertexShader,fragmentShader:Ir.backgroundCube.fragmentShader,side:I,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(ne,Z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),ha.copy(D.backgroundRotation),ha.x*=-1,ha.y*=-1,ha.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ha.y*=-1,ha.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(ha)),g.material.toneMapped=Wi.getTransfer(O.colorSpace)!==ji,(_!==O||x!==O.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,_=O,x=O.version,v=o.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new xn(new uo(2,2),new Lr({name:"BackgroundMaterial",uniforms:co(Ir.background.uniforms),vertexShader:Ir.background.vertexShader,fragmentShader:Ir.background.fragmentShader,side:L,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Wi.getTransfer(O.colorSpace)!==ji,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=O,x=O.version,v=o.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function S(F,D){F.getRGB(Nl,Pp(o)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,D,l)}return{getClearColor:function(){return h},setClearColor:function(F,D=1){h.set(F),f=D,S(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(F){f=F,S(h,f)},render:w,addToRenderList:E}}function IM(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=x(null);let a=r,l=!1;function h(B,ue,Le,ce,Be){let He=!1;const nt=_(ce,Le,ue);a!==nt&&(a=nt,p(a.object)),He=v(B,ce,Le,Be),He&&b(B,ce,Le,Be),Be!==null&&e.update(Be,o.ELEMENT_ARRAY_BUFFER),(He||l)&&(l=!1,O(B,ue,Le,ce),Be!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Be).buffer))}function f(){return o.createVertexArray()}function p(B){return o.bindVertexArray(B)}function g(B){return o.deleteVertexArray(B)}function _(B,ue,Le){const ce=Le.wireframe===!0;let Be=n[B.id];Be===void 0&&(Be={},n[B.id]=Be);let He=Be[ue.id];He===void 0&&(He={},Be[ue.id]=He);let nt=He[ce];return nt===void 0&&(nt=x(f()),He[ce]=nt),nt}function x(B){const ue=[],Le=[],ce=[];for(let Be=0;Be<t;Be++)ue[Be]=0,Le[Be]=0,ce[Be]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ue,enabledAttributes:Le,attributeDivisors:ce,object:B,attributes:{},index:null}}function v(B,ue,Le,ce){const Be=a.attributes,He=ue.attributes;let nt=0;const dt=Le.getAttributes();for(const Ue in dt)if(dt[Ue].location>=0){const xt=Be[Ue];let Wt=He[Ue];if(Wt===void 0&&(Ue==="instanceMatrix"&&B.instanceMatrix&&(Wt=B.instanceMatrix),Ue==="instanceColor"&&B.instanceColor&&(Wt=B.instanceColor)),xt===void 0||xt.attribute!==Wt||Wt&&xt.data!==Wt.data)return!0;nt++}return a.attributesNum!==nt||a.index!==ce}function b(B,ue,Le,ce){const Be={},He=ue.attributes;let nt=0;const dt=Le.getAttributes();for(const Ue in dt)if(dt[Ue].location>=0){let xt=He[Ue];xt===void 0&&(Ue==="instanceMatrix"&&B.instanceMatrix&&(xt=B.instanceMatrix),Ue==="instanceColor"&&B.instanceColor&&(xt=B.instanceColor));const Wt={};Wt.attribute=xt,xt&&xt.data&&(Wt.data=xt.data),Be[Ue]=Wt,nt++}a.attributes=Be,a.attributesNum=nt,a.index=ce}function w(){const B=a.newAttributes;for(let ue=0,Le=B.length;ue<Le;ue++)B[ue]=0}function E(B){S(B,0)}function S(B,ue){const Le=a.newAttributes,ce=a.enabledAttributes,Be=a.attributeDivisors;Le[B]=1,ce[B]===0&&(o.enableVertexAttribArray(B),ce[B]=1),Be[B]!==ue&&(o.vertexAttribDivisor(B,ue),Be[B]=ue)}function F(){const B=a.newAttributes,ue=a.enabledAttributes;for(let Le=0,ce=ue.length;Le<ce;Le++)ue[Le]!==B[Le]&&(o.disableVertexAttribArray(Le),ue[Le]=0)}function D(B,ue,Le,ce,Be,He,nt){nt===!0?o.vertexAttribIPointer(B,ue,Le,Be,He):o.vertexAttribPointer(B,ue,Le,ce,Be,He)}function O(B,ue,Le,ce){w();const Be=ce.attributes,He=Le.getAttributes(),nt=ue.defaultAttributeValues;for(const dt in He){const Ue=He[dt];if(Ue.location>=0){let Mt=Be[dt];if(Mt===void 0&&(dt==="instanceMatrix"&&B.instanceMatrix&&(Mt=B.instanceMatrix),dt==="instanceColor"&&B.instanceColor&&(Mt=B.instanceColor)),Mt!==void 0){const xt=Mt.normalized,Wt=Mt.itemSize,Mi=e.get(Mt);if(Mi===void 0)continue;const Yi=Mi.buffer,ke=Mi.type,St=Mi.bytesPerElement,Yt=ke===o.INT||ke===o.UNSIGNED_INT||Mt.gpuType===jn;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Si=bt.stride,Ci=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let ge=0;ge<Ue.locationSize;ge++)S(Ue.location+ge,bt.meshPerAttribute);B.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ge=0;ge<Ue.locationSize;ge++)E(Ue.location+ge);o.bindBuffer(o.ARRAY_BUFFER,Yi);for(let ge=0;ge<Ue.locationSize;ge++)D(Ue.location+ge,Wt/Ue.locationSize,ke,xt,Si*St,(Ci+Wt/Ue.locationSize*ge)*St,Yt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<Ue.locationSize;bt++)S(Ue.location+bt,Mt.meshPerAttribute);B.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<Ue.locationSize;bt++)E(Ue.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Yi);for(let bt=0;bt<Ue.locationSize;bt++)D(Ue.location+bt,Wt/Ue.locationSize,ke,xt,Wt*St,Wt/Ue.locationSize*bt*St,Yt)}}else if(nt!==void 0){const xt=nt[dt];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(Ue.location,xt);break;case 3:o.vertexAttrib3fv(Ue.location,xt);break;case 4:o.vertexAttrib4fv(Ue.location,xt);break;default:o.vertexAttrib1fv(Ue.location,xt)}}}}F()}function ne(){re();for(const B in n){const ue=n[B];for(const Le in ue){const ce=ue[Le];for(const Be in ce)g(ce[Be].object),delete ce[Be];delete ue[Le]}delete n[B]}}function Z(B){if(n[B.id]===void 0)return;const ue=n[B.id];for(const Le in ue){const ce=ue[Le];for(const Be in ce)g(ce[Be].object),delete ce[Be];delete ue[Le]}delete n[B.id]}function j(B){for(const ue in n){const Le=n[ue];if(Le[B.id]===void 0)continue;const ce=Le[B.id];for(const Be in ce)g(ce[Be].object),delete ce[Be];delete Le[B.id]}}function re(){k(),l=!0,a!==r&&(a=r,p(a.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:re,resetDefaultState:k,dispose:ne,releaseStatesOfGeometry:Z,releaseStatesOfProgram:j,initAttributes:w,enableAttribute:E,disableUnusedAttributes:F}}function DM(o,e,t){let n;function r(p){n=p}function a(p,g){o.drawArrays(n,p,g),t.update(g,n,1)}function l(p,g,_){_!==0&&(o.drawArraysInstanced(n,p,g,_),t.update(g,n,_))}function h(p,g,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_;v++)this.render(p[v],g[v]);else{x.multiDrawArraysWEBGL(n,p,0,g,0,_);let v=0;for(let b=0;b<_;b++)v+=g[b];t.update(v,n,1)}}function f(p,g,_,x){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<p.length;b++)l(p[b],g[b],x[b]);else{v.multiDrawArraysInstancedWEBGL(n,p,0,g,0,x,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w];for(let w=0;w<x.length;w++)t.update(b,n,x[w])}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function UM(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(Z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(Z){return!(Z!==Wn&&n.convert(Z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(Z){const j=Z===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(Z!==Li&&n.convert(Z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&Z!==kn&&!j)}function f(Z){if(Z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";Z="mediump"}return Z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,ne=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,maxTextures:x,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:S,maxVaryings:F,maxFragmentUniforms:D,vertexTextures:O,maxSamples:ne}}function NM(o){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Rs,h=new pi,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const v=_.length!==0||x||n!==0||r;return r=x,n=_.length,v},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,v){const b=_.clippingPlanes,w=_.clipIntersection,E=_.clipShadows,S=o.get(_);if(!r||b===null||b.length===0||a&&!E)a?g(null):p();else{const F=a?0:n,D=F*4;let O=S.clippingState||null;f.value=O,O=g(b,x,D,v);for(let ne=0;ne!==D;++ne)O[ne]=t[ne];S.clippingState=O,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(_,x,v,b){const w=_!==null?_.length:0;let E=null;if(w!==0){if(E=f.value,b!==!0||E===null){const S=v+w*4,F=x.matrixWorldInverse;h.getNormalMatrix(F),(E===null||E.length<S)&&(E=new Float32Array(S));for(let D=0,O=v;D!==w;++D,O+=4)l.copy(_[D]).applyMatrix4(F,h),l.normal.toArray(E,O),E[O+3]=l.constant}f.value=E,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,E}}function FM(o){let e=new WeakMap;function t(l,h){return h===pt?l.mapping=st:h===Ye&&(l.mapping=it),l}function n(l){if(l&&l.isTexture){const h=l.mapping;if(h===pt||h===Ye)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const p=new Np(f.height);return p.fromEquirectangularTexture(o,l),e.set(l,p),l.addEventListener("dispose",r),t(p.texture,l.mapping)}else return null}}return l}function r(l){const h=l.target;h.removeEventListener("dispose",r);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Fl extends Dl{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,h=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,l=a+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fo=4,Op=[.125,.215,.35,.446,.526,.582],ua=20,$u=new Fl,Bp=new Bt;let Ku=null,Ju=0,ju=0,Qu=!1;const da=(1+Math.sqrt(5))/2,po=1/da,zp=[new J(-da,po,0),new J(da,po,0),new J(-po,0,da),new J(po,0,da),new J(0,da,-po),new J(0,da,po),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ku=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Ju,ju),this._renderer.xr.enabled=Qu,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===st||e.mapping===it?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:xs,format:Wn,colorSpace:Jr,depthBuffer:!1},r=Vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(a)),this._blurMaterial=BM(a,e,t)}return r}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,$u)}_sceneToCubeUV(e,t,n,r){const h=new Cn(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(Bp),g.toneMapping=at,g.autoClear=!1;const v=new As({name:"PMREM.Background",side:I,depthWrite:!1,depthTest:!1}),b=new xn(new ca,v);let w=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,w=!0):(v.color.copy(Bp),w=!0);for(let S=0;S<6;S++){const F=S%3;F===0?(h.up.set(0,f[S],0),h.lookAt(p[S],0,0)):F===1?(h.up.set(0,0,f[S]),h.lookAt(0,p[S],0)):(h.up.set(0,f[S],0),h.lookAt(0,0,p[S]));const D=this._cubeSize;Ol(r,F*D,S>2?D:0,D,D),g.setRenderTarget(r),w&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===st||e.mapping===it;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new xn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=e;const f=this._cubeSize;Ol(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,$u)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=zp[(r-a-1)%zp.length];this._blur(e,a-1,a,l,h)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,h){const f=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new xn(this._lodPlanes[r],p),x=p.uniforms,v=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*ua-1),w=a/b,E=isFinite(a)?1+Math.floor(g*w):ua;E>ua&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${ua}`);const S=[];let F=0;for(let j=0;j<ua;++j){const re=j/w,k=Math.exp(-re*re/2);S.push(k),j===0?F+=k:j<E&&(F+=2*k)}for(let j=0;j<S.length;j++)S[j]=S[j]/F;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=S,x.latitudinal.value=l==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-n;const O=this._sizeLods[r],ne=3*O*(r>D-fo?r-D+fo:0),Z=4*(this._cubeSize-O);Ol(t,ne,Z,3*O,2*O),f.setRenderTarget(t),f.render(_,$u)}}function OM(o){const e=[],t=[],n=[];let r=o;const a=o-fo+1+Op.length;for(let l=0;l<a;l++){const h=Math.pow(2,r);t.push(h);let f=1/h;l>o-fo?f=Op[l-o+fo-1]:l===0&&(f=0),n.push(f);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],v=6,b=6,w=3,E=2,S=1,F=new Float32Array(w*b*v),D=new Float32Array(E*b*v),O=new Float32Array(S*b*v);for(let Z=0;Z<v;Z++){const j=Z%3*2/3-1,re=Z>2?0:-1,k=[j,re,0,j+2/3,re,0,j+2/3,re+1,0,j,re,0,j+2/3,re+1,0,j,re+1,0];F.set(k,w*b*Z),D.set(x,E*b*Z);const B=[Z,Z,Z,Z,Z,Z];O.set(B,S*b*Z)}const ne=new yi;ne.setAttribute("position",new qi(F,w)),ne.setAttribute("uv",new qi(D,E)),ne.setAttribute("faceIndex",new qi(O,S)),e.push(ne),r>fo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vp(o,e,t){const n=new wr(o,e,t);return n.texture.mapping=ze,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ol(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function BM(o,e,t){const n=new Float32Array(ua),r=new J(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ua,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

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
		`,blending:G,depthTest:!1,depthWrite:!1})}function Gp(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

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
		`,blending:G,depthTest:!1,depthWrite:!1})}function Hp(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:G,depthTest:!1,depthWrite:!1})}function td(){return`

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
	`}function zM(o){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const f=h.mapping,p=f===pt||f===Ye,g=f===st||f===it;if(p||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new ed(o)),_=p?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const v=h.image;return p&&v&&v.height>0||g&&v&&r(v)?(t===null&&(t=new ed(o)),_=p?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",a),_.texture):null}}}return h}function r(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function a(h){const f=h.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function VM(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function GM(o,e,t,n){const r={},a=new WeakMap;function l(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);for(const b in x.morphAttributes){const w=x.morphAttributes[b];for(let E=0,S=w.length;E<S;E++)e.remove(w[E])}x.removeEventListener("dispose",l),delete r[x.id];const v=a.get(x);v&&(e.remove(v),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return r[x.id]===!0||(x.addEventListener("dispose",l),r[x.id]=!0,t.memory.geometries++),x}function f(_){const x=_.attributes;for(const b in x)e.update(x[b],o.ARRAY_BUFFER);const v=_.morphAttributes;for(const b in v){const w=v[b];for(let E=0,S=w.length;E<S;E++)e.update(w[E],o.ARRAY_BUFFER)}}function p(_){const x=[],v=_.index,b=_.attributes.position;let w=0;if(v!==null){const F=v.array;w=v.version;for(let D=0,O=F.length;D<O;D+=3){const ne=F[D+0],Z=F[D+1],j=F[D+2];x.push(ne,Z,Z,j,j,ne)}}else if(b!==void 0){const F=b.array;w=b.version;for(let D=0,O=F.length/3-1;D<O;D+=3){const ne=D+0,Z=D+1,j=D+2;x.push(ne,Z,Z,j,j,ne)}}else return;const E=new(op(x)?Xu:Wu)(x,1);E.version=w;const S=a.get(_);S&&e.remove(S),a.set(_,E)}function g(_){const x=a.get(_);if(x){const v=_.index;v!==null&&x.version<v.version&&p(_)}else p(_);return a.get(_)}return{get:h,update:f,getWireframeAttribute:g}}function HM(o,e,t){let n;function r(x){n=x}let a,l;function h(x){a=x.type,l=x.bytesPerElement}function f(x,v){o.drawElements(n,v,a,x*l),t.update(v,n,1)}function p(x,v,b){b!==0&&(o.drawElementsInstanced(n,v,a,x*l,b),t.update(v,n,b))}function g(x,v,b){if(b===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<b;E++)this.render(x[E]/l,v[E]);else{w.multiDrawElementsWEBGL(n,v,0,a,x,0,b);let E=0;for(let S=0;S<b;S++)E+=v[S];t.update(E,n,1)}}function _(x,v,b,w){if(b===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let S=0;S<x.length;S++)p(x[S]/l,v[S],w[S]);else{E.multiDrawElementsInstancedWEBGL(n,v,0,a,x,0,w,0,b);let S=0;for(let F=0;F<b;F++)S+=v[F];for(let F=0;F<w.length;F++)t.update(S,n,w[F])}}this.setMode=r,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function kM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,h){switch(t.calls++,l){case o.TRIANGLES:t.triangles+=h*(a/3);break;case o.LINES:t.lines+=h*(a/2);break;case o.LINE_STRIP:t.lines+=h*(a-1);break;case o.LINE_LOOP:t.lines+=h*a;break;case o.POINTS:t.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function WM(o,e,t){const n=new WeakMap,r=new Xi;function a(l,h,f){const p=l.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=n.get(h);if(x===void 0||x.count!==_){let B=function(){re.dispose(),n.delete(h),h.removeEventListener("dispose",B)};var v=B;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),w===!0&&(O=2),E===!0&&(O=3);let ne=h.attributes.position.count*O,Z=1;ne>e.maxTextureSize&&(Z=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const j=new Float32Array(ne*Z*4*_),re=new pl(j,ne,Z,_);re.type=kn,re.needsUpdate=!0;const k=O*4;for(let ue=0;ue<_;ue++){const Le=S[ue],ce=F[ue],Be=D[ue],He=ne*Z*4*ue;for(let nt=0;nt<Le.count;nt++){const dt=nt*k;b===!0&&(r.fromBufferAttribute(Le,nt),j[He+dt+0]=r.x,j[He+dt+1]=r.y,j[He+dt+2]=r.z,j[He+dt+3]=0),w===!0&&(r.fromBufferAttribute(ce,nt),j[He+dt+4]=r.x,j[He+dt+5]=r.y,j[He+dt+6]=r.z,j[He+dt+7]=0),E===!0&&(r.fromBufferAttribute(Be,nt),j[He+dt+8]=r.x,j[He+dt+9]=r.y,j[He+dt+10]=r.z,j[He+dt+11]=Be.itemSize===4?r.w:1)}}x={count:_,texture:re,size:new je(ne,Z)},n.set(h,x),h.addEventListener("dispose",B)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",l.morphTexture,t);else{let b=0;for(let E=0;E<p.length;E++)b+=p[E];const w=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",w),f.getUniforms().setValue(o,"morphTargetInfluences",p)}f.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:a}}function XM(o,e,t,n){let r=new WeakMap;function a(f){const p=n.render.frame,g=f.geometry,_=e.get(f,g);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),r.get(f)!==p&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),r.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return _}function l(){r=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:l}}class id extends ln{constructor(e,t,n,r,a,l,h,f,p,g){if(g=g!==void 0?g:q,g!==q&&g!==fe)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===q&&(n=an),n===void 0&&g===fe&&(n=Yr),super(null,r,a,l,h,f,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Vt,this.minFilter=f!==void 0?f:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kp=new ln,Wp=new id(1,1);Wp.compareFunction=Tu;const Xp=new pl,qp=new Lu,Yp=new yc,Zp=[],$p=[],Kp=new Float32Array(16),Jp=new Float32Array(9),jp=new Float32Array(4);function mo(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Zp[r];if(a===void 0&&(a=new Float32Array(r),Zp[r]=a),e!==0){n.toArray(a,0);for(let l=1,h=0;l!==e;++l)h+=t,o[l].toArray(a,h)}return a}function Sn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function bn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Bl(o,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function qM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function YM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;o.uniform2fv(this.addr,e),bn(t,e)}}function ZM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;o.uniform3fv(this.addr,e),bn(t,e)}}function $M(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;o.uniform4fv(this.addr,e),bn(t,e)}}function KM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;jp.set(n),o.uniformMatrix2fv(this.addr,!1,jp),bn(t,n)}}function JM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;Jp.set(n),o.uniformMatrix3fv(this.addr,!1,Jp),bn(t,n)}}function jM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;Kp.set(n),o.uniformMatrix4fv(this.addr,!1,Kp),bn(t,n)}}function QM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function eS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;o.uniform2iv(this.addr,e),bn(t,e)}}function tS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;o.uniform3iv(this.addr,e),bn(t,e)}}function iS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;o.uniform4iv(this.addr,e),bn(t,e)}}function nS(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function rS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;o.uniform2uiv(this.addr,e),bn(t,e)}}function sS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;o.uniform3uiv(this.addr,e),bn(t,e)}}function aS(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;o.uniform4uiv(this.addr,e),bn(t,e)}}function oS(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);const a=this.type===o.SAMPLER_2D_SHADOW?Wp:kp;t.setTexture2D(e||a,r)}function cS(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qp,r)}function lS(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yp,r)}function hS(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xp,r)}function uS(o){switch(o){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return $M;case 35674:return KM;case 35675:return JM;case 35676:return jM;case 5124:case 35670:return QM;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return iS;case 5125:return nS;case 36294:return rS;case 36295:return sS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return hS}}function dS(o,e){o.uniform1fv(this.addr,e)}function fS(o,e){const t=mo(e,this.size,2);o.uniform2fv(this.addr,t)}function pS(o,e){const t=mo(e,this.size,3);o.uniform3fv(this.addr,t)}function mS(o,e){const t=mo(e,this.size,4);o.uniform4fv(this.addr,t)}function gS(o,e){const t=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function _S(o,e){const t=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function xS(o,e){const t=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function vS(o,e){o.uniform1iv(this.addr,e)}function yS(o,e){o.uniform2iv(this.addr,e)}function MS(o,e){o.uniform3iv(this.addr,e)}function SS(o,e){o.uniform4iv(this.addr,e)}function bS(o,e){o.uniform1uiv(this.addr,e)}function ES(o,e){o.uniform2uiv(this.addr,e)}function TS(o,e){o.uniform3uiv(this.addr,e)}function AS(o,e){o.uniform4uiv(this.addr,e)}function wS(o,e,t){const n=this.cache,r=e.length,a=Bl(t,r);Sn(n,a)||(o.uniform1iv(this.addr,a),bn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||kp,a[l])}function RS(o,e,t){const n=this.cache,r=e.length,a=Bl(t,r);Sn(n,a)||(o.uniform1iv(this.addr,a),bn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||qp,a[l])}function CS(o,e,t){const n=this.cache,r=e.length,a=Bl(t,r);Sn(n,a)||(o.uniform1iv(this.addr,a),bn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Yp,a[l])}function PS(o,e,t){const n=this.cache,r=e.length,a=Bl(t,r);Sn(n,a)||(o.uniform1iv(this.addr,a),bn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Xp,a[l])}function LS(o){switch(o){case 5126:return dS;case 35664:return fS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return yS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return bS;case 36294:return ES;case 36295:return TS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return PS}}class IS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uS(t.type)}}class DS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const h=r[a];h.setValue(e,t[h.id],n)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Qp(o,e){o.seq.push(e),o.map[e.id]=e}function NS(o,e,t){const n=o.name,r=n.length;for(nd.lastIndex=0;;){const a=nd.exec(n),l=nd.lastIndex;let h=a[1];const f=a[2]==="]",p=a[3];if(f&&(h=h|0),p===void 0||p==="["&&l+2===r){Qp(t,p===void 0?new IS(h,o,e):new DS(h,o,e));break}else{let _=t.map[h];_===void 0&&(_=new US(h),Qp(t,_)),t=_}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);NS(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const h=t[a],f=n[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function em(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const FS=37297;let OS=0;function BS(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const h=l+1;n.push(`${h===e?">":" "} ${h}: ${t[l]}`)}return n.join(`
`)}function zS(o){const e=Wi.getPrimaries(Wi.workingColorSpace),t=Wi.getPrimaries(o);let n;switch(e===t?n="":e===hc&&t===lc?n="LinearDisplayP3ToLinearSRGB":e===lc&&t===hc&&(n="LinearSRGBToLinearDisplayP3"),o){case Jr:case oc:return[n,"LinearTransferOETF"];case vr:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function tm(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+BS(o.getShaderSource(e),l)}else return r}function VS(o,e){const t=zS(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GS(o,e){let t;switch(e){case Et:t="Linear";break;case Ct:t="Reinhard";break;case jt:t="OptimizedCineon";break;case Q:t="ACESFilmic";break;case pe:t="AgX";break;case Ae:t="Neutral";break;case z:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function HS(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sc).join(`
`)}function kS(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WS(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),l=a.name;let h=1;a.type===o.FLOAT_MAT2&&(h=2),a.type===o.FLOAT_MAT3&&(h=3),a.type===o.FLOAT_MAT4&&(h=4),t[l]={type:a.type,location:o.getAttribLocation(e,l),locationSize:h}}return t}function Sc(o){return o!==""}function im(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(XS,YS)}const qS=new Map;function YS(o,e){let t=_i[e];if(t===void 0){const n=qS.get(e);if(n!==void 0)t=_i[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rd(t)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(o){return o.replace(ZS,$S)}function $S(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function sm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KS(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===A?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===R&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case st:case it:e="ENVMAP_TYPE_CUBE";break;case ze:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jS(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case it:e="ENVMAP_MODE_REFRACTION";break}return e}function QS(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Je:e="ENVMAP_BLENDING_MULTIPLY";break;case zt:e="ENVMAP_BLENDING_MIX";break;case _t:e="ENVMAP_BLENDING_ADD";break}return e}function eb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tb(o,e,t,n){const r=o.getContext(),a=t.defines;let l=t.vertexShader,h=t.fragmentShader;const f=KS(t),p=JS(t),g=jS(t),_=QS(t),x=eb(t),v=HS(t),b=kS(a),w=r.createProgram();let E,S,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sc).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sc).join(`
`),S.length>0&&(S+=`
`)):(E=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sc).join(`
`),S=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==at?"#define TONE_MAPPING":"",t.toneMapping!==at?_i.tonemapping_pars_fragment:"",t.toneMapping!==at?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_i.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sc).join(`
`)),l=rd(l),l=im(l,t),l=nm(l,t),h=rd(h),h=im(h,t),h=nm(h,t),l=rm(l),h=rm(h),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,E=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=F+E+l,O=F+S+h,ne=em(r,r.VERTEX_SHADER,D),Z=em(r,r.FRAGMENT_SHADER,O);r.attachShader(w,ne),r.attachShader(w,Z),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function j(ue){if(o.debug.checkShaderErrors){const Le=r.getProgramInfoLog(w).trim(),ce=r.getShaderInfoLog(ne).trim(),Be=r.getShaderInfoLog(Z).trim();let He=!0,nt=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(He=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,w,ne,Z);else{const dt=tm(r,ne,"vertex"),Ue=tm(r,Z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+ue.name+`
Material Type: `+ue.type+`

Program Info Log: `+Le+`
`+dt+`
`+Ue)}else Le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Le):(ce===""||Be==="")&&(nt=!1);nt&&(ue.diagnostics={runnable:He,programLog:Le,vertexShader:{log:ce,prefix:E},fragmentShader:{log:Be,prefix:S}})}r.deleteShader(ne),r.deleteShader(Z),re=new zl(r,w),k=WS(r,w)}let re;this.getUniforms=function(){return re===void 0&&j(this),re};let k;this.getAttributes=function(){return k===void 0&&j(this),k};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(w,FS)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=ne,this.fragmentShader=Z,this}let ib=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rb(e),t.set(e,n)),n}}class rb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function sb(o,e,t,n,r,a,l){const h=new Ml,f=new nb,p=new Set,g=[],_=r.logarithmicDepthBuffer,x=r.vertexTextures;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(k){return p.add(k),k===0?"uv":`uv${k}`}function E(k,B,ue,Le,ce){const Be=Le.fog,He=ce.geometry,nt=k.isMeshStandardMaterial?Le.environment:null,dt=(k.isMeshStandardMaterial?t:e).get(k.envMap||nt),Ue=dt&&dt.mapping===ze?dt.image.height:null,Mt=b[k.type];k.precision!==null&&(v=r.getMaxPrecision(k.precision),v!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",v,"instead."));const xt=He.morphAttributes.position||He.morphAttributes.normal||He.morphAttributes.color,Wt=xt!==void 0?xt.length:0;let Mi=0;He.morphAttributes.position!==void 0&&(Mi=1),He.morphAttributes.normal!==void 0&&(Mi=2),He.morphAttributes.color!==void 0&&(Mi=3);let Yi,ke,St,Yt;if(Mt){const Zi=Ir[Mt];Yi=Zi.vertexShader,ke=Zi.fragmentShader}else Yi=k.vertexShader,ke=k.fragmentShader,f.update(k),St=f.getVertexShaderID(k),Yt=f.getFragmentShaderID(k);const bt=o.getRenderTarget(),Si=ce.isInstancedMesh===!0,Ci=ce.isBatchedMesh===!0,ge=!!k.map,Ii=!!k.matcap,We=!!dt,lt=!!k.aoMap,Ke=!!k.lightMap,wt=!!k.bumpMap,ct=!!k.normalMap,Ht=!!k.displacementMap,ni=!!k.emissiveMap,ie=!!k.metalnessMap,V=!!k.roughnessMap,Se=k.anisotropy>0,$e=k.clearcoat>0,rt=k.dispersion>0,Qe=k.iridescence>0,ti=k.sheen>0,Nt=k.transmission>0,Dt=Se&&!!k.anisotropyMap,xi=$e&&!!k.clearcoatMap,Tt=$e&&!!k.clearcoatNormalMap,ei=$e&&!!k.clearcoatRoughnessMap,Pi=Qe&&!!k.iridescenceMap,oi=Qe&&!!k.iridescenceThicknessMap,Xt=ti&&!!k.sheenColorMap,Ai=ti&&!!k.sheenRoughnessMap,Di=!!k.specularMap,pn=!!k.specularColorMap,wi=!!k.specularIntensityMap,de=Nt&&!!k.transmissionMap,et=Nt&&!!k.thicknessMap,Ze=!!k.gradientMap,Ft=!!k.alphaMap,Gt=k.alphaTest>0,Gi=!!k.alphaHash,en=!!k.extensions;let un=at;k.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(un=o.toneMapping);const Fn={shaderID:Mt,shaderType:k.type,shaderName:k.name,vertexShader:Yi,fragmentShader:ke,defines:k.defines,customVertexShaderID:St,customFragmentShaderID:Yt,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:v,batching:Ci,instancing:Si,instancingColor:Si&&ce.instanceColor!==null,instancingMorph:Si&&ce.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Jr,alphaToCoverage:!!k.alphaToCoverage,map:ge,matcap:Ii,envMap:We,envMapMode:We&&dt.mapping,envMapCubeUVHeight:Ue,aoMap:lt,lightMap:Ke,bumpMap:wt,normalMap:ct,displacementMap:x&&Ht,emissiveMap:ni,normalMapObjectSpace:ct&&k.normalMapType===jf,normalMapTangentSpace:ct&&k.normalMapType===ys,metalnessMap:ie,roughnessMap:V,anisotropy:Se,anisotropyMap:Dt,clearcoat:$e,clearcoatMap:xi,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ei,dispersion:rt,iridescence:Qe,iridescenceMap:Pi,iridescenceThicknessMap:oi,sheen:ti,sheenColorMap:Xt,sheenRoughnessMap:Ai,specularMap:Di,specularColorMap:pn,specularIntensityMap:wi,transmission:Nt,transmissionMap:de,thicknessMap:et,gradientMap:Ze,opaque:k.transparent===!1&&k.blending===W&&k.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Gt,alphaHash:Gi,combine:k.combine,mapUv:ge&&w(k.map.channel),aoMapUv:lt&&w(k.aoMap.channel),lightMapUv:Ke&&w(k.lightMap.channel),bumpMapUv:wt&&w(k.bumpMap.channel),normalMapUv:ct&&w(k.normalMap.channel),displacementMapUv:Ht&&w(k.displacementMap.channel),emissiveMapUv:ni&&w(k.emissiveMap.channel),metalnessMapUv:ie&&w(k.metalnessMap.channel),roughnessMapUv:V&&w(k.roughnessMap.channel),anisotropyMapUv:Dt&&w(k.anisotropyMap.channel),clearcoatMapUv:xi&&w(k.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&w(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ei&&w(k.clearcoatRoughnessMap.channel),iridescenceMapUv:Pi&&w(k.iridescenceMap.channel),iridescenceThicknessMapUv:oi&&w(k.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&w(k.sheenColorMap.channel),sheenRoughnessMapUv:Ai&&w(k.sheenRoughnessMap.channel),specularMapUv:Di&&w(k.specularMap.channel),specularColorMapUv:pn&&w(k.specularColorMap.channel),specularIntensityMapUv:wi&&w(k.specularIntensityMap.channel),transmissionMapUv:de&&w(k.transmissionMap.channel),thicknessMapUv:et&&w(k.thicknessMap.channel),alphaMapUv:Ft&&w(k.alphaMap.channel),vertexTangents:!!He.attributes.tangent&&(ct||Se),vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!He.attributes.color&&He.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!He.attributes.uv&&(ge||Ft),fog:!!Be,useFog:k.fog===!0,fogExp2:!!Be&&Be.isFogExp2,flatShading:k.flatShading===!0,sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:ce.isSkinnedMesh===!0,morphTargets:He.morphAttributes.position!==void 0,morphNormals:He.morphAttributes.normal!==void 0,morphColors:He.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Mi,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:k.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:un,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ge&&k.map.isVideoTexture===!0&&Wi.getTransfer(k.map.colorSpace)===ji,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===N,flipSided:k.side===I,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:en&&k.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:en&&k.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return Fn.vertexUv1s=p.has(1),Fn.vertexUv2s=p.has(2),Fn.vertexUv3s=p.has(3),p.clear(),Fn}function S(k){const B=[];if(k.shaderID?B.push(k.shaderID):(B.push(k.customVertexShaderID),B.push(k.customFragmentShaderID)),k.defines!==void 0)for(const ue in k.defines)B.push(ue),B.push(k.defines[ue]);return k.isRawShaderMaterial===!1&&(F(B,k),D(B,k),B.push(o.outputColorSpace)),B.push(k.customProgramCacheKey),B.join()}function F(k,B){k.push(B.precision),k.push(B.outputColorSpace),k.push(B.envMapMode),k.push(B.envMapCubeUVHeight),k.push(B.mapUv),k.push(B.alphaMapUv),k.push(B.lightMapUv),k.push(B.aoMapUv),k.push(B.bumpMapUv),k.push(B.normalMapUv),k.push(B.displacementMapUv),k.push(B.emissiveMapUv),k.push(B.metalnessMapUv),k.push(B.roughnessMapUv),k.push(B.anisotropyMapUv),k.push(B.clearcoatMapUv),k.push(B.clearcoatNormalMapUv),k.push(B.clearcoatRoughnessMapUv),k.push(B.iridescenceMapUv),k.push(B.iridescenceThicknessMapUv),k.push(B.sheenColorMapUv),k.push(B.sheenRoughnessMapUv),k.push(B.specularMapUv),k.push(B.specularColorMapUv),k.push(B.specularIntensityMapUv),k.push(B.transmissionMapUv),k.push(B.thicknessMapUv),k.push(B.combine),k.push(B.fogExp2),k.push(B.sizeAttenuation),k.push(B.morphTargetsCount),k.push(B.morphAttributeCount),k.push(B.numDirLights),k.push(B.numPointLights),k.push(B.numSpotLights),k.push(B.numSpotLightMaps),k.push(B.numHemiLights),k.push(B.numRectAreaLights),k.push(B.numDirLightShadows),k.push(B.numPointLightShadows),k.push(B.numSpotLightShadows),k.push(B.numSpotLightShadowsWithMaps),k.push(B.numLightProbes),k.push(B.shadowMapType),k.push(B.toneMapping),k.push(B.numClippingPlanes),k.push(B.numClipIntersection),k.push(B.depthPacking)}function D(k,B){h.disableAll(),B.supportsVertexTextures&&h.enable(0),B.instancing&&h.enable(1),B.instancingColor&&h.enable(2),B.instancingMorph&&h.enable(3),B.matcap&&h.enable(4),B.envMap&&h.enable(5),B.normalMapObjectSpace&&h.enable(6),B.normalMapTangentSpace&&h.enable(7),B.clearcoat&&h.enable(8),B.iridescence&&h.enable(9),B.alphaTest&&h.enable(10),B.vertexColors&&h.enable(11),B.vertexAlphas&&h.enable(12),B.vertexUv1s&&h.enable(13),B.vertexUv2s&&h.enable(14),B.vertexUv3s&&h.enable(15),B.vertexTangents&&h.enable(16),B.anisotropy&&h.enable(17),B.alphaHash&&h.enable(18),B.batching&&h.enable(19),B.dispersion&&h.enable(20),k.push(h.mask),h.disableAll(),B.fog&&h.enable(0),B.useFog&&h.enable(1),B.flatShading&&h.enable(2),B.logarithmicDepthBuffer&&h.enable(3),B.skinning&&h.enable(4),B.morphTargets&&h.enable(5),B.morphNormals&&h.enable(6),B.morphColors&&h.enable(7),B.premultipliedAlpha&&h.enable(8),B.shadowMapEnabled&&h.enable(9),B.useLegacyLights&&h.enable(10),B.doubleSided&&h.enable(11),B.flipSided&&h.enable(12),B.useDepthPacking&&h.enable(13),B.dithering&&h.enable(14),B.transmission&&h.enable(15),B.sheen&&h.enable(16),B.opaque&&h.enable(17),B.pointsUvs&&h.enable(18),B.decodeVideoTexture&&h.enable(19),B.alphaToCoverage&&h.enable(20),k.push(h.mask)}function O(k){const B=b[k.type];let ue;if(B){const Le=Ir[B];ue=Lp.clone(Le.uniforms)}else ue=k.uniforms;return ue}function ne(k,B){let ue;for(let Le=0,ce=g.length;Le<ce;Le++){const Be=g[Le];if(Be.cacheKey===B){ue=Be,++ue.usedTimes;break}}return ue===void 0&&(ue=new tb(o,B,k,a),g.push(ue)),ue}function Z(k){if(--k.usedTimes===0){const B=g.indexOf(k);g[B]=g[g.length-1],g.pop(),k.destroy()}}function j(k){f.remove(k)}function re(){f.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:O,acquireProgram:ne,releaseProgram:Z,releaseShaderCache:j,programs:g,dispose:re}}function ab(){let o=new WeakMap;function e(a){let l=o.get(a);return l===void 0&&(l={},o.set(a,l)),l}function t(a){o.delete(a)}function n(a,l,h){o.get(a)[l]=h}function r(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function am(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function om(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(_,x,v,b,w,E){let S=o[e];return S===void 0?(S={id:_.id,object:_,geometry:x,material:v,groupOrder:b,renderOrder:_.renderOrder,z:w,group:E},o[e]=S):(S.id=_.id,S.object=_,S.geometry=x,S.material=v,S.groupOrder=b,S.renderOrder=_.renderOrder,S.z=w,S.group=E),e++,S}function h(_,x,v,b,w,E){const S=l(_,x,v,b,w,E);v.transmission>0?n.push(S):v.transparent===!0?r.push(S):t.push(S)}function f(_,x,v,b,w,E){const S=l(_,x,v,b,w,E);v.transmission>0?n.unshift(S):v.transparent===!0?r.unshift(S):t.unshift(S)}function p(_,x){t.length>1&&t.sort(_||ob),n.length>1&&n.sort(x||am),r.length>1&&r.sort(x||am)}function g(){for(let _=e,x=o.length;_<x;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:h,unshift:f,finish:g,sort:p}}function cb(){let o=new WeakMap;function e(n,r){const a=o.get(n);let l;return a===void 0?(l=new om,o.set(n,[l])):r>=a.length?(l=new om,a.push(l)):l=a[r],l}function t(){o=new WeakMap}return{get:e,dispose:t}}function lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Bt};break;case"SpotLight":t={position:new J,direction:new J,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=t,t}}}function hb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let ub=0;function db(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function fb(o){const e=new lb,t=hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new J);const r=new J,a=new ri,l=new ri;function h(p,g){let _=0,x=0,v=0;for(let ue=0;ue<9;ue++)n.probe[ue].set(0,0,0);let b=0,w=0,E=0,S=0,F=0,D=0,O=0,ne=0,Z=0,j=0,re=0;p.sort(db);const k=g===!0?Math.PI:1;for(let ue=0,Le=p.length;ue<Le;ue++){const ce=p[ue],Be=ce.color,He=ce.intensity,nt=ce.distance,dt=ce.shadow&&ce.shadow.map?ce.shadow.map.texture:null;if(ce.isAmbientLight)_+=Be.r*He*k,x+=Be.g*He*k,v+=Be.b*He*k;else if(ce.isLightProbe){for(let Ue=0;Ue<9;Ue++)n.probe[Ue].addScaledVector(ce.sh.coefficients[Ue],He);re++}else if(ce.isDirectionalLight){const Ue=e.get(ce);if(Ue.color.copy(ce.color).multiplyScalar(ce.intensity*k),ce.castShadow){const Mt=ce.shadow,xt=t.get(ce);xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,n.directionalShadow[b]=xt,n.directionalShadowMap[b]=dt,n.directionalShadowMatrix[b]=ce.shadow.matrix,D++}n.directional[b]=Ue,b++}else if(ce.isSpotLight){const Ue=e.get(ce);Ue.position.setFromMatrixPosition(ce.matrixWorld),Ue.color.copy(Be).multiplyScalar(He*k),Ue.distance=nt,Ue.coneCos=Math.cos(ce.angle),Ue.penumbraCos=Math.cos(ce.angle*(1-ce.penumbra)),Ue.decay=ce.decay,n.spot[E]=Ue;const Mt=ce.shadow;if(ce.map&&(n.spotLightMap[Z]=ce.map,Z++,Mt.updateMatrices(ce),ce.castShadow&&j++),n.spotLightMatrix[E]=Mt.matrix,ce.castShadow){const xt=t.get(ce);xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,n.spotShadow[E]=xt,n.spotShadowMap[E]=dt,ne++}E++}else if(ce.isRectAreaLight){const Ue=e.get(ce);Ue.color.copy(Be).multiplyScalar(He),Ue.halfWidth.set(ce.width*.5,0,0),Ue.halfHeight.set(0,ce.height*.5,0),n.rectArea[S]=Ue,S++}else if(ce.isPointLight){const Ue=e.get(ce);if(Ue.color.copy(ce.color).multiplyScalar(ce.intensity*k),Ue.distance=ce.distance,Ue.decay=ce.decay,ce.castShadow){const Mt=ce.shadow,xt=t.get(ce);xt.shadowBias=Mt.bias,xt.shadowNormalBias=Mt.normalBias,xt.shadowRadius=Mt.radius,xt.shadowMapSize=Mt.mapSize,xt.shadowCameraNear=Mt.camera.near,xt.shadowCameraFar=Mt.camera.far,n.pointShadow[w]=xt,n.pointShadowMap[w]=dt,n.pointShadowMatrix[w]=ce.shadow.matrix,O++}n.point[w]=Ue,w++}else if(ce.isHemisphereLight){const Ue=e.get(ce);Ue.skyColor.copy(ce.color).multiplyScalar(He*k),Ue.groundColor.copy(ce.groundColor).multiplyScalar(He*k),n.hemi[F]=Ue,F++}}S>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=x,n.ambient[2]=v;const B=n.hash;(B.directionalLength!==b||B.pointLength!==w||B.spotLength!==E||B.rectAreaLength!==S||B.hemiLength!==F||B.numDirectionalShadows!==D||B.numPointShadows!==O||B.numSpotShadows!==ne||B.numSpotMaps!==Z||B.numLightProbes!==re)&&(n.directional.length=b,n.spot.length=E,n.rectArea.length=S,n.point.length=w,n.hemi.length=F,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=O,n.pointShadowMap.length=O,n.spotShadow.length=ne,n.spotShadowMap.length=ne,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=O,n.spotLightMatrix.length=ne+Z-j,n.spotLightMap.length=Z,n.numSpotLightShadowsWithMaps=j,n.numLightProbes=re,B.directionalLength=b,B.pointLength=w,B.spotLength=E,B.rectAreaLength=S,B.hemiLength=F,B.numDirectionalShadows=D,B.numPointShadows=O,B.numSpotShadows=ne,B.numSpotMaps=Z,B.numLightProbes=re,n.version=ub++)}function f(p,g){let _=0,x=0,v=0,b=0,w=0;const E=g.matrixWorldInverse;for(let S=0,F=p.length;S<F;S++){const D=p[S];if(D.isDirectionalLight){const O=n.directional[_];O.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(E),_++}else if(D.isSpotLight){const O=n.spot[v];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(E),O.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(E),v++}else if(D.isRectAreaLight){const O=n.rectArea[b];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(E),l.identity(),a.copy(D.matrixWorld),a.premultiply(E),l.extractRotation(a),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(l),O.halfHeight.applyMatrix4(l),b++}else if(D.isPointLight){const O=n.point[x];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(E),x++}else if(D.isHemisphereLight){const O=n.hemi[w];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(E),w++}}}return{setup:h,setupView:f,state:n}}function cm(o){const e=new fb(o),t=[],n=[];function r(g){p.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function l(g){n.push(g)}function h(g){e.setup(t,g)}function f(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:l}}function pb(o){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let h;return l===void 0?(h=new cm(o),e.set(r,[h])):a>=l.length?(h=new cm(o),l.push(h)):h=l[a],h}function n(){e=new WeakMap}return{get:t,dispose:n}}class sd extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ad extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`;function _b(o,e,t){let n=new Mc;const r=new je,a=new je,l=new Xi,h=new sd({depthPacking:Jf}),f=new ad,p={},g=t.maxTextureSize,_={[L]:I,[I]:L,[N]:N},x=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const b=new yi;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new xn(b,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T;let S=this.type;this.render=function(Z,j,re){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||Z.length===0)return;const k=o.getRenderTarget(),B=o.getActiveCubeFace(),ue=o.getActiveMipmapLevel(),Le=o.state;Le.setBlending(G),Le.buffers.color.setClear(1,1,1,1),Le.buffers.depth.setTest(!0),Le.setScissorTest(!1);const ce=S!==R&&this.type===R,Be=S===R&&this.type!==R;for(let He=0,nt=Z.length;He<nt;He++){const dt=Z[He],Ue=dt.shadow;if(Ue===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(Ue.autoUpdate===!1&&Ue.needsUpdate===!1)continue;r.copy(Ue.mapSize);const Mt=Ue.getFrameExtents();if(r.multiply(Mt),a.copy(Ue.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/Mt.x),r.x=a.x*Mt.x,Ue.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/Mt.y),r.y=a.y*Mt.y,Ue.mapSize.y=a.y)),Ue.map===null||ce===!0||Be===!0){const Wt=this.type!==R?{minFilter:Vt,magFilter:Vt}:{};Ue.map!==null&&Ue.map.dispose(),Ue.map=new wr(r.x,r.y,Wt),Ue.map.texture.name=dt.name+".shadowMap",Ue.camera.updateProjectionMatrix()}o.setRenderTarget(Ue.map),o.clear();const xt=Ue.getViewportCount();for(let Wt=0;Wt<xt;Wt++){const Mi=Ue.getViewport(Wt);l.set(a.x*Mi.x,a.y*Mi.y,a.x*Mi.z,a.y*Mi.w),Le.viewport(l),Ue.updateMatrices(dt,Wt),n=Ue.getFrustum(),O(j,re,Ue.camera,dt,this.type)}Ue.isPointLightShadow!==!0&&this.type===R&&F(Ue,re),Ue.needsUpdate=!1}S=this.type,E.needsUpdate=!1,o.setRenderTarget(k,B,ue)};function F(Z,j){const re=e.update(w);x.defines.VSM_SAMPLES!==Z.blurSamples&&(x.defines.VSM_SAMPLES=Z.blurSamples,v.defines.VSM_SAMPLES=Z.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),Z.mapPass===null&&(Z.mapPass=new wr(r.x,r.y)),x.uniforms.shadow_pass.value=Z.map.texture,x.uniforms.resolution.value=Z.mapSize,x.uniforms.radius.value=Z.radius,o.setRenderTarget(Z.mapPass),o.clear(),o.renderBufferDirect(j,null,re,x,w,null),v.uniforms.shadow_pass.value=Z.mapPass.texture,v.uniforms.resolution.value=Z.mapSize,v.uniforms.radius.value=Z.radius,o.setRenderTarget(Z.map),o.clear(),o.renderBufferDirect(j,null,re,v,w,null)}function D(Z,j,re,k){let B=null;const ue=re.isPointLight===!0?Z.customDistanceMaterial:Z.customDepthMaterial;if(ue!==void 0)B=ue;else if(B=re.isPointLight===!0?f:h,o.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0){const Le=B.uuid,ce=j.uuid;let Be=p[Le];Be===void 0&&(Be={},p[Le]=Be);let He=Be[ce];He===void 0&&(He=B.clone(),Be[ce]=He,j.addEventListener("dispose",ne)),B=He}if(B.visible=j.visible,B.wireframe=j.wireframe,k===R?B.side=j.shadowSide!==null?j.shadowSide:j.side:B.side=j.shadowSide!==null?j.shadowSide:_[j.side],B.alphaMap=j.alphaMap,B.alphaTest=j.alphaTest,B.map=j.map,B.clipShadows=j.clipShadows,B.clippingPlanes=j.clippingPlanes,B.clipIntersection=j.clipIntersection,B.displacementMap=j.displacementMap,B.displacementScale=j.displacementScale,B.displacementBias=j.displacementBias,B.wireframeLinewidth=j.wireframeLinewidth,B.linewidth=j.linewidth,re.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Le=o.properties.get(B);Le.light=re}return B}function O(Z,j,re,k,B){if(Z.visible===!1)return;if(Z.layers.test(j.layers)&&(Z.isMesh||Z.isLine||Z.isPoints)&&(Z.castShadow||Z.receiveShadow&&B===R)&&(!Z.frustumCulled||n.intersectsObject(Z))){Z.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,Z.matrixWorld);const ce=e.update(Z),Be=Z.material;if(Array.isArray(Be)){const He=ce.groups;for(let nt=0,dt=He.length;nt<dt;nt++){const Ue=He[nt],Mt=Be[Ue.materialIndex];if(Mt&&Mt.visible){const xt=D(Z,Mt,k,B);Z.onBeforeShadow(o,Z,j,re,ce,xt,Ue),o.renderBufferDirect(re,null,ce,xt,Z,Ue),Z.onAfterShadow(o,Z,j,re,ce,xt,Ue)}}}else if(Be.visible){const He=D(Z,Be,k,B);Z.onBeforeShadow(o,Z,j,re,ce,He,null),o.renderBufferDirect(re,null,ce,He,Z,null),Z.onAfterShadow(o,Z,j,re,ce,He,null)}}const Le=Z.children;for(let ce=0,Be=Le.length;ce<Be;ce++)O(Le[ce],j,re,k,B)}function ne(Z){Z.target.removeEventListener("dispose",ne);for(const re in p){const k=p[re],B=Z.target.uuid;B in k&&(k[B].dispose(),delete k[B])}}}function xb(o){function e(){let de=!1;const et=new Xi;let Ze=null;const Ft=new Xi(0,0,0,0);return{setMask:function(Gt){Ze!==Gt&&!de&&(o.colorMask(Gt,Gt,Gt,Gt),Ze=Gt)},setLocked:function(Gt){de=Gt},setClear:function(Gt,Gi,en,un,Fn){Fn===!0&&(Gt*=un,Gi*=un,en*=un),et.set(Gt,Gi,en,un),Ft.equals(et)===!1&&(o.clearColor(Gt,Gi,en,un),Ft.copy(et))},reset:function(){de=!1,Ze=null,Ft.set(-1,0,0,0)}}}function t(){let de=!1,et=null,Ze=null,Ft=null;return{setTest:function(Gt){Gt?Yt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Gt){et!==Gt&&!de&&(o.depthMask(Gt),et=Gt)},setFunc:function(Gt){if(Ze!==Gt){switch(Gt){case Fe:o.depthFunc(o.NEVER);break;case yt:o.depthFunc(o.ALWAYS);break;case kt:o.depthFunc(o.LESS);break;case oe:o.depthFunc(o.LEQUAL);break;case be:o.depthFunc(o.EQUAL);break;case we:o.depthFunc(o.GEQUAL);break;case te:o.depthFunc(o.GREATER);break;case tt:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ze=Gt}},setLocked:function(Gt){de=Gt},setClear:function(Gt){Ft!==Gt&&(o.clearDepth(Gt),Ft=Gt)},reset:function(){de=!1,et=null,Ze=null,Ft=null}}}function n(){let de=!1,et=null,Ze=null,Ft=null,Gt=null,Gi=null,en=null,un=null,Fn=null;return{setTest:function(Zi){de||(Zi?Yt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Zi){et!==Zi&&!de&&(o.stencilMask(Zi),et=Zi)},setFunc:function(Zi,Gr,Kn){(Ze!==Zi||Ft!==Gr||Gt!==Kn)&&(o.stencilFunc(Zi,Gr,Kn),Ze=Zi,Ft=Gr,Gt=Kn)},setOp:function(Zi,Gr,Kn){(Gi!==Zi||en!==Gr||un!==Kn)&&(o.stencilOp(Zi,Gr,Kn),Gi=Zi,en=Gr,un=Kn)},setLocked:function(Zi){de=Zi},setClear:function(Zi){Fn!==Zi&&(o.clearStencil(Zi),Fn=Zi)},reset:function(){de=!1,et=null,Ze=null,Ft=null,Gt=null,Gi=null,en=null,un=null,Fn=null}}}const r=new e,a=new t,l=new n,h=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,x=[],v=null,b=!1,w=null,E=null,S=null,F=null,D=null,O=null,ne=null,Z=new Bt(0,0,0),j=0,re=!1,k=null,B=null,ue=null,Le=null,ce=null;const Be=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let He=!1,nt=0;const dt=o.getParameter(o.VERSION);dt.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(dt)[1]),He=nt>=1):dt.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),He=nt>=2);let Ue=null,Mt={};const xt=o.getParameter(o.SCISSOR_BOX),Wt=o.getParameter(o.VIEWPORT),Mi=new Xi().fromArray(xt),Yi=new Xi().fromArray(Wt);function ke(de,et,Ze,Ft){const Gt=new Uint8Array(4),Gi=o.createTexture();o.bindTexture(de,Gi),o.texParameteri(de,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(de,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let en=0;en<Ze;en++)de===o.TEXTURE_3D||de===o.TEXTURE_2D_ARRAY?o.texImage3D(et,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(et+en,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Gi}const St={};St[o.TEXTURE_2D]=ke(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=ke(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=ke(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=ke(o.TEXTURE_3D,o.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Yt(o.DEPTH_TEST),a.setFunc(oe),wt(!1),ct(d),Yt(o.CULL_FACE),lt(G);function Yt(de){p[de]!==!0&&(o.enable(de),p[de]=!0)}function bt(de){p[de]!==!1&&(o.disable(de),p[de]=!1)}function Si(de,et){return g[de]!==et?(o.bindFramebuffer(de,et),g[de]=et,de===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=et),de===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=et),!0):!1}function Ci(de,et){let Ze=x,Ft=!1;if(de){Ze=_.get(et),Ze===void 0&&(Ze=[],_.set(et,Ze));const Gt=de.textures;if(Ze.length!==Gt.length||Ze[0]!==o.COLOR_ATTACHMENT0){for(let Gi=0,en=Gt.length;Gi<en;Gi++)Ze[Gi]=o.COLOR_ATTACHMENT0+Gi;Ze.length=Gt.length,Ft=!0}}else Ze[0]!==o.BACK&&(Ze[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Ze)}function ge(de){return v!==de?(o.useProgram(de),v=de,!0):!1}const Ii={[ee]:o.FUNC_ADD,[xe]:o.FUNC_SUBTRACT,[se]:o.FUNC_REVERSE_SUBTRACT};Ii[ae]=o.MIN,Ii[Ne]=o.MAX;const We={[K]:o.ZERO,[H]:o.ONE,[Me]:o.SRC_COLOR,[he]:o.SRC_ALPHA,[vt]:o.SRC_ALPHA_SATURATE,[ht]:o.DST_COLOR,[Xe]:o.DST_ALPHA,[Ie]:o.ONE_MINUS_SRC_COLOR,[qe]:o.ONE_MINUS_SRC_ALPHA,[De]:o.ONE_MINUS_DST_COLOR,[gt]:o.ONE_MINUS_DST_ALPHA,[ft]:o.CONSTANT_COLOR,[Kt]:o.ONE_MINUS_CONSTANT_COLOR,[vi]:o.CONSTANT_ALPHA,[Hi]:o.ONE_MINUS_CONSTANT_ALPHA};function lt(de,et,Ze,Ft,Gt,Gi,en,un,Fn,Zi){if(de===G){b===!0&&(bt(o.BLEND),b=!1);return}if(b===!1&&(Yt(o.BLEND),b=!0),de!==X){if(de!==w||Zi!==re){if((E!==ee||D!==ee)&&(o.blendEquation(o.FUNC_ADD),E=ee,D=ee),Zi)switch(de){case W:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case P:o.blendFunc(o.ONE,o.ONE);break;case C:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",de);break}else switch(de){case W:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case P:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case C:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",de);break}S=null,F=null,O=null,ne=null,Z.set(0,0,0),j=0,w=de,re=Zi}return}Gt=Gt||et,Gi=Gi||Ze,en=en||Ft,(et!==E||Gt!==D)&&(o.blendEquationSeparate(Ii[et],Ii[Gt]),E=et,D=Gt),(Ze!==S||Ft!==F||Gi!==O||en!==ne)&&(o.blendFuncSeparate(We[Ze],We[Ft],We[Gi],We[en]),S=Ze,F=Ft,O=Gi,ne=en),(un.equals(Z)===!1||Fn!==j)&&(o.blendColor(un.r,un.g,un.b,Fn),Z.copy(un),j=Fn),w=de,re=!1}function Ke(de,et){de.side===N?bt(o.CULL_FACE):Yt(o.CULL_FACE);let Ze=de.side===I;et&&(Ze=!Ze),wt(Ze),de.blending===W&&de.transparent===!1?lt(G):lt(de.blending,de.blendEquation,de.blendSrc,de.blendDst,de.blendEquationAlpha,de.blendSrcAlpha,de.blendDstAlpha,de.blendColor,de.blendAlpha,de.premultipliedAlpha),a.setFunc(de.depthFunc),a.setTest(de.depthTest),a.setMask(de.depthWrite),r.setMask(de.colorWrite);const Ft=de.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(de.stencilWriteMask),l.setFunc(de.stencilFunc,de.stencilRef,de.stencilFuncMask),l.setOp(de.stencilFail,de.stencilZFail,de.stencilZPass)),ni(de.polygonOffset,de.polygonOffsetFactor,de.polygonOffsetUnits),de.alphaToCoverage===!0?Yt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function wt(de){k!==de&&(de?o.frontFace(o.CW):o.frontFace(o.CCW),k=de)}function ct(de){de!==c?(Yt(o.CULL_FACE),de!==B&&(de===d?o.cullFace(o.BACK):de===m?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),B=de}function Ht(de){de!==ue&&(He&&o.lineWidth(de),ue=de)}function ni(de,et,Ze){de?(Yt(o.POLYGON_OFFSET_FILL),(Le!==et||ce!==Ze)&&(o.polygonOffset(et,Ze),Le=et,ce=Ze)):bt(o.POLYGON_OFFSET_FILL)}function ie(de){de?Yt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function V(de){de===void 0&&(de=o.TEXTURE0+Be-1),Ue!==de&&(o.activeTexture(de),Ue=de)}function Se(de,et,Ze){Ze===void 0&&(Ue===null?Ze=o.TEXTURE0+Be-1:Ze=Ue);let Ft=Mt[Ze];Ft===void 0&&(Ft={type:void 0,texture:void 0},Mt[Ze]=Ft),(Ft.type!==de||Ft.texture!==et)&&(Ue!==Ze&&(o.activeTexture(Ze),Ue=Ze),o.bindTexture(de,et||St[de]),Ft.type=de,Ft.texture=et)}function $e(){const de=Mt[Ue];de!==void 0&&de.type!==void 0&&(o.bindTexture(de.type,null),de.type=void 0,de.texture=void 0)}function rt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Qe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function ti(){try{o.texSubImage2D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Nt(){try{o.texSubImage3D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function xi(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Tt(){try{o.texStorage2D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function ei(){try{o.texStorage3D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Pi(){try{o.texImage2D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function oi(){try{o.texImage3D.apply(o,arguments)}catch(de){console.error("THREE.WebGLState:",de)}}function Xt(de){Mi.equals(de)===!1&&(o.scissor(de.x,de.y,de.z,de.w),Mi.copy(de))}function Ai(de){Yi.equals(de)===!1&&(o.viewport(de.x,de.y,de.z,de.w),Yi.copy(de))}function Di(de,et){let Ze=f.get(et);Ze===void 0&&(Ze=new WeakMap,f.set(et,Ze));let Ft=Ze.get(de);Ft===void 0&&(Ft=o.getUniformBlockIndex(et,de.name),Ze.set(de,Ft))}function pn(de,et){const Ft=f.get(et).get(de);h.get(et)!==Ft&&(o.uniformBlockBinding(et,Ft,de.__bindingPointIndex),h.set(et,Ft))}function wi(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},Ue=null,Mt={},g={},_=new WeakMap,x=[],v=null,b=!1,w=null,E=null,S=null,F=null,D=null,O=null,ne=null,Z=new Bt(0,0,0),j=0,re=!1,k=null,B=null,ue=null,Le=null,ce=null,Mi.set(0,0,o.canvas.width,o.canvas.height),Yi.set(0,0,o.canvas.width,o.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Yt,disable:bt,bindFramebuffer:Si,drawBuffers:Ci,useProgram:ge,setBlending:lt,setMaterial:Ke,setFlipSided:wt,setCullFace:ct,setLineWidth:Ht,setPolygonOffset:ni,setScissorTest:ie,activeTexture:V,bindTexture:Se,unbindTexture:$e,compressedTexImage2D:rt,compressedTexImage3D:Qe,texImage2D:Pi,texImage3D:oi,updateUBOMapping:Di,uniformBlockBinding:pn,texStorage2D:Tt,texStorage3D:ei,texSubImage2D:ti,texSubImage3D:Nt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:xi,scissor:Xt,viewport:Ai,reset:wi}}function vb(o,e,t,n,r,a,l){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new je,g=new WeakMap;let _;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(ie,V){return v?new OffscreenCanvas(ie,V):pc("canvas")}function w(ie,V,Se){let $e=1;const rt=ni(ie);if((rt.width>Se||rt.height>Se)&&($e=Se/Math.max(rt.width,rt.height)),$e<1)if(typeof HTMLImageElement<"u"&&ie instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&ie instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&ie instanceof ImageBitmap||typeof VideoFrame<"u"&&ie instanceof VideoFrame){const Qe=Math.floor($e*rt.width),ti=Math.floor($e*rt.height);_===void 0&&(_=b(Qe,ti));const Nt=V?b(Qe,ti):_;return Nt.width=Qe,Nt.height=ti,Nt.getContext("2d").drawImage(ie,0,0,Qe,ti),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Qe+"x"+ti+")."),Nt}else return"data"in ie&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),ie;return ie}function E(ie){return ie.generateMipmaps&&ie.minFilter!==Vt&&ie.minFilter!==Ge}function S(ie){o.generateMipmap(ie)}function F(ie,V,Se,$e,rt=!1){if(ie!==null){if(o[ie]!==void 0)return o[ie];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+ie+"'")}let Qe=V;if(V===o.RED&&(Se===o.FLOAT&&(Qe=o.R32F),Se===o.HALF_FLOAT&&(Qe=o.R16F),Se===o.UNSIGNED_BYTE&&(Qe=o.R8)),V===o.RED_INTEGER&&(Se===o.UNSIGNED_BYTE&&(Qe=o.R8UI),Se===o.UNSIGNED_SHORT&&(Qe=o.R16UI),Se===o.UNSIGNED_INT&&(Qe=o.R32UI),Se===o.BYTE&&(Qe=o.R8I),Se===o.SHORT&&(Qe=o.R16I),Se===o.INT&&(Qe=o.R32I)),V===o.RG&&(Se===o.FLOAT&&(Qe=o.RG32F),Se===o.HALF_FLOAT&&(Qe=o.RG16F),Se===o.UNSIGNED_BYTE&&(Qe=o.RG8)),V===o.RG_INTEGER&&(Se===o.UNSIGNED_BYTE&&(Qe=o.RG8UI),Se===o.UNSIGNED_SHORT&&(Qe=o.RG16UI),Se===o.UNSIGNED_INT&&(Qe=o.RG32UI),Se===o.BYTE&&(Qe=o.RG8I),Se===o.SHORT&&(Qe=o.RG16I),Se===o.INT&&(Qe=o.RG32I)),V===o.RGB&&Se===o.UNSIGNED_INT_5_9_9_9_REV&&(Qe=o.RGB9_E5),V===o.RGBA){const ti=rt?cc:Wi.getTransfer($e);Se===o.FLOAT&&(Qe=o.RGBA32F),Se===o.HALF_FLOAT&&(Qe=o.RGBA16F),Se===o.UNSIGNED_BYTE&&(Qe=ti===ji?o.SRGB8_ALPHA8:o.RGBA8),Se===o.UNSIGNED_SHORT_4_4_4_4&&(Qe=o.RGBA4),Se===o.UNSIGNED_SHORT_5_5_5_1&&(Qe=o.RGB5_A1)}return(Qe===o.R16F||Qe===o.R32F||Qe===o.RG16F||Qe===o.RG32F||Qe===o.RGBA16F||Qe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Qe}function D(ie,V){return E(ie)===!0||ie.isFramebufferTexture&&ie.minFilter!==Vt&&ie.minFilter!==Ge?Math.log2(Math.max(V.width,V.height))+1:ie.mipmaps!==void 0&&ie.mipmaps.length>0?ie.mipmaps.length:ie.isCompressedTexture&&Array.isArray(ie.image)?V.mipmaps.length:1}function O(ie){const V=ie.target;V.removeEventListener("dispose",O),Z(V),V.isVideoTexture&&g.delete(V)}function ne(ie){const V=ie.target;V.removeEventListener("dispose",ne),re(V)}function Z(ie){const V=n.get(ie);if(V.__webglInit===void 0)return;const Se=ie.source,$e=x.get(Se);if($e){const rt=$e[V.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&j(ie),Object.keys($e).length===0&&x.delete(Se)}n.remove(ie)}function j(ie){const V=n.get(ie);o.deleteTexture(V.__webglTexture);const Se=ie.source,$e=x.get(Se);delete $e[V.__cacheKey],l.memory.textures--}function re(ie){const V=n.get(ie);if(ie.depthTexture&&ie.depthTexture.dispose(),ie.isWebGLCubeRenderTarget)for(let $e=0;$e<6;$e++){if(Array.isArray(V.__webglFramebuffer[$e]))for(let rt=0;rt<V.__webglFramebuffer[$e].length;rt++)o.deleteFramebuffer(V.__webglFramebuffer[$e][rt]);else o.deleteFramebuffer(V.__webglFramebuffer[$e]);V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[$e])}else{if(Array.isArray(V.__webglFramebuffer))for(let $e=0;$e<V.__webglFramebuffer.length;$e++)o.deleteFramebuffer(V.__webglFramebuffer[$e]);else o.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let $e=0;$e<V.__webglColorRenderbuffer.length;$e++)V.__webglColorRenderbuffer[$e]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[$e]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}const Se=ie.textures;for(let $e=0,rt=Se.length;$e<rt;$e++){const Qe=n.get(Se[$e]);Qe.__webglTexture&&(o.deleteTexture(Qe.__webglTexture),l.memory.textures--),n.remove(Se[$e])}n.remove(ie)}let k=0;function B(){k=0}function ue(){const ie=k;return ie>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+ie+" texture units while this GPU supports only "+r.maxTextures),k+=1,ie}function Le(ie){const V=[];return V.push(ie.wrapS),V.push(ie.wrapT),V.push(ie.wrapR||0),V.push(ie.magFilter),V.push(ie.minFilter),V.push(ie.anisotropy),V.push(ie.internalFormat),V.push(ie.format),V.push(ie.type),V.push(ie.generateMipmaps),V.push(ie.premultiplyAlpha),V.push(ie.flipY),V.push(ie.unpackAlignment),V.push(ie.colorSpace),V.join()}function ce(ie,V){const Se=n.get(ie);if(ie.isVideoTexture&&ct(ie),ie.isRenderTargetTexture===!1&&ie.version>0&&Se.__version!==ie.version){const $e=ie.image;if($e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mi(Se,ie,V);return}}t.bindTexture(o.TEXTURE_2D,Se.__webglTexture,o.TEXTURE0+V)}function Be(ie,V){const Se=n.get(ie);if(ie.version>0&&Se.__version!==ie.version){Mi(Se,ie,V);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Se.__webglTexture,o.TEXTURE0+V)}function He(ie,V){const Se=n.get(ie);if(ie.version>0&&Se.__version!==ie.version){Mi(Se,ie,V);return}t.bindTexture(o.TEXTURE_3D,Se.__webglTexture,o.TEXTURE0+V)}function nt(ie,V){const Se=n.get(ie);if(ie.version>0&&Se.__version!==ie.version){Yi(Se,ie,V);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture,o.TEXTURE0+V)}const dt={[Ut]:o.REPEAT,[mt]:o.CLAMP_TO_EDGE,[ut]:o.MIRRORED_REPEAT},Ue={[Vt]:o.NEAREST,[ai]:o.NEAREST_MIPMAP_NEAREST,[si]:o.NEAREST_MIPMAP_LINEAR,[Ge]:o.LINEAR,[Oe]:o.LINEAR_MIPMAP_NEAREST,[At]:o.LINEAR_MIPMAP_LINEAR},Mt={[Qf]:o.NEVER,[sp]:o.ALWAYS,[ep]:o.LESS,[Tu]:o.LEQUAL,[tp]:o.EQUAL,[rp]:o.GEQUAL,[ip]:o.GREATER,[np]:o.NOTEQUAL};function xt(ie,V){if(V.type===kn&&e.has("OES_texture_float_linear")===!1&&(V.magFilter===Ge||V.magFilter===Oe||V.magFilter===si||V.magFilter===At||V.minFilter===Ge||V.minFilter===Oe||V.minFilter===si||V.minFilter===At)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(ie,o.TEXTURE_WRAP_S,dt[V.wrapS]),o.texParameteri(ie,o.TEXTURE_WRAP_T,dt[V.wrapT]),(ie===o.TEXTURE_3D||ie===o.TEXTURE_2D_ARRAY)&&o.texParameteri(ie,o.TEXTURE_WRAP_R,dt[V.wrapR]),o.texParameteri(ie,o.TEXTURE_MAG_FILTER,Ue[V.magFilter]),o.texParameteri(ie,o.TEXTURE_MIN_FILTER,Ue[V.minFilter]),V.compareFunction&&(o.texParameteri(ie,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(ie,o.TEXTURE_COMPARE_FUNC,Mt[V.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===Vt||V.minFilter!==si&&V.minFilter!==At||V.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||n.get(V).__currentAnisotropy){const Se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(ie,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,r.getMaxAnisotropy())),n.get(V).__currentAnisotropy=V.anisotropy}}}function Wt(ie,V){let Se=!1;ie.__webglInit===void 0&&(ie.__webglInit=!0,V.addEventListener("dispose",O));const $e=V.source;let rt=x.get($e);rt===void 0&&(rt={},x.set($e,rt));const Qe=Le(V);if(Qe!==ie.__cacheKey){rt[Qe]===void 0&&(rt[Qe]={texture:o.createTexture(),usedTimes:0},l.memory.textures++,Se=!0),rt[Qe].usedTimes++;const ti=rt[ie.__cacheKey];ti!==void 0&&(rt[ie.__cacheKey].usedTimes--,ti.usedTimes===0&&j(V)),ie.__cacheKey=Qe,ie.__webglTexture=rt[Qe].texture}return Se}function Mi(ie,V,Se){let $e=o.TEXTURE_2D;(V.isDataArrayTexture||V.isCompressedArrayTexture)&&($e=o.TEXTURE_2D_ARRAY),V.isData3DTexture&&($e=o.TEXTURE_3D);const rt=Wt(ie,V),Qe=V.source;t.bindTexture($e,ie.__webglTexture,o.TEXTURE0+Se);const ti=n.get(Qe);if(Qe.version!==ti.__version||rt===!0){t.activeTexture(o.TEXTURE0+Se);const Nt=Wi.getPrimaries(Wi.workingColorSpace),Dt=V.colorSpace===Kr?null:Wi.getPrimaries(V.colorSpace),xi=V.colorSpace===Kr||Nt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,V.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,V.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xi);let Tt=w(V.image,!1,r.maxTextureSize);Tt=Ht(V,Tt);const ei=a.convert(V.format,V.colorSpace),Pi=a.convert(V.type);let oi=F(V.internalFormat,ei,Pi,V.colorSpace,V.isVideoTexture);xt($e,V);let Xt;const Ai=V.mipmaps,Di=V.isVideoTexture!==!0,pn=ti.__version===void 0||rt===!0,wi=Qe.dataReady,de=D(V,Tt);if(V.isDepthTexture)oi=o.DEPTH_COMPONENT16,V.type===kn?oi=o.DEPTH_COMPONENT32F:V.type===an?oi=o.DEPTH_COMPONENT24:V.type===Yr&&(oi=o.DEPTH24_STENCIL8),pn&&(Di?t.texStorage2D(o.TEXTURE_2D,1,oi,Tt.width,Tt.height):t.texImage2D(o.TEXTURE_2D,0,oi,Tt.width,Tt.height,0,ei,Pi,null));else if(V.isDataTexture)if(Ai.length>0){Di&&pn&&t.texStorage2D(o.TEXTURE_2D,de,oi,Ai[0].width,Ai[0].height);for(let et=0,Ze=Ai.length;et<Ze;et++)Xt=Ai[et],Di?wi&&t.texSubImage2D(o.TEXTURE_2D,et,0,0,Xt.width,Xt.height,ei,Pi,Xt.data):t.texImage2D(o.TEXTURE_2D,et,oi,Xt.width,Xt.height,0,ei,Pi,Xt.data);V.generateMipmaps=!1}else Di?(pn&&t.texStorage2D(o.TEXTURE_2D,de,oi,Tt.width,Tt.height),wi&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,ei,Pi,Tt.data)):t.texImage2D(o.TEXTURE_2D,0,oi,Tt.width,Tt.height,0,ei,Pi,Tt.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){Di&&pn&&t.texStorage3D(o.TEXTURE_2D_ARRAY,de,oi,Ai[0].width,Ai[0].height,Tt.depth);for(let et=0,Ze=Ai.length;et<Ze;et++)Xt=Ai[et],V.format!==Wn?ei!==null?Di?wi&&t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,et,0,0,0,Xt.width,Xt.height,Tt.depth,ei,Xt.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,et,oi,Xt.width,Xt.height,Tt.depth,0,Xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Di?wi&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,et,0,0,0,Xt.width,Xt.height,Tt.depth,ei,Pi,Xt.data):t.texImage3D(o.TEXTURE_2D_ARRAY,et,oi,Xt.width,Xt.height,Tt.depth,0,ei,Pi,Xt.data)}else{Di&&pn&&t.texStorage2D(o.TEXTURE_2D,de,oi,Ai[0].width,Ai[0].height);for(let et=0,Ze=Ai.length;et<Ze;et++)Xt=Ai[et],V.format!==Wn?ei!==null?Di?wi&&t.compressedTexSubImage2D(o.TEXTURE_2D,et,0,0,Xt.width,Xt.height,ei,Xt.data):t.compressedTexImage2D(o.TEXTURE_2D,et,oi,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Di?wi&&t.texSubImage2D(o.TEXTURE_2D,et,0,0,Xt.width,Xt.height,ei,Pi,Xt.data):t.texImage2D(o.TEXTURE_2D,et,oi,Xt.width,Xt.height,0,ei,Pi,Xt.data)}else if(V.isDataArrayTexture)Di?(pn&&t.texStorage3D(o.TEXTURE_2D_ARRAY,de,oi,Tt.width,Tt.height,Tt.depth),wi&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,ei,Pi,Tt.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,oi,Tt.width,Tt.height,Tt.depth,0,ei,Pi,Tt.data);else if(V.isData3DTexture)Di?(pn&&t.texStorage3D(o.TEXTURE_3D,de,oi,Tt.width,Tt.height,Tt.depth),wi&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,ei,Pi,Tt.data)):t.texImage3D(o.TEXTURE_3D,0,oi,Tt.width,Tt.height,Tt.depth,0,ei,Pi,Tt.data);else if(V.isFramebufferTexture){if(pn)if(Di)t.texStorage2D(o.TEXTURE_2D,de,oi,Tt.width,Tt.height);else{let et=Tt.width,Ze=Tt.height;for(let Ft=0;Ft<de;Ft++)t.texImage2D(o.TEXTURE_2D,Ft,oi,et,Ze,0,ei,Pi,null),et>>=1,Ze>>=1}}else if(Ai.length>0){if(Di&&pn){const et=ni(Ai[0]);t.texStorage2D(o.TEXTURE_2D,de,oi,et.width,et.height)}for(let et=0,Ze=Ai.length;et<Ze;et++)Xt=Ai[et],Di?wi&&t.texSubImage2D(o.TEXTURE_2D,et,0,0,ei,Pi,Xt):t.texImage2D(o.TEXTURE_2D,et,oi,ei,Pi,Xt);V.generateMipmaps=!1}else if(Di){if(pn){const et=ni(Tt);t.texStorage2D(o.TEXTURE_2D,de,oi,et.width,et.height)}wi&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ei,Pi,Tt)}else t.texImage2D(o.TEXTURE_2D,0,oi,ei,Pi,Tt);E(V)&&S($e),ti.__version=Qe.version,V.onUpdate&&V.onUpdate(V)}ie.__version=V.version}function Yi(ie,V,Se){if(V.image.length!==6)return;const $e=Wt(ie,V),rt=V.source;t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+Se);const Qe=n.get(rt);if(rt.version!==Qe.__version||$e===!0){t.activeTexture(o.TEXTURE0+Se);const ti=Wi.getPrimaries(Wi.workingColorSpace),Nt=V.colorSpace===Kr?null:Wi.getPrimaries(V.colorSpace),Dt=V.colorSpace===Kr||ti===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,V.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,V.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const xi=V.isCompressedTexture||V.image[0].isCompressedTexture,Tt=V.image[0]&&V.image[0].isDataTexture,ei=[];for(let Ze=0;Ze<6;Ze++)!xi&&!Tt?ei[Ze]=w(V.image[Ze],!0,r.maxCubemapSize):ei[Ze]=Tt?V.image[Ze].image:V.image[Ze],ei[Ze]=Ht(V,ei[Ze]);const Pi=ei[0],oi=a.convert(V.format,V.colorSpace),Xt=a.convert(V.type),Ai=F(V.internalFormat,oi,Xt,V.colorSpace),Di=V.isVideoTexture!==!0,pn=Qe.__version===void 0||$e===!0,wi=rt.dataReady;let de=D(V,Pi);xt(o.TEXTURE_CUBE_MAP,V);let et;if(xi){Di&&pn&&t.texStorage2D(o.TEXTURE_CUBE_MAP,de,Ai,Pi.width,Pi.height);for(let Ze=0;Ze<6;Ze++){et=ei[Ze].mipmaps;for(let Ft=0;Ft<et.length;Ft++){const Gt=et[Ft];V.format!==Wn?oi!==null?Di?wi&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft,0,0,Gt.width,Gt.height,oi,Gt.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft,Ai,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Di?wi&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft,0,0,Gt.width,Gt.height,oi,Xt,Gt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft,Ai,Gt.width,Gt.height,0,oi,Xt,Gt.data)}}}else{if(et=V.mipmaps,Di&&pn){et.length>0&&de++;const Ze=ni(ei[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,de,Ai,Ze.width,Ze.height)}for(let Ze=0;Ze<6;Ze++)if(Tt){Di?wi&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,0,0,ei[Ze].width,ei[Ze].height,oi,Xt,ei[Ze].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Ai,ei[Ze].width,ei[Ze].height,0,oi,Xt,ei[Ze].data);for(let Ft=0;Ft<et.length;Ft++){const Gi=et[Ft].image[Ze].image;Di?wi&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft+1,0,0,Gi.width,Gi.height,oi,Xt,Gi.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft+1,Ai,Gi.width,Gi.height,0,oi,Xt,Gi.data)}}else{Di?wi&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,0,0,oi,Xt,ei[Ze]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Ai,oi,Xt,ei[Ze]);for(let Ft=0;Ft<et.length;Ft++){const Gt=et[Ft];Di?wi&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft+1,0,0,oi,Xt,Gt.image[Ze]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Ft+1,Ai,oi,Xt,Gt.image[Ze])}}}E(V)&&S(o.TEXTURE_CUBE_MAP),Qe.__version=rt.version,V.onUpdate&&V.onUpdate(V)}ie.__version=V.version}function ke(ie,V,Se,$e,rt,Qe){const ti=a.convert(Se.format,Se.colorSpace),Nt=a.convert(Se.type),Dt=F(Se.internalFormat,ti,Nt,Se.colorSpace);if(!n.get(V).__hasExternalTextures){const Tt=Math.max(1,V.width>>Qe),ei=Math.max(1,V.height>>Qe);rt===o.TEXTURE_3D||rt===o.TEXTURE_2D_ARRAY?t.texImage3D(rt,Qe,Dt,Tt,ei,V.depth,0,ti,Nt,null):t.texImage2D(rt,Qe,Dt,Tt,ei,0,ti,Nt,null)}t.bindFramebuffer(o.FRAMEBUFFER,ie),wt(V)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$e,rt,n.get(Se).__webglTexture,0,Ke(V)):(rt===o.TEXTURE_2D||rt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,$e,rt,n.get(Se).__webglTexture,Qe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function St(ie,V,Se){if(o.bindRenderbuffer(o.RENDERBUFFER,ie),V.depthBuffer&&!V.stencilBuffer){let $e=o.DEPTH_COMPONENT24;if(Se||wt(V)){const rt=V.depthTexture;rt&&rt.isDepthTexture&&(rt.type===kn?$e=o.DEPTH_COMPONENT32F:rt.type===an&&($e=o.DEPTH_COMPONENT24));const Qe=Ke(V);wt(V)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qe,$e,V.width,V.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,$e,V.width,V.height)}else o.renderbufferStorage(o.RENDERBUFFER,$e,V.width,V.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,ie)}else if(V.depthBuffer&&V.stencilBuffer){const $e=Ke(V);Se&&wt(V)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,o.DEPTH24_STENCIL8,V.width,V.height):wt(V)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e,o.DEPTH24_STENCIL8,V.width,V.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,V.width,V.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,ie)}else{const $e=V.textures;for(let rt=0;rt<$e.length;rt++){const Qe=$e[rt],ti=a.convert(Qe.format,Qe.colorSpace),Nt=a.convert(Qe.type),Dt=F(Qe.internalFormat,ti,Nt,Qe.colorSpace),xi=Ke(V);Se&&wt(V)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xi,Dt,V.width,V.height):wt(V)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xi,Dt,V.width,V.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,V.width,V.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Yt(ie,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,ie),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(V.depthTexture).__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)&&(V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0),ce(V.depthTexture,0);const $e=n.get(V.depthTexture).__webglTexture,rt=Ke(V);if(V.depthTexture.format===q)wt(V)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$e,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$e,0);else if(V.depthTexture.format===fe)wt(V)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$e,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$e,0);else throw new Error("Unknown depthTexture format")}function bt(ie){const V=n.get(ie),Se=ie.isWebGLCubeRenderTarget===!0;if(ie.depthTexture&&!V.__autoAllocateDepthBuffer){if(Se)throw new Error("target.depthTexture not supported in Cube render targets");Yt(V.__webglFramebuffer,ie)}else if(Se){V.__webglDepthbuffer=[];for(let $e=0;$e<6;$e++)t.bindFramebuffer(o.FRAMEBUFFER,V.__webglFramebuffer[$e]),V.__webglDepthbuffer[$e]=o.createRenderbuffer(),St(V.__webglDepthbuffer[$e],ie,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,V.__webglFramebuffer),V.__webglDepthbuffer=o.createRenderbuffer(),St(V.__webglDepthbuffer,ie,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function Si(ie,V,Se){const $e=n.get(ie);V!==void 0&&ke($e.__webglFramebuffer,ie,ie.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Se!==void 0&&bt(ie)}function Ci(ie){const V=ie.texture,Se=n.get(ie),$e=n.get(V);ie.addEventListener("dispose",ne);const rt=ie.textures,Qe=ie.isWebGLCubeRenderTarget===!0,ti=rt.length>1;if(ti||($e.__webglTexture===void 0&&($e.__webglTexture=o.createTexture()),$e.__version=V.version,l.memory.textures++),Qe){Se.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(V.mipmaps&&V.mipmaps.length>0){Se.__webglFramebuffer[Nt]=[];for(let Dt=0;Dt<V.mipmaps.length;Dt++)Se.__webglFramebuffer[Nt][Dt]=o.createFramebuffer()}else Se.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){Se.__webglFramebuffer=[];for(let Nt=0;Nt<V.mipmaps.length;Nt++)Se.__webglFramebuffer[Nt]=o.createFramebuffer()}else Se.__webglFramebuffer=o.createFramebuffer();if(ti)for(let Nt=0,Dt=rt.length;Nt<Dt;Nt++){const xi=n.get(rt[Nt]);xi.__webglTexture===void 0&&(xi.__webglTexture=o.createTexture(),l.memory.textures++)}if(ie.samples>0&&wt(ie)===!1){Se.__webglMultisampledFramebuffer=o.createFramebuffer(),Se.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Se.__webglMultisampledFramebuffer);for(let Nt=0;Nt<rt.length;Nt++){const Dt=rt[Nt];Se.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Se.__webglColorRenderbuffer[Nt]);const xi=a.convert(Dt.format,Dt.colorSpace),Tt=a.convert(Dt.type),ei=F(Dt.internalFormat,xi,Tt,Dt.colorSpace,ie.isXRRenderTarget===!0),Pi=Ke(ie);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pi,ei,ie.width,ie.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Se.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),ie.depthBuffer&&(Se.__webglDepthRenderbuffer=o.createRenderbuffer(),St(Se.__webglDepthRenderbuffer,ie,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Qe){t.bindTexture(o.TEXTURE_CUBE_MAP,$e.__webglTexture),xt(o.TEXTURE_CUBE_MAP,V);for(let Nt=0;Nt<6;Nt++)if(V.mipmaps&&V.mipmaps.length>0)for(let Dt=0;Dt<V.mipmaps.length;Dt++)ke(Se.__webglFramebuffer[Nt][Dt],ie,V,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Dt);else ke(Se.__webglFramebuffer[Nt],ie,V,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);E(V)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ti){for(let Nt=0,Dt=rt.length;Nt<Dt;Nt++){const xi=rt[Nt],Tt=n.get(xi);t.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),xt(o.TEXTURE_2D,xi),ke(Se.__webglFramebuffer,ie,xi,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),E(xi)&&S(o.TEXTURE_2D)}t.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((ie.isWebGL3DRenderTarget||ie.isWebGLArrayRenderTarget)&&(Nt=ie.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Nt,$e.__webglTexture),xt(Nt,V),V.mipmaps&&V.mipmaps.length>0)for(let Dt=0;Dt<V.mipmaps.length;Dt++)ke(Se.__webglFramebuffer[Dt],ie,V,o.COLOR_ATTACHMENT0,Nt,Dt);else ke(Se.__webglFramebuffer,ie,V,o.COLOR_ATTACHMENT0,Nt,0);E(V)&&S(Nt),t.unbindTexture()}ie.depthBuffer&&bt(ie)}function ge(ie){const V=ie.textures;for(let Se=0,$e=V.length;Se<$e;Se++){const rt=V[Se];if(E(rt)){const Qe=ie.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ti=n.get(rt).__webglTexture;t.bindTexture(Qe,ti),S(Qe),t.unbindTexture()}}}const Ii=[],We=[];function lt(ie){if(ie.samples>0){if(wt(ie)===!1){const V=ie.textures,Se=ie.width,$e=ie.height;let rt=o.COLOR_BUFFER_BIT;const Qe=ie.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ti=n.get(ie),Nt=V.length>1;if(Nt)for(let Dt=0;Dt<V.length;Dt++)t.bindFramebuffer(o.FRAMEBUFFER,ti.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ti.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ti.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Dt=0;Dt<V.length;Dt++){if(ie.resolveDepthBuffer&&(ie.depthBuffer&&(rt|=o.DEPTH_BUFFER_BIT),ie.stencilBuffer&&ie.resolveStencilBuffer&&(rt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ti.__webglColorRenderbuffer[Dt]);const xi=n.get(V[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xi,0)}o.blitFramebuffer(0,0,Se,$e,0,0,Se,$e,rt,o.NEAREST),f===!0&&(Ii.length=0,We.length=0,Ii.push(o.COLOR_ATTACHMENT0+Dt),ie.depthBuffer&&ie.resolveDepthBuffer===!1&&(Ii.push(Qe),We.push(Qe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,We)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ii))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Dt=0;Dt<V.length;Dt++){t.bindFramebuffer(o.FRAMEBUFFER,ti.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,ti.__webglColorRenderbuffer[Dt]);const xi=n.get(V[Dt]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ti.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,xi,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ti.__webglMultisampledFramebuffer)}else if(ie.depthBuffer&&ie.resolveDepthBuffer===!1&&f){const V=ie.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[V])}}}function Ke(ie){return Math.min(r.maxSamples,ie.samples)}function wt(ie){const V=n.get(ie);return ie.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function ct(ie){const V=l.render.frame;g.get(ie)!==V&&(g.set(ie,V),ie.update())}function Ht(ie,V){const Se=ie.colorSpace,$e=ie.format,rt=ie.type;return ie.isCompressedTexture===!0||ie.isVideoTexture===!0||Se!==Jr&&Se!==Kr&&(Wi.getTransfer(Se)===ji?($e!==Wn||rt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Se)),V}function ni(ie){return typeof HTMLImageElement<"u"&&ie instanceof HTMLImageElement?(p.width=ie.naturalWidth||ie.width,p.height=ie.naturalHeight||ie.height):typeof VideoFrame<"u"&&ie instanceof VideoFrame?(p.width=ie.displayWidth,p.height=ie.displayHeight):(p.width=ie.width,p.height=ie.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=B,this.setTexture2D=ce,this.setTexture2DArray=Be,this.setTexture3D=He,this.setTextureCube=nt,this.rebindTextures=Si,this.setupRenderTarget=Ci,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=wt}function lm(o,e){function t(n,r=Kr){let a;const l=Wi.getTransfer(r);if(n===Li)return o.UNSIGNED_BYTE;if(n===Ha)return o.UNSIGNED_SHORT_4_4_4_4;if(n===vs)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Ks)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Qi)return o.BYTE;if(n===Mn)return o.SHORT;if(n===Bi)return o.UNSIGNED_SHORT;if(n===jn)return o.INT;if(n===an)return o.UNSIGNED_INT;if(n===kn)return o.FLOAT;if(n===xs)return o.HALF_FLOAT;if(n===tc)return o.ALPHA;if(n===ic)return o.RGB;if(n===Wn)return o.RGBA;if(n===ol)return o.LUMINANCE;if(n===cl)return o.LUMINANCE_ALPHA;if(n===q)return o.DEPTH_COMPONENT;if(n===fe)return o.DEPTH_STENCIL;if(n===Re)return o.RED;if(n===ve)return o.RED_INTEGER;if(n===ye)return o.RG;if(n===Pt)return o.RG_INTEGER;if(n===qt)return o.RGBA_INTEGER;if(n===Zt||n===ii||n===li||n===ui)if(l===ji)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Zt)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ii)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===li)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ui)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Zt)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ii)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===li)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ui)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===di||n===nn||n===mn||n===Rn)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===di)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nn)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mn)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rn)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ar||n===Ni||n===hi)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ar||n===Ni)return l===ji?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===hi)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zr||n===$i||n===Ar||n===ka||n===$r||n===Js||n===gn||n===xr||n===js||n===Pn||n===Qs||n===nc||n===Wa||n===_u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Zr)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$i)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ar)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$r)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Js)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gn)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xr)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===js)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pn)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qs)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_u)return l===ji?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===xu||n===vu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ll)return l===ji?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qf||n===yu||n===Mu||n===Su)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Su)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class hm extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class go extends Vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const w of e.hand.values()){const E=t.getJointPose(w,n),S=this._getHandJoint(p,w);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),v=.02,b=.005;p.inputState.pinching&&x>v+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=v-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return h!==null&&(h.visible=r!==null),f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

`,te=/\s/;function tt(_t,at,Et,Ct){var jt=_t.indexOf(at,Et);return jt===-1||jt>Ct?Ct:jt}function Je(_t){return te.test(_t)}function zt(_t,at,Et,Ct){return{start:at,end:at+Math.min(Ct,Et-at)}}oe.exports=function(_t,at){return oe.exports.lines(_t,at).map(function(Et){return _t.substring(Et.start,Et.end)}).join(`
`)},oe.exports.lines=function(_t,at){if((at=at||{}).width===0&&at.mode!=="nowrap")return[];_t=_t||"";var Et=typeof at.width=="number"?at.width:Number.MAX_VALUE,Ct=Math.max(0,at.start||0),jt=typeof at.end=="number"?at.end:_t.length,Q=at.mode,z=at.measure||zt;return Q==="pre"?function(pe,Ae,Pe,Ve,ot){for(var st=[],it=Pe,pt=Pe;pt<Ve&&pt<Ae.length;pt++){var Ye=Ae.charAt(pt),ze=be.test(Ye);if(ze||pt===Ve-1){var Ut=pe(Ae,it,ze?pt:pt+1,ot);st.push(Ut),it=pt+1}}return st}(z,_t,Ct,jt,Et):function(pe,Ae,Pe,Ve,ot,st){var it=[],pt=ot;for(st==="nowrap"&&(pt=Number.MAX_VALUE);Pe<Ve&&Pe<Ae.length;){for(var Ye=tt(Ae,we,Pe,Ve);Pe<Ye&&Je(Ae.charAt(Pe));)Pe++;var ze=pe(Ae,Pe,Ye,pt),Ut=Pe+(ze.end-ze.start),mt=Ut+we.length;if(Ut<Ye){for(;Ut>Pe&&!Je(Ae.charAt(Ut));)Ut--;if(Ut===Pe)mt>Pe+we.length&&mt--,Ut=mt;else for(mt=Ut;Ut>Pe&&Je(Ae.charAt(Ut-we.length));)Ut--}if(Ut>=Pe){var ut=pe(Ae,Pe,Ut,pt);it.push(ut)}Pe=mt}return it}(z,_t,Ct,jt,Et,Q)}})(P);var C=P.exports,$=["x","e","a","o","n","s","r","c","u","m","v","w","z"],X=["m","w"],ee=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],xe=9,se=32,ae=function(){function oe(){var be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};M(this,oe),this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(be)}return T(oe,[{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"descender",get:function(){return this._descender}},{key:"ascender",get:function(){return this._ascender}},{key:"xHeight",get:function(){return this._xHeight}},{key:"baseline",get:function(){return this._baseline}},{key:"capHeight",get:function(){return this._capHeight}},{key:"lineHeight",get:function(){return this._lineHeight}},{key:"linesTotal",get:function(){return this._linesTotal}},{key:"lettersTotal",get:function(){return this._lettersTotal}},{key:"wordsTotal",get:function(){return this._wordsTotal}},{key:"update",value:function(be){var we=this;if(be=Object.assign({measure:this._measure},be),this._options=be,this._options.tabSize=Me(this._options.tabSize,4),!be.font)throw new Error("must provide a valid bitmap font");var te=this.glyphs,tt=be.text||"",Je=be.font;this._setupSpaceGlyphs(Je);var zt=C.lines(tt,be),_t=be.width||0,at=tt.split(" ").filter(function(pt){return pt!==`
`}).length,Et=tt.split("").filter(function(pt){return pt!==`
`&&pt!==" "}).length;te.length=0;var Ct=zt.reduce(function(pt,Ye){return Math.max(pt,Ye.width,_t)},0),jt=0,Q=0,z=Me(be.lineHeight,Je.common.lineHeight),pe=Je.common.base,Ae=z-pe,Pe=be.letterSpacing||0,Ve=z*zt.length-Ae,ot=function(pt){return pt==="center"?1:pt==="right"?2:0}(this._options.align);Q-=Ve,this._width=Ct,this._height=Ve,this._descender=z-pe,this._baseline=pe,this._xHeight=function(pt){for(var Ye=0;Ye<$.length;Ye++){var ze=$[Ye].charCodeAt(0),Ut=H(pt.chars,ze);if(Ut>=0)return pt.chars[Ut].height}return 0}(Je),this._capHeight=function(pt){for(var Ye=0;Ye<ee.length;Ye++){var ze=ee[Ye].charCodeAt(0),Ut=H(pt.chars,ze);if(Ut>=0)return pt.chars[Ut].height}return 0}(Je),this._lineHeight=z,this._ascender=z-Ae-this._xHeight;var st=0,it=0;zt.forEach(function(pt,Ye){for(var ze,Ut=pt.start,mt=pt.end,ut=pt.width,Vt=tt.slice(Ut,mt).split(" ").filter(function(At){return At!==""}).length,ai=tt.slice(Ut,mt).split(" ").join("").length,Ji=0,si=0,le=Ut;le<mt;le++){var Ge=tt.charCodeAt(le),Oe=we.getGlyph(Je,Ge);if(Oe){ze&&(jt+=K(Je,ze.id,Oe.id));var Rt=jt;ot===1?Rt+=(Ct-ut)/2:ot===2&&(Rt+=Ct-ut),te.push({position:[Rt,Q],data:Oe,index:le,linesTotal:zt.length,lineIndex:Ye,lineLettersTotal:ai,lineLetterIndex:Ji,lineWordsTotal:Vt,lineWordIndex:si,wordsTotal:at,wordIndex:st,lettersTotal:Et,letterIndex:it}),Oe.id===se&&ze.id!==se&&(si++,st++),Oe.id!==se&&(Ji++,it++),jt+=Oe.xadvance+Pe,ze=Oe}}Q+=z,jt=0}),this._lettersTotal=Et,this._wordsTotal=at,this._linesTotal=zt.length}},{key:"getGlyph",value:function(be,we){var te=Ne(be,we);return te||(we===xe?this._fallbackTabGlyph:we===se?this._fallbackSpaceGlyph:null)}},{key:"computeMetrics",value:function(be,we,te,tt){var Je,zt,_t=this._options.letterSpacing||0,at=this._options.font,Et=0,Ct=0,jt=0;if(!at.chars||at.chars.length===0)return{start:we,end:we,width:0};te=Math.min(be.length,te);for(var Q=we;Q<te;Q++){var z=be.charCodeAt(Q);if(Je=this.getGlyph(at,z)){Je.char=be[Q],Je.xoffset;var pe=(Et+=zt?K(at,zt.id,Je.id):0)+Je.xadvance+_t,Ae=Et+Je.width;if(Ae>=tt||pe>=tt)break;Et=pe,Ct=Ae,zt=Je}jt++}return zt&&(Ct+=zt.xoffset),{start:we,end:we+jt,width:Ct}}},{key:"_setupSpaceGlyphs",value:function(be){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,be.chars&&be.chars.length!==0){var we=Ne(be,se)||function(Je){for(var zt=0;zt<X.length;zt++){var _t=X[zt].charCodeAt(0),at=H(Je.chars,_t);if(at>=0)return Je.chars[at]}return 0}(be)||be.chars[0],te=this._options.tabSize*we.xadvance;this._fallbackSpaceGlyph=we;var tt=Object.assign({},we);this._fallbackTabGlyph=Object.assign(tt,{x:0,y:0,xadvance:te,id:xe,xoffset:0,yoffset:0,width:0,height:0})}}}]),oe}();function Ne(oe,be){if(!oe.chars||oe.chars.length===0)return null;var we=H(oe.chars,be);return we>=0?oe.chars[we]:null}function K(oe,be,we){if(!oe.kernings||oe.kernings.length===0)return 0;for(var te=oe.kernings,tt=0;tt<te.length;tt++){var Je=te[tt];if(Je.first===be&&Je.second===we)return Je.amount}return 0}function H(oe,be,we){for(var te=we=we||0;te<oe.length;te++)if(oe[te].id===be)return te;return-1}function Me(oe,be){return typeof oe=="number"?oe:typeof be=="number"?be:0}var Ie={min:[0,0],max:[0,0]};function he(oe){var be=oe.length/2;Ie.min[0]=oe[0],Ie.min[1]=oe[1],Ie.max[0]=oe[0],Ie.max[1]=oe[1];for(var we=0;we<be;we++){var te=oe[2*we+0],tt=oe[2*we+1];Ie.min[0]=Math.min(te,Ie.min[0]),Ie.min[1]=Math.min(tt,Ie.min[1]),Ie.max[0]=Math.max(te,Ie.max[0]),Ie.max[1]=Math.max(tt,Ie.max[1])}}var qe={computeBox:function(oe,be){return he(oe),be.min.set(Ie.min[0],Ie.min[1],0),be.max.set(Ie.max[0],Ie.max[1],0),be},computeSphere:function(oe,be){he(oe);var we=Ie.min[0],te=Ie.min[1],tt=Ie.max[0]-we,Je=Ie.max[1]-te,zt=Math.sqrt(tt*tt+Je*Je);be.center.set(we+tt/2,te+Je/2,0),be.radius=zt/2}},Xe={pages:function(oe){var be=new Float32Array(4*oe.length*1),we=0;return oe.forEach(function(te){var tt=te.data.page||0;be[we++]=tt,be[we++]=tt,be[we++]=tt,be[we++]=tt}),be},attributes:function(oe,be,we,te,tt){var Je=new Float32Array(4*oe.length*2),zt=new Float32Array(4*oe.length*2),_t=new Float32Array(4*oe.length*2),at=new Float32Array(4*oe.length*2),Et=new Float32Array(4*oe.length*2),Ct=new Float32Array(4*oe.length*2),jt=0,Q=0,z=0,pe=0,Ae=0,Pe=0;return oe.forEach(function(Ve){var ot=Ve.data,st=ot.x+ot.width,it=ot.y+ot.height,pt=ot.x/be,Ye=ot.y/we,ze=st/be,Ut=it/we;te&&(Ye=(we-ot.y)/we,Ut=(we-it)/we),Je[jt++]=pt,Je[jt++]=Ye,Je[jt++]=pt,Je[jt++]=Ut,Je[jt++]=ze,Je[jt++]=Ut,Je[jt++]=ze,Je[jt++]=Ye,zt[pe++]=Ve.position[0]/tt.width,zt[pe++]=(Ve.position[1]+tt.height)/tt.height,zt[pe++]=Ve.position[0]/tt.width,zt[pe++]=(Ve.position[1]+tt.height+ot.height)/tt.height,zt[pe++]=(Ve.position[0]+ot.width)/tt.width,zt[pe++]=(Ve.position[1]+tt.height+ot.height)/tt.height,zt[pe++]=(Ve.position[0]+ot.width)/tt.width,zt[pe++]=(Ve.position[1]+tt.height)/tt.height,_t[Ae++]=0,_t[Ae++]=1,_t[Ae++]=0,_t[Ae++]=0,_t[Ae++]=1,_t[Ae++]=0,_t[Ae++]=1,_t[Ae++]=1,at[Pe++]=ot.width,at[Pe++]=ot.height,at[Pe++]=ot.width,at[Pe++]=ot.height,at[Pe++]=ot.width,at[Pe++]=ot.height,at[Pe++]=ot.width,at[Pe++]=ot.height;var mt=Ve.position[0]+ot.xoffset,ut=Ve.position[1]+ot.yoffset,Vt=ot.width,ai=ot.height;Et[Q++]=mt,Et[Q++]=ut,Et[Q++]=mt,Et[Q++]=ut+ai,Et[Q++]=mt+Vt,Et[Q++]=ut+ai,Et[Q++]=mt+Vt,Et[Q++]=ut,Ct[z++]=mt+Vt/2,Ct[z++]=ut+ai/2,Ct[z++]=mt+Vt/2,Ct[z++]=ut+ai/2,Ct[z++]=mt+Vt/2,Ct[z++]=ut+ai/2,Ct[z++]=mt+Vt/2,Ct[z++]=ut+ai/2}),{uvs:Je,layoutUvs:zt,positions:Et,centers:Ct,glyphUvs:_t,glyphResolution:at}},infos:function(oe,be){for(var we=new Float32Array(4*oe.length),te=new Float32Array(4*oe.length),tt=new Float32Array(4*oe.length),Je=new Float32Array(4*oe.length),zt=new Float32Array(4*oe.length),_t=new Float32Array(4*oe.length),at=new Float32Array(4*oe.length),Et=new Float32Array(4*oe.length),Ct=new Float32Array(4*oe.length),jt=new Float32Array(4*oe.length),Q=0,z=0,pe=0,Ae=0,Pe=0,Ve=0,ot=0,st=0,it=0,pt=0,Ye=0;Ye<oe.length;Ye++){var ze=oe[Ye];we[Q++]=ze.linesTotal,we[Q++]=ze.linesTotal,we[Q++]=ze.linesTotal,we[Q++]=ze.linesTotal,te[z++]=ze.lineIndex,te[z++]=ze.lineIndex,te[z++]=ze.lineIndex,te[z++]=ze.lineIndex,tt[pe++]=ze.lineLettersTotal,tt[pe++]=ze.lineLettersTotal,tt[pe++]=ze.lineLettersTotal,tt[pe++]=ze.lineLettersTotal,Je[Ae++]=ze.lineLetterIndex,Je[Ae++]=ze.lineLetterIndex,Je[Ae++]=ze.lineLetterIndex,Je[Ae++]=ze.lineLetterIndex,zt[Pe++]=ze.lineWordsTotal,zt[Pe++]=ze.lineWordsTotal,zt[Pe++]=ze.lineWordsTotal,zt[Pe++]=ze.lineWordsTotal,_t[Ve++]=ze.lineWordIndex,_t[Ve++]=ze.lineWordIndex,_t[Ve++]=ze.lineWordIndex,_t[Ve++]=ze.lineWordIndex,at[ot++]=ze.wordsTotal,at[ot++]=ze.wordsTotal,at[ot++]=ze.wordsTotal,at[ot++]=ze.wordsTotal,Et[st++]=ze.wordIndex,Et[st++]=ze.wordIndex,Et[st++]=ze.wordIndex,Et[st++]=ze.wordIndex,Ct[it++]=ze.lettersTotal,Ct[it++]=ze.lettersTotal,Ct[it++]=ze.lettersTotal,Ct[it++]=ze.lettersTotal,jt[pt++]=ze.letterIndex,jt[pt++]=ze.letterIndex,jt[pt++]=ze.letterIndex,jt[pt++]=ze.letterIndex}return{linesTotal:we,lineIndex:te,lineLettersTotal:tt,lineLetterIndex:Je,lineWordsTotal:zt,lineWordIndex:_t,wordsTotal:at,wordIndex:Et,lettersTotal:Ct,letterIndex:jt}}},gt=Object.prototype.toString;function ht(oe){return!!oe.constructor&&typeof oe.constructor.isBuffer=="function"&&oe.constructor.isBuffer(oe)}var De=function(oe){switch(oe){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}},vt=function(oe){return oe.BYTES_PER_ELEMENT&&gt.call(oe.buffer)==="[object ArrayBuffer]"||Array.isArray(oe)},ft=function(oe){return oe!=null&&(ht(oe)||function(be){return typeof be.readFloatLE=="function"&&typeof be.slice=="function"&&ht(be.slice(0,0))}(oe)||!!oe._isBuffer)},Kt=[0,2,3],vi=[2,1,3],Hi=function(oe){R(we,oe);var be=G(we);function we(te){var tt;return M(this,we),typeof te=="string"&&(te={text:te}),(tt=be.call(this))._options=Object.assign({},te),tt._layout=null,tt._visibleGlyphs=[],tt.update(tt._options),tt}return T(we,[{key:"layout",get:function(){return this._layout}},{key:"visibleGlyphs",get:function(){return this._visibleGlyphs}},{key:"update",value:function(te){if(te=this._validateOptions(te)){this._layout=function(z){return new ae(z)}(te);var tt=te.flipY!==!1,Je=te.font,zt=Je.common.scaleW,_t=Je.common.scaleH,at=this._layout.glyphs.filter(function(z){var pe=z.data;return pe.width*pe.height>0});this._visibleGlyphs=at;var Et=Xe.attributes(at,zt,_t,tt,this._layout),Ct=Xe.infos(at,this._layout),jt=function(z,pe){z&&(vt(z)||ft(z))||(pe=z||{},z=null);for(var Ae=typeof(pe=typeof pe=="number"?{count:pe}:pe||{}).type=="string"?pe.type:"uint16",Pe=typeof pe.count=="number"?pe.count:1,Ve=pe.start||0,ot=pe.clockwise!==!1?Kt:vi,st=ot[0],it=ot[1],pt=ot[2],Ye=6*Pe,ze=z||new(De(Ae))(Ye),Ut=0,mt=0;Ut<Ye;Ut+=6,mt+=4){var ut=Ut+Ve;ze[ut+0]=mt+0,ze[ut+1]=mt+1,ze[ut+2]=mt+2,ze[ut+3]=mt+st,ze[ut+4]=mt+it,ze[ut+5]=mt+pt}return ze}([],{clockwise:!0,type:"uint16",count:at.length});if(this.setIndex(jt),this.setAttribute("position",new c.BufferAttribute(Et.positions,2)),this.setAttribute("center",new c.BufferAttribute(Et.centers,2)),this.setAttribute("uv",new c.BufferAttribute(Et.uvs,2)),this.setAttribute("layoutUv",new c.BufferAttribute(Et.layoutUvs,2)),this.setAttribute("glyphUv",new c.BufferAttribute(Et.glyphUvs,2)),this.setAttribute("glyphResolution",new c.BufferAttribute(Et.glyphResolution,2)),this.setAttribute("lineIndex",new c.BufferAttribute(Ct.lineIndex,1)),this.setAttribute("lineLettersTotal",new c.BufferAttribute(Ct.lineLettersTotal,1)),this.setAttribute("lineLetterIndex",new c.BufferAttribute(Ct.lineLetterIndex,1)),this.setAttribute("lineWordsTotal",new c.BufferAttribute(Ct.lineWordsTotal,1)),this.setAttribute("lineWordIndex",new c.BufferAttribute(Ct.lineWordIndex,1)),this.setAttribute("wordIndex",new c.BufferAttribute(Ct.wordIndex,1)),this.setAttribute("letterIndex",new c.BufferAttribute(Ct.letterIndex,1)),!te.multipage&&"page"in this.attributes)this.deleteAttribute("page");else if(te.multipage){var Q=Xe.pages(at);this.setAttribute("page",new c.BufferAttribute(Q,1))}}}},{key:"computeBoundingSphere",value:function(){this.boundingSphere===null&&(this.boundingSphere=new c.Sphere);var te=this.attributes.position.array,tt=this.attributes.position.itemSize;if(!te||!tt||te.length<2)return this.boundingSphere.radius=0,void this.boundingSphere.center.set(0,0,0);qe.computeSphere(te,this.boundingSphere),isNaN(this.boundingSphere.radius)&&console.error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}},{key:"computeBoundingBox",value:function(){this.boundingBox===null&&(this.boundingBox=new c.Box3);var te=this.boundingBox,tt=this.attributes.position.array,Je=this.attributes.position.itemSize;if(tt&&Je&&!(tt.length<2))return qe.computeBox(tt,te);te.makeEmpty()}},{key:"_validateOptions",value:function(te){if(typeof te=="string"&&(te={text:te}),!(te=Object.assign({},this._options,te)).font)throw new TypeError("must specify a { font } in options");return te}}]),we}(c.BufferGeometry),Fe={common:{uOpacity:{value:1},uColor:{value:{r:255,g:255,b:255}},uMap:{value:null}},rendering:{uThreshold:{value:.05},uAlphaTest:{value:.01}},strokes:{uStrokeColor:{value:{r:255,g:0,b:0}},uStrokeOutsetWidth:{value:0},uStrokeInsetWidth:{value:.3}}},yt={side:c.FrontSide,transparent:!0,defines:{IS_SMALL:!1},extensions:{derivatives:!0},uniforms:m(m(m({},Fe.common),Fe.rendering),Fe.strokes),vertexShader:`#define GLSLIFY 1
attribute vec2 layoutUv;attribute float lineIndex;attribute float lineLettersTotal;attribute float lineLetterIndex;attribute float lineWordsTotal;attribute float lineWordIndex;attribute float wordIndex;attribute float letterIndex;varying vec2 vUv;varying vec2 vLayoutUv;varying vec3 vViewPosition;varying vec3 vNormal;varying float vLineIndex;varying float vLineLettersTotal;varying float vLineLetterIndex;varying float vLineWordsTotal;varying float vLineWordIndex;varying float vWordIndex;varying float vLetterIndex;void main(){vec4 mvPosition=vec4(position,1.0);mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;vUv=uv;vLayoutUv=layoutUv;vViewPosition=-mvPosition.xyz;vNormal=normal;vLineIndex=lineIndex;vLineLettersTotal=lineLettersTotal;vLineLetterIndex=lineLetterIndex;vLineWordsTotal=lineWordsTotal;vLineWordIndex=lineWordIndex;vWordIndex=wordIndex;vLetterIndex=letterIndex;}`,fragmentShader:`#define GLSLIFY 1
varying vec2 vUv;uniform float uOpacity;uniform float uThreshold;uniform float uAlphaTest;uniform vec3 uColor;uniform sampler2D uMap;uniform vec3 uStrokeColor;uniform float uStrokeOutsetWidth;uniform float uStrokeInsetWidth;float median(float r,float g,float b){return max(min(r,g),min(max(r,g),b));}void main(){vec3 s=texture2D(uMap,vUv).rgb;float sigDist=median(s.r,s.g,s.b)-0.5;float afwidth=1.4142135623730951/2.0;
#ifdef IS_SMALL
float alpha=smoothstep(uThreshold-afwidth,uThreshold+afwidth,sigDist);
#else
float alpha=clamp(sigDist/fwidth(sigDist)+0.5,0.0,1.0);
#endif
float sigDistOutset=sigDist+uStrokeOutsetWidth*0.5;float sigDistInset=sigDist-uStrokeInsetWidth*0.5;
#ifdef IS_SMALL
float outset=smoothstep(uThreshold-afwidth,uThreshold+afwidth,sigDistOutset);float inset=1.0-smoothstep(uThreshold-afwidth,uThreshold+afwidth,sigDistInset);
#else
float outset=clamp(sigDistOutset/fwidth(sigDistOutset)+0.5,0.0,1.0);float inset=1.0-clamp(sigDistInset/fwidth(sigDistInset)+0.5,0.0,1.0);
#endif
float border=outset*inset;if(alpha<uAlphaTest)discard;vec4 filledFragColor=vec4(uColor,uOpacity*alpha);gl_FragColor=filledFragColor;}`},kt=function(oe){R(we,oe);var be=G(we);function we(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M(this,we),te=Object.assign(JSON.parse(JSON.stringify(yt)),te),be.call(this,te)}return T(we)}(c.ShaderMaterial);s.MSDFTextGeometry=Hi,s.MSDFTextMaterial=kt,s.uniforms=Fe,Object.defineProperty(s,"__esModule",{value:!0})})})(Vf,Vf.exports);var Da=Vf.exports;class dP{constructor(){this.renderer=new k2({canvas:document.querySelector("#bg"),antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.autoClear=!1,this.scene=new T0,this.copyscene=new T0,this.txtgroup=new Ws,this.copytxtgroup=new Ws,this.planegroup=new Ws,this.copyscene.add(this.copytxtgroup),this.textures=[...document.querySelectorAll(".js-texture")],this.textures=this.textures.map(i=>new ru().load(i.src)),this.slidetextures=[...document.querySelectorAll(".js-texture2")],this.slidetextures=this.slidetextures.map(i=>new ru().load(i.src)),this.pslidetextures=[...document.querySelectorAll(".js-texture3")],this.pslidetextures=this.pslidetextures.map(i=>new ru().load(i.src)),this.videotextures=[...document.querySelectorAll(".videos")],this.videotextures=this.videotextures.map(i=>i),this.position=0,this.speed=.1,this.targetSpeed=0,this.addText(),this.addPlane(),this.camera=new mr(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=30,this.camera.position.x=-3,this.time=0,this.materials=[],this.meshes=[],this.slideind=0,this.groups=[],this.addmesh(),this.handleImages(),this.addback(),this.addPointlit(),this.render(),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize)}handleResize(){const i=window.innerWidth/window.innerHeight,s=10;this.camera.left=s*i/-2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=s/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}addText(){this.txtmaterial=new Tr({side:br,transparent:!0,defines:{IS_SMALL:!1},extensions:{derivatives:!0},uniforms:{uSpeed:{value:0},...Da.uniforms.common,...Da.uniforms.rendering,...Da.uniforms.strokes,uOpacity:{value:1},uColor:{value:new Fi("#A9A9A9")},uMap:{value:null},uThreshold:{value:.05},uAlphaTest:{value:.01},uStrokeColor:{value:new Fi("#008060")},uStrokeOutsetWidth:{value:0},uStrokeInsetWidth:{value:.3},ustroke:{value:!1}},vertexShader:L0,fragmentShader:P0}),this.txtmaterial2=new Tr({side:br,transparent:!0,defines:{IS_SMALL:!1},extensions:{derivatives:!0},uniforms:{uSpeed:{value:0},...Da.uniforms.common,...Da.uniforms.rendering,...Da.uniforms.strokes,uOpacity:{value:1},uColor:{value:new Fi("#C0C0C0")},uMap:{value:null},uThreshold:{value:.05},uAlphaTest:{value:.01},uStrokeColor:{value:new Fi("#FFD700")},uStrokeOutsetWidth:{value:1.8},uStrokeInsetWidth:{value:.5},ustroke:{value:!0}},vertexShader:L0,fragmentShader:P0});const i=["1-SkyRoot-MetaHack.","2-SolutionChallenge.","3-farmhack.","4-IIT-hackopitch.","5-IITMadaras."];Promise.all([s(lP)]).then(([c])=>{i.forEach((d,m)=>{const M=new Da.MSDFTextGeometry({text:d.toUpperCase(),font:cP});this.txtmaterial.uniforms.uMap.value=c,this.txtmaterial2.uniforms.uMap.value=c;const y=new _r(M,this.txtmaterial);this.textsize="0.0018",window.innerWidth<500&&(this.textsize="0.0012");const T=89.892;y.scale.set(this.textsize,-this.textsize,this.textsize),y.position.y=-.5*m,y.position.x=-.8,y.position.z=T,this.txtgroup.add(y);const A=new _r(M,this.txtmaterial2);A.scale.set(this.textsize,-this.textsize,this.textsize),A.position.y=-.5*m,A.position.x=-.8,A.position.z=T,console.log("Textmesh",A),this.copytxtgroup.add(A),this.scene.add(this.txtgroup)})});function s(c){return new Promise((m,M)=>{new ru().load(c,m)})}}addPlane(){this.planegeometry=new jo(16/21,9/21,30,30).translate(0,0,1);let i=this.planegeometry.attributes.position.array,s=[],c=1.35;for(let d=0;d<i.length;d+=3){let m=i[d],M=i[d+1],y=i[d+2],T=new Oi(m,y).normalize().multiplyScalar(c);s.push(T.x,M,T.y)}this.planegeometry.setAttribute("position",new Ys(s,3)),this.planematerial=new Tr({vertexShader:eP,fragmentShader:tP,uniforms:{textureSampler:{value:this.textures[0]},glitchIntensity:{value:0}},side:br}),this.plane=new _r(this.planegeometry,this.planematerial),this.plane.position.y=0,this.plane.position.x=0,this.plane.position.z=89.792,this.planegroup.add(this.plane),this.scene.add(this.planegroup)}updateTexture(){let i=Math.round(this.position*-1)%this.textures.length;this.planematerial.uniforms.textureSampler.value=this.textures[i],this.copytxtgroup.children.forEach((s,c)=>{c!==i?s.visible=!1:s.visible=!0})}addmesh(){this.material=new Tr({vertexShader:j2,fragmentShader:Q2,uniforms:{textureimg:{type:"t",value:null},timeanim:{type:"f",value:this.time},distancefromcent:{type:"f",value:0},waveintensity:{type:"f",value:0},glitchIntensity:{type:"f",value:0}},transparent:!0,side:gs})}handleImages(){this.videotextures.forEach((i,s)=>{let c=this.material.clone(),d=new W2(i);c.uniforms.textureimg.value=d;let m=new jo(3/3,2/3),M=new _r(m,c),y=new Ws;y.add(M),this.groups.push(y),this.scene.add(y),this.materials.push(c),this.meshes.push(M),M.position.y=s*1.2,y.position.z=54.05,y.position.x=.15,y.rotation.y=-.2,y.rotation.x=-.5,y.rotation.z=-.2,window.innerWidth<500&&(y.scale.set(.8,.8),y.position.x=-.2)})}addback(){this.scene.background=new Fi("#999D9E")}addPointlit(){new K2(16777215).position.set(25,25,25),this.ambientLight=new J2(16777215),this.ambientLight.intensity=3,this.scene.add(this.ambientLight)}render(){this.time++,this.txtgroup.position.y=-this.position,this.speed*=.9,this.targetSpeed+=this.speed-this.targetSpeed,this.txtmaterial.uniforms.uSpeed.value=this.targetSpeed,this.txtmaterial2.uniforms.uSpeed.value=this.targetSpeed,this.txtgroup.position.y=-this.position*.5,this.copytxtgroup.position.y=-this.position*.5,this.plane.rotation.y=this.position*2*Math.PI,this.planegroup.rotation.z=.2*Math.sin(this.position*.5),this.materials&&this.materials.forEach(i=>{i.uniforms.timeanim.value=this.time}),this.videotextures&&this.videotextures.forEach(i=>{i.needsUpdate=!0}),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth(),this.renderer.render(this.copyscene,this.camera),window.requestAnimationFrame(this.render.bind(this))}removeEventListeners(){window.removeEventListener("resize",this.handleResize)}}document.body.style.overflowX="hidden";function fP(){let u=0;const i=document.querySelector(".loader-progress"),s=document.querySelector(".loader-percentage"),c=document.getElementById("preloader"),d=setInterval(()=>{u+=Math.random()*10,u>100&&(u=100),i.style.width=`${u}%`,s.textContent=`${Math.round(u)}%`,u===100&&(clearInterval(d),setTimeout(()=>{c.style.transform="translateY(-100%)",setTimeout(()=>{c.style.display="none",document.getElementById("content").style.display="block"},500)},500))},200)}window.addEventListener("load",fP);gsap.registerPlugin(ScrollTrigger);const uu=new LocomotiveScroll({el:document.querySelector(".smooth-scroll"),smooth:!0,smartphone:{smooth:!0},tablet:{smooth:!0}});uu.on("scroll",u=>{const i=u.scroll.y;for(let s=0;s<U0.length;s++)pP(U0[s],i)},ScrollTrigger.update);ScrollTrigger.scrollerProxy(".smooth-scroll",{scrollTop(u){return arguments.length?uu.scrollTo(u,{duration:0,disableLerp:!0}):uu.scroll.instance.scroll.y},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector(".smooth-scroll").style.transform?"transform":"fixed"});ScrollTrigger.addEventListener("refresh",()=>uu.update());ScrollTrigger.defaults({scroller:".smooth-scroll"});let Gn=new dP;function D0(u){const i=u*-1;console.log("this is value of t ",i),i<-2234.5&&i>-3880.34?(Gn.camera.position.z=56.05,Gn.camera.position.x=.2567569580078125,Gn.camera.rotation.y=.2567569580078125):i<-4789?(Gn.camera.position.z=92.663,Gn.camera.position.x=.4877,Gn.camera.rotation.y=.2567569580078125,Gn.vscrollact=!0,Gn.position=(i/1e3+5)%5,Gn.speed=i/17e4):(Gn.camera.position.z=i*-.019,Gn.camera.position.x=i*-1e-4,Gn.camera.rotation.y=i*-1e-4)}const U0=[...document.querySelectorAll(".carousel")];function pP(u,i){const s=u.parentElement.offsetTop;console.log("The curent pos in trans ",i);const c=u.querySelector(".mediaScroller");console.log("Windows inner height",window.innerHeight);let d=(i-s)/window.innerHeight*100;if(console.log("curentpercent",d),d=d<0?0:d>400?400:d,c.style.transform=`translate3d(${-d}vw,0,0)`,d>0&&d<110){console.log("I am inside the elem",d);const m=window.innerWidth;let M=Gn.videotextures,y=0<d&&d<30?0:30<=d&&d<60?1:60<=d&&d<100?2:(100<=d&&d<120,3);y===0?(M[0].play(),M[1].pause(),M[2].pause()):y===1?(M[0].pause(),M[1].play(),M[2].pause()):y===2?(M[0].pause(),M[1].pause(),M[2].play()):y==3&&(M[0].pause(),M[1].pause(),M[2].pause()),Gn.meshes.forEach((T,A)=>{T.position.y=A*1.2-d*.029;let R=Math.min(Math.abs(y-A));if(R=1-R**3,!(m<500)){let L=1+.3*R;T.scale.set(L,L,L)}T.material.uniforms.distancefromcent.value=R,console.log("this is odddistance",R)})}else document.body.onscroll=D0,D0(i);Gn.updateTexture(),Gn.copytxtgroup.children.forEach((m,M)=>{m.material.uniforms.ustroke.value=!0})}