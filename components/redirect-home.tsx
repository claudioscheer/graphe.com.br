"use client";

import { useEffect } from "react";

export function RedirectHome() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return null;
}
