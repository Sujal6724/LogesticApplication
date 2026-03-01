import { useForm } from 'react-hook-form';
import { loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await loginUser(data);

      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);

      toast.success('Login successful 🎉');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          })}
          className="w-full p-3 mb-1 border rounded-lg"
        />
        {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>}

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters required',
              },
            })}
            className="w-full p-3 mb-1 border rounded-lg"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
        >
          {loading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
}
