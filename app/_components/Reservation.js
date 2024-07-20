import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm"

export async function Reservation({ cabin }) {
    const session = await auth();

    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id)
    ])

    // console.log(settings);

    return <div className="border-primary-800 border flex justify-center align-middle flex-col gap-10 md:grid md:grid-cols-2 md:min-h-[400px] ">
        <DateSelector
            settings={settings}
            cabin={cabin}
            bookedDates={bookedDates}
        />
        {session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
    </div>
}