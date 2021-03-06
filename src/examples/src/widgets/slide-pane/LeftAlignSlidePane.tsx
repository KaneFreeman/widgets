import { create, tsx } from '@dojo/framework/core/vdom';
import SlidePane from '@dojo/widgets/slide-pane';
import icache from '@dojo/framework/core/middleware/icache';
import { DEMO_TEXT } from './common';
import Example from '../../Example';

const factory = create({ icache });

export default factory(function LeftAlignSlidePane({ middleware: { icache } }) {
	return (
		<Example>
			<SlidePane
				open={icache.getOrSet('open', true)}
				underlay={false}
				align="left"
				onRequestClose={() => {
					console.log('close');
					icache.set('open', false);
				}}
			>
				{{ content: DEMO_TEXT, title: 'Left Aligned SlidePane' }}
			</SlidePane>
		</Example>
	);
});
