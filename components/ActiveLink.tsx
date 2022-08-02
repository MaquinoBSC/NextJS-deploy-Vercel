import { useRouter } from 'next/router';
import Link from "next/link";
import { CSSProperties, FC } from 'react';

interface Props {
    text: string;
    href: string;
}

const ActiveLink: FC <Props> = (props) => {
    const { text, href } = props;
    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? styles : undefined }> { text } </a>
        </Link>
    )
}

export default ActiveLink;

const styles: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}