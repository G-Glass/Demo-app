import DemoPage from './demo/page';
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.Main}>
      <section>
        <DemoPage />
      </section>
    </main>
  );
}
