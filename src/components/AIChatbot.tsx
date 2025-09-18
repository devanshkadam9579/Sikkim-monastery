import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Namaste! I'm your AI guide for Sikkim monasteries. How can I help you plan your spiritual journey?", 
      isBot: true 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: inputMessage, isBot: false }]);
      setInputMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: "Thank you for your question! I can help you with monastery information, virtual tours, travel planning, and spiritual guidance. What would you like to explore?", 
          isBot: true 
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[min(95vw,520px)] h-[min(95vh,850px)] z-40">
          <Card className="h-full shadow-2xl border-primary/20 overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <CardTitle className="text-lg flex items-center gap-2">
                🤖 Raahi
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/LCqeGDhvrr3i8S5hHSCKP"
                width="100%"
                style={{ height: "calc(100% - 2px)", minHeight: "780px", border: 0 }}
                frameBorder={0}
                title="Raahi Monastery Guide"
              />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};