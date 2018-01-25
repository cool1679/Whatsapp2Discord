try {
    observer.disconnect()
} catch (err) { }

parentNode = document.getElementsByClassName("_9tCEa")[0];
observer = new MutationObserver(onMsg);
observer.observe(parentNode, { childList: true });


function onMsg(e) {
    let msgNode = e[0].addedNodes[0];
    if (msgNode == undefined) {return};
    //if (msgNode.getElementsByClassName("message-in")[0] == undefined) { return } //Check to see if the message was sent my the client
    let textNodes = msgNode.getElementsByClassName("emojitext")[0];
    //nodeListToMarkdown(textNodes.childNodes);

    console.log(textNodes);
    document.lastValue = textNodes;

};

/*function htmlToMarkdown(nodeList) {
    
    [];
    .textContent
    .nodeName
}*/
