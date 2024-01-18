import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const usePasswordIcon = () => {
    const [showPassword, setShowPassword] = useState(false)
    
    const icon = showPassword ? <FaEyeSlash className="auth-icons" onClick={() => setShowPassword(!showPassword)} /> : <FaEye className="auth-icons" onClick={() => setShowPassword(!showPassword)} />

    return {icon, showPassword}
} 

export default usePasswordIcon;