import { motion } from 'motion/react'
import { Container } from '../../container/container'
import { SelectedPage, type AboutType } from '../../shared/types'

const about: Array<AboutType> = [
    {
        year: "2014-2018",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
    },
    {
        year: "2018-2020",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
    },
    {
        year: "2020 - Present",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.",
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const About = ({ setSelectedPage }: Props) => {
    return (
        <>
            <section id='about' className='py-10'>
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                >
                    <Container>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                        >
                            <h1 className='font-extrabold text-7xl sm:text-[100px] pb-5 sm:pb-8 text-toolight-yellow'>about.</h1>
                            <p className='text-xl sm:text-[24px] text-dark-blue md:w-[70%]'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Amet vulputate tristique quam felis.
                                Id phasellus dui orci vulputate consequat nulla proin.
                                Id sit scelerisque neque, proin bibendum diam.
                            </p>
                        </motion.div>
                        <div className='py-[60px] sm:py-[145px]'>
                            <ul className='pl-[10%] xs:pl-[20%] flex flex-col gap-10 sm:gap-20'>
                                {about.map((about: AboutType) => (
                                    <motion.li
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        className='list-disc text-dark-blue'>
                                        <p className='font-semibold pb-1.5 sm:pb-2.5 text-[20px] sm:text-[24px]'>{about.year}</p>
                                        <p className='text-[20px] sm:text-[24px]'>{about.text}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </motion.div>
            </section>
        </>
    )
}

export default About