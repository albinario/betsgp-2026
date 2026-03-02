import type { Metadata } from 'next'

import { metaData, noData } from './constants'
import { getGps } from './data'

export const metadata: Metadata = metaData

export default async function GpsPage() {
	const gps = await getGps()

	return (
		<>
			<h1>{metaData.title}</h1>

			{gps?.length <= 0 ? (
				<p>{noData}</p>
			) : (
				<pre>
					<code>{JSON.stringify(gps, null, 2)}</code>
				</pre>
			)}
		</>
	)
}
