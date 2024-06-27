import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const AzkarItem = () => {
    let param = useParams()
    const [azkar, setAzkar] = useState([]);
    const [title, setTitle] = useState('');
    const [flag, setFlag] = useState(false);

    async function getAzkar() {
        let { id } = param
        if (Number(id) == 1) {
            let { data } = await axios.get(`https://ahegazy.github.io/muslimKit/json/azkar_sabah.json`)
            setAzkar(data.content)
            setTitle('اذكار الصباح')
        }
        else if (Number(id) == 2) {
            let { data } = await axios.get(`https://ahegazy.github.io/muslimKit/json/azkar_massa.json`)
            setAzkar(data.content)
            setTitle('اذكار المساء')


        }
        else if (Number(id) == 3) {
            let { data } = await axios.get(`https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json`)
            setAzkar(data.content)
            setTitle('اذكار الصلاة')

        }
        setFlag(true)
    }

    useEffect(() => {
        getAzkar()
    }, []);
    return <>
        <div className="container overflow-hidden position-relative pb-3">
      
        <Link to={'/Azkar'}>
           <button className='btn btn-info  back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
            <div className="row g-4 p-3">
        {flag?<h3 className='text-white rounded-3 p-3 shape text-center'>{title}</h3>:""}

                {flag ? azkar.map((x, key) =>
                    <div key={key} className="col-md-12">
                        <div className='border-blue bg-blue text-white p-4 fs-5 rounded-4'>
                            <p>{x.zekr}</p>
                            <p> {x.bless} </p>
                            <p> عدد مرات التكرار : <span className='px-2 py-1 fs-4 rounded-circle bg-primary'>{x.repeat}</span></p>
                        </div>
                    </div>

                ) : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                    <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                </div>}
            </div>
        </div>


        <ScrollToTop/>
    </>
}

export default AzkarItem;
