import React, { useEffect } from "react";
import step2 from "../assets/step2.png";
import toast from "react-hot-toast";

function OtpVerify(props) {
	const { setStep, step, otp, setOtp, formData } = props;

	function changeHandler(event) {
		event.preventDefault();
		setOtp(event.target.value);
	}

	useEffect(() => {
		localStorage.setItem("step", JSON.stringify(step));
	}, [step]);

	function onOTPVerify() {
		window.confirmationResult
			.confirm(otp)
			.then(async (res) => {
				// console.log(res.data);
				setStep(2);
				toast.success("Yay! OTP is verified.");
			})
			.catch((err) => {
				toast.error("Wrong OTP, enter again");
				setStep(1);
			});
	}

	return (
		<div
			className="flex flex-col justify-center 
      items-center h-screen overflow-x-hidden ">
			<div className=" text-center w-11/12">
				<img src={step2} alt="" className=" m-auto" />
				<h1 className=" text-2xl text-gray-950 w-full py-6">
					Please verify Mobile number
				</h1>
				<div className="flex flex-col text-base leading-4 w-full">
					<p className=" m-2 text-gray-400">
						An OTP is sent to{" "}
						<span className=" text-gray-950">+91{formData.phone}</span>
					</p>
					<span
						onClick={() => setStep(0)}
						className=" text-xs text-orange-400 cursor-pointer underline">
						Change Phone Number
					</span>
				</div>
				<input
					required
					type="text"
					maxLength={6}
					value={otp}
					name="opt"
					onChange={changeHandler}
					className=" my-14 border border-black border-solid rounded-md px-2"
				/>
				<div className="flex gap-2 justify-center mb-11">
					<p className=" text-gray-400 font-normal cursor-pointer text-base">
						Didn't receive the code?
					</p>
					<span className=" text-yellow-600 cursor-pointer text-base">
						Resend
					</span>
				</div>
				<div className="flex justify-center items-center text-base text-white w-full">
					<button
						className=" bg-yellow-600 rounded-2xl py-1 w-4/12"
						onClick={onOTPVerify}>
						Verify
					</button>
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;
