"use client";

import Image from "next/image";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const coreSkills = ["Swift", "Objective-C", "iOS", "macOS", "tvOS", "watchOS"];
  const frameworkSkills = ["UIKit", "SwiftUI", "Core Data", "SwiftData", "Realm", "Combine", "Swift Concurrency", "async/await", "Actors", "GCD", "URLSession", "WebSockets", "SSE", "AVFoundation", "MapKit", "CoreLocation"];
  const architectureSkills = ["MVVM", "Clean Architecture", "MVC", "VIPER", "Modular Architecture", "Protocol-Oriented Programming", "Dependency Injection", "REST APIs", "Audio/Video Streaming"];
  const appleFrameworks = ["ARKit", "Core ML", "Vision Framework", "Natural Language", "Foundation Models", "WidgetKit", "App Intents", "Push Notifications", "In-App Purchases", "Apple Pay", "Deep Linking", "Accessibility", "VoiceOver", "Dynamic Type"];
  const toolsSkills = ["Xcode", "Git", "CI/CD", "Fastlane", "GitHub Actions", "CocoaPods", "SPM", "Firebase", "Figma", "TestFlight", "App Store Connect", "XCTest", "XCUITest", "Jira", "Agile", "Scrum"];
  const aiSkills = ["Cursor", "Claude Code", "GitHub Copilot", "Codex", "ChatGPT", "Gemma (Local LLMs)", "Prompt Engineering", "AI-Assisted Development", "AI Agents", "MCP Server", "On-Device ML", "Agentic Workflows"];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 w-full text-center sm:mb-0 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Profile Image and Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-12">

          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/portfolio/profile.jpg"
                alt="Shahebaz Shaikh"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-32 w-32 lg:h-40 lg:w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
              <span className="absolute bottom-0 right-0 text-4xl">
                👋
              </span>
            </div>
          </div>

          {/* Header Content */}
          <div className="flex-1 text-left">
            <h1 className="mb-4 text-2xl font-medium !leading-[1.5] sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="font-bold">Hello, I'm Shahebaz.</span>{" "}
              An experienced <span className="font-bold">iOS Developer</span> with over{" "}
              <span className="font-bold">9 years</span> of expertise in designing, developing, and delivering
              high-quality applications that drive results.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I build iOS apps that scale to millions of users — and actually stay stable.
              Worked across <span className="font-semibold">OTT, SaaS, Food-tech, and E-commerce</span>, building
              <span className="font-semibold"> 10+ products from scratch</span>, scaling SDKs to
              <span className="font-semibold"> 10M+ users</span> with <span className="font-semibold">99.99% crash-free</span> rates
              and <span className="font-semibold">500K+ DAU</span> at startups like
              <span className="font-semibold"> Pocket FM, Freshworks, Rebel Foods</span>, and <span className="font-semibold">MyGlamm</span>.
            </p>

            {/* What I Enjoy + Currently Exploring */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex-1">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">I enjoy solving:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="text-blue-500">-&gt;</span> AI-integrated mobile experiences</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">-&gt;</span> Scalable architecture</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">-&gt;</span> Real-time systems</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">-&gt;</span> Performance bottlenecks</li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Currently exploring:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="text-purple-500">-&gt;</span> AI Agents & Local LLMs</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">-&gt;</span> LLM integrations in iOS apps</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">-&gt;</span> MCP Server & Agentic workflows</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">-&gt;</span> Next-gen mobile architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Languages & Platforms */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                Languages & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Concurrency */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                Frameworks & Concurrency
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworkSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & Patterns */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                Architecture & Patterns
              </h3>
              <div className="flex flex-wrap gap-2">
                {architectureSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Apple Frameworks & APIs */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                Apple Frameworks & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {appleFrameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools, Testing & DevOps */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                Tools, Testing & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Modern Development */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                AI & Modern Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
