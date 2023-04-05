import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const MINIAPP_ELEMENT_TAG = "miniapp-element-tag";

customElements.define(MINIAPP_ELEMENT_TAG, HTMLElement);
const element = document.createElement(MINIAPP_ELEMENT_TAG);

const appRootElement = document.getElementById("app-root") as HTMLElement;
const shadowDom = appRootElement.attachShadow({ mode: "open" });
shadowDom.appendChild(element);

const appElement = createRoot(
    shadowDom.querySelector(MINIAPP_ELEMENT_TAG) as HTMLElement,
);
appElement.render(<App />);
