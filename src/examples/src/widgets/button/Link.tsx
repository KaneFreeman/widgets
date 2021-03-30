import { create, tsx } from '@dojo/framework/core/vdom';
import Button from '@dojo/widgets/button';
import Example from '../../Example';

const factory = create();

export default factory(function Link() {
	return (
		<Example>
			<Button type="link" to="">
				Link Button
			</Button>
		</Example>
	);
});
