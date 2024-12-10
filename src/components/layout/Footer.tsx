export const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 mt-auto text-center">
      <p className="text-xs">&copy; {getYear} &bull; Relay Point</p>
    </footer>
  );
};
