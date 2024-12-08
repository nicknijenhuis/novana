'use client';

import Head from 'next/head';
import * as React from 'react';
import {
  FaBuilding,
  FaEnvelope,
  FaFileAlt,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

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
        <div className='layout relative flex min-h-screen flex-col items-center justify-center text-center'>
          <Logo className='m-5 w-full max-w-96' />
          <h1 className='hidden  text-white'>NOVANA</h1>
          <p className='hidden mt-4 text-white'>
            Create better software together
          </p>

          <section className='bg-dark text-white'>
            <div className='py-6 text-center space-y-2 mt-2 text-gray-200'>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='mr-2 text-primary-400' />
                <p>
                  <strong>Carbon6</strong>, N312 - Kloosterweg 1, 6412CN Heerlen
                </p>
              </div>
              <div className='flex items-center'>
                <FaEnvelope className='mr-2 text-primary-400' />
                <a
                  className='hover:text-primary-300'
                  href='mailto:nick@novana.nl'
                >
                  nick@novana.nl
                </a>
              </div>
              <div className='flex items-center'>
                <FaPhone className='mr-2 text-primary-400' />
                <a className='hover:text-primary-300' href='tel:+31457850849'>
                  +31 45 785 0849
                </a>
                <a className='ml-4 ' href='tel:+31457850849'>
                  <FaPhoneAlt className='text-cyan-500 hover:text-cyan-200 w-5 h-5' />
                </a>
                <a
                  href='https://wa.me/31457850849'
                  target='_blank'
                  className='ml-4'
                >
                  <FaWhatsapp className='text-emerald-500 hover:text-emerald-200 w-6 h-6' />
                </a>
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

          <Projects />

          <Services />

          <p className='mt-6 text-sm text-gray-200 max-w-3xl'>
            Novana helpt teamprocessen te vereenvoudigen en het resultaat te
            verhogen door gebruik te maken van de combinatie tussen
            softwarekennis én kennis van het proces. We laten teams van
            binnenuit groeien door gebruik van gezond verstand en creatieve
            ideeën. Bovendien bieden we gespecialiseerde diensten op het gebied
            van softwareontwikkeling en softwarearchitectuur, waardoor we
            diverse oplossingen kunnen bieden. Neem gerust contact op als je
            ideeën wilt opdoen of over mogelijkheden wilt praten.
          </p>

          <ButtonLink
            className='mt-6'
            href='https://www.linkedin.com/in/nicknijenhuis/'
            target='_blank'
          >
            Zie Linked-IN
          </ButtonLink>

          <p className='mt-4 text-sm text-gray-200'>
            <ArrowLink href='https://github.com/nicknijenhuis/' target='_blank'>
              Bekijk mijn projecten op GitHub
            </ArrowLink>
          </p>

          <div className='py-6'></div>

          <footer className='absolute bottom-2 text-gray-100'>
            © Novana {new Date().getFullYear()}
          </footer>
        </div>
      </section>
    </main>
  );
}
