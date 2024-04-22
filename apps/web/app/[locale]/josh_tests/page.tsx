// import { Text } from 'lib/components';

import { clsxm } from '@app/utils';
import { useTranslations } from 'next-intl';

const JoshTests = () => {
	const t = useTranslations();
	return (
		<div>
			<h1 className={clsxm('font-bold text-5xl underline text-center')}>{t('JOSHTEST')}</h1>
		</div>
	);
};
export default JoshTests;
