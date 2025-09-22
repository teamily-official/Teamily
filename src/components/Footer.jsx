export function Footer() {
  return (
    <footer className="bg-[#fff]">
      <div className="mx-auto w-full px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-6">
        <div className="flex items-center space-x-3">
  <img 
    src="/src/assets/image/Teamlogo.png" 
    className="w-[16rem] h-[10rem] object-contain" 
    alt="TeamILy Logo"
  />

 
</div>


          {/* Contact Info */}
          {/* <div className="space-y-4 text-black">
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+91 7880090179</p>
              <p>+91 7024173063</p>
              <p>+91 8815399989</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>hr@alphawizz.com</p>
              <p>sales@alphawizz.com</p>
              <p>info@alphawizz.com</p>
            </div>
          </div> */}
        </div>

        {/* Company */}
        <div className="flex flex-row justify-around gap-[5rem]">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-black uppercase">
            Company
          </h2>
          <ul className="space-y-3 text-[#0080d3] font-medium">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Brand Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

         <div>
          <h2 className="mb-6 text-sm font-semibold text-black uppercase">
            Contact
          </h2>
          <ul className="space-y-3 text-[#0080d3] font-medium">
            <li>
              <a href="#" className="hover:underline">
                E-Mail
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Contact Number
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Address
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Website
              </a>
            </li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-black uppercase text-nowrap">
            Help Center
          </h2>
          <ul className="space-y-3 text-[#0080d3] font-medium">
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Discord Server
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-black uppercase">
            Services
          </h2>
          <ul className="space-y-3 text-[#0080d3] font-medium">
            <li>
              <a href="#" className="hover:underline text-nowrap">
                iOS App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Android App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-nowrap">
                Website Development
              </a>
            </li>
          </ul>
        </div>
        </div>

        {/* Contact */}
       

        {/* Newsletter */}
       {/* <div>
      <h2 className="mb-6 text-sm font-semibold text-black uppercase">
        Subscribe Our Newsletter
      </h2>
      <div className="flex mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-full border border-[#0080d3] rounded-l-lg focus:outline-none"
        />
        <button className="bg-[#0080d3] text-white px-4 rounded-r-lg">
          Subscribe
        </ button>
      </div>
    </div> */}
      </div>
    </footer>
  );
}
