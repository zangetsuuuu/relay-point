export const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="absolute w-full text-center bottom-4">
      <p className="text-xs">&copy; {getYear} &bull; Relay Point</p>
    </footer>
  );
};
