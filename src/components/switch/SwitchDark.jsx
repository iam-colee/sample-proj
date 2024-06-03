import { useEffect } from "react";

const SwitchDark = () => {
    // SWITCH DARK/LIGHT TOGGLE
    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
    
    const toggleDarkMode = () => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        localStorage.setItem("darkMode", !isDarkMode ? "true" : "false");
    
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="ds-form-control">
            <label className="flex cursor-pointer gap-2">
                <input className="ds-toggle ds-toggle-xs ds-toggle-primary"
                    type="checkbox" 
                    onChange={toggleDarkMode}
                />
            </label>
        </div>
    );
}

export default SwitchDark;