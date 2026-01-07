import React, { type ErrorInfo } from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./app/app";
import { Toaster } from "@project-ed/lib/ui";
import styles from "./styles.css?inline";

const RootComponent = () => (
  <>
    <App />
    <Toaster />
  </>
);

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: RootComponent,
  domElementGetter: () => {
    const element = document.getElementById("dashboard-content");
    if (!element) {
      throw new Error("Could not find dashboard-content element for dashboard");
    }
    return element;
  },
  errorBoundary(error: Error, info: ErrorInfo) {
    console.error("dashboard Error:", error, info);
    return <div>Error loading dashboard.</div>;
  },
});

// Create style element for CSS lifecycle management
const styleElement = document.createElement("style");
styleElement.textContent = styles;

export const bootstrap = lifecycles.bootstrap;

export const mount = [
  async () => {
    document.head.appendChild(styleElement);
  },
  lifecycles.mount,
];

export const unmount = [
  lifecycles.unmount,
  async () => {
    styleElement.remove();
  },
];
