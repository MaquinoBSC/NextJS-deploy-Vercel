import Link from 'next/link';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from "../components/layouts/MainLayout";

export default function AboutPage() {
    return (
        <>
            {/* Este es lo que se para por props al layout */}
            <h1>About Page</h1>
            <h3 className="title"> Ir a <Link href={'/'}> Home </Link></h3>
            <p className="description">
                Get started by editing{' '}
                <code className="code">pages/about.jsx</code>
            </p>
            <p>Aqui andamos chavos</p>
        </>
    )
}

// Esta es una configuracion para trabajar con layouts anidados
// Y para que el codigo sea mas facil de leer
AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}