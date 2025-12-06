"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  useEffect(() => {
    // 1. If counter hits 0, redirect immediately
    if (counter === 0) {
      router.push("/");
      return;
    }

    // 2. Otherwise, wait 1 second and decrease the counter
    const timer = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    // 3. Cleanup the timer if the user leaves the page before it finishes
    return () => clearTimeout(timer);
  }, [counter, router]); // Dependency on 'counter' ensures the loop keeps running

  return (
    <div className="container">
      <main className="main-content">
        <h1
          style={{ fontSize: "3rem", marginBottom: "10px", color: "#00a9c3" }}
        >
          404
        </h1>

        <h2>Page Not Found</h2>

        <p style={{ marginTop: "20px", fontSize: "1.1em" }}>
          You will be redirected to the home page in <strong>{counter}</strong>{" "}
          seconds.
        </p>

        {/* Manual button for better UX */}
        <Link
          href="/"
          className="play-pause-btn"
          style={{
            width: "auto",
            padding: "0 30px",
            borderRadius: "30px",
            marginTop: "30px",
            textDecoration: "none",
          }}
        >
          Go Home Now
        </Link>
      </main>
    </div>
  );
}
