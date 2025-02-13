import Cabin from "@/app/_components/Cabin";
import DateSelector from "@/app/_components/DateSelector";
import { Reservation } from "@/app/_components/Reservation";
import ReservationForm from "@/app/_components/ReservationForm";
import Spinner from "@/app/_components/Spinner";
import { getCabins, getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { name } = await getCabin(params.cabinId);

    return {
        title: `Cabin ${name}`,
    }
}

export async function generateStaticParams() {
    const cabins = await getCabins();
    const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

    // console.log(ids);
    return ids;
}

export const revalidate = 3600;

export default async function Page({ params }) {
    const cabin = await getCabin(params.cabinId);
    // const settings = await getSettings();
    // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />

            <div>
                <h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>

                <Suspense fallback={<Spinner />}>
                    <Reservation cabin={cabin} />
                </Suspense>

            </div>
        </div>
    );
}
