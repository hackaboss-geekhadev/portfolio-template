import { EXPERIENCES } from '@/constants';
import P from '@/components/P';
import LinkCustom from '@/components/LinkCustom';
import Title from '@/components/Title';

const Experiences = () => {
    return (
        <section className='flex flex-col gap-3'>
            <Title title='Experiencia' />
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="flex gap-3">
                    <div>
                        <img className='rounded-lg w-full' src={experience.image} alt={experience.title} />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <h3 className='text-2xl font-bold text-left text-gray-800'>{experience.title}</h3>
                        <P>{experience.description}</P>
                        <LinkCustom color={'bg-blue-400'} href="#">Ver proyecto | Demo | Despligue</LinkCustom>
                        <LinkCustom color={'bg-blue-400'} href="#">GitHub</LinkCustom>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Experiences;
