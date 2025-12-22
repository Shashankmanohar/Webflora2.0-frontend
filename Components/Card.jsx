// components/PricingCard.jsx
export default function PricingCard({ title, price, description, buttonText, features = [], highlighted = false }) {
  return (
    <div
      className={`
        w-full max-w-sm rounded-2xl p-8 bg-[#0e0e0e] border 
        ${highlighted ? "border-orange-600" : "border-gray-700"} 
        transition-all duration-200 
        hover:border-orange-600 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]
      `}
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      <div className="mt-4 text-white text-4xl font-bold tracking-tight">
        {price}
        <span className="text-base text-gray-400 font-normal">/month</span>
      </div>

      <p className="mt-3 text-gray-400 text-sm leading-relaxed">{description}</p>

      <button
        className={`mt-6 w-full py-3 rounded-lg text-sm font-medium transition 
        ${highlighted ? "bg-orange-600 text-white" : "bg-gray-800 text-white hover:bg-orange-600"}
        `}
      >
        {buttonText}
      </button>

      <div className="mt-8">
        <h3 className="text-gray-400 text-xs tracking-widest">FEATURES</h3>
        <ul className="mt-4 space-y-3">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="text-orange-600">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
