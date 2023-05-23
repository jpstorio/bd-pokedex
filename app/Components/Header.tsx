import { TbPokeball } from "react-icons/tb";

export default function Header() {
    return (
        <header>
            <div className="m-4 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 p-5">
                <div className="flex items-center">
                    <TbPokeball size={36} className="mr-3 text-teal-500" />
                    <div className="font-Nunito bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent">
                        Pokedex
                    </div>
                </div>
            </div>
        </header>
    );
}
