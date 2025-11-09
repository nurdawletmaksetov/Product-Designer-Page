import { Container } from "../../container/container"
import Work1 from "../../assets/work1.png"
import Work2 from "../../assets/work2.png"
import { SelectedPage, type WorkType } from "../../shared/types"
import { motion } from "motion/react"

const work: Array<WorkType> = [
    {
        image: Work1,
        date: "November 24, 2019",
        title: "Some Case Study",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
    },
    {
        image: Work2,
        date: "November 24, 2019",
        title: "Some Case Study",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at."
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Work = ({ setSelectedPage }: Props) => {
    return (
        <>
            <section id="work" className="pb-2.5">
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.Work)}
                >
                    <Container>
                        <h1 className="font-extrabold text-7xl sm:text-[100px] pb-5 sm:pb-8 text-toolight-yellow">work.</h1>
                        <p className="text-xl sm:text-[24px] text-dark-blue md:w-[70%]">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Amet vulputate tristique quam felis.
                            Id phasellus dui orci vulputate consequat nulla proin.
                            Id sit scelerisque neque, proin bibendum diam.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-[120px] py-[60px] sm:my-[100px]">
                            {work.map((work: WorkType) => (
                                <div className="flex flex-col sm:w-[50%]">
                                    <img src={work.image} />
                                    <p className="text-[14px] italic">{work.date}</p>
                                    <p className="text-[24px] font-semibold">{work.title}</p>
                                    <p className="text-[18px]">{work.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </motion.div>
            </section>
        </>
    )
}

export default Work