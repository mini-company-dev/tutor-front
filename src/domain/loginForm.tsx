// 'use client';
// import { useState } from 'react';
// import useLoginForm from './useLoginForm';

// export default function LoginForm() {
//   const {error, onSubmit} = useLoginForm();

//   return (
//     <form
//       onSubmit={onSubmit}
//       className="w-full max-w-sm mx-auto mt-24 p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg border border-gray-200"
//     >
//       <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//       <div className="flex flex-col gap-4">
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-600 mb-1"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent outline-none"
//             placeholder="you@example.com"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-600 mb-1"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent outline-none"
//             placeholder="••••••••"
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="mt-6 w-full bg-[var(--brand)] hover:bg-[var(--brand)]/80 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 disabled:opacity-60"
//       >
//         {loading ? 'Signing in...' : 'Login'}
//       </button>

//       <p className="text-sm text-gray-500 text-center mt-4">
//         Don't have an account?{' '}
//         <a href="/signup" className="text-[var(--brand)] hover:underline">
//           Sign up
//         </a>
//       </p>
//     </form>
//   );
// }
