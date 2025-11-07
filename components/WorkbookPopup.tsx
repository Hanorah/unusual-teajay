"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

export default function WorkbookPopup() {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	useEffect(() => {
		// Check if user has already seen the popup in this session
		const seen = sessionStorage.getItem("workbook-popup-seen");
		if (!seen) {
			// Show popup after 2 seconds
			const timer = setTimeout(() => {
				setIsOpen(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.phone) {
			return;
		}

		setIsSubmitting(true);
		setSubmitError(null);

		try {
			// Initialize EmailJS
			if (!emailjsConfig.publicKey || emailjsConfig.publicKey === "YOUR_PUBLIC_KEY_HERE") {
				throw new Error("EmailJS is not configured. Please set up your EmailJS credentials.");
			}

			// Prepare template parameters
			const templateParams = {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				source: "Popup",
				timestamp: new Date().toLocaleString(),
			};

			// Send email via EmailJS
			await emailjs.send(
				emailjsConfig.serviceId,
				emailjsConfig.workbookTemplateId || emailjsConfig.templateId,
				templateParams,
				emailjsConfig.publicKey
			);

			// Success - show download button
			setIsSubmitted(true);
			sessionStorage.setItem("workbook-popup-seen", "true");
		} catch (error) {
			console.error("EmailJS error:", error);
			setSubmitError(
				error instanceof Error ? error.message : "Failed to submit form. Please try again."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleDownload = () => {
		// Create a link element and trigger download
		const link = document.createElement("a");
		link.href = "/Responsible Leaders Workbook.pdf";
		link.download = "Responsible Leaders Workbook.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		setIsOpen(false);
	};

	const handleClose = () => {
		setIsOpen(false);
		sessionStorage.setItem("workbook-popup-seen", "true");
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
					/>

					{/* Popup */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="fixed inset-0 z-[9999] flex items-center justify-center p-[20px] pointer-events-none"
					>
						<div
							className="bg-white rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] sm:p-[25px] max-w-[500px] w-full shadow-2xl pointer-events-auto relative"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								onClick={handleClose}
								className="absolute top-[20px] right-[20px] w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#21212110] hover:bg-[#21212120] transition-colors"
							>
								<X size={20} className="text-secondry" />
							</button>

							{!isSubmitted ? (
								<>
									<h2 className="sub-heading font-semibold font-FoundersGrotesk text-secondry mb-[15px] pr-[40px]">
										Download Your Free Workbook
									</h2>
									<p className="paragraph font-NeueMontreal text-secondry/70 mb-[30px]">
										Get your copy of the Responsible Leaders Workbook by filling out the form below.
									</p>

									<form onSubmit={handleSubmit} className="space-y-[20px]">
										<div>
											<label
												htmlFor="popup-name"
												className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
											>
												Full Name
											</label>
											<input
												type="text"
												id="popup-name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-[#21212120] focus:border-secondry focus:outline-none transition-colors font-NeueMontreal text-secondry"
												placeholder="Your name"
											/>
										</div>

										<div>
											<label
												htmlFor="popup-email"
												className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
											>
												Email Address
											</label>
											<input
												type="email"
												id="popup-email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-[#21212120] focus:border-secondry focus:outline-none transition-colors font-NeueMontreal text-secondry"
												placeholder="your.email@example.com"
											/>
										</div>

										<div>
											<label
												htmlFor="popup-phone"
												className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
											>
												Phone Number
											</label>
											<input
												type="tel"
												id="popup-phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-[#21212120] focus:border-secondry focus:outline-none transition-colors font-NeueMontreal text-secondry"
												placeholder="+1 (555) 000-0000"
											/>
										</div>

										{submitError && (
											<div className="p-[15px] bg-red-50 border border-red-200 rounded-[10px] text-red-600 text-sm font-NeueMontreal">
												{submitError}
											</div>
										)}

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-secondry text-background py-[15px] px-[30px] rounded-full font-semibold font-NeueMontreal hover:bg-secondry/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{isSubmitting ? "Submitting..." : "Get Workbook"}
										</button>
									</form>
								</>
							) : (
								<div className="text-center">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="mb-[30px]"
									>
										<div className="w-[80px] h-[80px] mx-auto mb-[20px] flex items-center justify-center rounded-full bg-secondry/10">
											<Download size={40} className="text-secondry" />
										</div>
										<h3 className="text-2xl font-semibold font-FoundersGrotesk text-secondry mb-[10px]">
											Thank You!
										</h3>
										<p className="paragraph font-NeueMontreal text-secondry/70">
											Your workbook is ready to download.
										</p>
									</motion.div>

									<button
										onClick={handleDownload}
										className="w-full bg-secondry text-background py-[15px] px-[30px] rounded-full font-semibold font-NeueMontreal hover:bg-secondry/90 transition-colors flex items-center justify-center gap-[10px]"
									>
										<Download size={18} />
										Download Workbook
									</button>
								</div>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

