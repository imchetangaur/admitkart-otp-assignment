import step1 from "../assets/step1.png";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { Toaster, toast } from "react-hot-toast";

function SignIn(props) {
	const { setStep, formData, setFormData } = props;

	function changeHandler(event) {
		setFormData((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});
	}

	function onCapthaVerify() {
		if (!window.recaptchaVerifier) {
			window.recaptchaVerifier = new RecaptchaVerifier(
				auth,
				"recaptcha-container",
				{
					size: "invisible",
					callback: (response) => {
						submitHandler();
					},
					"expired-callback": () => {},
				}
			);
		}
	}

	function submitHandler() {
		if (/^\d{10}$/.test(formData.phone) === false) {
			toast.error("Please enter a valid mobile number.");
			return;
		}
		onCapthaVerify();

		const appVerifier = window.recaptchaVerifier;
		const formatPh = "+91" + formData.phone;

		signInWithPhoneNumber(auth, formatPh, appVerifier)
			.then((confirmationResult) => {
				window.confirmationResult = confirmationResult;
				setStep(1);
				toast.success("OTP Send Successfully");
			})
			.catch((error) => {
				console.log("Error", error);
				setStep(0);
			});
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen overflow-x-hidden ">
			<Toaster toastOptions={{ duration: 4000 }} />
			<div className=" w-3/4">
				<div className="flex flex-col justify-center items-center leading-7 ">
					<img src={step1} alt="SignIn" className="mb-12" />
					<div className="text-center">
						<h1 className=" text-2xl font-normal mb-4">Welcome Back</h1>
						<p className=" text-base font-normal text-gray-400">
							Please sign in to your account
						</p>
					</div>
				</div>
				<div className="flex justify-center pt-12">
					<div>
						<div className="flex flex-col justify-center items-center pb-6">
							<input
								required
								id="phone"
								type="tel"
								value={formData.phone}
								onChange={changeHandler}
								name="phone"
								placeholder="Enter your number"
								className="border border-solid border-gray-400 rounded-md px-2 "
							/>
						</div>

						<div className="flex flex-col justify-center items-center pb-8 text-xs">
							<p className=" text-gray-400">
								We will send you a one time SMS message.
							</p>
							<p className=" text-gray-400"> Charges may apply.</p>
						</div>
						<div className="flex justify-center items-center text-base text-white w-full">
							<button
								id="recaptcha-container"
								className=" bg-yellow-600 rounded-2xl py-1 w-9/12"
								onClick={submitHandler}>
								Sign In with OTP
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
