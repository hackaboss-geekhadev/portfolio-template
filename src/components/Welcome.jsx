import P from "@/components/P";
import LinkCustom from "@/components/LinkCustom";
import { PERSON } from "@/constants";

const Welcome = () => {
    return (
        <section className="text-left py-12 flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-gray-800">{PERSON.name}</h2>
            <h1 className="text-2xl font-bold text-left text-gray-800">Full Stack & Mobile Dev, I ❤️ Javascript | REACT / Node.js / PHP</h1>
            <P>
                +8 años de experiencia en aplicaciones web (PHP, Laravel, Codeigniter) y me encanta Javascript (React, React Native, NodeJS), he desarrollado aplicaciones móviles con Android, React Native y PWA. Me encanta diseñar soluciones desde el papel y lápiz hasta las bases de datos y siempre busco nuevos retos.
            </P>
            <div className="flex gap-2">
                <LinkCustom color={'bg-blue-400'} href={'#'}>Descargar CV</LinkCustom>
                <LinkCustom color={'bg-green-400'} href={'https://www.linkedin.com/in/geekhadev'}>Linkedin</LinkCustom>
                <LinkCustom color={'bg-blue-400'} href={'https://github.com/geekhadev'}>GitHub</LinkCustom>
                <LinkCustom color={'bg-blue-400'} href={'#'}>Facebook</LinkCustom>
                <LinkCustom color={'bg-blue-800'} href={'#'}>Twitter (X)</LinkCustom>
                <LinkCustom color={'bg-red-400'} href={'#'}>YouTube</LinkCustom>
                <LinkCustom color={'bg-purple-400'} href={'#'}>Instagram</LinkCustom>
            </div>
        </section>
    );
}

export default Welcome;
