const Home = () => {
    return (
        <div className="container mx-auto rounded-2xl relative">
            <img className="rounded-2xl" src="/banner2.png" />
            <div className="text-white absolute top-1/2 left-48 -translate-y-1/2">
                <p className="text-2xl">Welcome to my portfolio</p>
                <h1 className="text-8xl mb-4">
                    Appon <br />
                    Islam
                </h1>
                <p className="btn rounded-none p-3 px-6 mb-4">A Web Developer</p>
                <p>
                    MERN Stack Developer specializes in building web applications using MongoDB, <br /> Express.js, React, and Node.js. They possess foundational skills in front-end and <br /> back-end development, creating responsive user interfaces, and managing <br /> server-side logic and database operations
                </p>
                <p className="btn rounded-none p-3 px-6 mt-4 bg-transparent text-white hover:bg-white hover:text-black">Download CV</p>
            </div>
        </div>
    );
};

export default Home;
