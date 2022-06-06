import Link from 'next/link';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>GH</a>
        </Link>
      </div>

      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projects" includes />
      </ul>
    </Container>
  );
}

export default Header;
