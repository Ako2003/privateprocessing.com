import React from 'react';
import Marquee from "react-fast-marquee";
import Image from "next/image";

const articles = [
    {img: "forbes.svg", url: "https://www.forbes.com/sites/pklein/2025/09/04/the-digital-future-more-tech-unicorns-from-islamic-founders/", imageWidth: 161.1, imageHeight: 42},
    // {img: "img.png", url: "https://thematrixgreenpill.com/episodes/episode-220/", imageWidth: 199, imageHeight: 92 },
    {img: "gulf-news.svg", url: "https://gulfnews.com/business/wealth-consulting-unlocks-global-growth-potential-1.500282660", imageWidth: 236, imageHeight: 42},
]

const Articles = () => {
    return (
        <section className="mt-25">
            <div className="mx-auto max-w-[1200px] mx-auto w-11/12">
                <div className="flex items-center gap-x-5">
                    <div className="basis-1/2 border-t border-[#2B2B2B]"/>
                    <p className="text-xs text-silver font-semibold uppercase w-fit text-nowrap">Articles & interviews </p>
                    <div className="basis-1/2 border-t border-[#2B2B2B]"/>
                </div>

                <div className="flex items-center justify-center mt-10 max-xl:hidden">
                    {articles.map((article, index) => (
                        <a href={article.url} key={index} className="relative flex items-center">
                            <Image src={`/svg/articles/` + article.img} alt={"Some articles"} width={article.imageWidth} height={article.imageHeight}/>
                            <div className="absolute w-full h-full top-0 left-0" style={{
                                background: "linear-gradient(180deg, rgba(205, 137, 57, 0) 23.5%, rgba(205, 161, 57, 0.4) 100%)",
                                mixBlendMode: "plus-lighter",
                                filter: "blur(32px)",
                            }}/>
                            {index !== articles.length - 1 && (
                                <hr className="h-[68px] w-[1px] mx-10 border-l border-[#2B2B2B]"/>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            <div className="xl:hidden mt-10">
                <Marquee autoFill={true} >
                    {articles.map((article, index) => (
                        <div key={index} className="">
                            <Image src={`/img/articles/` + article.img} alt={"Some articles"} width={article.imageWidth}
                                   height={article.imageHeight} className="scale-75"/>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Articles;