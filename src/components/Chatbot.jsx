import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { fetchProduct, addToCart } from "../services/productService";

const GoogleGenerativeAIComponent = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [mood, setMood] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      user: "",
      ai: "Hello! I am a chatbot. How are you feeling today? (Coffee Mood Matcher is a chatbot and virtual assistant, powered by Google Gemini. It enables YOU to refine and steer a conversation based on your mood, recommending a personalized product for you!)",
    },
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProduct();
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = async (productID) => {
    try {
      const response = await addToCart(productID);
      console.log(response);
      alert("Added to cart successfully!");
    } catch (error) {
      console.log("Add product failed", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const apiKey = "AIzaSyDMEUw1mvHx1zO2CcnsvyMRm3fUEoFVtlU"; // Replace with your actual API key
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const baristaPrompt = `As a barista, recommend a product for someone feeling ${mood}. Make it short. and only recommend it from ${products
        .map((product) => product.productName)
        .join(", ")}. also give full product name when answer`;

      const result = await model.generateContent(baristaPrompt);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);

      // Extract product name from the chatbot response and fetch product details
      const recommendedProduct = products.find((product) =>
        text.includes(product.productName)
      );
      if (recommendedProduct) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { user: mood, ai: text, product: recommendedProduct },
        ]);
      }

      setMood(""); // Clear the mood input after submission
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedText("Error generating content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FCFAFA]">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-4">
        <div className="flex items-center p-4 bg-[#655050] text-white rounded-t-lg">
          <img
            src="https://info.ehl.edu/hubfs/1440/1440x960-barista.jpg" // Replace with your actual AI barista image URL
            alt="AI Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold">Chat with Coffee Mood Matcher</h1>
            <p>We typically reply in a few minutes.</p>
          </div>
        </div>
        <div className="flex flex-col h-96 p-4 overflow-y-auto bg-gray-50">
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-4">
              {chat.user && (
                <div className="flex justify-end mb-2">
                  <div className="bg-[#655050] text-white p-3 rounded-lg max-w-xs">
                    {chat.user}
                  </div>
                </div>
              )}
              {chat.ai && (
                <div className="flex justify-start mb-2">
                  <div className="bg-gray-300 text-black p-3 rounded-lg max-w-xs">
                    {chat.ai}
                  </div>
                </div>
              )}
              {chat.product && (
                <div
                  className="flex justify-start mb-2 cursor-pointer"
                  onClick={() => handleAddToCart(chat.product.productID)}
                >
                  <div className="bg-white p-3 rounded-lg max-w-xs hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <img
                      src={chat.product.imgUrl}
                      alt={chat.product.productName}
                      className="w-full h-auto rounded-md mb-2"
                    />
                    <h2 className="font-bold">{chat.product.productName}</h2>
                    <p>{chat.product.description}</p>
                    <p className="font-bold">฿{chat.product.price}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center items-center">
              <span className="loading-indicator">Loading...</span>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center p-4 border-t border-gray-200"
        >
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-[#655050]"
            placeholder="Enter your mood..."
          />
          <button
            type="submit"
            className="ml-4 p-3 bg-[#655050] text-white rounded-lg hover:bg-[#655050] focus:outline-none focus:ring-2 focus:ring-[#655050]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoogleGenerativeAIComponent;
