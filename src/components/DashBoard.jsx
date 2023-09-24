import React from "react";
import finalPage from "../assets/step3.png";

const DashBoard = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen overflow-x-hidden ">
			<div className=" w-3/4">
				<div className="flex flex-col justify-center items-center leading-7 ">
					<img src={finalPage} alt="SignIn" className="mb-12" />
					<div className="text-center w-11/12">
						<h1 className=" text-2xl font-semibold mb-4">
							Welcome to AdmitKard
						</h1>
						<div className="w-full flex flex-col justify-center">
							<p className=" text-base font-normal text-gray-400">
								In order to provide you with a custom experience, <br />
								<span className=" text-gray-600 ">
									we need to ask you a few questions.
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-16">
					<div className="flex flex-col justify-center items-center pb-8 text-xs">
						<button className=" bg-yellow-600 rounded-2xl py-1 px-3 w-9/12 text-white text-sm font-semibold">
							Get Started
						</button>
						<p className=" text-gray-400">*This will only take 5 min.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
