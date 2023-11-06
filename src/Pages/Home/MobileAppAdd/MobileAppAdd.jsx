import addAppBg from "../../../assets/images/addApp.jpg";
const MobileAddApp = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${addAppBg})`,
        }}>
        <div className="hero-overlay"></div>

          <div className=" flex w-full max-w-6xl mx-auto py-10">
            <div className="flex-1">
              <img
                src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h1 className="text-5xl font-bold text-white">Download our mobile app</h1>
              <p className=" text-white">
                Search through millions of jobs and find the right fit. Simply
                swipe right to apply.
              </p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Save jobs and searches</p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Apply direct from the job app</p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Get instant job notifications</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-black w-fit p-3 rounded-md">
                <i className="fa-brands fa-apple text-4xl text-white"></i> 
                <div>
                    <p className="text-white">Download on the</p>
                    <h2 className="text-2xl font-medium text-white">App Store</h2>
                </div>
                </div>
                <div className="flex items-center gap-2 bg-black w-fit p-3 rounded-md">
                <i className="fa-brands fa-google-play text-4xl text-white"></i> 
                <div>
                    <p className="text-white">Download on the</p>
                    <h2 className="text-2xl font-medium text-white">Play Store</h2>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAddApp;
