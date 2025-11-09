import { Container } from '../../container/container'
import { Github, Instagram, Menu, Send, X } from 'lucide-react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useEffect, useRef, useState } from 'react'
import Link from './Link'
import type { SelectedPage } from '../../shared/types'

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const isMedium = useMediaQuery("(min-width: 768px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-yellow"

    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuToggled(false)
            }
        }

        if (isMenuToggled) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isMenuToggled])

    return (
        <>
            <header className={`${navbarBackground} py-5 xs:py-[30px] top-0 sticky z-30`}>
                <Container>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-dark-blue text-[24px]'>John Doe</p>
                        {isMedium ? (
                            <>
                                <ul className='text-dark-blue font-bold flex items-center gap-[60px]'>
                                    <Link
                                        page='Home'
                                        selectedPage={selectedPage}
                                        setSelectedPage={(value) => {
                                            setSelectedPage(value)
                                            setIsMenuToggled(false)
                                        }}
                                    />
                                    <Link
                                        page='About'
                                        selectedPage={selectedPage}
                                        setSelectedPage={(value) => {
                                            setSelectedPage(value)
                                            setIsMenuToggled(false)
                                        }}
                                    />
                                    <Link
                                        page='Work'
                                        selectedPage={selectedPage}
                                        setSelectedPage={(value) => {
                                            setSelectedPage(value)
                                            setIsMenuToggled(false)
                                        }}
                                    />
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
                            <div ref={menuRef} className='p-[30px] flex flex-col items-start justify-between fixed right-0 bottom-0 z-40 h-full w-[140px] bg-light-yellow drop-shadow-xl'>
                                <button onClick={() => setIsMenuToggled(false)} >
                                    <X className='text-dark-blue' />
                                </button>
                                <ul className='text-xl text-dark-blue flex flex-col gap-5 mb-10'>
                                    <Link
                                        page='Home'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page='About'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page='Work'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
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