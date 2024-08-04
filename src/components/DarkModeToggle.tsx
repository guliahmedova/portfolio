// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// const DarkModeToggle = () => {
//     const [mounted, setMounted] = useState(false);
//     const { theme, setTheme } = useTheme();

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     if (!mounted) return null;

//     return (
//         <button
//             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//             className="relative inline-flex items-center h-10 w-20 p-1 rounded-full transition-colors duration-300 bg-gray-300 dark:bg-gray-700"
//         >
//             <div
//                 className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${theme === 'dark' ? 'transform translate-x-10' : ''
//                     }`}
//             >
//                 <FontAwesomeIcon
//                     icon={theme === 'dark' ? faMoon : faSun}
//                     className={`text-xl transition-transform duration-300 ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-500'
//                         }`}
//                 />
//             </div>
//         </button>
//     );
// };

// export default DarkModeToggle;
