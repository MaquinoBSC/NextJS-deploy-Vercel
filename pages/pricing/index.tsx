import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export default function PricingPage() {
    return (
        <>
            <MainLayout>
                <h1>Pricing Page</h1>
                {/* <h1 className={ styles.title }> Ir a <a href="/about"> About </a></h1> */}
                <h3 className="title"> Ir a <Link href="/"> Home </Link></h3>
                <p className="description">
                    Get started by editing{' '}
                    <code className="code">pages/pricing/index.jsx</code>
                </p>
            </MainLayout>
        </>
    )
}