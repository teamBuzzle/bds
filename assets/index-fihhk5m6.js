const e={tint:{main:{indigo005:"#f0f9ff",indigo010:"#e0f2fe",indigo020:"#bae6fd",indigo030:"#7dd3fc",indigo040:"#38bdf8",indigo050:"#0ea5e9",indigo060:"#0284c7",indigo070:"#0369a1",indigo080:"#075985",coral005:"#fff7ed",coral010:"#ffedd5",coral020:"#fed7aa",coral030:"#fdba74",coral040:"#fbbf24",coral050:"#f59e0b",coral060:"#e17a19",coral070:"#c2410c",coral080:"#9a3412"},sub:{},service:{buzzle:"#0af"}},gray:{gray005:"#fafafa",gray010:"#f5f5f5",gray020:"#e5e5e5",gray030:"#d4d4d4",gray040:"#a3a3a3",gray050:"#737373",gray060:"#525252",gray070:"#404040",gray080:"#262626"},black:"#000000",white:"#ffffff"},t={background:{base:e.gray.gray080,elevated:e.gray.gray070},button:{base:e.tint.service.buzzle,hover:e.tint.main.indigo050,active:e.tint.main.indigo060,disabled:e.gray.gray060,selected:e.tint.main.indigo060},text:{title:e.gray.gray005,base:e.gray.gray010,summary:e.gray.gray020,subtitle:e.black,subBase:e.gray.gray080,subSummary:e.gray.gray060,placeholder:e.gray.gray040,disabled:e.gray.gray030,link:e.tint.main.indigo050,linkHover:e.tint.main.indigo060,linkActive:e.tint.main.indigo070,linkDisabled:e.gray.gray060,linkSelected:e.tint.main.indigo060,linkSub:e.gray.gray005,linkSubHover:e.gray.gray010,linkSubActive:e.gray.gray020,linkSubDisabled:e.gray.gray060,linkSubSelected:e.gray.gray005},border:{base:e.gray.gray060,hover:e.gray.gray050,active:e.gray.gray040,disabled:e.gray.gray060,selected:e.gray.gray060},icon:{base:e.gray.gray005,hover:e.gray.gray010,active:e.gray.gray020,disabled:e.gray.gray060,selected:e.gray.gray005},shadow:{base:e.black},line:{base:e.gray.gray060,hover:e.gray.gray050,active:e.gray.gray040,disabled:e.gray.gray060,selected:e.gray.gray060}},i={family:{pretendard:"Pretendard",notoSans:"Noto Sans KR",gMarketSans:"Gmarket Sans",sansSerif:"sans-serif"},size:{largeTitle:32,title1:26,title2:20,title3:18,headline:16,body:16,callout:15,subhead:14,footnote:12,caption1:11,caption2:10},weight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{largeTitle:38,title1:32,title2:25,title3:23,headline:21,body:21,callout:20,subhead:19,footnote:16,caption1:13,caption2:12},letterSpacing:{main:0}},n={logo:{base:{fontSize:i.size.largeTitle,lineHeight:i.lineHeight.largeTitle,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.bold,fontFamily:`${i.family.gMarketSans}, ${i.family.sansSerif}`}},title:{largeTitle:{fontSize:i.size.largeTitle,lineHeight:i.lineHeight.largeTitle,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.bold,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`},base:{fontSize:i.size.title1,lineHeight:i.lineHeight.title1,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.bold,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`},small:{fontSize:i.size.title2,lineHeight:i.lineHeight.title2,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.semibold,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},text:{base:{fontSize:i.size.body,lineHeight:i.lineHeight.body,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`},small:{fontSize:i.size.subhead,lineHeight:i.lineHeight.subhead,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},caption:{base:{fontSize:i.size.caption1,lineHeight:i.lineHeight.caption1,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`},small:{fontSize:i.size.caption2,lineHeight:i.lineHeight.caption2,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},button:{base:{fontSize:i.size.body,lineHeight:i.lineHeight.body,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.medium,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},label:{base:{fontSize:i.size.body,lineHeight:i.lineHeight.body,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.medium,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},link:{base:{fontSize:i.size.body,lineHeight:i.lineHeight.body,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.medium,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`,textDecoration:"none"}},headline:{base:{fontSize:i.size.headline,lineHeight:i.lineHeight.headline,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.semibold,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},callout:{base:{fontSize:i.size.callout,lineHeight:i.lineHeight.callout,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.medium,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},footnote:{base:{fontSize:i.size.footnote,lineHeight:i.lineHeight.footnote,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}},input:{base:{fontSize:i.size.body,lineHeight:i.lineHeight.body,letterSpacing:i.letterSpacing.main,fontWeight:i.weight.regular,fontFamily:`${i.family.pretendard}, ${i.family.notoSans}, ${i.family.sansSerif}`}}},l=()=>a.radius.xxLarge-a.spacing.xxLarge,r=()=>a.radius.xLarge-a.spacing.xLarge,g=()=>a.radius.large-a.spacing.large,s=()=>a.radius.medium-a.spacing.medium,d=()=>a.radius.small-a.spacing.small,o=()=>a.radius.xSmall-a.spacing.xSmall,m=()=>a.radius.xxSmall-a.spacing.xxSmall,a={spacing:{xxLarge:48,xLarge:36,large:24,medium:16,small:8,xSmall:4,xxSmall:2},radius:{xxLarge:48,xLarge:36,large:24,medium:16,small:8,xSmall:4,xxSmall:2,innerRadius:{xxLarge:l,xLarge:r,medium:s,large:g,small:d,xSmall:o,xxSmall:m}},borderWidth:{xxLarge:6,xLarge:5,large:4,medium:3,xSmall:2,xxSmall:1}},y={container:{paddingY:a.spacing.large,paddingX:a.spacing.medium,spacing:a.spacing.medium},card:{paddingY:a.spacing.medium,paddingX:a.spacing.medium,radius:a.radius.medium,borderWidth:a.borderWidth.xxSmall,spacing:a.spacing.small,img:{radius:a.radius.innerRadius.medium()},button:{paddingY:a.spacing.small,paddingX:a.spacing.medium,radius:a.radius.innerRadius.medium()},paper:{radius:a.radius.innerRadius.medium()}},button:{paddingY:a.spacing.small,paddingX:a.spacing.medium,radius:a.radius.medium,spacing:a.spacing.small},list:{spacing:a.spacing.small,radius:a.radius.medium,borderWidth:a.borderWidth.xxSmall},inputForm:{spacing:a.spacing.xLarge,input:{radius:a.spacing.small}},modal:{spacing:a.spacing.medium,radius:a.radius.medium,borderWidth:a.borderWidth.xxSmall,img:{radius:a.radius.innerRadius.medium()},button:{paddingY:a.spacing.small,paddingX:a.spacing.medium,radius:a.radius.innerRadius.medium()}}},f={color:t,typography:n,value:y};export{f as b};