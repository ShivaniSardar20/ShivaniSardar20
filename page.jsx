"use client";
import React from "react";

function MainComponent() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const restaurants = [
    {
      id: 1,
      name: "Fresh Bites",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      rating: 4.5,
      cuisine: "American, Italian",
      deliveryTime: "20-30",
      priceRange: "$",
    },
    {
      id: 2,
      name: "Spice Garden",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      rating: 4.7,
      cuisine: "Indian, Asian",
      deliveryTime: "25-35",
      priceRange: "$$",
    },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Food delivery made simple
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          Order from your favorite local restaurants
        </p>

        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for restaurants or cuisine"
            className="w-full px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 
                     text-gray-900 dark:text-white bg-white dark:bg-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : restaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-700 dark:text-gray-300">
            No restaurants found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 
                       hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {restaurant.name}
                  </h3>
                  <span
                    className="inline-flex items-center bg-green-100 dark:bg-green-900 
                                 text-green-800 dark:text-green-100 px-2 py-1 rounded-full text-sm"
                  >
                    {restaurant.rating} ★
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {restaurant.cuisine}
                </p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{restaurant.deliveryTime} mins</span>
                  <span>{restaurant.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="fixed bottom-6 right-6">
        <button
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md 
                         transition-all transform hover:scale-105"
        >
          Start Order
        </button>
      </div>
    </div>
  );
}

export default MainComponent;