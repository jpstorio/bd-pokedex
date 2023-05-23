import { TbPokeball } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className="m-4 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 p-5">
                <div className="flex items-center justify-between">
                    <div className="items-center flex flex-row">
                        <TbPokeball size={36} className="mr-3 text-teal-500" />
                        <div className="font-Nunito bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent">
                            Pokedex
                        </div>
                    </div>
                    <div className="items-center flex invisible sm:visible">
                        <div className="font-Nunito bg-gradient-to-r from-emerald-700 to-cyan-800 bg-clip-text text-xl font-normal text-transparent">
                            <a href="https://github.com/jpstorio" target="_blank">
                                <FaGithubSquare className="inline-block mb-1 text-teal-900" /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
