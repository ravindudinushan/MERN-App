import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen
                            bg-[#444544]">
                <div className="h-auto
                mt-4 mb-4
                pl-9 pr-9 mx-auto
                border-gray-500
                border-[0.5px]">
                    <h2 className="pt-2 pb-3
                                  text-3xl
                                  text-green-400
                                  underline
                                  decoration-2">
                        Sign In</h2>
                    <form className="h-auto
                                     p-2
                                     justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Email:</label>
                            <input className="float-right
                                              border-[1px]
                                              border-green-200
                                              w-3/4"
                                   type="email"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Password:</label>
                            <input className="float-right
                                              border-[1px]
                                              border-green-200
                                              w-3/4"
                                   type="password"/>
                            <div className="mt-2">
                                <button className="mt-5
                                                   w-full
                                                   p-[6px]
                                                   bg-green-400
                                                   text-[7px]">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}