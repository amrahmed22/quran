import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop';




const ItemDetails = () => {
    let [flag, setFlag] = useState(false);
    let [test, setTest] = useState(false);
    const [surahServer, setSurahServer] = useState([]);
    const [SurahDetails, setSurahDetails] = useState([]);
    const [surahName, setSurahName] = useState('----');
    const [filteredArray, setFilteredArray] = useState([]);
    const [surahList, setSurahList] = useState([]);
    const [id, setId] = useState(``);
    const [reciterName, setReciterName] = useState('');

    let param = useParams()

    async function name() {
        let { name } = param

        setReciterName(name)
    }

    async function getSurahServer() {
        let { id } = param
        let { data } = await axios.get(`https://www.mp3quran.net/api/v3/reciters?&language=ar&reciter=${id}&rewaya=1`)
        setSurahServer(data.reciters[0].moshaf[0].server)
    }
    async function getSurahList() {
        let { id } = param
        let { data } = await axios.get(`https://www.mp3quran.net/api/v3/reciters?&language=ar&reciter=${id}&rewaya=1`)
        // setSurahList(Array.from(data.reciters[0].moshaf[0].surah_list.split(',')))  
        let g = []
        let y = Array.from(data.reciters[0].moshaf[0].surah_list.split(','))
        for (let i = 0; i < y.length; i++) {
            g.push(Number(y[i]))
        }
        setSurahList(g)
        setFlag(true)

    }
    async function getSurahDetails() {
        let w = await axios.get(`https://mp3quran.net/api/v3/suwar?language=ar`)
        // console.log(w.data.suwar);

        setSurahDetails(w.data.suwar)
        setFilteredArray(w.data.suwar)

    }
    function getId(event) {
        let id = Number(event.target.innerText.split('-')[0])
        let surahName = event.target.innerText.split('-')[1]
        if (id >= 1 && id <= 9) {
            id = `00${id}.mp3`
        }
        else if (id >= 10 && id <= 99) {
            id = `0${id}.mp3`
        }
        else {
            id = `${id}.mp3`
        }
        setId(id)
        setSurahName(' سورة ' + surahName)
        setTest(true)
    }

    const search = (event) => {

        setFilteredArray(SurahDetails.filter(x => {
            if (x.name.includes(event.target.value)) return x;

        }))
    }




    useEffect(() => {
        getSurahList()
        getSurahServer()
        getSurahDetails()
        name()


    }, []);



    return <>
        <div className="ItemDetails container pb-5 overflow-hidden position-relative">
           <Link to={'/Listen'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>

            <input type="text" onChange={search} id='search' className='form-control my-3' placeholder='ابحث عن سورة' />

            <div className="mb-5 pb-5 row g-4 text-center d-flex justify-content-center">
                {<h3 className='text-white rounded-3 p-3 shape'>{reciterName}</h3>}
                {flag ? filteredArray.length != 0 ? filteredArray.map((x, key) =>
                    (surahList.includes(x.id)) ?

                        <div key={key} className='col-md-3'>
                            <div onClick={getId} className='reciter-name text-white bg-blue text-white text-center py-3 rounded-3'>
                                {x.id} - {x.name}
                            </div>
                        </div> : ""

                ) : <div className='text-center text-white'>
                    <h2> عفوا لا توجد نتائج  <i className='fa fa-search'></i></h2>
                </div> : <div className=' p-5 d-flex justify-content-center align-items-center'>
                    <i className='fa fa-spinner fa-spin fs-1 m-4 text-white'></i>
                </div>}
                
                {test?<div className='ppp fixed-bottom bg-blue borderSecondColor py-2'>

                    {<p className='text-center text-white fs-5'>{surahName}</p>}
                    {
                        <audio src={surahServer + id} controls autoPlay className='container  mb-2 rounded-3 w-100 mx-auto'></audio>
                    }
                </div>:""}

            </div>
            <ScrollToTop />

        </div>
        

    </>
}

export default ItemDetails;
