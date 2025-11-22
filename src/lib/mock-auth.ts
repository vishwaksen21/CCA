// Mock Authentication System
// This is a temporary authentication system for development
// Replace with Firebase when ready for production

interface MockUser {
  email: string;
  password: string;
  name: string;
  id: string;
}

// Mock admin user credentials
const MOCK_ADMIN: MockUser = {
  email: 'chilukurvishwak21@gmail.com',
  password: 'Vishwak@151370',
  name: 'Vishwak',
  id: 'mock-admin-001',
};

// Session storage key
const SESSION_KEY = 'cca_admin_session';

export interface AuthUser {
  email: string;
  name: string;
  id: string;
}

// Sign in with email and password
export const mockSignIn = async (email: string, password: string): Promise<AuthUser> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  if (email !== MOCK_ADMIN.email) {
    throw new Error('Invalid email address.');
  }

  if (password !== MOCK_ADMIN.password) {
    throw new Error('Incorrect password. Please try again.');
  }

  const user: AuthUser = {
    email: MOCK_ADMIN.email,
    name: MOCK_ADMIN.name,
    id: MOCK_ADMIN.id,
  };

  // Store session
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    // Trigger session change event
    window.dispatchEvent(new Event('session-change'));
  }

  return user;
};

// Sign out
export const mockSignOut = async (): Promise<void> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(SESSION_KEY);
    // Trigger session change event
    window.dispatchEvent(new Event('session-change'));
  }
};

// Get current session
export const getCurrentSession = (): AuthUser | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const session = sessionStorage.getItem(SESSION_KEY);
  if (!session) {
    return null;
  }

  try {
    return JSON.parse(session) as AuthUser;
  } catch {
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentSession() !== null;
};
