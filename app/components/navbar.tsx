"use client"
import { useState } from 'react'
import style from './navbar.module.css'
import LoginPage from '../login/page';
import Login from './login';
import Link from 'next/link';
import Menu from './menu';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abreMenu = () => {
        setIsMenuOpen(isMenuOpen);
    };
    return (
        <div className='top-0 left-0 w-full bg-slate-950 fixed '>
            <div className={``}>
                <div className={style.bar}>
                    <div className={` bg-#ffffff `}>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (<i className="bi bi-x-lg text-2xl text-[#ffffff] "></i>):(<i className="bi bi-list text-2xl text-[#ffffff]"></i>)}
                        </button>
                    </div>
                    <div className='flex items-center flex-rows'>
                        <i className="bi bi-bag-check-fill text-white bg-slate-950 p-1 text-xl"></i>
                    </div>
                    <Link href={"/login"} className=' flex items-center mr-1 flex-rows font-[Times] bg-[#2b2024]  text-white  rounded-[10]'>
                      <h2 className='p-1 bg-blue-700 rounded-[10]'>Entrar </h2>
                      <h2 className='p-1 bg-[#1a273a] rounded-r-[10]'>Registe</h2>
                    </Link>
                </div>
            
                <div className={`${style.submenu}`}>
                    {isMenuOpen &&
                        <Menu />
                    }
                </div>
            </div>
        </div>
    )
}