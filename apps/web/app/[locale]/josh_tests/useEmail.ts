import { ChangeEvent, useState } from 'react';

export default function useEmail(): {
	email: string;
	editEmail: (e: ChangeEvent<HTMLInputElement>) => void;
} {
	const [email, setEmail] = useState<string>('');

	const editEmail: (e: ChangeEvent<HTMLInputElement>) => void = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return { email, editEmail };
}
