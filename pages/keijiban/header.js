
function Header() {
    return (
        <div>
            <div className="navbar bg-opacity-50 bg-base-100 backdrop-blur">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Title</a>
                </div>
                <div className="flex-none gap-2 invisible md:visible">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="img/icon.jpeg" />
                            </div>
                        </label>
                        <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;