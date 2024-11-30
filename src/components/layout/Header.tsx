import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { ButtonGroup } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Github } from '@/components/common';
import { ThemeSwitcher } from '@/components/common';

export const Header = () => {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="font-semibold text-inherit">
          Relay Point
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ButtonGroup>
            <Github />
            <ThemeSwitcher />
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
