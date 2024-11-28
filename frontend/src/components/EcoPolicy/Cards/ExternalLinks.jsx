import React from "react";

// Define the default links data
const defaultLinksData = [
  {
    title: "Government Portal Link 1",
    description: "Description of the link and what it leads to.",
    url: "#",
  },
  {
    title: "Government Portal Link 2",
    description: "Description of the link and what it leads to.",
    url: "#",
  },
  {
    title: "Government Portal Link 3",
    description: "Description of the link and what it leads to.",
    url: "#",
  },
  {
    title: "Government Portal Link 4",
    description: "More information about government programs and services.",
    url: "#",
  },
];

// Component that accepts `linksData` with default value
export default function ExternalLinksSection({ linksData = defaultLinksData }) {
  return (
    <section className="mt-6 bg-gradient-to-r from-white to-blue-50 p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        External Government Links
      </h2>

      <ul className="space-y-4">
        {linksData.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-white shadow-md hover:bg-green-400 hover:text-white transition duration-300 ease-in-out"
            >
              <span className="text-lg font-medium">{link.title}</span>
              <p className="text-sm text-gray-500">{link.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
