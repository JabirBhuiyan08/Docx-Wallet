import React from 'react';

const HelpCenter = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-3xl font-bold text-blue-600">Help Center</h1>
                <p className="text-lg text-gray-600 mt-2">Find answers to your questions or contact us for more help.</p>
            </header>

            {/* FAQ Section */}
            <section className="max-w-screen-xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">How do I create an account?</h3>
                        <p className="text-gray-600 mt-2">To create an account, click on the "Sign Up" button on the homepage, and fill in your details.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">How do I reset my password?</h3>
                        <p className="text-gray-600 mt-2">Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">How do I contact support?</h3>
                        <p className="text-gray-600 mt-2">You can contact support by emailing support@docswallet.com or by using the "Contact Us" page.</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="max-w-screen-md mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">If you need further assistance, feel free to reach out to our support team.</p>
                <div>
                    <p className="text-lg font-semibold text-gray-800">Email:</p>
                    <p className="text-blue-600">support@docswallet.com</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-800">Phone:</p>
                    <p className="text-blue-600">+1 (800) 123-4567</p>
                </div>
            </section>

            {/* Support Articles Section */}
            <section className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">Support Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">How to use Docs Wallet</h3>
                        <p className="text-gray-600 mt-2">Learn how to set up your wallet, upload documents, and more.</p>
                        <a href="/help/docs-wallet" className="text-blue-600 mt-4 block">Read Article →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">Security Features</h3>
                        <p className="text-gray-600 mt-2">Understand how we keep your documents secure with encryption and other features.</p>
                        <a href="/help/security" className="text-blue-600 mt-4 block">Read Article →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">Troubleshooting</h3>
                        <p className="text-gray-600 mt-2">Learn how to troubleshoot common issues like login problems and document errors.</p>
                        <a href="/help/troubleshooting" className="text-blue-600 mt-4 block">Read Article →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800">Account Settings</h3>
                        <p className="text-gray-600 mt-2">Learn how to manage your account settings, preferences, and security options.</p>
                        <a href="/help/account-settings" className="text-blue-600 mt-4 block">Read Article →</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
