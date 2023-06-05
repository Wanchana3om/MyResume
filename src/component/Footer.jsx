function Footer(props) {

    return(
        <section className={`py-10 bg-gradient-to-l ${props.light ? "from-[#dbd2fe] to-[#6a88ff]" :"from-[#0e0e0e] to-[#223b35]"} font-[300] text-[14px]  `}>
            <div className={`xl:flex lg:flex ${props.light ? "text-black":"text-white"} justify-between ml-[15%] mr-[15%] block`}>

            <div className="xl:w-[30%] lg:w-[30%]">
                <h1 className="text-[20px] font-semibold">Address</h1>
                <div className={`w-[90px] mb-5 mt-2 h-[5px] ${props.light?"bg-[#ffc897]":"bg-[#76f9c5]"}`}></div>
                <p className="font-[300] pt-3 text-[14px]">Wangchala, Wangnoi,<br /> Ayutthaya 13170</p>
            </div>
            <div className="xl:w-[30%] lg:w-[30%] xl:mt-0 lg:mt-0 mt-8">
                <h1 className="text-[20px] font-semibold">Contact Me</h1>
                <div className={`w-[120px] mb-5 mt-2 h-[5px] ${props.light?"bg-[#ffc897]":"bg-[#76f9c5]"}`}></div>
                <div className="flex justify-start items-center">
                    <img src="/rsu/icons8-call.svg" className="w-[50px]" alt="" />
                    <div>
                        <p> Tel: +66 61-9983569</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <img src="/rsu/icons8-email.svg" className="w-[50px]" alt="" />
                    <div>
                        <p> Email: wanchana.inma@gmail.com</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <img src="/icons8-github.svg" className="w-[50px]" alt="" />
                    <div>
                        <a className={`${props.light?"hover:text-[#ad5100]":"hover:text-[#518ef8]"} hover:cursor-pointer`} href="https://github.com/Wanchana3om"
              target="_blank" >
                        <p> Github: wanchana inmasom</p>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="xl:w-[30%] lg:w-[30%]">
                
                <div className="flex justify-start items-center xl:mt-16 lg:mt-16 ">
                    <img src="/icons8-linkedin.svg" className="w-[50px]" alt="" />
                    <div>
                        <a className={`${props.light?"hover:text-[#ad5100]":"hover:text-[#518ef8]"} hover:cursor-pointer`} href="https://www.linkedin.com/in/wanchana-inmasom-a365a626a/"
              target="_blank" >

                        <p> Linkedin: wanchana inmasom</p>
              </a>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <img src="/icons8-facebook.svg" className="w-[50px]" alt="" />
                    <div>
                        <a className={`${props.light?"hover:text-[#ad5100]":"hover:text-[#518ef8]"} hover:cursor-pointer`} href="https://web.facebook.com/wanchanaa.ang/"
              target="_blank" >

                        <p> Facebook: wanchana inmasom</p>
              </a>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <img src="/icons8-ig.svg" className="w-[50px]" alt="" />
                    <div>
                        <a className={`${props.light?"hover:text-[#ad5100]":"hover:text-[#518ef8]"} hover:cursor-pointer`}  href="https://www.instagram.com/bomb_wcn/"
              target="_blank" >

                        <p> Instagram: bomb_wcn</p>
              </a>
                    </div>
                </div>
                
            </div>
            </div>

        </section>
    )
    
}

export default Footer;