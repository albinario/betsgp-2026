'use client'

import { Message } from '../Message'

import type { TErrorProps } from '@/types/error'

type TErrorFallback = TErrorProps & {
	label: string
	fetchFailed: string
}

export function ErrorFallback({
	error,
	label = 'Error',
	fetchFailed = 'Something went wrong',
}: TErrorFallback) {
	return <Message label={label} content={error?.message ?? fetchFailed} />
}
