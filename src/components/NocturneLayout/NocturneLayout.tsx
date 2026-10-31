
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, TouchEvent } from 'react';
import type { NocturneEvent } from '@/data/events';
import { events } from '@/data/events';
import HomeContent from '../Home/HomeContent';
import PastRaves from '../PastRaves/PastRaves';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import './NocturneLayout.css';

type Tab = 'home' | 'past' | 'gallery' | 'contact';

type NocturneLayoutProps = {
  initialDateKey: string;
};

const tabs: Tab[] = ['home', 'past', 'gallery', 'contact'];

const tabLabels: Record<Tab, string> = {
  home: 'HOME',
  past: 'PAST RAVES',
  gallery: 'PICS',
  contact: 'CONTACT',
};

function getMelbourneDateKey() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Australia/Melbourne',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const part = (type: string) =>
    parts.find((item) => item.type === type)?.value ?? '';

  return `${part('year')}-${part('month')}-${part('day')}`;
}

export default function NocturneLayout({
  initialDateKey,
}: NocturneLayoutProps) {
  const [todayKey, setTodayKey] = useState(initialDateKey);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [cubeRotation, setCubeRotation] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeTabRef = useRef<Tab>('home');
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const updateDate = () => setTodayKey(getMelbourneDateKey());

    updateDate();

    const interval = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const upcomingEvents = useMemo<NocturneEvent[]>(
    () =>
      events
        .filter((event) => event.date >= todayKey)
        .sort((a, b) => a.date.localeCompare(b.date)),
    [todayKey],
  );

  const pastEvents = useMemo<NocturneEvent[]>(
    () =>
      events
        .filter((event) => event.date < todayKey)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [todayKey],
  );

  const navigateToTab = useCallback((nextTab: Tab) => {
    const currentTab = activeTabRef.current;

    if (currentTab === nextTab) {
      setIsMenuOpen(false);
      return;
    }

    const currentIndex = tabs.indexOf(currentTab);
    const nextIndex = tabs.indexOf(nextTab);

    let difference = nextIndex - currentIndex;

    if (difference > 2) difference -= tabs.length;
    if (difference < -2) difference += tabs.length;

    activeTabRef.current = nextTab;
    setActiveTab(nextTab);
    setCubeRotation((rotation) => rotation + difference);
    setIsMenuOpen(false);
  }, []);

  const changeTab = useCallback((direction: -1 | 1) => {
    const currentIndex = tabs.indexOf(activeTabRef.current);
    const nextIndex =
      (currentIndex + direction + tabs.length) % tabs.length;

    const nextTab = tabs[nextIndex];

    activeTabRef.current = nextTab;
    setActiveTab(nextTab);
    setCubeRotation((rotation) => rotation + direction);
    setIsMenuOpen(false);
  }, []);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.closest(
        '.nocturne-event-carousel, .nocturne-gallery-track, button, a',
      )
    ) {
      touchStart.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    touchStart.current = null;

    if (
      Math.abs(deltaX) < 80 ||
      Math.abs(deltaX) < Math.abs(deltaY) * 1.25
    ) {
      return;
    }

    changeTab(deltaX < 0 ? 1 : -1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;

      if (
        target?.closest(
          'a, button, input, textarea, select, [contenteditable="true"]',
        )
      ) {
        return;
      }

      changeTab(event.key === 'ArrowRight' ? 1 : -1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeTab]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const cubeStyle = {
    '--cube-rotation': `${cubeRotation * -90}deg`,
  } as CSSProperties;

  return (
    <main
      className="nocturne-app"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <video
        className="nocturne-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/img/bg.jpg"
        aria-hidden="true"
      >
        <source src="/video/nocturne-rave.mp4" type="video/mp4" />
      </video>

      <div className="nocturne-video-shade" aria-hidden="true" />

      <header className="nocturne-header">
        <img
          src="/img/nocturne-lettering.svg"
          alt="Nocturne"
          className="nocturne-logo"
        />

        <nav
          id="nocturne-mobile-navigation"
          className={`nocturne-tabs ${isMenuOpen ? 'menu-open' : ''}`}
          aria-label="Main navigation"
        >
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => navigateToTab(tab)}
              aria-current={activeTab === tab ? 'page' : undefined}
            >
              <span className="nocturne-tab-number">
                0{index + 1}
              </span>
              {tabLabels[tab]}
            </button>
          ))}
        </nav>

        <span className="nocturne-location">MELBOURNE, AU</span>

        <button
          type="button"
          className="nocturne-menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nocturne-mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="nocturne-screen">
        <div className="nocturne-cube" style={cubeStyle}>
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab;

            const faceStyle = {
              transform: `rotateY(${index * 90}deg) translateZ(50vw)`,
            } as CSSProperties;

            return (
              <section
                key={tab}
                className={`nocturne-cube-face nocturne-face-${tab}`}
                data-tab={tab}
                aria-hidden={!isActive}
                inert={!isActive}
                style={faceStyle}
              >
                {tab === 'home' && (
                  <HomeContent upcomingEvents={upcomingEvents} />
                )}

                {tab === 'past' && (
                  <PastRaves pastEvents={pastEvents} />
                )}

                {tab === 'gallery' && <Gallery />}

                {tab === 'contact' && <Contact />}
              </section>
            );
          })}
        </div>
      </div>

      <footer className="nocturne-footer">
        <span className="nocturne-footer-copyright">
          NOCTURNE RAVERS © {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
