const sanitizeHtml = require("sanitize-html");

// Allowlist for author-supplied rich text (descriptions, instructions, etc.).
// Permits common formatting/markup that the WYSIWYG editor produces; strips
// scripts, event handlers, javascript: URLs, iframes, embeds, etc.
const RICH_TEXT_OPTIONS = {
    "allowedTags": [
        "p", "br", "hr", "div", "span",
        "h1", "h2", "h3", "h4", "h5", "h6",
        "b", "i", "u", "s", "strong", "em", "small", "sub", "sup", "mark",
        "ul", "ol", "li", "dl", "dt", "dd",
        "blockquote", "pre", "code", "iframe", "embed",
        "a", "img",
        "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption", "colgroup", "col",
        "figure", "figcaption"
    ],
    "allowedAttributes": {
        "a": ["href", "title", "target", "rel"],
        "img": ["src", "alt", "title", "width", "height"],
        "*": ["style", "class"],
        "iframe": ["src", "title", "width", "height", "frameborder", "allow", "allowfullscreen"],
        "embed": ["src", "type", "width", "height", "allow", "allowfullscreen"]
    },
    "allowedSchemes": ["http", "https", "mailto", "tel"],
    "allowedSchemesByTag": {"img": ["http", "https", "data"]},
    "allowProtocolRelative": false,
    "allowedStyles": {
        "*": {
            "color": [/^.*$/],
            "background-color": [/^.*$/],
            "text-align": [/^(left|right|center|justify)$/],
            "font-size": [/^\d+(\.\d+)?(px|em|rem|%)$/],
            "font-weight": [/^(bold|normal|\d{3})$/],
            "font-style": [/^(italic|normal|oblique)$/],
            "text-decoration": [/^.*$/]
        }
    },
    "transformTags": {
        // Force safer link defaults (merge = true preserves href/title/target)
        "a": sanitizeHtml.simpleTransform("a", {"rel": "noopener noreferrer"}, true)
    }
};

exports.sanitizeRichText = function (input) {
    if (input === null || input === undefined) {
        return input;
    }
    return sanitizeHtml(String(input), RICH_TEXT_OPTIONS);
};
