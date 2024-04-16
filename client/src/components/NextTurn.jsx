function NextTurn() {
    return (
        <div className="bg-black bg-opacity-25 p-4 h-full rounded-lg">
            <h2 className="text-xl font-bold text-white">
                Next Turn
            </h2>
            <div className="flex justify-around items-center">
                <svg width="200" height="100">
                    <rect x="0" y="0" width="200" height="100" fill="lightblue" rx="15" ry="15" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-color-black text-xl font-bold">
                        Trade | 5
                    </text>
                </svg>
                <svg width="200" height="100">
                    <rect x="0" y="0" width="200" height="100" fill="lightblue" rx="15" ry="15" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-color-black text-xl font-bold">
                        00:16:25
                    </text>
                </svg>
            </div>
        </div>
    )
}

export default NextTurn;
