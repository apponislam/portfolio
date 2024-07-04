const Banner = () => {
    return (
        <div className="container mx-auto  min-h-screen xl:h-auto">
            <div className="rounded-2xl relative mx-2 xl:mx-0 min-h-screen xl:h-auto">
                <img className="rounded-2xl min-h-screen xl:h-auto object-cover" src="/banner2.png" />
                <div className="text-white absolute top-1/2 left-3 xl:left-48 -translate-y-1/2">
                    <p className="text-2xl">Welcome to my portfolio</p>
                    <h1 className="text-8xl mb-4">
                        Appon <br />
                        Islam
                    </h1>
                    <p className="btn rounded-none p-3 px-6 mb-4">A Web Developer</p>
                    <p>
                        MERN Stack Developer specializes in building web applications using MongoDB, <br className="hidden xl:block" /> Express.js, React, and Node.js. They possess foundational skills in front-end and <br className="hidden xl:block" /> back-end development, creating responsive user interfaces, and managing <br className="hidden xl:block" /> server-side logic and database operations
                    </p>
                    <a href="../src/assets/CV.pdf" target="_blank">
                        <p className="btn rounded-none p-3 px-6 mt-4 bg-transparent text-white hover:bg-white hover:text-black">Download CV</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
