
import { Link } from "react-router-dom";

export default function NavbarApp() {
    return (
        <nav className="w-full px-5 sm:px-10 py-0 shadow-xl 
        fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row
                            gap-7 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                <h3 className="text-3xl text-purple-700 text-opacity-50 font-bold">Kindergarten</h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/">Despre </Link>
                    </li>
                    <li>
                        <Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/skills">Cluburi copii </Link>
                    </li>
                    <li>   <Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/afterSchools">AfterSchool</Link>
                    </li>
                    {/* <li><a className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" href="#projects">Projects</a>
                    </li> */}
                    {/* <li><Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/grupe">Grupe</Link>
                    </li> */}
                    <li><Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/contact">Contact</Link>
                    </li>
                    {/* <li><Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/todo">Copii</Link>
                    </li> */}
                    <li><Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/copiiList">Lista Copii</Link>
                    </li>
                    {/* <li><Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/quizApp">Test quiz</Link>
                    </li> */}
                    <li>
                        <Link className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500" to="/educatoare">Educatoare</Link>
                    </li>
                </ul>

            </div>
        </nav>

    )
}