import { Container } from "../../container/container";
import Button from "../../assets/button.svg";
import John from "../../assets/john.svg";
import Slash from "../../assets/slashes.svg";
import Plus from "../../assets/pluses.svg";
import { motion } from "framer-motion";

type Props = {

}

const Home = ({ }: Props) => {
    return (
        <>
            <section id="home" className="py-10">
                <Container>
                    <div className="sm:flex justify-between items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            className="md:w-[50%] mb-10 xs:mb-20"
                        >
                            <p className="text-dark-blue text-2xl xs:text-[28px] sm:text-[24px] md:text-[28px] font-medium">Hello, I’m John,</p>
                            <p className="text-dark-blue text-6xl xs:text-[75px] sm:text-[60px] md:text-[100px] font-extrabold">Product Designer</p>
                            <p className="text-dark-blue text-2xl xs:text-[28px] sm:text-[24px] md:text-[28px] mt-3 sm:mt-3 md:mt-5 font-medium">based in Netherland.</p>
                            <button className="mt-10 border-0 bg-transparent"><img src={Button} /></button>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            className="relative flex justify-center"
                        >
                            <img className="absolute right-20 sm:right-0 top-0 md:right-0 hidden sm:block" src={Plus} alt="" />
                            <img src={John} />
                            <img className="absolute left-20 sm:left-0 md:left-0 bottom-25 hidden sm:block" src={Slash} alt="" />
                        </motion.div>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default Home