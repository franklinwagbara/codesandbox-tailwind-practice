import logo from "../assets/logo.svg";

const Header = () =>{
    return (
        <div className="bg-gray-200 h-24 flex flex-col md:flex-row items-center px-12 py-24 md:py-4 gap-4 justify-center md:justify-between">
            <img src={logo} className="w-16"/>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <h3>Became an investor</h3>
                <button className="bg-red-500 px-12 py-4 text-white rounded-full">Login</button>
            </div>
        </div>
    );
}
export default Header;