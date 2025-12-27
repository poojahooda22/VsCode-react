import React from 'react'

const AgentMode = () => {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center mt-20 mb-20'>
        <div className='w-[80%] flex flex-row items-center gap-6'>
            <div className='flex flex-col gap-2 mr-4 w-[40%]'>
                <h2 className='text-[1.4vw] font-medium'>Agent mode</h2>
                <p className='text-[#9fb1d1] text-[.85vw] leading-[1.3vw] font-medium'>Tackle complex, multi-step tasks. Agent mode reads your codebase, suggests edits across files, runs terminal commands, and responds to compile or test failures — all in a loop until the job is done. Further refine agent mode to fit your team's workflows with VS Code extensions and Model Context Protocol (MCP) servers.</p>
                <a className='font-medium text-[.84vw] underline text-[#4daafc]'>Build with agent mode</a>
            </div>
            <div>
                <img src="/agent1.png" alt="Agent Mode Icon" width={1090} height={300}/>
            </div>
        </div>
        <div className='w-[80%] flex flex-row items-center gap-6 mt-20'>
            <div className='flex flex-col gap-2 mr-4 w-[40%]'>
                <h2 className='text-[1.4vw] font-medium'>Next edit suggestions</h2>
                <p className='text-[#9fb1d1] text-[.85vw] leading-[1.3vw] font-medium'>VS Code predicts your next move as you code. Use the Tab key to accept AI-powered suggestions right in your editor. It intelligently recommends what to change — and where — based on the edits you're already making.</p>
                <a className='font-medium text-[.84vw] underline text-[#4daafc]'>Code with AI-powered suggestions</a>
            </div>
            <div>
                <img src="/nextEdit.png" alt="Agent Mode Icon" width={1090} height={300}/>
            </div>
        </div>
    </section>
  )
}

export default AgentMode
