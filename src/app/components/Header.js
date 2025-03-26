import {GiEgyptianProfile} from "react-icons/gi";

const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 bg-theme-dark px-4 py-4 flex items-center justify-between border-b border-amber-400 shadow shadow-amber-400 sm:hidden">
            <div className="signature text-3xl">Sifat.dev again and again</div>
            <div>
                <GiEgyptianProfile className={"text-4xl"}/>
            </div>
        </header>
    )
}

export default Header;