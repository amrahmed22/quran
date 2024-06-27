import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const TafsirItem = () => {
    let param = useParams()
    const [tafsir, setTafsir] = useState([]);
    const [audio, setAudio] = useState('');
    const [name, setName] = useState('----');
    let [flag, setFlag] = useState(false);
    let [test, setTest] = useState(false);

    async function getTafsir() {
        let { id } = param
        let { data } = await axios.get(`https://mp3quran.net/api/v3/tafsir?tafsir=4&sura=${id}&language=ar`)
        // console.log(data.tafasir.soar[`${id}`]);
        setTafsir(data.tafasir.soar[`${id}`])
        setFlag(true)
    }
    function getId(e) {
        // console.log(e.target.innerText);
       for (let i = 0; i < tafsir.length; i++) {
        if (tafsir[i].name == e.target.innerText) {
        //    console.log(tafsir[i].url);
           setAudio(tafsir[i].url)
           setName(tafsir[i].name)
           setTest(true)
        }
        
       }
    }


    useEffect(() => {
        getTafsir()
    }, []);
    
    return <>
     <section className='pb-5 mb-5'>
     <div className="container overflow-hidden position-relative">
     <Link to={'/Tafsir'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
            <div className="row g-3 pt-3 pb-5 d-flex justify-content-center">
                <h3 className='text-white rounded-3 p-3 shape text-center'>تفسير الطبري</h3>
                {flag ?
                    tafsir.map((x, key) =>
                        <div key={key} className='col-md-6'>
                            <div onClick={getId} className='reciter-name text-white bg-blue text-white text-center py-3 rounded-3'>
                                 {x.name}
                            </div>
                        </div>
                    )
                    : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                        <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                    </div>}
       { test?        <div className=' ppp fixed-bottom bg-blue borderSecondColor py-2'>

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

export default TafsirItem;
