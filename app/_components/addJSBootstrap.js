"use client";

import { useEffect } from "react";

export default function AddJSBootstrap() {
  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return <div></div>;
}
