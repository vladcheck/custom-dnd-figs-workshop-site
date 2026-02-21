import Main from "../components/Main";
import { useRef } from "react";
import Fieldset from "../components/Fieldset";
import LabelInputContainer from "../components/LabelInputContainer";
import { INPUT_CLASSES } from "./sections/PlaceOrderSection";

export default function ContactsPage() {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<Main>
			<ul className='flex flex-col gap-2 justify-center'>
				<li className='w-full justify-between text-2xl flex gap-8'>
					<span>Телефон техподдержки</span>
					<span>+7 919-191-15-13</span>
				</li>
				<li className='w-full justify-between text-2xl flex gap-8'>
					<span>VK</span>
					<a
						href='https://vk.ru'
						target='_blank'
						rel='noopener noreferer'
					>
						тык
					</a>
				</li>
				<li className='w-full justify-between text-2xl flex gap-8'>
					<span>Телеграм</span>
					<a
						className='text-2xl'
						href='https://web.telegram.org'
						target='_blank'
						rel='noopener noreferer'
					>
						тык
					</a>
				</li>
			</ul>
			<form
				ref={formRef}
				className='flex flex-col gap-4 justify-center items-center'
			>
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
				<LabelInputContainer htmlFor='comment' label='Комментарий'>
					<textarea
						className='border border-white w-full'
						minLength={10}
						maxLength={2000}
						rows={6}
						cols={64}
						name='comment'
						id='comment'
						required
					></textarea>
				</LabelInputContainer>
				<div className='flex gap-4 relative'>
					<input
						type='checkbox'
						className='aspect-square w-6'
						name='data-processing-agreement'
						id='data-processing-agreement'
						required
					/>
					<label htmlFor='data-processing-agreement'>
						Я согласен на обработку персональных данных
					</label>
				</div>
				<button
					className='bg-orange-500 px-2 py-1 w-max'
					type='submit'
					onClick={(e) => {
						if (formRef.current?.checkValidity()) {
							e.preventDefault();
							alert("Успех");
						}
					}}
				>
					Отправить
				</button>
			</form>
		</Main>
	);
}

