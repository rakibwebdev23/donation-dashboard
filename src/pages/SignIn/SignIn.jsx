import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialSign from "../SocialSign/SocialSign";
import Swal from "sweetalert2";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            const result = await signIn(email, password);
            reset();
            Swal.fire({
                title: `${result.user.email} Signed In Successfully`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });
            navigate("/dashboard/adminHome");
        } catch (error) {
            Swal.fire({
                title: "Sign In Failed",
                text: error.message,
                icon: "error",
            });
        }
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left Side - Banner */}
                <div className="md:w-1/2 bg-rose-600 p-10 text-white hidden md:flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Welcome to CFBD</h2>
                    <p className="text-lg mb-6">Sign in and continue making an impact through donations.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            ✅ Secure donations
                        </li>
                        <li className="flex items-center">
                            ✅ Track your impact
                        </li>
                        <li className="flex items-center">
                            ✅ Join our community
                        </li>
                    </ul>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-8 w-full bg-slate-700">
                    <div className="text-center mb-6 text-white">
                        <h3 className="text-2xl font-bold">Sign In</h3>
                        <p>Access your account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-white font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-white font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border rounded focus:ring-rose-500 focus:border-rose-500"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-rose-600 text-white py-3 rounded font-semibold hover:bg-rose-700 transition"
                        >
                            Sign In
                        </button>

                    </form>
                    <SocialSign></SocialSign>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
