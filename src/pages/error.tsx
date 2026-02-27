'use client'

import type { TErrorProps } from '@/types/error'

import { Message } from '../components/Message'

type TErrorPage = TErrorProps & {
	label: string
	fetchFailed: string
}

export function ErrorPage({ error, label, fetchFailed }: TErrorPage) {
	return <Message {...{ label, content: error.message ?? fetchFailed }} />
}
