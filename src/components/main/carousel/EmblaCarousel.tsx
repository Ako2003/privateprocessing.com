"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";


type PropType = {
    slides: {
        title: string
        image: string,
        number: string,
    }[],
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((card, index) => (
                        <div className="embla__slide" key={index}>
                            <div className={`embla__slide__number relative`}>
                                <Image src={`/img/cards/${card.image}`} alt={"Card image"} width={320} height={400}  />
                                <div className="absolute lg:top-5 top-10 left-14">
                                    <p className="font-inter font-medium text-2xl">{card.title}</p>
                                </div>
                                <div className="absolute bottom-0 card-layer h-[320px] w-full"/>
                                <div className="absolute lg:bottom-0 lg:left-10 bottom-5 pb-5 left-5 text-nowrap">
                                    <p className="font-inter font-normal text-[14px] capitalize text-[#ADADAD] border-white/12 border rounded-full p-2 w-fit">monthly
                                        revenue</p>
                                    <p className="font-inter font-medium text-[40px] text-gold ">{card.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="flex justify-between w-full items-center">
                    <div className="lg:absolute top-6 right-0">
                        <div className="flex mx-auto gap-x-5">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>
                    </div>
                    <CustomButton className="lg:hidden"/>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
