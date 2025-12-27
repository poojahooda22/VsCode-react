import clsx from 'clsx'
import styles from './BannerSection.module.css'

const BannerSection = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-[-6vh]'>
      <img src='/tabs.png' width={1290} height={300}/>
      <div className={clsx(styles.copilotBanner,'flex flex-row items-baseline justify-between w-[80%] h-[16vh] rounded-lg mt-6 px-12 py-8')}>
          <h3 className='text-[1.5vw] font-bold'>Use AI features in VS Code for free</h3>
          <div className='flex flex-col items-start gap-4 font-medium'>
              <h5>No trial. No credit card required. Just your GitHub account.</h5>
              <button className='border border-gray-500 px-4 py-1 bg-gray-700 rounded-md hover:bg-white/10'>
                Try free
              </button>
          </div>
      </div>
    </div>
  )
}

export default BannerSection
