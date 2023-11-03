export default function Services() {
  const services = [
    {
      title: 'AI Business Solutions',
      content:
        'Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.',
      tags: ['Web Design', 'Web Development', 'UX/UI Design', 'Mobile Development', 'Branding'],
    },
    {
      title: 'Mobile Development',
      content:
        'Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.',
      tags: ['Web Design', 'Web Development', 'UX/UI Design', 'Mobile Development', 'Branding'],
    },
    {
      title: 'Web Development',
      content:
        'Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.',
      tags: ['Web Design', 'Web Development', 'UX/UI Design', 'Mobile Development', 'Branding'],
    },
  ]
  return (
    <section id="services" className='services home-why'>
      <div className='services--content'>
        <p className='mb-3'>
          <strong>01 - Services</strong>
        </p>
        <div>
          <h2 className='h1 max-w-[24em]'>
            What I Do
            {/* As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native
            apps. */}
          </h2>
        </div>
      </div>
      {/* <div className='hidden services--grid grid grid-cols-3 py-32 gap-x-1.5'>
        {services.map((service, idx) => (
          <div
            key={idx}
            className='service bg-white p-8 rounded-md text-black flex justify-between flex-col'
            style={{ backgroundImage: 'url(https://picsum.photos/1920/1080.webp)' }}
          >
            <h3 className='h1 mb-[2em]'>{service.title}</h3>
            <p className='pb-4 mb-4 border-b-black border-b-2 border-solid'>{service.content}</p>
            <ul className='flex gap-1 flex-wrap'>
              {service.tags.map((tag, _) => (
                <li className='rounded-full px-3 text-sm py-1 bg-[hsla(0,0%,100%,.4)]'>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <div className='why-card-wrapper'>
        <div className='why-card-container overflow-desktop section-full main'>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>1</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-flutter'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-audio-video-flutter-a7beaa96d0542eaef2b7eb5510a8f594f0fdcc76c40e7861b8f07ae2350869c9.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>AI Integrations</h3>
              <div className='card-description'>
                <p className='card-text'>
                  Whether you’re building for iOS, Android, or Flutter, you can find the largest and highest-quality
                  video courses on mobile development right here. We have the largest collection of iOS, Android, Swift,
                  Kotlin, Flutter and Dart video courses anywhere!
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>2</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-android'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-how-tos-android-55975187ac5a00b562ac524384d38defcd70c18864bc981c935584f2ff6a5767.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>Web Development</h3>
              <div className='card-description'>
                <p className='card-text'>
                  With books covering everything from beginning mobile development, to advanced topics like design
                  patterns, architecture, reactive programming and UI design, we’re constantly adding new and highly
                  useful books to your bookshelf.
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>3</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-gametech'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/media-icons/media-path-gametech-86ec4b05f4af3300a943c7d5f2e33f831e78a4642a7bcedb00d95e13cd904663.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>Mobile Development</h3>
              <div className='card-description'>
                <p className='card-text'>
                  From UI design, to data and networking, to IDEs and tools, to software engineering practices, curated
                  learning paths help you stay focused on core competencies and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>4</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-ios'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-other-core-apis-ios-a5b673db79692944545c6276b8d1415c633e5f59812ec6a2695bb77c52faf9cc.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>New content every week</h3>
              <div className='card-description'>
                <p className='card-text'>
                  We’re constantly releasing new courses, books, and articles on the best frameworks and technologies
                  out there. We’re also constantly updating our older content, so you won’t fall behind.
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>5</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-multi-domain'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-concurrency-multi-domain-346fd66182d81f184c651f4f1b12cbad6b85277bceb1a507a96f6753f7a57e8e.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>Exclusive mobile apps</h3>
              <div className='card-description'>
                <p className='card-text'>
                  Want to take your learning on the go? Our official iOS and Android apps let you stream and download
                  our video courses so you can stay up to date, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-topleft'>
              <span className='badge'>
                <span>6</span>
              </span>
            </div>
            <div className='card-topright'>
              <div className='card-artwork card-artwork-professional-growth'>
                <img
                  alt=''
                  src='https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-professional-growth-4847740e60c02f00f0403efb97248503e6e556cabaed0fde0bf88dedaf4ee779.svg'
                />
              </div>
            </div>
            <div className='card-bottom'>
              <h3 className='card-title'>Made by professionals like you</h3>
              <div className='card-description'>
                <p className='card-text'>
                  All of our content is created by a community of expert developers from all around the world. They’ve
                  taken their battle-tested and hard-won advice from their careers, to help you with yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
