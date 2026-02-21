// import { Bricolage_Grotesque } from 'next/font/google';
// import Image from 'next/image';

// const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'] });

// export default function Home() {
//   const links = [
//     {
//       title: "Presentation",
//       url: "/presentation.pdf",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
//         </svg>
//       )
//     },
//     {
//       title: "Wholesale Store",
//       url: "https://www.vitaline-trade.com/ru",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//       )
//     },
//     {
//       title: "Retail Store",
//       url: "https://www.vitaline.uz/",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "LinkedIn",
//       url: "https://www.linkedin.com/in/vitaline-uzbekistan-28908a352/",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//           <circle cx="4" cy="4" r="2" strokeWidth={2} />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className={`${bricolageGrotesque.className} min-h-screen relative flex items-center justify-center p-4`} style={{ backgroundColor: '#ef8508' }}>
//       {/* Content */}
//       <div className="w-full max-w-md relative z-10">
//         <div className="text-center mb-8">
//           <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white bg-white">
//             <Image
//               src="/vitaline-favi.png"
//               alt="Vitaline Logo"
//               width={128}
//               height={128}
//               className="object-cover"
//               priority
//             />
//           </div>
//           <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">Vitaline</h1>
//           <p className="text-white text-lg font-medium drop-shadow">Uzbekistan</p>
//         </div>

//         <div className="space-y-4">
//           {links.map((link, index) => (
            
//             <a  key={index}
//               href={link.url}
//               className="block w-full p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="text-orange-500 group-hover:text-orange-600 transition-colors group-hover:scale-110 duration-300">
//                     {link.icon}
//                   </div>
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
      url: "/presentation.pdf",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Wholesale Store",
      url: "https://www.vitaline-trade.com/ru",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Retail Store",
      url: "https://www.vitaline.uz/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/vitaline-uzbekistan-28908a352/",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeWidth={2} />
        </svg>
      )
    }
  ];

  const contacts = [
    { name: "Kamila", role: "Director", email: "kamila@vitaline.uz" },
    { name: "Abdelmansur", role: "CEO", email: "abdelmansur@vitaline.uz" }
  ];

  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <div
      className={`${bricolageGrotesque.className} min-h-screen relative flex items-center justify-center p-4`}
      style={{ backgroundColor: '#ef8508' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="w-full max-w-sm relative z-10">

        {/* Header */}
        <div className="text-center mb-6 mt-2">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-4 ring-white bg-white">
            <Image
              src="/vitaline-favi.png"
              alt="Vitaline Logo"
              width={96}
              height={96}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-1 drop-shadow-lg">Vitaline</h1>
          <p className="text-white/80 text-base font-medium">Uzbekistan</p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block w-full px-4 py-3.5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-orange-500 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="text-base font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {link.title}
                  </span>
                </div>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/30" />
          <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Contacts</span>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-2.5 mb-2.5">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2.5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">{contact.name}</p>
                <p className="text-white/60 text-xs">{contact.role}</p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/35 rounded-lg transition-all duration-200 group shrink-0"
              >
                <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-xs font-semibold tracking-wide">{contact.email}</span>
              </a>
            </div>
          ))}
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/998911660090"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-4 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5 group"
        >
          <div className="flex items-center gap-3">
            <div className="text-white group-hover:scale-110 transition-transform duration-300">
              <WhatsAppIcon />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-white/60 text-xs">+998 91 166 00 90</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

      </div>
    </div>
  );
}