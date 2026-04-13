import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {/* Built with AI Section */}
      <div className="max-w-2xl mx-auto mb-8 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg">🤖</span>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Built with AI-Assisted Development
          </h3>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          As an iOS developer with zero prior web development experience, I built this entire portfolio website
          end-to-end — from design to deployment — using AI-assisted development with Claude Code and Cursor.
          This demonstrates how modern engineers can leverage AI tools to ship production-quality products
          beyond their core domain, faster and with confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Claude Code", "Cursor", "Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "GitHub Pages"].map((tool, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <small className="mb-2 block text-xs">
        &copy; 2026 Shahebaz Shaikh. All rights reserved.
      </small>
    </footer>
  );
}
