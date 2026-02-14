// import { Montserrat } from 'next/font/google';
// import Image from 'next/image';

// const montserrat = Montserrat({ subsets: ['latin'] });

// export default function Home() {
//   const links = [
//     {
//       title: "Presentation",
//       url: "#",
//       icon: "📊"
//     },
//     {
//       title: "Wholesale Store",
//       url: "#",
//       icon: "🏪"
//     },
//     {
//       title: "Retail Store",
//       url: "#",
//       icon: "🛒"
//     },
//     {
//       title: "LinkedIn",
//       url: "#",
//       icon: "💼"
//     }
//   ];

//   return (
//     <div className={`${montserrat.className} min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4`}>
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-orange-400/30">
//             <Image
//               src="/vitaline-favi.png"
//               alt="Vitaline Logo"
//               width={112}
//               height={112}
//               className="object-cover"
//               priority
//             />
//           </div>
//           <h1 className="text-4xl font-bold text-slate-800 mb-2">Vitaline</h1>
//           <p className="text-slate-600 text-lg">Uzbekistan</p>
//         </div>

//         <div className="space-y-4">
//           {links.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               className="block w-full p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl">{link.icon}</span>
//                   <span className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
//                     {link.title}
//                   </span>
//                 </div>
//                 <svg
//                   className="w-5 h-5 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export default function Home() {
  const links = [
    {
      title: "Presentation",
      url: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Wholesale Store",
      url: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Retail Store",
      url: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      url: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeWidth={2} />
        </svg>
      )
    }
  ];

  return (
    <div className={`${bricolageGrotesque.className} min-h-screen relative flex items-center justify-center p-4`}>
      {/* Background Image Top Half */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2">
          {/* <Image
            src="/links-bg.jpg"
            alt="Vitamins Background"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-orange-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-br from-orange-50 to-amber-50"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white bg-white">
            <Image
              src="/vitaline-favi.png"
              alt="Vitaline Logo"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-2">Vitaline</h1>
          <p className="text-slate-700 text-lg font-medium">Uzbekistan</p>
        </div>

        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block w-full p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-orange-500 group-hover:text-orange-600 transition-colors group-hover:scale-110 duration-300">
                    {link.icon}
                  </div>
                  <span className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {link.title}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}