import React from 'react'

const HowWeWork = () => {
    return (
        <div>
            <section className="w-[85%] mx-auto mt-28">
                <div className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10  font-['Charis_SIL']">
                    How We Work
                </div>
                <div className="max-w-7xl mx-auto mt-15 border-t border-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                        <div className="border-r border-gray-300 p-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-5xl font-normal">01</span>
                                <i className="fas fa-arrow-right text-gray-300 text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-normal mb-3">Initial Consultation</h3>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                Meet with our design experts to discuss your vision, requirements,
                                and budget. We gather all the necessary details to tailor a unique
                                architectural solution just for you.
                            </p>
                        </div>
                        <div className="border-r border-gray-300 p-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-5xl font-normal">02</span>
                                <i className="fas fa-arrow-right text-gray-300 text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-normal mb-3">Design Concept</h3>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                Our architects develop initial sketches and 3D models that capture
                                the essence of your project, balancing aesthetics, function, and
                                sustainability.
                            </p>
                        </div>
                        <div className="border-r border-gray-300 p-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-5xl font-normal">03</span>
                                <i className="fas fa-arrow-right text-gray-300 text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-normal mb-3">Construction</h3>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                We prepare detailed drawings and documentation to secure all
                                necessary permits and approvals, ensuring compliance with local
                                regulations.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto border-b border-gray-300">
                        <div className="border-r border-gray-300 p-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-5xl font-normal">04</span>
                                <i className="fas fa-arrow-right text-gray-300 text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-normal mb-3">Final Work-Through</h3>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                Oversee the building process to ensure the design vision is
                                executed flawlessly, timelines are met, and quality standards are
                                upheld.
                            </p>
                        </div>
                        <div className="p-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-5xl font-normal">05</span>
                                <i className="fas fa-arrow-right text-gray-300 text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-normal mb-3">Follow Up</h3>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                Conduct a detailed inspection with you to ensure everything meets
                                expectations, followed by ongoing support and maintenance advice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HowWeWork
