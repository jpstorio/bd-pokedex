import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiApollographql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export default function Footer() {
    return (
        <footer>
            <div className="m-4 p-3">
                <div className="flex items-center justify-center text-center flex-col sm:flex-row">
                    <span className="font-Nunito mr-0 sm:mr-3 mb-3 sm:mb-0 text-sm">Created with </span>
                    <div className="flex gap-2 flex-wrap justify-center items-center">
                        <div className="rounded-md">
                            <FaReact />
                        </div>
                        <div className="rounded-md">
                            <SiNextdotjs />
                        </div>
                        <div className="rounded-md">
                            <SiTailwindcss />
                        </div>
                        <div className="rounded-md">
                            <GrGraphQl />
                        </div>
                        <div className="rounded-md">
                            <SiApollographql />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
