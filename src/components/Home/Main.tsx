import React from "react";

const zincColors = {
    zincGray50: "#F9FAFB",
    zincGray100: "#F3F4F6",
    zincGray200: "#E5E7EB",
    zincGray300: "#D1D5DB",
    zincGray400: "#9CA3AF",
    zincGray500: "#6B7280",
    zincGray600: "#4B5563",
    zincGray700: "#374151",
    zincGray800: "#1F2937",
    zincGray900: "#111827",
};

const Main = () => {
    return (
        <div className="bg-zincGray100 py-12 px-4">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold text-center text-zincGray800 mb-8">
                    Welcome to our plant site
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-zinc-700 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/flower-1.jpg"
                            alt="Plant 1"
                            className="h-64 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 ">
                                Potted Plant
                            </h2>
                            <p className=" leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse accumsan rhoncus dui, ut vestibulum mi malesuada
                                eget. Sed a neque vel sapien placerat semper.
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-700 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/f-2.jpg"
                            alt="Plant 2"
                            className="h-64 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 ">
                                Hanging Plant
                            </h2>
                            <p className=" leading-relaxed">
                                Duis auctor dui ut felis dapibus, sed venenatis elit mattis.
                                Vivamus varius lectus enim, nec bibendum ex aliquam quis.
                                Praesent suscipit libero et sapien ullamcorper gravida.
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-700 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/f3.jpg"
                            alt="Plant 3"
                            className="h-64 w-full object-cover"
                        />
                        <div className="p-4 ">
                            <h2 className="text-xl font-bold mb-2 ">
                                Succulent Plant
                            </h2>
                            <p className=" leading-relaxed">
                                Nulla facilisi. Nulla vel elit ligula. Nullam tincidunt
                                bibendum ante ac pretium. Curabitur scelerisque est eu luctus
                                euismod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
