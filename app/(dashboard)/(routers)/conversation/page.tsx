"use client";
import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import ToolsNavigation from "@/components/dashboard/tools-navigation";
import UserMessage from "@/components/dashboard/ai-response";
import AiResponse from "@/components/dashboard/user-message";
import MarkdownResponse from "@/components/dashboard/markdown-response";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useProStote } from "@/stores/pro-store";

const ConversationPage = () => {
  const containerRef = useRef(null);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    setMessages,
  } = useChat({
    api: "/api/conversation",
  });

  const { handleOpenOrCloseProModal } = useProStote();

  useEffect(() => {
    if (error) {
      const errorParsed = JSON.parse(error?.message);

      if (errorParsed.status === 403) {
        handleOpenOrCloseProModal();
      }
    }
  }, [error, handleOpenOrCloseProModal]);

  const handleClearChat = () => {
    setMessages([]);
  };

  // const msg_test = [
  //   {
  //     id: 1,
  //     role: "user",
  //     content: "msg from User",
  //   },
  //   {
  //     id: 2,
  //     role: "ai",
  //     content: "msg from AI",
  //   },
  // ];

  return (
    <div className="h-full relative flex flex-col justify-between">
      <div
        ref={containerRef}
        className="h-[calc(100vh-180px)] overflow-y-auto space-x-10 scroll-smooth"
      >
        {messages.length > 0 ? (
          <>
            {messages.map((msg) => (
              <div key={msg.id} className="whitespace-pre-wrap mb-8">
                {msg.role !== "user" ? (
                  <UserMessage>
                    <MarkdownResponse content={msg.content} />
                  </UserMessage>
                ) : (
                  <AiResponse>
                    <MarkdownResponse content={msg.content} />
                  </AiResponse>
                )}
              </div>
            ))}
            <div className="absolute left-0 bottom-20 text-right w-full pr-10">
              <Button size="sm" variant="outline" onClick={handleClearChat}>
                Clear chat
              </Button>
            </div>
          </>
        ) : (
          <ToolsNavigation title="Conversation" />
        )}
      </div>
      <div className="mb-[13px]">
        <form
          onSubmit={isLoading ? stop : handleSubmit}
          className="flex items-center w-full relative"
        >
          <Textarea
            placeholder="Do you have questions ?"
            value={input}
            onChange={handleInputChange}
            className="min-h-1 resize-none"
          />
          <Button
            type="submit"
            disabled={!input}
            className="absolute right-2 gradient-btn"
          >
            {isLoading ? "Stop" : <Send />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConversationPage;
