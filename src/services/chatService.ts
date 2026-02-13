/**
 * Chat service for customer-detailer communication
 *
 * Implements:
 * - CUST-CHAT-01, CUST-CHAT-02
 * - DET-CHAT-01, DET-CHAT-02
 */
export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isSystemMessage: boolean;
}

export interface ChatService {
  sendMessage(bookingId: string, message: string): Promise<void>;
  watchMessages(bookingId: string, callback: (messages: ChatMessage[]) => void): () => void;
  isChatAvailable(bookingId: string): Promise<boolean>;
}
