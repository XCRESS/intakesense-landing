"use client";

import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";


export default function FormPage({ onClose }: { onClose: () => void }) {
    const [role, setRole] = useState<"employee" | "employer" | null>(null);
    const [posterType, setPosterType] = useState<"company" | "individual" | null>(null);

    // ✅ Reusable components
    const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
        <input
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );

    const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
        <textarea
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );

    const Label = ({ children }: { children: React.ReactNode }) => (
        <label className="text-sm font-medium text-gray-700">{children}</label>
    );


    // ✅ Web3Forms submission logic
    const useWeb3Form = (roleType: string) => {
        const { register, handleSubmit, reset } = useForm();
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState("");

        const onSubmit = async (data: any) => {
            setLoading(true);
            setMessage("");

            try {
                const formData = new FormData();
                formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string);
                formData.append("role", roleType);

                Object.keys(data).forEach((key) => {
                    if (key === "resume" && data[key]?.[0]) {
                        formData.append("resume", data[key][0]);
                    } else {
                        formData.append(key, data[key]);
                    }
                });

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    setMessage("✅ Form submitted successfully!");
                    reset();
                } else {
                    setMessage("❌ Something went wrong. Try again.");
                }
            } catch {
                setMessage("⚠️ Network error. Try again later.");
            }

            setLoading(false);
        };

        return { register, handleSubmit, onSubmit, loading, message };
    };


    // ✅ Shared Submit button
    const SubmitButton = ({ loading }: { loading: boolean }) => (
        <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-2 rounded-md font-semibold bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 
        hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 text-white transition"
        >
            {loading ? "Submitting..." : "Submit"}
        </button>
    );

    // ✅ Wrapper for consistent layout + back/close buttons
    const CardWrapper = ({
        children,
        title,
        showBack,
    }: {
        children: React.ReactNode;
        title: string;
        showBack?: boolean;
    }) => (
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
            {/* Back Button */}
            {showBack && (
                <button
                    onClick={() => {
                        if (posterType) setPosterType(null);
                        else setRole(null);
                    }}
                    className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 p-2 rounded-full bg-gray-100"
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
            )}
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2 rounded-full bg-gray-100"
                aria-label="Close"
            >
                <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 mt-8 sm:mt-6">{title}</h2>
            {children}
        </div>
    );

    // ✅ Employee Form
    const EmployeeForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("employee");

        return (
            <div className="sm:pt-2 pt-30">
                <CardWrapper title="Job Seeker Registration" showBack>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Full Name</Label>
                                <Input {...register("name")} placeholder="Full Name" />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input type="email" {...register("email")} placeholder="youremail@gmail.com" />
                            </div>
                            <div>
                                <Label>Phone</Label>
                                <Input type="tel" {...register("phone")} placeholder="+91 9711 123 456" />
                            </div>
                            <div>
                                <Label>Gender</Label>
                                <select
                                    {...register("sex")}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <Label>Age</Label>
                                <Input type="number" {...register("age")} placeholder="25" />
                            </div>
                            <div>
                                <Label>Highest Education</Label>
                                <Input {...register("education")} placeholder="Bachelor's Degree" />
                            </div>
                            {/* <div className="sm:col-span-2">
                                <Label>Upload Resume (PDF only)</Label>
                                <Input type="file" accept="application/pdf" {...register("resume")} />
                            </div> */}
                        </div>
                        <SubmitButton loading={loading} />
                        {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
                    </form>
                </CardWrapper>
            </div>
        );
    };

    // ✅ Company Form
    const CompanyForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("company");

        return (
            <div className="pt-60">
                <CardWrapper title="Company Job Poster Registration" showBack>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <Label>Company Name</Label>
                        <Input {...register("companyName")} placeholder="Company Inc." />

                        <Label>Description</Label>
                        <TextArea rows={4} {...register("description")} placeholder="Brief description..." />

                        <Label>Owner Name</Label>
                        <Input {...register("ownerName")} placeholder="Full Name" />

                        <Label>Owner Email</Label>
                        <Input type="email" {...register("ownerEmail")} placeholder="owner@company.com" />

                        <Label>Address</Label>
                        <Input {...register("address")} placeholder="123 Business Rd, City" />

                        <Label>Socials (optional)</Label>
                        <Input {...register("socials")} placeholder="LinkedIn, Twitter, etc." />

                        <Label>Website (optional)</Label>
                        <Input {...register("website")} placeholder="https://company.com" />

                        <SubmitButton loading={loading} />
                        {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
                    </form>
                </CardWrapper>
            </div>
        );
    };

    // ✅ Individual Form
    const IndividualForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("individual");
        return (
            <CardWrapper title="Individual Job Poster Registration" showBack>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Label>Full Name</Label>
                            <Input {...register("name")} placeholder="Full Name" />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input type="email" {...register("email")} placeholder="youremail@gmail.com" />
                        </div>
                        <div>
                            <Label>Phone</Label>
                            <Input type="tel" {...register("phone")} placeholder="+91 9711 123 456" />
                        </div>
                        <div className="sm:col-span-2">
                            <Label>Address</Label>
                            <Input {...register("address")} placeholder="123 Business Rd, City, State" />
                        </div>
                    </div>
                    <SubmitButton loading={loading} />
                    {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
                </form>
            </CardWrapper>
        );
    };

    // ✅ Selection UIs
    const RoleSelection = () => (
        <CardWrapper title="Choose Your Role">
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => setRole("employee")}
                    className="px-6 py-3 rounded-md font-medium bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 
            hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 text-white transition"
                >
                    I’m a Job Seeker
                </button>
                <button
                    onClick={() => setRole("employer")}
                    className="px-6 py-3 rounded-md font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
                >
                    I’m a Job Poster
                </button>
            </div>
        </CardWrapper>
    );

    const PosterSelection = () => (
        <CardWrapper title="Post a Job As" showBack>
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => setPosterType("individual")}
                    className="px-6 py-3 rounded-md font-medium bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 
            hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 text-white transition"
                >
                    Individual
                </button>
                <button
                    onClick={() => setPosterType("company")}
                    className="px-6 py-3 rounded-md font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
                >
                    Company
                </button>
            </div>
        </CardWrapper>
    );

    return (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
            {!role && <RoleSelection />}
            {role === "employee" && <EmployeeForm />}
            {role === "employer" && !posterType && <PosterSelection />}
            {role === "employer" && posterType === "company" && <CompanyForm />}
            {role === "employer" && posterType === "individual" && <IndividualForm />}
        </div>
    );
}
