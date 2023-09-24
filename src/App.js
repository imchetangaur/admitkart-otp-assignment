import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import OtpVerify from "./components/OtpVerify";
import DashBoard from "./components/DashBoard";

function App() {
	const [otp, setOtp] = useState("");

	const [step, setStep] = useState(
		() => JSON.parse(localStorage.getItem("step")) || 0
	);

	const [formData, setFormData] = useState({
		phone: "",
	});

	if (step === 0)
		return (
			<SignIn setStep={setStep} formData={formData} setFormData={setFormData} />
		);
	else if (step === 1)
		return (
			<OtpVerify
				setStep={setStep}
				formData={formData}
				otp={otp}
				setOtp={setOtp}
				step={step}
			/>
		);
	else if (step === 2) return <DashBoard />;
}

export default App;
