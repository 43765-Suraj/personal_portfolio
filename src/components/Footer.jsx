const Footer = () => {
    return (
      <>
        <div className="py-5 border bg-gray-100 flex flex-col md:flex-row justify-between px-6 md:px-72">
          {/* Left Section (Text) */}
          <div>
            <p className="text-center md:text-left">
              @2025 Suraj Shende<span> All Rights Reserved</span>
            </p>
          </div>
  
          {/* Right Section (Links) */}
          <div className="flex justify-center md:justify-end space-x-3 md:space-x-5 mt-4 md:mt-0">
            <a href="/about" className="hover:underline">About</a>
            <a href="/policy" className="hover:underline">Privacy Policy</a>
            <a href="/licences" className="hover:underline">Licence</a>
            <a href="/Contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  