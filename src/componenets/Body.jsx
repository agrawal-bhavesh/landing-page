import React from "react";

const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 lg:h-72 lg:w-82 lg:mt-20">
        <img className="h-72 w-72 md:h-96 md:w-96" src="assets/web.png" alt="image" />
      </div>

      <div className="flex items-center justify-center text-center">
        <h1 className="text-2xl font-serif font-bold md:text-5xl">Host your website in just 5 minutes</h1>
      </div>

      <div className="flex items-center justify-center mt-3 ">
        <p className="md:text-3xl">Create and host your website in just 5 minutes</p>
      </div>

      <div className="flex items-center justify-center mt-4">
        <form action="">
          <input type="email" placeholder="Email" className="w-72 p-1 rounded-md md:text-2xl md:w-96 md:mt-4"/>
        </form>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button className="bg-blue-500 p-2 text-white rounded-md w-72 md:w-96 md:p-3 md:text-2xl">Join Waitlist</button>
      </div>
    </>
  );
};

export default Body;
