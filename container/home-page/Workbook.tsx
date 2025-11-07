"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Download, BookOpen } from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

export default function Workbook() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

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
				source: "Section",
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
	};

	return (
		<section id="workbook" className="w-full padding-y bg-white relative z-20">
			<div className="padding-x">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[40px] items-center">
						{/* Left Side - Content */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="w-[80px] h-[80px] flex items-center justify-center rounded-[20px] bg-secondry/10 mb-[30px]">
								<BookOpen size={40} className="text-secondry" />
							</div>
							<h2 className="sub-heading font-semibold font-FoundersGrotesk text-secondry mb-[20px]">
								Responsible Leaders Workbook
							</h2>
							<p className="paragraph font-NeueMontreal text-secondry/70 mb-[30px]">
								Unlock your leadership potential with our comprehensive workbook. This guide is designed
								to help you develop essential leadership skills, build stronger teams, and create a
								positive impact in your organization.
							</p>
							<ul className="space-y-[15px] mb-[40px]">
								<li className="flex items-start gap-[15px]">
									<div className="w-[6px] h-[6px] rounded-full bg-secondry mt-[10px] flex-shrink-0" />
									<p className="paragraph font-NeueMontreal text-secondry/70">
										Practical exercises and frameworks
									</p>
								</li>
								<li className="flex items-start gap-[15px]">
									<div className="w-[6px] h-[6px] rounded-full bg-secondry mt-[10px] flex-shrink-0" />
									<p className="paragraph font-NeueMontreal text-secondry/70">
										Real-world case studies and examples
									</p>
								</li>
								<li className="flex items-start gap-[15px]">
									<div className="w-[6px] h-[6px] rounded-full bg-secondry mt-[10px] flex-shrink-0" />
									<p className="paragraph font-NeueMontreal text-secondry/70">
										Actionable strategies for immediate implementation
									</p>
								</li>
							</ul>
						</motion.div>

						{/* Right Side - Form */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-marquee rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] border border-[#21212110] shadow-sm"
						>
							{!isSubmitted ? (
								<>
									<h3 className="text-2xl font-semibold font-FoundersGrotesk text-white mb-[10px]">
										Get Your Free Copy
									</h3>
									<p className="text-base font-NeueMontreal text-white/70 mb-[30px]">
										Fill out the form below to download your workbook.
									</p>

									<form onSubmit={handleSubmit} className="space-y-[25px]">
										<div>
											<label
												htmlFor="section-name"
												className="block text-sm font-medium font-NeueMontreal text-white mb-[8px]"
											>
												Full Name
											</label>
											<input
												type="text"
												id="section-name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-white/20 bg-white/10 focus:border-white focus:bg-white/20 focus:outline-none transition-colors font-NeueMontreal text-white placeholder:text-white/50"
												placeholder="Your name"
											/>
										</div>

										<div>
											<label
												htmlFor="section-email"
												className="block text-sm font-medium font-NeueMontreal text-white mb-[8px]"
											>
												Email Address
											</label>
											<input
												type="email"
												id="section-email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-white/20 bg-white/10 focus:border-white focus:bg-white/20 focus:outline-none transition-colors font-NeueMontreal text-white placeholder:text-white/50"
												placeholder="your.email@example.com"
											/>
										</div>

										<div>
											<label
												htmlFor="section-phone"
												className="block text-sm font-medium font-NeueMontreal text-white mb-[8px]"
											>
												Phone Number
											</label>
											<input
												type="tel"
												id="section-phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												required
												className="w-full px-[20px] py-[15px] rounded-[10px] border border-white/20 bg-white/10 focus:border-white focus:bg-white/20 focus:outline-none transition-colors font-NeueMontreal text-white placeholder:text-white/50"
												placeholder="+1 (555) 000-0000"
											/>
										</div>

										{submitError && (
											<div className="p-[15px] bg-red-500/20 border border-red-500/50 rounded-[10px] text-red-200 text-sm font-NeueMontreal">
												{submitError}
											</div>
										)}

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-white text-secondry py-[15px] px-[30px] rounded-full font-semibold font-NeueMontreal hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{isSubmitting ? "Submitting..." : "Get Workbook"}
										</button>
									</form>
								</>
							) : (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-center"
								>
									<div className="w-[80px] h-[80px] mx-auto mb-[20px] flex items-center justify-center rounded-full bg-white/10">
										<Download size={40} className="text-white" />
									</div>
									<h3 className="text-2xl font-semibold font-FoundersGrotesk text-white mb-[10px]">
										Thank You!
									</h3>
									<p className="paragraph font-NeueMontreal text-white/70 mb-[30px]">
										Your workbook is ready to download.
									</p>

									<button
										onClick={handleDownload}
										className="w-full bg-white text-secondry py-[15px] px-[30px] rounded-full font-semibold font-NeueMontreal hover:bg-white/90 transition-colors flex items-center justify-center gap-[10px]"
									>
										<Download size={18} />
										Download Workbook
									</button>
								</motion.div>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

