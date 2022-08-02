import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    }
];


export default function Navbar() {
    return (
        <nav className={ styles['menu-container'] }>
            {
                menuItems.map(menu => (
                    <ActiveLink text={ menu.text } href={ menu.href } key={ menu.href } />
                ))
            }
        </nav>
    )
}