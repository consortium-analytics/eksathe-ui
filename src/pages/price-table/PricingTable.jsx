const pricingPlans = [
    {
      title: "Basic Package",
      price: "$0",
      per: "/per job",
      features: ["Free posting", "15 days visibility", "Basic support"],
      bgColor: "#93cbc4",
      textColor: "#000000",
      buttonBgColor: "#000000",
      buttonTextColor: "#ffffff",
    },
    {
      title: "Standard Package",
      price: "$50",
      per: "/per job",
      features: ["20 days visibility", "Job management tools", "Priority support"],
      bgColor: "#edcfad",
      textColor: "#000000",
      buttonBgColor: "#000000",
      buttonTextColor: "#ffffff",
    },
    {
      title: "Professional Package",
      price: "$100",
      per: "/per job",
      features: [
        "30 days visibility",
        "Job management tools",
        "Priority listing",
        "Featured on home page",
        "Job recommendations",
        "Verified badge",
      ],
      bgColor: "white",
      textColor: "#000000",
      buttonBgColor: "#000000",
      buttonTextColor: "#ffffff",
      isHighlighted: true,
    },
    {
      title: "Featured Listings",
      price: "$200",
      per: "/per job",
      features: [
        "30 days visibility",
        "Job management tools",
        "High priority listing",
        "Featured in the top section",
        "Job recommendations",
        "Verified badge",
      ],
      bgColor: "#5955b8",
      textColor: "#ffffff",
      buttonBgColor: "#ffffff",
      buttonTextColor: "#000000",
    },
  ];
  
  export default function PricingTable() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-white">
        <h2 className="text-4xl font-semibold mb-14 mt-10">Packages & Pricing</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-2xl text-center transition-all transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out flex flex-col justify-between h-full"
              style={{
                backgroundColor: plan.bgColor,
                color: plan.textColor,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {plan.isHighlighted && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full">
                  ★ Bestseller
                </div>
              )}
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="text-4xl font-bold mt-2">{plan.price}</p>
                <p className="text-sm opacity-80">{plan.per}</p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2 text-lg">Features</h4>
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                className="mt-auto w-full py-2 rounded-xl font-semibold hover:bg-opacity-90 transition duration-200 ease-in-out"
                style={{ backgroundColor: plan.buttonBgColor, color: plan.buttonTextColor }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  