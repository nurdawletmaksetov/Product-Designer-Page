import { Container } from '../../container/container'
import { Github, Instagram, Menu, Send, X } from 'lucide-react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useState } from 'react'

type Props = {

}

const Navbar = ({ }: Props) => {
    const isMedium = useMediaQuery("(min-width: 768px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    return (
        <>
            <header className='bg-light-yellow py-[30px] top-0 sticky z-30'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-dark-blue text-[24px]'>John Doe</p>
                        {isMedium ? (
                            <>
                                <ul className='text-dark-blue flex items-center gap-[60px]'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Work</li>
                                </ul>
                                <div className='flex gap-[29px] items-center'>
                                    <Github size={26} className='text-dark-blue' />
                                    <Send size={26} className='text-dark-blue' />
                                    <Instagram size={26} className='text-dark-blue' />
                                </div>
                            </>
                        ) : (
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Menu />
                            </button>
                        )}
                        {!isMedium && isMenuToggled && (
                            <div className='p-[30px] flex flex-col items-start justify-between fixed right-0 bottom-0 z-40 h-full w-[140px] bg-light-yellow drop-shadow-xl'>
                                <button onClick={() => setIsMenuToggled(false)} >
                                    <X className='text-dark-blue' />
                                </button>
                                <ul className='text-xl text-dark-blue flex flex-col gap-5 mb-10'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Work</li>
                                </ul>
                                <div className='flex gap-2.5 items-center'>
                                    <Github size={20} className='text-dark-blue' />
                                    <Send size={20} className='text-dark-blue' />
                                    <Instagram size={20} className='text-dark-blue' />
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Navbar