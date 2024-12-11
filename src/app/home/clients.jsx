"use client";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Client01 from "media/home/clientsLogo/01.webp";
import Client02 from "media/home/clientsLogo/02.webp";
import Client03 from "media/home/clientsLogo/03.webp";
import Client04 from "media/home/clientsLogo/04.webp";
import Client05 from "media/home/clientsLogo/05.webp";
import Client06 from "media/home/clientsLogo/06.webp";
import Image from "next/image";

const clientslider = [
    { img: Client01.src },
    { img: Client02.src },
    { img: Client03.src },
    { img: Client04.src },
    { img: Client05.src },
    { img: Client06.src },
    { img: Client01.src },
    { img: Client02.src },
    { img: Client03.src },
    { img: Client04.src },
    { img: Client05.src },
    { img: Client06.src },
];

const Clients = () => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "center" },
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
                        {clientslider.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <Image src={item.img} alt={`Client ${index}`} width={200} height={36} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
