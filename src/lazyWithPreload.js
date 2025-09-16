import { lazy } from "react";

export function lazyWithPreload(factory) {
  let _modulePromise = null;

  // This "load" function either reuses or creates the same promise
  const load = () => {
    if (!_modulePromise) _modulePromise = factory(); // only call once
    return _modulePromise;
  };

  const Component = lazy(load); // use load as lazy factory
  Component.preload = load; // attach so we can preload from outside
  return Component;
}
