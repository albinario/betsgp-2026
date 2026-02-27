import { db } from '@/lib/db'

export function getRidersPoints() {
	return db
		.selectFrom('riders')
		.innerJoin('riderResults', 'riderResults.riderId', 'riders.id')
		.select((eb) => [
			'riders.id',
			'riders.name',
			eb.fn.sum<number>('riderResults.points').as('totalPoints'),
		])
		.groupBy(['riders.id', 'riders.name'])
		.orderBy('totalPoints', 'desc')
		.execute()
}
