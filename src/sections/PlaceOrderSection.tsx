import { H2 } from "../components/headers";
import Section from "../components/Section";
import LabelInputContainer from "../components/LabelInputContainer";
import Fieldset from "../components/Fieldset";
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import clsx from "clsx";
import FileHoverInput from "../components/FileHoverInput";

type City = { label: string; name: string };

export async function loadCities(
	setCities: Dispatch<SetStateAction<any[]>>,
) {
	const file = await fetch("/public/russia-cities.json");
	const json = await file.json();
	setCities(json.sort((a: City, b: City) => a.label > b.label));
}

export const INPUT_CLASSES =
	"border border-white/50 px-2 h-8 max-w-[200px]";

export default function PlaceOrderSection({ id }: { id: string }) {
	const [cities, setCities] = useState<City[]>([]);
	const form = useRef<HTMLFormElement>(null);
	const modelFilesInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		loadCities(setCities);
	}, []);

	return (
		<Section id={id}>
			<H2>Оформи заказ</H2>
			<form
				className='flex flex-col gap-4 items-center max-w-[clamp(300px,60dvw,700px)]'
				action='.'
				method='post'
				ref={form}
			>
				<FileHoverInput ref={modelFilesInput} />
				<Fieldset legend='ФИО'>
					<LabelInputContainer htmlFor='name' label='Имя'>
						<input
							className={INPUT_CLASSES}
							type='text'
							min={2}
							pattern='[А-Я][а-я]{1,}'
							name='name'
							id='name'
							placeholder='Иван'
							required
						/>
					</LabelInputContainer>
					<LabelInputContainer htmlFor='surname' label='Фамилия'>
						<input
							className={INPUT_CLASSES}
							type='text'
							min={2}
							pattern='[А-Я][а-я]{1,}'
							name='surname'
							id='surname'
							placeholder='Иванович'
							required
						/>
					</LabelInputContainer>
					<LabelInputContainer htmlFor='third-name' label='Отчество'>
						<input
							className={INPUT_CLASSES}
							type='text'
							min={2}
							pattern='[А-Я][а-я]{1,}'
							name='third-name'
							id='third-name'
							placeholder='Иванов'
						/>
					</LabelInputContainer>
				</Fieldset>
				<Fieldset legend='Адрес'>
					<LabelInputContainer htmlFor='city' label='Город'>
						<select className={INPUT_CLASSES} name='city' id='city'>
							{cities.map((c) => (
								<option
									value={c.label}
									key={c.label}
									selected={c.label === "moscow"}
								>
									{c.name}
								</option>
							))}
						</select>
					</LabelInputContainer>
					<LabelInputContainer htmlFor='street' label='Улица'>
						<div className='flex gap-2 items-center'>
							<span>ул.</span>
							<input
								className={INPUT_CLASSES}
								type='text'
								min={2}
								pattern='^[А-Яа-яЁё\-]{2,}'
								placeholder='Домоскворечников'
								required
							/>
						</div>
					</LabelInputContainer>
					<LabelInputContainer htmlFor='house' label='Дом'>
						<input
							className={clsx(INPUT_CLASSES, "w-[100px]")}
							type='number'
							min={1}
							max={100000}
							step={1}
							name='house'
							id='house'
							placeholder='1'
						/>
					</LabelInputContainer>
					<LabelInputContainer htmlFor='block' label='Корпус'>
						<input
							className={clsx(INPUT_CLASSES, "w-[100px]")}
							type='number'
							min={1}
							max={1000}
							step={1}
							name='block'
							id='block'
							placeholder='1'
						/>
					</LabelInputContainer>
					<LabelInputContainer
						htmlFor='flat-number'
						label='Номер квартиры'
					>
						<input
							className={clsx(INPUT_CLASSES, "w-[100px]")}
							type='number'
							min={1}
							max={100000}
							step={1}
							name='flat-number'
							id='flat-number'
							placeholder='1'
						/>
					</LabelInputContainer>
				</Fieldset>
				<button
					onClick={(e) => {
						if (form.current!.validate()) {
							e.preventDefault();
							alert("Заказ успешно оформлен!");
						}
					}}
					className='w-max px-4 py-2 bg-orange-400 font-bold'
					type='submit'
				>
					Оформить заказ
				</button>
			</form>
		</Section>
	);
}

