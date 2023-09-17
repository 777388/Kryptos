chrome.contextMenus.create({
    id: "Kryptos",
    title: "Kryptos",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Kryptos") {
        
        blurry = [];
        for (var sense = 0; sense <= 63; sense++) {
            let badabing = info.selectionText[sense % info.selectionText.length];
            blurry.push(badabing.split("", badabing.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        mindless = [];
        for (var alert = 0; alert <= 387; alert++) {
            let badaboom = info.selectionText[alert % info.selectionText.length];
            mindless.push(badaboom.split("", badaboom.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        loveless = [];
        for (var balls = 0; balls <= 341; balls++){
            let bingbong = info.selectionText[balls % info.selectionText.length];
            loveless.push(bingbong.split("", bingbong.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        soulless = [];
        for (var sol = 0; sol <= 97; sol++) {
            let bahoot = info.selectionText[sol % info.selectionText.length];
            soulless.push(bahoot.split("", bahoot.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        k = [blurry.join(""), mindless.join(""),  loveless.join(""), soulless.join("")];
        
        const selectedText = info.selectionText.split(" ", info.selectionText.length);
        const test = (arr) => {
            for (let bin = 0; bin <= selectedText.length; bin++) {
                if (bin % 2 === 0){
                    selectedText[bin] += arr;
                } else {
                    selectedText[bin-1] += arr;
                };
            };
            return selectedText.join("");
        };
        const relief = test(k);
        const badum = [];
        for (let bee = 0; bee <= relief.length; bee++) {
            let itbee = relief[bee % relief.length];
            badum.push(itbee.split("", itbee.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        let reliefs = badum.join("");
        chrome.tabs.create({ url: `data:text/plain,${reliefs}`});
    };
});