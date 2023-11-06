/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useState } from "react";

const Rivew = () => {
  const [rivews, setRivews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setRivews(data));
  }, []);
  // console.log(rivews);
  return (
    <div className="bg-[#f7f4e9] py-10">
        <div className="w-fit mx-auto text-center">
            <h3 className="text-5xl font-bold mb-2">What our customers says</h3>
            <p className="text-gray-600 font-medium mb-10">Don't take our word for it, take theirs!</p>
        </div>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {rivews.map((rivew) => (
          <div
            key={rivew.id}
            className="relative flex w-full flex-col rounded-xl border p-5 bg-white">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <img
                src={rivew?.author_profile_pic}
                alt="tania andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {rivew?.author_name}
                  </h5>
                  <div className="flex items-center gap-0 5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 ">
                      <path
                        
                        d="M21.8892 1.90403C23.2626 3.3627 23.9999 4.9987 23.9999 7.6507C23.9999 12.3174 20.7239 16.5 15.9599 18.568L14.7692 16.7307C19.2159 14.3254 20.0852 11.204 20.4319 9.23603C19.7159 9.6067 18.7786 9.73603 17.8599 9.6507C15.4546 9.42803 13.5586 7.45336 13.5586 4.9987C13.5586 3.76102 14.0502 2.57404 14.9254 1.69887C15.8006 0.823697 16.9876 0.332031 18.2252 0.332031C19.6559 0.332031 21.0239 0.985364 21.8892 1.90403ZM8.55589 1.90403C9.92923 3.3627 10.6666 4.9987 10.6666 7.6507C10.6666 12.3174 7.39056 16.5 2.62656 18.568L1.4359 16.7307C5.88256 14.3254 6.7519 11.204 7.09856 9.23603C6.38256 9.6067 5.44523 9.73603 4.52656 9.6507C2.12123 9.42803 0.226562 7.45336 0.226562 4.9987C0.226563 3.76102 0.718227 2.57404 1.5934 1.69887C2.46857 0.823697 3.65555 0.332031 4.89323 0.332031C6.3239 0.332031 7.6919 0.985364 8.55723 1.90403H8.55589Z"
                        fill="#007456"></path>
                    </svg>
                   
                   
                   
                  </div>
                </div>
                <p className="font-medium">
                  {rivew?.category}
                </p>
              </div>
            </div>
            <div className="">
                <h3 className="text-xl font-semibold mb-2">{rivew?.title}</h3>
              <p className="text-gray-600">
                {rivew?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rivew;
