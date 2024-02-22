import AboutImg from '../assets/about.png';
export default function About(){
    const config={
        line1:'Hi,My name is Kavinvel.I am a Full Stack web developer.I built beautiful Websites with React.js and Tailwind CSS',
        line2:'I am proficient in Frontend Skills like react.js,Redux,Redux Tool Kit,Axios,Tailwind,CSS,saSS,Css3 and many more',
        line3:'In backend I know Node.js,Express.js,MongoDB,and Mongoose'
    }
    return <section className="flex flex-col md:flex-row bg-secondary px-5 " id="about">
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
<div className='md:w-1/2 flex justify-center text-white'>
    <div className='flex flex-col justify-center'>
    <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
    <p className='pb-5'>{config.line1}</p>
    <p className='pb-5'>{config.line2}</p>
    <p className='pb-5'>{config.line3}</p>
</div>
</div>

    </section>
}