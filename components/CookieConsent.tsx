"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem("sheriya-cookie-choice"));
  }, []);

  if (!visible) return null;

  const save = (choice: "essential" | "all") => {
    window.localStorage.setItem("sheriya-cookie-choice", choice);
    setVisible(false);
  };

  return (
    <aside className="cookie-consent" aria-label="Cookie consent">
      <p><strong>Your privacy matters.</strong> We use essential storage to remember this choice. Optional analytics should only be enabled after you accept them.</p>
      <div>
        <Link href="/cookie-policy">Cookie policy</Link>
        <button type="button" onClick={() => save("essential")}>Essential only</button>
        <button type="button" onClick={() => save("all")}>Accept all</button>
      </div>
    </aside>
  );
}
