import { useForm } from 'react-hook-form';
import { registerUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await registerUser(data);
      toast.success('Account created successfully 🎉');
      navigate('/login');
    } catch (err) {
      toast.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register('full_name', { required: 'Full name is required' })}
          className="w-full p-3 mb-1 border rounded-lg"
        />
        {errors.full_name && <p className="text-red-500 text-sm mb-3">{errors.full_name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
          className="w-full p-3 mb-1 border rounded-lg"
        />
        {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum 6 characters required' },
          })}
          className="w-full p-3 mb-1 border rounded-lg"
        />
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300 flex items-center justify-center"
        >
          {loading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            'Register'
          )}
        </button>
      </form>
    </div>
  );
}
