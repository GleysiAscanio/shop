import { useState, useEffect, useRef } from 'react'
import LogoATC from "../../assets/logo.png"
import heroOne from "../../assets/hero-1.png"
import './Page.css'

export function Page() {
  const [scroll, setScroll] = useState(true)
  const [menuMobile, setMenuMobile] = useState("hidden")

  const refMenu = useRef(null)
  useEffect(()=>{
    const handleAnimation = () => {  
      document.documentElement.scrollTop > 80 ? setScroll(true) : setScroll(false)
    }
  
      window.onscroll = () => handleAnimation()
   },[])
  
   useEffect(()=>{
    const handleClickOutside = (e) => {
      if(!refMenu.current.contains(e.target)){
        setMenuMobile("hidden")
      }
    }
    document.addEventListener("click", handleClickOutside, true)
   },[])

   const handleMenuHidden = () => { menuMobile === "hidden" ? setMenuMobile("menu-mobile") : setMenuMobile("hidden") } 

  return (
    <>
      <header className={`flex justify-between fixed z-10 w-full h-70 py-5 shadow-[0_0_2px_rgba(50,50,50,0.4)] header ${scroll ? "scroll-header" : "normal-header"}`}>
        <div className="flex justify-between w-full pl-4 pr-6"> 
          {/* MENU MOBILE */}
          <div className="flex justify-between w-full lg:hidden">	
            <a href="#inicio" className="logo-atc"><img src={LogoATC} alt="mobile-logo-armaTuCompu" height="76px" width="80px"/></a>  	
            <i className="fa-solid fa-bars fa-2xl self-center icon-menu" onClick={handleMenuHidden}></i>	
            <nav id='clickbox' className={menuMobile} ref={refMenu}>
              <ul className="flex flex-col justify-between py-2">
                <li aria-haspopup="true" className='content-center' onClick={handleMenuHidden}><a href="#about-us" >Nosotros</a></li>
                <li aria-haspopup="true" className='content-center' onClick={handleMenuHidden}><a href="#testimonios" >Testimonios</a></li>
                <li aria-haspopup="true" className='content-center' onClick={handleMenuHidden}><a href="#development-process" >Proceso</a></li>
                <li aria-haspopup="true" className='content-center' onClick={handleMenuHidden}><a href="/blog" >Blog</a></li>
                <li aria-haspopup="true" className='content-center gap-2' onClick={handleMenuHidden}><a href="https://api.whatsapp.com/send?phone=573229438350"  target="_blank" rel="noreferrer" className='flex gap-2'> Quiero asesoría <i className="fa-brands fa-whatsapp fa-xl self-center"></i></a> 
                </li>	
              </ul>
            </nav>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:block">
            <a href="#inicio" className="logo-atc"><img src={LogoATC} height="84px" width="100px" className={`md: ${scroll ? "mb-1.5" : "mb-0"}`} alt="desktop-logo-armaTuCompu"/></a>
          </div>
          <nav className="hidden lg:flex items-center text-lg font-semibold font-sans text-white md:text-xl lg:text-[22px]">
            <ul className="flex justify-between gap-11">
              <li aria-haspopup="true" className='content-center'><a href="#about-us" className={`hover:text-[#a59e9e] md: ${scroll ? "text-[#353f4f]" : "text-[#fff]"}`}>Nosotros</a></li>
              <li aria-haspopup="true" className='content-center'><a href="#testimonios" className={`hover:text-[#a59e9e] md: ${scroll ? "text-[#353f4f]" : "text-[#fff]"}`}>Testimonios</a></li>
              <li aria-haspopup="true" className='content-center'><a href="#development-process" className={`hover:text-[#a59e9e] md: ${scroll ? "text-[#353f4f]" : "text-[#fff]"}`}>Proceso</a></li>
              <li aria-haspopup="true" className='content-center'><a href="/blog" className={`hover:text-[#a59e9e] md: ${scroll ? "text-[#353f4f]" : "text-[#fff]"}`}>Blog</a></li>
              <li aria-haspopup="true">
                <a href="https://api.whatsapp.com/send?phone=573229438350" className='flex gap-2 justify-center w-[240px] h-[60px] border-[#7b5dd6] bg-[#7C38C0] hover:bg-[#7C38C0] py-5 px-5  rounded uppercase font-medium cursor-pointer btn-wsp lg:text-base xl:text-xl'  target="_blank" rel="noreferrer"> Quiero asesoría <i className="fa-brands fa-whatsapp fa-lg self-center"></i></a> 
              </li>	
            </ul>
          </nav>

        </div>
      </header>
      <section className={`flex justify-center  px-2.5 pb-20 pt-[100px] bg-hero-pattern min-h-[75vh]  lg:px-12 lg:pb-8`}>
        <div className="flex flex-col md:flex-row gap-10">
          <div className='flex flex-col justify-center text-center mt-8 lg:text-left'>
            <h1 className='text-3xl text-white font-bold my-3.5 sm:my-0      lg:my-[28px] sm:text-[40px] md:text-[54px] lg:text-[58px]'>Arma el compu de tus sueños.</h1>
            <p className='text-[17.6px] text-white mb-6 md:text-base md:mb-8 lg:text-[22.29px]'>¡Lo armamos y llevamos hasta tu puerta!</p>
            <a href="/home" className='flex gap-2 self-center justify-center w-[240px] h-12 border-[#7C38C0] bg-[#7b5dd6] hover:bg-[#7b5dd6] py-2.5 px-2.5 text-white rounded uppercase font-semibold cursor-pointer btn-wsp lg:text-base xl:text-xl'  target="_blank" rel="noreferrer"> Comenzar </a> 
          </div>
          <div>
            <img src={heroOne} alt="technology_lover" width={"560px"} height={"560px"}/>
          </div>
        </div>
      </section>
      <section className={` min-h-[75vh] pt-[100px]`}>
        <h2>Content is the key to building an audience</h2>
      </section>

    </>
  )
}