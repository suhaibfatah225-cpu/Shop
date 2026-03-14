import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api';

// تحديد شكل البيانات الخاصة بالـ Context
interface AuthContextType {
  userToken: string | null;
  userData: any | null; // يمكن تحديد Interface لبيانات المستخدم لاحقاً
  setToken: (token: string | null) => void;
  logout: () => void;
  isLoading: boolean;
}

// إنشاء الـ Context بقيمة مبدئية
export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  userData: null,
  setToken: () => {},
  logout: () => {},
  isLoading: true,
});

// إنشاء الـ Provider اللي هيغلف التطبيق
export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // دالة لتحديث التوكن في الـ State والـ LocalStorage
  const setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem('userToken', token);
      setUserToken(token);
      // هنا ممكن نعمل Decode للتوكن لو محتاجين بيانات المستخدم (زي الـ Role أو الـ ID)
      // باستخدام مكتبة زي jwt-decode
    } else {
      localStorage.removeItem('userToken');
      setUserToken(null);
      setUserData(null);
    }
  };

  // دالة تسجيل الخروج
  const logout = () => {
    setToken(null);
  };

  // التحقق من وجود التوكن عند أول تحميل للتطبيق (عشان لو المستخدم عمل Refresh)
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setUserToken(token);
      // لو الـ API بيوفر Endpoint للتحقق من التوكن وجلب بيانات المستخدم، ممكن نطلبه هنا
      // api.get('/users/me').then(res => setUserData(res.data)).catch(() => logout());
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, userData, setToken, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
