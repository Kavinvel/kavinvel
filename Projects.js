import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'
export default function Projects(){
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
          <p>These are some of my best projects.I have built these with React,MERN and vanilla CSS,check them out.</p>
        </div>
        </div>
        <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 gap-5">
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={websiteImg1}/>
               
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>A Ecommerce website.Built with MERN Stack.</p>
                </div>
                </div>
             <div className='relative'>
             <img className='h-[200px] w-[500px]' src={websiteImg2}/>
            
             <div className='project-desc'>
               <p className='text-center px-5 py-5'>Food Ecommerce website like Swiggy.Built with Angular nd node.js</p> 
             </div>
             </div>
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteImg3}/>
        
          <div  className='project-desc'>
            <p className='text-center px-5 py-5'>Basic Blod website.Built with next JS and MangoDB</p>
          </div>
          </div>
          </div>
        </div>
    </section>
}