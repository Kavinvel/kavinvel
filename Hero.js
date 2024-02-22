import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'Im a full-stack developer and designer'
    }
    return(
        <section className='flex flex-colo md:flex-row px-5 py-32 bg-primary justify-center'>
<div className='md:w-1/2 flex flex-col'>
<h1 className='w-1/2 text-white text-6xl font-hero-font'>
    Hi,<br/>
    I'm <span className="text-black">M</span>kavinvel
    <p className="text-2xl">{config.subtitle}</p>
    </h1>
    <div className="flex py-10">
        <a href='#' className='pr-5 hover:text-white'>< AiOutlineTwitter  size={40}/></a>
        
        <a href='#' className='pr-5 hover:text-white'>< AiOutlineFacebook size={40}/></a>
        <a href='https://www.linkedin.com/in/kavin-vel-m/' className='pr-5 hover:text-white'>< AiOutlineLinkedin size={40} /></a>
</div>

    </div>
    <img className='md:w-1/3' src={HeroImg}/>

</section>
      
    )
}