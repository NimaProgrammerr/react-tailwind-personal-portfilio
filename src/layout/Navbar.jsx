// import { Menu, X } from "lucide-react";
// import Button from "../components/Button";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#experience", label: "Experience" },
//     { href: "#testimonials", label: "Testimonials" },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
//       isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
//       } z-50`}>
//       <nav className="container mx-auto px-6 flex item-center justify-between">
//         <a
//           href="#"
//           className="text-xl font-bold tracking-tight hover:text-primary"
//         >
//           NF<span className="text-primary">.</span>
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex item-center gap-1">
//           <div className="glass rounded-full px-2 py-1 flex item-center gap-1">
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}

//         <div className="hidden md:block">
//           <Button size="sm"><a href="#contact">Contact Me</a></Button>
//         </div>

//         {/* Mobile Menu Button */}

//         <button className="md:hidden p-2 text-foreground cursor-pointer" 
//         onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       { isMobileMenuOpen && (
//         <div className="md:hidden glass-strong animate-fade-in">
//         <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
//           {navLinks.map((link, index) => (
//             <a
//               href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2"
//             >
//               {link.label}
//             </a>
//           ))}

//           <Button>Contact Me</Button>
//         </div>
//       </div>)}
//     </header>
//   );
// };

// export default Navbar;



// import { Menu, X, Sun, Moon, Languages } from "lucide-react";
// import Button from "../components/Button";
// import { useEffect, useState } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useTheme } from "../context/ThemeContext";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const { language, toggleLanguage, t } = useLanguage();
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "#about", label: t("navbar.about") },
//     { href: "#projects", label: t("navbar.projects") },
//     { href: "#experience", label: t("navbar.experience") },
//     { href: "#testimonials", label: t("navbar.testimonials") },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
//         isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
//       } z-50`}
//     >
//       <nav className="container mx-auto px-6 flex item-center justify-between">
//         <a
//           href="#"
//           className="text-xl font-bold tracking-tight hover:text-primary"
//         >
//           NF<span className="text-primary">.</span>
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex item-center gap-1">
//           <div className="glass rounded-full px-2 py-1 flex item-center gap-1">
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Controls + CTA */}
//         <div className="hidden md:flex items-center gap-2">
//           {/* Language Button */}
//           <button
//             onClick={toggleLanguage}
//             className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//             title={language === "en" ? "فارسی" : "English"}
//           >
//             <Languages size={20} />
//           </button>

//           {/* Theme Button */}
//           <button
//             onClick={toggleTheme}
//             className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//             title={theme === "dark" ? "Light Mode" : "Dark Mode"}
//           >
//             {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           {/* CTA Button */}
//           <Button size="sm">
//             <a href="#contact">{t("navbar.contact")}</a>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 text-foreground cursor-pointer"
//           onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden glass-strong animate-fade-in">
//           <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="text-lg text-muted-foreground hover:text-foreground py-2"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}

//             <Button>
//               <a href="#contact">{t("navbar.contact")}</a>
//             </Button>

//             {/* Mobile Language + Theme */}
//             <div className="flex items-center gap-3 pt-2">
//               <button
//                 onClick={toggleLanguage}
//                 className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//               >
//                 <Languages size={20} />
//                 <span>{language === "en" ? "FA" : "EN"}</span>
//               </button>

//               <button
//                 onClick={toggleTheme}
//                 className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//               >
//                 {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Languages,
//   ChevronDown,
// } from "lucide-react";
// import Button from "../components/Button";
// import { useEffect, useState } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useTheme } from "../context/ThemeContext";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const { language, setLanguage, t } = useLanguage();
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "#about", label: t("navbar.about") },
//     { href: "#projects", label: t("navbar.projects") },
//     { href: "#experience", label: t("navbar.experience") },
//     { href: "#testimonials", label: t("navbar.testimonials") },
//   ];

//   const languages = [
//     {
//       code: "en",
//       name: "English",
//       nativeName: "English",
//     },
//     {
//       code: "fa",
//       name: "Persian",
//       nativeName: "فارسی",
//     },
//     {
//       code: "tr",
//       name: "Turkish",
//       nativeName: "Türkçe",
//     },
//     {
//       code: "de",
//       name: "German",
//       nativeName: "Deutsch",
//     },
//     {
//       code: "ar",
//       name: "Arabic",
//       nativeName: "العربية",
//     },
//   ];

//   const currentLanguage = languages.find(
//     (lang) => lang.code === language
//   );

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setIsLanguageOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
//         isScrolled
//           ? "glass-strong py-3"
//           : "bg-transparent py-5"
//       } z-50`}
//     >
//       <nav className="container mx-auto px-6 flex item-center justify-between">
//         {/* Logo */}
//         <a
//           href="#"
//           className="text-xl font-bold tracking-tight hover:text-primary"
//         >
//           NF<span className="text-primary">.</span>
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex item-center gap-1">
//           <div className="glass rounded-full px-2 py-1 flex item-center gap-1">
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Controls */}
//         <div className="hidden md:flex items-center gap-2">
//           {/* Language Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setIsLanguageOpen((prev) => !prev)
//               }
//               className="flex items-center gap-1.5 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//               title={t("common.language")}
//             >
//               <Languages size={20} />

//               <span className="text-sm font-medium">
//                 {currentLanguage?.nativeName}
//               </span>

//               <ChevronDown
//                 size={16}
//                 className={`transition-transform duration-200 ${
//                   isLanguageOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {isLanguageOpen && (
//               <div className="absolute right-0 top-full mt-2 w-40 glass-strong rounded-xl p-2 shadow-xl">
//                 {languages.map((lang) => (
//                   <button
//                     key={lang.code}
//                     onClick={() =>
//                       handleLanguageChange(lang.code)
//                     }
//                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
//                       language === lang.code
//                         ? "bg-primary/10 text-primary"
//                         : "text-muted-foreground hover:text-foreground hover:bg-surface"
//                     }`}
//                   >
//                     <span>{lang.nativeName}</span>

//                     {language === lang.code && (
//                       <span className="text-primary">✓</span>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Theme Button */}
//           <button
//             onClick={toggleTheme}
//             className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//             title={
//               theme === "dark"
//                 ? "Light Mode"
//                 : "Dark Mode"
//             }
//           >
//             {theme === "dark" ? (
//               <Sun size={20} />
//             ) : (
//               <Moon size={20} />
//             )}
//           </button>

//           {/* Contact Button */}
//           <Button size="sm">
//             <a href="#contact">
//               {t("navbar.contact")}
//             </a>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 text-foreground cursor-pointer"
//           onClick={() =>
//             setIsMobileMenuOpen((prev) => !prev)
//           }
//         >
//           {isMobileMenuOpen ? (
//             <X size={24} />
//           ) : (
//             <Menu size={24} />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden glass-strong animate-fade-in">
//           <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="text-lg text-muted-foreground hover:text-foreground py-2"
//                 onClick={() =>
//                   setIsMobileMenuOpen(false)
//                 }
//               >
//                 {link.label}
//               </a>
//             ))}

//             <Button>
//               <a href="#contact">
//                 {t("navbar.contact")}
//               </a>
//             </Button>

//             {/* Mobile Controls */}
//             <div className="flex items-center gap-3 pt-2">
//               {/* Mobile Language */}
//               <div className="relative">
//                 <button
//                   onClick={() =>
//                     setIsLanguageOpen((prev) => !prev)
//                   }
//                   className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//                 >
//                   <Languages size={20} />

//                   <span>
//                     {currentLanguage?.nativeName}
//                   </span>

//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${
//                       isLanguageOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </button>

//                 {isLanguageOpen && (
//                   <div className="absolute left-0 bottom-full mb-2 w-40 glass-strong rounded-xl p-2 shadow-xl">
//                     {languages.map((lang) => (
//                       <button
//                         key={lang.code}
//                         onClick={() =>
//                           handleLanguageChange(
//                             lang.code
//                           )
//                         }
//                         className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
//                           language === lang.code
//                             ? "bg-primary/10 text-primary"
//                             : "text-muted-foreground hover:text-foreground hover:bg-surface"
//                         }`}
//                       >
//                         <span>
//                           {lang.nativeName}
//                         </span>

//                         {language === lang.code && (
//                           <span className="text-primary">
//                             ✓
//                           </span>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Theme */}
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//                 title={
//                   theme === "dark"
//                     ? "Light Mode"
//                     : "Dark Mode"
//                 }
//               >
//                 {theme === "dark" ? (
//                   <Sun size={20} />
//                 ) : (
//                   <Moon size={20} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Languages,
//   ChevronDown,
// } from "lucide-react";

// import Button from "../components/Button";
// import { useEffect, useState } from "react";

// import { useLanguage } from "../context/LanguageContext";
// import { useTheme } from "../context/ThemeContext";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const { language, setLanguage, t } = useLanguage();
//   const { theme, toggleTheme } = useTheme();

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Navigation links
//   const navLinks = [
//     {
//       href: "#about",
//       label: t("navbar.about"),
//     },
//     {
//       href: "#projects",
//       label: t("navbar.projects"),
//     },
//     {
//       href: "#experience",
//       label: t("navbar.experience"),
//     },
//     {
//       href: "#testimonials",
//       label: t("navbar.testimonials"),
//     },
//   ];

//   // Languages
//   const languages = [
//     {
//       code: "en",
//       name: "English",
//       nativeName: "English",
//       flag: "🇬🇧",
//     },
//     {
//       code: "fa",
//       name: "Persian",
//       nativeName: "فارسی",
//       flag: "🇮🇷",
//     },
//     {
//       code: "tr",
//       name: "Turkish",
//       nativeName: "Türkçe",
//       flag: "🇹🇷",
//     },
//     {
//       code: "de",
//       name: "German",
//       nativeName: "Deutsch",
//       flag: "🇩🇪",
//     },
//     {
//       code: "ar",
//       name: "Arabic",
//       nativeName: "العربية",
//       flag: "🇸🇦",
//     },
//   ];

//   // Current language
//   const currentLanguage = languages.find(
//     (lang) => lang.code === language
//   );

//   // Change language
//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setIsLanguageOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? "glass-strong py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <nav className="container mx-auto px-6 flex items-center justify-between">

//         {/* Logo */}
//         <a
//           href="#"
//           className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
//         >
//           NF<span className="text-primary">.</span>
//         </a>

//         {/* ================= DESKTOP NAV ================= */}
//         <div className="hidden md:flex items-center gap-1">
//           <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}

//           </div>
//         </div>

//         {/* ================= DESKTOP CONTROLS ================= */}
//         <div className="hidden md:flex items-center gap-2">

//           {/* Language Dropdown */}
//           <div className="relative">

//             <button
//               onClick={() =>
//                 setIsLanguageOpen((prev) => !prev)
//               }
//               className="flex items-center gap-1.5 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//               title={t("common.language")}
//             >
//               <Languages size={20} />

//               {/* Current Flag */}
//               <span className="text-lg">
//                 {currentLanguage?.flag}
//               </span>

//               {/* Current Language */}
//               <span className="text-sm font-medium">
//                 {currentLanguage?.nativeName}
//               </span>

//               <ChevronDown
//                 size={16}
//                 className={`transition-transform duration-200 ${
//                   isLanguageOpen
//                     ? "rotate-180"
//                     : ""
//                 }`}
//               />
//             </button>

//             {/* Language Menu */}
//             {isLanguageOpen && (
//               <div className="absolute right-0 top-full mt-2 w-44 glass-strong rounded-xl p-2 shadow-xl">

//                 {languages.map((lang) => (
//                   <button
//                     key={lang.code}
//                     onClick={() =>
//                       handleLanguageChange(lang.code)
//                     }
//                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
//                       language === lang.code
//                         ? "bg-primary/10 text-primary"
//                         : "text-muted-foreground hover:text-foreground hover:bg-surface"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">

//                       {/* Flag */}
//                       <span className="text-lg">
//                         {lang.flag}
//                       </span>

//                       {/* Language Name */}
//                       <span>
//                         {lang.nativeName}
//                       </span>

//                     </div>

//                     {/* Selected */}
//                     {language === lang.code && (
//                       <span className="text-primary">
//                         ✓
//                       </span>
//                     )}
//                   </button>
//                 ))}

//               </div>
//             )}

//           </div>

//           {/* ================= THEME BUTTON ================= */}
//           <button
//             onClick={toggleTheme}
//             className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//             title={
//               theme === "dark"
//                 ? "Light Mode"
//                 : "Dark Mode"
//             }
//           >
//             {theme === "dark" ? (
//               <Sun size={20} />
//             ) : (
//               <Moon size={20} />
//             )}
//           </button>

//           {/* ================= CONTACT BUTTON ================= */}
//           <Button size="sm">
//             <a href="#contact">
//               {t("navbar.contact")}
//             </a>
//           </Button>

//         </div>

//         {/* ================= MOBILE MENU BUTTON ================= */}
//         <button
//           className="md:hidden p-2 text-foreground cursor-pointer"
//           onClick={() =>
//             setIsMobileMenuOpen((prev) => !prev)
//           }
//         >
//           {isMobileMenuOpen ? (
//             <X size={24} />
//           ) : (
//             <Menu size={24} />
//           )}
//         </button>

//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden glass-strong animate-fade-in">

//           <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

//             {/* Mobile Navigation */}
//             {navLinks.map((link, index) => (
//               <a
//                 href={link.href}
//                 key={index}
//                 className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
//                 onClick={() =>
//                   setIsMobileMenuOpen(false)
//                 }
//               >
//                 {link.label}
//               </a>
//             ))}

//             {/* Contact */}
//             <Button>
//               <a
//                 href="#contact"
//                 onClick={() =>
//                   setIsMobileMenuOpen(false)
//                 }
//               >
//                 {t("navbar.contact")}
//               </a>
//             </Button>

//             {/* ================= MOBILE CONTROLS ================= */}
//             <div className="flex items-center gap-3 pt-2">

//               {/* Mobile Language */}
//               <div className="relative">

//                 <button
//                   onClick={() =>
//                     setIsLanguageOpen((prev) => !prev)
//                   }
//                   className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//                 >
//                   <Languages size={20} />

//                   {/* Current Flag */}
//                   <span className="text-lg">
//                     {currentLanguage?.flag}
//                   </span>

//                   {/* Current Language */}
//                   <span>
//                     {currentLanguage?.nativeName}
//                   </span>

//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${
//                       isLanguageOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Mobile Language Menu */}
//                 {isLanguageOpen && (
//                   <div className="absolute left-0 bottom-full mb-2 w-44 glass-strong rounded-xl p-2 shadow-xl">

//                     {languages.map((lang) => (
//                       <button
//                         key={lang.code}
//                         onClick={() =>
//                           handleLanguageChange(
//                             lang.code
//                           )
//                         }
//                         className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
//                           language === lang.code
//                             ? "bg-primary/10 text-primary"
//                             : "text-muted-foreground hover:text-foreground hover:bg-surface"
//                         }`}
//                       >

//                         <div className="flex items-center gap-2">

//                           {/* Flag */}
//                           <span className="text-lg">
//                             {lang.flag}
//                           </span>

//                           {/* Language */}
//                           <span>
//                             {lang.nativeName}
//                           </span>

//                         </div>

//                         {/* Selected */}
//                         {language === lang.code && (
//                           <span className="text-primary">
//                             ✓
//                           </span>
//                         )}

//                       </button>
//                     ))}

//                   </div>
//                 )}

//               </div>

//               {/* Mobile Theme */}
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
//                 title={
//                   theme === "dark"
//                     ? "Light Mode"
//                     : "Dark Mode"
//                 }
//               >
//                 {theme === "dark" ? (
//                   <Sun size={20} />
//                 ) : (
//                   <Moon size={20} />
//                 )}
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//     </header>
//   );
// };

// export default Navbar;





import {
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  ChevronDown,
} from "lucide-react";

import Button from "../components/Button";
import { useEffect, useState } from "react";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

/* =========================================================
   FLAG ICON
========================================================= */

const FlagIcon = ({ country }) => {
  const commonClass =
    "w-6 h-4 rounded-sm overflow-hidden flex-shrink-0";

  const flags = {
    /* ================= ENGLAND / UK ================= */
    en: (
      <svg
        viewBox="0 0 60 40"
        className={commonClass}
      >
        <rect width="60" height="40" fill="#012169" />

        <path
          d="M0 0L60 40M60 0L0 40"
          stroke="white"
          strokeWidth="8"
        />

        <path
          d="M0 0L60 40M60 0L0 40"
          stroke="#C8102E"
          strokeWidth="4"
        />

        <path
          d="M30 0V40M0 20H60"
          stroke="white"
          strokeWidth="12"
        />

        <path
          d="M30 0V40M0 20H60"
          stroke="#C8102E"
          strokeWidth="7"
        />
      </svg>
    ),

    /* ================= IRAN ================= */
    fa: (
      <svg
        viewBox="0 0 60 40"
        className={commonClass}
      >
        <rect
          width="60"
          height="13.33"
          fill="#239f40"
        />

        <rect
          y="13.33"
          width="60"
          height="13.34"
          fill="#ffffff"
        />

        <rect
          y="26.67"
          width="60"
          height="13.33"
          fill="#da0000"
        />

        {/* Simplified Iran emblem */}
        <path
          d="M30 11 L33 20 L30 29 L27 20 Z"
          fill="#da0000"
        />
      </svg>
    ),

    /* ================= TURKEY ================= */
    tr: (
      <svg
        viewBox="0 0 60 40"
        className={commonClass}
      >
        <rect
          width="60"
          height="40"
          fill="#e30a17"
        />

        <circle
          cx="27"
          cy="20"
          r="9"
          fill="white"
        />

        <circle
          cx="30"
          cy="20"
          r="7"
          fill="#e30a17"
        />

        <path
          d="M36 20L44 15L41 20L44 25Z"
          fill="white"
        />
      </svg>
    ),

    /* ================= GERMANY ================= */
    de: (
      <svg
        viewBox="0 0 60 40"
        className={commonClass}
      >
        <rect
          width="60"
          height="13.33"
          fill="#000000"
        />

        <rect
          y="13.33"
          width="60"
          height="13.34"
          fill="#dd0000"
        />

        <rect
          y="26.67"
          width="60"
          height="13.33"
          fill="#ffce00"
        />
      </svg>
    ),

    /* ================= SAUDI ARABIA ================= */
    ar: (
      <svg
        viewBox="0 0 60 40"
        className={commonClass}
      >
        <rect
          width="60"
          height="40"
          fill="#006c35"
        />

        {/* Simplified Arabic sword */}
        <path
          d="M13 27H47"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M18 23C25 25 35 25 43 23"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  };

  return flags[country] || null;
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isLanguageOpen, setIsLanguageOpen] =
    useState(false);

  const { language, setLanguage, t } =
    useLanguage();

  const { theme, toggleTheme } =
    useTheme();

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     NAVIGATION LINKS
  ======================================================= */

  const navLinks = [
    {
      href: "#about",
      label: t("navbar.about"),
    },
    {
      href: "#projects",
      label: t("navbar.projects"),
    },
    {
      href: "#experience",
      label: t("navbar.experience"),
    },
    {
      href: "#testimonials",
      label: t("navbar.testimonials"),
    },
  ];

  /* =======================================================
     LANGUAGES
  ======================================================= */

  const languages = [
    {
      code: "en",
      name: "English",
      nativeName: "English",
    },
    {
      code: "fa",
      name: "Persian",
      nativeName: "فارسی",
    },
    {
      code: "tr",
      name: "Turkish",
      nativeName: "Türkçe",
    },
    {
      code: "de",
      name: "German",
      nativeName: "Deutsch",
    },
    {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
    },
  ];

  /* =======================================================
     CURRENT LANGUAGE
  ======================================================= */

  const currentLanguage = languages.find(
    (lang) => lang.code === language
  );

  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          NF<span className="text-primary">.</span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

            {navLinks.map(
              (link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                >
                  {link.label}
                </a>
              )
            )}

          </div>
        </div>

        {/* =================================================
            DESKTOP CONTROLS
        ================================================= */}

        <div className="hidden md:flex items-center gap-2">

          {/* ===============================================
              LANGUAGE DROPDOWN
          =============================================== */}

          <div className="relative">

            <button
              onClick={() =>
                setIsLanguageOpen(
                  (prev) => !prev
                )
              }
              className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              title={t(
                "common.language"
              )}
            >
              <Languages size={20} />

              {/* Current Flag */}
              <FlagIcon
                country={
                  currentLanguage?.code
                }
              />

              {/* Current Language */}
              <span className="text-sm font-medium">
                {
                  currentLanguage?.nativeName
                }
              </span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isLanguageOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* =============================================
                DROPDOWN
            ============================================= */}

            {isLanguageOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 glass-strong rounded-xl p-2 shadow-xl">

                {languages.map(
                  (lang) => (
                    <button
                      key={lang.code}
                      onClick={() =>
                        handleLanguageChange(
                          lang.code
                        )
                      }
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                        language ===
                        lang.code
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface"
                      }`}
                    >

                      <div className="flex items-center gap-2">

                        {/* Flag */}
                        <FlagIcon
                          country={
                            lang.code
                          }
                        />

                        {/* Language */}
                        <span>
                          {
                            lang.nativeName
                          }
                        </span>

                      </div>

                      {/* Check */}
                      {language ===
                        lang.code && (
                        <span className="text-primary">
                          ✓
                        </span>
                      )}

                    </button>
                  )
                )}

              </div>
            )}

          </div>

          {/* ===============================================
              THEME BUTTON
          =============================================== */}

          <button
            onClick={toggleTheme}
            className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            title={
              theme === "dark"
                ? "Light Mode"
                : "Dark Mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* ===============================================
              CONTACT
          =============================================== */}

          <Button size="sm">
            <a href="#contact">
              {t("navbar.contact")}
            </a>
          </Button>

        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() =>
            setIsMobileMenuOpen(
              (prev) => !prev
            )
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </nav>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">

          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

            {/* =============================================
                MOBILE NAVIGATION
            ============================================= */}

            {navLinks.map(
              (link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
                  onClick={
                    closeMobileMenu
                  }
                >
                  {link.label}
                </a>
              )
            )}

            {/* =============================================
                MOBILE CONTACT
            ============================================= */}

            <Button>
              <a
                href="#contact"
                onClick={
                  closeMobileMenu
                }
              >
                {t("navbar.contact")}
              </a>
            </Button>

            {/* =============================================
                MOBILE CONTROLS
            ============================================= */}

            <div className="flex items-center gap-3 pt-2">

              {/* ===========================================
                  MOBILE LANGUAGE
              =========================================== */}

              <div className="relative">

                <button
                  onClick={() =>
                    setIsLanguageOpen(
                      (prev) => !prev
                    )
                  }
                  className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Languages size={20} />

                  {/* Flag */}
                  <FlagIcon
                    country={
                      currentLanguage?.code
                    }
                  />

                  {/* Language */}
                  <span>
                    {
                      currentLanguage?.nativeName
                    }
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isLanguageOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* =========================================
                    MOBILE LANGUAGE DROPDOWN
                ========================================= */}

                {isLanguageOpen && (
                  <div className="absolute left-0 bottom-full mb-2 w-44 glass-strong rounded-xl p-2 shadow-xl">

                    {languages.map(
                      (lang) => (
                        <button
                          key={
                            lang.code
                          }
                          onClick={() =>
                            handleLanguageChange(
                              lang.code
                            )
                          }
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                            language ===
                            lang.code
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface"
                          }`}
                        >

                          <div className="flex items-center gap-2">

                            {/* Flag */}
                            <FlagIcon
                              country={
                                lang.code
                              }
                            />

                            {/* Language */}
                            <span>
                              {
                                lang.nativeName
                              }
                            </span>

                          </div>

                          {/* Check */}
                          {language ===
                            lang.code && (
                            <span className="text-primary">
                              ✓
                            </span>
                          )}

                        </button>
                      )
                    )}

                  </div>
                )}

              </div>

              {/* ===========================================
                  MOBILE THEME
              =========================================== */}

              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
                title={
                  theme === "dark"
                    ? "Light Mode"
                    : "Dark Mode"
                }
              >
                {theme === "dark" ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>

            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;