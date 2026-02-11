var Pe=Object.defineProperty;var Ve=(n,e,t)=>e in n?Pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oe=(n,e,t)=>Ve(n,typeof e!="symbol"?e+"":e,t);import{r as l,R as H}from"./index-CgfFrydU.js";import{_ as Be,c as y,g as ae,a as Se}from"./generateUtilityClasses-CsFllfrJ.js";import{j as $}from"./jsx-runtime-D_zvdyIk.js";import{u as le,k as Q}from"./DefaultPropsProvider-Bo6nkiJm.js";import{c as we,_ as De,b as Le,T as ie,a as je,u as se}from"./useTimeout-CLJHompC.js";import{s as Z,c as ke}from"./createSimplePaletteValueFilter-BFYkdot2.js";import{u as Ne}from"./useEnhancedEffect-QNI2HLi_.js";import{i as re}from"./isFocusVisible-B8k4qzLc.js";function _(n){const e=l.useRef(n);return Ne(()=>{e.current=n}),l.useRef((...t)=>(0,e.current)(...t)).current}class G{constructor(){oe(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=we(G.create).current,[t,a]=l.useState(!1);return e.shouldMount=t,e.setShouldMount=a,l.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=ve(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function $e(){return G.use()}function ve(){let n,e;const t=new Promise((a,o)=>{n=a,e=o});return t.resolve=n,t.reject=e,t}function Fe(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ee(n,e){var t=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=t(o)}),a}function Ie(n,e){n=n||{},e=e||{};function t(d){return d in e?e[d]:n[d]}var a=Object.create(null),o=[];for(var i in n)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=t(f)}p[u]=t(u)}for(s=0;s<o.length;s++)p[o[s]]=t(o[s]);return p}function N(n,e,t){return t[e]!=null?t[e]:n.props[e]}function Ue(n,e){return ee(n.children,function(t){return l.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:N(t,"appear",n),enter:N(t,"enter",n),exit:N(t,"exit",n)})})}function ze(n,e,t){var a=ee(n.children),o=Ie(e,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in e,u=i in a,f=e[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:t.bind(null,s),in:!0,exit:N(s,"exit",n),enter:N(s,"enter",n)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:t.bind(null,s),in:f.props.in,exit:N(s,"exit",n),enter:N(s,"enter",n)}))}}),o}var Oe=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},Ae={component:"div",childFactory:function(e){return e}},te=function(n){De(e,n);function e(a,o){var i;i=n.call(this,a,o)||this;var s=i.handleExited.bind(Fe(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ue(o,p):ze(o,s,p),firstRender:!1}},t.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=Be({},p.children);return delete u[o.key],{children:u}}))},t.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=Le(o,["component","childFactory"]),u=this.state.contextValue,f=Oe(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(ie.Provider,{value:u},f):H.createElement(ie.Provider,{value:u},H.createElement(i,p,f))},e}(H.Component);te.propTypes={};te.defaultProps=Ae;function Xe(n){const{className:e,classes:t,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=n,[d,h]=l.useState(!1),M=y(e,t.ripple,t.rippleVisible,a&&t.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},g=y(t.child,d&&t.childLeaving,a&&t.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),$.jsx("span",{className:M,style:V,children:$.jsx("span",{className:g})})}const b=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ye=80,Ke=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,We=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,He=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,_e=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ge=Z(Xe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${We};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${He};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,qe=l.forwardRef(function(e,t){const a=le({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=je(),g=l.useRef(null),D=l.useRef(null),C=l.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:L,cb:U}=c;f(x=>[...x,$.jsx(Ge,{classes:{ripple:y(i.ripple,b.ripple),rippleVisible:y(i.rippleVisible,b.rippleVisible),ripplePulsate:y(i.ripplePulsate,b.ripplePulsate),child:y(i.child,b.child),childLeaving:y(i.childLeaving,b.childLeaving),childPulsate:y(i.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:L},d.current)]),d.current+=1,h.current=U},[i]),v=l.useCallback((c={},E={},R=()=>{})=>{const{pulsate:I=!1,center:L=o||E.pulsate,fakeElement:U=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const x=U?null:D.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,w;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(j-B.top)}if(L)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},V.start(Ye,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},[o,C,V]),Y=l.useCallback(()=>{v({},{pulsate:!0})},[v]),F=l.useCallback((c,E)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{F(c,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return l.useImperativeHandle(t,()=>({pulsate:Y,start:v,stop:F}),[Y,v,F]),$.jsx(_e,{className:y(b.root,i.root,s),ref:D,...p,children:$.jsx(te,{component:null,exit:!0,children:u})})});function Je(n){return Se("MuiButtonBase",n)}const Qe=ae("MuiButtonBase",["root","disabled","focusVisible"]),Ze=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:a,classes:o}=n,s=ke({root:["root",e&&"disabled",t&&"focusVisible"]},Je,o);return t&&a&&(s.root+=` ${a}`),s},et=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ct=l.forwardRef(function(e,t){const a=le({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:D,onClick:C,onContextMenu:v,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:x,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=$e(),ue=se(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ce=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pe=P(m,"start",I,h),fe=P(m,"stop",v,h),de=P(m,"stop",Y,h),he=P(m,"stop",U,h),me=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),ge=P(m,"start",S,h),be=P(m,"stop",x,h),Me=P(m,"stop",B,h),Re=P(m,"stop",r=>{re(r.target)||K(!1),D&&D(r)},!1),Ee=_(r=>{A.current||(A.current=r.currentTarget),re(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},xe=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),C&&C(r))}),ye=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=g);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ce=se(t,A),ne={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Te=Ze(ne);return $.jsxs(et,{as:W,className:y(Te.root,p),ownerState:ne,onBlur:Re,onClick:C,onContextMenu:fe,onFocus:Ee,onKeyDown:xe,onKeyUp:ye,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:de,onTouchEnd:be,onTouchMove:Me,onTouchStart:ge,ref:Ce,tabIndex:f?-1:T,type:j,...X,...O,children:[s,ce?$.jsx(qe,{ref:ue,center:i,...w}):null]})});function P(n,e,t,a=!1){return _(o=>(t&&t(o),a||n[e](o),!0))}export{ct as B,_ as u};
//# sourceMappingURL=ButtonBase-0dgLigRO.js.map
