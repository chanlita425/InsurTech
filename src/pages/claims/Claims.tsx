
const claims = [
    {
        id: "CLM-8821",
        policy: "P-2024-0891",
        customer: "Sophea Rath",
        type: "Collision",
        incident: "2024-11-12",
        description: "Front-end collision on National Road 1",
        status: "reviewing",
    },
    {
        id: "CLM-8822",
        policy: "P-2024-0892",
        customer: "Dara Pich",
        type: "Hospitalization",
        incident: "2024-11-18",
        description: "Emergency surgery — appendectomy",
        status: "approved",
    },
    {
        id: "CLM-8823",
        policy: "P-2024-0894",
        customer: "Virak Sorn",
        type: "Outpatient",
        incident: "2024-11-22",
        description: "Specialist consultation and tests",
        status: "pending",
    },
    {
        id: "CLM-8824",
        policy: "P-2024-0895",
        customer: "Lina Kem",
        type: "Theft",
        incident: "2024-11-25",
        description: "Motorcycle stolen from parking lot",
        status: "pending",
    },
    {
        id: "CLM-8825",
        policy: "P-2024-0891",
        customer: "Sophea Rath",
        type: "Windshield",
        incident: "2024-11-28",
        description: "Windshield crack from road debris",
        status: "completed",
    },
    {
        id: "CLM-8826",
        policy: "P-2024-0893",
        customer: "Bopha Chan",
        type: "Flood",
        incident: "2024-12-01",
        description: "Vehicle flooded during storm",
        status: "rejected",
    },
    {
        id: "CLM-8827",
        policy: "P-2024-0896",
        customer: "Sophea Rath",
        type: "Medical",
        incident: "2024-12-03",
        description: "Annual health checkup claim",
        status: "reviewing",
    },
];

export default function Claims() {
    return (
        <div className="space-y-5 w-full p-2 sm:p-4 md:p-6">

        {/* STATUS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
            { label: "Pending", value: 23, color: "text-yellow-600" },
            { label: "Reviewing", value: 14, color: "text-blue-600" },
            { label: "Approved", value: 76, color: "text-green-600" },
            { label: "Rejected", value: 8, color: "text-red-600" },
            { label: "Completed", value: 48, color: "text-gray-600" },
            ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-xs text-gray-500">{s.label}</p>
                <h2 className={`text-2xl font-bold ${s.color}`}>{s.value}</h2>
            </div>
            ))}
        </div>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h1 className="text-xl font-semibold">Claims Register</h1>

            <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Pending</option>
            <option>Reviewing</option>
            <option>Approved</option>
            <option>Rejected</option>
            <option>Completed</option>
            </select>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">
            <div className="min-w-[1100px] w-full">

            {/* HEADER */}
            <div className="grid grid-cols-[120px_140px_1.2fr_140px_140px_1.5fr_120px]
                            bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">
                <div>Claim #</div>
                <div>Policy</div>
                <div>Customer</div>
                <div>Type</div>
                <div>Incident</div>
                <div>Description</div>
                <div className="text-center">Status</div>
            </div>

            {/* BODY */}
            <div className="divide-y divide-gray-100">
                {claims.map((c) => (
                <div
                    key={c.id}
                    className="grid grid-cols-[120px_140px_1.2fr_140px_140px_1.5fr_120px]
                            px-5 py-4 items-center hover:bg-gray-50 transition"
                >
                    <div className="text-sm text-gray-500">{c.id}</div>
                    <div className="text-sm">{c.policy}</div>
                    <div className="text-sm text-gray-700 truncate">{c.customer}</div>
                    <div className="text-sm">{c.type}</div>
                    <div className="text-sm text-gray-500">{c.incident}</div>
                    <div className="text-sm text-gray-500 truncate">{c.description}</div>

                    {/* STATUS */}
                    <div className="text-center">
                    <span
                        className={`px-2 py-1 text-xs rounded-full font-medium
                        ${
                            c.status === "approved"
                            ? "bg-green-100 text-green-600"
                            : c.status === "pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : c.status === "reviewing"
                            ? "bg-blue-100 text-blue-600"
                            : c.status === "completed"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-red-100 text-red-600"
                        }`}
                    >
                        {c.status}
                    </span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* PAGINATION FIXED */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-sm text-gray-400">
            Showing {claims.length} of {claims.length} claims
            </span>

            <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm rounded-lg border">Previous</button>
            <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white">1</button>
            <button className="w-8 h-8 rounded-lg border">2</button>
            <button className="px-3 py-1.5 text-sm rounded-lg border">Next</button>
            </div>
        </div>

        </div>
    );
}