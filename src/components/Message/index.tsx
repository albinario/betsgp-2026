type TMessage = {
	content: string
	label: string
}

export function Message({ content, label }: TMessage) {
	return (
		<main>
			<h1>{label}</h1>
			<p>{content}</p>
		</main>
	)
}
