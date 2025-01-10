"use client";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";
const options = { loop: true }

const Clients = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(options,
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            }),
        ]
    );

    return (
        <section className={styles.clientSlider}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {data.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.imgBox}>
                                    <Image src={item.Img} alt={`Client ${index}`} fill />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
