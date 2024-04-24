'use client';

import { clsxm } from '@app/utils';
import Input from '@components/ui/inputs/input';
import { InputField } from 'lib/components';
import { useTranslations } from 'next-intl';
import useEmail from './useEmail';
import usePassword from './usePassword';

const JoshTests = () => {
	const t = useTranslations();
	const { email, editEmail } = useEmail();
	const { password, editPassword } = usePassword();
	// const {}
	return (
		<div className={clsxm('flex flex-col gap-3 p-3 max-w-[500px]')}>
			<h1 className={clsxm('font-bold text-2xl text-center')}>{t('JOSHTEST')}</h1>
			<Input
				name="email"
				label="Enter your email : "
				type="text"
				placeholder="jjj.gmail.com"
				required
				value={email}
				onChange={editEmail}
			/>
			<Input
				name="email"
				label="Enter your password : "
				type="password"
				placeholder="jjj.gmail.com"
				required
				value={password}
				onChange={editPassword}
			/>
			<p>Enter your email : </p>
			<InputField placeholder="Hello world" type="email" />
		</div>
	);
};
export default JoshTests;
