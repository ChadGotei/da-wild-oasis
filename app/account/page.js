import { auth } from "../_lib/auth";
// import defaultpfp from '../../public/defaultpfp';

export const metadata = {
    title: 'Guest area'
}

async function Page() {
    const session = await auth();
    const firstName = session.user.name.split(' ')[0];
    const profilePicture = session.user.image;

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                    <img
                        src={profilePicture}
                        alt={`Profile picture of ${firstName}`}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="font-semibold text-xl md:text-2xl text-accent-400">
                    Welcome, {firstName}
                </h2>
            </div>

            <div className="bg-primary-900 shadow-md rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-accent-300 mb-3 md:mb-4">
                    Recent Notifications
                </h3>
                <p className="text-primary-100">
                    You have no new notifications at this time.
                </p>
            </div>
        </div>
    );
}

export default Page;
