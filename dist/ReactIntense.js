"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _class,_react=_interopRequireWildcard(require("react")),_autobindDecorator=_interopRequireDefault(require("autobind-decorator"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _applyDecoratedDescriptor(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}require("./ReactIntense.css"),require("./polyfills.js"),require("./loader.css");var defaultProps={invert:!1,moveSpeed:.05,vertical:!1},KEYCODE_ESC=27,ReactIntense=(_class=/*#__PURE__*/function(a){function b(a){var d;_classCallCheck(this,b),d=c.call(this,a);var e=window,f=e.innerWidth,g=e.innerHeight,h=document,i=h.body;return d.state={bindingsApplied:!1,container:{width:f,height:g},lastPosition:0,loaded:!1,mouseDest:{x:0,y:0},mouseCurr:{x:f/2,y:g/2},overflow:{x:0,y:0},overflowValue:i&&i.style.overflow,target:{width:0,height:0},visible:!1},d}// Manually set height & width
_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"setDimensions",value:function setDimensions(a){// SyntheticResizeEvent
var b=a.offsetHeight,c=a.offsetWidth;this.setState({overflow:{x:this.state.container.width-c,y:this.state.container.height-b}})}},{key:"positionTarget",value:function positionTarget(){var a=Math.abs,b=this.state,c=b.mouseCurr,d=b.mouseDest,e=this.props.moveSpeed,f=c.x+(d.x-c.x)*e,g=c.y+(d.y-c.y)*e,h=a(f-c.x)+a(g-c.y);if(1e-4<h){this.setState({mouseCurr:{x:f,y:g}});var i=this.state,j=i.container,k=i.lastPosition,l=i.overflow,m=this.props.vertical;if(m){// VERTICAL SCANNING
if(g!==k){var n=this.calcPosition(g,j.height),o=l.y*n;this.setState({lastPosition:g,transform:"translate3d( 0px, "+o+"px, 0px)"})}}else// HORIZONTAL SCANNING
if(f!==k){var p=this.calcPosition(f,j.width),q=l.x*p;this.setState({lastPosition:f,transform:"translate3d("+q+"px, 0px, 0px)"})}}}},{key:"calcPosition",value:function calcPosition(a,b){return this.props.invert?(b-a)/b:a/b}},{key:"addEventListeners",value:function addEventListeners(){try{var a=this.refs.container,b=a.children[0].children[0];b.addEventListener("mousemove",this._onMouseMove),b.addEventListener("touchmove",this._onTouchMove),b.addEventListener("click",this.hideViewer),window.addEventListener("resize",this.setDimensions),window.addEventListener("keyup",this._onKeyUp),this.setState({bindingsApplied:!0})}catch(a){}}},{key:"removeEventListeners",value:function removeEventListeners(){try{var a=this.refs.container,b=a.children[0].children[0];b.removeEventListener("mousemove",this._onMouseMove),b.removeEventListener("touchmove",this._onTouchMove),b.removeEventListener("click",this.hideViewer),window.removeEventListener("resize",this.setDimensions),window.removeEventListener("keyup",this._onKeyUp),this.setState({bindingsApplied:!1})}catch(a){}}},{key:"componentDidMount",value:function componentDidMount(){this.positionTarget()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.state&&this.state.bindingsApplied&&this.removeEventListeners()}// Lock scroll on the document body.
},{key:"lockBody",value:function lockBody(){document.body&&(document.body.style.overflow="hidden")}// Unlock scroll on the document body.
},{key:"unlockBody",value:function unlockBody(){document.body&&this.state.overflowValue&&(document.body.style.overflow=this.state.overflowValue)}// Stop animation
},{key:"stop",value:function stop(a){window.cancelAnimationFrame(a)}// Start animation
},{key:"loop",value:function loop(){var a=window.requestAnimationFrame(this.loop);this.setState({looper:a}),this.positionTarget()}// Events
},{key:"_onClick",value:function _onClick(a){a.preventDefault(),this.props.onClick&&this.props.onClick(),this.setState({visible:!0}),this._onMouseMove.call(void 0,a),this.lockBody(),this.loop()}},{key:"_onKeyUp",value:function _onKeyUp(a){a.preventDefault(),a.keyCode===KEYCODE_ESC&&this.hideViewer()}},{key:"_onLoad",value:function _onLoad(a){this.setState({loaded:!0,source:{src:this.props.src,width:a.target.offsetWidth,height:a.target.offsetHeight}}),this.setDimensions.call(void 0,a.target),this.addEventListeners()}},{key:"_onMouseMove",value:function _onMouseMove(a){this.setState({mouseDest:{x:a.clientX,y:a.clientY}})}},{key:"_onTouchMove",value:function _onTouchMove(a){a.preventDefault(),this.setState({mouseDest:{x:a.touches[0].clientX,y:a.touches[0].clientY}})}// View helpers
},{key:"hideViewer",value:function hideViewer(){this.setState({visible:!1}),this.stop(this.state.looper),this.unlockBody(),this.removeEventListeners()}},{key:"_renderLoader",value:function _renderLoader(a,b){return b&&a?/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(a," ri-loader")},_toConsumableArray(Array(8)).map(function(a,b){return/*#__PURE__*/_react["default"].createElement("div",{key:"".concat(b,"-outer")},/*#__PURE__*/_react["default"].createElement("div",{key:"".concat(b,"-inner")}))})):/*#__PURE__*/_react["default"].createElement("div",null)}},{key:"_renderViewer",value:function _renderViewer(){var a=this.state,b=a.container,c=a.loaded,d=a.transform,e=a.visible,f=b.height,g=b.width,h=this.props,i=h.caption,j=h.src,k=h.title,l={height:this.props.vertical?"":f,MozTransform:d,transform:d,WebkitTransform:d,width:this.props.vertical?g:""};return e?/*#__PURE__*/_react["default"].createElement("div",{ref:"container"},/*#__PURE__*/_react["default"].createElement("figure",{className:"ri-container",style:{opacity:c?1:0}},/*#__PURE__*/_react["default"].createElement("img",{src:j,style:l,onLoad:this._onLoad}),/*#__PURE__*/_react["default"].createElement("figcaption",{className:"ri-caption-container"},/*#__PURE__*/_react["default"].createElement("h1",{className:"ri-title"},k),/*#__PURE__*/_react["default"].createElement("h2",{className:"ri-caption"},i)))):/*#__PURE__*/_react["default"].createElement("div",{ref:"container"})}},{key:"render",value:function render(){var a=this.props,b=a.className,c=a.loader,d=a.src,e=a.thumbnailSrc,f=a.trigger,g=this.state.visible,h={children:this._renderLoader(c,g),className:(b||"ri-trigger")+(g?" clicked":""),onClick:this._onClick,style:{backgroundImage:"url("+(e||d)+")"}},i=f?/*#__PURE__*/_react["default"].createElement("trigger",h):/*#__PURE__*/_react["default"].createElement("a",h);return/*#__PURE__*/_react["default"].createElement("div",{className:"ri-wrapper"},i,this._renderViewer())}}]),b}(_react.Component),_applyDecoratedDescriptor(_class.prototype,"setDimensions",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"setDimensions"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"positionTarget",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"positionTarget"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"addEventListeners",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"addEventListeners"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"removeEventListeners",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"removeEventListeners"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"loop",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"loop"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_onClick",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"_onClick"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_onLoad",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"_onLoad"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_onMouseMove",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"_onMouseMove"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"_onTouchMove",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"_onTouchMove"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"hideViewer",[_autobindDecorator["default"]],Object.getOwnPropertyDescriptor(_class.prototype,"hideViewer"),_class.prototype),_class);exports["default"]=ReactIntense,ReactIntense.defaultProps=defaultProps;

