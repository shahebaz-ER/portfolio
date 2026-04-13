import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

type OpenSourceProject = {
  title: string;
  description: string;
  platform: string;
  techStack?: readonly string[];
  repoUrl: string;
  liveUrl?: string;
  relatedRepos?: readonly string[];
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - II",
    location: "Pocket FM, Bengaluru, India",
    description:
      "Architected and built Pocket TV iOS app independently from scratch using Swift, UIKit, and MVVM Clean Architecture, delivered in 3 months with 260K+ installs, 99.94% crash-free rate, and 12K DAU. Maintained Pocket FM iOS app at 99.98% crash-free rate with 2M+ installs and 150K DAU for India's leading audio series streaming platform. Shipped AI-powered Character Chatbot feature using on-device intelligence, built Discover vertical swipe short videos (Instagram Reels-like experience) with AVFoundation and custom video player, and led Stripe payments revamp increasing subscription conversion by improving checkout UX. Redesigned Core Data persistence layer to eliminate UI hangs and reduce main-thread blocking, improving app smoothness by 20%. Implemented real-time audio/video streaming with adaptive bitrate, background playback, and offline download capabilities using URLSession and AVFoundation.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Present",
  },
  {
    title: "Software Engineer - II",
    location: "Freshworks, Chennai, India",
    description:
      "Part of the core iOS team at a global SaaS company. Developed and maintained mobile SDKs and apps including FreshchatSDK, Freshchat, and Freshdesk, serving 10M+ users globally with 500K+ DAU. Architected FreshworksSDK, a next-gen SwiftUI-based messaging SDK with Combine and Swift Concurrency (async/await, actors), designed for seamless integration across the Freshworks product suite. Owned end-to-end release management via TestFlight and App Store Connect, maintaining a 2-week release cadence with zero rollback incidents. Built real-time messaging infrastructure using WebSockets, SSE, and Polling for enterprise clients, achieving sub-200ms message delivery. Implemented push notifications, in-app messaging, and deep linking for cross-functional customer engagement. Led code reviews, mentored 2 junior developers, and established CI/CD pipelines using Fastlane and GitHub Actions, reducing release cycle time by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Nov 2024",
  },
  {
    title: "Software Engineer - I",
    location: "Rebel Foods (Faasos), Mumbai, India",
    description:
      "Built and launched EatSure iOS app from scratch with the core team using Swift, UIKit, and MVVM architecture, leading architecture decisions for a multi-brand food delivery platform that scaled to 2M+ downloads and 50K DAU with 99.5% crash-free rate. Independently built the Slay Coffee iOS app from zero to App Store in 3 months with real-time tracking and in-app purchases using Combine and modern Networking layer with URLSession. Maintained Behrouz Biryani (180K+ users) and Oven Story Pizza (115K+ users), implementing real-time order tracking with MapKit and CoreLocation, payment integration with Razorpay and Apple Pay, and push notification-driven re-engagement that improved user retention by 15%. Achieved 30% fewer bug reports through comprehensive unit testing with XCTest and UI testing with XCUITest across all food delivery apps. Implemented protocol-oriented networking layer and dependency injection patterns, enabling code reuse across 4 food brand apps.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Feb 2022",
  },
  {
    title: "Software Engineer",
    location: "MyGlamm (Good Glamm Group), Mumbai, India",
    description:
      "Built the MyGlamm iOS e-commerce app and a home salon appointment app from scratch using Swift and UIKit, scaling to 1.6M+ users on the App Store. Implemented end-to-end e-commerce features including product catalog, shopping cart, payment gateway integration, order tracking, and push notifications. Collaborated with cross-functional teams including design, backend, and product management.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2018 - Dec 2018",
  },
  {
    title: "Intern",
    location: "Bridgelabz LLP, Pune, India",
    description:
      "Completed intensive training program in iOS development covering Swift, Objective-C, UIKit, MVC architecture, Core Data, RESTful APIs, and Git version control. Gained foundation in software engineering best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2017 - Dec 2017",
  },
  {
    title: "Bachelor of Engineering (CSE)",
    location: "DPCOE, Pune, Maharashtra, India",
    description:
      "Major in Computer Science & Engineering. Built strong foundation in Data Structures, Algorithms, Operating Systems, Database Management, and Object-Oriented Programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2016",
  },
  {
    title: "Diploma in Computer Science & Engineering",
    location: "MGM's Polytechnic, Maharashtra, India",
    description:
      "Diploma in Computer Science & Engineering. Built foundational knowledge in programming, computer networks, and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2013",
  },
] as const;

export const projectsData = [
  {
    title: "Pocket TV",
    description:
      "Short drama OTT streaming app built independently from scratch and delivered in 3 months. 260K+ installs, 99.94% crash-free, 12K DAU. Features AI Chatbot, Reels-like video discovery, and Stripe payments.",
    tags: ["Swift", "UIKit", "MVVM", "AVFoundation", "Core Data", "Stripe"],
    url: "https://apps.apple.com/in/app/pocket-tv-short-drama/id6749058264",
    company: "Pocket FM",
    years: "2024 - Present",
    projectType: "Native",
    industry: "Entertainment / OTT",
    downloads: "260K+",
  },
  {
    title: "Pocket FM",
    description:
      "India's leading audio series streaming platform. 2M+ installs, 99.98% crash-free, 150K DAU. Real-time audio streaming with offline downloads and background playback.",
    tags: ["Swift", "AVFoundation", "URLSession", "Core Data", "Push Notifications"],
    url: "https://apps.apple.com/in/app/pocket-fm-audio-series/id1538433480",
    company: "Pocket FM",
    years: "2024 - Present",
    projectType: "Native",
    industry: "Audio Streaming",
    downloads: "2M+",
  },
  {
    title: "FreshchatSDK",
    description:
      "Enterprise customer support messaging SDK used by 10M+ end users globally with 500K+ DAU. WebSocket-based real-time messaging with sub-200ms delivery.",
    tags: ["Swift", "Objective-C", "WebSockets", "SSE", "CocoaPods", "SPM"],
    url: "https://github.com/freshworks/freshchat-ios",
    company: "Freshworks",
    years: "2022 - 2024",
    projectType: "SDK",
    industry: "SaaS / Enterprise",
    downloads: "10M+",
  },
  {
    title: "FreshworksSDK",
    description:
      "Next-gen SwiftUI-based customer support messaging SDK built with Combine and Swift Concurrency (async/await). Designed for seamless integration across the Freshworks product suite.",
    tags: ["SwiftUI", "Combine", "Swift Concurrency", "SPM", "Modular Architecture"],
    url: "https://github.com/freshworks-oss/freshdesk-ios-sdk",
    company: "Freshworks",
    years: "2022 - 2024",
    projectType: "SDK",
    industry: "SaaS / Enterprise",
    downloads: "-",
  },
  {
    title: "Freshchat",
    description:
      "Enterprise customer messaging app with real-time chat, push notifications, in-app messaging, and deep linking for customer engagement.",
    tags: ["Swift", "WebSockets", "Push Notifications", "Deep Linking"],
    url: "https://apps.apple.com/in/app/freshchat/id1273666080",
    company: "Freshworks",
    years: "2022 - 2024",
    projectType: "Native",
    industry: "SaaS / Messaging",
    downloads: "100K+",
  },
  {
    title: "Freshdesk",
    description:
      "Enterprise-grade helpdesk app. Owned release management via TestFlight and App Store Connect with 2-week release cadence and zero rollbacks.",
    tags: ["Swift", "UIKit", "TestFlight", "App Store Connect", "CI/CD"],
    url: "https://apps.apple.com/in/app/freshdesk/id849713306",
    company: "Freshworks",
    years: "2022 - 2024",
    projectType: "Native",
    industry: "SaaS / Support",
    downloads: "100K+",
  },
  {
    title: "EatSure",
    description:
      "Multi-brand food delivery platform built from scratch. 2M+ downloads, 50K DAU, 99.5% crash-free. Led architecture with MVVM, MapKit, and payment integration.",
    tags: ["Swift", "UIKit", "MVVM", "MapKit", "CoreLocation", "Razorpay"],
    url: "https://apps.apple.com/in/app/eatsure-food-delivery/id808796222",
    company: "Rebel Foods",
    years: "2019 - 2022",
    projectType: "Native",
    industry: "Food Delivery",
    downloads: "2M+",
  },
  {
    title: "Slay Coffee",
    description:
      "Independently built from zero to App Store in 3 months. Coffee ordering with real-time tracking and in-app purchases.",
    tags: ["Swift", "Combine", "URLSession", "MapKit", "CoreLocation", "In-App Purchases"],
    url: "#",
    company: "Rebel Foods",
    years: "2021 - 2022",
    projectType: "Native",
    industry: "Food & Beverage",
    downloads: "10K+",
  },
  {
    title: "Behrouz Biryani",
    description:
      "Food ordering app with 180K+ users. Real-time order tracking, Apple Pay, push notification re-engagement improving retention by 15%.",
    tags: ["Swift", "MapKit", "Apple Pay", "Push Notifications", "XCTest"],
    url: "https://apps.apple.com/in/app/behrouz-the-royal-biryani/id1201218769",
    company: "Rebel Foods",
    years: "2019 - 2022",
    projectType: "Native",
    industry: "Food Delivery",
    downloads: "180K+",
  },
  {
    title: "Oven Story Pizza",
    description:
      "Food ordering app with 115K+ users. Shared protocol-oriented networking layer enabling code reuse across 4 brand apps.",
    tags: ["Swift", "Protocol-Oriented", "Dependency Injection", "XCUITest"],
    url: "https://apps.apple.com/in/app/oven-story-pizza-order-online/id1245163201",
    company: "Rebel Foods",
    years: "2019 - 2022",
    projectType: "Native",
    industry: "Food Delivery",
    downloads: "115K+",
  },
  {
    title: "MyGlamm",
    description:
      "E-commerce beauty app and home salon appointment app built from scratch. Scaled to 1.6M+ users on the App Store.",
    tags: ["Swift", "UIKit", "E-commerce", "Payments", "Push Notifications"],
    url: "https://apps.apple.com/in/app/myglamm-beauty-shopping-app/id1282962703",
    company: "MyGlamm",
    years: "2018",
    projectType: "Native",
    industry: "E-commerce / Beauty",
    downloads: "1.6M+",
  },
] as const;

export const openSourceProjectsData: readonly OpenSourceProject[] = [];

export const skillsData = [
  "Swift",
  "Objective-C",
  "iOS",
  "macOS",
  "tvOS",
  "watchOS",
  "UIKit",
  "SwiftUI",
  "Core Data",
  "Realm",
  "SwiftData",
  "MVVM",
  "Clean Architecture",
  "MVC",
  "VIPER",
  "Modular Architecture",
  "Protocol-Oriented Programming",
  "Dependency Injection",
  "REST APIs",
  "URLSession",
  "WebSockets",
  "SSE",
  "Audio/Video Streaming",
  "AVFoundation",
  "GCD",
  "Combine",
  "Swift Concurrency",
  "async/await",
  "Actors",
  "MapKit",
  "CoreLocation",
  "ARKit",
  "Core ML",
  "Vision Framework",
  "Natural Language",
  "Foundation Models",
  "Push Notifications",
  "In-App Purchases",
  "Apple Pay",
  "Deep Linking",
  "WidgetKit",
  "App Intents",
  "Accessibility",
  "VoiceOver",
  "Dynamic Type",
  "TestFlight",
  "App Store Connect",
  "Xcode",
  "Git",
  "CI/CD",
  "Fastlane",
  "GitHub Actions",
  "CocoaPods",
  "SPM",
  "Firebase",
  "XCTest",
  "XCUITest",
  "Jira",
  "Figma",
  "Agile",
  "Scrum",
  "Cursor",
  "Claude Code",
  "GitHub Copilot",
  "Codex",
  "ChatGPT",
  "Gemma (Local LLMs)",
  "Prompt Engineering",
  "AI-Assisted Development",
  "AI Agents",
  "MCP Server",
  "On-Device ML",
  "Agentic Workflows",
] as const;
