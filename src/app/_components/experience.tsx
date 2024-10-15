export function Experience() {
    const projects = [
        {
            name: 'Rocket Movies',
            level: 'Desenvolvedor Junior',
            description: 'LProjeto para o curso da Rocketseat. Desafio para o desenvolvimento de um aplicativo de cadastro de Filmes com tags. Páginas com criação de usuários, preview e criação de sessões com descrição e avaliação.',
            created: 2022,
            tecnologies: ['CSS3', 'HTML', 'JavaScript', 'React']
        },
        {
            name: 'Rocket Notes',
            level: 'Desenvolvedor Junior',
            description: 'Projeto para o curso da Rocketseat. Atividade para o desenvolvimento de um aplicativo de notas, com tags e links. Basicamente com páginas de criação de usuários, preview e criação da notas.',
            created: 2023,
            tecnologies: ['CSS3', 'HTML', 'React', 'Node']
        },
        {
            name: 'Food Explorer',
            level: 'Desenvolvedor junior',
            description: 'Projeto para o curso da Rocketseat. Atividade para o desenvolvimento de um aplicativo de um restaurante, com pratos, descrição, valores e ingredientes. Basicamente com páginas de criação de usuários, pratos e com edição desses pratos.',
            created: 2024,
            tecnologies: ['CSS3', 'HTML', 'React', 'Node']
        }
    ]
    return (
        <div id="experience" className="flex flex-row py-20 px-36 bg-gray-100 text-gray-950">
            <div className="w-[36%] flex flex-col gap-24">
                <h1 className="text-9xl w-72 whitespace-break-spaces font-bold">EXPE RIÊN CIA</h1>
            </div>
            <div className="w-[64%] flex flex-col gap-5">
                <p className="text-3xl">
                    Desenvolvendo projetos com uso das tecnologias <strong>HTML5, CSS3, JavaScript, React.js e Node.js</strong>. E para meu portifólio o uso de UX/UI Design com Figma para as aplicações de amostra.
                </p>
                <ul className="flex flex-col gap-3">
                    {
                        projects.map(item => <li key={item.name} className="w-full border-b-2 p-2 border-gray-300 flex flex-row gap-2">
                            <p className="text-gray-500">{item.created}</p>
                            <div className="flex flex-col gap-0.5">
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-gray-500">{item.level}</span>
                                <p className="w-[400px]">{item.description}</p>
                            </div>
                            <div className="flex flex-col justify-between">
                                <span className="font-semibold">Tecnologias</span>
                                <div className="flex flex-row flex-wrap gap-2">
                                    {
                                        item.tecnologies.map(tec =>
                                            <span key={tec} className="p-2 rounded-sm bg-gray-200">{tec}</span>
                                        )
                                    }
                                </div>
                                <a href="#" target="_blank">Acesse aqui</a>
                            </div>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}