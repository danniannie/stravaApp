import { Link } from "@reach/router";
import React from "react";

export const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="www.google.com" className="flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            ></img>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>

            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-10">
            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <Link to="/Dashboard">Dashboard</Link>
              </button>
            </div>
            <a
              href="localhost:3000/dashboard"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="www.google.com"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Docs
            </a>

            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>More</span>
              </button>

              <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"></div>
            </div>
          </nav>
          <div className="flex items-center md:ml-12">
            <Link
              to="/"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                ></img>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </a>

              <a
                href="www.google.com"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
