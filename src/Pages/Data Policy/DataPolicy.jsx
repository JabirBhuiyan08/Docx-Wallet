import React from 'react';
import { ShieldCheck, FileText, Lock, User, RefreshCw } from 'lucide-react';

const sections = [
    {
        icon: <FileText className="w-6 h-6 text-blue-500" />,
        title: "1. Data Collection",
        description: "We only collect essential information such as your name, email, and documents you upload to ensure a smooth user experience."
    },
    {
        icon: <User className="w-6 h-6 text-green-500" />,
        title: "2. Data Usage",
        description: "Your data is used strictly for authentication, storage, and enabling sharing. We do not sell or rent your personal info."
    },
    {
        icon: <Lock className="w-6 h-6 text-red-500" />,
        title: "3. Data Security",
        description: "We implement encryption and secure storage practices. All access is monitored to protect your sensitive information."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
        title: "4. User Rights",
        description: "You can access or delete your data anytime. If you delete your account, all data will be permanently removed."
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-yellow-500" />,
        title: "5. Policy Updates",
        description: "We may update this policy from time to time. Significant changes will be communicated via email or in-app notifications."
    },
];

const DataPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
                <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">📄 DocsWallet Data Policy</h1>
                <p className="text-gray-600 mb-10 text-center">
                    Your privacy is our priority. Here's how we handle your data with care and transparency.
                </p>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1">{section.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                                <p className="text-gray-600 mt-1">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center text-sm text-gray-500">
                    For any questions, reach out at{' '}
                    <a href="mailto:support@docswallet.com" className="text-blue-600 underline">
                        support@docswallet.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DataPolicy;
