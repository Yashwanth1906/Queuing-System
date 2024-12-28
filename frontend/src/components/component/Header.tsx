

export function Header() {
  return (
    <header className="fixed w-full z-10 bg-[#CFFFDC] bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#2E6F40]">
          Svaasth
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {['Services', 'Our Aim', 'About Us'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="text-[#253D2C] hover:text-[#68BA7F] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}