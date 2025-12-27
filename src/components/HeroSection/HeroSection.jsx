import Linux from '../../assets/Linux'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className='container mx-auto'>  
      <div className='relative flex flex-col items-center justify-center gap-6 text-[8vh] font-bold leading-[9vh] py-28 '>
        <div className='text-center z-9'>
          <h1>The open source</h1>
          <h1>AI code editor</h1>
        </div>
        <div className='w-[38%] bg-[#1c2026] flex flex-col gap-2 text-center text-sm font-normal z-9 px-4 py-4 rounded-lg'>
          <div className='flex flex-row gap-4 items-center justify-center font-medium'>
            <button className='w-[28vh] h-[5vh] text-[.8vw] bg-white rounded-lg flex flex-row items-center justify-center gap-2 text-black'>
              <Linux />
              Download for Linux (.deb)
            </button>
            <button className='w-[28vh] h-[5vh] text-[.8vw] bg-white rounded-lg flex flex-row items-center justify-center gap-2 text-black'>
              <Linux />
              Download for Linux (.rpm)
            </button>
          </div>
          <p className='mt-2 text-[.72vw] mb-2 font-medium'><u>Web</u>, <u>Insiders edition,</u> or <u>other platforms</u></p>
          <p className='text-[.63vw] text-gray-200'>By using VS Code, you agree to its <u>license</u> and <u>privacy statement</u></p>
        </div>
        <div className='z-9'>
          <img src='./heroImage.png' width={1220} height={228} />
        </div>
      </div>
      {/* binary grid */}
      <div className={styles.binaryGrid} aria-hidden="true">  </div>
    </section>
  )
}

export default HeroSection
