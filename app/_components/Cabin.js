import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cabin({ cabin }) {
    const { name, maxCapacity, image, description } = cabin;

    return (
        <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 sm:px-10 mb-24 px-20">
            <div className="relative scale-[1.15] -translate-x-3 xs:scale-100 xs:translate-x-0 xs:w-full xs:h-60 xs:mb-4 hidden sm:block">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="xs:px-2">
                <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%] xs:text-3xl xs:translate-x-0 xs:w-full xs:py-3 xs:mb-3 hidden sm:block">
                    Cabin {name}
                </h3>

                <h3 className="text-accent-100 font-black text-8xl mb-5 bg-primary-950 p-6 pb-1 text-center sm:hidden">
                    Cabin {name}
                </h3>

                <p className="text-lg text-primary-300 mb-10 xs:text-sm xs:mb-4">
                    <TextExpander>
                        {description}
                    </TextExpander>
                </p>

                <ul className="flex flex-col gap-4 mb-7 xs:gap-3 xs:mb-4">
                    <li className="flex gap-3 items-center xs:text-xs">
                        <UsersIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg xs:text-xs">
                            For up to <span className="font-bold">{maxCapacity}</span> guests
                        </span>
                    </li>
                    <li className="flex gap-3 items-center xs:text-xs">
                        <MapPinIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg xs:text-xs">
                            Located in the heart of the{" "}
                            <span className="font-bold">Dolomites</span> (Italy)
                        </span>
                    </li>
                    <li className="flex gap-3 items-center xs:text-xs">
                        <EyeSlashIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg xs:text-xs">
                            Privacy <span className="font-bold">100%</span> guaranteed
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cabin;
