var Be=Object.defineProperty;var Se=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>Se(t,typeof e!="symbol"?e+"":e,n);import{r as a,R as H}from"./index-B6-Y_Zgq.js";import{_ as De,c as y,a as ue,g as Le}from"./generateUtilityClasses-C7NVNw6_.js";import{j as N}from"./jsx-runtime-DPRcWr2C.js";import{k as Q,u as ce}from"./DefaultPropsProvider-BO4dxBej.js";import{s as Z,c as je}from"./createSimplePaletteValueFilter-B6WGg_tz.js";import{_ as ke,b as ve,T as re,c as Ne,u as $e,a as ae}from"./TransitionGroupContext-Dlz9emgo.js";import{i as le}from"./isFocusVisible-B8k4qzLc.js";const Fe=typeof window<"u"?a.useLayoutEffect:a.useEffect;function _(t){const e=a.useRef(t);return Fe(()=>{e.current=t}),a.useRef((...n)=>(0,e.current)(...n)).current}function Ie(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(i){return e&&a.isValidElement(i)?e(i):i},l=Object.create(null);return t&&a.Children.map(t,function(o){return o}).forEach(function(o){l[o.key]=n(o)}),l}function Ue(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var l=Object.create(null),o=[];for(var i in t)i in e?o.length&&(l[i]=o,o=[]):o.push(i);var s,p={};for(var u in e){if(l[u])for(s=0;s<l[u].length;s++){var f=l[u][s];p[l[u][s]]=n(f)}p[u]=n(u)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function ze(t,e){return ee(t.children,function(n){return a.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function Oe(t,e,n){var l=ee(t.children),o=Ue(e,l);return Object.keys(o).forEach(function(i){var s=o[i];if(a.isValidElement(s)){var p=i in e,u=i in l,f=e[i],d=a.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:v(s,"exit",t),enter:v(s,"enter",t)}):!u&&p&&!d?o[i]=a.cloneElement(s,{in:!1}):u&&p&&a.isValidElement(f)&&(o[i]=a.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:v(s,"exit",t),enter:v(s,"enter",t)}))}}),o}var Ae=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Xe={component:"div",childFactory:function(e){return e}},te=function(t){ke(e,t);function e(l,o){var i;i=t.call(this,l,o)||this;var s=i.handleExited.bind(Ie(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?ze(o,p):Oe(o,s,p),firstRender:!1}},n.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=De({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=ve(o,["component","childFactory"]),u=this.state.contextValue,f=Ae(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(re.Provider,{value:u},f):H.createElement(re.Provider,{value:u},H.createElement(i,p,f))},e}(H.Component);te.propTypes={};te.defaultProps=Xe;class G{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=Ne(G.create).current,[n,l]=a.useState(!1);return e.shouldMount=n,e.setShouldMount=l,a.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ke(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ye(){return G.use()}function Ke(){let t,e;const n=new Promise((l,o)=>{t=l,e=o});return n.resolve=t,n.reject=e,n}function We(t){const{className:e,classes:n,pulsate:l=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=t,[d,M]=a.useState(!1),g=y(e,n.ripple,n.rippleVisible,l&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},h=y(n.child,d&&n.childLeaving,l&&n.childPulsate);return!p&&!d&&M(!0),a.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),N.jsx("span",{className:g,style:V,children:N.jsx("span",{className:h})})}const m=ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,He=80,_e=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ge=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,qe=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Je=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Qe=Z(We,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${_e};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${Ge};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${qe};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ze=a.forwardRef(function(e,n){const l=ce({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=l,[u,f]=a.useState([]),d=a.useRef(0),M=a.useRef(null);a.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=a.useRef(!1),V=$e(),h=a.useRef(null),D=a.useRef(null),x=a.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:I,rippleSize:L,cb:U}=c;f(E=>[...E,N.jsx(Qe,{classes:{ripple:y(i.ripple,m.ripple),rippleVisible:y(i.rippleVisible,m.rippleVisible),ripplePulsate:y(i.ripplePulsate,m.ripplePulsate),child:y(i.child,m.child),childLeaving:y(i.childLeaving,m.childLeaving),childPulsate:y(i.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:I,rippleSize:L},d.current)]),d.current+=1,M.current=U},[i]),$=a.useCallback((c={},R={},b=()=>{})=>{const{pulsate:I=!1,center:L=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const E=U?null:D.current,w=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,C,S;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(w.width/2),C=Math.round(w.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(z-w.left),C=Math.round(j-w.top)}if(L)S=Math.sqrt((2*w.width**2+w.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;S=Math.sqrt(z**2+j**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:I,rippleX:B,rippleY:C,rippleSize:S,cb:b})},V.start(He,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:I,rippleX:B,rippleY:C,rippleSize:S,cb:b})},[o,x,V]),Y=a.useCallback(()=>{$({},{pulsate:!0})},[$]),F=a.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{F(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return a.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Je,{className:y(m.root,i.root,s),ref:D,...p,children:N.jsx(te,{component:null,exit:!0,children:u})})});function et(t){return Le("MuiButtonBase",t)}const tt=ue("MuiButtonBase",["root","disabled","focusVisible"]),nt=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:l,classes:o}=t,s=je({root:["root",e&&"disabled",n&&"focusVisible"]},et,o);return n&&l&&(s.root+=` ${l}`),s},ot=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(e,n){const l=ce({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:D,onClick:x,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:E,onTouchMove:w,onTouchStart:B,tabIndex:C=0,TouchRippleProps:S,touchRippleRef:z,type:j,...O}=l,A=a.useRef(null),T=Ye(),pe=ae(T.ref,z),[k,K]=a.useState(!1);f&&k&&K(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const fe=T.shouldMount&&!d&&!f;a.useEffect(()=>{k&&g&&!d&&T.pulsate()},[d,g,k,T]);function P(r,oe,we=M){return _(ie=>(oe&&oe(ie),we||T[r](ie),!0))}const de=P("start",I),he=P("stop",$),me=P("stop",Y),ge=P("stop",U),be=P("stop",r=>{k&&r.preventDefault(),L&&L(r)}),Me=P("start",B),Re=P("stop",E),Ee=P("stop",w),ye=P("stop",r=>{le(r.target)||K(!1),D&&D(r)},!1),xe=_(r=>{A.current||(A.current=r.currentTarget),le(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ce=_(r=>{g&&!r.repeat&&k&&r.key===" "&&T.stop(r,()=>{T.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),x&&x(r))}),Te=_(r=>{g&&r.key===" "&&k&&!r.defaultPrevented&&T.stop(r,()=>{T.pulsate(r)}),b&&b(r),x&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&x(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=h);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Pe=ae(n,A),ne={...l,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:k},Ve=nt(ne);return N.jsxs(ot,{as:W,className:y(Ve.root,p),ownerState:ne,onBlur:ye,onClick:x,onContextMenu:he,onFocus:xe,onKeyDown:Ce,onKeyUp:Te,onMouseDown:de,onMouseLeave:be,onMouseUp:ge,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:Me,ref:Pe,tabIndex:f?-1:C,type:j,...X,...O,children:[s,fe?N.jsx(Ze,{ref:pe,center:i,...S}):null]})});export{dt as B,_ as a,Fe as u};
