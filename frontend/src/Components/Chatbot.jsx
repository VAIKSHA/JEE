import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Link, Smile, X } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  const API_KEY = `AIzaSyC0iC9VP8XkUDbvOse4z7O3loHQfFdA8t4`;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
  const chatHistory = [];

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    const newMessages = [...messages];
    if (input.trim()) {
      newMessages.push({ text: input, sender: "user" });
      chatHistory.push({ role: "user", parts: [{ text: input }] });
    }
    if (file) {
      newMessages.push({
        text: `Uploaded file: ${file.name}`,
        sender: "user",
        file,
      });
      chatHistory.push({
        role: "user",
        parts: [{ inline_data: { data: file.data, mime_type: file.type } }],
      });
      setFile(null);
    }

    setMessages(newMessages);
    setInput("");

    const thinkingMessage = {
      text: "Thinking...",
      sender: "bot",
      thinking: true,
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    const abortController = new AbortController();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: chatHistory }),
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from Google Gemini API");
      }

      const data = await response.json();
      const botResponse =
        data.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages((prev) =>
        prev.map((msg) =>
          msg.thinking ? { text: botResponse, sender: "bot" } : msg
        )
      );
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching chatbot response:", error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.thinking
              ? { text: "Error: Unable to fetch response.", sender: "bot" }
              : msg
          )
        );
      }
    }

    return () => abortController.abort();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB. Please upload a smaller file.");
        return;
      }
      if (!["image/png", "image/jpeg", "application/pdf"].includes(selectedFile.type)) {
        alert("Unsupported file type. Please upload a PNG, JPEG, or PDF file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile({
          name: selectedFile.name,
          type: selectedFile.type,
          data: event.target.result, // Base64 data for preview
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleEmojiClick = (emoji) => {
    setInput((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const cancelFileUpload = () => {
    setFile(null);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      requestAnimationFrame(() => {
        inputRef.current.style.height = "auto";
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      });
    }
  }, [input]);

  const wrapperStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  };

  const iconStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "12px",
    borderRadius: "50%",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "16px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    height: "450px",
    animation: isOpen ? "fadeIn 0.3s ease-in-out" : "fadeOut 0.3s ease-in-out",
  };

  const messagesStyle = {
    flex: 1,
    overflowY: "auto",
    marginBottom: "16px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    scrollbarWidth: "thin",
    scrollbarColor: "#3b82f6 #f3f4f6",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "8px",
  };

  const textareaStyle = {
    flex: 1,
    padding: "10px 40px 10px 10px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
    resize: "none",
    fontSize: "14px",
    lineHeight: "1.5",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#f9fafb",
    color: "#111827",
    height: "40px",
    minHeight: "42px",
    maxHeight: "80px",
  };

  const sendButtonStyle = {
    marginLeft: "8px",
    padding: "10px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    height: "40px",
    minHeight: "42px",
    maxHeight: "80px",
  };

  const uploadIconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#3b82f6",
  };

  const messageStyle = (sender) => ({
    padding: "10px",
    borderRadius: "12px",
    maxWidth: "70%",
    alignSelf: sender === "user" ? "flex-end" : "flex-start",
    backgroundColor: sender === "user" ? "#3b82f6" : "#f3f4f6",
    color: sender === "user" ? "white" : "black",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    animation: "slideIn 0.3s ease-in-out",
  });

  return (
    <div style={wrapperStyle}>
      {!isOpen && (
        <div style={iconStyle} onClick={() => setIsOpen(true)}>
          <MessageCircle size={30} />
        </div>
      )}

      {isOpen && (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Chatbot</h3>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
          <div style={messagesStyle} ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} style={messageStyle(msg.sender)}>
                {msg.text}
                {msg.file && (
                  <img
                    src={`data:${msg.file.type};base64,${msg.file.data}`}
                    alt={msg.file.name}
                    style={{ maxWidth: "100%", marginTop: "8px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div style={inputContainerStyle}>
            <div style={{ position: "relative", flex: 1 }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask your query..."
                aria-label="Chat input"
                style={textareaStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              />
              <label style={uploadIconStyle}>
                {file ? (
                  file.type.startsWith("image/") ? (
                    <img
                      src={file.data}
                      alt="Preview"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "4px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "4px",
                        backgroundColor: "#e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        color: "#3b82f6",
                      }}
                    >
                      PDF
                    </div>
                  )
                ) : (
                  <Link size={20} />
                )}
                <input
                  type="file"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <button
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              style={sendButtonStyle}
              aria-label="Toggle emoji picker"
            >
              <Smile size={20} />
            </button>
            {showEmojiPicker && (
              <div style={{ position: "absolute", bottom: "60px", right: "20px" }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <button onClick={handleSend} style={sendButtonStyle} aria-label="Send message">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;