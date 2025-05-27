import React, { useEffect, useState } from "react";
import { incrementViewCount } from "../firebase";

export const ViewCounter: React.FC = () => {
  const [views, setViews] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const viewCount = await incrementViewCount();
        setViews(viewCount);
      } catch (error) {
        console.error("Error fetching view count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  if (isLoading) {
    return (
      <span className="text-sm text-gray-600 dark:text-gray-400">
        <span className="animate-pulse">Loading...</span>
      </span>
    );
  }

  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      <span className="font-medium">Views:</span> {views.toLocaleString()}
    </div>
  );
};
