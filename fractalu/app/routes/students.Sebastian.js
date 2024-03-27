"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./styles/students.Sebastian.css");
var IMG_1912_jpg_1 = require("./IMG_1912.jpg");
var SebastianPage = function () {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("h1", { className: "header" }, "Sebastian's personal page"),
        react_1.default.createElement("p", { className: "haiku" },
            "A vibrant petal ",
            react_1.default.createElement("br", null),
            "floats down the rivering stream ",
            react_1.default.createElement("br", null),
            "of my flowing thoughts"),
        react_1.default.createElement("img", { src: IMG_1912_jpg_1.default, alt: "Sebastian's Art", className: "artwork" }),
        react_1.default.createElement("a", { className: "instagram-link", href: "https://www.instagram.com/sebastianhodge/?hl=en", target: "_blank" }, "Check out my art!")));
};
exports.default = SebastianPage;
