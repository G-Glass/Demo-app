export default function Menu() {
    return (
        <div className=" bg-black h-[100vh] ">
            <div className={`text-slate-100 `}>
                <div className='flex items-center justify-around  p-8 flex-col  '>
                    <h1 className={`font-bold`}>Categoria</h1>

                    <form action="" className='flex items-center pl-1 pr-1 rounded-[20]  hover:border-hidden shadow-sm'>
                        <input type="search" name="pesquise" id="procure" className=' p-1 pl-4 rounded-[15] border-hidden font-bold bg-slate-950 ' placeholder='Pesquise aqui' />
                        <button className=' bi bi-search font-bold text-2xl pl-1  ' ></button>
                    </form>
                </div>
                <div>
                    <div className="p-3 m-2 bg-slate-950 rounded-[10] font-bold ">Camisetes</div>
                    <div className="p-3 m-2 bg-slate-950 rounded-[10] font-bold ">Calças</div>
                    <div className="p-3 m-2 bg-slate-950 rounded-[10] font-bold ">Sapatos</div>
                    <div className="p-3 m-2 bg-slate-950 rounded-[10] font-bold ">Vestidos</div>
                </div>
                <div className=' mt-8 text-center pt-2'>
                    <h1 className={`text-xl font-bold `} >e-demo</h1>
                    <div className={` p-2 text-sm`} >Termos. | privacidade.</div>
                </div>
            </div>
        </div>
    )
}