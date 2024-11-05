const Footer = () => {
  return (
    <div className="py-[100px] border-2 backdrop-blur-2xl text-white bg-[#684088] border-gray-100">
      <div className="container mx-auto text-center space-y-8">
        <div>
          <h1 className="mb-3 font-bold text-[2rem] ">Gadget Heaven</h1>
          <p className="font-medium text-base  text-opacity-60">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr />
        <div className="flex px-10  justify-evenly">
          <div>
            <h3 className="mb-4 font-bold text-[18px] ">Services</h3>
            <div className="space-y-2 text-base font-thin text-opacity-60">
              <p>Product Support</p>
              <p>Order Tracking</p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-[18px] ">Company</h2>
            <div className="space-y-2 font-thin text-base text-opacity-60">
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <p className="mb-4 font-bold text-[18px] ">Legal</p>
            <div className="space-y-2 text-base font-thin  text-opacity-60">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
