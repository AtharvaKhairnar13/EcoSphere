import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import { HorizontalCard } from '../components/HorizontalCardPulse';
import { NavbarWithSearch } from '../components/PostNavbar';
import { useGetMyPostQuery } from "../features/api/apiSlices/postApiSlice";
import axios from 'axios';

export const EcoPulse = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [posts, setPosts] = useState([]); // Stores all posts
    const [filteredPosts, setFilteredPosts] = useState([]); // Stores either all posts or user-specific posts
    const [showMyPosts, setShowMyPosts] = useState(false); // Toggle between all posts and user-specific posts

    const token = localStorage.getItem("authToken"); // Assuming your token is stored here

    // Get user-specific posts using the API slice hook
    const { data: myPosts, isLoading: myPostsLoading, error: myPostsError } = useGetMyPostQuery();

    // Fetch all posts initially
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/posts/all', {
                    withCredentials: true, // Ensure cookies are sent
                });
                setPosts(response.data);
                setFilteredPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts: ", error);
            }
        };
        fetchPosts();
    }, []);

    // Function to toggle between all posts and my posts
    const handleTogglePosts = (showMyPosts) => {
        if (showMyPosts) {
            if (myPostsLoading) return; // Wait if myPosts data is still loading
            if (myPostsError) {
                console.error("Error fetching my posts: ", myPostsError);
                return;
            }
            setFilteredPosts(myPosts || []); // Set filtered posts to user-specific posts
        } else {
            setFilteredPosts(posts); // Set filtered posts back to all posts
        }
        setShowMyPosts(showMyPosts);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Dashboard actions */}
                        <div className="sm:flex sm:flex-col sm:justify-between sm:items-start mb-12">
                            {/* Left: Title */}
                            <div className="mb-4 sm:mb-6">
                                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                                    EcoPulse
                                </h1>
                            </div>

                            {/* Navbar */}
                            <NavbarWithSearch
                                onShowMyPosts={() => handleTogglePosts(true)} // Show user-specific posts
                                onShowAllPosts={() => handleTogglePosts(false)} // Show all posts
                            />
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {showMyPosts && myPostsLoading ? (
                                <div>Loading My Posts...</div>
                            ) : filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <div key={post._id} className="w-full">
                                        <HorizontalCard post={post} showDeleteButton={showMyPosts}/>
                                    </div>
                                ))
                            ) : (
                                <div>No posts to display.</div>
                            )}
                        </div>
                    </div>
                </main>

                <Banner />
            </div>
        </div>
    );
};
