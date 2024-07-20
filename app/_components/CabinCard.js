import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col md:flex-row border border-primary-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={image}
          layout="fill"
          alt={`Cabin ${name}`}
          className="object-cover"
        />
      </div>

      <div className="flex-grow bg-primary-800 p-5 md:p-7">
        <h3 className="text-accent-400 font-bold text-2xl mb-4">
          Cabin {name}
        </h3>

        <div className="flex items-center mb-3">
          <UsersIcon className="h-5 w-5 text-accent-500" />
          <p className="ml-2 text-lg text-primary-300">
            For up to <span className="font-semibold">{maxCapacity}</span> guests
          </p>
        </div>

        <div className="flex justify-between items-baseline mb-4">
          <div className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-light text-accent-500">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-500">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-light text-accent-500">
                ${regularPrice}
              </span>
            )}
          </div>
          <span className="text-primary-400 text-lg">/ night</span>
        </div>

        <div className="text-right">
          <Link
            href={`/cabins/${id}`}
            className="inline-block bg-accent-500 text-primary-900 py-2 px-4 rounded transition-all hover:bg-accent-600"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
