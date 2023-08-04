/*! For license information please see stories-components-MyLabel-stories.22270b77.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_storybook=self.webpackChunkmy_storybook||[]).push([[76],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/stories/components/MyLabel.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllCaps:function(){return AllCaps},Basic:function(){return Basic},CustomFontColor:function(){return CustomFontColor},Secondary:function(){return Secondary},Tertiary:function(){return Tertiary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return MyLabel_stories}});var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_AllCaps$parameters,_AllCaps$parameters2,_AllCaps$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Tertiary$parameters,_Tertiary$parameters2,_Tertiary$parameters3,_CustomFontColor$para,_CustomFontColor$para2,_CustomFontColor$para3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MyLabel=function MyLabel(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"No label":_ref$label,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,_ref$allCaps=_ref.allCaps,allCaps=void 0!==_ref$allCaps&&_ref$allCaps,fontColor=_ref.fontColor;return(0,jsx_runtime.jsx)("span",{className:" label ".concat(size," text-").concat(color),style:{color:fontColor},children:allCaps?label.toUpperCase():label})};try{MyLabel.displayName="MyLabel",MyLabel.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Este mensaje es el que se va a usar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño por defecto del label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalizar toda la palabra",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores del basicos del boton",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secundary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:MyLabel.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch(__react_docgen_typescript_loader_error){}var MyLabel_stories={title:"UI/MyLabel",component:MyLabel,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}},tags:["autodocs"]},Template=function Template(args){return(0,jsx_runtime.jsx)(MyLabel,(0,objectSpread2.Z)({},args))},Basic=Template.bind({});Basic.args={size:"normal",allCaps:!1};var AllCaps=Template.bind({});AllCaps.args={size:"normal",allCaps:!0};var Secondary=Template.bind({});Secondary.args={size:"normal",color:"secundary"};var Tertiary=Template.bind({});Tertiary.args={size:"normal",color:"tertiary"};var CustomFontColor=Template.bind({});CustomFontColor.args={size:"h1",fontColor:"#5517ac"},Basic.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Basic.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <MyLabel {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),AllCaps.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AllCaps.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AllCaps$parameters=AllCaps.parameters)||void 0===_AllCaps$parameters?void 0:_AllCaps$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <MyLabel {...args} />"},null===(_AllCaps$parameters2=AllCaps.parameters)||void 0===_AllCaps$parameters2||null===(_AllCaps$parameters2$=_AllCaps$parameters2.docs)||void 0===_AllCaps$parameters2$?void 0:_AllCaps$parameters2$.source)})}),Secondary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Secondary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <MyLabel {...args} />"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),Tertiary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Tertiary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Tertiary$parameters=Tertiary.parameters)||void 0===_Tertiary$parameters?void 0:_Tertiary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <MyLabel {...args} />"},null===(_Tertiary$parameters2=Tertiary.parameters)||void 0===_Tertiary$parameters2||null===(_Tertiary$parameters3=_Tertiary$parameters2.docs)||void 0===_Tertiary$parameters3?void 0:_Tertiary$parameters3.source)})}),CustomFontColor.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CustomFontColor.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CustomFontColor$para=CustomFontColor.parameters)||void 0===_CustomFontColor$para?void 0:_CustomFontColor$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <MyLabel {...args} />"},null===(_CustomFontColor$para2=CustomFontColor.parameters)||void 0===_CustomFontColor$para2||null===(_CustomFontColor$para3=_CustomFontColor$para2.docs)||void 0===_CustomFontColor$para3?void 0:_CustomFontColor$para3.source)})});var __namedExportsOrder=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);