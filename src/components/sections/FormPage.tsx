"use client";

import { X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormPage({ onClose }: { onClose: () => void }) {
    const [role, setRole] = useState<"employee" | "employer" | null>(null);
    const [posterType, setPosterType] = useState<"company" | "individual" | null>(null);

    // ✅ Reusable components
    const Input = (props: any) => (
        <input
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );

    const TextArea = (props: any) => (
        <textarea
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

    // ✅ Employee form
    const EmployeeForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("employee");

        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full space-y-5 animate-fade-in"
            >
                <h2 className="text-2xl font-semibold text-gray-800">Job Seeker Registration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Name</Label>
                        <Input {...register("name")} placeholder="John Doe" />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type="email" {...register("email")} placeholder="email@example.com" />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <Input type="tel" {...register("phone")} placeholder="+1234567890" />
                    </div>
                    <div>
                        <Label>Sex</Label>
                        <select
                            {...register("sex")}
                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                        >
                            <option>Choose</option>
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
                        <Label>Education</Label>
                        <Input {...register("education")} placeholder="Bachelor's Degree" />
                    </div>
                    <div className="md:col-span-2">
                        <Label>Upload Resume (PDF only)</Label>
                        <Input type="file" accept="application/pdf" {...register("resume")} />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
            </form>
        );
    };

    // ✅ Company form
    const CompanyForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("company");

        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full space-y-5 animate-fade-in"
            >
                <h2 className="text-2xl font-semibold text-gray-800">Company Job Poster Registration</h2>
                <div className="space-y-4">
                    <div>
                        <Label>Company Name</Label>
                        <Input {...register("companyName")} placeholder="Company Inc." />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <TextArea rows={4} {...register("description")} placeholder="Brief description..." />
                    </div>
                    <div>
                        <Label>Owner Name</Label>
                        <Input {...register("ownerName")} placeholder="Jane Doe" />
                    </div>
                    <div>
                        <Label>Owner Email</Label>
                        <Input type="email" {...register("ownerEmail")} placeholder="owner@company.com" />
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Input {...register("address")} placeholder="123 Business Rd, City" />
                    </div>
                    <div>
                        <Label>Socials (optional)</Label>
                        <Input {...register("socials")} placeholder="LinkedIn, Twitter, etc." />
                    </div>
                    <div>
                        <Label>Website (optional)</Label>
                        <Input {...register("website")} placeholder="https://company.com" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
            </form>
        );
    };

    // ✅ Individual Poster form
    const IndividualForm = () => {
        const { register, handleSubmit, onSubmit, loading, message } = useWeb3Form("individual");

        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full space-y-5 animate-fade-in"
            >
                <h2 className="text-2xl font-semibold text-gray-800">Individual Job Poster Registration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Name</Label>
                        <Input {...register("name")} placeholder="John Smith" />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type="email" {...register("email")} placeholder="email@example.com" />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <Input type="tel" {...register("phone")} placeholder="+1234567890" />
                    </div>
                    <div className="md:col-span-2">
                        <Label>Address</Label>
                        <Input {...register("address")} placeholder="123 Main St, City, Country" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
            </form>
        );
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex flex-col items-center justify-center overflow-y-auto p-6 sm:p-10 backdrop-blur-md">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white hover:text-gray-200 bg-black/40 p-2 rounded-full"
                aria-label="Close"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Back button */}
            {role && (
                <button
                    onClick={() => (posterType ? setPosterType(null) : setRole(null))}
                    className="absolute top-5 left-5 text-white hover:text-gray-200 bg-black/40 p-2 rounded-full"
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
            )}

            {/* Role selection */}
            {!role && (
                <div className="text-center space-y-6 my-auto max-w-sm w-full">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Choose Your Role</h1>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setRole("employee")}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            I’m a Job Seeker
                        </button>
                        <button
                            onClick={() => setRole("employer")}
                            className="bg-white/90 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                        >
                            I’m a Job Poster
                        </button>
                    </div>
                </div>
            )}

            {role === "employee" && <EmployeeForm />}
            {role === "employer" && !posterType && (
                <div className="text-center space-y-6 my-auto max-w-sm w-full">
                    <h2 className="text-2xl font-semibold text-white">Post a Job As</h2>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setPosterType("individual")}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            Individual
                        </button>
                        <button
                            onClick={() => setPosterType("company")}
                            className="bg-white/90 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                        >
                            Company
                        </button>
                    </div>
                </div>
            )}
            {role === "employer" && posterType === "company" && <CompanyForm />}
            {role === "employer" && posterType === "individual" && <IndividualForm />}
        </div>
    );
}
