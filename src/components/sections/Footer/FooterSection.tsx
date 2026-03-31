import { motion } from "framer-motion";

const links = [
  { title: "Product", items: ["Features", "Experience", "Pricing"] },
  { title: "Company", items: ["About", "Careers", "Contact"] },
  { title: "Resources", items: ["Docs", "Help Center", "Privacy"] },
];

const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              DreamSpace
            </h2>
            <p className="mt-4 text-gray-400 text-sm">
              Design and explore your interiors with a next-level interactive experience.
            </p>
          </div>

          {/* Links */}
          {links.map((group, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {group.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DreamSpace. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4 text-gray-400">
            {["Twitter", "Instagram", "LinkedIn"].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer hover:text-white"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;