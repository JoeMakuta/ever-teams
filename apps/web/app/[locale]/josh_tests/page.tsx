// import { Text } from 'lib/components';

import { clsxm } from '@app/utils';
import Meta from '@components/layout/Meta';
import { AddIcon } from 'assets/svg';
import { useTranslations } from 'next-intl';

const JoshTests = () => {
	const t = useTranslations();
	return (
		<div>
			<Meta title="string" keywords="string" description="string" />
			<h1 className={clsxm('font-bold text-5xl text-center')}>{t('JOSHTEST')}</h1>
			{/* <Text className={clsxm('font-bold text-5xl underline text-center')}>
				<p>Hello world</p>
			</Text> */}
			<button className="p-2 rounded-full border-2 border-[#0000001a] dark:border-white">
				<AddIcon width={24} height={24} className={'dark:stroke-white'} />
				{/* <AddIcon className="w-6 h-6 text-foreground" /> */}
			</button>
		</div>
	);
};
export default JoshTests;
