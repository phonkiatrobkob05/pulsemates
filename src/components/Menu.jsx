import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div className="fixed bottom-5 left-0 w-full flex justify-center items-center bg-[#F4FEFF] drop-shadow-2xl">
            <div className="flex flex-row gap-4">
                <NavLink to="/dashboard/profile" className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "text-[#0077B6]" : "text-gray-500"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.37 21.25a.75.75 0 0 1-.75.75H4.38a.75.75 0 0 1-.75-.75c0-4.1 4.5-7.28 8.37-7.28s8.37 3.18 8.37 7.28M17.1 7.11A5.1 5.1 0 1 1 12 2a5.11 5.11 0 0 1 5.1 5.11" />
                    </svg>
                    <h1>Profile</h1>
                </NavLink>

                <NavLink to="/dashboard/pulsemate-bp" className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "text-[#0077B6]" : "text-gray-500"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2 8V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4.5q0 .425-.288.713T21 11.5t-.712-.288T20 10.5V6H4v2q0 .425-.288.713T3 9t-.712-.288T2 8m5 9q-.275 0-.525-.137T6.1 16.45L4.4 13H3.025q-.425 0-.712-.288T2.025 12t.288-.712t.712-.288h2q.275 0 .513.15t.362.4l1.1 2.2l3.1-6.2q.125-.25.375-.375T11 7.05t.525.125t.375.375l1.675 3.35q-.45.275-.862.575t-.763.675l-.95-1.9l-3.1 6.2q-.125.275-.375.413T7 17m-3 3q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h5.375q.425 0 .713.288t.287.712t-.288.713t-.712.287zm13 2q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m2.125-6.425q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15l-1.575 1.55q-.15.15-.15.363t.15.362t.362.15t.363-.15z" />
                    </svg>
                    <h1>PulseMate BP</h1>
                </NavLink>

                <NavLink to="/dashboard/monitor" className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "text-[#0077B6]" : "text-gray-500"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 13H2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1m16-4h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m-8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1" />
                    </svg>
                    <h1>Dashboard</h1>
                </NavLink>

                <NavLink to="/dashboard/history" className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "text-[#0077B6]" : "text-gray-500"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11 1.799c-4.445 0-8.061 3.562-8.169 7.996V10H.459l3.594 3.894L7.547 10H4.875v-.205C4.982 6.492 7.683 3.85 11 3.85c3.386 0 6.131 2.754 6.131 6.15S14.386 16.15 11 16.15a6.1 6.1 0 0 1-3.627-1.193l-1.406 1.504A8.13 8.13 0 0 0 11 18.199c4.515 0 8.174-3.67 8.174-8.199S15.515 1.799 11 1.799M10 5v5a1 1 0 0 0 .293.707l3.2 3.2c.283-.183.55-.389.787-.628L12 11V5z" />
                    </svg>
                    <h1>History</h1>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
