import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <p className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Daily News</p>
                                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Top News</Link>
                                <Link to="business" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Business</Link>
                                <Link to="sports" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sports</Link>
                                <Link to="entertainment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Entertainment</Link>
                                <Link to="education" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Education</Link>
                                <Link to="technology" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Technology</Link>
                                <Link to="health" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Health</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header;