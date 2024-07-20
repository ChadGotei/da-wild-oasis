"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in!");

    const nationalID = formData.get('nationalID');
    const nationalityValue = formData.get('nationality');

    if (!nationalID || !nationalityValue) throw new Error("Missing required form data");

    const [nationality, countryFlag] = nationalityValue.split('%');

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) throw new Error("Please provide a valid national ID");

    const updateData = { nationality, nationalID, countryFlag };

    const { data, error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.user.guestId)

    if (error) {
        console.error(error);
        throw new Error('Guest could not be updated');
    }

    revalidatePath('/account/profile');
}

export async function updateReservation(formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in!");

    // const guestBookings = await getBookings(session.user.guestId)
    // const guestBookingsIds = guestBookings.map((bookings) => bookings.id);

    // if(!guestBookingsIds.includes(bookingId)) throw new Error("This ain't your booking");

    const bookingId = Number(formData.get('bookingId'));
    const numGuests = Number(formData.get('numGuests'));
    const observations = formData.get('observations').slice(0, 1000);

    const updatedData = { numGuests, observations };

    const { error } = await supabase
        .from('bookings')
        .update(updatedData)
        .eq('id', bookingId)

    if (error) throw new Error('Booking could not be updated');

    revalidatePath(`/account/reservations/edit/${bookingId}`);
}

export async function deleteReservation(bookingId) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in!");

    const guestBookings = await getBookings(session.user.guestId)
    const guestBookingsIds = guestBookings.map((bookings) => bookings.id);

    if (!guestBookingsIds.includes(bookingId)) throw new Error("This aint your booking");

    const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

    if (error) throw new Error('Booking could not be deleted');

    revalidatePath('/account/reservations');
}

export async function createBooking(bookingData, formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in!");

    const newBooking = {
        ...bookingData,
        guestId: session.user.guestId,
        numGuests: Number(formData.get('numGuests')),
        observations: formData.get('observations').slice(0, 1000),
        isPaid: false,
        hasBreakfast: false,
        totalPrice: bookingData.cabinPrice,
        extraPrice: 0,
        status: 'unconfirmed',
    }

    console.log(newBooking);

    const { error } = await supabase
        .from('bookings')
        .insert([newBooking])

    if (error) throw new Error('Booking could not be created');

    revalidatePath(`/cabins/${bookingData.cabinId}`)

    redirect('/cabins/thankyou');
}

export async function signInAction() {
    await signIn('github', { redirectTo: '/account' });
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' });
}