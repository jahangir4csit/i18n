import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {

    return (
        <header className='p-4'>
            <nav className='flex items-center justify-between'>
                <LocalSwitcher />
            </nav>
        </header>
    );
}