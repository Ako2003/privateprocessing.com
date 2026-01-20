"use client";

import { useState, useRef } from "react";
import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
    { image: "bronze.png", color: "Bronze", price: "1" },
    { image: "gold.png", color: "Gold", price: "10" },
    { image: "platinum.png", color: "Platinum", price: "100" },
    { image: "black.png", color: "Black", price: "500" },
];

export default function Section10() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth / awards.length;
            carouselRef.current.scrollTo({
                left: scrollWidth * index,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth / awards.length;
            const newIndex = Math.round(carouselRef.current.scrollLeft / scrollWidth);
            setActiveIndex(newIndex);
        }
    };

    const goToPrevious = () => {
        const newIndex = activeIndex > 0 ? activeIndex - 1 : awards.length - 1;
        scrollToIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = activeIndex < awards.length - 1 ? activeIndex + 1 : 0;
        scrollToIndex(newIndex);
    };

    return (
        <section className="lg:pt-20 pt-10 lg:mt-25" id="awards">
            <div className="mx-auto max-w-[1200px] w-11/12">
                <div>
                    <ArrowText title={"NEW: Private Processing™ Awards"} className="justify-center !mb-0" />
                    <h3 className="text-center !font-light lg:!text-[52px] !text-[32px] capitalize max-lg:text-balance tracking-tighter !font-inter">
                        <span className="text-gold font-medium capitalize font-manrope">We Celebrate</span> Success Together
                    </h3>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex flex-wrap items-center justify-between mt-10 gap-5">
                    {awards.map((award, index) => (
                        <div key={index}>
                            <Image src={`/img/awards/${award.image}`} alt={award.color} width={277} height={387} />
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden mt-10">
                    <div className="relative">
                        {/* Carousel Container */}
                        <div
                            ref={carouselRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full snap-center flex flex-col items-center"
                                >
                                    <Image
                                        src={`/img/awards/${award.image}`}
                                        alt={award.color}
                                        width={277}
                                        height={387}
                                        className="mx-auto"
                                    />
                                    <div className="border border-white/18 rounded-full px-4 py-2 w-fit mx-auto mt-5">
                                        <p>{award.color} - ${award.price}M+</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                            aria-label="Previous award"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                            aria-label="Next award"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    {/*<div className="flex justify-center gap-2 mt-4">*/}
                    {/*    {awards.map((_, index) => (*/}
                    {/*        <button*/}
                    {/*            key={index}*/}
                    {/*            onClick={() => scrollToIndex(index)}*/}
                    {/*            className={`w-2 h-2 rounded-full transition-colors ${*/}
                    {/*                activeIndex === index ? "bg-gold" : "bg-white/30"*/}
                    {/*            }`}*/}
                    {/*            aria-label={`Go to slide ${index + 1}`}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>

                {/* Desktop Labels & Button */}
                <div className="flex lg:flex-row flex-col items-center justify-between mt-10">
                    <div className="flex lg:flex-wrap max-lg:flex-col gap-3 max-lg:hidden">
                        {awards.map((award, index) => (
                            <div key={index} className="border border-white/18 rounded-full px-4 py-2">
                                <p>{award.color} - ${award.price}M+</p>
                            </div>
                        ))}
                    </div>
                    <CustomButton text="Start for free" />
                </div>
            </div>
        </section>
    );
}