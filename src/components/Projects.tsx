const projects = [
  {
    id: 1,
    title: 'Action Webshop',
    href: 'https://shop.action.com/nl-nl/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/xvrcf9jsivfiotqsgt0b',
    author: {
      name: 'Action (NL & BE)',
      imageUrl: '',
    },
  },
  {
    id: 4,
    title: 'Street Art Cities - Artist profiles & Experiences',
    href: 'https://streetartcities.com/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/ssqv3wr05sqv17npsbvb',
    author: {
      name: 'Street Art Cities',
      imageUrl: '',
    },
  },
  {
    id: 2,
    title: 'Action.com',
    href: 'https://www.action.com/nl-nl/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/ebhcstd0iejb41f9wcip',
    author: {
      name: 'Action (Europa)',
      imageUrl: '',
    },
  },
  {
    id: 5,
    title: 'De Bundeling Fysiotherapie',
    href: 'https://debundeling.nl/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/zx4ngksckjxb0ljnmffu',
    author: {
      name: 'De Bundeling',
      imageUrl: '',
    },
  },
  {
    id: 3,
    title: 'Carnaval-Radio.nl',
    href: 'https://carnaval-radio.nl/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/eknz8pchhwj00xs7tdcp',
    author: {
      name: 'Stichting Carnaval-Radio',
      imageUrl: '',
    },
  },
  {
    id: 6,
    title: 'Cadac Leaderboard',
    href: 'https://invmark.cadac.com/#/',
    description: '',
    imageUrl:
      'https://res.cloudinary.com/dnbvdizhl/image/upload/f_auto,q_auto/aeldovplfuwfh0wpxubz',
    author: {
      name: 'Cadac',
      imageUrl: '',
    },
  },
  {
    id: 7,
    title: 'Proefneming strafrechtketen bij politie innovatielab in Heerlen',
    href: 'https://www.strafrechtketen.nl/actueel/nieuws/2024/04/08/twee-teams-vijf-opdrachten-drie-dagen-afspraken-en-standaarden-getest-in-heerlen',
    description: '',
    imageUrl:
      'https://www.strafrechtketen.nl/binaries/medium/content/gallery/strafrechtketen/content-afbeeldingen/digitalisering/proefneming---2-klein.jpg',
    author: {
      name: 'Politie Innovatie Lab',
      imageUrl: '',
    },
  },
  {
    id: 8,
    title: 'CarSystems | Slimme garagesoftware | LKQ',
    href: 'https://www.carsys.online/',
    description: '',
    imageUrl:
      'https://www.carsys.online/wp-content/uploads/2023/03/Carsys-Devices-1.png',
    author: {
      name: 'LKQ',
      imageUrl: '',
    },
  },
];

export default function Projects() {
  return (
    <div className='py-5 sm:py-6'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
            Projecten
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Een greep uit de projecten die we hebben gerealiseerd of aan hebben
            bijgedragen.
          </p>
        </div>
        <div className='mx-auto mt-4 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageUrl}
                alt=''
                className='absolute inset-0 -z-10 h-full w-full object-cover object-left-top rounded-2xl'
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

              <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                <div className='-ml-4 flex items-center gap-x-4'>
                  <svg
                    viewBox='0 0 2 2'
                    className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50'
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className='flex gap-x-2.5'>
                    {project.author?.imageUrl && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.author.imageUrl}
                          alt=''
                          className='h-6 w-6 flex-none rounded-full bg-white/10'
                        />
                        {project.author.name}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                <a href={project.href} target='_blank'>
                  <span className='absolute inset-0' />
                  {project.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
