import React from 'react';
import CKEditor from 'ckeditor4-react';

const SingleCourseEditor = () => {
	return (
		<React.Fragment>
			<CKEditor
				data='<p>سلام</p>'
				config={{
					language: 'fa',
					height: 400,
					contentsLangDirection: 'rtl',
					toolbar: [
						[
							'Bold',
							'Italic',
							'Strike Through',
							'Cut',
							'Copy',
							'Paste',
							'Pasteasplaintext',
							'FormattingStyles',
							'Undo',
							'Redo',
							'NumberedList',
							'BulletedList',
							'Format',
							'Indent',
							'Blocks',
							'Align',
							'Bidi',
							'Paragraph',
							'Find',
							'Selection',
							'Spellchecker',
							'Editing',
						],
					],
				}}
			/>
			<div className='mt-3 text-left'>
				<button className='save-comment'>ثبت دیدگاه شما</button>
			</div>
		</React.Fragment>
	);
};

export default SingleCourseEditor;
