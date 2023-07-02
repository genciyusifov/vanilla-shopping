

function objectCollector({id, title, price, description, image, rating}) {
    
    return `<div class="max-w-xs mx-auto flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden m-2 z-[-22] ">
      <img src="${image}" alt="Product Image" class="w-full h-56  object-contain">
      <div class="p-4">
        <h3 class="text-gray-900 font-semibold text-lg mb-2">${title.slice(0, 20)}</h3>
        <p class="text-gray-700 leading-snug">${description.slice(0, 200)}</p>
        <div class="mt-4 flex items-center justify-between">
          <div class="text-gray-900 font-semibold text-xl">$${price}</div>
          <div class="flex items-center">
            <div class="text-gray-900 font-medium mr-1">Rating:</div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-yellow-500 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-yellow-500 text-sm">${rating.count}</span>
            </div>
            <div class="text-gray-900 ml-1">(<span class="text-sm">${rating.rate}</span>)</div>
          </div>
        </div>
        <button data-index="${id}"   class="mt-4 w-full px-4 py-2  bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Sebete at</button>
      </div>
    </div>
    `
}

export default objectCollector