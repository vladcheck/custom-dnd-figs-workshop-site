import { H2, H3 } from "../components/headers";
import Section from "../components/Section";

type TeamMember = { key: string; name: string; role: string; src: string };

const team: TeamMember[] = [
	{
		key: "misha",
		name: "Миша",
		role: "Контроль за 3D-печатью",
		src: "/public/images/team/1.png",
	},
	{
		key: "vova",
		name: "Вова",
		role: "Мастер мастерской",
		src: "/public/images/team/2.png",
	},
	{
		key: "nastya",
		name: "Настя",
		role: "Консультант",
		src: "/public/images/team/3.png",
	},
	{
		key: "maxim",
		name: "Макс",
		role: "Покраска и лакировка",
		src: "/public/images/team/4.png",
	},
	{
		key: "danya",
		name: "Даня",
		role: "Упаковка и сортировка",
		src: "/public/images/team/5.png",
	},
];

export default function TeamSection({ id }: { id: string }) {
	return (
		<Section id={id}>
			<H2>Команда</H2>
			<div className='flex gap-6'>
				{Object.values(team).map((member) => (
					<TeamMemberCard {...member} key={member.key} />
				))}
			</div>
		</Section>
	);
}

function TeamMemberCard({
	name,
	role,
	src,
}: {
	name: string;
	role: string;
	src: string;
}) {
	return (
		<div className='flex flex-col gap-2 member-card'>
			<img src={src} alt={name} />
			<H3 className='text-4xl font-bold'>{name}</H3>
			<span className='role text-gray-400'>{role}</span>
		</div>
	);
}

