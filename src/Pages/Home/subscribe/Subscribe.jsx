/* eslint-disable react/no-unescaped-entities */
const Subscribe = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-3">
           <h3 className="text-[#007456] text-3xl"><i className="fa-solid fa-envelopes-bulk"></i></h3>
            <div>
                <h2 className="text-4xl font-semibold text-center">Subscribe to our newsletter</h2>
                <p className="font-medium text-gray-600 text-center">We'll keep you updated with the best new jobs.</p>
            </div>
        </div>
      <div className="form-control">
        <label className="input-group">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <span className="bg-[#005d45] hover:bg-[#104235]  py-2 text-white text-xl font-medium">
            Subscribe
          </span>
        </label>
      </div>
      </div>
    </div>
  );
};

export default Subscribe;
