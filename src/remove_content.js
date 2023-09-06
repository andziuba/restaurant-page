const removeContent = function() {
    const content = document.getElementById("content");

    while (content.children.length > 1) {
        content.removeChild(content.children[1]);
    }
}

export default removeContent;
