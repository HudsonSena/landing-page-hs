export function Formation() {
  const skills = ["CSS3", "HTML5", "JavaScript", "Tailwind"];
  const skills2 = ["Node.js", "React.js", "Next.js", "SQL"];
  const formations = [
    {
      level: "Bacharel",
      title: "Ciência e Tecnologia",
      university: "UFERSA",
    },
    {
      level: "Bacharel",
      title: "Engenharia Civil",
      university: "UFERSA",
    },
    {
      level: "Especialização",
      title: "Engenharia de Instalações Prediais",
      university: "UNP",
    },
    {
      level: "Bacharelado",
      title: "Engenharia de Software",
      university: "Estácio",
    },
  ];
  return (
    <div
      id="formation"
      className="p-5 flex flex-col gap-5 lg:flex-row lg:py-20 xl:px-36 bg-gray-900 text-gray-200 text-2xl max-sm:text-sm antialiased"
    >
      <div className="lg:w-[36%] flex flex-col gap-5">
        <h1 className="text-4xl lg:text-9xl w-72 whitespace-break-spaces font-bold lg:mb-14 text-gray-100 lg:hidden max-sm:text-xl">
          FORMAÇÃO
        </h1>
        <h1 className="hidden lg:block text-9xl w-72 whitespace-break-spaces font-bold mb-14 text-gray-100">
          <span className="text-primary">F</span>OR MA ÇÃO
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2917 29.875L20 25.5417L25.7083 29.875L23.4167 22.6667L28.6667 19.25H22.375L20 12.0417L17.625 19.25H11.3333L16.5833 22.6667L14.2917 29.875ZM20 28.8334L12.7917 34.3334C12.5417 34.5278 12.2917 34.6111 12.0417 34.5834C11.7917 34.5556 11.5556 34.4722 11.3333 34.3334C11.1111 34.1945 10.9514 34.007 10.8542 33.7709C10.7569 33.5347 10.75 33.2639 10.8333 32.9584L13.5833 24L6.5 18.9167C6.25 18.75 6.09027 18.5347 6.02083 18.2709C5.95138 18.007 5.95833 17.7639 6.04166 17.5417C6.125 17.3195 6.26388 17.1181 6.45833 16.9375C6.65277 16.757 6.90277 16.6667 7.20833 16.6667H16L18.7917 7.33335C18.875 7.0278 19.0347 6.79863 19.2708 6.64585C19.5069 6.49308 19.75 6.41669 20 6.41669C20.25 6.41669 20.4931 6.49308 20.7292 6.64585C20.9653 6.79863 21.125 7.0278 21.2083 7.33335L24 16.6667H32.7917C33.0972 16.6667 33.3472 16.757 33.5417 16.9375C33.7361 17.1181 33.875 17.3195 33.9583 17.5417C34.0417 17.7639 34.0486 18.007 33.9792 18.2709C33.9097 18.5347 33.75 18.75 33.5 18.9167L26.4167 24L29.1667 32.9584C29.25 33.2639 29.2431 33.5347 29.1458 33.7709C29.0486 34.007 28.8889 34.1945 28.6667 34.3334C28.4444 34.4722 28.2083 34.5556 27.9583 34.5834C27.7083 34.6111 27.4583 34.5278 27.2083 34.3334L20 28.8334Z"
                fill="#E17E0D"
              />
            </svg>
            <h2 className="text-gray-500 text-2xl max-sm:text-xl">Tecnologias Dev</h2>
          </div>

          <div className="flex flex-row gap-5">
            <ul className="max-sm:flex-row max-sm:justify-between">
              {skills.map((item) => (
                <li key={item}> {item}</li>
              ))}
            </ul>
            <ul className="max-sm:flex-row max-sm:justify-between">
              {skills2.map((item) => (
                <li key={item}> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-[64%] flex flex-col gap-6">
        <p className="text-3xl text-gray-300 max-sm:text-sm">
          Minha formação mais recente é de{" "}
          <strong className="text-white max-sm:font-normal">
            Bacharelado em Engenharia de Software
          </strong>
          , que atualmente estou cursando na Universidade Estácio.
        </p>
        <div className="flex flex-col lg:flex-row gap-2">
          {formations.map((item) => (
            <div
              key={item.title}
              className="lg:w-52 flex flex-col rounded-sm bg-gray-950 text-gray-200 p-3 justify-between text-xl relative"
            >
              <span className="text-gray-400">{item.level}</span>
              <p className="font-semibold">{item.title}</p>
              <span className="text-gray-400">{item.university}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5417 22.5H22.4167C22.7708 22.5 23.0677 22.3795 23.3073 22.1385C23.5469 21.8975 23.6667 21.5989 23.6667 21.2427C23.6667 20.8864 23.5469 20.5903 23.3073 20.3541C23.0677 20.118 22.7708 20 22.4167 20H15.5417C15.1875 20 14.8906 20.1205 14.651 20.3614C14.4115 20.6024 14.2917 20.901 14.2917 21.2573C14.2917 21.6135 14.4115 21.9097 14.651 22.1458C14.8906 22.3819 15.1875 22.5 15.5417 22.5ZM15.5417 18.75H29.5C29.8542 18.75 30.151 18.6295 30.3906 18.3885C30.6302 18.1475 30.75 17.8489 30.75 17.4927C30.75 17.1364 30.6302 16.8403 30.3906 16.6041C30.151 16.368 29.8542 16.25 29.5 16.25H15.5417C15.1875 16.25 14.8906 16.3705 14.651 16.6114C14.4115 16.8524 14.2917 17.151 14.2917 17.5073C14.2917 17.8635 14.4115 18.1597 14.651 18.3958C14.8906 18.6319 15.1875 18.75 15.5417 18.75ZM15.5417 15H29.5C29.8542 15 30.151 14.8795 30.3906 14.6385C30.6302 14.3975 30.75 14.0989 30.75 13.7427C30.75 13.3864 30.6302 13.0903 30.3906 12.8541C30.151 12.618 29.8542 12.5 29.5 12.5H15.5417C15.1875 12.5 14.8906 12.6205 14.651 12.8614C14.4115 13.1024 14.2917 13.401 14.2917 13.7573C14.2917 14.1135 14.4115 14.4097 14.651 14.6458C14.8906 14.8819 15.1875 15 15.5417 15ZM10.8333 31.6666C10.1667 31.6666 9.58333 31.4166 9.08333 30.9166C8.58333 30.4166 8.33333 29.8333 8.33333 29.1666V5.83331C8.33333 5.16665 8.58333 4.58331 9.08333 4.08331C9.58333 3.58331 10.1667 3.33331 10.8333 3.33331H34.1667C34.8333 3.33331 35.4167 3.58331 35.9167 4.08331C36.4167 4.58331 36.6667 5.16665 36.6667 5.83331V29.1666C36.6667 29.8333 36.4167 30.4166 35.9167 30.9166C35.4167 31.4166 34.8333 31.6666 34.1667 31.6666H10.8333ZM10.8333 29.1666H34.1667V5.83331H10.8333V29.1666ZM5.83333 36.6666C5.16666 36.6666 4.58333 36.4166 4.08333 35.9166C3.58333 35.4166 3.33333 34.8333 3.33333 34.1666V9.58331C3.33333 9.22915 3.45381 8.93227 3.69479 8.69269C3.93579 8.4531 4.2344 8.33331 4.59062 8.33331C4.94687 8.33331 5.24305 8.4531 5.47916 8.69269C5.71527 8.93227 5.83333 9.22915 5.83333 9.58331V34.1666H30.4167C30.7708 34.1666 31.0677 34.2871 31.3073 34.5281C31.5469 34.7691 31.6667 35.0677 31.6667 35.4239C31.6667 35.7802 31.5469 36.0764 31.3073 36.3125C31.0677 36.5486 30.7708 36.6666 30.4167 36.6666H5.83333Z"
                fill="#E17E0D"
              />
            </svg>
            <h2 className="text-gray-500 text-2xl max-sm:text-xl">Curso intensivos</h2>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between">
              <p>UX/UI Design e Web Design - Origamid</p>
              <p>... 60hs</p>
            </li>
            <li className="flex justify-between">
              <p>Dev FrontEnd - Rocketseat e Origamid</p>
              <p>... 60hs</p>
            </li>
            <li className="flex justify-between">
              <p>Dev Backend e Full Stack - Rocketseat</p>
              <p>... 60hs</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1667 31.4166L23.5833 35.625C23.4445 35.9305 23.2431 36.1805 22.9792 36.375C22.7153 36.5694 22.4167 36.6666 22.0833 36.6666C21.5278 36.6666 21.0972 36.4375 20.7917 35.9791C20.4861 35.5208 20.4306 35.0278 20.625 34.5L26.9583 17.7083C27.0972 17.4028 27.2917 17.1528 27.5417 16.9583C27.7917 16.7639 28.0833 16.6666 28.4167 16.6666H29.6667C30 16.6666 30.2917 16.7569 30.5417 16.9375C30.7917 17.118 30.9861 17.3611 31.125 17.6666L37.625 34.4583C37.8472 35.0139 37.7917 35.5208 37.4583 35.9791C37.125 36.4375 36.6806 36.6666 36.125 36.6666C35.7361 36.6666 35.4028 36.5555 35.125 36.3333C34.8472 36.1111 34.6389 35.8194 34.5 35.4583L33.1667 31.4166H25.1667ZM26.0833 28.5H32L29.0833 20.4166H29L26.0833 28.5ZM15 23.3333L7.79167 30.5416C7.48612 30.8472 7.11112 30.993 6.66667 30.9791C6.22223 30.9653 5.84723 30.8055 5.54167 30.5C5.23612 30.1944 5.08334 29.8125 5.08334 29.3541C5.08334 28.8958 5.23612 28.5139 5.54167 28.2083L12.875 20.875C11.8194 19.6528 10.8819 18.4236 10.0625 17.1875C9.24306 15.9514 8.52778 14.6666 7.91667 13.3333H11.5417C12.0139 14.25 12.5347 15.118 13.1042 15.9375C13.6736 16.7569 14.3194 17.5972 15.0417 18.4583C16.2917 17.1528 17.3333 15.7986 18.1667 14.3958C19 12.993 19.7083 11.5278 20.2917 9.99998H3.33334C2.86112 9.99998 2.46528 9.84026 2.14584 9.52081C1.82639 9.20137 1.66667 8.80553 1.66667 8.33331C1.66667 7.86109 1.82639 7.46526 2.14584 7.14581C2.46528 6.82637 2.86112 6.66665 3.33334 6.66665H13.3333V4.99998C13.3333 4.52776 13.4931 4.13192 13.8125 3.81248C14.1319 3.49304 14.5278 3.33331 15 3.33331C15.4722 3.33331 15.8681 3.49304 16.1875 3.81248C16.507 4.13192 16.6667 4.52776 16.6667 4.99998V6.66665H26.6667C27.1389 6.66665 27.5347 6.82637 27.8542 7.14581C28.1736 7.46526 28.3333 7.86109 28.3333 8.33331C28.3333 8.80553 28.1736 9.20137 27.8542 9.52081C27.5347 9.84026 27.1389 9.99998 26.6667 9.99998H23.625C23.0139 11.9166 22.2014 13.7986 21.1875 15.6458C20.1736 17.493 18.9306 19.25 17.4583 20.9166L21.5417 25.0416L20.2917 28.4166L15 23.3333Z"
                fill="#E17E0D"
              />
            </svg>
            <h2 className="text-gray-500 text-2xl max-sm:text-xl">Idiomas</h2>
          </div>
          <ul className="flex flex-col gap-2">
            <li>Português Nativo</li>
            <li>Inglês Intermediário</li>
            <li>Espanhol Intermediário</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
