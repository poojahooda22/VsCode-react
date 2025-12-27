

const CodewithFeatures = () => {

    const data = [
        {
            title: "Integrated terminal",
            desc: "Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor.",
            imgUrl: "/codicon-terminal.svg",
            link: 'https://code.visualstudio.com/docs/terminal/basics'
        }
    ]
  return (
    <section className='container mx-auto flex flex-col items-center justify-center mt-24 mb-20'>
      <div className='w-[80%] flex flex-col '>
        <div>
            <h2>Code with rich features</h2>
            <p>There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.</p>
        </div>

        <div>
            {data.map((item, index) => {
                return (
                    <a key={index} href={item.link}>
                        <div>
                            <img src={item.imgUrl} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </a>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default CodewithFeatures
