import { noData } from './constants'
import { getRidersPoints } from './data'

export default async function RidersPointsPage() {
	const ridersPoints = await getRidersPoints()

	if (!ridersPoints?.length) throw new Error(noData)

	return (
		<main>
			<h1>Rider Points</h1>

			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>totalPoints</th>
					</tr>
				</thead>

				<tbody>
					{ridersPoints.map((row) => (
						<tr key={String(row.id)}>
							<td>{row.name}</td>
							<td>{row.totalPoints}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	)
}
