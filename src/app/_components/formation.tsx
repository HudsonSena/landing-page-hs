export function Formation() {
    const skills = ['CSS3', 'HTML5', 'JavaScript', 'Tailwind']
    const skills2 = ["Node.js", 'React.js', 'Next.js', 'SQL']
    return (
        <div id="formation" className="flex flex-row py-20 px-36 bg-gray-950 text-gray-300">
            <div className="w-[40%] flex flex-col gap-24">
                <h1 className="text-9xl w-72 whitespace-break-spaces font-bold">FOR MA ÇÃO</h1>
                <div>
                    <h2 className="mb-3 text-gray-400">Tecnologias Dev</h2>
                    <div className="flex flex-row gap-5">
                        <ul>
                            {
                                skills.map(item => <li key={item}> {item}</li>)
                            }
                        </ul>
                        <ul>
                            {
                                skills2.map(item => <li key={item}> {item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[60%]">
                <p>
                    Minha formação mais recente é de <strong>Bacharelado em Engenharia de Software</strong>, que atualmente estou cursando na Universidade Estácio.
                </p>
                <div>
                    <div>
                        <h3>Bacharel</h3>
                        <h2>Ciência e Tecnologia</h2>
                        <h3>UFERSA</h3>
                    </div>
                    <div>
                        <h3>Bacharel</h3>
                        <h2>Engenharia Civil</h2>
                        <h3>UFERSA</h3>
                    </div>
                    <div>
                        <h3>Pós Graduação</h3>
                        <h2>Engenharia de Instalações Prediais</h2>
                        <h3>UNP</h3>
                    </div>
                </div>
                <div>
                    <h2>Curso intensivos</h2>
                    <ul>
                        <li>UX/UI Design e Web Design - Origamid</li>
                        <li>Dev FrontEnd - Rocketseat e Origamid</li>
                        <li>Dev Backend e Full Stack - Rocketseat</li>
                    </ul>
                </div>
                <div>
                    <h2>Idiomas</h2>
                    <ul>
                        <li>Português Nativo</li>
                        <li>Inglês Intermediário</li>
                        <li>Espanhol Intermediário</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}