
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navigationItems = [
  { label: 'Home', href: '/', tab: 'home' },
  { label: 'About', href: '/about', tab: 'about' },
  { label: 'Subscribe', href: '/mailing-list', tab: 'mailing-list' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerVisible, setBurgerVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const savedTab = sessionStorage.getItem('activeTab');
    if (savedTab) setActiveTab(savedTab);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  function openNav() {
    setMenuOpen(true);
    setBurgerVisible(false);
  }

  function closeNav() {
    setMenuOpen(false);

    window.setTimeout(() => {
      setBurgerVisible(true);
    }, 400);
  }

  function openTab(tab: string) {
    setActiveTab(tab);
    closeNav();
  }

  return (
    <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="align-items-center custom-nav">
              {navigationItems.map((item) => (
                <Nav.Link
                  key={item.href}
                  as={Link}
                  href={item.href}
                  active={pathname === item.href}
                  onClick={() => openTab(item.tab)}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {burgerVisible && (
        <button
          id="openbtn"
          className="open-menu"
          onClick={openNav}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      )}

      <div
        id="mySidebar"
        className="sidebar"
        style={{ width: menuOpen ? '100%' : '0' }}
        aria-hidden={!menuOpen}
      >
        <button
          className="closebtn"
          onClick={closeNav}
          aria-label="Close navigation"
        >
          ×
        </button>

        <Nav className="flex-column align-items-center custom-nav">
          {navigationItems.map((item) => (
            <Nav.Link
              key={item.href}
              as={Link}
              href={item.href}
              active={pathname === item.href}
              className="nav-link"
              onClick={() => openTab(item.tab)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}
