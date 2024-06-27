import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
const Tafsir = () => {
    const [surahDetails, setSurahDetails] = useState([]);
    const [filteredArray, setFilteredArray] = useState([]);
    let [flag, setFlag] = useState(false);
    async function getSurahDetails() {
        let response = await axios.get(`https://mp3quran.net/api/v3/suwar?language=ar`)
        setSurahDetails(response.data.suwar)
        setFilteredArray(response.data.suwar)
        setFlag(true)
    }
    useEffect(() => {
        getSurahDetails();
    }, []);

    const search = (event) => {

        setFilteredArray(surahDetails.filter(x => {
            if (x.name.includes(event.target.value)) return x;

        }))



    }



    return <>
        <section className='overflow-hidden pb-3 position-relative'>
        <Link to={'/'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
            <div className="container">
                <input type="text" onChange={search} id='search' className='form-control my-3' placeholder='ابحث عن سورة' />
                <div className="row g-3 d-flex justify-content-center pt-1 pb-3">
                    <h3 className='text-white rounded-3 p-3 shape text-center'> تفسير </h3>

                    {
                        flag ? filteredArray.length != 0 ?
                            filteredArray.map((x, key) =>
                                <div className="col-md-3" key={key}>
                                    <Link to={`/TafsirItem/${x.id}`} key={key} className='text-decoration-none' ><div className='reciter-name bg-blue text-white text-center py-3 rounded-3' key={key}> {x.id} - {x.name} </div></Link></div>)

                            : <div className='text-center text-white'>
                                <h2> عفوا لا توجد نتائج  <i className='fa fa-search'></i></h2>
                            </div>
                            : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                                <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                            </div>
                    }
                </div>

            </div>
        </section>
        <ScrollToTop/>
    </>
}

export default Tafsir;
