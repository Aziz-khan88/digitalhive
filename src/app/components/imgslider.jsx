"use client"
import styles from "@/styles/components/imgslider.module.scss"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"



const ImgSlider = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 1500 })])

    return (
        <>
            <section className={styles.embla} dir={options.direction === 'rtl' ? 'rtl' : ''}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.imgBox}>
                                    <Image src={item.img} fill alt={`Image-${index}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImgSlider