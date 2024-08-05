import { useState, useEffect, useRef } from 'react'
// import { useData } from '../../renderer/useData'
import { data } from './+data'
import LogoATC from "../../assets/logo.png"
import heroOne from "../../assets/hero-1.png"
import electronic from "../../assets/img-ps.jpg"
import './Page.css'

export function Page() {
  const [scroll, setScroll] = useState(true)
  const [menuMobile, setMenuMobile] = useState("hidden")
  const [scrollFeatures, setFeatures] = useState("")
  const [posters, setPosters] = useState([])

  const refMenu = useRef(null)

  useEffect(()=>{
    const getData = async () => {
      const { dataBlog } = await data()
      console.log(dataBlog)

      setPosters(dataBlog)
    }
    getData()
  },[])

  useEffect(()=>{
    const handleAnimation = () => {  
      document.documentElement.scrollTop > 80 ? setScroll(true) : setScroll(false)
      document.documentElement.scrollTop > 390 ? setFeatures("features-div-animation") : setFeatures("")
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
      <header className={`flex justify-between fixed z-10 w-full h-70 py-5 shadow-[0_0_2px_rgba(50,50,50,0.4)] header ${scroll ? "scroll-header" : "normal-header"} lg:justify-center`}>
        <div className="flex justify-between w-full pl-4 pr-6 lg:max-w-[1140px]"> 
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

      {/* HERO ONE */}
      <section className={`flex justify-center  px-2.5 pb-20 pt-[100px] bg-hero-pattern   sm:pt-32 lg:min-h-[75vh]  lg:px-12 lg:pb-20 lg:pt-[100px]`}>
        <div className="flex flex-col gap-10   md:gap-0 md:items-center md:max-w-[720px] md:mx-12 md:flex-row hero-one-container lg:grid lg:grid-cols-[46.5%_53.5%] lg:max-w-[960px] lg:mx-8 xl:max-w-[1140px] 2xl:max-w-[1320px]">
          {/* BOX TEXT */}
          <div className='flex flex-col justify-center text-center mt-8 sm:justify-start sm:text-start lg:text-left hero-one-div-one'>
            <h1 className='text-3xl text-white font-bold my-3.5 leading-tight sm:my-0 sm:text-[42px] lg:text-[54px] xl:text-[58px] xl:my-[28px] 2xl:text-[67px]'>Arma el compu de tus sueños.</h1>
            <p className='text-[17.6px] text-white mb-6 md:text-base md:mb-8 lg:text-[22.29px] hero-one-p'>¡Lo armamos y llevamos hasta tu puerta!</p>
            <a href="/home" className='flex gap-2 self-center justify-center w-[240px] h-12 border-[#7C38C0] bg-[#7b5dd6] hover:bg-[#7b5dd6] py-2.5 px-2.5 text-white rounded uppercase font-semibold cursor-pointer btn-wsp sm:self-start lg:text-base xl:text-xl'  target="_blank" rel="noreferrer"> Comenzar </a> 
          </div>
          {/* BOX IMG */}
          <div className='hero-one-div-two'>
            <img src={heroOne} alt="technology_lover" className='hero-one-img' width={"620px"} height={"620px"}/>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={`features flex flex-col justify-center mb-8 px-2.5 pt-[80px] text-center gap-4 sm:gap-8 sm:pb-6  md:pt-24 lg:min-h-[75vh] lg:mb-16`}>
          <div className='mb-8 lg:mb-16'>
            <h2 className='text-3xl text-[#353f4f] my-3.5 font-bold sm:text-[40px] md:text-5xl lg:text-[54px] xl:text-[58px]'>¿Porque elegirnos?</h2>
          </div>

          <div className={`${scrollFeatures} grid grid-cols-1 gap-12 mb-14 md:mb-0 sm:grid-cols-2 lg:grid-cols-4`}>
            <div className='flex flex-col gap-5'>
              <i className="fa-solid fa-chart-line text-[#7C38C0] text-6xl"></i>
              <h6 className='text-[#353f4f] mb-2.5 font-bold text-xl sm:text-[22.4px] lg:text-xl 2xl:text-2xl'>Calidad</h6>
              <p className='text-black text-base self-center w-5/6'>Trabajamos con los mejores fabricantes de computadores y hardware. Licencias 100% legales.</p>
            </div>

            <div className='flex flex-col gap-5'>
              <i className="fa-solid fa-shield text-[#7C38C0] text-6xl"></i>
              <h6 className='text-[#353f4f] mb-2.5 font-bold text-xl sm:text-[22.4px] lg:text-xl 2xl:text-2xl'>Experiencia</h6>
              <p className='text-black text-base self-center w-5/6'>Mas de 7 años entregando soluciones informáticas a empresas e independientes.</p>
            </div>

            <div className='flex flex-col gap-5'>
              <i className="fa-solid fa-rocket text-[#7C38C0] text-6xl"></i>
              <h6 className='text-[#353f4f] mb-2.5 font-bold text-xl sm:text-[22.4px] lg:text-xl 2xl:text-2xl'>Rendimiento</h6>
              <p className='text-black text-base self-center w-5/6'>Ofrecemos un amplio portafolio de dispositivos para apalancar la operación de tu negocio.</p>
            </div>

            <div className='flex flex-col gap-5'>
              <i className="fa-brands fa-windows text-[#7C38C0] text-6xl"></i>
              <h6 className='text-[#353f4f] mb-2.5 font-bold text-xl sm:text-[22.4px] lg:text-xl 2xl:text-2xl'>Multisistema</h6>
              <p className='text-black text-base self-center w-5/6'>Nuestro equipo experto te apoyara en la elección de S.O ideal según tus necesidades.</p>
            </div>
          </div>
      </section>

      <hr className='divider'/>

      {/* AboutUs */}
      <section className='px-2.5 pt-8 pb-12 mb-8 mx-3.5 sm:pt-8   md:max-w-[720px] lg:min-h-[75vh] lg:max-w-[960px] lg:mt-16 lg:pt-20 xl:max-w-[1140px] 2xl:max-w-[1320px]'>
        <div className='about-us-container grid grid-cols-1 gap-4 justify-center self-center sm:grid-cols-[45%_52%] lg:grid-cols-[50%_48%] '>
          {/* BOX IMG */}
          <div className='about-us-div-img bg-white content-center'>
            <img src={electronic} className='about-us-img' alt="somos_tecnología" width="590px" height="400px" />
          </div>

          {/* BOX TEXT */}
          <div className='about-us-div-text flex flex-col justify-center text-center'>
            <h2 className='text-3xl text-[#353f4f] my-3.5 font-bold sm:text-[40px] md:text-5xl lg:text-[54px] lg:my-[28px] xl:text-[58px]'>Sobre Nosotros</h2>
            <p className='about-us-p text-base text-[#6c757d] m-3 sm:m-3.5 lg:m-0 lg:text-xl'> En Armatucompu, nuestra experiencia y compromiso nos han posicionado como referentes en el sector. Ofrecemos soluciones informáticas personalizadas, garantizando la excelencia en cada sistema creado. Con acceso a los mejores componentes y un equipo experto, brindamos un servicio adaptado a las necesidades de cada cliente. Confía en nuestra trayectoria para llevar tus proyectos al siguiente nivel tecnológico. ¡Contáctanos hoy mismo!</p>
            <p className="about-us-p text-base text-[#6c757d] m-3 mt-0 font-bold sm:m-3.5 lg:m-0 lg:text-xl">¡Más de 7 años liderando el mercado de ensamble y personalización de computadoras!</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='flex justify-center mt-p-12 pt-28 pb-5 text-center bg-[linear-gradient(180deg,rgba(244,244,249,.8)_50%,rgba(244,244,249,.05)_100%)]        lg:pb-28'>
        <div className='flex flex-col md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
            <h2>Testimonios</h2>
            <p> Descubre lo que dicen nuestros clientes sobre sus experiencias con nuestros productos y servicios.            </p>
        </div>
      </section>

                      {/* BLOG */}
                      <section className='flex justify-center py-8     md:py-10     lg:py-12   xl:py-20'>
                  <div className='grid grid-cols-[90%] justify-center self-center gap-6   lg:grid-cols-[60%_30%]      md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
                    
                    <div className='grid grid-cols-1  gap-6      md:grid-cols-2'>
                            {/* Poster #1 */}
                      <div className='grid grid-cols-1'>
                        <img src={`https://bochica.armatucompu.co/uploads/imgs/${posters[0]?.img}`} alt={posters[0]?.categoryId?.name} width="319px" height="87px" className='w-full rounded-lg'/>
                        <span className='text-[12.7px] text-[#0fbc49] my-4 uppercase font-semibold   md:text-xs lg:text-[13.6px] xl:text-sm'>{posters[0]?.categoryId?.name}</span>
                        <h6>
                          <a href="/blog" className='text-[19px] my-3.5 uppercase text-[#353f4f] font-bold md:text-[23px]  lg:text-xl  xl:text-[22px]' style={{cursor:"pointer"}}> {posters[0]?.title} </a>
                        </h6>
                        <p dangerouslySetInnerHTML={{__html: posters[0]?.short}} className='text-[15.6px] text-[#6c757d] mt-4    md:text-[13.6px] lg:text-base xl:text-[18.4px]'></p>
                        <div className='flex flex-row'>
                          <p className='text-[15.6px] font-bold text-[#353f4f] self-end mr-1.5   md:text-[13.6px] lg:text-[15px] xl:text-[17.3px] '> By {posters[0]?.createdBy?.name} | </p>
                          <p className='text-[15.6px] text-[#6c757d] mt-4 self-end   md:text-[13.6px] lg:text-base xl:text-[18.4px]'> {posters[0]?.myDate} </p>
                        </div>
                      </div>
                            {/* Poster #2 */}
                        <div className='grid grid-cols-1'>
                        <img src={`https://bochica.armatucompu.co/uploads/imgs/${posters[1]?.img}`} alt={posters[1]?.categoryId?.name} width="319px" height="87px" className='w-full rounded-lg'/>
                        <span className='text-[12.7px] text-[#ff1e1a] my-4 uppercase font-semibold   md:text-xs lg:text-[13.6px] xl:text-sm'>{posters[1]?.categoryId?.name}</span>
                        <h6>
                          <a href="/blog" className='text-[19px] my-3.5 uppercase text-[#353f4f] font-bold md:text-[23px]  lg:text-xl  xl:text-[22px]' style={{cursor:"pointer"}}> {posters[1]?.title} </a>
                        </h6>
                        <p dangerouslySetInnerHTML={{__html: posters[1]?.short}}  className='text-[15.6px] text-[#6c757d] mt-4    md:text-[13.6px] lg:text-base xl:text-[18.4px]'></p>
                        <div className='flex flex-row'>
                          <p className='text-[15.6px] font-bold text-[#353f4f] self-end mr-1.5   md:text-[13.6px] lg:text-[15px] xl:text-[17.3px] '> By {posters[1]?.createdBy?.name} | </p>
                          <p className='text-[15.6px] text-[#6c757d] mt-4 self-end   md:text-[13.6px] lg:text-base xl:text-[18.4px]'> {posters[1]?.myDate} </p>
                        </div>
                      </div>
                    </div>

                        {/* Poster #3 */}
                    <div className='grid grid-cols-1   md:gap-6  md:grid-cols-2  lg:gap-0  lg:grid-cols-1'>
                      <img src={`https://bochica.armatucompu.co/uploads/imgs/${posters[2]?.img}`} alt={posters[2]?.categoryId?.name} width="660px" height="182px"  className='rounded-lg my-4 lg:my-0'/>
                      <div className='grid grid-cols-1'>
                        <span className='text-[12.7px] text-[#be6cbe] my-4 uppercase font-semibold   md:text-xs lg:text-[13.6px] xl:text-sm'>{posters[2]?.categoryId?.name}</span>
                        <h6>
                          <a href="/blog" className='text-[19px] my-3.5 uppercase text-[#353f4f] font-bold   md:text-[23px] lg:text-xl xl:text-[22px]' style={{cursor:"pointer"}}> {posters[2]?.title} </a>
                        </h6>
                        <p dangerouslySetInnerHTML={{__html: posters[2]?.short}}  className='text-[15.6px] text-[#6c757d] mt-4    md:text-[13.6px] lg:text-base xl:text-[18.4px]'></p>
                        <div className='flex flex-row'>
                          <p className='text-[15.6px] font-bold text-[#353f4f] self-end mr-1.5   md:text-[13.6px] lg:text-[15px] xl:text-[17.3px] '> By {posters[2]?.createdBy?.name} | </p>
                          <p className='text-[15.6px] text-[#6c757d] mt-4 self-end   md:text-[13.6px] lg:text-base xl:text-[18.4px]'> {posters[2]?.myDate} </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
    </>
  )
}