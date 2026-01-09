1. localStorage.setItem("key", "value") - to add new item or overwrite existing ones
2. localStorage.getItem("key") - to get any item
3. localStorage.removeItem("key") - to remove any item
4. localStorage.clear() - to clean whole local storage

// Local storage obj ya array ko store nhi kr paata isiliye hum phele usse stringify krke store krte hai
// and jab nikalna hota hai toh getItem krke nikal lete hai and then Parse() krke variable mai store kr lete hai
// isse normal array and obj mil jaata hai jo store kiya tha 

// JSON.stringify() : Array/Object -> String
// JSON.parse() : String -> Array/Object