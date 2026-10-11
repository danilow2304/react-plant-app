function Navigation({ links }) {
  return (
    <nav className="navigation">
      {links.map((link) => (
        <a key={link} href="#plants">{link}</a>
      ))}
    </nav>
  );
}

export default Navigation;
