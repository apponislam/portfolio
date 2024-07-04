const Projects = () => {
    return (
        <div id="projects" className="container mx-auto">
            <div className="my-20">
                <h1 className="text-3xl mb-10 text-center">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mx-3 xl:mx-0">
                    <div className="border border-[#00203f] p-2 rounded-xl flex flex-col">
                        <img className="w-full h-64 mb-3" src="/img/project1.png" alt="" />
                        <p className="mb-3">
                            Name:- <span className="font-bold">Painting and Drawing</span>
                        </p>
                        <p>Features</p>
                        <ul className="list-disc ml-5 mb-4">
                            <li>You can sell your painting</li>
                            <li>You can buy someones painting</li>
                            <li>You can showcase you paintings</li>
                        </ul>
                        <p className="mb-3">
                            Technologis:- <span className="font-bold">HTML, CSS, JavaScript, React, Firebase, NodeJs, Express.Js, MongoDB</span>
                        </p>
                        <div className="grid grid-cols-2 mb-3 gap-3">
                            <a href="https://github.com/apponislam/painting-drawing-client" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Client</button>
                            </a>
                            <a href="https://github.com/apponislam/painting-drawing-server" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Server</button>
                            </a>
                        </div>
                        <a href="https://assignmentb9a10.web.app/" target="_blank">
                            <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Live View</button>
                        </a>
                    </div>

                    <div className="border border-[#00203f] p-2 rounded-xl flex flex-col">
                        <img className="w-full h-64 mb-3" src="/img/project2.png" alt="" />
                        <p className="mb-3">
                            Name:- <span className="font-bold">Appon Assignment</span>
                        </p>
                        <p>Features</p>
                        <ul className="list-disc ml-5 mb-4">
                            <li>You can create an assignment</li>
                            <li>You can apply for teacher community</li>
                            <li>You can submit your assignment</li>
                        </ul>
                        <p className="mb-3">
                            Technologis:- <span className="font-bold">HTML, CSS, JavaScript, React, Firebase, NodeJs, Express.Js, MongoDB</span>
                        </p>
                        <div className="grid grid-cols-2 mb-3 gap-3">
                            <a href="https://github.com/apponislam/assignments-client" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Client</button>
                            </a>
                            <a href="https://github.com/apponislam/Classrooms-server" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Server</button>
                            </a>
                        </div>
                        <a href="https://assignmentb9a11.web.app/" target="_blank">
                            <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Live View</button>
                        </a>
                    </div>

                    <div className="border border-[#00203f] p-2 rounded-xl flex flex-col">
                        <img className="w-full h-64 mb-3" src="/img/project3.png" alt="" />
                        <p className="mb-3">
                            Name:- <span className="font-bold">Appon Classroom</span>
                        </p>
                        <p>Features</p>
                        <ul className="list-disc ml-5 mb-4">
                            <li>You can create an class</li>
                            <li>You can be a teacher and manage classes</li>
                            <li>Here you can sell classes</li>
                        </ul>
                        <p className="mb-3">
                            Technologis:- <span className="font-bold">HTML, CSS, JavaScript, React, Firebase, NodeJs, Express.Js, MongoDB</span>
                        </p>
                        <div className="grid grid-cols-2 mb-3 gap-3">
                            <a href="https://github.com/apponislam/Classrooms-client" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Client</button>
                            </a>
                            <a href="https://github.com/apponislam/Classrooms-server" target="_blank">
                                <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Server</button>
                            </a>
                        </div>
                        <a href="https://assignmentb9a12.web.app/" target="_blank">
                            <button className="text-white bg-[#00203f] h-auto hover:bg-[#00203f] hover:text-white btn w-full">Live View</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
