"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ochiside,  showcase1, tea } from "@/public";

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [direction, setDirection] = useState(0);
	const totalSlides = 2;

	const nextSlide = () => {
		setDirection(1);
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setDirection(-1);
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	const goToSlide = (index: number) => {
		setDirection(index > currentSlide ? 1 : -1);
		setCurrentSlide(index);
	};

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative overflow-hidden"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div className="w-full flex flex-col justify-between h-[92vh] sm:h-[95vh] xm:h-[95vh] relative">
					{/* Green Background - Full Left Side */}
					<div className="absolute left-0 top-0 w-[50%] h-full  -mt-[8vh] pt-[8vh] z-0"></div>
					{/* Carousel Container */}
					<div className="w-full flex justify-between gap-[20px] relative h-full z-10">
						<AnimatePresence initial={false} custom={direction} mode="wait">
							{/* Slide 1: Image Left, Text Right */}
							{currentSlide === 0 && (
								<motion.div
									key="slide-1"
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										x: { type: "spring", stiffness: 300, damping: 30 },
										opacity: { duration: 0.2 },
									}}
									className="w-full flex justify-between items-start gap-[20px] absolute inset-0 pt-0 sm:flex-col xm:flex-col">
									<div className="w-[50%] sm:w-full xm:w-full flex justify-start items-start h-full relative">
										<motion.div
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: 0.3 }}
											className="relative w-full h-full">
											<Image
												src={tea}
												alt="Life Coach"
												fill
												className="object-cover object-top rounded-[0px]"
												priority
											/>
											{/* Overlay for mobile */}
											<div className="absolute inset-0 bg-black/40 sm:block xm:block hidden"></div>
										</motion.div>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full sm:absolute xm:absolute sm:inset-0 xm:inset-0 sm:z-20 xm:z-20 sm:flex xm:flex sm:flex-col xm:flex-col sm:justify-end xm:justify-end sm:pb-[40px] xm:pb-[40px] flex flex-col justify-start gap-[20px] pt-[12vh] sm:pt-0 xm:pt-0 padding-x">
										<motion.h2
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.4 }}
											className="text-[72px] lg:text-[64px] md:text-[56px] sm:text-[48px] xm:text-[40px] font-semibold font-FoundersGrotesk text-[#212121] sm:text-white xm:text-white uppercase tracking-[0.05em] leading-[1.1]">
											I THINK.
											I CREATE.
											I SHARE.
										</motion.h2>
										<motion.p
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.5 }}
											className="paragraph font-NeueMontreal text-secondry sm:text-white xm:text-white max-w-[520px] text-[20px] leading-[32px] lg:text-[18px] lg:leading-[28px]">
											Empowering you to transform your mindset, create meaningful change, and share your journey with confidence. Through personalized coaching, we help you break through limiting beliefs, develop powerful strategies for growth, and build the resilience needed to achieve your dreams.
										</motion.p>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.6 }}
											className="flex items-center gap-[5px] group mt-[10px] sm:hidden xm:hidden">
											<div className="rounded-[50px] border border-[#21212199] sm:border-white/80 xm:border-white/80 group-hover:bg-secondry sm:group-hover:bg-white xm:group-hover:bg-white py-[3px] px-[12px] cursor-pointer">
												<Link
													className="paragraph font-NeueMontreal text-secondry sm:text-white xm:text-white sm:group-hover:text-[#212121] xm:group-hover:text-[#212121] uppercase group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
													href="/contact">
													Start Your Journey
												</Link>
											</div>
											<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] sm:border-white/80 xm:border-white/80 rounded-full p-[1px] group-hover:bg-secondry sm:group-hover:bg-white xm:group-hover:bg-white transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
												<p className="font-normal text-secondry sm:text-white xm:text-white sm:group-hover:text-[#212121] xm:group-hover:text-[#212121] group-hover:text-background">
													<ArrowUpRight
														size={24}
														strokeWidth={1.25}
													/>
												</p>
											</div>
										</motion.div>
									</div>
								</motion.div>
							)}

							{/* Slide 2: Image Left, Text Right */}
							{currentSlide === 1 && (
								<motion.div
									key="slide-2"
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										x: { type: "spring", stiffness: 300, damping: 30 },
										opacity: { duration: 0.2 },
									}}
									className="w-full flex justify-between items-start gap-[20px] absolute inset-0 pt-0 sm:flex-col xm:flex-col">
									<div className="w-[50%] sm:w-full xm:w-full flex justify-start items-start h-full relative">
										<motion.div
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: 0.3 }}
											className="relative w-full h-full">
											<Image
												src={tea}
												alt="Life Coach"
												fill
												className="object-cover object-top rounded-[0px]"
												priority
											/>
											{/* Overlay for mobile */}
											<div className="absolute inset-0 bg-black/40 sm:block xm:block hidden"></div>
										</motion.div>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full sm:absolute xm:absolute sm:inset-0 xm:inset-0 sm:z-20 xm:z-20 sm:flex xm:flex sm:flex-col xm:flex-col sm:justify-end xm:justify-end sm:pb-[40px] xm:pb-[40px] flex flex-col justify-start gap-[20px] pt-[12vh] sm:pt-0 xm:pt-0 padding-x">
										<motion.h2
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.4 }}
											className="text-[72px] lg:text-[64px] md:text-[56px] sm:text-[48px] xm:text-[40px] font-semibold font-FoundersGrotesk text-[#212121] sm:text-white xm:text-white uppercase tracking-[0.05em] leading-[1.1]">
											Transform Your Life Journey
										</motion.h2>
										<motion.p
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.5 }}
											className="paragraph font-NeueMontreal text-secondry sm:text-white xm:text-white max-w-[520px] text-[20px] leading-[32px] lg:text-[18px] lg:leading-[28px]">
											Experience personalized coaching that helps you overcome obstacles, set meaningful goals, and achieve the life you've always envisioned. Your transformation starts here, where possibility meets purpose.
										</motion.p>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.6 }}
											className="flex items-center gap-[5px] group mt-[10px] sm:hidden xm:hidden">
											<div className="rounded-[50px] border border-[#21212199] sm:border-white/80 xm:border-white/80 group-hover:bg-secondry sm:group-hover:bg-white xm:group-hover:bg-white py-[3px] px-[12px] cursor-pointer">
												<Link
													className="paragraph font-NeueMontreal text-secondry sm:text-white xm:text-white sm:group-hover:text-[#212121] xm:group-hover:text-[#212121] uppercase group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
													href="/contact">
													Book a Session
												</Link>
											</div>
											<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] sm:border-white/80 xm:border-white/80 rounded-full p-[1px] group-hover:bg-secondry sm:group-hover:bg-white xm:group-hover:bg-white transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
												<p className="font-normal text-secondry sm:text-white xm:text-white sm:group-hover:text-[#212121] xm:group-hover:text-[#212121] group-hover:text-background">
													<ArrowUpRight
														size={24}
														strokeWidth={1.25}
													/>
												</p>
											</div>
										</motion.div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Navigation Arrows */}
						<div className="absolute right-[50px] md:right-[30px] sm:right-[20px] xm:right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-10">
							<button
								onClick={prevSlide}
								className="w-[40px] h-[40px] flex items-center justify-center border border-[#21212199] rounded-full hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] group cursor-pointer">
								<ChevronLeft
									size={20}
									className="text-secondry group-hover:text-background transition-colors"
								/>
							</button>
							<button
								onClick={nextSlide}
								className="w-[40px] h-[40px] flex items-center justify-center border border-[#21212199] rounded-full hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] group cursor-pointer">
								<ChevronRight
									size={20}
									className="text-secondry group-hover:text-background transition-colors"
								/>
							</button>
						</div>
					</div>

					<div className="w-full flex flex-col h-[8vh] border-t border-[#21212155] py-[15px] sm:mb-[80px] xm:mb-[80px] gap-[20px] relative z-10 bg-white">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									Personal growth. Lasting transformation.
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
										From awareness to action to achievement
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											Book Your Session
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center justify-between padding-x mb-2">
							<div className="flex items-center gap-[10px]">
								{Array.from({ length: totalSlides }).map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
											currentSlide === index
												? "bg-secondry w-[30px]"
												: "bg-[#21212155]"
										}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
							<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
								<motion.p
									initial={{ y: "-100%", opacity: 0 }}
									animate={{ y: "100%", opacity: 0.5 }}
									transition={{
										duration: 1.8,
										repeat: Infinity,
										ease: [0.3, 0.86, 0.36, 0.95],
									}}
									className="paragraph opacity-50 font-NeueMontreal text-secondry">
									scroll down
								</motion.p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
