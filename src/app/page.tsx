"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Code, Server, CheckCircle } from "react-feather";

export default function NextJSHome() {
  const [count, setCount] = useState(0);
  const [activeModule, setActiveModule] = useState("fundamentals");

  const modules = [
    {
      id: "fundamentals",
      title: "Next.js Fundamentals",
      icon: <BookOpen size={20} className="filter drop-shadow-[0_0_2px_#93c5fd]" />,
      description: "Navigate Next.js routing and rendering like a cosmic journey",
    },
    {
      id: "data-fetching",
      title: "Data Fetching",
      icon: <Server size={20} className="filter drop-shadow-[0_0_2px_#93c5fd]" />,
      description: "Explore SSR, SSG, ISR, and API routes across the galaxy",
    },
    {
      id: "styling",
      title: "Styling",
      icon: <Code size={20} className="filter drop-shadow-[0_0_2px_#93c5fd]" />,
      description: "Design with CSS Modules, Tailwind, and CSS-in-JS in orbit",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900 bg-[url('/path-to-starry-pattern.png')] bg-repeat-round">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-500/20 rounded-full">
            <span className="text-sm font-medium">Explore Next.js 15.3.4</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Launch Modern Web Apps
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Interactive platform to master Next.js concepts through stellar examples
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Learning Modules */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeModule === module.id
                  ? "bg-white shadow-2xl border-2 border-indigo-500 animate-pulse"
                  : "bg-white shadow-md hover:shadow-2xl"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-200">
                  {module.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
              {activeModule === module.id && (
                <div className="mt-6 flex items-center text-sm text-green-500">
                  <CheckCircle size={16} className="mr-2" />
                  <span>Mission Active</span>
                </div>
              )}
            </div>
          ))}
        </div>

      
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-200 mb-6">
            Ready to explore the universe?
          </h3>
          <Link
            href="/photos"
            className="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-2xl shadow-md transition-colors hover:shadow-lg"
          >
            Start Cosmic Journey
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-purple-950 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-indigo-100">
          <p>© {new Date().getFullYear()} Next.js Cosmic Platform</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/about" className="hover:text-indigo-300">
              About
            </Link>
            <Link href="/resources" className="hover:text-indigo-300">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-indigo-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}