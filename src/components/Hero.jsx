import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import indexCss from '../index.css'


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] bg-slate-600 mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For {''}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row  justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"/> {''}
            <span className="text-gradient" >Generation</span> {''}
          </h1>

          <div className="sm:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint enim quidem eum culpa ipsam. Debitis temporibus suscipit, blanditiis, mollitia, quam fuga aspernatur voluptatibus assumenda enim alias expedita! Dolores, quis.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient rounded-full bottom-40"/>
        <div className="absolute z-[0] w-[50%] h-[50%] top-0 blue__gradient right-20 bottom-20"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
