export default function Header() {
    return (
        <header>
            <div className="m-4 rounded-xl bg-slate-100 p-5">
                <div className="flex items-center">
                    <svg
                        className="w-10 fill-current text-teal-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M464 48c-67.61.29-117.87 9.6-154.24 25.69c-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48ZM48 48c67.61.29 117.87 9.6 154.24 25.69c27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48Z"
                        />
                    </svg>
                    <div className="font-Nunito bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent">
                        Pokedex
                    </div>
                </div>
            </div>
        </header>
    );
}
