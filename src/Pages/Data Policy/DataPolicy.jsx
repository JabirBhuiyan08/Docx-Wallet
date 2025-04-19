import React from 'react';
import { ShieldCheck, FileText, Lock, User, RefreshCw } from 'lucide-react';

const sections = [
    {
        icon: <FileText className="w-6 h-6 text-blue-500" />,
        title: "Information We Collect",
        description:
            "We collect personal information such as your name, email address, and uploaded documents solely for account creation, authentication, and service enhancement purposes.",
    },
    {
        icon: <User className="w-6 h-6 text-green-500" />,
        title: "How We Use Your Information",
        description:
            "Your information is used to provide, maintain, and improve our services. We do not sell or rent your personal data to third parties under any circumstances.",
    },
    {
        icon: <Lock className="w-6 h-6 text-red-500" />,
        title: "Data Protection & Security",
        description:
            "We use industry-standard encryption and secure storage technologies to protect your data. Access to your information is strictly limited to authorized personnel.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
        title: "Your Rights & Choices",
        description:
            "You have the right to access, update, or delete your personal data at any time. Deleting your account will result in the permanent removal of all associated data.",
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-yellow-500" />,
        title: "Changes to This Policy",
        description:
            "We may update this Data Policy from time to time. Any significant changes will be communicated via email or through in-app notifications.",
    },
];

const DataPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
                <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
                    Privacy & Data Policy
                </h1>
                <p className="text-gray-600 mb-10 text-center text-lg">
                    At <strong>DocsWallet</strong>, we are committed to protecting your privacy. This policy outlines what data we collect, how we use it, and your rights as a user.
                </p>

                <div className="space-y-10">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1">{section.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 text-base">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    Have questions or concerns? Contact us at{" "}
                    <a
                        href="mailto:support@docswallet.com"
                        className="text-blue-600 underline"
                    >
                        support@docswallet.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DataPolicy;
