
function Nav() {
    return (
        <div>
            <footer className="footer p-4 bg-neutral-content visible md:invisible">
                <div className="flex w-full items-center">
                    <div className="mx-auto">
                        <div className="w-8 rounded-full">
                            <img src="img/setting.png" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-8 rounded-full">
                            <img src="img/setting.png" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-8 rounded-full">
                            <img src="img/setting.png" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-8 rounded-full">
                            <img src="img/setting.png" />
                        </div>
                    </div>
                    <div className="mx-auto dropdown dropdown-top dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src="img/icon.jpeg" />
                            </div>
                        </label>
                        <ul tabindex="0" className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Nav;