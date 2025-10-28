'use client';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function FormPage() {
    const [role, setRole] = useState<'employee' | 'employer' | null>(null);
    const [posterType, setPosterType] = useState<'company' | 'individual' | null>(null);
    const router = useRouter();


    const Input = ({ ...props }) => (
        <input
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );

    const TextArea = ({ ...props }) => (
        <textarea
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );

    const Label = ({ children }) => (
        <label className="text-sm font-medium text-gray-700">{children}</label>
    );

    const Section = ({ title, children }) => (
        <form className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full space-y-5 animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            {children}
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                Submit
            </button>
        </form>
    );

    const EmployeeForm = () => (
        <Section title="Job Seeker Registration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="+1234567890" />
                </div>
                <div>
                    <Label>Sex</Label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 transition">
                        <option>Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <Label>Age</Label>
                    <Input type="number" placeholder="e.g. 25" />
                </div>
                <div>
                    <Label>Highest Education</Label>
                    <Input placeholder="Bachelor's Degree" />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <Label>Upload Resume (PDF only)</Label>
                    <Input type="file" accept="application/pdf" />
                </div>
            </div>
        </Section>
    );

    const CompanyForm = () => (
        <Section title="Company Job Poster Registration">
            <div className="space-y-4">
                <div>
                    <Label>Company Name</Label>
                    <Input placeholder="Company Inc." />
                </div>
                <div>
                    <Label>Description</Label>
                    <TextArea rows={4} placeholder="Brief description of the company..." />
                </div>
                <div>
                    <Label>Owner Name</Label>
                    <Input placeholder="Jane Doe" />
                </div>
                <div>
                    <Label>Owner Email</Label>
                    <Input type="email" placeholder="owner@company.com" />
                </div>
                <div>
                    <Label>Address</Label>
                    <Input placeholder="123 Business Rd, City" />
                </div>
                <div>
                    <Label>Socials (optional)</Label>
                    <Input placeholder="LinkedIn, Twitter, etc." />
                </div>
                <div>
                    <Label>Website (optional)</Label>
                    <Input placeholder="https://company.com" />
                </div>
            </div>
        </Section>
    );

    const IndividualForm = () => (
        <Section title="Individual Job Poster Registration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>Name</Label>
                    <Input placeholder="John Smith" />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="+1234567890" />
                </div>
                <div className="md:col-span-2">
                    <Label>Address</Label>
                    <Input placeholder="123 Main St, City, Country" />
                </div>
            </div>
        </Section>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6 flex flex-col items-center justify-center relative">
            {/* Close Button */}
            <button
                onClick={() => router.push('/')}
                className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
                aria-label="Close"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Step 1 - Choose Role */}
            {!role && (
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800">Choose Your Role</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={() => setRole('employee')}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            I’m a Job Seeker
                        </button>
                        <button
                            onClick={() => setRole('employer')}
                            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                        >
                            I’m a Job Poster
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2 - Employee Form */}
            {role === 'employee' && (
                <>
                    <EmployeeForm />
                    <button
                        onClick={() => setRole(null)}
                        className="mt-6 text-sm text-blue-600 hover:underline"
                    >
                        ← Go Back
                    </button>
                </>
            )}

            {/* Step 2 - Choose Poster Type */}
            {role === 'employer' && !posterType && (
                <>
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Post a Job As</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <button
                                onClick={() => setPosterType('individual')}
                                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
                            >
                                Individual
                            </button>
                            <button
                                onClick={() => setPosterType('company')}
                                className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                            >
                                Company
                            </button>
                        </div>
                        <button
                            onClick={() => setRole(null)}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            ← Go Back
                        </button>
                    </div>
                </>
            )}

            {/* Step 3 - Company Form */}
            {role === 'employer' && posterType === 'company' && (
                <>
                    <CompanyForm />
                    <button
                        onClick={() => setPosterType(null)}
                        className="mt-6 text-sm text-blue-600 hover:underline"
                    >
                        ← Go Back
                    </button>
                </>
            )}

            {/* Step 3 - Individual Poster Form */}
            {role === 'employer' && posterType === 'individual' && (
                <>
                    <IndividualForm />
                    <button
                        onClick={() => setPosterType(null)}
                        className="mt-6 text-sm text-blue-600 hover:underline"
                    >
                        ← Go Back
                    </button>
                </>
            )}
        </div>
    );
}
