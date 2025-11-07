"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/constants";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		const messageLines = [
			"Hi! I'd love to learn more about your coaching services.",
			`Name: ${formData.name}`,
			`Email: ${formData.email}`,
			formData.phone ? `Phone: ${formData.phone}` : "",
			`Message: ${formData.message}`,
		].filter(Boolean);

		const whatsappUrl = getWhatsAppLink(messageLines.join("\n"));

		if (typeof window !== "undefined") {
			window.open(whatsappUrl, "_blank", "noopener,noreferrer");
		}

		setIsSubmitting(false);
		setSubmitStatus("success");
		setFormData({ name: "", email: "", phone: "", message: "" });

		setTimeout(() => setSubmitStatus("idle"), 5000);
	};

	return (
		<section id="contact" className="w-full padding-y bg-marquee relative z-20">
			<div className="padding-x">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[40px]">
						{/* Left Side - Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="sub-heading font-semibold font-FoundersGrotesk text-white	 mb-[20px]">
								Let's Start Your Journey
							</h2>
							<p className="paragraph font-NeueMontreal text-white opacity-70 mb-[40px]">
								Ready to transform your life? Get in touch with us today. We're here to answer your
								questions and help you take the first step towards a more fulfilling future.
							</p>

							<div className="space-y-[30px]">
								<div className="flex items-start gap-[20px]">
									<div className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-[12px] text-white flex-shrink-0">
										<Mail size={24} />
									</div>
									<div>
										<h4 className="text-lg font-semibold font-NeueMontreal text-white mb-[5px]">
											Email
										</h4>
										<a
											href="mailto:unusualteajay@gmail.com"
											className="text-base font-NeueMontreal text-white/70 hover:text-white transition-colors block mb-[5px]"
										>
											unusualteajay@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-[20px]">
									<div className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-[12px] text-white flex-shrink-0">
										<Phone size={24} />
									</div>
									<div>
										<h4 className="text-lg font-semibold font-NeueMontreal text-white mb-[5px]">
											Phone
										</h4>
										<a
											href="tel:+2345678910"
											className="text-base font-NeueMontreal text-white/70 hover:text-white transition-colors block mb-[5px]"
										>
											+234 567 891 012
										</a>
										<a
												href="tel:+2345678910"
											className="text-base font-NeueMontreal text-white/70 hover:text-white transition-colors block"
										>
											+234 567 891 012
										</a>
									</div>
								</div>

								<div className="flex items-start gap-[20px]">
									<div className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-[12px] text-white flex-shrink-0">
										<Clock size={24} />
									</div>
									<div>
										<h4 className="text-lg font-semibold font-NeueMontreal text-white mb-[5px]">
											Available Hours
										</h4>
										<p className="text-base font-NeueMontreal text-white/70">
											Monday - Friday: 9:00 AM - 6:00 PM
											<br />
											Saturday: 10:00 AM - 4:00 PM
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right Side - Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-white rounded-[20px] p-[40px] lg:p-[35px] md:p-[30px] border border-[#21212110] shadow-sm"
						>
							<h3 className="text-2xl font-semibold font-FoundersGrotesk text-secondry mb-[25px]">
								Send Us a Message
							</h3>

							<form onSubmit={handleSubmit} className="space-y-[25px]">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
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
										htmlFor="email"
										className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
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
										htmlFor="phone"
										className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-[20px] py-[15px] rounded-[10px] border border-[#21212120] focus:border-secondry focus:outline-none transition-colors font-NeueMontreal text-secondry"
										placeholder="+1 (555) 000-0000"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium font-NeueMontreal text-secondry mb-[8px]"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-[20px] py-[15px] rounded-[10px] border border-[#21212120] focus:border-secondry focus:outline-none transition-colors font-NeueMontreal text-secondry resize-none"
										placeholder="Tell us about your goals and what you'd like to achieve..."
									/>
								</div>

								{submitStatus === "success" && (
									<div className="p-[15px] bg-secondry/10 border border-secondry/30 rounded-[10px] text-secondry text-sm font-NeueMontreal">
										Thank you! Your message has been sent. We'll get back to you soon.
									</div>
								)}

								{submitStatus === "error" && (
									<div className="p-[15px] bg-red-50 border border-red-200 rounded-[10px] text-red-600 text-sm font-NeueMontreal">
										Something went wrong. Please try again later.
									</div>
								)}

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-secondry text-background py-[15px] px-[30px] rounded-full font-semibold font-NeueMontreal hover:bg-secondry/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[10px]"
								>
									{isSubmitting ? (
										<>Sending...</>
									) : (
										<>
											Send Message
											<Send size={18} />
										</>
									)}
								</button>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

