console.log("Background Service Worker Loaded");chrome.runtime.onInstalled.addListener(async()=>{console.log("Extension installed")});chrome.action.setBadgeText({text:"ON"});chrome.action.onClicked.addListener(()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{const o=e[0];chrome.tabs.sendMessage(o.id,{message:"clicked_browser_action"})})});chrome.runtime.onMessage.addListener((e,o,r)=>{const{command:n}=e;switch(n){case"hello-world":console.log("Hello World, from the Background Service Worker"),r({success:!0,message:"Hello World"});break}});chrome.commands.onCommand.addListener(e=>{console.log(`Command: ${e}`),e==="refresh_extension"&&chrome.runtime.reload()});