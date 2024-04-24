import { ChangeEvent, useState } from 'react';

export default function usePassword() {
	const [password, setPassword] = useState<string>('');

	const editPassword: (e: ChangeEvent<HTMLInputElement>) => void = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return { password, editPassword };
}
