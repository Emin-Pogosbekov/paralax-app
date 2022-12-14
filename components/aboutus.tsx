import React from 'react'
import Member from './member'

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11">
                <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
                    <strong>We will make your website more user friendly. </strong>
                    The best web development expiriense is in our's hands and we ready to use it imediatly!
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Our team</h2>
                <div className='mt-2'>are the &ldquo;beasts&rdquo;</div>
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
                    <Member id='1' name='Magy' link='https://github.com' socialId='@mgoverall' />
                    <Member id='2' name='Sam' link='https://github.com' socialId='@mgoverall' />
                    <Member id='3' name='Jonh' link='https://github.com' socialId='@mgoverall' />
                    <Member id='4' name='Alan' link='https://github.com' socialId='@mgoverall' />
                    <Member id='5' name='Ann' link='https://github.com' socialId='@mgoverall' />
                    <Member id='6' name='Samanta' link='https://github.com' socialId='@mgoverall' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs