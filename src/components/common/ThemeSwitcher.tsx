import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { Sun, Moon } from '@phosphor-icons/react';

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const icon = theme === 'light' ? <Moon size={16} /> : <Sun size={16} />;
  const tooltipContent = `Turn ${theme === 'light' ? 'off' : 'on'} the light`;

  return (
    <Tooltip content={tooltipContent} placement="bottom" size="sm" radius="sm" closeDelay={100}>
      <Button
        aria-label="Toggle Theme"
        variant="light"
        size='sm'
        radius="sm"
        isIconOnly
        onClick={toggleTheme}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};
