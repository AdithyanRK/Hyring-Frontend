import FacebookIcon from '@/assets/icons/landing-page/facebook'
import Instagram from '@/assets/icons/landing-page/instagram'
import Mesh2 from '@/assets/icons/landing-page/mesh2'
import Logo2 from '@/assets/icons/landing-page/logo2'
import Twitter from '@/assets/icons/landing-page/twitter'
import YoutubeIcon from '@/assets/icons/landing-page/youtube'
import GetStartedButton from '@/element/landing-page/button/get-started-button'

export default function Footer() {
  return (
    <div className='w-[95vw] mx-auto border-2 relative border-primary-brown h-[488px] rounded-[30px]'>
       <div className="overflow-hidden absolute top-0 w-full h-full -z-1 bg-white ">
        <Mesh2 className={`scale-[1.2] opacity-[0.1] `}/>
      </div>

      <div className='flex items-center gap-8'>
            <div className='basis-[300px]' >
                <Logo2/>
                <p className='text-2xl mt-5 mb-10'>Meet the new gold standard in remote Hyring</p>
                <GetStartedButton
                boxColor={"bg-primary-orange"}/>
            </div>
            <div>
                <h2 className='text-[22px] font-medium'>Company</h2>
                <p className='text-lg'>Why India</p>
                <p className='text-lg'>Pricing</p>
                <p className='text-lg'>Contact Us</p>
            </div>
            <div>
            <h2 className='text-[22px] font-medium'>Legal</h2>
                <p className='text-lg'>Privacy Policy</p>
                <p className='text-lg'>Terms & Conditions</p>
                <p className='text-lg'>Cancellation Policy</p>
            </div>
            <div>
            <h2 className='text-[22px] font-medium'>Social</h2>
            <div className='flex items-center gap-5'>
                <Instagram/>
                <YoutubeIcon/>
                <FacebookIcon/>
                <Twitter/>
            </div>

            </div>
      </div>
    </div>
  )
}
