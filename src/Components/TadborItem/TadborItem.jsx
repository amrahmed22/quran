import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

const TadborItem = () => {

    let param = useParams()
    const [video, setVideo] = useState('');
    const [header, setheader] = useState('');
    let [flag, setFlag] = useState(false);

    async function getTadbor() {
        let { id } = param
        let { data } = await axios.get(`https://mp3quran.net/api/v3/tadabor?&language=ar`)
        // console.log(data.tadabor[1]);
        {
            let w = []
            for (let i = 0; i < 93; i++) {
                if (data.tadabor[i] != undefined) {
                    w.push(data.tadabor[i])
                }
            }
            // console.log(w[4][0].id);
            for (let i = 0; i < w.length; i++) {
                if (id == w[i][0].id) {
                    // console.log(w[i][0].video_url);
                    setVideo(w[i][0].video_url)
                    setheader(w[i][0].reciter_name)
                    setFlag(true)
                }

            }



        }

    }
    
    useEffect(() => {
        getTadbor()
    },);
    return <>
        <div className="tadborItem">
        <Link to={'/Tadbor'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
            <div className="container">
                {
                    flag ? <div className="row py-2 d-flex justify-content-center align-content-center">
                        <h3 className='text-white rounded-3 p-3 shape text-center'> {header} </h3>
                        
                        <div className="col-md-3 bg-blue rounded-4">
                            <div className='video mt-1  p-2 rounded-4  mx-auto  text-center d-flex justify-content-center'>
                                <video controls className=' w-100 bg-blue www rounded-4' src={video}></video>
                            </div>

                        </div>
                    </div> : <div className='h-100 p-5 d-flex justify-content-center align-items-center'>
                        <i className='fa fa-spinner fa-spin m-5 fs-1 text-white'></i>
                    </div>
                }

            </div>
        </div>
    </>
}

export default TadborItem;
