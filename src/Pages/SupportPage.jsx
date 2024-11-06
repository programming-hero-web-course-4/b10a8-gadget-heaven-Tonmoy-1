import { useState } from "react";
import BannerHeading from "../Components/BannerHeading";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="rounded-lg bg-[#9538E2] mb-5">
        <div className="w-8/12 text-center mx-auto p-12">
          <BannerHeading title={"We Are Here To Support You :)"} />
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Support</h1>
          <p className="text-gray-600 mb-8">
            Need help? Fill out the form below, and we&apos;ll get back to you
            shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Issue Type</label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>General Inquiry</option>
                  <option>Product Issue</option>
                  <option>Order Inquiry</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your issue"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#9538E2] text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
