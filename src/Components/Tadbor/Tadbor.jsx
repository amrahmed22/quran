import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';

const Tadbor = () => {

    const [tadbor, setTadbor] = useState([]);
    const [flag, setFlag] = useState(false);

    async function getTadbor() {
        let { data } = await axios.get(`https://mp3quran.net/api/v3/tadabor?&language=ar`)
        // console.log(data.tadabor[1]);
        {
            let w = []
            for (let i = 0; i < 93; i++) {
                if (data.tadabor[i] != undefined) {
                    w.push(data.tadabor[i])
                }
            }
            // console.log(w);
            setTadbor(w)
            setFlag(true)


        }

    }
    useEffect(() => {
        getTadbor()
    }, []);
    return <>
        <div className="container overflow-hidden pb-3">
        <Link to={'/'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>

            <div className="row gy-4 px-1 py-3 d-flex justify-content-center">
                <h3 className='text-white rounded-3 p-3 shape text-center'> تدبر </h3>

                {
                    flag ? tadbor.map((x, key) =>

                        <div key={key} className='col-md-4'>
                        <Link className='text-decoration-none' to={`/tadborItem/${x[0].id}`}>
                          
                                <div className='reciter-name text-white bg-blue text-white text-center py-3 rounded-3'>
                                    {x[0].sora_name} - {x[0].reciter_name}
                                </div>

                        </Link>
                        </div>


                    ) : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                        <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                    </div>
                }
            </div>
        </div>
        <ScrollToTop />
    </>
}

export default Tadbor;
