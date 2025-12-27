import React from 'react'

const CodeAnywhere = () => {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center mt-24 mb-20'>
        <div className='w-[80%] flex flex-row items-center gap-6'>
            <div className='flex flex-col gap-8 mr-4 w-[40%]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[1.4vw] font-medium'>Fully customizable</h2>
                    <p className='text-[#9fb1d1] text-[.85vw] leading-[1.3vw] font-medium'>Customize your VS Code UI and layout so that it fits your coding style.</p>
                </div>            
                <a className='font-medium text-[.84vw] text-[#9fb1d1]'><u className='text-[#4daafc]'>Color themes</u> let you modify the colors in VS Code's user interface to suit your preferences and work environment.</a>
                <a className='font-medium text-[.84vw] text-[#9fb1d1]'><u className='text-[#4daafc]'>Settings Sync</u> enables you to share your user settings across your VS Code instances with the Settings Sync feature.</a>
                <a className='font-medium text-[.84vw] text-[#9fb1d1]'><u className='text-[#4daafc]'>Profiles</u> let you create sets of customizations and quickly switch between them or share them with others.</a>
            </div>
            <div>
                <img src="/fully.png" alt="Agent Mode Icon" width={1090} height={300}/>
            </div>
        </div>
        <div className='w-[80%] flex flex-row items-center gap-6 mt-20'>
            <div className='flex flex-col gap-8 mr-4 w-[40%]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[1.4vw] font-medium'>Code anywhere</h2>
                    <p className='text-[#9fb1d1] text-[.85vw] leading-[1.3vw] font-medium'>Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).</p>
                </div>
                <a className='font-medium text-[.84vw] text-[#9fb1d1]'><u className='text-[#4daafc]'>Built-in Source Control</u> empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.</a>
                <a className='font-medium text-[.84vw] text-[#9fb1d1]'><u className='text-[#4daafc]'>GitHub Codespaces</u> provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.</a>
            </div>
            <div>
                <img src="/codeAnywhere.png" alt="Agent Mode Icon" width={1090} height={300}/>
            </div>
        </div>
    </section>
  )
}

export default CodeAnywhere
