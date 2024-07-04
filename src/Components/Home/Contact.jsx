import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_k41ys42", "template_h1amiso", form.current, {
                publicKey: "YaAp1MiDt_7E0hzCf",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setTimeout(() => {
                        Swal.fire({
                            title: "Good job!",
                            text: "Message Sent!",
                            icon: "success",
                        });
                    }, 200);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setTimeout(() => {
                        Swal.fire({
                            title: "Sorry!",
                            text: "Message Not Sent!",
                            icon: "fail",
                        });
                    }, 200);
                }
            );
    };

    return (
        <div id="contactus" className="mx-auto container">
            <div className="py-12">
                <h1 className="text-3xl text-center mb-10">Contact Us</h1>
                <div className="flex items-center justify-center">
                    <div className="md:w-1/2 w-full mx-3 md:mx-0">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Your Name" name="user_name" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="email" className="grow" placeholder="Email" name="user_email" />
                                </label>
                            </div>
                            <textarea className="input input-bordered w-full h-40" name="message" id=""></textarea>
                            <button className="btn bg-[#00203f] hover:bg-[#00203f] text-white w-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
