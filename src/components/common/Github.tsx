import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Tooltip } from '@nextui-org/tooltip';
import { GithubLogo } from '@phosphor-icons/react';

export const Github = () => {
  return (
    <Tooltip content="View on GitHub" placement="bottom" size="sm" radius="sm" closeDelay={100}>
      <Button
        as={Link}
        href="https://github.com/zangetsuuuu/relay-point"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
        variant="light"
        size="sm"
        radius="sm"
        isIconOnly
      >
        <GithubLogo size={18} />
      </Button>
    </Tooltip>
  );
};
