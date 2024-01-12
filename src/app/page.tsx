'use client';

import Head from 'next/head';
import * as React from 'react';
import {
  FaBuilding,
  FaEnvelope,
  FaFileAlt,
  FaMapMarker,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Novana - Create better software together</title>
      </Head>
      <section className='bg-dark'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='m-10 w-full max-w-96' />
          <h1 className='hidden mt-4 text-white'>NOVANA</h1>
          <p className='hidden mt-4 text-white'>
            Create better software together
          </p>
          <p className='mt-2 text-sm text-gray-200'>
            Novana helpt teamprocessen te vereenvoudigen en het resultaat te
            verhogen door gebruik van de combinatie tussen softwarekennis én
            kennis van het proces. Nick laat teams van binnenuit groeien door
            gebruik van gezond verstand en creatieve ideeën. Neem eens contact
            op als je ideeën wilt opdoen of over mogelijkheden wilt praten.
          </p>

          <ButtonLink
            className='mt-6'
            href='https://www.linkedin.com/in/nicknijenhuis/'
            target='_blank'
          >
            Zie Linked-IN
          </ButtonLink>

          <section className='bg-dark text-white'>
            <div className='py-6 text-center space-y-2 mt-2 text-gray-200'>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='mr-2 text-primary-400' />
                <p>
                  <strong>Carbon6</strong>, N312 - Kloosterweg 1, 6412CN Heerlen{' '}
                  <span className='italic'>(Bezoekadres)</span>
                </p>
              </div>
              <div className='flex items-center'>
                <FaEnvelope className='mr-2 text-primary-400' />
                <a href='mailto:nick@novana.nl'>nick@novana.nl</a>
              </div>
              <div className='flex items-center'>
                <FaBuilding className='mr-2 text-primary-400' />
                <p>
                  KVK: <em>71662790</em>
                </p>
              </div>
              <div className='flex items-center'>
                <FaFileAlt className='mr-2 text-primary-400' />
                <p>
                  BTW: <em>NL001203035B92</em>
                </p>
              </div>
              <div className='flex items-center'>
                <FaMapMarker className='mr-2 text-primary-400' />
                <p>
                  Ganzevoet 8, 6444 VP Brunssum{' '}
                  <span className='italic'>(Factuuradres)</span>
                </p>
              </div>
            </div>
          </section>

          <p className='mt-10 text-sm text-gray-200'>
            <ArrowLink
              href='https://www.meetup.com/nl-NL/agile-limburg/'
              target='_blank'
            >
              Join een van onze Agile Limburg Meetups
            </ArrowLink>
          </p>

          <p className='mt-10 text-sm text-gray-200'>
            <ArrowLink href='https://github.com/nicknijenhuis/' target='_blank'>
              Bekijk mijn projecten op GitHub
            </ArrowLink>
          </p>

          <footer className='absolute bottom-2 text-gray-100'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://www.linkedin.com/in/nicknijenhuis/'>
              Nick Nijenhuis
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
