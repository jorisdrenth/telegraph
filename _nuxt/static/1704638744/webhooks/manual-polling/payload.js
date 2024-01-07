__NUXT_JSONP__("/webhooks/manual-polling", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{document:{slug:"manual-polling",description:"",title:"Manual updates polling",menuTitle:"Manual Polling",category:"Webhooks",fullscreen:false,position:67,toc:[],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"As an aternative to set up a webhook, a bot updates can be fetched by periodically polling Telegram APIs"}]},{type:a,value:e},{type:b,tag:j,props:{type:j},children:[{type:a,value:"\nManual updates polling is not available if a webhook is set up for the bot. Webhook should be remove first using its \n"},{type:b,tag:f,props:{href:"webhooks\u002Fdeleting-webhooks"},children:[{type:a,value:"unregisterWebhook"}]},{type:a,value:"\n method\n"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"in order to get the updates, an "},{type:b,tag:h,props:{},children:[{type:a,value:"-\u003Eupdates()"}]},{type:a,value:" method is available in the "},{type:b,tag:f,props:{href:"models\u002Ftelegraph-bot"},children:[{type:a,value:"TelegraphBot"}]},{type:a,value:" model:"}]},{type:a,value:e},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-php","line-numbers"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"$updates"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"="}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"$telegraphBot"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"-\u003E"}]},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"updates"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:")"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:";"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"the call will result in a collection of "},{type:b,tag:f,props:{href:"webhooks\u002Fdto#telegram-update"},children:[{type:b,tag:h,props:{},children:[{type:a,value:"DefStudio\\Telegraph\\DTO\\TelegramUpdate"}]}]},{type:a,value:" instances, one for each update, sorted by the oldest one."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It is advised to keep track of the  "},{type:b,tag:h,props:{},children:[{type:a,value:"TelegramUpdate::id()"}]},{type:a,value:" in order to avoid processing the same update multiple times."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The content of each update depends on the update type ("},{type:b,tag:f,props:{href:"webhooks\u002Fwebhook-request-types#chat-messages"},children:[{type:a,value:"Chat Message"}]},{type:a,value:" or "},{type:b,tag:f,props:{href:"webhooks\u002Fwebhook-request-types#callback-queries"},children:[{type:a,value:"Callback Query"}]},{type:a,value:") and on the specific message type. Refer to the "},{type:b,tag:f,props:{href:"wehbhooks\u002Fdto"},children:[{type:a,value:"DTO"}]},{type:a,value:" section for more details."}]}]},dir:"\u002Fen\u002Fwebhooks",path:"\u002Fen\u002Fwebhooks\u002Fmanual-polling",extension:".md",createdAt:n,updatedAt:n,to:"\u002Fwebhooks\u002Fmanual-polling"},prev:{title:"Interact With The Chat Keyboard",path:"\u002Fen\u002Fwebhooks\u002Fkeyboard-interaction",to:"\u002Fwebhooks\u002Fkeyboard-interaction"},next:{title:"Incoming Data",path:"\u002Fen\u002Fwebhooks\u002Fdto",to:"\u002Fwebhooks\u002Fdto"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","a","p","code","punctuation","alert","variable"," ","operator","2024-01-07T14:45:01.570Z")));