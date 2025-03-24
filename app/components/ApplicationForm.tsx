export default function ApplicationForm() {
  const industries = [
    'Construction Equipment',
    'Medical Equipment',
    'Restaurant Equipment',
    'Brewery Equipment',
    'Crane Equipment',
    'Dental Equipment',
    'Excavator Equipment',
    'Dump Trucks',
    'Box Truck Equipment',
    'CNC Equipment',
    'Used Equipment'
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Apply NOW</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1">Business Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1">Email*</label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1">Equipment Cost</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            min="20000"
            step="1000"
          />
        </div>

        <div>
          <label className="block mb-1">Industry</label>
          <select className="w-full p-2 border rounded-lg">
            <option value="">Select Industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Years in Business</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            min="0"
            step="1"
          />
        </div>

        <div>
          <label className="block mb-1">Annual Revenue</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            min="0"
            step="1000"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
} 