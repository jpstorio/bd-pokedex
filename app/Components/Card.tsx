import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFireAlt, FaBug, FaDragon } from "react-icons/fa";
import {
    GiPoisonGas,
    GiHealthNormal,
    GiStrong,
    GiFlyingTrout,
    GiGroundbreaker,
    GiStoneSphere,
    GiGhost,
    GiSteelClaws,
    GiHighGrass,
    GiPsychicWaves,
    GiIceberg,
    GiFairyWings,
    GiWeight,
} from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdOutlineElectricBolt } from "react-icons/md";
import { VscWorkspaceUnknown, VscTypeHierarchySuper } from "react-icons/vsc";
import { SiShadow } from "react-icons/si";
import { AiOutlineColumnHeight } from "react-icons/ai";

type CardProps = {
    content: {
        image: string;
        number: number;
        name: string;
        classification: string;
        types: any;
        height: {
            minimum: string;
            maximum: string;
        };
        weight: {
            minimum: string;
            maximum: string;
        };
    };
    index: number;
};

export default function Card({ content, index }: CardProps) {
    // For mobile state
    const [isMobile, setIsMobile] = useState(false);

    // Detect if window is on mobile port
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to track window resize
        window.addEventListener("resize", handleResize);

        // Initial check on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getMobileOrder = (index: number) => {
        // Start index at 1
        index++;

        if (index % 2 === 0) {
            // If Even
            return index - 1;
        } else {
            // If Odd
            return index + 1;
        }
    };

    // For Type Colors
    const colorVariants: { [key: string]: string } = {
        Poison: "bg-purple-400",
        Normal: "bg-gray-400",
        Fighting: "bg-red-400",
        Flying: "bg-sky-400",
        Ground: "bg-amber-400",
        Rock: "bg-neutral-900",
        Bug: "bg-teal-500",
        Ghost: "bg-purple-800",
        Steel: "bg-gray-700",
        Fire: "bg-orange-400",
        Water: "bg-blue-400",
        Grass: "bg-green-400",
        Electric: "bg-yellow-700",
        Psychic: "bg-rose-700",
        Ice: "bg-sky-200",
        Dragon: "bg-blue-700",
        Fairy: "bg-pink-400",
        Unknown: "bg-neutral-400",
        Shadow: "bg-neutral-400",
    };

    // For Text Colors - Separated with colorVariants for easier customization as needed
    const textColorVariants: { [key: string]: string } = {
        Poison: "text-purple-400",
        Normal: "text-gray-400",
        Fighting: "text-red-400",
        Flying: "text-sky-400",
        Ground: "text-amber-400",
        Rock: "text-neutral-900",
        Bug: "text-teal-500",
        Ghost: "text-purple-800",
        Steel: "text-gray-700",
        Fire: "text-orange-400",
        Water: "text-blue-400",
        Grass: "text-green-400",
        Electric: "text-yellow-700",
        Psychic: "text-rose-700",
        Ice: "text-sky-200",
        Dragon: "text-blue-700",
        Fairy: "text-pink-400",
        Unknown: "text-neutral-400",
        Shadow: "text-neutral-400",
    };

    const iconTypeVariants: any = {
        Poison: <GiPoisonGas />,
        Normal: <GiHealthNormal />,
        Fighting: <GiStrong />,
        Flying: <GiFlyingTrout />,
        Ground: <GiGroundbreaker />,
        Rock: <GiStoneSphere />,
        Bug: <FaBug />,
        Ghost: <GiGhost />,
        Steel: <GiSteelClaws />,
        Fire: <FaFireAlt />,
        Water: <IoIosWater />,
        Grass: <GiHighGrass />,
        Electric: <MdOutlineElectricBolt />,
        Psychic: <GiPsychicWaves />,
        Ice: <GiIceberg />,
        Dragon: <FaDragon />,
        Fairy: <GiFairyWings />,
        Unknown: <VscWorkspaceUnknown />,
        Shadow: <SiShadow />,
    };

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100,
        transition: {
            delay: 9,
        },
    };

    return (
        <motion.div
            transition={spring}
            animate={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 0.98 }}
            style={{ order: isMobile ? getMobileOrder(index) : index + 1 }}
            className={`w-full flex flex-col rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 p-5 sm:flex-row sm:items-center justify-center`}
        >
            <div className="flex justify-center items-center">
                <img src={content.image} className="w-36 h-36 object-contain rounded-md mix-blend-multiply" />
            </div>
            <div className="mt-5 sm:mt-0 flex flex-col gap-2 sm:ml-5">
                <div className="w-fit rounded-lg border bg-gradient-to-r bg-gradient-to-r from-gray-900 to-gray-600 pl-2 pr-2 text-white">
                    # {content.number}
                </div>
                <div className={`${textColorVariants[content.types[0]]} text-3xl font-semibold`}>{content.name}</div>

                <table>
                    <tbody>
                        <tr>
                            <td>Classification: </td>
                            <td className="pl-3">{content.classification}</td>
                        </tr>
                        <tr>
                            <td className="items-center">
                                <VscTypeHierarchySuper className="inline-block" /> Types:
                            </td>
                            <td className="flex flex-wrap content-center gap-2 pl-3">
                                {content.types.map((types: string) => (
                                    <div
                                        key={types}
                                        className={`${colorVariants[types]} flex items-center rounded-md pl-3 pr-3 text-sm font-normal uppercase text-white gap-2`}
                                    >
                                        {iconTypeVariants[types]}
                                        {types}
                                    </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td className="items-center">Height:</td>
                            <td className="pl-3">
                                <AiOutlineColumnHeight className="inline-block" />
                                <span className="font-medium"> {content.height.minimum} </span> -
                                <span className="font-medium"> {content.height.maximum} </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="items-center">Weight:</td>
                            <td className="pl-3">
                                <GiWeight className="inline-block" />
                                <span className="font-medium"> {content.weight.minimum} </span> -
                                <span className="font-medium"> {content.weight.maximum} </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <div>Classification: {content.classification}</div>
                <div className="flex content-center gap-2">
                    <span className="mr-3">Types:</span>
                    {content.types.map((types: string) => (
                        <div
                            key={types}
                            className={`${colorVariants[types]} flex items-center rounded-md pl-3 pr-3 text-sm font-normal uppercase text-white gap-2`}
                        >
                            {iconTypeVariants[types]}
                            {types}
                        </div>
                    ))}
                </div>

                <div>
                    <div className="w-12 inline-block">Height:</div>{" "}
                    <span className="font-medium ml-5"> {content.height.minimum} </span> -
                    <span className="font-medium"> {content.height.maximum} </span>
                </div>
                <div>
                    <div className="w-12 inline-block">Weight:</div>{" "}
                    <span className="font-medium ml-5"> {content.weight.minimum} </span> -
                    <span className="font-medium"> {content.weight.maximum} </span>
                </div> */}
            </div>
        </motion.div>
    );
}
