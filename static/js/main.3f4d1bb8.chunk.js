/*! For license information please see main.3f4d1bb8.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-clickable-div-example"]=this["webpackJsonpreact-clickable-div-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),o=n.n(r),c=n(2),a=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u="function"===typeof Symbol&&Symbol.for,f=u?Symbol.for("react.element"):60103,l=u?Symbol.for("react.portal"):60106,p=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,m=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,b=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,v=u?Symbol.for("react.concurrent_mode"):60111,S=u?Symbol.for("react.forward_ref"):60112,O=u?Symbol.for("react.suspense"):60113,w=u?Symbol.for("react.suspense_list"):60120,g=u?Symbol.for("react.memo"):60115,R=u?Symbol.for("react.lazy"):60116,k=u?Symbol.for("react.block"):60121,E=u?Symbol.for("react.fundamental"):60117,j=u?Symbol.for("react.responder"):60118,C=u?Symbol.for("react.scope"):60119;function $(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case h:case v:case p:case m:case y:case O:return e;default:switch(e=e&&e.$$typeof){case b:case S:case R:case g:case d:return e;default:return t}}case l:return t}}}function x(e){return $(e)===v}var _={AsyncMode:h,ConcurrentMode:v,ContextConsumer:b,ContextProvider:d,Element:f,ForwardRef:S,Fragment:p,Lazy:R,Memo:g,Portal:l,Profiler:m,StrictMode:y,Suspense:O,isAsyncMode:function(e){return x(e)||$(e)===h},isConcurrentMode:x,isContextConsumer:function(e){return $(e)===b},isContextProvider:function(e){return $(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return $(e)===S},isFragment:function(e){return $(e)===p},isLazy:function(e){return $(e)===R},isMemo:function(e){return $(e)===g},isPortal:function(e){return $(e)===l},isProfiler:function(e){return $(e)===m},isStrictMode:function(e){return $(e)===y},isSuspense:function(e){return $(e)===O},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===p||e===v||e===m||e===y||e===O||e===w||"object"===typeof e&&null!==e&&(e.$$typeof===R||e.$$typeof===g||e.$$typeof===d||e.$$typeof===b||e.$$typeof===S||e.$$typeof===E||e.$$typeof===j||e.$$typeof===C||e.$$typeof===k)},typeOf:$},P=(s((function(e,t){0})),s((function(e){e.exports=_})),Object.getOwnPropertySymbols),M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function I(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,n,r,o){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function D(){}function F(){}F.resetWarningCache=D;var U=s((function(e){e.exports=function(){function e(e,t,n,r,o,c){if(c!==N){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:F,resetWarningCache:D};return n.PropTypes=n,n}()})),A="_1aCzs",W=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).state={clicked:!1},t.divRef=o.a.createRef(),t.onMouseDown=function(){t.setState({clicked:!0})},t.onMouseUp=function(){t.setState({clicked:!1}),t.divRef.current.blur()},t.attachRef=function(e){t.divRef.current=e;var n=t.props.innerRef;n&&("function"===typeof inputRef?n(e):n.current=e)},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){this.divRef.current&&(this.divRef.current.addEventListener("mousedown",this.onMouseDown),this.divRef.current.addEventListener("mouseup",this.onMouseUp))},c.componentWillUnmount=function(){this.divRef.current&&(this.divRef.current.removeEventListener("mousedown",this.onMouseDown),this.divRef.current.removeEventListener("mouseup",this.onMouseUp))},c.render=function(){var e=this.props,t=e.className,n=e.onClick,r=e.children,c=e.style,a=e.tabIndex,i=this.state.clicked;return o.a.createElement("div",{className:(t||"")+" "+(i?A:""),style:c,role:"button",tabIndex:a,ref:this.attachRef,onKeyDown:function(e){"Enter"===e.key&&n()},onClick:n},r)},r}(r.Component);W.propTypes={className:U.string,onClick:U.func.isRequired,style:U.shape({}),children:U.node,innerRef:U.shape({current:U.shape({})}),tabIndex:U.number},W.defaultProps={className:null,innerRef:null,children:null,style:{},tabIndex:0};var q=o.a.forwardRef((function(e,t){return o.a.createElement(W,i({innerRef:t},e))})),z=(n(9),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"example",onClick:function(){return alert("Clicked!")}},"Regular div",o.a.createElement("br",null),"Not accessible with keyboard :("),o.a.createElement(q,{className:"example",onClick:function(){return alert("Clicked!")}},"React clickable div",o.a.createElement("br",null),"Accessible with keyboard :)"))});a.a.render(o.a.createElement(z,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.3f4d1bb8.chunk.js.map