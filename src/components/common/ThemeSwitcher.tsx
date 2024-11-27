import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { Sun, Moon } from '@phosphor-icons/react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Button
        aria-label="Theme Switcher"
        variant="light"
        radius="sm"
        isIconOnly
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
    </>
  );
};
