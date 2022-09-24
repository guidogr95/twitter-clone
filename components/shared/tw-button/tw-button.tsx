type Props = {
	children?: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	type?: 'button' | 'submit'
	disabled?: boolean,
	style?: 'normal' | 'outline' | 'dark'
	classNames?: string
	loading?: boolean
}

export default function TwButton({
	children,
	onClick,
	type = 'submit',
	disabled = false,
	style = 'normal',
	classNames,
	loading
}: Props) {
	return (
		
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`rounded-full flex justify-center ${style === 'normal' ? 'text-white bg-twitter' : style === 'outline' ? 'bg-transparent text-black border-2 border-black' : 'bg-black text-white'} px-5 py-2 font-bold disabled:opacity-40 ${classNames ? classNames : ''}`}>
			{loading ? 'loading...' : children}
		</button>
	)
}
