// Function to make the page more readable by removing non-text elements and adjusting the layout.
function readable_html() {
    // Remove non-text elements (audio, images, forms, etc.)
    document.querySelectorAll('audio, button, canvas, embed, footer, form, ' +
        'header, iframe, img, input, label, link, nav, object, option, ' +
        'script, select, style, svg, textarea, video').forEach(
            element => element.remove());

    // Remove attributes like class and style to simplify the elements.
    document.querySelectorAll('[class], [style]').forEach(element => {
        element.removeAttribute('class');
        element.removeAttribute('style');
    });

    // Replace <span> elements with their text content.
    document.querySelectorAll('span').forEach(element => {
        const parent = element.parentNode;
        const textNode = document.createTextNode(element.textContent);
        parent.replaceChild(textNode, element);
    });

    // Adjust body styling for better readability.
    document.body.style.maxWidth = "60em";
    document.body.style.margin = "0 auto";
    document.body.style.padding = "0.5em";
}

// Add keydown event listener for triggering the function with the F8 key.
document.addEventListener("keydown", function (event) {
    if (event.code === "F8")
        readable_html();
});