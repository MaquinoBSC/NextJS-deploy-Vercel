import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        {/* <h1 className={ styles.title }> Ir a <a href="/about"> About </a></h1> */}
      <h3 className="title"> Ir a <Link href="/about"> About </Link></h3>
      <p className="description">
          Get started by editing{' '}
        <code className="code">pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}