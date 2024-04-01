import Link from 'next/link';

const LinkCustom = ({ children, href, color }) => {
    return (
        <Link 
            href={href}
            target='_blank'
            className={`
                ${color}
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-5
                transition
                transittion-all
                ease-in-out
                rounded-full
            `}>
            {children}
        </Link>
    )
}

export default LinkCustom;
