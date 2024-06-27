import { Link } from 'react-router-dom';

const Azkar = () => {

    return <>
        <div className="container overflow-hidden position-relative">
        <Link to={'/'}>
           <button className='btn btn-info back'>
                <i className='fa fa-arrow-left'></i>
            </button></Link>
        <div className="row g-4 pt-4 pb-4 px-1">
          <h3 className='text-white rounded-3 p-3 shape text-center'>  أذكار </h3>

           <Link to={'/azkarItem/1'} className='text-decoration-none'>
           <div className="col-md-12">
                <div className='reciter-name  border-blue w-100 p-4 bg-blue text-white d-flex justify-content-center align-items-center rounded-4'>
                <h3 className='p-2'>
                    أذكار الصباح
                </h3>
                </div>
            </div>
           </Link>
           <Link to={'/azkarItem/2'} className='text-decoration-none'>

            <div className="col-md-12">
                <div className='reciter-name  border-blue  w-100 p-4  bg-blue text-white d-flex justify-content-center align-items-center rounded-4'>
                <h3 className='p-2'>
                    أذكار المساء
                </h3>
                </div>
            </div>
           </Link>
           <Link to={'/azkarItem/3'} className='text-decoration-none'>

            <div className="col-md-12">
                <div className='reciter-name border-blue w-100 p-4  bg-blue text-white d-flex justify-content-center align-items-center rounded-4'>
                <h3 className='p-2'>
                    أذكار الصلاة
                </h3>
                </div>
            </div>
            </Link>


        </div>

      
        </div>




    </>
}

export default Azkar;
