export function Header() {
    return (
        <header className="pt-10 px-36 text-gray-950">
            <div className="flex flex-row justify-between">
                <h1 className="text-4xl font-semibold">Hudson Diego</h1>
                <nav className="flex flex-row gap-6 text-2xl">
                    <a href="#formation">Formação</a>
                    <a href="#expe">Experiência</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}