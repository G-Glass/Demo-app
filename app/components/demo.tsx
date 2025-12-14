import style from './demo.module.css'


export default function Demo() {
    return (
        <div className={style.demo}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={`${style.caixa} font-[Archivo]`}>
               <div className={`${style.card} text-2xl bg-blue-800 text-white`}>Card</div>
               <div className={`${style.card} `}>Center</div>
               <div className={`${style.card} `}>Right</div>
               <div className={`${style.card} `}>Night</div>
               <div className={`${style.card} `}>Follow</div>
               <div className={`${style.card} `}>Lens</div>
            </div>
        </div>
    )
}