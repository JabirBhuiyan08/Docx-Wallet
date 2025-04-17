import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
                <p className="text-lg text-gray-600 mt-2">We are committed to providing secure and reliable solutions for your document storage needs.</p>
            </header>

            {/* Mission and Vision Section */}
            <section className="max-w-screen-xl mx-auto mb-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to provide users with a secure, efficient, and user-friendly platform to store and manage their important documents with confidence.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We aim to revolutionize the way people interact with their digital documents, ensuring accessibility, privacy, and ease of use.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-screen-xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Team Member 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                        <p className="text-gray-500">CEO & Founder</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                        <p className="text-gray-500">Product Manager</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">Mark Johnson</h3>
                        <p className="text-gray-500">Lead Developer</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-screen-xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">If you have any questions, feel free to reach out to us. We are always happy to help!</p>
                <div>
                    <p className="text-lg font-semibold text-gray-800">Email:</p>
                    <p className="text-blue-600">support@docswallet.com</p>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-800">Phone:</p>
                    <p className="text-blue-600">+1 (800) 123-4567</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
