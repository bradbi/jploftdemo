/**
 * Authentication service
 *
 * Implements:
 * - CUST-AUTH-01, CUST-AUTH-02, CUST-AUTH-03
 * - DET-AUTH-01, DET-AUTH-02
 */
export interface AuthService {
  signUp(params: { email: string; password: string }): Promise<void>;
  signUpWithPhone(params: { phone: string }): Promise<void>;
  verifyOtp(params: { code: string }): Promise<void>;
  signIn(params: { email: string; password: string }): Promise<void>;
  signInWithPhone(params: { phone: string }): Promise<void>;
  resetPassword(params: { email: string }): Promise<void>;
  signOut(): Promise<void>;
  onAuthStateChange(callback: (isAuthenticated: boolean) => void): () => void;
}
