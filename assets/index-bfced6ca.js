(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ch=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ch(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new uh;const f=i<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lh=function(e){const t=tc(e);return ec.encodeByteArray(t,!0)},ur=function(e){return lh(e).replace(/\./g,"")},hh=function(e){try{return ec.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=()=>dh().__FIREBASE_DEFAULTS__,ph=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},mh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&hh(e[1]);return t&&JSON.parse(t)},nc=()=>{try{return fh()||ph()||mh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gh=e=>{var t,n;return(n=(t=nc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},_h=e=>{const t=gh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rc=()=>{var e;return(e=nc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ur(JSON.stringify(n)),ur(JSON.stringify(o)),a].join(".")}function Eh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sc(){try{return typeof indexedDB=="object"}catch{return!1}}function ic(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function wh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="FirebaseError";class Jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Th,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ih(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jt(s,a,r)}}function Ih(e,t){return e.replace(Ah,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ah=/\{\$([^}]+)}/g;function Ms(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(No(i)&&No(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function No(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=1e3,Sh=2,Ch=4*60*60*1e3,Ph=.5;function Mo(e,t=Rh,n=Sh){const r=t*Math.pow(n,e),s=Math.round(Ph*r*(Math.random()-.5)*2);return Math.min(Ch,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){return e&&e._delegate?e._delegate:e}class kt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new yh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dh(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vh(e){return e===ee?void 0:e}function Dh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new bh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Nh={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Mh=k.INFO,xh={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Oh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=xh[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wi{constructor(t){this.name=t,this._logLevel=Mh,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Lh=(e,t)=>t.some(n=>e instanceof n);let xo,Oo;function Fh(){return xo||(xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bh(){return Oo||(Oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oc=new WeakMap,xs=new WeakMap,ac=new WeakMap,ls=new WeakMap,Ti=new WeakMap;function Uh(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n($t(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&oc.set(n,e)}).catch(()=>{}),Ti.set(t,e),t}function qh(e){if(xs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});xs.set(e,t)}let Os={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ac.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $h(e){Os=e(Os)}function jh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hs(this),t,...n);return ac.set(r,t.sort?t.sort():[t]),$t(r)}:Bh().includes(e)?function(...t){return e.apply(hs(this),t),$t(oc.get(this))}:function(...t){return $t(e.apply(hs(this),t))}}function zh(e){return typeof e=="function"?jh(e):(e instanceof IDBTransaction&&qh(e),Lh(e,Fh())?new Proxy(e,Os):e)}function $t(e){if(e instanceof IDBRequest)return Uh(e);if(ls.has(e))return ls.get(e);const t=zh(e);return t!==e&&(ls.set(e,t),Ti.set(t,e)),t}const hs=e=>Ti.get(e);function Kh(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=$t(o);return r&&o.addEventListener("upgradeneeded",c=>{r($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Gh=["get","getKey","getAll","getAllKeys","count"],Hh=["put","add","delete","clear"],ds=new Map;function Lo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Hh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ds.set(t,i),i}$h(e=>({...e,get:(t,n,r)=>Lo(t,n)||e.get(t,n,r),has:(t,n)=>!!Lo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ls="@firebase/app",Fo="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new wi("@firebase/app"),Yh="@firebase/app-compat",Jh="@firebase/analytics-compat",Xh="@firebase/analytics",Zh="@firebase/app-check-compat",td="@firebase/app-check",ed="@firebase/auth",nd="@firebase/auth-compat",rd="@firebase/database",sd="@firebase/database-compat",id="@firebase/functions",od="@firebase/functions-compat",ad="@firebase/installations",cd="@firebase/installations-compat",ud="@firebase/messaging",ld="@firebase/messaging-compat",hd="@firebase/performance",dd="@firebase/performance-compat",fd="@firebase/remote-config",pd="@firebase/remote-config-compat",md="@firebase/storage",gd="@firebase/storage-compat",_d="@firebase/firestore",yd="@firebase/firestore-compat",vd="firebase",Ed="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]",wd={[Ls]:"fire-core",[Yh]:"fire-core-compat",[Xh]:"fire-analytics",[Jh]:"fire-analytics-compat",[td]:"fire-app-check",[Zh]:"fire-app-check-compat",[ed]:"fire-auth",[nd]:"fire-auth-compat",[rd]:"fire-rtdb",[sd]:"fire-rtdb-compat",[id]:"fire-fn",[od]:"fire-fn-compat",[ad]:"fire-iid",[cd]:"fire-iid-compat",[ud]:"fire-fcm",[ld]:"fire-fcm-compat",[hd]:"fire-perf",[dd]:"fire-perf-compat",[fd]:"fire-rc",[pd]:"fire-rc-compat",[md]:"fire-gcs",[gd]:"fire-gcs-compat",[_d]:"fire-fst",[yd]:"fire-fst-compat","fire-js":"fire-js",[vd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,Bs=new Map;function Td(e,t){try{e.container.addComponent(t)}catch(n){pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ht(e){const t=e.name;if(Bs.has(t))return pe.debug(`There were multiple attempts to register component ${t}.`),!1;Bs.set(t,e);for(const n of lr.values())Td(n,e);return!0}function Ii(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new Pr("app","Firebase",Id);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=Ed;function cc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=rc()),!n)throw jt.create("no-options");const i=lr.get(s);if(i){if(Ms(n,i.options)&&Ms(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new kh(s);for(const c of Bs.values())o.addComponent(c);const a=new Ad(n,r,o);return lr.set(s,a),a}function Sd(e=Fs){const t=lr.get(e);if(!t&&e===Fs&&rc())return cc();if(!t)throw jt.create("no-app",{appName:e});return t}function Rt(e,t,n){var r;let s=(r=wd[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}Ht(new kt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebase-heartbeat-database",Pd=1,fn="firebase-heartbeat-store";let fs=null;function uc(){return fs||(fs=Kh(Cd,Pd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}}).catch(e=>{throw jt.create("idb-open",{originalErrorMessage:e.message})})),fs}async function bd(e){try{return await(await uc()).transaction(fn).objectStore(fn).get(lc(e))}catch(t){if(t instanceof Jt)pe.warn(t.message);else{const n=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pe.warn(n.message)}}}async function Bo(e,t){try{const r=(await uc()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,lc(e)),await r.done}catch(n){if(n instanceof Jt)pe.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(r.message)}}}function lc(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=1024,Dd=30*24*60*60*1e3;class kd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Md(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Dd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uo(),{heartbeatsToSend:n,unsentEntries:r}=Nd(this._heartbeatsCache.heartbeats),s=ur(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uo(){return new Date().toISOString().substring(0,10)}function Nd(e,t=Vd){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Md{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?ic().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qo(e){return ur(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(e){Ht(new kt("platform-logger",t=>new Wh(t),"PRIVATE")),Ht(new kt("heartbeat",t=>new kd(t),"PRIVATE")),Rt(Ls,Fo,e),Rt(Ls,Fo,"esm2017"),Rt("fire-js","")}xd("");var Od="firebase",Ld="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Od,Ld,"app");const Fd=(e,t)=>t.some(n=>e instanceof n);let $o,jo;function Bd(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,Us=new WeakMap,dc=new WeakMap,ps=new WeakMap,Ai=new WeakMap;function qd(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(zt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hc.set(n,e)}).catch(()=>{}),Ai.set(t,e),t}function $d(e){if(Us.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Us.set(e,t)}let qs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Us.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jd(e){qs=e(qs)}function zd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ms(this),t,...n);return dc.set(r,t.sort?t.sort():[t]),zt(r)}:Ud().includes(e)?function(...t){return e.apply(ms(this),t),zt(hc.get(this))}:function(...t){return zt(e.apply(ms(this),t))}}function Kd(e){return typeof e=="function"?zd(e):(e instanceof IDBTransaction&&$d(e),Fd(e,Bd())?new Proxy(e,qs):e)}function zt(e){if(e instanceof IDBRequest)return qd(e);if(ps.has(e))return ps.get(e);const t=Kd(e);return t!==e&&(ps.set(e,t),Ai.set(t,e)),t}const ms=e=>Ai.get(e);function Gd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Hd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],gs=new Map;function zo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gs.get(t))return gs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Wd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return gs.set(t,i),i}jd(e=>({...e,get:(t,n,r)=>zo(t,n)||e.get(t,n,r),has:(t,n)=>!!zo(t,n)||e.has(t,n)}));const fc="@firebase/installations",Ri="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=1e4,mc=`w:${Ri}`,gc="FIS_v2",Qd="https://firebaseinstallations.googleapis.com/v1",Yd=60*60*1e3,Jd="installations",Xd="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},me=new Pr(Jd,Xd,Zd);function _c(e){return e instanceof Jt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc({projectId:e}){return`${Qd}/projects/${e}/installations`}function vc(e){return{token:e.token,requestStatus:2,expiresIn:ef(e.expiresIn),creationTime:Date.now()}}async function Ec(e,t){const r=(await t.json()).error;return me.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wc({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tf(e,{refreshToken:t}){const n=wc(e);return n.append("Authorization",nf(t)),n}async function Tc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ef(e){return Number(e.replace("s","000"))}function nf(e){return`${gc} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=yc(e),s=wc(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:gc,appId:e.appId,sdkVersion:mc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Tc(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vc(u.authToken)}}else throw await Ec("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=/^[cdef][\w-]{21}$/,$s="";function af(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cf(e);return of.test(n)?n:$s}catch{return $s}}function cf(e){return sf(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Map;function Rc(e,t){const n=br(e);Sc(n,t),uf(n,t)}function Sc(e,t){const n=Ac.get(e);if(n)for(const r of n)r(t)}function uf(e,t){const n=lf();n&&n.postMessage({key:e,fid:t}),hf()}let ne=null;function lf(){return!ne&&"BroadcastChannel"in self&&(ne=new BroadcastChannel("[Firebase] FID Change"),ne.onmessage=e=>{Sc(e.data.key,e.data.fid)}),ne}function hf(){Ac.size===0&&ne&&(ne.close(),ne=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="firebase-installations-database",ff=1,ge="firebase-installations-store";let _s=null;function Si(){return _s||(_s=Gd(df,ff,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ge)}}})),_s}async function hr(e,t){const n=br(e),s=(await Si()).transaction(ge,"readwrite"),i=s.objectStore(ge),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Rc(e,t.fid),t}async function Cc(e){const t=br(e),r=(await Si()).transaction(ge,"readwrite");await r.objectStore(ge).delete(t),await r.done}async function Vr(e,t){const n=br(e),s=(await Si()).transaction(ge,"readwrite"),i=s.objectStore(ge),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Rc(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(e){let t;const n=await Vr(e.appConfig,r=>{const s=pf(r),i=mf(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===$s?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pf(e){const t=e||{fid:af(),registrationStatus:0};return Pc(t)}function mf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(me.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gf(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_f(e)}:{installationEntry:t}}async function gf(e,t){try{const n=await rf(e,t);return hr(e.appConfig,n)}catch(n){throw _c(n)&&n.customData.serverCode===409?await Cc(e.appConfig):await hr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _f(e){let t=await Ko(e.appConfig);for(;t.registrationStatus===1;)await Ic(100),t=await Ko(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ci(e);return r||n}return t}function Ko(e){return Vr(e,t=>{if(!t)throw me.create("installation-not-found");return Pc(t)})}function Pc(e){return yf(e)?{fid:e.fid,registrationStatus:0}:e}function yf(e){return e.registrationStatus===1&&e.registrationTime+pc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf({appConfig:e,heartbeatServiceProvider:t},n){const r=Ef(e,n),s=tf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:mc,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Tc(()=>fetch(r,a));if(c.ok){const u=await c.json();return vc(u)}else throw await Ec("Generate Auth Token",c)}function Ef(e,{fid:t}){return`${yc(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e,t=!1){let n;const r=await Vr(e.appConfig,i=>{if(!bc(i))throw me.create("not-registered");const o=i.authToken;if(!t&&If(o))return i;if(o.requestStatus===1)return n=wf(e,t),i;{if(!navigator.onLine)throw me.create("app-offline");const a=Rf(i);return n=Tf(e,a),a}});return n?await n:r.authToken}async function wf(e,t){let n=await Go(e.appConfig);for(;n.authToken.requestStatus===1;)await Ic(100),n=await Go(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pi(e,t):r}function Go(e){return Vr(e,t=>{if(!bc(t))throw me.create("not-registered");const n=t.authToken;return Sf(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tf(e,t){try{const n=await vf(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await hr(e.appConfig,r),n}catch(n){if(_c(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await hr(e.appConfig,r)}throw n}}function bc(e){return e!==void 0&&e.registrationStatus===2}function If(e){return e.requestStatus===2&&!Af(e)}function Af(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Yd}function Rf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Sf(e){return e.requestStatus===1&&e.requestTime+pc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ci(t);return r?r.catch(console.error):Pi(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(e,t=!1){const n=e;return await bf(n),(await Pi(n,t)).token}async function bf(e){const{registrationPromise:t}=await Ci(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){if(!e||!e.options)throw ys("App Configuration");if(!e.name)throw ys("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ys(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ys(e){return me.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="installations",Df="installations-internal",kf=e=>{const t=e.getProvider("app").getImmediate(),n=Vf(t),r=Ii(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Nf=e=>{const t=e.getProvider("app").getImmediate(),n=Ii(t,Vc).getImmediate();return{getId:()=>Cf(n),getToken:s=>Pf(n,s)}};function Mf(){Ht(new kt(Vc,kf,"PUBLIC")),Ht(new kt(Df,Nf,"PRIVATE"))}Mf();Rt(fc,Ri);Rt(fc,Ri,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="analytics",xf="firebase_id",Of="origin",Lf=60*1e3,Ff="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new wi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new Pr("analytics","Analytics",Bf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e){if(!e.startsWith(bi)){const t=gt.create("invalid-gtag-resource",{gtagURL:e});return ht.warn(t.message),""}return e}function Dc(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qf(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $f(e,t){const n=qf("firebase-js-sdk-policy",{createScriptURL:Uf}),r=document.createElement("script"),s=`${bi}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function jf(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zf(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Dc(n)).find(u=>u.measurementId===s);c&&await t[c.appId]}}catch(a){ht.error(a)}e("config",s,i)}async function Kf(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Dc(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ht.error(i)}}function Gf(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Kf(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await zf(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ht.error(a)}}return s}function Hf(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Gf(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Wf(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(bi)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=30,Yf=1e3;class Jf{constructor(t={},n=Yf){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const kc=new Jf;function Xf(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zf(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Xf(r)},i=Ff.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tp(e,t=kc,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw gt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rp;return setTimeout(async()=>{a.abort()},n!==void 0?n:Lf),Nc({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Nc(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=kc){var i;const{appId:o,measurementId:a}=e;try{await ep(r,t)}catch(c){if(a)return ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Zf(e);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!np(u)){if(s.deleteThrottleMetadata(o),a)return ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Mo(n,s.intervalMillis,Qf):Mo(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(o,h),ht.debug(`Calling attemptFetch again in ${l} millis`),Nc(e,h,r,s)}}function ep(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(gt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function np(e){if(!(e instanceof Jt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class rp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sp(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(){if(sc())try{await ic()}catch(e){return ht.warn(gt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ht.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function op(e,t,n,r,s,i,o){var a;const c=tp(e);c.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&ht.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>ht.error(d)),t.push(c);const u=ip().then(d=>{if(d)return r.getId()}),[l,h]=await Promise.all([c,u]);Wf(i)||$f(i,l.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Of]="firebase",f.update=!0,h!=null&&(f[xf]=h),s("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.app=t}_delete(){return delete on[this.app.options.appId],Promise.resolve()}}let on={},Wo=[];const Qo={};let vs="dataLayer",cp="gtag",Yo,Mc,Jo=!1;function up(){const e=[];if(Eh()&&e.push("This is a browser extension environment."),wh()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:t});ht.warn(n.message)}}function lp(e,t,n){up();const r=e.options.appId;if(!r)throw gt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(on[r]!=null)throw gt.create("already-exists",{id:r});if(!Jo){jf(vs);const{wrappedGtag:i,gtagCore:o}=Hf(on,Wo,Qo,vs,cp);Mc=i,Yo=o,Jo=!0}return on[r]=op(e,Wo,Qo,t,Yo,vs,n),new ap(e)}function hp(e,t,n,r){e=vt(e),sp(Mc,on[e.app.options.appId],t,n,r).catch(s=>ht.error(s))}const Xo="@firebase/analytics",Zo="0.10.0";function dp(){Ht(new kt(Ho,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return lp(r,s,n)},"PUBLIC")),Ht(new kt("analytics-internal",e,"PRIVATE")),Rt(Xo,Zo),Rt(Xo,Zo,"esm2017");function e(t){try{const n=t.getProvider(Ho).getImmediate();return{logEvent:(r,s,i)=>hp(n,r,s,i)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}dp();var fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Vi=Vi||{},S=fp||self;function Dr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function xn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function pp(e){return Object.prototype.hasOwnProperty.call(e,Es)&&e[Es]||(e[Es]=++mp)}var Es="closure_uid_"+(1e9*Math.random()>>>0),mp=0;function gp(e,t,n){return e.call.apply(e.bind,arguments)}function _p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function rt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=gp:rt=_p,rt.apply(null,arguments)}function Jn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Xt(){this.s=this.s,this.o=this.o}var yp=0;Xt.prototype.s=!1;Xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yp!=0)&&pp(this)};Xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Di(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ta(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Dr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function st(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var vp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",()=>{},t),S.removeEventListener("test",()=>{},t)}catch{}return e}();function pn(e){return/^[\s\xa0]*$/.test(e)}function kr(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return kr().indexOf(e)!=-1}function ki(e){return ki[" "](e),e}ki[" "]=function(){};function Ep(e,t){var n=dm;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var wp=Tt("Opera"),Oe=Tt("Trident")||Tt("MSIE"),Oc=Tt("Edge"),js=Oc||Oe,Lc=Tt("Gecko")&&!(kr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),Tp=kr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function Fc(){var e=S.document;return e?e.documentMode:void 0}var zs;t:{var ws="",Ts=function(){var e=kr();if(Lc)return/rv:([^\);]+)(\)|;)/.exec(e);if(Oc)return/Edge\/([\d\.]+)/.exec(e);if(Oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Tp)return/WebKit\/(\S+)/.exec(e);if(wp)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ts&&(ws=Ts?Ts[1]:""),Oe){var Is=Fc();if(Is!=null&&Is>parseFloat(ws)){zs=String(Is);break t}}zs=ws}var Ks;if(S.document&&Oe){var ea=Fc();Ks=ea||parseInt(zs,10)||void 0}else Ks=void 0;var Ip=Ks;function mn(e,t){if(st.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lc){t:{try{ki(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ap[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mn.$.h.call(this)}}Q(mn,st);var Ap={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),Rp=0;function Sp(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Rp,this.fa=this.ia=!1}function Nr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ni(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Cp(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Bc(e){const t={};for(const n in e)t[n]=e[n];return t}const na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uc(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<na.length;i++)n=na[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Mr(e){this.src=e,this.g={},this.h=0}Mr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Hs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Sp(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Gs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=xc(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Nr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),As={};function qc(e,t,n,r,s){if(r&&r.once)return jc(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)qc(e,t[i],n,r,s);return null}return n=Li(n),e&&e[On]?e.O(t,n,xn(r)?!!r.capture:!!r,s):$c(e,t,n,!1,r,s)}function $c(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=xn(s)?!!s.capture:!!s,a=Oi(e);if(a||(e[Mi]=a=new Mr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Pp(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)vp||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Kc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pp(){function e(n){return t.call(e.src,e.listener,n)}const t=bp;return e}function jc(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)jc(e,t[i],n,r,s);return null}return n=Li(n),e&&e[On]?e.P(t,n,xn(r)?!!r.capture:!!r,s):$c(e,t,n,!0,r,s)}function zc(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)zc(e,t[i],n,r,s);else r=xn(r)?!!r.capture:!!r,n=Li(n),e&&e[On]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Hs(i,n,r,s),-1<n&&(Nr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Oi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hs(t,n,r,s)),(n=-1<e?t[e]:null)&&xi(n))}function xi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[On])Gs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Kc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Oi(t))?(Gs(n,e),n.h==0&&(n.src=null,t[Mi]=null)):Nr(e)}}}function Kc(e){return e in As?As[e]:As[e]="on"+e}function bp(e,t){if(e.fa)e=!0;else{t=new mn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&xi(e),e=n.call(r,t)}return e}function Oi(e){return e=e[Mi],e instanceof Mr?e:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(e){return typeof e=="function"?e:(e[Rs]||(e[Rs]=function(t){return e.handleEvent(t)}),e[Rs])}function W(){Xt.call(this),this.i=new Mr(this),this.S=this,this.J=null}Q(W,Xt);W.prototype[On]=!0;W.prototype.removeEventListener=function(e,t,n,r){zc(this,e,t,n,r)};function X(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new st(t,e);else if(t instanceof st)t.target=t.target||e;else{var s=t;t=new st(r,e),Uc(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Xn(o,r,!0,t)&&s}if(o=t.g=e,s=Xn(o,r,!0,t)&&s,s=Xn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Xn(o,r,!1,t)&&s}W.prototype.N=function(){if(W.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Nr(n[r]);delete e.g[t],e.h--}}this.J=null};W.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};W.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Xn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Gs(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Fi=S.JSON.stringify;class Vp{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Dp(){var e=Bi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class kp{constructor(){this.h=this.g=null}add(t,n){const r=Gc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gc=new Vp(()=>new Np,e=>e.reset());class Np{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mp(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xp(e){S.setTimeout(()=>{throw e},0)}let gn,_n=!1,Bi=new kp,Hc=()=>{const e=S.Promise.resolve(void 0);gn=()=>{e.then(Op)}};var Op=()=>{for(var e;e=Dp();){try{e.h.call(e.g)}catch(n){xp(n)}var t=Gc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_n=!1};function xr(e,t){W.call(this),this.h=e||1,this.g=t||S,this.j=rt(this.qb,this),this.l=Date.now()}Q(xr,W);y=xr.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),X(this,"tick"),this.ga&&(Ui(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ui(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){xr.$.N.call(this),Ui(this),delete this.g};function qi(e,t,n){if(typeof e=="function")n&&(e=rt(e,n));else if(e&&typeof e.handleEvent=="function")e=rt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function Wc(e){e.g=qi(()=>{e.g=null,e.i&&(e.i=!1,Wc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Lp extends Xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wc(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(e){Xt.call(this),this.h=e,this.g={}}Q(yn,Xt);var ra=[];function Qc(e,t,n,r){Array.isArray(n)||(n&&(ra[0]=n.toString()),n=ra);for(var s=0;s<n.length;s++){var i=qc(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Yc(e){Ni(e.g,function(t,n){this.g.hasOwnProperty(n)&&xi(t)},e),e.g={}}yn.prototype.N=function(){yn.$.N.call(this),Yc(this)};yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Or(){this.g=!0}Or.prototype.Ea=function(){this.g=!1};function Fp(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Bp(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Pe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+qp(e,n)+(r?" "+r:"")})}function Up(e,t){e.info(function(){return"TIMEOUT: "+t})}Or.prototype.info=function(){};function qp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Fi(n)}catch{return t}}var we={},sa=null;function Lr(){return sa=sa||new W}we.Ta="serverreachability";function Jc(e){st.call(this,we.Ta,e)}Q(Jc,st);function vn(e){const t=Lr();X(t,new Jc(t))}we.STAT_EVENT="statevent";function Xc(e,t){st.call(this,we.STAT_EVENT,e),this.stat=t}Q(Xc,st);function ut(e){const t=Lr();X(t,new Xc(t,e))}we.Ua="timingevent";function Zc(e,t){st.call(this,we.Ua,e),this.size=t}Q(Zc,st);function Ln(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var Fr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $i(){}$i.prototype.h=null;function ia(e){return e.h||(e.h=e.i())}function eu(){}var Fn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ji(){st.call(this,"d")}Q(ji,st);function zi(){st.call(this,"c")}Q(zi,st);var Ws;function Br(){}Q(Br,$i);Br.prototype.g=function(){return new XMLHttpRequest};Br.prototype.i=function(){return{}};Ws=new Br;function Bn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new yn(this),this.P=$p,e=js?125:void 0,this.V=new xr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var $p=45e3,Qs={},dr={};y=Bn.prototype;y.setTimeout=function(e){this.P=e};function Ys(e,t,n){e.L=1,e.v=qr(Nt(t)),e.s=n,e.S=!0,ru(e,null)}function ru(e,t){e.G=Date.now(),Un(e),e.A=Nt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),hu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new nu,e.g=ku(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Lp(rt(e.Pa,e,e.g),e.O)),Qc(e.U,e.g,"readystatechange",e.nb),t=e.I?Bc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),vn(),Fp(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&It(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const l=It(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||js||this.g&&(this.h.h||this.g.ja()||ua(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?vn(3):vn(2)),Ur(this);var n=this.g.da();this.ca=n;e:if(su(this)){var r=ua(this.g);e="";var s=r.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),an(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Bp(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var u=a;break e}}u=null}if(n=u)Pe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Js(this,n);else{this.i=!1,this.o=3,ut(12),re(this),an(this);break t}}this.S?(iu(this,l,o),js&&this.i&&l==3&&(Qc(this.U,this.V,"tick",this.mb),this.V.start())):(Pe(this.j,this.m,o,null),Js(this,o)),l==4&&re(this),this.i&&!this.J&&(l==4?Pu(this.l,this):(this.i=!1,Un(this)))}else um(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),re(this),an(this)}}}catch{}finally{}};function su(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function iu(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=jp(e,n),s==dr){t==4&&(e.o=4,ut(14),r=!1),Pe(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Qs){e.o=4,ut(15),Pe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Pe(e.j,e.m,s,null),Js(e,s);su(e)&&s!=dr&&s!=Qs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ut(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yi(t),t.M=!0,ut(11))):(Pe(e.j,e.m,n,"[Invalid Chunked Response]"),re(e),an(e))}y.mb=function(){if(this.g){var e=It(this.g),t=this.g.ja();this.C<t.length&&(Ur(this),iu(this,e,t),this.i&&e!=4&&Un(this))}};function jp(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?dr:(n=Number(t.substring(n,r)),isNaN(n)?Qs:(r+=1,r+n>t.length?dr:(t=t.slice(r,r+n),e.C=r+n,t)))}y.cancel=function(){this.J=!0,re(this)};function Un(e){e.Y=Date.now()+e.P,ou(e,e.P)}function ou(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ln(rt(e.lb,e),t)}function Ur(e){e.B&&(S.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Up(this.j,this.A),this.L!=2&&(vn(),ut(17)),re(this),this.o=2,an(this)):ou(this,this.Y-e)};function an(e){e.l.H==0||e.J||Pu(e.l,e)}function re(e){Ur(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ui(e.V),Yc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Js(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xs(n.i,e))){if(!e.K&&Xs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)mr(n),Kr(n);else break t;Qi(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ln(rt(n.ib,n),6e3));if(1>=pu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else se(n,11)}else if((e.K||n.g==e)&&mr(n),!pn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ki(i,i.h),i.h=null))}if(r.F){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,O(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Du(r,r.J?r.pa:null,r.Y),o.K){mu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ur(a),Un(a)),r.g=o}else Su(r);0<n.j.length&&Gr(n)}else u[0]!="stop"&&u[0]!="close"||se(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?se(n,7):Wi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}vn(4)}catch{}}function zp(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Dr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Kp(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Dr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function au(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Dr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Kp(e),r=zp(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ue(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ue){this.h=e.h,fr(this,e.j),this.s=e.s,this.g=e.g,pr(this,e.m),this.l=e.l;var t=e.i,n=new En;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),oa(this,n),this.o=e.o}else e&&(t=String(e).match(cu))?(this.h=!1,fr(this,t[1]||"",!0),this.s=tn(t[2]||""),this.g=tn(t[3]||"",!0),pr(this,t[4]),this.l=tn(t[5]||"",!0),oa(this,t[6]||"",!0),this.o=tn(t[7]||"")):(this.h=!1,this.i=new En(null,this.h))}ue.prototype.toString=function(){var e=[],t=this.j;t&&e.push(en(t,aa,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(en(t,aa,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(en(n,n.charAt(0)=="/"?Qp:Wp,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",en(n,Jp)),e.join("")};function Nt(e){return new ue(e)}function fr(e,t,n){e.j=n?tn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oa(e,t,n){t instanceof En?(e.i=t,Xp(e.i,e.h)):(n||(t=en(t,Yp)),e.i=new En(t,e.h))}function O(e,t,n){e.i.set(t,n)}function qr(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function en(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Hp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var aa=/[#\/\?@]/g,Wp=/[#\?:]/g,Qp=/[#\?]/g,Yp=/[#\?@]/g,Jp=/#/g;function En(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&Gp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=En.prototype;y.add=function(e,t){Zt(this),this.i=null,e=ze(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function uu(e,t){Zt(e),t=ze(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lu(e,t){return Zt(e),t=ze(e,t),e.g.has(t)}y.forEach=function(e,t){Zt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};y.ta=function(){Zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};y.Z=function(e){Zt(this);let t=[];if(typeof e=="string")lu(this,e)&&(t=t.concat(this.g.get(ze(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Zt(this),this.i=null,e=ze(this,e),lu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function hu(e,t,n){uu(e,t),0<n.length&&(e.i=null,e.g.set(ze(e,t),Di(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ze(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Xp(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(uu(this,r),hu(this,s,n))},e)),e.j=t}var Zp=class{constructor(e,t){this.g=e,this.map=t}};function du(e){this.l=e||tm,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tm=10;function fu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function pu(e){return e.h?1:e.g?e.g.size:0}function Xs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ki(e,t){e.g?e.g.add(t):e.h=t}function mu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}du.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function gu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Di(e.i)}var em=class{stringify(e){return S.JSON.stringify(e,void 0)}parse(e){return S.JSON.parse(e,void 0)}};function nm(){this.g=new em}function rm(e,t,n){const r=n||"";try{au(e,function(s,i){let o=s;xn(s)&&(o=Fi(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function sm(e,t){const n=new Or;if(S.Image){const r=new Image;r.onload=Jn(Zn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Jn(Zn,n,r,"TestLoadImage: error",!1,t),r.onabort=Jn(Zn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Jn(Zn,n,r,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Zn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function $r(e){this.l=e.fc||null,this.j=e.ob||!1}Q($r,$i);$r.prototype.g=function(){return new jr(this.l,this.j)};$r.prototype.i=function(e){return function(){return e}}({});function jr(e,t){W.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Gi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(jr,W);var Gi=0;y=jr.prototype;y.open=function(e,t){if(this.readyState!=Gi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||S).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=Gi};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_u(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function _u(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qn(this):wn(this),this.readyState==3&&_u(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,qn(this))};y.Ya=function(e){this.g&&(this.response=e,qn(this))};y.ka=function(){this.g&&qn(this)};function qn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(jr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var im=S.JSON.parse;function U(e){W.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yu,this.L=this.M=!1}Q(U,W);var yu="",om=/^https?$/i,am=["POST","PUT"];y=U.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ws.g(),this.C=this.u?ia(this.u):ia(Ws),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){ca(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=S.FormData&&e instanceof S.FormData,!(0<=xc(am,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wu(this),0<this.B&&((this.L=cm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=qi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ca(this,i)}};function cm(e){return Oe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof Vi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function ca(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vu(e),zr(e)}function vu(e){e.F||(e.F=!0,X(e,"complete"),X(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),zr(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zr(this,!0)),U.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Eu(this):this.kb())};y.kb=function(){Eu(this)};function Eu(e){if(e.h&&typeof Vi<"u"&&(!e.C[1]||It(e)!=4||e.da()!=2)){if(e.v&&It(e)==4)qi(e.La,0,e);else if(X(e,"readystatechange"),It(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(cu)[1]||null;!s&&S.self&&S.self.location&&(s=S.self.location.protocol.slice(0,-1)),r=!om.test(s?s.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var i=2<It(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",vu(e)}}finally{zr(e)}}}}function zr(e,t){if(e.g){wu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=r}catch{}}}function wu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function It(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),im(t)}};function ua(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case yu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function um(e){const t={};e=(e.g&&2<=It(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(pn(e[r]))continue;var n=Mp(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Cp(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tu(e){let t="";return Ni(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Hi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Tu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Xe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Iu(e){this.Ga=0,this.j=[],this.l=new Or,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xe("baseRetryDelayMs",5e3,e),this.hb=Xe("retryDelaySeedMs",1e4,e),this.eb=Xe("forwardChannelMaxRetries",2,e),this.xa=Xe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new du(e&&e.concurrentRequestLimit),this.Ja=new nm,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Iu.prototype;y.ra=8;y.H=1;function Wi(e){if(Au(e),e.H==3){var t=e.W++,n=Nt(e.I);if(O(n,"SID",e.K),O(n,"RID",t),O(n,"TYPE","terminate"),$n(e,n),t=new Bn(e,e.l,t),t.L=2,t.v=qr(Nt(n)),n=!1,S.navigator&&S.navigator.sendBeacon)try{n=S.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=ku(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Un(t)}Vu(e)}function Kr(e){e.g&&(Yi(e),e.g.cancel(),e.g=null)}function Au(e){Kr(e),e.u&&(S.clearTimeout(e.u),e.u=null),mr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function Gr(e){if(!fu(e.i)&&!e.m){e.m=!0;var t=e.Na;gn||Hc(),_n||(gn(),_n=!0),Bi.add(t,e),e.C=0}}function lm(e,t){return pu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ln(rt(e.Na,e,t),bu(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Bn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Bc(i),Uc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ru(this,s,t),n=Nt(this.I),O(n,"RID",e),O(n,"CVER",22),this.F&&O(n,"X-HTTP-Session-Id",this.F),$n(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Tu(i)))+"&"+t:this.o&&Hi(n,this.o,i)),Ki(this.i,s),this.bb&&O(n,"TYPE","init"),this.P?(O(n,"$req",t),O(n,"SID","null"),s.aa=!0,Ys(s,n,null)):Ys(s,n,t),this.H=2}}else this.H==3&&(e?la(this,e):this.j.length==0||fu(this.i)||la(this))};function la(e,t){var n;t?n=t.m:n=e.W++;const r=Nt(e.I);O(r,"SID",e.K),O(r,"RID",n),O(r,"AID",e.V),$n(e,r),e.o&&e.s&&Hi(r,e.o,e.s),n=new Bn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ru(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ki(e.i,n),Ys(n,r,t)}function $n(e,t){e.na&&Ni(e.na,function(n,r){O(t,r,n)}),e.h&&au({},function(n,r){O(t,r,n)})}function Ru(e,t,n){n=Math.min(e.j.length,n);var r=e.h?rt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{rm(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Su(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;gn||Hc(),_n||(gn(),_n=!0),Bi.add(t,e),e.A=0}}function Qi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ln(rt(e.Ma,e),bu(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,Cu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ln(rt(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Kr(this),Cu(this))};function Yi(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function Cu(e){e.g=new Bn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Nt(e.wa);O(t,"RID","rpc"),O(t,"SID",e.K),O(t,"AID",e.V),O(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&O(t,"TO",e.qa),O(t,"TYPE","xmlhttp"),$n(e,t),e.o&&e.s&&Hi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qr(Nt(t)),n.s=null,n.S=!0,ru(n,e)}y.ib=function(){this.v!=null&&(this.v=null,Kr(this),Qi(this),ut(19))};function mr(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function Pu(e,t){var n=null;if(e.g==t){mr(e),Yi(e),e.g=null;var r=2}else if(Xs(e.i,t))n=t.F,mu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Lr(),X(r,new Zc(r,n)),Gr(e)}else Su(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&lm(e,t)||r==2&&Qi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:se(e,5);break;case 4:se(e,10);break;case 3:se(e,6);break;default:se(e,2)}}}function bu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function se(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=rt(e.pb,e);n||(n=new ue("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||fr(n,"https"),qr(n)),sm(n.toString(),r)}else ut(2);e.H=0,e.h&&e.h.za(t),Vu(e),Au(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Vu(e){if(e.H=0,e.ma=[],e.h){const t=gu(e.i);(t.length!=0||e.j.length!=0)&&(ta(e.ma,t),ta(e.ma,e.j),e.i.i.length=0,Di(e.j),e.j.length=0),e.h.ya()}}function Du(e,t,n){var r=n instanceof ue?Nt(n):new ue(n);if(r.g!="")t&&(r.g=t+"."+r.g),pr(r,r.m);else{var s=S.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ue(null);r&&fr(i,r),t&&(i.g=t),s&&pr(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&O(r,n,t),O(r,"VER",e.ra),$n(e,r),r}function ku(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new U(new $r({ob:!0})):new U(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nu(){}y=Nu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function gr(){if(Oe&&!(10<=Number(Ip)))throw Error("Environmental error: no available transport.")}gr.prototype.g=function(e,t){return new pt(e,t)};function pt(e,t){W.call(this),this.g=new Iu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!pn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ke(this)}Q(pt,W);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ut(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Du(e,null,e.Y),Gr(e)};pt.prototype.close=function(){Wi(this.g)};pt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fi(e),e=n);t.j.push(new Zp(t.fb++,e)),t.H==3&&Gr(t)};pt.prototype.N=function(){this.g.h=null,delete this.j,Wi(this.g),delete this.g,pt.$.N.call(this)};function Mu(e){ji.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Mu,ji);function xu(){zi.call(this),this.status=1}Q(xu,zi);function Ke(e){this.g=e}Q(Ke,Nu);Ke.prototype.Ba=function(){X(this.g,"a")};Ke.prototype.Aa=function(e){X(this.g,new Mu(e))};Ke.prototype.za=function(e){X(this.g,new xu)};Ke.prototype.ya=function(){X(this.g,"b")};function hm(){this.blockSize=-1}function Et(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Q(Et,hm);Et.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ss(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Et.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Ss(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Ss(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Ss(this,r),s=0;break}}this.h=s,this.i+=t};Et.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function N(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var dm={};function Ji(e){return-128<=e&&128>e?Ep(e,function(t){return new N([t|0],0>t?-1:0)}):new N([e|0],0>e?-1:0)}function At(e){if(isNaN(e)||!isFinite(e))return be;if(0>e)return J(At(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Zs;return new N(t,0)}function Ou(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return J(Ou(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=At(Math.pow(t,8)),r=be,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=At(Math.pow(t,i)),r=r.R(i).add(At(o))):(r=r.R(n),r=r.add(At(o)))}return r}var Zs=4294967296,be=Ji(0),ti=Ji(1),ha=Ji(16777216);y=N.prototype;y.ea=function(){if(mt(this))return-J(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Zs+r)*t,t*=Zs}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Dt(this))return"0";if(mt(this))return"-"+J(this).toString(e);for(var t=At(Math.pow(e,6)),n=this,r="";;){var s=yr(n,t).g;n=_r(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Dt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Dt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function mt(e){return e.h==-1}y.X=function(e){return e=_r(this,e),mt(e)?-1:Dt(e)?0:1};function J(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new N(n,~e.h).add(ti)}y.abs=function(){return mt(this)?J(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new N(n,n[n.length-1]&-2147483648?-1:0)};function _r(e,t){return e.add(J(t))}y.R=function(e){if(Dt(this)||Dt(e))return be;if(mt(this))return mt(e)?J(this).R(J(e)):J(J(this).R(e));if(mt(e))return J(this.R(J(e)));if(0>this.X(ha)&&0>e.X(ha))return At(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,tr(n,2*r+2*s),n[2*r+2*s+1]+=i*c,tr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,tr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,tr(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new N(n,0)};function tr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ze(e,t){this.g=e,this.h=t}function yr(e,t){if(Dt(t))throw Error("division by zero");if(Dt(e))return new Ze(be,be);if(mt(e))return t=yr(J(e),t),new Ze(J(t.g),J(t.h));if(mt(t))return t=yr(e,J(t)),new Ze(J(t.g),t.h);if(30<e.g.length){if(mt(e)||mt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ti,r=t;0>=r.X(e);)n=da(n),r=da(r);var s=Ae(n,1),i=Ae(r,1);for(r=Ae(r,2),n=Ae(n,2);!Dt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Ae(r,1),n=Ae(n,1)}return t=_r(e,s.R(t)),new Ze(s,t)}for(s=be;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=At(n),o=i.R(t);mt(o)||0<o.X(e);)n-=r,i=At(n),o=i.R(t);Dt(i)&&(i=ti),s=s.add(i),e=_r(e,o)}return new Ze(s,e)}y.gb=function(e){return yr(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new N(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new N(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new N(n,this.h^e.h)};function da(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new N(n,e.h)}function Ae(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new N(s,e.h)}gr.prototype.createWebChannel=gr.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Fr.NO_ERROR=0;Fr.TIMEOUT=8;Fr.HTTP_ERROR=6;tu.COMPLETE="complete";eu.EventType=Fn;Fn.OPEN="a";Fn.CLOSE="b";Fn.ERROR="c";Fn.MESSAGE="d";W.prototype.listen=W.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;Et.prototype.digest=Et.prototype.l;Et.prototype.reset=Et.prototype.reset;Et.prototype.update=Et.prototype.j;N.prototype.add=N.prototype.add;N.prototype.multiply=N.prototype.R;N.prototype.modulo=N.prototype.gb;N.prototype.compare=N.prototype.X;N.prototype.toNumber=N.prototype.ea;N.prototype.toString=N.prototype.toString;N.prototype.getBits=N.prototype.D;N.fromNumber=At;N.fromString=Ou;var fm=function(){return new gr},pm=function(){return Lr()},Cs=Fr,mm=tu,gm=we,fa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},er=eu,_m=U,ym=Et,Ve=N;const pa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new wi("@firebase/firestore");function ma(){return _e.logLevel}function w(e,...t){if(_e.logLevel<=k.DEBUG){const n=t.map(Xi);_e.debug(`Firestore (${Ge}): ${e}`,...n)}}function Mt(e,...t){if(_e.logLevel<=k.ERROR){const n=t.map(Xi);_e.error(`Firestore (${Ge}): ${e}`,...n)}}function Le(e,...t){if(_e.logLevel<=k.WARN){const n=t.map(Xi);_e.warn(`Firestore (${Ge}): ${e}`,...n)}}function Xi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: `+e;throw Mt(t),new Error(t)}function F(e,t){e||R()}function P(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Jt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Em{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wm{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Lu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string"),new tt(t)}}class Tm{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Im{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tm(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Am{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new Am(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Sm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function Fe(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new K(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new K(0,0))}static max(){return new C(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,r){n===void 0?n=0:n>t.length&&R(),r===void 0?r=t.length-n:r>t.length-n&&R(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Tn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Tn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends Tn{construct(t,n,r){return new L(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new v(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new L(n)}static emptyPath(){return new L([])}}const Cm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Tn{construct(t,n,r){return new nt(t,n,r)}static isValidIdentifier(t){return Cm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new v(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new v(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(L.fromString(t))}static fromName(t){return new I(L.fromString(t).popFirst(5))}static empty(){return new I(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new L(t.slice()))}}function Pm(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=C.fromTimestamp(r===1e9?new K(n+1,0):new K(n,r));return new Wt(s,I.empty(),t)}function bm(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Wt(C.min(),I.empty(),-1)}static max(){return new Wt(C.max(),I.empty(),-1)}}function Vm(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class km{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Dm)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):_.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):_.reject(n)}static resolve(t){return new _((n,r)=>{n(t)})}static reject(t){return new _((n,r)=>{r(t)})}static waitFor(t){return new _((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=_.resolve(!1);for(const r of t)n=n.next(s=>s?_.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new _((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new _((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function zn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Zi.ae=-1;function Hr(e){return e==null}function vr(e){return e===0&&1/e==-1/0}function Nm(e){return typeof e=="number"&&Number.isInteger(e)&&!vr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Te(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){this.comparator=t,this.root=n||Y.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Y.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Y.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nr(this.root,t,this.comparator,!0)}}class nr{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Y{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Y.RED,this.left=s??Y.EMPTY,this.right=i??Y.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Y(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Y.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Y.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const t=this.left.check();if(t!==this.right.check())throw R();return t+(this.isRed()?0:1)}}Y.EMPTY=null,Y.RED=!0,Y.BLACK=!1;Y.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Y(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new it(this.comparator);return n.data=t,n}}class _a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new ft([])}unionWith(t){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ft(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uu("Invalid base64 string: "+i):i}}(t);return new at(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new at(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if(F(!!e),typeof e=="string"){let t=0;const n=Mm.exec(e);if(F(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ye(e){return typeof e=="string"?at.fromBase64String(e):at.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eo(e){const t=e.mapValue.fields.__previous_value__;return to(t)?eo(t):t}function In(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class An{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ve(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?to(e)?4:Om(e)?9007199254740991:10:R()}function Ct(e,t){if(e===t)return!0;const n=ve(e);if(n!==ve(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return In(e).isEqual(In(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qt(s.timestampValue),a=Qt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ye(s.bytesValue).isEqual(ye(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return j(s.geoPointValue.latitude)===j(i.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return j(s.integerValue)===j(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=j(s.doubleValue),a=j(i.doubleValue);return o===a?vr(o)===vr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Fe(e.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ga(o)!==ga(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ct(o[c],a[c])))return!1;return!0}(e,t);default:return R()}}function Rn(e,t){return(e.values||[]).find(n=>Ct(n,t))!==void 0}function Be(e,t){if(e===t)return 0;const n=ve(e),r=ve(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=j(i.integerValue||i.doubleValue),c=j(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return ya(e.timestampValue,t.timestampValue);case 4:return ya(In(e),In(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=ye(i),c=ye(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(j(i.latitude),j(o.latitude));return a!==0?a:D(j(i.longitude),j(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Be(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===rr.mapValue&&o===rr.mapValue)return 0;if(i===rr.mapValue)return 1;if(o===rr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const f=D(c[h],l[h]);if(f!==0)return f;const d=Be(a[c[h]],u[l[h]]);if(d!==0)return d}return D(c.length,l.length)}(e.mapValue,t.mapValue);default:throw R()}}function ya(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Qt(e),r=Qt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function Ue(e){return ei(e)}function ei(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ye(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return I.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ei(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ei(n.fields[o])}`;return s+"}"}(e.mapValue):R()}function va(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ni(e){return!!e&&"integerValue"in e}function no(e){return!!e&&"arrayValue"in e}function Ea(e){return!!e&&"nullValue"in e}function wa(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ir(e){return!!e&&"mapValue"in e}function cn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Te(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=cn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Om(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ir(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(n)}setAll(t){let n=nt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=cn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Te(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new lt(cn(this.value))}}function qu(e){const t=[];return Te(e.fields,(n,r)=>{const s=new nt([n]);if(ir(r)){const i=qu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ft(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new et(t,0,C.min(),C.min(),C.min(),lt.empty(),0)}static newFoundDocument(t,n,r,s){return new et(t,1,n,C.min(),r,s,0)}static newNoDocument(t,n){return new et(t,2,n,C.min(),C.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new et(t,3,n,C.min(),C.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n){this.position=t,this.inclusive=n}}function Ta(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=Be(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ia(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ct(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n="asc"){this.field=t,this.dir=n}}function Lm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{}class z extends $u{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Bm(t,n,r):n==="array-contains"?new $m(t,r):n==="in"?new jm(t,r):n==="not-in"?new zm(t,r):n==="array-contains-any"?new Km(t,r):new z(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Um(t,r):new qm(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Be(n,this.value)):n!==null&&ve(this.value)===ve(n)&&this.matchesComparison(Be(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wt extends $u{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new wt(t,n)}matches(t){return ju(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ju(e){return e.op==="and"}function zu(e){return Fm(e)&&ju(e)}function Fm(e){for(const t of e.filters)if(t instanceof wt)return!1;return!0}function ri(e){if(e instanceof z)return e.field.canonicalString()+e.op.toString()+Ue(e.value);if(zu(e))return e.filters.map(t=>ri(t)).join(",");{const t=e.filters.map(n=>ri(n)).join(",");return`${e.op}(${t})`}}function Ku(e,t){return e instanceof z?function(r,s){return s instanceof z&&r.op===s.op&&r.field.isEqual(s.field)&&Ct(r.value,s.value)}(e,t):e instanceof wt?function(r,s){return s instanceof wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ku(o,s.filters[a]),!0):!1}(e,t):void R()}function Gu(e){return e instanceof z?function(n){return`${n.field.canonicalString()} ${n.op} ${Ue(n.value)}`}(e):e instanceof wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gu).join(" ,")+"}"}(e):"Filter"}class Bm extends z{constructor(t,n,r){super(t,n,r),this.key=I.fromName(r.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Um extends z{constructor(t,n){super(t,"in",n),this.keys=Hu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class qm extends z{constructor(t,n){super(t,"not-in",n),this.keys=Hu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Hu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class $m extends z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return no(n)&&Rn(n.arrayValue,this.value)}}class jm extends z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rn(this.value.arrayValue,n)}}class zm extends z{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rn(this.value.arrayValue,n)}}class Km extends z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!no(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Aa(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Gm(e,t,n,r,s,i,o)}function ro(e){const t=P(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ri(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ue(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ue(r)).join(",")),t.he=n}return t.he}function so(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Lm(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ku(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ia(e.startAt,t.startAt)&&Ia(e.endAt,t.endAt)}function si(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Hm(e,t,n,r,s,i,o,a){return new Kn(e,t,n,r,s,i,o,a)}function Wr(e){return new Kn(e)}function Ra(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Wu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function io(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Qu(e){return e.collectionGroup!==null}function ln(e){const t=P(e);if(t.Pe===null){t.Pe=[];const n=io(t),r=Wu(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new un(n)),t.Pe.push(new un(nt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new un(nt.keyField(),i))}}}return t.Pe}function xt(e){const t=P(e);return t.Ie||(t.Ie=Wm(t,ln(e))),t.Ie}function Wm(e,t){if(e.limitType==="F")return Aa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new un(s.field,i)});const n=e.endAt?new Er(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Er(e.startAt.position,e.startAt.inclusive):null;return Aa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ii(e,t){t.getFirstInequalityField(),io(e);const n=e.filters.concat([t]);return new Kn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function oi(e,t,n){return new Kn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qr(e,t){return so(xt(e),xt(t))&&e.limitType===t.limitType}function Yu(e){return`${ro(xt(e))}|lt:${e.limitType}`}function ai(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gu(s)).join(", ")}]`),Hr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ue(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ue(s)).join(",")),`Target(${r})`}(xt(e))}; limitType=${e.limitType})`}function Yr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ln(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Ta(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ln(r),s)||r.endAt&&!function(o,a,c){const u=Ta(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ln(r),s))}(e,t)}function Qm(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ju(e){return(t,n)=>{let r=!1;for(const s of ln(e)){const i=Ym(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ym(e,t,n){const r=e.field.isKeyField()?I.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Be(c,u):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new B(I.comparator);function Ot(){return Jm}const Xu=new B(I.comparator);function nn(...e){let t=Xu;for(const n of e)t=t.insert(n.key,n);return t}function Zu(e){let t=Xu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ie(){return hn()}function tl(){return hn()}function hn(){return new He(e=>e.toString(),(e,t)=>e.isEqual(t))}const Xm=new B(I.comparator),Zm=new it(I.comparator);function b(...e){let t=Zm;for(const n of e)t=t.add(n);return t}const tg=new it(D);function eg(){return tg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vr(t)?"-0":t}}function nl(e){return{integerValue:""+e}}function ng(e,t){return Nm(t)?nl(t):el(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this._=void 0}}function rg(e,t,n){return e instanceof wr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&to(i)&&(i=eo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Sn?sl(e,t):e instanceof Cn?il(e,t):function(s,i){const o=rl(s,i),a=Sa(o)+Sa(s.Ee);return ni(o)&&ni(s.Ee)?nl(a):el(s.serializer,a)}(e,t)}function sg(e,t,n){return e instanceof Sn?sl(e,t):e instanceof Cn?il(e,t):n}function rl(e,t){return e instanceof Tr?function(r){return ni(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class wr extends Jr{}class Sn extends Jr{constructor(t){super(),this.elements=t}}function sl(e,t){const n=ol(t);for(const r of e.elements)n.some(s=>Ct(s,r))||n.push(r);return{arrayValue:{values:n}}}class Cn extends Jr{constructor(t){super(),this.elements=t}}function il(e,t){let n=ol(t);for(const r of e.elements)n=n.filter(s=>!Ct(s,r));return{arrayValue:{values:n}}}class Tr extends Jr{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Sa(e){return j(e.integerValue||e.doubleValue)}function ol(e){return no(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ig(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Sn&&s instanceof Sn||r instanceof Cn&&s instanceof Cn?Fe(r.elements,s.elements,Ct):r instanceof Tr&&s instanceof Tr?Ct(r.Ee,s.Ee):r instanceof wr&&s instanceof wr}(e.transform,t.transform)}class og{constructor(t,n){this.version=t,this.transformResults=n}}class _t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Xr{}function al(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ul(e.key,_t.none()):new Gn(e.key,e.data,_t.none());{const n=e.data,r=lt.empty();let s=new it(nt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new te(e.key,r,new ft(s.toArray()),_t.none())}}function ag(e,t,n){e instanceof Gn?function(s,i,o){const a=s.value.clone(),c=Pa(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof te?function(s,i,o){if(!or(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pa(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(cl(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function dn(e,t,n,r){return e instanceof Gn?function(i,o,a,c){if(!or(i.precondition,o))return a;const u=i.value.clone(),l=ba(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof te?function(i,o,a,c){if(!or(i.precondition,o))return a;const u=ba(i.fieldTransforms,c,o),l=o.data;return l.setAll(cl(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return or(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function cg(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=rl(r.transform,s||null);i!=null&&(n===null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function Ca(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,(i,o)=>ig(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Gn extends Xr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class te extends Xr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cl(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Pa(e,t,n){const r=new Map;F(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,sg(o,a,n[s]))}return r}function ba(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rg(i,o,t))}return r}class ul extends Xr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ug extends Xr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&ag(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=dn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=dn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=tl();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=al(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(n,r)=>Ca(n,r))&&Fe(this.baseMutations,t.baseMutations,(n,r)=>Ca(n,r))}}class oo{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){F(t.mutations.length===r.length);let s=function(){return Xm}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new oo(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,V;function fg(e){switch(e){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function ll(e){if(e===void 0)return Mt("GRPC error has no .code"),p.UNKNOWN;switch(e){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(V=q||(q={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Ve([4294967295,4294967295],0);function Va(e){const t=pg().encode(e),n=new ym;return n.update(t),new Uint8Array(n.digest())}function Da(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ve([n,r],0),new Ve([s,i],0)]}class ao{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new rn(`Invalid padding: ${n}`);if(r<0)throw new rn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new rn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new rn(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Ve.fromNumber(this.Ae)}Ve(t,n,r){let s=t.add(n.multiply(Ve.fromNumber(r)));return s.compare(mg)===1&&(s=new Ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Va(t),[r,s]=Da(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ao(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Va(t),[r,s]=Da(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Zr(C.min(),s,new B(D),Ot(),b())}}class Hn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Hn(r,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n,r,s){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=s}}class hl{constructor(t,n){this.targetId=t,this.ye=n}}class dl{constructor(t,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ka{constructor(){this.we=0,this.Se=Ma(),this.be=at.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=b(),n=b(),r=b();return this.Se.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:R()}}),new Hn(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=Ma()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class gg{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Ot(),this.Ue=Na(),this.We=new B(D)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:R()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(t){const n=t.targetId,r=t.ye.count,s=this.et(n);if(s){const i=s.target;if(si(i))if(r===0){const o=new I(i.path);this.je(n,o,et.newNoDocument(o,C.min()))}else F(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),c=a?this.rt(a,t,o):1;if(c!==0){this.Ze(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ye(r).toUint8Array()}catch(c){if(c instanceof Uu)return Le("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ao(o,s,i)}catch(c){return Le(c instanceof rn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&si(a.target)){const c=new I(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,et.newNoDocument(c,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=b();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const s=new Zr(t,n,this.We,this.$e,r);return this.$e=Ot(),this.Ue=Na(),this.We=new B(D),s}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const s=this.Je(t);this.ut(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new ka,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new it(D),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new ka),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function Na(){return new B(I.comparator)}function Ma(){return new B(I.comparator)}const _g=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vg=(()=>({and:"AND",or:"OR"}))();class Eg{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ci(e,t){return e.useProto3Json||Hr(t)?t:{value:t}}function Ir(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wg(e,t){return Ir(e,t.toTimestamp())}function St(e){return F(!!e),C.fromTimestamp(function(n){const r=Qt(n);return new K(r.seconds,r.nanos)}(e))}function co(e,t){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function pl(e){const t=L.fromString(e);return F(yl(t)),t}function ui(e,t){return co(e.databaseId,t.path)}function Ps(e,t){const n=pl(t);if(n.get(1)!==e.databaseId.projectId)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(ml(n))}function li(e,t){return co(e.databaseId,t)}function Tg(e){const t=pl(e);return t.length===4?L.emptyPath():ml(t)}function hi(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ml(e){return F(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function xa(e,t,n){return{name:ui(e,t),fields:n.value.mapValue.fields}}function Ig(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:ll(u.code);return new v(l,u.message||"")}(o);n=new dl(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ps(e,r.document.name),i=St(r.document.updateTime),o=r.document.createTime?St(r.document.createTime):C.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ar(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ps(e,r.document),i=r.readTime?St(r.readTime):C.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ar([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ps(e,r.document),i=r.removedTargetIds||[];n=new ar([],i,s,null)}else{if(!("filter"in t))return R();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dg(s,i),a=r.targetId;n=new hl(a,o)}}return n}function Ag(e,t){let n;if(t instanceof Gn)n={update:xa(e,t.key,t.value)};else if(t instanceof ul)n={delete:ui(e,t.key)};else if(t instanceof te)n={update:xa(e,t.key,t.data),updateMask:Ng(t.fieldMask)};else{if(!(t instanceof ug))return R();n={verify:ui(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof wr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw R()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(e,t.precondition)),n}function Rg(e,t){return e&&e.length>0?(F(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?St(s.updateTime):St(i);return o.isEqual(C.min())&&(o=St(i)),new og(o,s.transformResults||[])}(n,t))):[]}function Sg(e,t){return{documents:[li(e,t.path)]}}function Cg(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=li(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=li(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return _l(wt.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Se(h.field),direction:Vg(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ci(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Pg(e){let t=Tg(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){F(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const f=gl(h);return f instanceof wt&&zu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(g){return new un(Ce(g.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Hr(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new Er(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new Er(d,f)}(n.endAt)),Hm(t,s,o,i,a,"F",c,u)}function bg(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ce(n.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ce(n.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ce(n.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ce(n.unaryFilter.field);return z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):e.fieldFilter!==void 0?function(n){return z.create(Ce(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return wt.create(n.compositeFilter.filters.map(r=>gl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(n.compositeFilter.op))}(e):R()}function Vg(e){return _g[e]}function Dg(e){return yg[e]}function kg(e){return vg[e]}function Se(e){return{fieldPath:e.canonicalString()}}function Ce(e){return nt.fromServerFormat(e.fieldPath)}function _l(e){return e instanceof z?function(n){if(n.op==="=="){if(wa(n.value))return{unaryFilter:{field:Se(n.field),op:"IS_NAN"}};if(Ea(n.value))return{unaryFilter:{field:Se(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wa(n.value))return{unaryFilter:{field:Se(n.field),op:"IS_NOT_NAN"}};if(Ea(n.value))return{unaryFilter:{field:Se(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(n.field),op:Dg(n.op),value:n.value}}}(e):e instanceof wt?function(n){const r=n.getFilters().map(s=>_l(s));return r.length===1?r[0]:{compositeFilter:{op:kg(n.op),filters:r}}}(e):R()}function Ng(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n,r,s,i=C.min(),o=C.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.ht=t}}function xg(e){const t=Pg({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?oi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this._n=new Lg}addToCollectionParentIndex(t,n){return this._n.add(n),_.resolve()}getCollectionParents(t,n){return _.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return _.resolve()}deleteFieldIndex(t,n){return _.resolve()}getDocumentsMatchingTarget(t,n){return _.resolve(null)}getIndexType(t,n){return _.resolve(0)}getFieldIndexes(t,n){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,n){return _.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return _.resolve(Wt.min())}updateCollectionGroup(t,n,r){return _.resolve()}updateIndexEntries(t,n){return _.resolve()}}class Lg{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new it(L.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new qe(0)}static Bn(){return new qe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.changes=new He(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,et.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&dn(r.mutation,s,ft.empty(),K.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,b()).next(()=>r))}getLocalViewOfDocuments(t,n,r=b()){const s=ie();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=nn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ie();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,b()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ot();const o=hn(),a=function(){return hn()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof te)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),dn(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,ft.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Bg(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=hn();let s=new B((o,a)=>o-a),i=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||ft.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||b()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tl();l.forEach(f=>{if(!i.has(f)){const d=al(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Qu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):_.resolve(ie());let a=-1,c=i;return o.next(u=>_.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?_.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,b())).next(l=>({batchId:a,changes:Zu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(r=>{let s=nn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=nn();return this.indexManager.getCollectionParents(t,s).next(o=>_.forEach(o,a=>{const c=function(l,h){return new Kn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,et.newInvalidDocument(u)))});let o=nn();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&dn(u.mutation,c,ft.empty(),K.now()),Yr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return _.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}}(n)),_.resolve()}getNamedQuery(t,n){return _.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:xg(s.bundledQuery),readTime:St(s.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.overlays=new B(I.comparator),this.hr=new Map}getOverlay(t,n){return _.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ie();return _.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.It(t,n,i)}),_.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,n,r){const s=ie(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return _.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=ie(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ie(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return _.resolve(a)}It(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hg(n,r));let i=this.hr.get(n);i===void 0&&(i=b(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.Pr=new it(G.Ir),this.Tr=new it(G.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new G(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new G(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new I(new L([])),r=new G(n,t),s=new G(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new I(new L([])),r=new G(n,t),s=new G(n,t+1);let i=b();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new G(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return I.comparator(t.key,n.key)||D(t.pr,n.pr)}static Er(t,n){return D(t.pr,n.pr)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new it(G.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lg(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,n){return _.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new G(n,0),s=new G(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new it(D);return n.forEach(s=>{const i=new G(s,0),o=new G(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new G(new I(i),0);let a=new it(D);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){F(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(n.mutations,s=>{const i=new G(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new G(n,0),s=this.wr.firstAfterOrEqual(r);return _.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t){this.Cr=t,this.docs=function(){return new B(I.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(t,n){let r=Ot();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ot();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vm(bm(l),r)<=0||(s.has(l.key)||Yr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(t,n,r,s){R()}Fr(t,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Kg(this)}getSize(t){return _.resolve(this.size)}}class Kg extends Fg{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),_.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t){this.persistence=t,this.Mr=new He(n=>ro(n),so),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Or=0,this.Nr=new uo,this.targetCount=0,this.Br=qe.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),_.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new qe(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,_.resolve()}updateTargetData(t,n){return this.qn(n),_.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return _.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),_.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),_.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return _.resolve(r)}containsKey(t,n){return _.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Zi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Gg(this),this.indexManager=new Og,this.remoteDocumentCache=function(s){return new zg(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Mg(n),this.$r=new qg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new $g,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new jg(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){w("MemoryPersistence","Starting transaction:",t);const s=new Wg(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Wg extends km{constructor(t){super(),this.currentSequenceNumber=t}}class lo{constructor(t){this.persistence=t,this.zr=new uo,this.jr=null}static Hr(t){return new lo(t)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),_.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const s=I.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,C.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return _.or([()=>_.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=b(),s=b();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ho(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){return this.Wi(t,n).next(i=>i||this.Gi(t,n,s,r)).next(i=>i||this.zi(t,n))}Wi(t,n){if(Ra(n))return _.resolve(null);let r=xt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oi(n,null,"F"),r=xt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=b(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.ji(n,a);return this.Hi(n,u,o,c.readTime)?this.Wi(t,oi(n,null,"F")):this.Ji(t,u,n,c)}))})))}Gi(t,n,r,s){return Ra(n)||s.isEqual(C.min())?this.zi(t,n):this.Ui.getDocuments(t,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(t,n):(ma()<=k.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ai(n)),this.Ji(t,o,n,Pm(s,-1)))})}ji(t,n){let r=new it(Ju(t));return n.forEach((s,i)=>{Yr(t,i)&&(r=r.add(i))}),r}Hi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(t,n){return ma()<=k.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ai(n)),this.Ui.getDocumentsMatchingQuery(t,n,Wt.min())}Ji(t,n,r,s){return this.Ui.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,n,r,s){this.persistence=t,this.Yi=n,this.serializer=s,this.Zi=new B(D),this.Xi=new He(i=>ro(i),so),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(r)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ug(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function Jg(e,t,n,r){return new Yg(e,t,n,r)}async function vl(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=b();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Xg(e,t){const n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,f=h.keys();let d=_.resolve();return f.forEach(g=>{d=d.next(()=>l.getEntry(c,g)).next(T=>{const A=u.docVersions.get(g);F(A!==null),T.version.compareTo(A)<0&&(h.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),l.addEntry(T)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=b();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function El(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Zg(e,t){const n=P(e),r=t.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(at.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),s=s.insert(h,d),function(T,A,M){return T.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(f,d,l)&&a.push(n.Qr.updateTargetData(i,d))});let c=Ot(),u=b();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(t_(i,o,t.documentUpdates).next(l=>{c=l.ss,u=l.os})),!r.isEqual(C.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Zi=s,i))}function t_(e,t,n){let r=b(),s=b();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ot();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ss:o,os:s}})}function e_(e,t){const n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function n_(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,_.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Bt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(t,r.targetId)),r})}async function di(e,t,n){const r=P(e),s=r.Zi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Zi=r.Zi.remove(t),r.Xi.delete(s.target)}function Oa(e,t,n){const r=P(e);let s=C.min(),i=b();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=P(c),f=h.Xi.get(l);return f!==void 0?_.resolve(h.Zi.get(f)):h.Qr.getTargetData(u,l)}(r,o,xt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,t,n?s:C.min(),n?i:b())).next(a=>(r_(r,Qm(t),a),{documents:a,_s:i})))}function r_(e,t,n){let r=e.es.get(t)||C.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.es.set(t,r)}class La{constructor(){this.activeTargetIds=eg()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class s_{constructor(){this.Ys=new La,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,r){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new La,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{Xs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function bs(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class c_ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=bs(),c=this.po(n,r);w("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,i,o),this.wo(n,c,u,s).then(l=>(w("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Le("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ge}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=o_[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,r,s){const i=bs();return new Promise((o,a)=>{const c=new _m;c.setWithCredentials(!0),c.listenOnce(mm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cs.NO_ERROR:const l=c.getResponseJson();w(Z,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Cs.TIMEOUT:w(Z,`RPC '${t}' ${i} timed out`),a(new v(p.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const h=c.getStatus();if(w(Z,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(A){const M=A.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(M)>=0?M:p.UNKNOWN}(d.status);a(new v(g,d.message))}else a(new v(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{w(Z,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);w(Z,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}bo(t,n,r){const s=bs(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=fm(),a=pm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");w(Z,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,d=!1;const g=new a_({_o:A=>{d?w(Z,`Not sending because RPC '${t}' stream ${s} is closed:`,A):(f||(w(Z,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),w(Z,`RPC '${t}' stream ${s} sending:`,A),h.send(A))},ao:()=>h.close()}),T=(A,M,ct)=>{A.listen(M,dt=>{try{ct(dt)}catch(Pt){setTimeout(()=>{throw Pt},0)}})};return T(h,er.EventType.OPEN,()=>{d||w(Z,`RPC '${t}' stream ${s} transport opened.`)}),T(h,er.EventType.CLOSE,()=>{d||(d=!0,w(Z,`RPC '${t}' stream ${s} transport closed`),g.To())}),T(h,er.EventType.ERROR,A=>{d||(d=!0,Le(Z,`RPC '${t}' stream ${s} transport errored:`,A),g.To(new v(p.UNAVAILABLE,"The operation could not be completed")))}),T(h,er.EventType.MESSAGE,A=>{var M;if(!d){const ct=A.data[0];F(!!ct);const dt=ct,Pt=dt.error||((M=dt[0])===null||M===void 0?void 0:M.error);if(Pt){w(Z,`RPC '${t}' stream ${s} received error:`,Pt);const Ye=Pt.status;let Je=function(ah){const ko=q[ah];if(ko!==void 0)return ll(ko)}(Ye),Do=Pt.message;Je===void 0&&(Je=p.INTERNAL,Do="Unknown error status: "+Ye+" with message "+Pt.message),d=!0,g.To(new v(Je,Do)),h.close()}else w(Z,`RPC '${t}' stream ${s} received:`,ct),g.Eo(ct)}}),T(a,gm.STAT_EVENT,A=>{A.stat===fa.PROXY?w(Z,`RPC '${t}' stream ${s} detected buffering proxy`):A.stat===fa.NOPROXY&&w(Z,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Io()},0),g}}function Vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return new Eg(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new wl(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{t(()=>{const s=new v(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(t,n){const r=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u_ extends Tl{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=Ig(this.serializer,t),r=function(i){if(!("targetChange"in i))return C.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?C.min():o.readTime?St(o.readTime):C.min()}(t);return this.listener.s_(n,r)}o_(t){const n={};n.database=hi(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=si(c)?{documents:Sg(i,c)}:{query:Cg(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fl(i,o.resumeToken);const u=ci(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(C.min())>0){a.readTime=Ir(i,o.snapshotVersion.toTimestamp());const u=ci(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=bg(this.serializer,t);r&&(n.labels=r),this.Yo(n)}__(t){const n={};n.database=hi(this.serializer),n.removeTarget=t,this.Yo(n)}}class l_ extends Tl{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,n){return this.connection.bo("Write",t,n)}onMessage(t){if(F(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const n=Rg(t.writeResults,t.commitTime),r=St(t.commitTime);return this.listener.l_(r,n)}return F(!t.writeResults||t.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=hi(this.serializer),this.Yo(t)}c_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Ag(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new v(p.UNKNOWN,s.toString())})}So(t,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(p.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class d_{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Mt(n),this.R_=!1):w("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Ie(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=P(c);u.S_.add(4),await Wn(u),u.v_.set("Unknown"),u.S_.delete(4),await es(u)}(this))})}),this.v_=new d_(r,s)}}async function es(e){if(Ie(e))for(const t of e.b_)await t(!0)}async function Wn(e){for(const t of e.b_)await t(!1)}function Il(e,t){const n=P(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),mo(n)?po(n):We(n).Go()&&fo(n,t))}function Al(e,t){const n=P(e),r=We(n);n.w_.delete(t),r.Go()&&Rl(n,t),n.w_.size===0&&(r.Go()?r.Ho():Ie(n)&&n.v_.set("Unknown"))}function fo(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(C.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}We(e).o_(t)}function Rl(e,t){e.C_.Le(t),We(e).__(t)}function po(e){e.C_=new gg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),We(e).start(),e.v_.V_()}function mo(e){return Ie(e)&&!We(e).Wo()&&e.w_.size>0}function Ie(e){return P(e).S_.size===0}function Sl(e){e.C_=void 0}async function p_(e){e.w_.forEach((t,n)=>{fo(e,t)})}async function m_(e,t){Sl(e),mo(e)?(e.v_.g_(t),po(e)):e.v_.set("Unknown")}async function g_(e,t,n){if(e.v_.set("Online"),t instanceof dl&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(e,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ar(e,r)}else if(t instanceof ar?e.C_.Ge(t):t instanceof hl?e.C_.Xe(t):e.C_.He(t),!n.isEqual(C.min()))try{const r=await El(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.w_.get(u);l&&i.w_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.w_.get(c);if(!l)return;i.w_.set(c,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),Rl(i,c);const h=new Bt(l.target,c,u,l.sequenceNumber);fo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){w("RemoteStore","Failed to raise snapshot:",r),await Ar(e,r)}}async function Ar(e,t,n){if(!zn(t))throw t;e.S_.add(1),await Wn(e),e.v_.set("Offline"),n||(n=()=>El(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await es(e)})}function Cl(e,t){return t().catch(n=>Ar(e,n,t))}async function ns(e){const t=P(e),n=Yt(t);let r=t.y_.length>0?t.y_[t.y_.length-1].batchId:-1;for(;__(t);)try{const s=await e_(t.localStore,r);if(s===null){t.y_.length===0&&n.Ho();break}r=s.batchId,y_(t,s)}catch(s){await Ar(t,s)}Pl(t)&&bl(t)}function __(e){return Ie(e)&&e.y_.length<10}function y_(e,t){e.y_.push(t);const n=Yt(e);n.Go()&&n.u_&&n.c_(t.mutations)}function Pl(e){return Ie(e)&&!Yt(e).Wo()&&e.y_.length>0}function bl(e){Yt(e).start()}async function v_(e){Yt(e).P_()}async function E_(e){const t=Yt(e);for(const n of e.y_)t.c_(n.mutations)}async function w_(e,t,n){const r=e.y_.shift(),s=oo.from(r,t,n);await Cl(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ns(e)}async function T_(e,t){t&&Yt(e).u_&&await async function(r,s){if(function(o){return fg(o)&&o!==p.ABORTED}(s.code)){const i=r.y_.shift();Yt(r).jo(),await Cl(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ns(r)}}(e,t),Pl(e)&&bl(e)}async function Ba(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const r=Ie(n);n.S_.add(3),await Wn(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await es(n)}async function I_(e,t){const n=P(e);t?(n.S_.delete(2),await es(n)):t||(n.S_.add(2),await Wn(n),n.v_.set("Unknown"))}function We(e){return e.F_||(e.F_=function(n,r,s){const i=P(n);return i.T_(),new u_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:p_.bind(null,e),lo:m_.bind(null,e),s_:g_.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),mo(e)?po(e):e.v_.set("Unknown")):(await e.F_.stop(),Sl(e))})),e.F_}function Yt(e){return e.M_||(e.M_=function(n,r,s){const i=P(n);return i.T_(),new l_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:v_.bind(null,e),lo:T_.bind(null,e),h_:E_.bind(null,e),l_:w_.bind(null,e)}),e.b_.push(async t=>{t?(e.M_.jo(),await ns(e)):(await e.M_.stop(),e.y_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new go(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _o(e,t){if(Mt("AsyncQueue",`${t}: ${e}`),zn(e))return new v(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.comparator=t?(n,r)=>t(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=nn(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new De(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new De;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.x_=new B(I.comparator)}track(t){const n=t.doc.key,r=this.x_.get(n);r?t.type!==0&&r.type===3?this.x_=this.x_.insert(n,t):t.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.x_=this.x_.remove(n):t.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):R():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,r)=>{t.push(r)}),t}}class $e{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $e(t,n,De.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.N_=void 0,this.listeners=[]}}class R_{constructor(){this.queries=new He(t=>Yu(t),Qr),this.onlineState="Unknown",this.B_=new Set}}async function Vl(e,t){const n=P(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new A_),s)try{i.N_=await n.onListen(r)}catch(o){const a=_o(o,`Initialization of query '${ai(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.L_(n.onlineState),i.N_&&t.k_(i.N_)&&yo(n)}async function Dl(e,t){const n=P(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function S_(e,t){const n=P(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&yo(n)}function C_(e,t,n){const r=P(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function yo(e){e.B_.forEach(t=>{t.next()})}class kl{constructor(t,n,r){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new $e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.key=t}}class Ml{constructor(t){this.key=t}}class P_{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=b(),this.mutatedKeys=b(),this.ia=Ju(t),this.sa=new De(this.ia)}get oa(){return this.ta}_a(t,n){const r=n?n.aa:new Ua,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),d=Yr(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let A=!1;f&&d?f.data.isEqual(d.data)?g!==T&&(r.track({type:3,doc:d}),A=!0):this.ua(f,d)||(r.track({type:2,doc:d}),A=!0,(c&&this.ia(d,c)>0||u&&this.ia(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),A=!0):f&&!d&&(r.track({type:1,doc:f}),A=!0,(c||u)&&(a=!0)),A&&(d?(o=o.add(d),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const i=t.aa.O_();i.sort((u,l)=>function(f,d){const g=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return g(f)-g(d)}(u.type,l.type)||this.ia(u.doc,l.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new $e(this.query,t.sa,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Ua,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=b(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return t.forEach(r=>{this.ra.has(r)||n.push(new Ml(r))}),this.ra.forEach(r=>{t.has(r)||n.push(new Nl(r))}),n}Ia(t){this.ta=t._s,this.ra=b();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return $e.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class b_{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class V_{constructor(t){this.key=t,this.Ea=!1}}class D_{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new He(a=>Yu(a),Qr),this.Ra=new Map,this.Va=new Set,this.ma=new B(I.comparator),this.fa=new Map,this.ga=new uo,this.pa={},this.ya=new Map,this.wa=qe.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function k_(e,t){const n=$_(e);let r,s;const i=n.Aa.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await n_(n.localStore,xt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await N_(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Il(n.remoteStore,o)}return s}async function N_(e,t,n,r,s){e.ba=(h,f,d)=>async function(T,A,M,ct){let dt=A.view._a(M);dt.Hi&&(dt=await Oa(T.localStore,A.query,!1).then(({documents:Je})=>A.view._a(Je,dt)));const Pt=ct&&ct.targetChanges.get(A.targetId),Ye=A.view.applyChanges(dt,T.isPrimaryClient,Pt);return $a(T,A.targetId,Ye.ha),Ye.snapshot}(e,h,f,d);const i=await Oa(e.localStore,t,!0),o=new P_(t,i._s),a=o._a(i.documents),c=Hn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);$a(e,n,u.ha);const l=new b_(t,n,o);return e.Aa.set(t,l),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),u.snapshot}async function M_(e,t){const n=P(e),r=n.Aa.get(t),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Qr(i,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await di(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Al(n.remoteStore,r.targetId),fi(n,r.targetId)}).catch(jn)):(fi(n,r.targetId),await di(n.localStore,r.targetId,!0))}async function x_(e,t,n){const r=j_(e);try{const s=await function(o,a){const c=P(o),u=K.now(),l=a.reduce((d,g)=>d.add(g.key),b());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Ot(),T=b();return c.ts.getEntries(d,l).next(A=>{g=A,g.forEach((M,ct)=>{ct.isValidDocument()||(T=T.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,g)).next(A=>{h=A;const M=[];for(const ct of a){const dt=cg(ct,h.get(ct.key).overlayedDocument);dt!=null&&M.push(new te(ct.key,dt,qu(dt.value.mapValue),_t.exists(!0)))}return c.mutationQueue.addMutationBatch(d,u,M,a)}).next(A=>{f=A;const M=A.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(d,A.batchId,M)})}).then(()=>({batchId:f.batchId,changes:Zu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.pa[o.currentUser.toKey()];u||(u=new B(D)),u=u.insert(a,c),o.pa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Qn(r,s.changes),await ns(r.remoteStore)}catch(s){const i=_o(s,"Failed to persist write");n.reject(i)}}async function xl(e,t){const n=P(e);try{const r=await Zg(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?F(o.Ea):s.removedDocuments.size>0&&(F(o.Ea),o.Ea=!1))}),await Qn(n,r,t)}catch(r){await jn(r)}}function qa(e,t,n){const r=P(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const f of h.listeners)f.L_(a)&&(u=!0)}),u&&yo(c)}(r.eventManager,t),s.length&&r.da.s_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function O_(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.fa.get(t),i=s&&s.key;if(i){let o=new B(I.comparator);o=o.insert(i,et.newNoDocument(i,C.min()));const a=b().add(i),c=new Zr(C.min(),new Map,new B(D),o,a);await xl(r,c),r.ma=r.ma.remove(i),r.fa.delete(t),vo(r)}else await di(r.localStore,t,!1).then(()=>fi(r,t,n)).catch(jn)}async function L_(e,t){const n=P(e),r=t.batch.batchId;try{const s=await Xg(n.localStore,t);Ll(n,r,null),Ol(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qn(n,s)}catch(s){await jn(s)}}async function F_(e,t,n){const r=P(e);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);Ll(r,t,n),Ol(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Qn(r,s)}catch(s){await jn(s)}}function Ol(e,t){(e.ya.get(t)||[]).forEach(n=>{n.resolve()}),e.ya.delete(t)}function Ll(e,t,n){const r=P(e);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.pa[r.currentUser.toKey()]=s}}function fi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ra.get(t))e.Aa.delete(r),n&&e.da.Da(r,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(r=>{e.ga.containsKey(r)||Fl(e,r)})}function Fl(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(Al(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),vo(e))}function $a(e,t,n){for(const r of n)r instanceof Nl?(e.ga.addReference(r.key,t),B_(e,r)):r instanceof Ml?(w("SyncEngine","Document no longer in limbo: "+r.key),e.ga.removeReference(r.key,t),e.ga.containsKey(r.key)||Fl(e,r.key)):R()}function B_(e,t){const n=t.key,r=n.path.canonicalString();e.ma.get(n)||e.Va.has(r)||(w("SyncEngine","New document in limbo: "+n),e.Va.add(r),vo(e))}function vo(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new I(L.fromString(t)),r=e.wa.next();e.fa.set(r,new V_(n)),e.ma=e.ma.insert(n,r),Il(e.remoteStore,new Bt(xt(Wr(n.path)),r,"TargetPurposeLimboResolution",Zi.ae))}}async function Qn(e,t,n){const r=P(e),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=ho.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.da.s_(s),await async function(c,u){const l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(u,f=>_.forEach(f.qi,d=>l.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>_.forEach(f.Qi,d=>l.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!zn(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const d=l.Zi.get(f),g=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(g);l.Zi=l.Zi.insert(f,T)}}}(r.localStore,i))}async function U_(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const r=await vl(n.localStore,t);n.currentUser=t,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new v(p.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Qn(n,r.rs)}}function q_(e,t){const n=P(e),r=n.fa.get(t);if(r&&r.Ea)return b().add(r.key);{let s=b();const i=n.Ra.get(t);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function $_(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=q_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=O_.bind(null,t),t.da.s_=S_.bind(null,t.eventManager),t.da.Da=C_.bind(null,t.eventManager),t}function j_(e){const t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=L_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=F_.bind(null,t),t}class ja{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ts(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Jg(this.persistence,new Qg,t.initialUser,this.serializer)}createPersistence(t){return new Hg(lo.Hr,this.serializer)}createSharedClientState(t){return new s_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class z_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=U_.bind(null,this.syncEngine),await I_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new R_}()}createDatastore(t){const n=ts(t.databaseInfo.databaseId),r=function(i){return new c_(i)}(t.databaseInfo);return function(i,o,a,c){return new h_(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new f_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>qa(this.syncEngine,n,0),function(){return Fa.v()?new Fa:new i_}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new D_(s,i,o,a,c,u);return l&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=P(n);w("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Wn(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Fu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=_o(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ds(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function za(e,t){e.asyncQueue.verifyOperationInProgress();const n=await H_(e);w("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Ba(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Ba(t.remoteStore,i)),e._onlineComponents=t}function G_(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function H_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ds(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!G_(n))throw n;Le("Error using user provided cache. Falling back to memory cache: "+n),await Ds(e,new ja)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await Ds(e,new ja);return e._offlineComponents}async function Ul(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await za(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await za(e,new z_))),e._onlineComponents}function W_(e){return Ul(e).then(t=>t.syncEngine)}async function pi(e){const t=await Ul(e),n=t.eventManager;return n.onListen=k_.bind(null,t.syncEngine),n.onUnlisten=M_.bind(null,t.syncEngine),n}function Q_(e,t,n={}){const r=new Kt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Bl({next:f=>{o.enqueueAndForget(()=>Dl(i,h));const d=f.docs.has(a);!d&&f.fromCache?u.reject(new v(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&c&&c.source==="server"?u.reject(new v(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new kl(Wr(a.path),l,{includeMetadataChanges:!0,z_:!0});return Vl(i,h)}(await pi(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(e,t,n){if(!n)throw new v(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Y_(e,t,n,r){if(t===!0&&r===!0)throw new v(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ga(e){if(!I.isDocumentKey(e))throw new v(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ha(e){if(I.isDocumentKey(e))throw new v(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function rs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":R()}function yt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rs(e);throw new v(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new v(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Y_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ql((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ss{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vm;switch(r.type){case"firstParty":return new Im(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ka.get(n);r&&(w("ComponentProvider","Removing Datastore"),Ka.delete(n),r.terminate())}(this),Promise.resolve()}}function J_(e,t,n,r={}){var s;const i=(e=yt(e,ss))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=vh(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new v(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(u)}e._authCredentials=new Em(new Lu(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Qe(this.firestore,t,this._query)}}class ot{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class Gt extends Qe{constructor(t,n,r){super(t,n,Wr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new I(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function ke(e,t,...n){if(e=vt(e),$l("collection","path",t),e instanceof ss){const r=L.fromString(t,...n);return Ha(r),new Gt(e,null,r)}{if(!(e instanceof ot||e instanceof Gt))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Ha(r),new Gt(e.firestore,null,r)}}function Pn(e,t,...n){if(e=vt(e),arguments.length===1&&(t=Fu.V()),$l("doc","path",t),e instanceof ss){const r=L.fromString(t,...n);return Ga(r),new ot(e,null,new I(r))}{if(!(e instanceof ot||e instanceof Gt))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Ga(r),new ot(e.firestore,e instanceof Gt?e.converter:null,new I(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new wl(this,"async_queue_retry"),this.tu=()=>{const n=Vs();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Vs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Kt;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!zn(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(t,n,r){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const s=go.createAndSchedule(this,t,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&R()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}function Qa(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ee extends ss{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new X_}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jl(this),this._firestoreClient.terminate()}}function Z_(e,t){const n=typeof e=="object"?e:Sd(),r=typeof e=="string"?e:t||"(default)",s=Ii(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_h("firestore");i&&J_(s,...i)}return s}function Eo(e){return e._firestoreClient||jl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function jl(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new xm(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ql(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new K_(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(at.fromBase64String(t))}catch(n){throw new v(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new je(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^__.*__$/;class ey{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,n,this.fieldTransforms):new Gn(t,this.data,n,this.fieldTransforms)}}class zl{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new te(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class Io{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new Io(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.Tu(t),s}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return Rr(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(Kl(this.lu)&&ty.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class ny{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ts(t)}mu(t,n,r,s=!1){return new Io({lu:t,methodName:n,Vu:r,path:nt.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function os(e){const t=e._freezeSettings(),n=ts(e._databaseId);return new ny(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Gl(e,t,n,r,s,i={}){const o=e.mu(i.merge||i.mergeFields?2:0,t,n,s);Ao("Data must be an object, but it was:",o,r);const a=Hl(r,o);let c,u;if(i.merge)c=new ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=mi(t,h,n);if(!o.contains(f))throw new v(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Ql(l,f)||l.push(f)}c=new ft(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ey(new lt(a),c,u)}class as extends wo{_toFieldTransform(t){if(t.lu!==2)throw t.lu===1?t.Au(`${this._methodName}() can only appear at the top level of your update data`):t.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof as}}function ry(e,t,n,r){const s=e.mu(1,t,n);Ao("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();Te(r,(c,u)=>{const l=Ro(t,c,n);u=vt(u);const h=s.Eu(l);if(u instanceof as)i.push(l);else{const f=Yn(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new ft(i);return new zl(o,a,s.fieldTransforms)}function sy(e,t,n,r,s,i){const o=e.mu(1,t,n),a=[mi(t,r,n)],c=[s];if(i.length%2!=0)throw new v(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(mi(t,i[f])),c.push(i[f+1]);const u=[],l=lt.empty();for(let f=a.length-1;f>=0;--f)if(!Ql(u,a[f])){const d=a[f];let g=c[f];g=vt(g);const T=o.Eu(d);if(g instanceof as)u.push(d);else{const A=Yn(g,T);A!=null&&(u.push(d),l.set(d,A))}}const h=new ft(u);return new zl(l,h,o.fieldTransforms)}function iy(e,t,n,r=!1){return Yn(n,e.mu(r?4:3,t))}function Yn(e,t){if(Wl(e=vt(e)))return Ao("Unsupported field value:",t,e),Hl(e,t);if(e instanceof wo)return function(r,s){if(!Kl(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Yn(a,s.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ng(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=K.fromDate(r);return{timestampValue:Ir(s.serializer,i)}}if(r instanceof K){const i=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(s.serializer,i)}}if(r instanceof To)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:fl(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:co(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${rs(r)}`)}(e,t)}function Hl(e,t){const n={};return Bu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(e,(r,s)=>{const i=Yn(s,t.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof K||e instanceof To||e instanceof je||e instanceof ot||e instanceof wo)}function Ao(e,t,n){if(!Wl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=rs(n);throw r==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+r)}}function mi(e,t,n){if((t=vt(t))instanceof is)return t._internalPath;if(typeof t=="string")return Ro(e,t);throw Rr("Field path arguments must be of type string or ",e,!1,void 0,n)}const oy=new RegExp("[~\\*/\\[\\]]");function Ro(e,t,n){if(t.search(oy)>=0)throw Rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new is(...t.split("."))._internalPath}catch{throw Rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new v(p.INVALID_ARGUMENT,a+e+c)}function Ql(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ay(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Jl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ay extends Yl{data(){return super.data()}}function Jl(e,t){return typeof t=="string"?Ro(e,t):t instanceof is?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class So{}class uy extends So{}function gi(e,t,...n){let r=[];t instanceof So&&r.push(t),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Po).length,a=i.filter(c=>c instanceof Co).length;if(o>1||o>0&&a>0)throw new v(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Co extends uy{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Co(t,n,r)}_apply(t){const n=this._parse(t);return Xl(t._query,n),new Qe(t.firestore,t.converter,ii(t._query,n))}_parse(t){const n=os(t.firestore);return function(i,o,a,c,u,l,h){let f;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new v(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ja(h,l);const d=[];for(const g of h)d.push(Ya(c,i,g));f={arrayValue:{values:d}}}else f=Ya(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ja(h,l),f=iy(a,o,h,l==="in"||l==="not-in");return z.create(u,l,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Po extends So{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Po(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Xl(o,c),o=ii(o,c)}(t._query,n),new Qe(t.firestore,t.converter,ii(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ya(e,t,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new v(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qu(t)&&n.indexOf("/")!==-1)throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(L.fromString(n));if(!I.isDocumentKey(r))throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return va(e,new I(r))}if(n instanceof ot)return va(e,n._key);throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rs(n)}.`)}function Ja(e,t){if(!Array.isArray(e)||e.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xl(e,t){if(t.isInequality()){const r=io(e),s=t.field;if(r!==null&&!r.isEqual(s))throw new v(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Wu(e);i!==null&&ly(e,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ly(e,t,n){if(!n.isEqual(t))throw new v(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class hy{convertValue(t,n="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return j(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw R()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Te(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new To(j(t.latitude),j(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=eo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const n=Qt(t);return new K(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=L.fromString(t);F(yl(r));const s=new An(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||Mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class th extends Yl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Jl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cr extends th{data(t={}){return super.data(t)}}class dy{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new sn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new cr(this._firestore,this._userDataWriter,r.key,r,new sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new cr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new cr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:fy(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fy(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(e){e=yt(e,ot);const t=yt(e.firestore,Ee);return Q_(Eo(t),e._key).then(n=>nh(t,e,n))}class eh extends hy{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function my(e,t,n){e=yt(e,ot);const r=yt(e.firestore,Ee),s=Zl(e.converter,t,n);return bo(r,[Gl(os(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,_t.none())])}function gy(e,t,n,...r){e=yt(e,ot);const s=yt(e.firestore,Ee),i=os(s);let o;return o=typeof(t=vt(t))=="string"||t instanceof is?sy(i,"updateDoc",e._key,t,n,r):ry(i,"updateDoc",e._key,t),bo(s,[o.toMutation(e._key,_t.exists(!0))])}function _i(e,t){const n=yt(e.firestore,Ee),r=Pn(e),s=Zl(e.converter,t);return bo(n,[Gl(os(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,_t.exists(!1))]).then(()=>r)}function yi(e,...t){var n,r,s;e=vt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Qa(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Qa(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(e instanceof ot)u=yt(e.firestore,Ee),l=Wr(e._key.path),c={next:h=>{t[o]&&t[o](nh(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=yt(e,Qe);u=yt(h.firestore,Ee),l=h._query;const f=new eh(u);c={next:d=>{t[o]&&t[o](new dy(u,f,h,d))},error:t[o+1],complete:t[o+2]},cy(e._query)}return function(f,d,g,T){const A=new Bl(T),M=new kl(d,A,g);return f.asyncQueue.enqueueAndForget(async()=>Vl(await pi(f),M)),()=>{A.Ma(),f.asyncQueue.enqueueAndForget(async()=>Dl(await pi(f),M))}}(Eo(u),l,a,c)}function bo(e,t){return function(r,s){const i=new Kt;return r.asyncQueue.enqueueAndForget(async()=>x_(await W_(r),s,i)),i.promise}(Eo(e),t)}function nh(e,t,n){const r=n.docs.get(t._key),s=new eh(e);return new th(e,s,t._key,r,new sn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ge=s})(Rd),Ht(new kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ee(new wm(r.getProvider("auth-internal")),new Rm(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new v(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Rt(pa,"4.1.2",t),Rt(pa,"4.1.2","esm2017")})();const _y={apiKey:"AIzaSyCpPOh4iI--Zlgs96hB4BFq8n9rGL3y4ks",authDomain:"rtc-server-5d1cf.firebaseapp.com",projectId:"rtc-server-5d1cf",storageBucket:"rtc-server-5d1cf.appspot.com",messagingSenderId:"689362156688",appId:"1:689362156688:web:a2bb68d1624758c56e2c15",measurementId:"G-4DNL0Y0BFR"},yy=cc(_y),vy={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},H=new RTCPeerConnection(vy);let Lt=null,ks=null,vi=null,Xa=0;xy(H);const Ei=document.getElementById("webcamButton"),Re=document.getElementById("webcamVideo"),Sr=document.getElementById("callButton"),rh=document.getElementById("callInput"),Cr=document.getElementById("answerButton"),Za=document.getElementById("remoteVideo"),Ey=document.getElementById("hangupButton"),sh=document.getElementById("callMessage");let x,Ut,E=!1;Nexus.colors.accent="#2596be";Nexus.colors.fill="#fff";var wy=new Nexus.Toggle("#muteMo",{state:!0});wy.on("change",function(e){document.getElementById("muteMonitor").click()});var Ty=new Nexus.Toggle("#muteMy");Ty.on("change",function(e){document.getElementById("muteMe").click()});var Iy=new Nexus.Select("audioSourceSelect",{size:[200,20],options:["Default - MacBook Pro Microphone","iPhone"]});Iy.colorize("fill","#eee");var Ay=new Nexus.Select("audioOutputSelect",{size:[200,20],options:["Defalut - MacBook Pro Speakers (Built-in)"]});Ay.colorize("fill","#eee");var ih=new Nexus.TextButton("#startDevices",{size:[150,50],state:!1,text:"Init",alternateText:"Activated"});ih.colorize("fill","#eee");ih.on("change",function(e){Ei.click()});var le=new Nexus.Dial("#comp_threshold",{size:[50,50],interaction:"radial",mode:"relative",min:-100,max:0,step:1,value:-24}),Ry=new Nexus.Number("#comp_threshold_val",{size:[30,20]});Ry.link(le);var he=new Nexus.Dial("#comp_knee",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:40,step:1,value:30}),Sy=new Nexus.Number("#comp_knee_val",{size:[30,20]});Sy.link(he);var de=new Nexus.Dial("#comp_ratio",{size:[50,50],interaction:"radial",mode:"relative",min:1,max:20,step:1,value:12}),Cy=new Nexus.Number("#comp_ratio_val",{size:[30,20]});Cy.link(de);var fe=new Nexus.Dial("#comp_attack",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:1,step:.01,value:.003}),Py=new Nexus.Number("#comp_attack_val",{size:[30,20]});Py.link(fe);var qt=new Nexus.Dial("#comp_release",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:1,step:.05,value:.25}),by=new Nexus.Number("#comp_release_val",{size:[30,20]});by.link(qt);var bn=new Nexus.Toggle("#comp_bypass"),bt=new Nexus.Select("rev_type",{size:[200,20],options:["Block Inside","Bottle Hall","Cement Blocks 1","Cement Blocks 2","Chateau de Logne, Outside","Conic Long Echo Hall","Deep Space","Derlon Sanctuary","Direct Cabinet N1","Direct Cabinet N2"]}),Vn=new Nexus.Dial("#rev_mix",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:20,step:1,value:10}),Dn=new Nexus.Toggle("#rev_bypass"),kn=new Nexus.Toggle("#eq_bypass"),oe=new Nexus.Select("eq_type",{size:[200,20],options:["lowshelf","highshelf"]}),ae=new Nexus.Slider("eq_freq",{size:[120,20],mode:"relative",min:20,max:2e4,step:100,value:1e3}),Ne=new Nexus.Dial("#eq1",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),Me=new Nexus.Dial("#eq2",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),xe=new Nexus.Dial("#eq3",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),Nn=new Nexus.Toggle("#gain_bypass"),Ft=new Nexus.Dial("#gain",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:20,step:1,value:2}),Mn=new Nexus.Toggle("#pan_bypass"),ce=new Nexus.Dial("#pan",{size:[50,50],interaction:"radial",mode:"relative",min:-1,max:1,step:.1,value:0}),m={comp:{attack:fe.value,bypass:bn.state,knee:he.value,ratio:de.value,release:qt.value,threshold:le.value},rev:{type:bt.value,mix:Vn.value,bypass:Dn.state},eq:{low:Ne.value,mid:Me.value,high:xe.value,bypass:kn.state,freq:ae.value,type:oe.value},pan:{bypass:Mn.state,pan:ce.value},gain:{bypass:Nn.state,gain:Ft.value},whatChanged:"none"};const Vy=document.getElementById("remoteVideo"),cs=document.getElementById("audioSource"),us=document.getElementById("audioOutput"),Ns=[cs,us];function Dy(){return navigator.mediaDevices.enumerateDevices()}function ky(e){const t=Ns.map(n=>n.value);Ns.forEach(n=>{for(;n.firstChild;)n.removeChild(n.firstChild)});for(let n=0;n!==e.length;++n){const r=e[n],s=document.createElement("option");s.value=r.deviceId,r.kind==="audioinput"?(s.text=r.label,cs.appendChild(s)):r.kind==="audiooutput"&&(s.text=r.label,us.appendChild(s))}Ns.forEach((n,r)=>{Array.prototype.slice.call(n.childNodes).some(s=>s.value===t[r])&&(n.value=t[r])})}function Ny(){const e=us.value;Vy.setSinkId(e).then(console.log("success"))}function oh(){return{audio:{deviceId:cs.value,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,latency:0,sampleRate:48e3,sampleSize:16,volume:1},video:!1}}var Vo=oh();cs.addEventListener("change",function(){Vo=oh()});us.onchange=Ny;navigator.mediaDevices.getUserMedia(Vo).then(Dy).then(ky);Ei.onclick=async()=>{Lt=await navigator.mediaDevices.getUserMedia(Vo),ks=new MediaStream,await My(),Lt.getTracks().forEach(n=>{H.addTrack(n,Lt)}),H.ontrack=n=>{n.streams[0].getTracks().forEach(r=>{ks.addTrack(r)}),console.log("remoteStream track: ",n.streams[0].getTracks()),console.log("channel count: ",n.streams[0].getTracks()[0].getSettings())},console.log("localStream: ",Lt.getTracks()),console.log("channel count: ",Lt.getTracks()[0].getSettings()),Re.srcObject=vi,Za.srcObject=ks,Re.play(),Za.play(),Sr.disabled=!1,Cr.disabled=!1,Ei.disabled=!0;const e=document.getElementById("muteMonitor");e.checked==!0?Re.muted=!0:Re.muted=!1,e.addEventListener("change",function(){e.checked==!0?(Re.muted=!0,console.log("monitor muted")):(Re.muted=!1,console.log("monitor unmuted"))});const t=document.getElementById("muteMe");t.checked=!1,t.addEventListener("change",function(){t.checked==!0?(Lt.getTracks()[0].enabled=!1,console.log("muted me")):(Lt.getTracks()[0].enabled=!0,console.log("unmuted me"))})};const Vt=Z_(yy);Sr.onclick=async()=>{x=H.createDataChannel("sendDataChannel"),x.onopen=u=>{console.log("send channel opened")},x.onclose=u=>{console.log("send channel closed")},H.ondatachannel=u=>{Ut=u.channel,Ut.onmessage=async l=>{switch(E=!0,m=JSON.parse(l.data),m.whatChanged){case"comp.threshold":await(le.value=m.comp.threshold),E=!1;break;case"comp.release":await(qt.value=m.comp.release),E=!1;break;case"comp.attack":await(fe.value=m.comp.attack),E=!1;break;case"comp.knee":await(he.value=m.comp.knee),E=!1;break;case"comp.ratio":await(de.value=m.comp.ratio),E=!1;break;case"comp.reduction":await(comp_recduction.value=m.comp.reduction),E=!1;break;case"rev.mix":await(Vn.value=m.rev.mix),E=!1;break;case"rev.type":await(bt.value=m.rev.type),E=!1;break;case"eq.type":await(oe.value=m.eq.type),E=!1;break;case"eq.freq":await(ae.value=m.eq.freq),E=!1;break;case"eq.low":await(Ne.value=m.eq.low),E=!1;break;case"eq.mid":await(Me.value=m.eq.mid),E=!1;break;case"eq.high":await(xe.value=m.eq.high),E=!1;break;case"pan.pan":await(ce.value=m.pan.pan),E=!1;break;case"gain.gain":await(Ft.value=m.gain.gain),E=!1;break;case"comp.bypass":await(bn.state=m.comp.bypass),E=!1;break;case"rev.bypass":await(Dn.state=m.rev.bypass),E=!1;break;case"eq.bypass":await(kn.state=m.eq.bypass),E=!1;break;case"gain.bypass":await(Nn.state=m.gain.bypass),E=!1;break;case"pan.bypass":await(Mn.state=m.pan.bypass),E=!1;break;default:console.log("invalid exchanged value"),E=!1;break}},Ut.onopen=l=>{console.log("receive channel opened"),$()},Ut.onclose=l=>{console.log("receive channel closed"),$()}};let e=document.createTextNode("You created a call.");sh.appendChild(e),Sr.disabled=!0,Cr.disabled=!0;const t=ke(Vt,"calls1"),n=await _i(t,{});rh.value=n.id;const r=ke(Vt,"calls1",n.id,"offerCandidates"),s=ke(Vt,"calls1",n.id,"answerCandidates");H.onicecandidate=u=>{u.candidate&&_i(r,u.candidate.toJSON()),console.log("PA updated candidates in database"),$()};const i=await H.createOffer().then(console.log("PA created offer"));$(),i.sdp=i.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await H.setLocalDescription(i).then(console.log("PA set local desc")),$();const o={sdp:i.sdp,type:i.type};await my(Pn(Vt,"calls1",n.id),{offer:o}).then(console.log("PA updated offer in database")),$();const a=gi(Pn(Vt,"calls1",n.id));yi(a,u=>{const l=u.data();if(!H.currentRemoteDescription&&(l!=null&&l.answer)){console.log("listen to answer triggered"),$();const h=new RTCSessionDescription(l.answer);H.setRemoteDescription(h),console.log("PA set remote desc",h),$()}});const c=gi(s);yi(c,u=>{u.docChanges().forEach(l=>{if(l.type==="added"){console.log("listen to answerCandidates triggered"),$();const h=new RTCIceCandidate(l.doc.data());H.addIceCandidate(h),console.log("PA added ICE Candi: ",h),$()}})}),Ey.disabled=!1};Cr.onclick=async()=>{x=H.createDataChannel("sendDataChannel2"),x.onopen=l=>{console.log("send channel opened")},x.onclose=l=>{console.log("send channel closed")},H.ondatachannel=l=>{Ut=l.channel,Ut.onmessage=async h=>{switch(E=!0,m=JSON.parse(h.data),m.whatChanged){case"comp.threshold":await(le.value=m.comp.threshold),E=!1;break;case"comp.release":await(qt.value=m.comp.release),E=!1;break;case"comp.attack":await(fe.value=m.comp.attack),E=!1;break;case"comp.knee":await(he.value=m.comp.knee),E=!1;break;case"comp.ratio":await(de.value=m.comp.ratio),E=!1;break;case"comp.reduction":await(comp_recduction.value=m.comp.reduction),E=!1;break;case"rev.mix":await(Vn.value=m.rev.mix),E=!1;break;case"rev.type":await(bt.value=m.rev.type),E=!1;break;case"eq.type":await(oe.value=m.eq.type),E=!1;break;case"eq.freq":await(ae.value=m.eq.freq),E=!1;break;case"eq.low":await(Ne.value=m.eq.low),E=!1;break;case"eq.mid":await(Me.value=m.eq.mid),E=!1;break;case"eq.high":await(xe.value=m.eq.high),E=!1;break;case"pan.pan":await(ce.value=m.pan.pan),E=!1;break;case"gain.gain":await(Ft.value=m.gain.gain),E=!1;break;case"comp.bypass":await(bn.state=m.comp.bypass),E=!1;break;case"rev.bypass":await(Dn.state=m.rev.bypass),E=!1;break;case"eq.bypass":await(kn.state=m.eq.bypass),E=!1;break;case"gain.bypass":await(Nn.state=m.gain.bypass),E=!1;break;case"pan.bypass":await(Mn.state=m.pan.bypass),E=!1;break;default:console.log("invalid exchanged value");break}},Ut.onopen=h=>{console.log("receive channel opened"),$()},Ut.onclose=h=>{console.log("receive channel closed"),$()}};let e=document.createTextNode("You answered a call!");sh.appendChild(e),Sr.disabled=!0,Cr.disabled=!0;const t=rh.value,n=ke(Vt,"calls1"),r=ke(Vt,"calls1",t,"answerCandidates"),s=ke(Vt,"calls1",t,"offerCandidates");H.onicecandidate=l=>{l.candidate&&_i(r,l.candidate.toJSON()),console.log("PB updated candidate in database"),$()};const o=(await py(Pn(n,t))).data().offer;await H.setRemoteDescription(new RTCSessionDescription(o)),console.log("PB set remote desc"),$();const a=await H.createAnswer();a.sdp=a.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await H.setLocalDescription(a),console.log("PB set local desc"),$();const c={type:a.type,sdp:a.sdp};await gy(Pn(Vt,"calls1",t),{answer:c}),console.log("PB updated answer in database"),$();const u=gi(s);yi(u,l=>{l.docChanges().forEach(h=>{if(h.type==="added"){let f=h.doc.data(),d=new RTCIceCandidate(f);H.addIceCandidate(d),console.log("PB added ICE Candi: ",d),$()}})})};async function My(){var e=new AudioContext,t=e.createMediaStreamSource(Lt),n=e.createMediaStreamDestination();vi=n.stream,console.log(vi);var r=e.createBiquadFilter();r.type=oe.value,r.frequency.value=ae.value,r.gain.value=Ft.value;var s=e.createStereoPanner();s.pan.value=ce.value;var i=e.createGain();i.gain.value=Ft.value;var o=e.createDynamicsCompressor();o.release.value=qt.value;var a=e.createConvolver();f(bt.value).then("rev set success to: ",bt.value),t.connect(o),o.connect(r),r.connect(a),a.connect(i),i.connect(s),s.connect(n),le.on("change",function(d){if(o.threshold.value=le.value,m.comp.threshold=le.value,m.whatChanged="comp.threshold",!E){const g=JSON.stringify(m);try{x.send(g)}catch(T){console.error(T)}console.log("threshold: ",m.comp.threshold)}}),qt.on("change",function(d){if(o.release.value=qt.value,m.comp.release=qt.value,m.whatChanged="comp.release",!E){const g=JSON.stringify(m);x.send(g)}}),fe.on("change",function(d){if(o.attack.value=fe.value,m.comp.attack=fe.value,m.whatChanged="comp.attack",!E){const g=JSON.stringify(m);x.send(g)}}),he.on("change",function(d){if(o.knee.value=he.value,m.comp.knee=he.value,m.whatChanged="comp.knee",!E){const g=JSON.stringify(m);x.send(g)}}),de.on("change",function(d){if(o.ratio.value=de.value,m.comp.ratio=de.value,m.whatChanged="comp.ratio",!E){const g=JSON.stringify(m);x.send(g)}}),Vn.on("change",function(d){if(m.rev.mix=Vn.value,m.whatChanged="rev.mix",!E){const g=JSON.stringify(m);x.send(g)}}),bt.on("change",function(d){if(f(bt.value).then("rev set success to: ",bt.value),m.rev.type=bt.value,m.whatChanged="rev.type",!E){const g=JSON.stringify(m);x.send(g)}}),oe.on("change",function(d){if(r.type=oe.value,m.eq.type=oe.value,m.whatChanged="eq.type",!E){const g=JSON.stringify(m);x.send(g)}}),ae.on("change",function(d){if(r.frequency.value=ae.value,m.eq.freq=ae.value,m.whatChanged="eq.freq",!E){const g=JSON.stringify(m);x.send(g)}}),Ne.on("change",function(d){if(r.gain.value=Ne.value,m.eq.low=Ne.value,m.whatChanged="eq.low",!E){const g=JSON.stringify(m);x.send(g)}}),Me.on("change",function(d){if(r.gain.value=Me.value,m.eq.mid=Me.value,m.whatChanged="eq.mid",!E){const g=JSON.stringify(m);x.send(g)}}),xe.on("change",function(d){if(r.gain.value=xe.value,m.eq.high=xe.value,m.whatChanged="eq.high",!E){const g=JSON.stringify(m);x.send(g)}}),ce.on("change",function(d){if(s.pan.value=ce.value,m.pan.pan=ce.value,m.whatChanged="pan.pan",!E){const g=JSON.stringify(m);x.send(g)}}),Ft.on("change",function(d){if(i.gain.value=Ft.value,m.gain.gain=Ft.value,m.whatChanged="gain.gain",!E){const g=JSON.stringify(m);x.send(g)}}),bn.on("change",function(d){if(m.comp.bypass=bn.state,m.whatChanged="comp.bypass",l(),!E){const g=JSON.stringify(m);x.send(g)}}),Dn.on("change",function(d){if(m.rev.bypass=Dn.state,m.whatChanged="rev.bypass",l(),!E){const g=JSON.stringify(m);x.send(g)}}),kn.on("change",function(d){if(m.eq.bypass=kn.state,m.whatChanged="eq.bypass",l(),!E){const g=JSON.stringify(m);x.send(g)}}),Nn.on("change",function(d){if(m.gain.bypass=Nn.state,m.whatChanged="gain.bypass",l(),!E){const g=JSON.stringify(m);x.send(g)}}),Mn.on("change",function(d){if(m.pan.bypass=Mn.state,m.whatChanged="pan.bypass",l(),!E){const g=JSON.stringify(m);x.send(g)}});var c=new Nexus.Oscilloscope("#oScope");c.connect(t);var u=new Nexus.Spectrogram("#spec");u.connect(t);function l(){o.disconnect(),r.disconnect(),a.disconnect(),i.disconnect(),s.disconnect();let d=[!1,m.comp.bypass,m.eq.bypass,m.rev.bypass,m.gain.bypass,m.pan.bypass,!1];var g,T;for(g=0;g<d.length-1;g++)if(!d[g]){for(T=g+1;T<d.length;T++)if(!d[T]){h(g,T);break}}}function h(d,g){let T=[t,o,r,a,i,s,n];T[d].connect(T[g])}async function f(d){var g="https://talker93.github.io/pb/audio/"+d+".wav",T=new XMLHttpRequest;T.open("GET",g,!0),T.responseType="arraybuffer",T.onload=function(){var A=T.response;e.decodeAudioData(A,function(M){e.createBufferSource(),a.buffer=M},function(M){""+M.err})},T.send()}}function xy(e){e.onicegatheringstatechange=t=>{console.log("iceGatheringState: ",e.iceGatheringState),$()},e.oniceconnectionstatechange=t=>{console.log("iceConnectionState: ",e.iceConnectionState),$()},e.onconnectionstatechange=t=>{console.log("connectionState: ",e.connectionState),$()}}function $(){Xa=Math.floor(Date.now()%1e5),console.log("time elapsed: ",Xa)}
