import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import { useLikePostMutation ,  useDeletePostMutation } from "../features/api/apiSlices/postApiSlice";
import profileLogo from "../assets/profilelogo.png";
 // Import the useLikePostMutation hook
import { toast } from "react-toastify";
export function HorizontalCard({ post,showDeleteButton }) {
  const [isClicked, setIsClicked] = useState(false);
  const [likePost] = useLikePostMutation(); // Hook to trigger the like post mutation
  const [dateTime, setDateTime] = useState(new Date());
  
  const [likeCount,setLikeCount]=useState(post.likesCount);
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const [deletePost] = useDeletePostMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);  // Open the modal
  };
  const handleButtonClick = async () => {
    try {
      if (!isClicked) {
        // Liking the post
        await likePost({ postId: post._id, isLiked: true }).unwrap();
        setLikeCount(likeCount + 1); // Increase like count
      } else {
        // Disliking the post
        await likePost({ postId: post._id, isLiked: false }).unwrap();
        setLikeCount(likeCount - 1); // Decrease like count
      }
  
      setIsClicked(!isClicked); // Toggle like state after successful API call
    } catch (error) {
      console.error("Error liking/disliking post:", error);
    }
  };
  

  return (
    <div className="relative w-screen max-w-screen-xl">
  <Card className="relative w-full">
    <CardBody className="px-6 py-8 md:px-12 md:py-8">
      {/* Profile Image and Post Title */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 shrink-0 mr-3">
          {/* Placeholder for profile image */}
          <img
            className="rounded-full"
            src={post.user?.profileImage || profileLogo}
            width="40"
            height="40"
            alt="author"
          />
        </div>
        <Typography variant="h6" color="gray" className="uppercase">
          {post.user?.username || "Anonymous"}
        </Typography>
      </div>

      {/* Post Content */}
      <Typography color="gray" className="mb-8 font-normal">
        {post.content || "No content available."}
      </Typography>

      

      <div className="absolute top-4 right-8 flex space-x-6">
        {/* Like Button and Count */}
        <div className="flex flex-col items-center">
          <IconButton
            size="sm"
            variant="outlined"
            color={isClicked ? "red" : "gray"}
            onClick={handleButtonClick}
            className={`!rounded-full transition-colors ${
              isClicked ? "border-red-500" : "border-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
          <Typography variant="caption" color="gray">
            {likeCount} {likeCount === 1 ? "like" : "likes"}
          </Typography>
        </div>

        {/* Delete Button */}
        {showDeleteButton &&  (<div className="flex flex-col items-center">
          <IconButton
            size="sm"
            color="red"
            onClick={handleDelete} // Trigger delete action
            className="!p-0 transition-colors hover:bg-red-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M9 3a3 3 0 00-3 3v1H4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5H18V6a3 3 0 00-3-3H9zm1.5 3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V7h-4.5V6zM5.25 9.75a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v9a3 3 0 01-3 3H9a3 3 0 01-3-3v-9zm2.25.75v8.25c0 .414.336.75.75.75h6c.414 0 .75-.336.75-.75V10.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
          <Typography variant="caption" color="red">
            Delete
          </Typography>
        </div>)}
      </div>
    </CardBody>
  </Card>


  {/* Like and Delete Buttons */}
  

  {/* Date/Time Display */}
  <div className="absolute bottom-4 right-4 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded opacity-75">
    {post.date
      ? `${formatDistanceToNowStrict(new Date(post.date))} ago`
      : "Just now"}
  </div>
  {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure you want to delete this post?</h3>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}  // Close the modal
                className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    await deletePost(post._id).unwrap();
                    
                    window.location.reload();
                    setIsModalOpen(false);  // Close the modal after deletion
                  } catch (error) {
                    console.error("Error deleting post:", error);
                    alert("Failed to delete post. Please try again.");
                    setIsModalOpen(false);  // Close the modal on error
                  }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
</div>


  );
}
