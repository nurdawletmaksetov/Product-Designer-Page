import { Container } from '../../container/container'
import Pen from "../../assets/pen.png"

type Props = {}

const Contact = ({ }: Props) => {
    return (
        <>
            <section id='contact' className='pb-20'>
                <Container>
                    <h1 className='font-extrabold text-7xl sm:text-[100px] pb-5 sm:pb-8 text-toolight-yellow'>contact.</h1>
                    <div className='flex flex-col md:flex-row gap-[60px]'>
                        <img src={Pen} />
                        <div className='flex flex-col justify-between gap-5'>
                            <p className='text-dark-blue text-[24px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Amet vulputate tristique quam felis. Id phasellus dui orci
                                vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                            </p>
                            <div>
                                <p className='text-dark-blue text-[24px]'>nurdawlet@example.com</p>
                                <p className='text-dark-blue text-[24px]'>twitter/s6adJSdn24</p>
                                <p className='text-dark-blue text-[24px]'>behance.com/dsa42djs</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact