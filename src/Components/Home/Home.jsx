import React from 'react';
import image from '../../../src/logo.png'

const Home = () => {
    return <>
       <div className='fixed-buttons '>
      <div>
      <a href='https://www.facebook.com/profile.php?id=100092710986615&mibextid=LQQJ4d' target="_blank" className='btn btn-primary rounded-start-0 rounded-end-4 py-2  mb-2 w-100'>
            <i className='fa-brands fa-facebook-f text-white  fs-4'></i>
        </a>
      </div>
      <div>
      <a href='https://wa.me/201129600311' target="_blank" className='btn btn-success rounded-start-0 rounded-end-4 py-2  mb-2'>
            <i className='fa-brands fa-whatsapp text-white fs-4'></i>
        </a>   
      </div>
       </div>
        <section className='home py-3 overflow-hidden'>
            <h2 className='container shape bg-blue text-white text-center p-3 nnn rounded-3 border-blue border-start-0 border-end-0 '>الآن هُوَ وَقْتُ الْقُرْءَانِ</h2>
            <div className="container d-flex justify-content-center align-items-center">
                <div className=' logoo'>
                    <img src={image} className='w-100' alt="" />
                </div>

            </div>
            <div className='myName container border-blue bg-blue rounded-5 border-start-0 border-end-0  p-2 text-center text-white'>
                <h4>شُرِّفَ بتصميمه : عمرو أحمد</h4>
            </div>

        </section>



    </>
}

export default Home;
