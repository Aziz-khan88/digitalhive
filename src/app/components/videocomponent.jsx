
"use client";
import { useEffect, useState } from "react";
import BannerPoster from "media/home/bannerPoster.webp"

const VideoComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <video
            autoPlay
            muted
            loop
            preload="auto"
            aria-label="Background video"
            className="bannerVideo"
            loading="eager"
            poster={BannerPoster.src}
        >
            <source src={`/videos/BannerVideo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default VideoComponent