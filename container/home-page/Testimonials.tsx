"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { tea } from "@/public";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	rating: number;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Entrepreneur",
		rating: 5,
		text: "Working with my life coach has been transformational. I've gained clarity on my goals, overcome self-doubt, and achieved more in 6 months than I did in the previous year. The personalized approach and genuine care made all the difference.",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Executive",
		rating: 5,
		text: "The coaching sessions helped me find balance between my career and personal life. I learned to set boundaries, prioritize what matters, and create a sustainable lifestyle. Highly recommend to anyone seeking meaningful change.",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Creative Professional",
		rating: 5,
		text: "I was stuck in a rut and couldn't see a way forward. Through coaching, I discovered my true passions and built the courage to pursue them. The accountability and support were exactly what I needed to take action.",
	},
	{
		id: 4,
		name: "David Thompson",
		role: "Business Owner",
		rating: 5,
		text: "The holistic approach to coaching transformed not just my business decisions, but my entire perspective on life. I'm more confident, focused, and aligned with my values. The investment was worth every penny.",
	},
	{
		id: 5,
		name: "Jessica Williams",
		role: "Life Transition",
		rating: 5,
		text: "During a major life transition, coaching provided the guidance and clarity I desperately needed. I navigated uncertainty with confidence and emerged stronger than ever. This coach truly understands human transformation.",
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const nextTestimonial = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setIsAutoPlaying(false);
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const goToTestimonial = (index: number) => {
		setIsAutoPlaying(false);
		setCurrentIndex(index);
	};

	return (
		<section className="w-full padding-y bg-marquee relative z-20">
			<div className="padding-x">
				<div className="w-full mb-[60px] sm:mb-[40px] xm:mb-[40px] text-center">
					<h2 className="sub-heading font-semibold font-FoundersGrotesk text-white mb-[20px]">
						What Clients Say
					</h2>
					<p className="paragraph font-NeueMontreal text-white/90 max-w-[600px] mx-auto">
						Real stories from real people who transformed their lives through personalized coaching.
					</p>
				</div>

				{/* Main Testimonial Display */}
				<div className="relative max-w-5xl mx-auto mb-[40px]">
					<div className="relative overflow-hidden rounded-[20px] bg-white/10 backdrop-blur-sm border border-white/20 p-[50px] lg:p-[40px] md:p-[30px] sm:p-[25px] xm:p-[20px]">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}
								className="text-center"
							>
								{/* Stars */}
								<div className="flex justify-center gap-[5px] mb-[25px]">
									{Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
										<Star key={i} size={24} fill="#FFD700" stroke="#FFD700" className="text-yellow-400" />
									))}
								</div>

								{/* Testimonial Text */}
								<blockquote className="text-2xl lg:text-xl md:text-lg sm:text-base font-NeueMontreal text-white leading-relaxed mb-[30px] font-medium">
									"{testimonials[currentIndex].text}"
								</blockquote>

								{/* Author Info */}
								<div className="flex flex-col items-center gap-[15px]">
									<div className="relative w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white">
										<Image
											src={tea}
											alt={testimonials[currentIndex].name}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h4 className="text-xl font-semibold font-NeueMontreal text-white">
											{testimonials[currentIndex].name}
										</h4>
										<p className="text-base font-NeueMontreal text-white/80">
											{testimonials[currentIndex].role}
										</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Navigation Arrows */}
						<button
							onClick={prevTestimonial}
							className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center border border-white/30 rounded-full hover:bg-white transition-all transform duration-300 group cursor-pointer bg-white/10 backdrop-blur-sm shadow-lg"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={24} className="text-white group-hover:text-secondry transition-colors" />
						</button>
						<button
							onClick={nextTestimonial}
							className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center border border-white/30 rounded-full hover:bg-white transition-all transform duration-300 group cursor-pointer bg-white/10 backdrop-blur-sm shadow-lg"
							aria-label="Next testimonial"
						>
							<ChevronRight size={24} className="text-white group-hover:text-secondry transition-colors" />
						</button>
					</div>
				</div>

				{/* Dots Indicator */}
				<div className="flex justify-center items-center gap-[10px] mb-[50px]">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => goToTestimonial(index)}
							className={`h-[10px] rounded-full transition-all duration-300 ${
								currentIndex === index ? "bg-white w-[30px]" : "bg-white/40 w-[10px]"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Additional Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-6xl mx-auto">
					{testimonials.slice(0, 3).map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[15px] p-[30px] hover:bg-white/20 transition-all"
						>
							<div className="flex gap-[5px] mb-[20px]">
								{Array.from({ length: testimonial.rating }).map((_, i) => (
									<Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
								))}
							</div>
							<p className="text-base font-NeueMontreal text-white/90 mb-[20px] leading-relaxed line-clamp-4">
								"{testimonial.text}"
							</p>
							<div className="flex items-center gap-[15px]">
								<div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-white/30">
									<Image src={tea} alt={testimonial.name} fill className="object-cover" />
								</div>
								<div>
									<h5 className="font-semibold font-NeueMontreal text-white">{testimonial.name}</h5>
									<p className="text-sm font-NeueMontreal text-white/80">{testimonial.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

