import React from "react";
import loadingGif from '../../public/images/loading.gif';

const LoadingModal = () => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-96 sm:max-w-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="text-center">
                            <h3 className="text-lg leading-6 font-medium text-white">Loading...</h3>
                            <div className="mt-5">
                                <img src={loadingGif} alt="Loading" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingModal;