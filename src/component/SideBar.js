"use client";

import { useRouter } from 'next/navigation';

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

const SideBar = () => {
    const router = useRouter();
    return (
        <section className='drop-shadow-xl rounded-3xl overflow-hidden bg-white'>
            <div className="overflow-hidden text-white w-full">
                <ul>
                    <div className="flex justify-start">
                        <img
                            src="/image/mimt/about/about.jpg"
                            alt="side-bar-image"
                            className="w-full"
                        />
                    </div>
                    <div className='rounded-t-3xl'>
                        <h2 className="text-2xl font-novaReg text-black pl-6 p-4 max-lg:p-5">Quick Link</h2>
                        {/* <h2 className="text-2xl font-novaReg pl-6 p-4 max-lg:p-5">{title}</h2> */}
                        <div>
                            {SideBarLink?.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => router.push(item.link)}
                                    className="relative border-b p-4 max-lg:p-4 block bg-primary text-white text-left text-sm w-full group overflow-hidden"
                                >
                                    <span className="relative pl-2 z-10 transition-colors duration-500 ease-in-out truncate group-hover:text-black">
                                        ‒&nbsp; {item.name}
                                    </span>
                                    <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}

export default SideBar;