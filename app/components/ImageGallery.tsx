"use client";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity"


interface iAppprops {
    images: any;
}


export default function ImageGallery( {images}: iAppprops) {
    const [bigImage, setBigImage] = useState(images[0]);
    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    }
     
        return (
            <div className="grid gap-4 lg:grid-cols-5">
                <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                    {images.map((image: any, idx: any) => (
                        <div key={idx} className="overflow-hidden bg-gray-100">
                            {/* Passing image data directly to onClick handler */}
                            <ImageThumbnail image={image} onClick={handleSmallImageClick} />
                        </div>
                    ))}
                </div>
                <div className="relative overflow-hidden bg-gray-100 lg:col-span-4">
                    <Image
                        src={urlFor(bigImage).url()}
                        alt="logo"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center"
                    />
    
                    <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                        Sale !!!
                    </span>
                </div>
            </div>
        );
    }
    
    // New component to handle image thumbnail rendering
    function ImageThumbnail({ image, onClick }: { image: any, onClick: (image: any) => void }) {
        // Assuming 'urlFor' is a function that generates image URLs
        const imageUrl = urlFor(image).url();
    
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={imageUrl}
                alt="Thumbnail"
                width={200}
                height={200}
                onClick={() => onClick(image)} // Passing image data directly to onClick handler
                className="h-full w-full object-cover object-center cursor-pointer"
            />
        );
} 