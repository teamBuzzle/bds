var St=Object.defineProperty;var wt=(n,t,e)=>t in n?St(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var st=(n,t,e)=>wt(n,typeof t!="symbol"?t+"":t,e);import{r as l,R as H}from"./index-ClcD9ViR.js";import{_ as Dt,f as x,b as ut,g as Lt}from"./createTheme-CjrVVy3p.js";import{j as N}from"./jsx-runtime-CfatFE5O.js";import{k as Q}from"./emotion-react.browser.esm-BCmK9DIQ.js";import{s as Z,u as ct,c as jt}from"./DefaultPropsProvider-DfOUXs8s.js";import{_ as kt,b as vt,T as rt,c as Nt,u as $t,a as at}from"./TransitionGroupContext-DYXo4IH-.js";import{a as _}from"./useEventCallback-I9tDrlGm.js";import{i as lt}from"./isFocusVisible-B8k4qzLc.js";function Ft(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tt(n,t){var e=function(i){return t&&l.isValidElement(i)?t(i):i},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=e(o)}),a}function It(n,t){n=n||{},t=t||{};function e(d){return d in t?t[d]:n[d]}var a=Object.create(null),o=[];for(var i in n)i in t?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=e(f)}p[u]=e(u)}for(s=0;s<o.length;s++)p[o[s]]=e(o[s]);return p}function v(n,t,e){return e[t]!=null?e[t]:n.props[t]}function Ut(n,t){return tt(n.children,function(e){return l.cloneElement(e,{onExited:t.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})})}function zt(n,t,e){var a=tt(n.children),o=It(t,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in t,u=i in a,f=t[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:!0,exit:v(s,"exit",n),enter:v(s,"enter",n)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:f.props.in,exit:v(s,"exit",n),enter:v(s,"enter",n)}))}}),o}var Ot=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},At={component:"div",childFactory:function(t){return t}},et=function(n){kt(t,n);function t(a,o){var i;i=n.call(this,a,o)||this;var s=i.handleExited.bind(Ft(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var e=t.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ut(o,p):zt(o,s,p),firstRender:!1}},e.handleExited=function(o,i){var s=tt(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=Dt({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=vt(o,["component","childFactory"]),u=this.state.contextValue,f=Ot(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(rt.Provider,{value:u},f):H.createElement(rt.Provider,{value:u},H.createElement(i,p,f))},t}(H.Component);et.propTypes={};et.defaultProps=At;class G{constructor(){st(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=Nt(G.create).current,[e,a]=l.useState(!1);return t.shouldMount=e,t.setShouldMount=a,l.useEffect(t.mountEffect,[e]),t}mount(){return this.mounted||(this.mounted=Yt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...t)})}stop(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...t)})}pulsate(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...t)})}}function Xt(){return G.use()}function Yt(){let n,t;const e=new Promise((a,o)=>{n=a,t=o});return e.resolve=n,e.reject=t,e}function Kt(n){const{className:t,classes:e,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=n,[d,M]=l.useState(!1),g=x(t,e.ripple,e.rippleVisible,a&&e.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},h=x(e.child,d&&e.childLeaving,a&&e.childPulsate);return!p&&!d&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),N.jsx("span",{className:g,style:V,children:N.jsx("span",{className:h})})}const m=ut("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Wt=80,Ht=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,_t=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Gt=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qt=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Jt=Z(Kt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ht};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
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
    animation-name: ${_t};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Gt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Qt=l.forwardRef(function(t,e){const a=ct({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),V=$t(),h=l.useRef(null),D=l.useRef(null),y=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:I,rippleSize:L,cb:U}=c;f(E=>[...E,N.jsx(Jt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:I,rippleSize:L},d.current)]),d.current+=1,M.current=U},[i]),$=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:I=!1,center:L=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const E=U?null:D.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,w;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),C=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),C=Math.round(j-B.top)}if(L)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{y({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},V.start(Wt,()=>{h.current&&(h.current(),h.current=null)})):y({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},[o,y,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{F(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return l.useImperativeHandle(e,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(qt,{className:x(m.root,i.root,s),ref:D,...p,children:N.jsx(et,{component:null,exit:!0,children:u})})});function Zt(n){return Lt("MuiButtonBase",n)}const te=ut("MuiButtonBase",["root","disabled","focusVisible"]),ee=n=>{const{disabled:t,focusVisible:e,focusVisibleClassName:a,classes:o}=n,s=jt({root:["root",t&&"disabled",e&&"focusVisible"]},Zt,o);return e&&a&&(s.root+=` ${a}`),s},ne=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${te.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),de=l.forwardRef(function(t,e){const a=ct({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:D,onClick:y,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),T=Xt(),pt=at(T.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ft=T.shouldMount&&!d&&!f;l.useEffect(()=>{k&&g&&!d&&T.pulsate()},[d,g,k,T]);function P(r,ot,Bt=M){return _(it=>(ot&&ot(it),Bt||T[r](it),!0))}const dt=P("start",I),ht=P("stop",$),mt=P("stop",Y),gt=P("stop",U),bt=P("stop",r=>{k&&r.preventDefault(),L&&L(r)}),Mt=P("start",S),Rt=P("stop",E),Et=P("stop",B),xt=P("stop",r=>{lt(r.target)||K(!1),D&&D(r)},!1),yt=_(r=>{A.current||(A.current=r.currentTarget),lt(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ct=_(r=>{g&&!r.repeat&&k&&r.key===" "&&T.stop(r,()=>{T.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),y&&y(r))}),Tt=_(r=>{g&&r.key===" "&&k&&!r.defaultPrevented&&T.stop(r,()=>{T.pulsate(r)}),b&&b(r),y&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&y(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=h);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Pt=at(e,A),nt={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:k},Vt=ee(nt);return N.jsxs(ne,{as:W,className:x(Vt.root,p),ownerState:nt,onBlur:xt,onClick:y,onContextMenu:ht,onFocus:yt,onKeyDown:Ct,onKeyUp:Tt,onMouseDown:dt,onMouseLeave:bt,onMouseUp:gt,onDragLeave:mt,onTouchEnd:Rt,onTouchMove:Et,onTouchStart:Mt,ref:Pt,tabIndex:f?-1:C,type:j,...X,...O,children:[s,ft?N.jsx(Qt,{ref:pt,center:i,...w}):null]})});export{de as B};
