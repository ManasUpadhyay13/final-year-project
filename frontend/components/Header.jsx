import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [showCatMenu, setShowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]")
            } else {
                setShow("shadow-sm")
            }
        } else {
            setShow("translate-y-0")
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)

        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])


    return <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>

        <Wrapper className="h-[60px] flex justify-between items-center">
            <Link href="/">
                <img src="/logo.svg" alt="logo" className="w-[40px] md:w-[60px]" />
            </Link>

            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

            {
                mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    />
                )
            }

            <div className="flex items-center gap-2 text-black">

                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                    <i className='bx bx-heart text-[19px] md:text-[24px]' ></i>
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
                </div>

                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                    <i className='bx bx-cart text-[20px] md:text-[25px]' ></i>
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
                </div>


                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                    {mobileMenu ? (
                        <i className='bx bx-x text-[16px]'
                            onClick={() => {
                                setMobileMenu(false)
                                console.log(mobileMenu);
                            }}
                        >
                        </i>
                    ) : (
                        <i className='bx bx-menu-alt-right text-[20px]'
                            onClick={() => {
                                setMobileMenu(true)
                                console.log("sdf")
                            }}
                        >
                        </i>
                    )}
                </div>
            </div>

        </Wrapper>

    </header>;
};

export default Header;
