import style from './demo.module.css'


export default function Demo() {
    return (
        <div className={` bg-slate-900 text-slate-50 min-h-[100dvh] pt-20 text-center `}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={`${style.caixa} font-[Archivo]`}>
            </div>
        </div>
    )
}