import Header from '@dojo/widgets/header';
import { create, tsx } from '@dojo/framework/core/vdom';
import Example from '../../Example';
import Button from '@dojo/widgets/button';

const factory = create();

export default factory(function Basic() {
	return (
		<Example>
			<Header>
				{{
					title: 'My App',
					actions: [
						<Button type="link" to="#foo">
							Foo
						</Button>,
						<Button type="link" to="#bar">
							Bar
						</Button>,
						<Button type="link" to="#baz">
							Baz
						</Button>
					]
				}}
			</Header>
		</Example>
	);
});
