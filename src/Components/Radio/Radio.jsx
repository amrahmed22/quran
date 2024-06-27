import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';

const Radio = () => {

    const [radio, setRadio] = useState([]);
    const [audio, setAudio] = useState('');
    const [name, setName] = useState('----');
    const [filteredArray, setFilteredArray] = useState([]);
    let [flag, setFlag] = useState(false);
    let [test, setTest] = useState(false);
    async function getRadio() {
        let { data } = await axios.get(`https://mp3quran.net/api/v3/radios?language=ar`)
        setRadio(data.radios)
        setFilteredArray(data.radios)
        setFlag(true)
    }
    const search = (event) => {

        setFilteredArray(radio.filter(x => {
            if (x.name.includes(event.target.value)) return x;

        }))
    }
    function getId(e) {
        for (let i = 0; i < radio.length; i++) {

            if (radio[i].id == Number(e.target.innerText.split('-')[0])) {
                setAudio(radio[i].url)
                setName(radio[i].name)
                setTest(true)
            }

        }

    }

    useEffect(() => {
        getRadio()
    }, []);

    return <>
      <section className='pb-5 mb-5'>
      <div className="container overflow-hidden pb-5 position-relative">
      <Link to={'/'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
            <input type="text" id='search' onChange={search} className='form-control my-2' placeholder='ابحث عن قارئ' />

            <div className="row g-3 py-2 d-flex justify-content-center">
                <h3 className='text-white rounded-3 p-3 shape text-center'> إذاعة </h3>
                {flag ?
                    filteredArray.length != 0 ? filteredArray.sort(function (a, b) {
                        if (a.id < b.id) {
                            return -1;
                        }
                        if (a.id > b.id) {
                            return 1;
                        }
                        return 0;
                    }).map((x, key) =>
                        <div key={key} className='col-md-6'>
                            <div onClick={getId} className='reciter-name text-white bg-blue text-white text-center py-3 rounded-3'>
                                {x.id} - {x.name}
                            </div>
                        </div>
                    ) : <div className='text-center text-white'>
                        <h2> عفوا لا توجد نتائج  <i className='fa fa-search'></i></h2>
                    </div>
                    : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                        <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                    </div>}

            {test?    <div className=' ppp fixed-bottom bg-blue borderSecondColor py-2'>

                  <div className='container'>
                  {<p className='text-center text-white fs-5'>{name}</p>}
                    {
                        <audio src={audio} controls autoPlay className=' mb-2 rounded-3 w-100  mx-auto'></audio>
                    }
                  </div>
                </div>:""}
            </div>
        </div>
      </section>
        <ScrollToTop />

    </>
}

export default Radio;
