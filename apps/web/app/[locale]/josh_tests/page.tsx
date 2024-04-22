'use client';

import { clsxm } from '@app/utils';
import { AddIcon } from 'assets/svg';
import { withAuthentication } from 'lib/app/authenticator';
import { useTranslations } from 'next-intl';

const JoshTests = () => {
	const t = useTranslations();
	return (
		<div className={clsxm('flex')}>
			<h1 className={clsxm('font-bold text-2xl text-center')}>{t('JOSHTEST')}</h1>
			{/* <Text className={clsxm('font-bold text-5xl underline text-center')}>
				<p>Hello world</p>
			</Text> */}
			<button className="p-2 rounded-full border-2 border-[#0000001a] dark:border-white">
				<AddIcon width={24} height={24} className={'dark:stroke-white'} />
			</button>
		</div>
	);
};
export default withAuthentication(JoshTests, { displayName: 'JoshTests' });
