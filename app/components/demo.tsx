import style from './demo.module.css'


export default function Demo() {
    return (
        <div className={style.demo}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={`${style.caixa} font-[Archivo]`}>
               
            </div>
        </div>
    )
}