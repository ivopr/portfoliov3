import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &#x1f12f; {new Date().getFullYear()} Ivo Vieira.
      </small>
      <p className="text-xs">
        The horrors persist,{" "}
        <span className="font-semibold">but so do I</span>.
      </p>
    </footer>
  );
}
