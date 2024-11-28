import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  variant = 'default',
}) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-60 lg:w-20 lg:sidebar-expanded:!w-60 2xl:!w-60 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} ${variant === 'v2' ? 'border-r border-gray-200 dark:border-gray-700/60' : 'rounded-r-2xl shadow-sm'}`}
      >



        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink
            end
            to="/"
            className="flex items-center space-x-2"
          >
            {/* <svg
              className="fill-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
            >
              <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
            </svg> */}
            <svg
              className="fill-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0 0 512 512"
            >
              <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />
            </svg>

            <div></div>
            <div></div>
            <h1 className="text-xl font-medium text-black">EcoSphere</h1>
          </NavLink>

        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Dashboard</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === "/" || pathname.includes("dashboard")}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      to="/dashboard" 
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname === "/" || pathname.includes("dashboard")
                          ? ""
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick();
                        setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className={`shrink-0 fill-current ${
                              pathname === "/" || pathname.includes("dashboard")
                                ? "text-green-500"
                                : "text-gray-400 dark:text-gray-500"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="25"
                            height="25"
                          >
                            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                          </svg>
                          <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            EcoStats
                          </span>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              <SidebarLinkGroup activecondition={pathname.includes("/eco-tracker/home") || pathname.includes("/eco-tracker/waste")
                || pathname.includes("/eco-tracker/food") || pathname.includes("/eco-tracker/transport") 
                || pathname.includes("/eco-tracker/energy") || pathname.includes("/eco-tracker/water") 
                || pathname.includes("/eco-tracker/product") || pathname.includes("/eco-tracker/digital")
              }>
                {(handleClick, open) => (
                      <React.Fragment>
                      <Link
                      to="/dashboard/eco-tracker/home" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-tracker/home")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('tasks') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M7.586 9H1a1 1 0 1 1 0-2h6.586L6.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L7.586 9ZM3.075 4.572a1 1 0 1 1-1.64-1.144 8 8 0 1 1 0 9.144 1 1 0 0 1 1.64-1.144 6 6 0 1 0 0-6.856Z" />
                            </svg> */}
                            <svg 
                            className={`shrink-0 fill-current 
                            ${pathname.includes("/eco-tracker/home") || pathname.includes("/eco-tracker/waste")
                              || pathname.includes("/eco-tracker/food") || pathname.includes("/eco-tracker/transport") 
                              || pathname.includes("/eco-tracker/energy") || pathname.includes("/eco-tracker/water") 
                              || pathname.includes("/eco-tracker/product") || pathname.includes("/eco-tracker/digital") ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} 
                            xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 512 512">
                              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoTracker
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  )}
              </SidebarLinkGroup>

            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Education</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname.includes("/eco-learn")}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      to="/dashboard/eco-learn" // Use `to` for routing
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-learn")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className={`shrink-0 fill-current ${
                              pathname.includes("/eco-learn")
                                ? "text-green-500"
                                : "text-gray-400 dark:text-gray-500"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 512 512"
                          >
                            <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z" />
                          </svg>
                          <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            EcoLearn
                          </span>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>



              <SidebarLinkGroup activecondition={pathname.includes("/eco-lab")}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <Link
                      to="/dashboard/eco-lab" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-lab")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className={`shrink-0 fill-current ${
                              pathname.includes("/eco-lab")
                                ? "text-green-500"
                                : "text-gray-400 dark:text-gray-500"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 640 512"
                          >
                            <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                          </svg>

                          <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            EcoLab
                          </span>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>

              <SidebarLinkGroup activecondition={pathname.includes("/eco-games")}>
                {(handleClick, open) => (
                    <React.Fragment>
                      <Link
                      to="/dashboard/eco-games" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-games")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* SVG Icon for EcoGames */}
                            <svg
                              className={`shrink-0 fill-current ${
                              pathname.includes("/eco-games") ? "text-green-500" : "text-gray-400 dark:text-gray-500"}`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 640 512"
                            >
                              <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"/>
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoGames
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                )}
              </SidebarLinkGroup>

            </ul>
          </div>

          {/* Opinions */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Opinions</span>
            </h3>
            <ul className="mt-3">
              <SidebarLinkGroup activecondition={pathname.includes("eco-pulse")}>
              {(handleClick, open) => (
                    <React.Fragment>
                      <Link
                      to="/dashboard/eco-pulse" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-pulse")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('finance') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M6 0a6 6 0 0 0-6 6c0 1.077.304 2.062.78 2.912a1 1 0 1 0 1.745-.976A3.945 3.945 0 0 1 2 6a4 4 0 0 1 4-4c.693 0 1.344.194 1.936.525A1 1 0 1 0 8.912.779 5.944 5.944 0 0 0 6 0Z" />
                              <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
                            </svg> */}
                            <svg 
                              className={`shrink-0 fill-current ${pathname.includes('/eco-pulse') ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="25" 
                              height="25" 
                              viewBox="0 0 640 512"
                            >
                              <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/>
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoPulse
                            </span>
                          </div>
                          
                        </div>
                      </Link>
                    </React.Fragment>
                  )
                }
              </SidebarLinkGroup>
              {/* Job Board */}
              <SidebarLinkGroup activecondition={pathname.includes("/eco-engage")}>
                {(handleClick, open) => (
                    <React.Fragment>
                    <Link
                    to="/dasboard/eco-engage" // Use `to` for routing to the EcoLab page
                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                      pathname.includes("/eco-engage")
                        ? "text-black-500"
                        : "hover:text-gray-900 dark:hover:text-white"
                    }`}
                    onClick={(e) => {
                      handleClick(); // Toggle the sidebar group
                      setSidebarExpanded(true); // Expand the sidebar
                    }}
                  >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('job') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M6.753 2.659a1 1 0 0 0-1.506-1.317L2.451 4.537l-.744-.744A1 1 0 1 0 .293 5.207l1.5 1.5a1 1 0 0 0 1.46-.048l3.5-4ZM6.753 10.659a1 1 0 1 0-1.506-1.317l-2.796 3.195-.744-.744a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.46-.049l3.5-4ZM8 4.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 11.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" />
                            </svg> */}
                            <svg className={`shrink-0 fill-current ${pathname.includes('/eco-engage') ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg " 
                              width="25" 
                              height="25"  
                              viewBox="0 0 640 512">
                              <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoEngage
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  )}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
            </h3>
            <ul className="mt-3">
              <SidebarLinkGroup activecondition={pathname.includes("eco-bot")}>
                {(handleClick, open) => (
                      <React.Fragment>
                      <Link
                      to="/dashboard/eco-bot" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-bot")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('tasks') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M7.586 9H1a1 1 0 1 1 0-2h6.586L6.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L7.586 9ZM3.075 4.572a1 1 0 1 1-1.64-1.144 8 8 0 1 1 0 9.144 1 1 0 0 1 1.64-1.144 6 6 0 1 0 0-6.856Z" />
                            </svg> */}
                            <svg className={`shrink-0 fill-current ${pathname.includes('/eco-bot') ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 640 512">
                              <path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z" />
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoBot
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  )}
              </SidebarLinkGroup>
              
              <SidebarLinkGroup activecondition={pathname.includes("eco-policy")}>
                {(handleClick, open) => (
                      <React.Fragment>
                      <Link
                      to="/dashboard/eco-policy" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-policy")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('tasks') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M7.586 9H1a1 1 0 1 1 0-2h6.586L6.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L7.586 9ZM3.075 4.572a1 1 0 1 1-1.64-1.144 8 8 0 1 1 0 9.144 1 1 0 0 1 1.64-1.144 6 6 0 1 0 0-6.856Z" />
                            </svg> */}
                            <svg className={`shrink-0 fill-current ${pathname.includes('/eco-policy') ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                              <path d="M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" />
                            </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoPolicy
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  )}
              </SidebarLinkGroup>

              <SidebarLinkGroup activecondition={pathname.includes("/dashboard/eco-guide")}>
                {(handleClick, open) => (
                      <React.Fragment>
                      <Link
                      to="/dashboard/eco-guide" // Use `to` for routing to the EcoLab page
                      className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                        pathname.includes("/eco-guide")
                          ? "text-black-500"
                          : "hover:text-gray-900 dark:hover:text-white"
                      }`}
                      onClick={(e) => {
                        handleClick(); // Toggle the sidebar group
                        setSidebarExpanded(true); // Expand the sidebar
                      }}
                    >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg className={`shrink-0 fill-current ${pathname.includes('tasks') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M7.586 9H1a1 1 0 1 1 0-2h6.586L6.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L7.586 9ZM3.075 4.572a1 1 0 1 1-1.64-1.144 8 8 0 1 1 0 9.144 1 1 0 0 1 1.64-1.144 6 6 0 1 0 0-6.856Z" />
                            </svg> */}
                            <svg className={`shrink-0 fill-current ${pathname.includes('/dashboard/eco-guide') ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
                    <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>

                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              EcoGuide
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  )}
              </SidebarLinkGroup>
              
            
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes("settings")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("settings") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className={`shrink-0 fill-current ${pathname.includes('settings') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" fillRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Account
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Notifications
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Connected Apps
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Plans
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Billing & Invoices
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="https://cruip.com/mosaic/"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Give Feedback
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>
        <div>
          <div className="pb-20">
              <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
            </button>
          </div>
        </div>

          </div>
        </div>
        {/* Expand / collapse button */}

      </div>
    </div>
  );
}

export default Sidebar;