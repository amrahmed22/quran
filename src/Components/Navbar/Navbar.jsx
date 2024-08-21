import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
let location = useLocation()
// console.log(location.pathname);
function open() {
    document.querySelector('.menu').style.right = '0'
    
}

function close() {
    document.querySelector('.menu').style.right = '-100%'
}


    return <>



        <nav className=''>
            <ul className='nav-bar'>
                <span className="menu">
                    <li onClick={close}><Link className={location.pathname=='/'?'nav-item active-link':'nav-item'} to={'/'}>القائمة الرئيسية</Link></li>
                    <li onClick={close}><Link className={location.pathname.includes('/Listen')||location.pathname.includes('/ItemDetails')?'nav-item active-link':'nav-item'} to={'/Listen'}>أستماع</Link></li>
                    <li onClick={close}><Link className={location.pathname.includes('/Azkar')||location.pathname.includes('/azkarItem')?'nav-item active-link':'nav-item'} to={'/Azkar'}>أذكار</Link></li>
                    <li onClick={close}><Link className={location.pathname.includes('/Tafsir')||location.pathname.includes('/TafsirItem')?'nav-item active-link':'nav-item'} to={'/Tafsir'}>تفسير</Link></li>
                    <li onClick={close}><Link className={location.pathname.includes('/Tadbor')||location.pathname.includes('/tadborItem')?'nav-item active-link':'nav-item'} to={'/Tadbor'}>تدبر</Link></li>
                    <li onClick={close}><Link className={location.pathname=='/Radio'?'nav-item active-link':'nav-item'} to={'/Radio'}>إذاعة</Link></li>

                    <span onClick={close} className="close-menu"><i className="fas fa-times close-icon"></i></span>
                </span>
                <span onClick={open} className="open-menu"><i className="fas fa-bars open-icon"></i></span>
            </ul>
        </nav>
    </>

}

export default Navbar;
