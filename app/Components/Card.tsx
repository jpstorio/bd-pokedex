import { useEffect, useState } from "react";

type CardProps = {
    content: {
        image: string;
        number: number;
        name: string;
        classification: string;
        types: [];
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

    return (
        <div
            style={{ order: isMobile ? getMobileOrder(index) : index + 1 }}
            className={`w-full flex flex-col rounded-xl bg-slate-100 p-5 sm:flex-row sm:items-center`}
        >
            <div className="flex justify-center items-center">
                <img src={content.image} className="w-36 h-36 object-contain rounded-md mix-blend-multiply" />
            </div>
            <div className="mt-5 sm:mt-0 flex flex-col gap-2 sm:ml-5">
                <div className="w-fit rounded-lg border bg-gradient-to-r bg-gradient-to-r from-gray-900 to-gray-600 pl-2 pr-2 text-white">
                    # {content.number}
                </div>
                <div className="text-3xl font-bold">{content.name}</div>
                <div>Classification: {content.classification}</div>
                <div className="flex content-center gap-2">
                    <div>Types:</div>
                    {content.types.map((types: string) => (
                        <div
                            key={types}
                            className={`${colorVariants[types]} flex items-center rounded-md pl-3 pr-3 text-sm font-bold uppercase text-white`}
                        >
                            {types}
                        </div>
                    ))}
                </div>

                <div>
                    Height: <span className="font-bold"> {content.height.minimum} </span> -
                    <span className="font-bold"> {content.height.maximum} </span>
                </div>
                <div>
                    Weight: <span className="font-bold"> {content.weight.minimum} </span> -
                    <span className="font-bold"> {content.weight.maximum} </span>
                </div>
            </div>
        </div>
    );
}
