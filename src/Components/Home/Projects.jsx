const Projects = () => {
    return (
        <div className="container mx-auto">
            <div className="my-20">
                <h1 className="text-3xl mb-10 text-center">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    <div className="border border-[#00203f] p-2 rounded-xl flex flex-col">
                        <img className="w-full h-64 mb-3" src="" alt="" />
                        <p className="mb-3">
                            Name:- <span className="font-bold">This is demo name</span>
                        </p>
                        <p>Features</p>
                        <ul className="list-disc ml-5 mb-4">
                            <li>One demo</li>
                            <li>One demo</li>
                            <li>One demo</li>
                        </ul>
                        <p className="mb-3">
                            Technologis:- <span className="font-bold"></span>
                        </p>
                        <div className="grid grid-cols-2 mb-3 gap-3">
                            <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Client</button>
                            <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Server</button>
                        </div>
                        <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Live View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
