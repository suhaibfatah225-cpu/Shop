import axios from 'axios';

// إنشاء نسخة من Axios بخصائص افتراضية
const api = axios.create({
  baseURL: 'https://ecommerce.routemisr.com/api/v1',
  timeout: 10000, // 10 ثواني كحد أقصى للطلب
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor للطلبات (إضافة التوكن قبل إرسال الطلب)
api.interceptors.request.use(
  (config) => {
    // جلب التوكن من الـ Local Storage
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.token = token; // الـ API الخاص بـ Route بيحتاج الهيدر يكون اسمه token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor للاستجابات (التعامل مع الأخطاء العامة زي انتهاء التوكن)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // التعامل مع الأخطاء الشائعة
    if (error.response?.status === 401) {
      // التوكن غير صالح أو انتهى، ممكن نعمل تسجيل خروج هنا
      localStorage.removeItem('userToken');
      // window.location.href = '/login'; // إعادة التوجيه لصفحة الدخول
    }
    return Promise.reject(error);
  }
);

export default api;
