"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("~/styles/students.Sebastian.css");
var react_1 = require("react");
var MyComponent = function () {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", null,
            react_1.default.createElement("br", null),
            "\"A vibrant petal,",
            react_1.default.createElement("br", null),
            "floats down the rivering stream",
            react_1.default.createElement("br", null),
            "of my flowing thoughts\""),
        react_1.default.createElement("div", { className: "name" },
            react_1.default.createElement("b", null, "Sebastian")),
        react_1.default.createElement("a", { href: "https://www.instagram.com/sebastianhodge/?hl=en", target: "_blank" }, "Check out my art"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("img", { src: "IMG_1912.jpg" }));
};
exports.default = MyComponent;
