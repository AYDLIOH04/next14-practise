import { Credentials } from '@/models';
import { create } from 'zustand';

type Role = 'ADMIN' | 'USER';

const USER: Role = 'USER';
const ADMIN: Role = 'ADMIN';

type AuthStore = {
  authorized: boolean;
  role: Role;
  credentials: Credentials;
  setAuth: (authorized: boolean) => void;
  switchPermission: () => void;
  login: (credentials: Credentials) => void;
  logout: () => void;
};

type AuthDataStore = {
  authorized: boolean,
  role: Role,
  credentials: {
    name: string,
    email: string,
  },
}

const defaultStore: AuthDataStore = {
  authorized: false,
  role: USER,
  credentials: {
    name: '',
    email: '',
  },
}

export const useAuthStore = create<AuthStore>((set) => ({
  ...defaultStore,
  setAuth: (authorized) => {
    set((state) => ({ ...state, authorized }))
  },
  login: (credentials) => {
    set((state) => ({ ...state, authorized: true, credentials }))
  },
  logout: () => {
    set(() => ({ ...defaultStore }))
  },
  switchPermission: () => {
    set((state) => ({ ...state, role: state.role === USER ? ADMIN : USER }));
  }
}))
